(ns time-tracker.core
    (:require [reagent.core :as reagent :refer [atom]]
               [time_tracker.components.Main :as Main]))

(enable-console-print!)

(println "This text is printed from src/time-tracker/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(reagent/render-component [Main/render]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
