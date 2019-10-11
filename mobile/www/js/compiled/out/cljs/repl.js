// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31183){
var map__31184 = p__31183;
var map__31184__$1 = ((((!((map__31184 == null)))?(((((map__31184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31184):map__31184);
var m = map__31184__$1;
var n = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31186_31208 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31187_31209 = null;
var count__31188_31210 = (0);
var i__31189_31211 = (0);
while(true){
if((i__31189_31211 < count__31188_31210)){
var f_31212 = cljs.core._nth.call(null,chunk__31187_31209,i__31189_31211);
cljs.core.println.call(null,"  ",f_31212);


var G__31213 = seq__31186_31208;
var G__31214 = chunk__31187_31209;
var G__31215 = count__31188_31210;
var G__31216 = (i__31189_31211 + (1));
seq__31186_31208 = G__31213;
chunk__31187_31209 = G__31214;
count__31188_31210 = G__31215;
i__31189_31211 = G__31216;
continue;
} else {
var temp__5457__auto___31217 = cljs.core.seq.call(null,seq__31186_31208);
if(temp__5457__auto___31217){
var seq__31186_31218__$1 = temp__5457__auto___31217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31186_31218__$1)){
var c__4319__auto___31219 = cljs.core.chunk_first.call(null,seq__31186_31218__$1);
var G__31220 = cljs.core.chunk_rest.call(null,seq__31186_31218__$1);
var G__31221 = c__4319__auto___31219;
var G__31222 = cljs.core.count.call(null,c__4319__auto___31219);
var G__31223 = (0);
seq__31186_31208 = G__31220;
chunk__31187_31209 = G__31221;
count__31188_31210 = G__31222;
i__31189_31211 = G__31223;
continue;
} else {
var f_31224 = cljs.core.first.call(null,seq__31186_31218__$1);
cljs.core.println.call(null,"  ",f_31224);


var G__31225 = cljs.core.next.call(null,seq__31186_31218__$1);
var G__31226 = null;
var G__31227 = (0);
var G__31228 = (0);
seq__31186_31208 = G__31225;
chunk__31187_31209 = G__31226;
count__31188_31210 = G__31227;
i__31189_31211 = G__31228;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31229 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31229);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31229)))?cljs.core.second.call(null,arglists_31229):arglists_31229));
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
var seq__31190_31230 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31191_31231 = null;
var count__31192_31232 = (0);
var i__31193_31233 = (0);
while(true){
if((i__31193_31233 < count__31192_31232)){
var vec__31194_31234 = cljs.core._nth.call(null,chunk__31191_31231,i__31193_31233);
var name_31235 = cljs.core.nth.call(null,vec__31194_31234,(0),null);
var map__31197_31236 = cljs.core.nth.call(null,vec__31194_31234,(1),null);
var map__31197_31237__$1 = ((((!((map__31197_31236 == null)))?(((((map__31197_31236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31197_31236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31197_31236):map__31197_31236);
var doc_31238 = cljs.core.get.call(null,map__31197_31237__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31239 = cljs.core.get.call(null,map__31197_31237__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31235);

cljs.core.println.call(null," ",arglists_31239);

if(cljs.core.truth_(doc_31238)){
cljs.core.println.call(null," ",doc_31238);
} else {
}


var G__31240 = seq__31190_31230;
var G__31241 = chunk__31191_31231;
var G__31242 = count__31192_31232;
var G__31243 = (i__31193_31233 + (1));
seq__31190_31230 = G__31240;
chunk__31191_31231 = G__31241;
count__31192_31232 = G__31242;
i__31193_31233 = G__31243;
continue;
} else {
var temp__5457__auto___31244 = cljs.core.seq.call(null,seq__31190_31230);
if(temp__5457__auto___31244){
var seq__31190_31245__$1 = temp__5457__auto___31244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31190_31245__$1)){
var c__4319__auto___31246 = cljs.core.chunk_first.call(null,seq__31190_31245__$1);
var G__31247 = cljs.core.chunk_rest.call(null,seq__31190_31245__$1);
var G__31248 = c__4319__auto___31246;
var G__31249 = cljs.core.count.call(null,c__4319__auto___31246);
var G__31250 = (0);
seq__31190_31230 = G__31247;
chunk__31191_31231 = G__31248;
count__31192_31232 = G__31249;
i__31193_31233 = G__31250;
continue;
} else {
var vec__31199_31251 = cljs.core.first.call(null,seq__31190_31245__$1);
var name_31252 = cljs.core.nth.call(null,vec__31199_31251,(0),null);
var map__31202_31253 = cljs.core.nth.call(null,vec__31199_31251,(1),null);
var map__31202_31254__$1 = ((((!((map__31202_31253 == null)))?(((((map__31202_31253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31202_31253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31202_31253):map__31202_31253);
var doc_31255 = cljs.core.get.call(null,map__31202_31254__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31256 = cljs.core.get.call(null,map__31202_31254__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31252);

cljs.core.println.call(null," ",arglists_31256);

if(cljs.core.truth_(doc_31255)){
cljs.core.println.call(null," ",doc_31255);
} else {
}


var G__31257 = cljs.core.next.call(null,seq__31190_31245__$1);
var G__31258 = null;
var G__31259 = (0);
var G__31260 = (0);
seq__31190_31230 = G__31257;
chunk__31191_31231 = G__31258;
count__31192_31232 = G__31259;
i__31193_31233 = G__31260;
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

var seq__31204 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31205 = null;
var count__31206 = (0);
var i__31207 = (0);
while(true){
if((i__31207 < count__31206)){
var role = cljs.core._nth.call(null,chunk__31205,i__31207);
var temp__5457__auto___31261__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31261__$1)){
var spec_31262 = temp__5457__auto___31261__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31262));
} else {
}


var G__31263 = seq__31204;
var G__31264 = chunk__31205;
var G__31265 = count__31206;
var G__31266 = (i__31207 + (1));
seq__31204 = G__31263;
chunk__31205 = G__31264;
count__31206 = G__31265;
i__31207 = G__31266;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31204);
if(temp__5457__auto____$1){
var seq__31204__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31204__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31204__$1);
var G__31267 = cljs.core.chunk_rest.call(null,seq__31204__$1);
var G__31268 = c__4319__auto__;
var G__31269 = cljs.core.count.call(null,c__4319__auto__);
var G__31270 = (0);
seq__31204 = G__31267;
chunk__31205 = G__31268;
count__31206 = G__31269;
i__31207 = G__31270;
continue;
} else {
var role = cljs.core.first.call(null,seq__31204__$1);
var temp__5457__auto___31271__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31271__$2)){
var spec_31272 = temp__5457__auto___31271__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31272));
} else {
}


var G__31273 = cljs.core.next.call(null,seq__31204__$1);
var G__31274 = null;
var G__31275 = (0);
var G__31276 = (0);
seq__31204 = G__31273;
chunk__31205 = G__31274;
count__31206 = G__31275;
i__31207 = G__31276;
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

//# sourceMappingURL=repl.js.map?rel=1570412451158
