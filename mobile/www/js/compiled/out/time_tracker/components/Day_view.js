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
var seq__22963_22973 = cljs.core.seq.call(null,listOfProjects);
var chunk__22964_22974 = null;
var count__22965_22975 = (0);
var i__22966_22976 = (0);
while(true){
if((i__22966_22976 < count__22965_22975)){
var vec__22967_22977 = cljs.core._nth.call(null,chunk__22964_22974,i__22966_22976);
var date_22978 = cljs.core.nth.call(null,vec__22967_22977,(0),null);
var currentDates_22979 = cljs.core.get.call(null,listOfProjects,date_22978);
if(cljs.core.truth_(cljs.core.get.call(null,currentDates_22979,currentDay))){
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22978),cljs.core.get.call(null,currentDates_22979,currentDay)]));
} else {
}


var G__22980 = seq__22963_22973;
var G__22981 = chunk__22964_22974;
var G__22982 = count__22965_22975;
var G__22983 = (i__22966_22976 + (1));
seq__22963_22973 = G__22980;
chunk__22964_22974 = G__22981;
count__22965_22975 = G__22982;
i__22966_22976 = G__22983;
continue;
} else {
var temp__5457__auto___22984 = cljs.core.seq.call(null,seq__22963_22973);
if(temp__5457__auto___22984){
var seq__22963_22985__$1 = temp__5457__auto___22984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22963_22985__$1)){
var c__4319__auto___22986 = cljs.core.chunk_first.call(null,seq__22963_22985__$1);
var G__22987 = cljs.core.chunk_rest.call(null,seq__22963_22985__$1);
var G__22988 = c__4319__auto___22986;
var G__22989 = cljs.core.count.call(null,c__4319__auto___22986);
var G__22990 = (0);
seq__22963_22973 = G__22987;
chunk__22964_22974 = G__22988;
count__22965_22975 = G__22989;
i__22966_22976 = G__22990;
continue;
} else {
var vec__22970_22991 = cljs.core.first.call(null,seq__22963_22985__$1);
var date_22992 = cljs.core.nth.call(null,vec__22970_22991,(0),null);
var currentDates_22993 = cljs.core.get.call(null,listOfProjects,date_22992);
if(cljs.core.truth_(cljs.core.get.call(null,currentDates_22993,currentDay))){
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22992),cljs.core.get.call(null,currentDates_22993,currentDay)]));
} else {
}


var G__22994 = cljs.core.next.call(null,seq__22963_22985__$1);
var G__22995 = null;
var G__22996 = (0);
var G__22997 = (0);
seq__22963_22973 = G__22994;
chunk__22964_22974 = G__22995;
count__22965_22975 = G__22996;
i__22966_22976 = G__22997;
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
return (function time_tracker$components$Day_view$render_$_iter__22998(s__22999){
return (new cljs.core.LazySeq(null,((function (currentEnteries){
return (function (){
var s__22999__$1 = s__22999;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22999__$1);
if(temp__5457__auto__){
var s__22999__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22999__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22999__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23001 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23000 = (0);
while(true){
if((i__23000 < size__4291__auto__)){
var entry = cljs.core._nth.call(null,c__4290__auto__,i__23000);
cljs.core.chunk_append.call(null,b__23001,(function (){var iter__4292__auto__ = ((function (i__23000,entry,c__4290__auto__,size__4291__auto__,b__23001,s__22999__$2,temp__5457__auto__,currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__22998_$_iter__23002(s__23003){
return (new cljs.core.LazySeq(null,((function (i__23000,entry,c__4290__auto__,size__4291__auto__,b__23001,s__22999__$2,temp__5457__auto__,currentEnteries){
return (function (){
var s__23003__$1 = s__23003;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__23003__$1);
if(temp__5457__auto____$1){
var s__23003__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23003__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__23003__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__23005 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__23004 = (0);
while(true){
if((i__23004 < size__4291__auto____$1)){
var dates = cljs.core._nth.call(null,c__4290__auto____$1,i__23004);
cljs.core.chunk_append.call(null,b__23005,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__23010 = ((2) + i);
var G__23011 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__23010;
html = G__23011;
continue;
}
break;
}
})()));

var G__23012 = (i__23004 + (1));
i__23004 = G__23012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23005),time_tracker$components$Day_view$render_$_iter__22998_$_iter__23002.call(null,cljs.core.chunk_rest.call(null,s__23003__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23005),null);
}
} else {
var dates = cljs.core.first.call(null,s__23003__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__23013 = ((2) + i);
var G__23014 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__23013;
html = G__23014;
continue;
}
break;
}
})()),time_tracker$components$Day_view$render_$_iter__22998_$_iter__23002.call(null,cljs.core.rest.call(null,s__23003__$2)));
}
} else {
return null;
}
break;
}
});})(i__23000,entry,c__4290__auto__,size__4291__auto__,b__23001,s__22999__$2,temp__5457__auto__,currentEnteries))
,null,null));
});})(i__23000,entry,c__4290__auto__,size__4291__auto__,b__23001,s__22999__$2,temp__5457__auto__,currentEnteries))
;
return iter__4292__auto__.call(null,entry);
})());

var G__23015 = (i__23000 + (1));
i__23000 = G__23015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23001),time_tracker$components$Day_view$render_$_iter__22998.call(null,cljs.core.chunk_rest.call(null,s__22999__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23001),null);
}
} else {
var entry = cljs.core.first.call(null,s__22999__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (entry,s__22999__$2,temp__5457__auto__,currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__22998_$_iter__23006(s__23007){
return (new cljs.core.LazySeq(null,((function (entry,s__22999__$2,temp__5457__auto__,currentEnteries){
return (function (){
var s__23007__$1 = s__23007;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__23007__$1);
if(temp__5457__auto____$1){
var s__23007__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23007__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23007__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23009 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23008 = (0);
while(true){
if((i__23008 < size__4291__auto__)){
var dates = cljs.core._nth.call(null,c__4290__auto__,i__23008);
cljs.core.chunk_append.call(null,b__23009,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__23016 = ((2) + i);
var G__23017 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__23016;
html = G__23017;
continue;
}
break;
}
})()));

var G__23018 = (i__23008 + (1));
i__23008 = G__23018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23009),time_tracker$components$Day_view$render_$_iter__22998_$_iter__23006.call(null,cljs.core.chunk_rest.call(null,s__23007__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23009),null);
}
} else {
var dates = cljs.core.first.call(null,s__23007__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__23019 = ((2) + i);
var G__23020 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__23019;
html = G__23020;
continue;
}
break;
}
})()),time_tracker$components$Day_view$render_$_iter__22998_$_iter__23006.call(null,cljs.core.rest.call(null,s__23007__$2)));
}
} else {
return null;
}
break;
}
});})(entry,s__22999__$2,temp__5457__auto__,currentEnteries))
,null,null));
});})(entry,s__22999__$2,temp__5457__auto__,currentEnteries))
;
return iter__4292__auto__.call(null,entry);
})(),time_tracker$components$Day_view$render_$_iter__22998.call(null,cljs.core.rest.call(null,s__22999__$2)));
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

//# sourceMappingURL=Day_view.js.map?rel=1582304840905
