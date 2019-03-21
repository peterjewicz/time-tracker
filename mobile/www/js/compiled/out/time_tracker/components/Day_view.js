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
var seq__28495_28505 = cljs.core.seq.call(null,listOfProjects);
var chunk__28496_28506 = null;
var count__28497_28507 = (0);
var i__28498_28508 = (0);
while(true){
if((i__28498_28508 < count__28497_28507)){
var vec__28499_28509 = cljs.core._nth.call(null,chunk__28496_28506,i__28498_28508);
var date_28510 = cljs.core.nth.call(null,vec__28499_28509,(0),null);
var currentDates_28511 = cljs.core.get.call(null,listOfProjects,date_28510);
if(cljs.core.truth_(cljs.core.get.call(null,currentDates_28511,currentDay))){
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_28510),cljs.core.get.call(null,currentDates_28511,currentDay)]));
} else {
}


var G__28512 = seq__28495_28505;
var G__28513 = chunk__28496_28506;
var G__28514 = count__28497_28507;
var G__28515 = (i__28498_28508 + (1));
seq__28495_28505 = G__28512;
chunk__28496_28506 = G__28513;
count__28497_28507 = G__28514;
i__28498_28508 = G__28515;
continue;
} else {
var temp__5457__auto___28516 = cljs.core.seq.call(null,seq__28495_28505);
if(temp__5457__auto___28516){
var seq__28495_28517__$1 = temp__5457__auto___28516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28495_28517__$1)){
var c__4319__auto___28518 = cljs.core.chunk_first.call(null,seq__28495_28517__$1);
var G__28519 = cljs.core.chunk_rest.call(null,seq__28495_28517__$1);
var G__28520 = c__4319__auto___28518;
var G__28521 = cljs.core.count.call(null,c__4319__auto___28518);
var G__28522 = (0);
seq__28495_28505 = G__28519;
chunk__28496_28506 = G__28520;
count__28497_28507 = G__28521;
i__28498_28508 = G__28522;
continue;
} else {
var vec__28502_28523 = cljs.core.first.call(null,seq__28495_28517__$1);
var date_28524 = cljs.core.nth.call(null,vec__28502_28523,(0),null);
var currentDates_28525 = cljs.core.get.call(null,listOfProjects,date_28524);
if(cljs.core.truth_(cljs.core.get.call(null,currentDates_28525,currentDay))){
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_28524),cljs.core.get.call(null,currentDates_28525,currentDay)]));
} else {
}


var G__28526 = cljs.core.next.call(null,seq__28495_28517__$1);
var G__28527 = null;
var G__28528 = (0);
var G__28529 = (0);
seq__28495_28505 = G__28526;
chunk__28496_28506 = G__28527;
count__28497_28507 = G__28528;
i__28498_28508 = G__28529;
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
return (function time_tracker$components$Day_view$render_$_iter__28530(s__28531){
return (new cljs.core.LazySeq(null,((function (currentEnteries){
return (function (){
var s__28531__$1 = s__28531;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28531__$1);
if(temp__5457__auto__){
var s__28531__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28531__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28531__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28533 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28532 = (0);
while(true){
if((i__28532 < size__4291__auto__)){
var entry = cljs.core._nth.call(null,c__4290__auto__,i__28532);
cljs.core.chunk_append.call(null,b__28533,(function (){var iter__4292__auto__ = ((function (i__28532,entry,c__4290__auto__,size__4291__auto__,b__28533,s__28531__$2,temp__5457__auto__,currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__28530_$_iter__28534(s__28535){
return (new cljs.core.LazySeq(null,((function (i__28532,entry,c__4290__auto__,size__4291__auto__,b__28533,s__28531__$2,temp__5457__auto__,currentEnteries){
return (function (){
var s__28535__$1 = s__28535;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__28535__$1);
if(temp__5457__auto____$1){
var s__28535__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28535__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__28535__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__28537 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__28536 = (0);
while(true){
if((i__28536 < size__4291__auto____$1)){
var dates = cljs.core._nth.call(null,c__4290__auto____$1,i__28536);
cljs.core.chunk_append.call(null,b__28537,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__28542 = ((2) + i);
var G__28543 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__28542;
html = G__28543;
continue;
}
break;
}
})()));

var G__28544 = (i__28536 + (1));
i__28536 = G__28544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28537),time_tracker$components$Day_view$render_$_iter__28530_$_iter__28534.call(null,cljs.core.chunk_rest.call(null,s__28535__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28537),null);
}
} else {
var dates = cljs.core.first.call(null,s__28535__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__28545 = ((2) + i);
var G__28546 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__28545;
html = G__28546;
continue;
}
break;
}
})()),time_tracker$components$Day_view$render_$_iter__28530_$_iter__28534.call(null,cljs.core.rest.call(null,s__28535__$2)));
}
} else {
return null;
}
break;
}
});})(i__28532,entry,c__4290__auto__,size__4291__auto__,b__28533,s__28531__$2,temp__5457__auto__,currentEnteries))
,null,null));
});})(i__28532,entry,c__4290__auto__,size__4291__auto__,b__28533,s__28531__$2,temp__5457__auto__,currentEnteries))
;
return iter__4292__auto__.call(null,entry);
})());

var G__28547 = (i__28532 + (1));
i__28532 = G__28547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28533),time_tracker$components$Day_view$render_$_iter__28530.call(null,cljs.core.chunk_rest.call(null,s__28531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28533),null);
}
} else {
var entry = cljs.core.first.call(null,s__28531__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (entry,s__28531__$2,temp__5457__auto__,currentEnteries){
return (function time_tracker$components$Day_view$render_$_iter__28530_$_iter__28538(s__28539){
return (new cljs.core.LazySeq(null,((function (entry,s__28531__$2,temp__5457__auto__,currentEnteries){
return (function (){
var s__28539__$1 = s__28539;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__28539__$1);
if(temp__5457__auto____$1){
var s__28539__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28539__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28539__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28541 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28540 = (0);
while(true){
if((i__28540 < size__4291__auto__)){
var dates = cljs.core._nth.call(null,c__4290__auto__,i__28540);
cljs.core.chunk_append.call(null,b__28541,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__28548 = ((2) + i);
var G__28549 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__28548;
html = G__28549;
continue;
}
break;
}
})()));

var G__28550 = (i__28540 + (1));
i__28540 = G__28550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28541),time_tracker$components$Day_view$render_$_iter__28530_$_iter__28538.call(null,cljs.core.chunk_rest.call(null,s__28539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28541),null);
}
} else {
var dates = cljs.core.first.call(null,s__28539__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.type.call(null,dates),cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dates], null),dates], null):(function (){var i = (0);
var html = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dates),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,dates))){
return html;
} else {
var seconds = (cljs.core.nth.call(null,dates,(i + (1))) - cljs.core.nth.call(null,dates,i));
var G__28551 = ((2) + i);
var G__28552 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.components.Day_view.get_formatted_date_entry.call(null,cljs.core.nth.call(null,dates,i),cljs.core.nth.call(null,dates,(i + (1))))], null));
i = G__28551;
html = G__28552;
continue;
}
break;
}
})()),time_tracker$components$Day_view$render_$_iter__28530_$_iter__28538.call(null,cljs.core.rest.call(null,s__28539__$2)));
}
} else {
return null;
}
break;
}
});})(entry,s__28531__$2,temp__5457__auto__,currentEnteries))
,null,null));
});})(entry,s__28531__$2,temp__5457__auto__,currentEnteries))
;
return iter__4292__auto__.call(null,entry);
})(),time_tracker$components$Day_view$render_$_iter__28530.call(null,cljs.core.rest.call(null,s__28531__$2)));
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

//# sourceMappingURL=Day_view.js.map?rel=1553171828572
