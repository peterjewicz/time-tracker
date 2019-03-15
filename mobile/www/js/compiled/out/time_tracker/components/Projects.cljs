(ns time_tracker.components.Projects
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]))

(defn start-timer [app-state project]
  (if (:timerActive @app-state)
    (js/alert "A Timer Is Already Running")
    (swap! app-state conj {:timerActive "active"
                           :timerStart (Math/floor (/ (.getTime (js/Date.)) 1000))
                           :timerProject project
                           :timerRunning true})))

(defn render [app-state]
  (fn []
    [:div.Projects
      (doall (for [project (:projects @app-state)]
        [:div.Projectitem {:key project}
          [:h3 project]
          ; [:button "View Enteries"]
          [:button {:on-click #(start-timer app-state project)} "Start Timer"]]))
      [:div.newProjectWrapper {:on-click #(view_handler/change-view {:add-new "active"})}
        [:span "New Project "][:span.newProjectButton " +"]]]))