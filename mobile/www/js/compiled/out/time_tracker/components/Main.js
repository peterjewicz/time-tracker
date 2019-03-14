// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.Main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.components.Header');
goog.require('time_tracker.components.Projects');
goog.require('time_tracker.components.New');
goog.require('time_tracker.components.Day_view');
goog.require('time_tracker.components.Calendar');
goog.require('time_tracker.components.Reports');
goog.require('time_tracker.components.Timer');
time_tracker.components.Main.render = (function time_tracker$components$Main$render(app_state){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main","div.Main",874536792),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_tracker.components.Header.render], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_tracker.components.Reports.render,app_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_tracker.components.Timer.render,app_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_tracker.components.Day_view.render,app_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_tracker.components.New.render,app_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_tracker.components.Calendar.render,app_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Project-wrapper","div.Project-wrapper",-2030626781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_tracker.components.Projects.render,app_state], null)], null)], null);
});

//# sourceMappingURL=Main.js.map?rel=1551965913322
