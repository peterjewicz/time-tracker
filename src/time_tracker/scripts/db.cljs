(ns time_tracker.scripts.db
  (:require ["localforage" :as localforage]))


; get the correct project
; find the day that the time entry is saved in
; find the start date provided in the array of times
; remove n && n + 1 to remove start and end times
; update store and ui


(defn get-by-project [project]
  (.getItem localforage project))


(defn remove-date-time [project day start]
  ; (print project)
  ; (print day)
  ; (print start)

  (.then (get-by-project project) (fn [result]
    (let [currentProject (js->clj result)
          projectDates (get currentProject day)
          indexToRemove (.indexOf projectDates start)]
      (print projectDates)
      (print indexToRemove)

      (print (filter (fn [item index]
        (print index)
        (if (or (= index indexToRemove) (= (+ 1 index indexToRemove)))
          false
          true)) projectDates))

)))
)