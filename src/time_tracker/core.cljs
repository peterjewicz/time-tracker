(ns time-tracker.core
    (:require [reagent.core :as reagent :refer [atom]]
               [time_tracker.components.Main :as Main]
               ["localforage" :as localforage]))

(enable-console-print!)

(.config localforage)
(.then (.getItem localforage "projects") (fn [value] ;Then promise resolution - handle setup after we pull back the projects
  (defonce app-state (atom
                      {:projects value ;Holds the name of all the projects
                       :timerActive false ;Bool for timer state
                       :timerStart false ;Int start time for the currently running timer - false when no timer is running
                       :timerProject false ;Name of the project currently being tracker - false when no timer is running
                      }))
  (reagent/render-component [Main/render app-state]
                            (. js/document (getElementById "app")))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
