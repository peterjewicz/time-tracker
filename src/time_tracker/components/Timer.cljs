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
                currentValue (conj ((keyword (.format (moment) "MMDDYYYY")) currentStorage) start end)]
                (.setItem localforage project (clj->js
                                              (assoc currentStorage (keyword (.format (moment) "MMDDYYYY")) currentValue))))))
  (js/clearInterval @interval)
  (reset! interval nil)
  (swap! app-state conj {:timerActive false
                         :timerStart false
                         :timerProject false
                         :timerRunning false})
  ))
; READ THIS _______ THINK THE ISSUE IS THAT IT KEEPS SETTING MORE AND MORE INTERVALS
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
        [:p (str "Started At: " (:timerStart @app-state))]
        [:p (str "Running For: " @currentTime)]
        [:p {:on-click #(end-timer app-state interval)} "End Timer"]])))
