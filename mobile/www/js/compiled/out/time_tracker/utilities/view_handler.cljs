;All the functionality and vars for handling the different views of the apps
(ns time_tracker.utilities.view_handler
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce active-view (atom
  {
    :add-new false
    :tutorial false
    :calendar false
    :reports false
    :day false}))

(defn change-view
  "Changes the by merging in the passed view i.e {add-new 'True'}"
  [view]
  (swap! active-view conj view))
