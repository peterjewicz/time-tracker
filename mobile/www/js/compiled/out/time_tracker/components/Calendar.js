// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.Calendar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.utilities.view_handler');
goog.require('module$Applications$server$time_tracker$node_modules$moment$moment');
time_tracker.components.Calendar.open_day_view = (function time_tracker$components$Calendar$open_day_view(date,app_state){
if(((!(cljs.core._EQ_.call(null,cljs.core.first.call(null,date),"0"))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,date),"/")))){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activeDate","activeDate",762378079),["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null));

return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"day","day",-274800446),"active"], null));
} else {
cljs.core.swap_BANG_.call(null,app_state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activeDate","activeDate",762378079),date], null));

return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"day","day",-274800446),"active"], null));
}
});
time_tracker.components.Calendar.get_visible_dates = (function time_tracker$components$Calendar$get_visible_dates(projects){

var returnDates = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var seq__27518_27522 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [projects], null));
var chunk__27519_27523 = null;
var count__27520_27524 = (0);
var i__27521_27525 = (0);
while(true){
if((i__27521_27525 < count__27520_27524)){
var date_27526 = cljs.core._nth.call(null,chunk__27519_27523,i__27521_27525);
var currentKey_27527 = cljs.core.first.call(null,cljs.core.keys.call(null,cljs.core.js__GT_clj.call(null,date_27526)));
var mappedValue_27528 = cljs.core.into.call(null,cljs.core.js__GT_clj.call(null,date_27526),cljs.core.PersistentArrayMap.EMPTY);
var dates_27529 = cljs.core.keys.call(null,cljs.core.get.call(null,mappedValue_27528,currentKey_27527));
var i_27530 = (0);
var formattedDates_27531 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,i_27530,cljs.core.count.call(null,dates_27529))){
} else {
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,dates_27529,i_27530))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.nth.call(null,dates_27529,i_27530))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27529,i_27530),(2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27529,i_27530),(3))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27529,i_27530),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27529,i_27530),(5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27529,i_27530),(6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27529,i_27530),(7)))].join(''));

var G__27532 = (i_27530 + (1));
var G__27533 = cljs.core.conj.call(null,formattedDates_27531,cljs.core.nth.call(null,dates_27529,i_27530));
i_27530 = G__27532;
formattedDates_27531 = G__27533;
continue;
}
break;
}


var G__27534 = seq__27518_27522;
var G__27535 = chunk__27519_27523;
var G__27536 = count__27520_27524;
var G__27537 = (i__27521_27525 + (1));
seq__27518_27522 = G__27534;
chunk__27519_27523 = G__27535;
count__27520_27524 = G__27536;
i__27521_27525 = G__27537;
continue;
} else {
var temp__5457__auto___27538 = cljs.core.seq.call(null,seq__27518_27522);
if(temp__5457__auto___27538){
var seq__27518_27539__$1 = temp__5457__auto___27538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27518_27539__$1)){
var c__4319__auto___27540 = cljs.core.chunk_first.call(null,seq__27518_27539__$1);
var G__27541 = cljs.core.chunk_rest.call(null,seq__27518_27539__$1);
var G__27542 = c__4319__auto___27540;
var G__27543 = cljs.core.count.call(null,c__4319__auto___27540);
var G__27544 = (0);
seq__27518_27522 = G__27541;
chunk__27519_27523 = G__27542;
count__27520_27524 = G__27543;
i__27521_27525 = G__27544;
continue;
} else {
var date_27545 = cljs.core.first.call(null,seq__27518_27539__$1);
var currentKey_27546 = cljs.core.first.call(null,cljs.core.keys.call(null,cljs.core.js__GT_clj.call(null,date_27545)));
var mappedValue_27547 = cljs.core.into.call(null,cljs.core.js__GT_clj.call(null,date_27545),cljs.core.PersistentArrayMap.EMPTY);
var dates_27548 = cljs.core.keys.call(null,cljs.core.get.call(null,mappedValue_27547,currentKey_27546));
var i_27549 = (0);
var formattedDates_27550 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,i_27549,cljs.core.count.call(null,dates_27548))){
} else {
cljs.core.swap_BANG_.call(null,returnDates,cljs.core.conj,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,dates_27548,i_27549))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.nth.call(null,dates_27548,i_27549))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27548,i_27549),(2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27548,i_27549),(3))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27548,i_27549),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27548,i_27549),(5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27548,i_27549),(6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,dates_27548,i_27549),(7)))].join(''));

var G__27551 = (i_27549 + (1));
var G__27552 = cljs.core.conj.call(null,formattedDates_27550,cljs.core.nth.call(null,dates_27548,i_27549));
i_27549 = G__27551;
formattedDates_27550 = G__27552;
continue;
}
break;
}


var G__27553 = cljs.core.next.call(null,seq__27518_27539__$1);
var G__27554 = null;
var G__27555 = (0);
var G__27556 = (0);
seq__27518_27522 = G__27553;
chunk__27519_27523 = G__27554;
count__27520_27524 = G__27555;
i__27521_27525 = G__27556;
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
var G__27557 = (x + (1));
var G__27558 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.active","td.active",1072089856),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x,row){
return (function (){
return time_tracker.components.Calendar.open_day_view.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((i + x) - offsetAmount)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join(''),app_state);
});})(x,row))
], null),time_tracker.components.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__27557;
row = G__27558;
continue;
} else {
var G__27559 = (x + (1));
var G__27560 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),time_tracker.components.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__27559;
row = G__27560;
continue;
}
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((i + x) - offsetAmount)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join('')]),date_values))){
var G__27561 = (x + (1));
var G__27562 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.active","td.active",1072089856),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x,row){
return (function (){
return time_tracker.components.Calendar.open_day_view.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((i + x) - offsetAmount)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join(''),app_state);
});})(x,row))
], null),time_tracker.components.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__27561;
row = G__27562;
continue;
} else {
var G__27563 = (x + (1));
var G__27564 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),time_tracker.components.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__27563;
row = G__27564;
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
var G__27565 = (i + (7));
var G__27566 = cljs.core.conj.call(null,html,time_tracker.components.Calendar.generate_table_row.call(null,offsetAmount,numberOfDays,i,currentMonth,currentYear,date_values,app_state));
i = G__27565;
html = G__27566;
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

return "01";
} else {
cljs.core.reset_BANG_.call(null,monthDays,time_tracker.components.Calendar.get_current_month_days.call(null,(parseInt(current) + (1))));

if((current < (9))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1((parseInt(current) + (1)))].join('');
} else {
return (parseInt(current) + (1));
}
}
});
time_tracker.components.Calendar.deincrement_month = (function time_tracker$components$Calendar$deincrement_month(current,currentYear,monthDays){
if(cljs.core._EQ_.call(null,current,"01")){
cljs.core.reset_BANG_.call(null,monthDays,time_tracker.components.Calendar.get_current_month_days.call(null,(12)));

cljs.core.swap_BANG_.call(null,currentYear,(function (current__$1){
return time_tracker.components.Calendar.deincrement_year.call(null,current__$1);
}));

return (12);
} else {
cljs.core.reset_BANG_.call(null,monthDays,time_tracker.components.Calendar.get_current_month_days.call(null,(parseInt(current) - (1))));

if((current <= (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1((parseInt(current) - (1)))].join('');
} else {
return (parseInt(current) - (1));
}
}
});
time_tracker.components.Calendar.render = (function time_tracker$components$Calendar$render(app_state){
var currentMonth = reagent.core.atom.call(null,module$Applications$server$time_tracker$node_modules$moment$moment["default"]().format("MM"));
var currentYear = reagent.core.atom.call(null,module$Applications$server$time_tracker$node_modules$moment$moment["default"]().format("YYYY"));
var monthDays = reagent.core.atom.call(null,time_tracker.components.Calendar.get_current_month_days.call(null,cljs.core.deref.call(null,currentMonth)));
return ((function (currentMonth,currentYear,monthDays){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar","div.Calendar",-810226548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"calendar","calendar",62308146).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time_tracker.utilities.view_handler.active_view))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar-header","div.Calendar-header",-509842471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentMonth,currentYear,monthDays){
return (function (){
return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"calendar","calendar",62308146),false], null));
});})(currentMonth,currentYear,monthDays))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-long-arrow-alt-left","i.fas.fa-long-arrow-alt-left",1932573860)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Calendar"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar-body","div.Calendar-body",1455692637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar-Header","div.Calendar-Header",-409061792),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Calendar-arrow","p.Calendar-arrow",-1111322593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentMonth,currentYear,monthDays){
return (function (){
return cljs.core.swap_BANG_.call(null,currentMonth,((function (currentMonth,currentYear,monthDays){
return (function (current,currentYear__$1){
return time_tracker.components.Calendar.deincrement_month.call(null,current,currentYear__$1,monthDays);
});})(currentMonth,currentYear,monthDays))
,currentYear,monthDays);
});})(currentMonth,currentYear,monthDays))
], null),"<"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Calendar-Title","p.Calendar-Title",1330416951),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,currentMonth),"MM").format("MMMM"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,currentYear))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Calendar-arrow","p.Calendar-arrow",-1111322593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentMonth,currentYear,monthDays){
return (function (){
return cljs.core.swap_BANG_.call(null,currentMonth,((function (currentMonth,currentYear,monthDays){
return (function (current,currentYear__$1){
return time_tracker.components.Calendar.increment_month.call(null,current,currentYear__$1,monthDays);
});})(currentMonth,currentYear,monthDays))
,currentYear,monthDays);
});})(currentMonth,currentYear,monthDays))
], null),">"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.Calendar-wrapper","table.Calendar-wrapper",958754365),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Sun"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Wed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Thur"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Fri"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Sat"], null)], null)], null),time_tracker.components.Calendar.generate_table_html.call(null,cljs.core.deref.call(null,monthDays),cljs.core.deref.call(null,currentMonth),cljs.core.deref.call(null,currentYear),time_tracker.components.Calendar.get_visible_dates.call(null,new cljs.core.Keyword(null,"projectDates","projectDates",760851171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))),app_state)], null)], null)], null)], null);
});
;})(currentMonth,currentYear,monthDays))
});

//# sourceMappingURL=Calendar.js.map?rel=1553263407334
