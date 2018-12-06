; Functions for format dates
(ns time_tracker.utilities.date_formatter
  (:require [reagent.core :as reagent :refer [atom]]))



(defn format-time-taken [start end]
  "Returns a date in the following format `25 Minutes and 32 Seconds`"
  (let [time (atom {:hours 0 :minutes 0 :total (/ (- end start) 1000)})]
  (if (> (:total @time) 3599) ; handles hours
    (do
      (swap! time conj {:hours (str (Math/floor (/ (:total @time) 3600)) " Hours")})
      (swap! time conj {:total (mod (:total @time) 3600)})))
  (if (> (:total @time) 59) ; handles minutes
    (do
      (swap! time conj {:minutes (str (Math/floor (/ (:total @time) 60)) " Minutes")})
      (swap! time conj {:total (mod (:total @time) 60)})))
      (str (:hours @time) " and " (:minutes @time) " and " (:total @time) " seconds")))
