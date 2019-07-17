// Compiled by ClojureScript 1.10.238 {}
goog.provide('goal_planner.scripts.datepicker');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('module$Applications$server$time_tracker$node_modules$moment$moment');
if(typeof goal_planner.scripts.datepicker.months !== 'undefined'){
} else {
goal_planner.scripts.datepicker.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
}
if(typeof goal_planner.scripts.datepicker.defaultStyles !== 'undefined'){
} else {
goal_planner.scripts.datepicker.defaultStyles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center",(0),"rgba(255,255,255,.95)","100%",(-999),"center","flex","fixed","column","100%","-2000px"]);
}
goal_planner.scripts.datepicker.update_passed_store = (function goal_planner$scripts$datepicker$update_passed_store(type,val,store){

return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.keyword.call(null,type)], null),val);
});
goal_planner.scripts.datepicker.generate_css = (function goal_planner$scripts$datepicker$generate_css(styles){

return ["style=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__27518){
var vec__27519 = p__27518;
var key = cljs.core.nth.call(null,vec__27519,(0),null);
var val = cljs.core.nth.call(null,vec__27519,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('');
}),styles))),"\""].join('');
});
goal_planner.scripts.datepicker.generate_months = (function goal_planner$scripts$datepicker$generate_months(){
return cljs.core.map.call(null,(function (month){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),month,new cljs.core.Keyword(null,"key","key",-1516042587),month], null),month], null);
}),goal_planner.scripts.datepicker.months);
});
goal_planner.scripts.datepicker.generate_years = (function goal_planner$scripts$datepicker$generate_years(){
return cljs.core.map.call(null,(function (year){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),year,new cljs.core.Keyword(null,"key","key",-1516042587),year], null),year], null);
}),cljs.core.range.call(null,module$Applications$server$time_tracker$node_modules$moment$moment["default"]().year(),((50) + module$Applications$server$time_tracker$node_modules$moment$moment["default"]().year())));
});
goal_planner.scripts.datepicker.generate_days = (function goal_planner$scripts$datepicker$generate_days(date){
return cljs.core.map.call(null,(function (day){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),day,new cljs.core.Keyword(null,"key","key",-1516042587),day], null),day], null);
}),cljs.core.range.call(null,(1),((1) + module$Applications$server$time_tracker$node_modules$moment$moment["default"]([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,date))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,date)))].join(''),"YYYY-MMMM").daysInMonth())));
});
goal_planner.scripts.datepicker.update_month = (function goal_planner$scripts$datepicker$update_month(val,store,date){
goal_planner.scripts.datepicker.update_passed_store.call(null,"month",val,store);

return cljs.core.swap_BANG_.call(null,date,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),val], null));
});
goal_planner.scripts.datepicker.update_year = (function goal_planner$scripts$datepicker$update_year(val,store,date){
goal_planner.scripts.datepicker.update_passed_store.call(null,"year",val,store);

return cljs.core.swap_BANG_.call(null,date,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"year","year",335913393),val], null));
});
goal_planner.scripts.datepicker.open_datepicker = (function goal_planner$scripts$datepicker$open_datepicker(){
var bodyElem = document.getElementById("datepicker");
(bodyElem.style["z-index"] = "900");

return (bodyElem.style["left"] = "0");
});
goal_planner.scripts.datepicker.close_datepicker = (function goal_planner$scripts$datepicker$close_datepicker(){
var bodyElem = document.getElementById("datepicker");
(bodyElem.style["z-index"] = "-999");

return (bodyElem.style["left"] = "-2000px");
});
goal_planner.scripts.datepicker.generate_html = (function goal_planner$scripts$datepicker$generate_html(store,date){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#datepicker","div#datepicker",-896956179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),goal_planner.scripts.datepicker.defaultStyles], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#datepicker.datepickerinnner","div#datepicker.datepickerinnner",104832912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27522_SHARP_){
return goal_planner.scripts.datepicker.update_month.call(null,p1__27522_SHARP_.target.value,store,date);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"webkit-appearance","webkit-appearance",1438424261),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 8px"], null)], null),goal_planner.scripts.datepicker.generate_months.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27523_SHARP_){
return goal_planner.scripts.datepicker.update_passed_store.call(null,"day",p1__27523_SHARP_.target.value,store);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"webkit-appearance","webkit-appearance",1438424261),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 8px"], null)], null),goal_planner.scripts.datepicker.generate_days.call(null,date)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27524_SHARP_){
return goal_planner.scripts.datepicker.update_year.call(null,p1__27524_SHARP_.target.value,store,date);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"webkit-appearance","webkit-appearance",1438424261),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 8px"], null)], null),goal_planner.scripts.datepicker.generate_years.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buttonWrapper","div.buttonWrapper",710098106),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"32px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return goal_planner.scripts.datepicker.close_datepicker.call(null);
})], null),"Update"], null)], null)], null)], null);
});
goal_planner.scripts.datepicker.datepicker = (function goal_planner$scripts$datepicker$datepicker(store){

var vals = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store));
var date = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),"january",new cljs.core.Keyword(null,"year","year",335913393),(2019)], null));
return ((function (vals,date){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store))))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vals,date){
return (function (){
return goal_planner.scripts.datepicker.open_datepicker.call(null);
});})(vals,date))
], null)], null),goal_planner.scripts.datepicker.generate_html.call(null,store,date)], null);
});
;})(vals,date))
});

//# sourceMappingURL=datepicker.js.map?rel=1563368092004
