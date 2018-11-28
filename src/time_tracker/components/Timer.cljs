(ns time-tracker.components.Timer
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]))

; TODO we need to actually save the elapsed time to the database
(defn end-timer [app-state]
  (swap! app-state conj {:timerActive false
                         :timerStart false
                         :timerProject false}))

(defn render [app-state]
  (fn []
    [:div.Timer {:class (:timerActive @app-state)}
      [:p (:timerProject @app-state)]
      [:p (str "Started At: " (:timerStart @app-state))]
      [:p {:on-click #(end-timer app-state)} "End Timer"]]))
