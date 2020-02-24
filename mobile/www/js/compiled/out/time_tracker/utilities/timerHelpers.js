// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.utilities.timerHelpers');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('module$Applications$server$time_tracker$node_modules$localforage$dist$localforage');
time_tracker.utilities.timerHelpers.set_timer_active = (function time_tracker$utilities$timerHelpers$set_timer_active(value,callback){

return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].setItem("simpletimer-timer",cljs.core.clj__GT_js.call(null,value)).then(callback.call(null));
});
time_tracker.utilities.timerHelpers.set_timer_inactive = (function time_tracker$utilities$timerHelpers$set_timer_inactive(){

return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].setItem("simpletimer-timer",null);
});
time_tracker.utilities.timerHelpers.get_timer_active = (function time_tracker$utilities$timerHelpers$get_timer_active(callback){

return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].getItem("simpletimer-timer").then((function (value){
cljs.core.print.call(null,value);

return callback.call(null,value);
}));
});

//# sourceMappingURL=timerHelpers.js.map?rel=1582304839316
