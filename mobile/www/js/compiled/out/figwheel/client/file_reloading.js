// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29712_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29712_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29713 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29714 = null;
var count__29715 = (0);
var i__29716 = (0);
while(true){
if((i__29716 < count__29715)){
var n = cljs.core._nth.call(null,chunk__29714,i__29716);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29717 = seq__29713;
var G__29718 = chunk__29714;
var G__29719 = count__29715;
var G__29720 = (i__29716 + (1));
seq__29713 = G__29717;
chunk__29714 = G__29718;
count__29715 = G__29719;
i__29716 = G__29720;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29713);
if(temp__5457__auto__){
var seq__29713__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29713__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29713__$1);
var G__29721 = cljs.core.chunk_rest.call(null,seq__29713__$1);
var G__29722 = c__4319__auto__;
var G__29723 = cljs.core.count.call(null,c__4319__auto__);
var G__29724 = (0);
seq__29713 = G__29721;
chunk__29714 = G__29722;
count__29715 = G__29723;
i__29716 = G__29724;
continue;
} else {
var n = cljs.core.first.call(null,seq__29713__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29725 = cljs.core.next.call(null,seq__29713__$1);
var G__29726 = null;
var G__29727 = (0);
var G__29728 = (0);
seq__29713 = G__29725;
chunk__29714 = G__29726;
count__29715 = G__29727;
i__29716 = G__29728;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29729){
var vec__29730 = p__29729;
var _ = cljs.core.nth.call(null,vec__29730,(0),null);
var v = cljs.core.nth.call(null,vec__29730,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29733){
var vec__29734 = p__29733;
var k = cljs.core.nth.call(null,vec__29734,(0),null);
var v = cljs.core.nth.call(null,vec__29734,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29746_29754 = cljs.core.seq.call(null,deps);
var chunk__29747_29755 = null;
var count__29748_29756 = (0);
var i__29749_29757 = (0);
while(true){
if((i__29749_29757 < count__29748_29756)){
var dep_29758 = cljs.core._nth.call(null,chunk__29747_29755,i__29749_29757);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29758;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29758));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29758,(depth + (1)),state);
} else {
}


var G__29759 = seq__29746_29754;
var G__29760 = chunk__29747_29755;
var G__29761 = count__29748_29756;
var G__29762 = (i__29749_29757 + (1));
seq__29746_29754 = G__29759;
chunk__29747_29755 = G__29760;
count__29748_29756 = G__29761;
i__29749_29757 = G__29762;
continue;
} else {
var temp__5457__auto___29763 = cljs.core.seq.call(null,seq__29746_29754);
if(temp__5457__auto___29763){
var seq__29746_29764__$1 = temp__5457__auto___29763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29746_29764__$1)){
var c__4319__auto___29765 = cljs.core.chunk_first.call(null,seq__29746_29764__$1);
var G__29766 = cljs.core.chunk_rest.call(null,seq__29746_29764__$1);
var G__29767 = c__4319__auto___29765;
var G__29768 = cljs.core.count.call(null,c__4319__auto___29765);
var G__29769 = (0);
seq__29746_29754 = G__29766;
chunk__29747_29755 = G__29767;
count__29748_29756 = G__29768;
i__29749_29757 = G__29769;
continue;
} else {
var dep_29770 = cljs.core.first.call(null,seq__29746_29764__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29770;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29770));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29770,(depth + (1)),state);
} else {
}


var G__29771 = cljs.core.next.call(null,seq__29746_29764__$1);
var G__29772 = null;
var G__29773 = (0);
var G__29774 = (0);
seq__29746_29754 = G__29771;
chunk__29747_29755 = G__29772;
count__29748_29756 = G__29773;
i__29749_29757 = G__29774;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29750){
var vec__29751 = p__29750;
var seq__29752 = cljs.core.seq.call(null,vec__29751);
var first__29753 = cljs.core.first.call(null,seq__29752);
var seq__29752__$1 = cljs.core.next.call(null,seq__29752);
var x = first__29753;
var xs = seq__29752__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29751,seq__29752,first__29753,seq__29752__$1,x,xs,get_deps__$1){
return (function (p1__29737_SHARP_){
return clojure.set.difference.call(null,p1__29737_SHARP_,x);
});})(vec__29751,seq__29752,first__29753,seq__29752__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29775 = cljs.core.seq.call(null,provides);
var chunk__29776 = null;
var count__29777 = (0);
var i__29778 = (0);
while(true){
if((i__29778 < count__29777)){
var prov = cljs.core._nth.call(null,chunk__29776,i__29778);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29779_29787 = cljs.core.seq.call(null,requires);
var chunk__29780_29788 = null;
var count__29781_29789 = (0);
var i__29782_29790 = (0);
while(true){
if((i__29782_29790 < count__29781_29789)){
var req_29791 = cljs.core._nth.call(null,chunk__29780_29788,i__29782_29790);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29791,prov);


var G__29792 = seq__29779_29787;
var G__29793 = chunk__29780_29788;
var G__29794 = count__29781_29789;
var G__29795 = (i__29782_29790 + (1));
seq__29779_29787 = G__29792;
chunk__29780_29788 = G__29793;
count__29781_29789 = G__29794;
i__29782_29790 = G__29795;
continue;
} else {
var temp__5457__auto___29796 = cljs.core.seq.call(null,seq__29779_29787);
if(temp__5457__auto___29796){
var seq__29779_29797__$1 = temp__5457__auto___29796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29779_29797__$1)){
var c__4319__auto___29798 = cljs.core.chunk_first.call(null,seq__29779_29797__$1);
var G__29799 = cljs.core.chunk_rest.call(null,seq__29779_29797__$1);
var G__29800 = c__4319__auto___29798;
var G__29801 = cljs.core.count.call(null,c__4319__auto___29798);
var G__29802 = (0);
seq__29779_29787 = G__29799;
chunk__29780_29788 = G__29800;
count__29781_29789 = G__29801;
i__29782_29790 = G__29802;
continue;
} else {
var req_29803 = cljs.core.first.call(null,seq__29779_29797__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29803,prov);


var G__29804 = cljs.core.next.call(null,seq__29779_29797__$1);
var G__29805 = null;
var G__29806 = (0);
var G__29807 = (0);
seq__29779_29787 = G__29804;
chunk__29780_29788 = G__29805;
count__29781_29789 = G__29806;
i__29782_29790 = G__29807;
continue;
}
} else {
}
}
break;
}


var G__29808 = seq__29775;
var G__29809 = chunk__29776;
var G__29810 = count__29777;
var G__29811 = (i__29778 + (1));
seq__29775 = G__29808;
chunk__29776 = G__29809;
count__29777 = G__29810;
i__29778 = G__29811;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29775);
if(temp__5457__auto__){
var seq__29775__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29775__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29775__$1);
var G__29812 = cljs.core.chunk_rest.call(null,seq__29775__$1);
var G__29813 = c__4319__auto__;
var G__29814 = cljs.core.count.call(null,c__4319__auto__);
var G__29815 = (0);
seq__29775 = G__29812;
chunk__29776 = G__29813;
count__29777 = G__29814;
i__29778 = G__29815;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29775__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29783_29816 = cljs.core.seq.call(null,requires);
var chunk__29784_29817 = null;
var count__29785_29818 = (0);
var i__29786_29819 = (0);
while(true){
if((i__29786_29819 < count__29785_29818)){
var req_29820 = cljs.core._nth.call(null,chunk__29784_29817,i__29786_29819);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29820,prov);


var G__29821 = seq__29783_29816;
var G__29822 = chunk__29784_29817;
var G__29823 = count__29785_29818;
var G__29824 = (i__29786_29819 + (1));
seq__29783_29816 = G__29821;
chunk__29784_29817 = G__29822;
count__29785_29818 = G__29823;
i__29786_29819 = G__29824;
continue;
} else {
var temp__5457__auto___29825__$1 = cljs.core.seq.call(null,seq__29783_29816);
if(temp__5457__auto___29825__$1){
var seq__29783_29826__$1 = temp__5457__auto___29825__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29783_29826__$1)){
var c__4319__auto___29827 = cljs.core.chunk_first.call(null,seq__29783_29826__$1);
var G__29828 = cljs.core.chunk_rest.call(null,seq__29783_29826__$1);
var G__29829 = c__4319__auto___29827;
var G__29830 = cljs.core.count.call(null,c__4319__auto___29827);
var G__29831 = (0);
seq__29783_29816 = G__29828;
chunk__29784_29817 = G__29829;
count__29785_29818 = G__29830;
i__29786_29819 = G__29831;
continue;
} else {
var req_29832 = cljs.core.first.call(null,seq__29783_29826__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29832,prov);


var G__29833 = cljs.core.next.call(null,seq__29783_29826__$1);
var G__29834 = null;
var G__29835 = (0);
var G__29836 = (0);
seq__29783_29816 = G__29833;
chunk__29784_29817 = G__29834;
count__29785_29818 = G__29835;
i__29786_29819 = G__29836;
continue;
}
} else {
}
}
break;
}


var G__29837 = cljs.core.next.call(null,seq__29775__$1);
var G__29838 = null;
var G__29839 = (0);
var G__29840 = (0);
seq__29775 = G__29837;
chunk__29776 = G__29838;
count__29777 = G__29839;
i__29778 = G__29840;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29841_29845 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29842_29846 = null;
var count__29843_29847 = (0);
var i__29844_29848 = (0);
while(true){
if((i__29844_29848 < count__29843_29847)){
var ns_29849 = cljs.core._nth.call(null,chunk__29842_29846,i__29844_29848);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29849);


var G__29850 = seq__29841_29845;
var G__29851 = chunk__29842_29846;
var G__29852 = count__29843_29847;
var G__29853 = (i__29844_29848 + (1));
seq__29841_29845 = G__29850;
chunk__29842_29846 = G__29851;
count__29843_29847 = G__29852;
i__29844_29848 = G__29853;
continue;
} else {
var temp__5457__auto___29854 = cljs.core.seq.call(null,seq__29841_29845);
if(temp__5457__auto___29854){
var seq__29841_29855__$1 = temp__5457__auto___29854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29841_29855__$1)){
var c__4319__auto___29856 = cljs.core.chunk_first.call(null,seq__29841_29855__$1);
var G__29857 = cljs.core.chunk_rest.call(null,seq__29841_29855__$1);
var G__29858 = c__4319__auto___29856;
var G__29859 = cljs.core.count.call(null,c__4319__auto___29856);
var G__29860 = (0);
seq__29841_29845 = G__29857;
chunk__29842_29846 = G__29858;
count__29843_29847 = G__29859;
i__29844_29848 = G__29860;
continue;
} else {
var ns_29861 = cljs.core.first.call(null,seq__29841_29855__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29861);


var G__29862 = cljs.core.next.call(null,seq__29841_29855__$1);
var G__29863 = null;
var G__29864 = (0);
var G__29865 = (0);
seq__29841_29845 = G__29862;
chunk__29842_29846 = G__29863;
count__29843_29847 = G__29864;
i__29844_29848 = G__29865;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29866__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29867__i = 0, G__29867__a = new Array(arguments.length -  0);
while (G__29867__i < G__29867__a.length) {G__29867__a[G__29867__i] = arguments[G__29867__i + 0]; ++G__29867__i;}
  args = new cljs.core.IndexedSeq(G__29867__a,0,null);
} 
return G__29866__delegate.call(this,args);};
G__29866.cljs$lang$maxFixedArity = 0;
G__29866.cljs$lang$applyTo = (function (arglist__29868){
var args = cljs.core.seq(arglist__29868);
return G__29866__delegate(args);
});
G__29866.cljs$core$IFn$_invoke$arity$variadic = G__29866__delegate;
return G__29866;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29869_SHARP_,p2__29870_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29869_SHARP_)].join('')),p2__29870_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29871_SHARP_,p2__29872_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29871_SHARP_)].join(''),p2__29872_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29873 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29873.addCallback(((function (G__29873){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29873))
);

G__29873.addErrback(((function (G__29873){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29873))
);

return G__29873;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29874){if((e29874 instanceof Error)){
var e = e29874;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29874;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29875){if((e29875 instanceof Error)){
var e = e29875;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29875;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29876 = cljs.core._EQ_;
var expr__29877 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29876.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29877))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29876.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29877))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29876.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29877))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29876,expr__29877){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29876,expr__29877))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29879,callback){
var map__29880 = p__29879;
var map__29880__$1 = ((((!((map__29880 == null)))?(((((map__29880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29880):map__29880);
var file_msg = map__29880__$1;
var request_url = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29880,map__29880__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29880,map__29880__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto__){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto__){
return (function (state_29918){
var state_val_29919 = (state_29918[(1)]);
if((state_val_29919 === (7))){
var inst_29914 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
var statearr_29920_29946 = state_29918__$1;
(statearr_29920_29946[(2)] = inst_29914);

(statearr_29920_29946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (1))){
var state_29918__$1 = state_29918;
var statearr_29921_29947 = state_29918__$1;
(statearr_29921_29947[(2)] = null);

(statearr_29921_29947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (4))){
var inst_29884 = (state_29918[(7)]);
var inst_29884__$1 = (state_29918[(2)]);
var state_29918__$1 = (function (){var statearr_29922 = state_29918;
(statearr_29922[(7)] = inst_29884__$1);

return statearr_29922;
})();
if(cljs.core.truth_(inst_29884__$1)){
var statearr_29923_29948 = state_29918__$1;
(statearr_29923_29948[(1)] = (5));

} else {
var statearr_29924_29949 = state_29918__$1;
(statearr_29924_29949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (15))){
var inst_29897 = (state_29918[(8)]);
var inst_29899 = (state_29918[(9)]);
var inst_29901 = inst_29899.call(null,inst_29897);
var state_29918__$1 = state_29918;
var statearr_29925_29950 = state_29918__$1;
(statearr_29925_29950[(2)] = inst_29901);

(statearr_29925_29950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (13))){
var inst_29908 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
var statearr_29926_29951 = state_29918__$1;
(statearr_29926_29951[(2)] = inst_29908);

(statearr_29926_29951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (6))){
var state_29918__$1 = state_29918;
var statearr_29927_29952 = state_29918__$1;
(statearr_29927_29952[(2)] = null);

(statearr_29927_29952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (17))){
var inst_29905 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
var statearr_29928_29953 = state_29918__$1;
(statearr_29928_29953[(2)] = inst_29905);

(statearr_29928_29953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (3))){
var inst_29916 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29918__$1,inst_29916);
} else {
if((state_val_29919 === (12))){
var state_29918__$1 = state_29918;
var statearr_29929_29954 = state_29918__$1;
(statearr_29929_29954[(2)] = null);

(statearr_29929_29954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (2))){
var state_29918__$1 = state_29918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29918__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29919 === (11))){
var inst_29889 = (state_29918[(10)]);
var inst_29895 = figwheel.client.file_reloading.blocking_load.call(null,inst_29889);
var state_29918__$1 = state_29918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29918__$1,(14),inst_29895);
} else {
if((state_val_29919 === (9))){
var inst_29889 = (state_29918[(10)]);
var state_29918__$1 = state_29918;
if(cljs.core.truth_(inst_29889)){
var statearr_29930_29955 = state_29918__$1;
(statearr_29930_29955[(1)] = (11));

} else {
var statearr_29931_29956 = state_29918__$1;
(statearr_29931_29956[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (5))){
var inst_29884 = (state_29918[(7)]);
var inst_29890 = (state_29918[(11)]);
var inst_29889 = cljs.core.nth.call(null,inst_29884,(0),null);
var inst_29890__$1 = cljs.core.nth.call(null,inst_29884,(1),null);
var state_29918__$1 = (function (){var statearr_29932 = state_29918;
(statearr_29932[(11)] = inst_29890__$1);

(statearr_29932[(10)] = inst_29889);

return statearr_29932;
})();
if(cljs.core.truth_(inst_29890__$1)){
var statearr_29933_29957 = state_29918__$1;
(statearr_29933_29957[(1)] = (8));

} else {
var statearr_29934_29958 = state_29918__$1;
(statearr_29934_29958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (14))){
var inst_29889 = (state_29918[(10)]);
var inst_29899 = (state_29918[(9)]);
var inst_29897 = (state_29918[(2)]);
var inst_29898 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29899__$1 = cljs.core.get.call(null,inst_29898,inst_29889);
var state_29918__$1 = (function (){var statearr_29935 = state_29918;
(statearr_29935[(8)] = inst_29897);

(statearr_29935[(9)] = inst_29899__$1);

return statearr_29935;
})();
if(cljs.core.truth_(inst_29899__$1)){
var statearr_29936_29959 = state_29918__$1;
(statearr_29936_29959[(1)] = (15));

} else {
var statearr_29937_29960 = state_29918__$1;
(statearr_29937_29960[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (16))){
var inst_29897 = (state_29918[(8)]);
var inst_29903 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29897);
var state_29918__$1 = state_29918;
var statearr_29938_29961 = state_29918__$1;
(statearr_29938_29961[(2)] = inst_29903);

(statearr_29938_29961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (10))){
var inst_29910 = (state_29918[(2)]);
var state_29918__$1 = (function (){var statearr_29939 = state_29918;
(statearr_29939[(12)] = inst_29910);

return statearr_29939;
})();
var statearr_29940_29962 = state_29918__$1;
(statearr_29940_29962[(2)] = null);

(statearr_29940_29962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (8))){
var inst_29890 = (state_29918[(11)]);
var inst_29892 = eval(inst_29890);
var state_29918__$1 = state_29918;
var statearr_29941_29963 = state_29918__$1;
(statearr_29941_29963[(2)] = inst_29892);

(statearr_29941_29963[(1)] = (10));


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
});})(c__27603__auto__))
;
return ((function (switch__27513__auto__,c__27603__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27514__auto__ = null;
var figwheel$client$file_reloading$state_machine__27514__auto____0 = (function (){
var statearr_29942 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29942[(0)] = figwheel$client$file_reloading$state_machine__27514__auto__);

(statearr_29942[(1)] = (1));

return statearr_29942;
});
var figwheel$client$file_reloading$state_machine__27514__auto____1 = (function (state_29918){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_29918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e29943){if((e29943 instanceof Object)){
var ex__27517__auto__ = e29943;
var statearr_29944_29964 = state_29918;
(statearr_29944_29964[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29965 = state_29918;
state_29918 = G__29965;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27514__auto__ = function(state_29918){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27514__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27514__auto____1.call(this,state_29918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27514__auto____0;
figwheel$client$file_reloading$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27514__auto____1;
return figwheel$client$file_reloading$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto__))
})();
var state__27605__auto__ = (function (){var statearr_29945 = f__27604__auto__.call(null);
(statearr_29945[(6)] = c__27603__auto__);

return statearr_29945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto__))
);

return c__27603__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29967 = arguments.length;
switch (G__29967) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29969,callback){
var map__29970 = p__29969;
var map__29970__$1 = ((((!((map__29970 == null)))?(((((map__29970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29970):map__29970);
var file_msg = map__29970__$1;
var namespace = cljs.core.get.call(null,map__29970__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29970,map__29970__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29970,map__29970__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29972){
var map__29973 = p__29972;
var map__29973__$1 = ((((!((map__29973 == null)))?(((((map__29973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29973):map__29973);
var file_msg = map__29973__$1;
var namespace = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29975){
var map__29976 = p__29975;
var map__29976__$1 = ((((!((map__29976 == null)))?(((((map__29976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29976):map__29976);
var file_msg = map__29976__$1;
var namespace = cljs.core.get.call(null,map__29976__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29978,callback){
var map__29979 = p__29978;
var map__29979__$1 = ((((!((map__29979 == null)))?(((((map__29979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29979):map__29979);
var file_msg = map__29979__$1;
var request_url = cljs.core.get.call(null,map__29979__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27603__auto___30029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___30029,out){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___30029,out){
return (function (state_30014){
var state_val_30015 = (state_30014[(1)]);
if((state_val_30015 === (1))){
var inst_29988 = cljs.core.seq.call(null,files);
var inst_29989 = cljs.core.first.call(null,inst_29988);
var inst_29990 = cljs.core.next.call(null,inst_29988);
var inst_29991 = files;
var state_30014__$1 = (function (){var statearr_30016 = state_30014;
(statearr_30016[(7)] = inst_29991);

(statearr_30016[(8)] = inst_29989);

(statearr_30016[(9)] = inst_29990);

return statearr_30016;
})();
var statearr_30017_30030 = state_30014__$1;
(statearr_30017_30030[(2)] = null);

(statearr_30017_30030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (2))){
var inst_29991 = (state_30014[(7)]);
var inst_29997 = (state_30014[(10)]);
var inst_29996 = cljs.core.seq.call(null,inst_29991);
var inst_29997__$1 = cljs.core.first.call(null,inst_29996);
var inst_29998 = cljs.core.next.call(null,inst_29996);
var inst_29999 = (inst_29997__$1 == null);
var inst_30000 = cljs.core.not.call(null,inst_29999);
var state_30014__$1 = (function (){var statearr_30018 = state_30014;
(statearr_30018[(11)] = inst_29998);

(statearr_30018[(10)] = inst_29997__$1);

return statearr_30018;
})();
if(inst_30000){
var statearr_30019_30031 = state_30014__$1;
(statearr_30019_30031[(1)] = (4));

} else {
var statearr_30020_30032 = state_30014__$1;
(statearr_30020_30032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (3))){
var inst_30012 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30014__$1,inst_30012);
} else {
if((state_val_30015 === (4))){
var inst_29997 = (state_30014[(10)]);
var inst_30002 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29997);
var state_30014__$1 = state_30014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30014__$1,(7),inst_30002);
} else {
if((state_val_30015 === (5))){
var inst_30008 = cljs.core.async.close_BANG_.call(null,out);
var state_30014__$1 = state_30014;
var statearr_30021_30033 = state_30014__$1;
(statearr_30021_30033[(2)] = inst_30008);

(statearr_30021_30033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (6))){
var inst_30010 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
var statearr_30022_30034 = state_30014__$1;
(statearr_30022_30034[(2)] = inst_30010);

(statearr_30022_30034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (7))){
var inst_29998 = (state_30014[(11)]);
var inst_30004 = (state_30014[(2)]);
var inst_30005 = cljs.core.async.put_BANG_.call(null,out,inst_30004);
var inst_29991 = inst_29998;
var state_30014__$1 = (function (){var statearr_30023 = state_30014;
(statearr_30023[(7)] = inst_29991);

(statearr_30023[(12)] = inst_30005);

return statearr_30023;
})();
var statearr_30024_30035 = state_30014__$1;
(statearr_30024_30035[(2)] = null);

(statearr_30024_30035[(1)] = (2));


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
});})(c__27603__auto___30029,out))
;
return ((function (switch__27513__auto__,c__27603__auto___30029,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto____0 = (function (){
var statearr_30025 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30025[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto__);

(statearr_30025[(1)] = (1));

return statearr_30025;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto____1 = (function (state_30014){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_30014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e30026){if((e30026 instanceof Object)){
var ex__27517__auto__ = e30026;
var statearr_30027_30036 = state_30014;
(statearr_30027_30036[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30037 = state_30014;
state_30014 = G__30037;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto__ = function(state_30014){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto____1.call(this,state_30014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___30029,out))
})();
var state__27605__auto__ = (function (){var statearr_30028 = f__27604__auto__.call(null);
(statearr_30028[(6)] = c__27603__auto___30029);

return statearr_30028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___30029,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30038,opts){
var map__30039 = p__30038;
var map__30039__$1 = ((((!((map__30039 == null)))?(((((map__30039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30039):map__30039);
var eval_body = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30041){var e = e30041;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30042_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30042_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30043){
var vec__30044 = p__30043;
var k = cljs.core.nth.call(null,vec__30044,(0),null);
var v = cljs.core.nth.call(null,vec__30044,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30047){
var vec__30048 = p__30047;
var k = cljs.core.nth.call(null,vec__30048,(0),null);
var v = cljs.core.nth.call(null,vec__30048,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30054,p__30055){
var map__30056 = p__30054;
var map__30056__$1 = ((((!((map__30056 == null)))?(((((map__30056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30056):map__30056);
var opts = map__30056__$1;
var before_jsload = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30057 = p__30055;
var map__30057__$1 = ((((!((map__30057 == null)))?(((((map__30057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30057):map__30057);
var msg = map__30057__$1;
var files = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30211){
var state_val_30212 = (state_30211[(1)]);
if((state_val_30212 === (7))){
var inst_30071 = (state_30211[(7)]);
var inst_30072 = (state_30211[(8)]);
var inst_30073 = (state_30211[(9)]);
var inst_30074 = (state_30211[(10)]);
var inst_30079 = cljs.core._nth.call(null,inst_30072,inst_30074);
var inst_30080 = figwheel.client.file_reloading.eval_body.call(null,inst_30079,opts);
var inst_30081 = (inst_30074 + (1));
var tmp30213 = inst_30071;
var tmp30214 = inst_30072;
var tmp30215 = inst_30073;
var inst_30071__$1 = tmp30213;
var inst_30072__$1 = tmp30214;
var inst_30073__$1 = tmp30215;
var inst_30074__$1 = inst_30081;
var state_30211__$1 = (function (){var statearr_30216 = state_30211;
(statearr_30216[(7)] = inst_30071__$1);

(statearr_30216[(8)] = inst_30072__$1);

(statearr_30216[(9)] = inst_30073__$1);

(statearr_30216[(11)] = inst_30080);

(statearr_30216[(10)] = inst_30074__$1);

return statearr_30216;
})();
var statearr_30217_30300 = state_30211__$1;
(statearr_30217_30300[(2)] = null);

(statearr_30217_30300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (20))){
var inst_30114 = (state_30211[(12)]);
var inst_30122 = figwheel.client.file_reloading.sort_files.call(null,inst_30114);
var state_30211__$1 = state_30211;
var statearr_30218_30301 = state_30211__$1;
(statearr_30218_30301[(2)] = inst_30122);

(statearr_30218_30301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (27))){
var state_30211__$1 = state_30211;
var statearr_30219_30302 = state_30211__$1;
(statearr_30219_30302[(2)] = null);

(statearr_30219_30302[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (1))){
var inst_30063 = (state_30211[(13)]);
var inst_30060 = before_jsload.call(null,files);
var inst_30061 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30062 = (function (){return ((function (inst_30063,inst_30060,inst_30061,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30051_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30051_SHARP_);
});
;})(inst_30063,inst_30060,inst_30061,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30063__$1 = cljs.core.filter.call(null,inst_30062,files);
var inst_30064 = cljs.core.not_empty.call(null,inst_30063__$1);
var state_30211__$1 = (function (){var statearr_30220 = state_30211;
(statearr_30220[(13)] = inst_30063__$1);

(statearr_30220[(14)] = inst_30060);

(statearr_30220[(15)] = inst_30061);

return statearr_30220;
})();
if(cljs.core.truth_(inst_30064)){
var statearr_30221_30303 = state_30211__$1;
(statearr_30221_30303[(1)] = (2));

} else {
var statearr_30222_30304 = state_30211__$1;
(statearr_30222_30304[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (24))){
var state_30211__$1 = state_30211;
var statearr_30223_30305 = state_30211__$1;
(statearr_30223_30305[(2)] = null);

(statearr_30223_30305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (39))){
var inst_30164 = (state_30211[(16)]);
var state_30211__$1 = state_30211;
var statearr_30224_30306 = state_30211__$1;
(statearr_30224_30306[(2)] = inst_30164);

(statearr_30224_30306[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (46))){
var inst_30206 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
var statearr_30225_30307 = state_30211__$1;
(statearr_30225_30307[(2)] = inst_30206);

(statearr_30225_30307[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (4))){
var inst_30108 = (state_30211[(2)]);
var inst_30109 = cljs.core.List.EMPTY;
var inst_30110 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30109);
var inst_30111 = (function (){return ((function (inst_30108,inst_30109,inst_30110,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30052_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30052_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30052_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30052_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30108,inst_30109,inst_30110,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30112 = cljs.core.filter.call(null,inst_30111,files);
var inst_30113 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30114 = cljs.core.concat.call(null,inst_30112,inst_30113);
var state_30211__$1 = (function (){var statearr_30226 = state_30211;
(statearr_30226[(17)] = inst_30110);

(statearr_30226[(12)] = inst_30114);

(statearr_30226[(18)] = inst_30108);

return statearr_30226;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30227_30308 = state_30211__$1;
(statearr_30227_30308[(1)] = (16));

} else {
var statearr_30228_30309 = state_30211__$1;
(statearr_30228_30309[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (15))){
var inst_30098 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
var statearr_30229_30310 = state_30211__$1;
(statearr_30229_30310[(2)] = inst_30098);

(statearr_30229_30310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (21))){
var inst_30124 = (state_30211[(19)]);
var inst_30124__$1 = (state_30211[(2)]);
var inst_30125 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30124__$1);
var state_30211__$1 = (function (){var statearr_30230 = state_30211;
(statearr_30230[(19)] = inst_30124__$1);

return statearr_30230;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30211__$1,(22),inst_30125);
} else {
if((state_val_30212 === (31))){
var inst_30209 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30211__$1,inst_30209);
} else {
if((state_val_30212 === (32))){
var inst_30164 = (state_30211[(16)]);
var inst_30169 = inst_30164.cljs$lang$protocol_mask$partition0$;
var inst_30170 = (inst_30169 & (64));
var inst_30171 = inst_30164.cljs$core$ISeq$;
var inst_30172 = (cljs.core.PROTOCOL_SENTINEL === inst_30171);
var inst_30173 = ((inst_30170) || (inst_30172));
var state_30211__$1 = state_30211;
if(cljs.core.truth_(inst_30173)){
var statearr_30231_30311 = state_30211__$1;
(statearr_30231_30311[(1)] = (35));

} else {
var statearr_30232_30312 = state_30211__$1;
(statearr_30232_30312[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (40))){
var inst_30186 = (state_30211[(20)]);
var inst_30185 = (state_30211[(2)]);
var inst_30186__$1 = cljs.core.get.call(null,inst_30185,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30187 = cljs.core.get.call(null,inst_30185,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30188 = cljs.core.not_empty.call(null,inst_30186__$1);
var state_30211__$1 = (function (){var statearr_30233 = state_30211;
(statearr_30233[(20)] = inst_30186__$1);

(statearr_30233[(21)] = inst_30187);

return statearr_30233;
})();
if(cljs.core.truth_(inst_30188)){
var statearr_30234_30313 = state_30211__$1;
(statearr_30234_30313[(1)] = (41));

} else {
var statearr_30235_30314 = state_30211__$1;
(statearr_30235_30314[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (33))){
var state_30211__$1 = state_30211;
var statearr_30236_30315 = state_30211__$1;
(statearr_30236_30315[(2)] = false);

(statearr_30236_30315[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (13))){
var inst_30084 = (state_30211[(22)]);
var inst_30088 = cljs.core.chunk_first.call(null,inst_30084);
var inst_30089 = cljs.core.chunk_rest.call(null,inst_30084);
var inst_30090 = cljs.core.count.call(null,inst_30088);
var inst_30071 = inst_30089;
var inst_30072 = inst_30088;
var inst_30073 = inst_30090;
var inst_30074 = (0);
var state_30211__$1 = (function (){var statearr_30237 = state_30211;
(statearr_30237[(7)] = inst_30071);

(statearr_30237[(8)] = inst_30072);

(statearr_30237[(9)] = inst_30073);

(statearr_30237[(10)] = inst_30074);

return statearr_30237;
})();
var statearr_30238_30316 = state_30211__$1;
(statearr_30238_30316[(2)] = null);

(statearr_30238_30316[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (22))){
var inst_30124 = (state_30211[(19)]);
var inst_30128 = (state_30211[(23)]);
var inst_30132 = (state_30211[(24)]);
var inst_30127 = (state_30211[(25)]);
var inst_30127__$1 = (state_30211[(2)]);
var inst_30128__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30127__$1);
var inst_30129 = (function (){var all_files = inst_30124;
var res_SINGLEQUOTE_ = inst_30127__$1;
var res = inst_30128__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30124,inst_30128,inst_30132,inst_30127,inst_30127__$1,inst_30128__$1,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30053_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30053_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30124,inst_30128,inst_30132,inst_30127,inst_30127__$1,inst_30128__$1,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30130 = cljs.core.filter.call(null,inst_30129,inst_30127__$1);
var inst_30131 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30132__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30131);
var inst_30133 = cljs.core.not_empty.call(null,inst_30132__$1);
var state_30211__$1 = (function (){var statearr_30239 = state_30211;
(statearr_30239[(26)] = inst_30130);

(statearr_30239[(23)] = inst_30128__$1);

(statearr_30239[(24)] = inst_30132__$1);

(statearr_30239[(25)] = inst_30127__$1);

return statearr_30239;
})();
if(cljs.core.truth_(inst_30133)){
var statearr_30240_30317 = state_30211__$1;
(statearr_30240_30317[(1)] = (23));

} else {
var statearr_30241_30318 = state_30211__$1;
(statearr_30241_30318[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (36))){
var state_30211__$1 = state_30211;
var statearr_30242_30319 = state_30211__$1;
(statearr_30242_30319[(2)] = false);

(statearr_30242_30319[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (41))){
var inst_30186 = (state_30211[(20)]);
var inst_30190 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30191 = cljs.core.map.call(null,inst_30190,inst_30186);
var inst_30192 = cljs.core.pr_str.call(null,inst_30191);
var inst_30193 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30192)].join('');
var inst_30194 = figwheel.client.utils.log.call(null,inst_30193);
var state_30211__$1 = state_30211;
var statearr_30243_30320 = state_30211__$1;
(statearr_30243_30320[(2)] = inst_30194);

(statearr_30243_30320[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (43))){
var inst_30187 = (state_30211[(21)]);
var inst_30197 = (state_30211[(2)]);
var inst_30198 = cljs.core.not_empty.call(null,inst_30187);
var state_30211__$1 = (function (){var statearr_30244 = state_30211;
(statearr_30244[(27)] = inst_30197);

return statearr_30244;
})();
if(cljs.core.truth_(inst_30198)){
var statearr_30245_30321 = state_30211__$1;
(statearr_30245_30321[(1)] = (44));

} else {
var statearr_30246_30322 = state_30211__$1;
(statearr_30246_30322[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (29))){
var inst_30130 = (state_30211[(26)]);
var inst_30164 = (state_30211[(16)]);
var inst_30124 = (state_30211[(19)]);
var inst_30128 = (state_30211[(23)]);
var inst_30132 = (state_30211[(24)]);
var inst_30127 = (state_30211[(25)]);
var inst_30160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30163 = (function (){var all_files = inst_30124;
var res_SINGLEQUOTE_ = inst_30127;
var res = inst_30128;
var files_not_loaded = inst_30130;
var dependencies_that_loaded = inst_30132;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30130,inst_30164,inst_30124,inst_30128,inst_30132,inst_30127,inst_30160,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30162){
var map__30247 = p__30162;
var map__30247__$1 = ((((!((map__30247 == null)))?(((((map__30247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30247):map__30247);
var namespace = cljs.core.get.call(null,map__30247__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30130,inst_30164,inst_30124,inst_30128,inst_30132,inst_30127,inst_30160,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30164__$1 = cljs.core.group_by.call(null,inst_30163,inst_30130);
var inst_30166 = (inst_30164__$1 == null);
var inst_30167 = cljs.core.not.call(null,inst_30166);
var state_30211__$1 = (function (){var statearr_30249 = state_30211;
(statearr_30249[(16)] = inst_30164__$1);

(statearr_30249[(28)] = inst_30160);

return statearr_30249;
})();
if(inst_30167){
var statearr_30250_30323 = state_30211__$1;
(statearr_30250_30323[(1)] = (32));

} else {
var statearr_30251_30324 = state_30211__$1;
(statearr_30251_30324[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (44))){
var inst_30187 = (state_30211[(21)]);
var inst_30200 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30187);
var inst_30201 = cljs.core.pr_str.call(null,inst_30200);
var inst_30202 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30201)].join('');
var inst_30203 = figwheel.client.utils.log.call(null,inst_30202);
var state_30211__$1 = state_30211;
var statearr_30252_30325 = state_30211__$1;
(statearr_30252_30325[(2)] = inst_30203);

(statearr_30252_30325[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (6))){
var inst_30105 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
var statearr_30253_30326 = state_30211__$1;
(statearr_30253_30326[(2)] = inst_30105);

(statearr_30253_30326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (28))){
var inst_30130 = (state_30211[(26)]);
var inst_30157 = (state_30211[(2)]);
var inst_30158 = cljs.core.not_empty.call(null,inst_30130);
var state_30211__$1 = (function (){var statearr_30254 = state_30211;
(statearr_30254[(29)] = inst_30157);

return statearr_30254;
})();
if(cljs.core.truth_(inst_30158)){
var statearr_30255_30327 = state_30211__$1;
(statearr_30255_30327[(1)] = (29));

} else {
var statearr_30256_30328 = state_30211__$1;
(statearr_30256_30328[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (25))){
var inst_30128 = (state_30211[(23)]);
var inst_30144 = (state_30211[(2)]);
var inst_30145 = cljs.core.not_empty.call(null,inst_30128);
var state_30211__$1 = (function (){var statearr_30257 = state_30211;
(statearr_30257[(30)] = inst_30144);

return statearr_30257;
})();
if(cljs.core.truth_(inst_30145)){
var statearr_30258_30329 = state_30211__$1;
(statearr_30258_30329[(1)] = (26));

} else {
var statearr_30259_30330 = state_30211__$1;
(statearr_30259_30330[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (34))){
var inst_30180 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
if(cljs.core.truth_(inst_30180)){
var statearr_30260_30331 = state_30211__$1;
(statearr_30260_30331[(1)] = (38));

} else {
var statearr_30261_30332 = state_30211__$1;
(statearr_30261_30332[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (17))){
var state_30211__$1 = state_30211;
var statearr_30262_30333 = state_30211__$1;
(statearr_30262_30333[(2)] = recompile_dependents);

(statearr_30262_30333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (3))){
var state_30211__$1 = state_30211;
var statearr_30263_30334 = state_30211__$1;
(statearr_30263_30334[(2)] = null);

(statearr_30263_30334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (12))){
var inst_30101 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
var statearr_30264_30335 = state_30211__$1;
(statearr_30264_30335[(2)] = inst_30101);

(statearr_30264_30335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (2))){
var inst_30063 = (state_30211[(13)]);
var inst_30070 = cljs.core.seq.call(null,inst_30063);
var inst_30071 = inst_30070;
var inst_30072 = null;
var inst_30073 = (0);
var inst_30074 = (0);
var state_30211__$1 = (function (){var statearr_30265 = state_30211;
(statearr_30265[(7)] = inst_30071);

(statearr_30265[(8)] = inst_30072);

(statearr_30265[(9)] = inst_30073);

(statearr_30265[(10)] = inst_30074);

return statearr_30265;
})();
var statearr_30266_30336 = state_30211__$1;
(statearr_30266_30336[(2)] = null);

(statearr_30266_30336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (23))){
var inst_30130 = (state_30211[(26)]);
var inst_30124 = (state_30211[(19)]);
var inst_30128 = (state_30211[(23)]);
var inst_30132 = (state_30211[(24)]);
var inst_30127 = (state_30211[(25)]);
var inst_30135 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30137 = (function (){var all_files = inst_30124;
var res_SINGLEQUOTE_ = inst_30127;
var res = inst_30128;
var files_not_loaded = inst_30130;
var dependencies_that_loaded = inst_30132;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30130,inst_30124,inst_30128,inst_30132,inst_30127,inst_30135,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30136){
var map__30267 = p__30136;
var map__30267__$1 = ((((!((map__30267 == null)))?(((((map__30267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30267):map__30267);
var request_url = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30130,inst_30124,inst_30128,inst_30132,inst_30127,inst_30135,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30138 = cljs.core.reverse.call(null,inst_30132);
var inst_30139 = cljs.core.map.call(null,inst_30137,inst_30138);
var inst_30140 = cljs.core.pr_str.call(null,inst_30139);
var inst_30141 = figwheel.client.utils.log.call(null,inst_30140);
var state_30211__$1 = (function (){var statearr_30269 = state_30211;
(statearr_30269[(31)] = inst_30135);

return statearr_30269;
})();
var statearr_30270_30337 = state_30211__$1;
(statearr_30270_30337[(2)] = inst_30141);

(statearr_30270_30337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (35))){
var state_30211__$1 = state_30211;
var statearr_30271_30338 = state_30211__$1;
(statearr_30271_30338[(2)] = true);

(statearr_30271_30338[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (19))){
var inst_30114 = (state_30211[(12)]);
var inst_30120 = figwheel.client.file_reloading.expand_files.call(null,inst_30114);
var state_30211__$1 = state_30211;
var statearr_30272_30339 = state_30211__$1;
(statearr_30272_30339[(2)] = inst_30120);

(statearr_30272_30339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (11))){
var state_30211__$1 = state_30211;
var statearr_30273_30340 = state_30211__$1;
(statearr_30273_30340[(2)] = null);

(statearr_30273_30340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (9))){
var inst_30103 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
var statearr_30274_30341 = state_30211__$1;
(statearr_30274_30341[(2)] = inst_30103);

(statearr_30274_30341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (5))){
var inst_30073 = (state_30211[(9)]);
var inst_30074 = (state_30211[(10)]);
var inst_30076 = (inst_30074 < inst_30073);
var inst_30077 = inst_30076;
var state_30211__$1 = state_30211;
if(cljs.core.truth_(inst_30077)){
var statearr_30275_30342 = state_30211__$1;
(statearr_30275_30342[(1)] = (7));

} else {
var statearr_30276_30343 = state_30211__$1;
(statearr_30276_30343[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (14))){
var inst_30084 = (state_30211[(22)]);
var inst_30093 = cljs.core.first.call(null,inst_30084);
var inst_30094 = figwheel.client.file_reloading.eval_body.call(null,inst_30093,opts);
var inst_30095 = cljs.core.next.call(null,inst_30084);
var inst_30071 = inst_30095;
var inst_30072 = null;
var inst_30073 = (0);
var inst_30074 = (0);
var state_30211__$1 = (function (){var statearr_30277 = state_30211;
(statearr_30277[(7)] = inst_30071);

(statearr_30277[(8)] = inst_30072);

(statearr_30277[(9)] = inst_30073);

(statearr_30277[(32)] = inst_30094);

(statearr_30277[(10)] = inst_30074);

return statearr_30277;
})();
var statearr_30278_30344 = state_30211__$1;
(statearr_30278_30344[(2)] = null);

(statearr_30278_30344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (45))){
var state_30211__$1 = state_30211;
var statearr_30279_30345 = state_30211__$1;
(statearr_30279_30345[(2)] = null);

(statearr_30279_30345[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (26))){
var inst_30130 = (state_30211[(26)]);
var inst_30124 = (state_30211[(19)]);
var inst_30128 = (state_30211[(23)]);
var inst_30132 = (state_30211[(24)]);
var inst_30127 = (state_30211[(25)]);
var inst_30147 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30149 = (function (){var all_files = inst_30124;
var res_SINGLEQUOTE_ = inst_30127;
var res = inst_30128;
var files_not_loaded = inst_30130;
var dependencies_that_loaded = inst_30132;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30130,inst_30124,inst_30128,inst_30132,inst_30127,inst_30147,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30148){
var map__30280 = p__30148;
var map__30280__$1 = ((((!((map__30280 == null)))?(((((map__30280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30280):map__30280);
var namespace = cljs.core.get.call(null,map__30280__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30280__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30130,inst_30124,inst_30128,inst_30132,inst_30127,inst_30147,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30150 = cljs.core.map.call(null,inst_30149,inst_30128);
var inst_30151 = cljs.core.pr_str.call(null,inst_30150);
var inst_30152 = figwheel.client.utils.log.call(null,inst_30151);
var inst_30153 = (function (){var all_files = inst_30124;
var res_SINGLEQUOTE_ = inst_30127;
var res = inst_30128;
var files_not_loaded = inst_30130;
var dependencies_that_loaded = inst_30132;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30130,inst_30124,inst_30128,inst_30132,inst_30127,inst_30147,inst_30149,inst_30150,inst_30151,inst_30152,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30130,inst_30124,inst_30128,inst_30132,inst_30127,inst_30147,inst_30149,inst_30150,inst_30151,inst_30152,state_val_30212,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30154 = setTimeout(inst_30153,(10));
var state_30211__$1 = (function (){var statearr_30282 = state_30211;
(statearr_30282[(33)] = inst_30147);

(statearr_30282[(34)] = inst_30152);

return statearr_30282;
})();
var statearr_30283_30346 = state_30211__$1;
(statearr_30283_30346[(2)] = inst_30154);

(statearr_30283_30346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (16))){
var state_30211__$1 = state_30211;
var statearr_30284_30347 = state_30211__$1;
(statearr_30284_30347[(2)] = reload_dependents);

(statearr_30284_30347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (38))){
var inst_30164 = (state_30211[(16)]);
var inst_30182 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30164);
var state_30211__$1 = state_30211;
var statearr_30285_30348 = state_30211__$1;
(statearr_30285_30348[(2)] = inst_30182);

(statearr_30285_30348[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (30))){
var state_30211__$1 = state_30211;
var statearr_30286_30349 = state_30211__$1;
(statearr_30286_30349[(2)] = null);

(statearr_30286_30349[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (10))){
var inst_30084 = (state_30211[(22)]);
var inst_30086 = cljs.core.chunked_seq_QMARK_.call(null,inst_30084);
var state_30211__$1 = state_30211;
if(inst_30086){
var statearr_30287_30350 = state_30211__$1;
(statearr_30287_30350[(1)] = (13));

} else {
var statearr_30288_30351 = state_30211__$1;
(statearr_30288_30351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (18))){
var inst_30118 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
if(cljs.core.truth_(inst_30118)){
var statearr_30289_30352 = state_30211__$1;
(statearr_30289_30352[(1)] = (19));

} else {
var statearr_30290_30353 = state_30211__$1;
(statearr_30290_30353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (42))){
var state_30211__$1 = state_30211;
var statearr_30291_30354 = state_30211__$1;
(statearr_30291_30354[(2)] = null);

(statearr_30291_30354[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (37))){
var inst_30177 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
var statearr_30292_30355 = state_30211__$1;
(statearr_30292_30355[(2)] = inst_30177);

(statearr_30292_30355[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (8))){
var inst_30071 = (state_30211[(7)]);
var inst_30084 = (state_30211[(22)]);
var inst_30084__$1 = cljs.core.seq.call(null,inst_30071);
var state_30211__$1 = (function (){var statearr_30293 = state_30211;
(statearr_30293[(22)] = inst_30084__$1);

return statearr_30293;
})();
if(inst_30084__$1){
var statearr_30294_30356 = state_30211__$1;
(statearr_30294_30356[(1)] = (10));

} else {
var statearr_30295_30357 = state_30211__$1;
(statearr_30295_30357[(1)] = (11));

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
});})(c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27513__auto__,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto____0 = (function (){
var statearr_30296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30296[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto__);

(statearr_30296[(1)] = (1));

return statearr_30296;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto____1 = (function (state_30211){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_30211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e30297){if((e30297 instanceof Object)){
var ex__27517__auto__ = e30297;
var statearr_30298_30358 = state_30211;
(statearr_30298_30358[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30359 = state_30211;
state_30211 = G__30359;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto__ = function(state_30211){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto____1.call(this,state_30211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27605__auto__ = (function (){var statearr_30299 = f__27604__auto__.call(null);
(statearr_30299[(6)] = c__27603__auto__);

return statearr_30299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto__,map__30056,map__30056__$1,opts,before_jsload,on_jsload,reload_dependents,map__30057,map__30057__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27603__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30362,link){
var map__30363 = p__30362;
var map__30363__$1 = ((((!((map__30363 == null)))?(((((map__30363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30363):map__30363);
var file = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30363,map__30363__$1,file){
return (function (p1__30360_SHARP_,p2__30361_SHARP_){
if(cljs.core._EQ_.call(null,p1__30360_SHARP_,p2__30361_SHARP_)){
return p1__30360_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30363,map__30363__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30366){
var map__30367 = p__30366;
var map__30367__$1 = ((((!((map__30367 == null)))?(((((map__30367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30367):map__30367);
var match_length = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30365_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30365_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30369_SHARP_,p2__30370_SHARP_){
return cljs.core.assoc.call(null,p1__30369_SHARP_,cljs.core.get.call(null,p2__30370_SHARP_,key),p2__30370_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30371 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30371);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30371);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30372,p__30373){
var map__30374 = p__30372;
var map__30374__$1 = ((((!((map__30374 == null)))?(((((map__30374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30374):map__30374);
var on_cssload = cljs.core.get.call(null,map__30374__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30375 = p__30373;
var map__30375__$1 = ((((!((map__30375 == null)))?(((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30375):map__30375);
var files_msg = map__30375__$1;
var files = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1556144027191
