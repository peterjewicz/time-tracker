; Functions for format dates
(ns time_tracker.utilities.date_formatter
  (:require [reagent.core :as reagent :refer [atom]]))

(defn generate-time-string [time string]
  "Generates a string based on time taken knocking off 0 amounts"
  (if (= 0 time)
    ""
    (str time string)))

(defn format-time-taken [start end]
  "Returns a date in the following format `25 Minutes and 32 Seconds`"
  (let [time (atom {:hours 0 :minutes 0 :total (/ (- end start) 1000)})]
  (if (> (:total @time) 3599) ; handles hours
    (do
      (swap! time conj {:hours (str (Math/floor (/ (:total @time) 3600)))})
      (swap! time conj {:total (mod (:total @time) 3600)})))
  (if (> (:total @time) 59) ; handles minutes
    (do
      (swap! time conj {:minutes (str (Math/floor (/ (:total @time) 60)))})
      (swap! time conj {:total (mod (:total @time) 60)})))
      (str (generate-time-string (:hours @time) " Hour(s) ")
           (generate-time-string (:minutes @time) " Minute(s) ")
           (generate-time-string (:total @time) " Second(s)"))))
