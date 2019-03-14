(ns time_tracker.utilities.state
  (:require [reagent.core :as reagent :refer [atom]]
            ["localforage" :as localforage]))

(defn get-project-dates [project-map]
  (.then (js/Promise.all (map #(.then (.getItem localforage %) (fn [v] [% v])) project-map)) (partial into {})))

(defn update-project-dates [app-state]
  (.then (.getItem localforage "projects") (fn [value] ;Then promise resolution - handle setup after we pull back the projects
    (.then (get-project-dates value) (fn [project-dates]
      (swap! app-state merge {:projectDates project-dates}))))))

(defn update-project-state [app-state]
  (.then (.getItem localforage "projects") (fn [value] ;Then promise resolution - handle setup after we pull back the projects
    (.then (get-project-dates value) (fn [project-dates]
      (swap! app-state merge {:projects value}))))))
