(ns time-tracker.core
    (:require [reagent.core :as reagent :refer [atom]]
               [time_tracker.components.Main :as Main]
               ["localforage" :as localforage]))

(enable-console-print!)

(defn get-project-dates [project-map]
  (.then (js/Promise.all (map #(.then (.getItem localforage %) (fn [v] [% v])) project-map)) (partial into {})))

(.config localforage)
(.then (.getItem localforage "projects") (fn [value] ;Then promise resolution - handle setup after we pull back the projects
  (.then (get-project-dates value) (fn [project-dates]
  (defonce app-state (atom
                      {:projects value ;Holds the name of all the projects
                       :timerActive false ;Bool for timer state
                       :timerStart false ;Int start time for the currently running timer - false when no timer is running
                       :timerProject false ;Name of the project currently being tracker - false when no timer is running
                       :timerRunning false ;Shows whether timer is active - needed to properly clear interval
                       :projectDates project-dates ; Holds a mapping of the dates/times for all projects
                       :activeDay false ; Holds the currently selected day from the calendar - False when no date selected
                      }))

  (reagent/render-component [Main/render app-state]
                            (. js/document (getElementById "app")))))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
