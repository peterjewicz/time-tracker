(ns time-tracker.components.Reports
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            [cljs-pikaday.reagent :as pikaday]
            ["localforage" :as localforage]
            ["moment" :as moment]))

(defonce start-date (reagent/atom (js/Date.)))
(defonce end-date (reagent/atom (js/Date.)))

(defn download-report []
  "Generates the PDF Report Of date/times"
  (let [doc (js/jsPDF.)]
    (.text doc "Hello world!", 10, 10)
    ; (.save doc  "a4.pdf")
    (js/console.log doc)
    (js/console.log (.output doc "blob"))
    ; The following Code utilizies the Cordova Email Composer Plugin and only works on actual devices
    (.addEventListener js/document "deviceready" #(js/console.log "test5"))
    (.addEventListener js/document "deviceready" #(js/console.log js/cordova))
    (js/console.log js/cordova)
    (.open (.-email (.-plugins js/cordova)))
    ;Have to check if the map is correct
    ; (.open (.email (.plugins (cordova))) {:to "peterjewicz@totalwebconnections.com" :subject "Your Time Report" :attachments (.output doc "blob")})


    ))

(defn check-time-after [time minTime]
  "Checks whether a date/time provided is greater than another"
  (if (> time minTime)
    true
    false))

(defn check-time-before [time maxTime]
  "Checks whether a date/time provided is less than another"
  (if (< time maxTime)
    true
    false))


; Go through each date
; Check and > < start / end dates in atom
; If so we can create a map :project [dates]
; we can reduce on the map later in order to get totals per project
(defn generate-report [projects]
  "Compiles all times between the two dates for all projects"
  (let [returnHtml (atom {})
        listOfProjects (into (js->clj projects) {})]
    (doseq [[date] listOfProjects]
      (let [currentDates (get listOfProjects date)
            currentKey (keys currentDates)]
            (loop [i 0]
              (if (= i (count currentKey))
                ""
                (do
                  (print (nth currentKey i))
                  (print (get currentDates (nth currentKey i)))
                  (recur (inc i)))))
        ; (print currentKey)
        ; (print date)
        ; (js/console.log (+ 10 (.unix (moment "12052018" "MMDDYYYY"))))
        (if (and
              (check-time-after (+ 10 (.unix (moment (first currentKey) "MMDDYYYY"))) (.unix (moment @start-date)))
              (check-time-before (- 10 (.unix (moment (first currentKey) "MMDDYYYY"))) (.unix (moment @end-date))))
          (do
            (swap! returnHtml conj {(keyword date) (first currentKey)})))
        ; (swap! returnDates conj {(keyword date) (get currentDates currentDay)})
      )
      )
  @returnHtml))

(defn render [app-state]
  (let [project-name (atom "")]
  (print (generate-report (:projectDates @app-state)))
  (fn []
    [:div.Reports {:class (:reports @view_handler/active-view)}
      [:div.Reports-header
        [:div [:p {:on-click #(view_handler/change-view {:reports false})} [:i.fas.fa-long-arrow-alt-left]]]
        [:div [:h3 "Reports"]]
        [:div]]
      [:div.Reports-body
        [:p "Generate New Report"]
        [:label "Start Date"]
        [pikaday/date-selector {:date-atom start-date}]
        [:br]
        [:label "End Date"]
        [pikaday/date-selector. {:date-atom end-date}]
        [:button {:on-click #(generate-report (:projectDates @app-state))} "Generate"]
        [:button {:on-click #(download-report)} "Download"]]])))
