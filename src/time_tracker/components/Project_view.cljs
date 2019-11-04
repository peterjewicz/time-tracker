(ns time-tracker.components.Project_view
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            [time_tracker.utilities.date_formatter :as date_formatter]
            ["localforage" :as localforage]
            ["moment" :as moment]))

; I don't think we save an ID on the time enteries, so our best best is to look
; for an entry that satisfies both the start and end time - not sure
; Should only ever remove one - need to think about how to do this
; since you can only ever run a single timer this should never be a problem
; until we add manual times
(defn remove-time-entry [project start end]
  (.then (.getItem localforage project) (fn [value]
    (let [currentStorate (js->clj value :keywordize-keys true)]
      (.then (.setItem localforage project
        (clj->js (filter (fn [timeEntry] ; TODO filter will remove all - need to stop on one so mayde a doseq?
          (if (and (= start (first timeEntry)) (= end (second timeEntry)))
            false ; if the both match we return false - and remove it from our collection
            true))))) (fn [finalResult]
              ;TODO we handle updating the DOM after a removal
          ))))))

(defn generate-time-values-for-project [timestamps]
  [:div
    (let [totalSeconds (date_formatter/get-total-seconds timestamps)]
      [:p.Project-view-dateTimeItem (str "Total: "(date_formatter/format-time-taken 0 (* 1000 totalSeconds)))]) ; multiply by a thousand as I think it expects miliseconds
      [:div.Project-view-entry-details-dateWrapper
        (loop [index 0
               timeDisplay ()]
        (if (>= index (count timestamps))
          (reverse timeDisplay)
          (recur (+ index 2)  (conj timeDisplay
            [:div.Project-view-entry-details
              [:p.Project-view-entry (date_formatter/format-time-taken (* 1000 (nth timestamps index)) (* 1000 (nth timestamps (+ index 1))))]
              [:p.Project-view-time-range (str "From: " (nth timestamps index) " To: " (nth timestamps (+ index 1)))]
              [:p.Project-view-remove-entry {:on-click #(js/console.log "Remove")} "X"]]))))]])

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
