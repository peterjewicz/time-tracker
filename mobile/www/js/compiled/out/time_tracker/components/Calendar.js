// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.Calendar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.utilities.view_handler');
goog.require('module$Applications$server$time_tracker$node_modules$moment$moment');
time_tracker.components.Calendar.open_day_view = (function time_tracker$components$Calendar$open_day_view(date,app_state){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activeDate","activeDate",762378079),date], null));

return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"day","day",-274800446),"active"], null));
});
time_tracker.components.Calendar.get_visible_dates = (function time_tracker$components$Calendar$get_visible_dates(projects){

var returnDates = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var seq__30087_30091 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [projects], null));
var chunk__30088_30092 = null;
var count__30089_30093 = (0);
var i__30090_30094 = (0);
while(true){
if((i__30090_30094 < count__30089_30093)){
var date_30095 = cljs.core._nth.call(null,chunk__30088_30092,i__30090_30094);
var currentKey_30096 = cljs.core.first.call(null,cljs.core.keys.call(null,cljs.core.js__GT_clj.call(null,date_30095)));
var mappedValue_30097 = cljs.core.into.call(null,cljs.core.js__GT_clj.call(null,date_30095),cljs.core.PersistentArrayMap.EMPTY);
var dates_30098 = cljs.core.keys.call(null,cljs.core.get.call(null,mappedValue_30097,currentKey_30096));
var i_30099 = (0);
var formattedDates_30100 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,i_30099,cljs.core.count.call(null,dates_30098))){
} else {
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,dates_30098,i_30099))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.nth.call(null,dates_30098,i_30099))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30098,i_30099),(2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30098,i_30099),(3))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30098,i_30099),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30098,i_30099),(5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30098,i_30099),(6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30098,i_30099),(7)))].join(''));

var G__30101 = (i_30099 + (1));
var G__30102 = cljs.core.conj.call(null,formattedDates_30100,cljs.core.nth.call(null,dates_30098,i_30099));
i_30099 = G__30101;
formattedDates_30100 = G__30102;
continue;
}
break;
}


var G__30103 = seq__30087_30091;
var G__30104 = chunk__30088_30092;
var G__30105 = count__30089_30093;
var G__30106 = (i__30090_30094 + (1));
seq__30087_30091 = G__30103;
chunk__30088_30092 = G__30104;
count__30089_30093 = G__30105;
i__30090_30094 = G__30106;
continue;
} else {
var temp__5457__auto___30107 = cljs.core.seq.call(null,seq__30087_30091);
if(temp__5457__auto___30107){
var seq__30087_30108__$1 = temp__5457__auto___30107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30087_30108__$1)){
var c__4319__auto___30109 = cljs.core.chunk_first.call(null,seq__30087_30108__$1);
var G__30110 = cljs.core.chunk_rest.call(null,seq__30087_30108__$1);
var G__30111 = c__4319__auto___30109;
var G__30112 = cljs.core.count.call(null,c__4319__auto___30109);
var G__30113 = (0);
seq__30087_30091 = G__30110;
chunk__30088_30092 = G__30111;
count__30089_30093 = G__30112;
i__30090_30094 = G__30113;
continue;
} else {
var date_30114 = cljs.core.first.call(null,seq__30087_30108__$1);
var currentKey_30115 = cljs.core.first.call(null,cljs.core.keys.call(null,cljs.core.js__GT_clj.call(null,date_30114)));
var mappedValue_30116 = cljs.core.into.call(null,cljs.core.js__GT_clj.call(null,date_30114),cljs.core.PersistentArrayMap.EMPTY);
var dates_30117 = cljs.core.keys.call(null,cljs.core.get.call(null,mappedValue_30116,currentKey_30115));
var i_30118 = (0);
var formattedDates_30119 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,i_30118,cljs.core.count.call(null,dates_30117))){
} else {
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,dates_30117,i_30118))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.nth.call(null,dates_30117,i_30118))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30117,i_30118),(2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30117,i_30118),(3))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30117,i_30118),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30117,i_30118),(5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30117,i_30118),(6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_30117,i_30118),(7)))].join(''));

var G__30120 = (i_30118 + (1));
var G__30121 = cljs.core.conj.call(null,formattedDates_30119,cljs.core.nth.call(null,dates_30117,i_30118));
i_30118 = G__30120;
formattedDates_30119 = G__30121;
continue;
}
break;
}


var G__30122 = cljs.core.next.call(null,seq__30087_30108__$1);
var G__30123 = null;
var G__30124 = (0);
var G__30125 = (0);
seq__30087_30091 = G__30122;
chunk__30088_30092 = G__30123;
count__30089_30093 = G__30124;
i__30090_30094 = G__30125;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,returnDates);
});
time_tracker.components.Calendar.get_current_month_days = (function time_tracker$components$Calendar$get_current_month_days(currentMonth){
return module$Applications$server$time_tracker$node_modules$moment$moment["default"](currentMonth,"MM").daysInMonth("YYYY-MM");
});
time_tracker.components.Calendar.get_day_display = (function time_tracker$components$Calendar$get_day_display(offsetAmount,numberOfDays,currentCount){

if((currentCount <= offsetAmount)){
return "";
} else {
if((currentCount > (offsetAmount + numberOfDays))){
return "";
} else {
return (currentCount - offsetAmount);
}
}
});
time_tracker.components.Calendar.generate_table_row = (function time_tracker$components$Calendar$generate_table_row(offsetAmount,numberOfDays,i,currentMonth,currentYear,date_values,app_state){

var x = (1);
var row = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null);
while(true){
if(cljs.core._EQ_.call(null,x,(8))){
return row;
} else {
if((((i + x) - offsetAmount) < (10))){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((i + x) - offsetAmount)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join('')]),date_values))){
var G__30126 = (x + (1));
var G__30127 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.active","td.active",1072089856),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x,row){
return (function (){
return time_tracker.components.Calendar.open_day_view.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((i + x) - offsetAmount)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join(''),app_state);
});})(x,row))
], null),time_tracker.components.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__30126;
row = G__30127;
continue;
} else {
var G__30128 = (x + (1));
var G__30129 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),time_tracker.components.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__30128;
row = G__30129;
continue;
}
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((i + x) - offsetAmount)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join('')]),date_values))){
var G__30130 = (x + (1));
var G__30131 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.active","td.active",1072089856),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x,row){
return (function (){
return time_tracker.components.Calendar.open_day_view.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((i + x) - offsetAmount)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join(''),app_state);
});})(x,row))
], null),time_tracker.components.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__30130;
row = G__30131;
continue;
} else {
var G__30132 = (x + (1));
var G__30133 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),time_tracker.components.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__30132;
row = G__30133;
continue;
}
}
}
break;
}
});
time_tracker.components.Calendar.generate_table_html = (function time_tracker$components$Calendar$generate_table_html(numberOfDays,currentMonth,currentYear,date_values,app_state){
var offsetAmount = module$Applications$server$time_tracker$node_modules$moment$moment["default"]([cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join(''),"MM/YYYY").startOf("month").day();
var loopTotal = (offsetAmount + numberOfDays);
var i = (0);
var html = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null);
while(true){
if((i >= loopTotal)){
return html;
} else {
var G__30134 = (i + (7));
var G__30135 = cljs.core.conj.call(null,html,time_tracker.components.Calendar.generate_table_row.call(null,offsetAmount,numberOfDays,i,currentMonth,currentYear,date_values,app_state));
i = G__30134;
html = G__30135;
continue;
}
break;
}
});
time_tracker.components.Calendar.increment_year = (function time_tracker$components$Calendar$increment_year(currentYear){
return (parseInt(currentYear) + (1));
});
time_tracker.components.Calendar.deincrement_year = (function time_tracker$components$Calendar$deincrement_year(currentYear){
return (parseInt(currentYear) - (1));
});
time_tracker.components.Calendar.increment_month = (function time_tracker$components$Calendar$increment_month(current,currentYear,monthDays){
if(cljs.core._EQ_.call(null,current,(12))){
cljs.core.reset_BANG_.call(null,monthDays,time_tracker.components.Calendar.get_current_month_days.call(null,(1)));

cljs.core.swap_BANG_.call(null,currentYear,(function (current__$1){
return time_tracker.components.Calendar.increment_year.call(null,current__$1);
}));

return (1);
} else {
cljs.core.reset_BANG_.call(null,monthDays,time_tracker.components.Calendar.get_current_month_days.call(null,(parseInt(current) + (1))));

return (parseInt(current) + (1));
}
});
time_tracker.components.Calendar.deincrement_month = (function time_tracker$components$Calendar$deincrement_month(current,currentYear,monthDays){
if(cljs.core._EQ_.call(null,current,(1))){
cljs.core.reset_BANG_.call(null,monthDays,time_tracker.components.Calendar.get_current_month_days.call(null,(12)));

cljs.core.swap_BANG_.call(null,currentYear,(function (current__$1){
return time_tracker.components.Calendar.deincrement_year.call(null,current__$1);
}));

return (12);
} else {
cljs.core.reset_BANG_.call(null,monthDays,time_tracker.components.Calendar.get_current_month_days.call(null,(parseInt(current) - (1))));

return (parseInt(current) - (1));
}
});
time_tracker.components.Calendar.render = (function time_tracker$components$Calendar$render(app_state){
var currentMonth = reagent.core.atom.call(null,module$Applications$server$time_tracker$node_modules$moment$moment["default"]().format("MM"));
var currentYear = reagent.core.atom.call(null,module$Applications$server$time_tracker$node_modules$moment$moment["default"]().format("YYYY"));
var monthDays = reagent.core.atom.call(null,time_tracker.components.Calendar.get_current_month_days.call(null,cljs.core.deref.call(null,currentMonth)));
var visibleDates = time_tracker.components.Calendar.get_visible_dates.call(null,new cljs.core.Keyword(null,"projectDates","projectDates",760851171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
return ((function (currentMonth,currentYear,monthDays,visibleDates){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar","div.Calendar",-810226548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"calendar","calendar",62308146).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time_tracker.utilities.view_handler.active_view))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar-header","div.Calendar-header",-509842471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentMonth,currentYear,monthDays,visibleDates){
return (function (){
return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"calendar","calendar",62308146),false], null));
});})(currentMonth,currentYear,monthDays,visibleDates))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-long-arrow-alt-left","i.fas.fa-long-arrow-alt-left",1932573860)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Calendar"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar-body","div.Calendar-body",1455692637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar-Header","div.Calendar-Header",-409061792),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Calendar-arrow","p.Calendar-arrow",-1111322593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentMonth,currentYear,monthDays,visibleDates){
return (function (){
return cljs.core.swap_BANG_.call(null,currentMonth,((function (currentMonth,currentYear,monthDays,visibleDates){
return (function (current,currentYear__$1){
return time_tracker.components.Calendar.deincrement_month.call(null,current,currentYear__$1,monthDays);
});})(currentMonth,currentYear,monthDays,visibleDates))
,currentYear,monthDays);
});})(currentMonth,currentYear,monthDays,visibleDates))
], null),"<-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Calendar-Title","p.Calendar-Title",1330416951),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,currentMonth),"MM").format("MMMM"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,currentYear))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Calendar-arrow","p.Calendar-arrow",-1111322593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentMonth,currentYear,monthDays,visibleDates){
return (function (){
return cljs.core.swap_BANG_.call(null,currentMonth,((function (currentMonth,currentYear,monthDays,visibleDates){
return (function (current,currentYear__$1){
return time_tracker.components.Calendar.increment_month.call(null,current,currentYear__$1,monthDays);
});})(currentMonth,currentYear,monthDays,visibleDates))
,currentYear,monthDays);
});})(currentMonth,currentYear,monthDays,visibleDates))
], null),"->"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.Calendar-wrapper","table.Calendar-wrapper",958754365),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Sun"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Wed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Thur"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Fri"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Sat"], null)], null)], null),time_tracker.components.Calendar.generate_table_html.call(null,cljs.core.deref.call(null,monthDays),cljs.core.deref.call(null,currentMonth),cljs.core.deref.call(null,currentYear),visibleDates,app_state)], null)], null)], null)], null);
});
;})(currentMonth,currentYear,monthDays,visibleDates))
});

//# sourceMappingURL=Calendar.js.map?rel=1551968262427
