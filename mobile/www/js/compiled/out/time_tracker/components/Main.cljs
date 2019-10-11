(ns time-tracker.components.Main
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.components.Header :as Header]
            [time_tracker.components.Projects :as Projects]
            [time_tracker.components.New :as New]
            [time_tracker.components.Day_view :as Day_view]
            [time_tracker.components.Project_view :as Project_view]
            [time_tracker.components.Calendar :as Calendar]
            [time_tracker.components.Reports :as Reports]
            [time_tracker.components.Timer :as Timer]))

(defn render [app-state]
  [:div.Main
    [Header/render]
    [Reports/render app-state]
    [Timer/render app-state]
    [Day_view/render app-state]
    [Project_view/render app-state]
    [New/render app-state]
    [Calendar/render app-state]
    [:div.Project-wrapper
      [Projects/render app-state]]])
