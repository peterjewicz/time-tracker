(ns time-tracker.components.Timer
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            ["localforage" :as localforage]
            ["moment" :as moment]))

; format: project {:112818 [start end start end]}
; Date is formatted weird as / throws key error for maps
(defn end-timer [app-state]
  (let [project (:timerProject @app-state)
        start (:timerStart @app-state)
        end (.getTime (js/Date.))]
        (.then (.getItem localforage project) (fn [value]
          (let [currentStorage (js->clj value :keywordize-keys true)
                currentValue (conj ((keyword (.format (moment) "MMDDYYYY")) currentStorage) start end)]
                (.setItem localforage project (clj->js
                                              (assoc currentStorage (keyword (.format (moment) "MMDDYYYY")) currentValue))))))
  (swap! app-state conj {:timerActive false
                         :timerStart false
                         :timerProject false})))

(defn render [app-state]
  (fn []
    [:div.Timer {:class (:timerActive @app-state)}
      [:p (:timerProject @app-state)]
      [:p (str "Started At: " (:timerStart @app-state))]
      [:p {:on-click #(end-timer app-state)} "End Timer"]]))
