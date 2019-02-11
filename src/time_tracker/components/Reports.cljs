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

    (.open (.-email (.-plugins js/cordova)) (clj->js {:from "Test@test.com" :body "test tst" :to (to-array ["peterjewicz@totalwebconnections.com"]) :subject "Your Time Report"
      :attachments (to-array [  (str "data:application/pdf;base64," (js/btoa (.output doc)))  ])}))
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
    (print listOfProjects)
    (doseq [[date] listOfProjects]
      (let [currentDates (get listOfProjects date)
            currentKey (keys currentDates)]
            (loop [i 0]
              (if (= i (count currentKey))
                ""
                (do ;we use the following two and just add the whole array of times to the returnHTML wrap below if in this
                  ; (print @returnHtml) ;{}
                  ; (print date) ; test
                  ; (print (nth currentKey i)) ;12012018
                  ; (print (get currentDates (nth currentKey i))) ;[1234,1234]
                  ; (print (:test @returnHtml))
                  ;{:test {:12012018 [1234,1234] :12022018 [1234,1234]}}

                  (if (and
                        (check-time-after (+ 10 (.unix (moment (nth currentKey i) "MMDDYYYY"))) (.unix (moment @start-date)))
                        (check-time-before (- 10 (.unix (moment (nth currentKey i) "MMDDYYYY"))) (.unix (moment @end-date))))
                    (do

                      (let [htmlToSet @returnHtml
                            htmlToMerge {(keyword (nth currentKey i)) (get currentDates (nth currentKey i))}
                            currentVals ((keyword date) @returnHtml)]
                            ; (print currentVals)
                            ; (print htmlToMerge)
                            ; (print htmlToSet)
                        (print {(keyword date) (conj currentVals htmlToMerge)})
                        (swap! returnHtml conj {(keyword date) (conj currentVals htmlToMerge)})
                        )
                                ))
                  (recur (inc i)))))

      )
      )
  (print @returnHtml)
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
