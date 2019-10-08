(ns time_tracker.utilities.timerHelpers
  (:require [reagent.core :as reagent :refer [atom]]
            ["localforage" :as localforage]))

(defn set-timer-active [value callback]
  "this saves a reference to the current timer in localstorage so that we can come back to it
   in the event of an app crash or if the OS kills it"
  (.then (.setItem localforage "simpletimer-timer" (clj->js value)) (callback)))

(defn set-timer-inactive []
  "kills our timer on a normal close"
  (.setItem localforage "simpletimer-timer" nil))

(defn get-timer-active [callback]
  "checks if the timer is currenty active which should only happen after a force close"
  (.then (.getItem localforage "simpletimer-timer") (fn [value] (print value) (callback value))))