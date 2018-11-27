(ns time_tracker.components.Projects
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]))

(defn add-project [name])

(defn render []
  (fn []
    [:div.Projects
      [:p "Projects go here"]
      [:p {:on-click #(view_handler/change-view {:add-new "active"})} "New Project   +"]]))
