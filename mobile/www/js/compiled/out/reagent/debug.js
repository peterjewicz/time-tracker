// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21863__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21864__i = 0, G__21864__a = new Array(arguments.length -  0);
while (G__21864__i < G__21864__a.length) {G__21864__a[G__21864__i] = arguments[G__21864__i + 0]; ++G__21864__i;}
  args = new cljs.core.IndexedSeq(G__21864__a,0,null);
} 
return G__21863__delegate.call(this,args);};
G__21863.cljs$lang$maxFixedArity = 0;
G__21863.cljs$lang$applyTo = (function (arglist__21865){
var args = cljs.core.seq(arglist__21865);
return G__21863__delegate(args);
});
G__21863.cljs$core$IFn$_invoke$arity$variadic = G__21863__delegate;
return G__21863;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21866__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21867__i = 0, G__21867__a = new Array(arguments.length -  0);
while (G__21867__i < G__21867__a.length) {G__21867__a[G__21867__i] = arguments[G__21867__i + 0]; ++G__21867__i;}
  args = new cljs.core.IndexedSeq(G__21867__a,0,null);
} 
return G__21866__delegate.call(this,args);};
G__21866.cljs$lang$maxFixedArity = 0;
G__21866.cljs$lang$applyTo = (function (arglist__21868){
var args = cljs.core.seq(arglist__21868);
return G__21866__delegate(args);
});
G__21866.cljs$core$IFn$_invoke$arity$variadic = G__21866__delegate;
return G__21866;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1544380197562