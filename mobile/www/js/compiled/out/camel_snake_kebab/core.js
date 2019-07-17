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
var len__4499__auto___22623 = arguments.length;
var i__4500__auto___22624 = (0);
while(true){
if((i__4500__auto___22624 < len__4499__auto___22623)){
args__4502__auto__.push((arguments[i__4500__auto___22624]));

var G__22625 = (i__4500__auto___22624 + (1));
i__4500__auto___22624 = G__22625;
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
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq22618){
var G__22619 = cljs.core.first.call(null,seq22618);
var seq22618__$1 = cljs.core.next.call(null,seq22618);
var G__22620 = cljs.core.first.call(null,seq22618__$1);
var seq22618__$2 = cljs.core.next.call(null,seq22618__$1);
var G__22621 = cljs.core.first.call(null,seq22618__$2);
var seq22618__$3 = cljs.core.next.call(null,seq22618__$2);
var G__22622 = cljs.core.first.call(null,seq22618__$3);
var seq22618__$4 = cljs.core.next.call(null,seq22618__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22619,G__22620,G__22621,G__22622,seq22618__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22634 = arguments.length;
var i__4500__auto___22635 = (0);
while(true){
if((i__4500__auto___22635 < len__4499__auto___22634)){
args__4502__auto__.push((arguments[i__4500__auto___22635]));

var G__22636 = (i__4500__auto___22635 + (1));
i__4500__auto___22635 = G__22636;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__22581__auto__,rest__22582__auto__){
var convert_case__22583__auto__ = (function (p1__22580__22584__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__22580__22584__auto__,rest__22582__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22581__auto__,convert_case__22583__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq22626){
var G__22627 = cljs.core.first.call(null,seq22626);
var seq22626__$1 = cljs.core.next.call(null,seq22626);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22627,seq22626__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22637 = arguments.length;
var i__4500__auto___22638 = (0);
while(true){
if((i__4500__auto___22638 < len__4499__auto___22637)){
args__4502__auto__.push((arguments[i__4500__auto___22638]));

var G__22639 = (i__4500__auto___22638 + (1));
i__4500__auto___22638 = G__22639;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq22628){
var G__22629 = cljs.core.first.call(null,seq22628);
var seq22628__$1 = cljs.core.next.call(null,seq22628);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22629,seq22628__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22640 = arguments.length;
var i__4500__auto___22641 = (0);
while(true){
if((i__4500__auto___22641 < len__4499__auto___22640)){
args__4502__auto__.push((arguments[i__4500__auto___22641]));

var G__22642 = (i__4500__auto___22641 + (1));
i__4500__auto___22641 = G__22642;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq22630){
var G__22631 = cljs.core.first.call(null,seq22630);
var seq22630__$1 = cljs.core.next.call(null,seq22630);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22631,seq22630__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22643 = arguments.length;
var i__4500__auto___22644 = (0);
while(true){
if((i__4500__auto___22644 < len__4499__auto___22643)){
args__4502__auto__.push((arguments[i__4500__auto___22644]));

var G__22645 = (i__4500__auto___22644 + (1));
i__4500__auto___22644 = G__22645;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq22632){
var G__22633 = cljs.core.first.call(null,seq22632);
var seq22632__$1 = cljs.core.next.call(null,seq22632);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22633,seq22632__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22654 = arguments.length;
var i__4500__auto___22655 = (0);
while(true){
if((i__4500__auto___22655 < len__4499__auto___22654)){
args__4502__auto__.push((arguments[i__4500__auto___22655]));

var G__22656 = (i__4500__auto___22655 + (1));
i__4500__auto___22655 = G__22656;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22581__auto__,rest__22582__auto__){
var convert_case__22583__auto__ = (function (p1__22580__22584__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__22580__22584__auto__,rest__22582__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22581__auto__,convert_case__22583__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq22646){
var G__22647 = cljs.core.first.call(null,seq22646);
var seq22646__$1 = cljs.core.next.call(null,seq22646);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22647,seq22646__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22657 = arguments.length;
var i__4500__auto___22658 = (0);
while(true){
if((i__4500__auto___22658 < len__4499__auto___22657)){
args__4502__auto__.push((arguments[i__4500__auto___22658]));

var G__22659 = (i__4500__auto___22658 + (1));
i__4500__auto___22658 = G__22659;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq22648){
var G__22649 = cljs.core.first.call(null,seq22648);
var seq22648__$1 = cljs.core.next.call(null,seq22648);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22649,seq22648__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22660 = arguments.length;
var i__4500__auto___22661 = (0);
while(true){
if((i__4500__auto___22661 < len__4499__auto___22660)){
args__4502__auto__.push((arguments[i__4500__auto___22661]));

var G__22662 = (i__4500__auto___22661 + (1));
i__4500__auto___22661 = G__22662;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq22650){
var G__22651 = cljs.core.first.call(null,seq22650);
var seq22650__$1 = cljs.core.next.call(null,seq22650);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22651,seq22650__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22663 = arguments.length;
var i__4500__auto___22664 = (0);
while(true){
if((i__4500__auto___22664 < len__4499__auto___22663)){
args__4502__auto__.push((arguments[i__4500__auto___22664]));

var G__22665 = (i__4500__auto___22664 + (1));
i__4500__auto___22664 = G__22665;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq22652){
var G__22653 = cljs.core.first.call(null,seq22652);
var seq22652__$1 = cljs.core.next.call(null,seq22652);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22653,seq22652__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22674 = arguments.length;
var i__4500__auto___22675 = (0);
while(true){
if((i__4500__auto___22675 < len__4499__auto___22674)){
args__4502__auto__.push((arguments[i__4500__auto___22675]));

var G__22676 = (i__4500__auto___22675 + (1));
i__4500__auto___22675 = G__22676;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__22581__auto__,rest__22582__auto__){
var convert_case__22583__auto__ = (function (p1__22580__22584__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__22580__22584__auto__,rest__22582__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22581__auto__,convert_case__22583__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq22666){
var G__22667 = cljs.core.first.call(null,seq22666);
var seq22666__$1 = cljs.core.next.call(null,seq22666);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22667,seq22666__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22677 = arguments.length;
var i__4500__auto___22678 = (0);
while(true){
if((i__4500__auto___22678 < len__4499__auto___22677)){
args__4502__auto__.push((arguments[i__4500__auto___22678]));

var G__22679 = (i__4500__auto___22678 + (1));
i__4500__auto___22678 = G__22679;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq22668){
var G__22669 = cljs.core.first.call(null,seq22668);
var seq22668__$1 = cljs.core.next.call(null,seq22668);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22669,seq22668__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22680 = arguments.length;
var i__4500__auto___22681 = (0);
while(true){
if((i__4500__auto___22681 < len__4499__auto___22680)){
args__4502__auto__.push((arguments[i__4500__auto___22681]));

var G__22682 = (i__4500__auto___22681 + (1));
i__4500__auto___22681 = G__22682;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq22670){
var G__22671 = cljs.core.first.call(null,seq22670);
var seq22670__$1 = cljs.core.next.call(null,seq22670);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22671,seq22670__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22683 = arguments.length;
var i__4500__auto___22684 = (0);
while(true){
if((i__4500__auto___22684 < len__4499__auto___22683)){
args__4502__auto__.push((arguments[i__4500__auto___22684]));

var G__22685 = (i__4500__auto___22684 + (1));
i__4500__auto___22684 = G__22685;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq22672){
var G__22673 = cljs.core.first.call(null,seq22672);
var seq22672__$1 = cljs.core.next.call(null,seq22672);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22673,seq22672__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22694 = arguments.length;
var i__4500__auto___22695 = (0);
while(true){
if((i__4500__auto___22695 < len__4499__auto___22694)){
args__4502__auto__.push((arguments[i__4500__auto___22695]));

var G__22696 = (i__4500__auto___22695 + (1));
i__4500__auto___22695 = G__22696;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__22581__auto__,rest__22582__auto__){
var convert_case__22583__auto__ = (function (p1__22580__22584__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__22580__22584__auto__,rest__22582__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22581__auto__,convert_case__22583__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq22686){
var G__22687 = cljs.core.first.call(null,seq22686);
var seq22686__$1 = cljs.core.next.call(null,seq22686);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22687,seq22686__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22697 = arguments.length;
var i__4500__auto___22698 = (0);
while(true){
if((i__4500__auto___22698 < len__4499__auto___22697)){
args__4502__auto__.push((arguments[i__4500__auto___22698]));

var G__22699 = (i__4500__auto___22698 + (1));
i__4500__auto___22698 = G__22699;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq22688){
var G__22689 = cljs.core.first.call(null,seq22688);
var seq22688__$1 = cljs.core.next.call(null,seq22688);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22689,seq22688__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22700 = arguments.length;
var i__4500__auto___22701 = (0);
while(true){
if((i__4500__auto___22701 < len__4499__auto___22700)){
args__4502__auto__.push((arguments[i__4500__auto___22701]));

var G__22702 = (i__4500__auto___22701 + (1));
i__4500__auto___22701 = G__22702;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq22690){
var G__22691 = cljs.core.first.call(null,seq22690);
var seq22690__$1 = cljs.core.next.call(null,seq22690);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22691,seq22690__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22703 = arguments.length;
var i__4500__auto___22704 = (0);
while(true){
if((i__4500__auto___22704 < len__4499__auto___22703)){
args__4502__auto__.push((arguments[i__4500__auto___22704]));

var G__22705 = (i__4500__auto___22704 + (1));
i__4500__auto___22704 = G__22705;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq22692){
var G__22693 = cljs.core.first.call(null,seq22692);
var seq22692__$1 = cljs.core.next.call(null,seq22692);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22693,seq22692__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22714 = arguments.length;
var i__4500__auto___22715 = (0);
while(true){
if((i__4500__auto___22715 < len__4499__auto___22714)){
args__4502__auto__.push((arguments[i__4500__auto___22715]));

var G__22716 = (i__4500__auto___22715 + (1));
i__4500__auto___22715 = G__22716;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22581__auto__,rest__22582__auto__){
var convert_case__22583__auto__ = (function (p1__22580__22584__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__22580__22584__auto__,rest__22582__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22581__auto__,convert_case__22583__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq22706){
var G__22707 = cljs.core.first.call(null,seq22706);
var seq22706__$1 = cljs.core.next.call(null,seq22706);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22707,seq22706__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22717 = arguments.length;
var i__4500__auto___22718 = (0);
while(true){
if((i__4500__auto___22718 < len__4499__auto___22717)){
args__4502__auto__.push((arguments[i__4500__auto___22718]));

var G__22719 = (i__4500__auto___22718 + (1));
i__4500__auto___22718 = G__22719;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq22708){
var G__22709 = cljs.core.first.call(null,seq22708);
var seq22708__$1 = cljs.core.next.call(null,seq22708);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22709,seq22708__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22720 = arguments.length;
var i__4500__auto___22721 = (0);
while(true){
if((i__4500__auto___22721 < len__4499__auto___22720)){
args__4502__auto__.push((arguments[i__4500__auto___22721]));

var G__22722 = (i__4500__auto___22721 + (1));
i__4500__auto___22721 = G__22722;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq22710){
var G__22711 = cljs.core.first.call(null,seq22710);
var seq22710__$1 = cljs.core.next.call(null,seq22710);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22711,seq22710__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22723 = arguments.length;
var i__4500__auto___22724 = (0);
while(true){
if((i__4500__auto___22724 < len__4499__auto___22723)){
args__4502__auto__.push((arguments[i__4500__auto___22724]));

var G__22725 = (i__4500__auto___22724 + (1));
i__4500__auto___22724 = G__22725;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq22712){
var G__22713 = cljs.core.first.call(null,seq22712);
var seq22712__$1 = cljs.core.next.call(null,seq22712);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22713,seq22712__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22734 = arguments.length;
var i__4500__auto___22735 = (0);
while(true){
if((i__4500__auto___22735 < len__4499__auto___22734)){
args__4502__auto__.push((arguments[i__4500__auto___22735]));

var G__22736 = (i__4500__auto___22735 + (1));
i__4500__auto___22735 = G__22736;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22581__auto__,rest__22582__auto__){
var convert_case__22583__auto__ = (function (p1__22580__22584__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__22580__22584__auto__,rest__22582__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22581__auto__,convert_case__22583__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq22726){
var G__22727 = cljs.core.first.call(null,seq22726);
var seq22726__$1 = cljs.core.next.call(null,seq22726);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22727,seq22726__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22737 = arguments.length;
var i__4500__auto___22738 = (0);
while(true){
if((i__4500__auto___22738 < len__4499__auto___22737)){
args__4502__auto__.push((arguments[i__4500__auto___22738]));

var G__22739 = (i__4500__auto___22738 + (1));
i__4500__auto___22738 = G__22739;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq22728){
var G__22729 = cljs.core.first.call(null,seq22728);
var seq22728__$1 = cljs.core.next.call(null,seq22728);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22729,seq22728__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22740 = arguments.length;
var i__4500__auto___22741 = (0);
while(true){
if((i__4500__auto___22741 < len__4499__auto___22740)){
args__4502__auto__.push((arguments[i__4500__auto___22741]));

var G__22742 = (i__4500__auto___22741 + (1));
i__4500__auto___22741 = G__22742;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq22730){
var G__22731 = cljs.core.first.call(null,seq22730);
var seq22730__$1 = cljs.core.next.call(null,seq22730);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22731,seq22730__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22743 = arguments.length;
var i__4500__auto___22744 = (0);
while(true){
if((i__4500__auto___22744 < len__4499__auto___22743)){
args__4502__auto__.push((arguments[i__4500__auto___22744]));

var G__22745 = (i__4500__auto___22744 + (1));
i__4500__auto___22744 = G__22745;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq22732){
var G__22733 = cljs.core.first.call(null,seq22732);
var seq22732__$1 = cljs.core.next.call(null,seq22732);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22733,seq22732__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22754 = arguments.length;
var i__4500__auto___22755 = (0);
while(true){
if((i__4500__auto___22755 < len__4499__auto___22754)){
args__4502__auto__.push((arguments[i__4500__auto___22755]));

var G__22756 = (i__4500__auto___22755 + (1));
i__4500__auto___22755 = G__22756;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22581__auto__,rest__22582__auto__){
var convert_case__22583__auto__ = (function (p1__22580__22584__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__22580__22584__auto__,rest__22582__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22581__auto__,convert_case__22583__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq22746){
var G__22747 = cljs.core.first.call(null,seq22746);
var seq22746__$1 = cljs.core.next.call(null,seq22746);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22747,seq22746__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22757 = arguments.length;
var i__4500__auto___22758 = (0);
while(true){
if((i__4500__auto___22758 < len__4499__auto___22757)){
args__4502__auto__.push((arguments[i__4500__auto___22758]));

var G__22759 = (i__4500__auto___22758 + (1));
i__4500__auto___22758 = G__22759;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq22748){
var G__22749 = cljs.core.first.call(null,seq22748);
var seq22748__$1 = cljs.core.next.call(null,seq22748);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22749,seq22748__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22760 = arguments.length;
var i__4500__auto___22761 = (0);
while(true){
if((i__4500__auto___22761 < len__4499__auto___22760)){
args__4502__auto__.push((arguments[i__4500__auto___22761]));

var G__22762 = (i__4500__auto___22761 + (1));
i__4500__auto___22761 = G__22762;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq22750){
var G__22751 = cljs.core.first.call(null,seq22750);
var seq22750__$1 = cljs.core.next.call(null,seq22750);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22751,seq22750__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22763 = arguments.length;
var i__4500__auto___22764 = (0);
while(true){
if((i__4500__auto___22764 < len__4499__auto___22763)){
args__4502__auto__.push((arguments[i__4500__auto___22764]));

var G__22765 = (i__4500__auto___22764 + (1));
i__4500__auto___22764 = G__22765;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22586__auto__,rest__22587__auto__){
if(!((s__22586__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22586__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__22586__auto__),rest__22587__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq22752){
var G__22753 = cljs.core.first.call(null,seq22752);
var seq22752__$1 = cljs.core.next.call(null,seq22752);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22753,seq22752__$1);
});


//# sourceMappingURL=core.js.map?rel=1556144016294
