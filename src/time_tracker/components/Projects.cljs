(ns time_tracker.components.Projects
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]))

(defn start-timer [app-state project]
  (swap! app-state conj {:timerActive "active"
                         :timerStart (Math/floor (/ (.getTime (js/Date.)) 1000))
                         :timerProject project
                         :timerRunning true}))

(defn render [app-state]
  (fn []
    [:div.Projects
      (doall (for [project (:projects @app-state)]
        [:div.Projectitem {:key project}
          [:p project]
          [:p {:on-click #(start-timer app-state project)} "Timer"]]))
      [:p {:on-click #(view_handler/change-view {:add-new "active"})} "New Project   +"]]))
