(ns time-tracker.components.Main
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.components.Header :as Header]
            [time_tracker.components.Projects :as Projects]
            [time_tracker.components.New :as New]))

(defn render []
  [:div.Main
    [Header/render]
    [New/render]
    [:div.Project-wrapper
      [Projects/render]]
    [:h1 "Hello There"]])
