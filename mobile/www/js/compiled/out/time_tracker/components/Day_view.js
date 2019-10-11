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
var seq__22944_22954 = cljs.core.seq.call(null,listOfProjects);
var chunk__22945_22955 = null;
var count__22946_22956 = (0);
var i__22947_22957 = (0);
while(true){
if((i__22947_22957 < count__22946_22956)){
var vec__22948_22958 = cljs.core._nth.call(null,chunk__22945_22955,i__22947_22957);
var date_22959 = cljs.core.nth.call(null,vec__22948_22958,(0),null);
var currentDates_22960 = cljs.core.get.call(null,listOfProjects,date_22959);
if(cljs.core.truth_(cljs.core.get.call(null,currentDates_22960,currentDay))){
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22959),cljs.core.get.call(null,currentDates_22960,currentDay)]));
} else {
}


var G__22961 = seq__22944_22954;
var G__22962 = chunk__22945_22955;
var G__22963 = count__22946_22956;
var G__22964 = (i__22947_22957 + (1));
seq__22944_22954 = G__22961;
chunk__22945_22955 = G__22962;
count__22946_22956 = G__22963;
i__22947_22957 = G__22964;
continue;
} else {
var temp__5457__auto___22965 = cljs.core.seq.call(null,seq__22944_22954);
if(temp__5457__auto___22965){
var seq__22944_22966__$1 = temp__5457__auto___22965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22944_22966__$1)){
var c__4319__auto___22967 = cljs.core.chunk_first.call(null,seq__22944_22966__$1);
var G__22968 = cljs.core.chunk_rest.call(null,seq__22944_22966__$1);
var G__22969 = c__4319__auto___22967;
var G__22970 = cljs.core.count.call(null,c__4319__auto___22967);
var G__22971 = (0);
seq__22944_22954 = G__22968;
chunk__22945_22955 = G__22969;
count__22946_22956 = G__22970;
i__22947_22957 = G__22971;
continue;
} else {
var vec__22951_22972 = cljs.core.first.call(null,seq__22944_22966__$1);
var date_22973 = cljs.core.nth.call(null,vec__22951_22972,(0),null);
var currentDates_22974 = cljs.core.get.call(null,listOfProjects,date_22973);
if(cljs.core.truth_(cljs.core.get.call(null,currentDates_22974,currentDay))){
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22973),cljs.core.get.call(null,currentDates_22974,currentDay)]));
} else {
}


var G__22975 = cljs.core.next.call(null,seq__22944_22966__$1);
var G__22976 = null;
var G__22977 = (0);
var G__22978 = (0);
seq__22944_22954 = G__22975;
chunk__22945_22955 = G__22976;
count__22946_22956 = G__22977;
i__22947_22957 = G__22978;
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
return (function time_tracker$components$Day_view$render_$_iter__22979(s__22980){
return (new cljs.core.LazySeq(null,((function (currentEnteries){
return (function (){
var s__22980__$1 = s__22980;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22980__$1);
if(temp__5457__auto__){
var s__22980__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22980__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22980__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22982 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22981 = (0);
while(true){
if((i__22981 < size__4291__auto__)){
var entry = cljs.core._nth.call(null,c__4290__auto__,i__22981);
cljs.core.chunk_append.call(null,b__22982,(function (){var iter__4292__auto__ = ((function (i__22981,entry,c__4290__auto__,size__4291__auto__,b__22982,s__22980__$2,temp__5457__auto__,currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__22979_$_iter__22983(s__22984){
return (new cljs.core.LazySeq(null,((function (i__22981,entry,c__4290__auto__,size__4291__auto__,b__22982,s__22980__$2,temp__5457__auto__,currentEnteries){
return (function (){
var s__22984__$1 = s__22984;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22984__$1);
if(temp__5457__auto____$1){
var s__22984__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22984__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__22984__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__22986 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__22985 = (0);
while(true){
if((i__22985 < size__4291__auto____$1)){
var dates = cljs.core._nth.call(null,c__4290__auto____$1,i__22985);
cljs.core.chunk_append.call(null,b__22986,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22991 = ((2) + i);
var G__22992 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22991;
html = G__22992;
continue;
}
break;
}
})()));

var G__22993 = (i__22985 + (1));
i__22985 = G__22993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22986),time_tracker$components$Day_view$render_$_iter__22979_$_iter__22983.call(null,cljs.core.chunk_rest.call(null,s__22984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22986),null);
}
} else {
var dates = cljs.core.first.call(null,s__22984__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22994 = ((2) + i);
var G__22995 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22994;
html = G__22995;
continue;
}
break;
}
})()),time_tracker$components$Day_view$render_$_iter__22979_$_iter__22983.call(null,cljs.core.rest.call(null,s__22984__$2)));
}
} else {
return null;
}
break;
}
});})(i__22981,entry,c__4290__auto__,size__4291__auto__,b__22982,s__22980__$2,temp__5457__auto__,currentEnteries))
,null,null));
});})(i__22981,entry,c__4290__auto__,size__4291__auto__,b__22982,s__22980__$2,temp__5457__auto__,currentEnteries))
;
return iter__4292__auto__.call(null,entry);
})());

var G__22996 = (i__22981 + (1));
i__22981 = G__22996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22982),time_tracker$components$Day_view$render_$_iter__22979.call(null,cljs.core.chunk_rest.call(null,s__22980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22982),null);
}
} else {
var entry = cljs.core.first.call(null,s__22980__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (entry,s__22980__$2,temp__5457__auto__,currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__22979_$_iter__22987(s__22988){
return (new cljs.core.LazySeq(null,((function (entry,s__22980__$2,temp__5457__auto__,currentEnteries){
return (function (){
var s__22988__$1 = s__22988;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22988__$1);
if(temp__5457__auto____$1){
var s__22988__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22988__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22988__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22990 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22989 = (0);
while(true){
if((i__22989 < size__4291__auto__)){
var dates = cljs.core._nth.call(null,c__4290__auto__,i__22989);
cljs.core.chunk_append.call(null,b__22990,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22997 = ((2) + i);
var G__22998 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22997;
html = G__22998;
continue;
}
break;
}
})()));

var G__22999 = (i__22989 + (1));
i__22989 = G__22999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22990),time_tracker$components$Day_view$render_$_iter__22979_$_iter__22987.call(null,cljs.core.chunk_rest.call(null,s__22988__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22990),null);
}
} else {
var dates = cljs.core.first.call(null,s__22988__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__23000 = ((2) + i);
var G__23001 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__23000;
html = G__23001;
continue;
}
break;
}
})()),time_tracker$components$Day_view$render_$_iter__22979_$_iter__22987.call(null,cljs.core.rest.call(null,s__22988__$2)));
}
} else {
return null;
}
break;
}
});})(entry,s__22980__$2,temp__5457__auto__,currentEnteries))
,null,null));
});})(entry,s__22980__$2,temp__5457__auto__,currentEnteries))
;
return iter__4292__auto__.call(null,entry);
})(),time_tracker$components$Day_view$render_$_iter__22979.call(null,cljs.core.rest.call(null,s__22980__$2)));
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

//# sourceMappingURL=Day_view.js.map?rel=1570412435440
