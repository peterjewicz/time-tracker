// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.datepicker');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('module$Applications$server$time_tracker$node_modules$moment$moment');
if(typeof time_tracker.components.datepicker.months !== 'undefined'){
} else {
time_tracker.components.datepicker.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
}
if(typeof time_tracker.components.datepicker.monthMap !== 'undefined'){
} else {
time_tracker.components.datepicker.monthMap = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"June","June",-239852188),new cljs.core.Keyword(null,"January","January",1371836485),new cljs.core.Keyword(null,"November","November",1309168199),new cljs.core.Keyword(null,"December","December",-997702713),new cljs.core.Keyword(null,"April","April",2129469609),new cljs.core.Keyword(null,"August","August",1477870381),new cljs.core.Keyword(null,"March","March",-1927014290),new cljs.core.Keyword(null,"October","October",1442498414),new cljs.core.Keyword(null,"May","May",291127633),new cljs.core.Keyword(null,"July","July",22844502),new cljs.core.Keyword(null,"September","September",-1384246246),new cljs.core.Keyword(null,"February","February",-1121382977)],[(6),(1),(11),(12),(4),(8),(3),(10),(5),(7),(9),(2)]);
}
if(typeof time_tracker.components.datepicker.defaultStyles !== 'undefined'){
} else {
time_tracker.components.datepicker.defaultStyles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center",(0),"rgba(255,255,255,.95)","100%",(-999),"center","flex","fixed","column","100%","-2000px"]);
}
time_tracker.components.datepicker.generate_date_string = (function time_tracker$components$datepicker$generate_date_string(dateMapToFormat){

var test = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(dateMapToFormat)).call(null,time_tracker.components.datepicker.monthMap)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(dateMapToFormat)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(dateMapToFormat))].join('');
return module$Applications$server$time_tracker$node_modules$moment$moment["default"](test).format("MM/DD/YYYY");
});
time_tracker.components.datepicker.update_passed_store = (function time_tracker$components$datepicker$update_passed_store(val,store){

cljs.core.println.call(null,time_tracker.components.datepicker.generate_date_string.call(null,val));

return cljs.core.reset_BANG_.call(null,store,time_tracker.components.datepicker.generate_date_string.call(null,val));
});
time_tracker.components.datepicker.generate_css = (function time_tracker$components$datepicker$generate_css(styles){

return ["style=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__22436){
var vec__22437 = p__22436;
var key = cljs.core.nth.call(null,vec__22437,(0),null);
var val = cljs.core.nth.call(null,vec__22437,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('');
}),styles))),"\""].join('');
});
time_tracker.components.datepicker.generate_months = (function time_tracker$components$datepicker$generate_months(){
return cljs.core.map.call(null,(function (month){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),month,new cljs.core.Keyword(null,"key","key",-1516042587),month], null),month], null);
}),time_tracker.components.datepicker.months);
});
time_tracker.components.datepicker.generate_years = (function time_tracker$components$datepicker$generate_years(){
return cljs.core.map.call(null,(function (year){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),year,new cljs.core.Keyword(null,"key","key",-1516042587),year], null),year], null);
}),cljs.core.range.call(null,module$Applications$server$time_tracker$node_modules$moment$moment["default"]().year(),((50) + module$Applications$server$time_tracker$node_modules$moment$moment["default"]().year())));
});
time_tracker.components.datepicker.generate_days = (function time_tracker$components$datepicker$generate_days(date){
return cljs.core.map.call(null,(function (day){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),day,new cljs.core.Keyword(null,"key","key",-1516042587),day], null),day], null);
}),cljs.core.range.call(null,(1),((1) + module$Applications$server$time_tracker$node_modules$moment$moment["default"]([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,date))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,date)))].join(''),"YYYY-MMMM").daysInMonth())));
});
time_tracker.components.datepicker.update_day = (function time_tracker$components$datepicker$update_day(val,store,date){
time_tracker.components.datepicker.update_passed_store.call(null,cljs.core.conj.call(null,cljs.core.deref.call(null,date),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),val], null)),store);

return cljs.core.swap_BANG_.call(null,date,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"day","day",-274800446),val], null));
});
time_tracker.components.datepicker.update_month = (function time_tracker$components$datepicker$update_month(val,store,date){
time_tracker.components.datepicker.update_passed_store.call(null,cljs.core.conj.call(null,cljs.core.deref.call(null,date),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),val], null)),store);

return cljs.core.swap_BANG_.call(null,date,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),val], null));
});
time_tracker.components.datepicker.update_year = (function time_tracker$components$datepicker$update_year(val,store,date){
time_tracker.components.datepicker.update_passed_store.call(null,cljs.core.conj.call(null,cljs.core.deref.call(null,date),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"year","year",335913393),val], null)),store);

return cljs.core.swap_BANG_.call(null,date,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"year","year",335913393),val], null));
});
time_tracker.components.datepicker.open_datepicker = (function time_tracker$components$datepicker$open_datepicker(randomId){
var bodyElem = document.getElementById(["datepicker-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(randomId)].join(''));
(bodyElem.style["z-index"] = "900");

return (bodyElem.style["left"] = "0");
});
time_tracker.components.datepicker.close_datepicker = (function time_tracker$components$datepicker$close_datepicker(randomId){
var bodyElem = document.getElementById(["datepicker-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(randomId)].join(''));
(bodyElem.style["z-index"] = "-999");

return (bodyElem.style["left"] = "-2000px");
});
time_tracker.components.datepicker.generate_html = (function time_tracker$components$datepicker$generate_html(store,date,randomId){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),time_tracker.components.datepicker.defaultStyles,new cljs.core.Keyword(null,"id","id",-1388402092),["datepicker-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(randomId)].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#datepicker.datepickerinner","div#datepicker.datepickerinner",1230511805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,date)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22440_SHARP_){
return time_tracker.components.datepicker.update_month.call(null,p1__22440_SHARP_.target.value,store,date);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"webkit-appearance","webkit-appearance",1438424261),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 8px"], null)], null),time_tracker.components.datepicker.generate_months.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,date)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22441_SHARP_){
return time_tracker.components.datepicker.update_day.call(null,p1__22441_SHARP_.target.value,store,date);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"webkit-appearance","webkit-appearance",1438424261),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 8px"], null)], null),time_tracker.components.datepicker.generate_days.call(null,date)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,date)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22442_SHARP_){
return time_tracker.components.datepicker.update_year.call(null,p1__22442_SHARP_.target.value,store,date);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"webkit-appearance","webkit-appearance",1438424261),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 8px"], null)], null),time_tracker.components.datepicker.generate_years.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buttonWrapper","div.buttonWrapper",710098106),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"32px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return time_tracker.components.datepicker.close_datepicker.call(null,randomId);
})], null),"Update"], null)], null)], null)], null);
});
time_tracker.components.datepicker.datepicker = (function time_tracker$components$datepicker$datepicker(store){

var vals = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store));
var currentDate = module$Applications$server$time_tracker$node_modules$moment$moment["default"]();
var date = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),currentDate.format("MMMM"),new cljs.core.Keyword(null,"date","date",-1463434462),currentDate.date(),new cljs.core.Keyword(null,"year","year",335913393),currentDate.year()], null));
var randomId = cljs.core.rand_int.call(null,(100000));
return ((function (vals,currentDate,date,randomId){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vals,currentDate,date,randomId){
return (function (){
return time_tracker.components.datepicker.open_datepicker.call(null,randomId);
});})(vals,currentDate,date,randomId))
], null)], null),time_tracker.components.datepicker.generate_html.call(null,store,date,randomId)], null);
});
;})(vals,currentDate,date,randomId))
});

//# sourceMappingURL=datepicker.js.map?rel=1582304839646
