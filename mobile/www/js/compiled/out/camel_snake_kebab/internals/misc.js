// Compiled by ClojureScript 1.10.238 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22432 = arguments.length;
var i__4500__auto___22433 = (0);
while(true){
if((i__4500__auto___22433 < len__4499__auto___22432)){
args__4502__auto__.push((arguments[i__4500__auto___22433]));

var G__22434 = (i__4500__auto___22433 + (1));
i__4500__auto___22433 = G__22434;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((4) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4503__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__22426){
var map__22427 = p__22426;
var map__22427__$1 = ((((!((map__22427 == null)))?(((((map__22427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22427):map__22427);
var separator = cljs.core.get.call(null,map__22427__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__22429 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__22430 = cljs.core.seq.call(null,vec__22429);
var first__22431 = cljs.core.first.call(null,seq__22430);
var seq__22430__$1 = cljs.core.next.call(null,seq__22430);
var first = first__22431;
var rest = seq__22430__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq22421){
var G__22422 = cljs.core.first.call(null,seq22421);
var seq22421__$1 = cljs.core.next.call(null,seq22421);
var G__22423 = cljs.core.first.call(null,seq22421__$1);
var seq22421__$2 = cljs.core.next.call(null,seq22421__$1);
var G__22424 = cljs.core.first.call(null,seq22421__$2);
var seq22421__$3 = cljs.core.next.call(null,seq22421__$2);
var G__22425 = cljs.core.first.call(null,seq22421__$3);
var seq22421__$4 = cljs.core.next.call(null,seq22421__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22422,G__22423,G__22424,G__22425,seq22421__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__3922__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map?rel=1556144015949
