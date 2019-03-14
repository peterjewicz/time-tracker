// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.Day_view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.utilities.view_handler');
goog.require('time_tracker.utilities.date_formatter');
goog.require('module$Applications$server$time_tracker$node_modules$localforage$dist$localforage');
goog.require('module$Applications$server$time_tracker$node_modules$moment$moment');
time_tracker.components.Day_view.get_current_days_enteries = (function time_tracker$components$Day_view$get_current_days_enteries(app_state){

if(cljs.core.truth_(new cljs.core.Keyword(null,"activeDate","activeDate",762378079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
var projects = new cljs.core.Keyword(null,"projectDates","projectDates",760851171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var currentDay = clojure.string.replace.call(null,new cljs.core.Keyword(null,"activeDate","activeDate",762378079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),/\//,"");
var returnDates = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listOfProjects = cljs.core.into.call(null,cljs.core.js__GT_clj.call(null,projects),cljs.core.PersistentArrayMap.EMPTY);
var seq__22235_22245 = cljs.core.seq.call(null,listOfProjects);
var chunk__22236_22246 = null;
var count__22237_22247 = (0);
var i__22238_22248 = (0);
while(true){
if((i__22238_22248 < count__22237_22247)){
var vec__22239_22249 = cljs.core._nth.call(null,chunk__22236_22246,i__22238_22248);
var date_22250 = cljs.core.nth.call(null,vec__22239_22249,(0),null);
var currentDates_22251 = cljs.core.get.call(null,listOfProjects,date_22250);
if(cljs.core.truth_(cljs.core.get.call(null,currentDates_22251,currentDay))){
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22250),cljs.core.get.call(null,currentDates_22251,currentDay)]));
} else {
}


var G__22252 = seq__22235_22245;
var G__22253 = chunk__22236_22246;
var G__22254 = count__22237_22247;
var G__22255 = (i__22238_22248 + (1));
seq__22235_22245 = G__22252;
chunk__22236_22246 = G__22253;
count__22237_22247 = G__22254;
i__22238_22248 = G__22255;
continue;
} else {
var temp__5457__auto___22256 = cljs.core.seq.call(null,seq__22235_22245);
if(temp__5457__auto___22256){
var seq__22235_22257__$1 = temp__5457__auto___22256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22235_22257__$1)){
var c__4319__auto___22258 = cljs.core.chunk_first.call(null,seq__22235_22257__$1);
var G__22259 = cljs.core.chunk_rest.call(null,seq__22235_22257__$1);
var G__22260 = c__4319__auto___22258;
var G__22261 = cljs.core.count.call(null,c__4319__auto___22258);
var G__22262 = (0);
seq__22235_22245 = G__22259;
chunk__22236_22246 = G__22260;
count__22237_22247 = G__22261;
i__22238_22248 = G__22262;
continue;
} else {
var vec__22242_22263 = cljs.core.first.call(null,seq__22235_22257__$1);
var date_22264 = cljs.core.nth.call(null,vec__22242_22263,(0),null);
var currentDates_22265 = cljs.core.get.call(null,listOfProjects,date_22264);
if(cljs.core.truth_(cljs.core.get.call(null,currentDates_22265,currentDay))){
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22264),cljs.core.get.call(null,currentDates_22265,currentDay)]));
} else {
}


var G__22266 = cljs.core.next.call(null,seq__22235_22257__$1);
var G__22267 = null;
var G__22268 = (0);
var G__22269 = (0);
seq__22235_22245 = G__22266;
chunk__22236_22246 = G__22267;
count__22237_22247 = G__22268;
i__22238_22248 = G__22269;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,returnDates);
} else {
return null;
}
});
time_tracker.components.Day_view.get_formatted_date_entry = (function time_tracker$components$Day_view$get_formatted_date_entry(start,end){

var start__$1 = (start * (1000));
var end__$1 = (end * (1000));
var startText = module$Applications$server$time_tracker$node_modules$moment$moment["default"](start__$1).format("LTS");
var endText = module$Applications$server$time_tracker$node_modules$moment$moment["default"](end__$1).format("LTS");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_tracker.utilities.date_formatter.format_time_taken.call(null,start__$1,end__$1))," From ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(startText)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(endText)].join('');
});
time_tracker.components.Day_view.render = (function time_tracker$components$Day_view$render(app_state){
return (function (){
var currentEnteries = time_tracker.components.Day_view.get_current_days_enteries.call(null,app_state);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Day-view","div.Day-view",623613304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time_tracker.utilities.view_handler.active_view))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Day-view-header","div.Day-view-header",36015794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentEnteries){
return (function (){
return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"day","day",-274800446),false], null));
});})(currentEnteries))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-long-arrow-alt-left","i.fas.fa-long-arrow-alt-left",1932573860)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"activeDate","activeDate",762378079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Day-view-body","div.Day-view-body",-1299208571),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__22270(s__22271){
return (new cljs.core.LazySeq(null,((function (currentEnteries){
return (function (){
var s__22271__$1 = s__22271;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22271__$1);
if(temp__5457__auto__){
var s__22271__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22271__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22271__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22273 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22272 = (0);
while(true){
if((i__22272 < size__4291__auto__)){
var entry = cljs.core._nth.call(null,c__4290__auto__,i__22272);
cljs.core.chunk_append.call(null,b__22273,(function (){var iter__4292__auto__ = ((function (i__22272,entry,c__4290__auto__,size__4291__auto__,b__22273,s__22271__$2,temp__5457__auto__,currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__22270_$_iter__22274(s__22275){
return (new cljs.core.LazySeq(null,((function (i__22272,entry,c__4290__auto__,size__4291__auto__,b__22273,s__22271__$2,temp__5457__auto__,currentEnteries){
return (function (){
var s__22275__$1 = s__22275;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22275__$1);
if(temp__5457__auto____$1){
var s__22275__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22275__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__22275__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__22277 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__22276 = (0);
while(true){
if((i__22276 < size__4291__auto____$1)){
var dates = cljs.core._nth.call(null,c__4290__auto____$1,i__22276);
cljs.core.chunk_append.call(null,b__22277,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22282 = ((2) + i);
var G__22283 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22282;
html = G__22283;
continue;
}
break;
}
})()));

var G__22284 = (i__22276 + (1));
i__22276 = G__22284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22277),time_tracker$components$Day_view$render_$_iter__22270_$_iter__22274.call(null,cljs.core.chunk_rest.call(null,s__22275__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22277),null);
}
} else {
var dates = cljs.core.first.call(null,s__22275__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22285 = ((2) + i);
var G__22286 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22285;
html = G__22286;
continue;
}
break;
}
})()),time_tracker$components$Day_view$render_$_iter__22270_$_iter__22274.call(null,cljs.core.rest.call(null,s__22275__$2)));
}
} else {
return null;
}
break;
}
});})(i__22272,entry,c__4290__auto__,size__4291__auto__,b__22273,s__22271__$2,temp__5457__auto__,currentEnteries))
,null,null));
});})(i__22272,entry,c__4290__auto__,size__4291__auto__,b__22273,s__22271__$2,temp__5457__auto__,currentEnteries))
;
return iter__4292__auto__.call(null,entry);
})());

var G__22287 = (i__22272 + (1));
i__22272 = G__22287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22273),time_tracker$components$Day_view$render_$_iter__22270.call(null,cljs.core.chunk_rest.call(null,s__22271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22273),null);
}
} else {
var entry = cljs.core.first.call(null,s__22271__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (entry,s__22271__$2,temp__5457__auto__,currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__22270_$_iter__22278(s__22279){
return (new cljs.core.LazySeq(null,((function (entry,s__22271__$2,temp__5457__auto__,currentEnteries){
return (function (){
var s__22279__$1 = s__22279;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22279__$1);
if(temp__5457__auto____$1){
var s__22279__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22279__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22279__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22281 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22280 = (0);
while(true){
if((i__22280 < size__4291__auto__)){
var dates = cljs.core._nth.call(null,c__4290__auto__,i__22280);
cljs.core.chunk_append.call(null,b__22281,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22288 = ((2) + i);
var G__22289 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22288;
html = G__22289;
continue;
}
break;
}
})()));

var G__22290 = (i__22280 + (1));
i__22280 = G__22290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22281),time_tracker$components$Day_view$render_$_iter__22270_$_iter__22278.call(null,cljs.core.chunk_rest.call(null,s__22279__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22281),null);
}
} else {
var dates = cljs.core.first.call(null,s__22279__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22291 = ((2) + i);
var G__22292 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22291;
html = G__22292;
continue;
}
break;
}
})()),time_tracker$components$Day_view$render_$_iter__22270_$_iter__22278.call(null,cljs.core.rest.call(null,s__22279__$2)));
}
} else {
return null;
}
break;
}
});})(entry,s__22271__$2,temp__5457__auto__,currentEnteries))
,null,null));
});})(entry,s__22271__$2,temp__5457__auto__,currentEnteries))
;
return iter__4292__auto__.call(null,entry);
})(),time_tracker$components$Day_view$render_$_iter__22270.call(null,cljs.core.rest.call(null,s__22271__$2)));
}
} else {
return null;
}
break;
}
});})(currentEnteries))
,null,null));
});})(currentEnteries))
;
return iter__4292__auto__.call(null,currentEnteries);
})())], null)], null);
});
});

//# sourceMappingURL=Day_view.js.map?rel=1551965913292
