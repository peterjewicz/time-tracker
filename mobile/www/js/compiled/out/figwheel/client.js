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
}catch (e31471){if((e31471 instanceof Error)){
var e = e31471;
return "Error: Unable to stringify";
} else {
throw e31471;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31474 = arguments.length;
switch (G__31474) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31472_SHARP_){
if(typeof p1__31472_SHARP_ === 'string'){
return p1__31472_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31472_SHARP_);
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
var len__4499__auto___31477 = arguments.length;
var i__4500__auto___31478 = (0);
while(true){
if((i__4500__auto___31478 < len__4499__auto___31477)){
args__4502__auto__.push((arguments[i__4500__auto___31478]));

var G__31479 = (i__4500__auto___31478 + (1));
i__4500__auto___31478 = G__31479;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31476){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31476));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31481 = arguments.length;
var i__4500__auto___31482 = (0);
while(true){
if((i__4500__auto___31482 < len__4499__auto___31481)){
args__4502__auto__.push((arguments[i__4500__auto___31482]));

var G__31483 = (i__4500__auto___31482 + (1));
i__4500__auto___31482 = G__31483;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31480){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31480));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31484){
var map__31485 = p__31484;
var map__31485__$1 = ((((!((map__31485 == null)))?(((((map__31485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31485):map__31485);
var message = cljs.core.get.call(null,map__31485__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31485__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27611__auto___31564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___31564,ch){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___31564,ch){
return (function (state_31536){
var state_val_31537 = (state_31536[(1)]);
if((state_val_31537 === (7))){
var inst_31532 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31538_31565 = state_31536__$1;
(statearr_31538_31565[(2)] = inst_31532);

(statearr_31538_31565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (1))){
var state_31536__$1 = state_31536;
var statearr_31539_31566 = state_31536__$1;
(statearr_31539_31566[(2)] = null);

(statearr_31539_31566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (4))){
var inst_31489 = (state_31536[(7)]);
var inst_31489__$1 = (state_31536[(2)]);
var state_31536__$1 = (function (){var statearr_31540 = state_31536;
(statearr_31540[(7)] = inst_31489__$1);

return statearr_31540;
})();
if(cljs.core.truth_(inst_31489__$1)){
var statearr_31541_31567 = state_31536__$1;
(statearr_31541_31567[(1)] = (5));

} else {
var statearr_31542_31568 = state_31536__$1;
(statearr_31542_31568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (15))){
var inst_31496 = (state_31536[(8)]);
var inst_31511 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31496);
var inst_31512 = cljs.core.first.call(null,inst_31511);
var inst_31513 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31512);
var inst_31514 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31513)].join('');
var inst_31515 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31514);
var state_31536__$1 = state_31536;
var statearr_31543_31569 = state_31536__$1;
(statearr_31543_31569[(2)] = inst_31515);

(statearr_31543_31569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (13))){
var inst_31520 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31544_31570 = state_31536__$1;
(statearr_31544_31570[(2)] = inst_31520);

(statearr_31544_31570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (6))){
var state_31536__$1 = state_31536;
var statearr_31545_31571 = state_31536__$1;
(statearr_31545_31571[(2)] = null);

(statearr_31545_31571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (17))){
var inst_31518 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31546_31572 = state_31536__$1;
(statearr_31546_31572[(2)] = inst_31518);

(statearr_31546_31572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (3))){
var inst_31534 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31536__$1,inst_31534);
} else {
if((state_val_31537 === (12))){
var inst_31495 = (state_31536[(9)]);
var inst_31509 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31495,opts);
var state_31536__$1 = state_31536;
if(cljs.core.truth_(inst_31509)){
var statearr_31547_31573 = state_31536__$1;
(statearr_31547_31573[(1)] = (15));

} else {
var statearr_31548_31574 = state_31536__$1;
(statearr_31548_31574[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (2))){
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(4),ch);
} else {
if((state_val_31537 === (11))){
var inst_31496 = (state_31536[(8)]);
var inst_31501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31502 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31496);
var inst_31503 = cljs.core.async.timeout.call(null,(1000));
var inst_31504 = [inst_31502,inst_31503];
var inst_31505 = (new cljs.core.PersistentVector(null,2,(5),inst_31501,inst_31504,null));
var state_31536__$1 = state_31536;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31536__$1,(14),inst_31505);
} else {
if((state_val_31537 === (9))){
var inst_31496 = (state_31536[(8)]);
var inst_31522 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31523 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31496);
var inst_31524 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31523);
var inst_31525 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31524)].join('');
var inst_31526 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31525);
var state_31536__$1 = (function (){var statearr_31549 = state_31536;
(statearr_31549[(10)] = inst_31522);

return statearr_31549;
})();
var statearr_31550_31575 = state_31536__$1;
(statearr_31550_31575[(2)] = inst_31526);

(statearr_31550_31575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (5))){
var inst_31489 = (state_31536[(7)]);
var inst_31491 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31492 = (new cljs.core.PersistentArrayMap(null,2,inst_31491,null));
var inst_31493 = (new cljs.core.PersistentHashSet(null,inst_31492,null));
var inst_31494 = figwheel.client.focus_msgs.call(null,inst_31493,inst_31489);
var inst_31495 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31494);
var inst_31496 = cljs.core.first.call(null,inst_31494);
var inst_31497 = figwheel.client.autoload_QMARK_.call(null);
var state_31536__$1 = (function (){var statearr_31551 = state_31536;
(statearr_31551[(8)] = inst_31496);

(statearr_31551[(9)] = inst_31495);

return statearr_31551;
})();
if(cljs.core.truth_(inst_31497)){
var statearr_31552_31576 = state_31536__$1;
(statearr_31552_31576[(1)] = (8));

} else {
var statearr_31553_31577 = state_31536__$1;
(statearr_31553_31577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (14))){
var inst_31507 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31554_31578 = state_31536__$1;
(statearr_31554_31578[(2)] = inst_31507);

(statearr_31554_31578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (16))){
var state_31536__$1 = state_31536;
var statearr_31555_31579 = state_31536__$1;
(statearr_31555_31579[(2)] = null);

(statearr_31555_31579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (10))){
var inst_31528 = (state_31536[(2)]);
var state_31536__$1 = (function (){var statearr_31556 = state_31536;
(statearr_31556[(11)] = inst_31528);

return statearr_31556;
})();
var statearr_31557_31580 = state_31536__$1;
(statearr_31557_31580[(2)] = null);

(statearr_31557_31580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (8))){
var inst_31495 = (state_31536[(9)]);
var inst_31499 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31495,opts);
var state_31536__$1 = state_31536;
if(cljs.core.truth_(inst_31499)){
var statearr_31558_31581 = state_31536__$1;
(statearr_31558_31581[(1)] = (11));

} else {
var statearr_31559_31582 = state_31536__$1;
(statearr_31559_31582[(1)] = (12));

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
});})(c__27611__auto___31564,ch))
;
return ((function (switch__27521__auto__,c__27611__auto___31564,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27522__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27522__auto____0 = (function (){
var statearr_31560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31560[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27522__auto__);

(statearr_31560[(1)] = (1));

return statearr_31560;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27522__auto____1 = (function (state_31536){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_31536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e31561){if((e31561 instanceof Object)){
var ex__27525__auto__ = e31561;
var statearr_31562_31583 = state_31536;
(statearr_31562_31583[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31584 = state_31536;
state_31536 = G__31584;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27522__auto__ = function(state_31536){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27522__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27522__auto____1.call(this,state_31536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27522__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27522__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___31564,ch))
})();
var state__27613__auto__ = (function (){var statearr_31563 = f__27612__auto__.call(null);
(statearr_31563[(6)] = c__27611__auto___31564);

return statearr_31563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___31564,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31585_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31585_SHARP_));
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
var base_path_31589 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31589){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31587 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31588 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31587,_STAR_print_fn_STAR_31588,sb,base_path_31589){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31587,_STAR_print_fn_STAR_31588,sb,base_path_31589))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31588;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31587;
}}catch (e31586){if((e31586 instanceof Error)){
var e = e31586;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31589], null));
} else {
var e = e31586;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31589))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31590){
var map__31591 = p__31590;
var map__31591__$1 = ((((!((map__31591 == null)))?(((((map__31591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31591):map__31591);
var opts = map__31591__$1;
var build_id = cljs.core.get.call(null,map__31591__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31591,map__31591__$1,opts,build_id){
return (function (p__31593){
var vec__31594 = p__31593;
var seq__31595 = cljs.core.seq.call(null,vec__31594);
var first__31596 = cljs.core.first.call(null,seq__31595);
var seq__31595__$1 = cljs.core.next.call(null,seq__31595);
var map__31597 = first__31596;
var map__31597__$1 = ((((!((map__31597 == null)))?(((((map__31597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31597):map__31597);
var msg = map__31597__$1;
var msg_name = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31595__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31594,seq__31595,first__31596,seq__31595__$1,map__31597,map__31597__$1,msg,msg_name,_,map__31591,map__31591__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31594,seq__31595,first__31596,seq__31595__$1,map__31597,map__31597__$1,msg,msg_name,_,map__31591,map__31591__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31591,map__31591__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31599){
var vec__31600 = p__31599;
var seq__31601 = cljs.core.seq.call(null,vec__31600);
var first__31602 = cljs.core.first.call(null,seq__31601);
var seq__31601__$1 = cljs.core.next.call(null,seq__31601);
var map__31603 = first__31602;
var map__31603__$1 = ((((!((map__31603 == null)))?(((((map__31603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31603):map__31603);
var msg = map__31603__$1;
var msg_name = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31601__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31605){
var map__31606 = p__31605;
var map__31606__$1 = ((((!((map__31606 == null)))?(((((map__31606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31606):map__31606);
var on_compile_warning = cljs.core.get.call(null,map__31606__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31606__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31606,map__31606__$1,on_compile_warning,on_compile_fail){
return (function (p__31608){
var vec__31609 = p__31608;
var seq__31610 = cljs.core.seq.call(null,vec__31609);
var first__31611 = cljs.core.first.call(null,seq__31610);
var seq__31610__$1 = cljs.core.next.call(null,seq__31610);
var map__31612 = first__31611;
var map__31612__$1 = ((((!((map__31612 == null)))?(((((map__31612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31612):map__31612);
var msg = map__31612__$1;
var msg_name = cljs.core.get.call(null,map__31612__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31610__$1;
var pred__31614 = cljs.core._EQ_;
var expr__31615 = msg_name;
if(cljs.core.truth_(pred__31614.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31615))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31614.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31615))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31606,map__31606__$1,on_compile_warning,on_compile_fail))
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
var c__27611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto__,msg_hist,msg_names,msg){
return (function (state_31704){
var state_val_31705 = (state_31704[(1)]);
if((state_val_31705 === (7))){
var inst_31624 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31624)){
var statearr_31706_31753 = state_31704__$1;
(statearr_31706_31753[(1)] = (8));

} else {
var statearr_31707_31754 = state_31704__$1;
(statearr_31707_31754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (20))){
var inst_31698 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31708_31755 = state_31704__$1;
(statearr_31708_31755[(2)] = inst_31698);

(statearr_31708_31755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (27))){
var inst_31694 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31709_31756 = state_31704__$1;
(statearr_31709_31756[(2)] = inst_31694);

(statearr_31709_31756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (1))){
var inst_31617 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31617)){
var statearr_31710_31757 = state_31704__$1;
(statearr_31710_31757[(1)] = (2));

} else {
var statearr_31711_31758 = state_31704__$1;
(statearr_31711_31758[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (24))){
var inst_31696 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31712_31759 = state_31704__$1;
(statearr_31712_31759[(2)] = inst_31696);

(statearr_31712_31759[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (4))){
var inst_31702 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31704__$1,inst_31702);
} else {
if((state_val_31705 === (15))){
var inst_31700 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31713_31760 = state_31704__$1;
(statearr_31713_31760[(2)] = inst_31700);

(statearr_31713_31760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (21))){
var inst_31653 = (state_31704[(2)]);
var inst_31654 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31655 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31654);
var state_31704__$1 = (function (){var statearr_31714 = state_31704;
(statearr_31714[(7)] = inst_31653);

return statearr_31714;
})();
var statearr_31715_31761 = state_31704__$1;
(statearr_31715_31761[(2)] = inst_31655);

(statearr_31715_31761[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (31))){
var inst_31683 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31683)){
var statearr_31716_31762 = state_31704__$1;
(statearr_31716_31762[(1)] = (34));

} else {
var statearr_31717_31763 = state_31704__$1;
(statearr_31717_31763[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (32))){
var inst_31692 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31718_31764 = state_31704__$1;
(statearr_31718_31764[(2)] = inst_31692);

(statearr_31718_31764[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (33))){
var inst_31679 = (state_31704[(2)]);
var inst_31680 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31681 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31680);
var state_31704__$1 = (function (){var statearr_31719 = state_31704;
(statearr_31719[(8)] = inst_31679);

return statearr_31719;
})();
var statearr_31720_31765 = state_31704__$1;
(statearr_31720_31765[(2)] = inst_31681);

(statearr_31720_31765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (13))){
var inst_31638 = figwheel.client.heads_up.clear.call(null);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(16),inst_31638);
} else {
if((state_val_31705 === (22))){
var inst_31659 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31660 = figwheel.client.heads_up.append_warning_message.call(null,inst_31659);
var state_31704__$1 = state_31704;
var statearr_31721_31766 = state_31704__$1;
(statearr_31721_31766[(2)] = inst_31660);

(statearr_31721_31766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (36))){
var inst_31690 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31722_31767 = state_31704__$1;
(statearr_31722_31767[(2)] = inst_31690);

(statearr_31722_31767[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (29))){
var inst_31670 = (state_31704[(2)]);
var inst_31671 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31672 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31671);
var state_31704__$1 = (function (){var statearr_31723 = state_31704;
(statearr_31723[(9)] = inst_31670);

return statearr_31723;
})();
var statearr_31724_31768 = state_31704__$1;
(statearr_31724_31768[(2)] = inst_31672);

(statearr_31724_31768[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (6))){
var inst_31619 = (state_31704[(10)]);
var state_31704__$1 = state_31704;
var statearr_31725_31769 = state_31704__$1;
(statearr_31725_31769[(2)] = inst_31619);

(statearr_31725_31769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (28))){
var inst_31666 = (state_31704[(2)]);
var inst_31667 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31668 = figwheel.client.heads_up.display_warning.call(null,inst_31667);
var state_31704__$1 = (function (){var statearr_31726 = state_31704;
(statearr_31726[(11)] = inst_31666);

return statearr_31726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(29),inst_31668);
} else {
if((state_val_31705 === (25))){
var inst_31664 = figwheel.client.heads_up.clear.call(null);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(28),inst_31664);
} else {
if((state_val_31705 === (34))){
var inst_31685 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(37),inst_31685);
} else {
if((state_val_31705 === (17))){
var inst_31644 = (state_31704[(2)]);
var inst_31645 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31646 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31645);
var state_31704__$1 = (function (){var statearr_31727 = state_31704;
(statearr_31727[(12)] = inst_31644);

return statearr_31727;
})();
var statearr_31728_31770 = state_31704__$1;
(statearr_31728_31770[(2)] = inst_31646);

(statearr_31728_31770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (3))){
var inst_31636 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31636)){
var statearr_31729_31771 = state_31704__$1;
(statearr_31729_31771[(1)] = (13));

} else {
var statearr_31730_31772 = state_31704__$1;
(statearr_31730_31772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (12))){
var inst_31632 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31731_31773 = state_31704__$1;
(statearr_31731_31773[(2)] = inst_31632);

(statearr_31731_31773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (2))){
var inst_31619 = (state_31704[(10)]);
var inst_31619__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31704__$1 = (function (){var statearr_31732 = state_31704;
(statearr_31732[(10)] = inst_31619__$1);

return statearr_31732;
})();
if(cljs.core.truth_(inst_31619__$1)){
var statearr_31733_31774 = state_31704__$1;
(statearr_31733_31774[(1)] = (5));

} else {
var statearr_31734_31775 = state_31704__$1;
(statearr_31734_31775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (23))){
var inst_31662 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31662)){
var statearr_31735_31776 = state_31704__$1;
(statearr_31735_31776[(1)] = (25));

} else {
var statearr_31736_31777 = state_31704__$1;
(statearr_31736_31777[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (35))){
var state_31704__$1 = state_31704;
var statearr_31737_31778 = state_31704__$1;
(statearr_31737_31778[(2)] = null);

(statearr_31737_31778[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (19))){
var inst_31657 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31657)){
var statearr_31738_31779 = state_31704__$1;
(statearr_31738_31779[(1)] = (22));

} else {
var statearr_31739_31780 = state_31704__$1;
(statearr_31739_31780[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (11))){
var inst_31628 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31740_31781 = state_31704__$1;
(statearr_31740_31781[(2)] = inst_31628);

(statearr_31740_31781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (9))){
var inst_31630 = figwheel.client.heads_up.clear.call(null);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(12),inst_31630);
} else {
if((state_val_31705 === (5))){
var inst_31621 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31704__$1 = state_31704;
var statearr_31741_31782 = state_31704__$1;
(statearr_31741_31782[(2)] = inst_31621);

(statearr_31741_31782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (14))){
var inst_31648 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31648)){
var statearr_31742_31783 = state_31704__$1;
(statearr_31742_31783[(1)] = (18));

} else {
var statearr_31743_31784 = state_31704__$1;
(statearr_31743_31784[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (26))){
var inst_31674 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31674)){
var statearr_31744_31785 = state_31704__$1;
(statearr_31744_31785[(1)] = (30));

} else {
var statearr_31745_31786 = state_31704__$1;
(statearr_31745_31786[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (16))){
var inst_31640 = (state_31704[(2)]);
var inst_31641 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31642 = figwheel.client.heads_up.display_exception.call(null,inst_31641);
var state_31704__$1 = (function (){var statearr_31746 = state_31704;
(statearr_31746[(13)] = inst_31640);

return statearr_31746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(17),inst_31642);
} else {
if((state_val_31705 === (30))){
var inst_31676 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31677 = figwheel.client.heads_up.display_warning.call(null,inst_31676);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(33),inst_31677);
} else {
if((state_val_31705 === (10))){
var inst_31634 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31747_31787 = state_31704__$1;
(statearr_31747_31787[(2)] = inst_31634);

(statearr_31747_31787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (18))){
var inst_31650 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31651 = figwheel.client.heads_up.display_exception.call(null,inst_31650);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(21),inst_31651);
} else {
if((state_val_31705 === (37))){
var inst_31687 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31748_31788 = state_31704__$1;
(statearr_31748_31788[(2)] = inst_31687);

(statearr_31748_31788[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (8))){
var inst_31626 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(11),inst_31626);
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
});})(c__27611__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27521__auto__,c__27611__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto____0 = (function (){
var statearr_31749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31749[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto__);

(statearr_31749[(1)] = (1));

return statearr_31749;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto____1 = (function (state_31704){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_31704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e31750){if((e31750 instanceof Object)){
var ex__27525__auto__ = e31750;
var statearr_31751_31789 = state_31704;
(statearr_31751_31789[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31790 = state_31704;
state_31704 = G__31790;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto__ = function(state_31704){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto____1.call(this,state_31704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto__,msg_hist,msg_names,msg))
})();
var state__27613__auto__ = (function (){var statearr_31752 = f__27612__auto__.call(null);
(statearr_31752[(6)] = c__27611__auto__);

return statearr_31752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto__,msg_hist,msg_names,msg))
);

return c__27611__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27611__auto___31819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___31819,ch){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___31819,ch){
return (function (state_31805){
var state_val_31806 = (state_31805[(1)]);
if((state_val_31806 === (1))){
var state_31805__$1 = state_31805;
var statearr_31807_31820 = state_31805__$1;
(statearr_31807_31820[(2)] = null);

(statearr_31807_31820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (2))){
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31805__$1,(4),ch);
} else {
if((state_val_31806 === (3))){
var inst_31803 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31805__$1,inst_31803);
} else {
if((state_val_31806 === (4))){
var inst_31793 = (state_31805[(7)]);
var inst_31793__$1 = (state_31805[(2)]);
var state_31805__$1 = (function (){var statearr_31808 = state_31805;
(statearr_31808[(7)] = inst_31793__$1);

return statearr_31808;
})();
if(cljs.core.truth_(inst_31793__$1)){
var statearr_31809_31821 = state_31805__$1;
(statearr_31809_31821[(1)] = (5));

} else {
var statearr_31810_31822 = state_31805__$1;
(statearr_31810_31822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (5))){
var inst_31793 = (state_31805[(7)]);
var inst_31795 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31793);
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31805__$1,(8),inst_31795);
} else {
if((state_val_31806 === (6))){
var state_31805__$1 = state_31805;
var statearr_31811_31823 = state_31805__$1;
(statearr_31811_31823[(2)] = null);

(statearr_31811_31823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (7))){
var inst_31801 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31812_31824 = state_31805__$1;
(statearr_31812_31824[(2)] = inst_31801);

(statearr_31812_31824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (8))){
var inst_31797 = (state_31805[(2)]);
var state_31805__$1 = (function (){var statearr_31813 = state_31805;
(statearr_31813[(8)] = inst_31797);

return statearr_31813;
})();
var statearr_31814_31825 = state_31805__$1;
(statearr_31814_31825[(2)] = null);

(statearr_31814_31825[(1)] = (2));


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
});})(c__27611__auto___31819,ch))
;
return ((function (switch__27521__auto__,c__27611__auto___31819,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27522__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27522__auto____0 = (function (){
var statearr_31815 = [null,null,null,null,null,null,null,null,null];
(statearr_31815[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27522__auto__);

(statearr_31815[(1)] = (1));

return statearr_31815;
});
var figwheel$client$heads_up_plugin_$_state_machine__27522__auto____1 = (function (state_31805){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_31805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e31816){if((e31816 instanceof Object)){
var ex__27525__auto__ = e31816;
var statearr_31817_31826 = state_31805;
(statearr_31817_31826[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31827 = state_31805;
state_31805 = G__31827;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27522__auto__ = function(state_31805){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27522__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27522__auto____1.call(this,state_31805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27522__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27522__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___31819,ch))
})();
var state__27613__auto__ = (function (){var statearr_31818 = f__27612__auto__.call(null);
(statearr_31818[(6)] = c__27611__auto___31819);

return statearr_31818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___31819,ch))
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
var c__27611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto__){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto__){
return (function (state_31833){
var state_val_31834 = (state_31833[(1)]);
if((state_val_31834 === (1))){
var inst_31828 = cljs.core.async.timeout.call(null,(3000));
var state_31833__$1 = state_31833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31833__$1,(2),inst_31828);
} else {
if((state_val_31834 === (2))){
var inst_31830 = (state_31833[(2)]);
var inst_31831 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31833__$1 = (function (){var statearr_31835 = state_31833;
(statearr_31835[(7)] = inst_31830);

return statearr_31835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31833__$1,inst_31831);
} else {
return null;
}
}
});})(c__27611__auto__))
;
return ((function (switch__27521__auto__,c__27611__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27522__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27522__auto____0 = (function (){
var statearr_31836 = [null,null,null,null,null,null,null,null];
(statearr_31836[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27522__auto__);

(statearr_31836[(1)] = (1));

return statearr_31836;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27522__auto____1 = (function (state_31833){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_31833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e31837){if((e31837 instanceof Object)){
var ex__27525__auto__ = e31837;
var statearr_31838_31840 = state_31833;
(statearr_31838_31840[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31841 = state_31833;
state_31833 = G__31841;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27522__auto__ = function(state_31833){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27522__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27522__auto____1.call(this,state_31833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27522__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27522__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto__))
})();
var state__27613__auto__ = (function (){var statearr_31839 = f__27612__auto__.call(null);
(statearr_31839[(6)] = c__27611__auto__);

return statearr_31839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto__))
);

return c__27611__auto__;
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
var c__27611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31848){
var state_val_31849 = (state_31848[(1)]);
if((state_val_31849 === (1))){
var inst_31842 = cljs.core.async.timeout.call(null,(2000));
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31848__$1,(2),inst_31842);
} else {
if((state_val_31849 === (2))){
var inst_31844 = (state_31848[(2)]);
var inst_31845 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31846 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31845);
var state_31848__$1 = (function (){var statearr_31850 = state_31848;
(statearr_31850[(7)] = inst_31844);

return statearr_31850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31848__$1,inst_31846);
} else {
return null;
}
}
});})(c__27611__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27521__auto__,c__27611__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto____0 = (function (){
var statearr_31851 = [null,null,null,null,null,null,null,null];
(statearr_31851[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto__);

(statearr_31851[(1)] = (1));

return statearr_31851;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto____1 = (function (state_31848){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_31848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e31852){if((e31852 instanceof Object)){
var ex__27525__auto__ = e31852;
var statearr_31853_31855 = state_31848;
(statearr_31853_31855[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31856 = state_31848;
state_31848 = G__31856;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto__ = function(state_31848){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto____1.call(this,state_31848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27613__auto__ = (function (){var statearr_31854 = f__27612__auto__.call(null);
(statearr_31854[(6)] = c__27611__auto__);

return statearr_31854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto__,figwheel_version,temp__5457__auto__))
);

return c__27611__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31857){
var map__31858 = p__31857;
var map__31858__$1 = ((((!((map__31858 == null)))?(((((map__31858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31858):map__31858);
var file = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31860 = "";
var G__31860__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31860),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31860);
var G__31860__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31860__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31860__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31860__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31860__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31861){
var map__31862 = p__31861;
var map__31862__$1 = ((((!((map__31862 == null)))?(((((map__31862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31862):map__31862);
var ed = map__31862__$1;
var formatted_exception = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31864_31868 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31865_31869 = null;
var count__31866_31870 = (0);
var i__31867_31871 = (0);
while(true){
if((i__31867_31871 < count__31866_31870)){
var msg_31872 = cljs.core._nth.call(null,chunk__31865_31869,i__31867_31871);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31872);


var G__31873 = seq__31864_31868;
var G__31874 = chunk__31865_31869;
var G__31875 = count__31866_31870;
var G__31876 = (i__31867_31871 + (1));
seq__31864_31868 = G__31873;
chunk__31865_31869 = G__31874;
count__31866_31870 = G__31875;
i__31867_31871 = G__31876;
continue;
} else {
var temp__5457__auto___31877 = cljs.core.seq.call(null,seq__31864_31868);
if(temp__5457__auto___31877){
var seq__31864_31878__$1 = temp__5457__auto___31877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31864_31878__$1)){
var c__4319__auto___31879 = cljs.core.chunk_first.call(null,seq__31864_31878__$1);
var G__31880 = cljs.core.chunk_rest.call(null,seq__31864_31878__$1);
var G__31881 = c__4319__auto___31879;
var G__31882 = cljs.core.count.call(null,c__4319__auto___31879);
var G__31883 = (0);
seq__31864_31868 = G__31880;
chunk__31865_31869 = G__31881;
count__31866_31870 = G__31882;
i__31867_31871 = G__31883;
continue;
} else {
var msg_31884 = cljs.core.first.call(null,seq__31864_31878__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31884);


var G__31885 = cljs.core.next.call(null,seq__31864_31878__$1);
var G__31886 = null;
var G__31887 = (0);
var G__31888 = (0);
seq__31864_31868 = G__31885;
chunk__31865_31869 = G__31886;
count__31866_31870 = G__31887;
i__31867_31871 = G__31888;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31889){
var map__31890 = p__31889;
var map__31890__$1 = ((((!((map__31890 == null)))?(((((map__31890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31890):map__31890);
var w = map__31890__$1;
var message = cljs.core.get.call(null,map__31890__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31892 = cljs.core.seq.call(null,plugins);
var chunk__31893 = null;
var count__31894 = (0);
var i__31895 = (0);
while(true){
if((i__31895 < count__31894)){
var vec__31896 = cljs.core._nth.call(null,chunk__31893,i__31895);
var k = cljs.core.nth.call(null,vec__31896,(0),null);
var plugin = cljs.core.nth.call(null,vec__31896,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31902 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31892,chunk__31893,count__31894,i__31895,pl_31902,vec__31896,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31902.call(null,msg_hist);
});})(seq__31892,chunk__31893,count__31894,i__31895,pl_31902,vec__31896,k,plugin))
);
} else {
}


var G__31903 = seq__31892;
var G__31904 = chunk__31893;
var G__31905 = count__31894;
var G__31906 = (i__31895 + (1));
seq__31892 = G__31903;
chunk__31893 = G__31904;
count__31894 = G__31905;
i__31895 = G__31906;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31892);
if(temp__5457__auto__){
var seq__31892__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31892__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31892__$1);
var G__31907 = cljs.core.chunk_rest.call(null,seq__31892__$1);
var G__31908 = c__4319__auto__;
var G__31909 = cljs.core.count.call(null,c__4319__auto__);
var G__31910 = (0);
seq__31892 = G__31907;
chunk__31893 = G__31908;
count__31894 = G__31909;
i__31895 = G__31910;
continue;
} else {
var vec__31899 = cljs.core.first.call(null,seq__31892__$1);
var k = cljs.core.nth.call(null,vec__31899,(0),null);
var plugin = cljs.core.nth.call(null,vec__31899,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31911 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31892,chunk__31893,count__31894,i__31895,pl_31911,vec__31899,k,plugin,seq__31892__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31911.call(null,msg_hist);
});})(seq__31892,chunk__31893,count__31894,i__31895,pl_31911,vec__31899,k,plugin,seq__31892__$1,temp__5457__auto__))
);
} else {
}


var G__31912 = cljs.core.next.call(null,seq__31892__$1);
var G__31913 = null;
var G__31914 = (0);
var G__31915 = (0);
seq__31892 = G__31912;
chunk__31893 = G__31913;
count__31894 = G__31914;
i__31895 = G__31915;
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
var G__31917 = arguments.length;
switch (G__31917) {
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

var seq__31918_31923 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31919_31924 = null;
var count__31920_31925 = (0);
var i__31921_31926 = (0);
while(true){
if((i__31921_31926 < count__31920_31925)){
var msg_31927 = cljs.core._nth.call(null,chunk__31919_31924,i__31921_31926);
figwheel.client.socket.handle_incoming_message.call(null,msg_31927);


var G__31928 = seq__31918_31923;
var G__31929 = chunk__31919_31924;
var G__31930 = count__31920_31925;
var G__31931 = (i__31921_31926 + (1));
seq__31918_31923 = G__31928;
chunk__31919_31924 = G__31929;
count__31920_31925 = G__31930;
i__31921_31926 = G__31931;
continue;
} else {
var temp__5457__auto___31932 = cljs.core.seq.call(null,seq__31918_31923);
if(temp__5457__auto___31932){
var seq__31918_31933__$1 = temp__5457__auto___31932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31918_31933__$1)){
var c__4319__auto___31934 = cljs.core.chunk_first.call(null,seq__31918_31933__$1);
var G__31935 = cljs.core.chunk_rest.call(null,seq__31918_31933__$1);
var G__31936 = c__4319__auto___31934;
var G__31937 = cljs.core.count.call(null,c__4319__auto___31934);
var G__31938 = (0);
seq__31918_31923 = G__31935;
chunk__31919_31924 = G__31936;
count__31920_31925 = G__31937;
i__31921_31926 = G__31938;
continue;
} else {
var msg_31939 = cljs.core.first.call(null,seq__31918_31933__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31939);


var G__31940 = cljs.core.next.call(null,seq__31918_31933__$1);
var G__31941 = null;
var G__31942 = (0);
var G__31943 = (0);
seq__31918_31923 = G__31940;
chunk__31919_31924 = G__31941;
count__31920_31925 = G__31942;
i__31921_31926 = G__31943;
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
var len__4499__auto___31948 = arguments.length;
var i__4500__auto___31949 = (0);
while(true){
if((i__4500__auto___31949 < len__4499__auto___31948)){
args__4502__auto__.push((arguments[i__4500__auto___31949]));

var G__31950 = (i__4500__auto___31949 + (1));
i__4500__auto___31949 = G__31950;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31945){
var map__31946 = p__31945;
var map__31946__$1 = ((((!((map__31946 == null)))?(((((map__31946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31946):map__31946);
var opts = map__31946__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31944){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31944));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31951){if((e31951 instanceof Error)){
var e = e31951;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31951;

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
return (function (p__31952){
var map__31953 = p__31952;
var map__31953__$1 = ((((!((map__31953 == null)))?(((((map__31953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31953):map__31953);
var msg_name = cljs.core.get.call(null,map__31953__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1570412452113
