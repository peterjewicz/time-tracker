;All the functionality and vars for handling the different views of the apps
(ns time_tracker.utilities.view_handler
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce active-view (atom
  {
    :add-new false
    :tutorial false}))

; TODO get rid of that reset - we might not need it depending how we set up the rest of the app
(defn change-view
  "Changes the by merging in the passed view i.e {add-new 'True'}"
  [view]
  (reset! active-view {
    :add-new false
    :tutorial false})
  (swap! active-view conj view))
