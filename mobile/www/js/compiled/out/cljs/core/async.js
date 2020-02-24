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
var G__27690 = arguments.length;
switch (G__27690) {
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
if(typeof cljs.core.async.t_cljs$core$async27691 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27691 = (function (f,blockable,meta27692){
this.f = f;
this.blockable = blockable;
this.meta27692 = meta27692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27693,meta27692__$1){
var self__ = this;
var _27693__$1 = this;
return (new cljs.core.async.t_cljs$core$async27691(self__.f,self__.blockable,meta27692__$1));
});

cljs.core.async.t_cljs$core$async27691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27693){
var self__ = this;
var _27693__$1 = this;
return self__.meta27692;
});

cljs.core.async.t_cljs$core$async27691.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27691.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27692","meta27692",-712761089,null)], null);
});

cljs.core.async.t_cljs$core$async27691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27691";

cljs.core.async.t_cljs$core$async27691.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27691");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27691.
 */
cljs.core.async.__GT_t_cljs$core$async27691 = (function cljs$core$async$__GT_t_cljs$core$async27691(f__$1,blockable__$1,meta27692){
return (new cljs.core.async.t_cljs$core$async27691(f__$1,blockable__$1,meta27692));
});

}

return (new cljs.core.async.t_cljs$core$async27691(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27697 = arguments.length;
switch (G__27697) {
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
var G__27700 = arguments.length;
switch (G__27700) {
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
var G__27703 = arguments.length;
switch (G__27703) {
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
var val_27705 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27705);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27705,ret){
return (function (){
return fn1.call(null,val_27705);
});})(val_27705,ret))
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
var G__27707 = arguments.length;
switch (G__27707) {
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
var n__4376__auto___27709 = n;
var x_27710 = (0);
while(true){
if((x_27710 < n__4376__auto___27709)){
(a[x_27710] = (0));

var G__27711 = (x_27710 + (1));
x_27710 = G__27711;
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

var G__27712 = (i + (1));
i = G__27712;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27713 = (function (flag,meta27714){
this.flag = flag;
this.meta27714 = meta27714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27715,meta27714__$1){
var self__ = this;
var _27715__$1 = this;
return (new cljs.core.async.t_cljs$core$async27713(self__.flag,meta27714__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27715){
var self__ = this;
var _27715__$1 = this;
return self__.meta27714;
});})(flag))
;

cljs.core.async.t_cljs$core$async27713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27713.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27714","meta27714",-166175811,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27713";

cljs.core.async.t_cljs$core$async27713.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27713");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27713.
 */
cljs.core.async.__GT_t_cljs$core$async27713 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27713(flag__$1,meta27714){
return (new cljs.core.async.t_cljs$core$async27713(flag__$1,meta27714));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27713(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27716 = (function (flag,cb,meta27717){
this.flag = flag;
this.cb = cb;
this.meta27717 = meta27717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27718,meta27717__$1){
var self__ = this;
var _27718__$1 = this;
return (new cljs.core.async.t_cljs$core$async27716(self__.flag,self__.cb,meta27717__$1));
});

cljs.core.async.t_cljs$core$async27716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27718){
var self__ = this;
var _27718__$1 = this;
return self__.meta27717;
});

cljs.core.async.t_cljs$core$async27716.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27716.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27717","meta27717",-732003239,null)], null);
});

cljs.core.async.t_cljs$core$async27716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27716";

cljs.core.async.t_cljs$core$async27716.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27716");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27716.
 */
cljs.core.async.__GT_t_cljs$core$async27716 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27716(flag__$1,cb__$1,meta27717){
return (new cljs.core.async.t_cljs$core$async27716(flag__$1,cb__$1,meta27717));
});

}

return (new cljs.core.async.t_cljs$core$async27716(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27719_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27719_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27720_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27720_SHARP_,port], null));
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
var G__27721 = (i + (1));
i = G__27721;
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
var len__4499__auto___27727 = arguments.length;
var i__4500__auto___27728 = (0);
while(true){
if((i__4500__auto___27728 < len__4499__auto___27727)){
args__4502__auto__.push((arguments[i__4500__auto___27728]));

var G__27729 = (i__4500__auto___27728 + (1));
i__4500__auto___27728 = G__27729;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27724){
var map__27725 = p__27724;
var map__27725__$1 = ((((!((map__27725 == null)))?(((((map__27725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27725):map__27725);
var opts = map__27725__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27722){
var G__27723 = cljs.core.first.call(null,seq27722);
var seq27722__$1 = cljs.core.next.call(null,seq27722);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27723,seq27722__$1);
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
var G__27731 = arguments.length;
switch (G__27731) {
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
var c__27630__auto___27777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___27777){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___27777){
return (function (state_27755){
var state_val_27756 = (state_27755[(1)]);
if((state_val_27756 === (7))){
var inst_27751 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27757_27778 = state_27755__$1;
(statearr_27757_27778[(2)] = inst_27751);

(statearr_27757_27778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (1))){
var state_27755__$1 = state_27755;
var statearr_27758_27779 = state_27755__$1;
(statearr_27758_27779[(2)] = null);

(statearr_27758_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (4))){
var inst_27734 = (state_27755[(7)]);
var inst_27734__$1 = (state_27755[(2)]);
var inst_27735 = (inst_27734__$1 == null);
var state_27755__$1 = (function (){var statearr_27759 = state_27755;
(statearr_27759[(7)] = inst_27734__$1);

return statearr_27759;
})();
if(cljs.core.truth_(inst_27735)){
var statearr_27760_27780 = state_27755__$1;
(statearr_27760_27780[(1)] = (5));

} else {
var statearr_27761_27781 = state_27755__$1;
(statearr_27761_27781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (13))){
var state_27755__$1 = state_27755;
var statearr_27762_27782 = state_27755__$1;
(statearr_27762_27782[(2)] = null);

(statearr_27762_27782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (6))){
var inst_27734 = (state_27755[(7)]);
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27755__$1,(11),to,inst_27734);
} else {
if((state_val_27756 === (3))){
var inst_27753 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27755__$1,inst_27753);
} else {
if((state_val_27756 === (12))){
var state_27755__$1 = state_27755;
var statearr_27763_27783 = state_27755__$1;
(statearr_27763_27783[(2)] = null);

(statearr_27763_27783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (2))){
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27755__$1,(4),from);
} else {
if((state_val_27756 === (11))){
var inst_27744 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
if(cljs.core.truth_(inst_27744)){
var statearr_27764_27784 = state_27755__$1;
(statearr_27764_27784[(1)] = (12));

} else {
var statearr_27765_27785 = state_27755__$1;
(statearr_27765_27785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (9))){
var state_27755__$1 = state_27755;
var statearr_27766_27786 = state_27755__$1;
(statearr_27766_27786[(2)] = null);

(statearr_27766_27786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (5))){
var state_27755__$1 = state_27755;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27767_27787 = state_27755__$1;
(statearr_27767_27787[(1)] = (8));

} else {
var statearr_27768_27788 = state_27755__$1;
(statearr_27768_27788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (14))){
var inst_27749 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27769_27789 = state_27755__$1;
(statearr_27769_27789[(2)] = inst_27749);

(statearr_27769_27789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (10))){
var inst_27741 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27770_27790 = state_27755__$1;
(statearr_27770_27790[(2)] = inst_27741);

(statearr_27770_27790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (8))){
var inst_27738 = cljs.core.async.close_BANG_.call(null,to);
var state_27755__$1 = state_27755;
var statearr_27771_27791 = state_27755__$1;
(statearr_27771_27791[(2)] = inst_27738);

(statearr_27771_27791[(1)] = (10));


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
});})(c__27630__auto___27777))
;
return ((function (switch__27540__auto__,c__27630__auto___27777){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_27772 = [null,null,null,null,null,null,null,null];
(statearr_27772[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_27772[(1)] = (1));

return statearr_27772;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_27755){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_27755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e27773){if((e27773 instanceof Object)){
var ex__27544__auto__ = e27773;
var statearr_27774_27792 = state_27755;
(statearr_27774_27792[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27793 = state_27755;
state_27755 = G__27793;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_27755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_27755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___27777))
})();
var state__27632__auto__ = (function (){var statearr_27775 = f__27631__auto__.call(null);
(statearr_27775[(6)] = c__27630__auto___27777);

return statearr_27775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___27777))
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
return (function (p__27794){
var vec__27795 = p__27794;
var v = cljs.core.nth.call(null,vec__27795,(0),null);
var p = cljs.core.nth.call(null,vec__27795,(1),null);
var job = vec__27795;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27630__auto___27966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___27966,res,vec__27795,v,p,job,jobs,results){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___27966,res,vec__27795,v,p,job,jobs,results){
return (function (state_27802){
var state_val_27803 = (state_27802[(1)]);
if((state_val_27803 === (1))){
var state_27802__$1 = state_27802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27802__$1,(2),res,v);
} else {
if((state_val_27803 === (2))){
var inst_27799 = (state_27802[(2)]);
var inst_27800 = cljs.core.async.close_BANG_.call(null,res);
var state_27802__$1 = (function (){var statearr_27804 = state_27802;
(statearr_27804[(7)] = inst_27799);

return statearr_27804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27802__$1,inst_27800);
} else {
return null;
}
}
});})(c__27630__auto___27966,res,vec__27795,v,p,job,jobs,results))
;
return ((function (switch__27540__auto__,c__27630__auto___27966,res,vec__27795,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0 = (function (){
var statearr_27805 = [null,null,null,null,null,null,null,null];
(statearr_27805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__);

(statearr_27805[(1)] = (1));

return statearr_27805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1 = (function (state_27802){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_27802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e27806){if((e27806 instanceof Object)){
var ex__27544__auto__ = e27806;
var statearr_27807_27967 = state_27802;
(statearr_27807_27967[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27968 = state_27802;
state_27802 = G__27968;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__ = function(state_27802){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1.call(this,state_27802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___27966,res,vec__27795,v,p,job,jobs,results))
})();
var state__27632__auto__ = (function (){var statearr_27808 = f__27631__auto__.call(null);
(statearr_27808[(6)] = c__27630__auto___27966);

return statearr_27808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___27966,res,vec__27795,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27809){
var vec__27810 = p__27809;
var v = cljs.core.nth.call(null,vec__27810,(0),null);
var p = cljs.core.nth.call(null,vec__27810,(1),null);
var job = vec__27810;
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
var n__4376__auto___27969 = n;
var __27970 = (0);
while(true){
if((__27970 < n__4376__auto___27969)){
var G__27813_27971 = type;
var G__27813_27972__$1 = (((G__27813_27971 instanceof cljs.core.Keyword))?G__27813_27971.fqn:null);
switch (G__27813_27972__$1) {
case "compute":
var c__27630__auto___27974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27970,c__27630__auto___27974,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (__27970,c__27630__auto___27974,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async){
return (function (state_27826){
var state_val_27827 = (state_27826[(1)]);
if((state_val_27827 === (1))){
var state_27826__$1 = state_27826;
var statearr_27828_27975 = state_27826__$1;
(statearr_27828_27975[(2)] = null);

(statearr_27828_27975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (2))){
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27826__$1,(4),jobs);
} else {
if((state_val_27827 === (3))){
var inst_27824 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27826__$1,inst_27824);
} else {
if((state_val_27827 === (4))){
var inst_27816 = (state_27826[(2)]);
var inst_27817 = process.call(null,inst_27816);
var state_27826__$1 = state_27826;
if(cljs.core.truth_(inst_27817)){
var statearr_27829_27976 = state_27826__$1;
(statearr_27829_27976[(1)] = (5));

} else {
var statearr_27830_27977 = state_27826__$1;
(statearr_27830_27977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (5))){
var state_27826__$1 = state_27826;
var statearr_27831_27978 = state_27826__$1;
(statearr_27831_27978[(2)] = null);

(statearr_27831_27978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (6))){
var state_27826__$1 = state_27826;
var statearr_27832_27979 = state_27826__$1;
(statearr_27832_27979[(2)] = null);

(statearr_27832_27979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (7))){
var inst_27822 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27833_27980 = state_27826__$1;
(statearr_27833_27980[(2)] = inst_27822);

(statearr_27833_27980[(1)] = (3));


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
});})(__27970,c__27630__auto___27974,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async))
;
return ((function (__27970,switch__27540__auto__,c__27630__auto___27974,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0 = (function (){
var statearr_27834 = [null,null,null,null,null,null,null];
(statearr_27834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__);

(statearr_27834[(1)] = (1));

return statearr_27834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1 = (function (state_27826){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_27826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e27835){if((e27835 instanceof Object)){
var ex__27544__auto__ = e27835;
var statearr_27836_27981 = state_27826;
(statearr_27836_27981[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27982 = state_27826;
state_27826 = G__27982;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__ = function(state_27826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1.call(this,state_27826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__;
})()
;})(__27970,switch__27540__auto__,c__27630__auto___27974,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async))
})();
var state__27632__auto__ = (function (){var statearr_27837 = f__27631__auto__.call(null);
(statearr_27837[(6)] = c__27630__auto___27974);

return statearr_27837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(__27970,c__27630__auto___27974,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async))
);


break;
case "async":
var c__27630__auto___27983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27970,c__27630__auto___27983,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (__27970,c__27630__auto___27983,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async){
return (function (state_27850){
var state_val_27851 = (state_27850[(1)]);
if((state_val_27851 === (1))){
var state_27850__$1 = state_27850;
var statearr_27852_27984 = state_27850__$1;
(statearr_27852_27984[(2)] = null);

(statearr_27852_27984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (2))){
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27850__$1,(4),jobs);
} else {
if((state_val_27851 === (3))){
var inst_27848 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27850__$1,inst_27848);
} else {
if((state_val_27851 === (4))){
var inst_27840 = (state_27850[(2)]);
var inst_27841 = async.call(null,inst_27840);
var state_27850__$1 = state_27850;
if(cljs.core.truth_(inst_27841)){
var statearr_27853_27985 = state_27850__$1;
(statearr_27853_27985[(1)] = (5));

} else {
var statearr_27854_27986 = state_27850__$1;
(statearr_27854_27986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (5))){
var state_27850__$1 = state_27850;
var statearr_27855_27987 = state_27850__$1;
(statearr_27855_27987[(2)] = null);

(statearr_27855_27987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (6))){
var state_27850__$1 = state_27850;
var statearr_27856_27988 = state_27850__$1;
(statearr_27856_27988[(2)] = null);

(statearr_27856_27988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (7))){
var inst_27846 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27857_27989 = state_27850__$1;
(statearr_27857_27989[(2)] = inst_27846);

(statearr_27857_27989[(1)] = (3));


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
});})(__27970,c__27630__auto___27983,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async))
;
return ((function (__27970,switch__27540__auto__,c__27630__auto___27983,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0 = (function (){
var statearr_27858 = [null,null,null,null,null,null,null];
(statearr_27858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__);

(statearr_27858[(1)] = (1));

return statearr_27858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1 = (function (state_27850){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_27850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e27859){if((e27859 instanceof Object)){
var ex__27544__auto__ = e27859;
var statearr_27860_27990 = state_27850;
(statearr_27860_27990[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27991 = state_27850;
state_27850 = G__27991;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__ = function(state_27850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1.call(this,state_27850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__;
})()
;})(__27970,switch__27540__auto__,c__27630__auto___27983,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async))
})();
var state__27632__auto__ = (function (){var statearr_27861 = f__27631__auto__.call(null);
(statearr_27861[(6)] = c__27630__auto___27983);

return statearr_27861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(__27970,c__27630__auto___27983,G__27813_27971,G__27813_27972__$1,n__4376__auto___27969,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27813_27972__$1)].join('')));

}

var G__27992 = (__27970 + (1));
__27970 = G__27992;
continue;
} else {
}
break;
}

var c__27630__auto___27993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___27993,jobs,results,process,async){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___27993,jobs,results,process,async){
return (function (state_27883){
var state_val_27884 = (state_27883[(1)]);
if((state_val_27884 === (1))){
var state_27883__$1 = state_27883;
var statearr_27885_27994 = state_27883__$1;
(statearr_27885_27994[(2)] = null);

(statearr_27885_27994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (2))){
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(4),from);
} else {
if((state_val_27884 === (3))){
var inst_27881 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27883__$1,inst_27881);
} else {
if((state_val_27884 === (4))){
var inst_27864 = (state_27883[(7)]);
var inst_27864__$1 = (state_27883[(2)]);
var inst_27865 = (inst_27864__$1 == null);
var state_27883__$1 = (function (){var statearr_27886 = state_27883;
(statearr_27886[(7)] = inst_27864__$1);

return statearr_27886;
})();
if(cljs.core.truth_(inst_27865)){
var statearr_27887_27995 = state_27883__$1;
(statearr_27887_27995[(1)] = (5));

} else {
var statearr_27888_27996 = state_27883__$1;
(statearr_27888_27996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (5))){
var inst_27867 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27883__$1 = state_27883;
var statearr_27889_27997 = state_27883__$1;
(statearr_27889_27997[(2)] = inst_27867);

(statearr_27889_27997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (6))){
var inst_27864 = (state_27883[(7)]);
var inst_27869 = (state_27883[(8)]);
var inst_27869__$1 = cljs.core.async.chan.call(null,(1));
var inst_27870 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27871 = [inst_27864,inst_27869__$1];
var inst_27872 = (new cljs.core.PersistentVector(null,2,(5),inst_27870,inst_27871,null));
var state_27883__$1 = (function (){var statearr_27890 = state_27883;
(statearr_27890[(8)] = inst_27869__$1);

return statearr_27890;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27883__$1,(8),jobs,inst_27872);
} else {
if((state_val_27884 === (7))){
var inst_27879 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27891_27998 = state_27883__$1;
(statearr_27891_27998[(2)] = inst_27879);

(statearr_27891_27998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (8))){
var inst_27869 = (state_27883[(8)]);
var inst_27874 = (state_27883[(2)]);
var state_27883__$1 = (function (){var statearr_27892 = state_27883;
(statearr_27892[(9)] = inst_27874);

return statearr_27892;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27883__$1,(9),results,inst_27869);
} else {
if((state_val_27884 === (9))){
var inst_27876 = (state_27883[(2)]);
var state_27883__$1 = (function (){var statearr_27893 = state_27883;
(statearr_27893[(10)] = inst_27876);

return statearr_27893;
})();
var statearr_27894_27999 = state_27883__$1;
(statearr_27894_27999[(2)] = null);

(statearr_27894_27999[(1)] = (2));


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
});})(c__27630__auto___27993,jobs,results,process,async))
;
return ((function (switch__27540__auto__,c__27630__auto___27993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0 = (function (){
var statearr_27895 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27895[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__);

(statearr_27895[(1)] = (1));

return statearr_27895;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1 = (function (state_27883){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_27883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e27896){if((e27896 instanceof Object)){
var ex__27544__auto__ = e27896;
var statearr_27897_28000 = state_27883;
(statearr_27897_28000[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28001 = state_27883;
state_27883 = G__28001;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__ = function(state_27883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1.call(this,state_27883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___27993,jobs,results,process,async))
})();
var state__27632__auto__ = (function (){var statearr_27898 = f__27631__auto__.call(null);
(statearr_27898[(6)] = c__27630__auto___27993);

return statearr_27898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___27993,jobs,results,process,async))
);


var c__27630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto__,jobs,results,process,async){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto__,jobs,results,process,async){
return (function (state_27936){
var state_val_27937 = (state_27936[(1)]);
if((state_val_27937 === (7))){
var inst_27932 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27938_28002 = state_27936__$1;
(statearr_27938_28002[(2)] = inst_27932);

(statearr_27938_28002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (20))){
var state_27936__$1 = state_27936;
var statearr_27939_28003 = state_27936__$1;
(statearr_27939_28003[(2)] = null);

(statearr_27939_28003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (1))){
var state_27936__$1 = state_27936;
var statearr_27940_28004 = state_27936__$1;
(statearr_27940_28004[(2)] = null);

(statearr_27940_28004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (4))){
var inst_27901 = (state_27936[(7)]);
var inst_27901__$1 = (state_27936[(2)]);
var inst_27902 = (inst_27901__$1 == null);
var state_27936__$1 = (function (){var statearr_27941 = state_27936;
(statearr_27941[(7)] = inst_27901__$1);

return statearr_27941;
})();
if(cljs.core.truth_(inst_27902)){
var statearr_27942_28005 = state_27936__$1;
(statearr_27942_28005[(1)] = (5));

} else {
var statearr_27943_28006 = state_27936__$1;
(statearr_27943_28006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (15))){
var inst_27914 = (state_27936[(8)]);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27936__$1,(18),to,inst_27914);
} else {
if((state_val_27937 === (21))){
var inst_27927 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27944_28007 = state_27936__$1;
(statearr_27944_28007[(2)] = inst_27927);

(statearr_27944_28007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (13))){
var inst_27929 = (state_27936[(2)]);
var state_27936__$1 = (function (){var statearr_27945 = state_27936;
(statearr_27945[(9)] = inst_27929);

return statearr_27945;
})();
var statearr_27946_28008 = state_27936__$1;
(statearr_27946_28008[(2)] = null);

(statearr_27946_28008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (6))){
var inst_27901 = (state_27936[(7)]);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27936__$1,(11),inst_27901);
} else {
if((state_val_27937 === (17))){
var inst_27922 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
if(cljs.core.truth_(inst_27922)){
var statearr_27947_28009 = state_27936__$1;
(statearr_27947_28009[(1)] = (19));

} else {
var statearr_27948_28010 = state_27936__$1;
(statearr_27948_28010[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (3))){
var inst_27934 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27936__$1,inst_27934);
} else {
if((state_val_27937 === (12))){
var inst_27911 = (state_27936[(10)]);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27936__$1,(14),inst_27911);
} else {
if((state_val_27937 === (2))){
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27936__$1,(4),results);
} else {
if((state_val_27937 === (19))){
var state_27936__$1 = state_27936;
var statearr_27949_28011 = state_27936__$1;
(statearr_27949_28011[(2)] = null);

(statearr_27949_28011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (11))){
var inst_27911 = (state_27936[(2)]);
var state_27936__$1 = (function (){var statearr_27950 = state_27936;
(statearr_27950[(10)] = inst_27911);

return statearr_27950;
})();
var statearr_27951_28012 = state_27936__$1;
(statearr_27951_28012[(2)] = null);

(statearr_27951_28012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (9))){
var state_27936__$1 = state_27936;
var statearr_27952_28013 = state_27936__$1;
(statearr_27952_28013[(2)] = null);

(statearr_27952_28013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (5))){
var state_27936__$1 = state_27936;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27953_28014 = state_27936__$1;
(statearr_27953_28014[(1)] = (8));

} else {
var statearr_27954_28015 = state_27936__$1;
(statearr_27954_28015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (14))){
var inst_27914 = (state_27936[(8)]);
var inst_27916 = (state_27936[(11)]);
var inst_27914__$1 = (state_27936[(2)]);
var inst_27915 = (inst_27914__$1 == null);
var inst_27916__$1 = cljs.core.not.call(null,inst_27915);
var state_27936__$1 = (function (){var statearr_27955 = state_27936;
(statearr_27955[(8)] = inst_27914__$1);

(statearr_27955[(11)] = inst_27916__$1);

return statearr_27955;
})();
if(inst_27916__$1){
var statearr_27956_28016 = state_27936__$1;
(statearr_27956_28016[(1)] = (15));

} else {
var statearr_27957_28017 = state_27936__$1;
(statearr_27957_28017[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (16))){
var inst_27916 = (state_27936[(11)]);
var state_27936__$1 = state_27936;
var statearr_27958_28018 = state_27936__$1;
(statearr_27958_28018[(2)] = inst_27916);

(statearr_27958_28018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (10))){
var inst_27908 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27959_28019 = state_27936__$1;
(statearr_27959_28019[(2)] = inst_27908);

(statearr_27959_28019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (18))){
var inst_27919 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27960_28020 = state_27936__$1;
(statearr_27960_28020[(2)] = inst_27919);

(statearr_27960_28020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (8))){
var inst_27905 = cljs.core.async.close_BANG_.call(null,to);
var state_27936__$1 = state_27936;
var statearr_27961_28021 = state_27936__$1;
(statearr_27961_28021[(2)] = inst_27905);

(statearr_27961_28021[(1)] = (10));


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
});})(c__27630__auto__,jobs,results,process,async))
;
return ((function (switch__27540__auto__,c__27630__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0 = (function (){
var statearr_27962 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__);

(statearr_27962[(1)] = (1));

return statearr_27962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1 = (function (state_27936){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_27936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e27963){if((e27963 instanceof Object)){
var ex__27544__auto__ = e27963;
var statearr_27964_28022 = state_27936;
(statearr_27964_28022[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28023 = state_27936;
state_27936 = G__28023;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__ = function(state_27936){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1.call(this,state_27936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto__,jobs,results,process,async))
})();
var state__27632__auto__ = (function (){var statearr_27965 = f__27631__auto__.call(null);
(statearr_27965[(6)] = c__27630__auto__);

return statearr_27965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto__,jobs,results,process,async))
);

return c__27630__auto__;
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
var G__28025 = arguments.length;
switch (G__28025) {
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
var G__28028 = arguments.length;
switch (G__28028) {
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
var G__28031 = arguments.length;
switch (G__28031) {
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
var c__27630__auto___28080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___28080,tc,fc){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___28080,tc,fc){
return (function (state_28057){
var state_val_28058 = (state_28057[(1)]);
if((state_val_28058 === (7))){
var inst_28053 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
var statearr_28059_28081 = state_28057__$1;
(statearr_28059_28081[(2)] = inst_28053);

(statearr_28059_28081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (1))){
var state_28057__$1 = state_28057;
var statearr_28060_28082 = state_28057__$1;
(statearr_28060_28082[(2)] = null);

(statearr_28060_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (4))){
var inst_28034 = (state_28057[(7)]);
var inst_28034__$1 = (state_28057[(2)]);
var inst_28035 = (inst_28034__$1 == null);
var state_28057__$1 = (function (){var statearr_28061 = state_28057;
(statearr_28061[(7)] = inst_28034__$1);

return statearr_28061;
})();
if(cljs.core.truth_(inst_28035)){
var statearr_28062_28083 = state_28057__$1;
(statearr_28062_28083[(1)] = (5));

} else {
var statearr_28063_28084 = state_28057__$1;
(statearr_28063_28084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (13))){
var state_28057__$1 = state_28057;
var statearr_28064_28085 = state_28057__$1;
(statearr_28064_28085[(2)] = null);

(statearr_28064_28085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (6))){
var inst_28034 = (state_28057[(7)]);
var inst_28040 = p.call(null,inst_28034);
var state_28057__$1 = state_28057;
if(cljs.core.truth_(inst_28040)){
var statearr_28065_28086 = state_28057__$1;
(statearr_28065_28086[(1)] = (9));

} else {
var statearr_28066_28087 = state_28057__$1;
(statearr_28066_28087[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (3))){
var inst_28055 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28057__$1,inst_28055);
} else {
if((state_val_28058 === (12))){
var state_28057__$1 = state_28057;
var statearr_28067_28088 = state_28057__$1;
(statearr_28067_28088[(2)] = null);

(statearr_28067_28088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (2))){
var state_28057__$1 = state_28057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28057__$1,(4),ch);
} else {
if((state_val_28058 === (11))){
var inst_28034 = (state_28057[(7)]);
var inst_28044 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28057__$1,(8),inst_28044,inst_28034);
} else {
if((state_val_28058 === (9))){
var state_28057__$1 = state_28057;
var statearr_28068_28089 = state_28057__$1;
(statearr_28068_28089[(2)] = tc);

(statearr_28068_28089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (5))){
var inst_28037 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28038 = cljs.core.async.close_BANG_.call(null,fc);
var state_28057__$1 = (function (){var statearr_28069 = state_28057;
(statearr_28069[(8)] = inst_28037);

return statearr_28069;
})();
var statearr_28070_28090 = state_28057__$1;
(statearr_28070_28090[(2)] = inst_28038);

(statearr_28070_28090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (14))){
var inst_28051 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
var statearr_28071_28091 = state_28057__$1;
(statearr_28071_28091[(2)] = inst_28051);

(statearr_28071_28091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (10))){
var state_28057__$1 = state_28057;
var statearr_28072_28092 = state_28057__$1;
(statearr_28072_28092[(2)] = fc);

(statearr_28072_28092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (8))){
var inst_28046 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
if(cljs.core.truth_(inst_28046)){
var statearr_28073_28093 = state_28057__$1;
(statearr_28073_28093[(1)] = (12));

} else {
var statearr_28074_28094 = state_28057__$1;
(statearr_28074_28094[(1)] = (13));

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
});})(c__27630__auto___28080,tc,fc))
;
return ((function (switch__27540__auto__,c__27630__auto___28080,tc,fc){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_28075 = [null,null,null,null,null,null,null,null,null];
(statearr_28075[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_28075[(1)] = (1));

return statearr_28075;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_28057){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_28057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e28076){if((e28076 instanceof Object)){
var ex__27544__auto__ = e28076;
var statearr_28077_28095 = state_28057;
(statearr_28077_28095[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28096 = state_28057;
state_28057 = G__28096;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_28057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_28057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___28080,tc,fc))
})();
var state__27632__auto__ = (function (){var statearr_28078 = f__27631__auto__.call(null);
(statearr_28078[(6)] = c__27630__auto___28080);

return statearr_28078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___28080,tc,fc))
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
var c__27630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto__){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto__){
return (function (state_28117){
var state_val_28118 = (state_28117[(1)]);
if((state_val_28118 === (7))){
var inst_28113 = (state_28117[(2)]);
var state_28117__$1 = state_28117;
var statearr_28119_28137 = state_28117__$1;
(statearr_28119_28137[(2)] = inst_28113);

(statearr_28119_28137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (1))){
var inst_28097 = init;
var state_28117__$1 = (function (){var statearr_28120 = state_28117;
(statearr_28120[(7)] = inst_28097);

return statearr_28120;
})();
var statearr_28121_28138 = state_28117__$1;
(statearr_28121_28138[(2)] = null);

(statearr_28121_28138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (4))){
var inst_28100 = (state_28117[(8)]);
var inst_28100__$1 = (state_28117[(2)]);
var inst_28101 = (inst_28100__$1 == null);
var state_28117__$1 = (function (){var statearr_28122 = state_28117;
(statearr_28122[(8)] = inst_28100__$1);

return statearr_28122;
})();
if(cljs.core.truth_(inst_28101)){
var statearr_28123_28139 = state_28117__$1;
(statearr_28123_28139[(1)] = (5));

} else {
var statearr_28124_28140 = state_28117__$1;
(statearr_28124_28140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (6))){
var inst_28104 = (state_28117[(9)]);
var inst_28097 = (state_28117[(7)]);
var inst_28100 = (state_28117[(8)]);
var inst_28104__$1 = f.call(null,inst_28097,inst_28100);
var inst_28105 = cljs.core.reduced_QMARK_.call(null,inst_28104__$1);
var state_28117__$1 = (function (){var statearr_28125 = state_28117;
(statearr_28125[(9)] = inst_28104__$1);

return statearr_28125;
})();
if(inst_28105){
var statearr_28126_28141 = state_28117__$1;
(statearr_28126_28141[(1)] = (8));

} else {
var statearr_28127_28142 = state_28117__$1;
(statearr_28127_28142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (3))){
var inst_28115 = (state_28117[(2)]);
var state_28117__$1 = state_28117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28117__$1,inst_28115);
} else {
if((state_val_28118 === (2))){
var state_28117__$1 = state_28117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28117__$1,(4),ch);
} else {
if((state_val_28118 === (9))){
var inst_28104 = (state_28117[(9)]);
var inst_28097 = inst_28104;
var state_28117__$1 = (function (){var statearr_28128 = state_28117;
(statearr_28128[(7)] = inst_28097);

return statearr_28128;
})();
var statearr_28129_28143 = state_28117__$1;
(statearr_28129_28143[(2)] = null);

(statearr_28129_28143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (5))){
var inst_28097 = (state_28117[(7)]);
var state_28117__$1 = state_28117;
var statearr_28130_28144 = state_28117__$1;
(statearr_28130_28144[(2)] = inst_28097);

(statearr_28130_28144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (10))){
var inst_28111 = (state_28117[(2)]);
var state_28117__$1 = state_28117;
var statearr_28131_28145 = state_28117__$1;
(statearr_28131_28145[(2)] = inst_28111);

(statearr_28131_28145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (8))){
var inst_28104 = (state_28117[(9)]);
var inst_28107 = cljs.core.deref.call(null,inst_28104);
var state_28117__$1 = state_28117;
var statearr_28132_28146 = state_28117__$1;
(statearr_28132_28146[(2)] = inst_28107);

(statearr_28132_28146[(1)] = (10));


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
});})(c__27630__auto__))
;
return ((function (switch__27540__auto__,c__27630__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27541__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27541__auto____0 = (function (){
var statearr_28133 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28133[(0)] = cljs$core$async$reduce_$_state_machine__27541__auto__);

(statearr_28133[(1)] = (1));

return statearr_28133;
});
var cljs$core$async$reduce_$_state_machine__27541__auto____1 = (function (state_28117){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_28117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e28134){if((e28134 instanceof Object)){
var ex__27544__auto__ = e28134;
var statearr_28135_28147 = state_28117;
(statearr_28135_28147[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28148 = state_28117;
state_28117 = G__28148;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27541__auto__ = function(state_28117){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27541__auto____1.call(this,state_28117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27541__auto____0;
cljs$core$async$reduce_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27541__auto____1;
return cljs$core$async$reduce_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto__))
})();
var state__27632__auto__ = (function (){var statearr_28136 = f__27631__auto__.call(null);
(statearr_28136[(6)] = c__27630__auto__);

return statearr_28136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto__))
);

return c__27630__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto__,f__$1){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto__,f__$1){
return (function (state_28154){
var state_val_28155 = (state_28154[(1)]);
if((state_val_28155 === (1))){
var inst_28149 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(2),inst_28149);
} else {
if((state_val_28155 === (2))){
var inst_28151 = (state_28154[(2)]);
var inst_28152 = f__$1.call(null,inst_28151);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28154__$1,inst_28152);
} else {
return null;
}
}
});})(c__27630__auto__,f__$1))
;
return ((function (switch__27540__auto__,c__27630__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27541__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27541__auto____0 = (function (){
var statearr_28156 = [null,null,null,null,null,null,null];
(statearr_28156[(0)] = cljs$core$async$transduce_$_state_machine__27541__auto__);

(statearr_28156[(1)] = (1));

return statearr_28156;
});
var cljs$core$async$transduce_$_state_machine__27541__auto____1 = (function (state_28154){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_28154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e28157){if((e28157 instanceof Object)){
var ex__27544__auto__ = e28157;
var statearr_28158_28160 = state_28154;
(statearr_28158_28160[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28161 = state_28154;
state_28154 = G__28161;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27541__auto__ = function(state_28154){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27541__auto____1.call(this,state_28154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27541__auto____0;
cljs$core$async$transduce_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27541__auto____1;
return cljs$core$async$transduce_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto__,f__$1))
})();
var state__27632__auto__ = (function (){var statearr_28159 = f__27631__auto__.call(null);
(statearr_28159[(6)] = c__27630__auto__);

return statearr_28159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto__,f__$1))
);

return c__27630__auto__;
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
var G__28163 = arguments.length;
switch (G__28163) {
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
var c__27630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto__){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto__){
return (function (state_28188){
var state_val_28189 = (state_28188[(1)]);
if((state_val_28189 === (7))){
var inst_28170 = (state_28188[(2)]);
var state_28188__$1 = state_28188;
var statearr_28190_28211 = state_28188__$1;
(statearr_28190_28211[(2)] = inst_28170);

(statearr_28190_28211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (1))){
var inst_28164 = cljs.core.seq.call(null,coll);
var inst_28165 = inst_28164;
var state_28188__$1 = (function (){var statearr_28191 = state_28188;
(statearr_28191[(7)] = inst_28165);

return statearr_28191;
})();
var statearr_28192_28212 = state_28188__$1;
(statearr_28192_28212[(2)] = null);

(statearr_28192_28212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (4))){
var inst_28165 = (state_28188[(7)]);
var inst_28168 = cljs.core.first.call(null,inst_28165);
var state_28188__$1 = state_28188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28188__$1,(7),ch,inst_28168);
} else {
if((state_val_28189 === (13))){
var inst_28182 = (state_28188[(2)]);
var state_28188__$1 = state_28188;
var statearr_28193_28213 = state_28188__$1;
(statearr_28193_28213[(2)] = inst_28182);

(statearr_28193_28213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (6))){
var inst_28173 = (state_28188[(2)]);
var state_28188__$1 = state_28188;
if(cljs.core.truth_(inst_28173)){
var statearr_28194_28214 = state_28188__$1;
(statearr_28194_28214[(1)] = (8));

} else {
var statearr_28195_28215 = state_28188__$1;
(statearr_28195_28215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (3))){
var inst_28186 = (state_28188[(2)]);
var state_28188__$1 = state_28188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28188__$1,inst_28186);
} else {
if((state_val_28189 === (12))){
var state_28188__$1 = state_28188;
var statearr_28196_28216 = state_28188__$1;
(statearr_28196_28216[(2)] = null);

(statearr_28196_28216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (2))){
var inst_28165 = (state_28188[(7)]);
var state_28188__$1 = state_28188;
if(cljs.core.truth_(inst_28165)){
var statearr_28197_28217 = state_28188__$1;
(statearr_28197_28217[(1)] = (4));

} else {
var statearr_28198_28218 = state_28188__$1;
(statearr_28198_28218[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (11))){
var inst_28179 = cljs.core.async.close_BANG_.call(null,ch);
var state_28188__$1 = state_28188;
var statearr_28199_28219 = state_28188__$1;
(statearr_28199_28219[(2)] = inst_28179);

(statearr_28199_28219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (9))){
var state_28188__$1 = state_28188;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28200_28220 = state_28188__$1;
(statearr_28200_28220[(1)] = (11));

} else {
var statearr_28201_28221 = state_28188__$1;
(statearr_28201_28221[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (5))){
var inst_28165 = (state_28188[(7)]);
var state_28188__$1 = state_28188;
var statearr_28202_28222 = state_28188__$1;
(statearr_28202_28222[(2)] = inst_28165);

(statearr_28202_28222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (10))){
var inst_28184 = (state_28188[(2)]);
var state_28188__$1 = state_28188;
var statearr_28203_28223 = state_28188__$1;
(statearr_28203_28223[(2)] = inst_28184);

(statearr_28203_28223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (8))){
var inst_28165 = (state_28188[(7)]);
var inst_28175 = cljs.core.next.call(null,inst_28165);
var inst_28165__$1 = inst_28175;
var state_28188__$1 = (function (){var statearr_28204 = state_28188;
(statearr_28204[(7)] = inst_28165__$1);

return statearr_28204;
})();
var statearr_28205_28224 = state_28188__$1;
(statearr_28205_28224[(2)] = null);

(statearr_28205_28224[(1)] = (2));


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
});})(c__27630__auto__))
;
return ((function (switch__27540__auto__,c__27630__auto__){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_28206 = [null,null,null,null,null,null,null,null];
(statearr_28206[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_28206[(1)] = (1));

return statearr_28206;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_28188){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_28188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e28207){if((e28207 instanceof Object)){
var ex__27544__auto__ = e28207;
var statearr_28208_28225 = state_28188;
(statearr_28208_28225[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28226 = state_28188;
state_28188 = G__28226;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_28188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_28188);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto__))
})();
var state__27632__auto__ = (function (){var statearr_28209 = f__27631__auto__.call(null);
(statearr_28209[(6)] = c__27630__auto__);

return statearr_28209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto__))
);

return c__27630__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28227 = (function (ch,cs,meta28228){
this.ch = ch;
this.cs = cs;
this.meta28228 = meta28228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28229,meta28228__$1){
var self__ = this;
var _28229__$1 = this;
return (new cljs.core.async.t_cljs$core$async28227(self__.ch,self__.cs,meta28228__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28229){
var self__ = this;
var _28229__$1 = this;
return self__.meta28228;
});})(cs))
;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28227.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28227.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28228","meta28228",1690384345,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28227";

cljs.core.async.t_cljs$core$async28227.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28227");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28227.
 */
cljs.core.async.__GT_t_cljs$core$async28227 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28227(ch__$1,cs__$1,meta28228){
return (new cljs.core.async.t_cljs$core$async28227(ch__$1,cs__$1,meta28228));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28227(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27630__auto___28449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___28449,cs,m,dchan,dctr,done){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___28449,cs,m,dchan,dctr,done){
return (function (state_28364){
var state_val_28365 = (state_28364[(1)]);
if((state_val_28365 === (7))){
var inst_28360 = (state_28364[(2)]);
var state_28364__$1 = state_28364;
var statearr_28366_28450 = state_28364__$1;
(statearr_28366_28450[(2)] = inst_28360);

(statearr_28366_28450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (20))){
var inst_28263 = (state_28364[(7)]);
var inst_28275 = cljs.core.first.call(null,inst_28263);
var inst_28276 = cljs.core.nth.call(null,inst_28275,(0),null);
var inst_28277 = cljs.core.nth.call(null,inst_28275,(1),null);
var state_28364__$1 = (function (){var statearr_28367 = state_28364;
(statearr_28367[(8)] = inst_28276);

return statearr_28367;
})();
if(cljs.core.truth_(inst_28277)){
var statearr_28368_28451 = state_28364__$1;
(statearr_28368_28451[(1)] = (22));

} else {
var statearr_28369_28452 = state_28364__$1;
(statearr_28369_28452[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (27))){
var inst_28312 = (state_28364[(9)]);
var inst_28305 = (state_28364[(10)]);
var inst_28307 = (state_28364[(11)]);
var inst_28232 = (state_28364[(12)]);
var inst_28312__$1 = cljs.core._nth.call(null,inst_28305,inst_28307);
var inst_28313 = cljs.core.async.put_BANG_.call(null,inst_28312__$1,inst_28232,done);
var state_28364__$1 = (function (){var statearr_28370 = state_28364;
(statearr_28370[(9)] = inst_28312__$1);

return statearr_28370;
})();
if(cljs.core.truth_(inst_28313)){
var statearr_28371_28453 = state_28364__$1;
(statearr_28371_28453[(1)] = (30));

} else {
var statearr_28372_28454 = state_28364__$1;
(statearr_28372_28454[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (1))){
var state_28364__$1 = state_28364;
var statearr_28373_28455 = state_28364__$1;
(statearr_28373_28455[(2)] = null);

(statearr_28373_28455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (24))){
var inst_28263 = (state_28364[(7)]);
var inst_28282 = (state_28364[(2)]);
var inst_28283 = cljs.core.next.call(null,inst_28263);
var inst_28241 = inst_28283;
var inst_28242 = null;
var inst_28243 = (0);
var inst_28244 = (0);
var state_28364__$1 = (function (){var statearr_28374 = state_28364;
(statearr_28374[(13)] = inst_28241);

(statearr_28374[(14)] = inst_28244);

(statearr_28374[(15)] = inst_28243);

(statearr_28374[(16)] = inst_28282);

(statearr_28374[(17)] = inst_28242);

return statearr_28374;
})();
var statearr_28375_28456 = state_28364__$1;
(statearr_28375_28456[(2)] = null);

(statearr_28375_28456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (39))){
var state_28364__$1 = state_28364;
var statearr_28379_28457 = state_28364__$1;
(statearr_28379_28457[(2)] = null);

(statearr_28379_28457[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (4))){
var inst_28232 = (state_28364[(12)]);
var inst_28232__$1 = (state_28364[(2)]);
var inst_28233 = (inst_28232__$1 == null);
var state_28364__$1 = (function (){var statearr_28380 = state_28364;
(statearr_28380[(12)] = inst_28232__$1);

return statearr_28380;
})();
if(cljs.core.truth_(inst_28233)){
var statearr_28381_28458 = state_28364__$1;
(statearr_28381_28458[(1)] = (5));

} else {
var statearr_28382_28459 = state_28364__$1;
(statearr_28382_28459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (15))){
var inst_28241 = (state_28364[(13)]);
var inst_28244 = (state_28364[(14)]);
var inst_28243 = (state_28364[(15)]);
var inst_28242 = (state_28364[(17)]);
var inst_28259 = (state_28364[(2)]);
var inst_28260 = (inst_28244 + (1));
var tmp28376 = inst_28241;
var tmp28377 = inst_28243;
var tmp28378 = inst_28242;
var inst_28241__$1 = tmp28376;
var inst_28242__$1 = tmp28378;
var inst_28243__$1 = tmp28377;
var inst_28244__$1 = inst_28260;
var state_28364__$1 = (function (){var statearr_28383 = state_28364;
(statearr_28383[(18)] = inst_28259);

(statearr_28383[(13)] = inst_28241__$1);

(statearr_28383[(14)] = inst_28244__$1);

(statearr_28383[(15)] = inst_28243__$1);

(statearr_28383[(17)] = inst_28242__$1);

return statearr_28383;
})();
var statearr_28384_28460 = state_28364__$1;
(statearr_28384_28460[(2)] = null);

(statearr_28384_28460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (21))){
var inst_28286 = (state_28364[(2)]);
var state_28364__$1 = state_28364;
var statearr_28388_28461 = state_28364__$1;
(statearr_28388_28461[(2)] = inst_28286);

(statearr_28388_28461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (31))){
var inst_28312 = (state_28364[(9)]);
var inst_28316 = done.call(null,null);
var inst_28317 = cljs.core.async.untap_STAR_.call(null,m,inst_28312);
var state_28364__$1 = (function (){var statearr_28389 = state_28364;
(statearr_28389[(19)] = inst_28316);

return statearr_28389;
})();
var statearr_28390_28462 = state_28364__$1;
(statearr_28390_28462[(2)] = inst_28317);

(statearr_28390_28462[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (32))){
var inst_28304 = (state_28364[(20)]);
var inst_28306 = (state_28364[(21)]);
var inst_28305 = (state_28364[(10)]);
var inst_28307 = (state_28364[(11)]);
var inst_28319 = (state_28364[(2)]);
var inst_28320 = (inst_28307 + (1));
var tmp28385 = inst_28304;
var tmp28386 = inst_28306;
var tmp28387 = inst_28305;
var inst_28304__$1 = tmp28385;
var inst_28305__$1 = tmp28387;
var inst_28306__$1 = tmp28386;
var inst_28307__$1 = inst_28320;
var state_28364__$1 = (function (){var statearr_28391 = state_28364;
(statearr_28391[(20)] = inst_28304__$1);

(statearr_28391[(21)] = inst_28306__$1);

(statearr_28391[(10)] = inst_28305__$1);

(statearr_28391[(11)] = inst_28307__$1);

(statearr_28391[(22)] = inst_28319);

return statearr_28391;
})();
var statearr_28392_28463 = state_28364__$1;
(statearr_28392_28463[(2)] = null);

(statearr_28392_28463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (40))){
var inst_28332 = (state_28364[(23)]);
var inst_28336 = done.call(null,null);
var inst_28337 = cljs.core.async.untap_STAR_.call(null,m,inst_28332);
var state_28364__$1 = (function (){var statearr_28393 = state_28364;
(statearr_28393[(24)] = inst_28336);

return statearr_28393;
})();
var statearr_28394_28464 = state_28364__$1;
(statearr_28394_28464[(2)] = inst_28337);

(statearr_28394_28464[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (33))){
var inst_28323 = (state_28364[(25)]);
var inst_28325 = cljs.core.chunked_seq_QMARK_.call(null,inst_28323);
var state_28364__$1 = state_28364;
if(inst_28325){
var statearr_28395_28465 = state_28364__$1;
(statearr_28395_28465[(1)] = (36));

} else {
var statearr_28396_28466 = state_28364__$1;
(statearr_28396_28466[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (13))){
var inst_28253 = (state_28364[(26)]);
var inst_28256 = cljs.core.async.close_BANG_.call(null,inst_28253);
var state_28364__$1 = state_28364;
var statearr_28397_28467 = state_28364__$1;
(statearr_28397_28467[(2)] = inst_28256);

(statearr_28397_28467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (22))){
var inst_28276 = (state_28364[(8)]);
var inst_28279 = cljs.core.async.close_BANG_.call(null,inst_28276);
var state_28364__$1 = state_28364;
var statearr_28398_28468 = state_28364__$1;
(statearr_28398_28468[(2)] = inst_28279);

(statearr_28398_28468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (36))){
var inst_28323 = (state_28364[(25)]);
var inst_28327 = cljs.core.chunk_first.call(null,inst_28323);
var inst_28328 = cljs.core.chunk_rest.call(null,inst_28323);
var inst_28329 = cljs.core.count.call(null,inst_28327);
var inst_28304 = inst_28328;
var inst_28305 = inst_28327;
var inst_28306 = inst_28329;
var inst_28307 = (0);
var state_28364__$1 = (function (){var statearr_28399 = state_28364;
(statearr_28399[(20)] = inst_28304);

(statearr_28399[(21)] = inst_28306);

(statearr_28399[(10)] = inst_28305);

(statearr_28399[(11)] = inst_28307);

return statearr_28399;
})();
var statearr_28400_28469 = state_28364__$1;
(statearr_28400_28469[(2)] = null);

(statearr_28400_28469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (41))){
var inst_28323 = (state_28364[(25)]);
var inst_28339 = (state_28364[(2)]);
var inst_28340 = cljs.core.next.call(null,inst_28323);
var inst_28304 = inst_28340;
var inst_28305 = null;
var inst_28306 = (0);
var inst_28307 = (0);
var state_28364__$1 = (function (){var statearr_28401 = state_28364;
(statearr_28401[(20)] = inst_28304);

(statearr_28401[(21)] = inst_28306);

(statearr_28401[(10)] = inst_28305);

(statearr_28401[(27)] = inst_28339);

(statearr_28401[(11)] = inst_28307);

return statearr_28401;
})();
var statearr_28402_28470 = state_28364__$1;
(statearr_28402_28470[(2)] = null);

(statearr_28402_28470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (43))){
var state_28364__$1 = state_28364;
var statearr_28403_28471 = state_28364__$1;
(statearr_28403_28471[(2)] = null);

(statearr_28403_28471[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (29))){
var inst_28348 = (state_28364[(2)]);
var state_28364__$1 = state_28364;
var statearr_28404_28472 = state_28364__$1;
(statearr_28404_28472[(2)] = inst_28348);

(statearr_28404_28472[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (44))){
var inst_28357 = (state_28364[(2)]);
var state_28364__$1 = (function (){var statearr_28405 = state_28364;
(statearr_28405[(28)] = inst_28357);

return statearr_28405;
})();
var statearr_28406_28473 = state_28364__$1;
(statearr_28406_28473[(2)] = null);

(statearr_28406_28473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (6))){
var inst_28296 = (state_28364[(29)]);
var inst_28295 = cljs.core.deref.call(null,cs);
var inst_28296__$1 = cljs.core.keys.call(null,inst_28295);
var inst_28297 = cljs.core.count.call(null,inst_28296__$1);
var inst_28298 = cljs.core.reset_BANG_.call(null,dctr,inst_28297);
var inst_28303 = cljs.core.seq.call(null,inst_28296__$1);
var inst_28304 = inst_28303;
var inst_28305 = null;
var inst_28306 = (0);
var inst_28307 = (0);
var state_28364__$1 = (function (){var statearr_28407 = state_28364;
(statearr_28407[(29)] = inst_28296__$1);

(statearr_28407[(20)] = inst_28304);

(statearr_28407[(21)] = inst_28306);

(statearr_28407[(10)] = inst_28305);

(statearr_28407[(11)] = inst_28307);

(statearr_28407[(30)] = inst_28298);

return statearr_28407;
})();
var statearr_28408_28474 = state_28364__$1;
(statearr_28408_28474[(2)] = null);

(statearr_28408_28474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (28))){
var inst_28323 = (state_28364[(25)]);
var inst_28304 = (state_28364[(20)]);
var inst_28323__$1 = cljs.core.seq.call(null,inst_28304);
var state_28364__$1 = (function (){var statearr_28409 = state_28364;
(statearr_28409[(25)] = inst_28323__$1);

return statearr_28409;
})();
if(inst_28323__$1){
var statearr_28410_28475 = state_28364__$1;
(statearr_28410_28475[(1)] = (33));

} else {
var statearr_28411_28476 = state_28364__$1;
(statearr_28411_28476[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (25))){
var inst_28306 = (state_28364[(21)]);
var inst_28307 = (state_28364[(11)]);
var inst_28309 = (inst_28307 < inst_28306);
var inst_28310 = inst_28309;
var state_28364__$1 = state_28364;
if(cljs.core.truth_(inst_28310)){
var statearr_28412_28477 = state_28364__$1;
(statearr_28412_28477[(1)] = (27));

} else {
var statearr_28413_28478 = state_28364__$1;
(statearr_28413_28478[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (34))){
var state_28364__$1 = state_28364;
var statearr_28414_28479 = state_28364__$1;
(statearr_28414_28479[(2)] = null);

(statearr_28414_28479[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (17))){
var state_28364__$1 = state_28364;
var statearr_28415_28480 = state_28364__$1;
(statearr_28415_28480[(2)] = null);

(statearr_28415_28480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (3))){
var inst_28362 = (state_28364[(2)]);
var state_28364__$1 = state_28364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28364__$1,inst_28362);
} else {
if((state_val_28365 === (12))){
var inst_28291 = (state_28364[(2)]);
var state_28364__$1 = state_28364;
var statearr_28416_28481 = state_28364__$1;
(statearr_28416_28481[(2)] = inst_28291);

(statearr_28416_28481[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (2))){
var state_28364__$1 = state_28364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28364__$1,(4),ch);
} else {
if((state_val_28365 === (23))){
var state_28364__$1 = state_28364;
var statearr_28417_28482 = state_28364__$1;
(statearr_28417_28482[(2)] = null);

(statearr_28417_28482[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (35))){
var inst_28346 = (state_28364[(2)]);
var state_28364__$1 = state_28364;
var statearr_28418_28483 = state_28364__$1;
(statearr_28418_28483[(2)] = inst_28346);

(statearr_28418_28483[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (19))){
var inst_28263 = (state_28364[(7)]);
var inst_28267 = cljs.core.chunk_first.call(null,inst_28263);
var inst_28268 = cljs.core.chunk_rest.call(null,inst_28263);
var inst_28269 = cljs.core.count.call(null,inst_28267);
var inst_28241 = inst_28268;
var inst_28242 = inst_28267;
var inst_28243 = inst_28269;
var inst_28244 = (0);
var state_28364__$1 = (function (){var statearr_28419 = state_28364;
(statearr_28419[(13)] = inst_28241);

(statearr_28419[(14)] = inst_28244);

(statearr_28419[(15)] = inst_28243);

(statearr_28419[(17)] = inst_28242);

return statearr_28419;
})();
var statearr_28420_28484 = state_28364__$1;
(statearr_28420_28484[(2)] = null);

(statearr_28420_28484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (11))){
var inst_28241 = (state_28364[(13)]);
var inst_28263 = (state_28364[(7)]);
var inst_28263__$1 = cljs.core.seq.call(null,inst_28241);
var state_28364__$1 = (function (){var statearr_28421 = state_28364;
(statearr_28421[(7)] = inst_28263__$1);

return statearr_28421;
})();
if(inst_28263__$1){
var statearr_28422_28485 = state_28364__$1;
(statearr_28422_28485[(1)] = (16));

} else {
var statearr_28423_28486 = state_28364__$1;
(statearr_28423_28486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (9))){
var inst_28293 = (state_28364[(2)]);
var state_28364__$1 = state_28364;
var statearr_28424_28487 = state_28364__$1;
(statearr_28424_28487[(2)] = inst_28293);

(statearr_28424_28487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (5))){
var inst_28239 = cljs.core.deref.call(null,cs);
var inst_28240 = cljs.core.seq.call(null,inst_28239);
var inst_28241 = inst_28240;
var inst_28242 = null;
var inst_28243 = (0);
var inst_28244 = (0);
var state_28364__$1 = (function (){var statearr_28425 = state_28364;
(statearr_28425[(13)] = inst_28241);

(statearr_28425[(14)] = inst_28244);

(statearr_28425[(15)] = inst_28243);

(statearr_28425[(17)] = inst_28242);

return statearr_28425;
})();
var statearr_28426_28488 = state_28364__$1;
(statearr_28426_28488[(2)] = null);

(statearr_28426_28488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (14))){
var state_28364__$1 = state_28364;
var statearr_28427_28489 = state_28364__$1;
(statearr_28427_28489[(2)] = null);

(statearr_28427_28489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (45))){
var inst_28354 = (state_28364[(2)]);
var state_28364__$1 = state_28364;
var statearr_28428_28490 = state_28364__$1;
(statearr_28428_28490[(2)] = inst_28354);

(statearr_28428_28490[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (26))){
var inst_28296 = (state_28364[(29)]);
var inst_28350 = (state_28364[(2)]);
var inst_28351 = cljs.core.seq.call(null,inst_28296);
var state_28364__$1 = (function (){var statearr_28429 = state_28364;
(statearr_28429[(31)] = inst_28350);

return statearr_28429;
})();
if(inst_28351){
var statearr_28430_28491 = state_28364__$1;
(statearr_28430_28491[(1)] = (42));

} else {
var statearr_28431_28492 = state_28364__$1;
(statearr_28431_28492[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (16))){
var inst_28263 = (state_28364[(7)]);
var inst_28265 = cljs.core.chunked_seq_QMARK_.call(null,inst_28263);
var state_28364__$1 = state_28364;
if(inst_28265){
var statearr_28432_28493 = state_28364__$1;
(statearr_28432_28493[(1)] = (19));

} else {
var statearr_28433_28494 = state_28364__$1;
(statearr_28433_28494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (38))){
var inst_28343 = (state_28364[(2)]);
var state_28364__$1 = state_28364;
var statearr_28434_28495 = state_28364__$1;
(statearr_28434_28495[(2)] = inst_28343);

(statearr_28434_28495[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (30))){
var state_28364__$1 = state_28364;
var statearr_28435_28496 = state_28364__$1;
(statearr_28435_28496[(2)] = null);

(statearr_28435_28496[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (10))){
var inst_28244 = (state_28364[(14)]);
var inst_28242 = (state_28364[(17)]);
var inst_28252 = cljs.core._nth.call(null,inst_28242,inst_28244);
var inst_28253 = cljs.core.nth.call(null,inst_28252,(0),null);
var inst_28254 = cljs.core.nth.call(null,inst_28252,(1),null);
var state_28364__$1 = (function (){var statearr_28436 = state_28364;
(statearr_28436[(26)] = inst_28253);

return statearr_28436;
})();
if(cljs.core.truth_(inst_28254)){
var statearr_28437_28497 = state_28364__$1;
(statearr_28437_28497[(1)] = (13));

} else {
var statearr_28438_28498 = state_28364__$1;
(statearr_28438_28498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (18))){
var inst_28289 = (state_28364[(2)]);
var state_28364__$1 = state_28364;
var statearr_28439_28499 = state_28364__$1;
(statearr_28439_28499[(2)] = inst_28289);

(statearr_28439_28499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (42))){
var state_28364__$1 = state_28364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28364__$1,(45),dchan);
} else {
if((state_val_28365 === (37))){
var inst_28323 = (state_28364[(25)]);
var inst_28232 = (state_28364[(12)]);
var inst_28332 = (state_28364[(23)]);
var inst_28332__$1 = cljs.core.first.call(null,inst_28323);
var inst_28333 = cljs.core.async.put_BANG_.call(null,inst_28332__$1,inst_28232,done);
var state_28364__$1 = (function (){var statearr_28440 = state_28364;
(statearr_28440[(23)] = inst_28332__$1);

return statearr_28440;
})();
if(cljs.core.truth_(inst_28333)){
var statearr_28441_28500 = state_28364__$1;
(statearr_28441_28500[(1)] = (39));

} else {
var statearr_28442_28501 = state_28364__$1;
(statearr_28442_28501[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28365 === (8))){
var inst_28244 = (state_28364[(14)]);
var inst_28243 = (state_28364[(15)]);
var inst_28246 = (inst_28244 < inst_28243);
var inst_28247 = inst_28246;
var state_28364__$1 = state_28364;
if(cljs.core.truth_(inst_28247)){
var statearr_28443_28502 = state_28364__$1;
(statearr_28443_28502[(1)] = (10));

} else {
var statearr_28444_28503 = state_28364__$1;
(statearr_28444_28503[(1)] = (11));

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
});})(c__27630__auto___28449,cs,m,dchan,dctr,done))
;
return ((function (switch__27540__auto__,c__27630__auto___28449,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27541__auto__ = null;
var cljs$core$async$mult_$_state_machine__27541__auto____0 = (function (){
var statearr_28445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28445[(0)] = cljs$core$async$mult_$_state_machine__27541__auto__);

(statearr_28445[(1)] = (1));

return statearr_28445;
});
var cljs$core$async$mult_$_state_machine__27541__auto____1 = (function (state_28364){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_28364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e28446){if((e28446 instanceof Object)){
var ex__27544__auto__ = e28446;
var statearr_28447_28504 = state_28364;
(statearr_28447_28504[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28505 = state_28364;
state_28364 = G__28505;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27541__auto__ = function(state_28364){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27541__auto____1.call(this,state_28364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27541__auto____0;
cljs$core$async$mult_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27541__auto____1;
return cljs$core$async$mult_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___28449,cs,m,dchan,dctr,done))
})();
var state__27632__auto__ = (function (){var statearr_28448 = f__27631__auto__.call(null);
(statearr_28448[(6)] = c__27630__auto___28449);

return statearr_28448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___28449,cs,m,dchan,dctr,done))
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
var G__28507 = arguments.length;
switch (G__28507) {
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
var len__4499__auto___28519 = arguments.length;
var i__4500__auto___28520 = (0);
while(true){
if((i__4500__auto___28520 < len__4499__auto___28519)){
args__4502__auto__.push((arguments[i__4500__auto___28520]));

var G__28521 = (i__4500__auto___28520 + (1));
i__4500__auto___28520 = G__28521;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28513){
var map__28514 = p__28513;
var map__28514__$1 = ((((!((map__28514 == null)))?(((((map__28514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28514):map__28514);
var opts = map__28514__$1;
var statearr_28516_28522 = state;
(statearr_28516_28522[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28514,map__28514__$1,opts){
return (function (val){
var statearr_28517_28523 = state;
(statearr_28517_28523[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28514,map__28514__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28518_28524 = state;
(statearr_28518_28524[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28509){
var G__28510 = cljs.core.first.call(null,seq28509);
var seq28509__$1 = cljs.core.next.call(null,seq28509);
var G__28511 = cljs.core.first.call(null,seq28509__$1);
var seq28509__$2 = cljs.core.next.call(null,seq28509__$1);
var G__28512 = cljs.core.first.call(null,seq28509__$2);
var seq28509__$3 = cljs.core.next.call(null,seq28509__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28510,G__28511,G__28512,seq28509__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28525 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28526){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28526 = meta28526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28527,meta28526__$1){
var self__ = this;
var _28527__$1 = this;
return (new cljs.core.async.t_cljs$core$async28525(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28526__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28527){
var self__ = this;
var _28527__$1 = this;
return self__.meta28526;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28525.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28526","meta28526",1287297177,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28525";

cljs.core.async.t_cljs$core$async28525.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28525");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28525.
 */
cljs.core.async.__GT_t_cljs$core$async28525 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28525(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28526){
return (new cljs.core.async.t_cljs$core$async28525(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28526));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28525(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27630__auto___28689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___28689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___28689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28629){
var state_val_28630 = (state_28629[(1)]);
if((state_val_28630 === (7))){
var inst_28544 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28631_28690 = state_28629__$1;
(statearr_28631_28690[(2)] = inst_28544);

(statearr_28631_28690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (20))){
var inst_28556 = (state_28629[(7)]);
var state_28629__$1 = state_28629;
var statearr_28632_28691 = state_28629__$1;
(statearr_28632_28691[(2)] = inst_28556);

(statearr_28632_28691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (27))){
var state_28629__$1 = state_28629;
var statearr_28633_28692 = state_28629__$1;
(statearr_28633_28692[(2)] = null);

(statearr_28633_28692[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (1))){
var inst_28531 = (state_28629[(8)]);
var inst_28531__$1 = calc_state.call(null);
var inst_28533 = (inst_28531__$1 == null);
var inst_28534 = cljs.core.not.call(null,inst_28533);
var state_28629__$1 = (function (){var statearr_28634 = state_28629;
(statearr_28634[(8)] = inst_28531__$1);

return statearr_28634;
})();
if(inst_28534){
var statearr_28635_28693 = state_28629__$1;
(statearr_28635_28693[(1)] = (2));

} else {
var statearr_28636_28694 = state_28629__$1;
(statearr_28636_28694[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (24))){
var inst_28603 = (state_28629[(9)]);
var inst_28589 = (state_28629[(10)]);
var inst_28580 = (state_28629[(11)]);
var inst_28603__$1 = inst_28580.call(null,inst_28589);
var state_28629__$1 = (function (){var statearr_28637 = state_28629;
(statearr_28637[(9)] = inst_28603__$1);

return statearr_28637;
})();
if(cljs.core.truth_(inst_28603__$1)){
var statearr_28638_28695 = state_28629__$1;
(statearr_28638_28695[(1)] = (29));

} else {
var statearr_28639_28696 = state_28629__$1;
(statearr_28639_28696[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (4))){
var inst_28547 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28547)){
var statearr_28640_28697 = state_28629__$1;
(statearr_28640_28697[(1)] = (8));

} else {
var statearr_28641_28698 = state_28629__$1;
(statearr_28641_28698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (15))){
var inst_28574 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28574)){
var statearr_28642_28699 = state_28629__$1;
(statearr_28642_28699[(1)] = (19));

} else {
var statearr_28643_28700 = state_28629__$1;
(statearr_28643_28700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (21))){
var inst_28579 = (state_28629[(12)]);
var inst_28579__$1 = (state_28629[(2)]);
var inst_28580 = cljs.core.get.call(null,inst_28579__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28581 = cljs.core.get.call(null,inst_28579__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28582 = cljs.core.get.call(null,inst_28579__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28629__$1 = (function (){var statearr_28644 = state_28629;
(statearr_28644[(12)] = inst_28579__$1);

(statearr_28644[(11)] = inst_28580);

(statearr_28644[(13)] = inst_28581);

return statearr_28644;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28629__$1,(22),inst_28582);
} else {
if((state_val_28630 === (31))){
var inst_28611 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28611)){
var statearr_28645_28701 = state_28629__$1;
(statearr_28645_28701[(1)] = (32));

} else {
var statearr_28646_28702 = state_28629__$1;
(statearr_28646_28702[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (32))){
var inst_28588 = (state_28629[(14)]);
var state_28629__$1 = state_28629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28629__$1,(35),out,inst_28588);
} else {
if((state_val_28630 === (33))){
var inst_28579 = (state_28629[(12)]);
var inst_28556 = inst_28579;
var state_28629__$1 = (function (){var statearr_28647 = state_28629;
(statearr_28647[(7)] = inst_28556);

return statearr_28647;
})();
var statearr_28648_28703 = state_28629__$1;
(statearr_28648_28703[(2)] = null);

(statearr_28648_28703[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (13))){
var inst_28556 = (state_28629[(7)]);
var inst_28563 = inst_28556.cljs$lang$protocol_mask$partition0$;
var inst_28564 = (inst_28563 & (64));
var inst_28565 = inst_28556.cljs$core$ISeq$;
var inst_28566 = (cljs.core.PROTOCOL_SENTINEL === inst_28565);
var inst_28567 = ((inst_28564) || (inst_28566));
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28567)){
var statearr_28649_28704 = state_28629__$1;
(statearr_28649_28704[(1)] = (16));

} else {
var statearr_28650_28705 = state_28629__$1;
(statearr_28650_28705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (22))){
var inst_28588 = (state_28629[(14)]);
var inst_28589 = (state_28629[(10)]);
var inst_28587 = (state_28629[(2)]);
var inst_28588__$1 = cljs.core.nth.call(null,inst_28587,(0),null);
var inst_28589__$1 = cljs.core.nth.call(null,inst_28587,(1),null);
var inst_28590 = (inst_28588__$1 == null);
var inst_28591 = cljs.core._EQ_.call(null,inst_28589__$1,change);
var inst_28592 = ((inst_28590) || (inst_28591));
var state_28629__$1 = (function (){var statearr_28651 = state_28629;
(statearr_28651[(14)] = inst_28588__$1);

(statearr_28651[(10)] = inst_28589__$1);

return statearr_28651;
})();
if(cljs.core.truth_(inst_28592)){
var statearr_28652_28706 = state_28629__$1;
(statearr_28652_28706[(1)] = (23));

} else {
var statearr_28653_28707 = state_28629__$1;
(statearr_28653_28707[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (36))){
var inst_28579 = (state_28629[(12)]);
var inst_28556 = inst_28579;
var state_28629__$1 = (function (){var statearr_28654 = state_28629;
(statearr_28654[(7)] = inst_28556);

return statearr_28654;
})();
var statearr_28655_28708 = state_28629__$1;
(statearr_28655_28708[(2)] = null);

(statearr_28655_28708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (29))){
var inst_28603 = (state_28629[(9)]);
var state_28629__$1 = state_28629;
var statearr_28656_28709 = state_28629__$1;
(statearr_28656_28709[(2)] = inst_28603);

(statearr_28656_28709[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (6))){
var state_28629__$1 = state_28629;
var statearr_28657_28710 = state_28629__$1;
(statearr_28657_28710[(2)] = false);

(statearr_28657_28710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (28))){
var inst_28599 = (state_28629[(2)]);
var inst_28600 = calc_state.call(null);
var inst_28556 = inst_28600;
var state_28629__$1 = (function (){var statearr_28658 = state_28629;
(statearr_28658[(15)] = inst_28599);

(statearr_28658[(7)] = inst_28556);

return statearr_28658;
})();
var statearr_28659_28711 = state_28629__$1;
(statearr_28659_28711[(2)] = null);

(statearr_28659_28711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (25))){
var inst_28625 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28660_28712 = state_28629__$1;
(statearr_28660_28712[(2)] = inst_28625);

(statearr_28660_28712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (34))){
var inst_28623 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28661_28713 = state_28629__$1;
(statearr_28661_28713[(2)] = inst_28623);

(statearr_28661_28713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (17))){
var state_28629__$1 = state_28629;
var statearr_28662_28714 = state_28629__$1;
(statearr_28662_28714[(2)] = false);

(statearr_28662_28714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (3))){
var state_28629__$1 = state_28629;
var statearr_28663_28715 = state_28629__$1;
(statearr_28663_28715[(2)] = false);

(statearr_28663_28715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (12))){
var inst_28627 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28629__$1,inst_28627);
} else {
if((state_val_28630 === (2))){
var inst_28531 = (state_28629[(8)]);
var inst_28536 = inst_28531.cljs$lang$protocol_mask$partition0$;
var inst_28537 = (inst_28536 & (64));
var inst_28538 = inst_28531.cljs$core$ISeq$;
var inst_28539 = (cljs.core.PROTOCOL_SENTINEL === inst_28538);
var inst_28540 = ((inst_28537) || (inst_28539));
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28540)){
var statearr_28664_28716 = state_28629__$1;
(statearr_28664_28716[(1)] = (5));

} else {
var statearr_28665_28717 = state_28629__$1;
(statearr_28665_28717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (23))){
var inst_28588 = (state_28629[(14)]);
var inst_28594 = (inst_28588 == null);
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28594)){
var statearr_28666_28718 = state_28629__$1;
(statearr_28666_28718[(1)] = (26));

} else {
var statearr_28667_28719 = state_28629__$1;
(statearr_28667_28719[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (35))){
var inst_28614 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28614)){
var statearr_28668_28720 = state_28629__$1;
(statearr_28668_28720[(1)] = (36));

} else {
var statearr_28669_28721 = state_28629__$1;
(statearr_28669_28721[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (19))){
var inst_28556 = (state_28629[(7)]);
var inst_28576 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28556);
var state_28629__$1 = state_28629;
var statearr_28670_28722 = state_28629__$1;
(statearr_28670_28722[(2)] = inst_28576);

(statearr_28670_28722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (11))){
var inst_28556 = (state_28629[(7)]);
var inst_28560 = (inst_28556 == null);
var inst_28561 = cljs.core.not.call(null,inst_28560);
var state_28629__$1 = state_28629;
if(inst_28561){
var statearr_28671_28723 = state_28629__$1;
(statearr_28671_28723[(1)] = (13));

} else {
var statearr_28672_28724 = state_28629__$1;
(statearr_28672_28724[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (9))){
var inst_28531 = (state_28629[(8)]);
var state_28629__$1 = state_28629;
var statearr_28673_28725 = state_28629__$1;
(statearr_28673_28725[(2)] = inst_28531);

(statearr_28673_28725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (5))){
var state_28629__$1 = state_28629;
var statearr_28674_28726 = state_28629__$1;
(statearr_28674_28726[(2)] = true);

(statearr_28674_28726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (14))){
var state_28629__$1 = state_28629;
var statearr_28675_28727 = state_28629__$1;
(statearr_28675_28727[(2)] = false);

(statearr_28675_28727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (26))){
var inst_28589 = (state_28629[(10)]);
var inst_28596 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28589);
var state_28629__$1 = state_28629;
var statearr_28676_28728 = state_28629__$1;
(statearr_28676_28728[(2)] = inst_28596);

(statearr_28676_28728[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (16))){
var state_28629__$1 = state_28629;
var statearr_28677_28729 = state_28629__$1;
(statearr_28677_28729[(2)] = true);

(statearr_28677_28729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (38))){
var inst_28619 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28678_28730 = state_28629__$1;
(statearr_28678_28730[(2)] = inst_28619);

(statearr_28678_28730[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (30))){
var inst_28589 = (state_28629[(10)]);
var inst_28580 = (state_28629[(11)]);
var inst_28581 = (state_28629[(13)]);
var inst_28606 = cljs.core.empty_QMARK_.call(null,inst_28580);
var inst_28607 = inst_28581.call(null,inst_28589);
var inst_28608 = cljs.core.not.call(null,inst_28607);
var inst_28609 = ((inst_28606) && (inst_28608));
var state_28629__$1 = state_28629;
var statearr_28679_28731 = state_28629__$1;
(statearr_28679_28731[(2)] = inst_28609);

(statearr_28679_28731[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (10))){
var inst_28531 = (state_28629[(8)]);
var inst_28552 = (state_28629[(2)]);
var inst_28553 = cljs.core.get.call(null,inst_28552,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28554 = cljs.core.get.call(null,inst_28552,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28555 = cljs.core.get.call(null,inst_28552,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28556 = inst_28531;
var state_28629__$1 = (function (){var statearr_28680 = state_28629;
(statearr_28680[(16)] = inst_28554);

(statearr_28680[(17)] = inst_28555);

(statearr_28680[(18)] = inst_28553);

(statearr_28680[(7)] = inst_28556);

return statearr_28680;
})();
var statearr_28681_28732 = state_28629__$1;
(statearr_28681_28732[(2)] = null);

(statearr_28681_28732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (18))){
var inst_28571 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28682_28733 = state_28629__$1;
(statearr_28682_28733[(2)] = inst_28571);

(statearr_28682_28733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (37))){
var state_28629__$1 = state_28629;
var statearr_28683_28734 = state_28629__$1;
(statearr_28683_28734[(2)] = null);

(statearr_28683_28734[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (8))){
var inst_28531 = (state_28629[(8)]);
var inst_28549 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28531);
var state_28629__$1 = state_28629;
var statearr_28684_28735 = state_28629__$1;
(statearr_28684_28735[(2)] = inst_28549);

(statearr_28684_28735[(1)] = (10));


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
});})(c__27630__auto___28689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27540__auto__,c__27630__auto___28689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27541__auto__ = null;
var cljs$core$async$mix_$_state_machine__27541__auto____0 = (function (){
var statearr_28685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28685[(0)] = cljs$core$async$mix_$_state_machine__27541__auto__);

(statearr_28685[(1)] = (1));

return statearr_28685;
});
var cljs$core$async$mix_$_state_machine__27541__auto____1 = (function (state_28629){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_28629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e28686){if((e28686 instanceof Object)){
var ex__27544__auto__ = e28686;
var statearr_28687_28736 = state_28629;
(statearr_28687_28736[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28737 = state_28629;
state_28629 = G__28737;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27541__auto__ = function(state_28629){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27541__auto____1.call(this,state_28629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27541__auto____0;
cljs$core$async$mix_$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27541__auto____1;
return cljs$core$async$mix_$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___28689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27632__auto__ = (function (){var statearr_28688 = f__27631__auto__.call(null);
(statearr_28688[(6)] = c__27630__auto___28689);

return statearr_28688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___28689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28739 = arguments.length;
switch (G__28739) {
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
var G__28743 = arguments.length;
switch (G__28743) {
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
return (function (p1__28741_SHARP_){
if(cljs.core.truth_(p1__28741_SHARP_.call(null,topic))){
return p1__28741_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28741_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28744 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28745){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28745 = meta28745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28746,meta28745__$1){
var self__ = this;
var _28746__$1 = this;
return (new cljs.core.async.t_cljs$core$async28744(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28745__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28746){
var self__ = this;
var _28746__$1 = this;
return self__.meta28745;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28744.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28744.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28744.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28744.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28744.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28744.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28744.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28745","meta28745",1986676516,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28744";

cljs.core.async.t_cljs$core$async28744.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28744");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28744.
 */
cljs.core.async.__GT_t_cljs$core$async28744 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28744(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28745){
return (new cljs.core.async.t_cljs$core$async28744(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28745));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28744(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27630__auto___28864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___28864,mults,ensure_mult,p){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___28864,mults,ensure_mult,p){
return (function (state_28818){
var state_val_28819 = (state_28818[(1)]);
if((state_val_28819 === (7))){
var inst_28814 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28820_28865 = state_28818__$1;
(statearr_28820_28865[(2)] = inst_28814);

(statearr_28820_28865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (20))){
var state_28818__$1 = state_28818;
var statearr_28821_28866 = state_28818__$1;
(statearr_28821_28866[(2)] = null);

(statearr_28821_28866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (1))){
var state_28818__$1 = state_28818;
var statearr_28822_28867 = state_28818__$1;
(statearr_28822_28867[(2)] = null);

(statearr_28822_28867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (24))){
var inst_28797 = (state_28818[(7)]);
var inst_28806 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28797);
var state_28818__$1 = state_28818;
var statearr_28823_28868 = state_28818__$1;
(statearr_28823_28868[(2)] = inst_28806);

(statearr_28823_28868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (4))){
var inst_28749 = (state_28818[(8)]);
var inst_28749__$1 = (state_28818[(2)]);
var inst_28750 = (inst_28749__$1 == null);
var state_28818__$1 = (function (){var statearr_28824 = state_28818;
(statearr_28824[(8)] = inst_28749__$1);

return statearr_28824;
})();
if(cljs.core.truth_(inst_28750)){
var statearr_28825_28869 = state_28818__$1;
(statearr_28825_28869[(1)] = (5));

} else {
var statearr_28826_28870 = state_28818__$1;
(statearr_28826_28870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (15))){
var inst_28791 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28827_28871 = state_28818__$1;
(statearr_28827_28871[(2)] = inst_28791);

(statearr_28827_28871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (21))){
var inst_28811 = (state_28818[(2)]);
var state_28818__$1 = (function (){var statearr_28828 = state_28818;
(statearr_28828[(9)] = inst_28811);

return statearr_28828;
})();
var statearr_28829_28872 = state_28818__$1;
(statearr_28829_28872[(2)] = null);

(statearr_28829_28872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (13))){
var inst_28773 = (state_28818[(10)]);
var inst_28775 = cljs.core.chunked_seq_QMARK_.call(null,inst_28773);
var state_28818__$1 = state_28818;
if(inst_28775){
var statearr_28830_28873 = state_28818__$1;
(statearr_28830_28873[(1)] = (16));

} else {
var statearr_28831_28874 = state_28818__$1;
(statearr_28831_28874[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (22))){
var inst_28803 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
if(cljs.core.truth_(inst_28803)){
var statearr_28832_28875 = state_28818__$1;
(statearr_28832_28875[(1)] = (23));

} else {
var statearr_28833_28876 = state_28818__$1;
(statearr_28833_28876[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (6))){
var inst_28799 = (state_28818[(11)]);
var inst_28797 = (state_28818[(7)]);
var inst_28749 = (state_28818[(8)]);
var inst_28797__$1 = topic_fn.call(null,inst_28749);
var inst_28798 = cljs.core.deref.call(null,mults);
var inst_28799__$1 = cljs.core.get.call(null,inst_28798,inst_28797__$1);
var state_28818__$1 = (function (){var statearr_28834 = state_28818;
(statearr_28834[(11)] = inst_28799__$1);

(statearr_28834[(7)] = inst_28797__$1);

return statearr_28834;
})();
if(cljs.core.truth_(inst_28799__$1)){
var statearr_28835_28877 = state_28818__$1;
(statearr_28835_28877[(1)] = (19));

} else {
var statearr_28836_28878 = state_28818__$1;
(statearr_28836_28878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (25))){
var inst_28808 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28837_28879 = state_28818__$1;
(statearr_28837_28879[(2)] = inst_28808);

(statearr_28837_28879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (17))){
var inst_28773 = (state_28818[(10)]);
var inst_28782 = cljs.core.first.call(null,inst_28773);
var inst_28783 = cljs.core.async.muxch_STAR_.call(null,inst_28782);
var inst_28784 = cljs.core.async.close_BANG_.call(null,inst_28783);
var inst_28785 = cljs.core.next.call(null,inst_28773);
var inst_28759 = inst_28785;
var inst_28760 = null;
var inst_28761 = (0);
var inst_28762 = (0);
var state_28818__$1 = (function (){var statearr_28838 = state_28818;
(statearr_28838[(12)] = inst_28762);

(statearr_28838[(13)] = inst_28759);

(statearr_28838[(14)] = inst_28784);

(statearr_28838[(15)] = inst_28761);

(statearr_28838[(16)] = inst_28760);

return statearr_28838;
})();
var statearr_28839_28880 = state_28818__$1;
(statearr_28839_28880[(2)] = null);

(statearr_28839_28880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (3))){
var inst_28816 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28818__$1,inst_28816);
} else {
if((state_val_28819 === (12))){
var inst_28793 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28840_28881 = state_28818__$1;
(statearr_28840_28881[(2)] = inst_28793);

(statearr_28840_28881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (2))){
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(4),ch);
} else {
if((state_val_28819 === (23))){
var state_28818__$1 = state_28818;
var statearr_28841_28882 = state_28818__$1;
(statearr_28841_28882[(2)] = null);

(statearr_28841_28882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (19))){
var inst_28799 = (state_28818[(11)]);
var inst_28749 = (state_28818[(8)]);
var inst_28801 = cljs.core.async.muxch_STAR_.call(null,inst_28799);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28818__$1,(22),inst_28801,inst_28749);
} else {
if((state_val_28819 === (11))){
var inst_28773 = (state_28818[(10)]);
var inst_28759 = (state_28818[(13)]);
var inst_28773__$1 = cljs.core.seq.call(null,inst_28759);
var state_28818__$1 = (function (){var statearr_28842 = state_28818;
(statearr_28842[(10)] = inst_28773__$1);

return statearr_28842;
})();
if(inst_28773__$1){
var statearr_28843_28883 = state_28818__$1;
(statearr_28843_28883[(1)] = (13));

} else {
var statearr_28844_28884 = state_28818__$1;
(statearr_28844_28884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (9))){
var inst_28795 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28845_28885 = state_28818__$1;
(statearr_28845_28885[(2)] = inst_28795);

(statearr_28845_28885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (5))){
var inst_28756 = cljs.core.deref.call(null,mults);
var inst_28757 = cljs.core.vals.call(null,inst_28756);
var inst_28758 = cljs.core.seq.call(null,inst_28757);
var inst_28759 = inst_28758;
var inst_28760 = null;
var inst_28761 = (0);
var inst_28762 = (0);
var state_28818__$1 = (function (){var statearr_28846 = state_28818;
(statearr_28846[(12)] = inst_28762);

(statearr_28846[(13)] = inst_28759);

(statearr_28846[(15)] = inst_28761);

(statearr_28846[(16)] = inst_28760);

return statearr_28846;
})();
var statearr_28847_28886 = state_28818__$1;
(statearr_28847_28886[(2)] = null);

(statearr_28847_28886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (14))){
var state_28818__$1 = state_28818;
var statearr_28851_28887 = state_28818__$1;
(statearr_28851_28887[(2)] = null);

(statearr_28851_28887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (16))){
var inst_28773 = (state_28818[(10)]);
var inst_28777 = cljs.core.chunk_first.call(null,inst_28773);
var inst_28778 = cljs.core.chunk_rest.call(null,inst_28773);
var inst_28779 = cljs.core.count.call(null,inst_28777);
var inst_28759 = inst_28778;
var inst_28760 = inst_28777;
var inst_28761 = inst_28779;
var inst_28762 = (0);
var state_28818__$1 = (function (){var statearr_28852 = state_28818;
(statearr_28852[(12)] = inst_28762);

(statearr_28852[(13)] = inst_28759);

(statearr_28852[(15)] = inst_28761);

(statearr_28852[(16)] = inst_28760);

return statearr_28852;
})();
var statearr_28853_28888 = state_28818__$1;
(statearr_28853_28888[(2)] = null);

(statearr_28853_28888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (10))){
var inst_28762 = (state_28818[(12)]);
var inst_28759 = (state_28818[(13)]);
var inst_28761 = (state_28818[(15)]);
var inst_28760 = (state_28818[(16)]);
var inst_28767 = cljs.core._nth.call(null,inst_28760,inst_28762);
var inst_28768 = cljs.core.async.muxch_STAR_.call(null,inst_28767);
var inst_28769 = cljs.core.async.close_BANG_.call(null,inst_28768);
var inst_28770 = (inst_28762 + (1));
var tmp28848 = inst_28759;
var tmp28849 = inst_28761;
var tmp28850 = inst_28760;
var inst_28759__$1 = tmp28848;
var inst_28760__$1 = tmp28850;
var inst_28761__$1 = tmp28849;
var inst_28762__$1 = inst_28770;
var state_28818__$1 = (function (){var statearr_28854 = state_28818;
(statearr_28854[(12)] = inst_28762__$1);

(statearr_28854[(13)] = inst_28759__$1);

(statearr_28854[(17)] = inst_28769);

(statearr_28854[(15)] = inst_28761__$1);

(statearr_28854[(16)] = inst_28760__$1);

return statearr_28854;
})();
var statearr_28855_28889 = state_28818__$1;
(statearr_28855_28889[(2)] = null);

(statearr_28855_28889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (18))){
var inst_28788 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28856_28890 = state_28818__$1;
(statearr_28856_28890[(2)] = inst_28788);

(statearr_28856_28890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (8))){
var inst_28762 = (state_28818[(12)]);
var inst_28761 = (state_28818[(15)]);
var inst_28764 = (inst_28762 < inst_28761);
var inst_28765 = inst_28764;
var state_28818__$1 = state_28818;
if(cljs.core.truth_(inst_28765)){
var statearr_28857_28891 = state_28818__$1;
(statearr_28857_28891[(1)] = (10));

} else {
var statearr_28858_28892 = state_28818__$1;
(statearr_28858_28892[(1)] = (11));

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
});})(c__27630__auto___28864,mults,ensure_mult,p))
;
return ((function (switch__27540__auto__,c__27630__auto___28864,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_28859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28859[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_28859[(1)] = (1));

return statearr_28859;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_28818){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_28818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e28860){if((e28860 instanceof Object)){
var ex__27544__auto__ = e28860;
var statearr_28861_28893 = state_28818;
(statearr_28861_28893[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28894 = state_28818;
state_28818 = G__28894;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_28818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_28818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___28864,mults,ensure_mult,p))
})();
var state__27632__auto__ = (function (){var statearr_28862 = f__27631__auto__.call(null);
(statearr_28862[(6)] = c__27630__auto___28864);

return statearr_28862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___28864,mults,ensure_mult,p))
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
var G__28896 = arguments.length;
switch (G__28896) {
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
var G__28899 = arguments.length;
switch (G__28899) {
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
var G__28902 = arguments.length;
switch (G__28902) {
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
var c__27630__auto___28969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___28969,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___28969,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28941){
var state_val_28942 = (state_28941[(1)]);
if((state_val_28942 === (7))){
var state_28941__$1 = state_28941;
var statearr_28943_28970 = state_28941__$1;
(statearr_28943_28970[(2)] = null);

(statearr_28943_28970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (1))){
var state_28941__$1 = state_28941;
var statearr_28944_28971 = state_28941__$1;
(statearr_28944_28971[(2)] = null);

(statearr_28944_28971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (4))){
var inst_28905 = (state_28941[(7)]);
var inst_28907 = (inst_28905 < cnt);
var state_28941__$1 = state_28941;
if(cljs.core.truth_(inst_28907)){
var statearr_28945_28972 = state_28941__$1;
(statearr_28945_28972[(1)] = (6));

} else {
var statearr_28946_28973 = state_28941__$1;
(statearr_28946_28973[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (15))){
var inst_28937 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28947_28974 = state_28941__$1;
(statearr_28947_28974[(2)] = inst_28937);

(statearr_28947_28974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (13))){
var inst_28930 = cljs.core.async.close_BANG_.call(null,out);
var state_28941__$1 = state_28941;
var statearr_28948_28975 = state_28941__$1;
(statearr_28948_28975[(2)] = inst_28930);

(statearr_28948_28975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (6))){
var state_28941__$1 = state_28941;
var statearr_28949_28976 = state_28941__$1;
(statearr_28949_28976[(2)] = null);

(statearr_28949_28976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (3))){
var inst_28939 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28941__$1,inst_28939);
} else {
if((state_val_28942 === (12))){
var inst_28927 = (state_28941[(8)]);
var inst_28927__$1 = (state_28941[(2)]);
var inst_28928 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28927__$1);
var state_28941__$1 = (function (){var statearr_28950 = state_28941;
(statearr_28950[(8)] = inst_28927__$1);

return statearr_28950;
})();
if(cljs.core.truth_(inst_28928)){
var statearr_28951_28977 = state_28941__$1;
(statearr_28951_28977[(1)] = (13));

} else {
var statearr_28952_28978 = state_28941__$1;
(statearr_28952_28978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (2))){
var inst_28904 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28905 = (0);
var state_28941__$1 = (function (){var statearr_28953 = state_28941;
(statearr_28953[(9)] = inst_28904);

(statearr_28953[(7)] = inst_28905);

return statearr_28953;
})();
var statearr_28954_28979 = state_28941__$1;
(statearr_28954_28979[(2)] = null);

(statearr_28954_28979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (11))){
var inst_28905 = (state_28941[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28941,(10),Object,null,(9));
var inst_28914 = chs__$1.call(null,inst_28905);
var inst_28915 = done.call(null,inst_28905);
var inst_28916 = cljs.core.async.take_BANG_.call(null,inst_28914,inst_28915);
var state_28941__$1 = state_28941;
var statearr_28955_28980 = state_28941__$1;
(statearr_28955_28980[(2)] = inst_28916);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28941__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (9))){
var inst_28905 = (state_28941[(7)]);
var inst_28918 = (state_28941[(2)]);
var inst_28919 = (inst_28905 + (1));
var inst_28905__$1 = inst_28919;
var state_28941__$1 = (function (){var statearr_28956 = state_28941;
(statearr_28956[(7)] = inst_28905__$1);

(statearr_28956[(10)] = inst_28918);

return statearr_28956;
})();
var statearr_28957_28981 = state_28941__$1;
(statearr_28957_28981[(2)] = null);

(statearr_28957_28981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (5))){
var inst_28925 = (state_28941[(2)]);
var state_28941__$1 = (function (){var statearr_28958 = state_28941;
(statearr_28958[(11)] = inst_28925);

return statearr_28958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28941__$1,(12),dchan);
} else {
if((state_val_28942 === (14))){
var inst_28927 = (state_28941[(8)]);
var inst_28932 = cljs.core.apply.call(null,f,inst_28927);
var state_28941__$1 = state_28941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28941__$1,(16),out,inst_28932);
} else {
if((state_val_28942 === (16))){
var inst_28934 = (state_28941[(2)]);
var state_28941__$1 = (function (){var statearr_28959 = state_28941;
(statearr_28959[(12)] = inst_28934);

return statearr_28959;
})();
var statearr_28960_28982 = state_28941__$1;
(statearr_28960_28982[(2)] = null);

(statearr_28960_28982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (10))){
var inst_28909 = (state_28941[(2)]);
var inst_28910 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28941__$1 = (function (){var statearr_28961 = state_28941;
(statearr_28961[(13)] = inst_28909);

return statearr_28961;
})();
var statearr_28962_28983 = state_28941__$1;
(statearr_28962_28983[(2)] = inst_28910);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28941__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (8))){
var inst_28923 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28963_28984 = state_28941__$1;
(statearr_28963_28984[(2)] = inst_28923);

(statearr_28963_28984[(1)] = (5));


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
});})(c__27630__auto___28969,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27540__auto__,c__27630__auto___28969,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_28964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28964[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_28964[(1)] = (1));

return statearr_28964;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_28941){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_28941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e28965){if((e28965 instanceof Object)){
var ex__27544__auto__ = e28965;
var statearr_28966_28985 = state_28941;
(statearr_28966_28985[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28986 = state_28941;
state_28941 = G__28986;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_28941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_28941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___28969,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27632__auto__ = (function (){var statearr_28967 = f__27631__auto__.call(null);
(statearr_28967[(6)] = c__27630__auto___28969);

return statearr_28967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___28969,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28989 = arguments.length;
switch (G__28989) {
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
var c__27630__auto___29043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___29043,out){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___29043,out){
return (function (state_29021){
var state_val_29022 = (state_29021[(1)]);
if((state_val_29022 === (7))){
var inst_29000 = (state_29021[(7)]);
var inst_29001 = (state_29021[(8)]);
var inst_29000__$1 = (state_29021[(2)]);
var inst_29001__$1 = cljs.core.nth.call(null,inst_29000__$1,(0),null);
var inst_29002 = cljs.core.nth.call(null,inst_29000__$1,(1),null);
var inst_29003 = (inst_29001__$1 == null);
var state_29021__$1 = (function (){var statearr_29023 = state_29021;
(statearr_29023[(7)] = inst_29000__$1);

(statearr_29023[(8)] = inst_29001__$1);

(statearr_29023[(9)] = inst_29002);

return statearr_29023;
})();
if(cljs.core.truth_(inst_29003)){
var statearr_29024_29044 = state_29021__$1;
(statearr_29024_29044[(1)] = (8));

} else {
var statearr_29025_29045 = state_29021__$1;
(statearr_29025_29045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (1))){
var inst_28990 = cljs.core.vec.call(null,chs);
var inst_28991 = inst_28990;
var state_29021__$1 = (function (){var statearr_29026 = state_29021;
(statearr_29026[(10)] = inst_28991);

return statearr_29026;
})();
var statearr_29027_29046 = state_29021__$1;
(statearr_29027_29046[(2)] = null);

(statearr_29027_29046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (4))){
var inst_28991 = (state_29021[(10)]);
var state_29021__$1 = state_29021;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29021__$1,(7),inst_28991);
} else {
if((state_val_29022 === (6))){
var inst_29017 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
var statearr_29028_29047 = state_29021__$1;
(statearr_29028_29047[(2)] = inst_29017);

(statearr_29028_29047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (3))){
var inst_29019 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29021__$1,inst_29019);
} else {
if((state_val_29022 === (2))){
var inst_28991 = (state_29021[(10)]);
var inst_28993 = cljs.core.count.call(null,inst_28991);
var inst_28994 = (inst_28993 > (0));
var state_29021__$1 = state_29021;
if(cljs.core.truth_(inst_28994)){
var statearr_29030_29048 = state_29021__$1;
(statearr_29030_29048[(1)] = (4));

} else {
var statearr_29031_29049 = state_29021__$1;
(statearr_29031_29049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (11))){
var inst_28991 = (state_29021[(10)]);
var inst_29010 = (state_29021[(2)]);
var tmp29029 = inst_28991;
var inst_28991__$1 = tmp29029;
var state_29021__$1 = (function (){var statearr_29032 = state_29021;
(statearr_29032[(10)] = inst_28991__$1);

(statearr_29032[(11)] = inst_29010);

return statearr_29032;
})();
var statearr_29033_29050 = state_29021__$1;
(statearr_29033_29050[(2)] = null);

(statearr_29033_29050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (9))){
var inst_29001 = (state_29021[(8)]);
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29021__$1,(11),out,inst_29001);
} else {
if((state_val_29022 === (5))){
var inst_29015 = cljs.core.async.close_BANG_.call(null,out);
var state_29021__$1 = state_29021;
var statearr_29034_29051 = state_29021__$1;
(statearr_29034_29051[(2)] = inst_29015);

(statearr_29034_29051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (10))){
var inst_29013 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
var statearr_29035_29052 = state_29021__$1;
(statearr_29035_29052[(2)] = inst_29013);

(statearr_29035_29052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29022 === (8))){
var inst_29000 = (state_29021[(7)]);
var inst_29001 = (state_29021[(8)]);
var inst_28991 = (state_29021[(10)]);
var inst_29002 = (state_29021[(9)]);
var inst_29005 = (function (){var cs = inst_28991;
var vec__28996 = inst_29000;
var v = inst_29001;
var c = inst_29002;
return ((function (cs,vec__28996,v,c,inst_29000,inst_29001,inst_28991,inst_29002,state_val_29022,c__27630__auto___29043,out){
return (function (p1__28987_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28987_SHARP_);
});
;})(cs,vec__28996,v,c,inst_29000,inst_29001,inst_28991,inst_29002,state_val_29022,c__27630__auto___29043,out))
})();
var inst_29006 = cljs.core.filterv.call(null,inst_29005,inst_28991);
var inst_28991__$1 = inst_29006;
var state_29021__$1 = (function (){var statearr_29036 = state_29021;
(statearr_29036[(10)] = inst_28991__$1);

return statearr_29036;
})();
var statearr_29037_29053 = state_29021__$1;
(statearr_29037_29053[(2)] = null);

(statearr_29037_29053[(1)] = (2));


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
});})(c__27630__auto___29043,out))
;
return ((function (switch__27540__auto__,c__27630__auto___29043,out){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_29038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29038[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_29038[(1)] = (1));

return statearr_29038;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_29021){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_29021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e29039){if((e29039 instanceof Object)){
var ex__27544__auto__ = e29039;
var statearr_29040_29054 = state_29021;
(statearr_29040_29054[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29055 = state_29021;
state_29021 = G__29055;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_29021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_29021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___29043,out))
})();
var state__27632__auto__ = (function (){var statearr_29041 = f__27631__auto__.call(null);
(statearr_29041[(6)] = c__27630__auto___29043);

return statearr_29041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___29043,out))
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
var G__29057 = arguments.length;
switch (G__29057) {
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
var c__27630__auto___29102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___29102,out){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___29102,out){
return (function (state_29081){
var state_val_29082 = (state_29081[(1)]);
if((state_val_29082 === (7))){
var inst_29063 = (state_29081[(7)]);
var inst_29063__$1 = (state_29081[(2)]);
var inst_29064 = (inst_29063__$1 == null);
var inst_29065 = cljs.core.not.call(null,inst_29064);
var state_29081__$1 = (function (){var statearr_29083 = state_29081;
(statearr_29083[(7)] = inst_29063__$1);

return statearr_29083;
})();
if(inst_29065){
var statearr_29084_29103 = state_29081__$1;
(statearr_29084_29103[(1)] = (8));

} else {
var statearr_29085_29104 = state_29081__$1;
(statearr_29085_29104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (1))){
var inst_29058 = (0);
var state_29081__$1 = (function (){var statearr_29086 = state_29081;
(statearr_29086[(8)] = inst_29058);

return statearr_29086;
})();
var statearr_29087_29105 = state_29081__$1;
(statearr_29087_29105[(2)] = null);

(statearr_29087_29105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (4))){
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29081__$1,(7),ch);
} else {
if((state_val_29082 === (6))){
var inst_29076 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29088_29106 = state_29081__$1;
(statearr_29088_29106[(2)] = inst_29076);

(statearr_29088_29106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (3))){
var inst_29078 = (state_29081[(2)]);
var inst_29079 = cljs.core.async.close_BANG_.call(null,out);
var state_29081__$1 = (function (){var statearr_29089 = state_29081;
(statearr_29089[(9)] = inst_29078);

return statearr_29089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29081__$1,inst_29079);
} else {
if((state_val_29082 === (2))){
var inst_29058 = (state_29081[(8)]);
var inst_29060 = (inst_29058 < n);
var state_29081__$1 = state_29081;
if(cljs.core.truth_(inst_29060)){
var statearr_29090_29107 = state_29081__$1;
(statearr_29090_29107[(1)] = (4));

} else {
var statearr_29091_29108 = state_29081__$1;
(statearr_29091_29108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (11))){
var inst_29058 = (state_29081[(8)]);
var inst_29068 = (state_29081[(2)]);
var inst_29069 = (inst_29058 + (1));
var inst_29058__$1 = inst_29069;
var state_29081__$1 = (function (){var statearr_29092 = state_29081;
(statearr_29092[(10)] = inst_29068);

(statearr_29092[(8)] = inst_29058__$1);

return statearr_29092;
})();
var statearr_29093_29109 = state_29081__$1;
(statearr_29093_29109[(2)] = null);

(statearr_29093_29109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (9))){
var state_29081__$1 = state_29081;
var statearr_29094_29110 = state_29081__$1;
(statearr_29094_29110[(2)] = null);

(statearr_29094_29110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (5))){
var state_29081__$1 = state_29081;
var statearr_29095_29111 = state_29081__$1;
(statearr_29095_29111[(2)] = null);

(statearr_29095_29111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (10))){
var inst_29073 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29096_29112 = state_29081__$1;
(statearr_29096_29112[(2)] = inst_29073);

(statearr_29096_29112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (8))){
var inst_29063 = (state_29081[(7)]);
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29081__$1,(11),out,inst_29063);
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
});})(c__27630__auto___29102,out))
;
return ((function (switch__27540__auto__,c__27630__auto___29102,out){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_29097 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29097[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_29097[(1)] = (1));

return statearr_29097;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_29081){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_29081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e29098){if((e29098 instanceof Object)){
var ex__27544__auto__ = e29098;
var statearr_29099_29113 = state_29081;
(statearr_29099_29113[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29114 = state_29081;
state_29081 = G__29114;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_29081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_29081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___29102,out))
})();
var state__27632__auto__ = (function (){var statearr_29100 = f__27631__auto__.call(null);
(statearr_29100[(6)] = c__27630__auto___29102);

return statearr_29100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___29102,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29116 = (function (f,ch,meta29117){
this.f = f;
this.ch = ch;
this.meta29117 = meta29117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29118,meta29117__$1){
var self__ = this;
var _29118__$1 = this;
return (new cljs.core.async.t_cljs$core$async29116(self__.f,self__.ch,meta29117__$1));
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29118){
var self__ = this;
var _29118__$1 = this;
return self__.meta29117;
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29119 = (function (f,ch,meta29117,_,fn1,meta29120){
this.f = f;
this.ch = ch;
this.meta29117 = meta29117;
this._ = _;
this.fn1 = fn1;
this.meta29120 = meta29120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29121,meta29120__$1){
var self__ = this;
var _29121__$1 = this;
return (new cljs.core.async.t_cljs$core$async29119(self__.f,self__.ch,self__.meta29117,self__._,self__.fn1,meta29120__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29121){
var self__ = this;
var _29121__$1 = this;
return self__.meta29120;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29115_SHARP_){
return f1.call(null,(((p1__29115_SHARP_ == null))?null:self__.f.call(null,p1__29115_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29119.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29117","meta29117",-1265947973,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29116","cljs.core.async/t_cljs$core$async29116",-330478840,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29120","meta29120",2073436530,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29119";

cljs.core.async.t_cljs$core$async29119.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29119");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29119.
 */
cljs.core.async.__GT_t_cljs$core$async29119 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29119(f__$1,ch__$1,meta29117__$1,___$2,fn1__$1,meta29120){
return (new cljs.core.async.t_cljs$core$async29119(f__$1,ch__$1,meta29117__$1,___$2,fn1__$1,meta29120));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29119(self__.f,self__.ch,self__.meta29117,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29117","meta29117",-1265947973,null)], null);
});

cljs.core.async.t_cljs$core$async29116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29116";

cljs.core.async.t_cljs$core$async29116.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29116");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29116.
 */
cljs.core.async.__GT_t_cljs$core$async29116 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29116(f__$1,ch__$1,meta29117){
return (new cljs.core.async.t_cljs$core$async29116(f__$1,ch__$1,meta29117));
});

}

return (new cljs.core.async.t_cljs$core$async29116(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29122 = (function (f,ch,meta29123){
this.f = f;
this.ch = ch;
this.meta29123 = meta29123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29124,meta29123__$1){
var self__ = this;
var _29124__$1 = this;
return (new cljs.core.async.t_cljs$core$async29122(self__.f,self__.ch,meta29123__$1));
});

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29124){
var self__ = this;
var _29124__$1 = this;
return self__.meta29123;
});

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29123","meta29123",601616204,null)], null);
});

cljs.core.async.t_cljs$core$async29122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29122";

cljs.core.async.t_cljs$core$async29122.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29122");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29122.
 */
cljs.core.async.__GT_t_cljs$core$async29122 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29122(f__$1,ch__$1,meta29123){
return (new cljs.core.async.t_cljs$core$async29122(f__$1,ch__$1,meta29123));
});

}

return (new cljs.core.async.t_cljs$core$async29122(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29125 = (function (p,ch,meta29126){
this.p = p;
this.ch = ch;
this.meta29126 = meta29126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29127,meta29126__$1){
var self__ = this;
var _29127__$1 = this;
return (new cljs.core.async.t_cljs$core$async29125(self__.p,self__.ch,meta29126__$1));
});

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29127){
var self__ = this;
var _29127__$1 = this;
return self__.meta29126;
});

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29126","meta29126",-750481742,null)], null);
});

cljs.core.async.t_cljs$core$async29125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29125";

cljs.core.async.t_cljs$core$async29125.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29125");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29125.
 */
cljs.core.async.__GT_t_cljs$core$async29125 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29125(p__$1,ch__$1,meta29126){
return (new cljs.core.async.t_cljs$core$async29125(p__$1,ch__$1,meta29126));
});

}

return (new cljs.core.async.t_cljs$core$async29125(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29129 = arguments.length;
switch (G__29129) {
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
var c__27630__auto___29169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___29169,out){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___29169,out){
return (function (state_29150){
var state_val_29151 = (state_29150[(1)]);
if((state_val_29151 === (7))){
var inst_29146 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29152_29170 = state_29150__$1;
(statearr_29152_29170[(2)] = inst_29146);

(statearr_29152_29170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (1))){
var state_29150__$1 = state_29150;
var statearr_29153_29171 = state_29150__$1;
(statearr_29153_29171[(2)] = null);

(statearr_29153_29171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (4))){
var inst_29132 = (state_29150[(7)]);
var inst_29132__$1 = (state_29150[(2)]);
var inst_29133 = (inst_29132__$1 == null);
var state_29150__$1 = (function (){var statearr_29154 = state_29150;
(statearr_29154[(7)] = inst_29132__$1);

return statearr_29154;
})();
if(cljs.core.truth_(inst_29133)){
var statearr_29155_29172 = state_29150__$1;
(statearr_29155_29172[(1)] = (5));

} else {
var statearr_29156_29173 = state_29150__$1;
(statearr_29156_29173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (6))){
var inst_29132 = (state_29150[(7)]);
var inst_29137 = p.call(null,inst_29132);
var state_29150__$1 = state_29150;
if(cljs.core.truth_(inst_29137)){
var statearr_29157_29174 = state_29150__$1;
(statearr_29157_29174[(1)] = (8));

} else {
var statearr_29158_29175 = state_29150__$1;
(statearr_29158_29175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (3))){
var inst_29148 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29150__$1,inst_29148);
} else {
if((state_val_29151 === (2))){
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29150__$1,(4),ch);
} else {
if((state_val_29151 === (11))){
var inst_29140 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29159_29176 = state_29150__$1;
(statearr_29159_29176[(2)] = inst_29140);

(statearr_29159_29176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (9))){
var state_29150__$1 = state_29150;
var statearr_29160_29177 = state_29150__$1;
(statearr_29160_29177[(2)] = null);

(statearr_29160_29177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (5))){
var inst_29135 = cljs.core.async.close_BANG_.call(null,out);
var state_29150__$1 = state_29150;
var statearr_29161_29178 = state_29150__$1;
(statearr_29161_29178[(2)] = inst_29135);

(statearr_29161_29178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (10))){
var inst_29143 = (state_29150[(2)]);
var state_29150__$1 = (function (){var statearr_29162 = state_29150;
(statearr_29162[(8)] = inst_29143);

return statearr_29162;
})();
var statearr_29163_29179 = state_29150__$1;
(statearr_29163_29179[(2)] = null);

(statearr_29163_29179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (8))){
var inst_29132 = (state_29150[(7)]);
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29150__$1,(11),out,inst_29132);
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
});})(c__27630__auto___29169,out))
;
return ((function (switch__27540__auto__,c__27630__auto___29169,out){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_29164 = [null,null,null,null,null,null,null,null,null];
(statearr_29164[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_29164[(1)] = (1));

return statearr_29164;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_29150){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_29150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e29165){if((e29165 instanceof Object)){
var ex__27544__auto__ = e29165;
var statearr_29166_29180 = state_29150;
(statearr_29166_29180[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29181 = state_29150;
state_29150 = G__29181;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_29150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_29150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___29169,out))
})();
var state__27632__auto__ = (function (){var statearr_29167 = f__27631__auto__.call(null);
(statearr_29167[(6)] = c__27630__auto___29169);

return statearr_29167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___29169,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29183 = arguments.length;
switch (G__29183) {
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
var c__27630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto__){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto__){
return (function (state_29246){
var state_val_29247 = (state_29246[(1)]);
if((state_val_29247 === (7))){
var inst_29242 = (state_29246[(2)]);
var state_29246__$1 = state_29246;
var statearr_29248_29286 = state_29246__$1;
(statearr_29248_29286[(2)] = inst_29242);

(statearr_29248_29286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (20))){
var inst_29212 = (state_29246[(7)]);
var inst_29223 = (state_29246[(2)]);
var inst_29224 = cljs.core.next.call(null,inst_29212);
var inst_29198 = inst_29224;
var inst_29199 = null;
var inst_29200 = (0);
var inst_29201 = (0);
var state_29246__$1 = (function (){var statearr_29249 = state_29246;
(statearr_29249[(8)] = inst_29223);

(statearr_29249[(9)] = inst_29201);

(statearr_29249[(10)] = inst_29200);

(statearr_29249[(11)] = inst_29199);

(statearr_29249[(12)] = inst_29198);

return statearr_29249;
})();
var statearr_29250_29287 = state_29246__$1;
(statearr_29250_29287[(2)] = null);

(statearr_29250_29287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (1))){
var state_29246__$1 = state_29246;
var statearr_29251_29288 = state_29246__$1;
(statearr_29251_29288[(2)] = null);

(statearr_29251_29288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (4))){
var inst_29187 = (state_29246[(13)]);
var inst_29187__$1 = (state_29246[(2)]);
var inst_29188 = (inst_29187__$1 == null);
var state_29246__$1 = (function (){var statearr_29252 = state_29246;
(statearr_29252[(13)] = inst_29187__$1);

return statearr_29252;
})();
if(cljs.core.truth_(inst_29188)){
var statearr_29253_29289 = state_29246__$1;
(statearr_29253_29289[(1)] = (5));

} else {
var statearr_29254_29290 = state_29246__$1;
(statearr_29254_29290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (15))){
var state_29246__$1 = state_29246;
var statearr_29258_29291 = state_29246__$1;
(statearr_29258_29291[(2)] = null);

(statearr_29258_29291[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (21))){
var state_29246__$1 = state_29246;
var statearr_29259_29292 = state_29246__$1;
(statearr_29259_29292[(2)] = null);

(statearr_29259_29292[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (13))){
var inst_29201 = (state_29246[(9)]);
var inst_29200 = (state_29246[(10)]);
var inst_29199 = (state_29246[(11)]);
var inst_29198 = (state_29246[(12)]);
var inst_29208 = (state_29246[(2)]);
var inst_29209 = (inst_29201 + (1));
var tmp29255 = inst_29200;
var tmp29256 = inst_29199;
var tmp29257 = inst_29198;
var inst_29198__$1 = tmp29257;
var inst_29199__$1 = tmp29256;
var inst_29200__$1 = tmp29255;
var inst_29201__$1 = inst_29209;
var state_29246__$1 = (function (){var statearr_29260 = state_29246;
(statearr_29260[(9)] = inst_29201__$1);

(statearr_29260[(10)] = inst_29200__$1);

(statearr_29260[(11)] = inst_29199__$1);

(statearr_29260[(14)] = inst_29208);

(statearr_29260[(12)] = inst_29198__$1);

return statearr_29260;
})();
var statearr_29261_29293 = state_29246__$1;
(statearr_29261_29293[(2)] = null);

(statearr_29261_29293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (22))){
var state_29246__$1 = state_29246;
var statearr_29262_29294 = state_29246__$1;
(statearr_29262_29294[(2)] = null);

(statearr_29262_29294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (6))){
var inst_29187 = (state_29246[(13)]);
var inst_29196 = f.call(null,inst_29187);
var inst_29197 = cljs.core.seq.call(null,inst_29196);
var inst_29198 = inst_29197;
var inst_29199 = null;
var inst_29200 = (0);
var inst_29201 = (0);
var state_29246__$1 = (function (){var statearr_29263 = state_29246;
(statearr_29263[(9)] = inst_29201);

(statearr_29263[(10)] = inst_29200);

(statearr_29263[(11)] = inst_29199);

(statearr_29263[(12)] = inst_29198);

return statearr_29263;
})();
var statearr_29264_29295 = state_29246__$1;
(statearr_29264_29295[(2)] = null);

(statearr_29264_29295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (17))){
var inst_29212 = (state_29246[(7)]);
var inst_29216 = cljs.core.chunk_first.call(null,inst_29212);
var inst_29217 = cljs.core.chunk_rest.call(null,inst_29212);
var inst_29218 = cljs.core.count.call(null,inst_29216);
var inst_29198 = inst_29217;
var inst_29199 = inst_29216;
var inst_29200 = inst_29218;
var inst_29201 = (0);
var state_29246__$1 = (function (){var statearr_29265 = state_29246;
(statearr_29265[(9)] = inst_29201);

(statearr_29265[(10)] = inst_29200);

(statearr_29265[(11)] = inst_29199);

(statearr_29265[(12)] = inst_29198);

return statearr_29265;
})();
var statearr_29266_29296 = state_29246__$1;
(statearr_29266_29296[(2)] = null);

(statearr_29266_29296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (3))){
var inst_29244 = (state_29246[(2)]);
var state_29246__$1 = state_29246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29246__$1,inst_29244);
} else {
if((state_val_29247 === (12))){
var inst_29232 = (state_29246[(2)]);
var state_29246__$1 = state_29246;
var statearr_29267_29297 = state_29246__$1;
(statearr_29267_29297[(2)] = inst_29232);

(statearr_29267_29297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (2))){
var state_29246__$1 = state_29246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29246__$1,(4),in$);
} else {
if((state_val_29247 === (23))){
var inst_29240 = (state_29246[(2)]);
var state_29246__$1 = state_29246;
var statearr_29268_29298 = state_29246__$1;
(statearr_29268_29298[(2)] = inst_29240);

(statearr_29268_29298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (19))){
var inst_29227 = (state_29246[(2)]);
var state_29246__$1 = state_29246;
var statearr_29269_29299 = state_29246__$1;
(statearr_29269_29299[(2)] = inst_29227);

(statearr_29269_29299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (11))){
var inst_29212 = (state_29246[(7)]);
var inst_29198 = (state_29246[(12)]);
var inst_29212__$1 = cljs.core.seq.call(null,inst_29198);
var state_29246__$1 = (function (){var statearr_29270 = state_29246;
(statearr_29270[(7)] = inst_29212__$1);

return statearr_29270;
})();
if(inst_29212__$1){
var statearr_29271_29300 = state_29246__$1;
(statearr_29271_29300[(1)] = (14));

} else {
var statearr_29272_29301 = state_29246__$1;
(statearr_29272_29301[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (9))){
var inst_29234 = (state_29246[(2)]);
var inst_29235 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29246__$1 = (function (){var statearr_29273 = state_29246;
(statearr_29273[(15)] = inst_29234);

return statearr_29273;
})();
if(cljs.core.truth_(inst_29235)){
var statearr_29274_29302 = state_29246__$1;
(statearr_29274_29302[(1)] = (21));

} else {
var statearr_29275_29303 = state_29246__$1;
(statearr_29275_29303[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (5))){
var inst_29190 = cljs.core.async.close_BANG_.call(null,out);
var state_29246__$1 = state_29246;
var statearr_29276_29304 = state_29246__$1;
(statearr_29276_29304[(2)] = inst_29190);

(statearr_29276_29304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (14))){
var inst_29212 = (state_29246[(7)]);
var inst_29214 = cljs.core.chunked_seq_QMARK_.call(null,inst_29212);
var state_29246__$1 = state_29246;
if(inst_29214){
var statearr_29277_29305 = state_29246__$1;
(statearr_29277_29305[(1)] = (17));

} else {
var statearr_29278_29306 = state_29246__$1;
(statearr_29278_29306[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (16))){
var inst_29230 = (state_29246[(2)]);
var state_29246__$1 = state_29246;
var statearr_29279_29307 = state_29246__$1;
(statearr_29279_29307[(2)] = inst_29230);

(statearr_29279_29307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (10))){
var inst_29201 = (state_29246[(9)]);
var inst_29199 = (state_29246[(11)]);
var inst_29206 = cljs.core._nth.call(null,inst_29199,inst_29201);
var state_29246__$1 = state_29246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29246__$1,(13),out,inst_29206);
} else {
if((state_val_29247 === (18))){
var inst_29212 = (state_29246[(7)]);
var inst_29221 = cljs.core.first.call(null,inst_29212);
var state_29246__$1 = state_29246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29246__$1,(20),out,inst_29221);
} else {
if((state_val_29247 === (8))){
var inst_29201 = (state_29246[(9)]);
var inst_29200 = (state_29246[(10)]);
var inst_29203 = (inst_29201 < inst_29200);
var inst_29204 = inst_29203;
var state_29246__$1 = state_29246;
if(cljs.core.truth_(inst_29204)){
var statearr_29280_29308 = state_29246__$1;
(statearr_29280_29308[(1)] = (10));

} else {
var statearr_29281_29309 = state_29246__$1;
(statearr_29281_29309[(1)] = (11));

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
});})(c__27630__auto__))
;
return ((function (switch__27540__auto__,c__27630__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27541__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27541__auto____0 = (function (){
var statearr_29282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29282[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27541__auto__);

(statearr_29282[(1)] = (1));

return statearr_29282;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27541__auto____1 = (function (state_29246){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_29246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e29283){if((e29283 instanceof Object)){
var ex__27544__auto__ = e29283;
var statearr_29284_29310 = state_29246;
(statearr_29284_29310[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29311 = state_29246;
state_29246 = G__29311;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27541__auto__ = function(state_29246){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27541__auto____1.call(this,state_29246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27541__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27541__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto__))
})();
var state__27632__auto__ = (function (){var statearr_29285 = f__27631__auto__.call(null);
(statearr_29285[(6)] = c__27630__auto__);

return statearr_29285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto__))
);

return c__27630__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29313 = arguments.length;
switch (G__29313) {
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
var G__29316 = arguments.length;
switch (G__29316) {
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
var G__29319 = arguments.length;
switch (G__29319) {
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
var c__27630__auto___29366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___29366,out){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___29366,out){
return (function (state_29343){
var state_val_29344 = (state_29343[(1)]);
if((state_val_29344 === (7))){
var inst_29338 = (state_29343[(2)]);
var state_29343__$1 = state_29343;
var statearr_29345_29367 = state_29343__$1;
(statearr_29345_29367[(2)] = inst_29338);

(statearr_29345_29367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (1))){
var inst_29320 = null;
var state_29343__$1 = (function (){var statearr_29346 = state_29343;
(statearr_29346[(7)] = inst_29320);

return statearr_29346;
})();
var statearr_29347_29368 = state_29343__$1;
(statearr_29347_29368[(2)] = null);

(statearr_29347_29368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (4))){
var inst_29323 = (state_29343[(8)]);
var inst_29323__$1 = (state_29343[(2)]);
var inst_29324 = (inst_29323__$1 == null);
var inst_29325 = cljs.core.not.call(null,inst_29324);
var state_29343__$1 = (function (){var statearr_29348 = state_29343;
(statearr_29348[(8)] = inst_29323__$1);

return statearr_29348;
})();
if(inst_29325){
var statearr_29349_29369 = state_29343__$1;
(statearr_29349_29369[(1)] = (5));

} else {
var statearr_29350_29370 = state_29343__$1;
(statearr_29350_29370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (6))){
var state_29343__$1 = state_29343;
var statearr_29351_29371 = state_29343__$1;
(statearr_29351_29371[(2)] = null);

(statearr_29351_29371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (3))){
var inst_29340 = (state_29343[(2)]);
var inst_29341 = cljs.core.async.close_BANG_.call(null,out);
var state_29343__$1 = (function (){var statearr_29352 = state_29343;
(statearr_29352[(9)] = inst_29340);

return statearr_29352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29343__$1,inst_29341);
} else {
if((state_val_29344 === (2))){
var state_29343__$1 = state_29343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29343__$1,(4),ch);
} else {
if((state_val_29344 === (11))){
var inst_29323 = (state_29343[(8)]);
var inst_29332 = (state_29343[(2)]);
var inst_29320 = inst_29323;
var state_29343__$1 = (function (){var statearr_29353 = state_29343;
(statearr_29353[(10)] = inst_29332);

(statearr_29353[(7)] = inst_29320);

return statearr_29353;
})();
var statearr_29354_29372 = state_29343__$1;
(statearr_29354_29372[(2)] = null);

(statearr_29354_29372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (9))){
var inst_29323 = (state_29343[(8)]);
var state_29343__$1 = state_29343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29343__$1,(11),out,inst_29323);
} else {
if((state_val_29344 === (5))){
var inst_29320 = (state_29343[(7)]);
var inst_29323 = (state_29343[(8)]);
var inst_29327 = cljs.core._EQ_.call(null,inst_29323,inst_29320);
var state_29343__$1 = state_29343;
if(inst_29327){
var statearr_29356_29373 = state_29343__$1;
(statearr_29356_29373[(1)] = (8));

} else {
var statearr_29357_29374 = state_29343__$1;
(statearr_29357_29374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (10))){
var inst_29335 = (state_29343[(2)]);
var state_29343__$1 = state_29343;
var statearr_29358_29375 = state_29343__$1;
(statearr_29358_29375[(2)] = inst_29335);

(statearr_29358_29375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (8))){
var inst_29320 = (state_29343[(7)]);
var tmp29355 = inst_29320;
var inst_29320__$1 = tmp29355;
var state_29343__$1 = (function (){var statearr_29359 = state_29343;
(statearr_29359[(7)] = inst_29320__$1);

return statearr_29359;
})();
var statearr_29360_29376 = state_29343__$1;
(statearr_29360_29376[(2)] = null);

(statearr_29360_29376[(1)] = (2));


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
});})(c__27630__auto___29366,out))
;
return ((function (switch__27540__auto__,c__27630__auto___29366,out){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_29361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29361[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_29361[(1)] = (1));

return statearr_29361;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_29343){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_29343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e29362){if((e29362 instanceof Object)){
var ex__27544__auto__ = e29362;
var statearr_29363_29377 = state_29343;
(statearr_29363_29377[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29378 = state_29343;
state_29343 = G__29378;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_29343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_29343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___29366,out))
})();
var state__27632__auto__ = (function (){var statearr_29364 = f__27631__auto__.call(null);
(statearr_29364[(6)] = c__27630__auto___29366);

return statearr_29364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___29366,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29380 = arguments.length;
switch (G__29380) {
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
var c__27630__auto___29446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___29446,out){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___29446,out){
return (function (state_29418){
var state_val_29419 = (state_29418[(1)]);
if((state_val_29419 === (7))){
var inst_29414 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29420_29447 = state_29418__$1;
(statearr_29420_29447[(2)] = inst_29414);

(statearr_29420_29447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (1))){
var inst_29381 = (new Array(n));
var inst_29382 = inst_29381;
var inst_29383 = (0);
var state_29418__$1 = (function (){var statearr_29421 = state_29418;
(statearr_29421[(7)] = inst_29383);

(statearr_29421[(8)] = inst_29382);

return statearr_29421;
})();
var statearr_29422_29448 = state_29418__$1;
(statearr_29422_29448[(2)] = null);

(statearr_29422_29448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (4))){
var inst_29386 = (state_29418[(9)]);
var inst_29386__$1 = (state_29418[(2)]);
var inst_29387 = (inst_29386__$1 == null);
var inst_29388 = cljs.core.not.call(null,inst_29387);
var state_29418__$1 = (function (){var statearr_29423 = state_29418;
(statearr_29423[(9)] = inst_29386__$1);

return statearr_29423;
})();
if(inst_29388){
var statearr_29424_29449 = state_29418__$1;
(statearr_29424_29449[(1)] = (5));

} else {
var statearr_29425_29450 = state_29418__$1;
(statearr_29425_29450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (15))){
var inst_29408 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29426_29451 = state_29418__$1;
(statearr_29426_29451[(2)] = inst_29408);

(statearr_29426_29451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (13))){
var state_29418__$1 = state_29418;
var statearr_29427_29452 = state_29418__$1;
(statearr_29427_29452[(2)] = null);

(statearr_29427_29452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (6))){
var inst_29383 = (state_29418[(7)]);
var inst_29404 = (inst_29383 > (0));
var state_29418__$1 = state_29418;
if(cljs.core.truth_(inst_29404)){
var statearr_29428_29453 = state_29418__$1;
(statearr_29428_29453[(1)] = (12));

} else {
var statearr_29429_29454 = state_29418__$1;
(statearr_29429_29454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (3))){
var inst_29416 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29418__$1,inst_29416);
} else {
if((state_val_29419 === (12))){
var inst_29382 = (state_29418[(8)]);
var inst_29406 = cljs.core.vec.call(null,inst_29382);
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29418__$1,(15),out,inst_29406);
} else {
if((state_val_29419 === (2))){
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29418__$1,(4),ch);
} else {
if((state_val_29419 === (11))){
var inst_29398 = (state_29418[(2)]);
var inst_29399 = (new Array(n));
var inst_29382 = inst_29399;
var inst_29383 = (0);
var state_29418__$1 = (function (){var statearr_29430 = state_29418;
(statearr_29430[(7)] = inst_29383);

(statearr_29430[(10)] = inst_29398);

(statearr_29430[(8)] = inst_29382);

return statearr_29430;
})();
var statearr_29431_29455 = state_29418__$1;
(statearr_29431_29455[(2)] = null);

(statearr_29431_29455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (9))){
var inst_29382 = (state_29418[(8)]);
var inst_29396 = cljs.core.vec.call(null,inst_29382);
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29418__$1,(11),out,inst_29396);
} else {
if((state_val_29419 === (5))){
var inst_29383 = (state_29418[(7)]);
var inst_29391 = (state_29418[(11)]);
var inst_29386 = (state_29418[(9)]);
var inst_29382 = (state_29418[(8)]);
var inst_29390 = (inst_29382[inst_29383] = inst_29386);
var inst_29391__$1 = (inst_29383 + (1));
var inst_29392 = (inst_29391__$1 < n);
var state_29418__$1 = (function (){var statearr_29432 = state_29418;
(statearr_29432[(11)] = inst_29391__$1);

(statearr_29432[(12)] = inst_29390);

return statearr_29432;
})();
if(cljs.core.truth_(inst_29392)){
var statearr_29433_29456 = state_29418__$1;
(statearr_29433_29456[(1)] = (8));

} else {
var statearr_29434_29457 = state_29418__$1;
(statearr_29434_29457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (14))){
var inst_29411 = (state_29418[(2)]);
var inst_29412 = cljs.core.async.close_BANG_.call(null,out);
var state_29418__$1 = (function (){var statearr_29436 = state_29418;
(statearr_29436[(13)] = inst_29411);

return statearr_29436;
})();
var statearr_29437_29458 = state_29418__$1;
(statearr_29437_29458[(2)] = inst_29412);

(statearr_29437_29458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (10))){
var inst_29402 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29438_29459 = state_29418__$1;
(statearr_29438_29459[(2)] = inst_29402);

(statearr_29438_29459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (8))){
var inst_29391 = (state_29418[(11)]);
var inst_29382 = (state_29418[(8)]);
var tmp29435 = inst_29382;
var inst_29382__$1 = tmp29435;
var inst_29383 = inst_29391;
var state_29418__$1 = (function (){var statearr_29439 = state_29418;
(statearr_29439[(7)] = inst_29383);

(statearr_29439[(8)] = inst_29382__$1);

return statearr_29439;
})();
var statearr_29440_29460 = state_29418__$1;
(statearr_29440_29460[(2)] = null);

(statearr_29440_29460[(1)] = (2));


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
});})(c__27630__auto___29446,out))
;
return ((function (switch__27540__auto__,c__27630__auto___29446,out){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_29441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29441[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_29441[(1)] = (1));

return statearr_29441;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_29418){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_29418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e29442){if((e29442 instanceof Object)){
var ex__27544__auto__ = e29442;
var statearr_29443_29461 = state_29418;
(statearr_29443_29461[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29462 = state_29418;
state_29418 = G__29462;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_29418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_29418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___29446,out))
})();
var state__27632__auto__ = (function (){var statearr_29444 = f__27631__auto__.call(null);
(statearr_29444[(6)] = c__27630__auto___29446);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___29446,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29464 = arguments.length;
switch (G__29464) {
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
var c__27630__auto___29534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27630__auto___29534,out){
return (function (){
var f__27631__auto__ = (function (){var switch__27540__auto__ = ((function (c__27630__auto___29534,out){
return (function (state_29506){
var state_val_29507 = (state_29506[(1)]);
if((state_val_29507 === (7))){
var inst_29502 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
var statearr_29508_29535 = state_29506__$1;
(statearr_29508_29535[(2)] = inst_29502);

(statearr_29508_29535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (1))){
var inst_29465 = [];
var inst_29466 = inst_29465;
var inst_29467 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29506__$1 = (function (){var statearr_29509 = state_29506;
(statearr_29509[(7)] = inst_29467);

(statearr_29509[(8)] = inst_29466);

return statearr_29509;
})();
var statearr_29510_29536 = state_29506__$1;
(statearr_29510_29536[(2)] = null);

(statearr_29510_29536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (4))){
var inst_29470 = (state_29506[(9)]);
var inst_29470__$1 = (state_29506[(2)]);
var inst_29471 = (inst_29470__$1 == null);
var inst_29472 = cljs.core.not.call(null,inst_29471);
var state_29506__$1 = (function (){var statearr_29511 = state_29506;
(statearr_29511[(9)] = inst_29470__$1);

return statearr_29511;
})();
if(inst_29472){
var statearr_29512_29537 = state_29506__$1;
(statearr_29512_29537[(1)] = (5));

} else {
var statearr_29513_29538 = state_29506__$1;
(statearr_29513_29538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (15))){
var inst_29496 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
var statearr_29514_29539 = state_29506__$1;
(statearr_29514_29539[(2)] = inst_29496);

(statearr_29514_29539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (13))){
var state_29506__$1 = state_29506;
var statearr_29515_29540 = state_29506__$1;
(statearr_29515_29540[(2)] = null);

(statearr_29515_29540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (6))){
var inst_29466 = (state_29506[(8)]);
var inst_29491 = inst_29466.length;
var inst_29492 = (inst_29491 > (0));
var state_29506__$1 = state_29506;
if(cljs.core.truth_(inst_29492)){
var statearr_29516_29541 = state_29506__$1;
(statearr_29516_29541[(1)] = (12));

} else {
var statearr_29517_29542 = state_29506__$1;
(statearr_29517_29542[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (3))){
var inst_29504 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29506__$1,inst_29504);
} else {
if((state_val_29507 === (12))){
var inst_29466 = (state_29506[(8)]);
var inst_29494 = cljs.core.vec.call(null,inst_29466);
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29506__$1,(15),out,inst_29494);
} else {
if((state_val_29507 === (2))){
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29506__$1,(4),ch);
} else {
if((state_val_29507 === (11))){
var inst_29474 = (state_29506[(10)]);
var inst_29470 = (state_29506[(9)]);
var inst_29484 = (state_29506[(2)]);
var inst_29485 = [];
var inst_29486 = inst_29485.push(inst_29470);
var inst_29466 = inst_29485;
var inst_29467 = inst_29474;
var state_29506__$1 = (function (){var statearr_29518 = state_29506;
(statearr_29518[(11)] = inst_29486);

(statearr_29518[(12)] = inst_29484);

(statearr_29518[(7)] = inst_29467);

(statearr_29518[(8)] = inst_29466);

return statearr_29518;
})();
var statearr_29519_29543 = state_29506__$1;
(statearr_29519_29543[(2)] = null);

(statearr_29519_29543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (9))){
var inst_29466 = (state_29506[(8)]);
var inst_29482 = cljs.core.vec.call(null,inst_29466);
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29506__$1,(11),out,inst_29482);
} else {
if((state_val_29507 === (5))){
var inst_29467 = (state_29506[(7)]);
var inst_29474 = (state_29506[(10)]);
var inst_29470 = (state_29506[(9)]);
var inst_29474__$1 = f.call(null,inst_29470);
var inst_29475 = cljs.core._EQ_.call(null,inst_29474__$1,inst_29467);
var inst_29476 = cljs.core.keyword_identical_QMARK_.call(null,inst_29467,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29477 = ((inst_29475) || (inst_29476));
var state_29506__$1 = (function (){var statearr_29520 = state_29506;
(statearr_29520[(10)] = inst_29474__$1);

return statearr_29520;
})();
if(cljs.core.truth_(inst_29477)){
var statearr_29521_29544 = state_29506__$1;
(statearr_29521_29544[(1)] = (8));

} else {
var statearr_29522_29545 = state_29506__$1;
(statearr_29522_29545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (14))){
var inst_29499 = (state_29506[(2)]);
var inst_29500 = cljs.core.async.close_BANG_.call(null,out);
var state_29506__$1 = (function (){var statearr_29524 = state_29506;
(statearr_29524[(13)] = inst_29499);

return statearr_29524;
})();
var statearr_29525_29546 = state_29506__$1;
(statearr_29525_29546[(2)] = inst_29500);

(statearr_29525_29546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (10))){
var inst_29489 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
var statearr_29526_29547 = state_29506__$1;
(statearr_29526_29547[(2)] = inst_29489);

(statearr_29526_29547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (8))){
var inst_29474 = (state_29506[(10)]);
var inst_29470 = (state_29506[(9)]);
var inst_29466 = (state_29506[(8)]);
var inst_29479 = inst_29466.push(inst_29470);
var tmp29523 = inst_29466;
var inst_29466__$1 = tmp29523;
var inst_29467 = inst_29474;
var state_29506__$1 = (function (){var statearr_29527 = state_29506;
(statearr_29527[(14)] = inst_29479);

(statearr_29527[(7)] = inst_29467);

(statearr_29527[(8)] = inst_29466__$1);

return statearr_29527;
})();
var statearr_29528_29548 = state_29506__$1;
(statearr_29528_29548[(2)] = null);

(statearr_29528_29548[(1)] = (2));


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
});})(c__27630__auto___29534,out))
;
return ((function (switch__27540__auto__,c__27630__auto___29534,out){
return (function() {
var cljs$core$async$state_machine__27541__auto__ = null;
var cljs$core$async$state_machine__27541__auto____0 = (function (){
var statearr_29529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29529[(0)] = cljs$core$async$state_machine__27541__auto__);

(statearr_29529[(1)] = (1));

return statearr_29529;
});
var cljs$core$async$state_machine__27541__auto____1 = (function (state_29506){
while(true){
var ret_value__27542__auto__ = (function (){try{while(true){
var result__27543__auto__ = switch__27540__auto__.call(null,state_29506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27543__auto__;
}
break;
}
}catch (e29530){if((e29530 instanceof Object)){
var ex__27544__auto__ = e29530;
var statearr_29531_29549 = state_29506;
(statearr_29531_29549[(5)] = ex__27544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29550 = state_29506;
state_29506 = G__29550;
continue;
} else {
return ret_value__27542__auto__;
}
break;
}
});
cljs$core$async$state_machine__27541__auto__ = function(state_29506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27541__auto____1.call(this,state_29506);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27541__auto____0;
cljs$core$async$state_machine__27541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27541__auto____1;
return cljs$core$async$state_machine__27541__auto__;
})()
;})(switch__27540__auto__,c__27630__auto___29534,out))
})();
var state__27632__auto__ = (function (){var statearr_29532 = f__27631__auto__.call(null);
(statearr_29532[(6)] = c__27630__auto___29534);

return statearr_29532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27632__auto__);
});})(c__27630__auto___29534,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1582304850596
