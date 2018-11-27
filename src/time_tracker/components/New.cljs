(ns time-tracker.components.New
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]))

(defn add-project [name]
  (let [currentStorage (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) "projects")))]
    (if-not (some #{@name} currentStorage)
      (do
        (.setItem
          (.-localStorage js/window) "projects"
          (.stringify js/JSON (clj->js(conj currentStorage @name))))
        (js/alert "Project Added!")
        (reset! name "")
        (view_handler/change-view {:add-new false}))
      (js/alert "Project Already Exists"))))

(defn render []
  (let [project-name (atom "")]
  (fn []
    [:div.New {:class (:add-new @view_handler/active-view)}
      [:div.New-header
        [:div [:p {:on-click #(view_handler/change-view {:add-new false})} "Cancel"]]
        [:div [:h3 "Add New Project"]]
        [:div]]
      [:div.New-body
        [:input {:type "text"
               :value @project-name
               :placeholder "Project Name"
               :on-change #(reset! project-name  (-> % .-target .-value))}]
        [:button {:on-click #(add-project project-name)} "Add New Project"]]])))
