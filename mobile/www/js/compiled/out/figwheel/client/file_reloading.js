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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29739_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29739_SHARP_));
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
var seq__29740 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29741 = null;
var count__29742 = (0);
var i__29743 = (0);
while(true){
if((i__29743 < count__29742)){
var n = cljs.core._nth.call(null,chunk__29741,i__29743);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29744 = seq__29740;
var G__29745 = chunk__29741;
var G__29746 = count__29742;
var G__29747 = (i__29743 + (1));
seq__29740 = G__29744;
chunk__29741 = G__29745;
count__29742 = G__29746;
i__29743 = G__29747;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29740);
if(temp__5457__auto__){
var seq__29740__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29740__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29740__$1);
var G__29748 = cljs.core.chunk_rest.call(null,seq__29740__$1);
var G__29749 = c__4319__auto__;
var G__29750 = cljs.core.count.call(null,c__4319__auto__);
var G__29751 = (0);
seq__29740 = G__29748;
chunk__29741 = G__29749;
count__29742 = G__29750;
i__29743 = G__29751;
continue;
} else {
var n = cljs.core.first.call(null,seq__29740__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29752 = cljs.core.next.call(null,seq__29740__$1);
var G__29753 = null;
var G__29754 = (0);
var G__29755 = (0);
seq__29740 = G__29752;
chunk__29741 = G__29753;
count__29742 = G__29754;
i__29743 = G__29755;
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
return cljs.core.some.call(null,(function (p__29756){
var vec__29757 = p__29756;
var _ = cljs.core.nth.call(null,vec__29757,(0),null);
var v = cljs.core.nth.call(null,vec__29757,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29760){
var vec__29761 = p__29760;
var k = cljs.core.nth.call(null,vec__29761,(0),null);
var v = cljs.core.nth.call(null,vec__29761,(1),null);
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

var seq__29773_29781 = cljs.core.seq.call(null,deps);
var chunk__29774_29782 = null;
var count__29775_29783 = (0);
var i__29776_29784 = (0);
while(true){
if((i__29776_29784 < count__29775_29783)){
var dep_29785 = cljs.core._nth.call(null,chunk__29774_29782,i__29776_29784);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29785;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29785));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29785,(depth + (1)),state);
} else {
}


var G__29786 = seq__29773_29781;
var G__29787 = chunk__29774_29782;
var G__29788 = count__29775_29783;
var G__29789 = (i__29776_29784 + (1));
seq__29773_29781 = G__29786;
chunk__29774_29782 = G__29787;
count__29775_29783 = G__29788;
i__29776_29784 = G__29789;
continue;
} else {
var temp__5457__auto___29790 = cljs.core.seq.call(null,seq__29773_29781);
if(temp__5457__auto___29790){
var seq__29773_29791__$1 = temp__5457__auto___29790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29773_29791__$1)){
var c__4319__auto___29792 = cljs.core.chunk_first.call(null,seq__29773_29791__$1);
var G__29793 = cljs.core.chunk_rest.call(null,seq__29773_29791__$1);
var G__29794 = c__4319__auto___29792;
var G__29795 = cljs.core.count.call(null,c__4319__auto___29792);
var G__29796 = (0);
seq__29773_29781 = G__29793;
chunk__29774_29782 = G__29794;
count__29775_29783 = G__29795;
i__29776_29784 = G__29796;
continue;
} else {
var dep_29797 = cljs.core.first.call(null,seq__29773_29791__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29797;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29797));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29797,(depth + (1)),state);
} else {
}


var G__29798 = cljs.core.next.call(null,seq__29773_29791__$1);
var G__29799 = null;
var G__29800 = (0);
var G__29801 = (0);
seq__29773_29781 = G__29798;
chunk__29774_29782 = G__29799;
count__29775_29783 = G__29800;
i__29776_29784 = G__29801;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29777){
var vec__29778 = p__29777;
var seq__29779 = cljs.core.seq.call(null,vec__29778);
var first__29780 = cljs.core.first.call(null,seq__29779);
var seq__29779__$1 = cljs.core.next.call(null,seq__29779);
var x = first__29780;
var xs = seq__29779__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29778,seq__29779,first__29780,seq__29779__$1,x,xs,get_deps__$1){
return (function (p1__29764_SHARP_){
return clojure.set.difference.call(null,p1__29764_SHARP_,x);
});})(vec__29778,seq__29779,first__29780,seq__29779__$1,x,xs,get_deps__$1))
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
var seq__29802 = cljs.core.seq.call(null,provides);
var chunk__29803 = null;
var count__29804 = (0);
var i__29805 = (0);
while(true){
if((i__29805 < count__29804)){
var prov = cljs.core._nth.call(null,chunk__29803,i__29805);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29806_29814 = cljs.core.seq.call(null,requires);
var chunk__29807_29815 = null;
var count__29808_29816 = (0);
var i__29809_29817 = (0);
while(true){
if((i__29809_29817 < count__29808_29816)){
var req_29818 = cljs.core._nth.call(null,chunk__29807_29815,i__29809_29817);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29818,prov);


var G__29819 = seq__29806_29814;
var G__29820 = chunk__29807_29815;
var G__29821 = count__29808_29816;
var G__29822 = (i__29809_29817 + (1));
seq__29806_29814 = G__29819;
chunk__29807_29815 = G__29820;
count__29808_29816 = G__29821;
i__29809_29817 = G__29822;
continue;
} else {
var temp__5457__auto___29823 = cljs.core.seq.call(null,seq__29806_29814);
if(temp__5457__auto___29823){
var seq__29806_29824__$1 = temp__5457__auto___29823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29806_29824__$1)){
var c__4319__auto___29825 = cljs.core.chunk_first.call(null,seq__29806_29824__$1);
var G__29826 = cljs.core.chunk_rest.call(null,seq__29806_29824__$1);
var G__29827 = c__4319__auto___29825;
var G__29828 = cljs.core.count.call(null,c__4319__auto___29825);
var G__29829 = (0);
seq__29806_29814 = G__29826;
chunk__29807_29815 = G__29827;
count__29808_29816 = G__29828;
i__29809_29817 = G__29829;
continue;
} else {
var req_29830 = cljs.core.first.call(null,seq__29806_29824__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29830,prov);


var G__29831 = cljs.core.next.call(null,seq__29806_29824__$1);
var G__29832 = null;
var G__29833 = (0);
var G__29834 = (0);
seq__29806_29814 = G__29831;
chunk__29807_29815 = G__29832;
count__29808_29816 = G__29833;
i__29809_29817 = G__29834;
continue;
}
} else {
}
}
break;
}


var G__29835 = seq__29802;
var G__29836 = chunk__29803;
var G__29837 = count__29804;
var G__29838 = (i__29805 + (1));
seq__29802 = G__29835;
chunk__29803 = G__29836;
count__29804 = G__29837;
i__29805 = G__29838;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29802);
if(temp__5457__auto__){
var seq__29802__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29802__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29802__$1);
var G__29839 = cljs.core.chunk_rest.call(null,seq__29802__$1);
var G__29840 = c__4319__auto__;
var G__29841 = cljs.core.count.call(null,c__4319__auto__);
var G__29842 = (0);
seq__29802 = G__29839;
chunk__29803 = G__29840;
count__29804 = G__29841;
i__29805 = G__29842;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29802__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29810_29843 = cljs.core.seq.call(null,requires);
var chunk__29811_29844 = null;
var count__29812_29845 = (0);
var i__29813_29846 = (0);
while(true){
if((i__29813_29846 < count__29812_29845)){
var req_29847 = cljs.core._nth.call(null,chunk__29811_29844,i__29813_29846);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29847,prov);


var G__29848 = seq__29810_29843;
var G__29849 = chunk__29811_29844;
var G__29850 = count__29812_29845;
var G__29851 = (i__29813_29846 + (1));
seq__29810_29843 = G__29848;
chunk__29811_29844 = G__29849;
count__29812_29845 = G__29850;
i__29813_29846 = G__29851;
continue;
} else {
var temp__5457__auto___29852__$1 = cljs.core.seq.call(null,seq__29810_29843);
if(temp__5457__auto___29852__$1){
var seq__29810_29853__$1 = temp__5457__auto___29852__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29810_29853__$1)){
var c__4319__auto___29854 = cljs.core.chunk_first.call(null,seq__29810_29853__$1);
var G__29855 = cljs.core.chunk_rest.call(null,seq__29810_29853__$1);
var G__29856 = c__4319__auto___29854;
var G__29857 = cljs.core.count.call(null,c__4319__auto___29854);
var G__29858 = (0);
seq__29810_29843 = G__29855;
chunk__29811_29844 = G__29856;
count__29812_29845 = G__29857;
i__29813_29846 = G__29858;
continue;
} else {
var req_29859 = cljs.core.first.call(null,seq__29810_29853__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29859,prov);


var G__29860 = cljs.core.next.call(null,seq__29810_29853__$1);
var G__29861 = null;
var G__29862 = (0);
var G__29863 = (0);
seq__29810_29843 = G__29860;
chunk__29811_29844 = G__29861;
count__29812_29845 = G__29862;
i__29813_29846 = G__29863;
continue;
}
} else {
}
}
break;
}


var G__29864 = cljs.core.next.call(null,seq__29802__$1);
var G__29865 = null;
var G__29866 = (0);
var G__29867 = (0);
seq__29802 = G__29864;
chunk__29803 = G__29865;
count__29804 = G__29866;
i__29805 = G__29867;
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
var seq__29868_29872 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29869_29873 = null;
var count__29870_29874 = (0);
var i__29871_29875 = (0);
while(true){
if((i__29871_29875 < count__29870_29874)){
var ns_29876 = cljs.core._nth.call(null,chunk__29869_29873,i__29871_29875);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29876);


var G__29877 = seq__29868_29872;
var G__29878 = chunk__29869_29873;
var G__29879 = count__29870_29874;
var G__29880 = (i__29871_29875 + (1));
seq__29868_29872 = G__29877;
chunk__29869_29873 = G__29878;
count__29870_29874 = G__29879;
i__29871_29875 = G__29880;
continue;
} else {
var temp__5457__auto___29881 = cljs.core.seq.call(null,seq__29868_29872);
if(temp__5457__auto___29881){
var seq__29868_29882__$1 = temp__5457__auto___29881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29868_29882__$1)){
var c__4319__auto___29883 = cljs.core.chunk_first.call(null,seq__29868_29882__$1);
var G__29884 = cljs.core.chunk_rest.call(null,seq__29868_29882__$1);
var G__29885 = c__4319__auto___29883;
var G__29886 = cljs.core.count.call(null,c__4319__auto___29883);
var G__29887 = (0);
seq__29868_29872 = G__29884;
chunk__29869_29873 = G__29885;
count__29870_29874 = G__29886;
i__29871_29875 = G__29887;
continue;
} else {
var ns_29888 = cljs.core.first.call(null,seq__29868_29882__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29888);


var G__29889 = cljs.core.next.call(null,seq__29868_29882__$1);
var G__29890 = null;
var G__29891 = (0);
var G__29892 = (0);
seq__29868_29872 = G__29889;
chunk__29869_29873 = G__29890;
count__29870_29874 = G__29891;
i__29871_29875 = G__29892;
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
var G__29893__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29894__i = 0, G__29894__a = new Array(arguments.length -  0);
while (G__29894__i < G__29894__a.length) {G__29894__a[G__29894__i] = arguments[G__29894__i + 0]; ++G__29894__i;}
  args = new cljs.core.IndexedSeq(G__29894__a,0,null);
} 
return G__29893__delegate.call(this,args);};
G__29893.cljs$lang$maxFixedArity = 0;
G__29893.cljs$lang$applyTo = (function (arglist__29895){
var args = cljs.core.seq(arglist__29895);
return G__29893__delegate(args);
});
G__29893.cljs$core$IFn$_invoke$arity$variadic = G__29893__delegate;
return G__29893;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29896_SHARP_,p2__29897_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29896_SHARP_)].join('')),p2__29897_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29898_SHARP_,p2__29899_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29898_SHARP_)].join(''),p2__29899_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29900 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29900.addCallback(((function (G__29900){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29900))
);

G__29900.addErrback(((function (G__29900){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29900))
);

return G__29900;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29901){if((e29901 instanceof Error)){
var e = e29901;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29901;

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
}catch (e29902){if((e29902 instanceof Error)){
var e = e29902;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29902;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29903 = cljs.core._EQ_;
var expr__29904 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29903.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29904))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29903.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29904))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29903.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29904))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29903,expr__29904){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29903,expr__29904))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29906,callback){
var map__29907 = p__29906;
var map__29907__$1 = ((((!((map__29907 == null)))?(((((map__29907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29907):map__29907);
var file_msg = map__29907__$1;
var request_url = cljs.core.get.call(null,map__29907__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29907,map__29907__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29907,map__29907__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto__){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto__){
return (function (state_29945){
var state_val_29946 = (state_29945[(1)]);
if((state_val_29946 === (7))){
var inst_29941 = (state_29945[(2)]);
var state_29945__$1 = state_29945;
var statearr_29947_29973 = state_29945__$1;
(statearr_29947_29973[(2)] = inst_29941);

(statearr_29947_29973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (1))){
var state_29945__$1 = state_29945;
var statearr_29948_29974 = state_29945__$1;
(statearr_29948_29974[(2)] = null);

(statearr_29948_29974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (4))){
var inst_29911 = (state_29945[(7)]);
var inst_29911__$1 = (state_29945[(2)]);
var state_29945__$1 = (function (){var statearr_29949 = state_29945;
(statearr_29949[(7)] = inst_29911__$1);

return statearr_29949;
})();
if(cljs.core.truth_(inst_29911__$1)){
var statearr_29950_29975 = state_29945__$1;
(statearr_29950_29975[(1)] = (5));

} else {
var statearr_29951_29976 = state_29945__$1;
(statearr_29951_29976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (15))){
var inst_29924 = (state_29945[(8)]);
var inst_29926 = (state_29945[(9)]);
var inst_29928 = inst_29926.call(null,inst_29924);
var state_29945__$1 = state_29945;
var statearr_29952_29977 = state_29945__$1;
(statearr_29952_29977[(2)] = inst_29928);

(statearr_29952_29977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (13))){
var inst_29935 = (state_29945[(2)]);
var state_29945__$1 = state_29945;
var statearr_29953_29978 = state_29945__$1;
(statearr_29953_29978[(2)] = inst_29935);

(statearr_29953_29978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (6))){
var state_29945__$1 = state_29945;
var statearr_29954_29979 = state_29945__$1;
(statearr_29954_29979[(2)] = null);

(statearr_29954_29979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (17))){
var inst_29932 = (state_29945[(2)]);
var state_29945__$1 = state_29945;
var statearr_29955_29980 = state_29945__$1;
(statearr_29955_29980[(2)] = inst_29932);

(statearr_29955_29980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (3))){
var inst_29943 = (state_29945[(2)]);
var state_29945__$1 = state_29945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29945__$1,inst_29943);
} else {
if((state_val_29946 === (12))){
var state_29945__$1 = state_29945;
var statearr_29956_29981 = state_29945__$1;
(statearr_29956_29981[(2)] = null);

(statearr_29956_29981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (2))){
var state_29945__$1 = state_29945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29945__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29946 === (11))){
var inst_29916 = (state_29945[(10)]);
var inst_29922 = figwheel.client.file_reloading.blocking_load.call(null,inst_29916);
var state_29945__$1 = state_29945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29945__$1,(14),inst_29922);
} else {
if((state_val_29946 === (9))){
var inst_29916 = (state_29945[(10)]);
var state_29945__$1 = state_29945;
if(cljs.core.truth_(inst_29916)){
var statearr_29957_29982 = state_29945__$1;
(statearr_29957_29982[(1)] = (11));

} else {
var statearr_29958_29983 = state_29945__$1;
(statearr_29958_29983[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (5))){
var inst_29917 = (state_29945[(11)]);
var inst_29911 = (state_29945[(7)]);
var inst_29916 = cljs.core.nth.call(null,inst_29911,(0),null);
var inst_29917__$1 = cljs.core.nth.call(null,inst_29911,(1),null);
var state_29945__$1 = (function (){var statearr_29959 = state_29945;
(statearr_29959[(11)] = inst_29917__$1);

(statearr_29959[(10)] = inst_29916);

return statearr_29959;
})();
if(cljs.core.truth_(inst_29917__$1)){
var statearr_29960_29984 = state_29945__$1;
(statearr_29960_29984[(1)] = (8));

} else {
var statearr_29961_29985 = state_29945__$1;
(statearr_29961_29985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (14))){
var inst_29916 = (state_29945[(10)]);
var inst_29926 = (state_29945[(9)]);
var inst_29924 = (state_29945[(2)]);
var inst_29925 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29926__$1 = cljs.core.get.call(null,inst_29925,inst_29916);
var state_29945__$1 = (function (){var statearr_29962 = state_29945;
(statearr_29962[(8)] = inst_29924);

(statearr_29962[(9)] = inst_29926__$1);

return statearr_29962;
})();
if(cljs.core.truth_(inst_29926__$1)){
var statearr_29963_29986 = state_29945__$1;
(statearr_29963_29986[(1)] = (15));

} else {
var statearr_29964_29987 = state_29945__$1;
(statearr_29964_29987[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (16))){
var inst_29924 = (state_29945[(8)]);
var inst_29930 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29924);
var state_29945__$1 = state_29945;
var statearr_29965_29988 = state_29945__$1;
(statearr_29965_29988[(2)] = inst_29930);

(statearr_29965_29988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (10))){
var inst_29937 = (state_29945[(2)]);
var state_29945__$1 = (function (){var statearr_29966 = state_29945;
(statearr_29966[(12)] = inst_29937);

return statearr_29966;
})();
var statearr_29967_29989 = state_29945__$1;
(statearr_29967_29989[(2)] = null);

(statearr_29967_29989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (8))){
var inst_29917 = (state_29945[(11)]);
var inst_29919 = eval(inst_29917);
var state_29945__$1 = state_29945;
var statearr_29968_29990 = state_29945__$1;
(statearr_29968_29990[(2)] = inst_29919);

(statearr_29968_29990[(1)] = (10));


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
});})(c__27630__auto__))
;
return ((function (switch__27540__auto__,c__27630__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27541__auto__ = null;
var figwheel$client$file_reloading$state_machine__27541__auto____0 = (function (){
var statearr_29969 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29969[(0)] = figwheel$client$file_reloading$state_machine__27541__auto__);

(statearr_29969[(1)] = (1));

return statearr_29969;
});
var figwheel$client$file_reloading$state_machine__27541__auto____1 = (function (state_29945){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_29945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e29970){if((e29970 instanceof Object)){
var ex__27544__auto__ = e29970;
var statearr_29971_29991 = state_29945;
(statearr_29971_29991[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29992 = state_29945;
state_29945 = G__29992;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27541__auto__ = function(state_29945){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27541__auto____1.call(this,state_29945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27541__auto____0;
figwheel$client$file_reloading$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27541__auto____1;
return figwheel$client$file_reloading$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto__))
})();
var state__27632__auto__ = (function (){var statearr_29972 = f__27631__auto__.call(null);
(statearr_29972[(6)] = c__27630__auto__);

return statearr_29972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto__))
);

return c__27630__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29994 = arguments.length;
switch (G__29994) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29996,callback){
var map__29997 = p__29996;
var map__29997__$1 = ((((!((map__29997 == null)))?(((((map__29997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29997):map__29997);
var file_msg = map__29997__$1;
var namespace = cljs.core.get.call(null,map__29997__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29997,map__29997__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29997,map__29997__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29999){
var map__30000 = p__29999;
var map__30000__$1 = ((((!((map__30000 == null)))?(((((map__30000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30000):map__30000);
var file_msg = map__30000__$1;
var namespace = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30002){
var map__30003 = p__30002;
var map__30003__$1 = ((((!((map__30003 == null)))?(((((map__30003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30003):map__30003);
var file_msg = map__30003__$1;
var namespace = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30005,callback){
var map__30006 = p__30005;
var map__30006__$1 = ((((!((map__30006 == null)))?(((((map__30006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30006):map__30006);
var file_msg = map__30006__$1;
var request_url = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27630__auto___30056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___30056,out){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___30056,out){
return (function (state_30041){
var state_val_30042 = (state_30041[(1)]);
if((state_val_30042 === (1))){
var inst_30015 = cljs.core.seq.call(null,files);
var inst_30016 = cljs.core.first.call(null,inst_30015);
var inst_30017 = cljs.core.next.call(null,inst_30015);
var inst_30018 = files;
var state_30041__$1 = (function (){var statearr_30043 = state_30041;
(statearr_30043[(7)] = inst_30018);

(statearr_30043[(8)] = inst_30016);

(statearr_30043[(9)] = inst_30017);

return statearr_30043;
})();
var statearr_30044_30057 = state_30041__$1;
(statearr_30044_30057[(2)] = null);

(statearr_30044_30057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (2))){
var inst_30018 = (state_30041[(7)]);
var inst_30024 = (state_30041[(10)]);
var inst_30023 = cljs.core.seq.call(null,inst_30018);
var inst_30024__$1 = cljs.core.first.call(null,inst_30023);
var inst_30025 = cljs.core.next.call(null,inst_30023);
var inst_30026 = (inst_30024__$1 == null);
var inst_30027 = cljs.core.not.call(null,inst_30026);
var state_30041__$1 = (function (){var statearr_30045 = state_30041;
(statearr_30045[(11)] = inst_30025);

(statearr_30045[(10)] = inst_30024__$1);

return statearr_30045;
})();
if(inst_30027){
var statearr_30046_30058 = state_30041__$1;
(statearr_30046_30058[(1)] = (4));

} else {
var statearr_30047_30059 = state_30041__$1;
(statearr_30047_30059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (3))){
var inst_30039 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30041__$1,inst_30039);
} else {
if((state_val_30042 === (4))){
var inst_30024 = (state_30041[(10)]);
var inst_30029 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30024);
var state_30041__$1 = state_30041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30041__$1,(7),inst_30029);
} else {
if((state_val_30042 === (5))){
var inst_30035 = cljs.core.async.close_BANG_.call(null,out);
var state_30041__$1 = state_30041;
var statearr_30048_30060 = state_30041__$1;
(statearr_30048_30060[(2)] = inst_30035);

(statearr_30048_30060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (6))){
var inst_30037 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
var statearr_30049_30061 = state_30041__$1;
(statearr_30049_30061[(2)] = inst_30037);

(statearr_30049_30061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (7))){
var inst_30025 = (state_30041[(11)]);
var inst_30031 = (state_30041[(2)]);
var inst_30032 = cljs.core.async.put_BANG_.call(null,out,inst_30031);
var inst_30018 = inst_30025;
var state_30041__$1 = (function (){var statearr_30050 = state_30041;
(statearr_30050[(12)] = inst_30032);

(statearr_30050[(7)] = inst_30018);

return statearr_30050;
})();
var statearr_30051_30062 = state_30041__$1;
(statearr_30051_30062[(2)] = null);

(statearr_30051_30062[(1)] = (2));


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
});})(c__27630__auto___30056,out))
;
return ((function (switch__27540__auto__,c__27630__auto___30056,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto____0 = (function (){
var statearr_30052 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30052[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto__);

(statearr_30052[(1)] = (1));

return statearr_30052;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto____1 = (function (state_30041){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_30041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e30053){if((e30053 instanceof Object)){
var ex__27544__auto__ = e30053;
var statearr_30054_30063 = state_30041;
(statearr_30054_30063[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30064 = state_30041;
state_30041 = G__30064;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto__ = function(state_30041){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto____1.call(this,state_30041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___30056,out))
})();
var state__27632__auto__ = (function (){var statearr_30055 = f__27631__auto__.call(null);
(statearr_30055[(6)] = c__27630__auto___30056);

return statearr_30055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___30056,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30065,opts){
var map__30066 = p__30065;
var map__30066__$1 = ((((!((map__30066 == null)))?(((((map__30066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30066):map__30066);
var eval_body = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30068){var e = e30068;
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
return (function (p1__30069_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30069_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30070){
var vec__30071 = p__30070;
var k = cljs.core.nth.call(null,vec__30071,(0),null);
var v = cljs.core.nth.call(null,vec__30071,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30074){
var vec__30075 = p__30074;
var k = cljs.core.nth.call(null,vec__30075,(0),null);
var v = cljs.core.nth.call(null,vec__30075,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30081,p__30082){
var map__30083 = p__30081;
var map__30083__$1 = ((((!((map__30083 == null)))?(((((map__30083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30083):map__30083);
var opts = map__30083__$1;
var before_jsload = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30084 = p__30082;
var map__30084__$1 = ((((!((map__30084 == null)))?(((((map__30084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30084):map__30084);
var msg = map__30084__$1;
var files = cljs.core.get.call(null,map__30084__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30084__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30084__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30238){
var state_val_30239 = (state_30238[(1)]);
if((state_val_30239 === (7))){
var inst_30099 = (state_30238[(7)]);
var inst_30098 = (state_30238[(8)]);
var inst_30100 = (state_30238[(9)]);
var inst_30101 = (state_30238[(10)]);
var inst_30106 = cljs.core._nth.call(null,inst_30099,inst_30101);
var inst_30107 = figwheel.client.file_reloading.eval_body.call(null,inst_30106,opts);
var inst_30108 = (inst_30101 + (1));
var tmp30240 = inst_30099;
var tmp30241 = inst_30098;
var tmp30242 = inst_30100;
var inst_30098__$1 = tmp30241;
var inst_30099__$1 = tmp30240;
var inst_30100__$1 = tmp30242;
var inst_30101__$1 = inst_30108;
var state_30238__$1 = (function (){var statearr_30243 = state_30238;
(statearr_30243[(7)] = inst_30099__$1);

(statearr_30243[(8)] = inst_30098__$1);

(statearr_30243[(9)] = inst_30100__$1);

(statearr_30243[(10)] = inst_30101__$1);

(statearr_30243[(11)] = inst_30107);

return statearr_30243;
})();
var statearr_30244_30327 = state_30238__$1;
(statearr_30244_30327[(2)] = null);

(statearr_30244_30327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (20))){
var inst_30141 = (state_30238[(12)]);
var inst_30149 = figwheel.client.file_reloading.sort_files.call(null,inst_30141);
var state_30238__$1 = state_30238;
var statearr_30245_30328 = state_30238__$1;
(statearr_30245_30328[(2)] = inst_30149);

(statearr_30245_30328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (27))){
var state_30238__$1 = state_30238;
var statearr_30246_30329 = state_30238__$1;
(statearr_30246_30329[(2)] = null);

(statearr_30246_30329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (1))){
var inst_30090 = (state_30238[(13)]);
var inst_30087 = before_jsload.call(null,files);
var inst_30088 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30089 = (function (){return ((function (inst_30090,inst_30087,inst_30088,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30078_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30078_SHARP_);
});
;})(inst_30090,inst_30087,inst_30088,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30090__$1 = cljs.core.filter.call(null,inst_30089,files);
var inst_30091 = cljs.core.not_empty.call(null,inst_30090__$1);
var state_30238__$1 = (function (){var statearr_30247 = state_30238;
(statearr_30247[(13)] = inst_30090__$1);

(statearr_30247[(14)] = inst_30087);

(statearr_30247[(15)] = inst_30088);

return statearr_30247;
})();
if(cljs.core.truth_(inst_30091)){
var statearr_30248_30330 = state_30238__$1;
(statearr_30248_30330[(1)] = (2));

} else {
var statearr_30249_30331 = state_30238__$1;
(statearr_30249_30331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (24))){
var state_30238__$1 = state_30238;
var statearr_30250_30332 = state_30238__$1;
(statearr_30250_30332[(2)] = null);

(statearr_30250_30332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (39))){
var inst_30191 = (state_30238[(16)]);
var state_30238__$1 = state_30238;
var statearr_30251_30333 = state_30238__$1;
(statearr_30251_30333[(2)] = inst_30191);

(statearr_30251_30333[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (46))){
var inst_30233 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30252_30334 = state_30238__$1;
(statearr_30252_30334[(2)] = inst_30233);

(statearr_30252_30334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (4))){
var inst_30135 = (state_30238[(2)]);
var inst_30136 = cljs.core.List.EMPTY;
var inst_30137 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30136);
var inst_30138 = (function (){return ((function (inst_30135,inst_30136,inst_30137,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30079_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30079_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30079_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30079_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30135,inst_30136,inst_30137,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30139 = cljs.core.filter.call(null,inst_30138,files);
var inst_30140 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30141 = cljs.core.concat.call(null,inst_30139,inst_30140);
var state_30238__$1 = (function (){var statearr_30253 = state_30238;
(statearr_30253[(12)] = inst_30141);

(statearr_30253[(17)] = inst_30137);

(statearr_30253[(18)] = inst_30135);

return statearr_30253;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30254_30335 = state_30238__$1;
(statearr_30254_30335[(1)] = (16));

} else {
var statearr_30255_30336 = state_30238__$1;
(statearr_30255_30336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (15))){
var inst_30125 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30256_30337 = state_30238__$1;
(statearr_30256_30337[(2)] = inst_30125);

(statearr_30256_30337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (21))){
var inst_30151 = (state_30238[(19)]);
var inst_30151__$1 = (state_30238[(2)]);
var inst_30152 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30151__$1);
var state_30238__$1 = (function (){var statearr_30257 = state_30238;
(statearr_30257[(19)] = inst_30151__$1);

return statearr_30257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30238__$1,(22),inst_30152);
} else {
if((state_val_30239 === (31))){
var inst_30236 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30238__$1,inst_30236);
} else {
if((state_val_30239 === (32))){
var inst_30191 = (state_30238[(16)]);
var inst_30196 = inst_30191.cljs$lang$protocol_mask$partition0$;
var inst_30197 = (inst_30196 & (64));
var inst_30198 = inst_30191.cljs$core$ISeq$;
var inst_30199 = (cljs.core.PROTOCOL_SENTINEL === inst_30198);
var inst_30200 = ((inst_30197) || (inst_30199));
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30200)){
var statearr_30258_30338 = state_30238__$1;
(statearr_30258_30338[(1)] = (35));

} else {
var statearr_30259_30339 = state_30238__$1;
(statearr_30259_30339[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (40))){
var inst_30213 = (state_30238[(20)]);
var inst_30212 = (state_30238[(2)]);
var inst_30213__$1 = cljs.core.get.call(null,inst_30212,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30214 = cljs.core.get.call(null,inst_30212,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30215 = cljs.core.not_empty.call(null,inst_30213__$1);
var state_30238__$1 = (function (){var statearr_30260 = state_30238;
(statearr_30260[(21)] = inst_30214);

(statearr_30260[(20)] = inst_30213__$1);

return statearr_30260;
})();
if(cljs.core.truth_(inst_30215)){
var statearr_30261_30340 = state_30238__$1;
(statearr_30261_30340[(1)] = (41));

} else {
var statearr_30262_30341 = state_30238__$1;
(statearr_30262_30341[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (33))){
var state_30238__$1 = state_30238;
var statearr_30263_30342 = state_30238__$1;
(statearr_30263_30342[(2)] = false);

(statearr_30263_30342[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (13))){
var inst_30111 = (state_30238[(22)]);
var inst_30115 = cljs.core.chunk_first.call(null,inst_30111);
var inst_30116 = cljs.core.chunk_rest.call(null,inst_30111);
var inst_30117 = cljs.core.count.call(null,inst_30115);
var inst_30098 = inst_30116;
var inst_30099 = inst_30115;
var inst_30100 = inst_30117;
var inst_30101 = (0);
var state_30238__$1 = (function (){var statearr_30264 = state_30238;
(statearr_30264[(7)] = inst_30099);

(statearr_30264[(8)] = inst_30098);

(statearr_30264[(9)] = inst_30100);

(statearr_30264[(10)] = inst_30101);

return statearr_30264;
})();
var statearr_30265_30343 = state_30238__$1;
(statearr_30265_30343[(2)] = null);

(statearr_30265_30343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (22))){
var inst_30159 = (state_30238[(23)]);
var inst_30154 = (state_30238[(24)]);
var inst_30151 = (state_30238[(19)]);
var inst_30155 = (state_30238[(25)]);
var inst_30154__$1 = (state_30238[(2)]);
var inst_30155__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30154__$1);
var inst_30156 = (function (){var all_files = inst_30151;
var res_SINGLEQUOTE_ = inst_30154__$1;
var res = inst_30155__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30159,inst_30154,inst_30151,inst_30155,inst_30154__$1,inst_30155__$1,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30080_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30080_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30159,inst_30154,inst_30151,inst_30155,inst_30154__$1,inst_30155__$1,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30157 = cljs.core.filter.call(null,inst_30156,inst_30154__$1);
var inst_30158 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30159__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30158);
var inst_30160 = cljs.core.not_empty.call(null,inst_30159__$1);
var state_30238__$1 = (function (){var statearr_30266 = state_30238;
(statearr_30266[(23)] = inst_30159__$1);

(statearr_30266[(24)] = inst_30154__$1);

(statearr_30266[(26)] = inst_30157);

(statearr_30266[(25)] = inst_30155__$1);

return statearr_30266;
})();
if(cljs.core.truth_(inst_30160)){
var statearr_30267_30344 = state_30238__$1;
(statearr_30267_30344[(1)] = (23));

} else {
var statearr_30268_30345 = state_30238__$1;
(statearr_30268_30345[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (36))){
var state_30238__$1 = state_30238;
var statearr_30269_30346 = state_30238__$1;
(statearr_30269_30346[(2)] = false);

(statearr_30269_30346[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (41))){
var inst_30213 = (state_30238[(20)]);
var inst_30217 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30218 = cljs.core.map.call(null,inst_30217,inst_30213);
var inst_30219 = cljs.core.pr_str.call(null,inst_30218);
var inst_30220 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30219)].join('');
var inst_30221 = figwheel.client.utils.log.call(null,inst_30220);
var state_30238__$1 = state_30238;
var statearr_30270_30347 = state_30238__$1;
(statearr_30270_30347[(2)] = inst_30221);

(statearr_30270_30347[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (43))){
var inst_30214 = (state_30238[(21)]);
var inst_30224 = (state_30238[(2)]);
var inst_30225 = cljs.core.not_empty.call(null,inst_30214);
var state_30238__$1 = (function (){var statearr_30271 = state_30238;
(statearr_30271[(27)] = inst_30224);

return statearr_30271;
})();
if(cljs.core.truth_(inst_30225)){
var statearr_30272_30348 = state_30238__$1;
(statearr_30272_30348[(1)] = (44));

} else {
var statearr_30273_30349 = state_30238__$1;
(statearr_30273_30349[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (29))){
var inst_30191 = (state_30238[(16)]);
var inst_30159 = (state_30238[(23)]);
var inst_30154 = (state_30238[(24)]);
var inst_30157 = (state_30238[(26)]);
var inst_30151 = (state_30238[(19)]);
var inst_30155 = (state_30238[(25)]);
var inst_30187 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30190 = (function (){var all_files = inst_30151;
var res_SINGLEQUOTE_ = inst_30154;
var res = inst_30155;
var files_not_loaded = inst_30157;
var dependencies_that_loaded = inst_30159;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30191,inst_30159,inst_30154,inst_30157,inst_30151,inst_30155,inst_30187,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30189){
var map__30274 = p__30189;
var map__30274__$1 = ((((!((map__30274 == null)))?(((((map__30274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30274):map__30274);
var namespace = cljs.core.get.call(null,map__30274__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30191,inst_30159,inst_30154,inst_30157,inst_30151,inst_30155,inst_30187,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30191__$1 = cljs.core.group_by.call(null,inst_30190,inst_30157);
var inst_30193 = (inst_30191__$1 == null);
var inst_30194 = cljs.core.not.call(null,inst_30193);
var state_30238__$1 = (function (){var statearr_30276 = state_30238;
(statearr_30276[(16)] = inst_30191__$1);

(statearr_30276[(28)] = inst_30187);

return statearr_30276;
})();
if(inst_30194){
var statearr_30277_30350 = state_30238__$1;
(statearr_30277_30350[(1)] = (32));

} else {
var statearr_30278_30351 = state_30238__$1;
(statearr_30278_30351[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (44))){
var inst_30214 = (state_30238[(21)]);
var inst_30227 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30214);
var inst_30228 = cljs.core.pr_str.call(null,inst_30227);
var inst_30229 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30228)].join('');
var inst_30230 = figwheel.client.utils.log.call(null,inst_30229);
var state_30238__$1 = state_30238;
var statearr_30279_30352 = state_30238__$1;
(statearr_30279_30352[(2)] = inst_30230);

(statearr_30279_30352[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (6))){
var inst_30132 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30280_30353 = state_30238__$1;
(statearr_30280_30353[(2)] = inst_30132);

(statearr_30280_30353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (28))){
var inst_30157 = (state_30238[(26)]);
var inst_30184 = (state_30238[(2)]);
var inst_30185 = cljs.core.not_empty.call(null,inst_30157);
var state_30238__$1 = (function (){var statearr_30281 = state_30238;
(statearr_30281[(29)] = inst_30184);

return statearr_30281;
})();
if(cljs.core.truth_(inst_30185)){
var statearr_30282_30354 = state_30238__$1;
(statearr_30282_30354[(1)] = (29));

} else {
var statearr_30283_30355 = state_30238__$1;
(statearr_30283_30355[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (25))){
var inst_30155 = (state_30238[(25)]);
var inst_30171 = (state_30238[(2)]);
var inst_30172 = cljs.core.not_empty.call(null,inst_30155);
var state_30238__$1 = (function (){var statearr_30284 = state_30238;
(statearr_30284[(30)] = inst_30171);

return statearr_30284;
})();
if(cljs.core.truth_(inst_30172)){
var statearr_30285_30356 = state_30238__$1;
(statearr_30285_30356[(1)] = (26));

} else {
var statearr_30286_30357 = state_30238__$1;
(statearr_30286_30357[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (34))){
var inst_30207 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30207)){
var statearr_30287_30358 = state_30238__$1;
(statearr_30287_30358[(1)] = (38));

} else {
var statearr_30288_30359 = state_30238__$1;
(statearr_30288_30359[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (17))){
var state_30238__$1 = state_30238;
var statearr_30289_30360 = state_30238__$1;
(statearr_30289_30360[(2)] = recompile_dependents);

(statearr_30289_30360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (3))){
var state_30238__$1 = state_30238;
var statearr_30290_30361 = state_30238__$1;
(statearr_30290_30361[(2)] = null);

(statearr_30290_30361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (12))){
var inst_30128 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30291_30362 = state_30238__$1;
(statearr_30291_30362[(2)] = inst_30128);

(statearr_30291_30362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (2))){
var inst_30090 = (state_30238[(13)]);
var inst_30097 = cljs.core.seq.call(null,inst_30090);
var inst_30098 = inst_30097;
var inst_30099 = null;
var inst_30100 = (0);
var inst_30101 = (0);
var state_30238__$1 = (function (){var statearr_30292 = state_30238;
(statearr_30292[(7)] = inst_30099);

(statearr_30292[(8)] = inst_30098);

(statearr_30292[(9)] = inst_30100);

(statearr_30292[(10)] = inst_30101);

return statearr_30292;
})();
var statearr_30293_30363 = state_30238__$1;
(statearr_30293_30363[(2)] = null);

(statearr_30293_30363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (23))){
var inst_30159 = (state_30238[(23)]);
var inst_30154 = (state_30238[(24)]);
var inst_30157 = (state_30238[(26)]);
var inst_30151 = (state_30238[(19)]);
var inst_30155 = (state_30238[(25)]);
var inst_30162 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30164 = (function (){var all_files = inst_30151;
var res_SINGLEQUOTE_ = inst_30154;
var res = inst_30155;
var files_not_loaded = inst_30157;
var dependencies_that_loaded = inst_30159;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30154,inst_30157,inst_30151,inst_30155,inst_30162,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30163){
var map__30294 = p__30163;
var map__30294__$1 = ((((!((map__30294 == null)))?(((((map__30294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30294):map__30294);
var request_url = cljs.core.get.call(null,map__30294__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30154,inst_30157,inst_30151,inst_30155,inst_30162,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30165 = cljs.core.reverse.call(null,inst_30159);
var inst_30166 = cljs.core.map.call(null,inst_30164,inst_30165);
var inst_30167 = cljs.core.pr_str.call(null,inst_30166);
var inst_30168 = figwheel.client.utils.log.call(null,inst_30167);
var state_30238__$1 = (function (){var statearr_30296 = state_30238;
(statearr_30296[(31)] = inst_30162);

return statearr_30296;
})();
var statearr_30297_30364 = state_30238__$1;
(statearr_30297_30364[(2)] = inst_30168);

(statearr_30297_30364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (35))){
var state_30238__$1 = state_30238;
var statearr_30298_30365 = state_30238__$1;
(statearr_30298_30365[(2)] = true);

(statearr_30298_30365[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (19))){
var inst_30141 = (state_30238[(12)]);
var inst_30147 = figwheel.client.file_reloading.expand_files.call(null,inst_30141);
var state_30238__$1 = state_30238;
var statearr_30299_30366 = state_30238__$1;
(statearr_30299_30366[(2)] = inst_30147);

(statearr_30299_30366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (11))){
var state_30238__$1 = state_30238;
var statearr_30300_30367 = state_30238__$1;
(statearr_30300_30367[(2)] = null);

(statearr_30300_30367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (9))){
var inst_30130 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30301_30368 = state_30238__$1;
(statearr_30301_30368[(2)] = inst_30130);

(statearr_30301_30368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (5))){
var inst_30100 = (state_30238[(9)]);
var inst_30101 = (state_30238[(10)]);
var inst_30103 = (inst_30101 < inst_30100);
var inst_30104 = inst_30103;
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30104)){
var statearr_30302_30369 = state_30238__$1;
(statearr_30302_30369[(1)] = (7));

} else {
var statearr_30303_30370 = state_30238__$1;
(statearr_30303_30370[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (14))){
var inst_30111 = (state_30238[(22)]);
var inst_30120 = cljs.core.first.call(null,inst_30111);
var inst_30121 = figwheel.client.file_reloading.eval_body.call(null,inst_30120,opts);
var inst_30122 = cljs.core.next.call(null,inst_30111);
var inst_30098 = inst_30122;
var inst_30099 = null;
var inst_30100 = (0);
var inst_30101 = (0);
var state_30238__$1 = (function (){var statearr_30304 = state_30238;
(statearr_30304[(32)] = inst_30121);

(statearr_30304[(7)] = inst_30099);

(statearr_30304[(8)] = inst_30098);

(statearr_30304[(9)] = inst_30100);

(statearr_30304[(10)] = inst_30101);

return statearr_30304;
})();
var statearr_30305_30371 = state_30238__$1;
(statearr_30305_30371[(2)] = null);

(statearr_30305_30371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (45))){
var state_30238__$1 = state_30238;
var statearr_30306_30372 = state_30238__$1;
(statearr_30306_30372[(2)] = null);

(statearr_30306_30372[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (26))){
var inst_30159 = (state_30238[(23)]);
var inst_30154 = (state_30238[(24)]);
var inst_30157 = (state_30238[(26)]);
var inst_30151 = (state_30238[(19)]);
var inst_30155 = (state_30238[(25)]);
var inst_30174 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30176 = (function (){var all_files = inst_30151;
var res_SINGLEQUOTE_ = inst_30154;
var res = inst_30155;
var files_not_loaded = inst_30157;
var dependencies_that_loaded = inst_30159;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30154,inst_30157,inst_30151,inst_30155,inst_30174,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30175){
var map__30307 = p__30175;
var map__30307__$1 = ((((!((map__30307 == null)))?(((((map__30307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30307):map__30307);
var namespace = cljs.core.get.call(null,map__30307__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30154,inst_30157,inst_30151,inst_30155,inst_30174,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30177 = cljs.core.map.call(null,inst_30176,inst_30155);
var inst_30178 = cljs.core.pr_str.call(null,inst_30177);
var inst_30179 = figwheel.client.utils.log.call(null,inst_30178);
var inst_30180 = (function (){var all_files = inst_30151;
var res_SINGLEQUOTE_ = inst_30154;
var res = inst_30155;
var files_not_loaded = inst_30157;
var dependencies_that_loaded = inst_30159;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30154,inst_30157,inst_30151,inst_30155,inst_30174,inst_30176,inst_30177,inst_30178,inst_30179,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30159,inst_30154,inst_30157,inst_30151,inst_30155,inst_30174,inst_30176,inst_30177,inst_30178,inst_30179,state_val_30239,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30181 = setTimeout(inst_30180,(10));
var state_30238__$1 = (function (){var statearr_30309 = state_30238;
(statearr_30309[(33)] = inst_30174);

(statearr_30309[(34)] = inst_30179);

return statearr_30309;
})();
var statearr_30310_30373 = state_30238__$1;
(statearr_30310_30373[(2)] = inst_30181);

(statearr_30310_30373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (16))){
var state_30238__$1 = state_30238;
var statearr_30311_30374 = state_30238__$1;
(statearr_30311_30374[(2)] = reload_dependents);

(statearr_30311_30374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (38))){
var inst_30191 = (state_30238[(16)]);
var inst_30209 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30191);
var state_30238__$1 = state_30238;
var statearr_30312_30375 = state_30238__$1;
(statearr_30312_30375[(2)] = inst_30209);

(statearr_30312_30375[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (30))){
var state_30238__$1 = state_30238;
var statearr_30313_30376 = state_30238__$1;
(statearr_30313_30376[(2)] = null);

(statearr_30313_30376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (10))){
var inst_30111 = (state_30238[(22)]);
var inst_30113 = cljs.core.chunked_seq_QMARK_.call(null,inst_30111);
var state_30238__$1 = state_30238;
if(inst_30113){
var statearr_30314_30377 = state_30238__$1;
(statearr_30314_30377[(1)] = (13));

} else {
var statearr_30315_30378 = state_30238__$1;
(statearr_30315_30378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (18))){
var inst_30145 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
if(cljs.core.truth_(inst_30145)){
var statearr_30316_30379 = state_30238__$1;
(statearr_30316_30379[(1)] = (19));

} else {
var statearr_30317_30380 = state_30238__$1;
(statearr_30317_30380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (42))){
var state_30238__$1 = state_30238;
var statearr_30318_30381 = state_30238__$1;
(statearr_30318_30381[(2)] = null);

(statearr_30318_30381[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (37))){
var inst_30204 = (state_30238[(2)]);
var state_30238__$1 = state_30238;
var statearr_30319_30382 = state_30238__$1;
(statearr_30319_30382[(2)] = inst_30204);

(statearr_30319_30382[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30239 === (8))){
var inst_30098 = (state_30238[(8)]);
var inst_30111 = (state_30238[(22)]);
var inst_30111__$1 = cljs.core.seq.call(null,inst_30098);
var state_30238__$1 = (function (){var statearr_30320 = state_30238;
(statearr_30320[(22)] = inst_30111__$1);

return statearr_30320;
})();
if(inst_30111__$1){
var statearr_30321_30383 = state_30238__$1;
(statearr_30321_30383[(1)] = (10));

} else {
var statearr_30322_30384 = state_30238__$1;
(statearr_30322_30384[(1)] = (11));

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
});})(c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27540__auto__,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto____0 = (function (){
var statearr_30323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30323[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto__);

(statearr_30323[(1)] = (1));

return statearr_30323;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto____1 = (function (state_30238){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_30238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e30324){if((e30324 instanceof Object)){
var ex__27544__auto__ = e30324;
var statearr_30325_30385 = state_30238;
(statearr_30325_30385[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30386 = state_30238;
state_30238 = G__30386;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto__ = function(state_30238){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto____1.call(this,state_30238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27632__auto__ = (function (){var statearr_30326 = f__27631__auto__.call(null);
(statearr_30326[(6)] = c__27630__auto__);

return statearr_30326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto__,map__30083,map__30083__$1,opts,before_jsload,on_jsload,reload_dependents,map__30084,map__30084__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27630__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30389,link){
var map__30390 = p__30389;
var map__30390__$1 = ((((!((map__30390 == null)))?(((((map__30390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30390):map__30390);
var file = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30390,map__30390__$1,file){
return (function (p1__30387_SHARP_,p2__30388_SHARP_){
if(cljs.core._EQ_.call(null,p1__30387_SHARP_,p2__30388_SHARP_)){
return p1__30387_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30390,map__30390__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30393){
var map__30394 = p__30393;
var map__30394__$1 = ((((!((map__30394 == null)))?(((((map__30394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30394):map__30394);
var match_length = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30392_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30392_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30396_SHARP_,p2__30397_SHARP_){
return cljs.core.assoc.call(null,p1__30396_SHARP_,cljs.core.get.call(null,p2__30397_SHARP_,key),p2__30397_SHARP_);
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
var loaded_f_datas_30398 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30398);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30398);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30399,p__30400){
var map__30401 = p__30399;
var map__30401__$1 = ((((!((map__30401 == null)))?(((((map__30401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30401):map__30401);
var on_cssload = cljs.core.get.call(null,map__30401__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30402 = p__30400;
var map__30402__$1 = ((((!((map__30402 == null)))?(((((map__30402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30402):map__30402);
var files_msg = map__30402__$1;
var files = cljs.core.get.call(null,map__30402__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1582304851684
