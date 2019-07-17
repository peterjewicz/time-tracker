// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31175){
var map__31176 = p__31175;
var map__31176__$1 = ((((!((map__31176 == null)))?(((((map__31176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31176):map__31176);
var m = map__31176__$1;
var n = cljs.core.get.call(null,map__31176__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31176__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31178_31200 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31179_31201 = null;
var count__31180_31202 = (0);
var i__31181_31203 = (0);
while(true){
if((i__31181_31203 < count__31180_31202)){
var f_31204 = cljs.core._nth.call(null,chunk__31179_31201,i__31181_31203);
cljs.core.println.call(null,"  ",f_31204);


var G__31205 = seq__31178_31200;
var G__31206 = chunk__31179_31201;
var G__31207 = count__31180_31202;
var G__31208 = (i__31181_31203 + (1));
seq__31178_31200 = G__31205;
chunk__31179_31201 = G__31206;
count__31180_31202 = G__31207;
i__31181_31203 = G__31208;
continue;
} else {
var temp__5457__auto___31209 = cljs.core.seq.call(null,seq__31178_31200);
if(temp__5457__auto___31209){
var seq__31178_31210__$1 = temp__5457__auto___31209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31178_31210__$1)){
var c__4319__auto___31211 = cljs.core.chunk_first.call(null,seq__31178_31210__$1);
var G__31212 = cljs.core.chunk_rest.call(null,seq__31178_31210__$1);
var G__31213 = c__4319__auto___31211;
var G__31214 = cljs.core.count.call(null,c__4319__auto___31211);
var G__31215 = (0);
seq__31178_31200 = G__31212;
chunk__31179_31201 = G__31213;
count__31180_31202 = G__31214;
i__31181_31203 = G__31215;
continue;
} else {
var f_31216 = cljs.core.first.call(null,seq__31178_31210__$1);
cljs.core.println.call(null,"  ",f_31216);


var G__31217 = cljs.core.next.call(null,seq__31178_31210__$1);
var G__31218 = null;
var G__31219 = (0);
var G__31220 = (0);
seq__31178_31200 = G__31217;
chunk__31179_31201 = G__31218;
count__31180_31202 = G__31219;
i__31181_31203 = G__31220;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31221 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31221);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31221)))?cljs.core.second.call(null,arglists_31221):arglists_31221));
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
var seq__31182_31222 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31183_31223 = null;
var count__31184_31224 = (0);
var i__31185_31225 = (0);
while(true){
if((i__31185_31225 < count__31184_31224)){
var vec__31186_31226 = cljs.core._nth.call(null,chunk__31183_31223,i__31185_31225);
var name_31227 = cljs.core.nth.call(null,vec__31186_31226,(0),null);
var map__31189_31228 = cljs.core.nth.call(null,vec__31186_31226,(1),null);
var map__31189_31229__$1 = ((((!((map__31189_31228 == null)))?(((((map__31189_31228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31189_31228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31189_31228):map__31189_31228);
var doc_31230 = cljs.core.get.call(null,map__31189_31229__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31231 = cljs.core.get.call(null,map__31189_31229__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31227);

cljs.core.println.call(null," ",arglists_31231);

if(cljs.core.truth_(doc_31230)){
cljs.core.println.call(null," ",doc_31230);
} else {
}


var G__31232 = seq__31182_31222;
var G__31233 = chunk__31183_31223;
var G__31234 = count__31184_31224;
var G__31235 = (i__31185_31225 + (1));
seq__31182_31222 = G__31232;
chunk__31183_31223 = G__31233;
count__31184_31224 = G__31234;
i__31185_31225 = G__31235;
continue;
} else {
var temp__5457__auto___31236 = cljs.core.seq.call(null,seq__31182_31222);
if(temp__5457__auto___31236){
var seq__31182_31237__$1 = temp__5457__auto___31236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31182_31237__$1)){
var c__4319__auto___31238 = cljs.core.chunk_first.call(null,seq__31182_31237__$1);
var G__31239 = cljs.core.chunk_rest.call(null,seq__31182_31237__$1);
var G__31240 = c__4319__auto___31238;
var G__31241 = cljs.core.count.call(null,c__4319__auto___31238);
var G__31242 = (0);
seq__31182_31222 = G__31239;
chunk__31183_31223 = G__31240;
count__31184_31224 = G__31241;
i__31185_31225 = G__31242;
continue;
} else {
var vec__31191_31243 = cljs.core.first.call(null,seq__31182_31237__$1);
var name_31244 = cljs.core.nth.call(null,vec__31191_31243,(0),null);
var map__31194_31245 = cljs.core.nth.call(null,vec__31191_31243,(1),null);
var map__31194_31246__$1 = ((((!((map__31194_31245 == null)))?(((((map__31194_31245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31194_31245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31194_31245):map__31194_31245);
var doc_31247 = cljs.core.get.call(null,map__31194_31246__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31248 = cljs.core.get.call(null,map__31194_31246__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31244);

cljs.core.println.call(null," ",arglists_31248);

if(cljs.core.truth_(doc_31247)){
cljs.core.println.call(null," ",doc_31247);
} else {
}


var G__31249 = cljs.core.next.call(null,seq__31182_31237__$1);
var G__31250 = null;
var G__31251 = (0);
var G__31252 = (0);
seq__31182_31222 = G__31249;
chunk__31183_31223 = G__31250;
count__31184_31224 = G__31251;
i__31185_31225 = G__31252;
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

var seq__31196 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31197 = null;
var count__31198 = (0);
var i__31199 = (0);
while(true){
if((i__31199 < count__31198)){
var role = cljs.core._nth.call(null,chunk__31197,i__31199);
var temp__5457__auto___31253__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31253__$1)){
var spec_31254 = temp__5457__auto___31253__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31254));
} else {
}


var G__31255 = seq__31196;
var G__31256 = chunk__31197;
var G__31257 = count__31198;
var G__31258 = (i__31199 + (1));
seq__31196 = G__31255;
chunk__31197 = G__31256;
count__31198 = G__31257;
i__31199 = G__31258;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31196);
if(temp__5457__auto____$1){
var seq__31196__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31196__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31196__$1);
var G__31259 = cljs.core.chunk_rest.call(null,seq__31196__$1);
var G__31260 = c__4319__auto__;
var G__31261 = cljs.core.count.call(null,c__4319__auto__);
var G__31262 = (0);
seq__31196 = G__31259;
chunk__31197 = G__31260;
count__31198 = G__31261;
i__31199 = G__31262;
continue;
} else {
var role = cljs.core.first.call(null,seq__31196__$1);
var temp__5457__auto___31263__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31263__$2)){
var spec_31264 = temp__5457__auto___31263__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31264));
} else {
}


var G__31265 = cljs.core.next.call(null,seq__31196__$1);
var G__31266 = null;
var G__31267 = (0);
var G__31268 = (0);
seq__31196 = G__31265;
chunk__31197 = G__31266;
count__31198 = G__31267;
i__31199 = G__31268;
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

//# sourceMappingURL=repl.js.map?rel=1556144029026
