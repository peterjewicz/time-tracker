(ns time-tracker.components.Header
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            ["moment" :as moment]))

(defn render []
  [:div.Header
    [:div [:p {:on-click #(view_handler/change-view {:calendar "active"})} "Calendar"]]
    [:div [:p (.format (moment) "dddd, MMMM D")]]
    [:div [:p {:on-click #(view_handler/change-view {:reports "active"})} "Reporting"]]])
