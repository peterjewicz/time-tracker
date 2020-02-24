(ns time_tracker.scripts.db
  (:require ["localforage" :as localforage]
            [time_tracker.utilities.state :refer [update-project-dates]]))


(defn get-by-project [project]
  (.getItem localforage project))

; we pass the app state since I didn't arch this correctly and now I ahve to pass the state everywhere
; TODO go back and fix this with the new state getters to allow it to be easier
(defn remove-date-time [project day start app-state]
  (.then (get-by-project project) (fn [result]
    (let [currentProject (js->clj result)
          projectDates (get currentProject day)
          indexToRemove (.indexOf projectDates start)]


      (.then (.setItem localforage project (clj->js
             (conj currentProject {(keyword day) (keep-indexed (fn [index item]
               (if (or (= index indexToRemove) (= (+ 1 indexToRemove) index))
                 nil
                 item)) projectDates)})))
              (fn [value]
                (update-project-dates app-state)))))))