(ns time-tracker.components.New
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            [time_tracker.utilities.state :refer [update-project-state]]
            [time-tracker.components.toast :as fancy-alert]
            ["localforage" :as localforage]))

(defn project-exists? [project currentStorage]
  "returns bool whether project exists"
  (if (some #{(.trim project)} currentStorage)
    true
    false))

(defn call-success-toast []
  (fancy-alert/fancy-alert
    {:text "Project Added" :hideAfterN true
     :styles {:background "#4aa651;" :border "1px solid #4aa651;" :z-index "999;" :color "white;"}}))

(defn call-fail-toast [message]
  (fancy-alert/fancy-alert
    {:text message :hideAfterN true
     :styles {:background "#cc4a56;" :border "1px solid #cc4a56;" :z-index "999;" :color "white;"}}))

(defn add-project [name app-state]
  (.then (.getItem localforage "projects") (fn [value]  ; then for getItem promise here
    (let [currentStorage (js->clj value)]
      (if-not (project-exists? @name currentStorage) ; Don't let an item that is already set through
        (if  (> (.-length (.trim @name)) 0)
          (do
            (.then (.setItem localforage "projects" (clj->js (conj currentStorage (.trim @name))))(fn [value]
              (update-project-state app-state)))
            (call-success-toast) ; TODO we need to create a better looking alert notifiction here
            (reset! name "")
            (view_handler/change-view {:add-new false}))
          (call-fail-toast "Project Name Cannot Be Empty"))
        (call-fail-toast "Project Already Exists"))))))

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
