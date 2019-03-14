// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.utilities.date_formatter');
goog.require('cljs.core');
goog.require('reagent.core');
time_tracker.utilities.date_formatter.generate_time_string = (function time_tracker$utilities$date_formatter$generate_time_string(time,string){

if(cljs.core._EQ_.call(null,(0),time)){
return "";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(time),cljs.core.str.cljs$core$IFn$_invoke$arity$1(string)].join('');
}
});
time_tracker.utilities.date_formatter.get_total_seconds = (function time_tracker$utilities$date_formatter$get_total_seconds(timeArr){

var i = (0);
var total = (0);
while(true){
if((i >= (cljs.core.count.call(null,timeArr) - (1)))){
return total;
} else {
var G__28209 = ((2) + i);
var G__28210 = ((cljs.core.nth.call(null,timeArr,((1) + i)) - cljs.core.nth.call(null,timeArr,i)) + total);
i = G__28209;
total = G__28210;
continue;
}
break;
}
});
time_tracker.utilities.date_formatter.format_time_taken = (function time_tracker$utilities$date_formatter$format_time_taken(start,end){

var time = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hours","hours",58380855),(0),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"total","total",1916810418),((end - start) / (1000))], null));
if((new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)) > (3599))){
cljs.core.swap_BANG_.call(null,time,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hours","hours",58380855),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor((new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)) / (3600))))].join('')], null));

cljs.core.swap_BANG_.call(null,time,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.mod.call(null,new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)),(3600))], null));
} else {
}

if((new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)) > (59))){
cljs.core.swap_BANG_.call(null,time,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor((new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)) / (60))))].join('')], null));

cljs.core.swap_BANG_.call(null,time,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.mod.call(null,new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time)),(60))], null));
} else {
}

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_tracker.utilities.date_formatter.generate_time_string.call(null,new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time))," Hour(s) ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_tracker.utilities.date_formatter.generate_time_string.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time))," Minute(s) ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_tracker.utilities.date_formatter.generate_time_string.call(null,new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time))," Second(s)"))].join('');
});

//# sourceMappingURL=date_formatter.js.map?rel=1550013930366
