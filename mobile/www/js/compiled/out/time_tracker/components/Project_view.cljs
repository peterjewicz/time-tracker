(ns time-tracker.components.Project_view
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            [time_tracker.utilities.date_formatter :as date_formatter]
            [time_tracker.scripts.db :as db]
            ["localforage" :as localforage]
            ["moment" :as moment]))


(defn remove-time-entry [project day start app-state]
  (db/remove-date-time project day start app-state))

(defn generate-time-values-for-project [timestamps projectName currentDate app-state]
  [:div
    (let [totalSeconds (date_formatter/get-total-seconds timestamps)]
      [:p.Project-view-dateTimeItem (str "Total: "(date_formatter/format-time-taken 0 (* 1000 totalSeconds)))]) ; multiply by a thousand as I think it expects miliseconds
      [:div.Project-view-entry-details-dateWrapper
        (loop [index 0
               timeDisplay ()]
        (if (>= index (count timestamps))
          (reverse timeDisplay)
          (recur (+ index 2)  (conj timeDisplay
            [:div.Project-view-entry-details {:key (nth timestamps index)}
              [:p.Project-view-entry (date_formatter/format-time-taken (* 1000 (nth timestamps index)) (* 1000 (nth timestamps (+ index 1))))]
              [:p.Project-view-time-range (str "From: " (.format (moment (* 1000 (nth timestamps index))) "LTS") " To: " (.format (moment (* 1000(nth timestamps (+ index 1)))) "LTS") )]
              [:p.Project-view-remove-entry {:on-click #(remove-time-entry projectName currentDate (nth timestamps index) app-state)} "X"]]))))]])

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
          (doall
            (for [date projectDates]
              [:div.Project-view-dateWrapper {:key (first date)}
                [:p (str (.format (moment (first date) "MMDDYYYY") "LL") " : ")]
                (generate-time-values-for-project (second date) currentProjectName (first date) app-state)]))]])))
