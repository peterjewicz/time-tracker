// Compiled by ClojureScript 1.10.238 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37205 = arguments.length;
var i__4500__auto___37206 = (0);
while(true){
if((i__4500__auto___37206 < len__4499__auto___37205)){
args__4502__auto__.push((arguments[i__4500__auto___37206]));

var G__37207 = (i__4500__auto___37206 + (1));
i__4500__auto___37206 = G__37207;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((4) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4503__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq37200){
var G__37201 = cljs.core.first.call(null,seq37200);
var seq37200__$1 = cljs.core.next.call(null,seq37200);
var G__37202 = cljs.core.first.call(null,seq37200__$1);
var seq37200__$2 = cljs.core.next.call(null,seq37200__$1);
var G__37203 = cljs.core.first.call(null,seq37200__$2);
var seq37200__$3 = cljs.core.next.call(null,seq37200__$2);
var G__37204 = cljs.core.first.call(null,seq37200__$3);
var seq37200__$4 = cljs.core.next.call(null,seq37200__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37201,G__37202,G__37203,G__37204,seq37200__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37216 = arguments.length;
var i__4500__auto___37217 = (0);
while(true){
if((i__4500__auto___37217 < len__4499__auto___37216)){
args__4502__auto__.push((arguments[i__4500__auto___37217]));

var G__37218 = (i__4500__auto___37217 + (1));
i__4500__auto___37217 = G__37218;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__37163__auto__,rest__37164__auto__){
var convert_case__37165__auto__ = (function (p1__37162__37166__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__37162__37166__auto__,rest__37164__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37163__auto__,convert_case__37165__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq37208){
var G__37209 = cljs.core.first.call(null,seq37208);
var seq37208__$1 = cljs.core.next.call(null,seq37208);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37209,seq37208__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37219 = arguments.length;
var i__4500__auto___37220 = (0);
while(true){
if((i__4500__auto___37220 < len__4499__auto___37219)){
args__4502__auto__.push((arguments[i__4500__auto___37220]));

var G__37221 = (i__4500__auto___37220 + (1));
i__4500__auto___37220 = G__37221;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq37210){
var G__37211 = cljs.core.first.call(null,seq37210);
var seq37210__$1 = cljs.core.next.call(null,seq37210);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37211,seq37210__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37222 = arguments.length;
var i__4500__auto___37223 = (0);
while(true){
if((i__4500__auto___37223 < len__4499__auto___37222)){
args__4502__auto__.push((arguments[i__4500__auto___37223]));

var G__37224 = (i__4500__auto___37223 + (1));
i__4500__auto___37223 = G__37224;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq37212){
var G__37213 = cljs.core.first.call(null,seq37212);
var seq37212__$1 = cljs.core.next.call(null,seq37212);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37213,seq37212__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37225 = arguments.length;
var i__4500__auto___37226 = (0);
while(true){
if((i__4500__auto___37226 < len__4499__auto___37225)){
args__4502__auto__.push((arguments[i__4500__auto___37226]));

var G__37227 = (i__4500__auto___37226 + (1));
i__4500__auto___37226 = G__37227;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq37214){
var G__37215 = cljs.core.first.call(null,seq37214);
var seq37214__$1 = cljs.core.next.call(null,seq37214);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37215,seq37214__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37236 = arguments.length;
var i__4500__auto___37237 = (0);
while(true){
if((i__4500__auto___37237 < len__4499__auto___37236)){
args__4502__auto__.push((arguments[i__4500__auto___37237]));

var G__37238 = (i__4500__auto___37237 + (1));
i__4500__auto___37237 = G__37238;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37163__auto__,rest__37164__auto__){
var convert_case__37165__auto__ = (function (p1__37162__37166__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__37162__37166__auto__,rest__37164__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37163__auto__,convert_case__37165__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq37228){
var G__37229 = cljs.core.first.call(null,seq37228);
var seq37228__$1 = cljs.core.next.call(null,seq37228);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37229,seq37228__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37239 = arguments.length;
var i__4500__auto___37240 = (0);
while(true){
if((i__4500__auto___37240 < len__4499__auto___37239)){
args__4502__auto__.push((arguments[i__4500__auto___37240]));

var G__37241 = (i__4500__auto___37240 + (1));
i__4500__auto___37240 = G__37241;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq37230){
var G__37231 = cljs.core.first.call(null,seq37230);
var seq37230__$1 = cljs.core.next.call(null,seq37230);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37231,seq37230__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37242 = arguments.length;
var i__4500__auto___37243 = (0);
while(true){
if((i__4500__auto___37243 < len__4499__auto___37242)){
args__4502__auto__.push((arguments[i__4500__auto___37243]));

var G__37244 = (i__4500__auto___37243 + (1));
i__4500__auto___37243 = G__37244;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq37232){
var G__37233 = cljs.core.first.call(null,seq37232);
var seq37232__$1 = cljs.core.next.call(null,seq37232);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37233,seq37232__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37245 = arguments.length;
var i__4500__auto___37246 = (0);
while(true){
if((i__4500__auto___37246 < len__4499__auto___37245)){
args__4502__auto__.push((arguments[i__4500__auto___37246]));

var G__37247 = (i__4500__auto___37246 + (1));
i__4500__auto___37246 = G__37247;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq37234){
var G__37235 = cljs.core.first.call(null,seq37234);
var seq37234__$1 = cljs.core.next.call(null,seq37234);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37235,seq37234__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37256 = arguments.length;
var i__4500__auto___37257 = (0);
while(true){
if((i__4500__auto___37257 < len__4499__auto___37256)){
args__4502__auto__.push((arguments[i__4500__auto___37257]));

var G__37258 = (i__4500__auto___37257 + (1));
i__4500__auto___37257 = G__37258;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__37163__auto__,rest__37164__auto__){
var convert_case__37165__auto__ = (function (p1__37162__37166__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__37162__37166__auto__,rest__37164__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37163__auto__,convert_case__37165__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq37248){
var G__37249 = cljs.core.first.call(null,seq37248);
var seq37248__$1 = cljs.core.next.call(null,seq37248);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37249,seq37248__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37259 = arguments.length;
var i__4500__auto___37260 = (0);
while(true){
if((i__4500__auto___37260 < len__4499__auto___37259)){
args__4502__auto__.push((arguments[i__4500__auto___37260]));

var G__37261 = (i__4500__auto___37260 + (1));
i__4500__auto___37260 = G__37261;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq37250){
var G__37251 = cljs.core.first.call(null,seq37250);
var seq37250__$1 = cljs.core.next.call(null,seq37250);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37251,seq37250__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37262 = arguments.length;
var i__4500__auto___37263 = (0);
while(true){
if((i__4500__auto___37263 < len__4499__auto___37262)){
args__4502__auto__.push((arguments[i__4500__auto___37263]));

var G__37264 = (i__4500__auto___37263 + (1));
i__4500__auto___37263 = G__37264;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq37252){
var G__37253 = cljs.core.first.call(null,seq37252);
var seq37252__$1 = cljs.core.next.call(null,seq37252);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37253,seq37252__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37265 = arguments.length;
var i__4500__auto___37266 = (0);
while(true){
if((i__4500__auto___37266 < len__4499__auto___37265)){
args__4502__auto__.push((arguments[i__4500__auto___37266]));

var G__37267 = (i__4500__auto___37266 + (1));
i__4500__auto___37266 = G__37267;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq37254){
var G__37255 = cljs.core.first.call(null,seq37254);
var seq37254__$1 = cljs.core.next.call(null,seq37254);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37255,seq37254__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37276 = arguments.length;
var i__4500__auto___37277 = (0);
while(true){
if((i__4500__auto___37277 < len__4499__auto___37276)){
args__4502__auto__.push((arguments[i__4500__auto___37277]));

var G__37278 = (i__4500__auto___37277 + (1));
i__4500__auto___37277 = G__37278;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__37163__auto__,rest__37164__auto__){
var convert_case__37165__auto__ = (function (p1__37162__37166__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__37162__37166__auto__,rest__37164__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37163__auto__,convert_case__37165__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq37268){
var G__37269 = cljs.core.first.call(null,seq37268);
var seq37268__$1 = cljs.core.next.call(null,seq37268);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37269,seq37268__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37279 = arguments.length;
var i__4500__auto___37280 = (0);
while(true){
if((i__4500__auto___37280 < len__4499__auto___37279)){
args__4502__auto__.push((arguments[i__4500__auto___37280]));

var G__37281 = (i__4500__auto___37280 + (1));
i__4500__auto___37280 = G__37281;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq37270){
var G__37271 = cljs.core.first.call(null,seq37270);
var seq37270__$1 = cljs.core.next.call(null,seq37270);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37271,seq37270__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37282 = arguments.length;
var i__4500__auto___37283 = (0);
while(true){
if((i__4500__auto___37283 < len__4499__auto___37282)){
args__4502__auto__.push((arguments[i__4500__auto___37283]));

var G__37284 = (i__4500__auto___37283 + (1));
i__4500__auto___37283 = G__37284;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq37272){
var G__37273 = cljs.core.first.call(null,seq37272);
var seq37272__$1 = cljs.core.next.call(null,seq37272);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37273,seq37272__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37285 = arguments.length;
var i__4500__auto___37286 = (0);
while(true){
if((i__4500__auto___37286 < len__4499__auto___37285)){
args__4502__auto__.push((arguments[i__4500__auto___37286]));

var G__37287 = (i__4500__auto___37286 + (1));
i__4500__auto___37286 = G__37287;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq37274){
var G__37275 = cljs.core.first.call(null,seq37274);
var seq37274__$1 = cljs.core.next.call(null,seq37274);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37275,seq37274__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37296 = arguments.length;
var i__4500__auto___37297 = (0);
while(true){
if((i__4500__auto___37297 < len__4499__auto___37296)){
args__4502__auto__.push((arguments[i__4500__auto___37297]));

var G__37298 = (i__4500__auto___37297 + (1));
i__4500__auto___37297 = G__37298;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37163__auto__,rest__37164__auto__){
var convert_case__37165__auto__ = (function (p1__37162__37166__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__37162__37166__auto__,rest__37164__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37163__auto__,convert_case__37165__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq37288){
var G__37289 = cljs.core.first.call(null,seq37288);
var seq37288__$1 = cljs.core.next.call(null,seq37288);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37289,seq37288__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37299 = arguments.length;
var i__4500__auto___37300 = (0);
while(true){
if((i__4500__auto___37300 < len__4499__auto___37299)){
args__4502__auto__.push((arguments[i__4500__auto___37300]));

var G__37301 = (i__4500__auto___37300 + (1));
i__4500__auto___37300 = G__37301;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq37290){
var G__37291 = cljs.core.first.call(null,seq37290);
var seq37290__$1 = cljs.core.next.call(null,seq37290);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37291,seq37290__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37302 = arguments.length;
var i__4500__auto___37303 = (0);
while(true){
if((i__4500__auto___37303 < len__4499__auto___37302)){
args__4502__auto__.push((arguments[i__4500__auto___37303]));

var G__37304 = (i__4500__auto___37303 + (1));
i__4500__auto___37303 = G__37304;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq37292){
var G__37293 = cljs.core.first.call(null,seq37292);
var seq37292__$1 = cljs.core.next.call(null,seq37292);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37293,seq37292__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37305 = arguments.length;
var i__4500__auto___37306 = (0);
while(true){
if((i__4500__auto___37306 < len__4499__auto___37305)){
args__4502__auto__.push((arguments[i__4500__auto___37306]));

var G__37307 = (i__4500__auto___37306 + (1));
i__4500__auto___37306 = G__37307;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq37294){
var G__37295 = cljs.core.first.call(null,seq37294);
var seq37294__$1 = cljs.core.next.call(null,seq37294);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37295,seq37294__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37316 = arguments.length;
var i__4500__auto___37317 = (0);
while(true){
if((i__4500__auto___37317 < len__4499__auto___37316)){
args__4502__auto__.push((arguments[i__4500__auto___37317]));

var G__37318 = (i__4500__auto___37317 + (1));
i__4500__auto___37317 = G__37318;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37163__auto__,rest__37164__auto__){
var convert_case__37165__auto__ = (function (p1__37162__37166__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__37162__37166__auto__,rest__37164__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37163__auto__,convert_case__37165__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq37308){
var G__37309 = cljs.core.first.call(null,seq37308);
var seq37308__$1 = cljs.core.next.call(null,seq37308);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37309,seq37308__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37319 = arguments.length;
var i__4500__auto___37320 = (0);
while(true){
if((i__4500__auto___37320 < len__4499__auto___37319)){
args__4502__auto__.push((arguments[i__4500__auto___37320]));

var G__37321 = (i__4500__auto___37320 + (1));
i__4500__auto___37320 = G__37321;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq37310){
var G__37311 = cljs.core.first.call(null,seq37310);
var seq37310__$1 = cljs.core.next.call(null,seq37310);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37311,seq37310__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37322 = arguments.length;
var i__4500__auto___37323 = (0);
while(true){
if((i__4500__auto___37323 < len__4499__auto___37322)){
args__4502__auto__.push((arguments[i__4500__auto___37323]));

var G__37324 = (i__4500__auto___37323 + (1));
i__4500__auto___37323 = G__37324;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq37312){
var G__37313 = cljs.core.first.call(null,seq37312);
var seq37312__$1 = cljs.core.next.call(null,seq37312);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37313,seq37312__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37325 = arguments.length;
var i__4500__auto___37326 = (0);
while(true){
if((i__4500__auto___37326 < len__4499__auto___37325)){
args__4502__auto__.push((arguments[i__4500__auto___37326]));

var G__37327 = (i__4500__auto___37326 + (1));
i__4500__auto___37326 = G__37327;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq37314){
var G__37315 = cljs.core.first.call(null,seq37314);
var seq37314__$1 = cljs.core.next.call(null,seq37314);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37315,seq37314__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37336 = arguments.length;
var i__4500__auto___37337 = (0);
while(true){
if((i__4500__auto___37337 < len__4499__auto___37336)){
args__4502__auto__.push((arguments[i__4500__auto___37337]));

var G__37338 = (i__4500__auto___37337 + (1));
i__4500__auto___37337 = G__37338;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37163__auto__,rest__37164__auto__){
var convert_case__37165__auto__ = (function (p1__37162__37166__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__37162__37166__auto__,rest__37164__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37163__auto__,convert_case__37165__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq37328){
var G__37329 = cljs.core.first.call(null,seq37328);
var seq37328__$1 = cljs.core.next.call(null,seq37328);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37329,seq37328__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37339 = arguments.length;
var i__4500__auto___37340 = (0);
while(true){
if((i__4500__auto___37340 < len__4499__auto___37339)){
args__4502__auto__.push((arguments[i__4500__auto___37340]));

var G__37341 = (i__4500__auto___37340 + (1));
i__4500__auto___37340 = G__37341;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq37330){
var G__37331 = cljs.core.first.call(null,seq37330);
var seq37330__$1 = cljs.core.next.call(null,seq37330);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37331,seq37330__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37342 = arguments.length;
var i__4500__auto___37343 = (0);
while(true){
if((i__4500__auto___37343 < len__4499__auto___37342)){
args__4502__auto__.push((arguments[i__4500__auto___37343]));

var G__37344 = (i__4500__auto___37343 + (1));
i__4500__auto___37343 = G__37344;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq37332){
var G__37333 = cljs.core.first.call(null,seq37332);
var seq37332__$1 = cljs.core.next.call(null,seq37332);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37333,seq37332__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37345 = arguments.length;
var i__4500__auto___37346 = (0);
while(true){
if((i__4500__auto___37346 < len__4499__auto___37345)){
args__4502__auto__.push((arguments[i__4500__auto___37346]));

var G__37347 = (i__4500__auto___37346 + (1));
i__4500__auto___37346 = G__37347;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37168__auto__,rest__37169__auto__){
if(!((s__37168__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37168__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__37168__auto__),rest__37169__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq37334){
var G__37335 = cljs.core.first.call(null,seq37334);
var seq37334__$1 = cljs.core.next.call(null,seq37334);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37335,seq37334__$1);
});


//# sourceMappingURL=core.js.map?rel=1544380238241
