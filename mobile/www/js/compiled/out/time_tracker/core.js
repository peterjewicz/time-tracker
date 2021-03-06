// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.components.Main');
goog.require('time_tracker.utilities.timerHelpers');
goog.require('module$Applications$server$time_tracker$node_modules$localforage$dist$localforage');
cljs.core.enable_console_print_BANG_.call(null);
time_tracker.core.set_timer_active = (function time_tracker$core$set_timer_active(app_state,value){
if(cljs.core.truth_(value)){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timerActive","timerActive",1262621616),"active",new cljs.core.Keyword(null,"timerStart","timerStart",-206484013),cljs.core.first.call(null,value),new cljs.core.Keyword(null,"timerProject","timerProject",1380275266),cljs.core.second.call(null,value),new cljs.core.Keyword(null,"timerRunning","timerRunning",-77250006),true], null));
} else {
return null;
}
});
time_tracker.core.get_project_dates = (function time_tracker$core$get_project_dates(project_map){
return Promise.all(cljs.core.map.call(null,(function (p1__22863_SHARP_){
return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].getItem(p1__22863_SHARP_).then((function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22863_SHARP_,v], null);
}));
}),project_map)).then(cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY));
});
module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].config();
module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].getItem("projects").then((function (value){
return time_tracker.core.get_project_dates.call(null,value).then((function (project_dates){
if(typeof time_tracker.core.app_state !== 'undefined'){
} else {
time_tracker.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"projects","projects",-364845983),value,new cljs.core.Keyword(null,"timerActive","timerActive",1262621616),false,new cljs.core.Keyword(null,"timerStart","timerStart",-206484013),false,new cljs.core.Keyword(null,"timerProject","timerProject",1380275266),false,new cljs.core.Keyword(null,"timerRunning","timerRunning",-77250006),false,new cljs.core.Keyword(null,"projectDates","projectDates",760851171),project_dates,new cljs.core.Keyword(null,"activeDay","activeDay",-410928246),false,new cljs.core.Keyword(null,"projectViewProjct","projectViewProjct",784990003),null], null));
}

time_tracker.utilities.timerHelpers.get_timer_active.call(null,cljs.core.partial.call(null,time_tracker.core.set_timer_active,time_tracker.core.app_state));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_tracker.components.Main.render,time_tracker.core.app_state], null),document.getElementById("app"));
}));
}));
time_tracker.core.on_js_reload = (function time_tracker$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1582304840453
