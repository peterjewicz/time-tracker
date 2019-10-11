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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29720_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29720_SHARP_));
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
var seq__29721 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29722 = null;
var count__29723 = (0);
var i__29724 = (0);
while(true){
if((i__29724 < count__29723)){
var n = cljs.core._nth.call(null,chunk__29722,i__29724);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29725 = seq__29721;
var G__29726 = chunk__29722;
var G__29727 = count__29723;
var G__29728 = (i__29724 + (1));
seq__29721 = G__29725;
chunk__29722 = G__29726;
count__29723 = G__29727;
i__29724 = G__29728;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29721);
if(temp__5457__auto__){
var seq__29721__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29721__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29721__$1);
var G__29729 = cljs.core.chunk_rest.call(null,seq__29721__$1);
var G__29730 = c__4319__auto__;
var G__29731 = cljs.core.count.call(null,c__4319__auto__);
var G__29732 = (0);
seq__29721 = G__29729;
chunk__29722 = G__29730;
count__29723 = G__29731;
i__29724 = G__29732;
continue;
} else {
var n = cljs.core.first.call(null,seq__29721__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29733 = cljs.core.next.call(null,seq__29721__$1);
var G__29734 = null;
var G__29735 = (0);
var G__29736 = (0);
seq__29721 = G__29733;
chunk__29722 = G__29734;
count__29723 = G__29735;
i__29724 = G__29736;
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
return cljs.core.some.call(null,(function (p__29737){
var vec__29738 = p__29737;
var _ = cljs.core.nth.call(null,vec__29738,(0),null);
var v = cljs.core.nth.call(null,vec__29738,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29741){
var vec__29742 = p__29741;
var k = cljs.core.nth.call(null,vec__29742,(0),null);
var v = cljs.core.nth.call(null,vec__29742,(1),null);
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

var seq__29754_29762 = cljs.core.seq.call(null,deps);
var chunk__29755_29763 = null;
var count__29756_29764 = (0);
var i__29757_29765 = (0);
while(true){
if((i__29757_29765 < count__29756_29764)){
var dep_29766 = cljs.core._nth.call(null,chunk__29755_29763,i__29757_29765);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29766;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29766));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29766,(depth + (1)),state);
} else {
}


var G__29767 = seq__29754_29762;
var G__29768 = chunk__29755_29763;
var G__29769 = count__29756_29764;
var G__29770 = (i__29757_29765 + (1));
seq__29754_29762 = G__29767;
chunk__29755_29763 = G__29768;
count__29756_29764 = G__29769;
i__29757_29765 = G__29770;
continue;
} else {
var temp__5457__auto___29771 = cljs.core.seq.call(null,seq__29754_29762);
if(temp__5457__auto___29771){
var seq__29754_29772__$1 = temp__5457__auto___29771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29754_29772__$1)){
var c__4319__auto___29773 = cljs.core.chunk_first.call(null,seq__29754_29772__$1);
var G__29774 = cljs.core.chunk_rest.call(null,seq__29754_29772__$1);
var G__29775 = c__4319__auto___29773;
var G__29776 = cljs.core.count.call(null,c__4319__auto___29773);
var G__29777 = (0);
seq__29754_29762 = G__29774;
chunk__29755_29763 = G__29775;
count__29756_29764 = G__29776;
i__29757_29765 = G__29777;
continue;
} else {
var dep_29778 = cljs.core.first.call(null,seq__29754_29772__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29778;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29778));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29778,(depth + (1)),state);
} else {
}


var G__29779 = cljs.core.next.call(null,seq__29754_29772__$1);
var G__29780 = null;
var G__29781 = (0);
var G__29782 = (0);
seq__29754_29762 = G__29779;
chunk__29755_29763 = G__29780;
count__29756_29764 = G__29781;
i__29757_29765 = G__29782;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29758){
var vec__29759 = p__29758;
var seq__29760 = cljs.core.seq.call(null,vec__29759);
var first__29761 = cljs.core.first.call(null,seq__29760);
var seq__29760__$1 = cljs.core.next.call(null,seq__29760);
var x = first__29761;
var xs = seq__29760__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29759,seq__29760,first__29761,seq__29760__$1,x,xs,get_deps__$1){
return (function (p1__29745_SHARP_){
return clojure.set.difference.call(null,p1__29745_SHARP_,x);
});})(vec__29759,seq__29760,first__29761,seq__29760__$1,x,xs,get_deps__$1))
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
var seq__29783 = cljs.core.seq.call(null,provides);
var chunk__29784 = null;
var count__29785 = (0);
var i__29786 = (0);
while(true){
if((i__29786 < count__29785)){
var prov = cljs.core._nth.call(null,chunk__29784,i__29786);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29787_29795 = cljs.core.seq.call(null,requires);
var chunk__29788_29796 = null;
var count__29789_29797 = (0);
var i__29790_29798 = (0);
while(true){
if((i__29790_29798 < count__29789_29797)){
var req_29799 = cljs.core._nth.call(null,chunk__29788_29796,i__29790_29798);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29799,prov);


var G__29800 = seq__29787_29795;
var G__29801 = chunk__29788_29796;
var G__29802 = count__29789_29797;
var G__29803 = (i__29790_29798 + (1));
seq__29787_29795 = G__29800;
chunk__29788_29796 = G__29801;
count__29789_29797 = G__29802;
i__29790_29798 = G__29803;
continue;
} else {
var temp__5457__auto___29804 = cljs.core.seq.call(null,seq__29787_29795);
if(temp__5457__auto___29804){
var seq__29787_29805__$1 = temp__5457__auto___29804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29787_29805__$1)){
var c__4319__auto___29806 = cljs.core.chunk_first.call(null,seq__29787_29805__$1);
var G__29807 = cljs.core.chunk_rest.call(null,seq__29787_29805__$1);
var G__29808 = c__4319__auto___29806;
var G__29809 = cljs.core.count.call(null,c__4319__auto___29806);
var G__29810 = (0);
seq__29787_29795 = G__29807;
chunk__29788_29796 = G__29808;
count__29789_29797 = G__29809;
i__29790_29798 = G__29810;
continue;
} else {
var req_29811 = cljs.core.first.call(null,seq__29787_29805__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29811,prov);


var G__29812 = cljs.core.next.call(null,seq__29787_29805__$1);
var G__29813 = null;
var G__29814 = (0);
var G__29815 = (0);
seq__29787_29795 = G__29812;
chunk__29788_29796 = G__29813;
count__29789_29797 = G__29814;
i__29790_29798 = G__29815;
continue;
}
} else {
}
}
break;
}


var G__29816 = seq__29783;
var G__29817 = chunk__29784;
var G__29818 = count__29785;
var G__29819 = (i__29786 + (1));
seq__29783 = G__29816;
chunk__29784 = G__29817;
count__29785 = G__29818;
i__29786 = G__29819;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29783);
if(temp__5457__auto__){
var seq__29783__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29783__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29783__$1);
var G__29820 = cljs.core.chunk_rest.call(null,seq__29783__$1);
var G__29821 = c__4319__auto__;
var G__29822 = cljs.core.count.call(null,c__4319__auto__);
var G__29823 = (0);
seq__29783 = G__29820;
chunk__29784 = G__29821;
count__29785 = G__29822;
i__29786 = G__29823;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29783__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29791_29824 = cljs.core.seq.call(null,requires);
var chunk__29792_29825 = null;
var count__29793_29826 = (0);
var i__29794_29827 = (0);
while(true){
if((i__29794_29827 < count__29793_29826)){
var req_29828 = cljs.core._nth.call(null,chunk__29792_29825,i__29794_29827);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29828,prov);


var G__29829 = seq__29791_29824;
var G__29830 = chunk__29792_29825;
var G__29831 = count__29793_29826;
var G__29832 = (i__29794_29827 + (1));
seq__29791_29824 = G__29829;
chunk__29792_29825 = G__29830;
count__29793_29826 = G__29831;
i__29794_29827 = G__29832;
continue;
} else {
var temp__5457__auto___29833__$1 = cljs.core.seq.call(null,seq__29791_29824);
if(temp__5457__auto___29833__$1){
var seq__29791_29834__$1 = temp__5457__auto___29833__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29791_29834__$1)){
var c__4319__auto___29835 = cljs.core.chunk_first.call(null,seq__29791_29834__$1);
var G__29836 = cljs.core.chunk_rest.call(null,seq__29791_29834__$1);
var G__29837 = c__4319__auto___29835;
var G__29838 = cljs.core.count.call(null,c__4319__auto___29835);
var G__29839 = (0);
seq__29791_29824 = G__29836;
chunk__29792_29825 = G__29837;
count__29793_29826 = G__29838;
i__29794_29827 = G__29839;
continue;
} else {
var req_29840 = cljs.core.first.call(null,seq__29791_29834__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29840,prov);


var G__29841 = cljs.core.next.call(null,seq__29791_29834__$1);
var G__29842 = null;
var G__29843 = (0);
var G__29844 = (0);
seq__29791_29824 = G__29841;
chunk__29792_29825 = G__29842;
count__29793_29826 = G__29843;
i__29794_29827 = G__29844;
continue;
}
} else {
}
}
break;
}


var G__29845 = cljs.core.next.call(null,seq__29783__$1);
var G__29846 = null;
var G__29847 = (0);
var G__29848 = (0);
seq__29783 = G__29845;
chunk__29784 = G__29846;
count__29785 = G__29847;
i__29786 = G__29848;
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
var seq__29849_29853 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29850_29854 = null;
var count__29851_29855 = (0);
var i__29852_29856 = (0);
while(true){
if((i__29852_29856 < count__29851_29855)){
var ns_29857 = cljs.core._nth.call(null,chunk__29850_29854,i__29852_29856);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29857);


var G__29858 = seq__29849_29853;
var G__29859 = chunk__29850_29854;
var G__29860 = count__29851_29855;
var G__29861 = (i__29852_29856 + (1));
seq__29849_29853 = G__29858;
chunk__29850_29854 = G__29859;
count__29851_29855 = G__29860;
i__29852_29856 = G__29861;
continue;
} else {
var temp__5457__auto___29862 = cljs.core.seq.call(null,seq__29849_29853);
if(temp__5457__auto___29862){
var seq__29849_29863__$1 = temp__5457__auto___29862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29849_29863__$1)){
var c__4319__auto___29864 = cljs.core.chunk_first.call(null,seq__29849_29863__$1);
var G__29865 = cljs.core.chunk_rest.call(null,seq__29849_29863__$1);
var G__29866 = c__4319__auto___29864;
var G__29867 = cljs.core.count.call(null,c__4319__auto___29864);
var G__29868 = (0);
seq__29849_29853 = G__29865;
chunk__29850_29854 = G__29866;
count__29851_29855 = G__29867;
i__29852_29856 = G__29868;
continue;
} else {
var ns_29869 = cljs.core.first.call(null,seq__29849_29863__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29869);


var G__29870 = cljs.core.next.call(null,seq__29849_29863__$1);
var G__29871 = null;
var G__29872 = (0);
var G__29873 = (0);
seq__29849_29853 = G__29870;
chunk__29850_29854 = G__29871;
count__29851_29855 = G__29872;
i__29852_29856 = G__29873;
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
var G__29874__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29875__i = 0, G__29875__a = new Array(arguments.length -  0);
while (G__29875__i < G__29875__a.length) {G__29875__a[G__29875__i] = arguments[G__29875__i + 0]; ++G__29875__i;}
  args = new cljs.core.IndexedSeq(G__29875__a,0,null);
} 
return G__29874__delegate.call(this,args);};
G__29874.cljs$lang$maxFixedArity = 0;
G__29874.cljs$lang$applyTo = (function (arglist__29876){
var args = cljs.core.seq(arglist__29876);
return G__29874__delegate(args);
});
G__29874.cljs$core$IFn$_invoke$arity$variadic = G__29874__delegate;
return G__29874;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29877_SHARP_,p2__29878_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29877_SHARP_)].join('')),p2__29878_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29879_SHARP_,p2__29880_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29879_SHARP_)].join(''),p2__29880_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29881 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29881.addCallback(((function (G__29881){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29881))
);

G__29881.addErrback(((function (G__29881){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29881))
);

return G__29881;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29882){if((e29882 instanceof Error)){
var e = e29882;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29882;

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
}catch (e29883){if((e29883 instanceof Error)){
var e = e29883;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29883;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29884 = cljs.core._EQ_;
var expr__29885 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29884.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29885))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29884.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29885))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29884.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29885))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29884,expr__29885){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29884,expr__29885))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29887,callback){
var map__29888 = p__29887;
var map__29888__$1 = ((((!((map__29888 == null)))?(((((map__29888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29888):map__29888);
var file_msg = map__29888__$1;
var request_url = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29888,map__29888__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29888,map__29888__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto__){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto__){
return (function (state_29926){
var state_val_29927 = (state_29926[(1)]);
if((state_val_29927 === (7))){
var inst_29922 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29928_29954 = state_29926__$1;
(statearr_29928_29954[(2)] = inst_29922);

(statearr_29928_29954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (1))){
var state_29926__$1 = state_29926;
var statearr_29929_29955 = state_29926__$1;
(statearr_29929_29955[(2)] = null);

(statearr_29929_29955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (4))){
var inst_29892 = (state_29926[(7)]);
var inst_29892__$1 = (state_29926[(2)]);
var state_29926__$1 = (function (){var statearr_29930 = state_29926;
(statearr_29930[(7)] = inst_29892__$1);

return statearr_29930;
})();
if(cljs.core.truth_(inst_29892__$1)){
var statearr_29931_29956 = state_29926__$1;
(statearr_29931_29956[(1)] = (5));

} else {
var statearr_29932_29957 = state_29926__$1;
(statearr_29932_29957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (15))){
var inst_29907 = (state_29926[(8)]);
var inst_29905 = (state_29926[(9)]);
var inst_29909 = inst_29907.call(null,inst_29905);
var state_29926__$1 = state_29926;
var statearr_29933_29958 = state_29926__$1;
(statearr_29933_29958[(2)] = inst_29909);

(statearr_29933_29958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (13))){
var inst_29916 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29934_29959 = state_29926__$1;
(statearr_29934_29959[(2)] = inst_29916);

(statearr_29934_29959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (6))){
var state_29926__$1 = state_29926;
var statearr_29935_29960 = state_29926__$1;
(statearr_29935_29960[(2)] = null);

(statearr_29935_29960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (17))){
var inst_29913 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29936_29961 = state_29926__$1;
(statearr_29936_29961[(2)] = inst_29913);

(statearr_29936_29961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (3))){
var inst_29924 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29926__$1,inst_29924);
} else {
if((state_val_29927 === (12))){
var state_29926__$1 = state_29926;
var statearr_29937_29962 = state_29926__$1;
(statearr_29937_29962[(2)] = null);

(statearr_29937_29962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (2))){
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29926__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29927 === (11))){
var inst_29897 = (state_29926[(10)]);
var inst_29903 = figwheel.client.file_reloading.blocking_load.call(null,inst_29897);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29926__$1,(14),inst_29903);
} else {
if((state_val_29927 === (9))){
var inst_29897 = (state_29926[(10)]);
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29897)){
var statearr_29938_29963 = state_29926__$1;
(statearr_29938_29963[(1)] = (11));

} else {
var statearr_29939_29964 = state_29926__$1;
(statearr_29939_29964[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (5))){
var inst_29892 = (state_29926[(7)]);
var inst_29898 = (state_29926[(11)]);
var inst_29897 = cljs.core.nth.call(null,inst_29892,(0),null);
var inst_29898__$1 = cljs.core.nth.call(null,inst_29892,(1),null);
var state_29926__$1 = (function (){var statearr_29940 = state_29926;
(statearr_29940[(10)] = inst_29897);

(statearr_29940[(11)] = inst_29898__$1);

return statearr_29940;
})();
if(cljs.core.truth_(inst_29898__$1)){
var statearr_29941_29965 = state_29926__$1;
(statearr_29941_29965[(1)] = (8));

} else {
var statearr_29942_29966 = state_29926__$1;
(statearr_29942_29966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (14))){
var inst_29897 = (state_29926[(10)]);
var inst_29907 = (state_29926[(8)]);
var inst_29905 = (state_29926[(2)]);
var inst_29906 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29907__$1 = cljs.core.get.call(null,inst_29906,inst_29897);
var state_29926__$1 = (function (){var statearr_29943 = state_29926;
(statearr_29943[(8)] = inst_29907__$1);

(statearr_29943[(9)] = inst_29905);

return statearr_29943;
})();
if(cljs.core.truth_(inst_29907__$1)){
var statearr_29944_29967 = state_29926__$1;
(statearr_29944_29967[(1)] = (15));

} else {
var statearr_29945_29968 = state_29926__$1;
(statearr_29945_29968[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (16))){
var inst_29905 = (state_29926[(9)]);
var inst_29911 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29905);
var state_29926__$1 = state_29926;
var statearr_29946_29969 = state_29926__$1;
(statearr_29946_29969[(2)] = inst_29911);

(statearr_29946_29969[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (10))){
var inst_29918 = (state_29926[(2)]);
var state_29926__$1 = (function (){var statearr_29947 = state_29926;
(statearr_29947[(12)] = inst_29918);

return statearr_29947;
})();
var statearr_29948_29970 = state_29926__$1;
(statearr_29948_29970[(2)] = null);

(statearr_29948_29970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (8))){
var inst_29898 = (state_29926[(11)]);
var inst_29900 = eval(inst_29898);
var state_29926__$1 = state_29926;
var statearr_29949_29971 = state_29926__$1;
(statearr_29949_29971[(2)] = inst_29900);

(statearr_29949_29971[(1)] = (10));


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
});})(c__27611__auto__))
;
return ((function (switch__27521__auto__,c__27611__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27522__auto__ = null;
var figwheel$client$file_reloading$state_machine__27522__auto____0 = (function (){
var statearr_29950 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29950[(0)] = figwheel$client$file_reloading$state_machine__27522__auto__);

(statearr_29950[(1)] = (1));

return statearr_29950;
});
var figwheel$client$file_reloading$state_machine__27522__auto____1 = (function (state_29926){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_29926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e29951){if((e29951 instanceof Object)){
var ex__27525__auto__ = e29951;
var statearr_29952_29972 = state_29926;
(statearr_29952_29972[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29973 = state_29926;
state_29926 = G__29973;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27522__auto__ = function(state_29926){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27522__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27522__auto____1.call(this,state_29926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27522__auto____0;
figwheel$client$file_reloading$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27522__auto____1;
return figwheel$client$file_reloading$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto__))
})();
var state__27613__auto__ = (function (){var statearr_29953 = f__27612__auto__.call(null);
(statearr_29953[(6)] = c__27611__auto__);

return statearr_29953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto__))
);

return c__27611__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29975 = arguments.length;
switch (G__29975) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29977,callback){
var map__29978 = p__29977;
var map__29978__$1 = ((((!((map__29978 == null)))?(((((map__29978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29978):map__29978);
var file_msg = map__29978__$1;
var namespace = cljs.core.get.call(null,map__29978__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29978,map__29978__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29978,map__29978__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29980){
var map__29981 = p__29980;
var map__29981__$1 = ((((!((map__29981 == null)))?(((((map__29981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29981):map__29981);
var file_msg = map__29981__$1;
var namespace = cljs.core.get.call(null,map__29981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29983){
var map__29984 = p__29983;
var map__29984__$1 = ((((!((map__29984 == null)))?(((((map__29984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29984):map__29984);
var file_msg = map__29984__$1;
var namespace = cljs.core.get.call(null,map__29984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29986,callback){
var map__29987 = p__29986;
var map__29987__$1 = ((((!((map__29987 == null)))?(((((map__29987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29987):map__29987);
var file_msg = map__29987__$1;
var request_url = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27611__auto___30037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___30037,out){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___30037,out){
return (function (state_30022){
var state_val_30023 = (state_30022[(1)]);
if((state_val_30023 === (1))){
var inst_29996 = cljs.core.seq.call(null,files);
var inst_29997 = cljs.core.first.call(null,inst_29996);
var inst_29998 = cljs.core.next.call(null,inst_29996);
var inst_29999 = files;
var state_30022__$1 = (function (){var statearr_30024 = state_30022;
(statearr_30024[(7)] = inst_29999);

(statearr_30024[(8)] = inst_29998);

(statearr_30024[(9)] = inst_29997);

return statearr_30024;
})();
var statearr_30025_30038 = state_30022__$1;
(statearr_30025_30038[(2)] = null);

(statearr_30025_30038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (2))){
var inst_29999 = (state_30022[(7)]);
var inst_30005 = (state_30022[(10)]);
var inst_30004 = cljs.core.seq.call(null,inst_29999);
var inst_30005__$1 = cljs.core.first.call(null,inst_30004);
var inst_30006 = cljs.core.next.call(null,inst_30004);
var inst_30007 = (inst_30005__$1 == null);
var inst_30008 = cljs.core.not.call(null,inst_30007);
var state_30022__$1 = (function (){var statearr_30026 = state_30022;
(statearr_30026[(11)] = inst_30006);

(statearr_30026[(10)] = inst_30005__$1);

return statearr_30026;
})();
if(inst_30008){
var statearr_30027_30039 = state_30022__$1;
(statearr_30027_30039[(1)] = (4));

} else {
var statearr_30028_30040 = state_30022__$1;
(statearr_30028_30040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (3))){
var inst_30020 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30022__$1,inst_30020);
} else {
if((state_val_30023 === (4))){
var inst_30005 = (state_30022[(10)]);
var inst_30010 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30005);
var state_30022__$1 = state_30022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30022__$1,(7),inst_30010);
} else {
if((state_val_30023 === (5))){
var inst_30016 = cljs.core.async.close_BANG_.call(null,out);
var state_30022__$1 = state_30022;
var statearr_30029_30041 = state_30022__$1;
(statearr_30029_30041[(2)] = inst_30016);

(statearr_30029_30041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (6))){
var inst_30018 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
var statearr_30030_30042 = state_30022__$1;
(statearr_30030_30042[(2)] = inst_30018);

(statearr_30030_30042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (7))){
var inst_30006 = (state_30022[(11)]);
var inst_30012 = (state_30022[(2)]);
var inst_30013 = cljs.core.async.put_BANG_.call(null,out,inst_30012);
var inst_29999 = inst_30006;
var state_30022__$1 = (function (){var statearr_30031 = state_30022;
(statearr_30031[(7)] = inst_29999);

(statearr_30031[(12)] = inst_30013);

return statearr_30031;
})();
var statearr_30032_30043 = state_30022__$1;
(statearr_30032_30043[(2)] = null);

(statearr_30032_30043[(1)] = (2));


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
});})(c__27611__auto___30037,out))
;
return ((function (switch__27521__auto__,c__27611__auto___30037,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto____0 = (function (){
var statearr_30033 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30033[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto__);

(statearr_30033[(1)] = (1));

return statearr_30033;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto____1 = (function (state_30022){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_30022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e30034){if((e30034 instanceof Object)){
var ex__27525__auto__ = e30034;
var statearr_30035_30044 = state_30022;
(statearr_30035_30044[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30045 = state_30022;
state_30022 = G__30045;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto__ = function(state_30022){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto____1.call(this,state_30022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___30037,out))
})();
var state__27613__auto__ = (function (){var statearr_30036 = f__27612__auto__.call(null);
(statearr_30036[(6)] = c__27611__auto___30037);

return statearr_30036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___30037,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30046,opts){
var map__30047 = p__30046;
var map__30047__$1 = ((((!((map__30047 == null)))?(((((map__30047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30047):map__30047);
var eval_body = cljs.core.get.call(null,map__30047__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30049){var e = e30049;
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
return (function (p1__30050_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30050_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30051){
var vec__30052 = p__30051;
var k = cljs.core.nth.call(null,vec__30052,(0),null);
var v = cljs.core.nth.call(null,vec__30052,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30055){
var vec__30056 = p__30055;
var k = cljs.core.nth.call(null,vec__30056,(0),null);
var v = cljs.core.nth.call(null,vec__30056,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30062,p__30063){
var map__30064 = p__30062;
var map__30064__$1 = ((((!((map__30064 == null)))?(((((map__30064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30064):map__30064);
var opts = map__30064__$1;
var before_jsload = cljs.core.get.call(null,map__30064__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30064__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30064__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30065 = p__30063;
var map__30065__$1 = ((((!((map__30065 == null)))?(((((map__30065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30065):map__30065);
var msg = map__30065__$1;
var files = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30219){
var state_val_30220 = (state_30219[(1)]);
if((state_val_30220 === (7))){
var inst_30082 = (state_30219[(7)]);
var inst_30081 = (state_30219[(8)]);
var inst_30080 = (state_30219[(9)]);
var inst_30079 = (state_30219[(10)]);
var inst_30087 = cljs.core._nth.call(null,inst_30080,inst_30082);
var inst_30088 = figwheel.client.file_reloading.eval_body.call(null,inst_30087,opts);
var inst_30089 = (inst_30082 + (1));
var tmp30221 = inst_30081;
var tmp30222 = inst_30080;
var tmp30223 = inst_30079;
var inst_30079__$1 = tmp30223;
var inst_30080__$1 = tmp30222;
var inst_30081__$1 = tmp30221;
var inst_30082__$1 = inst_30089;
var state_30219__$1 = (function (){var statearr_30224 = state_30219;
(statearr_30224[(11)] = inst_30088);

(statearr_30224[(7)] = inst_30082__$1);

(statearr_30224[(8)] = inst_30081__$1);

(statearr_30224[(9)] = inst_30080__$1);

(statearr_30224[(10)] = inst_30079__$1);

return statearr_30224;
})();
var statearr_30225_30308 = state_30219__$1;
(statearr_30225_30308[(2)] = null);

(statearr_30225_30308[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (20))){
var inst_30122 = (state_30219[(12)]);
var inst_30130 = figwheel.client.file_reloading.sort_files.call(null,inst_30122);
var state_30219__$1 = state_30219;
var statearr_30226_30309 = state_30219__$1;
(statearr_30226_30309[(2)] = inst_30130);

(statearr_30226_30309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (27))){
var state_30219__$1 = state_30219;
var statearr_30227_30310 = state_30219__$1;
(statearr_30227_30310[(2)] = null);

(statearr_30227_30310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (1))){
var inst_30071 = (state_30219[(13)]);
var inst_30068 = before_jsload.call(null,files);
var inst_30069 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30070 = (function (){return ((function (inst_30071,inst_30068,inst_30069,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30059_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30059_SHARP_);
});
;})(inst_30071,inst_30068,inst_30069,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30071__$1 = cljs.core.filter.call(null,inst_30070,files);
var inst_30072 = cljs.core.not_empty.call(null,inst_30071__$1);
var state_30219__$1 = (function (){var statearr_30228 = state_30219;
(statearr_30228[(13)] = inst_30071__$1);

(statearr_30228[(14)] = inst_30068);

(statearr_30228[(15)] = inst_30069);

return statearr_30228;
})();
if(cljs.core.truth_(inst_30072)){
var statearr_30229_30311 = state_30219__$1;
(statearr_30229_30311[(1)] = (2));

} else {
var statearr_30230_30312 = state_30219__$1;
(statearr_30230_30312[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (24))){
var state_30219__$1 = state_30219;
var statearr_30231_30313 = state_30219__$1;
(statearr_30231_30313[(2)] = null);

(statearr_30231_30313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (39))){
var inst_30172 = (state_30219[(16)]);
var state_30219__$1 = state_30219;
var statearr_30232_30314 = state_30219__$1;
(statearr_30232_30314[(2)] = inst_30172);

(statearr_30232_30314[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (46))){
var inst_30214 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30233_30315 = state_30219__$1;
(statearr_30233_30315[(2)] = inst_30214);

(statearr_30233_30315[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (4))){
var inst_30116 = (state_30219[(2)]);
var inst_30117 = cljs.core.List.EMPTY;
var inst_30118 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30117);
var inst_30119 = (function (){return ((function (inst_30116,inst_30117,inst_30118,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30060_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30060_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30060_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30060_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30116,inst_30117,inst_30118,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30120 = cljs.core.filter.call(null,inst_30119,files);
var inst_30121 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30122 = cljs.core.concat.call(null,inst_30120,inst_30121);
var state_30219__$1 = (function (){var statearr_30234 = state_30219;
(statearr_30234[(12)] = inst_30122);

(statearr_30234[(17)] = inst_30118);

(statearr_30234[(18)] = inst_30116);

return statearr_30234;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30235_30316 = state_30219__$1;
(statearr_30235_30316[(1)] = (16));

} else {
var statearr_30236_30317 = state_30219__$1;
(statearr_30236_30317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (15))){
var inst_30106 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30237_30318 = state_30219__$1;
(statearr_30237_30318[(2)] = inst_30106);

(statearr_30237_30318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (21))){
var inst_30132 = (state_30219[(19)]);
var inst_30132__$1 = (state_30219[(2)]);
var inst_30133 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30132__$1);
var state_30219__$1 = (function (){var statearr_30238 = state_30219;
(statearr_30238[(19)] = inst_30132__$1);

return statearr_30238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30219__$1,(22),inst_30133);
} else {
if((state_val_30220 === (31))){
var inst_30217 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30219__$1,inst_30217);
} else {
if((state_val_30220 === (32))){
var inst_30172 = (state_30219[(16)]);
var inst_30177 = inst_30172.cljs$lang$protocol_mask$partition0$;
var inst_30178 = (inst_30177 & (64));
var inst_30179 = inst_30172.cljs$core$ISeq$;
var inst_30180 = (cljs.core.PROTOCOL_SENTINEL === inst_30179);
var inst_30181 = ((inst_30178) || (inst_30180));
var state_30219__$1 = state_30219;
if(cljs.core.truth_(inst_30181)){
var statearr_30239_30319 = state_30219__$1;
(statearr_30239_30319[(1)] = (35));

} else {
var statearr_30240_30320 = state_30219__$1;
(statearr_30240_30320[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (40))){
var inst_30194 = (state_30219[(20)]);
var inst_30193 = (state_30219[(2)]);
var inst_30194__$1 = cljs.core.get.call(null,inst_30193,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30195 = cljs.core.get.call(null,inst_30193,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30196 = cljs.core.not_empty.call(null,inst_30194__$1);
var state_30219__$1 = (function (){var statearr_30241 = state_30219;
(statearr_30241[(20)] = inst_30194__$1);

(statearr_30241[(21)] = inst_30195);

return statearr_30241;
})();
if(cljs.core.truth_(inst_30196)){
var statearr_30242_30321 = state_30219__$1;
(statearr_30242_30321[(1)] = (41));

} else {
var statearr_30243_30322 = state_30219__$1;
(statearr_30243_30322[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (33))){
var state_30219__$1 = state_30219;
var statearr_30244_30323 = state_30219__$1;
(statearr_30244_30323[(2)] = false);

(statearr_30244_30323[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (13))){
var inst_30092 = (state_30219[(22)]);
var inst_30096 = cljs.core.chunk_first.call(null,inst_30092);
var inst_30097 = cljs.core.chunk_rest.call(null,inst_30092);
var inst_30098 = cljs.core.count.call(null,inst_30096);
var inst_30079 = inst_30097;
var inst_30080 = inst_30096;
var inst_30081 = inst_30098;
var inst_30082 = (0);
var state_30219__$1 = (function (){var statearr_30245 = state_30219;
(statearr_30245[(7)] = inst_30082);

(statearr_30245[(8)] = inst_30081);

(statearr_30245[(9)] = inst_30080);

(statearr_30245[(10)] = inst_30079);

return statearr_30245;
})();
var statearr_30246_30324 = state_30219__$1;
(statearr_30246_30324[(2)] = null);

(statearr_30246_30324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (22))){
var inst_30136 = (state_30219[(23)]);
var inst_30132 = (state_30219[(19)]);
var inst_30135 = (state_30219[(24)]);
var inst_30140 = (state_30219[(25)]);
var inst_30135__$1 = (state_30219[(2)]);
var inst_30136__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30135__$1);
var inst_30137 = (function (){var all_files = inst_30132;
var res_SINGLEQUOTE_ = inst_30135__$1;
var res = inst_30136__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30136,inst_30132,inst_30135,inst_30140,inst_30135__$1,inst_30136__$1,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30061_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30061_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30136,inst_30132,inst_30135,inst_30140,inst_30135__$1,inst_30136__$1,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30138 = cljs.core.filter.call(null,inst_30137,inst_30135__$1);
var inst_30139 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30140__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30139);
var inst_30141 = cljs.core.not_empty.call(null,inst_30140__$1);
var state_30219__$1 = (function (){var statearr_30247 = state_30219;
(statearr_30247[(23)] = inst_30136__$1);

(statearr_30247[(26)] = inst_30138);

(statearr_30247[(24)] = inst_30135__$1);

(statearr_30247[(25)] = inst_30140__$1);

return statearr_30247;
})();
if(cljs.core.truth_(inst_30141)){
var statearr_30248_30325 = state_30219__$1;
(statearr_30248_30325[(1)] = (23));

} else {
var statearr_30249_30326 = state_30219__$1;
(statearr_30249_30326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (36))){
var state_30219__$1 = state_30219;
var statearr_30250_30327 = state_30219__$1;
(statearr_30250_30327[(2)] = false);

(statearr_30250_30327[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (41))){
var inst_30194 = (state_30219[(20)]);
var inst_30198 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30199 = cljs.core.map.call(null,inst_30198,inst_30194);
var inst_30200 = cljs.core.pr_str.call(null,inst_30199);
var inst_30201 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30200)].join('');
var inst_30202 = figwheel.client.utils.log.call(null,inst_30201);
var state_30219__$1 = state_30219;
var statearr_30251_30328 = state_30219__$1;
(statearr_30251_30328[(2)] = inst_30202);

(statearr_30251_30328[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (43))){
var inst_30195 = (state_30219[(21)]);
var inst_30205 = (state_30219[(2)]);
var inst_30206 = cljs.core.not_empty.call(null,inst_30195);
var state_30219__$1 = (function (){var statearr_30252 = state_30219;
(statearr_30252[(27)] = inst_30205);

return statearr_30252;
})();
if(cljs.core.truth_(inst_30206)){
var statearr_30253_30329 = state_30219__$1;
(statearr_30253_30329[(1)] = (44));

} else {
var statearr_30254_30330 = state_30219__$1;
(statearr_30254_30330[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (29))){
var inst_30136 = (state_30219[(23)]);
var inst_30138 = (state_30219[(26)]);
var inst_30172 = (state_30219[(16)]);
var inst_30132 = (state_30219[(19)]);
var inst_30135 = (state_30219[(24)]);
var inst_30140 = (state_30219[(25)]);
var inst_30168 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30171 = (function (){var all_files = inst_30132;
var res_SINGLEQUOTE_ = inst_30135;
var res = inst_30136;
var files_not_loaded = inst_30138;
var dependencies_that_loaded = inst_30140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30136,inst_30138,inst_30172,inst_30132,inst_30135,inst_30140,inst_30168,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30170){
var map__30255 = p__30170;
var map__30255__$1 = ((((!((map__30255 == null)))?(((((map__30255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30255):map__30255);
var namespace = cljs.core.get.call(null,map__30255__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30136,inst_30138,inst_30172,inst_30132,inst_30135,inst_30140,inst_30168,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30172__$1 = cljs.core.group_by.call(null,inst_30171,inst_30138);
var inst_30174 = (inst_30172__$1 == null);
var inst_30175 = cljs.core.not.call(null,inst_30174);
var state_30219__$1 = (function (){var statearr_30257 = state_30219;
(statearr_30257[(16)] = inst_30172__$1);

(statearr_30257[(28)] = inst_30168);

return statearr_30257;
})();
if(inst_30175){
var statearr_30258_30331 = state_30219__$1;
(statearr_30258_30331[(1)] = (32));

} else {
var statearr_30259_30332 = state_30219__$1;
(statearr_30259_30332[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (44))){
var inst_30195 = (state_30219[(21)]);
var inst_30208 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30195);
var inst_30209 = cljs.core.pr_str.call(null,inst_30208);
var inst_30210 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30209)].join('');
var inst_30211 = figwheel.client.utils.log.call(null,inst_30210);
var state_30219__$1 = state_30219;
var statearr_30260_30333 = state_30219__$1;
(statearr_30260_30333[(2)] = inst_30211);

(statearr_30260_30333[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (6))){
var inst_30113 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30261_30334 = state_30219__$1;
(statearr_30261_30334[(2)] = inst_30113);

(statearr_30261_30334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (28))){
var inst_30138 = (state_30219[(26)]);
var inst_30165 = (state_30219[(2)]);
var inst_30166 = cljs.core.not_empty.call(null,inst_30138);
var state_30219__$1 = (function (){var statearr_30262 = state_30219;
(statearr_30262[(29)] = inst_30165);

return statearr_30262;
})();
if(cljs.core.truth_(inst_30166)){
var statearr_30263_30335 = state_30219__$1;
(statearr_30263_30335[(1)] = (29));

} else {
var statearr_30264_30336 = state_30219__$1;
(statearr_30264_30336[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (25))){
var inst_30136 = (state_30219[(23)]);
var inst_30152 = (state_30219[(2)]);
var inst_30153 = cljs.core.not_empty.call(null,inst_30136);
var state_30219__$1 = (function (){var statearr_30265 = state_30219;
(statearr_30265[(30)] = inst_30152);

return statearr_30265;
})();
if(cljs.core.truth_(inst_30153)){
var statearr_30266_30337 = state_30219__$1;
(statearr_30266_30337[(1)] = (26));

} else {
var statearr_30267_30338 = state_30219__$1;
(statearr_30267_30338[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (34))){
var inst_30188 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
if(cljs.core.truth_(inst_30188)){
var statearr_30268_30339 = state_30219__$1;
(statearr_30268_30339[(1)] = (38));

} else {
var statearr_30269_30340 = state_30219__$1;
(statearr_30269_30340[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (17))){
var state_30219__$1 = state_30219;
var statearr_30270_30341 = state_30219__$1;
(statearr_30270_30341[(2)] = recompile_dependents);

(statearr_30270_30341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (3))){
var state_30219__$1 = state_30219;
var statearr_30271_30342 = state_30219__$1;
(statearr_30271_30342[(2)] = null);

(statearr_30271_30342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (12))){
var inst_30109 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30272_30343 = state_30219__$1;
(statearr_30272_30343[(2)] = inst_30109);

(statearr_30272_30343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (2))){
var inst_30071 = (state_30219[(13)]);
var inst_30078 = cljs.core.seq.call(null,inst_30071);
var inst_30079 = inst_30078;
var inst_30080 = null;
var inst_30081 = (0);
var inst_30082 = (0);
var state_30219__$1 = (function (){var statearr_30273 = state_30219;
(statearr_30273[(7)] = inst_30082);

(statearr_30273[(8)] = inst_30081);

(statearr_30273[(9)] = inst_30080);

(statearr_30273[(10)] = inst_30079);

return statearr_30273;
})();
var statearr_30274_30344 = state_30219__$1;
(statearr_30274_30344[(2)] = null);

(statearr_30274_30344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (23))){
var inst_30136 = (state_30219[(23)]);
var inst_30138 = (state_30219[(26)]);
var inst_30132 = (state_30219[(19)]);
var inst_30135 = (state_30219[(24)]);
var inst_30140 = (state_30219[(25)]);
var inst_30143 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30145 = (function (){var all_files = inst_30132;
var res_SINGLEQUOTE_ = inst_30135;
var res = inst_30136;
var files_not_loaded = inst_30138;
var dependencies_that_loaded = inst_30140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30136,inst_30138,inst_30132,inst_30135,inst_30140,inst_30143,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30144){
var map__30275 = p__30144;
var map__30275__$1 = ((((!((map__30275 == null)))?(((((map__30275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30275):map__30275);
var request_url = cljs.core.get.call(null,map__30275__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30136,inst_30138,inst_30132,inst_30135,inst_30140,inst_30143,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30146 = cljs.core.reverse.call(null,inst_30140);
var inst_30147 = cljs.core.map.call(null,inst_30145,inst_30146);
var inst_30148 = cljs.core.pr_str.call(null,inst_30147);
var inst_30149 = figwheel.client.utils.log.call(null,inst_30148);
var state_30219__$1 = (function (){var statearr_30277 = state_30219;
(statearr_30277[(31)] = inst_30143);

return statearr_30277;
})();
var statearr_30278_30345 = state_30219__$1;
(statearr_30278_30345[(2)] = inst_30149);

(statearr_30278_30345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (35))){
var state_30219__$1 = state_30219;
var statearr_30279_30346 = state_30219__$1;
(statearr_30279_30346[(2)] = true);

(statearr_30279_30346[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (19))){
var inst_30122 = (state_30219[(12)]);
var inst_30128 = figwheel.client.file_reloading.expand_files.call(null,inst_30122);
var state_30219__$1 = state_30219;
var statearr_30280_30347 = state_30219__$1;
(statearr_30280_30347[(2)] = inst_30128);

(statearr_30280_30347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (11))){
var state_30219__$1 = state_30219;
var statearr_30281_30348 = state_30219__$1;
(statearr_30281_30348[(2)] = null);

(statearr_30281_30348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (9))){
var inst_30111 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30282_30349 = state_30219__$1;
(statearr_30282_30349[(2)] = inst_30111);

(statearr_30282_30349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (5))){
var inst_30082 = (state_30219[(7)]);
var inst_30081 = (state_30219[(8)]);
var inst_30084 = (inst_30082 < inst_30081);
var inst_30085 = inst_30084;
var state_30219__$1 = state_30219;
if(cljs.core.truth_(inst_30085)){
var statearr_30283_30350 = state_30219__$1;
(statearr_30283_30350[(1)] = (7));

} else {
var statearr_30284_30351 = state_30219__$1;
(statearr_30284_30351[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (14))){
var inst_30092 = (state_30219[(22)]);
var inst_30101 = cljs.core.first.call(null,inst_30092);
var inst_30102 = figwheel.client.file_reloading.eval_body.call(null,inst_30101,opts);
var inst_30103 = cljs.core.next.call(null,inst_30092);
var inst_30079 = inst_30103;
var inst_30080 = null;
var inst_30081 = (0);
var inst_30082 = (0);
var state_30219__$1 = (function (){var statearr_30285 = state_30219;
(statearr_30285[(32)] = inst_30102);

(statearr_30285[(7)] = inst_30082);

(statearr_30285[(8)] = inst_30081);

(statearr_30285[(9)] = inst_30080);

(statearr_30285[(10)] = inst_30079);

return statearr_30285;
})();
var statearr_30286_30352 = state_30219__$1;
(statearr_30286_30352[(2)] = null);

(statearr_30286_30352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (45))){
var state_30219__$1 = state_30219;
var statearr_30287_30353 = state_30219__$1;
(statearr_30287_30353[(2)] = null);

(statearr_30287_30353[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (26))){
var inst_30136 = (state_30219[(23)]);
var inst_30138 = (state_30219[(26)]);
var inst_30132 = (state_30219[(19)]);
var inst_30135 = (state_30219[(24)]);
var inst_30140 = (state_30219[(25)]);
var inst_30155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30157 = (function (){var all_files = inst_30132;
var res_SINGLEQUOTE_ = inst_30135;
var res = inst_30136;
var files_not_loaded = inst_30138;
var dependencies_that_loaded = inst_30140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30136,inst_30138,inst_30132,inst_30135,inst_30140,inst_30155,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30156){
var map__30288 = p__30156;
var map__30288__$1 = ((((!((map__30288 == null)))?(((((map__30288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30288):map__30288);
var namespace = cljs.core.get.call(null,map__30288__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30288__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30136,inst_30138,inst_30132,inst_30135,inst_30140,inst_30155,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30158 = cljs.core.map.call(null,inst_30157,inst_30136);
var inst_30159 = cljs.core.pr_str.call(null,inst_30158);
var inst_30160 = figwheel.client.utils.log.call(null,inst_30159);
var inst_30161 = (function (){var all_files = inst_30132;
var res_SINGLEQUOTE_ = inst_30135;
var res = inst_30136;
var files_not_loaded = inst_30138;
var dependencies_that_loaded = inst_30140;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30136,inst_30138,inst_30132,inst_30135,inst_30140,inst_30155,inst_30157,inst_30158,inst_30159,inst_30160,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30136,inst_30138,inst_30132,inst_30135,inst_30140,inst_30155,inst_30157,inst_30158,inst_30159,inst_30160,state_val_30220,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30162 = setTimeout(inst_30161,(10));
var state_30219__$1 = (function (){var statearr_30290 = state_30219;
(statearr_30290[(33)] = inst_30160);

(statearr_30290[(34)] = inst_30155);

return statearr_30290;
})();
var statearr_30291_30354 = state_30219__$1;
(statearr_30291_30354[(2)] = inst_30162);

(statearr_30291_30354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (16))){
var state_30219__$1 = state_30219;
var statearr_30292_30355 = state_30219__$1;
(statearr_30292_30355[(2)] = reload_dependents);

(statearr_30292_30355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (38))){
var inst_30172 = (state_30219[(16)]);
var inst_30190 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30172);
var state_30219__$1 = state_30219;
var statearr_30293_30356 = state_30219__$1;
(statearr_30293_30356[(2)] = inst_30190);

(statearr_30293_30356[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (30))){
var state_30219__$1 = state_30219;
var statearr_30294_30357 = state_30219__$1;
(statearr_30294_30357[(2)] = null);

(statearr_30294_30357[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (10))){
var inst_30092 = (state_30219[(22)]);
var inst_30094 = cljs.core.chunked_seq_QMARK_.call(null,inst_30092);
var state_30219__$1 = state_30219;
if(inst_30094){
var statearr_30295_30358 = state_30219__$1;
(statearr_30295_30358[(1)] = (13));

} else {
var statearr_30296_30359 = state_30219__$1;
(statearr_30296_30359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (18))){
var inst_30126 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
if(cljs.core.truth_(inst_30126)){
var statearr_30297_30360 = state_30219__$1;
(statearr_30297_30360[(1)] = (19));

} else {
var statearr_30298_30361 = state_30219__$1;
(statearr_30298_30361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (42))){
var state_30219__$1 = state_30219;
var statearr_30299_30362 = state_30219__$1;
(statearr_30299_30362[(2)] = null);

(statearr_30299_30362[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (37))){
var inst_30185 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30300_30363 = state_30219__$1;
(statearr_30300_30363[(2)] = inst_30185);

(statearr_30300_30363[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (8))){
var inst_30092 = (state_30219[(22)]);
var inst_30079 = (state_30219[(10)]);
var inst_30092__$1 = cljs.core.seq.call(null,inst_30079);
var state_30219__$1 = (function (){var statearr_30301 = state_30219;
(statearr_30301[(22)] = inst_30092__$1);

return statearr_30301;
})();
if(inst_30092__$1){
var statearr_30302_30364 = state_30219__$1;
(statearr_30302_30364[(1)] = (10));

} else {
var statearr_30303_30365 = state_30219__$1;
(statearr_30303_30365[(1)] = (11));

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
});})(c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27521__auto__,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto____0 = (function (){
var statearr_30304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30304[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto__);

(statearr_30304[(1)] = (1));

return statearr_30304;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto____1 = (function (state_30219){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_30219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e30305){if((e30305 instanceof Object)){
var ex__27525__auto__ = e30305;
var statearr_30306_30366 = state_30219;
(statearr_30306_30366[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30367 = state_30219;
state_30219 = G__30367;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto__ = function(state_30219){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto____1.call(this,state_30219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27613__auto__ = (function (){var statearr_30307 = f__27612__auto__.call(null);
(statearr_30307[(6)] = c__27611__auto__);

return statearr_30307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto__,map__30064,map__30064__$1,opts,before_jsload,on_jsload,reload_dependents,map__30065,map__30065__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27611__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30370,link){
var map__30371 = p__30370;
var map__30371__$1 = ((((!((map__30371 == null)))?(((((map__30371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30371):map__30371);
var file = cljs.core.get.call(null,map__30371__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30371,map__30371__$1,file){
return (function (p1__30368_SHARP_,p2__30369_SHARP_){
if(cljs.core._EQ_.call(null,p1__30368_SHARP_,p2__30369_SHARP_)){
return p1__30368_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30371,map__30371__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30374){
var map__30375 = p__30374;
var map__30375__$1 = ((((!((map__30375 == null)))?(((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30375):map__30375);
var match_length = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30373_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30373_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30377_SHARP_,p2__30378_SHARP_){
return cljs.core.assoc.call(null,p1__30377_SHARP_,cljs.core.get.call(null,p2__30378_SHARP_,key),p2__30378_SHARP_);
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
var loaded_f_datas_30379 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30379);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30379);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30380,p__30381){
var map__30382 = p__30380;
var map__30382__$1 = ((((!((map__30382 == null)))?(((((map__30382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30382):map__30382);
var on_cssload = cljs.core.get.call(null,map__30382__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30383 = p__30381;
var map__30383__$1 = ((((!((map__30383 == null)))?(((((map__30383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30383):map__30383);
var files_msg = map__30383__$1;
var files = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1570412448268
