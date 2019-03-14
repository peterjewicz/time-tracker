// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.Projects');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.utilities.view_handler');
time_tracker.components.Projects.start_timer = (function time_tracker$components$Projects$start_timer(app_state,project){
if(cljs.core.truth_(new cljs.core.Keyword(null,"timerActive","timerActive",1262621616).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
return alert("A Timer Is Already Running");
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timerActive","timerActive",1262621616),"active",new cljs.core.Keyword(null,"timerStart","timerStart",-206484013),Math.floor(((new Date()).getTime() / (1000))),new cljs.core.Keyword(null,"timerProject","timerProject",1380275266),project,new cljs.core.Keyword(null,"timerRunning","timerRunning",-77250006),true], null));
}
});
time_tracker.components.Projects.render = (function time_tracker$components$Projects$render(app_state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Projects","div.Projects",-965382958),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = (function time_tracker$components$Projects$render_$_iter__21965(s__21966){
return (new cljs.core.LazySeq(null,(function (){
var s__21966__$1 = s__21966;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21966__$1);
if(temp__5457__auto__){
var s__21966__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21966__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__21966__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__21968 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__21967 = (0);
while(true){
if((i__21967 < size__4291__auto__)){
var project = cljs.core._nth.call(null,c__4290__auto__,i__21967);
cljs.core.chunk_append.call(null,b__21968,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Projectitem","div.Projectitem",246565310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),project], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),project], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21967,project,c__4290__auto__,size__4291__auto__,b__21968,s__21966__$2,temp__5457__auto__){
return (function (){
return time_tracker.components.Projects.start_timer.call(null,app_state,project);
});})(i__21967,project,c__4290__auto__,size__4291__auto__,b__21968,s__21966__$2,temp__5457__auto__))
], null),"Start Timer"], null)], null));

var G__21969 = (i__21967 + (1));
i__21967 = G__21969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21968),time_tracker$components$Projects$render_$_iter__21965.call(null,cljs.core.chunk_rest.call(null,s__21966__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21968),null);
}
} else {
var project = cljs.core.first.call(null,s__21966__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Projectitem","div.Projectitem",246565310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),project], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),project], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (project,s__21966__$2,temp__5457__auto__){
return (function (){
return time_tracker.components.Projects.start_timer.call(null,app_state,project);
});})(project,s__21966__$2,temp__5457__auto__))
], null),"Start Timer"], null)], null),time_tracker$components$Projects$render_$_iter__21965.call(null,cljs.core.rest.call(null,s__21966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
})()),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.newProjectWrapper","div.newProjectWrapper",-2025402102),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-new","add-new",-1399275206),"active"], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"New Project "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.newProjectButton","span.newProjectButton",-1774714729)," +"], null)], null)], null);
});
});

//# sourceMappingURL=Projects.js.map?rel=1551965912851
