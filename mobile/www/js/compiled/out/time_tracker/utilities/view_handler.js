// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.utilities.view_handler');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof time_tracker.utilities.view_handler.active_view !== 'undefined'){
} else {
time_tracker.utilities.view_handler.active_view = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"add-new","add-new",-1399275206),false,new cljs.core.Keyword(null,"tutorial","tutorial",1017223195),false,new cljs.core.Keyword(null,"calendar","calendar",62308146),false,new cljs.core.Keyword(null,"reports","reports",1629311767),false,new cljs.core.Keyword(null,"day","day",-274800446),false], null));
}
/**
 * Changes the by merging in the passed view i.e {add-new 'True'}
 */
time_tracker.utilities.view_handler.change_view = (function time_tracker$utilities$view_handler$change_view(view){
return cljs.core.swap_BANG_.call(null,time_tracker.utilities.view_handler.active_view,cljs.core.conj,view);
});

//# sourceMappingURL=view_handler.js.map?rel=1556144015632
