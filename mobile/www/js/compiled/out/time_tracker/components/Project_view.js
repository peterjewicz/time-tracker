// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.Project_view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.utilities.view_handler');
goog.require('time_tracker.utilities.date_formatter');
goog.require('time_tracker.scripts.db');
goog.require('module$Applications$server$time_tracker$node_modules$localforage$dist$localforage');
goog.require('module$Applications$server$time_tracker$node_modules$moment$moment');
time_tracker.components.Project_view.remove_time_entry = (function time_tracker$components$Project_view$remove_time_entry(project,day,start,app_state){
return time_tracker.scripts.db.remove_date_time.call(null,project,day,start,app_state);
});
time_tracker.components.Project_view.generate_time_values_for_project = (function time_tracker$components$Project_view$generate_time_values_for_project(timestamps,projectName,currentDate,app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var totalSeconds = time_tracker.utilities.date_formatter.get_total_seconds.call(null,timestamps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Project-view-dateTimeItem","p.Project-view-dateTimeItem",-2135040216),["Total: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * totalSeconds)))].join('')], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Project-view-entry-details-dateWrapper","div.Project-view-entry-details-dateWrapper",-22752231),(function (){var index = (0);
var timeDisplay = cljs.core.List.EMPTY;
while(true){
if((index >= cljs.core.count.call(null,timestamps))){
return cljs.core.reverse.call(null,timeDisplay);
} else {
var G__22425 = (index + (2));
var G__22426 = cljs.core.conj.call(null,timeDisplay,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Project-view-entry-details","div.Project-view-entry-details",-1907883952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.nth.call(null,timestamps,index)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Project-view-entry","p.Project-view-entry",1986686631),time_tracker.utilities.date_formatter.format_time_taken.call(null,((1000) * cljs.core.nth.call(null,timestamps,index)),((1000) * cljs.core.nth.call(null,timestamps,(index + (1)))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Project-view-time-range","p.Project-view-time-range",1275079287),["From: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](((1000) * cljs.core.nth.call(null,timestamps,index))).format("LTS"))," To: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](((1000) * cljs.core.nth.call(null,timestamps,(index + (1))))).format("LTS"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Project-view-remove-entry","p.Project-view-remove-entry",1225070834),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,timeDisplay){
return (function (){
return time_tracker.components.Project_view.remove_time_entry.call(null,projectName,currentDate,cljs.core.nth.call(null,timestamps,index),app_state);
});})(index,timeDisplay))
], null),"X"], null)], null));
index = G__22425;
timeDisplay = G__22426;
continue;
}
break;
}
})()], null)], null);
});
time_tracker.components.Project_view.render = (function time_tracker$components$Project_view$render(app_state){
return (function (){
var currentProjectName = new cljs.core.Keyword(null,"projectViewProjct","projectViewProjct",784990003).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var projectDates = cljs.core.js__GT_clj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"projectDates","projectDates",760851171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),currentProjectName));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Project-view","div.Project-view",2020709100),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"project-view","project-view",1499497430).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time_tracker.utilities.view_handler.active_view))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Project-view-header","div.Project-view-header",-266990591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentProjectName,projectDates){
return (function (){
return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project-view","project-view",1499497430),false], null));
});})(currentProjectName,projectDates))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-long-arrow-alt-left","i.fas.fa-long-arrow-alt-left",1932573860)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),currentProjectName], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Project-view-body","div.Project-view-body",-1353779125),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (currentProjectName,projectDates){
return (function time_tracker$components$Project_view$render_$_iter__22427(s__22428){
return (new cljs.core.LazySeq(null,((function (currentProjectName,projectDates){
return (function (){
var s__22428__$1 = s__22428;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22428__$1);
if(temp__5457__auto__){
var s__22428__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22428__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22428__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22430 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22429 = (0);
while(true){
if((i__22429 < size__4291__auto__)){
var date = cljs.core._nth.call(null,c__4290__auto__,i__22429);
cljs.core.chunk_append.call(null,b__22430,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Project-view-dateWrapper","div.Project-view-dateWrapper",885522257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,date)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.first.call(null,date),"MMDDYYYY").format("LL"))," : "].join('')], null),time_tracker.components.Project_view.generate_time_values_for_project.call(null,cljs.core.second.call(null,date),currentProjectName,cljs.core.first.call(null,date),app_state)], null));

var G__22431 = (i__22429 + (1));
i__22429 = G__22431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22430),time_tracker$components$Project_view$render_$_iter__22427.call(null,cljs.core.chunk_rest.call(null,s__22428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22430),null);
}
} else {
var date = cljs.core.first.call(null,s__22428__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Project-view-dateWrapper","div.Project-view-dateWrapper",885522257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,date)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.first.call(null,date),"MMDDYYYY").format("LL"))," : "].join('')], null),time_tracker.components.Project_view.generate_time_values_for_project.call(null,cljs.core.second.call(null,date),currentProjectName,cljs.core.first.call(null,date),app_state)], null),time_tracker$components$Project_view$render_$_iter__22427.call(null,cljs.core.rest.call(null,s__22428__$2)));
}
} else {
return null;
}
break;
}
});})(currentProjectName,projectDates))
,null,null));
});})(currentProjectName,projectDates))
;
return iter__4292__auto__.call(null,projectDates);
})())], null)], null);
});
});

//# sourceMappingURL=Project_view.js.map?rel=1582304839551
