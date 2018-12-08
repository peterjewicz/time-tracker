(ns time-tracker.components.Reports
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            ["localforage" :as localforage]))


(defn render []
  (let [project-name (atom "")]
  (fn []
    [:div.Reports {:class (:reports @view_handler/active-view)}
      [:div.Reports-header
        [:div [:p {:on-click #(view_handler/change-view {:reports false})} "Back"]]
        [:div [:h3 "Reports"]]
        [:div]]
      [:div.Reports-body
        [:p "Reporting"]]])))
