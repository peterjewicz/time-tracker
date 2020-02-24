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
}catch (e31490){if((e31490 instanceof Error)){
var e = e31490;
return "Error: Unable to stringify";
} else {
throw e31490;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31493 = arguments.length;
switch (G__31493) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31491_SHARP_){
if(typeof p1__31491_SHARP_ === 'string'){
return p1__31491_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31491_SHARP_);
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
var len__4499__auto___31496 = arguments.length;
var i__4500__auto___31497 = (0);
while(true){
if((i__4500__auto___31497 < len__4499__auto___31496)){
args__4502__auto__.push((arguments[i__4500__auto___31497]));

var G__31498 = (i__4500__auto___31497 + (1));
i__4500__auto___31497 = G__31498;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31495){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31495));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31500 = arguments.length;
var i__4500__auto___31501 = (0);
while(true){
if((i__4500__auto___31501 < len__4499__auto___31500)){
args__4502__auto__.push((arguments[i__4500__auto___31501]));

var G__31502 = (i__4500__auto___31501 + (1));
i__4500__auto___31501 = G__31502;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31499){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31499));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31503){
var map__31504 = p__31503;
var map__31504__$1 = ((((!((map__31504 == null)))?(((((map__31504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31504):map__31504);
var message = cljs.core.get.call(null,map__31504__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31504__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27630__auto___31583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___31583,ch){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___31583,ch){
return (function (state_31555){
var state_val_31556 = (state_31555[(1)]);
if((state_val_31556 === (7))){
var inst_31551 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31557_31584 = state_31555__$1;
(statearr_31557_31584[(2)] = inst_31551);

(statearr_31557_31584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (1))){
var state_31555__$1 = state_31555;
var statearr_31558_31585 = state_31555__$1;
(statearr_31558_31585[(2)] = null);

(statearr_31558_31585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (4))){
var inst_31508 = (state_31555[(7)]);
var inst_31508__$1 = (state_31555[(2)]);
var state_31555__$1 = (function (){var statearr_31559 = state_31555;
(statearr_31559[(7)] = inst_31508__$1);

return statearr_31559;
})();
if(cljs.core.truth_(inst_31508__$1)){
var statearr_31560_31586 = state_31555__$1;
(statearr_31560_31586[(1)] = (5));

} else {
var statearr_31561_31587 = state_31555__$1;
(statearr_31561_31587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (15))){
var inst_31515 = (state_31555[(8)]);
var inst_31530 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31515);
var inst_31531 = cljs.core.first.call(null,inst_31530);
var inst_31532 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31531);
var inst_31533 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31532)].join('');
var inst_31534 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31533);
var state_31555__$1 = state_31555;
var statearr_31562_31588 = state_31555__$1;
(statearr_31562_31588[(2)] = inst_31534);

(statearr_31562_31588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (13))){
var inst_31539 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31563_31589 = state_31555__$1;
(statearr_31563_31589[(2)] = inst_31539);

(statearr_31563_31589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (6))){
var state_31555__$1 = state_31555;
var statearr_31564_31590 = state_31555__$1;
(statearr_31564_31590[(2)] = null);

(statearr_31564_31590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (17))){
var inst_31537 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31565_31591 = state_31555__$1;
(statearr_31565_31591[(2)] = inst_31537);

(statearr_31565_31591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (3))){
var inst_31553 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31555__$1,inst_31553);
} else {
if((state_val_31556 === (12))){
var inst_31514 = (state_31555[(9)]);
var inst_31528 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31514,opts);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31528)){
var statearr_31566_31592 = state_31555__$1;
(statearr_31566_31592[(1)] = (15));

} else {
var statearr_31567_31593 = state_31555__$1;
(statearr_31567_31593[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (2))){
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(4),ch);
} else {
if((state_val_31556 === (11))){
var inst_31515 = (state_31555[(8)]);
var inst_31520 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31521 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31515);
var inst_31522 = cljs.core.async.timeout.call(null,(1000));
var inst_31523 = [inst_31521,inst_31522];
var inst_31524 = (new cljs.core.PersistentVector(null,2,(5),inst_31520,inst_31523,null));
var state_31555__$1 = state_31555;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31555__$1,(14),inst_31524);
} else {
if((state_val_31556 === (9))){
var inst_31515 = (state_31555[(8)]);
var inst_31541 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31542 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31515);
var inst_31543 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31542);
var inst_31544 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31543)].join('');
var inst_31545 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31544);
var state_31555__$1 = (function (){var statearr_31568 = state_31555;
(statearr_31568[(10)] = inst_31541);

return statearr_31568;
})();
var statearr_31569_31594 = state_31555__$1;
(statearr_31569_31594[(2)] = inst_31545);

(statearr_31569_31594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (5))){
var inst_31508 = (state_31555[(7)]);
var inst_31510 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31511 = (new cljs.core.PersistentArrayMap(null,2,inst_31510,null));
var inst_31512 = (new cljs.core.PersistentHashSet(null,inst_31511,null));
var inst_31513 = figwheel.client.focus_msgs.call(null,inst_31512,inst_31508);
var inst_31514 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31513);
var inst_31515 = cljs.core.first.call(null,inst_31513);
var inst_31516 = figwheel.client.autoload_QMARK_.call(null);
var state_31555__$1 = (function (){var statearr_31570 = state_31555;
(statearr_31570[(8)] = inst_31515);

(statearr_31570[(9)] = inst_31514);

return statearr_31570;
})();
if(cljs.core.truth_(inst_31516)){
var statearr_31571_31595 = state_31555__$1;
(statearr_31571_31595[(1)] = (8));

} else {
var statearr_31572_31596 = state_31555__$1;
(statearr_31572_31596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (14))){
var inst_31526 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31573_31597 = state_31555__$1;
(statearr_31573_31597[(2)] = inst_31526);

(statearr_31573_31597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (16))){
var state_31555__$1 = state_31555;
var statearr_31574_31598 = state_31555__$1;
(statearr_31574_31598[(2)] = null);

(statearr_31574_31598[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (10))){
var inst_31547 = (state_31555[(2)]);
var state_31555__$1 = (function (){var statearr_31575 = state_31555;
(statearr_31575[(11)] = inst_31547);

return statearr_31575;
})();
var statearr_31576_31599 = state_31555__$1;
(statearr_31576_31599[(2)] = null);

(statearr_31576_31599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (8))){
var inst_31514 = (state_31555[(9)]);
var inst_31518 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31514,opts);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31518)){
var statearr_31577_31600 = state_31555__$1;
(statearr_31577_31600[(1)] = (11));

} else {
var statearr_31578_31601 = state_31555__$1;
(statearr_31578_31601[(1)] = (12));

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
});})(c__27630__auto___31583,ch))
;
return ((function (switch__27540__auto__,c__27630__auto___31583,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27541__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27541__auto____0 = (function (){
var statearr_31579 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31579[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27541__auto__);

(statearr_31579[(1)] = (1));

return statearr_31579;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27541__auto____1 = (function (state_31555){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_31555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e31580){if((e31580 instanceof Object)){
var ex__27544__auto__ = e31580;
var statearr_31581_31602 = state_31555;
(statearr_31581_31602[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31603 = state_31555;
state_31555 = G__31603;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27541__auto__ = function(state_31555){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27541__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27541__auto____1.call(this,state_31555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27541__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27541__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___31583,ch))
})();
var state__27632__auto__ = (function (){var statearr_31582 = f__27631__auto__.call(null);
(statearr_31582[(6)] = c__27630__auto___31583);

return statearr_31582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___31583,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31604_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31604_SHARP_));
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
var base_path_31608 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31608){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31606 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31607 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31606,_STAR_print_fn_STAR_31607,sb,base_path_31608){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31606,_STAR_print_fn_STAR_31607,sb,base_path_31608))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31607;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31606;
}}catch (e31605){if((e31605 instanceof Error)){
var e = e31605;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31608], null));
} else {
var e = e31605;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31608))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31609){
var map__31610 = p__31609;
var map__31610__$1 = ((((!((map__31610 == null)))?(((((map__31610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31610):map__31610);
var opts = map__31610__$1;
var build_id = cljs.core.get.call(null,map__31610__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31610,map__31610__$1,opts,build_id){
return (function (p__31612){
var vec__31613 = p__31612;
var seq__31614 = cljs.core.seq.call(null,vec__31613);
var first__31615 = cljs.core.first.call(null,seq__31614);
var seq__31614__$1 = cljs.core.next.call(null,seq__31614);
var map__31616 = first__31615;
var map__31616__$1 = ((((!((map__31616 == null)))?(((((map__31616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31616):map__31616);
var msg = map__31616__$1;
var msg_name = cljs.core.get.call(null,map__31616__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31614__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31613,seq__31614,first__31615,seq__31614__$1,map__31616,map__31616__$1,msg,msg_name,_,map__31610,map__31610__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31613,seq__31614,first__31615,seq__31614__$1,map__31616,map__31616__$1,msg,msg_name,_,map__31610,map__31610__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31610,map__31610__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31618){
var vec__31619 = p__31618;
var seq__31620 = cljs.core.seq.call(null,vec__31619);
var first__31621 = cljs.core.first.call(null,seq__31620);
var seq__31620__$1 = cljs.core.next.call(null,seq__31620);
var map__31622 = first__31621;
var map__31622__$1 = ((((!((map__31622 == null)))?(((((map__31622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31622):map__31622);
var msg = map__31622__$1;
var msg_name = cljs.core.get.call(null,map__31622__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31620__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31624){
var map__31625 = p__31624;
var map__31625__$1 = ((((!((map__31625 == null)))?(((((map__31625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31625):map__31625);
var on_compile_warning = cljs.core.get.call(null,map__31625__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31625__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31625,map__31625__$1,on_compile_warning,on_compile_fail){
return (function (p__31627){
var vec__31628 = p__31627;
var seq__31629 = cljs.core.seq.call(null,vec__31628);
var first__31630 = cljs.core.first.call(null,seq__31629);
var seq__31629__$1 = cljs.core.next.call(null,seq__31629);
var map__31631 = first__31630;
var map__31631__$1 = ((((!((map__31631 == null)))?(((((map__31631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31631):map__31631);
var msg = map__31631__$1;
var msg_name = cljs.core.get.call(null,map__31631__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31629__$1;
var pred__31633 = cljs.core._EQ_;
var expr__31634 = msg_name;
if(cljs.core.truth_(pred__31633.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31634))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31633.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31634))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31625,map__31625__$1,on_compile_warning,on_compile_fail))
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
var c__27630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto__,msg_hist,msg_names,msg){
return (function (state_31723){
var state_val_31724 = (state_31723[(1)]);
if((state_val_31724 === (7))){
var inst_31643 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
if(cljs.core.truth_(inst_31643)){
var statearr_31725_31772 = state_31723__$1;
(statearr_31725_31772[(1)] = (8));

} else {
var statearr_31726_31773 = state_31723__$1;
(statearr_31726_31773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (20))){
var inst_31717 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31727_31774 = state_31723__$1;
(statearr_31727_31774[(2)] = inst_31717);

(statearr_31727_31774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (27))){
var inst_31713 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31728_31775 = state_31723__$1;
(statearr_31728_31775[(2)] = inst_31713);

(statearr_31728_31775[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (1))){
var inst_31636 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31723__$1 = state_31723;
if(cljs.core.truth_(inst_31636)){
var statearr_31729_31776 = state_31723__$1;
(statearr_31729_31776[(1)] = (2));

} else {
var statearr_31730_31777 = state_31723__$1;
(statearr_31730_31777[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (24))){
var inst_31715 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31731_31778 = state_31723__$1;
(statearr_31731_31778[(2)] = inst_31715);

(statearr_31731_31778[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (4))){
var inst_31721 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31723__$1,inst_31721);
} else {
if((state_val_31724 === (15))){
var inst_31719 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31732_31779 = state_31723__$1;
(statearr_31732_31779[(2)] = inst_31719);

(statearr_31732_31779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (21))){
var inst_31672 = (state_31723[(2)]);
var inst_31673 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31674 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31673);
var state_31723__$1 = (function (){var statearr_31733 = state_31723;
(statearr_31733[(7)] = inst_31672);

return statearr_31733;
})();
var statearr_31734_31780 = state_31723__$1;
(statearr_31734_31780[(2)] = inst_31674);

(statearr_31734_31780[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (31))){
var inst_31702 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31723__$1 = state_31723;
if(cljs.core.truth_(inst_31702)){
var statearr_31735_31781 = state_31723__$1;
(statearr_31735_31781[(1)] = (34));

} else {
var statearr_31736_31782 = state_31723__$1;
(statearr_31736_31782[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (32))){
var inst_31711 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31737_31783 = state_31723__$1;
(statearr_31737_31783[(2)] = inst_31711);

(statearr_31737_31783[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (33))){
var inst_31698 = (state_31723[(2)]);
var inst_31699 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31700 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31699);
var state_31723__$1 = (function (){var statearr_31738 = state_31723;
(statearr_31738[(8)] = inst_31698);

return statearr_31738;
})();
var statearr_31739_31784 = state_31723__$1;
(statearr_31739_31784[(2)] = inst_31700);

(statearr_31739_31784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (13))){
var inst_31657 = figwheel.client.heads_up.clear.call(null);
var state_31723__$1 = state_31723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31723__$1,(16),inst_31657);
} else {
if((state_val_31724 === (22))){
var inst_31678 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31679 = figwheel.client.heads_up.append_warning_message.call(null,inst_31678);
var state_31723__$1 = state_31723;
var statearr_31740_31785 = state_31723__$1;
(statearr_31740_31785[(2)] = inst_31679);

(statearr_31740_31785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (36))){
var inst_31709 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31741_31786 = state_31723__$1;
(statearr_31741_31786[(2)] = inst_31709);

(statearr_31741_31786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (29))){
var inst_31689 = (state_31723[(2)]);
var inst_31690 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31691 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31690);
var state_31723__$1 = (function (){var statearr_31742 = state_31723;
(statearr_31742[(9)] = inst_31689);

return statearr_31742;
})();
var statearr_31743_31787 = state_31723__$1;
(statearr_31743_31787[(2)] = inst_31691);

(statearr_31743_31787[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (6))){
var inst_31638 = (state_31723[(10)]);
var state_31723__$1 = state_31723;
var statearr_31744_31788 = state_31723__$1;
(statearr_31744_31788[(2)] = inst_31638);

(statearr_31744_31788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (28))){
var inst_31685 = (state_31723[(2)]);
var inst_31686 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31687 = figwheel.client.heads_up.display_warning.call(null,inst_31686);
var state_31723__$1 = (function (){var statearr_31745 = state_31723;
(statearr_31745[(11)] = inst_31685);

return statearr_31745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31723__$1,(29),inst_31687);
} else {
if((state_val_31724 === (25))){
var inst_31683 = figwheel.client.heads_up.clear.call(null);
var state_31723__$1 = state_31723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31723__$1,(28),inst_31683);
} else {
if((state_val_31724 === (34))){
var inst_31704 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31723__$1 = state_31723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31723__$1,(37),inst_31704);
} else {
if((state_val_31724 === (17))){
var inst_31663 = (state_31723[(2)]);
var inst_31664 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31665 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31664);
var state_31723__$1 = (function (){var statearr_31746 = state_31723;
(statearr_31746[(12)] = inst_31663);

return statearr_31746;
})();
var statearr_31747_31789 = state_31723__$1;
(statearr_31747_31789[(2)] = inst_31665);

(statearr_31747_31789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (3))){
var inst_31655 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31723__$1 = state_31723;
if(cljs.core.truth_(inst_31655)){
var statearr_31748_31790 = state_31723__$1;
(statearr_31748_31790[(1)] = (13));

} else {
var statearr_31749_31791 = state_31723__$1;
(statearr_31749_31791[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (12))){
var inst_31651 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31750_31792 = state_31723__$1;
(statearr_31750_31792[(2)] = inst_31651);

(statearr_31750_31792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (2))){
var inst_31638 = (state_31723[(10)]);
var inst_31638__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31723__$1 = (function (){var statearr_31751 = state_31723;
(statearr_31751[(10)] = inst_31638__$1);

return statearr_31751;
})();
if(cljs.core.truth_(inst_31638__$1)){
var statearr_31752_31793 = state_31723__$1;
(statearr_31752_31793[(1)] = (5));

} else {
var statearr_31753_31794 = state_31723__$1;
(statearr_31753_31794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (23))){
var inst_31681 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31723__$1 = state_31723;
if(cljs.core.truth_(inst_31681)){
var statearr_31754_31795 = state_31723__$1;
(statearr_31754_31795[(1)] = (25));

} else {
var statearr_31755_31796 = state_31723__$1;
(statearr_31755_31796[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (35))){
var state_31723__$1 = state_31723;
var statearr_31756_31797 = state_31723__$1;
(statearr_31756_31797[(2)] = null);

(statearr_31756_31797[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (19))){
var inst_31676 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31723__$1 = state_31723;
if(cljs.core.truth_(inst_31676)){
var statearr_31757_31798 = state_31723__$1;
(statearr_31757_31798[(1)] = (22));

} else {
var statearr_31758_31799 = state_31723__$1;
(statearr_31758_31799[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (11))){
var inst_31647 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31759_31800 = state_31723__$1;
(statearr_31759_31800[(2)] = inst_31647);

(statearr_31759_31800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (9))){
var inst_31649 = figwheel.client.heads_up.clear.call(null);
var state_31723__$1 = state_31723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31723__$1,(12),inst_31649);
} else {
if((state_val_31724 === (5))){
var inst_31640 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31723__$1 = state_31723;
var statearr_31760_31801 = state_31723__$1;
(statearr_31760_31801[(2)] = inst_31640);

(statearr_31760_31801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (14))){
var inst_31667 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31723__$1 = state_31723;
if(cljs.core.truth_(inst_31667)){
var statearr_31761_31802 = state_31723__$1;
(statearr_31761_31802[(1)] = (18));

} else {
var statearr_31762_31803 = state_31723__$1;
(statearr_31762_31803[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (26))){
var inst_31693 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31723__$1 = state_31723;
if(cljs.core.truth_(inst_31693)){
var statearr_31763_31804 = state_31723__$1;
(statearr_31763_31804[(1)] = (30));

} else {
var statearr_31764_31805 = state_31723__$1;
(statearr_31764_31805[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (16))){
var inst_31659 = (state_31723[(2)]);
var inst_31660 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31661 = figwheel.client.heads_up.display_exception.call(null,inst_31660);
var state_31723__$1 = (function (){var statearr_31765 = state_31723;
(statearr_31765[(13)] = inst_31659);

return statearr_31765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31723__$1,(17),inst_31661);
} else {
if((state_val_31724 === (30))){
var inst_31695 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31696 = figwheel.client.heads_up.display_warning.call(null,inst_31695);
var state_31723__$1 = state_31723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31723__$1,(33),inst_31696);
} else {
if((state_val_31724 === (10))){
var inst_31653 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31766_31806 = state_31723__$1;
(statearr_31766_31806[(2)] = inst_31653);

(statearr_31766_31806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (18))){
var inst_31669 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31670 = figwheel.client.heads_up.display_exception.call(null,inst_31669);
var state_31723__$1 = state_31723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31723__$1,(21),inst_31670);
} else {
if((state_val_31724 === (37))){
var inst_31706 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31767_31807 = state_31723__$1;
(statearr_31767_31807[(2)] = inst_31706);

(statearr_31767_31807[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (8))){
var inst_31645 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31723__$1 = state_31723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31723__$1,(11),inst_31645);
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
});})(c__27630__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27540__auto__,c__27630__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto____0 = (function (){
var statearr_31768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31768[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto__);

(statearr_31768[(1)] = (1));

return statearr_31768;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto____1 = (function (state_31723){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_31723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e31769){if((e31769 instanceof Object)){
var ex__27544__auto__ = e31769;
var statearr_31770_31808 = state_31723;
(statearr_31770_31808[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31809 = state_31723;
state_31723 = G__31809;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto__ = function(state_31723){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto____1.call(this,state_31723);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto__,msg_hist,msg_names,msg))
})();
var state__27632__auto__ = (function (){var statearr_31771 = f__27631__auto__.call(null);
(statearr_31771[(6)] = c__27630__auto__);

return statearr_31771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto__,msg_hist,msg_names,msg))
);

return c__27630__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27630__auto___31838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___31838,ch){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___31838,ch){
return (function (state_31824){
var state_val_31825 = (state_31824[(1)]);
if((state_val_31825 === (1))){
var state_31824__$1 = state_31824;
var statearr_31826_31839 = state_31824__$1;
(statearr_31826_31839[(2)] = null);

(statearr_31826_31839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (2))){
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31824__$1,(4),ch);
} else {
if((state_val_31825 === (3))){
var inst_31822 = (state_31824[(2)]);
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31824__$1,inst_31822);
} else {
if((state_val_31825 === (4))){
var inst_31812 = (state_31824[(7)]);
var inst_31812__$1 = (state_31824[(2)]);
var state_31824__$1 = (function (){var statearr_31827 = state_31824;
(statearr_31827[(7)] = inst_31812__$1);

return statearr_31827;
})();
if(cljs.core.truth_(inst_31812__$1)){
var statearr_31828_31840 = state_31824__$1;
(statearr_31828_31840[(1)] = (5));

} else {
var statearr_31829_31841 = state_31824__$1;
(statearr_31829_31841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (5))){
var inst_31812 = (state_31824[(7)]);
var inst_31814 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31812);
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31824__$1,(8),inst_31814);
} else {
if((state_val_31825 === (6))){
var state_31824__$1 = state_31824;
var statearr_31830_31842 = state_31824__$1;
(statearr_31830_31842[(2)] = null);

(statearr_31830_31842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (7))){
var inst_31820 = (state_31824[(2)]);
var state_31824__$1 = state_31824;
var statearr_31831_31843 = state_31824__$1;
(statearr_31831_31843[(2)] = inst_31820);

(statearr_31831_31843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (8))){
var inst_31816 = (state_31824[(2)]);
var state_31824__$1 = (function (){var statearr_31832 = state_31824;
(statearr_31832[(8)] = inst_31816);

return statearr_31832;
})();
var statearr_31833_31844 = state_31824__$1;
(statearr_31833_31844[(2)] = null);

(statearr_31833_31844[(1)] = (2));


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
});})(c__27630__auto___31838,ch))
;
return ((function (switch__27540__auto__,c__27630__auto___31838,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27541__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27541__auto____0 = (function (){
var statearr_31834 = [null,null,null,null,null,null,null,null,null];
(statearr_31834[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27541__auto__);

(statearr_31834[(1)] = (1));

return statearr_31834;
});
var figwheel$client$heads_up_plugin_$_state_machine__27541__auto____1 = (function (state_31824){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_31824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e31835){if((e31835 instanceof Object)){
var ex__27544__auto__ = e31835;
var statearr_31836_31845 = state_31824;
(statearr_31836_31845[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31846 = state_31824;
state_31824 = G__31846;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27541__auto__ = function(state_31824){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27541__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27541__auto____1.call(this,state_31824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27541__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27541__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___31838,ch))
})();
var state__27632__auto__ = (function (){var statearr_31837 = f__27631__auto__.call(null);
(statearr_31837[(6)] = c__27630__auto___31838);

return statearr_31837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___31838,ch))
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
var c__27630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto__){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto__){
return (function (state_31852){
var state_val_31853 = (state_31852[(1)]);
if((state_val_31853 === (1))){
var inst_31847 = cljs.core.async.timeout.call(null,(3000));
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31852__$1,(2),inst_31847);
} else {
if((state_val_31853 === (2))){
var inst_31849 = (state_31852[(2)]);
var inst_31850 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31852__$1 = (function (){var statearr_31854 = state_31852;
(statearr_31854[(7)] = inst_31849);

return statearr_31854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31852__$1,inst_31850);
} else {
return null;
}
}
});})(c__27630__auto__))
;
return ((function (switch__27540__auto__,c__27630__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27541__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27541__auto____0 = (function (){
var statearr_31855 = [null,null,null,null,null,null,null,null];
(statearr_31855[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27541__auto__);

(statearr_31855[(1)] = (1));

return statearr_31855;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27541__auto____1 = (function (state_31852){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_31852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e31856){if((e31856 instanceof Object)){
var ex__27544__auto__ = e31856;
var statearr_31857_31859 = state_31852;
(statearr_31857_31859[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31860 = state_31852;
state_31852 = G__31860;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27541__auto__ = function(state_31852){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27541__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27541__auto____1.call(this,state_31852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27541__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27541__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto__))
})();
var state__27632__auto__ = (function (){var statearr_31858 = f__27631__auto__.call(null);
(statearr_31858[(6)] = c__27630__auto__);

return statearr_31858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto__))
);

return c__27630__auto__;
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
var c__27630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31867){
var state_val_31868 = (state_31867[(1)]);
if((state_val_31868 === (1))){
var inst_31861 = cljs.core.async.timeout.call(null,(2000));
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31867__$1,(2),inst_31861);
} else {
if((state_val_31868 === (2))){
var inst_31863 = (state_31867[(2)]);
var inst_31864 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31865 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31864);
var state_31867__$1 = (function (){var statearr_31869 = state_31867;
(statearr_31869[(7)] = inst_31863);

return statearr_31869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31867__$1,inst_31865);
} else {
return null;
}
}
});})(c__27630__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27540__auto__,c__27630__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto____0 = (function (){
var statearr_31870 = [null,null,null,null,null,null,null,null];
(statearr_31870[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto__);

(statearr_31870[(1)] = (1));

return statearr_31870;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto____1 = (function (state_31867){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_31867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e31871){if((e31871 instanceof Object)){
var ex__27544__auto__ = e31871;
var statearr_31872_31874 = state_31867;
(statearr_31872_31874[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31875 = state_31867;
state_31867 = G__31875;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto__ = function(state_31867){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto____1.call(this,state_31867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27632__auto__ = (function (){var statearr_31873 = f__27631__auto__.call(null);
(statearr_31873[(6)] = c__27630__auto__);

return statearr_31873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto__,figwheel_version,temp__5457__auto__))
);

return c__27630__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31876){
var map__31877 = p__31876;
var map__31877__$1 = ((((!((map__31877 == null)))?(((((map__31877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31877):map__31877);
var file = cljs.core.get.call(null,map__31877__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31877__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31877__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31879 = "";
var G__31879__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31879),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31879);
var G__31879__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31879__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31879__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31879__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31879__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31880){
var map__31881 = p__31880;
var map__31881__$1 = ((((!((map__31881 == null)))?(((((map__31881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31881):map__31881);
var ed = map__31881__$1;
var formatted_exception = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31883_31887 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31884_31888 = null;
var count__31885_31889 = (0);
var i__31886_31890 = (0);
while(true){
if((i__31886_31890 < count__31885_31889)){
var msg_31891 = cljs.core._nth.call(null,chunk__31884_31888,i__31886_31890);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31891);


var G__31892 = seq__31883_31887;
var G__31893 = chunk__31884_31888;
var G__31894 = count__31885_31889;
var G__31895 = (i__31886_31890 + (1));
seq__31883_31887 = G__31892;
chunk__31884_31888 = G__31893;
count__31885_31889 = G__31894;
i__31886_31890 = G__31895;
continue;
} else {
var temp__5457__auto___31896 = cljs.core.seq.call(null,seq__31883_31887);
if(temp__5457__auto___31896){
var seq__31883_31897__$1 = temp__5457__auto___31896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31883_31897__$1)){
var c__4319__auto___31898 = cljs.core.chunk_first.call(null,seq__31883_31897__$1);
var G__31899 = cljs.core.chunk_rest.call(null,seq__31883_31897__$1);
var G__31900 = c__4319__auto___31898;
var G__31901 = cljs.core.count.call(null,c__4319__auto___31898);
var G__31902 = (0);
seq__31883_31887 = G__31899;
chunk__31884_31888 = G__31900;
count__31885_31889 = G__31901;
i__31886_31890 = G__31902;
continue;
} else {
var msg_31903 = cljs.core.first.call(null,seq__31883_31897__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31903);


var G__31904 = cljs.core.next.call(null,seq__31883_31897__$1);
var G__31905 = null;
var G__31906 = (0);
var G__31907 = (0);
seq__31883_31887 = G__31904;
chunk__31884_31888 = G__31905;
count__31885_31889 = G__31906;
i__31886_31890 = G__31907;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31908){
var map__31909 = p__31908;
var map__31909__$1 = ((((!((map__31909 == null)))?(((((map__31909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31909):map__31909);
var w = map__31909__$1;
var message = cljs.core.get.call(null,map__31909__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31911 = cljs.core.seq.call(null,plugins);
var chunk__31912 = null;
var count__31913 = (0);
var i__31914 = (0);
while(true){
if((i__31914 < count__31913)){
var vec__31915 = cljs.core._nth.call(null,chunk__31912,i__31914);
var k = cljs.core.nth.call(null,vec__31915,(0),null);
var plugin = cljs.core.nth.call(null,vec__31915,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31921 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31911,chunk__31912,count__31913,i__31914,pl_31921,vec__31915,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31921.call(null,msg_hist);
});})(seq__31911,chunk__31912,count__31913,i__31914,pl_31921,vec__31915,k,plugin))
);
} else {
}


var G__31922 = seq__31911;
var G__31923 = chunk__31912;
var G__31924 = count__31913;
var G__31925 = (i__31914 + (1));
seq__31911 = G__31922;
chunk__31912 = G__31923;
count__31913 = G__31924;
i__31914 = G__31925;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31911);
if(temp__5457__auto__){
var seq__31911__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31911__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31911__$1);
var G__31926 = cljs.core.chunk_rest.call(null,seq__31911__$1);
var G__31927 = c__4319__auto__;
var G__31928 = cljs.core.count.call(null,c__4319__auto__);
var G__31929 = (0);
seq__31911 = G__31926;
chunk__31912 = G__31927;
count__31913 = G__31928;
i__31914 = G__31929;
continue;
} else {
var vec__31918 = cljs.core.first.call(null,seq__31911__$1);
var k = cljs.core.nth.call(null,vec__31918,(0),null);
var plugin = cljs.core.nth.call(null,vec__31918,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31930 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31911,chunk__31912,count__31913,i__31914,pl_31930,vec__31918,k,plugin,seq__31911__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31930.call(null,msg_hist);
});})(seq__31911,chunk__31912,count__31913,i__31914,pl_31930,vec__31918,k,plugin,seq__31911__$1,temp__5457__auto__))
);
} else {
}


var G__31931 = cljs.core.next.call(null,seq__31911__$1);
var G__31932 = null;
var G__31933 = (0);
var G__31934 = (0);
seq__31911 = G__31931;
chunk__31912 = G__31932;
count__31913 = G__31933;
i__31914 = G__31934;
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
var G__31936 = arguments.length;
switch (G__31936) {
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

var seq__31937_31942 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31938_31943 = null;
var count__31939_31944 = (0);
var i__31940_31945 = (0);
while(true){
if((i__31940_31945 < count__31939_31944)){
var msg_31946 = cljs.core._nth.call(null,chunk__31938_31943,i__31940_31945);
figwheel.client.socket.handle_incoming_message.call(null,msg_31946);


var G__31947 = seq__31937_31942;
var G__31948 = chunk__31938_31943;
var G__31949 = count__31939_31944;
var G__31950 = (i__31940_31945 + (1));
seq__31937_31942 = G__31947;
chunk__31938_31943 = G__31948;
count__31939_31944 = G__31949;
i__31940_31945 = G__31950;
continue;
} else {
var temp__5457__auto___31951 = cljs.core.seq.call(null,seq__31937_31942);
if(temp__5457__auto___31951){
var seq__31937_31952__$1 = temp__5457__auto___31951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31937_31952__$1)){
var c__4319__auto___31953 = cljs.core.chunk_first.call(null,seq__31937_31952__$1);
var G__31954 = cljs.core.chunk_rest.call(null,seq__31937_31952__$1);
var G__31955 = c__4319__auto___31953;
var G__31956 = cljs.core.count.call(null,c__4319__auto___31953);
var G__31957 = (0);
seq__31937_31942 = G__31954;
chunk__31938_31943 = G__31955;
count__31939_31944 = G__31956;
i__31940_31945 = G__31957;
continue;
} else {
var msg_31958 = cljs.core.first.call(null,seq__31937_31952__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31958);


var G__31959 = cljs.core.next.call(null,seq__31937_31952__$1);
var G__31960 = null;
var G__31961 = (0);
var G__31962 = (0);
seq__31937_31942 = G__31959;
chunk__31938_31943 = G__31960;
count__31939_31944 = G__31961;
i__31940_31945 = G__31962;
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
var len__4499__auto___31967 = arguments.length;
var i__4500__auto___31968 = (0);
while(true){
if((i__4500__auto___31968 < len__4499__auto___31967)){
args__4502__auto__.push((arguments[i__4500__auto___31968]));

var G__31969 = (i__4500__auto___31968 + (1));
i__4500__auto___31968 = G__31969;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31964){
var map__31965 = p__31964;
var map__31965__$1 = ((((!((map__31965 == null)))?(((((map__31965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31965):map__31965);
var opts = map__31965__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31963){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31963));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31970){if((e31970 instanceof Error)){
var e = e31970;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31970;

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
return (function (p__31971){
var map__31972 = p__31971;
var map__31972__$1 = ((((!((map__31972 == null)))?(((((map__31972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31972):map__31972);
var msg_name = cljs.core.get.call(null,map__31972__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1582304855200
