(ns time-tracker.components.Header
  (:require [reagent.core :as reagent :refer [atom]]))

(defn render []
  [:div.Header
    [:div [:p "Calendar"]]
    [:div [:p "Time Tracker"]]
    [:div [:p "Settings"]]])
