(ns time-tracker.components.Day_view
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            ["localforage" :as localforage]))

(defn get-current-days-enteries
  [app-state]
  "Grabs the current time eneries for the given day"
  (if (:activeDate @app-state)
    (let [projects (:projectDates @app-state)
          currentDay (clojure.string/replace (:activeDate @app-state) #"/" "")]
          (println projects)
          (println currentDay)
          (let [returnDates (atom [])]
            (doseq [date [projects]]))

  )))
(defn render [app-state]
    (fn []
      (let [currentEnteries (get-current-days-enteries app-state)]
      [:div.Day-view {:class (:day @view_handler/active-view)}
      [:div.Day-view-header
        [:div [:p {:on-click #(view_handler/change-view {:day false})} "Back"]]
        [:div [:h3 (:activeDate @app-state)]]
        [:div]]
        [:p (:activeDate @app-state)]])))
