// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31463){if((e31463 instanceof Error)){
var e = e31463;
return "Error: Unable to stringify";
} else {
throw e31463;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31466 = arguments.length;
switch (G__31466) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31464_SHARP_){
if(typeof p1__31464_SHARP_ === 'string'){
return p1__31464_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31464_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31469 = arguments.length;
var i__4500__auto___31470 = (0);
while(true){
if((i__4500__auto___31470 < len__4499__auto___31469)){
args__4502__auto__.push((arguments[i__4500__auto___31470]));

var G__31471 = (i__4500__auto___31470 + (1));
i__4500__auto___31470 = G__31471;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31468){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31468));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31473 = arguments.length;
var i__4500__auto___31474 = (0);
while(true){
if((i__4500__auto___31474 < len__4499__auto___31473)){
args__4502__auto__.push((arguments[i__4500__auto___31474]));

var G__31475 = (i__4500__auto___31474 + (1));
i__4500__auto___31474 = G__31475;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31472){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31472));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31476){
var map__31477 = p__31476;
var map__31477__$1 = ((((!((map__31477 == null)))?(((((map__31477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31477):map__31477);
var message = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27603__auto___31556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___31556,ch){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___31556,ch){
return (function (state_31528){
var state_val_31529 = (state_31528[(1)]);
if((state_val_31529 === (7))){
var inst_31524 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31530_31557 = state_31528__$1;
(statearr_31530_31557[(2)] = inst_31524);

(statearr_31530_31557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (1))){
var state_31528__$1 = state_31528;
var statearr_31531_31558 = state_31528__$1;
(statearr_31531_31558[(2)] = null);

(statearr_31531_31558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (4))){
var inst_31481 = (state_31528[(7)]);
var inst_31481__$1 = (state_31528[(2)]);
var state_31528__$1 = (function (){var statearr_31532 = state_31528;
(statearr_31532[(7)] = inst_31481__$1);

return statearr_31532;
})();
if(cljs.core.truth_(inst_31481__$1)){
var statearr_31533_31559 = state_31528__$1;
(statearr_31533_31559[(1)] = (5));

} else {
var statearr_31534_31560 = state_31528__$1;
(statearr_31534_31560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (15))){
var inst_31488 = (state_31528[(8)]);
var inst_31503 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31488);
var inst_31504 = cljs.core.first.call(null,inst_31503);
var inst_31505 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31504);
var inst_31506 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31505)].join('');
var inst_31507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31506);
var state_31528__$1 = state_31528;
var statearr_31535_31561 = state_31528__$1;
(statearr_31535_31561[(2)] = inst_31507);

(statearr_31535_31561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (13))){
var inst_31512 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31536_31562 = state_31528__$1;
(statearr_31536_31562[(2)] = inst_31512);

(statearr_31536_31562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (6))){
var state_31528__$1 = state_31528;
var statearr_31537_31563 = state_31528__$1;
(statearr_31537_31563[(2)] = null);

(statearr_31537_31563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (17))){
var inst_31510 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31538_31564 = state_31528__$1;
(statearr_31538_31564[(2)] = inst_31510);

(statearr_31538_31564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (3))){
var inst_31526 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31528__$1,inst_31526);
} else {
if((state_val_31529 === (12))){
var inst_31487 = (state_31528[(9)]);
var inst_31501 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31487,opts);
var state_31528__$1 = state_31528;
if(cljs.core.truth_(inst_31501)){
var statearr_31539_31565 = state_31528__$1;
(statearr_31539_31565[(1)] = (15));

} else {
var statearr_31540_31566 = state_31528__$1;
(statearr_31540_31566[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (2))){
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31528__$1,(4),ch);
} else {
if((state_val_31529 === (11))){
var inst_31488 = (state_31528[(8)]);
var inst_31493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31494 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31488);
var inst_31495 = cljs.core.async.timeout.call(null,(1000));
var inst_31496 = [inst_31494,inst_31495];
var inst_31497 = (new cljs.core.PersistentVector(null,2,(5),inst_31493,inst_31496,null));
var state_31528__$1 = state_31528;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31528__$1,(14),inst_31497);
} else {
if((state_val_31529 === (9))){
var inst_31488 = (state_31528[(8)]);
var inst_31514 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31515 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31488);
var inst_31516 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31515);
var inst_31517 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31516)].join('');
var inst_31518 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31517);
var state_31528__$1 = (function (){var statearr_31541 = state_31528;
(statearr_31541[(10)] = inst_31514);

return statearr_31541;
})();
var statearr_31542_31567 = state_31528__$1;
(statearr_31542_31567[(2)] = inst_31518);

(statearr_31542_31567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (5))){
var inst_31481 = (state_31528[(7)]);
var inst_31483 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31484 = (new cljs.core.PersistentArrayMap(null,2,inst_31483,null));
var inst_31485 = (new cljs.core.PersistentHashSet(null,inst_31484,null));
var inst_31486 = figwheel.client.focus_msgs.call(null,inst_31485,inst_31481);
var inst_31487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31486);
var inst_31488 = cljs.core.first.call(null,inst_31486);
var inst_31489 = figwheel.client.autoload_QMARK_.call(null);
var state_31528__$1 = (function (){var statearr_31543 = state_31528;
(statearr_31543[(9)] = inst_31487);

(statearr_31543[(8)] = inst_31488);

return statearr_31543;
})();
if(cljs.core.truth_(inst_31489)){
var statearr_31544_31568 = state_31528__$1;
(statearr_31544_31568[(1)] = (8));

} else {
var statearr_31545_31569 = state_31528__$1;
(statearr_31545_31569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (14))){
var inst_31499 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31546_31570 = state_31528__$1;
(statearr_31546_31570[(2)] = inst_31499);

(statearr_31546_31570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (16))){
var state_31528__$1 = state_31528;
var statearr_31547_31571 = state_31528__$1;
(statearr_31547_31571[(2)] = null);

(statearr_31547_31571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (10))){
var inst_31520 = (state_31528[(2)]);
var state_31528__$1 = (function (){var statearr_31548 = state_31528;
(statearr_31548[(11)] = inst_31520);

return statearr_31548;
})();
var statearr_31549_31572 = state_31528__$1;
(statearr_31549_31572[(2)] = null);

(statearr_31549_31572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (8))){
var inst_31487 = (state_31528[(9)]);
var inst_31491 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31487,opts);
var state_31528__$1 = state_31528;
if(cljs.core.truth_(inst_31491)){
var statearr_31550_31573 = state_31528__$1;
(statearr_31550_31573[(1)] = (11));

} else {
var statearr_31551_31574 = state_31528__$1;
(statearr_31551_31574[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27603__auto___31556,ch))
;
return ((function (switch__27513__auto__,c__27603__auto___31556,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27514__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27514__auto____0 = (function (){
var statearr_31552 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31552[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27514__auto__);

(statearr_31552[(1)] = (1));

return statearr_31552;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27514__auto____1 = (function (state_31528){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_31528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e31553){if((e31553 instanceof Object)){
var ex__27517__auto__ = e31553;
var statearr_31554_31575 = state_31528;
(statearr_31554_31575[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31576 = state_31528;
state_31528 = G__31576;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27514__auto__ = function(state_31528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27514__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27514__auto____1.call(this,state_31528);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27514__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27514__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___31556,ch))
})();
var state__27605__auto__ = (function (){var statearr_31555 = f__27604__auto__.call(null);
(statearr_31555[(6)] = c__27603__auto___31556);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___31556,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31577_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31577_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31581 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31581){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31579 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31580 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31579,_STAR_print_fn_STAR_31580,sb,base_path_31581){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31579,_STAR_print_fn_STAR_31580,sb,base_path_31581))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31580;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31579;
}}catch (e31578){if((e31578 instanceof Error)){
var e = e31578;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31581], null));
} else {
var e = e31578;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31581))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31582){
var map__31583 = p__31582;
var map__31583__$1 = ((((!((map__31583 == null)))?(((((map__31583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31583):map__31583);
var opts = map__31583__$1;
var build_id = cljs.core.get.call(null,map__31583__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31583,map__31583__$1,opts,build_id){
return (function (p__31585){
var vec__31586 = p__31585;
var seq__31587 = cljs.core.seq.call(null,vec__31586);
var first__31588 = cljs.core.first.call(null,seq__31587);
var seq__31587__$1 = cljs.core.next.call(null,seq__31587);
var map__31589 = first__31588;
var map__31589__$1 = ((((!((map__31589 == null)))?(((((map__31589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31589):map__31589);
var msg = map__31589__$1;
var msg_name = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31587__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31586,seq__31587,first__31588,seq__31587__$1,map__31589,map__31589__$1,msg,msg_name,_,map__31583,map__31583__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31586,seq__31587,first__31588,seq__31587__$1,map__31589,map__31589__$1,msg,msg_name,_,map__31583,map__31583__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31583,map__31583__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31591){
var vec__31592 = p__31591;
var seq__31593 = cljs.core.seq.call(null,vec__31592);
var first__31594 = cljs.core.first.call(null,seq__31593);
var seq__31593__$1 = cljs.core.next.call(null,seq__31593);
var map__31595 = first__31594;
var map__31595__$1 = ((((!((map__31595 == null)))?(((((map__31595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31595):map__31595);
var msg = map__31595__$1;
var msg_name = cljs.core.get.call(null,map__31595__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31593__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31597){
var map__31598 = p__31597;
var map__31598__$1 = ((((!((map__31598 == null)))?(((((map__31598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31598):map__31598);
var on_compile_warning = cljs.core.get.call(null,map__31598__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31598__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31598,map__31598__$1,on_compile_warning,on_compile_fail){
return (function (p__31600){
var vec__31601 = p__31600;
var seq__31602 = cljs.core.seq.call(null,vec__31601);
var first__31603 = cljs.core.first.call(null,seq__31602);
var seq__31602__$1 = cljs.core.next.call(null,seq__31602);
var map__31604 = first__31603;
var map__31604__$1 = ((((!((map__31604 == null)))?(((((map__31604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31604):map__31604);
var msg = map__31604__$1;
var msg_name = cljs.core.get.call(null,map__31604__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31602__$1;
var pred__31606 = cljs.core._EQ_;
var expr__31607 = msg_name;
if(cljs.core.truth_(pred__31606.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31607))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31606.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31607))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31598,map__31598__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto__,msg_hist,msg_names,msg){
return (function (state_31696){
var state_val_31697 = (state_31696[(1)]);
if((state_val_31697 === (7))){
var inst_31616 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
if(cljs.core.truth_(inst_31616)){
var statearr_31698_31745 = state_31696__$1;
(statearr_31698_31745[(1)] = (8));

} else {
var statearr_31699_31746 = state_31696__$1;
(statearr_31699_31746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (20))){
var inst_31690 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31700_31747 = state_31696__$1;
(statearr_31700_31747[(2)] = inst_31690);

(statearr_31700_31747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (27))){
var inst_31686 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31701_31748 = state_31696__$1;
(statearr_31701_31748[(2)] = inst_31686);

(statearr_31701_31748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (1))){
var inst_31609 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31696__$1 = state_31696;
if(cljs.core.truth_(inst_31609)){
var statearr_31702_31749 = state_31696__$1;
(statearr_31702_31749[(1)] = (2));

} else {
var statearr_31703_31750 = state_31696__$1;
(statearr_31703_31750[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (24))){
var inst_31688 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31704_31751 = state_31696__$1;
(statearr_31704_31751[(2)] = inst_31688);

(statearr_31704_31751[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (4))){
var inst_31694 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31696__$1,inst_31694);
} else {
if((state_val_31697 === (15))){
var inst_31692 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31705_31752 = state_31696__$1;
(statearr_31705_31752[(2)] = inst_31692);

(statearr_31705_31752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (21))){
var inst_31645 = (state_31696[(2)]);
var inst_31646 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31647 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31646);
var state_31696__$1 = (function (){var statearr_31706 = state_31696;
(statearr_31706[(7)] = inst_31645);

return statearr_31706;
})();
var statearr_31707_31753 = state_31696__$1;
(statearr_31707_31753[(2)] = inst_31647);

(statearr_31707_31753[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (31))){
var inst_31675 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31696__$1 = state_31696;
if(cljs.core.truth_(inst_31675)){
var statearr_31708_31754 = state_31696__$1;
(statearr_31708_31754[(1)] = (34));

} else {
var statearr_31709_31755 = state_31696__$1;
(statearr_31709_31755[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (32))){
var inst_31684 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31710_31756 = state_31696__$1;
(statearr_31710_31756[(2)] = inst_31684);

(statearr_31710_31756[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (33))){
var inst_31671 = (state_31696[(2)]);
var inst_31672 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31673 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31672);
var state_31696__$1 = (function (){var statearr_31711 = state_31696;
(statearr_31711[(8)] = inst_31671);

return statearr_31711;
})();
var statearr_31712_31757 = state_31696__$1;
(statearr_31712_31757[(2)] = inst_31673);

(statearr_31712_31757[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (13))){
var inst_31630 = figwheel.client.heads_up.clear.call(null);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(16),inst_31630);
} else {
if((state_val_31697 === (22))){
var inst_31651 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31652 = figwheel.client.heads_up.append_warning_message.call(null,inst_31651);
var state_31696__$1 = state_31696;
var statearr_31713_31758 = state_31696__$1;
(statearr_31713_31758[(2)] = inst_31652);

(statearr_31713_31758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (36))){
var inst_31682 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31714_31759 = state_31696__$1;
(statearr_31714_31759[(2)] = inst_31682);

(statearr_31714_31759[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (29))){
var inst_31662 = (state_31696[(2)]);
var inst_31663 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31664 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31663);
var state_31696__$1 = (function (){var statearr_31715 = state_31696;
(statearr_31715[(9)] = inst_31662);

return statearr_31715;
})();
var statearr_31716_31760 = state_31696__$1;
(statearr_31716_31760[(2)] = inst_31664);

(statearr_31716_31760[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (6))){
var inst_31611 = (state_31696[(10)]);
var state_31696__$1 = state_31696;
var statearr_31717_31761 = state_31696__$1;
(statearr_31717_31761[(2)] = inst_31611);

(statearr_31717_31761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (28))){
var inst_31658 = (state_31696[(2)]);
var inst_31659 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31660 = figwheel.client.heads_up.display_warning.call(null,inst_31659);
var state_31696__$1 = (function (){var statearr_31718 = state_31696;
(statearr_31718[(11)] = inst_31658);

return statearr_31718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(29),inst_31660);
} else {
if((state_val_31697 === (25))){
var inst_31656 = figwheel.client.heads_up.clear.call(null);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(28),inst_31656);
} else {
if((state_val_31697 === (34))){
var inst_31677 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(37),inst_31677);
} else {
if((state_val_31697 === (17))){
var inst_31636 = (state_31696[(2)]);
var inst_31637 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31638 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31637);
var state_31696__$1 = (function (){var statearr_31719 = state_31696;
(statearr_31719[(12)] = inst_31636);

return statearr_31719;
})();
var statearr_31720_31762 = state_31696__$1;
(statearr_31720_31762[(2)] = inst_31638);

(statearr_31720_31762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (3))){
var inst_31628 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31696__$1 = state_31696;
if(cljs.core.truth_(inst_31628)){
var statearr_31721_31763 = state_31696__$1;
(statearr_31721_31763[(1)] = (13));

} else {
var statearr_31722_31764 = state_31696__$1;
(statearr_31722_31764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (12))){
var inst_31624 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31723_31765 = state_31696__$1;
(statearr_31723_31765[(2)] = inst_31624);

(statearr_31723_31765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (2))){
var inst_31611 = (state_31696[(10)]);
var inst_31611__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31696__$1 = (function (){var statearr_31724 = state_31696;
(statearr_31724[(10)] = inst_31611__$1);

return statearr_31724;
})();
if(cljs.core.truth_(inst_31611__$1)){
var statearr_31725_31766 = state_31696__$1;
(statearr_31725_31766[(1)] = (5));

} else {
var statearr_31726_31767 = state_31696__$1;
(statearr_31726_31767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (23))){
var inst_31654 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31696__$1 = state_31696;
if(cljs.core.truth_(inst_31654)){
var statearr_31727_31768 = state_31696__$1;
(statearr_31727_31768[(1)] = (25));

} else {
var statearr_31728_31769 = state_31696__$1;
(statearr_31728_31769[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (35))){
var state_31696__$1 = state_31696;
var statearr_31729_31770 = state_31696__$1;
(statearr_31729_31770[(2)] = null);

(statearr_31729_31770[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (19))){
var inst_31649 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31696__$1 = state_31696;
if(cljs.core.truth_(inst_31649)){
var statearr_31730_31771 = state_31696__$1;
(statearr_31730_31771[(1)] = (22));

} else {
var statearr_31731_31772 = state_31696__$1;
(statearr_31731_31772[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (11))){
var inst_31620 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31732_31773 = state_31696__$1;
(statearr_31732_31773[(2)] = inst_31620);

(statearr_31732_31773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (9))){
var inst_31622 = figwheel.client.heads_up.clear.call(null);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(12),inst_31622);
} else {
if((state_val_31697 === (5))){
var inst_31613 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31696__$1 = state_31696;
var statearr_31733_31774 = state_31696__$1;
(statearr_31733_31774[(2)] = inst_31613);

(statearr_31733_31774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (14))){
var inst_31640 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31696__$1 = state_31696;
if(cljs.core.truth_(inst_31640)){
var statearr_31734_31775 = state_31696__$1;
(statearr_31734_31775[(1)] = (18));

} else {
var statearr_31735_31776 = state_31696__$1;
(statearr_31735_31776[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (26))){
var inst_31666 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31696__$1 = state_31696;
if(cljs.core.truth_(inst_31666)){
var statearr_31736_31777 = state_31696__$1;
(statearr_31736_31777[(1)] = (30));

} else {
var statearr_31737_31778 = state_31696__$1;
(statearr_31737_31778[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (16))){
var inst_31632 = (state_31696[(2)]);
var inst_31633 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31634 = figwheel.client.heads_up.display_exception.call(null,inst_31633);
var state_31696__$1 = (function (){var statearr_31738 = state_31696;
(statearr_31738[(13)] = inst_31632);

return statearr_31738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(17),inst_31634);
} else {
if((state_val_31697 === (30))){
var inst_31668 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31669 = figwheel.client.heads_up.display_warning.call(null,inst_31668);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(33),inst_31669);
} else {
if((state_val_31697 === (10))){
var inst_31626 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31739_31779 = state_31696__$1;
(statearr_31739_31779[(2)] = inst_31626);

(statearr_31739_31779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (18))){
var inst_31642 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31643 = figwheel.client.heads_up.display_exception.call(null,inst_31642);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(21),inst_31643);
} else {
if((state_val_31697 === (37))){
var inst_31679 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31740_31780 = state_31696__$1;
(statearr_31740_31780[(2)] = inst_31679);

(statearr_31740_31780[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (8))){
var inst_31618 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(11),inst_31618);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27603__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27513__auto__,c__27603__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto____0 = (function (){
var statearr_31741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31741[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto__);

(statearr_31741[(1)] = (1));

return statearr_31741;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto____1 = (function (state_31696){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_31696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e31742){if((e31742 instanceof Object)){
var ex__27517__auto__ = e31742;
var statearr_31743_31781 = state_31696;
(statearr_31743_31781[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31782 = state_31696;
state_31696 = G__31782;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto__ = function(state_31696){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto____1.call(this,state_31696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto__,msg_hist,msg_names,msg))
})();
var state__27605__auto__ = (function (){var statearr_31744 = f__27604__auto__.call(null);
(statearr_31744[(6)] = c__27603__auto__);

return statearr_31744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto__,msg_hist,msg_names,msg))
);

return c__27603__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27603__auto___31811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___31811,ch){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___31811,ch){
return (function (state_31797){
var state_val_31798 = (state_31797[(1)]);
if((state_val_31798 === (1))){
var state_31797__$1 = state_31797;
var statearr_31799_31812 = state_31797__$1;
(statearr_31799_31812[(2)] = null);

(statearr_31799_31812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (2))){
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31797__$1,(4),ch);
} else {
if((state_val_31798 === (3))){
var inst_31795 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31797__$1,inst_31795);
} else {
if((state_val_31798 === (4))){
var inst_31785 = (state_31797[(7)]);
var inst_31785__$1 = (state_31797[(2)]);
var state_31797__$1 = (function (){var statearr_31800 = state_31797;
(statearr_31800[(7)] = inst_31785__$1);

return statearr_31800;
})();
if(cljs.core.truth_(inst_31785__$1)){
var statearr_31801_31813 = state_31797__$1;
(statearr_31801_31813[(1)] = (5));

} else {
var statearr_31802_31814 = state_31797__$1;
(statearr_31802_31814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (5))){
var inst_31785 = (state_31797[(7)]);
var inst_31787 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31785);
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31797__$1,(8),inst_31787);
} else {
if((state_val_31798 === (6))){
var state_31797__$1 = state_31797;
var statearr_31803_31815 = state_31797__$1;
(statearr_31803_31815[(2)] = null);

(statearr_31803_31815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (7))){
var inst_31793 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31804_31816 = state_31797__$1;
(statearr_31804_31816[(2)] = inst_31793);

(statearr_31804_31816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (8))){
var inst_31789 = (state_31797[(2)]);
var state_31797__$1 = (function (){var statearr_31805 = state_31797;
(statearr_31805[(8)] = inst_31789);

return statearr_31805;
})();
var statearr_31806_31817 = state_31797__$1;
(statearr_31806_31817[(2)] = null);

(statearr_31806_31817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27603__auto___31811,ch))
;
return ((function (switch__27513__auto__,c__27603__auto___31811,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27514__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27514__auto____0 = (function (){
var statearr_31807 = [null,null,null,null,null,null,null,null,null];
(statearr_31807[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27514__auto__);

(statearr_31807[(1)] = (1));

return statearr_31807;
});
var figwheel$client$heads_up_plugin_$_state_machine__27514__auto____1 = (function (state_31797){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_31797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e31808){if((e31808 instanceof Object)){
var ex__27517__auto__ = e31808;
var statearr_31809_31818 = state_31797;
(statearr_31809_31818[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31819 = state_31797;
state_31797 = G__31819;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27514__auto__ = function(state_31797){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27514__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27514__auto____1.call(this,state_31797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27514__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27514__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___31811,ch))
})();
var state__27605__auto__ = (function (){var statearr_31810 = f__27604__auto__.call(null);
(statearr_31810[(6)] = c__27603__auto___31811);

return statearr_31810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___31811,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto__){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto__){
return (function (state_31825){
var state_val_31826 = (state_31825[(1)]);
if((state_val_31826 === (1))){
var inst_31820 = cljs.core.async.timeout.call(null,(3000));
var state_31825__$1 = state_31825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31825__$1,(2),inst_31820);
} else {
if((state_val_31826 === (2))){
var inst_31822 = (state_31825[(2)]);
var inst_31823 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31825__$1 = (function (){var statearr_31827 = state_31825;
(statearr_31827[(7)] = inst_31822);

return statearr_31827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31825__$1,inst_31823);
} else {
return null;
}
}
});})(c__27603__auto__))
;
return ((function (switch__27513__auto__,c__27603__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27514__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27514__auto____0 = (function (){
var statearr_31828 = [null,null,null,null,null,null,null,null];
(statearr_31828[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27514__auto__);

(statearr_31828[(1)] = (1));

return statearr_31828;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27514__auto____1 = (function (state_31825){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_31825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e31829){if((e31829 instanceof Object)){
var ex__27517__auto__ = e31829;
var statearr_31830_31832 = state_31825;
(statearr_31830_31832[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31833 = state_31825;
state_31825 = G__31833;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27514__auto__ = function(state_31825){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27514__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27514__auto____1.call(this,state_31825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27514__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27514__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto__))
})();
var state__27605__auto__ = (function (){var statearr_31831 = f__27604__auto__.call(null);
(statearr_31831[(6)] = c__27603__auto__);

return statearr_31831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto__))
);

return c__27603__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31840){
var state_val_31841 = (state_31840[(1)]);
if((state_val_31841 === (1))){
var inst_31834 = cljs.core.async.timeout.call(null,(2000));
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31840__$1,(2),inst_31834);
} else {
if((state_val_31841 === (2))){
var inst_31836 = (state_31840[(2)]);
var inst_31837 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31838 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31837);
var state_31840__$1 = (function (){var statearr_31842 = state_31840;
(statearr_31842[(7)] = inst_31836);

return statearr_31842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31840__$1,inst_31838);
} else {
return null;
}
}
});})(c__27603__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27513__auto__,c__27603__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto____0 = (function (){
var statearr_31843 = [null,null,null,null,null,null,null,null];
(statearr_31843[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto__);

(statearr_31843[(1)] = (1));

return statearr_31843;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto____1 = (function (state_31840){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_31840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e31844){if((e31844 instanceof Object)){
var ex__27517__auto__ = e31844;
var statearr_31845_31847 = state_31840;
(statearr_31845_31847[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31848 = state_31840;
state_31840 = G__31848;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto__ = function(state_31840){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto____1.call(this,state_31840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27605__auto__ = (function (){var statearr_31846 = f__27604__auto__.call(null);
(statearr_31846[(6)] = c__27603__auto__);

return statearr_31846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto__,figwheel_version,temp__5457__auto__))
);

return c__27603__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31849){
var map__31850 = p__31849;
var map__31850__$1 = ((((!((map__31850 == null)))?(((((map__31850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31850):map__31850);
var file = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31852 = "";
var G__31852__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31852),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31852);
var G__31852__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31852__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31852__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31852__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31852__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31853){
var map__31854 = p__31853;
var map__31854__$1 = ((((!((map__31854 == null)))?(((((map__31854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31854):map__31854);
var ed = map__31854__$1;
var formatted_exception = cljs.core.get.call(null,map__31854__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31854__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31854__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31856_31860 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31857_31861 = null;
var count__31858_31862 = (0);
var i__31859_31863 = (0);
while(true){
if((i__31859_31863 < count__31858_31862)){
var msg_31864 = cljs.core._nth.call(null,chunk__31857_31861,i__31859_31863);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31864);


var G__31865 = seq__31856_31860;
var G__31866 = chunk__31857_31861;
var G__31867 = count__31858_31862;
var G__31868 = (i__31859_31863 + (1));
seq__31856_31860 = G__31865;
chunk__31857_31861 = G__31866;
count__31858_31862 = G__31867;
i__31859_31863 = G__31868;
continue;
} else {
var temp__5457__auto___31869 = cljs.core.seq.call(null,seq__31856_31860);
if(temp__5457__auto___31869){
var seq__31856_31870__$1 = temp__5457__auto___31869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31856_31870__$1)){
var c__4319__auto___31871 = cljs.core.chunk_first.call(null,seq__31856_31870__$1);
var G__31872 = cljs.core.chunk_rest.call(null,seq__31856_31870__$1);
var G__31873 = c__4319__auto___31871;
var G__31874 = cljs.core.count.call(null,c__4319__auto___31871);
var G__31875 = (0);
seq__31856_31860 = G__31872;
chunk__31857_31861 = G__31873;
count__31858_31862 = G__31874;
i__31859_31863 = G__31875;
continue;
} else {
var msg_31876 = cljs.core.first.call(null,seq__31856_31870__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31876);


var G__31877 = cljs.core.next.call(null,seq__31856_31870__$1);
var G__31878 = null;
var G__31879 = (0);
var G__31880 = (0);
seq__31856_31860 = G__31877;
chunk__31857_31861 = G__31878;
count__31858_31862 = G__31879;
i__31859_31863 = G__31880;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31881){
var map__31882 = p__31881;
var map__31882__$1 = ((((!((map__31882 == null)))?(((((map__31882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31882):map__31882);
var w = map__31882__$1;
var message = cljs.core.get.call(null,map__31882__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31884 = cljs.core.seq.call(null,plugins);
var chunk__31885 = null;
var count__31886 = (0);
var i__31887 = (0);
while(true){
if((i__31887 < count__31886)){
var vec__31888 = cljs.core._nth.call(null,chunk__31885,i__31887);
var k = cljs.core.nth.call(null,vec__31888,(0),null);
var plugin = cljs.core.nth.call(null,vec__31888,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31894 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31884,chunk__31885,count__31886,i__31887,pl_31894,vec__31888,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31894.call(null,msg_hist);
});})(seq__31884,chunk__31885,count__31886,i__31887,pl_31894,vec__31888,k,plugin))
);
} else {
}


var G__31895 = seq__31884;
var G__31896 = chunk__31885;
var G__31897 = count__31886;
var G__31898 = (i__31887 + (1));
seq__31884 = G__31895;
chunk__31885 = G__31896;
count__31886 = G__31897;
i__31887 = G__31898;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31884);
if(temp__5457__auto__){
var seq__31884__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31884__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31884__$1);
var G__31899 = cljs.core.chunk_rest.call(null,seq__31884__$1);
var G__31900 = c__4319__auto__;
var G__31901 = cljs.core.count.call(null,c__4319__auto__);
var G__31902 = (0);
seq__31884 = G__31899;
chunk__31885 = G__31900;
count__31886 = G__31901;
i__31887 = G__31902;
continue;
} else {
var vec__31891 = cljs.core.first.call(null,seq__31884__$1);
var k = cljs.core.nth.call(null,vec__31891,(0),null);
var plugin = cljs.core.nth.call(null,vec__31891,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31903 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31884,chunk__31885,count__31886,i__31887,pl_31903,vec__31891,k,plugin,seq__31884__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31903.call(null,msg_hist);
});})(seq__31884,chunk__31885,count__31886,i__31887,pl_31903,vec__31891,k,plugin,seq__31884__$1,temp__5457__auto__))
);
} else {
}


var G__31904 = cljs.core.next.call(null,seq__31884__$1);
var G__31905 = null;
var G__31906 = (0);
var G__31907 = (0);
seq__31884 = G__31904;
chunk__31885 = G__31905;
count__31886 = G__31906;
i__31887 = G__31907;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31909 = arguments.length;
switch (G__31909) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31910_31915 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31911_31916 = null;
var count__31912_31917 = (0);
var i__31913_31918 = (0);
while(true){
if((i__31913_31918 < count__31912_31917)){
var msg_31919 = cljs.core._nth.call(null,chunk__31911_31916,i__31913_31918);
figwheel.client.socket.handle_incoming_message.call(null,msg_31919);


var G__31920 = seq__31910_31915;
var G__31921 = chunk__31911_31916;
var G__31922 = count__31912_31917;
var G__31923 = (i__31913_31918 + (1));
seq__31910_31915 = G__31920;
chunk__31911_31916 = G__31921;
count__31912_31917 = G__31922;
i__31913_31918 = G__31923;
continue;
} else {
var temp__5457__auto___31924 = cljs.core.seq.call(null,seq__31910_31915);
if(temp__5457__auto___31924){
var seq__31910_31925__$1 = temp__5457__auto___31924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31910_31925__$1)){
var c__4319__auto___31926 = cljs.core.chunk_first.call(null,seq__31910_31925__$1);
var G__31927 = cljs.core.chunk_rest.call(null,seq__31910_31925__$1);
var G__31928 = c__4319__auto___31926;
var G__31929 = cljs.core.count.call(null,c__4319__auto___31926);
var G__31930 = (0);
seq__31910_31915 = G__31927;
chunk__31911_31916 = G__31928;
count__31912_31917 = G__31929;
i__31913_31918 = G__31930;
continue;
} else {
var msg_31931 = cljs.core.first.call(null,seq__31910_31925__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31931);


var G__31932 = cljs.core.next.call(null,seq__31910_31925__$1);
var G__31933 = null;
var G__31934 = (0);
var G__31935 = (0);
seq__31910_31915 = G__31932;
chunk__31911_31916 = G__31933;
count__31912_31917 = G__31934;
i__31913_31918 = G__31935;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31940 = arguments.length;
var i__4500__auto___31941 = (0);
while(true){
if((i__4500__auto___31941 < len__4499__auto___31940)){
args__4502__auto__.push((arguments[i__4500__auto___31941]));

var G__31942 = (i__4500__auto___31941 + (1));
i__4500__auto___31941 = G__31942;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31937){
var map__31938 = p__31937;
var map__31938__$1 = ((((!((map__31938 == null)))?(((((map__31938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31938):map__31938);
var opts = map__31938__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31936){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31936));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31943){if((e31943 instanceof Error)){
var e = e31943;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31943;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31944){
var map__31945 = p__31944;
var map__31945__$1 = ((((!((map__31945 == null)))?(((((map__31945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31945):map__31945);
var msg_name = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1556144029807
