(ns time-tracker.components.Calendar
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]))


(defn render []
  (fn []
    [:div.Calendar {:class (:calendar @view_handler/active-view)}
      [:div.Calendar-header
        [:div [:p {:on-click #(view_handler/change-view {:calendar false})} "Cancel"]]
        [:div [:h3 "Calendar"]]
        [:div]]
      [:div.Calendar-body
        [:p "calendar"]]]))
