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
var len__4499__auto___22631 = arguments.length;
var i__4500__auto___22632 = (0);
while(true){
if((i__4500__auto___22632 < len__4499__auto___22631)){
args__4502__auto__.push((arguments[i__4500__auto___22632]));

var G__22633 = (i__4500__auto___22632 + (1));
i__4500__auto___22632 = G__22633;
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
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq22626){
var G__22627 = cljs.core.first.call(null,seq22626);
var seq22626__$1 = cljs.core.next.call(null,seq22626);
var G__22628 = cljs.core.first.call(null,seq22626__$1);
var seq22626__$2 = cljs.core.next.call(null,seq22626__$1);
var G__22629 = cljs.core.first.call(null,seq22626__$2);
var seq22626__$3 = cljs.core.next.call(null,seq22626__$2);
var G__22630 = cljs.core.first.call(null,seq22626__$3);
var seq22626__$4 = cljs.core.next.call(null,seq22626__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22627,G__22628,G__22629,G__22630,seq22626__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22642 = arguments.length;
var i__4500__auto___22643 = (0);
while(true){
if((i__4500__auto___22643 < len__4499__auto___22642)){
args__4502__auto__.push((arguments[i__4500__auto___22643]));

var G__22644 = (i__4500__auto___22643 + (1));
i__4500__auto___22643 = G__22644;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__22589__auto__,rest__22590__auto__){
var convert_case__22591__auto__ = (function (p1__22588__22592__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__22588__22592__auto__,rest__22590__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22589__auto__,convert_case__22591__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq22634){
var G__22635 = cljs.core.first.call(null,seq22634);
var seq22634__$1 = cljs.core.next.call(null,seq22634);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22635,seq22634__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22645 = arguments.length;
var i__4500__auto___22646 = (0);
while(true){
if((i__4500__auto___22646 < len__4499__auto___22645)){
args__4502__auto__.push((arguments[i__4500__auto___22646]));

var G__22647 = (i__4500__auto___22646 + (1));
i__4500__auto___22646 = G__22647;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq22636){
var G__22637 = cljs.core.first.call(null,seq22636);
var seq22636__$1 = cljs.core.next.call(null,seq22636);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22637,seq22636__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22648 = arguments.length;
var i__4500__auto___22649 = (0);
while(true){
if((i__4500__auto___22649 < len__4499__auto___22648)){
args__4502__auto__.push((arguments[i__4500__auto___22649]));

var G__22650 = (i__4500__auto___22649 + (1));
i__4500__auto___22649 = G__22650;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq22638){
var G__22639 = cljs.core.first.call(null,seq22638);
var seq22638__$1 = cljs.core.next.call(null,seq22638);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22639,seq22638__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22651 = arguments.length;
var i__4500__auto___22652 = (0);
while(true){
if((i__4500__auto___22652 < len__4499__auto___22651)){
args__4502__auto__.push((arguments[i__4500__auto___22652]));

var G__22653 = (i__4500__auto___22652 + (1));
i__4500__auto___22652 = G__22653;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq22640){
var G__22641 = cljs.core.first.call(null,seq22640);
var seq22640__$1 = cljs.core.next.call(null,seq22640);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22641,seq22640__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22662 = arguments.length;
var i__4500__auto___22663 = (0);
while(true){
if((i__4500__auto___22663 < len__4499__auto___22662)){
args__4502__auto__.push((arguments[i__4500__auto___22663]));

var G__22664 = (i__4500__auto___22663 + (1));
i__4500__auto___22663 = G__22664;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22589__auto__,rest__22590__auto__){
var convert_case__22591__auto__ = (function (p1__22588__22592__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__22588__22592__auto__,rest__22590__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22589__auto__,convert_case__22591__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq22654){
var G__22655 = cljs.core.first.call(null,seq22654);
var seq22654__$1 = cljs.core.next.call(null,seq22654);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22655,seq22654__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22665 = arguments.length;
var i__4500__auto___22666 = (0);
while(true){
if((i__4500__auto___22666 < len__4499__auto___22665)){
args__4502__auto__.push((arguments[i__4500__auto___22666]));

var G__22667 = (i__4500__auto___22666 + (1));
i__4500__auto___22666 = G__22667;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq22656){
var G__22657 = cljs.core.first.call(null,seq22656);
var seq22656__$1 = cljs.core.next.call(null,seq22656);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22657,seq22656__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22668 = arguments.length;
var i__4500__auto___22669 = (0);
while(true){
if((i__4500__auto___22669 < len__4499__auto___22668)){
args__4502__auto__.push((arguments[i__4500__auto___22669]));

var G__22670 = (i__4500__auto___22669 + (1));
i__4500__auto___22669 = G__22670;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq22658){
var G__22659 = cljs.core.first.call(null,seq22658);
var seq22658__$1 = cljs.core.next.call(null,seq22658);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22659,seq22658__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22671 = arguments.length;
var i__4500__auto___22672 = (0);
while(true){
if((i__4500__auto___22672 < len__4499__auto___22671)){
args__4502__auto__.push((arguments[i__4500__auto___22672]));

var G__22673 = (i__4500__auto___22672 + (1));
i__4500__auto___22672 = G__22673;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq22660){
var G__22661 = cljs.core.first.call(null,seq22660);
var seq22660__$1 = cljs.core.next.call(null,seq22660);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22661,seq22660__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22682 = arguments.length;
var i__4500__auto___22683 = (0);
while(true){
if((i__4500__auto___22683 < len__4499__auto___22682)){
args__4502__auto__.push((arguments[i__4500__auto___22683]));

var G__22684 = (i__4500__auto___22683 + (1));
i__4500__auto___22683 = G__22684;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__22589__auto__,rest__22590__auto__){
var convert_case__22591__auto__ = (function (p1__22588__22592__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__22588__22592__auto__,rest__22590__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22589__auto__,convert_case__22591__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq22674){
var G__22675 = cljs.core.first.call(null,seq22674);
var seq22674__$1 = cljs.core.next.call(null,seq22674);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22675,seq22674__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22685 = arguments.length;
var i__4500__auto___22686 = (0);
while(true){
if((i__4500__auto___22686 < len__4499__auto___22685)){
args__4502__auto__.push((arguments[i__4500__auto___22686]));

var G__22687 = (i__4500__auto___22686 + (1));
i__4500__auto___22686 = G__22687;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq22676){
var G__22677 = cljs.core.first.call(null,seq22676);
var seq22676__$1 = cljs.core.next.call(null,seq22676);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22677,seq22676__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22688 = arguments.length;
var i__4500__auto___22689 = (0);
while(true){
if((i__4500__auto___22689 < len__4499__auto___22688)){
args__4502__auto__.push((arguments[i__4500__auto___22689]));

var G__22690 = (i__4500__auto___22689 + (1));
i__4500__auto___22689 = G__22690;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq22678){
var G__22679 = cljs.core.first.call(null,seq22678);
var seq22678__$1 = cljs.core.next.call(null,seq22678);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22679,seq22678__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22691 = arguments.length;
var i__4500__auto___22692 = (0);
while(true){
if((i__4500__auto___22692 < len__4499__auto___22691)){
args__4502__auto__.push((arguments[i__4500__auto___22692]));

var G__22693 = (i__4500__auto___22692 + (1));
i__4500__auto___22692 = G__22693;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq22680){
var G__22681 = cljs.core.first.call(null,seq22680);
var seq22680__$1 = cljs.core.next.call(null,seq22680);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22681,seq22680__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22702 = arguments.length;
var i__4500__auto___22703 = (0);
while(true){
if((i__4500__auto___22703 < len__4499__auto___22702)){
args__4502__auto__.push((arguments[i__4500__auto___22703]));

var G__22704 = (i__4500__auto___22703 + (1));
i__4500__auto___22703 = G__22704;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__22589__auto__,rest__22590__auto__){
var convert_case__22591__auto__ = (function (p1__22588__22592__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__22588__22592__auto__,rest__22590__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22589__auto__,convert_case__22591__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq22694){
var G__22695 = cljs.core.first.call(null,seq22694);
var seq22694__$1 = cljs.core.next.call(null,seq22694);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22695,seq22694__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22705 = arguments.length;
var i__4500__auto___22706 = (0);
while(true){
if((i__4500__auto___22706 < len__4499__auto___22705)){
args__4502__auto__.push((arguments[i__4500__auto___22706]));

var G__22707 = (i__4500__auto___22706 + (1));
i__4500__auto___22706 = G__22707;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq22696){
var G__22697 = cljs.core.first.call(null,seq22696);
var seq22696__$1 = cljs.core.next.call(null,seq22696);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22697,seq22696__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22708 = arguments.length;
var i__4500__auto___22709 = (0);
while(true){
if((i__4500__auto___22709 < len__4499__auto___22708)){
args__4502__auto__.push((arguments[i__4500__auto___22709]));

var G__22710 = (i__4500__auto___22709 + (1));
i__4500__auto___22709 = G__22710;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq22698){
var G__22699 = cljs.core.first.call(null,seq22698);
var seq22698__$1 = cljs.core.next.call(null,seq22698);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22699,seq22698__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22711 = arguments.length;
var i__4500__auto___22712 = (0);
while(true){
if((i__4500__auto___22712 < len__4499__auto___22711)){
args__4502__auto__.push((arguments[i__4500__auto___22712]));

var G__22713 = (i__4500__auto___22712 + (1));
i__4500__auto___22712 = G__22713;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq22700){
var G__22701 = cljs.core.first.call(null,seq22700);
var seq22700__$1 = cljs.core.next.call(null,seq22700);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22701,seq22700__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22722 = arguments.length;
var i__4500__auto___22723 = (0);
while(true){
if((i__4500__auto___22723 < len__4499__auto___22722)){
args__4502__auto__.push((arguments[i__4500__auto___22723]));

var G__22724 = (i__4500__auto___22723 + (1));
i__4500__auto___22723 = G__22724;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22589__auto__,rest__22590__auto__){
var convert_case__22591__auto__ = (function (p1__22588__22592__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__22588__22592__auto__,rest__22590__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22589__auto__,convert_case__22591__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq22714){
var G__22715 = cljs.core.first.call(null,seq22714);
var seq22714__$1 = cljs.core.next.call(null,seq22714);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22715,seq22714__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22725 = arguments.length;
var i__4500__auto___22726 = (0);
while(true){
if((i__4500__auto___22726 < len__4499__auto___22725)){
args__4502__auto__.push((arguments[i__4500__auto___22726]));

var G__22727 = (i__4500__auto___22726 + (1));
i__4500__auto___22726 = G__22727;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq22716){
var G__22717 = cljs.core.first.call(null,seq22716);
var seq22716__$1 = cljs.core.next.call(null,seq22716);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22717,seq22716__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22728 = arguments.length;
var i__4500__auto___22729 = (0);
while(true){
if((i__4500__auto___22729 < len__4499__auto___22728)){
args__4502__auto__.push((arguments[i__4500__auto___22729]));

var G__22730 = (i__4500__auto___22729 + (1));
i__4500__auto___22729 = G__22730;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq22718){
var G__22719 = cljs.core.first.call(null,seq22718);
var seq22718__$1 = cljs.core.next.call(null,seq22718);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22719,seq22718__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22731 = arguments.length;
var i__4500__auto___22732 = (0);
while(true){
if((i__4500__auto___22732 < len__4499__auto___22731)){
args__4502__auto__.push((arguments[i__4500__auto___22732]));

var G__22733 = (i__4500__auto___22732 + (1));
i__4500__auto___22732 = G__22733;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq22720){
var G__22721 = cljs.core.first.call(null,seq22720);
var seq22720__$1 = cljs.core.next.call(null,seq22720);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22721,seq22720__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22742 = arguments.length;
var i__4500__auto___22743 = (0);
while(true){
if((i__4500__auto___22743 < len__4499__auto___22742)){
args__4502__auto__.push((arguments[i__4500__auto___22743]));

var G__22744 = (i__4500__auto___22743 + (1));
i__4500__auto___22743 = G__22744;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22589__auto__,rest__22590__auto__){
var convert_case__22591__auto__ = (function (p1__22588__22592__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__22588__22592__auto__,rest__22590__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22589__auto__,convert_case__22591__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq22734){
var G__22735 = cljs.core.first.call(null,seq22734);
var seq22734__$1 = cljs.core.next.call(null,seq22734);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22735,seq22734__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22745 = arguments.length;
var i__4500__auto___22746 = (0);
while(true){
if((i__4500__auto___22746 < len__4499__auto___22745)){
args__4502__auto__.push((arguments[i__4500__auto___22746]));

var G__22747 = (i__4500__auto___22746 + (1));
i__4500__auto___22746 = G__22747;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq22736){
var G__22737 = cljs.core.first.call(null,seq22736);
var seq22736__$1 = cljs.core.next.call(null,seq22736);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22737,seq22736__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22748 = arguments.length;
var i__4500__auto___22749 = (0);
while(true){
if((i__4500__auto___22749 < len__4499__auto___22748)){
args__4502__auto__.push((arguments[i__4500__auto___22749]));

var G__22750 = (i__4500__auto___22749 + (1));
i__4500__auto___22749 = G__22750;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq22738){
var G__22739 = cljs.core.first.call(null,seq22738);
var seq22738__$1 = cljs.core.next.call(null,seq22738);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22739,seq22738__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22751 = arguments.length;
var i__4500__auto___22752 = (0);
while(true){
if((i__4500__auto___22752 < len__4499__auto___22751)){
args__4502__auto__.push((arguments[i__4500__auto___22752]));

var G__22753 = (i__4500__auto___22752 + (1));
i__4500__auto___22752 = G__22753;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq22740){
var G__22741 = cljs.core.first.call(null,seq22740);
var seq22740__$1 = cljs.core.next.call(null,seq22740);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22741,seq22740__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22762 = arguments.length;
var i__4500__auto___22763 = (0);
while(true){
if((i__4500__auto___22763 < len__4499__auto___22762)){
args__4502__auto__.push((arguments[i__4500__auto___22763]));

var G__22764 = (i__4500__auto___22763 + (1));
i__4500__auto___22763 = G__22764;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22589__auto__,rest__22590__auto__){
var convert_case__22591__auto__ = (function (p1__22588__22592__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__22588__22592__auto__,rest__22590__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22589__auto__,convert_case__22591__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq22754){
var G__22755 = cljs.core.first.call(null,seq22754);
var seq22754__$1 = cljs.core.next.call(null,seq22754);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22755,seq22754__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22765 = arguments.length;
var i__4500__auto___22766 = (0);
while(true){
if((i__4500__auto___22766 < len__4499__auto___22765)){
args__4502__auto__.push((arguments[i__4500__auto___22766]));

var G__22767 = (i__4500__auto___22766 + (1));
i__4500__auto___22766 = G__22767;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq22756){
var G__22757 = cljs.core.first.call(null,seq22756);
var seq22756__$1 = cljs.core.next.call(null,seq22756);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22757,seq22756__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22768 = arguments.length;
var i__4500__auto___22769 = (0);
while(true){
if((i__4500__auto___22769 < len__4499__auto___22768)){
args__4502__auto__.push((arguments[i__4500__auto___22769]));

var G__22770 = (i__4500__auto___22769 + (1));
i__4500__auto___22769 = G__22770;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq22758){
var G__22759 = cljs.core.first.call(null,seq22758);
var seq22758__$1 = cljs.core.next.call(null,seq22758);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22759,seq22758__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22771 = arguments.length;
var i__4500__auto___22772 = (0);
while(true){
if((i__4500__auto___22772 < len__4499__auto___22771)){
args__4502__auto__.push((arguments[i__4500__auto___22772]));

var G__22773 = (i__4500__auto___22772 + (1));
i__4500__auto___22772 = G__22773;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22594__auto__,rest__22595__auto__){
if(!((s__22594__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__22594__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__22594__auto__),rest__22595__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq22760){
var G__22761 = cljs.core.first.call(null,seq22760);
var seq22760__$1 = cljs.core.next.call(null,seq22760);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22761,seq22760__$1);
});


//# sourceMappingURL=core.js.map?rel=1570412434604
