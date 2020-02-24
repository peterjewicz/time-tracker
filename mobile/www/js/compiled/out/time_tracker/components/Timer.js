// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.Timer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.utilities.view_handler');
goog.require('time_tracker.utilities.state');
goog.require('time_tracker.utilities.timerHelpers');
goog.require('module$Applications$server$time_tracker$node_modules$localforage$dist$localforage');
goog.require('module$Applications$server$time_tracker$node_modules$moment$moment');
time_tracker.components.Timer.end_timer = (function time_tracker$components$Timer$end_timer(app_state,interval){
var project = new cljs.core.Keyword(null,"timerProject","timerProject",1380275266).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var start = new cljs.core.Keyword(null,"timerStart","timerStart",-206484013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var end = Math.floor(((new Date()).getTime() / (1000)));
module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].getItem(project).then(((function (project,start,end){
return (function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var currentValue = cljs.core.concat.call(null,cljs.core.keyword.call(null,module$Applications$server$time_tracker$node_modules$moment$moment["default"]().format("MMDDYYYY")).call(null,currentStorage),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null));
return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].setItem(project,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,currentStorage,cljs.core.keyword.call(null,module$Applications$server$time_tracker$node_modules$moment$moment["default"]().format("MMDDYYYY")),currentValue))).then(((function (currentStorage,currentValue,project,start,end){
return (function (value__$1){
return time_tracker.utilities.state.update_project_dates.call(null,app_state);
});})(currentStorage,currentValue,project,start,end))
);
});})(project,start,end))
);

clearInterval(cljs.core.deref.call(null,interval));

cljs.core.reset_BANG_.call(null,interval,null);

time_tracker.utilities.timerHelpers.set_timer_inactive.call(null);

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timerActive","timerActive",1262621616),false,new cljs.core.Keyword(null,"timerStart","timerStart",-206484013),false,new cljs.core.Keyword(null,"timerProject","timerProject",1380275266),false,new cljs.core.Keyword(null,"timerRunning","timerRunning",-77250006),false], null));
});
/**
 * Formats a number to have a leading 0 if < 10
 */
time_tracker.components.Timer.format_time_number = (function time_tracker$components$Timer$format_time_number(time){
if((time < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time)].join('');
} else {
return time;
}
});
/**
 * Takes the current time in seconds and formats it better
 */
time_tracker.components.Timer.format_time = (function time_tracker$components$Timer$format_time(seconds){
var time = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hours","hours",58380855),(0),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"total","total",1916810418),seconds], null));
if((new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)) > (3599))){
cljs.core.swap_BANG_.call(null,time,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hours","hours",58380855),Math.floor((new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)) / (3600)))], null));

cljs.core.swap_BANG_.call(null,time,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.mod.call(null,new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)),(3600))], null));
} else {
}

if((new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)) > (59))){
cljs.core.swap_BANG_.call(null,time,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),Math.floor((new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)) / (60)))], null));

cljs.core.swap_BANG_.call(null,time,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.mod.call(null,new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)),(60))], null));
} else {
}

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_tracker.components.Timer.format_time_number.call(null,new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_tracker.components.Timer.format_time_number.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_tracker.components.Timer.format_time_number.call(null,new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time))))].join('');
});
time_tracker.components.Timer.render = (function time_tracker$components$Timer$render(app_state){
var interval = reagent.core.atom.call(null,null);
var currentTime = reagent.core.atom.call(null,(0));
return ((function (interval,currentTime){
return (function (){
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"timerRunning","timerRunning",-77250006).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,interval),null);
} else {
return and__3911__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,interval,setInterval(((function (interval,currentTime){
return (function (){
return cljs.core.reset_BANG_.call(null,currentTime,(Math.floor(((new Date()).getTime() / (1000))) - new cljs.core.Keyword(null,"timerStart","timerStart",-206484013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))));
});})(interval,currentTime))
,(1000)));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Timer","div.Timer",-1086888649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"timerActive","timerActive",1262621616).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Timer-inner","div.Timer-inner",1185730552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timerProject","timerProject",1380275266).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))," - Started At: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"]((new cljs.core.Keyword(null,"timerStart","timerStart",-206484013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)) * (1000))).format("LTS"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Running For: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_tracker.components.Timer.format_time.call(null,cljs.core.deref.call(null,currentTime)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (interval,currentTime){
return (function (){
return time_tracker.components.Timer.end_timer.call(null,app_state,interval);
});})(interval,currentTime))
], null),"End Timer"], null)], null)], null);
});
;})(interval,currentTime))
});

//# sourceMappingURL=Timer.js.map?rel=1582304840786
