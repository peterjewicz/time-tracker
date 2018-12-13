(ns time-tracker.components.Reports
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            [cljs-pikaday.reagent :as pikaday]
            ["localforage" :as localforage]))

(defonce start-date (reagent/atom (js/Date.)))
(defonce end-date (reagent/atom (js/Date.)))

(defn download-report []
  "Generates the PDF Report Of date/times"
  (let [doc (js/jsPDF.)]
    (.text doc "Hello world!", 10, 10)
    (.save doc  "a4.pdf")))

(defn check-time-after [time minTime]
  "Checks whether a date/time provided is greater than another"
  (if (> time minTime)
    true
    false))

(defn check-time-before [time maxTime]
  "Checks whether a date/time provided is less than another"
  (if (< time maxTime)
    true
    false))


(defn generate-report [projects]
  "Compiles all times between the two dates for all projects"
  (doseq [date projects]
    (let [projectName (first (js->clj date))
          dateValues (second (js->clj date :keywordize-keys true))
          keys (keys dateValues)]
          (loop [i 0]
            (if (= i (count keys))
              ""
              (do
                (print (get dateValues (nth keys i)))
                (recur (inc i)))))
    )
  ))

(defn render [app-state]
  (let [project-name (atom "")]
  (generate-report (:projectDates @app-state))
  (fn []
    [:div.Reports {:class (:reports @view_handler/active-view)}
      [:div.Reports-header
        [:div [:p {:on-click #(view_handler/change-view {:reports false})} [:i.fas.fa-long-arrow-alt-left]]]
        [:div [:h3 "Reports"]]
        [:div]]
      [:div.Reports-body
        [:p "Generate New Report"]
        [:label "Start Date"]
        [pikaday/date-selector {:date-atom start-date}]
        [:br]
        [:label "End Date"]
        [pikaday/date-selector. {:date-atom end-date}]
        [:button {:on-click #(generate-report (:projectDates @app-state))} "Generate"]]])))
