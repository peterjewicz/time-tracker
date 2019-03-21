(ns time-tracker.components.Day_view
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            [time_tracker.utilities.date_formatter :as date_formatter]
            ["localforage" :as localforage]
            ["moment" :as moment]))

(defn get-current-days-enteries
  [app-state]
  "Grabs the current time entries for the given day"
  (if (:activeDate @app-state)
    (let [projects (:projectDates @app-state)
          currentDay (clojure.string/replace (:activeDate @app-state) #"/" "")]
          (let [returnDates (atom {})
                listOfProjects (into (js->clj projects) {})] ; set and atom so we can modify in doseq - might be better to use a for?
            (doseq [[date] listOfProjects] ; itterate through the keys (project names)
              (let [currentDates (get listOfProjects date)]
                (if (get currentDates currentDay) ; If that project has a vector key of the selected date
                  (swap! returnDates conj {(keyword date) (get currentDates currentDay)}))))
                  @returnDates))))

; Returns Format 25 Minutes and 32 Seconds from 1:10:25 to 1:35:57
(defn get-formatted-date-entry
  [start end]
  "Handles generating the HTML for a time entry"
  (let [start (* start 1000)
        end (* end 1000)
        startText (.format(moment start) "LTS")
        endText (.format(moment end) "LTS")]
    (str (date_formatter/format-time-taken start end) " From " startText " to " endText)))

(defn render [app-state]
    (fn []
      (let [currentEnteries (get-current-days-enteries app-state)]
        [:div.Day-view {:class (:day @view_handler/active-view)}
        [:div.Day-view-header
          [:div [:p {:on-click #(view_handler/change-view {:day false})} [:i.fas.fa-long-arrow-alt-left]]]
          [:div [:h3 (:activeDate @app-state)]]
          [:div]]
        [:div.Day-view-body
          (doall (for [entry currentEnteries]
            (for [dates entry]
              (if (= (type dates) clojure.core/Keyword)
              (do [:h2 {:key dates} dates])
              (do
                (loop [i 0
                       html [:div {:key (str dates "-" i)}]]
                  (if (= i (count dates))
                    html
                    (do
                      (let [seconds (- (nth dates (inc i)) (nth dates i))]
                        (recur (+ 2 i) (conj html [:p (get-formatted-date-entry (nth dates i) (nth dates (inc i)))]))))))
                )))))]])))
