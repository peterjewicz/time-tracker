(ns time-tracker.components.Calendar
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            ["moment" :as moment]))

;TODO make returnDates an atom
(defn get-visible-dates [projects]
  "creates a list of discrete dates to highlit on the calendar"
      (let [returnDates (atom [])]
        (doseq [date [projects]]
          (let [currentKey (first (keys (js->clj date )))
                mappedValue (into (js->clj date ) {})
                dates (keys (get mappedValue currentKey))]
                  (loop [i 0
                    formattedDates []]
                      (if (= i (count dates))
                        formattedDates
                        (do
                          (swap! returnDates conj (nth dates i))
                          (recur (inc i) (conj formattedDates (nth dates i))))))))
      @returnDates))


(defn get-current-month-days [currentMonth]
  (.daysInMonth (moment currentMonth "MM") "YYYY-MM"))

(defn get-day-display [offsetAmount numberOfDays currentCount]
  "Determines what to display for a particular table cell"
  (if (<= currentCount offsetAmount)
    ""
    (if (> currentCount (+ offsetAmount numberOfDays))
    ""
    (- currentCount offsetAmount))))

(defn generate-table-row [offsetAmount numberOfDays i currentMonth currentYear date-values]
  "Generates the table HTML"
  (loop [x 1
         row [:tr]]
        (if (= x 8)
          row
          (do
              (if ( some #{(str currentMonth "/" (- (+ i x) offsetAmount) "/" currentYear)} date-values)
              (recur (inc x) (conj row [:td.active (get-day-display offsetAmount numberOfDays (+ i x))]))
              (recur (inc x) (conj row [:td (get-day-display offsetAmount numberOfDays (+ i x))]))))
          )))

(defn generate-table-html [numberOfDays currentMonth currentYear date-values]
  (let [offsetAmount (.day (.startOf (moment (str currentMonth "/" currentYear) "MM/YYYY") "month"))
        loopTotal (+ offsetAmount numberOfDays)]
    (loop [i 0
          html [:tbody]]
          (if (>= i loopTotal)
            html ; Our end condition and output
          (recur (+ i 7) (conj html (generate-table-row offsetAmount numberOfDays i currentMonth currentYear date-values)))))))

(defn increment-year [currentYear]
  (inc (js/parseInt currentYear)))

(defn deincrement-year [currentYear]
  (- (js/parseInt currentYear) 1))

(defn increment-month [current currentYear monthDays]
  (if (= current 12)
    (do
      (reset! monthDays (get-current-month-days 1))
      (swap! currentYear (fn [current] (increment-year current)))
      1)
    (do
      (reset! monthDays (get-current-month-days (inc (js/parseInt current))))
      (inc (js/parseInt current)))))

(defn deincrement-month [current currentYear monthDays]
  (if (= current 1)
    (do
      (reset! monthDays (get-current-month-days 12))
      (swap! currentYear (fn [current] (deincrement-year current)))
      12)
    (do
      (reset! monthDays (get-current-month-days (- (js/parseInt current) 1)))
      (- (js/parseInt current) 1))))


(defn render [app-state]
  ; (get-visible-dates (:projectDates @app-state))
  (print (get-visible-dates (:projectDates @app-state)))
  (let [currentMonth (atom (.format (moment) "MM"))
        currentYear (atom (.format (moment) "YYYY"))
        monthDays (atom (get-current-month-days @currentMonth))]
    (fn []
      [:div.Calendar {:class (:calendar @view_handler/active-view)}
        [:div.Calendar-header
          [:div [:p {:on-click #(view_handler/change-view {:calendar false})} "Cancel"]]
          [:div [:h3 "Calendar"]]
          [:div]]
        [:div.Calendar-body
          [:div
            [:div.Calendar-Header
              [:p.Calendar-arrow {:on-click #(swap! currentMonth (fn [current currentYear] (deincrement-month current currentYear monthDays)) currentYear monthDays)} "<-"]
              [:p.Calendar-Title (str (.format (moment @currentMonth "MM") "MMMM") " " @currentYear)]
              [:p.Calendar-arrow {:on-click #(swap! currentMonth (fn [current currentYear] (increment-month current currentYear monthDays)) currentYear monthDays)} "->"]]
            [:table.Calendar-wrapper
              [:tr
                [:th "Sun"]
                [:th "Mon"]
                [:th "Tue"]
                [:th "Wed"]
                [:th "Thur"]
                [:th "Fri"]
                [:th "Sat"]]
                (generate-table-html @monthDays @currentMonth @currentYear {})]]]])))
