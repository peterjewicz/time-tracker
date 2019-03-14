// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27151 = arguments.length;
switch (G__27151) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27152 = (function (f,blockable,meta27153){
this.f = f;
this.blockable = blockable;
this.meta27153 = meta27153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27154,meta27153__$1){
var self__ = this;
var _27154__$1 = this;
return (new cljs.core.async.t_cljs$core$async27152(self__.f,self__.blockable,meta27153__$1));
});

cljs.core.async.t_cljs$core$async27152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27154){
var self__ = this;
var _27154__$1 = this;
return self__.meta27153;
});

cljs.core.async.t_cljs$core$async27152.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27152.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27153","meta27153",-1324987336,null)], null);
});

cljs.core.async.t_cljs$core$async27152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27152";

cljs.core.async.t_cljs$core$async27152.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27152");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27152.
 */
cljs.core.async.__GT_t_cljs$core$async27152 = (function cljs$core$async$__GT_t_cljs$core$async27152(f__$1,blockable__$1,meta27153){
return (new cljs.core.async.t_cljs$core$async27152(f__$1,blockable__$1,meta27153));
});

}

return (new cljs.core.async.t_cljs$core$async27152(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27158 = arguments.length;
switch (G__27158) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27161 = arguments.length;
switch (G__27161) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27164 = arguments.length;
switch (G__27164) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27166 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27166);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27166,ret){
return (function (){
return fn1.call(null,val_27166);
});})(val_27166,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27168 = arguments.length;
switch (G__27168) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___27170 = n;
var x_27171 = (0);
while(true){
if((x_27171 < n__4376__auto___27170)){
(a[x_27171] = (0));

var G__27172 = (x_27171 + (1));
x_27171 = G__27172;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27173 = (i + (1));
i = G__27173;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27174 = (function (flag,meta27175){
this.flag = flag;
this.meta27175 = meta27175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27176,meta27175__$1){
var self__ = this;
var _27176__$1 = this;
return (new cljs.core.async.t_cljs$core$async27174(self__.flag,meta27175__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27176){
var self__ = this;
var _27176__$1 = this;
return self__.meta27175;
});})(flag))
;

cljs.core.async.t_cljs$core$async27174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27174.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27175","meta27175",216246181,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27174";

cljs.core.async.t_cljs$core$async27174.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27174");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27174.
 */
cljs.core.async.__GT_t_cljs$core$async27174 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27174(flag__$1,meta27175){
return (new cljs.core.async.t_cljs$core$async27174(flag__$1,meta27175));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27174(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27177 = (function (flag,cb,meta27178){
this.flag = flag;
this.cb = cb;
this.meta27178 = meta27178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27179,meta27178__$1){
var self__ = this;
var _27179__$1 = this;
return (new cljs.core.async.t_cljs$core$async27177(self__.flag,self__.cb,meta27178__$1));
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27179){
var self__ = this;
var _27179__$1 = this;
return self__.meta27178;
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27178","meta27178",628936103,null)], null);
});

cljs.core.async.t_cljs$core$async27177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27177";

cljs.core.async.t_cljs$core$async27177.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27177");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27177.
 */
cljs.core.async.__GT_t_cljs$core$async27177 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27177(flag__$1,cb__$1,meta27178){
return (new cljs.core.async.t_cljs$core$async27177(flag__$1,cb__$1,meta27178));
});

}

return (new cljs.core.async.t_cljs$core$async27177(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27180_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27180_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27181_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27181_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27182 = (i + (1));
i = G__27182;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27188 = arguments.length;
var i__4500__auto___27189 = (0);
while(true){
if((i__4500__auto___27189 < len__4499__auto___27188)){
args__4502__auto__.push((arguments[i__4500__auto___27189]));

var G__27190 = (i__4500__auto___27189 + (1));
i__4500__auto___27189 = G__27190;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27185){
var map__27186 = p__27185;
var map__27186__$1 = ((((!((map__27186 == null)))?(((((map__27186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27186):map__27186);
var opts = map__27186__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27183){
var G__27184 = cljs.core.first.call(null,seq27183);
var seq27183__$1 = cljs.core.next.call(null,seq27183);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27184,seq27183__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27192 = arguments.length;
switch (G__27192) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27091__auto___27238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___27238){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___27238){
return (function (state_27216){
var state_val_27217 = (state_27216[(1)]);
if((state_val_27217 === (7))){
var inst_27212 = (state_27216[(2)]);
var state_27216__$1 = state_27216;
var statearr_27218_27239 = state_27216__$1;
(statearr_27218_27239[(2)] = inst_27212);

(statearr_27218_27239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (1))){
var state_27216__$1 = state_27216;
var statearr_27219_27240 = state_27216__$1;
(statearr_27219_27240[(2)] = null);

(statearr_27219_27240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (4))){
var inst_27195 = (state_27216[(7)]);
var inst_27195__$1 = (state_27216[(2)]);
var inst_27196 = (inst_27195__$1 == null);
var state_27216__$1 = (function (){var statearr_27220 = state_27216;
(statearr_27220[(7)] = inst_27195__$1);

return statearr_27220;
})();
if(cljs.core.truth_(inst_27196)){
var statearr_27221_27241 = state_27216__$1;
(statearr_27221_27241[(1)] = (5));

} else {
var statearr_27222_27242 = state_27216__$1;
(statearr_27222_27242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (13))){
var state_27216__$1 = state_27216;
var statearr_27223_27243 = state_27216__$1;
(statearr_27223_27243[(2)] = null);

(statearr_27223_27243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (6))){
var inst_27195 = (state_27216[(7)]);
var state_27216__$1 = state_27216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27216__$1,(11),to,inst_27195);
} else {
if((state_val_27217 === (3))){
var inst_27214 = (state_27216[(2)]);
var state_27216__$1 = state_27216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27216__$1,inst_27214);
} else {
if((state_val_27217 === (12))){
var state_27216__$1 = state_27216;
var statearr_27224_27244 = state_27216__$1;
(statearr_27224_27244[(2)] = null);

(statearr_27224_27244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (2))){
var state_27216__$1 = state_27216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27216__$1,(4),from);
} else {
if((state_val_27217 === (11))){
var inst_27205 = (state_27216[(2)]);
var state_27216__$1 = state_27216;
if(cljs.core.truth_(inst_27205)){
var statearr_27225_27245 = state_27216__$1;
(statearr_27225_27245[(1)] = (12));

} else {
var statearr_27226_27246 = state_27216__$1;
(statearr_27226_27246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (9))){
var state_27216__$1 = state_27216;
var statearr_27227_27247 = state_27216__$1;
(statearr_27227_27247[(2)] = null);

(statearr_27227_27247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (5))){
var state_27216__$1 = state_27216;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27228_27248 = state_27216__$1;
(statearr_27228_27248[(1)] = (8));

} else {
var statearr_27229_27249 = state_27216__$1;
(statearr_27229_27249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (14))){
var inst_27210 = (state_27216[(2)]);
var state_27216__$1 = state_27216;
var statearr_27230_27250 = state_27216__$1;
(statearr_27230_27250[(2)] = inst_27210);

(statearr_27230_27250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (10))){
var inst_27202 = (state_27216[(2)]);
var state_27216__$1 = state_27216;
var statearr_27231_27251 = state_27216__$1;
(statearr_27231_27251[(2)] = inst_27202);

(statearr_27231_27251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (8))){
var inst_27199 = cljs.core.async.close_BANG_.call(null,to);
var state_27216__$1 = state_27216;
var statearr_27232_27252 = state_27216__$1;
(statearr_27232_27252[(2)] = inst_27199);

(statearr_27232_27252[(1)] = (10));


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
});})(c__27091__auto___27238))
;
return ((function (switch__27001__auto__,c__27091__auto___27238){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_27233 = [null,null,null,null,null,null,null,null];
(statearr_27233[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_27233[(1)] = (1));

return statearr_27233;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_27216){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27234){if((e27234 instanceof Object)){
var ex__27005__auto__ = e27234;
var statearr_27235_27253 = state_27216;
(statearr_27235_27253[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27254 = state_27216;
state_27216 = G__27254;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_27216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_27216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___27238))
})();
var state__27093__auto__ = (function (){var statearr_27236 = f__27092__auto__.call(null);
(statearr_27236[(6)] = c__27091__auto___27238);

return statearr_27236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___27238))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27255){
var vec__27256 = p__27255;
var v = cljs.core.nth.call(null,vec__27256,(0),null);
var p = cljs.core.nth.call(null,vec__27256,(1),null);
var job = vec__27256;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27091__auto___27427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___27427,res,vec__27256,v,p,job,jobs,results){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___27427,res,vec__27256,v,p,job,jobs,results){
return (function (state_27263){
var state_val_27264 = (state_27263[(1)]);
if((state_val_27264 === (1))){
var state_27263__$1 = state_27263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27263__$1,(2),res,v);
} else {
if((state_val_27264 === (2))){
var inst_27260 = (state_27263[(2)]);
var inst_27261 = cljs.core.async.close_BANG_.call(null,res);
var state_27263__$1 = (function (){var statearr_27265 = state_27263;
(statearr_27265[(7)] = inst_27260);

return statearr_27265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27263__$1,inst_27261);
} else {
return null;
}
}
});})(c__27091__auto___27427,res,vec__27256,v,p,job,jobs,results))
;
return ((function (switch__27001__auto__,c__27091__auto___27427,res,vec__27256,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0 = (function (){
var statearr_27266 = [null,null,null,null,null,null,null,null];
(statearr_27266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__);

(statearr_27266[(1)] = (1));

return statearr_27266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1 = (function (state_27263){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27267){if((e27267 instanceof Object)){
var ex__27005__auto__ = e27267;
var statearr_27268_27428 = state_27263;
(statearr_27268_27428[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27429 = state_27263;
state_27263 = G__27429;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__ = function(state_27263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1.call(this,state_27263);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___27427,res,vec__27256,v,p,job,jobs,results))
})();
var state__27093__auto__ = (function (){var statearr_27269 = f__27092__auto__.call(null);
(statearr_27269[(6)] = c__27091__auto___27427);

return statearr_27269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___27427,res,vec__27256,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27270){
var vec__27271 = p__27270;
var v = cljs.core.nth.call(null,vec__27271,(0),null);
var p = cljs.core.nth.call(null,vec__27271,(1),null);
var job = vec__27271;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27430 = n;
var __27431 = (0);
while(true){
if((__27431 < n__4376__auto___27430)){
var G__27274_27432 = type;
var G__27274_27433__$1 = (((G__27274_27432 instanceof cljs.core.Keyword))?G__27274_27432.fqn:null);
switch (G__27274_27433__$1) {
case "compute":
var c__27091__auto___27435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27431,c__27091__auto___27435,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (__27431,c__27091__auto___27435,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async){
return (function (state_27287){
var state_val_27288 = (state_27287[(1)]);
if((state_val_27288 === (1))){
var state_27287__$1 = state_27287;
var statearr_27289_27436 = state_27287__$1;
(statearr_27289_27436[(2)] = null);

(statearr_27289_27436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (2))){
var state_27287__$1 = state_27287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27287__$1,(4),jobs);
} else {
if((state_val_27288 === (3))){
var inst_27285 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27287__$1,inst_27285);
} else {
if((state_val_27288 === (4))){
var inst_27277 = (state_27287[(2)]);
var inst_27278 = process.call(null,inst_27277);
var state_27287__$1 = state_27287;
if(cljs.core.truth_(inst_27278)){
var statearr_27290_27437 = state_27287__$1;
(statearr_27290_27437[(1)] = (5));

} else {
var statearr_27291_27438 = state_27287__$1;
(statearr_27291_27438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (5))){
var state_27287__$1 = state_27287;
var statearr_27292_27439 = state_27287__$1;
(statearr_27292_27439[(2)] = null);

(statearr_27292_27439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (6))){
var state_27287__$1 = state_27287;
var statearr_27293_27440 = state_27287__$1;
(statearr_27293_27440[(2)] = null);

(statearr_27293_27440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (7))){
var inst_27283 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
var statearr_27294_27441 = state_27287__$1;
(statearr_27294_27441[(2)] = inst_27283);

(statearr_27294_27441[(1)] = (3));


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
});})(__27431,c__27091__auto___27435,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async))
;
return ((function (__27431,switch__27001__auto__,c__27091__auto___27435,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0 = (function (){
var statearr_27295 = [null,null,null,null,null,null,null];
(statearr_27295[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__);

(statearr_27295[(1)] = (1));

return statearr_27295;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1 = (function (state_27287){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27296){if((e27296 instanceof Object)){
var ex__27005__auto__ = e27296;
var statearr_27297_27442 = state_27287;
(statearr_27297_27442[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27443 = state_27287;
state_27287 = G__27443;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__ = function(state_27287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1.call(this,state_27287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__;
})()
;})(__27431,switch__27001__auto__,c__27091__auto___27435,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async))
})();
var state__27093__auto__ = (function (){var statearr_27298 = f__27092__auto__.call(null);
(statearr_27298[(6)] = c__27091__auto___27435);

return statearr_27298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(__27431,c__27091__auto___27435,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async))
);


break;
case "async":
var c__27091__auto___27444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27431,c__27091__auto___27444,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (__27431,c__27091__auto___27444,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async){
return (function (state_27311){
var state_val_27312 = (state_27311[(1)]);
if((state_val_27312 === (1))){
var state_27311__$1 = state_27311;
var statearr_27313_27445 = state_27311__$1;
(statearr_27313_27445[(2)] = null);

(statearr_27313_27445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (2))){
var state_27311__$1 = state_27311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27311__$1,(4),jobs);
} else {
if((state_val_27312 === (3))){
var inst_27309 = (state_27311[(2)]);
var state_27311__$1 = state_27311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27311__$1,inst_27309);
} else {
if((state_val_27312 === (4))){
var inst_27301 = (state_27311[(2)]);
var inst_27302 = async.call(null,inst_27301);
var state_27311__$1 = state_27311;
if(cljs.core.truth_(inst_27302)){
var statearr_27314_27446 = state_27311__$1;
(statearr_27314_27446[(1)] = (5));

} else {
var statearr_27315_27447 = state_27311__$1;
(statearr_27315_27447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (5))){
var state_27311__$1 = state_27311;
var statearr_27316_27448 = state_27311__$1;
(statearr_27316_27448[(2)] = null);

(statearr_27316_27448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (6))){
var state_27311__$1 = state_27311;
var statearr_27317_27449 = state_27311__$1;
(statearr_27317_27449[(2)] = null);

(statearr_27317_27449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27312 === (7))){
var inst_27307 = (state_27311[(2)]);
var state_27311__$1 = state_27311;
var statearr_27318_27450 = state_27311__$1;
(statearr_27318_27450[(2)] = inst_27307);

(statearr_27318_27450[(1)] = (3));


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
});})(__27431,c__27091__auto___27444,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async))
;
return ((function (__27431,switch__27001__auto__,c__27091__auto___27444,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0 = (function (){
var statearr_27319 = [null,null,null,null,null,null,null];
(statearr_27319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__);

(statearr_27319[(1)] = (1));

return statearr_27319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1 = (function (state_27311){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27320){if((e27320 instanceof Object)){
var ex__27005__auto__ = e27320;
var statearr_27321_27451 = state_27311;
(statearr_27321_27451[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27452 = state_27311;
state_27311 = G__27452;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__ = function(state_27311){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1.call(this,state_27311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__;
})()
;})(__27431,switch__27001__auto__,c__27091__auto___27444,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async))
})();
var state__27093__auto__ = (function (){var statearr_27322 = f__27092__auto__.call(null);
(statearr_27322[(6)] = c__27091__auto___27444);

return statearr_27322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(__27431,c__27091__auto___27444,G__27274_27432,G__27274_27433__$1,n__4376__auto___27430,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27274_27433__$1)].join('')));

}

var G__27453 = (__27431 + (1));
__27431 = G__27453;
continue;
} else {
}
break;
}

var c__27091__auto___27454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___27454,jobs,results,process,async){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___27454,jobs,results,process,async){
return (function (state_27344){
var state_val_27345 = (state_27344[(1)]);
if((state_val_27345 === (1))){
var state_27344__$1 = state_27344;
var statearr_27346_27455 = state_27344__$1;
(statearr_27346_27455[(2)] = null);

(statearr_27346_27455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (2))){
var state_27344__$1 = state_27344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27344__$1,(4),from);
} else {
if((state_val_27345 === (3))){
var inst_27342 = (state_27344[(2)]);
var state_27344__$1 = state_27344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27344__$1,inst_27342);
} else {
if((state_val_27345 === (4))){
var inst_27325 = (state_27344[(7)]);
var inst_27325__$1 = (state_27344[(2)]);
var inst_27326 = (inst_27325__$1 == null);
var state_27344__$1 = (function (){var statearr_27347 = state_27344;
(statearr_27347[(7)] = inst_27325__$1);

return statearr_27347;
})();
if(cljs.core.truth_(inst_27326)){
var statearr_27348_27456 = state_27344__$1;
(statearr_27348_27456[(1)] = (5));

} else {
var statearr_27349_27457 = state_27344__$1;
(statearr_27349_27457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (5))){
var inst_27328 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27344__$1 = state_27344;
var statearr_27350_27458 = state_27344__$1;
(statearr_27350_27458[(2)] = inst_27328);

(statearr_27350_27458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (6))){
var inst_27325 = (state_27344[(7)]);
var inst_27330 = (state_27344[(8)]);
var inst_27330__$1 = cljs.core.async.chan.call(null,(1));
var inst_27331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27332 = [inst_27325,inst_27330__$1];
var inst_27333 = (new cljs.core.PersistentVector(null,2,(5),inst_27331,inst_27332,null));
var state_27344__$1 = (function (){var statearr_27351 = state_27344;
(statearr_27351[(8)] = inst_27330__$1);

return statearr_27351;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27344__$1,(8),jobs,inst_27333);
} else {
if((state_val_27345 === (7))){
var inst_27340 = (state_27344[(2)]);
var state_27344__$1 = state_27344;
var statearr_27352_27459 = state_27344__$1;
(statearr_27352_27459[(2)] = inst_27340);

(statearr_27352_27459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (8))){
var inst_27330 = (state_27344[(8)]);
var inst_27335 = (state_27344[(2)]);
var state_27344__$1 = (function (){var statearr_27353 = state_27344;
(statearr_27353[(9)] = inst_27335);

return statearr_27353;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27344__$1,(9),results,inst_27330);
} else {
if((state_val_27345 === (9))){
var inst_27337 = (state_27344[(2)]);
var state_27344__$1 = (function (){var statearr_27354 = state_27344;
(statearr_27354[(10)] = inst_27337);

return statearr_27354;
})();
var statearr_27355_27460 = state_27344__$1;
(statearr_27355_27460[(2)] = null);

(statearr_27355_27460[(1)] = (2));


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
});})(c__27091__auto___27454,jobs,results,process,async))
;
return ((function (switch__27001__auto__,c__27091__auto___27454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0 = (function (){
var statearr_27356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__);

(statearr_27356[(1)] = (1));

return statearr_27356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1 = (function (state_27344){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27357){if((e27357 instanceof Object)){
var ex__27005__auto__ = e27357;
var statearr_27358_27461 = state_27344;
(statearr_27358_27461[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27462 = state_27344;
state_27344 = G__27462;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__ = function(state_27344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1.call(this,state_27344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___27454,jobs,results,process,async))
})();
var state__27093__auto__ = (function (){var statearr_27359 = f__27092__auto__.call(null);
(statearr_27359[(6)] = c__27091__auto___27454);

return statearr_27359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___27454,jobs,results,process,async))
);


var c__27091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto__,jobs,results,process,async){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto__,jobs,results,process,async){
return (function (state_27397){
var state_val_27398 = (state_27397[(1)]);
if((state_val_27398 === (7))){
var inst_27393 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27399_27463 = state_27397__$1;
(statearr_27399_27463[(2)] = inst_27393);

(statearr_27399_27463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (20))){
var state_27397__$1 = state_27397;
var statearr_27400_27464 = state_27397__$1;
(statearr_27400_27464[(2)] = null);

(statearr_27400_27464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (1))){
var state_27397__$1 = state_27397;
var statearr_27401_27465 = state_27397__$1;
(statearr_27401_27465[(2)] = null);

(statearr_27401_27465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (4))){
var inst_27362 = (state_27397[(7)]);
var inst_27362__$1 = (state_27397[(2)]);
var inst_27363 = (inst_27362__$1 == null);
var state_27397__$1 = (function (){var statearr_27402 = state_27397;
(statearr_27402[(7)] = inst_27362__$1);

return statearr_27402;
})();
if(cljs.core.truth_(inst_27363)){
var statearr_27403_27466 = state_27397__$1;
(statearr_27403_27466[(1)] = (5));

} else {
var statearr_27404_27467 = state_27397__$1;
(statearr_27404_27467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (15))){
var inst_27375 = (state_27397[(8)]);
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27397__$1,(18),to,inst_27375);
} else {
if((state_val_27398 === (21))){
var inst_27388 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27405_27468 = state_27397__$1;
(statearr_27405_27468[(2)] = inst_27388);

(statearr_27405_27468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (13))){
var inst_27390 = (state_27397[(2)]);
var state_27397__$1 = (function (){var statearr_27406 = state_27397;
(statearr_27406[(9)] = inst_27390);

return statearr_27406;
})();
var statearr_27407_27469 = state_27397__$1;
(statearr_27407_27469[(2)] = null);

(statearr_27407_27469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (6))){
var inst_27362 = (state_27397[(7)]);
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27397__$1,(11),inst_27362);
} else {
if((state_val_27398 === (17))){
var inst_27383 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
if(cljs.core.truth_(inst_27383)){
var statearr_27408_27470 = state_27397__$1;
(statearr_27408_27470[(1)] = (19));

} else {
var statearr_27409_27471 = state_27397__$1;
(statearr_27409_27471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (3))){
var inst_27395 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27397__$1,inst_27395);
} else {
if((state_val_27398 === (12))){
var inst_27372 = (state_27397[(10)]);
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27397__$1,(14),inst_27372);
} else {
if((state_val_27398 === (2))){
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27397__$1,(4),results);
} else {
if((state_val_27398 === (19))){
var state_27397__$1 = state_27397;
var statearr_27410_27472 = state_27397__$1;
(statearr_27410_27472[(2)] = null);

(statearr_27410_27472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (11))){
var inst_27372 = (state_27397[(2)]);
var state_27397__$1 = (function (){var statearr_27411 = state_27397;
(statearr_27411[(10)] = inst_27372);

return statearr_27411;
})();
var statearr_27412_27473 = state_27397__$1;
(statearr_27412_27473[(2)] = null);

(statearr_27412_27473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (9))){
var state_27397__$1 = state_27397;
var statearr_27413_27474 = state_27397__$1;
(statearr_27413_27474[(2)] = null);

(statearr_27413_27474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (5))){
var state_27397__$1 = state_27397;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27414_27475 = state_27397__$1;
(statearr_27414_27475[(1)] = (8));

} else {
var statearr_27415_27476 = state_27397__$1;
(statearr_27415_27476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (14))){
var inst_27375 = (state_27397[(8)]);
var inst_27377 = (state_27397[(11)]);
var inst_27375__$1 = (state_27397[(2)]);
var inst_27376 = (inst_27375__$1 == null);
var inst_27377__$1 = cljs.core.not.call(null,inst_27376);
var state_27397__$1 = (function (){var statearr_27416 = state_27397;
(statearr_27416[(8)] = inst_27375__$1);

(statearr_27416[(11)] = inst_27377__$1);

return statearr_27416;
})();
if(inst_27377__$1){
var statearr_27417_27477 = state_27397__$1;
(statearr_27417_27477[(1)] = (15));

} else {
var statearr_27418_27478 = state_27397__$1;
(statearr_27418_27478[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (16))){
var inst_27377 = (state_27397[(11)]);
var state_27397__$1 = state_27397;
var statearr_27419_27479 = state_27397__$1;
(statearr_27419_27479[(2)] = inst_27377);

(statearr_27419_27479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (10))){
var inst_27369 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27420_27480 = state_27397__$1;
(statearr_27420_27480[(2)] = inst_27369);

(statearr_27420_27480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (18))){
var inst_27380 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27421_27481 = state_27397__$1;
(statearr_27421_27481[(2)] = inst_27380);

(statearr_27421_27481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (8))){
var inst_27366 = cljs.core.async.close_BANG_.call(null,to);
var state_27397__$1 = state_27397;
var statearr_27422_27482 = state_27397__$1;
(statearr_27422_27482[(2)] = inst_27366);

(statearr_27422_27482[(1)] = (10));


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
});})(c__27091__auto__,jobs,results,process,async))
;
return ((function (switch__27001__auto__,c__27091__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0 = (function (){
var statearr_27423 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__);

(statearr_27423[(1)] = (1));

return statearr_27423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1 = (function (state_27397){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27424){if((e27424 instanceof Object)){
var ex__27005__auto__ = e27424;
var statearr_27425_27483 = state_27397;
(statearr_27425_27483[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27484 = state_27397;
state_27397 = G__27484;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__ = function(state_27397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1.call(this,state_27397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27002__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto__,jobs,results,process,async))
})();
var state__27093__auto__ = (function (){var statearr_27426 = f__27092__auto__.call(null);
(statearr_27426[(6)] = c__27091__auto__);

return statearr_27426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto__,jobs,results,process,async))
);

return c__27091__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27486 = arguments.length;
switch (G__27486) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27489 = arguments.length;
switch (G__27489) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27492 = arguments.length;
switch (G__27492) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27091__auto___27541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___27541,tc,fc){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___27541,tc,fc){
return (function (state_27518){
var state_val_27519 = (state_27518[(1)]);
if((state_val_27519 === (7))){
var inst_27514 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
var statearr_27520_27542 = state_27518__$1;
(statearr_27520_27542[(2)] = inst_27514);

(statearr_27520_27542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (1))){
var state_27518__$1 = state_27518;
var statearr_27521_27543 = state_27518__$1;
(statearr_27521_27543[(2)] = null);

(statearr_27521_27543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (4))){
var inst_27495 = (state_27518[(7)]);
var inst_27495__$1 = (state_27518[(2)]);
var inst_27496 = (inst_27495__$1 == null);
var state_27518__$1 = (function (){var statearr_27522 = state_27518;
(statearr_27522[(7)] = inst_27495__$1);

return statearr_27522;
})();
if(cljs.core.truth_(inst_27496)){
var statearr_27523_27544 = state_27518__$1;
(statearr_27523_27544[(1)] = (5));

} else {
var statearr_27524_27545 = state_27518__$1;
(statearr_27524_27545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (13))){
var state_27518__$1 = state_27518;
var statearr_27525_27546 = state_27518__$1;
(statearr_27525_27546[(2)] = null);

(statearr_27525_27546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (6))){
var inst_27495 = (state_27518[(7)]);
var inst_27501 = p.call(null,inst_27495);
var state_27518__$1 = state_27518;
if(cljs.core.truth_(inst_27501)){
var statearr_27526_27547 = state_27518__$1;
(statearr_27526_27547[(1)] = (9));

} else {
var statearr_27527_27548 = state_27518__$1;
(statearr_27527_27548[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (3))){
var inst_27516 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27518__$1,inst_27516);
} else {
if((state_val_27519 === (12))){
var state_27518__$1 = state_27518;
var statearr_27528_27549 = state_27518__$1;
(statearr_27528_27549[(2)] = null);

(statearr_27528_27549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (2))){
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27518__$1,(4),ch);
} else {
if((state_val_27519 === (11))){
var inst_27495 = (state_27518[(7)]);
var inst_27505 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27518__$1,(8),inst_27505,inst_27495);
} else {
if((state_val_27519 === (9))){
var state_27518__$1 = state_27518;
var statearr_27529_27550 = state_27518__$1;
(statearr_27529_27550[(2)] = tc);

(statearr_27529_27550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (5))){
var inst_27498 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27499 = cljs.core.async.close_BANG_.call(null,fc);
var state_27518__$1 = (function (){var statearr_27530 = state_27518;
(statearr_27530[(8)] = inst_27498);

return statearr_27530;
})();
var statearr_27531_27551 = state_27518__$1;
(statearr_27531_27551[(2)] = inst_27499);

(statearr_27531_27551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (14))){
var inst_27512 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
var statearr_27532_27552 = state_27518__$1;
(statearr_27532_27552[(2)] = inst_27512);

(statearr_27532_27552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (10))){
var state_27518__$1 = state_27518;
var statearr_27533_27553 = state_27518__$1;
(statearr_27533_27553[(2)] = fc);

(statearr_27533_27553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (8))){
var inst_27507 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
if(cljs.core.truth_(inst_27507)){
var statearr_27534_27554 = state_27518__$1;
(statearr_27534_27554[(1)] = (12));

} else {
var statearr_27535_27555 = state_27518__$1;
(statearr_27535_27555[(1)] = (13));

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
});})(c__27091__auto___27541,tc,fc))
;
return ((function (switch__27001__auto__,c__27091__auto___27541,tc,fc){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_27536 = [null,null,null,null,null,null,null,null,null];
(statearr_27536[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_27536[(1)] = (1));

return statearr_27536;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_27518){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27537){if((e27537 instanceof Object)){
var ex__27005__auto__ = e27537;
var statearr_27538_27556 = state_27518;
(statearr_27538_27556[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27557 = state_27518;
state_27518 = G__27557;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_27518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_27518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___27541,tc,fc))
})();
var state__27093__auto__ = (function (){var statearr_27539 = f__27092__auto__.call(null);
(statearr_27539[(6)] = c__27091__auto___27541);

return statearr_27539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___27541,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto__){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto__){
return (function (state_27578){
var state_val_27579 = (state_27578[(1)]);
if((state_val_27579 === (7))){
var inst_27574 = (state_27578[(2)]);
var state_27578__$1 = state_27578;
var statearr_27580_27598 = state_27578__$1;
(statearr_27580_27598[(2)] = inst_27574);

(statearr_27580_27598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (1))){
var inst_27558 = init;
var state_27578__$1 = (function (){var statearr_27581 = state_27578;
(statearr_27581[(7)] = inst_27558);

return statearr_27581;
})();
var statearr_27582_27599 = state_27578__$1;
(statearr_27582_27599[(2)] = null);

(statearr_27582_27599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (4))){
var inst_27561 = (state_27578[(8)]);
var inst_27561__$1 = (state_27578[(2)]);
var inst_27562 = (inst_27561__$1 == null);
var state_27578__$1 = (function (){var statearr_27583 = state_27578;
(statearr_27583[(8)] = inst_27561__$1);

return statearr_27583;
})();
if(cljs.core.truth_(inst_27562)){
var statearr_27584_27600 = state_27578__$1;
(statearr_27584_27600[(1)] = (5));

} else {
var statearr_27585_27601 = state_27578__$1;
(statearr_27585_27601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (6))){
var inst_27558 = (state_27578[(7)]);
var inst_27561 = (state_27578[(8)]);
var inst_27565 = (state_27578[(9)]);
var inst_27565__$1 = f.call(null,inst_27558,inst_27561);
var inst_27566 = cljs.core.reduced_QMARK_.call(null,inst_27565__$1);
var state_27578__$1 = (function (){var statearr_27586 = state_27578;
(statearr_27586[(9)] = inst_27565__$1);

return statearr_27586;
})();
if(inst_27566){
var statearr_27587_27602 = state_27578__$1;
(statearr_27587_27602[(1)] = (8));

} else {
var statearr_27588_27603 = state_27578__$1;
(statearr_27588_27603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (3))){
var inst_27576 = (state_27578[(2)]);
var state_27578__$1 = state_27578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27578__$1,inst_27576);
} else {
if((state_val_27579 === (2))){
var state_27578__$1 = state_27578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27578__$1,(4),ch);
} else {
if((state_val_27579 === (9))){
var inst_27565 = (state_27578[(9)]);
var inst_27558 = inst_27565;
var state_27578__$1 = (function (){var statearr_27589 = state_27578;
(statearr_27589[(7)] = inst_27558);

return statearr_27589;
})();
var statearr_27590_27604 = state_27578__$1;
(statearr_27590_27604[(2)] = null);

(statearr_27590_27604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (5))){
var inst_27558 = (state_27578[(7)]);
var state_27578__$1 = state_27578;
var statearr_27591_27605 = state_27578__$1;
(statearr_27591_27605[(2)] = inst_27558);

(statearr_27591_27605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (10))){
var inst_27572 = (state_27578[(2)]);
var state_27578__$1 = state_27578;
var statearr_27592_27606 = state_27578__$1;
(statearr_27592_27606[(2)] = inst_27572);

(statearr_27592_27606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (8))){
var inst_27565 = (state_27578[(9)]);
var inst_27568 = cljs.core.deref.call(null,inst_27565);
var state_27578__$1 = state_27578;
var statearr_27593_27607 = state_27578__$1;
(statearr_27593_27607[(2)] = inst_27568);

(statearr_27593_27607[(1)] = (10));


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
});})(c__27091__auto__))
;
return ((function (switch__27001__auto__,c__27091__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27002__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27002__auto____0 = (function (){
var statearr_27594 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27594[(0)] = cljs$core$async$reduce_$_state_machine__27002__auto__);

(statearr_27594[(1)] = (1));

return statearr_27594;
});
var cljs$core$async$reduce_$_state_machine__27002__auto____1 = (function (state_27578){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27595){if((e27595 instanceof Object)){
var ex__27005__auto__ = e27595;
var statearr_27596_27608 = state_27578;
(statearr_27596_27608[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27609 = state_27578;
state_27578 = G__27609;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27002__auto__ = function(state_27578){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27002__auto____1.call(this,state_27578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27002__auto____0;
cljs$core$async$reduce_$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27002__auto____1;
return cljs$core$async$reduce_$_state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto__))
})();
var state__27093__auto__ = (function (){var statearr_27597 = f__27092__auto__.call(null);
(statearr_27597[(6)] = c__27091__auto__);

return statearr_27597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto__))
);

return c__27091__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto__,f__$1){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto__,f__$1){
return (function (state_27615){
var state_val_27616 = (state_27615[(1)]);
if((state_val_27616 === (1))){
var inst_27610 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27615__$1,(2),inst_27610);
} else {
if((state_val_27616 === (2))){
var inst_27612 = (state_27615[(2)]);
var inst_27613 = f__$1.call(null,inst_27612);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27615__$1,inst_27613);
} else {
return null;
}
}
});})(c__27091__auto__,f__$1))
;
return ((function (switch__27001__auto__,c__27091__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27002__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27002__auto____0 = (function (){
var statearr_27617 = [null,null,null,null,null,null,null];
(statearr_27617[(0)] = cljs$core$async$transduce_$_state_machine__27002__auto__);

(statearr_27617[(1)] = (1));

return statearr_27617;
});
var cljs$core$async$transduce_$_state_machine__27002__auto____1 = (function (state_27615){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27618){if((e27618 instanceof Object)){
var ex__27005__auto__ = e27618;
var statearr_27619_27621 = state_27615;
(statearr_27619_27621[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27622 = state_27615;
state_27615 = G__27622;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27002__auto__ = function(state_27615){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27002__auto____1.call(this,state_27615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27002__auto____0;
cljs$core$async$transduce_$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27002__auto____1;
return cljs$core$async$transduce_$_state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto__,f__$1))
})();
var state__27093__auto__ = (function (){var statearr_27620 = f__27092__auto__.call(null);
(statearr_27620[(6)] = c__27091__auto__);

return statearr_27620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto__,f__$1))
);

return c__27091__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27624 = arguments.length;
switch (G__27624) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto__){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto__){
return (function (state_27649){
var state_val_27650 = (state_27649[(1)]);
if((state_val_27650 === (7))){
var inst_27631 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
var statearr_27651_27672 = state_27649__$1;
(statearr_27651_27672[(2)] = inst_27631);

(statearr_27651_27672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (1))){
var inst_27625 = cljs.core.seq.call(null,coll);
var inst_27626 = inst_27625;
var state_27649__$1 = (function (){var statearr_27652 = state_27649;
(statearr_27652[(7)] = inst_27626);

return statearr_27652;
})();
var statearr_27653_27673 = state_27649__$1;
(statearr_27653_27673[(2)] = null);

(statearr_27653_27673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (4))){
var inst_27626 = (state_27649[(7)]);
var inst_27629 = cljs.core.first.call(null,inst_27626);
var state_27649__$1 = state_27649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27649__$1,(7),ch,inst_27629);
} else {
if((state_val_27650 === (13))){
var inst_27643 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
var statearr_27654_27674 = state_27649__$1;
(statearr_27654_27674[(2)] = inst_27643);

(statearr_27654_27674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (6))){
var inst_27634 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
if(cljs.core.truth_(inst_27634)){
var statearr_27655_27675 = state_27649__$1;
(statearr_27655_27675[(1)] = (8));

} else {
var statearr_27656_27676 = state_27649__$1;
(statearr_27656_27676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (3))){
var inst_27647 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27649__$1,inst_27647);
} else {
if((state_val_27650 === (12))){
var state_27649__$1 = state_27649;
var statearr_27657_27677 = state_27649__$1;
(statearr_27657_27677[(2)] = null);

(statearr_27657_27677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (2))){
var inst_27626 = (state_27649[(7)]);
var state_27649__$1 = state_27649;
if(cljs.core.truth_(inst_27626)){
var statearr_27658_27678 = state_27649__$1;
(statearr_27658_27678[(1)] = (4));

} else {
var statearr_27659_27679 = state_27649__$1;
(statearr_27659_27679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (11))){
var inst_27640 = cljs.core.async.close_BANG_.call(null,ch);
var state_27649__$1 = state_27649;
var statearr_27660_27680 = state_27649__$1;
(statearr_27660_27680[(2)] = inst_27640);

(statearr_27660_27680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (9))){
var state_27649__$1 = state_27649;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27661_27681 = state_27649__$1;
(statearr_27661_27681[(1)] = (11));

} else {
var statearr_27662_27682 = state_27649__$1;
(statearr_27662_27682[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (5))){
var inst_27626 = (state_27649[(7)]);
var state_27649__$1 = state_27649;
var statearr_27663_27683 = state_27649__$1;
(statearr_27663_27683[(2)] = inst_27626);

(statearr_27663_27683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (10))){
var inst_27645 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
var statearr_27664_27684 = state_27649__$1;
(statearr_27664_27684[(2)] = inst_27645);

(statearr_27664_27684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (8))){
var inst_27626 = (state_27649[(7)]);
var inst_27636 = cljs.core.next.call(null,inst_27626);
var inst_27626__$1 = inst_27636;
var state_27649__$1 = (function (){var statearr_27665 = state_27649;
(statearr_27665[(7)] = inst_27626__$1);

return statearr_27665;
})();
var statearr_27666_27685 = state_27649__$1;
(statearr_27666_27685[(2)] = null);

(statearr_27666_27685[(1)] = (2));


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
});})(c__27091__auto__))
;
return ((function (switch__27001__auto__,c__27091__auto__){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_27667 = [null,null,null,null,null,null,null,null];
(statearr_27667[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_27667[(1)] = (1));

return statearr_27667;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_27649){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27668){if((e27668 instanceof Object)){
var ex__27005__auto__ = e27668;
var statearr_27669_27686 = state_27649;
(statearr_27669_27686[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27687 = state_27649;
state_27649 = G__27687;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_27649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_27649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto__))
})();
var state__27093__auto__ = (function (){var statearr_27670 = f__27092__auto__.call(null);
(statearr_27670[(6)] = c__27091__auto__);

return statearr_27670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto__))
);

return c__27091__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27688 = (function (ch,cs,meta27689){
this.ch = ch;
this.cs = cs;
this.meta27689 = meta27689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27690,meta27689__$1){
var self__ = this;
var _27690__$1 = this;
return (new cljs.core.async.t_cljs$core$async27688(self__.ch,self__.cs,meta27689__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27690){
var self__ = this;
var _27690__$1 = this;
return self__.meta27689;
});})(cs))
;

cljs.core.async.t_cljs$core$async27688.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27688.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27688.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27688.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27688.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27688.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27689","meta27689",483704059,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27688";

cljs.core.async.t_cljs$core$async27688.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27688");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27688.
 */
cljs.core.async.__GT_t_cljs$core$async27688 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27688(ch__$1,cs__$1,meta27689){
return (new cljs.core.async.t_cljs$core$async27688(ch__$1,cs__$1,meta27689));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27688(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27091__auto___27910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___27910,cs,m,dchan,dctr,done){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___27910,cs,m,dchan,dctr,done){
return (function (state_27825){
var state_val_27826 = (state_27825[(1)]);
if((state_val_27826 === (7))){
var inst_27821 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27827_27911 = state_27825__$1;
(statearr_27827_27911[(2)] = inst_27821);

(statearr_27827_27911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (20))){
var inst_27724 = (state_27825[(7)]);
var inst_27736 = cljs.core.first.call(null,inst_27724);
var inst_27737 = cljs.core.nth.call(null,inst_27736,(0),null);
var inst_27738 = cljs.core.nth.call(null,inst_27736,(1),null);
var state_27825__$1 = (function (){var statearr_27828 = state_27825;
(statearr_27828[(8)] = inst_27737);

return statearr_27828;
})();
if(cljs.core.truth_(inst_27738)){
var statearr_27829_27912 = state_27825__$1;
(statearr_27829_27912[(1)] = (22));

} else {
var statearr_27830_27913 = state_27825__$1;
(statearr_27830_27913[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (27))){
var inst_27768 = (state_27825[(9)]);
var inst_27693 = (state_27825[(10)]);
var inst_27773 = (state_27825[(11)]);
var inst_27766 = (state_27825[(12)]);
var inst_27773__$1 = cljs.core._nth.call(null,inst_27766,inst_27768);
var inst_27774 = cljs.core.async.put_BANG_.call(null,inst_27773__$1,inst_27693,done);
var state_27825__$1 = (function (){var statearr_27831 = state_27825;
(statearr_27831[(11)] = inst_27773__$1);

return statearr_27831;
})();
if(cljs.core.truth_(inst_27774)){
var statearr_27832_27914 = state_27825__$1;
(statearr_27832_27914[(1)] = (30));

} else {
var statearr_27833_27915 = state_27825__$1;
(statearr_27833_27915[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (1))){
var state_27825__$1 = state_27825;
var statearr_27834_27916 = state_27825__$1;
(statearr_27834_27916[(2)] = null);

(statearr_27834_27916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (24))){
var inst_27724 = (state_27825[(7)]);
var inst_27743 = (state_27825[(2)]);
var inst_27744 = cljs.core.next.call(null,inst_27724);
var inst_27702 = inst_27744;
var inst_27703 = null;
var inst_27704 = (0);
var inst_27705 = (0);
var state_27825__$1 = (function (){var statearr_27835 = state_27825;
(statearr_27835[(13)] = inst_27702);

(statearr_27835[(14)] = inst_27703);

(statearr_27835[(15)] = inst_27704);

(statearr_27835[(16)] = inst_27743);

(statearr_27835[(17)] = inst_27705);

return statearr_27835;
})();
var statearr_27836_27917 = state_27825__$1;
(statearr_27836_27917[(2)] = null);

(statearr_27836_27917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (39))){
var state_27825__$1 = state_27825;
var statearr_27840_27918 = state_27825__$1;
(statearr_27840_27918[(2)] = null);

(statearr_27840_27918[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (4))){
var inst_27693 = (state_27825[(10)]);
var inst_27693__$1 = (state_27825[(2)]);
var inst_27694 = (inst_27693__$1 == null);
var state_27825__$1 = (function (){var statearr_27841 = state_27825;
(statearr_27841[(10)] = inst_27693__$1);

return statearr_27841;
})();
if(cljs.core.truth_(inst_27694)){
var statearr_27842_27919 = state_27825__$1;
(statearr_27842_27919[(1)] = (5));

} else {
var statearr_27843_27920 = state_27825__$1;
(statearr_27843_27920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (15))){
var inst_27702 = (state_27825[(13)]);
var inst_27703 = (state_27825[(14)]);
var inst_27704 = (state_27825[(15)]);
var inst_27705 = (state_27825[(17)]);
var inst_27720 = (state_27825[(2)]);
var inst_27721 = (inst_27705 + (1));
var tmp27837 = inst_27702;
var tmp27838 = inst_27703;
var tmp27839 = inst_27704;
var inst_27702__$1 = tmp27837;
var inst_27703__$1 = tmp27838;
var inst_27704__$1 = tmp27839;
var inst_27705__$1 = inst_27721;
var state_27825__$1 = (function (){var statearr_27844 = state_27825;
(statearr_27844[(13)] = inst_27702__$1);

(statearr_27844[(18)] = inst_27720);

(statearr_27844[(14)] = inst_27703__$1);

(statearr_27844[(15)] = inst_27704__$1);

(statearr_27844[(17)] = inst_27705__$1);

return statearr_27844;
})();
var statearr_27845_27921 = state_27825__$1;
(statearr_27845_27921[(2)] = null);

(statearr_27845_27921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (21))){
var inst_27747 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27849_27922 = state_27825__$1;
(statearr_27849_27922[(2)] = inst_27747);

(statearr_27849_27922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (31))){
var inst_27773 = (state_27825[(11)]);
var inst_27777 = done.call(null,null);
var inst_27778 = cljs.core.async.untap_STAR_.call(null,m,inst_27773);
var state_27825__$1 = (function (){var statearr_27850 = state_27825;
(statearr_27850[(19)] = inst_27777);

return statearr_27850;
})();
var statearr_27851_27923 = state_27825__$1;
(statearr_27851_27923[(2)] = inst_27778);

(statearr_27851_27923[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (32))){
var inst_27767 = (state_27825[(20)]);
var inst_27768 = (state_27825[(9)]);
var inst_27765 = (state_27825[(21)]);
var inst_27766 = (state_27825[(12)]);
var inst_27780 = (state_27825[(2)]);
var inst_27781 = (inst_27768 + (1));
var tmp27846 = inst_27767;
var tmp27847 = inst_27765;
var tmp27848 = inst_27766;
var inst_27765__$1 = tmp27847;
var inst_27766__$1 = tmp27848;
var inst_27767__$1 = tmp27846;
var inst_27768__$1 = inst_27781;
var state_27825__$1 = (function (){var statearr_27852 = state_27825;
(statearr_27852[(20)] = inst_27767__$1);

(statearr_27852[(9)] = inst_27768__$1);

(statearr_27852[(22)] = inst_27780);

(statearr_27852[(21)] = inst_27765__$1);

(statearr_27852[(12)] = inst_27766__$1);

return statearr_27852;
})();
var statearr_27853_27924 = state_27825__$1;
(statearr_27853_27924[(2)] = null);

(statearr_27853_27924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (40))){
var inst_27793 = (state_27825[(23)]);
var inst_27797 = done.call(null,null);
var inst_27798 = cljs.core.async.untap_STAR_.call(null,m,inst_27793);
var state_27825__$1 = (function (){var statearr_27854 = state_27825;
(statearr_27854[(24)] = inst_27797);

return statearr_27854;
})();
var statearr_27855_27925 = state_27825__$1;
(statearr_27855_27925[(2)] = inst_27798);

(statearr_27855_27925[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (33))){
var inst_27784 = (state_27825[(25)]);
var inst_27786 = cljs.core.chunked_seq_QMARK_.call(null,inst_27784);
var state_27825__$1 = state_27825;
if(inst_27786){
var statearr_27856_27926 = state_27825__$1;
(statearr_27856_27926[(1)] = (36));

} else {
var statearr_27857_27927 = state_27825__$1;
(statearr_27857_27927[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (13))){
var inst_27714 = (state_27825[(26)]);
var inst_27717 = cljs.core.async.close_BANG_.call(null,inst_27714);
var state_27825__$1 = state_27825;
var statearr_27858_27928 = state_27825__$1;
(statearr_27858_27928[(2)] = inst_27717);

(statearr_27858_27928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (22))){
var inst_27737 = (state_27825[(8)]);
var inst_27740 = cljs.core.async.close_BANG_.call(null,inst_27737);
var state_27825__$1 = state_27825;
var statearr_27859_27929 = state_27825__$1;
(statearr_27859_27929[(2)] = inst_27740);

(statearr_27859_27929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (36))){
var inst_27784 = (state_27825[(25)]);
var inst_27788 = cljs.core.chunk_first.call(null,inst_27784);
var inst_27789 = cljs.core.chunk_rest.call(null,inst_27784);
var inst_27790 = cljs.core.count.call(null,inst_27788);
var inst_27765 = inst_27789;
var inst_27766 = inst_27788;
var inst_27767 = inst_27790;
var inst_27768 = (0);
var state_27825__$1 = (function (){var statearr_27860 = state_27825;
(statearr_27860[(20)] = inst_27767);

(statearr_27860[(9)] = inst_27768);

(statearr_27860[(21)] = inst_27765);

(statearr_27860[(12)] = inst_27766);

return statearr_27860;
})();
var statearr_27861_27930 = state_27825__$1;
(statearr_27861_27930[(2)] = null);

(statearr_27861_27930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (41))){
var inst_27784 = (state_27825[(25)]);
var inst_27800 = (state_27825[(2)]);
var inst_27801 = cljs.core.next.call(null,inst_27784);
var inst_27765 = inst_27801;
var inst_27766 = null;
var inst_27767 = (0);
var inst_27768 = (0);
var state_27825__$1 = (function (){var statearr_27862 = state_27825;
(statearr_27862[(27)] = inst_27800);

(statearr_27862[(20)] = inst_27767);

(statearr_27862[(9)] = inst_27768);

(statearr_27862[(21)] = inst_27765);

(statearr_27862[(12)] = inst_27766);

return statearr_27862;
})();
var statearr_27863_27931 = state_27825__$1;
(statearr_27863_27931[(2)] = null);

(statearr_27863_27931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (43))){
var state_27825__$1 = state_27825;
var statearr_27864_27932 = state_27825__$1;
(statearr_27864_27932[(2)] = null);

(statearr_27864_27932[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (29))){
var inst_27809 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27865_27933 = state_27825__$1;
(statearr_27865_27933[(2)] = inst_27809);

(statearr_27865_27933[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (44))){
var inst_27818 = (state_27825[(2)]);
var state_27825__$1 = (function (){var statearr_27866 = state_27825;
(statearr_27866[(28)] = inst_27818);

return statearr_27866;
})();
var statearr_27867_27934 = state_27825__$1;
(statearr_27867_27934[(2)] = null);

(statearr_27867_27934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (6))){
var inst_27757 = (state_27825[(29)]);
var inst_27756 = cljs.core.deref.call(null,cs);
var inst_27757__$1 = cljs.core.keys.call(null,inst_27756);
var inst_27758 = cljs.core.count.call(null,inst_27757__$1);
var inst_27759 = cljs.core.reset_BANG_.call(null,dctr,inst_27758);
var inst_27764 = cljs.core.seq.call(null,inst_27757__$1);
var inst_27765 = inst_27764;
var inst_27766 = null;
var inst_27767 = (0);
var inst_27768 = (0);
var state_27825__$1 = (function (){var statearr_27868 = state_27825;
(statearr_27868[(29)] = inst_27757__$1);

(statearr_27868[(20)] = inst_27767);

(statearr_27868[(9)] = inst_27768);

(statearr_27868[(30)] = inst_27759);

(statearr_27868[(21)] = inst_27765);

(statearr_27868[(12)] = inst_27766);

return statearr_27868;
})();
var statearr_27869_27935 = state_27825__$1;
(statearr_27869_27935[(2)] = null);

(statearr_27869_27935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (28))){
var inst_27784 = (state_27825[(25)]);
var inst_27765 = (state_27825[(21)]);
var inst_27784__$1 = cljs.core.seq.call(null,inst_27765);
var state_27825__$1 = (function (){var statearr_27870 = state_27825;
(statearr_27870[(25)] = inst_27784__$1);

return statearr_27870;
})();
if(inst_27784__$1){
var statearr_27871_27936 = state_27825__$1;
(statearr_27871_27936[(1)] = (33));

} else {
var statearr_27872_27937 = state_27825__$1;
(statearr_27872_27937[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (25))){
var inst_27767 = (state_27825[(20)]);
var inst_27768 = (state_27825[(9)]);
var inst_27770 = (inst_27768 < inst_27767);
var inst_27771 = inst_27770;
var state_27825__$1 = state_27825;
if(cljs.core.truth_(inst_27771)){
var statearr_27873_27938 = state_27825__$1;
(statearr_27873_27938[(1)] = (27));

} else {
var statearr_27874_27939 = state_27825__$1;
(statearr_27874_27939[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (34))){
var state_27825__$1 = state_27825;
var statearr_27875_27940 = state_27825__$1;
(statearr_27875_27940[(2)] = null);

(statearr_27875_27940[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (17))){
var state_27825__$1 = state_27825;
var statearr_27876_27941 = state_27825__$1;
(statearr_27876_27941[(2)] = null);

(statearr_27876_27941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (3))){
var inst_27823 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27825__$1,inst_27823);
} else {
if((state_val_27826 === (12))){
var inst_27752 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27877_27942 = state_27825__$1;
(statearr_27877_27942[(2)] = inst_27752);

(statearr_27877_27942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (2))){
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27825__$1,(4),ch);
} else {
if((state_val_27826 === (23))){
var state_27825__$1 = state_27825;
var statearr_27878_27943 = state_27825__$1;
(statearr_27878_27943[(2)] = null);

(statearr_27878_27943[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (35))){
var inst_27807 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27879_27944 = state_27825__$1;
(statearr_27879_27944[(2)] = inst_27807);

(statearr_27879_27944[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (19))){
var inst_27724 = (state_27825[(7)]);
var inst_27728 = cljs.core.chunk_first.call(null,inst_27724);
var inst_27729 = cljs.core.chunk_rest.call(null,inst_27724);
var inst_27730 = cljs.core.count.call(null,inst_27728);
var inst_27702 = inst_27729;
var inst_27703 = inst_27728;
var inst_27704 = inst_27730;
var inst_27705 = (0);
var state_27825__$1 = (function (){var statearr_27880 = state_27825;
(statearr_27880[(13)] = inst_27702);

(statearr_27880[(14)] = inst_27703);

(statearr_27880[(15)] = inst_27704);

(statearr_27880[(17)] = inst_27705);

return statearr_27880;
})();
var statearr_27881_27945 = state_27825__$1;
(statearr_27881_27945[(2)] = null);

(statearr_27881_27945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (11))){
var inst_27724 = (state_27825[(7)]);
var inst_27702 = (state_27825[(13)]);
var inst_27724__$1 = cljs.core.seq.call(null,inst_27702);
var state_27825__$1 = (function (){var statearr_27882 = state_27825;
(statearr_27882[(7)] = inst_27724__$1);

return statearr_27882;
})();
if(inst_27724__$1){
var statearr_27883_27946 = state_27825__$1;
(statearr_27883_27946[(1)] = (16));

} else {
var statearr_27884_27947 = state_27825__$1;
(statearr_27884_27947[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (9))){
var inst_27754 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27885_27948 = state_27825__$1;
(statearr_27885_27948[(2)] = inst_27754);

(statearr_27885_27948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (5))){
var inst_27700 = cljs.core.deref.call(null,cs);
var inst_27701 = cljs.core.seq.call(null,inst_27700);
var inst_27702 = inst_27701;
var inst_27703 = null;
var inst_27704 = (0);
var inst_27705 = (0);
var state_27825__$1 = (function (){var statearr_27886 = state_27825;
(statearr_27886[(13)] = inst_27702);

(statearr_27886[(14)] = inst_27703);

(statearr_27886[(15)] = inst_27704);

(statearr_27886[(17)] = inst_27705);

return statearr_27886;
})();
var statearr_27887_27949 = state_27825__$1;
(statearr_27887_27949[(2)] = null);

(statearr_27887_27949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (14))){
var state_27825__$1 = state_27825;
var statearr_27888_27950 = state_27825__$1;
(statearr_27888_27950[(2)] = null);

(statearr_27888_27950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (45))){
var inst_27815 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27889_27951 = state_27825__$1;
(statearr_27889_27951[(2)] = inst_27815);

(statearr_27889_27951[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (26))){
var inst_27757 = (state_27825[(29)]);
var inst_27811 = (state_27825[(2)]);
var inst_27812 = cljs.core.seq.call(null,inst_27757);
var state_27825__$1 = (function (){var statearr_27890 = state_27825;
(statearr_27890[(31)] = inst_27811);

return statearr_27890;
})();
if(inst_27812){
var statearr_27891_27952 = state_27825__$1;
(statearr_27891_27952[(1)] = (42));

} else {
var statearr_27892_27953 = state_27825__$1;
(statearr_27892_27953[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (16))){
var inst_27724 = (state_27825[(7)]);
var inst_27726 = cljs.core.chunked_seq_QMARK_.call(null,inst_27724);
var state_27825__$1 = state_27825;
if(inst_27726){
var statearr_27893_27954 = state_27825__$1;
(statearr_27893_27954[(1)] = (19));

} else {
var statearr_27894_27955 = state_27825__$1;
(statearr_27894_27955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (38))){
var inst_27804 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27895_27956 = state_27825__$1;
(statearr_27895_27956[(2)] = inst_27804);

(statearr_27895_27956[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (30))){
var state_27825__$1 = state_27825;
var statearr_27896_27957 = state_27825__$1;
(statearr_27896_27957[(2)] = null);

(statearr_27896_27957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (10))){
var inst_27703 = (state_27825[(14)]);
var inst_27705 = (state_27825[(17)]);
var inst_27713 = cljs.core._nth.call(null,inst_27703,inst_27705);
var inst_27714 = cljs.core.nth.call(null,inst_27713,(0),null);
var inst_27715 = cljs.core.nth.call(null,inst_27713,(1),null);
var state_27825__$1 = (function (){var statearr_27897 = state_27825;
(statearr_27897[(26)] = inst_27714);

return statearr_27897;
})();
if(cljs.core.truth_(inst_27715)){
var statearr_27898_27958 = state_27825__$1;
(statearr_27898_27958[(1)] = (13));

} else {
var statearr_27899_27959 = state_27825__$1;
(statearr_27899_27959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (18))){
var inst_27750 = (state_27825[(2)]);
var state_27825__$1 = state_27825;
var statearr_27900_27960 = state_27825__$1;
(statearr_27900_27960[(2)] = inst_27750);

(statearr_27900_27960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (42))){
var state_27825__$1 = state_27825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27825__$1,(45),dchan);
} else {
if((state_val_27826 === (37))){
var inst_27793 = (state_27825[(23)]);
var inst_27784 = (state_27825[(25)]);
var inst_27693 = (state_27825[(10)]);
var inst_27793__$1 = cljs.core.first.call(null,inst_27784);
var inst_27794 = cljs.core.async.put_BANG_.call(null,inst_27793__$1,inst_27693,done);
var state_27825__$1 = (function (){var statearr_27901 = state_27825;
(statearr_27901[(23)] = inst_27793__$1);

return statearr_27901;
})();
if(cljs.core.truth_(inst_27794)){
var statearr_27902_27961 = state_27825__$1;
(statearr_27902_27961[(1)] = (39));

} else {
var statearr_27903_27962 = state_27825__$1;
(statearr_27903_27962[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27826 === (8))){
var inst_27704 = (state_27825[(15)]);
var inst_27705 = (state_27825[(17)]);
var inst_27707 = (inst_27705 < inst_27704);
var inst_27708 = inst_27707;
var state_27825__$1 = state_27825;
if(cljs.core.truth_(inst_27708)){
var statearr_27904_27963 = state_27825__$1;
(statearr_27904_27963[(1)] = (10));

} else {
var statearr_27905_27964 = state_27825__$1;
(statearr_27905_27964[(1)] = (11));

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
});})(c__27091__auto___27910,cs,m,dchan,dctr,done))
;
return ((function (switch__27001__auto__,c__27091__auto___27910,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27002__auto__ = null;
var cljs$core$async$mult_$_state_machine__27002__auto____0 = (function (){
var statearr_27906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27906[(0)] = cljs$core$async$mult_$_state_machine__27002__auto__);

(statearr_27906[(1)] = (1));

return statearr_27906;
});
var cljs$core$async$mult_$_state_machine__27002__auto____1 = (function (state_27825){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_27825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e27907){if((e27907 instanceof Object)){
var ex__27005__auto__ = e27907;
var statearr_27908_27965 = state_27825;
(statearr_27908_27965[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27966 = state_27825;
state_27825 = G__27966;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27002__auto__ = function(state_27825){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27002__auto____1.call(this,state_27825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27002__auto____0;
cljs$core$async$mult_$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27002__auto____1;
return cljs$core$async$mult_$_state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___27910,cs,m,dchan,dctr,done))
})();
var state__27093__auto__ = (function (){var statearr_27909 = f__27092__auto__.call(null);
(statearr_27909[(6)] = c__27091__auto___27910);

return statearr_27909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___27910,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27968 = arguments.length;
switch (G__27968) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27980 = arguments.length;
var i__4500__auto___27981 = (0);
while(true){
if((i__4500__auto___27981 < len__4499__auto___27980)){
args__4502__auto__.push((arguments[i__4500__auto___27981]));

var G__27982 = (i__4500__auto___27981 + (1));
i__4500__auto___27981 = G__27982;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27974){
var map__27975 = p__27974;
var map__27975__$1 = ((((!((map__27975 == null)))?(((((map__27975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27975):map__27975);
var opts = map__27975__$1;
var statearr_27977_27983 = state;
(statearr_27977_27983[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27975,map__27975__$1,opts){
return (function (val){
var statearr_27978_27984 = state;
(statearr_27978_27984[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27975,map__27975__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27979_27985 = state;
(statearr_27979_27985[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27970){
var G__27971 = cljs.core.first.call(null,seq27970);
var seq27970__$1 = cljs.core.next.call(null,seq27970);
var G__27972 = cljs.core.first.call(null,seq27970__$1);
var seq27970__$2 = cljs.core.next.call(null,seq27970__$1);
var G__27973 = cljs.core.first.call(null,seq27970__$2);
var seq27970__$3 = cljs.core.next.call(null,seq27970__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27971,G__27972,G__27973,seq27970__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27986 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27987){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27987 = meta27987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27988,meta27987__$1){
var self__ = this;
var _27988__$1 = this;
return (new cljs.core.async.t_cljs$core$async27986(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27987__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27988){
var self__ = this;
var _27988__$1 = this;
return self__.meta27987;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27986.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27987","meta27987",-1465930965,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27986.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27986";

cljs.core.async.t_cljs$core$async27986.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27986");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27986.
 */
cljs.core.async.__GT_t_cljs$core$async27986 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27986(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27987){
return (new cljs.core.async.t_cljs$core$async27986(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27987));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27986(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27091__auto___28150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___28150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___28150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28090){
var state_val_28091 = (state_28090[(1)]);
if((state_val_28091 === (7))){
var inst_28005 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28092_28151 = state_28090__$1;
(statearr_28092_28151[(2)] = inst_28005);

(statearr_28092_28151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (20))){
var inst_28017 = (state_28090[(7)]);
var state_28090__$1 = state_28090;
var statearr_28093_28152 = state_28090__$1;
(statearr_28093_28152[(2)] = inst_28017);

(statearr_28093_28152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (27))){
var state_28090__$1 = state_28090;
var statearr_28094_28153 = state_28090__$1;
(statearr_28094_28153[(2)] = null);

(statearr_28094_28153[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (1))){
var inst_27992 = (state_28090[(8)]);
var inst_27992__$1 = calc_state.call(null);
var inst_27994 = (inst_27992__$1 == null);
var inst_27995 = cljs.core.not.call(null,inst_27994);
var state_28090__$1 = (function (){var statearr_28095 = state_28090;
(statearr_28095[(8)] = inst_27992__$1);

return statearr_28095;
})();
if(inst_27995){
var statearr_28096_28154 = state_28090__$1;
(statearr_28096_28154[(1)] = (2));

} else {
var statearr_28097_28155 = state_28090__$1;
(statearr_28097_28155[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (24))){
var inst_28041 = (state_28090[(9)]);
var inst_28064 = (state_28090[(10)]);
var inst_28050 = (state_28090[(11)]);
var inst_28064__$1 = inst_28041.call(null,inst_28050);
var state_28090__$1 = (function (){var statearr_28098 = state_28090;
(statearr_28098[(10)] = inst_28064__$1);

return statearr_28098;
})();
if(cljs.core.truth_(inst_28064__$1)){
var statearr_28099_28156 = state_28090__$1;
(statearr_28099_28156[(1)] = (29));

} else {
var statearr_28100_28157 = state_28090__$1;
(statearr_28100_28157[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (4))){
var inst_28008 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
if(cljs.core.truth_(inst_28008)){
var statearr_28101_28158 = state_28090__$1;
(statearr_28101_28158[(1)] = (8));

} else {
var statearr_28102_28159 = state_28090__$1;
(statearr_28102_28159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (15))){
var inst_28035 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
if(cljs.core.truth_(inst_28035)){
var statearr_28103_28160 = state_28090__$1;
(statearr_28103_28160[(1)] = (19));

} else {
var statearr_28104_28161 = state_28090__$1;
(statearr_28104_28161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (21))){
var inst_28040 = (state_28090[(12)]);
var inst_28040__$1 = (state_28090[(2)]);
var inst_28041 = cljs.core.get.call(null,inst_28040__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28042 = cljs.core.get.call(null,inst_28040__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28043 = cljs.core.get.call(null,inst_28040__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28090__$1 = (function (){var statearr_28105 = state_28090;
(statearr_28105[(9)] = inst_28041);

(statearr_28105[(13)] = inst_28042);

(statearr_28105[(12)] = inst_28040__$1);

return statearr_28105;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28090__$1,(22),inst_28043);
} else {
if((state_val_28091 === (31))){
var inst_28072 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
if(cljs.core.truth_(inst_28072)){
var statearr_28106_28162 = state_28090__$1;
(statearr_28106_28162[(1)] = (32));

} else {
var statearr_28107_28163 = state_28090__$1;
(statearr_28107_28163[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (32))){
var inst_28049 = (state_28090[(14)]);
var state_28090__$1 = state_28090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28090__$1,(35),out,inst_28049);
} else {
if((state_val_28091 === (33))){
var inst_28040 = (state_28090[(12)]);
var inst_28017 = inst_28040;
var state_28090__$1 = (function (){var statearr_28108 = state_28090;
(statearr_28108[(7)] = inst_28017);

return statearr_28108;
})();
var statearr_28109_28164 = state_28090__$1;
(statearr_28109_28164[(2)] = null);

(statearr_28109_28164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (13))){
var inst_28017 = (state_28090[(7)]);
var inst_28024 = inst_28017.cljs$lang$protocol_mask$partition0$;
var inst_28025 = (inst_28024 & (64));
var inst_28026 = inst_28017.cljs$core$ISeq$;
var inst_28027 = (cljs.core.PROTOCOL_SENTINEL === inst_28026);
var inst_28028 = ((inst_28025) || (inst_28027));
var state_28090__$1 = state_28090;
if(cljs.core.truth_(inst_28028)){
var statearr_28110_28165 = state_28090__$1;
(statearr_28110_28165[(1)] = (16));

} else {
var statearr_28111_28166 = state_28090__$1;
(statearr_28111_28166[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (22))){
var inst_28049 = (state_28090[(14)]);
var inst_28050 = (state_28090[(11)]);
var inst_28048 = (state_28090[(2)]);
var inst_28049__$1 = cljs.core.nth.call(null,inst_28048,(0),null);
var inst_28050__$1 = cljs.core.nth.call(null,inst_28048,(1),null);
var inst_28051 = (inst_28049__$1 == null);
var inst_28052 = cljs.core._EQ_.call(null,inst_28050__$1,change);
var inst_28053 = ((inst_28051) || (inst_28052));
var state_28090__$1 = (function (){var statearr_28112 = state_28090;
(statearr_28112[(14)] = inst_28049__$1);

(statearr_28112[(11)] = inst_28050__$1);

return statearr_28112;
})();
if(cljs.core.truth_(inst_28053)){
var statearr_28113_28167 = state_28090__$1;
(statearr_28113_28167[(1)] = (23));

} else {
var statearr_28114_28168 = state_28090__$1;
(statearr_28114_28168[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (36))){
var inst_28040 = (state_28090[(12)]);
var inst_28017 = inst_28040;
var state_28090__$1 = (function (){var statearr_28115 = state_28090;
(statearr_28115[(7)] = inst_28017);

return statearr_28115;
})();
var statearr_28116_28169 = state_28090__$1;
(statearr_28116_28169[(2)] = null);

(statearr_28116_28169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (29))){
var inst_28064 = (state_28090[(10)]);
var state_28090__$1 = state_28090;
var statearr_28117_28170 = state_28090__$1;
(statearr_28117_28170[(2)] = inst_28064);

(statearr_28117_28170[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (6))){
var state_28090__$1 = state_28090;
var statearr_28118_28171 = state_28090__$1;
(statearr_28118_28171[(2)] = false);

(statearr_28118_28171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (28))){
var inst_28060 = (state_28090[(2)]);
var inst_28061 = calc_state.call(null);
var inst_28017 = inst_28061;
var state_28090__$1 = (function (){var statearr_28119 = state_28090;
(statearr_28119[(15)] = inst_28060);

(statearr_28119[(7)] = inst_28017);

return statearr_28119;
})();
var statearr_28120_28172 = state_28090__$1;
(statearr_28120_28172[(2)] = null);

(statearr_28120_28172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (25))){
var inst_28086 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28121_28173 = state_28090__$1;
(statearr_28121_28173[(2)] = inst_28086);

(statearr_28121_28173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (34))){
var inst_28084 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28122_28174 = state_28090__$1;
(statearr_28122_28174[(2)] = inst_28084);

(statearr_28122_28174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (17))){
var state_28090__$1 = state_28090;
var statearr_28123_28175 = state_28090__$1;
(statearr_28123_28175[(2)] = false);

(statearr_28123_28175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (3))){
var state_28090__$1 = state_28090;
var statearr_28124_28176 = state_28090__$1;
(statearr_28124_28176[(2)] = false);

(statearr_28124_28176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (12))){
var inst_28088 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28090__$1,inst_28088);
} else {
if((state_val_28091 === (2))){
var inst_27992 = (state_28090[(8)]);
var inst_27997 = inst_27992.cljs$lang$protocol_mask$partition0$;
var inst_27998 = (inst_27997 & (64));
var inst_27999 = inst_27992.cljs$core$ISeq$;
var inst_28000 = (cljs.core.PROTOCOL_SENTINEL === inst_27999);
var inst_28001 = ((inst_27998) || (inst_28000));
var state_28090__$1 = state_28090;
if(cljs.core.truth_(inst_28001)){
var statearr_28125_28177 = state_28090__$1;
(statearr_28125_28177[(1)] = (5));

} else {
var statearr_28126_28178 = state_28090__$1;
(statearr_28126_28178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (23))){
var inst_28049 = (state_28090[(14)]);
var inst_28055 = (inst_28049 == null);
var state_28090__$1 = state_28090;
if(cljs.core.truth_(inst_28055)){
var statearr_28127_28179 = state_28090__$1;
(statearr_28127_28179[(1)] = (26));

} else {
var statearr_28128_28180 = state_28090__$1;
(statearr_28128_28180[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (35))){
var inst_28075 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
if(cljs.core.truth_(inst_28075)){
var statearr_28129_28181 = state_28090__$1;
(statearr_28129_28181[(1)] = (36));

} else {
var statearr_28130_28182 = state_28090__$1;
(statearr_28130_28182[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (19))){
var inst_28017 = (state_28090[(7)]);
var inst_28037 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28017);
var state_28090__$1 = state_28090;
var statearr_28131_28183 = state_28090__$1;
(statearr_28131_28183[(2)] = inst_28037);

(statearr_28131_28183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (11))){
var inst_28017 = (state_28090[(7)]);
var inst_28021 = (inst_28017 == null);
var inst_28022 = cljs.core.not.call(null,inst_28021);
var state_28090__$1 = state_28090;
if(inst_28022){
var statearr_28132_28184 = state_28090__$1;
(statearr_28132_28184[(1)] = (13));

} else {
var statearr_28133_28185 = state_28090__$1;
(statearr_28133_28185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (9))){
var inst_27992 = (state_28090[(8)]);
var state_28090__$1 = state_28090;
var statearr_28134_28186 = state_28090__$1;
(statearr_28134_28186[(2)] = inst_27992);

(statearr_28134_28186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (5))){
var state_28090__$1 = state_28090;
var statearr_28135_28187 = state_28090__$1;
(statearr_28135_28187[(2)] = true);

(statearr_28135_28187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (14))){
var state_28090__$1 = state_28090;
var statearr_28136_28188 = state_28090__$1;
(statearr_28136_28188[(2)] = false);

(statearr_28136_28188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (26))){
var inst_28050 = (state_28090[(11)]);
var inst_28057 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28050);
var state_28090__$1 = state_28090;
var statearr_28137_28189 = state_28090__$1;
(statearr_28137_28189[(2)] = inst_28057);

(statearr_28137_28189[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (16))){
var state_28090__$1 = state_28090;
var statearr_28138_28190 = state_28090__$1;
(statearr_28138_28190[(2)] = true);

(statearr_28138_28190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (38))){
var inst_28080 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28139_28191 = state_28090__$1;
(statearr_28139_28191[(2)] = inst_28080);

(statearr_28139_28191[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (30))){
var inst_28041 = (state_28090[(9)]);
var inst_28042 = (state_28090[(13)]);
var inst_28050 = (state_28090[(11)]);
var inst_28067 = cljs.core.empty_QMARK_.call(null,inst_28041);
var inst_28068 = inst_28042.call(null,inst_28050);
var inst_28069 = cljs.core.not.call(null,inst_28068);
var inst_28070 = ((inst_28067) && (inst_28069));
var state_28090__$1 = state_28090;
var statearr_28140_28192 = state_28090__$1;
(statearr_28140_28192[(2)] = inst_28070);

(statearr_28140_28192[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (10))){
var inst_27992 = (state_28090[(8)]);
var inst_28013 = (state_28090[(2)]);
var inst_28014 = cljs.core.get.call(null,inst_28013,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28015 = cljs.core.get.call(null,inst_28013,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28016 = cljs.core.get.call(null,inst_28013,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28017 = inst_27992;
var state_28090__$1 = (function (){var statearr_28141 = state_28090;
(statearr_28141[(7)] = inst_28017);

(statearr_28141[(16)] = inst_28015);

(statearr_28141[(17)] = inst_28014);

(statearr_28141[(18)] = inst_28016);

return statearr_28141;
})();
var statearr_28142_28193 = state_28090__$1;
(statearr_28142_28193[(2)] = null);

(statearr_28142_28193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (18))){
var inst_28032 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28143_28194 = state_28090__$1;
(statearr_28143_28194[(2)] = inst_28032);

(statearr_28143_28194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (37))){
var state_28090__$1 = state_28090;
var statearr_28144_28195 = state_28090__$1;
(statearr_28144_28195[(2)] = null);

(statearr_28144_28195[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (8))){
var inst_27992 = (state_28090[(8)]);
var inst_28010 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27992);
var state_28090__$1 = state_28090;
var statearr_28145_28196 = state_28090__$1;
(statearr_28145_28196[(2)] = inst_28010);

(statearr_28145_28196[(1)] = (10));


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
});})(c__27091__auto___28150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27001__auto__,c__27091__auto___28150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27002__auto__ = null;
var cljs$core$async$mix_$_state_machine__27002__auto____0 = (function (){
var statearr_28146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28146[(0)] = cljs$core$async$mix_$_state_machine__27002__auto__);

(statearr_28146[(1)] = (1));

return statearr_28146;
});
var cljs$core$async$mix_$_state_machine__27002__auto____1 = (function (state_28090){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_28090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e28147){if((e28147 instanceof Object)){
var ex__27005__auto__ = e28147;
var statearr_28148_28197 = state_28090;
(statearr_28148_28197[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28198 = state_28090;
state_28090 = G__28198;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27002__auto__ = function(state_28090){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27002__auto____1.call(this,state_28090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27002__auto____0;
cljs$core$async$mix_$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27002__auto____1;
return cljs$core$async$mix_$_state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___28150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27093__auto__ = (function (){var statearr_28149 = f__27092__auto__.call(null);
(statearr_28149[(6)] = c__27091__auto___28150);

return statearr_28149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___28150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28200 = arguments.length;
switch (G__28200) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28204 = arguments.length;
switch (G__28204) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__28202_SHARP_){
if(cljs.core.truth_(p1__28202_SHARP_.call(null,topic))){
return p1__28202_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28202_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28205 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28206){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28206 = meta28206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28207,meta28206__$1){
var self__ = this;
var _28207__$1 = this;
return (new cljs.core.async.t_cljs$core$async28205(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28206__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28207){
var self__ = this;
var _28207__$1 = this;
return self__.meta28206;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28205.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28205.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28205.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28205.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28205.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28205.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28205.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28205.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28206","meta28206",-2011749364,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28205";

cljs.core.async.t_cljs$core$async28205.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28205");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28205.
 */
cljs.core.async.__GT_t_cljs$core$async28205 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28205(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28206){
return (new cljs.core.async.t_cljs$core$async28205(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28206));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28205(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27091__auto___28325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___28325,mults,ensure_mult,p){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___28325,mults,ensure_mult,p){
return (function (state_28279){
var state_val_28280 = (state_28279[(1)]);
if((state_val_28280 === (7))){
var inst_28275 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28281_28326 = state_28279__$1;
(statearr_28281_28326[(2)] = inst_28275);

(statearr_28281_28326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (20))){
var state_28279__$1 = state_28279;
var statearr_28282_28327 = state_28279__$1;
(statearr_28282_28327[(2)] = null);

(statearr_28282_28327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (1))){
var state_28279__$1 = state_28279;
var statearr_28283_28328 = state_28279__$1;
(statearr_28283_28328[(2)] = null);

(statearr_28283_28328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (24))){
var inst_28258 = (state_28279[(7)]);
var inst_28267 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28258);
var state_28279__$1 = state_28279;
var statearr_28284_28329 = state_28279__$1;
(statearr_28284_28329[(2)] = inst_28267);

(statearr_28284_28329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (4))){
var inst_28210 = (state_28279[(8)]);
var inst_28210__$1 = (state_28279[(2)]);
var inst_28211 = (inst_28210__$1 == null);
var state_28279__$1 = (function (){var statearr_28285 = state_28279;
(statearr_28285[(8)] = inst_28210__$1);

return statearr_28285;
})();
if(cljs.core.truth_(inst_28211)){
var statearr_28286_28330 = state_28279__$1;
(statearr_28286_28330[(1)] = (5));

} else {
var statearr_28287_28331 = state_28279__$1;
(statearr_28287_28331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (15))){
var inst_28252 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28288_28332 = state_28279__$1;
(statearr_28288_28332[(2)] = inst_28252);

(statearr_28288_28332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (21))){
var inst_28272 = (state_28279[(2)]);
var state_28279__$1 = (function (){var statearr_28289 = state_28279;
(statearr_28289[(9)] = inst_28272);

return statearr_28289;
})();
var statearr_28290_28333 = state_28279__$1;
(statearr_28290_28333[(2)] = null);

(statearr_28290_28333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (13))){
var inst_28234 = (state_28279[(10)]);
var inst_28236 = cljs.core.chunked_seq_QMARK_.call(null,inst_28234);
var state_28279__$1 = state_28279;
if(inst_28236){
var statearr_28291_28334 = state_28279__$1;
(statearr_28291_28334[(1)] = (16));

} else {
var statearr_28292_28335 = state_28279__$1;
(statearr_28292_28335[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (22))){
var inst_28264 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
if(cljs.core.truth_(inst_28264)){
var statearr_28293_28336 = state_28279__$1;
(statearr_28293_28336[(1)] = (23));

} else {
var statearr_28294_28337 = state_28279__$1;
(statearr_28294_28337[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (6))){
var inst_28258 = (state_28279[(7)]);
var inst_28260 = (state_28279[(11)]);
var inst_28210 = (state_28279[(8)]);
var inst_28258__$1 = topic_fn.call(null,inst_28210);
var inst_28259 = cljs.core.deref.call(null,mults);
var inst_28260__$1 = cljs.core.get.call(null,inst_28259,inst_28258__$1);
var state_28279__$1 = (function (){var statearr_28295 = state_28279;
(statearr_28295[(7)] = inst_28258__$1);

(statearr_28295[(11)] = inst_28260__$1);

return statearr_28295;
})();
if(cljs.core.truth_(inst_28260__$1)){
var statearr_28296_28338 = state_28279__$1;
(statearr_28296_28338[(1)] = (19));

} else {
var statearr_28297_28339 = state_28279__$1;
(statearr_28297_28339[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (25))){
var inst_28269 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28298_28340 = state_28279__$1;
(statearr_28298_28340[(2)] = inst_28269);

(statearr_28298_28340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (17))){
var inst_28234 = (state_28279[(10)]);
var inst_28243 = cljs.core.first.call(null,inst_28234);
var inst_28244 = cljs.core.async.muxch_STAR_.call(null,inst_28243);
var inst_28245 = cljs.core.async.close_BANG_.call(null,inst_28244);
var inst_28246 = cljs.core.next.call(null,inst_28234);
var inst_28220 = inst_28246;
var inst_28221 = null;
var inst_28222 = (0);
var inst_28223 = (0);
var state_28279__$1 = (function (){var statearr_28299 = state_28279;
(statearr_28299[(12)] = inst_28222);

(statearr_28299[(13)] = inst_28221);

(statearr_28299[(14)] = inst_28245);

(statearr_28299[(15)] = inst_28223);

(statearr_28299[(16)] = inst_28220);

return statearr_28299;
})();
var statearr_28300_28341 = state_28279__$1;
(statearr_28300_28341[(2)] = null);

(statearr_28300_28341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (3))){
var inst_28277 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28279__$1,inst_28277);
} else {
if((state_val_28280 === (12))){
var inst_28254 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28301_28342 = state_28279__$1;
(statearr_28301_28342[(2)] = inst_28254);

(statearr_28301_28342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (2))){
var state_28279__$1 = state_28279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28279__$1,(4),ch);
} else {
if((state_val_28280 === (23))){
var state_28279__$1 = state_28279;
var statearr_28302_28343 = state_28279__$1;
(statearr_28302_28343[(2)] = null);

(statearr_28302_28343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (19))){
var inst_28260 = (state_28279[(11)]);
var inst_28210 = (state_28279[(8)]);
var inst_28262 = cljs.core.async.muxch_STAR_.call(null,inst_28260);
var state_28279__$1 = state_28279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28279__$1,(22),inst_28262,inst_28210);
} else {
if((state_val_28280 === (11))){
var inst_28234 = (state_28279[(10)]);
var inst_28220 = (state_28279[(16)]);
var inst_28234__$1 = cljs.core.seq.call(null,inst_28220);
var state_28279__$1 = (function (){var statearr_28303 = state_28279;
(statearr_28303[(10)] = inst_28234__$1);

return statearr_28303;
})();
if(inst_28234__$1){
var statearr_28304_28344 = state_28279__$1;
(statearr_28304_28344[(1)] = (13));

} else {
var statearr_28305_28345 = state_28279__$1;
(statearr_28305_28345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (9))){
var inst_28256 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28306_28346 = state_28279__$1;
(statearr_28306_28346[(2)] = inst_28256);

(statearr_28306_28346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (5))){
var inst_28217 = cljs.core.deref.call(null,mults);
var inst_28218 = cljs.core.vals.call(null,inst_28217);
var inst_28219 = cljs.core.seq.call(null,inst_28218);
var inst_28220 = inst_28219;
var inst_28221 = null;
var inst_28222 = (0);
var inst_28223 = (0);
var state_28279__$1 = (function (){var statearr_28307 = state_28279;
(statearr_28307[(12)] = inst_28222);

(statearr_28307[(13)] = inst_28221);

(statearr_28307[(15)] = inst_28223);

(statearr_28307[(16)] = inst_28220);

return statearr_28307;
})();
var statearr_28308_28347 = state_28279__$1;
(statearr_28308_28347[(2)] = null);

(statearr_28308_28347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (14))){
var state_28279__$1 = state_28279;
var statearr_28312_28348 = state_28279__$1;
(statearr_28312_28348[(2)] = null);

(statearr_28312_28348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (16))){
var inst_28234 = (state_28279[(10)]);
var inst_28238 = cljs.core.chunk_first.call(null,inst_28234);
var inst_28239 = cljs.core.chunk_rest.call(null,inst_28234);
var inst_28240 = cljs.core.count.call(null,inst_28238);
var inst_28220 = inst_28239;
var inst_28221 = inst_28238;
var inst_28222 = inst_28240;
var inst_28223 = (0);
var state_28279__$1 = (function (){var statearr_28313 = state_28279;
(statearr_28313[(12)] = inst_28222);

(statearr_28313[(13)] = inst_28221);

(statearr_28313[(15)] = inst_28223);

(statearr_28313[(16)] = inst_28220);

return statearr_28313;
})();
var statearr_28314_28349 = state_28279__$1;
(statearr_28314_28349[(2)] = null);

(statearr_28314_28349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (10))){
var inst_28222 = (state_28279[(12)]);
var inst_28221 = (state_28279[(13)]);
var inst_28223 = (state_28279[(15)]);
var inst_28220 = (state_28279[(16)]);
var inst_28228 = cljs.core._nth.call(null,inst_28221,inst_28223);
var inst_28229 = cljs.core.async.muxch_STAR_.call(null,inst_28228);
var inst_28230 = cljs.core.async.close_BANG_.call(null,inst_28229);
var inst_28231 = (inst_28223 + (1));
var tmp28309 = inst_28222;
var tmp28310 = inst_28221;
var tmp28311 = inst_28220;
var inst_28220__$1 = tmp28311;
var inst_28221__$1 = tmp28310;
var inst_28222__$1 = tmp28309;
var inst_28223__$1 = inst_28231;
var state_28279__$1 = (function (){var statearr_28315 = state_28279;
(statearr_28315[(12)] = inst_28222__$1);

(statearr_28315[(17)] = inst_28230);

(statearr_28315[(13)] = inst_28221__$1);

(statearr_28315[(15)] = inst_28223__$1);

(statearr_28315[(16)] = inst_28220__$1);

return statearr_28315;
})();
var statearr_28316_28350 = state_28279__$1;
(statearr_28316_28350[(2)] = null);

(statearr_28316_28350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (18))){
var inst_28249 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28317_28351 = state_28279__$1;
(statearr_28317_28351[(2)] = inst_28249);

(statearr_28317_28351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (8))){
var inst_28222 = (state_28279[(12)]);
var inst_28223 = (state_28279[(15)]);
var inst_28225 = (inst_28223 < inst_28222);
var inst_28226 = inst_28225;
var state_28279__$1 = state_28279;
if(cljs.core.truth_(inst_28226)){
var statearr_28318_28352 = state_28279__$1;
(statearr_28318_28352[(1)] = (10));

} else {
var statearr_28319_28353 = state_28279__$1;
(statearr_28319_28353[(1)] = (11));

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
});})(c__27091__auto___28325,mults,ensure_mult,p))
;
return ((function (switch__27001__auto__,c__27091__auto___28325,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_28320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28320[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_28320[(1)] = (1));

return statearr_28320;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_28279){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_28279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e28321){if((e28321 instanceof Object)){
var ex__27005__auto__ = e28321;
var statearr_28322_28354 = state_28279;
(statearr_28322_28354[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28355 = state_28279;
state_28279 = G__28355;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_28279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_28279);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___28325,mults,ensure_mult,p))
})();
var state__27093__auto__ = (function (){var statearr_28323 = f__27092__auto__.call(null);
(statearr_28323[(6)] = c__27091__auto___28325);

return statearr_28323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___28325,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28357 = arguments.length;
switch (G__28357) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28360 = arguments.length;
switch (G__28360) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28363 = arguments.length;
switch (G__28363) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27091__auto___28430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___28430,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___28430,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28402){
var state_val_28403 = (state_28402[(1)]);
if((state_val_28403 === (7))){
var state_28402__$1 = state_28402;
var statearr_28404_28431 = state_28402__$1;
(statearr_28404_28431[(2)] = null);

(statearr_28404_28431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (1))){
var state_28402__$1 = state_28402;
var statearr_28405_28432 = state_28402__$1;
(statearr_28405_28432[(2)] = null);

(statearr_28405_28432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (4))){
var inst_28366 = (state_28402[(7)]);
var inst_28368 = (inst_28366 < cnt);
var state_28402__$1 = state_28402;
if(cljs.core.truth_(inst_28368)){
var statearr_28406_28433 = state_28402__$1;
(statearr_28406_28433[(1)] = (6));

} else {
var statearr_28407_28434 = state_28402__$1;
(statearr_28407_28434[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (15))){
var inst_28398 = (state_28402[(2)]);
var state_28402__$1 = state_28402;
var statearr_28408_28435 = state_28402__$1;
(statearr_28408_28435[(2)] = inst_28398);

(statearr_28408_28435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (13))){
var inst_28391 = cljs.core.async.close_BANG_.call(null,out);
var state_28402__$1 = state_28402;
var statearr_28409_28436 = state_28402__$1;
(statearr_28409_28436[(2)] = inst_28391);

(statearr_28409_28436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (6))){
var state_28402__$1 = state_28402;
var statearr_28410_28437 = state_28402__$1;
(statearr_28410_28437[(2)] = null);

(statearr_28410_28437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (3))){
var inst_28400 = (state_28402[(2)]);
var state_28402__$1 = state_28402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28402__$1,inst_28400);
} else {
if((state_val_28403 === (12))){
var inst_28388 = (state_28402[(8)]);
var inst_28388__$1 = (state_28402[(2)]);
var inst_28389 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28388__$1);
var state_28402__$1 = (function (){var statearr_28411 = state_28402;
(statearr_28411[(8)] = inst_28388__$1);

return statearr_28411;
})();
if(cljs.core.truth_(inst_28389)){
var statearr_28412_28438 = state_28402__$1;
(statearr_28412_28438[(1)] = (13));

} else {
var statearr_28413_28439 = state_28402__$1;
(statearr_28413_28439[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (2))){
var inst_28365 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28366 = (0);
var state_28402__$1 = (function (){var statearr_28414 = state_28402;
(statearr_28414[(7)] = inst_28366);

(statearr_28414[(9)] = inst_28365);

return statearr_28414;
})();
var statearr_28415_28440 = state_28402__$1;
(statearr_28415_28440[(2)] = null);

(statearr_28415_28440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (11))){
var inst_28366 = (state_28402[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28402,(10),Object,null,(9));
var inst_28375 = chs__$1.call(null,inst_28366);
var inst_28376 = done.call(null,inst_28366);
var inst_28377 = cljs.core.async.take_BANG_.call(null,inst_28375,inst_28376);
var state_28402__$1 = state_28402;
var statearr_28416_28441 = state_28402__$1;
(statearr_28416_28441[(2)] = inst_28377);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28402__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (9))){
var inst_28366 = (state_28402[(7)]);
var inst_28379 = (state_28402[(2)]);
var inst_28380 = (inst_28366 + (1));
var inst_28366__$1 = inst_28380;
var state_28402__$1 = (function (){var statearr_28417 = state_28402;
(statearr_28417[(7)] = inst_28366__$1);

(statearr_28417[(10)] = inst_28379);

return statearr_28417;
})();
var statearr_28418_28442 = state_28402__$1;
(statearr_28418_28442[(2)] = null);

(statearr_28418_28442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (5))){
var inst_28386 = (state_28402[(2)]);
var state_28402__$1 = (function (){var statearr_28419 = state_28402;
(statearr_28419[(11)] = inst_28386);

return statearr_28419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28402__$1,(12),dchan);
} else {
if((state_val_28403 === (14))){
var inst_28388 = (state_28402[(8)]);
var inst_28393 = cljs.core.apply.call(null,f,inst_28388);
var state_28402__$1 = state_28402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28402__$1,(16),out,inst_28393);
} else {
if((state_val_28403 === (16))){
var inst_28395 = (state_28402[(2)]);
var state_28402__$1 = (function (){var statearr_28420 = state_28402;
(statearr_28420[(12)] = inst_28395);

return statearr_28420;
})();
var statearr_28421_28443 = state_28402__$1;
(statearr_28421_28443[(2)] = null);

(statearr_28421_28443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (10))){
var inst_28370 = (state_28402[(2)]);
var inst_28371 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28402__$1 = (function (){var statearr_28422 = state_28402;
(statearr_28422[(13)] = inst_28370);

return statearr_28422;
})();
var statearr_28423_28444 = state_28402__$1;
(statearr_28423_28444[(2)] = inst_28371);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28402__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (8))){
var inst_28384 = (state_28402[(2)]);
var state_28402__$1 = state_28402;
var statearr_28424_28445 = state_28402__$1;
(statearr_28424_28445[(2)] = inst_28384);

(statearr_28424_28445[(1)] = (5));


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
});})(c__27091__auto___28430,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27001__auto__,c__27091__auto___28430,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_28425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28425[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_28425[(1)] = (1));

return statearr_28425;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_28402){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_28402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e28426){if((e28426 instanceof Object)){
var ex__27005__auto__ = e28426;
var statearr_28427_28446 = state_28402;
(statearr_28427_28446[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28447 = state_28402;
state_28402 = G__28447;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_28402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_28402);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___28430,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27093__auto__ = (function (){var statearr_28428 = f__27092__auto__.call(null);
(statearr_28428[(6)] = c__27091__auto___28430);

return statearr_28428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___28430,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28450 = arguments.length;
switch (G__28450) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27091__auto___28504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___28504,out){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___28504,out){
return (function (state_28482){
var state_val_28483 = (state_28482[(1)]);
if((state_val_28483 === (7))){
var inst_28462 = (state_28482[(7)]);
var inst_28461 = (state_28482[(8)]);
var inst_28461__$1 = (state_28482[(2)]);
var inst_28462__$1 = cljs.core.nth.call(null,inst_28461__$1,(0),null);
var inst_28463 = cljs.core.nth.call(null,inst_28461__$1,(1),null);
var inst_28464 = (inst_28462__$1 == null);
var state_28482__$1 = (function (){var statearr_28484 = state_28482;
(statearr_28484[(9)] = inst_28463);

(statearr_28484[(7)] = inst_28462__$1);

(statearr_28484[(8)] = inst_28461__$1);

return statearr_28484;
})();
if(cljs.core.truth_(inst_28464)){
var statearr_28485_28505 = state_28482__$1;
(statearr_28485_28505[(1)] = (8));

} else {
var statearr_28486_28506 = state_28482__$1;
(statearr_28486_28506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (1))){
var inst_28451 = cljs.core.vec.call(null,chs);
var inst_28452 = inst_28451;
var state_28482__$1 = (function (){var statearr_28487 = state_28482;
(statearr_28487[(10)] = inst_28452);

return statearr_28487;
})();
var statearr_28488_28507 = state_28482__$1;
(statearr_28488_28507[(2)] = null);

(statearr_28488_28507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (4))){
var inst_28452 = (state_28482[(10)]);
var state_28482__$1 = state_28482;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28482__$1,(7),inst_28452);
} else {
if((state_val_28483 === (6))){
var inst_28478 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
var statearr_28489_28508 = state_28482__$1;
(statearr_28489_28508[(2)] = inst_28478);

(statearr_28489_28508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (3))){
var inst_28480 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28482__$1,inst_28480);
} else {
if((state_val_28483 === (2))){
var inst_28452 = (state_28482[(10)]);
var inst_28454 = cljs.core.count.call(null,inst_28452);
var inst_28455 = (inst_28454 > (0));
var state_28482__$1 = state_28482;
if(cljs.core.truth_(inst_28455)){
var statearr_28491_28509 = state_28482__$1;
(statearr_28491_28509[(1)] = (4));

} else {
var statearr_28492_28510 = state_28482__$1;
(statearr_28492_28510[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (11))){
var inst_28452 = (state_28482[(10)]);
var inst_28471 = (state_28482[(2)]);
var tmp28490 = inst_28452;
var inst_28452__$1 = tmp28490;
var state_28482__$1 = (function (){var statearr_28493 = state_28482;
(statearr_28493[(11)] = inst_28471);

(statearr_28493[(10)] = inst_28452__$1);

return statearr_28493;
})();
var statearr_28494_28511 = state_28482__$1;
(statearr_28494_28511[(2)] = null);

(statearr_28494_28511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (9))){
var inst_28462 = (state_28482[(7)]);
var state_28482__$1 = state_28482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28482__$1,(11),out,inst_28462);
} else {
if((state_val_28483 === (5))){
var inst_28476 = cljs.core.async.close_BANG_.call(null,out);
var state_28482__$1 = state_28482;
var statearr_28495_28512 = state_28482__$1;
(statearr_28495_28512[(2)] = inst_28476);

(statearr_28495_28512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (10))){
var inst_28474 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
var statearr_28496_28513 = state_28482__$1;
(statearr_28496_28513[(2)] = inst_28474);

(statearr_28496_28513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (8))){
var inst_28463 = (state_28482[(9)]);
var inst_28452 = (state_28482[(10)]);
var inst_28462 = (state_28482[(7)]);
var inst_28461 = (state_28482[(8)]);
var inst_28466 = (function (){var cs = inst_28452;
var vec__28457 = inst_28461;
var v = inst_28462;
var c = inst_28463;
return ((function (cs,vec__28457,v,c,inst_28463,inst_28452,inst_28462,inst_28461,state_val_28483,c__27091__auto___28504,out){
return (function (p1__28448_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28448_SHARP_);
});
;})(cs,vec__28457,v,c,inst_28463,inst_28452,inst_28462,inst_28461,state_val_28483,c__27091__auto___28504,out))
})();
var inst_28467 = cljs.core.filterv.call(null,inst_28466,inst_28452);
var inst_28452__$1 = inst_28467;
var state_28482__$1 = (function (){var statearr_28497 = state_28482;
(statearr_28497[(10)] = inst_28452__$1);

return statearr_28497;
})();
var statearr_28498_28514 = state_28482__$1;
(statearr_28498_28514[(2)] = null);

(statearr_28498_28514[(1)] = (2));


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
});})(c__27091__auto___28504,out))
;
return ((function (switch__27001__auto__,c__27091__auto___28504,out){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_28499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28499[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_28499[(1)] = (1));

return statearr_28499;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_28482){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_28482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e28500){if((e28500 instanceof Object)){
var ex__27005__auto__ = e28500;
var statearr_28501_28515 = state_28482;
(statearr_28501_28515[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28516 = state_28482;
state_28482 = G__28516;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_28482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_28482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___28504,out))
})();
var state__27093__auto__ = (function (){var statearr_28502 = f__27092__auto__.call(null);
(statearr_28502[(6)] = c__27091__auto___28504);

return statearr_28502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___28504,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28518 = arguments.length;
switch (G__28518) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27091__auto___28563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___28563,out){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___28563,out){
return (function (state_28542){
var state_val_28543 = (state_28542[(1)]);
if((state_val_28543 === (7))){
var inst_28524 = (state_28542[(7)]);
var inst_28524__$1 = (state_28542[(2)]);
var inst_28525 = (inst_28524__$1 == null);
var inst_28526 = cljs.core.not.call(null,inst_28525);
var state_28542__$1 = (function (){var statearr_28544 = state_28542;
(statearr_28544[(7)] = inst_28524__$1);

return statearr_28544;
})();
if(inst_28526){
var statearr_28545_28564 = state_28542__$1;
(statearr_28545_28564[(1)] = (8));

} else {
var statearr_28546_28565 = state_28542__$1;
(statearr_28546_28565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (1))){
var inst_28519 = (0);
var state_28542__$1 = (function (){var statearr_28547 = state_28542;
(statearr_28547[(8)] = inst_28519);

return statearr_28547;
})();
var statearr_28548_28566 = state_28542__$1;
(statearr_28548_28566[(2)] = null);

(statearr_28548_28566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (4))){
var state_28542__$1 = state_28542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28542__$1,(7),ch);
} else {
if((state_val_28543 === (6))){
var inst_28537 = (state_28542[(2)]);
var state_28542__$1 = state_28542;
var statearr_28549_28567 = state_28542__$1;
(statearr_28549_28567[(2)] = inst_28537);

(statearr_28549_28567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (3))){
var inst_28539 = (state_28542[(2)]);
var inst_28540 = cljs.core.async.close_BANG_.call(null,out);
var state_28542__$1 = (function (){var statearr_28550 = state_28542;
(statearr_28550[(9)] = inst_28539);

return statearr_28550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28542__$1,inst_28540);
} else {
if((state_val_28543 === (2))){
var inst_28519 = (state_28542[(8)]);
var inst_28521 = (inst_28519 < n);
var state_28542__$1 = state_28542;
if(cljs.core.truth_(inst_28521)){
var statearr_28551_28568 = state_28542__$1;
(statearr_28551_28568[(1)] = (4));

} else {
var statearr_28552_28569 = state_28542__$1;
(statearr_28552_28569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (11))){
var inst_28519 = (state_28542[(8)]);
var inst_28529 = (state_28542[(2)]);
var inst_28530 = (inst_28519 + (1));
var inst_28519__$1 = inst_28530;
var state_28542__$1 = (function (){var statearr_28553 = state_28542;
(statearr_28553[(10)] = inst_28529);

(statearr_28553[(8)] = inst_28519__$1);

return statearr_28553;
})();
var statearr_28554_28570 = state_28542__$1;
(statearr_28554_28570[(2)] = null);

(statearr_28554_28570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (9))){
var state_28542__$1 = state_28542;
var statearr_28555_28571 = state_28542__$1;
(statearr_28555_28571[(2)] = null);

(statearr_28555_28571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (5))){
var state_28542__$1 = state_28542;
var statearr_28556_28572 = state_28542__$1;
(statearr_28556_28572[(2)] = null);

(statearr_28556_28572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (10))){
var inst_28534 = (state_28542[(2)]);
var state_28542__$1 = state_28542;
var statearr_28557_28573 = state_28542__$1;
(statearr_28557_28573[(2)] = inst_28534);

(statearr_28557_28573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28543 === (8))){
var inst_28524 = (state_28542[(7)]);
var state_28542__$1 = state_28542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28542__$1,(11),out,inst_28524);
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
});})(c__27091__auto___28563,out))
;
return ((function (switch__27001__auto__,c__27091__auto___28563,out){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_28558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28558[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_28558[(1)] = (1));

return statearr_28558;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_28542){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_28542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e28559){if((e28559 instanceof Object)){
var ex__27005__auto__ = e28559;
var statearr_28560_28574 = state_28542;
(statearr_28560_28574[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28575 = state_28542;
state_28542 = G__28575;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_28542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_28542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___28563,out))
})();
var state__27093__auto__ = (function (){var statearr_28561 = f__27092__auto__.call(null);
(statearr_28561[(6)] = c__27091__auto___28563);

return statearr_28561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___28563,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28577 = (function (f,ch,meta28578){
this.f = f;
this.ch = ch;
this.meta28578 = meta28578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28579,meta28578__$1){
var self__ = this;
var _28579__$1 = this;
return (new cljs.core.async.t_cljs$core$async28577(self__.f,self__.ch,meta28578__$1));
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28579){
var self__ = this;
var _28579__$1 = this;
return self__.meta28578;
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28580 = (function (f,ch,meta28578,_,fn1,meta28581){
this.f = f;
this.ch = ch;
this.meta28578 = meta28578;
this._ = _;
this.fn1 = fn1;
this.meta28581 = meta28581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28582,meta28581__$1){
var self__ = this;
var _28582__$1 = this;
return (new cljs.core.async.t_cljs$core$async28580(self__.f,self__.ch,self__.meta28578,self__._,self__.fn1,meta28581__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28582){
var self__ = this;
var _28582__$1 = this;
return self__.meta28581;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28580.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28580.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28576_SHARP_){
return f1.call(null,(((p1__28576_SHARP_ == null))?null:self__.f.call(null,p1__28576_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28580.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28578","meta28578",1891737923,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28577","cljs.core.async/t_cljs$core$async28577",-1074563456,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28581","meta28581",1409764902,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28580";

cljs.core.async.t_cljs$core$async28580.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28580");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28580.
 */
cljs.core.async.__GT_t_cljs$core$async28580 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28580(f__$1,ch__$1,meta28578__$1,___$2,fn1__$1,meta28581){
return (new cljs.core.async.t_cljs$core$async28580(f__$1,ch__$1,meta28578__$1,___$2,fn1__$1,meta28581));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28580(self__.f,self__.ch,self__.meta28578,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28578","meta28578",1891737923,null)], null);
});

cljs.core.async.t_cljs$core$async28577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28577";

cljs.core.async.t_cljs$core$async28577.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28577");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28577.
 */
cljs.core.async.__GT_t_cljs$core$async28577 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28577(f__$1,ch__$1,meta28578){
return (new cljs.core.async.t_cljs$core$async28577(f__$1,ch__$1,meta28578));
});

}

return (new cljs.core.async.t_cljs$core$async28577(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28583 = (function (f,ch,meta28584){
this.f = f;
this.ch = ch;
this.meta28584 = meta28584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28585,meta28584__$1){
var self__ = this;
var _28585__$1 = this;
return (new cljs.core.async.t_cljs$core$async28583(self__.f,self__.ch,meta28584__$1));
});

cljs.core.async.t_cljs$core$async28583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28585){
var self__ = this;
var _28585__$1 = this;
return self__.meta28584;
});

cljs.core.async.t_cljs$core$async28583.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28583.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28583.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28583.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28583.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28583.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28584","meta28584",240461383,null)], null);
});

cljs.core.async.t_cljs$core$async28583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28583";

cljs.core.async.t_cljs$core$async28583.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28583");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28583.
 */
cljs.core.async.__GT_t_cljs$core$async28583 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28583(f__$1,ch__$1,meta28584){
return (new cljs.core.async.t_cljs$core$async28583(f__$1,ch__$1,meta28584));
});

}

return (new cljs.core.async.t_cljs$core$async28583(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28586 = (function (p,ch,meta28587){
this.p = p;
this.ch = ch;
this.meta28587 = meta28587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28588,meta28587__$1){
var self__ = this;
var _28588__$1 = this;
return (new cljs.core.async.t_cljs$core$async28586(self__.p,self__.ch,meta28587__$1));
});

cljs.core.async.t_cljs$core$async28586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28588){
var self__ = this;
var _28588__$1 = this;
return self__.meta28587;
});

cljs.core.async.t_cljs$core$async28586.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28586.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28586.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28586.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28586.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28586.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28586.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28587","meta28587",923838181,null)], null);
});

cljs.core.async.t_cljs$core$async28586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28586";

cljs.core.async.t_cljs$core$async28586.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28586");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28586.
 */
cljs.core.async.__GT_t_cljs$core$async28586 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28586(p__$1,ch__$1,meta28587){
return (new cljs.core.async.t_cljs$core$async28586(p__$1,ch__$1,meta28587));
});

}

return (new cljs.core.async.t_cljs$core$async28586(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28590 = arguments.length;
switch (G__28590) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27091__auto___28630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___28630,out){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___28630,out){
return (function (state_28611){
var state_val_28612 = (state_28611[(1)]);
if((state_val_28612 === (7))){
var inst_28607 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28613_28631 = state_28611__$1;
(statearr_28613_28631[(2)] = inst_28607);

(statearr_28613_28631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (1))){
var state_28611__$1 = state_28611;
var statearr_28614_28632 = state_28611__$1;
(statearr_28614_28632[(2)] = null);

(statearr_28614_28632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (4))){
var inst_28593 = (state_28611[(7)]);
var inst_28593__$1 = (state_28611[(2)]);
var inst_28594 = (inst_28593__$1 == null);
var state_28611__$1 = (function (){var statearr_28615 = state_28611;
(statearr_28615[(7)] = inst_28593__$1);

return statearr_28615;
})();
if(cljs.core.truth_(inst_28594)){
var statearr_28616_28633 = state_28611__$1;
(statearr_28616_28633[(1)] = (5));

} else {
var statearr_28617_28634 = state_28611__$1;
(statearr_28617_28634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (6))){
var inst_28593 = (state_28611[(7)]);
var inst_28598 = p.call(null,inst_28593);
var state_28611__$1 = state_28611;
if(cljs.core.truth_(inst_28598)){
var statearr_28618_28635 = state_28611__$1;
(statearr_28618_28635[(1)] = (8));

} else {
var statearr_28619_28636 = state_28611__$1;
(statearr_28619_28636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (3))){
var inst_28609 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28611__$1,inst_28609);
} else {
if((state_val_28612 === (2))){
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28611__$1,(4),ch);
} else {
if((state_val_28612 === (11))){
var inst_28601 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28620_28637 = state_28611__$1;
(statearr_28620_28637[(2)] = inst_28601);

(statearr_28620_28637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (9))){
var state_28611__$1 = state_28611;
var statearr_28621_28638 = state_28611__$1;
(statearr_28621_28638[(2)] = null);

(statearr_28621_28638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (5))){
var inst_28596 = cljs.core.async.close_BANG_.call(null,out);
var state_28611__$1 = state_28611;
var statearr_28622_28639 = state_28611__$1;
(statearr_28622_28639[(2)] = inst_28596);

(statearr_28622_28639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (10))){
var inst_28604 = (state_28611[(2)]);
var state_28611__$1 = (function (){var statearr_28623 = state_28611;
(statearr_28623[(8)] = inst_28604);

return statearr_28623;
})();
var statearr_28624_28640 = state_28611__$1;
(statearr_28624_28640[(2)] = null);

(statearr_28624_28640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (8))){
var inst_28593 = (state_28611[(7)]);
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28611__$1,(11),out,inst_28593);
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
});})(c__27091__auto___28630,out))
;
return ((function (switch__27001__auto__,c__27091__auto___28630,out){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_28625 = [null,null,null,null,null,null,null,null,null];
(statearr_28625[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_28625[(1)] = (1));

return statearr_28625;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_28611){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_28611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e28626){if((e28626 instanceof Object)){
var ex__27005__auto__ = e28626;
var statearr_28627_28641 = state_28611;
(statearr_28627_28641[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28642 = state_28611;
state_28611 = G__28642;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_28611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_28611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___28630,out))
})();
var state__27093__auto__ = (function (){var statearr_28628 = f__27092__auto__.call(null);
(statearr_28628[(6)] = c__27091__auto___28630);

return statearr_28628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___28630,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28644 = arguments.length;
switch (G__28644) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto__){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto__){
return (function (state_28707){
var state_val_28708 = (state_28707[(1)]);
if((state_val_28708 === (7))){
var inst_28703 = (state_28707[(2)]);
var state_28707__$1 = state_28707;
var statearr_28709_28747 = state_28707__$1;
(statearr_28709_28747[(2)] = inst_28703);

(statearr_28709_28747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (20))){
var inst_28673 = (state_28707[(7)]);
var inst_28684 = (state_28707[(2)]);
var inst_28685 = cljs.core.next.call(null,inst_28673);
var inst_28659 = inst_28685;
var inst_28660 = null;
var inst_28661 = (0);
var inst_28662 = (0);
var state_28707__$1 = (function (){var statearr_28710 = state_28707;
(statearr_28710[(8)] = inst_28659);

(statearr_28710[(9)] = inst_28662);

(statearr_28710[(10)] = inst_28661);

(statearr_28710[(11)] = inst_28684);

(statearr_28710[(12)] = inst_28660);

return statearr_28710;
})();
var statearr_28711_28748 = state_28707__$1;
(statearr_28711_28748[(2)] = null);

(statearr_28711_28748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (1))){
var state_28707__$1 = state_28707;
var statearr_28712_28749 = state_28707__$1;
(statearr_28712_28749[(2)] = null);

(statearr_28712_28749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (4))){
var inst_28648 = (state_28707[(13)]);
var inst_28648__$1 = (state_28707[(2)]);
var inst_28649 = (inst_28648__$1 == null);
var state_28707__$1 = (function (){var statearr_28713 = state_28707;
(statearr_28713[(13)] = inst_28648__$1);

return statearr_28713;
})();
if(cljs.core.truth_(inst_28649)){
var statearr_28714_28750 = state_28707__$1;
(statearr_28714_28750[(1)] = (5));

} else {
var statearr_28715_28751 = state_28707__$1;
(statearr_28715_28751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (15))){
var state_28707__$1 = state_28707;
var statearr_28719_28752 = state_28707__$1;
(statearr_28719_28752[(2)] = null);

(statearr_28719_28752[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (21))){
var state_28707__$1 = state_28707;
var statearr_28720_28753 = state_28707__$1;
(statearr_28720_28753[(2)] = null);

(statearr_28720_28753[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (13))){
var inst_28659 = (state_28707[(8)]);
var inst_28662 = (state_28707[(9)]);
var inst_28661 = (state_28707[(10)]);
var inst_28660 = (state_28707[(12)]);
var inst_28669 = (state_28707[(2)]);
var inst_28670 = (inst_28662 + (1));
var tmp28716 = inst_28659;
var tmp28717 = inst_28661;
var tmp28718 = inst_28660;
var inst_28659__$1 = tmp28716;
var inst_28660__$1 = tmp28718;
var inst_28661__$1 = tmp28717;
var inst_28662__$1 = inst_28670;
var state_28707__$1 = (function (){var statearr_28721 = state_28707;
(statearr_28721[(8)] = inst_28659__$1);

(statearr_28721[(9)] = inst_28662__$1);

(statearr_28721[(10)] = inst_28661__$1);

(statearr_28721[(14)] = inst_28669);

(statearr_28721[(12)] = inst_28660__$1);

return statearr_28721;
})();
var statearr_28722_28754 = state_28707__$1;
(statearr_28722_28754[(2)] = null);

(statearr_28722_28754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (22))){
var state_28707__$1 = state_28707;
var statearr_28723_28755 = state_28707__$1;
(statearr_28723_28755[(2)] = null);

(statearr_28723_28755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (6))){
var inst_28648 = (state_28707[(13)]);
var inst_28657 = f.call(null,inst_28648);
var inst_28658 = cljs.core.seq.call(null,inst_28657);
var inst_28659 = inst_28658;
var inst_28660 = null;
var inst_28661 = (0);
var inst_28662 = (0);
var state_28707__$1 = (function (){var statearr_28724 = state_28707;
(statearr_28724[(8)] = inst_28659);

(statearr_28724[(9)] = inst_28662);

(statearr_28724[(10)] = inst_28661);

(statearr_28724[(12)] = inst_28660);

return statearr_28724;
})();
var statearr_28725_28756 = state_28707__$1;
(statearr_28725_28756[(2)] = null);

(statearr_28725_28756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (17))){
var inst_28673 = (state_28707[(7)]);
var inst_28677 = cljs.core.chunk_first.call(null,inst_28673);
var inst_28678 = cljs.core.chunk_rest.call(null,inst_28673);
var inst_28679 = cljs.core.count.call(null,inst_28677);
var inst_28659 = inst_28678;
var inst_28660 = inst_28677;
var inst_28661 = inst_28679;
var inst_28662 = (0);
var state_28707__$1 = (function (){var statearr_28726 = state_28707;
(statearr_28726[(8)] = inst_28659);

(statearr_28726[(9)] = inst_28662);

(statearr_28726[(10)] = inst_28661);

(statearr_28726[(12)] = inst_28660);

return statearr_28726;
})();
var statearr_28727_28757 = state_28707__$1;
(statearr_28727_28757[(2)] = null);

(statearr_28727_28757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (3))){
var inst_28705 = (state_28707[(2)]);
var state_28707__$1 = state_28707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28707__$1,inst_28705);
} else {
if((state_val_28708 === (12))){
var inst_28693 = (state_28707[(2)]);
var state_28707__$1 = state_28707;
var statearr_28728_28758 = state_28707__$1;
(statearr_28728_28758[(2)] = inst_28693);

(statearr_28728_28758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (2))){
var state_28707__$1 = state_28707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28707__$1,(4),in$);
} else {
if((state_val_28708 === (23))){
var inst_28701 = (state_28707[(2)]);
var state_28707__$1 = state_28707;
var statearr_28729_28759 = state_28707__$1;
(statearr_28729_28759[(2)] = inst_28701);

(statearr_28729_28759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (19))){
var inst_28688 = (state_28707[(2)]);
var state_28707__$1 = state_28707;
var statearr_28730_28760 = state_28707__$1;
(statearr_28730_28760[(2)] = inst_28688);

(statearr_28730_28760[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (11))){
var inst_28659 = (state_28707[(8)]);
var inst_28673 = (state_28707[(7)]);
var inst_28673__$1 = cljs.core.seq.call(null,inst_28659);
var state_28707__$1 = (function (){var statearr_28731 = state_28707;
(statearr_28731[(7)] = inst_28673__$1);

return statearr_28731;
})();
if(inst_28673__$1){
var statearr_28732_28761 = state_28707__$1;
(statearr_28732_28761[(1)] = (14));

} else {
var statearr_28733_28762 = state_28707__$1;
(statearr_28733_28762[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (9))){
var inst_28695 = (state_28707[(2)]);
var inst_28696 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28707__$1 = (function (){var statearr_28734 = state_28707;
(statearr_28734[(15)] = inst_28695);

return statearr_28734;
})();
if(cljs.core.truth_(inst_28696)){
var statearr_28735_28763 = state_28707__$1;
(statearr_28735_28763[(1)] = (21));

} else {
var statearr_28736_28764 = state_28707__$1;
(statearr_28736_28764[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (5))){
var inst_28651 = cljs.core.async.close_BANG_.call(null,out);
var state_28707__$1 = state_28707;
var statearr_28737_28765 = state_28707__$1;
(statearr_28737_28765[(2)] = inst_28651);

(statearr_28737_28765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (14))){
var inst_28673 = (state_28707[(7)]);
var inst_28675 = cljs.core.chunked_seq_QMARK_.call(null,inst_28673);
var state_28707__$1 = state_28707;
if(inst_28675){
var statearr_28738_28766 = state_28707__$1;
(statearr_28738_28766[(1)] = (17));

} else {
var statearr_28739_28767 = state_28707__$1;
(statearr_28739_28767[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (16))){
var inst_28691 = (state_28707[(2)]);
var state_28707__$1 = state_28707;
var statearr_28740_28768 = state_28707__$1;
(statearr_28740_28768[(2)] = inst_28691);

(statearr_28740_28768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28708 === (10))){
var inst_28662 = (state_28707[(9)]);
var inst_28660 = (state_28707[(12)]);
var inst_28667 = cljs.core._nth.call(null,inst_28660,inst_28662);
var state_28707__$1 = state_28707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28707__$1,(13),out,inst_28667);
} else {
if((state_val_28708 === (18))){
var inst_28673 = (state_28707[(7)]);
var inst_28682 = cljs.core.first.call(null,inst_28673);
var state_28707__$1 = state_28707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28707__$1,(20),out,inst_28682);
} else {
if((state_val_28708 === (8))){
var inst_28662 = (state_28707[(9)]);
var inst_28661 = (state_28707[(10)]);
var inst_28664 = (inst_28662 < inst_28661);
var inst_28665 = inst_28664;
var state_28707__$1 = state_28707;
if(cljs.core.truth_(inst_28665)){
var statearr_28741_28769 = state_28707__$1;
(statearr_28741_28769[(1)] = (10));

} else {
var statearr_28742_28770 = state_28707__$1;
(statearr_28742_28770[(1)] = (11));

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
});})(c__27091__auto__))
;
return ((function (switch__27001__auto__,c__27091__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27002__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27002__auto____0 = (function (){
var statearr_28743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28743[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27002__auto__);

(statearr_28743[(1)] = (1));

return statearr_28743;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27002__auto____1 = (function (state_28707){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_28707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e28744){if((e28744 instanceof Object)){
var ex__27005__auto__ = e28744;
var statearr_28745_28771 = state_28707;
(statearr_28745_28771[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28772 = state_28707;
state_28707 = G__28772;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27002__auto__ = function(state_28707){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27002__auto____1.call(this,state_28707);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27002__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27002__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto__))
})();
var state__27093__auto__ = (function (){var statearr_28746 = f__27092__auto__.call(null);
(statearr_28746[(6)] = c__27091__auto__);

return statearr_28746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto__))
);

return c__27091__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28774 = arguments.length;
switch (G__28774) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28777 = arguments.length;
switch (G__28777) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28780 = arguments.length;
switch (G__28780) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27091__auto___28827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___28827,out){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___28827,out){
return (function (state_28804){
var state_val_28805 = (state_28804[(1)]);
if((state_val_28805 === (7))){
var inst_28799 = (state_28804[(2)]);
var state_28804__$1 = state_28804;
var statearr_28806_28828 = state_28804__$1;
(statearr_28806_28828[(2)] = inst_28799);

(statearr_28806_28828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (1))){
var inst_28781 = null;
var state_28804__$1 = (function (){var statearr_28807 = state_28804;
(statearr_28807[(7)] = inst_28781);

return statearr_28807;
})();
var statearr_28808_28829 = state_28804__$1;
(statearr_28808_28829[(2)] = null);

(statearr_28808_28829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (4))){
var inst_28784 = (state_28804[(8)]);
var inst_28784__$1 = (state_28804[(2)]);
var inst_28785 = (inst_28784__$1 == null);
var inst_28786 = cljs.core.not.call(null,inst_28785);
var state_28804__$1 = (function (){var statearr_28809 = state_28804;
(statearr_28809[(8)] = inst_28784__$1);

return statearr_28809;
})();
if(inst_28786){
var statearr_28810_28830 = state_28804__$1;
(statearr_28810_28830[(1)] = (5));

} else {
var statearr_28811_28831 = state_28804__$1;
(statearr_28811_28831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (6))){
var state_28804__$1 = state_28804;
var statearr_28812_28832 = state_28804__$1;
(statearr_28812_28832[(2)] = null);

(statearr_28812_28832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (3))){
var inst_28801 = (state_28804[(2)]);
var inst_28802 = cljs.core.async.close_BANG_.call(null,out);
var state_28804__$1 = (function (){var statearr_28813 = state_28804;
(statearr_28813[(9)] = inst_28801);

return statearr_28813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28804__$1,inst_28802);
} else {
if((state_val_28805 === (2))){
var state_28804__$1 = state_28804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28804__$1,(4),ch);
} else {
if((state_val_28805 === (11))){
var inst_28784 = (state_28804[(8)]);
var inst_28793 = (state_28804[(2)]);
var inst_28781 = inst_28784;
var state_28804__$1 = (function (){var statearr_28814 = state_28804;
(statearr_28814[(10)] = inst_28793);

(statearr_28814[(7)] = inst_28781);

return statearr_28814;
})();
var statearr_28815_28833 = state_28804__$1;
(statearr_28815_28833[(2)] = null);

(statearr_28815_28833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (9))){
var inst_28784 = (state_28804[(8)]);
var state_28804__$1 = state_28804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28804__$1,(11),out,inst_28784);
} else {
if((state_val_28805 === (5))){
var inst_28784 = (state_28804[(8)]);
var inst_28781 = (state_28804[(7)]);
var inst_28788 = cljs.core._EQ_.call(null,inst_28784,inst_28781);
var state_28804__$1 = state_28804;
if(inst_28788){
var statearr_28817_28834 = state_28804__$1;
(statearr_28817_28834[(1)] = (8));

} else {
var statearr_28818_28835 = state_28804__$1;
(statearr_28818_28835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (10))){
var inst_28796 = (state_28804[(2)]);
var state_28804__$1 = state_28804;
var statearr_28819_28836 = state_28804__$1;
(statearr_28819_28836[(2)] = inst_28796);

(statearr_28819_28836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (8))){
var inst_28781 = (state_28804[(7)]);
var tmp28816 = inst_28781;
var inst_28781__$1 = tmp28816;
var state_28804__$1 = (function (){var statearr_28820 = state_28804;
(statearr_28820[(7)] = inst_28781__$1);

return statearr_28820;
})();
var statearr_28821_28837 = state_28804__$1;
(statearr_28821_28837[(2)] = null);

(statearr_28821_28837[(1)] = (2));


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
});})(c__27091__auto___28827,out))
;
return ((function (switch__27001__auto__,c__27091__auto___28827,out){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_28822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28822[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_28822[(1)] = (1));

return statearr_28822;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_28804){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_28804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e28823){if((e28823 instanceof Object)){
var ex__27005__auto__ = e28823;
var statearr_28824_28838 = state_28804;
(statearr_28824_28838[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28839 = state_28804;
state_28804 = G__28839;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_28804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_28804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___28827,out))
})();
var state__27093__auto__ = (function (){var statearr_28825 = f__27092__auto__.call(null);
(statearr_28825[(6)] = c__27091__auto___28827);

return statearr_28825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___28827,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28841 = arguments.length;
switch (G__28841) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27091__auto___28907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___28907,out){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___28907,out){
return (function (state_28879){
var state_val_28880 = (state_28879[(1)]);
if((state_val_28880 === (7))){
var inst_28875 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28881_28908 = state_28879__$1;
(statearr_28881_28908[(2)] = inst_28875);

(statearr_28881_28908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (1))){
var inst_28842 = (new Array(n));
var inst_28843 = inst_28842;
var inst_28844 = (0);
var state_28879__$1 = (function (){var statearr_28882 = state_28879;
(statearr_28882[(7)] = inst_28844);

(statearr_28882[(8)] = inst_28843);

return statearr_28882;
})();
var statearr_28883_28909 = state_28879__$1;
(statearr_28883_28909[(2)] = null);

(statearr_28883_28909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (4))){
var inst_28847 = (state_28879[(9)]);
var inst_28847__$1 = (state_28879[(2)]);
var inst_28848 = (inst_28847__$1 == null);
var inst_28849 = cljs.core.not.call(null,inst_28848);
var state_28879__$1 = (function (){var statearr_28884 = state_28879;
(statearr_28884[(9)] = inst_28847__$1);

return statearr_28884;
})();
if(inst_28849){
var statearr_28885_28910 = state_28879__$1;
(statearr_28885_28910[(1)] = (5));

} else {
var statearr_28886_28911 = state_28879__$1;
(statearr_28886_28911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (15))){
var inst_28869 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28887_28912 = state_28879__$1;
(statearr_28887_28912[(2)] = inst_28869);

(statearr_28887_28912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (13))){
var state_28879__$1 = state_28879;
var statearr_28888_28913 = state_28879__$1;
(statearr_28888_28913[(2)] = null);

(statearr_28888_28913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (6))){
var inst_28844 = (state_28879[(7)]);
var inst_28865 = (inst_28844 > (0));
var state_28879__$1 = state_28879;
if(cljs.core.truth_(inst_28865)){
var statearr_28889_28914 = state_28879__$1;
(statearr_28889_28914[(1)] = (12));

} else {
var statearr_28890_28915 = state_28879__$1;
(statearr_28890_28915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (3))){
var inst_28877 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28879__$1,inst_28877);
} else {
if((state_val_28880 === (12))){
var inst_28843 = (state_28879[(8)]);
var inst_28867 = cljs.core.vec.call(null,inst_28843);
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28879__$1,(15),out,inst_28867);
} else {
if((state_val_28880 === (2))){
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28879__$1,(4),ch);
} else {
if((state_val_28880 === (11))){
var inst_28859 = (state_28879[(2)]);
var inst_28860 = (new Array(n));
var inst_28843 = inst_28860;
var inst_28844 = (0);
var state_28879__$1 = (function (){var statearr_28891 = state_28879;
(statearr_28891[(7)] = inst_28844);

(statearr_28891[(10)] = inst_28859);

(statearr_28891[(8)] = inst_28843);

return statearr_28891;
})();
var statearr_28892_28916 = state_28879__$1;
(statearr_28892_28916[(2)] = null);

(statearr_28892_28916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (9))){
var inst_28843 = (state_28879[(8)]);
var inst_28857 = cljs.core.vec.call(null,inst_28843);
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28879__$1,(11),out,inst_28857);
} else {
if((state_val_28880 === (5))){
var inst_28844 = (state_28879[(7)]);
var inst_28852 = (state_28879[(11)]);
var inst_28847 = (state_28879[(9)]);
var inst_28843 = (state_28879[(8)]);
var inst_28851 = (inst_28843[inst_28844] = inst_28847);
var inst_28852__$1 = (inst_28844 + (1));
var inst_28853 = (inst_28852__$1 < n);
var state_28879__$1 = (function (){var statearr_28893 = state_28879;
(statearr_28893[(11)] = inst_28852__$1);

(statearr_28893[(12)] = inst_28851);

return statearr_28893;
})();
if(cljs.core.truth_(inst_28853)){
var statearr_28894_28917 = state_28879__$1;
(statearr_28894_28917[(1)] = (8));

} else {
var statearr_28895_28918 = state_28879__$1;
(statearr_28895_28918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (14))){
var inst_28872 = (state_28879[(2)]);
var inst_28873 = cljs.core.async.close_BANG_.call(null,out);
var state_28879__$1 = (function (){var statearr_28897 = state_28879;
(statearr_28897[(13)] = inst_28872);

return statearr_28897;
})();
var statearr_28898_28919 = state_28879__$1;
(statearr_28898_28919[(2)] = inst_28873);

(statearr_28898_28919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (10))){
var inst_28863 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28899_28920 = state_28879__$1;
(statearr_28899_28920[(2)] = inst_28863);

(statearr_28899_28920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (8))){
var inst_28852 = (state_28879[(11)]);
var inst_28843 = (state_28879[(8)]);
var tmp28896 = inst_28843;
var inst_28843__$1 = tmp28896;
var inst_28844 = inst_28852;
var state_28879__$1 = (function (){var statearr_28900 = state_28879;
(statearr_28900[(7)] = inst_28844);

(statearr_28900[(8)] = inst_28843__$1);

return statearr_28900;
})();
var statearr_28901_28921 = state_28879__$1;
(statearr_28901_28921[(2)] = null);

(statearr_28901_28921[(1)] = (2));


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
});})(c__27091__auto___28907,out))
;
return ((function (switch__27001__auto__,c__27091__auto___28907,out){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_28902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28902[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_28902[(1)] = (1));

return statearr_28902;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_28879){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_28879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e28903){if((e28903 instanceof Object)){
var ex__27005__auto__ = e28903;
var statearr_28904_28922 = state_28879;
(statearr_28904_28922[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28923 = state_28879;
state_28879 = G__28923;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_28879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_28879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___28907,out))
})();
var state__27093__auto__ = (function (){var statearr_28905 = f__27092__auto__.call(null);
(statearr_28905[(6)] = c__27091__auto___28907);

return statearr_28905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___28907,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28925 = arguments.length;
switch (G__28925) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27091__auto___28995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27091__auto___28995,out){
return (function (){
var f__27092__auto__ = (function (){var switch__27001__auto__ = ((function (c__27091__auto___28995,out){
return (function (state_28967){
var state_val_28968 = (state_28967[(1)]);
if((state_val_28968 === (7))){
var inst_28963 = (state_28967[(2)]);
var state_28967__$1 = state_28967;
var statearr_28969_28996 = state_28967__$1;
(statearr_28969_28996[(2)] = inst_28963);

(statearr_28969_28996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (1))){
var inst_28926 = [];
var inst_28927 = inst_28926;
var inst_28928 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28967__$1 = (function (){var statearr_28970 = state_28967;
(statearr_28970[(7)] = inst_28928);

(statearr_28970[(8)] = inst_28927);

return statearr_28970;
})();
var statearr_28971_28997 = state_28967__$1;
(statearr_28971_28997[(2)] = null);

(statearr_28971_28997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (4))){
var inst_28931 = (state_28967[(9)]);
var inst_28931__$1 = (state_28967[(2)]);
var inst_28932 = (inst_28931__$1 == null);
var inst_28933 = cljs.core.not.call(null,inst_28932);
var state_28967__$1 = (function (){var statearr_28972 = state_28967;
(statearr_28972[(9)] = inst_28931__$1);

return statearr_28972;
})();
if(inst_28933){
var statearr_28973_28998 = state_28967__$1;
(statearr_28973_28998[(1)] = (5));

} else {
var statearr_28974_28999 = state_28967__$1;
(statearr_28974_28999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (15))){
var inst_28957 = (state_28967[(2)]);
var state_28967__$1 = state_28967;
var statearr_28975_29000 = state_28967__$1;
(statearr_28975_29000[(2)] = inst_28957);

(statearr_28975_29000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (13))){
var state_28967__$1 = state_28967;
var statearr_28976_29001 = state_28967__$1;
(statearr_28976_29001[(2)] = null);

(statearr_28976_29001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (6))){
var inst_28927 = (state_28967[(8)]);
var inst_28952 = inst_28927.length;
var inst_28953 = (inst_28952 > (0));
var state_28967__$1 = state_28967;
if(cljs.core.truth_(inst_28953)){
var statearr_28977_29002 = state_28967__$1;
(statearr_28977_29002[(1)] = (12));

} else {
var statearr_28978_29003 = state_28967__$1;
(statearr_28978_29003[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (3))){
var inst_28965 = (state_28967[(2)]);
var state_28967__$1 = state_28967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28967__$1,inst_28965);
} else {
if((state_val_28968 === (12))){
var inst_28927 = (state_28967[(8)]);
var inst_28955 = cljs.core.vec.call(null,inst_28927);
var state_28967__$1 = state_28967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28967__$1,(15),out,inst_28955);
} else {
if((state_val_28968 === (2))){
var state_28967__$1 = state_28967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28967__$1,(4),ch);
} else {
if((state_val_28968 === (11))){
var inst_28931 = (state_28967[(9)]);
var inst_28935 = (state_28967[(10)]);
var inst_28945 = (state_28967[(2)]);
var inst_28946 = [];
var inst_28947 = inst_28946.push(inst_28931);
var inst_28927 = inst_28946;
var inst_28928 = inst_28935;
var state_28967__$1 = (function (){var statearr_28979 = state_28967;
(statearr_28979[(11)] = inst_28945);

(statearr_28979[(12)] = inst_28947);

(statearr_28979[(7)] = inst_28928);

(statearr_28979[(8)] = inst_28927);

return statearr_28979;
})();
var statearr_28980_29004 = state_28967__$1;
(statearr_28980_29004[(2)] = null);

(statearr_28980_29004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (9))){
var inst_28927 = (state_28967[(8)]);
var inst_28943 = cljs.core.vec.call(null,inst_28927);
var state_28967__$1 = state_28967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28967__$1,(11),out,inst_28943);
} else {
if((state_val_28968 === (5))){
var inst_28931 = (state_28967[(9)]);
var inst_28935 = (state_28967[(10)]);
var inst_28928 = (state_28967[(7)]);
var inst_28935__$1 = f.call(null,inst_28931);
var inst_28936 = cljs.core._EQ_.call(null,inst_28935__$1,inst_28928);
var inst_28937 = cljs.core.keyword_identical_QMARK_.call(null,inst_28928,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28938 = ((inst_28936) || (inst_28937));
var state_28967__$1 = (function (){var statearr_28981 = state_28967;
(statearr_28981[(10)] = inst_28935__$1);

return statearr_28981;
})();
if(cljs.core.truth_(inst_28938)){
var statearr_28982_29005 = state_28967__$1;
(statearr_28982_29005[(1)] = (8));

} else {
var statearr_28983_29006 = state_28967__$1;
(statearr_28983_29006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (14))){
var inst_28960 = (state_28967[(2)]);
var inst_28961 = cljs.core.async.close_BANG_.call(null,out);
var state_28967__$1 = (function (){var statearr_28985 = state_28967;
(statearr_28985[(13)] = inst_28960);

return statearr_28985;
})();
var statearr_28986_29007 = state_28967__$1;
(statearr_28986_29007[(2)] = inst_28961);

(statearr_28986_29007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (10))){
var inst_28950 = (state_28967[(2)]);
var state_28967__$1 = state_28967;
var statearr_28987_29008 = state_28967__$1;
(statearr_28987_29008[(2)] = inst_28950);

(statearr_28987_29008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (8))){
var inst_28931 = (state_28967[(9)]);
var inst_28935 = (state_28967[(10)]);
var inst_28927 = (state_28967[(8)]);
var inst_28940 = inst_28927.push(inst_28931);
var tmp28984 = inst_28927;
var inst_28927__$1 = tmp28984;
var inst_28928 = inst_28935;
var state_28967__$1 = (function (){var statearr_28988 = state_28967;
(statearr_28988[(14)] = inst_28940);

(statearr_28988[(7)] = inst_28928);

(statearr_28988[(8)] = inst_28927__$1);

return statearr_28988;
})();
var statearr_28989_29009 = state_28967__$1;
(statearr_28989_29009[(2)] = null);

(statearr_28989_29009[(1)] = (2));


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
});})(c__27091__auto___28995,out))
;
return ((function (switch__27001__auto__,c__27091__auto___28995,out){
return (function() {
var cljs$core$async$state_machine__27002__auto__ = null;
var cljs$core$async$state_machine__27002__auto____0 = (function (){
var statearr_28990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28990[(0)] = cljs$core$async$state_machine__27002__auto__);

(statearr_28990[(1)] = (1));

return statearr_28990;
});
var cljs$core$async$state_machine__27002__auto____1 = (function (state_28967){
while(true){
var ret_value__27003__auto__ = (function (){try{while(true){
var result__27004__auto__ = switch__27001__auto__.call(null,state_28967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27004__auto__;
}
break;
}
}catch (e28991){if((e28991 instanceof Object)){
var ex__27005__auto__ = e28991;
var statearr_28992_29010 = state_28967;
(statearr_28992_29010[(5)] = ex__27005__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29011 = state_28967;
state_28967 = G__29011;
continue;
} else {
return ret_value__27003__auto__;
}
break;
}
});
cljs$core$async$state_machine__27002__auto__ = function(state_28967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27002__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27002__auto____1.call(this,state_28967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27002__auto____0;
cljs$core$async$state_machine__27002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27002__auto____1;
return cljs$core$async$state_machine__27002__auto__;
})()
;})(switch__27001__auto__,c__27091__auto___28995,out))
})();
var state__27093__auto__ = (function (){var statearr_28993 = f__27092__auto__.call(null);
(statearr_28993[(6)] = c__27091__auto___28995);

return statearr_28993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27093__auto__);
});})(c__27091__auto___28995,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1544380206815
