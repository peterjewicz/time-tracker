// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31202){
var map__31203 = p__31202;
var map__31203__$1 = ((((!((map__31203 == null)))?(((((map__31203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31203):map__31203);
var m = map__31203__$1;
var n = cljs.core.get.call(null,map__31203__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31203__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31205_31227 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31206_31228 = null;
var count__31207_31229 = (0);
var i__31208_31230 = (0);
while(true){
if((i__31208_31230 < count__31207_31229)){
var f_31231 = cljs.core._nth.call(null,chunk__31206_31228,i__31208_31230);
cljs.core.println.call(null,"  ",f_31231);


var G__31232 = seq__31205_31227;
var G__31233 = chunk__31206_31228;
var G__31234 = count__31207_31229;
var G__31235 = (i__31208_31230 + (1));
seq__31205_31227 = G__31232;
chunk__31206_31228 = G__31233;
count__31207_31229 = G__31234;
i__31208_31230 = G__31235;
continue;
} else {
var temp__5457__auto___31236 = cljs.core.seq.call(null,seq__31205_31227);
if(temp__5457__auto___31236){
var seq__31205_31237__$1 = temp__5457__auto___31236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31205_31237__$1)){
var c__4319__auto___31238 = cljs.core.chunk_first.call(null,seq__31205_31237__$1);
var G__31239 = cljs.core.chunk_rest.call(null,seq__31205_31237__$1);
var G__31240 = c__4319__auto___31238;
var G__31241 = cljs.core.count.call(null,c__4319__auto___31238);
var G__31242 = (0);
seq__31205_31227 = G__31239;
chunk__31206_31228 = G__31240;
count__31207_31229 = G__31241;
i__31208_31230 = G__31242;
continue;
} else {
var f_31243 = cljs.core.first.call(null,seq__31205_31237__$1);
cljs.core.println.call(null,"  ",f_31243);


var G__31244 = cljs.core.next.call(null,seq__31205_31237__$1);
var G__31245 = null;
var G__31246 = (0);
var G__31247 = (0);
seq__31205_31227 = G__31244;
chunk__31206_31228 = G__31245;
count__31207_31229 = G__31246;
i__31208_31230 = G__31247;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31248 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31248);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31248)))?cljs.core.second.call(null,arglists_31248):arglists_31248));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31209_31249 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31210_31250 = null;
var count__31211_31251 = (0);
var i__31212_31252 = (0);
while(true){
if((i__31212_31252 < count__31211_31251)){
var vec__31213_31253 = cljs.core._nth.call(null,chunk__31210_31250,i__31212_31252);
var name_31254 = cljs.core.nth.call(null,vec__31213_31253,(0),null);
var map__31216_31255 = cljs.core.nth.call(null,vec__31213_31253,(1),null);
var map__31216_31256__$1 = ((((!((map__31216_31255 == null)))?(((((map__31216_31255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31216_31255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31216_31255):map__31216_31255);
var doc_31257 = cljs.core.get.call(null,map__31216_31256__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31258 = cljs.core.get.call(null,map__31216_31256__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31254);

cljs.core.println.call(null," ",arglists_31258);

if(cljs.core.truth_(doc_31257)){
cljs.core.println.call(null," ",doc_31257);
} else {
}


var G__31259 = seq__31209_31249;
var G__31260 = chunk__31210_31250;
var G__31261 = count__31211_31251;
var G__31262 = (i__31212_31252 + (1));
seq__31209_31249 = G__31259;
chunk__31210_31250 = G__31260;
count__31211_31251 = G__31261;
i__31212_31252 = G__31262;
continue;
} else {
var temp__5457__auto___31263 = cljs.core.seq.call(null,seq__31209_31249);
if(temp__5457__auto___31263){
var seq__31209_31264__$1 = temp__5457__auto___31263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31209_31264__$1)){
var c__4319__auto___31265 = cljs.core.chunk_first.call(null,seq__31209_31264__$1);
var G__31266 = cljs.core.chunk_rest.call(null,seq__31209_31264__$1);
var G__31267 = c__4319__auto___31265;
var G__31268 = cljs.core.count.call(null,c__4319__auto___31265);
var G__31269 = (0);
seq__31209_31249 = G__31266;
chunk__31210_31250 = G__31267;
count__31211_31251 = G__31268;
i__31212_31252 = G__31269;
continue;
} else {
var vec__31218_31270 = cljs.core.first.call(null,seq__31209_31264__$1);
var name_31271 = cljs.core.nth.call(null,vec__31218_31270,(0),null);
var map__31221_31272 = cljs.core.nth.call(null,vec__31218_31270,(1),null);
var map__31221_31273__$1 = ((((!((map__31221_31272 == null)))?(((((map__31221_31272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31221_31272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31221_31272):map__31221_31272);
var doc_31274 = cljs.core.get.call(null,map__31221_31273__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31275 = cljs.core.get.call(null,map__31221_31273__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31271);

cljs.core.println.call(null," ",arglists_31275);

if(cljs.core.truth_(doc_31274)){
cljs.core.println.call(null," ",doc_31274);
} else {
}


var G__31276 = cljs.core.next.call(null,seq__31209_31264__$1);
var G__31277 = null;
var G__31278 = (0);
var G__31279 = (0);
seq__31209_31249 = G__31276;
chunk__31210_31250 = G__31277;
count__31211_31251 = G__31278;
i__31212_31252 = G__31279;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__31223 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31224 = null;
var count__31225 = (0);
var i__31226 = (0);
while(true){
if((i__31226 < count__31225)){
var role = cljs.core._nth.call(null,chunk__31224,i__31226);
var temp__5457__auto___31280__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31280__$1)){
var spec_31281 = temp__5457__auto___31280__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31281));
} else {
}


var G__31282 = seq__31223;
var G__31283 = chunk__31224;
var G__31284 = count__31225;
var G__31285 = (i__31226 + (1));
seq__31223 = G__31282;
chunk__31224 = G__31283;
count__31225 = G__31284;
i__31226 = G__31285;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31223);
if(temp__5457__auto____$1){
var seq__31223__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31223__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31223__$1);
var G__31286 = cljs.core.chunk_rest.call(null,seq__31223__$1);
var G__31287 = c__4319__auto__;
var G__31288 = cljs.core.count.call(null,c__4319__auto__);
var G__31289 = (0);
seq__31223 = G__31286;
chunk__31224 = G__31287;
count__31225 = G__31288;
i__31226 = G__31289;
continue;
} else {
var role = cljs.core.first.call(null,seq__31223__$1);
var temp__5457__auto___31290__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31290__$2)){
var spec_31291 = temp__5457__auto___31290__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31291));
} else {
}


var G__31292 = cljs.core.next.call(null,seq__31223__$1);
var G__31293 = null;
var G__31294 = (0);
var G__31295 = (0);
seq__31223 = G__31292;
chunk__31224 = G__31293;
count__31225 = G__31294;
i__31226 = G__31295;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1582304854208
