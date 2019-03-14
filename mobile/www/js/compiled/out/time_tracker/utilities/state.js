// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.utilities.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('module$Applications$server$time_tracker$node_modules$localforage$dist$localforage');
time_tracker.utilities.state.get_project_dates = (function time_tracker$utilities$state$get_project_dates(project_map){
return Promise.all(cljs.core.map.call(null,(function (p1__28234_SHARP_){
return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].getItem(p1__28234_SHARP_).then((function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28234_SHARP_,v], null);
}));
}),project_map)).then(cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY));
});
time_tracker.utilities.state.update_project_dates = (function time_tracker$utilities$state$update_project_dates(app_state){
return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].getItem("projects").then((function (value){
return time_tracker.utilities.state.get_project_dates.call(null,value).then((function (project_dates){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"projectDates","projectDates",760851171),project_dates], null));
}));
}));
});
time_tracker.utilities.state.update_project_state = (function time_tracker$utilities$state$update_project_state(app_state){
return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].getItem("projects").then((function (value){
return time_tracker.utilities.state.get_project_dates.call(null,value).then((function (project_dates){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"projects","projects",-364845983),value], null));
}));
}));
});

//# sourceMappingURL=state.js.map?rel=1551967344096
