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
var seq__22936_22946 = cljs.core.seq.call(null,listOfProjects);
var chunk__22937_22947 = null;
var count__22938_22948 = (0);
var i__22939_22949 = (0);
while(true){
if((i__22939_22949 < count__22938_22948)){
var vec__22940_22950 = cljs.core._nth.call(null,chunk__22937_22947,i__22939_22949);
var date_22951 = cljs.core.nth.call(null,vec__22940_22950,(0),null);
var currentDates_22952 = cljs.core.get.call(null,listOfProjects,date_22951);
if(cljs.core.truth_(cljs.core.get.call(null,currentDates_22952,currentDay))){
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22951),cljs.core.get.call(null,currentDates_22952,currentDay)]));
} else {
}


var G__22953 = seq__22936_22946;
var G__22954 = chunk__22937_22947;
var G__22955 = count__22938_22948;
var G__22956 = (i__22939_22949 + (1));
seq__22936_22946 = G__22953;
chunk__22937_22947 = G__22954;
count__22938_22948 = G__22955;
i__22939_22949 = G__22956;
continue;
} else {
var temp__5457__auto___22957 = cljs.core.seq.call(null,seq__22936_22946);
if(temp__5457__auto___22957){
var seq__22936_22958__$1 = temp__5457__auto___22957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22936_22958__$1)){
var c__4319__auto___22959 = cljs.core.chunk_first.call(null,seq__22936_22958__$1);
var G__22960 = cljs.core.chunk_rest.call(null,seq__22936_22958__$1);
var G__22961 = c__4319__auto___22959;
var G__22962 = cljs.core.count.call(null,c__4319__auto___22959);
var G__22963 = (0);
seq__22936_22946 = G__22960;
chunk__22937_22947 = G__22961;
count__22938_22948 = G__22962;
i__22939_22949 = G__22963;
continue;
} else {
var vec__22943_22964 = cljs.core.first.call(null,seq__22936_22958__$1);
var date_22965 = cljs.core.nth.call(null,vec__22943_22964,(0),null);
var currentDates_22966 = cljs.core.get.call(null,listOfProjects,date_22965);
if(cljs.core.truth_(cljs.core.get.call(null,currentDates_22966,currentDay))){
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22965),cljs.core.get.call(null,currentDates_22966,currentDay)]));
} else {
}


var G__22967 = cljs.core.next.call(null,seq__22936_22958__$1);
var G__22968 = null;
var G__22969 = (0);
var G__22970 = (0);
seq__22936_22946 = G__22967;
chunk__22937_22947 = G__22968;
count__22938_22948 = G__22969;
i__22939_22949 = G__22970;
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
return (function time_tracker$components$Day_view$render_$_iter__22971(s__22972){
return (new cljs.core.LazySeq(null,((function (currentEnteries){
return (function (){
var s__22972__$1 = s__22972;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22972__$1);
if(temp__5457__auto__){
var s__22972__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22972__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22972__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22974 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22973 = (0);
while(true){
if((i__22973 < size__4291__auto__)){
var entry = cljs.core._nth.call(null,c__4290__auto__,i__22973);
cljs.core.chunk_append.call(null,b__22974,(function (){var iter__4292__auto__ = ((function (i__22973,entry,c__4290__auto__,size__4291__auto__,b__22974,s__22972__$2,temp__5457__auto__,currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__22971_$_iter__22975(s__22976){
return (new cljs.core.LazySeq(null,((function (i__22973,entry,c__4290__auto__,size__4291__auto__,b__22974,s__22972__$2,temp__5457__auto__,currentEnteries){
return (function (){
var s__22976__$1 = s__22976;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22976__$1);
if(temp__5457__auto____$1){
var s__22976__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22976__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__22976__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__22978 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__22977 = (0);
while(true){
if((i__22977 < size__4291__auto____$1)){
var dates = cljs.core._nth.call(null,c__4290__auto____$1,i__22977);
cljs.core.chunk_append.call(null,b__22978,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22983 = ((2) + i);
var G__22984 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22983;
html = G__22984;
continue;
}
break;
}
})()));

var G__22985 = (i__22977 + (1));
i__22977 = G__22985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22978),time_tracker$components$Day_view$render_$_iter__22971_$_iter__22975.call(null,cljs.core.chunk_rest.call(null,s__22976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22978),null);
}
} else {
var dates = cljs.core.first.call(null,s__22976__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22986 = ((2) + i);
var G__22987 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22986;
html = G__22987;
continue;
}
break;
}
})()),time_tracker$components$Day_view$render_$_iter__22971_$_iter__22975.call(null,cljs.core.rest.call(null,s__22976__$2)));
}
} else {
return null;
}
break;
}
});})(i__22973,entry,c__4290__auto__,size__4291__auto__,b__22974,s__22972__$2,temp__5457__auto__,currentEnteries))
,null,null));
});})(i__22973,entry,c__4290__auto__,size__4291__auto__,b__22974,s__22972__$2,temp__5457__auto__,currentEnteries))
;
return iter__4292__auto__.call(null,entry);
})());

var G__22988 = (i__22973 + (1));
i__22973 = G__22988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22974),time_tracker$components$Day_view$render_$_iter__22971.call(null,cljs.core.chunk_rest.call(null,s__22972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22974),null);
}
} else {
var entry = cljs.core.first.call(null,s__22972__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (entry,s__22972__$2,temp__5457__auto__,currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__22971_$_iter__22979(s__22980){
return (new cljs.core.LazySeq(null,((function (entry,s__22972__$2,temp__5457__auto__,currentEnteries){
return (function (){
var s__22980__$1 = s__22980;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22980__$1);
if(temp__5457__auto____$1){
var s__22980__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22980__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22980__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22982 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22981 = (0);
while(true){
if((i__22981 < size__4291__auto__)){
var dates = cljs.core._nth.call(null,c__4290__auto__,i__22981);
cljs.core.chunk_append.call(null,b__22982,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22989 = ((2) + i);
var G__22990 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22989;
html = G__22990;
continue;
}
break;
}
})()));

var G__22991 = (i__22981 + (1));
i__22981 = G__22991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22982),time_tracker$components$Day_view$render_$_iter__22971_$_iter__22979.call(null,cljs.core.chunk_rest.call(null,s__22980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22982),null);
}
} else {
var dates = cljs.core.first.call(null,s__22980__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__22992 = ((2) + i);
var G__22993 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__22992;
html = G__22993;
continue;
}
break;
}
})()),time_tracker$components$Day_view$render_$_iter__22971_$_iter__22979.call(null,cljs.core.rest.call(null,s__22980__$2)));
}
} else {
return null;
}
break;
}
});})(entry,s__22972__$2,temp__5457__auto__,currentEnteries))
,null,null));
});})(entry,s__22972__$2,temp__5457__auto__,currentEnteries))
;
return iter__4292__auto__.call(null,entry);
})(),time_tracker$components$Day_view$render_$_iter__22971.call(null,cljs.core.rest.call(null,s__22972__$2)));
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

//# sourceMappingURL=Day_view.js.map?rel=1556144017151
