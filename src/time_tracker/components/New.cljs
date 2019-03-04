(ns time-tracker.components.New
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            [time_tracker.utilities.state :refer [update-project-state]]
            ["localforage" :as localforage]))

(defn add-project [name app-state]
  (.then (.getItem localforage "projects") (fn [value]  ; then for getItem promise here
    (let [currentStorage (js->clj value)]
      (if-not (some #{(.trim @name)} currentStorage) ; Don't let an item that is already set through
        (if  (> (.-length (.trim @name)) 0)
          (do
            (.then (.setItem localforage "projects" (clj->js (conj currentStorage (.trim @name))))(fn [value]
              (update-project-state app-state)))
            (js/alert "Project Added!") ; TODO we need to create a better looking alert notifiction here
            (reset! name "")
            (view_handler/change-view {:add-new false}))
          (js/alert "Project Name Cannot Be Empty"))
        (js/alert "Project Already Exists"))))))

(defn render [app-state]
  (let [project-name (atom "")]
  (fn []
    [:div.New {:class (:add-new @view_handler/active-view)}
      [:div.New-header
        [:div [:p {:on-click #(view_handler/change-view {:add-new false})} [:i.fas.fa-long-arrow-alt-left]]]
        [:div [:h3 "Add New Project"]]
        [:div]]
      [:div.New-body
        [:input {:type "text"
               :value @project-name
               :placeholder "Project Name"
               :on-change #(reset! project-name  (-> % .-target .-value))}]
        [:button {:on-click #(add-project project-name app-state)} "Add New Project"]]])))
