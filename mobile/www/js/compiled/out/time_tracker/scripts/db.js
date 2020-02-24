// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.scripts.db');
goog.require('cljs.core');
goog.require('module$Applications$server$time_tracker$node_modules$localforage$dist$localforage');
goog.require('time_tracker.utilities.state');
time_tracker.scripts.db.get_by_project = (function time_tracker$scripts$db$get_by_project(project){
return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].getItem(project);
});
time_tracker.scripts.db.remove_date_time = (function time_tracker$scripts$db$remove_date_time(project,day,start,app_state){
return time_tracker.scripts.db.get_by_project.call(null,project).then((function (result){
var currentProject = cljs.core.js__GT_clj.call(null,result);
var projectDates = cljs.core.get.call(null,currentProject,day);
var indexToRemove = projectDates.indexOf(start);
return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].setItem(project,cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,currentProject,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,day),cljs.core.keep_indexed.call(null,((function (currentProject,projectDates,indexToRemove){
return (function (index,item){
if(((cljs.core._EQ_.call(null,index,indexToRemove)) || (cljs.core._EQ_.call(null,((1) + indexToRemove),index)))){
return null;
} else {
return item;
}
});})(currentProject,projectDates,indexToRemove))
,projectDates)])))).then(((function (currentProject,projectDates,indexToRemove){
return (function (value){
return time_tracker.utilities.state.update_project_dates.call(null,app_state);
});})(currentProject,projectDates,indexToRemove))
);
}));
});

//# sourceMappingURL=db.js.map?rel=1582304839504
