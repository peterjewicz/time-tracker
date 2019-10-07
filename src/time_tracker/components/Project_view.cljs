(ns time-tracker.components.Project_view
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            [time_tracker.utilities.date_formatter :as date_formatter]
            ["localforage" :as localforage]
            ["moment" :as moment]))


(defn generate-time-values-for-project [timestamps]
  (let [totalSeconds (date_formatter/get-total-seconds timestamps)]
    [:p.Project-view-dateTimeItem (date_formatter/format-time-taken 0 (* 1000 totalSeconds))])) ; multiply by a thousand as I think it expects miliseconds


(defn render [app-state]
    (fn []
      (let [currentProjectName (:projectViewProjct @app-state)
            projectDates (js->clj (get (:projectDates @app-state) currentProjectName))]
        [:div.Project-view {:class (:project-view @view_handler/active-view)}
        [:div.Project-view-header
          [:div [:p {:on-click #(view_handler/change-view {:project-view false})} [:i.fas.fa-long-arrow-alt-left]]]
          [:div [:h3 currentProjectName]]
          [:div]]
        [:div.Project-view-body
          (for [date projectDates]
            [:div.Project-view-dateWrapper
              [:p (str (.format (moment (first date) "MMDDYYYY") "LL") " : ")]
              (generate-time-values-for-project (second date))])]])))
