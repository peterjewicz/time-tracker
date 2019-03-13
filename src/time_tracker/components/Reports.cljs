(ns time-tracker.components.Reports
  (:require [reagent.core :as reagent :refer [atom]]
            [time_tracker.utilities.view_handler :as view_handler]
            [time_tracker.utilities.date_formatter :as date_formatter]
            [cljs-pikaday.reagent :as pikaday]
            ["localforage" :as localforage]
            ["moment" :as moment]))

(defonce start-date (reagent/atom (js/Date. (.setHours (js/Date.) 0 0 0 0))))
(defonce end-date (reagent/atom (js/Date.)))
(defonce current-report (reagent/atom {}))
(defonce current-pdf-offset (reagent/atom 1))

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
                  (if (and
                        (check-time-after (+ 10 (.unix (moment (nth currentKey i) "MMDDYYYY"))) (.unix (moment @start-date)))
                        (check-time-before (- 10 (.unix (moment (nth currentKey i) "MMDDYYYY"))) (.unix (moment @end-date))))
                    (do

                      (let [htmlToSet @returnHtml
                            htmlToMerge {(keyword (nth currentKey i)) (get currentDates (nth currentKey i))}
                            currentVals ((keyword date) @returnHtml)]
                        (swap! returnHtml conj {(keyword date) (conj currentVals htmlToMerge)})
                        )
                                ))
                  (recur (inc i)))))

      )
      )
  (reset! current-report @returnHtml)
  @returnHtml))


(defn download-report [projects]
  "Generates the PDF Report Of date/times"
  (let [doc (js/jsPDF.)
        docContent (generate-report projects)
        maxAmountOfItems (atom 16)] ; think 16 is pretty good
    (doall (for [project docContent]
      (do
        (.setFontSize doc 24) ; header font size quickly swap out here then go back to the regular body text
        (.setTextColor doc "#fff") ; font color for header
        (.setFillColor doc "#633892")
        (.rect doc 0, (- (* 15 @current-pdf-offset) 9 ), 250, 12, "FD")
        ; rect(x, y, w, h, style)
        (.text doc (str (name (first project))), 10, (* 15 @current-pdf-offset))
        (.setFontSize doc 12) ; body text font size
        (.setTextColor doc "#000") ; font color for body text
        (swap! current-pdf-offset inc)
        (doall (for [date (second project)]
          (do
            (let [dateKey (first (first date))
                  dateItems (second (first date))]
                (.text doc (str (.format (moment (name dateKey) "MMDDYYYY") "LL") " : "), 10,  (* 15 @current-pdf-offset))
                (.text doc (date_formatter/format-time-taken 0 (* 1000 (date_formatter/get-total-seconds dateItems))), 75, (* 15 @current-pdf-offset))
                (if (> @current-pdf-offset @maxAmountOfItems)
                  (do
                    (.addPage doc )
                    (reset! current-pdf-offset 1))
                  (swap! current-pdf-offset inc))
              )
            )
          )

          )
      )))

    ; (.save doc "Your_Time_Report.pdf") ;This works but we want to test on actual device LEAVE FOR TESTING PDF GENERATION
    (js/alert "Time Report Generated")
    (.open (.-email (.-plugins js/cordova)) (clj->js { :body "test tst" :to (to-array [""]) :subject "Your Time Report"
      :attachments (to-array [  (str "base64:report.pdf//" (js/btoa (.output doc)))  ])}))
    (reset! current-pdf-offset 1)))

(defn render [app-state]
  (let [project-name (atom "")]
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
        [:button {:on-click #(download-report (:projectDates @app-state))} "Download"]
        [:div.Reports-list
          (doall (for [project @current-report]
            (do
              [:div {:key (str (first project) "-title")}
                [:h3 {:key (first project)} (first project)]
              (for [date (second project)]
                (do
                  (let [dateKey (first (first date))
                        dateItems (second (first date))]
                    (doall
                      [:div.Reports-dayValue {:key (str (first project) "-values")}
                        [:p (str (.format (moment (name dateKey) "MMDDYYYY") "LL") " : ")]
                        [:p (date_formatter/format-time-taken 0 (* 1000 (date_formatter/get-total-seconds dateItems)))]]))))])))]]])))
