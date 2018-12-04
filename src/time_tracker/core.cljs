(ns time-tracker.core
    (:require [reagent.core :as reagent :refer [atom]]
               [time_tracker.components.Main :as Main]
               ["localforage" :as localforage]))

(enable-console-print!)

; TODO actually get and conj the value
; (defn get-project-dates [project-map]
;   "Handles getting all the times/dates for project"
;   (loop [i 0
;         project-dates {}]
;     (if (= i (count project-map))
;       project-dates
;       (.then (.getItem localforage (nth project-map i)) (fn [promiseVal]
;           (recur (inc i) (conj project-dates {(key (nth project-map i)) promiseVale})))))))
(defn get-project-dates [project-map]
  ; Define a local recursive function called "rec" (or whatever)
  (letfn [(rec [i project-dates]
            (if (= i (count project-map))
              project-dates
              (.then (.getItem localforage (nth project-map i))
                     (fn [promiseVal]
                       (rec
                         (inc i)
                         (conj project-dates {(keyword (nth project-map i)) promiseVal}))))))]

    ; Then start the recursion off
    (rec 0 {})))

(.config localforage)
(.then (.getItem localforage "projects") (fn [value] ;Then promise resolution - handle setup after we pull back the projects
  ; (js/console.log (get-project-dates value))
  (defonce app-state (atom
                      {:projects value ;Holds the name of all the projects
                       :timerActive false ;Bool for timer state
                       :timerStart false ;Int start time for the currently running timer - false when no timer is running
                       :timerProject false ;Name of the project currently being tracker - false when no timer is running
                       :timerRunning false ;Shows whether timer is active - needed to properly clear interval
                       :projectDates (get-project-dates value)
                      }))
  (reagent/render-component [Main/render app-state]
                            (. js/document (getElementById "app")))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
