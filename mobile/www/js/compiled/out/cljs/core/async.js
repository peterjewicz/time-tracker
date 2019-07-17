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
var G__27663 = arguments.length;
switch (G__27663) {
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
if(typeof cljs.core.async.t_cljs$core$async27664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27664 = (function (f,blockable,meta27665){
this.f = f;
this.blockable = blockable;
this.meta27665 = meta27665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27666,meta27665__$1){
var self__ = this;
var _27666__$1 = this;
return (new cljs.core.async.t_cljs$core$async27664(self__.f,self__.blockable,meta27665__$1));
});

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27666){
var self__ = this;
var _27666__$1 = this;
return self__.meta27665;
});

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27665","meta27665",-381192,null)], null);
});

cljs.core.async.t_cljs$core$async27664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27664";

cljs.core.async.t_cljs$core$async27664.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27664");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27664.
 */
cljs.core.async.__GT_t_cljs$core$async27664 = (function cljs$core$async$__GT_t_cljs$core$async27664(f__$1,blockable__$1,meta27665){
return (new cljs.core.async.t_cljs$core$async27664(f__$1,blockable__$1,meta27665));
});

}

return (new cljs.core.async.t_cljs$core$async27664(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27670 = arguments.length;
switch (G__27670) {
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
var G__27673 = arguments.length;
switch (G__27673) {
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
var G__27676 = arguments.length;
switch (G__27676) {
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
var val_27678 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27678);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27678,ret){
return (function (){
return fn1.call(null,val_27678);
});})(val_27678,ret))
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
var G__27680 = arguments.length;
switch (G__27680) {
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
var n__4376__auto___27682 = n;
var x_27683 = (0);
while(true){
if((x_27683 < n__4376__auto___27682)){
(a[x_27683] = (0));

var G__27684 = (x_27683 + (1));
x_27683 = G__27684;
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

var G__27685 = (i + (1));
i = G__27685;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27686 = (function (flag,meta27687){
this.flag = flag;
this.meta27687 = meta27687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27688,meta27687__$1){
var self__ = this;
var _27688__$1 = this;
return (new cljs.core.async.t_cljs$core$async27686(self__.flag,meta27687__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27688){
var self__ = this;
var _27688__$1 = this;
return self__.meta27687;
});})(flag))
;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27686.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27687","meta27687",2127124493,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27686";

cljs.core.async.t_cljs$core$async27686.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27686");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27686.
 */
cljs.core.async.__GT_t_cljs$core$async27686 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27686(flag__$1,meta27687){
return (new cljs.core.async.t_cljs$core$async27686(flag__$1,meta27687));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27686(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27689 = (function (flag,cb,meta27690){
this.flag = flag;
this.cb = cb;
this.meta27690 = meta27690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27691,meta27690__$1){
var self__ = this;
var _27691__$1 = this;
return (new cljs.core.async.t_cljs$core$async27689(self__.flag,self__.cb,meta27690__$1));
});

cljs.core.async.t_cljs$core$async27689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27691){
var self__ = this;
var _27691__$1 = this;
return self__.meta27690;
});

cljs.core.async.t_cljs$core$async27689.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27690","meta27690",-482891141,null)], null);
});

cljs.core.async.t_cljs$core$async27689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27689";

cljs.core.async.t_cljs$core$async27689.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27689");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27689.
 */
cljs.core.async.__GT_t_cljs$core$async27689 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27689(flag__$1,cb__$1,meta27690){
return (new cljs.core.async.t_cljs$core$async27689(flag__$1,cb__$1,meta27690));
});

}

return (new cljs.core.async.t_cljs$core$async27689(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27692_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27692_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27693_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27693_SHARP_,port], null));
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
var G__27694 = (i + (1));
i = G__27694;
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
var len__4499__auto___27700 = arguments.length;
var i__4500__auto___27701 = (0);
while(true){
if((i__4500__auto___27701 < len__4499__auto___27700)){
args__4502__auto__.push((arguments[i__4500__auto___27701]));

var G__27702 = (i__4500__auto___27701 + (1));
i__4500__auto___27701 = G__27702;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27697){
var map__27698 = p__27697;
var map__27698__$1 = ((((!((map__27698 == null)))?(((((map__27698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27698):map__27698);
var opts = map__27698__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27695){
var G__27696 = cljs.core.first.call(null,seq27695);
var seq27695__$1 = cljs.core.next.call(null,seq27695);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27696,seq27695__$1);
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
var G__27704 = arguments.length;
switch (G__27704) {
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
var c__27603__auto___27750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___27750){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___27750){
return (function (state_27728){
var state_val_27729 = (state_27728[(1)]);
if((state_val_27729 === (7))){
var inst_27724 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27730_27751 = state_27728__$1;
(statearr_27730_27751[(2)] = inst_27724);

(statearr_27730_27751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (1))){
var state_27728__$1 = state_27728;
var statearr_27731_27752 = state_27728__$1;
(statearr_27731_27752[(2)] = null);

(statearr_27731_27752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (4))){
var inst_27707 = (state_27728[(7)]);
var inst_27707__$1 = (state_27728[(2)]);
var inst_27708 = (inst_27707__$1 == null);
var state_27728__$1 = (function (){var statearr_27732 = state_27728;
(statearr_27732[(7)] = inst_27707__$1);

return statearr_27732;
})();
if(cljs.core.truth_(inst_27708)){
var statearr_27733_27753 = state_27728__$1;
(statearr_27733_27753[(1)] = (5));

} else {
var statearr_27734_27754 = state_27728__$1;
(statearr_27734_27754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (13))){
var state_27728__$1 = state_27728;
var statearr_27735_27755 = state_27728__$1;
(statearr_27735_27755[(2)] = null);

(statearr_27735_27755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (6))){
var inst_27707 = (state_27728[(7)]);
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27728__$1,(11),to,inst_27707);
} else {
if((state_val_27729 === (3))){
var inst_27726 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27728__$1,inst_27726);
} else {
if((state_val_27729 === (12))){
var state_27728__$1 = state_27728;
var statearr_27736_27756 = state_27728__$1;
(statearr_27736_27756[(2)] = null);

(statearr_27736_27756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (2))){
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27728__$1,(4),from);
} else {
if((state_val_27729 === (11))){
var inst_27717 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
if(cljs.core.truth_(inst_27717)){
var statearr_27737_27757 = state_27728__$1;
(statearr_27737_27757[(1)] = (12));

} else {
var statearr_27738_27758 = state_27728__$1;
(statearr_27738_27758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (9))){
var state_27728__$1 = state_27728;
var statearr_27739_27759 = state_27728__$1;
(statearr_27739_27759[(2)] = null);

(statearr_27739_27759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (5))){
var state_27728__$1 = state_27728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27740_27760 = state_27728__$1;
(statearr_27740_27760[(1)] = (8));

} else {
var statearr_27741_27761 = state_27728__$1;
(statearr_27741_27761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (14))){
var inst_27722 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27742_27762 = state_27728__$1;
(statearr_27742_27762[(2)] = inst_27722);

(statearr_27742_27762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (10))){
var inst_27714 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27743_27763 = state_27728__$1;
(statearr_27743_27763[(2)] = inst_27714);

(statearr_27743_27763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (8))){
var inst_27711 = cljs.core.async.close_BANG_.call(null,to);
var state_27728__$1 = state_27728;
var statearr_27744_27764 = state_27728__$1;
(statearr_27744_27764[(2)] = inst_27711);

(statearr_27744_27764[(1)] = (10));


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
});})(c__27603__auto___27750))
;
return ((function (switch__27513__auto__,c__27603__auto___27750){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_27745 = [null,null,null,null,null,null,null,null];
(statearr_27745[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_27745[(1)] = (1));

return statearr_27745;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_27728){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_27728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e27746){if((e27746 instanceof Object)){
var ex__27517__auto__ = e27746;
var statearr_27747_27765 = state_27728;
(statearr_27747_27765[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27766 = state_27728;
state_27728 = G__27766;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_27728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_27728);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___27750))
})();
var state__27605__auto__ = (function (){var statearr_27748 = f__27604__auto__.call(null);
(statearr_27748[(6)] = c__27603__auto___27750);

return statearr_27748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___27750))
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
return (function (p__27767){
var vec__27768 = p__27767;
var v = cljs.core.nth.call(null,vec__27768,(0),null);
var p = cljs.core.nth.call(null,vec__27768,(1),null);
var job = vec__27768;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27603__auto___27939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___27939,res,vec__27768,v,p,job,jobs,results){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___27939,res,vec__27768,v,p,job,jobs,results){
return (function (state_27775){
var state_val_27776 = (state_27775[(1)]);
if((state_val_27776 === (1))){
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27775__$1,(2),res,v);
} else {
if((state_val_27776 === (2))){
var inst_27772 = (state_27775[(2)]);
var inst_27773 = cljs.core.async.close_BANG_.call(null,res);
var state_27775__$1 = (function (){var statearr_27777 = state_27775;
(statearr_27777[(7)] = inst_27772);

return statearr_27777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27775__$1,inst_27773);
} else {
return null;
}
}
});})(c__27603__auto___27939,res,vec__27768,v,p,job,jobs,results))
;
return ((function (switch__27513__auto__,c__27603__auto___27939,res,vec__27768,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0 = (function (){
var statearr_27778 = [null,null,null,null,null,null,null,null];
(statearr_27778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__);

(statearr_27778[(1)] = (1));

return statearr_27778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1 = (function (state_27775){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_27775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e27779){if((e27779 instanceof Object)){
var ex__27517__auto__ = e27779;
var statearr_27780_27940 = state_27775;
(statearr_27780_27940[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27941 = state_27775;
state_27775 = G__27941;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__ = function(state_27775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1.call(this,state_27775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___27939,res,vec__27768,v,p,job,jobs,results))
})();
var state__27605__auto__ = (function (){var statearr_27781 = f__27604__auto__.call(null);
(statearr_27781[(6)] = c__27603__auto___27939);

return statearr_27781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___27939,res,vec__27768,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27782){
var vec__27783 = p__27782;
var v = cljs.core.nth.call(null,vec__27783,(0),null);
var p = cljs.core.nth.call(null,vec__27783,(1),null);
var job = vec__27783;
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
var n__4376__auto___27942 = n;
var __27943 = (0);
while(true){
if((__27943 < n__4376__auto___27942)){
var G__27786_27944 = type;
var G__27786_27945__$1 = (((G__27786_27944 instanceof cljs.core.Keyword))?G__27786_27944.fqn:null);
switch (G__27786_27945__$1) {
case "compute":
var c__27603__auto___27947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27943,c__27603__auto___27947,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (__27943,c__27603__auto___27947,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async){
return (function (state_27799){
var state_val_27800 = (state_27799[(1)]);
if((state_val_27800 === (1))){
var state_27799__$1 = state_27799;
var statearr_27801_27948 = state_27799__$1;
(statearr_27801_27948[(2)] = null);

(statearr_27801_27948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (2))){
var state_27799__$1 = state_27799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27799__$1,(4),jobs);
} else {
if((state_val_27800 === (3))){
var inst_27797 = (state_27799[(2)]);
var state_27799__$1 = state_27799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27799__$1,inst_27797);
} else {
if((state_val_27800 === (4))){
var inst_27789 = (state_27799[(2)]);
var inst_27790 = process.call(null,inst_27789);
var state_27799__$1 = state_27799;
if(cljs.core.truth_(inst_27790)){
var statearr_27802_27949 = state_27799__$1;
(statearr_27802_27949[(1)] = (5));

} else {
var statearr_27803_27950 = state_27799__$1;
(statearr_27803_27950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (5))){
var state_27799__$1 = state_27799;
var statearr_27804_27951 = state_27799__$1;
(statearr_27804_27951[(2)] = null);

(statearr_27804_27951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (6))){
var state_27799__$1 = state_27799;
var statearr_27805_27952 = state_27799__$1;
(statearr_27805_27952[(2)] = null);

(statearr_27805_27952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (7))){
var inst_27795 = (state_27799[(2)]);
var state_27799__$1 = state_27799;
var statearr_27806_27953 = state_27799__$1;
(statearr_27806_27953[(2)] = inst_27795);

(statearr_27806_27953[(1)] = (3));


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
});})(__27943,c__27603__auto___27947,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async))
;
return ((function (__27943,switch__27513__auto__,c__27603__auto___27947,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0 = (function (){
var statearr_27807 = [null,null,null,null,null,null,null];
(statearr_27807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__);

(statearr_27807[(1)] = (1));

return statearr_27807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1 = (function (state_27799){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_27799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e27808){if((e27808 instanceof Object)){
var ex__27517__auto__ = e27808;
var statearr_27809_27954 = state_27799;
(statearr_27809_27954[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27955 = state_27799;
state_27799 = G__27955;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__ = function(state_27799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1.call(this,state_27799);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__;
})()
;})(__27943,switch__27513__auto__,c__27603__auto___27947,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async))
})();
var state__27605__auto__ = (function (){var statearr_27810 = f__27604__auto__.call(null);
(statearr_27810[(6)] = c__27603__auto___27947);

return statearr_27810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(__27943,c__27603__auto___27947,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async))
);


break;
case "async":
var c__27603__auto___27956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27943,c__27603__auto___27956,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (__27943,c__27603__auto___27956,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async){
return (function (state_27823){
var state_val_27824 = (state_27823[(1)]);
if((state_val_27824 === (1))){
var state_27823__$1 = state_27823;
var statearr_27825_27957 = state_27823__$1;
(statearr_27825_27957[(2)] = null);

(statearr_27825_27957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (2))){
var state_27823__$1 = state_27823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27823__$1,(4),jobs);
} else {
if((state_val_27824 === (3))){
var inst_27821 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27823__$1,inst_27821);
} else {
if((state_val_27824 === (4))){
var inst_27813 = (state_27823[(2)]);
var inst_27814 = async.call(null,inst_27813);
var state_27823__$1 = state_27823;
if(cljs.core.truth_(inst_27814)){
var statearr_27826_27958 = state_27823__$1;
(statearr_27826_27958[(1)] = (5));

} else {
var statearr_27827_27959 = state_27823__$1;
(statearr_27827_27959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (5))){
var state_27823__$1 = state_27823;
var statearr_27828_27960 = state_27823__$1;
(statearr_27828_27960[(2)] = null);

(statearr_27828_27960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (6))){
var state_27823__$1 = state_27823;
var statearr_27829_27961 = state_27823__$1;
(statearr_27829_27961[(2)] = null);

(statearr_27829_27961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (7))){
var inst_27819 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
var statearr_27830_27962 = state_27823__$1;
(statearr_27830_27962[(2)] = inst_27819);

(statearr_27830_27962[(1)] = (3));


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
});})(__27943,c__27603__auto___27956,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async))
;
return ((function (__27943,switch__27513__auto__,c__27603__auto___27956,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0 = (function (){
var statearr_27831 = [null,null,null,null,null,null,null];
(statearr_27831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__);

(statearr_27831[(1)] = (1));

return statearr_27831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1 = (function (state_27823){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_27823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e27832){if((e27832 instanceof Object)){
var ex__27517__auto__ = e27832;
var statearr_27833_27963 = state_27823;
(statearr_27833_27963[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27964 = state_27823;
state_27823 = G__27964;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__ = function(state_27823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1.call(this,state_27823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__;
})()
;})(__27943,switch__27513__auto__,c__27603__auto___27956,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async))
})();
var state__27605__auto__ = (function (){var statearr_27834 = f__27604__auto__.call(null);
(statearr_27834[(6)] = c__27603__auto___27956);

return statearr_27834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(__27943,c__27603__auto___27956,G__27786_27944,G__27786_27945__$1,n__4376__auto___27942,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27786_27945__$1)].join('')));

}

var G__27965 = (__27943 + (1));
__27943 = G__27965;
continue;
} else {
}
break;
}

var c__27603__auto___27966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___27966,jobs,results,process,async){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___27966,jobs,results,process,async){
return (function (state_27856){
var state_val_27857 = (state_27856[(1)]);
if((state_val_27857 === (1))){
var state_27856__$1 = state_27856;
var statearr_27858_27967 = state_27856__$1;
(statearr_27858_27967[(2)] = null);

(statearr_27858_27967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (2))){
var state_27856__$1 = state_27856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27856__$1,(4),from);
} else {
if((state_val_27857 === (3))){
var inst_27854 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27856__$1,inst_27854);
} else {
if((state_val_27857 === (4))){
var inst_27837 = (state_27856[(7)]);
var inst_27837__$1 = (state_27856[(2)]);
var inst_27838 = (inst_27837__$1 == null);
var state_27856__$1 = (function (){var statearr_27859 = state_27856;
(statearr_27859[(7)] = inst_27837__$1);

return statearr_27859;
})();
if(cljs.core.truth_(inst_27838)){
var statearr_27860_27968 = state_27856__$1;
(statearr_27860_27968[(1)] = (5));

} else {
var statearr_27861_27969 = state_27856__$1;
(statearr_27861_27969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (5))){
var inst_27840 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27856__$1 = state_27856;
var statearr_27862_27970 = state_27856__$1;
(statearr_27862_27970[(2)] = inst_27840);

(statearr_27862_27970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (6))){
var inst_27837 = (state_27856[(7)]);
var inst_27842 = (state_27856[(8)]);
var inst_27842__$1 = cljs.core.async.chan.call(null,(1));
var inst_27843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27844 = [inst_27837,inst_27842__$1];
var inst_27845 = (new cljs.core.PersistentVector(null,2,(5),inst_27843,inst_27844,null));
var state_27856__$1 = (function (){var statearr_27863 = state_27856;
(statearr_27863[(8)] = inst_27842__$1);

return statearr_27863;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27856__$1,(8),jobs,inst_27845);
} else {
if((state_val_27857 === (7))){
var inst_27852 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
var statearr_27864_27971 = state_27856__$1;
(statearr_27864_27971[(2)] = inst_27852);

(statearr_27864_27971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (8))){
var inst_27842 = (state_27856[(8)]);
var inst_27847 = (state_27856[(2)]);
var state_27856__$1 = (function (){var statearr_27865 = state_27856;
(statearr_27865[(9)] = inst_27847);

return statearr_27865;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27856__$1,(9),results,inst_27842);
} else {
if((state_val_27857 === (9))){
var inst_27849 = (state_27856[(2)]);
var state_27856__$1 = (function (){var statearr_27866 = state_27856;
(statearr_27866[(10)] = inst_27849);

return statearr_27866;
})();
var statearr_27867_27972 = state_27856__$1;
(statearr_27867_27972[(2)] = null);

(statearr_27867_27972[(1)] = (2));


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
});})(c__27603__auto___27966,jobs,results,process,async))
;
return ((function (switch__27513__auto__,c__27603__auto___27966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0 = (function (){
var statearr_27868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__);

(statearr_27868[(1)] = (1));

return statearr_27868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1 = (function (state_27856){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_27856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e27869){if((e27869 instanceof Object)){
var ex__27517__auto__ = e27869;
var statearr_27870_27973 = state_27856;
(statearr_27870_27973[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27974 = state_27856;
state_27856 = G__27974;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__ = function(state_27856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1.call(this,state_27856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___27966,jobs,results,process,async))
})();
var state__27605__auto__ = (function (){var statearr_27871 = f__27604__auto__.call(null);
(statearr_27871[(6)] = c__27603__auto___27966);

return statearr_27871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___27966,jobs,results,process,async))
);


var c__27603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto__,jobs,results,process,async){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto__,jobs,results,process,async){
return (function (state_27909){
var state_val_27910 = (state_27909[(1)]);
if((state_val_27910 === (7))){
var inst_27905 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
var statearr_27911_27975 = state_27909__$1;
(statearr_27911_27975[(2)] = inst_27905);

(statearr_27911_27975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (20))){
var state_27909__$1 = state_27909;
var statearr_27912_27976 = state_27909__$1;
(statearr_27912_27976[(2)] = null);

(statearr_27912_27976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (1))){
var state_27909__$1 = state_27909;
var statearr_27913_27977 = state_27909__$1;
(statearr_27913_27977[(2)] = null);

(statearr_27913_27977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (4))){
var inst_27874 = (state_27909[(7)]);
var inst_27874__$1 = (state_27909[(2)]);
var inst_27875 = (inst_27874__$1 == null);
var state_27909__$1 = (function (){var statearr_27914 = state_27909;
(statearr_27914[(7)] = inst_27874__$1);

return statearr_27914;
})();
if(cljs.core.truth_(inst_27875)){
var statearr_27915_27978 = state_27909__$1;
(statearr_27915_27978[(1)] = (5));

} else {
var statearr_27916_27979 = state_27909__$1;
(statearr_27916_27979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (15))){
var inst_27887 = (state_27909[(8)]);
var state_27909__$1 = state_27909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27909__$1,(18),to,inst_27887);
} else {
if((state_val_27910 === (21))){
var inst_27900 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
var statearr_27917_27980 = state_27909__$1;
(statearr_27917_27980[(2)] = inst_27900);

(statearr_27917_27980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (13))){
var inst_27902 = (state_27909[(2)]);
var state_27909__$1 = (function (){var statearr_27918 = state_27909;
(statearr_27918[(9)] = inst_27902);

return statearr_27918;
})();
var statearr_27919_27981 = state_27909__$1;
(statearr_27919_27981[(2)] = null);

(statearr_27919_27981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (6))){
var inst_27874 = (state_27909[(7)]);
var state_27909__$1 = state_27909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27909__$1,(11),inst_27874);
} else {
if((state_val_27910 === (17))){
var inst_27895 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
if(cljs.core.truth_(inst_27895)){
var statearr_27920_27982 = state_27909__$1;
(statearr_27920_27982[(1)] = (19));

} else {
var statearr_27921_27983 = state_27909__$1;
(statearr_27921_27983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (3))){
var inst_27907 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27909__$1,inst_27907);
} else {
if((state_val_27910 === (12))){
var inst_27884 = (state_27909[(10)]);
var state_27909__$1 = state_27909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27909__$1,(14),inst_27884);
} else {
if((state_val_27910 === (2))){
var state_27909__$1 = state_27909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27909__$1,(4),results);
} else {
if((state_val_27910 === (19))){
var state_27909__$1 = state_27909;
var statearr_27922_27984 = state_27909__$1;
(statearr_27922_27984[(2)] = null);

(statearr_27922_27984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (11))){
var inst_27884 = (state_27909[(2)]);
var state_27909__$1 = (function (){var statearr_27923 = state_27909;
(statearr_27923[(10)] = inst_27884);

return statearr_27923;
})();
var statearr_27924_27985 = state_27909__$1;
(statearr_27924_27985[(2)] = null);

(statearr_27924_27985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (9))){
var state_27909__$1 = state_27909;
var statearr_27925_27986 = state_27909__$1;
(statearr_27925_27986[(2)] = null);

(statearr_27925_27986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (5))){
var state_27909__$1 = state_27909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27926_27987 = state_27909__$1;
(statearr_27926_27987[(1)] = (8));

} else {
var statearr_27927_27988 = state_27909__$1;
(statearr_27927_27988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (14))){
var inst_27889 = (state_27909[(11)]);
var inst_27887 = (state_27909[(8)]);
var inst_27887__$1 = (state_27909[(2)]);
var inst_27888 = (inst_27887__$1 == null);
var inst_27889__$1 = cljs.core.not.call(null,inst_27888);
var state_27909__$1 = (function (){var statearr_27928 = state_27909;
(statearr_27928[(11)] = inst_27889__$1);

(statearr_27928[(8)] = inst_27887__$1);

return statearr_27928;
})();
if(inst_27889__$1){
var statearr_27929_27989 = state_27909__$1;
(statearr_27929_27989[(1)] = (15));

} else {
var statearr_27930_27990 = state_27909__$1;
(statearr_27930_27990[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (16))){
var inst_27889 = (state_27909[(11)]);
var state_27909__$1 = state_27909;
var statearr_27931_27991 = state_27909__$1;
(statearr_27931_27991[(2)] = inst_27889);

(statearr_27931_27991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (10))){
var inst_27881 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
var statearr_27932_27992 = state_27909__$1;
(statearr_27932_27992[(2)] = inst_27881);

(statearr_27932_27992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (18))){
var inst_27892 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
var statearr_27933_27993 = state_27909__$1;
(statearr_27933_27993[(2)] = inst_27892);

(statearr_27933_27993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (8))){
var inst_27878 = cljs.core.async.close_BANG_.call(null,to);
var state_27909__$1 = state_27909;
var statearr_27934_27994 = state_27909__$1;
(statearr_27934_27994[(2)] = inst_27878);

(statearr_27934_27994[(1)] = (10));


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
});})(c__27603__auto__,jobs,results,process,async))
;
return ((function (switch__27513__auto__,c__27603__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0 = (function (){
var statearr_27935 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__);

(statearr_27935[(1)] = (1));

return statearr_27935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1 = (function (state_27909){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_27909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e27936){if((e27936 instanceof Object)){
var ex__27517__auto__ = e27936;
var statearr_27937_27995 = state_27909;
(statearr_27937_27995[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27996 = state_27909;
state_27909 = G__27996;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__ = function(state_27909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1.call(this,state_27909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto__,jobs,results,process,async))
})();
var state__27605__auto__ = (function (){var statearr_27938 = f__27604__auto__.call(null);
(statearr_27938[(6)] = c__27603__auto__);

return statearr_27938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto__,jobs,results,process,async))
);

return c__27603__auto__;
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
var G__27998 = arguments.length;
switch (G__27998) {
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
var G__28001 = arguments.length;
switch (G__28001) {
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
var G__28004 = arguments.length;
switch (G__28004) {
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
var c__27603__auto___28053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___28053,tc,fc){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___28053,tc,fc){
return (function (state_28030){
var state_val_28031 = (state_28030[(1)]);
if((state_val_28031 === (7))){
var inst_28026 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28032_28054 = state_28030__$1;
(statearr_28032_28054[(2)] = inst_28026);

(statearr_28032_28054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (1))){
var state_28030__$1 = state_28030;
var statearr_28033_28055 = state_28030__$1;
(statearr_28033_28055[(2)] = null);

(statearr_28033_28055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (4))){
var inst_28007 = (state_28030[(7)]);
var inst_28007__$1 = (state_28030[(2)]);
var inst_28008 = (inst_28007__$1 == null);
var state_28030__$1 = (function (){var statearr_28034 = state_28030;
(statearr_28034[(7)] = inst_28007__$1);

return statearr_28034;
})();
if(cljs.core.truth_(inst_28008)){
var statearr_28035_28056 = state_28030__$1;
(statearr_28035_28056[(1)] = (5));

} else {
var statearr_28036_28057 = state_28030__$1;
(statearr_28036_28057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (13))){
var state_28030__$1 = state_28030;
var statearr_28037_28058 = state_28030__$1;
(statearr_28037_28058[(2)] = null);

(statearr_28037_28058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (6))){
var inst_28007 = (state_28030[(7)]);
var inst_28013 = p.call(null,inst_28007);
var state_28030__$1 = state_28030;
if(cljs.core.truth_(inst_28013)){
var statearr_28038_28059 = state_28030__$1;
(statearr_28038_28059[(1)] = (9));

} else {
var statearr_28039_28060 = state_28030__$1;
(statearr_28039_28060[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (3))){
var inst_28028 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28030__$1,inst_28028);
} else {
if((state_val_28031 === (12))){
var state_28030__$1 = state_28030;
var statearr_28040_28061 = state_28030__$1;
(statearr_28040_28061[(2)] = null);

(statearr_28040_28061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (2))){
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28030__$1,(4),ch);
} else {
if((state_val_28031 === (11))){
var inst_28007 = (state_28030[(7)]);
var inst_28017 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28030__$1,(8),inst_28017,inst_28007);
} else {
if((state_val_28031 === (9))){
var state_28030__$1 = state_28030;
var statearr_28041_28062 = state_28030__$1;
(statearr_28041_28062[(2)] = tc);

(statearr_28041_28062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (5))){
var inst_28010 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28011 = cljs.core.async.close_BANG_.call(null,fc);
var state_28030__$1 = (function (){var statearr_28042 = state_28030;
(statearr_28042[(8)] = inst_28010);

return statearr_28042;
})();
var statearr_28043_28063 = state_28030__$1;
(statearr_28043_28063[(2)] = inst_28011);

(statearr_28043_28063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (14))){
var inst_28024 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28044_28064 = state_28030__$1;
(statearr_28044_28064[(2)] = inst_28024);

(statearr_28044_28064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (10))){
var state_28030__$1 = state_28030;
var statearr_28045_28065 = state_28030__$1;
(statearr_28045_28065[(2)] = fc);

(statearr_28045_28065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (8))){
var inst_28019 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
if(cljs.core.truth_(inst_28019)){
var statearr_28046_28066 = state_28030__$1;
(statearr_28046_28066[(1)] = (12));

} else {
var statearr_28047_28067 = state_28030__$1;
(statearr_28047_28067[(1)] = (13));

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
});})(c__27603__auto___28053,tc,fc))
;
return ((function (switch__27513__auto__,c__27603__auto___28053,tc,fc){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_28048 = [null,null,null,null,null,null,null,null,null];
(statearr_28048[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_28048[(1)] = (1));

return statearr_28048;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_28030){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_28030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e28049){if((e28049 instanceof Object)){
var ex__27517__auto__ = e28049;
var statearr_28050_28068 = state_28030;
(statearr_28050_28068[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28069 = state_28030;
state_28030 = G__28069;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_28030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_28030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___28053,tc,fc))
})();
var state__27605__auto__ = (function (){var statearr_28051 = f__27604__auto__.call(null);
(statearr_28051[(6)] = c__27603__auto___28053);

return statearr_28051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___28053,tc,fc))
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
var c__27603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto__){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto__){
return (function (state_28090){
var state_val_28091 = (state_28090[(1)]);
if((state_val_28091 === (7))){
var inst_28086 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28092_28110 = state_28090__$1;
(statearr_28092_28110[(2)] = inst_28086);

(statearr_28092_28110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (1))){
var inst_28070 = init;
var state_28090__$1 = (function (){var statearr_28093 = state_28090;
(statearr_28093[(7)] = inst_28070);

return statearr_28093;
})();
var statearr_28094_28111 = state_28090__$1;
(statearr_28094_28111[(2)] = null);

(statearr_28094_28111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (4))){
var inst_28073 = (state_28090[(8)]);
var inst_28073__$1 = (state_28090[(2)]);
var inst_28074 = (inst_28073__$1 == null);
var state_28090__$1 = (function (){var statearr_28095 = state_28090;
(statearr_28095[(8)] = inst_28073__$1);

return statearr_28095;
})();
if(cljs.core.truth_(inst_28074)){
var statearr_28096_28112 = state_28090__$1;
(statearr_28096_28112[(1)] = (5));

} else {
var statearr_28097_28113 = state_28090__$1;
(statearr_28097_28113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (6))){
var inst_28073 = (state_28090[(8)]);
var inst_28077 = (state_28090[(9)]);
var inst_28070 = (state_28090[(7)]);
var inst_28077__$1 = f.call(null,inst_28070,inst_28073);
var inst_28078 = cljs.core.reduced_QMARK_.call(null,inst_28077__$1);
var state_28090__$1 = (function (){var statearr_28098 = state_28090;
(statearr_28098[(9)] = inst_28077__$1);

return statearr_28098;
})();
if(inst_28078){
var statearr_28099_28114 = state_28090__$1;
(statearr_28099_28114[(1)] = (8));

} else {
var statearr_28100_28115 = state_28090__$1;
(statearr_28100_28115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (3))){
var inst_28088 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28090__$1,inst_28088);
} else {
if((state_val_28091 === (2))){
var state_28090__$1 = state_28090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28090__$1,(4),ch);
} else {
if((state_val_28091 === (9))){
var inst_28077 = (state_28090[(9)]);
var inst_28070 = inst_28077;
var state_28090__$1 = (function (){var statearr_28101 = state_28090;
(statearr_28101[(7)] = inst_28070);

return statearr_28101;
})();
var statearr_28102_28116 = state_28090__$1;
(statearr_28102_28116[(2)] = null);

(statearr_28102_28116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (5))){
var inst_28070 = (state_28090[(7)]);
var state_28090__$1 = state_28090;
var statearr_28103_28117 = state_28090__$1;
(statearr_28103_28117[(2)] = inst_28070);

(statearr_28103_28117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (10))){
var inst_28084 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28104_28118 = state_28090__$1;
(statearr_28104_28118[(2)] = inst_28084);

(statearr_28104_28118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (8))){
var inst_28077 = (state_28090[(9)]);
var inst_28080 = cljs.core.deref.call(null,inst_28077);
var state_28090__$1 = state_28090;
var statearr_28105_28119 = state_28090__$1;
(statearr_28105_28119[(2)] = inst_28080);

(statearr_28105_28119[(1)] = (10));


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
});})(c__27603__auto__))
;
return ((function (switch__27513__auto__,c__27603__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27514__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27514__auto____0 = (function (){
var statearr_28106 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28106[(0)] = cljs$core$async$reduce_$_state_machine__27514__auto__);

(statearr_28106[(1)] = (1));

return statearr_28106;
});
var cljs$core$async$reduce_$_state_machine__27514__auto____1 = (function (state_28090){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_28090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e28107){if((e28107 instanceof Object)){
var ex__27517__auto__ = e28107;
var statearr_28108_28120 = state_28090;
(statearr_28108_28120[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28121 = state_28090;
state_28090 = G__28121;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27514__auto__ = function(state_28090){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27514__auto____1.call(this,state_28090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27514__auto____0;
cljs$core$async$reduce_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27514__auto____1;
return cljs$core$async$reduce_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto__))
})();
var state__27605__auto__ = (function (){var statearr_28109 = f__27604__auto__.call(null);
(statearr_28109[(6)] = c__27603__auto__);

return statearr_28109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto__))
);

return c__27603__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto__,f__$1){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto__,f__$1){
return (function (state_28127){
var state_val_28128 = (state_28127[(1)]);
if((state_val_28128 === (1))){
var inst_28122 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28127__$1 = state_28127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28127__$1,(2),inst_28122);
} else {
if((state_val_28128 === (2))){
var inst_28124 = (state_28127[(2)]);
var inst_28125 = f__$1.call(null,inst_28124);
var state_28127__$1 = state_28127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28127__$1,inst_28125);
} else {
return null;
}
}
});})(c__27603__auto__,f__$1))
;
return ((function (switch__27513__auto__,c__27603__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27514__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27514__auto____0 = (function (){
var statearr_28129 = [null,null,null,null,null,null,null];
(statearr_28129[(0)] = cljs$core$async$transduce_$_state_machine__27514__auto__);

(statearr_28129[(1)] = (1));

return statearr_28129;
});
var cljs$core$async$transduce_$_state_machine__27514__auto____1 = (function (state_28127){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_28127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e28130){if((e28130 instanceof Object)){
var ex__27517__auto__ = e28130;
var statearr_28131_28133 = state_28127;
(statearr_28131_28133[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28134 = state_28127;
state_28127 = G__28134;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27514__auto__ = function(state_28127){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27514__auto____1.call(this,state_28127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27514__auto____0;
cljs$core$async$transduce_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27514__auto____1;
return cljs$core$async$transduce_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto__,f__$1))
})();
var state__27605__auto__ = (function (){var statearr_28132 = f__27604__auto__.call(null);
(statearr_28132[(6)] = c__27603__auto__);

return statearr_28132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto__,f__$1))
);

return c__27603__auto__;
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
var G__28136 = arguments.length;
switch (G__28136) {
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
var c__27603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto__){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto__){
return (function (state_28161){
var state_val_28162 = (state_28161[(1)]);
if((state_val_28162 === (7))){
var inst_28143 = (state_28161[(2)]);
var state_28161__$1 = state_28161;
var statearr_28163_28184 = state_28161__$1;
(statearr_28163_28184[(2)] = inst_28143);

(statearr_28163_28184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (1))){
var inst_28137 = cljs.core.seq.call(null,coll);
var inst_28138 = inst_28137;
var state_28161__$1 = (function (){var statearr_28164 = state_28161;
(statearr_28164[(7)] = inst_28138);

return statearr_28164;
})();
var statearr_28165_28185 = state_28161__$1;
(statearr_28165_28185[(2)] = null);

(statearr_28165_28185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (4))){
var inst_28138 = (state_28161[(7)]);
var inst_28141 = cljs.core.first.call(null,inst_28138);
var state_28161__$1 = state_28161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28161__$1,(7),ch,inst_28141);
} else {
if((state_val_28162 === (13))){
var inst_28155 = (state_28161[(2)]);
var state_28161__$1 = state_28161;
var statearr_28166_28186 = state_28161__$1;
(statearr_28166_28186[(2)] = inst_28155);

(statearr_28166_28186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (6))){
var inst_28146 = (state_28161[(2)]);
var state_28161__$1 = state_28161;
if(cljs.core.truth_(inst_28146)){
var statearr_28167_28187 = state_28161__$1;
(statearr_28167_28187[(1)] = (8));

} else {
var statearr_28168_28188 = state_28161__$1;
(statearr_28168_28188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (3))){
var inst_28159 = (state_28161[(2)]);
var state_28161__$1 = state_28161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28161__$1,inst_28159);
} else {
if((state_val_28162 === (12))){
var state_28161__$1 = state_28161;
var statearr_28169_28189 = state_28161__$1;
(statearr_28169_28189[(2)] = null);

(statearr_28169_28189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (2))){
var inst_28138 = (state_28161[(7)]);
var state_28161__$1 = state_28161;
if(cljs.core.truth_(inst_28138)){
var statearr_28170_28190 = state_28161__$1;
(statearr_28170_28190[(1)] = (4));

} else {
var statearr_28171_28191 = state_28161__$1;
(statearr_28171_28191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (11))){
var inst_28152 = cljs.core.async.close_BANG_.call(null,ch);
var state_28161__$1 = state_28161;
var statearr_28172_28192 = state_28161__$1;
(statearr_28172_28192[(2)] = inst_28152);

(statearr_28172_28192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (9))){
var state_28161__$1 = state_28161;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28173_28193 = state_28161__$1;
(statearr_28173_28193[(1)] = (11));

} else {
var statearr_28174_28194 = state_28161__$1;
(statearr_28174_28194[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (5))){
var inst_28138 = (state_28161[(7)]);
var state_28161__$1 = state_28161;
var statearr_28175_28195 = state_28161__$1;
(statearr_28175_28195[(2)] = inst_28138);

(statearr_28175_28195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (10))){
var inst_28157 = (state_28161[(2)]);
var state_28161__$1 = state_28161;
var statearr_28176_28196 = state_28161__$1;
(statearr_28176_28196[(2)] = inst_28157);

(statearr_28176_28196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (8))){
var inst_28138 = (state_28161[(7)]);
var inst_28148 = cljs.core.next.call(null,inst_28138);
var inst_28138__$1 = inst_28148;
var state_28161__$1 = (function (){var statearr_28177 = state_28161;
(statearr_28177[(7)] = inst_28138__$1);

return statearr_28177;
})();
var statearr_28178_28197 = state_28161__$1;
(statearr_28178_28197[(2)] = null);

(statearr_28178_28197[(1)] = (2));


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
});})(c__27603__auto__))
;
return ((function (switch__27513__auto__,c__27603__auto__){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_28179 = [null,null,null,null,null,null,null,null];
(statearr_28179[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_28179[(1)] = (1));

return statearr_28179;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_28161){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_28161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e28180){if((e28180 instanceof Object)){
var ex__27517__auto__ = e28180;
var statearr_28181_28198 = state_28161;
(statearr_28181_28198[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28199 = state_28161;
state_28161 = G__28199;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_28161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_28161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto__))
})();
var state__27605__auto__ = (function (){var statearr_28182 = f__27604__auto__.call(null);
(statearr_28182[(6)] = c__27603__auto__);

return statearr_28182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto__))
);

return c__27603__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28200 = (function (ch,cs,meta28201){
this.ch = ch;
this.cs = cs;
this.meta28201 = meta28201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28202,meta28201__$1){
var self__ = this;
var _28202__$1 = this;
return (new cljs.core.async.t_cljs$core$async28200(self__.ch,self__.cs,meta28201__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28202){
var self__ = this;
var _28202__$1 = this;
return self__.meta28201;
});})(cs))
;

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28200.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28201","meta28201",-1115615459,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28200";

cljs.core.async.t_cljs$core$async28200.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28200");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28200.
 */
cljs.core.async.__GT_t_cljs$core$async28200 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28200(ch__$1,cs__$1,meta28201){
return (new cljs.core.async.t_cljs$core$async28200(ch__$1,cs__$1,meta28201));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28200(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27603__auto___28422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___28422,cs,m,dchan,dctr,done){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___28422,cs,m,dchan,dctr,done){
return (function (state_28337){
var state_val_28338 = (state_28337[(1)]);
if((state_val_28338 === (7))){
var inst_28333 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28339_28423 = state_28337__$1;
(statearr_28339_28423[(2)] = inst_28333);

(statearr_28339_28423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (20))){
var inst_28236 = (state_28337[(7)]);
var inst_28248 = cljs.core.first.call(null,inst_28236);
var inst_28249 = cljs.core.nth.call(null,inst_28248,(0),null);
var inst_28250 = cljs.core.nth.call(null,inst_28248,(1),null);
var state_28337__$1 = (function (){var statearr_28340 = state_28337;
(statearr_28340[(8)] = inst_28249);

return statearr_28340;
})();
if(cljs.core.truth_(inst_28250)){
var statearr_28341_28424 = state_28337__$1;
(statearr_28341_28424[(1)] = (22));

} else {
var statearr_28342_28425 = state_28337__$1;
(statearr_28342_28425[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (27))){
var inst_28280 = (state_28337[(9)]);
var inst_28285 = (state_28337[(10)]);
var inst_28205 = (state_28337[(11)]);
var inst_28278 = (state_28337[(12)]);
var inst_28285__$1 = cljs.core._nth.call(null,inst_28278,inst_28280);
var inst_28286 = cljs.core.async.put_BANG_.call(null,inst_28285__$1,inst_28205,done);
var state_28337__$1 = (function (){var statearr_28343 = state_28337;
(statearr_28343[(10)] = inst_28285__$1);

return statearr_28343;
})();
if(cljs.core.truth_(inst_28286)){
var statearr_28344_28426 = state_28337__$1;
(statearr_28344_28426[(1)] = (30));

} else {
var statearr_28345_28427 = state_28337__$1;
(statearr_28345_28427[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (1))){
var state_28337__$1 = state_28337;
var statearr_28346_28428 = state_28337__$1;
(statearr_28346_28428[(2)] = null);

(statearr_28346_28428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (24))){
var inst_28236 = (state_28337[(7)]);
var inst_28255 = (state_28337[(2)]);
var inst_28256 = cljs.core.next.call(null,inst_28236);
var inst_28214 = inst_28256;
var inst_28215 = null;
var inst_28216 = (0);
var inst_28217 = (0);
var state_28337__$1 = (function (){var statearr_28347 = state_28337;
(statearr_28347[(13)] = inst_28214);

(statearr_28347[(14)] = inst_28217);

(statearr_28347[(15)] = inst_28216);

(statearr_28347[(16)] = inst_28215);

(statearr_28347[(17)] = inst_28255);

return statearr_28347;
})();
var statearr_28348_28429 = state_28337__$1;
(statearr_28348_28429[(2)] = null);

(statearr_28348_28429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (39))){
var state_28337__$1 = state_28337;
var statearr_28352_28430 = state_28337__$1;
(statearr_28352_28430[(2)] = null);

(statearr_28352_28430[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (4))){
var inst_28205 = (state_28337[(11)]);
var inst_28205__$1 = (state_28337[(2)]);
var inst_28206 = (inst_28205__$1 == null);
var state_28337__$1 = (function (){var statearr_28353 = state_28337;
(statearr_28353[(11)] = inst_28205__$1);

return statearr_28353;
})();
if(cljs.core.truth_(inst_28206)){
var statearr_28354_28431 = state_28337__$1;
(statearr_28354_28431[(1)] = (5));

} else {
var statearr_28355_28432 = state_28337__$1;
(statearr_28355_28432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (15))){
var inst_28214 = (state_28337[(13)]);
var inst_28217 = (state_28337[(14)]);
var inst_28216 = (state_28337[(15)]);
var inst_28215 = (state_28337[(16)]);
var inst_28232 = (state_28337[(2)]);
var inst_28233 = (inst_28217 + (1));
var tmp28349 = inst_28214;
var tmp28350 = inst_28216;
var tmp28351 = inst_28215;
var inst_28214__$1 = tmp28349;
var inst_28215__$1 = tmp28351;
var inst_28216__$1 = tmp28350;
var inst_28217__$1 = inst_28233;
var state_28337__$1 = (function (){var statearr_28356 = state_28337;
(statearr_28356[(13)] = inst_28214__$1);

(statearr_28356[(14)] = inst_28217__$1);

(statearr_28356[(15)] = inst_28216__$1);

(statearr_28356[(16)] = inst_28215__$1);

(statearr_28356[(18)] = inst_28232);

return statearr_28356;
})();
var statearr_28357_28433 = state_28337__$1;
(statearr_28357_28433[(2)] = null);

(statearr_28357_28433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (21))){
var inst_28259 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28361_28434 = state_28337__$1;
(statearr_28361_28434[(2)] = inst_28259);

(statearr_28361_28434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (31))){
var inst_28285 = (state_28337[(10)]);
var inst_28289 = done.call(null,null);
var inst_28290 = cljs.core.async.untap_STAR_.call(null,m,inst_28285);
var state_28337__$1 = (function (){var statearr_28362 = state_28337;
(statearr_28362[(19)] = inst_28289);

return statearr_28362;
})();
var statearr_28363_28435 = state_28337__$1;
(statearr_28363_28435[(2)] = inst_28290);

(statearr_28363_28435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (32))){
var inst_28280 = (state_28337[(9)]);
var inst_28279 = (state_28337[(20)]);
var inst_28278 = (state_28337[(12)]);
var inst_28277 = (state_28337[(21)]);
var inst_28292 = (state_28337[(2)]);
var inst_28293 = (inst_28280 + (1));
var tmp28358 = inst_28279;
var tmp28359 = inst_28278;
var tmp28360 = inst_28277;
var inst_28277__$1 = tmp28360;
var inst_28278__$1 = tmp28359;
var inst_28279__$1 = tmp28358;
var inst_28280__$1 = inst_28293;
var state_28337__$1 = (function (){var statearr_28364 = state_28337;
(statearr_28364[(9)] = inst_28280__$1);

(statearr_28364[(20)] = inst_28279__$1);

(statearr_28364[(22)] = inst_28292);

(statearr_28364[(12)] = inst_28278__$1);

(statearr_28364[(21)] = inst_28277__$1);

return statearr_28364;
})();
var statearr_28365_28436 = state_28337__$1;
(statearr_28365_28436[(2)] = null);

(statearr_28365_28436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (40))){
var inst_28305 = (state_28337[(23)]);
var inst_28309 = done.call(null,null);
var inst_28310 = cljs.core.async.untap_STAR_.call(null,m,inst_28305);
var state_28337__$1 = (function (){var statearr_28366 = state_28337;
(statearr_28366[(24)] = inst_28309);

return statearr_28366;
})();
var statearr_28367_28437 = state_28337__$1;
(statearr_28367_28437[(2)] = inst_28310);

(statearr_28367_28437[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (33))){
var inst_28296 = (state_28337[(25)]);
var inst_28298 = cljs.core.chunked_seq_QMARK_.call(null,inst_28296);
var state_28337__$1 = state_28337;
if(inst_28298){
var statearr_28368_28438 = state_28337__$1;
(statearr_28368_28438[(1)] = (36));

} else {
var statearr_28369_28439 = state_28337__$1;
(statearr_28369_28439[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (13))){
var inst_28226 = (state_28337[(26)]);
var inst_28229 = cljs.core.async.close_BANG_.call(null,inst_28226);
var state_28337__$1 = state_28337;
var statearr_28370_28440 = state_28337__$1;
(statearr_28370_28440[(2)] = inst_28229);

(statearr_28370_28440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (22))){
var inst_28249 = (state_28337[(8)]);
var inst_28252 = cljs.core.async.close_BANG_.call(null,inst_28249);
var state_28337__$1 = state_28337;
var statearr_28371_28441 = state_28337__$1;
(statearr_28371_28441[(2)] = inst_28252);

(statearr_28371_28441[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (36))){
var inst_28296 = (state_28337[(25)]);
var inst_28300 = cljs.core.chunk_first.call(null,inst_28296);
var inst_28301 = cljs.core.chunk_rest.call(null,inst_28296);
var inst_28302 = cljs.core.count.call(null,inst_28300);
var inst_28277 = inst_28301;
var inst_28278 = inst_28300;
var inst_28279 = inst_28302;
var inst_28280 = (0);
var state_28337__$1 = (function (){var statearr_28372 = state_28337;
(statearr_28372[(9)] = inst_28280);

(statearr_28372[(20)] = inst_28279);

(statearr_28372[(12)] = inst_28278);

(statearr_28372[(21)] = inst_28277);

return statearr_28372;
})();
var statearr_28373_28442 = state_28337__$1;
(statearr_28373_28442[(2)] = null);

(statearr_28373_28442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (41))){
var inst_28296 = (state_28337[(25)]);
var inst_28312 = (state_28337[(2)]);
var inst_28313 = cljs.core.next.call(null,inst_28296);
var inst_28277 = inst_28313;
var inst_28278 = null;
var inst_28279 = (0);
var inst_28280 = (0);
var state_28337__$1 = (function (){var statearr_28374 = state_28337;
(statearr_28374[(9)] = inst_28280);

(statearr_28374[(20)] = inst_28279);

(statearr_28374[(27)] = inst_28312);

(statearr_28374[(12)] = inst_28278);

(statearr_28374[(21)] = inst_28277);

return statearr_28374;
})();
var statearr_28375_28443 = state_28337__$1;
(statearr_28375_28443[(2)] = null);

(statearr_28375_28443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (43))){
var state_28337__$1 = state_28337;
var statearr_28376_28444 = state_28337__$1;
(statearr_28376_28444[(2)] = null);

(statearr_28376_28444[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (29))){
var inst_28321 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28377_28445 = state_28337__$1;
(statearr_28377_28445[(2)] = inst_28321);

(statearr_28377_28445[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (44))){
var inst_28330 = (state_28337[(2)]);
var state_28337__$1 = (function (){var statearr_28378 = state_28337;
(statearr_28378[(28)] = inst_28330);

return statearr_28378;
})();
var statearr_28379_28446 = state_28337__$1;
(statearr_28379_28446[(2)] = null);

(statearr_28379_28446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (6))){
var inst_28269 = (state_28337[(29)]);
var inst_28268 = cljs.core.deref.call(null,cs);
var inst_28269__$1 = cljs.core.keys.call(null,inst_28268);
var inst_28270 = cljs.core.count.call(null,inst_28269__$1);
var inst_28271 = cljs.core.reset_BANG_.call(null,dctr,inst_28270);
var inst_28276 = cljs.core.seq.call(null,inst_28269__$1);
var inst_28277 = inst_28276;
var inst_28278 = null;
var inst_28279 = (0);
var inst_28280 = (0);
var state_28337__$1 = (function (){var statearr_28380 = state_28337;
(statearr_28380[(9)] = inst_28280);

(statearr_28380[(20)] = inst_28279);

(statearr_28380[(29)] = inst_28269__$1);

(statearr_28380[(30)] = inst_28271);

(statearr_28380[(12)] = inst_28278);

(statearr_28380[(21)] = inst_28277);

return statearr_28380;
})();
var statearr_28381_28447 = state_28337__$1;
(statearr_28381_28447[(2)] = null);

(statearr_28381_28447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (28))){
var inst_28296 = (state_28337[(25)]);
var inst_28277 = (state_28337[(21)]);
var inst_28296__$1 = cljs.core.seq.call(null,inst_28277);
var state_28337__$1 = (function (){var statearr_28382 = state_28337;
(statearr_28382[(25)] = inst_28296__$1);

return statearr_28382;
})();
if(inst_28296__$1){
var statearr_28383_28448 = state_28337__$1;
(statearr_28383_28448[(1)] = (33));

} else {
var statearr_28384_28449 = state_28337__$1;
(statearr_28384_28449[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (25))){
var inst_28280 = (state_28337[(9)]);
var inst_28279 = (state_28337[(20)]);
var inst_28282 = (inst_28280 < inst_28279);
var inst_28283 = inst_28282;
var state_28337__$1 = state_28337;
if(cljs.core.truth_(inst_28283)){
var statearr_28385_28450 = state_28337__$1;
(statearr_28385_28450[(1)] = (27));

} else {
var statearr_28386_28451 = state_28337__$1;
(statearr_28386_28451[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (34))){
var state_28337__$1 = state_28337;
var statearr_28387_28452 = state_28337__$1;
(statearr_28387_28452[(2)] = null);

(statearr_28387_28452[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (17))){
var state_28337__$1 = state_28337;
var statearr_28388_28453 = state_28337__$1;
(statearr_28388_28453[(2)] = null);

(statearr_28388_28453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (3))){
var inst_28335 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28337__$1,inst_28335);
} else {
if((state_val_28338 === (12))){
var inst_28264 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28389_28454 = state_28337__$1;
(statearr_28389_28454[(2)] = inst_28264);

(statearr_28389_28454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (2))){
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28337__$1,(4),ch);
} else {
if((state_val_28338 === (23))){
var state_28337__$1 = state_28337;
var statearr_28390_28455 = state_28337__$1;
(statearr_28390_28455[(2)] = null);

(statearr_28390_28455[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (35))){
var inst_28319 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28391_28456 = state_28337__$1;
(statearr_28391_28456[(2)] = inst_28319);

(statearr_28391_28456[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (19))){
var inst_28236 = (state_28337[(7)]);
var inst_28240 = cljs.core.chunk_first.call(null,inst_28236);
var inst_28241 = cljs.core.chunk_rest.call(null,inst_28236);
var inst_28242 = cljs.core.count.call(null,inst_28240);
var inst_28214 = inst_28241;
var inst_28215 = inst_28240;
var inst_28216 = inst_28242;
var inst_28217 = (0);
var state_28337__$1 = (function (){var statearr_28392 = state_28337;
(statearr_28392[(13)] = inst_28214);

(statearr_28392[(14)] = inst_28217);

(statearr_28392[(15)] = inst_28216);

(statearr_28392[(16)] = inst_28215);

return statearr_28392;
})();
var statearr_28393_28457 = state_28337__$1;
(statearr_28393_28457[(2)] = null);

(statearr_28393_28457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (11))){
var inst_28214 = (state_28337[(13)]);
var inst_28236 = (state_28337[(7)]);
var inst_28236__$1 = cljs.core.seq.call(null,inst_28214);
var state_28337__$1 = (function (){var statearr_28394 = state_28337;
(statearr_28394[(7)] = inst_28236__$1);

return statearr_28394;
})();
if(inst_28236__$1){
var statearr_28395_28458 = state_28337__$1;
(statearr_28395_28458[(1)] = (16));

} else {
var statearr_28396_28459 = state_28337__$1;
(statearr_28396_28459[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (9))){
var inst_28266 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28397_28460 = state_28337__$1;
(statearr_28397_28460[(2)] = inst_28266);

(statearr_28397_28460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (5))){
var inst_28212 = cljs.core.deref.call(null,cs);
var inst_28213 = cljs.core.seq.call(null,inst_28212);
var inst_28214 = inst_28213;
var inst_28215 = null;
var inst_28216 = (0);
var inst_28217 = (0);
var state_28337__$1 = (function (){var statearr_28398 = state_28337;
(statearr_28398[(13)] = inst_28214);

(statearr_28398[(14)] = inst_28217);

(statearr_28398[(15)] = inst_28216);

(statearr_28398[(16)] = inst_28215);

return statearr_28398;
})();
var statearr_28399_28461 = state_28337__$1;
(statearr_28399_28461[(2)] = null);

(statearr_28399_28461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (14))){
var state_28337__$1 = state_28337;
var statearr_28400_28462 = state_28337__$1;
(statearr_28400_28462[(2)] = null);

(statearr_28400_28462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (45))){
var inst_28327 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28401_28463 = state_28337__$1;
(statearr_28401_28463[(2)] = inst_28327);

(statearr_28401_28463[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (26))){
var inst_28269 = (state_28337[(29)]);
var inst_28323 = (state_28337[(2)]);
var inst_28324 = cljs.core.seq.call(null,inst_28269);
var state_28337__$1 = (function (){var statearr_28402 = state_28337;
(statearr_28402[(31)] = inst_28323);

return statearr_28402;
})();
if(inst_28324){
var statearr_28403_28464 = state_28337__$1;
(statearr_28403_28464[(1)] = (42));

} else {
var statearr_28404_28465 = state_28337__$1;
(statearr_28404_28465[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (16))){
var inst_28236 = (state_28337[(7)]);
var inst_28238 = cljs.core.chunked_seq_QMARK_.call(null,inst_28236);
var state_28337__$1 = state_28337;
if(inst_28238){
var statearr_28405_28466 = state_28337__$1;
(statearr_28405_28466[(1)] = (19));

} else {
var statearr_28406_28467 = state_28337__$1;
(statearr_28406_28467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (38))){
var inst_28316 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28407_28468 = state_28337__$1;
(statearr_28407_28468[(2)] = inst_28316);

(statearr_28407_28468[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (30))){
var state_28337__$1 = state_28337;
var statearr_28408_28469 = state_28337__$1;
(statearr_28408_28469[(2)] = null);

(statearr_28408_28469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (10))){
var inst_28217 = (state_28337[(14)]);
var inst_28215 = (state_28337[(16)]);
var inst_28225 = cljs.core._nth.call(null,inst_28215,inst_28217);
var inst_28226 = cljs.core.nth.call(null,inst_28225,(0),null);
var inst_28227 = cljs.core.nth.call(null,inst_28225,(1),null);
var state_28337__$1 = (function (){var statearr_28409 = state_28337;
(statearr_28409[(26)] = inst_28226);

return statearr_28409;
})();
if(cljs.core.truth_(inst_28227)){
var statearr_28410_28470 = state_28337__$1;
(statearr_28410_28470[(1)] = (13));

} else {
var statearr_28411_28471 = state_28337__$1;
(statearr_28411_28471[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (18))){
var inst_28262 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28412_28472 = state_28337__$1;
(statearr_28412_28472[(2)] = inst_28262);

(statearr_28412_28472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (42))){
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28337__$1,(45),dchan);
} else {
if((state_val_28338 === (37))){
var inst_28296 = (state_28337[(25)]);
var inst_28205 = (state_28337[(11)]);
var inst_28305 = (state_28337[(23)]);
var inst_28305__$1 = cljs.core.first.call(null,inst_28296);
var inst_28306 = cljs.core.async.put_BANG_.call(null,inst_28305__$1,inst_28205,done);
var state_28337__$1 = (function (){var statearr_28413 = state_28337;
(statearr_28413[(23)] = inst_28305__$1);

return statearr_28413;
})();
if(cljs.core.truth_(inst_28306)){
var statearr_28414_28473 = state_28337__$1;
(statearr_28414_28473[(1)] = (39));

} else {
var statearr_28415_28474 = state_28337__$1;
(statearr_28415_28474[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (8))){
var inst_28217 = (state_28337[(14)]);
var inst_28216 = (state_28337[(15)]);
var inst_28219 = (inst_28217 < inst_28216);
var inst_28220 = inst_28219;
var state_28337__$1 = state_28337;
if(cljs.core.truth_(inst_28220)){
var statearr_28416_28475 = state_28337__$1;
(statearr_28416_28475[(1)] = (10));

} else {
var statearr_28417_28476 = state_28337__$1;
(statearr_28417_28476[(1)] = (11));

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
});})(c__27603__auto___28422,cs,m,dchan,dctr,done))
;
return ((function (switch__27513__auto__,c__27603__auto___28422,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27514__auto__ = null;
var cljs$core$async$mult_$_state_machine__27514__auto____0 = (function (){
var statearr_28418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28418[(0)] = cljs$core$async$mult_$_state_machine__27514__auto__);

(statearr_28418[(1)] = (1));

return statearr_28418;
});
var cljs$core$async$mult_$_state_machine__27514__auto____1 = (function (state_28337){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_28337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e28419){if((e28419 instanceof Object)){
var ex__27517__auto__ = e28419;
var statearr_28420_28477 = state_28337;
(statearr_28420_28477[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28478 = state_28337;
state_28337 = G__28478;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27514__auto__ = function(state_28337){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27514__auto____1.call(this,state_28337);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27514__auto____0;
cljs$core$async$mult_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27514__auto____1;
return cljs$core$async$mult_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___28422,cs,m,dchan,dctr,done))
})();
var state__27605__auto__ = (function (){var statearr_28421 = f__27604__auto__.call(null);
(statearr_28421[(6)] = c__27603__auto___28422);

return statearr_28421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___28422,cs,m,dchan,dctr,done))
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
var G__28480 = arguments.length;
switch (G__28480) {
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
var len__4499__auto___28492 = arguments.length;
var i__4500__auto___28493 = (0);
while(true){
if((i__4500__auto___28493 < len__4499__auto___28492)){
args__4502__auto__.push((arguments[i__4500__auto___28493]));

var G__28494 = (i__4500__auto___28493 + (1));
i__4500__auto___28493 = G__28494;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28486){
var map__28487 = p__28486;
var map__28487__$1 = ((((!((map__28487 == null)))?(((((map__28487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28487):map__28487);
var opts = map__28487__$1;
var statearr_28489_28495 = state;
(statearr_28489_28495[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28487,map__28487__$1,opts){
return (function (val){
var statearr_28490_28496 = state;
(statearr_28490_28496[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28487,map__28487__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28491_28497 = state;
(statearr_28491_28497[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28482){
var G__28483 = cljs.core.first.call(null,seq28482);
var seq28482__$1 = cljs.core.next.call(null,seq28482);
var G__28484 = cljs.core.first.call(null,seq28482__$1);
var seq28482__$2 = cljs.core.next.call(null,seq28482__$1);
var G__28485 = cljs.core.first.call(null,seq28482__$2);
var seq28482__$3 = cljs.core.next.call(null,seq28482__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28483,G__28484,G__28485,seq28482__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28498 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28499){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28499 = meta28499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28500,meta28499__$1){
var self__ = this;
var _28500__$1 = this;
return (new cljs.core.async.t_cljs$core$async28498(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28499__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28500){
var self__ = this;
var _28500__$1 = this;
return self__.meta28499;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28498.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28498.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28498.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28498.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28498.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28498.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28498.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28498.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28499","meta28499",-586047953,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28498";

cljs.core.async.t_cljs$core$async28498.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28498");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28498.
 */
cljs.core.async.__GT_t_cljs$core$async28498 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28498(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28499){
return (new cljs.core.async.t_cljs$core$async28498(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28499));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28498(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27603__auto___28662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___28662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___28662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28602){
var state_val_28603 = (state_28602[(1)]);
if((state_val_28603 === (7))){
var inst_28517 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28604_28663 = state_28602__$1;
(statearr_28604_28663[(2)] = inst_28517);

(statearr_28604_28663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (20))){
var inst_28529 = (state_28602[(7)]);
var state_28602__$1 = state_28602;
var statearr_28605_28664 = state_28602__$1;
(statearr_28605_28664[(2)] = inst_28529);

(statearr_28605_28664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (27))){
var state_28602__$1 = state_28602;
var statearr_28606_28665 = state_28602__$1;
(statearr_28606_28665[(2)] = null);

(statearr_28606_28665[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (1))){
var inst_28504 = (state_28602[(8)]);
var inst_28504__$1 = calc_state.call(null);
var inst_28506 = (inst_28504__$1 == null);
var inst_28507 = cljs.core.not.call(null,inst_28506);
var state_28602__$1 = (function (){var statearr_28607 = state_28602;
(statearr_28607[(8)] = inst_28504__$1);

return statearr_28607;
})();
if(inst_28507){
var statearr_28608_28666 = state_28602__$1;
(statearr_28608_28666[(1)] = (2));

} else {
var statearr_28609_28667 = state_28602__$1;
(statearr_28609_28667[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (24))){
var inst_28576 = (state_28602[(9)]);
var inst_28562 = (state_28602[(10)]);
var inst_28553 = (state_28602[(11)]);
var inst_28576__$1 = inst_28553.call(null,inst_28562);
var state_28602__$1 = (function (){var statearr_28610 = state_28602;
(statearr_28610[(9)] = inst_28576__$1);

return statearr_28610;
})();
if(cljs.core.truth_(inst_28576__$1)){
var statearr_28611_28668 = state_28602__$1;
(statearr_28611_28668[(1)] = (29));

} else {
var statearr_28612_28669 = state_28602__$1;
(statearr_28612_28669[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (4))){
var inst_28520 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
if(cljs.core.truth_(inst_28520)){
var statearr_28613_28670 = state_28602__$1;
(statearr_28613_28670[(1)] = (8));

} else {
var statearr_28614_28671 = state_28602__$1;
(statearr_28614_28671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (15))){
var inst_28547 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
if(cljs.core.truth_(inst_28547)){
var statearr_28615_28672 = state_28602__$1;
(statearr_28615_28672[(1)] = (19));

} else {
var statearr_28616_28673 = state_28602__$1;
(statearr_28616_28673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (21))){
var inst_28552 = (state_28602[(12)]);
var inst_28552__$1 = (state_28602[(2)]);
var inst_28553 = cljs.core.get.call(null,inst_28552__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28554 = cljs.core.get.call(null,inst_28552__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28555 = cljs.core.get.call(null,inst_28552__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28602__$1 = (function (){var statearr_28617 = state_28602;
(statearr_28617[(13)] = inst_28554);

(statearr_28617[(12)] = inst_28552__$1);

(statearr_28617[(11)] = inst_28553);

return statearr_28617;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28602__$1,(22),inst_28555);
} else {
if((state_val_28603 === (31))){
var inst_28584 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
if(cljs.core.truth_(inst_28584)){
var statearr_28618_28674 = state_28602__$1;
(statearr_28618_28674[(1)] = (32));

} else {
var statearr_28619_28675 = state_28602__$1;
(statearr_28619_28675[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (32))){
var inst_28561 = (state_28602[(14)]);
var state_28602__$1 = state_28602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28602__$1,(35),out,inst_28561);
} else {
if((state_val_28603 === (33))){
var inst_28552 = (state_28602[(12)]);
var inst_28529 = inst_28552;
var state_28602__$1 = (function (){var statearr_28620 = state_28602;
(statearr_28620[(7)] = inst_28529);

return statearr_28620;
})();
var statearr_28621_28676 = state_28602__$1;
(statearr_28621_28676[(2)] = null);

(statearr_28621_28676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (13))){
var inst_28529 = (state_28602[(7)]);
var inst_28536 = inst_28529.cljs$lang$protocol_mask$partition0$;
var inst_28537 = (inst_28536 & (64));
var inst_28538 = inst_28529.cljs$core$ISeq$;
var inst_28539 = (cljs.core.PROTOCOL_SENTINEL === inst_28538);
var inst_28540 = ((inst_28537) || (inst_28539));
var state_28602__$1 = state_28602;
if(cljs.core.truth_(inst_28540)){
var statearr_28622_28677 = state_28602__$1;
(statearr_28622_28677[(1)] = (16));

} else {
var statearr_28623_28678 = state_28602__$1;
(statearr_28623_28678[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (22))){
var inst_28561 = (state_28602[(14)]);
var inst_28562 = (state_28602[(10)]);
var inst_28560 = (state_28602[(2)]);
var inst_28561__$1 = cljs.core.nth.call(null,inst_28560,(0),null);
var inst_28562__$1 = cljs.core.nth.call(null,inst_28560,(1),null);
var inst_28563 = (inst_28561__$1 == null);
var inst_28564 = cljs.core._EQ_.call(null,inst_28562__$1,change);
var inst_28565 = ((inst_28563) || (inst_28564));
var state_28602__$1 = (function (){var statearr_28624 = state_28602;
(statearr_28624[(14)] = inst_28561__$1);

(statearr_28624[(10)] = inst_28562__$1);

return statearr_28624;
})();
if(cljs.core.truth_(inst_28565)){
var statearr_28625_28679 = state_28602__$1;
(statearr_28625_28679[(1)] = (23));

} else {
var statearr_28626_28680 = state_28602__$1;
(statearr_28626_28680[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (36))){
var inst_28552 = (state_28602[(12)]);
var inst_28529 = inst_28552;
var state_28602__$1 = (function (){var statearr_28627 = state_28602;
(statearr_28627[(7)] = inst_28529);

return statearr_28627;
})();
var statearr_28628_28681 = state_28602__$1;
(statearr_28628_28681[(2)] = null);

(statearr_28628_28681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (29))){
var inst_28576 = (state_28602[(9)]);
var state_28602__$1 = state_28602;
var statearr_28629_28682 = state_28602__$1;
(statearr_28629_28682[(2)] = inst_28576);

(statearr_28629_28682[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (6))){
var state_28602__$1 = state_28602;
var statearr_28630_28683 = state_28602__$1;
(statearr_28630_28683[(2)] = false);

(statearr_28630_28683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (28))){
var inst_28572 = (state_28602[(2)]);
var inst_28573 = calc_state.call(null);
var inst_28529 = inst_28573;
var state_28602__$1 = (function (){var statearr_28631 = state_28602;
(statearr_28631[(7)] = inst_28529);

(statearr_28631[(15)] = inst_28572);

return statearr_28631;
})();
var statearr_28632_28684 = state_28602__$1;
(statearr_28632_28684[(2)] = null);

(statearr_28632_28684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (25))){
var inst_28598 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28633_28685 = state_28602__$1;
(statearr_28633_28685[(2)] = inst_28598);

(statearr_28633_28685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (34))){
var inst_28596 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28634_28686 = state_28602__$1;
(statearr_28634_28686[(2)] = inst_28596);

(statearr_28634_28686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (17))){
var state_28602__$1 = state_28602;
var statearr_28635_28687 = state_28602__$1;
(statearr_28635_28687[(2)] = false);

(statearr_28635_28687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (3))){
var state_28602__$1 = state_28602;
var statearr_28636_28688 = state_28602__$1;
(statearr_28636_28688[(2)] = false);

(statearr_28636_28688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (12))){
var inst_28600 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28602__$1,inst_28600);
} else {
if((state_val_28603 === (2))){
var inst_28504 = (state_28602[(8)]);
var inst_28509 = inst_28504.cljs$lang$protocol_mask$partition0$;
var inst_28510 = (inst_28509 & (64));
var inst_28511 = inst_28504.cljs$core$ISeq$;
var inst_28512 = (cljs.core.PROTOCOL_SENTINEL === inst_28511);
var inst_28513 = ((inst_28510) || (inst_28512));
var state_28602__$1 = state_28602;
if(cljs.core.truth_(inst_28513)){
var statearr_28637_28689 = state_28602__$1;
(statearr_28637_28689[(1)] = (5));

} else {
var statearr_28638_28690 = state_28602__$1;
(statearr_28638_28690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (23))){
var inst_28561 = (state_28602[(14)]);
var inst_28567 = (inst_28561 == null);
var state_28602__$1 = state_28602;
if(cljs.core.truth_(inst_28567)){
var statearr_28639_28691 = state_28602__$1;
(statearr_28639_28691[(1)] = (26));

} else {
var statearr_28640_28692 = state_28602__$1;
(statearr_28640_28692[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (35))){
var inst_28587 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
if(cljs.core.truth_(inst_28587)){
var statearr_28641_28693 = state_28602__$1;
(statearr_28641_28693[(1)] = (36));

} else {
var statearr_28642_28694 = state_28602__$1;
(statearr_28642_28694[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (19))){
var inst_28529 = (state_28602[(7)]);
var inst_28549 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28529);
var state_28602__$1 = state_28602;
var statearr_28643_28695 = state_28602__$1;
(statearr_28643_28695[(2)] = inst_28549);

(statearr_28643_28695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (11))){
var inst_28529 = (state_28602[(7)]);
var inst_28533 = (inst_28529 == null);
var inst_28534 = cljs.core.not.call(null,inst_28533);
var state_28602__$1 = state_28602;
if(inst_28534){
var statearr_28644_28696 = state_28602__$1;
(statearr_28644_28696[(1)] = (13));

} else {
var statearr_28645_28697 = state_28602__$1;
(statearr_28645_28697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (9))){
var inst_28504 = (state_28602[(8)]);
var state_28602__$1 = state_28602;
var statearr_28646_28698 = state_28602__$1;
(statearr_28646_28698[(2)] = inst_28504);

(statearr_28646_28698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (5))){
var state_28602__$1 = state_28602;
var statearr_28647_28699 = state_28602__$1;
(statearr_28647_28699[(2)] = true);

(statearr_28647_28699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (14))){
var state_28602__$1 = state_28602;
var statearr_28648_28700 = state_28602__$1;
(statearr_28648_28700[(2)] = false);

(statearr_28648_28700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (26))){
var inst_28562 = (state_28602[(10)]);
var inst_28569 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28562);
var state_28602__$1 = state_28602;
var statearr_28649_28701 = state_28602__$1;
(statearr_28649_28701[(2)] = inst_28569);

(statearr_28649_28701[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (16))){
var state_28602__$1 = state_28602;
var statearr_28650_28702 = state_28602__$1;
(statearr_28650_28702[(2)] = true);

(statearr_28650_28702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (38))){
var inst_28592 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28651_28703 = state_28602__$1;
(statearr_28651_28703[(2)] = inst_28592);

(statearr_28651_28703[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (30))){
var inst_28554 = (state_28602[(13)]);
var inst_28562 = (state_28602[(10)]);
var inst_28553 = (state_28602[(11)]);
var inst_28579 = cljs.core.empty_QMARK_.call(null,inst_28553);
var inst_28580 = inst_28554.call(null,inst_28562);
var inst_28581 = cljs.core.not.call(null,inst_28580);
var inst_28582 = ((inst_28579) && (inst_28581));
var state_28602__$1 = state_28602;
var statearr_28652_28704 = state_28602__$1;
(statearr_28652_28704[(2)] = inst_28582);

(statearr_28652_28704[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (10))){
var inst_28504 = (state_28602[(8)]);
var inst_28525 = (state_28602[(2)]);
var inst_28526 = cljs.core.get.call(null,inst_28525,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28527 = cljs.core.get.call(null,inst_28525,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28528 = cljs.core.get.call(null,inst_28525,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28529 = inst_28504;
var state_28602__$1 = (function (){var statearr_28653 = state_28602;
(statearr_28653[(7)] = inst_28529);

(statearr_28653[(16)] = inst_28527);

(statearr_28653[(17)] = inst_28526);

(statearr_28653[(18)] = inst_28528);

return statearr_28653;
})();
var statearr_28654_28705 = state_28602__$1;
(statearr_28654_28705[(2)] = null);

(statearr_28654_28705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (18))){
var inst_28544 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28655_28706 = state_28602__$1;
(statearr_28655_28706[(2)] = inst_28544);

(statearr_28655_28706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (37))){
var state_28602__$1 = state_28602;
var statearr_28656_28707 = state_28602__$1;
(statearr_28656_28707[(2)] = null);

(statearr_28656_28707[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (8))){
var inst_28504 = (state_28602[(8)]);
var inst_28522 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28504);
var state_28602__$1 = state_28602;
var statearr_28657_28708 = state_28602__$1;
(statearr_28657_28708[(2)] = inst_28522);

(statearr_28657_28708[(1)] = (10));


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
});})(c__27603__auto___28662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27513__auto__,c__27603__auto___28662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27514__auto__ = null;
var cljs$core$async$mix_$_state_machine__27514__auto____0 = (function (){
var statearr_28658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28658[(0)] = cljs$core$async$mix_$_state_machine__27514__auto__);

(statearr_28658[(1)] = (1));

return statearr_28658;
});
var cljs$core$async$mix_$_state_machine__27514__auto____1 = (function (state_28602){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_28602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e28659){if((e28659 instanceof Object)){
var ex__27517__auto__ = e28659;
var statearr_28660_28709 = state_28602;
(statearr_28660_28709[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28710 = state_28602;
state_28602 = G__28710;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27514__auto__ = function(state_28602){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27514__auto____1.call(this,state_28602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27514__auto____0;
cljs$core$async$mix_$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27514__auto____1;
return cljs$core$async$mix_$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___28662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27605__auto__ = (function (){var statearr_28661 = f__27604__auto__.call(null);
(statearr_28661[(6)] = c__27603__auto___28662);

return statearr_28661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___28662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28712 = arguments.length;
switch (G__28712) {
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
var G__28716 = arguments.length;
switch (G__28716) {
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
return (function (p1__28714_SHARP_){
if(cljs.core.truth_(p1__28714_SHARP_.call(null,topic))){
return p1__28714_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28714_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28717 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28718){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28718 = meta28718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28719,meta28718__$1){
var self__ = this;
var _28719__$1 = this;
return (new cljs.core.async.t_cljs$core$async28717(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28718__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28719){
var self__ = this;
var _28719__$1 = this;
return self__.meta28718;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28718","meta28718",1860997832,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28717";

cljs.core.async.t_cljs$core$async28717.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28717");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28717.
 */
cljs.core.async.__GT_t_cljs$core$async28717 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28718){
return (new cljs.core.async.t_cljs$core$async28717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28718));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28717(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27603__auto___28837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___28837,mults,ensure_mult,p){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___28837,mults,ensure_mult,p){
return (function (state_28791){
var state_val_28792 = (state_28791[(1)]);
if((state_val_28792 === (7))){
var inst_28787 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28793_28838 = state_28791__$1;
(statearr_28793_28838[(2)] = inst_28787);

(statearr_28793_28838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (20))){
var state_28791__$1 = state_28791;
var statearr_28794_28839 = state_28791__$1;
(statearr_28794_28839[(2)] = null);

(statearr_28794_28839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (1))){
var state_28791__$1 = state_28791;
var statearr_28795_28840 = state_28791__$1;
(statearr_28795_28840[(2)] = null);

(statearr_28795_28840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (24))){
var inst_28770 = (state_28791[(7)]);
var inst_28779 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28770);
var state_28791__$1 = state_28791;
var statearr_28796_28841 = state_28791__$1;
(statearr_28796_28841[(2)] = inst_28779);

(statearr_28796_28841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (4))){
var inst_28722 = (state_28791[(8)]);
var inst_28722__$1 = (state_28791[(2)]);
var inst_28723 = (inst_28722__$1 == null);
var state_28791__$1 = (function (){var statearr_28797 = state_28791;
(statearr_28797[(8)] = inst_28722__$1);

return statearr_28797;
})();
if(cljs.core.truth_(inst_28723)){
var statearr_28798_28842 = state_28791__$1;
(statearr_28798_28842[(1)] = (5));

} else {
var statearr_28799_28843 = state_28791__$1;
(statearr_28799_28843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (15))){
var inst_28764 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28800_28844 = state_28791__$1;
(statearr_28800_28844[(2)] = inst_28764);

(statearr_28800_28844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (21))){
var inst_28784 = (state_28791[(2)]);
var state_28791__$1 = (function (){var statearr_28801 = state_28791;
(statearr_28801[(9)] = inst_28784);

return statearr_28801;
})();
var statearr_28802_28845 = state_28791__$1;
(statearr_28802_28845[(2)] = null);

(statearr_28802_28845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (13))){
var inst_28746 = (state_28791[(10)]);
var inst_28748 = cljs.core.chunked_seq_QMARK_.call(null,inst_28746);
var state_28791__$1 = state_28791;
if(inst_28748){
var statearr_28803_28846 = state_28791__$1;
(statearr_28803_28846[(1)] = (16));

} else {
var statearr_28804_28847 = state_28791__$1;
(statearr_28804_28847[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (22))){
var inst_28776 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
if(cljs.core.truth_(inst_28776)){
var statearr_28805_28848 = state_28791__$1;
(statearr_28805_28848[(1)] = (23));

} else {
var statearr_28806_28849 = state_28791__$1;
(statearr_28806_28849[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (6))){
var inst_28770 = (state_28791[(7)]);
var inst_28722 = (state_28791[(8)]);
var inst_28772 = (state_28791[(11)]);
var inst_28770__$1 = topic_fn.call(null,inst_28722);
var inst_28771 = cljs.core.deref.call(null,mults);
var inst_28772__$1 = cljs.core.get.call(null,inst_28771,inst_28770__$1);
var state_28791__$1 = (function (){var statearr_28807 = state_28791;
(statearr_28807[(7)] = inst_28770__$1);

(statearr_28807[(11)] = inst_28772__$1);

return statearr_28807;
})();
if(cljs.core.truth_(inst_28772__$1)){
var statearr_28808_28850 = state_28791__$1;
(statearr_28808_28850[(1)] = (19));

} else {
var statearr_28809_28851 = state_28791__$1;
(statearr_28809_28851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (25))){
var inst_28781 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28810_28852 = state_28791__$1;
(statearr_28810_28852[(2)] = inst_28781);

(statearr_28810_28852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (17))){
var inst_28746 = (state_28791[(10)]);
var inst_28755 = cljs.core.first.call(null,inst_28746);
var inst_28756 = cljs.core.async.muxch_STAR_.call(null,inst_28755);
var inst_28757 = cljs.core.async.close_BANG_.call(null,inst_28756);
var inst_28758 = cljs.core.next.call(null,inst_28746);
var inst_28732 = inst_28758;
var inst_28733 = null;
var inst_28734 = (0);
var inst_28735 = (0);
var state_28791__$1 = (function (){var statearr_28811 = state_28791;
(statearr_28811[(12)] = inst_28757);

(statearr_28811[(13)] = inst_28733);

(statearr_28811[(14)] = inst_28735);

(statearr_28811[(15)] = inst_28732);

(statearr_28811[(16)] = inst_28734);

return statearr_28811;
})();
var statearr_28812_28853 = state_28791__$1;
(statearr_28812_28853[(2)] = null);

(statearr_28812_28853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (3))){
var inst_28789 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28791__$1,inst_28789);
} else {
if((state_val_28792 === (12))){
var inst_28766 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28813_28854 = state_28791__$1;
(statearr_28813_28854[(2)] = inst_28766);

(statearr_28813_28854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (2))){
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28791__$1,(4),ch);
} else {
if((state_val_28792 === (23))){
var state_28791__$1 = state_28791;
var statearr_28814_28855 = state_28791__$1;
(statearr_28814_28855[(2)] = null);

(statearr_28814_28855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (19))){
var inst_28722 = (state_28791[(8)]);
var inst_28772 = (state_28791[(11)]);
var inst_28774 = cljs.core.async.muxch_STAR_.call(null,inst_28772);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28791__$1,(22),inst_28774,inst_28722);
} else {
if((state_val_28792 === (11))){
var inst_28746 = (state_28791[(10)]);
var inst_28732 = (state_28791[(15)]);
var inst_28746__$1 = cljs.core.seq.call(null,inst_28732);
var state_28791__$1 = (function (){var statearr_28815 = state_28791;
(statearr_28815[(10)] = inst_28746__$1);

return statearr_28815;
})();
if(inst_28746__$1){
var statearr_28816_28856 = state_28791__$1;
(statearr_28816_28856[(1)] = (13));

} else {
var statearr_28817_28857 = state_28791__$1;
(statearr_28817_28857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (9))){
var inst_28768 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28818_28858 = state_28791__$1;
(statearr_28818_28858[(2)] = inst_28768);

(statearr_28818_28858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (5))){
var inst_28729 = cljs.core.deref.call(null,mults);
var inst_28730 = cljs.core.vals.call(null,inst_28729);
var inst_28731 = cljs.core.seq.call(null,inst_28730);
var inst_28732 = inst_28731;
var inst_28733 = null;
var inst_28734 = (0);
var inst_28735 = (0);
var state_28791__$1 = (function (){var statearr_28819 = state_28791;
(statearr_28819[(13)] = inst_28733);

(statearr_28819[(14)] = inst_28735);

(statearr_28819[(15)] = inst_28732);

(statearr_28819[(16)] = inst_28734);

return statearr_28819;
})();
var statearr_28820_28859 = state_28791__$1;
(statearr_28820_28859[(2)] = null);

(statearr_28820_28859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (14))){
var state_28791__$1 = state_28791;
var statearr_28824_28860 = state_28791__$1;
(statearr_28824_28860[(2)] = null);

(statearr_28824_28860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (16))){
var inst_28746 = (state_28791[(10)]);
var inst_28750 = cljs.core.chunk_first.call(null,inst_28746);
var inst_28751 = cljs.core.chunk_rest.call(null,inst_28746);
var inst_28752 = cljs.core.count.call(null,inst_28750);
var inst_28732 = inst_28751;
var inst_28733 = inst_28750;
var inst_28734 = inst_28752;
var inst_28735 = (0);
var state_28791__$1 = (function (){var statearr_28825 = state_28791;
(statearr_28825[(13)] = inst_28733);

(statearr_28825[(14)] = inst_28735);

(statearr_28825[(15)] = inst_28732);

(statearr_28825[(16)] = inst_28734);

return statearr_28825;
})();
var statearr_28826_28861 = state_28791__$1;
(statearr_28826_28861[(2)] = null);

(statearr_28826_28861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (10))){
var inst_28733 = (state_28791[(13)]);
var inst_28735 = (state_28791[(14)]);
var inst_28732 = (state_28791[(15)]);
var inst_28734 = (state_28791[(16)]);
var inst_28740 = cljs.core._nth.call(null,inst_28733,inst_28735);
var inst_28741 = cljs.core.async.muxch_STAR_.call(null,inst_28740);
var inst_28742 = cljs.core.async.close_BANG_.call(null,inst_28741);
var inst_28743 = (inst_28735 + (1));
var tmp28821 = inst_28733;
var tmp28822 = inst_28732;
var tmp28823 = inst_28734;
var inst_28732__$1 = tmp28822;
var inst_28733__$1 = tmp28821;
var inst_28734__$1 = tmp28823;
var inst_28735__$1 = inst_28743;
var state_28791__$1 = (function (){var statearr_28827 = state_28791;
(statearr_28827[(13)] = inst_28733__$1);

(statearr_28827[(17)] = inst_28742);

(statearr_28827[(14)] = inst_28735__$1);

(statearr_28827[(15)] = inst_28732__$1);

(statearr_28827[(16)] = inst_28734__$1);

return statearr_28827;
})();
var statearr_28828_28862 = state_28791__$1;
(statearr_28828_28862[(2)] = null);

(statearr_28828_28862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (18))){
var inst_28761 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28829_28863 = state_28791__$1;
(statearr_28829_28863[(2)] = inst_28761);

(statearr_28829_28863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (8))){
var inst_28735 = (state_28791[(14)]);
var inst_28734 = (state_28791[(16)]);
var inst_28737 = (inst_28735 < inst_28734);
var inst_28738 = inst_28737;
var state_28791__$1 = state_28791;
if(cljs.core.truth_(inst_28738)){
var statearr_28830_28864 = state_28791__$1;
(statearr_28830_28864[(1)] = (10));

} else {
var statearr_28831_28865 = state_28791__$1;
(statearr_28831_28865[(1)] = (11));

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
});})(c__27603__auto___28837,mults,ensure_mult,p))
;
return ((function (switch__27513__auto__,c__27603__auto___28837,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_28832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28832[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_28832[(1)] = (1));

return statearr_28832;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_28791){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_28791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e28833){if((e28833 instanceof Object)){
var ex__27517__auto__ = e28833;
var statearr_28834_28866 = state_28791;
(statearr_28834_28866[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28867 = state_28791;
state_28791 = G__28867;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_28791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_28791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___28837,mults,ensure_mult,p))
})();
var state__27605__auto__ = (function (){var statearr_28835 = f__27604__auto__.call(null);
(statearr_28835[(6)] = c__27603__auto___28837);

return statearr_28835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___28837,mults,ensure_mult,p))
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
var G__28869 = arguments.length;
switch (G__28869) {
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
var G__28872 = arguments.length;
switch (G__28872) {
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
var G__28875 = arguments.length;
switch (G__28875) {
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
var c__27603__auto___28942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___28942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___28942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28914){
var state_val_28915 = (state_28914[(1)]);
if((state_val_28915 === (7))){
var state_28914__$1 = state_28914;
var statearr_28916_28943 = state_28914__$1;
(statearr_28916_28943[(2)] = null);

(statearr_28916_28943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (1))){
var state_28914__$1 = state_28914;
var statearr_28917_28944 = state_28914__$1;
(statearr_28917_28944[(2)] = null);

(statearr_28917_28944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (4))){
var inst_28878 = (state_28914[(7)]);
var inst_28880 = (inst_28878 < cnt);
var state_28914__$1 = state_28914;
if(cljs.core.truth_(inst_28880)){
var statearr_28918_28945 = state_28914__$1;
(statearr_28918_28945[(1)] = (6));

} else {
var statearr_28919_28946 = state_28914__$1;
(statearr_28919_28946[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (15))){
var inst_28910 = (state_28914[(2)]);
var state_28914__$1 = state_28914;
var statearr_28920_28947 = state_28914__$1;
(statearr_28920_28947[(2)] = inst_28910);

(statearr_28920_28947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (13))){
var inst_28903 = cljs.core.async.close_BANG_.call(null,out);
var state_28914__$1 = state_28914;
var statearr_28921_28948 = state_28914__$1;
(statearr_28921_28948[(2)] = inst_28903);

(statearr_28921_28948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (6))){
var state_28914__$1 = state_28914;
var statearr_28922_28949 = state_28914__$1;
(statearr_28922_28949[(2)] = null);

(statearr_28922_28949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (3))){
var inst_28912 = (state_28914[(2)]);
var state_28914__$1 = state_28914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28914__$1,inst_28912);
} else {
if((state_val_28915 === (12))){
var inst_28900 = (state_28914[(8)]);
var inst_28900__$1 = (state_28914[(2)]);
var inst_28901 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28900__$1);
var state_28914__$1 = (function (){var statearr_28923 = state_28914;
(statearr_28923[(8)] = inst_28900__$1);

return statearr_28923;
})();
if(cljs.core.truth_(inst_28901)){
var statearr_28924_28950 = state_28914__$1;
(statearr_28924_28950[(1)] = (13));

} else {
var statearr_28925_28951 = state_28914__$1;
(statearr_28925_28951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (2))){
var inst_28877 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28878 = (0);
var state_28914__$1 = (function (){var statearr_28926 = state_28914;
(statearr_28926[(9)] = inst_28877);

(statearr_28926[(7)] = inst_28878);

return statearr_28926;
})();
var statearr_28927_28952 = state_28914__$1;
(statearr_28927_28952[(2)] = null);

(statearr_28927_28952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (11))){
var inst_28878 = (state_28914[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28914,(10),Object,null,(9));
var inst_28887 = chs__$1.call(null,inst_28878);
var inst_28888 = done.call(null,inst_28878);
var inst_28889 = cljs.core.async.take_BANG_.call(null,inst_28887,inst_28888);
var state_28914__$1 = state_28914;
var statearr_28928_28953 = state_28914__$1;
(statearr_28928_28953[(2)] = inst_28889);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (9))){
var inst_28878 = (state_28914[(7)]);
var inst_28891 = (state_28914[(2)]);
var inst_28892 = (inst_28878 + (1));
var inst_28878__$1 = inst_28892;
var state_28914__$1 = (function (){var statearr_28929 = state_28914;
(statearr_28929[(10)] = inst_28891);

(statearr_28929[(7)] = inst_28878__$1);

return statearr_28929;
})();
var statearr_28930_28954 = state_28914__$1;
(statearr_28930_28954[(2)] = null);

(statearr_28930_28954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (5))){
var inst_28898 = (state_28914[(2)]);
var state_28914__$1 = (function (){var statearr_28931 = state_28914;
(statearr_28931[(11)] = inst_28898);

return statearr_28931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28914__$1,(12),dchan);
} else {
if((state_val_28915 === (14))){
var inst_28900 = (state_28914[(8)]);
var inst_28905 = cljs.core.apply.call(null,f,inst_28900);
var state_28914__$1 = state_28914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28914__$1,(16),out,inst_28905);
} else {
if((state_val_28915 === (16))){
var inst_28907 = (state_28914[(2)]);
var state_28914__$1 = (function (){var statearr_28932 = state_28914;
(statearr_28932[(12)] = inst_28907);

return statearr_28932;
})();
var statearr_28933_28955 = state_28914__$1;
(statearr_28933_28955[(2)] = null);

(statearr_28933_28955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (10))){
var inst_28882 = (state_28914[(2)]);
var inst_28883 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28914__$1 = (function (){var statearr_28934 = state_28914;
(statearr_28934[(13)] = inst_28882);

return statearr_28934;
})();
var statearr_28935_28956 = state_28914__$1;
(statearr_28935_28956[(2)] = inst_28883);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (8))){
var inst_28896 = (state_28914[(2)]);
var state_28914__$1 = state_28914;
var statearr_28936_28957 = state_28914__$1;
(statearr_28936_28957[(2)] = inst_28896);

(statearr_28936_28957[(1)] = (5));


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
});})(c__27603__auto___28942,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27513__auto__,c__27603__auto___28942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_28937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28937[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_28937[(1)] = (1));

return statearr_28937;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_28914){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_28914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e28938){if((e28938 instanceof Object)){
var ex__27517__auto__ = e28938;
var statearr_28939_28958 = state_28914;
(statearr_28939_28958[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28959 = state_28914;
state_28914 = G__28959;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_28914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_28914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___28942,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27605__auto__ = (function (){var statearr_28940 = f__27604__auto__.call(null);
(statearr_28940[(6)] = c__27603__auto___28942);

return statearr_28940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___28942,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28962 = arguments.length;
switch (G__28962) {
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
var c__27603__auto___29016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___29016,out){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___29016,out){
return (function (state_28994){
var state_val_28995 = (state_28994[(1)]);
if((state_val_28995 === (7))){
var inst_28973 = (state_28994[(7)]);
var inst_28974 = (state_28994[(8)]);
var inst_28973__$1 = (state_28994[(2)]);
var inst_28974__$1 = cljs.core.nth.call(null,inst_28973__$1,(0),null);
var inst_28975 = cljs.core.nth.call(null,inst_28973__$1,(1),null);
var inst_28976 = (inst_28974__$1 == null);
var state_28994__$1 = (function (){var statearr_28996 = state_28994;
(statearr_28996[(7)] = inst_28973__$1);

(statearr_28996[(9)] = inst_28975);

(statearr_28996[(8)] = inst_28974__$1);

return statearr_28996;
})();
if(cljs.core.truth_(inst_28976)){
var statearr_28997_29017 = state_28994__$1;
(statearr_28997_29017[(1)] = (8));

} else {
var statearr_28998_29018 = state_28994__$1;
(statearr_28998_29018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (1))){
var inst_28963 = cljs.core.vec.call(null,chs);
var inst_28964 = inst_28963;
var state_28994__$1 = (function (){var statearr_28999 = state_28994;
(statearr_28999[(10)] = inst_28964);

return statearr_28999;
})();
var statearr_29000_29019 = state_28994__$1;
(statearr_29000_29019[(2)] = null);

(statearr_29000_29019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (4))){
var inst_28964 = (state_28994[(10)]);
var state_28994__$1 = state_28994;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28994__$1,(7),inst_28964);
} else {
if((state_val_28995 === (6))){
var inst_28990 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29001_29020 = state_28994__$1;
(statearr_29001_29020[(2)] = inst_28990);

(statearr_29001_29020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (3))){
var inst_28992 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28994__$1,inst_28992);
} else {
if((state_val_28995 === (2))){
var inst_28964 = (state_28994[(10)]);
var inst_28966 = cljs.core.count.call(null,inst_28964);
var inst_28967 = (inst_28966 > (0));
var state_28994__$1 = state_28994;
if(cljs.core.truth_(inst_28967)){
var statearr_29003_29021 = state_28994__$1;
(statearr_29003_29021[(1)] = (4));

} else {
var statearr_29004_29022 = state_28994__$1;
(statearr_29004_29022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (11))){
var inst_28964 = (state_28994[(10)]);
var inst_28983 = (state_28994[(2)]);
var tmp29002 = inst_28964;
var inst_28964__$1 = tmp29002;
var state_28994__$1 = (function (){var statearr_29005 = state_28994;
(statearr_29005[(11)] = inst_28983);

(statearr_29005[(10)] = inst_28964__$1);

return statearr_29005;
})();
var statearr_29006_29023 = state_28994__$1;
(statearr_29006_29023[(2)] = null);

(statearr_29006_29023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (9))){
var inst_28974 = (state_28994[(8)]);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28994__$1,(11),out,inst_28974);
} else {
if((state_val_28995 === (5))){
var inst_28988 = cljs.core.async.close_BANG_.call(null,out);
var state_28994__$1 = state_28994;
var statearr_29007_29024 = state_28994__$1;
(statearr_29007_29024[(2)] = inst_28988);

(statearr_29007_29024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (10))){
var inst_28986 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29008_29025 = state_28994__$1;
(statearr_29008_29025[(2)] = inst_28986);

(statearr_29008_29025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (8))){
var inst_28973 = (state_28994[(7)]);
var inst_28964 = (state_28994[(10)]);
var inst_28975 = (state_28994[(9)]);
var inst_28974 = (state_28994[(8)]);
var inst_28978 = (function (){var cs = inst_28964;
var vec__28969 = inst_28973;
var v = inst_28974;
var c = inst_28975;
return ((function (cs,vec__28969,v,c,inst_28973,inst_28964,inst_28975,inst_28974,state_val_28995,c__27603__auto___29016,out){
return (function (p1__28960_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28960_SHARP_);
});
;})(cs,vec__28969,v,c,inst_28973,inst_28964,inst_28975,inst_28974,state_val_28995,c__27603__auto___29016,out))
})();
var inst_28979 = cljs.core.filterv.call(null,inst_28978,inst_28964);
var inst_28964__$1 = inst_28979;
var state_28994__$1 = (function (){var statearr_29009 = state_28994;
(statearr_29009[(10)] = inst_28964__$1);

return statearr_29009;
})();
var statearr_29010_29026 = state_28994__$1;
(statearr_29010_29026[(2)] = null);

(statearr_29010_29026[(1)] = (2));


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
});})(c__27603__auto___29016,out))
;
return ((function (switch__27513__auto__,c__27603__auto___29016,out){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_29011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29011[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_29011[(1)] = (1));

return statearr_29011;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_28994){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_28994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e29012){if((e29012 instanceof Object)){
var ex__27517__auto__ = e29012;
var statearr_29013_29027 = state_28994;
(statearr_29013_29027[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29028 = state_28994;
state_28994 = G__29028;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_28994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_28994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___29016,out))
})();
var state__27605__auto__ = (function (){var statearr_29014 = f__27604__auto__.call(null);
(statearr_29014[(6)] = c__27603__auto___29016);

return statearr_29014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___29016,out))
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
var G__29030 = arguments.length;
switch (G__29030) {
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
var c__27603__auto___29075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___29075,out){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___29075,out){
return (function (state_29054){
var state_val_29055 = (state_29054[(1)]);
if((state_val_29055 === (7))){
var inst_29036 = (state_29054[(7)]);
var inst_29036__$1 = (state_29054[(2)]);
var inst_29037 = (inst_29036__$1 == null);
var inst_29038 = cljs.core.not.call(null,inst_29037);
var state_29054__$1 = (function (){var statearr_29056 = state_29054;
(statearr_29056[(7)] = inst_29036__$1);

return statearr_29056;
})();
if(inst_29038){
var statearr_29057_29076 = state_29054__$1;
(statearr_29057_29076[(1)] = (8));

} else {
var statearr_29058_29077 = state_29054__$1;
(statearr_29058_29077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (1))){
var inst_29031 = (0);
var state_29054__$1 = (function (){var statearr_29059 = state_29054;
(statearr_29059[(8)] = inst_29031);

return statearr_29059;
})();
var statearr_29060_29078 = state_29054__$1;
(statearr_29060_29078[(2)] = null);

(statearr_29060_29078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (4))){
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29054__$1,(7),ch);
} else {
if((state_val_29055 === (6))){
var inst_29049 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29061_29079 = state_29054__$1;
(statearr_29061_29079[(2)] = inst_29049);

(statearr_29061_29079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (3))){
var inst_29051 = (state_29054[(2)]);
var inst_29052 = cljs.core.async.close_BANG_.call(null,out);
var state_29054__$1 = (function (){var statearr_29062 = state_29054;
(statearr_29062[(9)] = inst_29051);

return statearr_29062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29054__$1,inst_29052);
} else {
if((state_val_29055 === (2))){
var inst_29031 = (state_29054[(8)]);
var inst_29033 = (inst_29031 < n);
var state_29054__$1 = state_29054;
if(cljs.core.truth_(inst_29033)){
var statearr_29063_29080 = state_29054__$1;
(statearr_29063_29080[(1)] = (4));

} else {
var statearr_29064_29081 = state_29054__$1;
(statearr_29064_29081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (11))){
var inst_29031 = (state_29054[(8)]);
var inst_29041 = (state_29054[(2)]);
var inst_29042 = (inst_29031 + (1));
var inst_29031__$1 = inst_29042;
var state_29054__$1 = (function (){var statearr_29065 = state_29054;
(statearr_29065[(8)] = inst_29031__$1);

(statearr_29065[(10)] = inst_29041);

return statearr_29065;
})();
var statearr_29066_29082 = state_29054__$1;
(statearr_29066_29082[(2)] = null);

(statearr_29066_29082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (9))){
var state_29054__$1 = state_29054;
var statearr_29067_29083 = state_29054__$1;
(statearr_29067_29083[(2)] = null);

(statearr_29067_29083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (5))){
var state_29054__$1 = state_29054;
var statearr_29068_29084 = state_29054__$1;
(statearr_29068_29084[(2)] = null);

(statearr_29068_29084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (10))){
var inst_29046 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29069_29085 = state_29054__$1;
(statearr_29069_29085[(2)] = inst_29046);

(statearr_29069_29085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (8))){
var inst_29036 = (state_29054[(7)]);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29054__$1,(11),out,inst_29036);
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
});})(c__27603__auto___29075,out))
;
return ((function (switch__27513__auto__,c__27603__auto___29075,out){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_29070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29070[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_29070[(1)] = (1));

return statearr_29070;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_29054){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_29054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e29071){if((e29071 instanceof Object)){
var ex__27517__auto__ = e29071;
var statearr_29072_29086 = state_29054;
(statearr_29072_29086[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29087 = state_29054;
state_29054 = G__29087;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_29054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_29054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___29075,out))
})();
var state__27605__auto__ = (function (){var statearr_29073 = f__27604__auto__.call(null);
(statearr_29073[(6)] = c__27603__auto___29075);

return statearr_29073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___29075,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29089 = (function (f,ch,meta29090){
this.f = f;
this.ch = ch;
this.meta29090 = meta29090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29091,meta29090__$1){
var self__ = this;
var _29091__$1 = this;
return (new cljs.core.async.t_cljs$core$async29089(self__.f,self__.ch,meta29090__$1));
});

cljs.core.async.t_cljs$core$async29089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29091){
var self__ = this;
var _29091__$1 = this;
return self__.meta29090;
});

cljs.core.async.t_cljs$core$async29089.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29089.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29089.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29092 = (function (f,ch,meta29090,_,fn1,meta29093){
this.f = f;
this.ch = ch;
this.meta29090 = meta29090;
this._ = _;
this.fn1 = fn1;
this.meta29093 = meta29093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29094,meta29093__$1){
var self__ = this;
var _29094__$1 = this;
return (new cljs.core.async.t_cljs$core$async29092(self__.f,self__.ch,self__.meta29090,self__._,self__.fn1,meta29093__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29094){
var self__ = this;
var _29094__$1 = this;
return self__.meta29093;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29088_SHARP_){
return f1.call(null,(((p1__29088_SHARP_ == null))?null:self__.f.call(null,p1__29088_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29092.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29090","meta29090",-1278041554,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29089","cljs.core.async/t_cljs$core$async29089",-1508677812,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29093","meta29093",316440336,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29092";

cljs.core.async.t_cljs$core$async29092.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29092");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29092.
 */
cljs.core.async.__GT_t_cljs$core$async29092 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29092(f__$1,ch__$1,meta29090__$1,___$2,fn1__$1,meta29093){
return (new cljs.core.async.t_cljs$core$async29092(f__$1,ch__$1,meta29090__$1,___$2,fn1__$1,meta29093));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29092(self__.f,self__.ch,self__.meta29090,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29089.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29090","meta29090",-1278041554,null)], null);
});

cljs.core.async.t_cljs$core$async29089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29089";

cljs.core.async.t_cljs$core$async29089.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29089");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29089.
 */
cljs.core.async.__GT_t_cljs$core$async29089 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29089(f__$1,ch__$1,meta29090){
return (new cljs.core.async.t_cljs$core$async29089(f__$1,ch__$1,meta29090));
});

}

return (new cljs.core.async.t_cljs$core$async29089(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29095 = (function (f,ch,meta29096){
this.f = f;
this.ch = ch;
this.meta29096 = meta29096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29097,meta29096__$1){
var self__ = this;
var _29097__$1 = this;
return (new cljs.core.async.t_cljs$core$async29095(self__.f,self__.ch,meta29096__$1));
});

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29097){
var self__ = this;
var _29097__$1 = this;
return self__.meta29096;
});

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29096","meta29096",-1161138889,null)], null);
});

cljs.core.async.t_cljs$core$async29095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29095";

cljs.core.async.t_cljs$core$async29095.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29095");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29095.
 */
cljs.core.async.__GT_t_cljs$core$async29095 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29095(f__$1,ch__$1,meta29096){
return (new cljs.core.async.t_cljs$core$async29095(f__$1,ch__$1,meta29096));
});

}

return (new cljs.core.async.t_cljs$core$async29095(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29098 = (function (p,ch,meta29099){
this.p = p;
this.ch = ch;
this.meta29099 = meta29099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29100,meta29099__$1){
var self__ = this;
var _29100__$1 = this;
return (new cljs.core.async.t_cljs$core$async29098(self__.p,self__.ch,meta29099__$1));
});

cljs.core.async.t_cljs$core$async29098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29100){
var self__ = this;
var _29100__$1 = this;
return self__.meta29099;
});

cljs.core.async.t_cljs$core$async29098.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29098.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29098.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29098.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29098.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29098.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29098.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29099","meta29099",503842466,null)], null);
});

cljs.core.async.t_cljs$core$async29098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29098";

cljs.core.async.t_cljs$core$async29098.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29098");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29098.
 */
cljs.core.async.__GT_t_cljs$core$async29098 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29098(p__$1,ch__$1,meta29099){
return (new cljs.core.async.t_cljs$core$async29098(p__$1,ch__$1,meta29099));
});

}

return (new cljs.core.async.t_cljs$core$async29098(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29102 = arguments.length;
switch (G__29102) {
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
var c__27603__auto___29142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___29142,out){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___29142,out){
return (function (state_29123){
var state_val_29124 = (state_29123[(1)]);
if((state_val_29124 === (7))){
var inst_29119 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29125_29143 = state_29123__$1;
(statearr_29125_29143[(2)] = inst_29119);

(statearr_29125_29143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (1))){
var state_29123__$1 = state_29123;
var statearr_29126_29144 = state_29123__$1;
(statearr_29126_29144[(2)] = null);

(statearr_29126_29144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (4))){
var inst_29105 = (state_29123[(7)]);
var inst_29105__$1 = (state_29123[(2)]);
var inst_29106 = (inst_29105__$1 == null);
var state_29123__$1 = (function (){var statearr_29127 = state_29123;
(statearr_29127[(7)] = inst_29105__$1);

return statearr_29127;
})();
if(cljs.core.truth_(inst_29106)){
var statearr_29128_29145 = state_29123__$1;
(statearr_29128_29145[(1)] = (5));

} else {
var statearr_29129_29146 = state_29123__$1;
(statearr_29129_29146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (6))){
var inst_29105 = (state_29123[(7)]);
var inst_29110 = p.call(null,inst_29105);
var state_29123__$1 = state_29123;
if(cljs.core.truth_(inst_29110)){
var statearr_29130_29147 = state_29123__$1;
(statearr_29130_29147[(1)] = (8));

} else {
var statearr_29131_29148 = state_29123__$1;
(statearr_29131_29148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (3))){
var inst_29121 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29123__$1,inst_29121);
} else {
if((state_val_29124 === (2))){
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29123__$1,(4),ch);
} else {
if((state_val_29124 === (11))){
var inst_29113 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29132_29149 = state_29123__$1;
(statearr_29132_29149[(2)] = inst_29113);

(statearr_29132_29149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (9))){
var state_29123__$1 = state_29123;
var statearr_29133_29150 = state_29123__$1;
(statearr_29133_29150[(2)] = null);

(statearr_29133_29150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (5))){
var inst_29108 = cljs.core.async.close_BANG_.call(null,out);
var state_29123__$1 = state_29123;
var statearr_29134_29151 = state_29123__$1;
(statearr_29134_29151[(2)] = inst_29108);

(statearr_29134_29151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (10))){
var inst_29116 = (state_29123[(2)]);
var state_29123__$1 = (function (){var statearr_29135 = state_29123;
(statearr_29135[(8)] = inst_29116);

return statearr_29135;
})();
var statearr_29136_29152 = state_29123__$1;
(statearr_29136_29152[(2)] = null);

(statearr_29136_29152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (8))){
var inst_29105 = (state_29123[(7)]);
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29123__$1,(11),out,inst_29105);
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
});})(c__27603__auto___29142,out))
;
return ((function (switch__27513__auto__,c__27603__auto___29142,out){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_29137 = [null,null,null,null,null,null,null,null,null];
(statearr_29137[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_29137[(1)] = (1));

return statearr_29137;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_29123){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_29123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e29138){if((e29138 instanceof Object)){
var ex__27517__auto__ = e29138;
var statearr_29139_29153 = state_29123;
(statearr_29139_29153[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29154 = state_29123;
state_29123 = G__29154;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_29123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_29123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___29142,out))
})();
var state__27605__auto__ = (function (){var statearr_29140 = f__27604__auto__.call(null);
(statearr_29140[(6)] = c__27603__auto___29142);

return statearr_29140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___29142,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29156 = arguments.length;
switch (G__29156) {
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
var c__27603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto__){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto__){
return (function (state_29219){
var state_val_29220 = (state_29219[(1)]);
if((state_val_29220 === (7))){
var inst_29215 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29221_29259 = state_29219__$1;
(statearr_29221_29259[(2)] = inst_29215);

(statearr_29221_29259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (20))){
var inst_29185 = (state_29219[(7)]);
var inst_29196 = (state_29219[(2)]);
var inst_29197 = cljs.core.next.call(null,inst_29185);
var inst_29171 = inst_29197;
var inst_29172 = null;
var inst_29173 = (0);
var inst_29174 = (0);
var state_29219__$1 = (function (){var statearr_29222 = state_29219;
(statearr_29222[(8)] = inst_29171);

(statearr_29222[(9)] = inst_29172);

(statearr_29222[(10)] = inst_29173);

(statearr_29222[(11)] = inst_29196);

(statearr_29222[(12)] = inst_29174);

return statearr_29222;
})();
var statearr_29223_29260 = state_29219__$1;
(statearr_29223_29260[(2)] = null);

(statearr_29223_29260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (1))){
var state_29219__$1 = state_29219;
var statearr_29224_29261 = state_29219__$1;
(statearr_29224_29261[(2)] = null);

(statearr_29224_29261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (4))){
var inst_29160 = (state_29219[(13)]);
var inst_29160__$1 = (state_29219[(2)]);
var inst_29161 = (inst_29160__$1 == null);
var state_29219__$1 = (function (){var statearr_29225 = state_29219;
(statearr_29225[(13)] = inst_29160__$1);

return statearr_29225;
})();
if(cljs.core.truth_(inst_29161)){
var statearr_29226_29262 = state_29219__$1;
(statearr_29226_29262[(1)] = (5));

} else {
var statearr_29227_29263 = state_29219__$1;
(statearr_29227_29263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (15))){
var state_29219__$1 = state_29219;
var statearr_29231_29264 = state_29219__$1;
(statearr_29231_29264[(2)] = null);

(statearr_29231_29264[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (21))){
var state_29219__$1 = state_29219;
var statearr_29232_29265 = state_29219__$1;
(statearr_29232_29265[(2)] = null);

(statearr_29232_29265[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (13))){
var inst_29171 = (state_29219[(8)]);
var inst_29172 = (state_29219[(9)]);
var inst_29173 = (state_29219[(10)]);
var inst_29174 = (state_29219[(12)]);
var inst_29181 = (state_29219[(2)]);
var inst_29182 = (inst_29174 + (1));
var tmp29228 = inst_29171;
var tmp29229 = inst_29172;
var tmp29230 = inst_29173;
var inst_29171__$1 = tmp29228;
var inst_29172__$1 = tmp29229;
var inst_29173__$1 = tmp29230;
var inst_29174__$1 = inst_29182;
var state_29219__$1 = (function (){var statearr_29233 = state_29219;
(statearr_29233[(14)] = inst_29181);

(statearr_29233[(8)] = inst_29171__$1);

(statearr_29233[(9)] = inst_29172__$1);

(statearr_29233[(10)] = inst_29173__$1);

(statearr_29233[(12)] = inst_29174__$1);

return statearr_29233;
})();
var statearr_29234_29266 = state_29219__$1;
(statearr_29234_29266[(2)] = null);

(statearr_29234_29266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (22))){
var state_29219__$1 = state_29219;
var statearr_29235_29267 = state_29219__$1;
(statearr_29235_29267[(2)] = null);

(statearr_29235_29267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (6))){
var inst_29160 = (state_29219[(13)]);
var inst_29169 = f.call(null,inst_29160);
var inst_29170 = cljs.core.seq.call(null,inst_29169);
var inst_29171 = inst_29170;
var inst_29172 = null;
var inst_29173 = (0);
var inst_29174 = (0);
var state_29219__$1 = (function (){var statearr_29236 = state_29219;
(statearr_29236[(8)] = inst_29171);

(statearr_29236[(9)] = inst_29172);

(statearr_29236[(10)] = inst_29173);

(statearr_29236[(12)] = inst_29174);

return statearr_29236;
})();
var statearr_29237_29268 = state_29219__$1;
(statearr_29237_29268[(2)] = null);

(statearr_29237_29268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (17))){
var inst_29185 = (state_29219[(7)]);
var inst_29189 = cljs.core.chunk_first.call(null,inst_29185);
var inst_29190 = cljs.core.chunk_rest.call(null,inst_29185);
var inst_29191 = cljs.core.count.call(null,inst_29189);
var inst_29171 = inst_29190;
var inst_29172 = inst_29189;
var inst_29173 = inst_29191;
var inst_29174 = (0);
var state_29219__$1 = (function (){var statearr_29238 = state_29219;
(statearr_29238[(8)] = inst_29171);

(statearr_29238[(9)] = inst_29172);

(statearr_29238[(10)] = inst_29173);

(statearr_29238[(12)] = inst_29174);

return statearr_29238;
})();
var statearr_29239_29269 = state_29219__$1;
(statearr_29239_29269[(2)] = null);

(statearr_29239_29269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (3))){
var inst_29217 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29219__$1,inst_29217);
} else {
if((state_val_29220 === (12))){
var inst_29205 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29240_29270 = state_29219__$1;
(statearr_29240_29270[(2)] = inst_29205);

(statearr_29240_29270[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (2))){
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29219__$1,(4),in$);
} else {
if((state_val_29220 === (23))){
var inst_29213 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29241_29271 = state_29219__$1;
(statearr_29241_29271[(2)] = inst_29213);

(statearr_29241_29271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (19))){
var inst_29200 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29242_29272 = state_29219__$1;
(statearr_29242_29272[(2)] = inst_29200);

(statearr_29242_29272[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (11))){
var inst_29171 = (state_29219[(8)]);
var inst_29185 = (state_29219[(7)]);
var inst_29185__$1 = cljs.core.seq.call(null,inst_29171);
var state_29219__$1 = (function (){var statearr_29243 = state_29219;
(statearr_29243[(7)] = inst_29185__$1);

return statearr_29243;
})();
if(inst_29185__$1){
var statearr_29244_29273 = state_29219__$1;
(statearr_29244_29273[(1)] = (14));

} else {
var statearr_29245_29274 = state_29219__$1;
(statearr_29245_29274[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (9))){
var inst_29207 = (state_29219[(2)]);
var inst_29208 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29219__$1 = (function (){var statearr_29246 = state_29219;
(statearr_29246[(15)] = inst_29207);

return statearr_29246;
})();
if(cljs.core.truth_(inst_29208)){
var statearr_29247_29275 = state_29219__$1;
(statearr_29247_29275[(1)] = (21));

} else {
var statearr_29248_29276 = state_29219__$1;
(statearr_29248_29276[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (5))){
var inst_29163 = cljs.core.async.close_BANG_.call(null,out);
var state_29219__$1 = state_29219;
var statearr_29249_29277 = state_29219__$1;
(statearr_29249_29277[(2)] = inst_29163);

(statearr_29249_29277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (14))){
var inst_29185 = (state_29219[(7)]);
var inst_29187 = cljs.core.chunked_seq_QMARK_.call(null,inst_29185);
var state_29219__$1 = state_29219;
if(inst_29187){
var statearr_29250_29278 = state_29219__$1;
(statearr_29250_29278[(1)] = (17));

} else {
var statearr_29251_29279 = state_29219__$1;
(statearr_29251_29279[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (16))){
var inst_29203 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29252_29280 = state_29219__$1;
(statearr_29252_29280[(2)] = inst_29203);

(statearr_29252_29280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (10))){
var inst_29172 = (state_29219[(9)]);
var inst_29174 = (state_29219[(12)]);
var inst_29179 = cljs.core._nth.call(null,inst_29172,inst_29174);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29219__$1,(13),out,inst_29179);
} else {
if((state_val_29220 === (18))){
var inst_29185 = (state_29219[(7)]);
var inst_29194 = cljs.core.first.call(null,inst_29185);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29219__$1,(20),out,inst_29194);
} else {
if((state_val_29220 === (8))){
var inst_29173 = (state_29219[(10)]);
var inst_29174 = (state_29219[(12)]);
var inst_29176 = (inst_29174 < inst_29173);
var inst_29177 = inst_29176;
var state_29219__$1 = state_29219;
if(cljs.core.truth_(inst_29177)){
var statearr_29253_29281 = state_29219__$1;
(statearr_29253_29281[(1)] = (10));

} else {
var statearr_29254_29282 = state_29219__$1;
(statearr_29254_29282[(1)] = (11));

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
});})(c__27603__auto__))
;
return ((function (switch__27513__auto__,c__27603__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27514__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27514__auto____0 = (function (){
var statearr_29255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29255[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27514__auto__);

(statearr_29255[(1)] = (1));

return statearr_29255;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27514__auto____1 = (function (state_29219){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_29219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e29256){if((e29256 instanceof Object)){
var ex__27517__auto__ = e29256;
var statearr_29257_29283 = state_29219;
(statearr_29257_29283[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29284 = state_29219;
state_29219 = G__29284;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27514__auto__ = function(state_29219){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27514__auto____1.call(this,state_29219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27514__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27514__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto__))
})();
var state__27605__auto__ = (function (){var statearr_29258 = f__27604__auto__.call(null);
(statearr_29258[(6)] = c__27603__auto__);

return statearr_29258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto__))
);

return c__27603__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29286 = arguments.length;
switch (G__29286) {
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
var G__29289 = arguments.length;
switch (G__29289) {
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
var G__29292 = arguments.length;
switch (G__29292) {
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
var c__27603__auto___29339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___29339,out){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___29339,out){
return (function (state_29316){
var state_val_29317 = (state_29316[(1)]);
if((state_val_29317 === (7))){
var inst_29311 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29318_29340 = state_29316__$1;
(statearr_29318_29340[(2)] = inst_29311);

(statearr_29318_29340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (1))){
var inst_29293 = null;
var state_29316__$1 = (function (){var statearr_29319 = state_29316;
(statearr_29319[(7)] = inst_29293);

return statearr_29319;
})();
var statearr_29320_29341 = state_29316__$1;
(statearr_29320_29341[(2)] = null);

(statearr_29320_29341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (4))){
var inst_29296 = (state_29316[(8)]);
var inst_29296__$1 = (state_29316[(2)]);
var inst_29297 = (inst_29296__$1 == null);
var inst_29298 = cljs.core.not.call(null,inst_29297);
var state_29316__$1 = (function (){var statearr_29321 = state_29316;
(statearr_29321[(8)] = inst_29296__$1);

return statearr_29321;
})();
if(inst_29298){
var statearr_29322_29342 = state_29316__$1;
(statearr_29322_29342[(1)] = (5));

} else {
var statearr_29323_29343 = state_29316__$1;
(statearr_29323_29343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (6))){
var state_29316__$1 = state_29316;
var statearr_29324_29344 = state_29316__$1;
(statearr_29324_29344[(2)] = null);

(statearr_29324_29344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (3))){
var inst_29313 = (state_29316[(2)]);
var inst_29314 = cljs.core.async.close_BANG_.call(null,out);
var state_29316__$1 = (function (){var statearr_29325 = state_29316;
(statearr_29325[(9)] = inst_29313);

return statearr_29325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29316__$1,inst_29314);
} else {
if((state_val_29317 === (2))){
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29316__$1,(4),ch);
} else {
if((state_val_29317 === (11))){
var inst_29296 = (state_29316[(8)]);
var inst_29305 = (state_29316[(2)]);
var inst_29293 = inst_29296;
var state_29316__$1 = (function (){var statearr_29326 = state_29316;
(statearr_29326[(7)] = inst_29293);

(statearr_29326[(10)] = inst_29305);

return statearr_29326;
})();
var statearr_29327_29345 = state_29316__$1;
(statearr_29327_29345[(2)] = null);

(statearr_29327_29345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (9))){
var inst_29296 = (state_29316[(8)]);
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29316__$1,(11),out,inst_29296);
} else {
if((state_val_29317 === (5))){
var inst_29296 = (state_29316[(8)]);
var inst_29293 = (state_29316[(7)]);
var inst_29300 = cljs.core._EQ_.call(null,inst_29296,inst_29293);
var state_29316__$1 = state_29316;
if(inst_29300){
var statearr_29329_29346 = state_29316__$1;
(statearr_29329_29346[(1)] = (8));

} else {
var statearr_29330_29347 = state_29316__$1;
(statearr_29330_29347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (10))){
var inst_29308 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29331_29348 = state_29316__$1;
(statearr_29331_29348[(2)] = inst_29308);

(statearr_29331_29348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (8))){
var inst_29293 = (state_29316[(7)]);
var tmp29328 = inst_29293;
var inst_29293__$1 = tmp29328;
var state_29316__$1 = (function (){var statearr_29332 = state_29316;
(statearr_29332[(7)] = inst_29293__$1);

return statearr_29332;
})();
var statearr_29333_29349 = state_29316__$1;
(statearr_29333_29349[(2)] = null);

(statearr_29333_29349[(1)] = (2));


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
});})(c__27603__auto___29339,out))
;
return ((function (switch__27513__auto__,c__27603__auto___29339,out){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_29334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29334[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_29334[(1)] = (1));

return statearr_29334;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_29316){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_29316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e29335){if((e29335 instanceof Object)){
var ex__27517__auto__ = e29335;
var statearr_29336_29350 = state_29316;
(statearr_29336_29350[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29351 = state_29316;
state_29316 = G__29351;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_29316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_29316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___29339,out))
})();
var state__27605__auto__ = (function (){var statearr_29337 = f__27604__auto__.call(null);
(statearr_29337[(6)] = c__27603__auto___29339);

return statearr_29337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___29339,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29353 = arguments.length;
switch (G__29353) {
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
var c__27603__auto___29419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___29419,out){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___29419,out){
return (function (state_29391){
var state_val_29392 = (state_29391[(1)]);
if((state_val_29392 === (7))){
var inst_29387 = (state_29391[(2)]);
var state_29391__$1 = state_29391;
var statearr_29393_29420 = state_29391__$1;
(statearr_29393_29420[(2)] = inst_29387);

(statearr_29393_29420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29392 === (1))){
var inst_29354 = (new Array(n));
var inst_29355 = inst_29354;
var inst_29356 = (0);
var state_29391__$1 = (function (){var statearr_29394 = state_29391;
(statearr_29394[(7)] = inst_29356);

(statearr_29394[(8)] = inst_29355);

return statearr_29394;
})();
var statearr_29395_29421 = state_29391__$1;
(statearr_29395_29421[(2)] = null);

(statearr_29395_29421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29392 === (4))){
var inst_29359 = (state_29391[(9)]);
var inst_29359__$1 = (state_29391[(2)]);
var inst_29360 = (inst_29359__$1 == null);
var inst_29361 = cljs.core.not.call(null,inst_29360);
var state_29391__$1 = (function (){var statearr_29396 = state_29391;
(statearr_29396[(9)] = inst_29359__$1);

return statearr_29396;
})();
if(inst_29361){
var statearr_29397_29422 = state_29391__$1;
(statearr_29397_29422[(1)] = (5));

} else {
var statearr_29398_29423 = state_29391__$1;
(statearr_29398_29423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29392 === (15))){
var inst_29381 = (state_29391[(2)]);
var state_29391__$1 = state_29391;
var statearr_29399_29424 = state_29391__$1;
(statearr_29399_29424[(2)] = inst_29381);

(statearr_29399_29424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29392 === (13))){
var state_29391__$1 = state_29391;
var statearr_29400_29425 = state_29391__$1;
(statearr_29400_29425[(2)] = null);

(statearr_29400_29425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29392 === (6))){
var inst_29356 = (state_29391[(7)]);
var inst_29377 = (inst_29356 > (0));
var state_29391__$1 = state_29391;
if(cljs.core.truth_(inst_29377)){
var statearr_29401_29426 = state_29391__$1;
(statearr_29401_29426[(1)] = (12));

} else {
var statearr_29402_29427 = state_29391__$1;
(statearr_29402_29427[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29392 === (3))){
var inst_29389 = (state_29391[(2)]);
var state_29391__$1 = state_29391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29391__$1,inst_29389);
} else {
if((state_val_29392 === (12))){
var inst_29355 = (state_29391[(8)]);
var inst_29379 = cljs.core.vec.call(null,inst_29355);
var state_29391__$1 = state_29391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29391__$1,(15),out,inst_29379);
} else {
if((state_val_29392 === (2))){
var state_29391__$1 = state_29391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29391__$1,(4),ch);
} else {
if((state_val_29392 === (11))){
var inst_29371 = (state_29391[(2)]);
var inst_29372 = (new Array(n));
var inst_29355 = inst_29372;
var inst_29356 = (0);
var state_29391__$1 = (function (){var statearr_29403 = state_29391;
(statearr_29403[(7)] = inst_29356);

(statearr_29403[(10)] = inst_29371);

(statearr_29403[(8)] = inst_29355);

return statearr_29403;
})();
var statearr_29404_29428 = state_29391__$1;
(statearr_29404_29428[(2)] = null);

(statearr_29404_29428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29392 === (9))){
var inst_29355 = (state_29391[(8)]);
var inst_29369 = cljs.core.vec.call(null,inst_29355);
var state_29391__$1 = state_29391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29391__$1,(11),out,inst_29369);
} else {
if((state_val_29392 === (5))){
var inst_29356 = (state_29391[(7)]);
var inst_29359 = (state_29391[(9)]);
var inst_29355 = (state_29391[(8)]);
var inst_29364 = (state_29391[(11)]);
var inst_29363 = (inst_29355[inst_29356] = inst_29359);
var inst_29364__$1 = (inst_29356 + (1));
var inst_29365 = (inst_29364__$1 < n);
var state_29391__$1 = (function (){var statearr_29405 = state_29391;
(statearr_29405[(11)] = inst_29364__$1);

(statearr_29405[(12)] = inst_29363);

return statearr_29405;
})();
if(cljs.core.truth_(inst_29365)){
var statearr_29406_29429 = state_29391__$1;
(statearr_29406_29429[(1)] = (8));

} else {
var statearr_29407_29430 = state_29391__$1;
(statearr_29407_29430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29392 === (14))){
var inst_29384 = (state_29391[(2)]);
var inst_29385 = cljs.core.async.close_BANG_.call(null,out);
var state_29391__$1 = (function (){var statearr_29409 = state_29391;
(statearr_29409[(13)] = inst_29384);

return statearr_29409;
})();
var statearr_29410_29431 = state_29391__$1;
(statearr_29410_29431[(2)] = inst_29385);

(statearr_29410_29431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29392 === (10))){
var inst_29375 = (state_29391[(2)]);
var state_29391__$1 = state_29391;
var statearr_29411_29432 = state_29391__$1;
(statearr_29411_29432[(2)] = inst_29375);

(statearr_29411_29432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29392 === (8))){
var inst_29355 = (state_29391[(8)]);
var inst_29364 = (state_29391[(11)]);
var tmp29408 = inst_29355;
var inst_29355__$1 = tmp29408;
var inst_29356 = inst_29364;
var state_29391__$1 = (function (){var statearr_29412 = state_29391;
(statearr_29412[(7)] = inst_29356);

(statearr_29412[(8)] = inst_29355__$1);

return statearr_29412;
})();
var statearr_29413_29433 = state_29391__$1;
(statearr_29413_29433[(2)] = null);

(statearr_29413_29433[(1)] = (2));


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
});})(c__27603__auto___29419,out))
;
return ((function (switch__27513__auto__,c__27603__auto___29419,out){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_29414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29414[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_29414[(1)] = (1));

return statearr_29414;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_29391){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_29391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e29415){if((e29415 instanceof Object)){
var ex__27517__auto__ = e29415;
var statearr_29416_29434 = state_29391;
(statearr_29416_29434[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29435 = state_29391;
state_29391 = G__29435;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_29391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_29391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___29419,out))
})();
var state__27605__auto__ = (function (){var statearr_29417 = f__27604__auto__.call(null);
(statearr_29417[(6)] = c__27603__auto___29419);

return statearr_29417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___29419,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29437 = arguments.length;
switch (G__29437) {
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
var c__27603__auto___29507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27603__auto___29507,out){
return (function (){
var f__27604__auto__ = (function (){var switch__27513__auto__ = ((function (c__27603__auto___29507,out){
return (function (state_29479){
var state_val_29480 = (state_29479[(1)]);
if((state_val_29480 === (7))){
var inst_29475 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29481_29508 = state_29479__$1;
(statearr_29481_29508[(2)] = inst_29475);

(statearr_29481_29508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (1))){
var inst_29438 = [];
var inst_29439 = inst_29438;
var inst_29440 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29479__$1 = (function (){var statearr_29482 = state_29479;
(statearr_29482[(7)] = inst_29439);

(statearr_29482[(8)] = inst_29440);

return statearr_29482;
})();
var statearr_29483_29509 = state_29479__$1;
(statearr_29483_29509[(2)] = null);

(statearr_29483_29509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (4))){
var inst_29443 = (state_29479[(9)]);
var inst_29443__$1 = (state_29479[(2)]);
var inst_29444 = (inst_29443__$1 == null);
var inst_29445 = cljs.core.not.call(null,inst_29444);
var state_29479__$1 = (function (){var statearr_29484 = state_29479;
(statearr_29484[(9)] = inst_29443__$1);

return statearr_29484;
})();
if(inst_29445){
var statearr_29485_29510 = state_29479__$1;
(statearr_29485_29510[(1)] = (5));

} else {
var statearr_29486_29511 = state_29479__$1;
(statearr_29486_29511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (15))){
var inst_29469 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29487_29512 = state_29479__$1;
(statearr_29487_29512[(2)] = inst_29469);

(statearr_29487_29512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (13))){
var state_29479__$1 = state_29479;
var statearr_29488_29513 = state_29479__$1;
(statearr_29488_29513[(2)] = null);

(statearr_29488_29513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (6))){
var inst_29439 = (state_29479[(7)]);
var inst_29464 = inst_29439.length;
var inst_29465 = (inst_29464 > (0));
var state_29479__$1 = state_29479;
if(cljs.core.truth_(inst_29465)){
var statearr_29489_29514 = state_29479__$1;
(statearr_29489_29514[(1)] = (12));

} else {
var statearr_29490_29515 = state_29479__$1;
(statearr_29490_29515[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (3))){
var inst_29477 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29479__$1,inst_29477);
} else {
if((state_val_29480 === (12))){
var inst_29439 = (state_29479[(7)]);
var inst_29467 = cljs.core.vec.call(null,inst_29439);
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29479__$1,(15),out,inst_29467);
} else {
if((state_val_29480 === (2))){
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29479__$1,(4),ch);
} else {
if((state_val_29480 === (11))){
var inst_29443 = (state_29479[(9)]);
var inst_29447 = (state_29479[(10)]);
var inst_29457 = (state_29479[(2)]);
var inst_29458 = [];
var inst_29459 = inst_29458.push(inst_29443);
var inst_29439 = inst_29458;
var inst_29440 = inst_29447;
var state_29479__$1 = (function (){var statearr_29491 = state_29479;
(statearr_29491[(11)] = inst_29459);

(statearr_29491[(7)] = inst_29439);

(statearr_29491[(12)] = inst_29457);

(statearr_29491[(8)] = inst_29440);

return statearr_29491;
})();
var statearr_29492_29516 = state_29479__$1;
(statearr_29492_29516[(2)] = null);

(statearr_29492_29516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (9))){
var inst_29439 = (state_29479[(7)]);
var inst_29455 = cljs.core.vec.call(null,inst_29439);
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29479__$1,(11),out,inst_29455);
} else {
if((state_val_29480 === (5))){
var inst_29443 = (state_29479[(9)]);
var inst_29447 = (state_29479[(10)]);
var inst_29440 = (state_29479[(8)]);
var inst_29447__$1 = f.call(null,inst_29443);
var inst_29448 = cljs.core._EQ_.call(null,inst_29447__$1,inst_29440);
var inst_29449 = cljs.core.keyword_identical_QMARK_.call(null,inst_29440,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29450 = ((inst_29448) || (inst_29449));
var state_29479__$1 = (function (){var statearr_29493 = state_29479;
(statearr_29493[(10)] = inst_29447__$1);

return statearr_29493;
})();
if(cljs.core.truth_(inst_29450)){
var statearr_29494_29517 = state_29479__$1;
(statearr_29494_29517[(1)] = (8));

} else {
var statearr_29495_29518 = state_29479__$1;
(statearr_29495_29518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (14))){
var inst_29472 = (state_29479[(2)]);
var inst_29473 = cljs.core.async.close_BANG_.call(null,out);
var state_29479__$1 = (function (){var statearr_29497 = state_29479;
(statearr_29497[(13)] = inst_29472);

return statearr_29497;
})();
var statearr_29498_29519 = state_29479__$1;
(statearr_29498_29519[(2)] = inst_29473);

(statearr_29498_29519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (10))){
var inst_29462 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29499_29520 = state_29479__$1;
(statearr_29499_29520[(2)] = inst_29462);

(statearr_29499_29520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (8))){
var inst_29439 = (state_29479[(7)]);
var inst_29443 = (state_29479[(9)]);
var inst_29447 = (state_29479[(10)]);
var inst_29452 = inst_29439.push(inst_29443);
var tmp29496 = inst_29439;
var inst_29439__$1 = tmp29496;
var inst_29440 = inst_29447;
var state_29479__$1 = (function (){var statearr_29500 = state_29479;
(statearr_29500[(7)] = inst_29439__$1);

(statearr_29500[(14)] = inst_29452);

(statearr_29500[(8)] = inst_29440);

return statearr_29500;
})();
var statearr_29501_29521 = state_29479__$1;
(statearr_29501_29521[(2)] = null);

(statearr_29501_29521[(1)] = (2));


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
});})(c__27603__auto___29507,out))
;
return ((function (switch__27513__auto__,c__27603__auto___29507,out){
return (function() {
var cljs$core$async$state_machine__27514__auto__ = null;
var cljs$core$async$state_machine__27514__auto____0 = (function (){
var statearr_29502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29502[(0)] = cljs$core$async$state_machine__27514__auto__);

(statearr_29502[(1)] = (1));

return statearr_29502;
});
var cljs$core$async$state_machine__27514__auto____1 = (function (state_29479){
while(true){
var ret_value__27515__auto__ = (function (){try{while(true){
var result__27516__auto__ = switch__27513__auto__.call(null,state_29479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27516__auto__;
}
break;
}
}catch (e29503){if((e29503 instanceof Object)){
var ex__27517__auto__ = e29503;
var statearr_29504_29522 = state_29479;
(statearr_29504_29522[(5)] = ex__27517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29523 = state_29479;
state_29479 = G__29523;
continue;
} else {
return ret_value__27515__auto__;
}
break;
}
});
cljs$core$async$state_machine__27514__auto__ = function(state_29479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27514__auto____1.call(this,state_29479);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27514__auto____0;
cljs$core$async$state_machine__27514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27514__auto____1;
return cljs$core$async$state_machine__27514__auto__;
})()
;})(switch__27513__auto__,c__27603__auto___29507,out))
})();
var state__27605__auto__ = (function (){var statearr_29505 = f__27604__auto__.call(null);
(statearr_29505[(6)] = c__27603__auto___29507);

return statearr_29505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27605__auto__);
});})(c__27603__auto___29507,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1556144026303
