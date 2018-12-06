(ns time-tracker.components.Timer
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            ["localforage" :as localforage]
            ["moment" :as moment]))

; format: project {:112818 [start end start end]}
; Date is formatted weird as / throws key error for maps
(defn end-timer [app-state interval]
  (let [project (:timerProject @app-state)
        start (:timerStart @app-state)
        end (Math/floor (/ (.getTime (js/Date.)) 1000))]
        (.then (.getItem localforage project) (fn [value]
          (let [currentStorage (js->clj value :keywordize-keys true)
                currentValue (concat ((keyword (.format (moment) "MMDDYYYY")) currentStorage) [start end])] ; Concat here to prevent issues with out of order on first insertion
                (.setItem localforage project (clj->js
                                              (assoc currentStorage (keyword (.format (moment) "MMDDYYYY")) currentValue))))))
  (js/clearInterval @interval)
  (reset! interval nil)
  (swap! app-state conj {:timerActive false
                         :timerStart false
                         :timerProject false
                         :timerRunning false})))

;TODO if we need this again move it to utilities
(defn format-time-number
  "Formats a number to have a leading 0 if < 10"
  [time]
  (if (< time 10)
    (str "0" time)
    time))


(defn format-time
  "Takes the current time in seconds and formats it better"
  [seconds]
  (let [time (atom {:hours 0 :minutes 0 :total seconds})]
    (if (> (:total @time) 3599) ; handles hours
      (do
        (swap! time conj {:hours (Math/floor (/ (:total @time) 3600))})
        (swap! time conj {:total (mod (:total @time) 3600)})))
    (if (> (:total @time) 59) ; handles minutes
      (do
        (swap! time conj {:minutes (Math/floor (/ (:total @time) 60))})
        (swap! time conj {:total (mod (:total @time) 60)})))
    (str (format-time-number (:hours @time))
          ":" (format-time-number (:minutes @time))
          ":" (format-time-number (:total @time)))))

(defn render [app-state]
  (let [interval (atom nil)
        currentTime (atom 0)]
    (fn []
      (if (and (:timerRunning @app-state) (= @interval nil))
        (do
          (reset! interval (js/setInterval
            #(reset! currentTime (- (Math/floor (/ (.getTime (js/Date.)) 1000)) (:timerStart @app-state)))
            1000))))
      [:div.Timer {:class (:timerActive @app-state)}
        [:p (:timerProject @app-state)]
        [:p (str "Started At: " (.format(moment (* (:timerStart @app-state) 1000)) "LTS"))]
        [:p (str "Running For: " (format-time @currentTime))]
        [:p {:on-click #(end-timer app-state interval)} "End Timer"]])))
