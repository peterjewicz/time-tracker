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
var G__27671 = arguments.length;
switch (G__27671) {
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
if(typeof cljs.core.async.t_cljs$core$async27672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27672 = (function (f,blockable,meta27673){
this.f = f;
this.blockable = blockable;
this.meta27673 = meta27673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27674,meta27673__$1){
var self__ = this;
var _27674__$1 = this;
return (new cljs.core.async.t_cljs$core$async27672(self__.f,self__.blockable,meta27673__$1));
});

cljs.core.async.t_cljs$core$async27672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27674){
var self__ = this;
var _27674__$1 = this;
return self__.meta27673;
});

cljs.core.async.t_cljs$core$async27672.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27672.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27673","meta27673",1145609651,null)], null);
});

cljs.core.async.t_cljs$core$async27672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27672";

cljs.core.async.t_cljs$core$async27672.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27672");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27672.
 */
cljs.core.async.__GT_t_cljs$core$async27672 = (function cljs$core$async$__GT_t_cljs$core$async27672(f__$1,blockable__$1,meta27673){
return (new cljs.core.async.t_cljs$core$async27672(f__$1,blockable__$1,meta27673));
});

}

return (new cljs.core.async.t_cljs$core$async27672(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27678 = arguments.length;
switch (G__27678) {
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
var G__27681 = arguments.length;
switch (G__27681) {
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
var G__27684 = arguments.length;
switch (G__27684) {
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
var val_27686 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27686);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27686,ret){
return (function (){
return fn1.call(null,val_27686);
});})(val_27686,ret))
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
var G__27688 = arguments.length;
switch (G__27688) {
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
var n__4376__auto___27690 = n;
var x_27691 = (0);
while(true){
if((x_27691 < n__4376__auto___27690)){
(a[x_27691] = (0));

var G__27692 = (x_27691 + (1));
x_27691 = G__27692;
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

var G__27693 = (i + (1));
i = G__27693;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27694 = (function (flag,meta27695){
this.flag = flag;
this.meta27695 = meta27695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27696,meta27695__$1){
var self__ = this;
var _27696__$1 = this;
return (new cljs.core.async.t_cljs$core$async27694(self__.flag,meta27695__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27696){
var self__ = this;
var _27696__$1 = this;
return self__.meta27695;
});})(flag))
;

cljs.core.async.t_cljs$core$async27694.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27694.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27695","meta27695",1348837458,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27694";

cljs.core.async.t_cljs$core$async27694.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27694");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27694.
 */
cljs.core.async.__GT_t_cljs$core$async27694 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27694(flag__$1,meta27695){
return (new cljs.core.async.t_cljs$core$async27694(flag__$1,meta27695));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27694(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27697 = (function (flag,cb,meta27698){
this.flag = flag;
this.cb = cb;
this.meta27698 = meta27698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27699,meta27698__$1){
var self__ = this;
var _27699__$1 = this;
return (new cljs.core.async.t_cljs$core$async27697(self__.flag,self__.cb,meta27698__$1));
});

cljs.core.async.t_cljs$core$async27697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27699){
var self__ = this;
var _27699__$1 = this;
return self__.meta27698;
});

cljs.core.async.t_cljs$core$async27697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27698","meta27698",1597186960,null)], null);
});

cljs.core.async.t_cljs$core$async27697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27697";

cljs.core.async.t_cljs$core$async27697.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27697");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27697.
 */
cljs.core.async.__GT_t_cljs$core$async27697 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27697(flag__$1,cb__$1,meta27698){
return (new cljs.core.async.t_cljs$core$async27697(flag__$1,cb__$1,meta27698));
});

}

return (new cljs.core.async.t_cljs$core$async27697(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27700_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27700_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27701_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27701_SHARP_,port], null));
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
var G__27702 = (i + (1));
i = G__27702;
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
var len__4499__auto___27708 = arguments.length;
var i__4500__auto___27709 = (0);
while(true){
if((i__4500__auto___27709 < len__4499__auto___27708)){
args__4502__auto__.push((arguments[i__4500__auto___27709]));

var G__27710 = (i__4500__auto___27709 + (1));
i__4500__auto___27709 = G__27710;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27705){
var map__27706 = p__27705;
var map__27706__$1 = ((((!((map__27706 == null)))?(((((map__27706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27706):map__27706);
var opts = map__27706__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27703){
var G__27704 = cljs.core.first.call(null,seq27703);
var seq27703__$1 = cljs.core.next.call(null,seq27703);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27704,seq27703__$1);
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
var G__27712 = arguments.length;
switch (G__27712) {
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
var c__27611__auto___27758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___27758){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___27758){
return (function (state_27736){
var state_val_27737 = (state_27736[(1)]);
if((state_val_27737 === (7))){
var inst_27732 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
var statearr_27738_27759 = state_27736__$1;
(statearr_27738_27759[(2)] = inst_27732);

(statearr_27738_27759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (1))){
var state_27736__$1 = state_27736;
var statearr_27739_27760 = state_27736__$1;
(statearr_27739_27760[(2)] = null);

(statearr_27739_27760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (4))){
var inst_27715 = (state_27736[(7)]);
var inst_27715__$1 = (state_27736[(2)]);
var inst_27716 = (inst_27715__$1 == null);
var state_27736__$1 = (function (){var statearr_27740 = state_27736;
(statearr_27740[(7)] = inst_27715__$1);

return statearr_27740;
})();
if(cljs.core.truth_(inst_27716)){
var statearr_27741_27761 = state_27736__$1;
(statearr_27741_27761[(1)] = (5));

} else {
var statearr_27742_27762 = state_27736__$1;
(statearr_27742_27762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (13))){
var state_27736__$1 = state_27736;
var statearr_27743_27763 = state_27736__$1;
(statearr_27743_27763[(2)] = null);

(statearr_27743_27763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (6))){
var inst_27715 = (state_27736[(7)]);
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27736__$1,(11),to,inst_27715);
} else {
if((state_val_27737 === (3))){
var inst_27734 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27736__$1,inst_27734);
} else {
if((state_val_27737 === (12))){
var state_27736__$1 = state_27736;
var statearr_27744_27764 = state_27736__$1;
(statearr_27744_27764[(2)] = null);

(statearr_27744_27764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (2))){
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27736__$1,(4),from);
} else {
if((state_val_27737 === (11))){
var inst_27725 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
if(cljs.core.truth_(inst_27725)){
var statearr_27745_27765 = state_27736__$1;
(statearr_27745_27765[(1)] = (12));

} else {
var statearr_27746_27766 = state_27736__$1;
(statearr_27746_27766[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (9))){
var state_27736__$1 = state_27736;
var statearr_27747_27767 = state_27736__$1;
(statearr_27747_27767[(2)] = null);

(statearr_27747_27767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (5))){
var state_27736__$1 = state_27736;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27748_27768 = state_27736__$1;
(statearr_27748_27768[(1)] = (8));

} else {
var statearr_27749_27769 = state_27736__$1;
(statearr_27749_27769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (14))){
var inst_27730 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
var statearr_27750_27770 = state_27736__$1;
(statearr_27750_27770[(2)] = inst_27730);

(statearr_27750_27770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (10))){
var inst_27722 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
var statearr_27751_27771 = state_27736__$1;
(statearr_27751_27771[(2)] = inst_27722);

(statearr_27751_27771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (8))){
var inst_27719 = cljs.core.async.close_BANG_.call(null,to);
var state_27736__$1 = state_27736;
var statearr_27752_27772 = state_27736__$1;
(statearr_27752_27772[(2)] = inst_27719);

(statearr_27752_27772[(1)] = (10));


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
});})(c__27611__auto___27758))
;
return ((function (switch__27521__auto__,c__27611__auto___27758){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_27753 = [null,null,null,null,null,null,null,null];
(statearr_27753[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_27753[(1)] = (1));

return statearr_27753;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_27736){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_27736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e27754){if((e27754 instanceof Object)){
var ex__27525__auto__ = e27754;
var statearr_27755_27773 = state_27736;
(statearr_27755_27773[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27774 = state_27736;
state_27736 = G__27774;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_27736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_27736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___27758))
})();
var state__27613__auto__ = (function (){var statearr_27756 = f__27612__auto__.call(null);
(statearr_27756[(6)] = c__27611__auto___27758);

return statearr_27756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___27758))
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
return (function (p__27775){
var vec__27776 = p__27775;
var v = cljs.core.nth.call(null,vec__27776,(0),null);
var p = cljs.core.nth.call(null,vec__27776,(1),null);
var job = vec__27776;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27611__auto___27947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___27947,res,vec__27776,v,p,job,jobs,results){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___27947,res,vec__27776,v,p,job,jobs,results){
return (function (state_27783){
var state_val_27784 = (state_27783[(1)]);
if((state_val_27784 === (1))){
var state_27783__$1 = state_27783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27783__$1,(2),res,v);
} else {
if((state_val_27784 === (2))){
var inst_27780 = (state_27783[(2)]);
var inst_27781 = cljs.core.async.close_BANG_.call(null,res);
var state_27783__$1 = (function (){var statearr_27785 = state_27783;
(statearr_27785[(7)] = inst_27780);

return statearr_27785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27783__$1,inst_27781);
} else {
return null;
}
}
});})(c__27611__auto___27947,res,vec__27776,v,p,job,jobs,results))
;
return ((function (switch__27521__auto__,c__27611__auto___27947,res,vec__27776,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0 = (function (){
var statearr_27786 = [null,null,null,null,null,null,null,null];
(statearr_27786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__);

(statearr_27786[(1)] = (1));

return statearr_27786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1 = (function (state_27783){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_27783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e27787){if((e27787 instanceof Object)){
var ex__27525__auto__ = e27787;
var statearr_27788_27948 = state_27783;
(statearr_27788_27948[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27949 = state_27783;
state_27783 = G__27949;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__ = function(state_27783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1.call(this,state_27783);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___27947,res,vec__27776,v,p,job,jobs,results))
})();
var state__27613__auto__ = (function (){var statearr_27789 = f__27612__auto__.call(null);
(statearr_27789[(6)] = c__27611__auto___27947);

return statearr_27789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___27947,res,vec__27776,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27790){
var vec__27791 = p__27790;
var v = cljs.core.nth.call(null,vec__27791,(0),null);
var p = cljs.core.nth.call(null,vec__27791,(1),null);
var job = vec__27791;
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
var n__4376__auto___27950 = n;
var __27951 = (0);
while(true){
if((__27951 < n__4376__auto___27950)){
var G__27794_27952 = type;
var G__27794_27953__$1 = (((G__27794_27952 instanceof cljs.core.Keyword))?G__27794_27952.fqn:null);
switch (G__27794_27953__$1) {
case "compute":
var c__27611__auto___27955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27951,c__27611__auto___27955,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (__27951,c__27611__auto___27955,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async){
return (function (state_27807){
var state_val_27808 = (state_27807[(1)]);
if((state_val_27808 === (1))){
var state_27807__$1 = state_27807;
var statearr_27809_27956 = state_27807__$1;
(statearr_27809_27956[(2)] = null);

(statearr_27809_27956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27808 === (2))){
var state_27807__$1 = state_27807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27807__$1,(4),jobs);
} else {
if((state_val_27808 === (3))){
var inst_27805 = (state_27807[(2)]);
var state_27807__$1 = state_27807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27807__$1,inst_27805);
} else {
if((state_val_27808 === (4))){
var inst_27797 = (state_27807[(2)]);
var inst_27798 = process.call(null,inst_27797);
var state_27807__$1 = state_27807;
if(cljs.core.truth_(inst_27798)){
var statearr_27810_27957 = state_27807__$1;
(statearr_27810_27957[(1)] = (5));

} else {
var statearr_27811_27958 = state_27807__$1;
(statearr_27811_27958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27808 === (5))){
var state_27807__$1 = state_27807;
var statearr_27812_27959 = state_27807__$1;
(statearr_27812_27959[(2)] = null);

(statearr_27812_27959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27808 === (6))){
var state_27807__$1 = state_27807;
var statearr_27813_27960 = state_27807__$1;
(statearr_27813_27960[(2)] = null);

(statearr_27813_27960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27808 === (7))){
var inst_27803 = (state_27807[(2)]);
var state_27807__$1 = state_27807;
var statearr_27814_27961 = state_27807__$1;
(statearr_27814_27961[(2)] = inst_27803);

(statearr_27814_27961[(1)] = (3));


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
});})(__27951,c__27611__auto___27955,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async))
;
return ((function (__27951,switch__27521__auto__,c__27611__auto___27955,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0 = (function (){
var statearr_27815 = [null,null,null,null,null,null,null];
(statearr_27815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__);

(statearr_27815[(1)] = (1));

return statearr_27815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1 = (function (state_27807){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_27807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e27816){if((e27816 instanceof Object)){
var ex__27525__auto__ = e27816;
var statearr_27817_27962 = state_27807;
(statearr_27817_27962[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27963 = state_27807;
state_27807 = G__27963;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__ = function(state_27807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1.call(this,state_27807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__;
})()
;})(__27951,switch__27521__auto__,c__27611__auto___27955,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async))
})();
var state__27613__auto__ = (function (){var statearr_27818 = f__27612__auto__.call(null);
(statearr_27818[(6)] = c__27611__auto___27955);

return statearr_27818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(__27951,c__27611__auto___27955,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async))
);


break;
case "async":
var c__27611__auto___27964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27951,c__27611__auto___27964,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (__27951,c__27611__auto___27964,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async){
return (function (state_27831){
var state_val_27832 = (state_27831[(1)]);
if((state_val_27832 === (1))){
var state_27831__$1 = state_27831;
var statearr_27833_27965 = state_27831__$1;
(statearr_27833_27965[(2)] = null);

(statearr_27833_27965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (2))){
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27831__$1,(4),jobs);
} else {
if((state_val_27832 === (3))){
var inst_27829 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27831__$1,inst_27829);
} else {
if((state_val_27832 === (4))){
var inst_27821 = (state_27831[(2)]);
var inst_27822 = async.call(null,inst_27821);
var state_27831__$1 = state_27831;
if(cljs.core.truth_(inst_27822)){
var statearr_27834_27966 = state_27831__$1;
(statearr_27834_27966[(1)] = (5));

} else {
var statearr_27835_27967 = state_27831__$1;
(statearr_27835_27967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (5))){
var state_27831__$1 = state_27831;
var statearr_27836_27968 = state_27831__$1;
(statearr_27836_27968[(2)] = null);

(statearr_27836_27968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (6))){
var state_27831__$1 = state_27831;
var statearr_27837_27969 = state_27831__$1;
(statearr_27837_27969[(2)] = null);

(statearr_27837_27969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (7))){
var inst_27827 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27838_27970 = state_27831__$1;
(statearr_27838_27970[(2)] = inst_27827);

(statearr_27838_27970[(1)] = (3));


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
});})(__27951,c__27611__auto___27964,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async))
;
return ((function (__27951,switch__27521__auto__,c__27611__auto___27964,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0 = (function (){
var statearr_27839 = [null,null,null,null,null,null,null];
(statearr_27839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__);

(statearr_27839[(1)] = (1));

return statearr_27839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1 = (function (state_27831){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_27831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e27840){if((e27840 instanceof Object)){
var ex__27525__auto__ = e27840;
var statearr_27841_27971 = state_27831;
(statearr_27841_27971[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27972 = state_27831;
state_27831 = G__27972;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__ = function(state_27831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1.call(this,state_27831);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__;
})()
;})(__27951,switch__27521__auto__,c__27611__auto___27964,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async))
})();
var state__27613__auto__ = (function (){var statearr_27842 = f__27612__auto__.call(null);
(statearr_27842[(6)] = c__27611__auto___27964);

return statearr_27842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(__27951,c__27611__auto___27964,G__27794_27952,G__27794_27953__$1,n__4376__auto___27950,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27794_27953__$1)].join('')));

}

var G__27973 = (__27951 + (1));
__27951 = G__27973;
continue;
} else {
}
break;
}

var c__27611__auto___27974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___27974,jobs,results,process,async){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___27974,jobs,results,process,async){
return (function (state_27864){
var state_val_27865 = (state_27864[(1)]);
if((state_val_27865 === (1))){
var state_27864__$1 = state_27864;
var statearr_27866_27975 = state_27864__$1;
(statearr_27866_27975[(2)] = null);

(statearr_27866_27975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27865 === (2))){
var state_27864__$1 = state_27864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27864__$1,(4),from);
} else {
if((state_val_27865 === (3))){
var inst_27862 = (state_27864[(2)]);
var state_27864__$1 = state_27864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27864__$1,inst_27862);
} else {
if((state_val_27865 === (4))){
var inst_27845 = (state_27864[(7)]);
var inst_27845__$1 = (state_27864[(2)]);
var inst_27846 = (inst_27845__$1 == null);
var state_27864__$1 = (function (){var statearr_27867 = state_27864;
(statearr_27867[(7)] = inst_27845__$1);

return statearr_27867;
})();
if(cljs.core.truth_(inst_27846)){
var statearr_27868_27976 = state_27864__$1;
(statearr_27868_27976[(1)] = (5));

} else {
var statearr_27869_27977 = state_27864__$1;
(statearr_27869_27977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27865 === (5))){
var inst_27848 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27864__$1 = state_27864;
var statearr_27870_27978 = state_27864__$1;
(statearr_27870_27978[(2)] = inst_27848);

(statearr_27870_27978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27865 === (6))){
var inst_27850 = (state_27864[(8)]);
var inst_27845 = (state_27864[(7)]);
var inst_27850__$1 = cljs.core.async.chan.call(null,(1));
var inst_27851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27852 = [inst_27845,inst_27850__$1];
var inst_27853 = (new cljs.core.PersistentVector(null,2,(5),inst_27851,inst_27852,null));
var state_27864__$1 = (function (){var statearr_27871 = state_27864;
(statearr_27871[(8)] = inst_27850__$1);

return statearr_27871;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27864__$1,(8),jobs,inst_27853);
} else {
if((state_val_27865 === (7))){
var inst_27860 = (state_27864[(2)]);
var state_27864__$1 = state_27864;
var statearr_27872_27979 = state_27864__$1;
(statearr_27872_27979[(2)] = inst_27860);

(statearr_27872_27979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27865 === (8))){
var inst_27850 = (state_27864[(8)]);
var inst_27855 = (state_27864[(2)]);
var state_27864__$1 = (function (){var statearr_27873 = state_27864;
(statearr_27873[(9)] = inst_27855);

return statearr_27873;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27864__$1,(9),results,inst_27850);
} else {
if((state_val_27865 === (9))){
var inst_27857 = (state_27864[(2)]);
var state_27864__$1 = (function (){var statearr_27874 = state_27864;
(statearr_27874[(10)] = inst_27857);

return statearr_27874;
})();
var statearr_27875_27980 = state_27864__$1;
(statearr_27875_27980[(2)] = null);

(statearr_27875_27980[(1)] = (2));


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
});})(c__27611__auto___27974,jobs,results,process,async))
;
return ((function (switch__27521__auto__,c__27611__auto___27974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0 = (function (){
var statearr_27876 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__);

(statearr_27876[(1)] = (1));

return statearr_27876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1 = (function (state_27864){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_27864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e27877){if((e27877 instanceof Object)){
var ex__27525__auto__ = e27877;
var statearr_27878_27981 = state_27864;
(statearr_27878_27981[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27982 = state_27864;
state_27864 = G__27982;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__ = function(state_27864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1.call(this,state_27864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___27974,jobs,results,process,async))
})();
var state__27613__auto__ = (function (){var statearr_27879 = f__27612__auto__.call(null);
(statearr_27879[(6)] = c__27611__auto___27974);

return statearr_27879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___27974,jobs,results,process,async))
);


var c__27611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto__,jobs,results,process,async){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto__,jobs,results,process,async){
return (function (state_27917){
var state_val_27918 = (state_27917[(1)]);
if((state_val_27918 === (7))){
var inst_27913 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27919_27983 = state_27917__$1;
(statearr_27919_27983[(2)] = inst_27913);

(statearr_27919_27983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (20))){
var state_27917__$1 = state_27917;
var statearr_27920_27984 = state_27917__$1;
(statearr_27920_27984[(2)] = null);

(statearr_27920_27984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (1))){
var state_27917__$1 = state_27917;
var statearr_27921_27985 = state_27917__$1;
(statearr_27921_27985[(2)] = null);

(statearr_27921_27985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (4))){
var inst_27882 = (state_27917[(7)]);
var inst_27882__$1 = (state_27917[(2)]);
var inst_27883 = (inst_27882__$1 == null);
var state_27917__$1 = (function (){var statearr_27922 = state_27917;
(statearr_27922[(7)] = inst_27882__$1);

return statearr_27922;
})();
if(cljs.core.truth_(inst_27883)){
var statearr_27923_27986 = state_27917__$1;
(statearr_27923_27986[(1)] = (5));

} else {
var statearr_27924_27987 = state_27917__$1;
(statearr_27924_27987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (15))){
var inst_27895 = (state_27917[(8)]);
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27917__$1,(18),to,inst_27895);
} else {
if((state_val_27918 === (21))){
var inst_27908 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27925_27988 = state_27917__$1;
(statearr_27925_27988[(2)] = inst_27908);

(statearr_27925_27988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (13))){
var inst_27910 = (state_27917[(2)]);
var state_27917__$1 = (function (){var statearr_27926 = state_27917;
(statearr_27926[(9)] = inst_27910);

return statearr_27926;
})();
var statearr_27927_27989 = state_27917__$1;
(statearr_27927_27989[(2)] = null);

(statearr_27927_27989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (6))){
var inst_27882 = (state_27917[(7)]);
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27917__$1,(11),inst_27882);
} else {
if((state_val_27918 === (17))){
var inst_27903 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
if(cljs.core.truth_(inst_27903)){
var statearr_27928_27990 = state_27917__$1;
(statearr_27928_27990[(1)] = (19));

} else {
var statearr_27929_27991 = state_27917__$1;
(statearr_27929_27991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (3))){
var inst_27915 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27917__$1,inst_27915);
} else {
if((state_val_27918 === (12))){
var inst_27892 = (state_27917[(10)]);
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27917__$1,(14),inst_27892);
} else {
if((state_val_27918 === (2))){
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27917__$1,(4),results);
} else {
if((state_val_27918 === (19))){
var state_27917__$1 = state_27917;
var statearr_27930_27992 = state_27917__$1;
(statearr_27930_27992[(2)] = null);

(statearr_27930_27992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (11))){
var inst_27892 = (state_27917[(2)]);
var state_27917__$1 = (function (){var statearr_27931 = state_27917;
(statearr_27931[(10)] = inst_27892);

return statearr_27931;
})();
var statearr_27932_27993 = state_27917__$1;
(statearr_27932_27993[(2)] = null);

(statearr_27932_27993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (9))){
var state_27917__$1 = state_27917;
var statearr_27933_27994 = state_27917__$1;
(statearr_27933_27994[(2)] = null);

(statearr_27933_27994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (5))){
var state_27917__$1 = state_27917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27934_27995 = state_27917__$1;
(statearr_27934_27995[(1)] = (8));

} else {
var statearr_27935_27996 = state_27917__$1;
(statearr_27935_27996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (14))){
var inst_27895 = (state_27917[(8)]);
var inst_27897 = (state_27917[(11)]);
var inst_27895__$1 = (state_27917[(2)]);
var inst_27896 = (inst_27895__$1 == null);
var inst_27897__$1 = cljs.core.not.call(null,inst_27896);
var state_27917__$1 = (function (){var statearr_27936 = state_27917;
(statearr_27936[(8)] = inst_27895__$1);

(statearr_27936[(11)] = inst_27897__$1);

return statearr_27936;
})();
if(inst_27897__$1){
var statearr_27937_27997 = state_27917__$1;
(statearr_27937_27997[(1)] = (15));

} else {
var statearr_27938_27998 = state_27917__$1;
(statearr_27938_27998[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (16))){
var inst_27897 = (state_27917[(11)]);
var state_27917__$1 = state_27917;
var statearr_27939_27999 = state_27917__$1;
(statearr_27939_27999[(2)] = inst_27897);

(statearr_27939_27999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (10))){
var inst_27889 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27940_28000 = state_27917__$1;
(statearr_27940_28000[(2)] = inst_27889);

(statearr_27940_28000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (18))){
var inst_27900 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27941_28001 = state_27917__$1;
(statearr_27941_28001[(2)] = inst_27900);

(statearr_27941_28001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (8))){
var inst_27886 = cljs.core.async.close_BANG_.call(null,to);
var state_27917__$1 = state_27917;
var statearr_27942_28002 = state_27917__$1;
(statearr_27942_28002[(2)] = inst_27886);

(statearr_27942_28002[(1)] = (10));


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
});})(c__27611__auto__,jobs,results,process,async))
;
return ((function (switch__27521__auto__,c__27611__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0 = (function (){
var statearr_27943 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27943[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__);

(statearr_27943[(1)] = (1));

return statearr_27943;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1 = (function (state_27917){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_27917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e27944){if((e27944 instanceof Object)){
var ex__27525__auto__ = e27944;
var statearr_27945_28003 = state_27917;
(statearr_27945_28003[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28004 = state_27917;
state_27917 = G__28004;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__ = function(state_27917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1.call(this,state_27917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto__,jobs,results,process,async))
})();
var state__27613__auto__ = (function (){var statearr_27946 = f__27612__auto__.call(null);
(statearr_27946[(6)] = c__27611__auto__);

return statearr_27946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto__,jobs,results,process,async))
);

return c__27611__auto__;
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
var G__28006 = arguments.length;
switch (G__28006) {
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
var G__28009 = arguments.length;
switch (G__28009) {
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
var G__28012 = arguments.length;
switch (G__28012) {
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
var c__27611__auto___28061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___28061,tc,fc){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___28061,tc,fc){
return (function (state_28038){
var state_val_28039 = (state_28038[(1)]);
if((state_val_28039 === (7))){
var inst_28034 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
var statearr_28040_28062 = state_28038__$1;
(statearr_28040_28062[(2)] = inst_28034);

(statearr_28040_28062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (1))){
var state_28038__$1 = state_28038;
var statearr_28041_28063 = state_28038__$1;
(statearr_28041_28063[(2)] = null);

(statearr_28041_28063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (4))){
var inst_28015 = (state_28038[(7)]);
var inst_28015__$1 = (state_28038[(2)]);
var inst_28016 = (inst_28015__$1 == null);
var state_28038__$1 = (function (){var statearr_28042 = state_28038;
(statearr_28042[(7)] = inst_28015__$1);

return statearr_28042;
})();
if(cljs.core.truth_(inst_28016)){
var statearr_28043_28064 = state_28038__$1;
(statearr_28043_28064[(1)] = (5));

} else {
var statearr_28044_28065 = state_28038__$1;
(statearr_28044_28065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (13))){
var state_28038__$1 = state_28038;
var statearr_28045_28066 = state_28038__$1;
(statearr_28045_28066[(2)] = null);

(statearr_28045_28066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (6))){
var inst_28015 = (state_28038[(7)]);
var inst_28021 = p.call(null,inst_28015);
var state_28038__$1 = state_28038;
if(cljs.core.truth_(inst_28021)){
var statearr_28046_28067 = state_28038__$1;
(statearr_28046_28067[(1)] = (9));

} else {
var statearr_28047_28068 = state_28038__$1;
(statearr_28047_28068[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (3))){
var inst_28036 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28038__$1,inst_28036);
} else {
if((state_val_28039 === (12))){
var state_28038__$1 = state_28038;
var statearr_28048_28069 = state_28038__$1;
(statearr_28048_28069[(2)] = null);

(statearr_28048_28069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (2))){
var state_28038__$1 = state_28038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28038__$1,(4),ch);
} else {
if((state_val_28039 === (11))){
var inst_28015 = (state_28038[(7)]);
var inst_28025 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28038__$1,(8),inst_28025,inst_28015);
} else {
if((state_val_28039 === (9))){
var state_28038__$1 = state_28038;
var statearr_28049_28070 = state_28038__$1;
(statearr_28049_28070[(2)] = tc);

(statearr_28049_28070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (5))){
var inst_28018 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28019 = cljs.core.async.close_BANG_.call(null,fc);
var state_28038__$1 = (function (){var statearr_28050 = state_28038;
(statearr_28050[(8)] = inst_28018);

return statearr_28050;
})();
var statearr_28051_28071 = state_28038__$1;
(statearr_28051_28071[(2)] = inst_28019);

(statearr_28051_28071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (14))){
var inst_28032 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
var statearr_28052_28072 = state_28038__$1;
(statearr_28052_28072[(2)] = inst_28032);

(statearr_28052_28072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (10))){
var state_28038__$1 = state_28038;
var statearr_28053_28073 = state_28038__$1;
(statearr_28053_28073[(2)] = fc);

(statearr_28053_28073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28039 === (8))){
var inst_28027 = (state_28038[(2)]);
var state_28038__$1 = state_28038;
if(cljs.core.truth_(inst_28027)){
var statearr_28054_28074 = state_28038__$1;
(statearr_28054_28074[(1)] = (12));

} else {
var statearr_28055_28075 = state_28038__$1;
(statearr_28055_28075[(1)] = (13));

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
});})(c__27611__auto___28061,tc,fc))
;
return ((function (switch__27521__auto__,c__27611__auto___28061,tc,fc){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_28056 = [null,null,null,null,null,null,null,null,null];
(statearr_28056[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_28056[(1)] = (1));

return statearr_28056;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_28038){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_28038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e28057){if((e28057 instanceof Object)){
var ex__27525__auto__ = e28057;
var statearr_28058_28076 = state_28038;
(statearr_28058_28076[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28077 = state_28038;
state_28038 = G__28077;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_28038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_28038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___28061,tc,fc))
})();
var state__27613__auto__ = (function (){var statearr_28059 = f__27612__auto__.call(null);
(statearr_28059[(6)] = c__27611__auto___28061);

return statearr_28059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___28061,tc,fc))
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
var c__27611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto__){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto__){
return (function (state_28098){
var state_val_28099 = (state_28098[(1)]);
if((state_val_28099 === (7))){
var inst_28094 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28100_28118 = state_28098__$1;
(statearr_28100_28118[(2)] = inst_28094);

(statearr_28100_28118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (1))){
var inst_28078 = init;
var state_28098__$1 = (function (){var statearr_28101 = state_28098;
(statearr_28101[(7)] = inst_28078);

return statearr_28101;
})();
var statearr_28102_28119 = state_28098__$1;
(statearr_28102_28119[(2)] = null);

(statearr_28102_28119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (4))){
var inst_28081 = (state_28098[(8)]);
var inst_28081__$1 = (state_28098[(2)]);
var inst_28082 = (inst_28081__$1 == null);
var state_28098__$1 = (function (){var statearr_28103 = state_28098;
(statearr_28103[(8)] = inst_28081__$1);

return statearr_28103;
})();
if(cljs.core.truth_(inst_28082)){
var statearr_28104_28120 = state_28098__$1;
(statearr_28104_28120[(1)] = (5));

} else {
var statearr_28105_28121 = state_28098__$1;
(statearr_28105_28121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (6))){
var inst_28085 = (state_28098[(9)]);
var inst_28081 = (state_28098[(8)]);
var inst_28078 = (state_28098[(7)]);
var inst_28085__$1 = f.call(null,inst_28078,inst_28081);
var inst_28086 = cljs.core.reduced_QMARK_.call(null,inst_28085__$1);
var state_28098__$1 = (function (){var statearr_28106 = state_28098;
(statearr_28106[(9)] = inst_28085__$1);

return statearr_28106;
})();
if(inst_28086){
var statearr_28107_28122 = state_28098__$1;
(statearr_28107_28122[(1)] = (8));

} else {
var statearr_28108_28123 = state_28098__$1;
(statearr_28108_28123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (3))){
var inst_28096 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28098__$1,inst_28096);
} else {
if((state_val_28099 === (2))){
var state_28098__$1 = state_28098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28098__$1,(4),ch);
} else {
if((state_val_28099 === (9))){
var inst_28085 = (state_28098[(9)]);
var inst_28078 = inst_28085;
var state_28098__$1 = (function (){var statearr_28109 = state_28098;
(statearr_28109[(7)] = inst_28078);

return statearr_28109;
})();
var statearr_28110_28124 = state_28098__$1;
(statearr_28110_28124[(2)] = null);

(statearr_28110_28124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (5))){
var inst_28078 = (state_28098[(7)]);
var state_28098__$1 = state_28098;
var statearr_28111_28125 = state_28098__$1;
(statearr_28111_28125[(2)] = inst_28078);

(statearr_28111_28125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (10))){
var inst_28092 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28112_28126 = state_28098__$1;
(statearr_28112_28126[(2)] = inst_28092);

(statearr_28112_28126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (8))){
var inst_28085 = (state_28098[(9)]);
var inst_28088 = cljs.core.deref.call(null,inst_28085);
var state_28098__$1 = state_28098;
var statearr_28113_28127 = state_28098__$1;
(statearr_28113_28127[(2)] = inst_28088);

(statearr_28113_28127[(1)] = (10));


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
});})(c__27611__auto__))
;
return ((function (switch__27521__auto__,c__27611__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27522__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27522__auto____0 = (function (){
var statearr_28114 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28114[(0)] = cljs$core$async$reduce_$_state_machine__27522__auto__);

(statearr_28114[(1)] = (1));

return statearr_28114;
});
var cljs$core$async$reduce_$_state_machine__27522__auto____1 = (function (state_28098){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_28098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e28115){if((e28115 instanceof Object)){
var ex__27525__auto__ = e28115;
var statearr_28116_28128 = state_28098;
(statearr_28116_28128[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28129 = state_28098;
state_28098 = G__28129;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27522__auto__ = function(state_28098){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27522__auto____1.call(this,state_28098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27522__auto____0;
cljs$core$async$reduce_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27522__auto____1;
return cljs$core$async$reduce_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto__))
})();
var state__27613__auto__ = (function (){var statearr_28117 = f__27612__auto__.call(null);
(statearr_28117[(6)] = c__27611__auto__);

return statearr_28117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto__))
);

return c__27611__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto__,f__$1){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto__,f__$1){
return (function (state_28135){
var state_val_28136 = (state_28135[(1)]);
if((state_val_28136 === (1))){
var inst_28130 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28135__$1 = state_28135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28135__$1,(2),inst_28130);
} else {
if((state_val_28136 === (2))){
var inst_28132 = (state_28135[(2)]);
var inst_28133 = f__$1.call(null,inst_28132);
var state_28135__$1 = state_28135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28135__$1,inst_28133);
} else {
return null;
}
}
});})(c__27611__auto__,f__$1))
;
return ((function (switch__27521__auto__,c__27611__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27522__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27522__auto____0 = (function (){
var statearr_28137 = [null,null,null,null,null,null,null];
(statearr_28137[(0)] = cljs$core$async$transduce_$_state_machine__27522__auto__);

(statearr_28137[(1)] = (1));

return statearr_28137;
});
var cljs$core$async$transduce_$_state_machine__27522__auto____1 = (function (state_28135){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_28135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e28138){if((e28138 instanceof Object)){
var ex__27525__auto__ = e28138;
var statearr_28139_28141 = state_28135;
(statearr_28139_28141[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28142 = state_28135;
state_28135 = G__28142;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27522__auto__ = function(state_28135){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27522__auto____1.call(this,state_28135);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27522__auto____0;
cljs$core$async$transduce_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27522__auto____1;
return cljs$core$async$transduce_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto__,f__$1))
})();
var state__27613__auto__ = (function (){var statearr_28140 = f__27612__auto__.call(null);
(statearr_28140[(6)] = c__27611__auto__);

return statearr_28140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto__,f__$1))
);

return c__27611__auto__;
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
var G__28144 = arguments.length;
switch (G__28144) {
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
var c__27611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto__){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto__){
return (function (state_28169){
var state_val_28170 = (state_28169[(1)]);
if((state_val_28170 === (7))){
var inst_28151 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28171_28192 = state_28169__$1;
(statearr_28171_28192[(2)] = inst_28151);

(statearr_28171_28192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (1))){
var inst_28145 = cljs.core.seq.call(null,coll);
var inst_28146 = inst_28145;
var state_28169__$1 = (function (){var statearr_28172 = state_28169;
(statearr_28172[(7)] = inst_28146);

return statearr_28172;
})();
var statearr_28173_28193 = state_28169__$1;
(statearr_28173_28193[(2)] = null);

(statearr_28173_28193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (4))){
var inst_28146 = (state_28169[(7)]);
var inst_28149 = cljs.core.first.call(null,inst_28146);
var state_28169__$1 = state_28169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28169__$1,(7),ch,inst_28149);
} else {
if((state_val_28170 === (13))){
var inst_28163 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28174_28194 = state_28169__$1;
(statearr_28174_28194[(2)] = inst_28163);

(statearr_28174_28194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (6))){
var inst_28154 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
if(cljs.core.truth_(inst_28154)){
var statearr_28175_28195 = state_28169__$1;
(statearr_28175_28195[(1)] = (8));

} else {
var statearr_28176_28196 = state_28169__$1;
(statearr_28176_28196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (3))){
var inst_28167 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28169__$1,inst_28167);
} else {
if((state_val_28170 === (12))){
var state_28169__$1 = state_28169;
var statearr_28177_28197 = state_28169__$1;
(statearr_28177_28197[(2)] = null);

(statearr_28177_28197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (2))){
var inst_28146 = (state_28169[(7)]);
var state_28169__$1 = state_28169;
if(cljs.core.truth_(inst_28146)){
var statearr_28178_28198 = state_28169__$1;
(statearr_28178_28198[(1)] = (4));

} else {
var statearr_28179_28199 = state_28169__$1;
(statearr_28179_28199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (11))){
var inst_28160 = cljs.core.async.close_BANG_.call(null,ch);
var state_28169__$1 = state_28169;
var statearr_28180_28200 = state_28169__$1;
(statearr_28180_28200[(2)] = inst_28160);

(statearr_28180_28200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (9))){
var state_28169__$1 = state_28169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28181_28201 = state_28169__$1;
(statearr_28181_28201[(1)] = (11));

} else {
var statearr_28182_28202 = state_28169__$1;
(statearr_28182_28202[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (5))){
var inst_28146 = (state_28169[(7)]);
var state_28169__$1 = state_28169;
var statearr_28183_28203 = state_28169__$1;
(statearr_28183_28203[(2)] = inst_28146);

(statearr_28183_28203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (10))){
var inst_28165 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28184_28204 = state_28169__$1;
(statearr_28184_28204[(2)] = inst_28165);

(statearr_28184_28204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (8))){
var inst_28146 = (state_28169[(7)]);
var inst_28156 = cljs.core.next.call(null,inst_28146);
var inst_28146__$1 = inst_28156;
var state_28169__$1 = (function (){var statearr_28185 = state_28169;
(statearr_28185[(7)] = inst_28146__$1);

return statearr_28185;
})();
var statearr_28186_28205 = state_28169__$1;
(statearr_28186_28205[(2)] = null);

(statearr_28186_28205[(1)] = (2));


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
});})(c__27611__auto__))
;
return ((function (switch__27521__auto__,c__27611__auto__){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_28187 = [null,null,null,null,null,null,null,null];
(statearr_28187[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_28187[(1)] = (1));

return statearr_28187;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_28169){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_28169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e28188){if((e28188 instanceof Object)){
var ex__27525__auto__ = e28188;
var statearr_28189_28206 = state_28169;
(statearr_28189_28206[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28207 = state_28169;
state_28169 = G__28207;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_28169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_28169);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto__))
})();
var state__27613__auto__ = (function (){var statearr_28190 = f__27612__auto__.call(null);
(statearr_28190[(6)] = c__27611__auto__);

return statearr_28190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto__))
);

return c__27611__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28208 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28208 = (function (ch,cs,meta28209){
this.ch = ch;
this.cs = cs;
this.meta28209 = meta28209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28210,meta28209__$1){
var self__ = this;
var _28210__$1 = this;
return (new cljs.core.async.t_cljs$core$async28208(self__.ch,self__.cs,meta28209__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28210){
var self__ = this;
var _28210__$1 = this;
return self__.meta28209;
});})(cs))
;

cljs.core.async.t_cljs$core$async28208.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28208.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28208.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28208.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28208.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28208.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28209","meta28209",2000744070,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28208";

cljs.core.async.t_cljs$core$async28208.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28208");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28208.
 */
cljs.core.async.__GT_t_cljs$core$async28208 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28208(ch__$1,cs__$1,meta28209){
return (new cljs.core.async.t_cljs$core$async28208(ch__$1,cs__$1,meta28209));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28208(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27611__auto___28430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___28430,cs,m,dchan,dctr,done){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___28430,cs,m,dchan,dctr,done){
return (function (state_28345){
var state_val_28346 = (state_28345[(1)]);
if((state_val_28346 === (7))){
var inst_28341 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28347_28431 = state_28345__$1;
(statearr_28347_28431[(2)] = inst_28341);

(statearr_28347_28431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (20))){
var inst_28244 = (state_28345[(7)]);
var inst_28256 = cljs.core.first.call(null,inst_28244);
var inst_28257 = cljs.core.nth.call(null,inst_28256,(0),null);
var inst_28258 = cljs.core.nth.call(null,inst_28256,(1),null);
var state_28345__$1 = (function (){var statearr_28348 = state_28345;
(statearr_28348[(8)] = inst_28257);

return statearr_28348;
})();
if(cljs.core.truth_(inst_28258)){
var statearr_28349_28432 = state_28345__$1;
(statearr_28349_28432[(1)] = (22));

} else {
var statearr_28350_28433 = state_28345__$1;
(statearr_28350_28433[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (27))){
var inst_28213 = (state_28345[(9)]);
var inst_28293 = (state_28345[(10)]);
var inst_28288 = (state_28345[(11)]);
var inst_28286 = (state_28345[(12)]);
var inst_28293__$1 = cljs.core._nth.call(null,inst_28286,inst_28288);
var inst_28294 = cljs.core.async.put_BANG_.call(null,inst_28293__$1,inst_28213,done);
var state_28345__$1 = (function (){var statearr_28351 = state_28345;
(statearr_28351[(10)] = inst_28293__$1);

return statearr_28351;
})();
if(cljs.core.truth_(inst_28294)){
var statearr_28352_28434 = state_28345__$1;
(statearr_28352_28434[(1)] = (30));

} else {
var statearr_28353_28435 = state_28345__$1;
(statearr_28353_28435[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (1))){
var state_28345__$1 = state_28345;
var statearr_28354_28436 = state_28345__$1;
(statearr_28354_28436[(2)] = null);

(statearr_28354_28436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (24))){
var inst_28244 = (state_28345[(7)]);
var inst_28263 = (state_28345[(2)]);
var inst_28264 = cljs.core.next.call(null,inst_28244);
var inst_28222 = inst_28264;
var inst_28223 = null;
var inst_28224 = (0);
var inst_28225 = (0);
var state_28345__$1 = (function (){var statearr_28355 = state_28345;
(statearr_28355[(13)] = inst_28224);

(statearr_28355[(14)] = inst_28222);

(statearr_28355[(15)] = inst_28225);

(statearr_28355[(16)] = inst_28223);

(statearr_28355[(17)] = inst_28263);

return statearr_28355;
})();
var statearr_28356_28437 = state_28345__$1;
(statearr_28356_28437[(2)] = null);

(statearr_28356_28437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (39))){
var state_28345__$1 = state_28345;
var statearr_28360_28438 = state_28345__$1;
(statearr_28360_28438[(2)] = null);

(statearr_28360_28438[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (4))){
var inst_28213 = (state_28345[(9)]);
var inst_28213__$1 = (state_28345[(2)]);
var inst_28214 = (inst_28213__$1 == null);
var state_28345__$1 = (function (){var statearr_28361 = state_28345;
(statearr_28361[(9)] = inst_28213__$1);

return statearr_28361;
})();
if(cljs.core.truth_(inst_28214)){
var statearr_28362_28439 = state_28345__$1;
(statearr_28362_28439[(1)] = (5));

} else {
var statearr_28363_28440 = state_28345__$1;
(statearr_28363_28440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (15))){
var inst_28224 = (state_28345[(13)]);
var inst_28222 = (state_28345[(14)]);
var inst_28225 = (state_28345[(15)]);
var inst_28223 = (state_28345[(16)]);
var inst_28240 = (state_28345[(2)]);
var inst_28241 = (inst_28225 + (1));
var tmp28357 = inst_28224;
var tmp28358 = inst_28222;
var tmp28359 = inst_28223;
var inst_28222__$1 = tmp28358;
var inst_28223__$1 = tmp28359;
var inst_28224__$1 = tmp28357;
var inst_28225__$1 = inst_28241;
var state_28345__$1 = (function (){var statearr_28364 = state_28345;
(statearr_28364[(13)] = inst_28224__$1);

(statearr_28364[(14)] = inst_28222__$1);

(statearr_28364[(15)] = inst_28225__$1);

(statearr_28364[(16)] = inst_28223__$1);

(statearr_28364[(18)] = inst_28240);

return statearr_28364;
})();
var statearr_28365_28441 = state_28345__$1;
(statearr_28365_28441[(2)] = null);

(statearr_28365_28441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (21))){
var inst_28267 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28369_28442 = state_28345__$1;
(statearr_28369_28442[(2)] = inst_28267);

(statearr_28369_28442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (31))){
var inst_28293 = (state_28345[(10)]);
var inst_28297 = done.call(null,null);
var inst_28298 = cljs.core.async.untap_STAR_.call(null,m,inst_28293);
var state_28345__$1 = (function (){var statearr_28370 = state_28345;
(statearr_28370[(19)] = inst_28297);

return statearr_28370;
})();
var statearr_28371_28443 = state_28345__$1;
(statearr_28371_28443[(2)] = inst_28298);

(statearr_28371_28443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (32))){
var inst_28285 = (state_28345[(20)]);
var inst_28287 = (state_28345[(21)]);
var inst_28288 = (state_28345[(11)]);
var inst_28286 = (state_28345[(12)]);
var inst_28300 = (state_28345[(2)]);
var inst_28301 = (inst_28288 + (1));
var tmp28366 = inst_28285;
var tmp28367 = inst_28287;
var tmp28368 = inst_28286;
var inst_28285__$1 = tmp28366;
var inst_28286__$1 = tmp28368;
var inst_28287__$1 = tmp28367;
var inst_28288__$1 = inst_28301;
var state_28345__$1 = (function (){var statearr_28372 = state_28345;
(statearr_28372[(20)] = inst_28285__$1);

(statearr_28372[(21)] = inst_28287__$1);

(statearr_28372[(22)] = inst_28300);

(statearr_28372[(11)] = inst_28288__$1);

(statearr_28372[(12)] = inst_28286__$1);

return statearr_28372;
})();
var statearr_28373_28444 = state_28345__$1;
(statearr_28373_28444[(2)] = null);

(statearr_28373_28444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (40))){
var inst_28313 = (state_28345[(23)]);
var inst_28317 = done.call(null,null);
var inst_28318 = cljs.core.async.untap_STAR_.call(null,m,inst_28313);
var state_28345__$1 = (function (){var statearr_28374 = state_28345;
(statearr_28374[(24)] = inst_28317);

return statearr_28374;
})();
var statearr_28375_28445 = state_28345__$1;
(statearr_28375_28445[(2)] = inst_28318);

(statearr_28375_28445[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (33))){
var inst_28304 = (state_28345[(25)]);
var inst_28306 = cljs.core.chunked_seq_QMARK_.call(null,inst_28304);
var state_28345__$1 = state_28345;
if(inst_28306){
var statearr_28376_28446 = state_28345__$1;
(statearr_28376_28446[(1)] = (36));

} else {
var statearr_28377_28447 = state_28345__$1;
(statearr_28377_28447[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (13))){
var inst_28234 = (state_28345[(26)]);
var inst_28237 = cljs.core.async.close_BANG_.call(null,inst_28234);
var state_28345__$1 = state_28345;
var statearr_28378_28448 = state_28345__$1;
(statearr_28378_28448[(2)] = inst_28237);

(statearr_28378_28448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (22))){
var inst_28257 = (state_28345[(8)]);
var inst_28260 = cljs.core.async.close_BANG_.call(null,inst_28257);
var state_28345__$1 = state_28345;
var statearr_28379_28449 = state_28345__$1;
(statearr_28379_28449[(2)] = inst_28260);

(statearr_28379_28449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (36))){
var inst_28304 = (state_28345[(25)]);
var inst_28308 = cljs.core.chunk_first.call(null,inst_28304);
var inst_28309 = cljs.core.chunk_rest.call(null,inst_28304);
var inst_28310 = cljs.core.count.call(null,inst_28308);
var inst_28285 = inst_28309;
var inst_28286 = inst_28308;
var inst_28287 = inst_28310;
var inst_28288 = (0);
var state_28345__$1 = (function (){var statearr_28380 = state_28345;
(statearr_28380[(20)] = inst_28285);

(statearr_28380[(21)] = inst_28287);

(statearr_28380[(11)] = inst_28288);

(statearr_28380[(12)] = inst_28286);

return statearr_28380;
})();
var statearr_28381_28450 = state_28345__$1;
(statearr_28381_28450[(2)] = null);

(statearr_28381_28450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (41))){
var inst_28304 = (state_28345[(25)]);
var inst_28320 = (state_28345[(2)]);
var inst_28321 = cljs.core.next.call(null,inst_28304);
var inst_28285 = inst_28321;
var inst_28286 = null;
var inst_28287 = (0);
var inst_28288 = (0);
var state_28345__$1 = (function (){var statearr_28382 = state_28345;
(statearr_28382[(20)] = inst_28285);

(statearr_28382[(21)] = inst_28287);

(statearr_28382[(27)] = inst_28320);

(statearr_28382[(11)] = inst_28288);

(statearr_28382[(12)] = inst_28286);

return statearr_28382;
})();
var statearr_28383_28451 = state_28345__$1;
(statearr_28383_28451[(2)] = null);

(statearr_28383_28451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (43))){
var state_28345__$1 = state_28345;
var statearr_28384_28452 = state_28345__$1;
(statearr_28384_28452[(2)] = null);

(statearr_28384_28452[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (29))){
var inst_28329 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28385_28453 = state_28345__$1;
(statearr_28385_28453[(2)] = inst_28329);

(statearr_28385_28453[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (44))){
var inst_28338 = (state_28345[(2)]);
var state_28345__$1 = (function (){var statearr_28386 = state_28345;
(statearr_28386[(28)] = inst_28338);

return statearr_28386;
})();
var statearr_28387_28454 = state_28345__$1;
(statearr_28387_28454[(2)] = null);

(statearr_28387_28454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (6))){
var inst_28277 = (state_28345[(29)]);
var inst_28276 = cljs.core.deref.call(null,cs);
var inst_28277__$1 = cljs.core.keys.call(null,inst_28276);
var inst_28278 = cljs.core.count.call(null,inst_28277__$1);
var inst_28279 = cljs.core.reset_BANG_.call(null,dctr,inst_28278);
var inst_28284 = cljs.core.seq.call(null,inst_28277__$1);
var inst_28285 = inst_28284;
var inst_28286 = null;
var inst_28287 = (0);
var inst_28288 = (0);
var state_28345__$1 = (function (){var statearr_28388 = state_28345;
(statearr_28388[(20)] = inst_28285);

(statearr_28388[(30)] = inst_28279);

(statearr_28388[(21)] = inst_28287);

(statearr_28388[(11)] = inst_28288);

(statearr_28388[(29)] = inst_28277__$1);

(statearr_28388[(12)] = inst_28286);

return statearr_28388;
})();
var statearr_28389_28455 = state_28345__$1;
(statearr_28389_28455[(2)] = null);

(statearr_28389_28455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (28))){
var inst_28285 = (state_28345[(20)]);
var inst_28304 = (state_28345[(25)]);
var inst_28304__$1 = cljs.core.seq.call(null,inst_28285);
var state_28345__$1 = (function (){var statearr_28390 = state_28345;
(statearr_28390[(25)] = inst_28304__$1);

return statearr_28390;
})();
if(inst_28304__$1){
var statearr_28391_28456 = state_28345__$1;
(statearr_28391_28456[(1)] = (33));

} else {
var statearr_28392_28457 = state_28345__$1;
(statearr_28392_28457[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (25))){
var inst_28287 = (state_28345[(21)]);
var inst_28288 = (state_28345[(11)]);
var inst_28290 = (inst_28288 < inst_28287);
var inst_28291 = inst_28290;
var state_28345__$1 = state_28345;
if(cljs.core.truth_(inst_28291)){
var statearr_28393_28458 = state_28345__$1;
(statearr_28393_28458[(1)] = (27));

} else {
var statearr_28394_28459 = state_28345__$1;
(statearr_28394_28459[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (34))){
var state_28345__$1 = state_28345;
var statearr_28395_28460 = state_28345__$1;
(statearr_28395_28460[(2)] = null);

(statearr_28395_28460[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (17))){
var state_28345__$1 = state_28345;
var statearr_28396_28461 = state_28345__$1;
(statearr_28396_28461[(2)] = null);

(statearr_28396_28461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (3))){
var inst_28343 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28345__$1,inst_28343);
} else {
if((state_val_28346 === (12))){
var inst_28272 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28397_28462 = state_28345__$1;
(statearr_28397_28462[(2)] = inst_28272);

(statearr_28397_28462[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (2))){
var state_28345__$1 = state_28345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28345__$1,(4),ch);
} else {
if((state_val_28346 === (23))){
var state_28345__$1 = state_28345;
var statearr_28398_28463 = state_28345__$1;
(statearr_28398_28463[(2)] = null);

(statearr_28398_28463[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (35))){
var inst_28327 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28399_28464 = state_28345__$1;
(statearr_28399_28464[(2)] = inst_28327);

(statearr_28399_28464[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (19))){
var inst_28244 = (state_28345[(7)]);
var inst_28248 = cljs.core.chunk_first.call(null,inst_28244);
var inst_28249 = cljs.core.chunk_rest.call(null,inst_28244);
var inst_28250 = cljs.core.count.call(null,inst_28248);
var inst_28222 = inst_28249;
var inst_28223 = inst_28248;
var inst_28224 = inst_28250;
var inst_28225 = (0);
var state_28345__$1 = (function (){var statearr_28400 = state_28345;
(statearr_28400[(13)] = inst_28224);

(statearr_28400[(14)] = inst_28222);

(statearr_28400[(15)] = inst_28225);

(statearr_28400[(16)] = inst_28223);

return statearr_28400;
})();
var statearr_28401_28465 = state_28345__$1;
(statearr_28401_28465[(2)] = null);

(statearr_28401_28465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (11))){
var inst_28222 = (state_28345[(14)]);
var inst_28244 = (state_28345[(7)]);
var inst_28244__$1 = cljs.core.seq.call(null,inst_28222);
var state_28345__$1 = (function (){var statearr_28402 = state_28345;
(statearr_28402[(7)] = inst_28244__$1);

return statearr_28402;
})();
if(inst_28244__$1){
var statearr_28403_28466 = state_28345__$1;
(statearr_28403_28466[(1)] = (16));

} else {
var statearr_28404_28467 = state_28345__$1;
(statearr_28404_28467[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (9))){
var inst_28274 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28405_28468 = state_28345__$1;
(statearr_28405_28468[(2)] = inst_28274);

(statearr_28405_28468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (5))){
var inst_28220 = cljs.core.deref.call(null,cs);
var inst_28221 = cljs.core.seq.call(null,inst_28220);
var inst_28222 = inst_28221;
var inst_28223 = null;
var inst_28224 = (0);
var inst_28225 = (0);
var state_28345__$1 = (function (){var statearr_28406 = state_28345;
(statearr_28406[(13)] = inst_28224);

(statearr_28406[(14)] = inst_28222);

(statearr_28406[(15)] = inst_28225);

(statearr_28406[(16)] = inst_28223);

return statearr_28406;
})();
var statearr_28407_28469 = state_28345__$1;
(statearr_28407_28469[(2)] = null);

(statearr_28407_28469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (14))){
var state_28345__$1 = state_28345;
var statearr_28408_28470 = state_28345__$1;
(statearr_28408_28470[(2)] = null);

(statearr_28408_28470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (45))){
var inst_28335 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28409_28471 = state_28345__$1;
(statearr_28409_28471[(2)] = inst_28335);

(statearr_28409_28471[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (26))){
var inst_28277 = (state_28345[(29)]);
var inst_28331 = (state_28345[(2)]);
var inst_28332 = cljs.core.seq.call(null,inst_28277);
var state_28345__$1 = (function (){var statearr_28410 = state_28345;
(statearr_28410[(31)] = inst_28331);

return statearr_28410;
})();
if(inst_28332){
var statearr_28411_28472 = state_28345__$1;
(statearr_28411_28472[(1)] = (42));

} else {
var statearr_28412_28473 = state_28345__$1;
(statearr_28412_28473[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (16))){
var inst_28244 = (state_28345[(7)]);
var inst_28246 = cljs.core.chunked_seq_QMARK_.call(null,inst_28244);
var state_28345__$1 = state_28345;
if(inst_28246){
var statearr_28413_28474 = state_28345__$1;
(statearr_28413_28474[(1)] = (19));

} else {
var statearr_28414_28475 = state_28345__$1;
(statearr_28414_28475[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (38))){
var inst_28324 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28415_28476 = state_28345__$1;
(statearr_28415_28476[(2)] = inst_28324);

(statearr_28415_28476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (30))){
var state_28345__$1 = state_28345;
var statearr_28416_28477 = state_28345__$1;
(statearr_28416_28477[(2)] = null);

(statearr_28416_28477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (10))){
var inst_28225 = (state_28345[(15)]);
var inst_28223 = (state_28345[(16)]);
var inst_28233 = cljs.core._nth.call(null,inst_28223,inst_28225);
var inst_28234 = cljs.core.nth.call(null,inst_28233,(0),null);
var inst_28235 = cljs.core.nth.call(null,inst_28233,(1),null);
var state_28345__$1 = (function (){var statearr_28417 = state_28345;
(statearr_28417[(26)] = inst_28234);

return statearr_28417;
})();
if(cljs.core.truth_(inst_28235)){
var statearr_28418_28478 = state_28345__$1;
(statearr_28418_28478[(1)] = (13));

} else {
var statearr_28419_28479 = state_28345__$1;
(statearr_28419_28479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (18))){
var inst_28270 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28420_28480 = state_28345__$1;
(statearr_28420_28480[(2)] = inst_28270);

(statearr_28420_28480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (42))){
var state_28345__$1 = state_28345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28345__$1,(45),dchan);
} else {
if((state_val_28346 === (37))){
var inst_28213 = (state_28345[(9)]);
var inst_28304 = (state_28345[(25)]);
var inst_28313 = (state_28345[(23)]);
var inst_28313__$1 = cljs.core.first.call(null,inst_28304);
var inst_28314 = cljs.core.async.put_BANG_.call(null,inst_28313__$1,inst_28213,done);
var state_28345__$1 = (function (){var statearr_28421 = state_28345;
(statearr_28421[(23)] = inst_28313__$1);

return statearr_28421;
})();
if(cljs.core.truth_(inst_28314)){
var statearr_28422_28481 = state_28345__$1;
(statearr_28422_28481[(1)] = (39));

} else {
var statearr_28423_28482 = state_28345__$1;
(statearr_28423_28482[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (8))){
var inst_28224 = (state_28345[(13)]);
var inst_28225 = (state_28345[(15)]);
var inst_28227 = (inst_28225 < inst_28224);
var inst_28228 = inst_28227;
var state_28345__$1 = state_28345;
if(cljs.core.truth_(inst_28228)){
var statearr_28424_28483 = state_28345__$1;
(statearr_28424_28483[(1)] = (10));

} else {
var statearr_28425_28484 = state_28345__$1;
(statearr_28425_28484[(1)] = (11));

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
});})(c__27611__auto___28430,cs,m,dchan,dctr,done))
;
return ((function (switch__27521__auto__,c__27611__auto___28430,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27522__auto__ = null;
var cljs$core$async$mult_$_state_machine__27522__auto____0 = (function (){
var statearr_28426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28426[(0)] = cljs$core$async$mult_$_state_machine__27522__auto__);

(statearr_28426[(1)] = (1));

return statearr_28426;
});
var cljs$core$async$mult_$_state_machine__27522__auto____1 = (function (state_28345){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_28345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e28427){if((e28427 instanceof Object)){
var ex__27525__auto__ = e28427;
var statearr_28428_28485 = state_28345;
(statearr_28428_28485[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28486 = state_28345;
state_28345 = G__28486;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27522__auto__ = function(state_28345){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27522__auto____1.call(this,state_28345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27522__auto____0;
cljs$core$async$mult_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27522__auto____1;
return cljs$core$async$mult_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___28430,cs,m,dchan,dctr,done))
})();
var state__27613__auto__ = (function (){var statearr_28429 = f__27612__auto__.call(null);
(statearr_28429[(6)] = c__27611__auto___28430);

return statearr_28429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___28430,cs,m,dchan,dctr,done))
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
var G__28488 = arguments.length;
switch (G__28488) {
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
var len__4499__auto___28500 = arguments.length;
var i__4500__auto___28501 = (0);
while(true){
if((i__4500__auto___28501 < len__4499__auto___28500)){
args__4502__auto__.push((arguments[i__4500__auto___28501]));

var G__28502 = (i__4500__auto___28501 + (1));
i__4500__auto___28501 = G__28502;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28494){
var map__28495 = p__28494;
var map__28495__$1 = ((((!((map__28495 == null)))?(((((map__28495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28495):map__28495);
var opts = map__28495__$1;
var statearr_28497_28503 = state;
(statearr_28497_28503[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28495,map__28495__$1,opts){
return (function (val){
var statearr_28498_28504 = state;
(statearr_28498_28504[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28495,map__28495__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28499_28505 = state;
(statearr_28499_28505[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28490){
var G__28491 = cljs.core.first.call(null,seq28490);
var seq28490__$1 = cljs.core.next.call(null,seq28490);
var G__28492 = cljs.core.first.call(null,seq28490__$1);
var seq28490__$2 = cljs.core.next.call(null,seq28490__$1);
var G__28493 = cljs.core.first.call(null,seq28490__$2);
var seq28490__$3 = cljs.core.next.call(null,seq28490__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28491,G__28492,G__28493,seq28490__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28506 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28507){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28507 = meta28507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28508,meta28507__$1){
var self__ = this;
var _28508__$1 = this;
return (new cljs.core.async.t_cljs$core$async28506(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28507__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28508){
var self__ = this;
var _28508__$1 = this;
return self__.meta28507;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28506.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28506.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28506.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28506.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28506.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28506.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28506.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28506.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28507","meta28507",-1284700049,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28506";

cljs.core.async.t_cljs$core$async28506.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28506");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28506.
 */
cljs.core.async.__GT_t_cljs$core$async28506 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28506(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28507){
return (new cljs.core.async.t_cljs$core$async28506(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28507));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28506(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27611__auto___28670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___28670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___28670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28610){
var state_val_28611 = (state_28610[(1)]);
if((state_val_28611 === (7))){
var inst_28525 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28612_28671 = state_28610__$1;
(statearr_28612_28671[(2)] = inst_28525);

(statearr_28612_28671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (20))){
var inst_28537 = (state_28610[(7)]);
var state_28610__$1 = state_28610;
var statearr_28613_28672 = state_28610__$1;
(statearr_28613_28672[(2)] = inst_28537);

(statearr_28613_28672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (27))){
var state_28610__$1 = state_28610;
var statearr_28614_28673 = state_28610__$1;
(statearr_28614_28673[(2)] = null);

(statearr_28614_28673[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (1))){
var inst_28512 = (state_28610[(8)]);
var inst_28512__$1 = calc_state.call(null);
var inst_28514 = (inst_28512__$1 == null);
var inst_28515 = cljs.core.not.call(null,inst_28514);
var state_28610__$1 = (function (){var statearr_28615 = state_28610;
(statearr_28615[(8)] = inst_28512__$1);

return statearr_28615;
})();
if(inst_28515){
var statearr_28616_28674 = state_28610__$1;
(statearr_28616_28674[(1)] = (2));

} else {
var statearr_28617_28675 = state_28610__$1;
(statearr_28617_28675[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (24))){
var inst_28570 = (state_28610[(9)]);
var inst_28584 = (state_28610[(10)]);
var inst_28561 = (state_28610[(11)]);
var inst_28584__$1 = inst_28561.call(null,inst_28570);
var state_28610__$1 = (function (){var statearr_28618 = state_28610;
(statearr_28618[(10)] = inst_28584__$1);

return statearr_28618;
})();
if(cljs.core.truth_(inst_28584__$1)){
var statearr_28619_28676 = state_28610__$1;
(statearr_28619_28676[(1)] = (29));

} else {
var statearr_28620_28677 = state_28610__$1;
(statearr_28620_28677[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (4))){
var inst_28528 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28528)){
var statearr_28621_28678 = state_28610__$1;
(statearr_28621_28678[(1)] = (8));

} else {
var statearr_28622_28679 = state_28610__$1;
(statearr_28622_28679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (15))){
var inst_28555 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28555)){
var statearr_28623_28680 = state_28610__$1;
(statearr_28623_28680[(1)] = (19));

} else {
var statearr_28624_28681 = state_28610__$1;
(statearr_28624_28681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (21))){
var inst_28560 = (state_28610[(12)]);
var inst_28560__$1 = (state_28610[(2)]);
var inst_28561 = cljs.core.get.call(null,inst_28560__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28562 = cljs.core.get.call(null,inst_28560__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28563 = cljs.core.get.call(null,inst_28560__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28610__$1 = (function (){var statearr_28625 = state_28610;
(statearr_28625[(12)] = inst_28560__$1);

(statearr_28625[(11)] = inst_28561);

(statearr_28625[(13)] = inst_28562);

return statearr_28625;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28610__$1,(22),inst_28563);
} else {
if((state_val_28611 === (31))){
var inst_28592 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28592)){
var statearr_28626_28682 = state_28610__$1;
(statearr_28626_28682[(1)] = (32));

} else {
var statearr_28627_28683 = state_28610__$1;
(statearr_28627_28683[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (32))){
var inst_28569 = (state_28610[(14)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28610__$1,(35),out,inst_28569);
} else {
if((state_val_28611 === (33))){
var inst_28560 = (state_28610[(12)]);
var inst_28537 = inst_28560;
var state_28610__$1 = (function (){var statearr_28628 = state_28610;
(statearr_28628[(7)] = inst_28537);

return statearr_28628;
})();
var statearr_28629_28684 = state_28610__$1;
(statearr_28629_28684[(2)] = null);

(statearr_28629_28684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (13))){
var inst_28537 = (state_28610[(7)]);
var inst_28544 = inst_28537.cljs$lang$protocol_mask$partition0$;
var inst_28545 = (inst_28544 & (64));
var inst_28546 = inst_28537.cljs$core$ISeq$;
var inst_28547 = (cljs.core.PROTOCOL_SENTINEL === inst_28546);
var inst_28548 = ((inst_28545) || (inst_28547));
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28548)){
var statearr_28630_28685 = state_28610__$1;
(statearr_28630_28685[(1)] = (16));

} else {
var statearr_28631_28686 = state_28610__$1;
(statearr_28631_28686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (22))){
var inst_28569 = (state_28610[(14)]);
var inst_28570 = (state_28610[(9)]);
var inst_28568 = (state_28610[(2)]);
var inst_28569__$1 = cljs.core.nth.call(null,inst_28568,(0),null);
var inst_28570__$1 = cljs.core.nth.call(null,inst_28568,(1),null);
var inst_28571 = (inst_28569__$1 == null);
var inst_28572 = cljs.core._EQ_.call(null,inst_28570__$1,change);
var inst_28573 = ((inst_28571) || (inst_28572));
var state_28610__$1 = (function (){var statearr_28632 = state_28610;
(statearr_28632[(14)] = inst_28569__$1);

(statearr_28632[(9)] = inst_28570__$1);

return statearr_28632;
})();
if(cljs.core.truth_(inst_28573)){
var statearr_28633_28687 = state_28610__$1;
(statearr_28633_28687[(1)] = (23));

} else {
var statearr_28634_28688 = state_28610__$1;
(statearr_28634_28688[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (36))){
var inst_28560 = (state_28610[(12)]);
var inst_28537 = inst_28560;
var state_28610__$1 = (function (){var statearr_28635 = state_28610;
(statearr_28635[(7)] = inst_28537);

return statearr_28635;
})();
var statearr_28636_28689 = state_28610__$1;
(statearr_28636_28689[(2)] = null);

(statearr_28636_28689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (29))){
var inst_28584 = (state_28610[(10)]);
var state_28610__$1 = state_28610;
var statearr_28637_28690 = state_28610__$1;
(statearr_28637_28690[(2)] = inst_28584);

(statearr_28637_28690[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (6))){
var state_28610__$1 = state_28610;
var statearr_28638_28691 = state_28610__$1;
(statearr_28638_28691[(2)] = false);

(statearr_28638_28691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (28))){
var inst_28580 = (state_28610[(2)]);
var inst_28581 = calc_state.call(null);
var inst_28537 = inst_28581;
var state_28610__$1 = (function (){var statearr_28639 = state_28610;
(statearr_28639[(7)] = inst_28537);

(statearr_28639[(15)] = inst_28580);

return statearr_28639;
})();
var statearr_28640_28692 = state_28610__$1;
(statearr_28640_28692[(2)] = null);

(statearr_28640_28692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (25))){
var inst_28606 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28641_28693 = state_28610__$1;
(statearr_28641_28693[(2)] = inst_28606);

(statearr_28641_28693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (34))){
var inst_28604 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28642_28694 = state_28610__$1;
(statearr_28642_28694[(2)] = inst_28604);

(statearr_28642_28694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (17))){
var state_28610__$1 = state_28610;
var statearr_28643_28695 = state_28610__$1;
(statearr_28643_28695[(2)] = false);

(statearr_28643_28695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (3))){
var state_28610__$1 = state_28610;
var statearr_28644_28696 = state_28610__$1;
(statearr_28644_28696[(2)] = false);

(statearr_28644_28696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (12))){
var inst_28608 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28610__$1,inst_28608);
} else {
if((state_val_28611 === (2))){
var inst_28512 = (state_28610[(8)]);
var inst_28517 = inst_28512.cljs$lang$protocol_mask$partition0$;
var inst_28518 = (inst_28517 & (64));
var inst_28519 = inst_28512.cljs$core$ISeq$;
var inst_28520 = (cljs.core.PROTOCOL_SENTINEL === inst_28519);
var inst_28521 = ((inst_28518) || (inst_28520));
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28521)){
var statearr_28645_28697 = state_28610__$1;
(statearr_28645_28697[(1)] = (5));

} else {
var statearr_28646_28698 = state_28610__$1;
(statearr_28646_28698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (23))){
var inst_28569 = (state_28610[(14)]);
var inst_28575 = (inst_28569 == null);
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28575)){
var statearr_28647_28699 = state_28610__$1;
(statearr_28647_28699[(1)] = (26));

} else {
var statearr_28648_28700 = state_28610__$1;
(statearr_28648_28700[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (35))){
var inst_28595 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28595)){
var statearr_28649_28701 = state_28610__$1;
(statearr_28649_28701[(1)] = (36));

} else {
var statearr_28650_28702 = state_28610__$1;
(statearr_28650_28702[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (19))){
var inst_28537 = (state_28610[(7)]);
var inst_28557 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28537);
var state_28610__$1 = state_28610;
var statearr_28651_28703 = state_28610__$1;
(statearr_28651_28703[(2)] = inst_28557);

(statearr_28651_28703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (11))){
var inst_28537 = (state_28610[(7)]);
var inst_28541 = (inst_28537 == null);
var inst_28542 = cljs.core.not.call(null,inst_28541);
var state_28610__$1 = state_28610;
if(inst_28542){
var statearr_28652_28704 = state_28610__$1;
(statearr_28652_28704[(1)] = (13));

} else {
var statearr_28653_28705 = state_28610__$1;
(statearr_28653_28705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (9))){
var inst_28512 = (state_28610[(8)]);
var state_28610__$1 = state_28610;
var statearr_28654_28706 = state_28610__$1;
(statearr_28654_28706[(2)] = inst_28512);

(statearr_28654_28706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (5))){
var state_28610__$1 = state_28610;
var statearr_28655_28707 = state_28610__$1;
(statearr_28655_28707[(2)] = true);

(statearr_28655_28707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (14))){
var state_28610__$1 = state_28610;
var statearr_28656_28708 = state_28610__$1;
(statearr_28656_28708[(2)] = false);

(statearr_28656_28708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (26))){
var inst_28570 = (state_28610[(9)]);
var inst_28577 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28570);
var state_28610__$1 = state_28610;
var statearr_28657_28709 = state_28610__$1;
(statearr_28657_28709[(2)] = inst_28577);

(statearr_28657_28709[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (16))){
var state_28610__$1 = state_28610;
var statearr_28658_28710 = state_28610__$1;
(statearr_28658_28710[(2)] = true);

(statearr_28658_28710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (38))){
var inst_28600 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28659_28711 = state_28610__$1;
(statearr_28659_28711[(2)] = inst_28600);

(statearr_28659_28711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (30))){
var inst_28570 = (state_28610[(9)]);
var inst_28561 = (state_28610[(11)]);
var inst_28562 = (state_28610[(13)]);
var inst_28587 = cljs.core.empty_QMARK_.call(null,inst_28561);
var inst_28588 = inst_28562.call(null,inst_28570);
var inst_28589 = cljs.core.not.call(null,inst_28588);
var inst_28590 = ((inst_28587) && (inst_28589));
var state_28610__$1 = state_28610;
var statearr_28660_28712 = state_28610__$1;
(statearr_28660_28712[(2)] = inst_28590);

(statearr_28660_28712[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (10))){
var inst_28512 = (state_28610[(8)]);
var inst_28533 = (state_28610[(2)]);
var inst_28534 = cljs.core.get.call(null,inst_28533,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28535 = cljs.core.get.call(null,inst_28533,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28536 = cljs.core.get.call(null,inst_28533,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28537 = inst_28512;
var state_28610__$1 = (function (){var statearr_28661 = state_28610;
(statearr_28661[(16)] = inst_28535);

(statearr_28661[(17)] = inst_28534);

(statearr_28661[(7)] = inst_28537);

(statearr_28661[(18)] = inst_28536);

return statearr_28661;
})();
var statearr_28662_28713 = state_28610__$1;
(statearr_28662_28713[(2)] = null);

(statearr_28662_28713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (18))){
var inst_28552 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28663_28714 = state_28610__$1;
(statearr_28663_28714[(2)] = inst_28552);

(statearr_28663_28714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (37))){
var state_28610__$1 = state_28610;
var statearr_28664_28715 = state_28610__$1;
(statearr_28664_28715[(2)] = null);

(statearr_28664_28715[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (8))){
var inst_28512 = (state_28610[(8)]);
var inst_28530 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28512);
var state_28610__$1 = state_28610;
var statearr_28665_28716 = state_28610__$1;
(statearr_28665_28716[(2)] = inst_28530);

(statearr_28665_28716[(1)] = (10));


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
});})(c__27611__auto___28670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27521__auto__,c__27611__auto___28670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27522__auto__ = null;
var cljs$core$async$mix_$_state_machine__27522__auto____0 = (function (){
var statearr_28666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28666[(0)] = cljs$core$async$mix_$_state_machine__27522__auto__);

(statearr_28666[(1)] = (1));

return statearr_28666;
});
var cljs$core$async$mix_$_state_machine__27522__auto____1 = (function (state_28610){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_28610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e28667){if((e28667 instanceof Object)){
var ex__27525__auto__ = e28667;
var statearr_28668_28717 = state_28610;
(statearr_28668_28717[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28718 = state_28610;
state_28610 = G__28718;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27522__auto__ = function(state_28610){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27522__auto____1.call(this,state_28610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27522__auto____0;
cljs$core$async$mix_$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27522__auto____1;
return cljs$core$async$mix_$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___28670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27613__auto__ = (function (){var statearr_28669 = f__27612__auto__.call(null);
(statearr_28669[(6)] = c__27611__auto___28670);

return statearr_28669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___28670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28720 = arguments.length;
switch (G__28720) {
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
var G__28724 = arguments.length;
switch (G__28724) {
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
return (function (p1__28722_SHARP_){
if(cljs.core.truth_(p1__28722_SHARP_.call(null,topic))){
return p1__28722_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28722_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28725 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28726){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28726 = meta28726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28727,meta28726__$1){
var self__ = this;
var _28727__$1 = this;
return (new cljs.core.async.t_cljs$core$async28725(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28726__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28727){
var self__ = this;
var _28727__$1 = this;
return self__.meta28726;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28725.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28726","meta28726",-1700889444,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28725";

cljs.core.async.t_cljs$core$async28725.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28725");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28725.
 */
cljs.core.async.__GT_t_cljs$core$async28725 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28725(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28726){
return (new cljs.core.async.t_cljs$core$async28725(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28726));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28725(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27611__auto___28845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___28845,mults,ensure_mult,p){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___28845,mults,ensure_mult,p){
return (function (state_28799){
var state_val_28800 = (state_28799[(1)]);
if((state_val_28800 === (7))){
var inst_28795 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28801_28846 = state_28799__$1;
(statearr_28801_28846[(2)] = inst_28795);

(statearr_28801_28846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (20))){
var state_28799__$1 = state_28799;
var statearr_28802_28847 = state_28799__$1;
(statearr_28802_28847[(2)] = null);

(statearr_28802_28847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (1))){
var state_28799__$1 = state_28799;
var statearr_28803_28848 = state_28799__$1;
(statearr_28803_28848[(2)] = null);

(statearr_28803_28848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (24))){
var inst_28778 = (state_28799[(7)]);
var inst_28787 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28778);
var state_28799__$1 = state_28799;
var statearr_28804_28849 = state_28799__$1;
(statearr_28804_28849[(2)] = inst_28787);

(statearr_28804_28849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (4))){
var inst_28730 = (state_28799[(8)]);
var inst_28730__$1 = (state_28799[(2)]);
var inst_28731 = (inst_28730__$1 == null);
var state_28799__$1 = (function (){var statearr_28805 = state_28799;
(statearr_28805[(8)] = inst_28730__$1);

return statearr_28805;
})();
if(cljs.core.truth_(inst_28731)){
var statearr_28806_28850 = state_28799__$1;
(statearr_28806_28850[(1)] = (5));

} else {
var statearr_28807_28851 = state_28799__$1;
(statearr_28807_28851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (15))){
var inst_28772 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28808_28852 = state_28799__$1;
(statearr_28808_28852[(2)] = inst_28772);

(statearr_28808_28852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (21))){
var inst_28792 = (state_28799[(2)]);
var state_28799__$1 = (function (){var statearr_28809 = state_28799;
(statearr_28809[(9)] = inst_28792);

return statearr_28809;
})();
var statearr_28810_28853 = state_28799__$1;
(statearr_28810_28853[(2)] = null);

(statearr_28810_28853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (13))){
var inst_28754 = (state_28799[(10)]);
var inst_28756 = cljs.core.chunked_seq_QMARK_.call(null,inst_28754);
var state_28799__$1 = state_28799;
if(inst_28756){
var statearr_28811_28854 = state_28799__$1;
(statearr_28811_28854[(1)] = (16));

} else {
var statearr_28812_28855 = state_28799__$1;
(statearr_28812_28855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (22))){
var inst_28784 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
if(cljs.core.truth_(inst_28784)){
var statearr_28813_28856 = state_28799__$1;
(statearr_28813_28856[(1)] = (23));

} else {
var statearr_28814_28857 = state_28799__$1;
(statearr_28814_28857[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (6))){
var inst_28780 = (state_28799[(11)]);
var inst_28778 = (state_28799[(7)]);
var inst_28730 = (state_28799[(8)]);
var inst_28778__$1 = topic_fn.call(null,inst_28730);
var inst_28779 = cljs.core.deref.call(null,mults);
var inst_28780__$1 = cljs.core.get.call(null,inst_28779,inst_28778__$1);
var state_28799__$1 = (function (){var statearr_28815 = state_28799;
(statearr_28815[(11)] = inst_28780__$1);

(statearr_28815[(7)] = inst_28778__$1);

return statearr_28815;
})();
if(cljs.core.truth_(inst_28780__$1)){
var statearr_28816_28858 = state_28799__$1;
(statearr_28816_28858[(1)] = (19));

} else {
var statearr_28817_28859 = state_28799__$1;
(statearr_28817_28859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (25))){
var inst_28789 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28818_28860 = state_28799__$1;
(statearr_28818_28860[(2)] = inst_28789);

(statearr_28818_28860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (17))){
var inst_28754 = (state_28799[(10)]);
var inst_28763 = cljs.core.first.call(null,inst_28754);
var inst_28764 = cljs.core.async.muxch_STAR_.call(null,inst_28763);
var inst_28765 = cljs.core.async.close_BANG_.call(null,inst_28764);
var inst_28766 = cljs.core.next.call(null,inst_28754);
var inst_28740 = inst_28766;
var inst_28741 = null;
var inst_28742 = (0);
var inst_28743 = (0);
var state_28799__$1 = (function (){var statearr_28819 = state_28799;
(statearr_28819[(12)] = inst_28765);

(statearr_28819[(13)] = inst_28740);

(statearr_28819[(14)] = inst_28741);

(statearr_28819[(15)] = inst_28742);

(statearr_28819[(16)] = inst_28743);

return statearr_28819;
})();
var statearr_28820_28861 = state_28799__$1;
(statearr_28820_28861[(2)] = null);

(statearr_28820_28861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (3))){
var inst_28797 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28799__$1,inst_28797);
} else {
if((state_val_28800 === (12))){
var inst_28774 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28821_28862 = state_28799__$1;
(statearr_28821_28862[(2)] = inst_28774);

(statearr_28821_28862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (2))){
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28799__$1,(4),ch);
} else {
if((state_val_28800 === (23))){
var state_28799__$1 = state_28799;
var statearr_28822_28863 = state_28799__$1;
(statearr_28822_28863[(2)] = null);

(statearr_28822_28863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (19))){
var inst_28780 = (state_28799[(11)]);
var inst_28730 = (state_28799[(8)]);
var inst_28782 = cljs.core.async.muxch_STAR_.call(null,inst_28780);
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28799__$1,(22),inst_28782,inst_28730);
} else {
if((state_val_28800 === (11))){
var inst_28740 = (state_28799[(13)]);
var inst_28754 = (state_28799[(10)]);
var inst_28754__$1 = cljs.core.seq.call(null,inst_28740);
var state_28799__$1 = (function (){var statearr_28823 = state_28799;
(statearr_28823[(10)] = inst_28754__$1);

return statearr_28823;
})();
if(inst_28754__$1){
var statearr_28824_28864 = state_28799__$1;
(statearr_28824_28864[(1)] = (13));

} else {
var statearr_28825_28865 = state_28799__$1;
(statearr_28825_28865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (9))){
var inst_28776 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28826_28866 = state_28799__$1;
(statearr_28826_28866[(2)] = inst_28776);

(statearr_28826_28866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (5))){
var inst_28737 = cljs.core.deref.call(null,mults);
var inst_28738 = cljs.core.vals.call(null,inst_28737);
var inst_28739 = cljs.core.seq.call(null,inst_28738);
var inst_28740 = inst_28739;
var inst_28741 = null;
var inst_28742 = (0);
var inst_28743 = (0);
var state_28799__$1 = (function (){var statearr_28827 = state_28799;
(statearr_28827[(13)] = inst_28740);

(statearr_28827[(14)] = inst_28741);

(statearr_28827[(15)] = inst_28742);

(statearr_28827[(16)] = inst_28743);

return statearr_28827;
})();
var statearr_28828_28867 = state_28799__$1;
(statearr_28828_28867[(2)] = null);

(statearr_28828_28867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (14))){
var state_28799__$1 = state_28799;
var statearr_28832_28868 = state_28799__$1;
(statearr_28832_28868[(2)] = null);

(statearr_28832_28868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (16))){
var inst_28754 = (state_28799[(10)]);
var inst_28758 = cljs.core.chunk_first.call(null,inst_28754);
var inst_28759 = cljs.core.chunk_rest.call(null,inst_28754);
var inst_28760 = cljs.core.count.call(null,inst_28758);
var inst_28740 = inst_28759;
var inst_28741 = inst_28758;
var inst_28742 = inst_28760;
var inst_28743 = (0);
var state_28799__$1 = (function (){var statearr_28833 = state_28799;
(statearr_28833[(13)] = inst_28740);

(statearr_28833[(14)] = inst_28741);

(statearr_28833[(15)] = inst_28742);

(statearr_28833[(16)] = inst_28743);

return statearr_28833;
})();
var statearr_28834_28869 = state_28799__$1;
(statearr_28834_28869[(2)] = null);

(statearr_28834_28869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (10))){
var inst_28740 = (state_28799[(13)]);
var inst_28741 = (state_28799[(14)]);
var inst_28742 = (state_28799[(15)]);
var inst_28743 = (state_28799[(16)]);
var inst_28748 = cljs.core._nth.call(null,inst_28741,inst_28743);
var inst_28749 = cljs.core.async.muxch_STAR_.call(null,inst_28748);
var inst_28750 = cljs.core.async.close_BANG_.call(null,inst_28749);
var inst_28751 = (inst_28743 + (1));
var tmp28829 = inst_28740;
var tmp28830 = inst_28741;
var tmp28831 = inst_28742;
var inst_28740__$1 = tmp28829;
var inst_28741__$1 = tmp28830;
var inst_28742__$1 = tmp28831;
var inst_28743__$1 = inst_28751;
var state_28799__$1 = (function (){var statearr_28835 = state_28799;
(statearr_28835[(13)] = inst_28740__$1);

(statearr_28835[(14)] = inst_28741__$1);

(statearr_28835[(15)] = inst_28742__$1);

(statearr_28835[(17)] = inst_28750);

(statearr_28835[(16)] = inst_28743__$1);

return statearr_28835;
})();
var statearr_28836_28870 = state_28799__$1;
(statearr_28836_28870[(2)] = null);

(statearr_28836_28870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (18))){
var inst_28769 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28837_28871 = state_28799__$1;
(statearr_28837_28871[(2)] = inst_28769);

(statearr_28837_28871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (8))){
var inst_28742 = (state_28799[(15)]);
var inst_28743 = (state_28799[(16)]);
var inst_28745 = (inst_28743 < inst_28742);
var inst_28746 = inst_28745;
var state_28799__$1 = state_28799;
if(cljs.core.truth_(inst_28746)){
var statearr_28838_28872 = state_28799__$1;
(statearr_28838_28872[(1)] = (10));

} else {
var statearr_28839_28873 = state_28799__$1;
(statearr_28839_28873[(1)] = (11));

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
});})(c__27611__auto___28845,mults,ensure_mult,p))
;
return ((function (switch__27521__auto__,c__27611__auto___28845,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_28840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28840[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_28840[(1)] = (1));

return statearr_28840;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_28799){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_28799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e28841){if((e28841 instanceof Object)){
var ex__27525__auto__ = e28841;
var statearr_28842_28874 = state_28799;
(statearr_28842_28874[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28875 = state_28799;
state_28799 = G__28875;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_28799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_28799);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___28845,mults,ensure_mult,p))
})();
var state__27613__auto__ = (function (){var statearr_28843 = f__27612__auto__.call(null);
(statearr_28843[(6)] = c__27611__auto___28845);

return statearr_28843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___28845,mults,ensure_mult,p))
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
var G__28877 = arguments.length;
switch (G__28877) {
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
var G__28880 = arguments.length;
switch (G__28880) {
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
var G__28883 = arguments.length;
switch (G__28883) {
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
var c__27611__auto___28950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___28950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___28950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28922){
var state_val_28923 = (state_28922[(1)]);
if((state_val_28923 === (7))){
var state_28922__$1 = state_28922;
var statearr_28924_28951 = state_28922__$1;
(statearr_28924_28951[(2)] = null);

(statearr_28924_28951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (1))){
var state_28922__$1 = state_28922;
var statearr_28925_28952 = state_28922__$1;
(statearr_28925_28952[(2)] = null);

(statearr_28925_28952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (4))){
var inst_28886 = (state_28922[(7)]);
var inst_28888 = (inst_28886 < cnt);
var state_28922__$1 = state_28922;
if(cljs.core.truth_(inst_28888)){
var statearr_28926_28953 = state_28922__$1;
(statearr_28926_28953[(1)] = (6));

} else {
var statearr_28927_28954 = state_28922__$1;
(statearr_28927_28954[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (15))){
var inst_28918 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28928_28955 = state_28922__$1;
(statearr_28928_28955[(2)] = inst_28918);

(statearr_28928_28955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (13))){
var inst_28911 = cljs.core.async.close_BANG_.call(null,out);
var state_28922__$1 = state_28922;
var statearr_28929_28956 = state_28922__$1;
(statearr_28929_28956[(2)] = inst_28911);

(statearr_28929_28956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (6))){
var state_28922__$1 = state_28922;
var statearr_28930_28957 = state_28922__$1;
(statearr_28930_28957[(2)] = null);

(statearr_28930_28957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (3))){
var inst_28920 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28922__$1,inst_28920);
} else {
if((state_val_28923 === (12))){
var inst_28908 = (state_28922[(8)]);
var inst_28908__$1 = (state_28922[(2)]);
var inst_28909 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28908__$1);
var state_28922__$1 = (function (){var statearr_28931 = state_28922;
(statearr_28931[(8)] = inst_28908__$1);

return statearr_28931;
})();
if(cljs.core.truth_(inst_28909)){
var statearr_28932_28958 = state_28922__$1;
(statearr_28932_28958[(1)] = (13));

} else {
var statearr_28933_28959 = state_28922__$1;
(statearr_28933_28959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (2))){
var inst_28885 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28886 = (0);
var state_28922__$1 = (function (){var statearr_28934 = state_28922;
(statearr_28934[(9)] = inst_28885);

(statearr_28934[(7)] = inst_28886);

return statearr_28934;
})();
var statearr_28935_28960 = state_28922__$1;
(statearr_28935_28960[(2)] = null);

(statearr_28935_28960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (11))){
var inst_28886 = (state_28922[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28922,(10),Object,null,(9));
var inst_28895 = chs__$1.call(null,inst_28886);
var inst_28896 = done.call(null,inst_28886);
var inst_28897 = cljs.core.async.take_BANG_.call(null,inst_28895,inst_28896);
var state_28922__$1 = state_28922;
var statearr_28936_28961 = state_28922__$1;
(statearr_28936_28961[(2)] = inst_28897);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (9))){
var inst_28886 = (state_28922[(7)]);
var inst_28899 = (state_28922[(2)]);
var inst_28900 = (inst_28886 + (1));
var inst_28886__$1 = inst_28900;
var state_28922__$1 = (function (){var statearr_28937 = state_28922;
(statearr_28937[(7)] = inst_28886__$1);

(statearr_28937[(10)] = inst_28899);

return statearr_28937;
})();
var statearr_28938_28962 = state_28922__$1;
(statearr_28938_28962[(2)] = null);

(statearr_28938_28962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (5))){
var inst_28906 = (state_28922[(2)]);
var state_28922__$1 = (function (){var statearr_28939 = state_28922;
(statearr_28939[(11)] = inst_28906);

return statearr_28939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28922__$1,(12),dchan);
} else {
if((state_val_28923 === (14))){
var inst_28908 = (state_28922[(8)]);
var inst_28913 = cljs.core.apply.call(null,f,inst_28908);
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28922__$1,(16),out,inst_28913);
} else {
if((state_val_28923 === (16))){
var inst_28915 = (state_28922[(2)]);
var state_28922__$1 = (function (){var statearr_28940 = state_28922;
(statearr_28940[(12)] = inst_28915);

return statearr_28940;
})();
var statearr_28941_28963 = state_28922__$1;
(statearr_28941_28963[(2)] = null);

(statearr_28941_28963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (10))){
var inst_28890 = (state_28922[(2)]);
var inst_28891 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28922__$1 = (function (){var statearr_28942 = state_28922;
(statearr_28942[(13)] = inst_28890);

return statearr_28942;
})();
var statearr_28943_28964 = state_28922__$1;
(statearr_28943_28964[(2)] = inst_28891);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (8))){
var inst_28904 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28944_28965 = state_28922__$1;
(statearr_28944_28965[(2)] = inst_28904);

(statearr_28944_28965[(1)] = (5));


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
});})(c__27611__auto___28950,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27521__auto__,c__27611__auto___28950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_28945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28945[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_28945[(1)] = (1));

return statearr_28945;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_28922){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_28922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e28946){if((e28946 instanceof Object)){
var ex__27525__auto__ = e28946;
var statearr_28947_28966 = state_28922;
(statearr_28947_28966[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28967 = state_28922;
state_28922 = G__28967;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_28922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_28922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___28950,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27613__auto__ = (function (){var statearr_28948 = f__27612__auto__.call(null);
(statearr_28948[(6)] = c__27611__auto___28950);

return statearr_28948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___28950,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28970 = arguments.length;
switch (G__28970) {
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
var c__27611__auto___29024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___29024,out){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___29024,out){
return (function (state_29002){
var state_val_29003 = (state_29002[(1)]);
if((state_val_29003 === (7))){
var inst_28982 = (state_29002[(7)]);
var inst_28981 = (state_29002[(8)]);
var inst_28981__$1 = (state_29002[(2)]);
var inst_28982__$1 = cljs.core.nth.call(null,inst_28981__$1,(0),null);
var inst_28983 = cljs.core.nth.call(null,inst_28981__$1,(1),null);
var inst_28984 = (inst_28982__$1 == null);
var state_29002__$1 = (function (){var statearr_29004 = state_29002;
(statearr_29004[(9)] = inst_28983);

(statearr_29004[(7)] = inst_28982__$1);

(statearr_29004[(8)] = inst_28981__$1);

return statearr_29004;
})();
if(cljs.core.truth_(inst_28984)){
var statearr_29005_29025 = state_29002__$1;
(statearr_29005_29025[(1)] = (8));

} else {
var statearr_29006_29026 = state_29002__$1;
(statearr_29006_29026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29003 === (1))){
var inst_28971 = cljs.core.vec.call(null,chs);
var inst_28972 = inst_28971;
var state_29002__$1 = (function (){var statearr_29007 = state_29002;
(statearr_29007[(10)] = inst_28972);

return statearr_29007;
})();
var statearr_29008_29027 = state_29002__$1;
(statearr_29008_29027[(2)] = null);

(statearr_29008_29027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29003 === (4))){
var inst_28972 = (state_29002[(10)]);
var state_29002__$1 = state_29002;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29002__$1,(7),inst_28972);
} else {
if((state_val_29003 === (6))){
var inst_28998 = (state_29002[(2)]);
var state_29002__$1 = state_29002;
var statearr_29009_29028 = state_29002__$1;
(statearr_29009_29028[(2)] = inst_28998);

(statearr_29009_29028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29003 === (3))){
var inst_29000 = (state_29002[(2)]);
var state_29002__$1 = state_29002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29002__$1,inst_29000);
} else {
if((state_val_29003 === (2))){
var inst_28972 = (state_29002[(10)]);
var inst_28974 = cljs.core.count.call(null,inst_28972);
var inst_28975 = (inst_28974 > (0));
var state_29002__$1 = state_29002;
if(cljs.core.truth_(inst_28975)){
var statearr_29011_29029 = state_29002__$1;
(statearr_29011_29029[(1)] = (4));

} else {
var statearr_29012_29030 = state_29002__$1;
(statearr_29012_29030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29003 === (11))){
var inst_28972 = (state_29002[(10)]);
var inst_28991 = (state_29002[(2)]);
var tmp29010 = inst_28972;
var inst_28972__$1 = tmp29010;
var state_29002__$1 = (function (){var statearr_29013 = state_29002;
(statearr_29013[(11)] = inst_28991);

(statearr_29013[(10)] = inst_28972__$1);

return statearr_29013;
})();
var statearr_29014_29031 = state_29002__$1;
(statearr_29014_29031[(2)] = null);

(statearr_29014_29031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29003 === (9))){
var inst_28982 = (state_29002[(7)]);
var state_29002__$1 = state_29002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29002__$1,(11),out,inst_28982);
} else {
if((state_val_29003 === (5))){
var inst_28996 = cljs.core.async.close_BANG_.call(null,out);
var state_29002__$1 = state_29002;
var statearr_29015_29032 = state_29002__$1;
(statearr_29015_29032[(2)] = inst_28996);

(statearr_29015_29032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29003 === (10))){
var inst_28994 = (state_29002[(2)]);
var state_29002__$1 = state_29002;
var statearr_29016_29033 = state_29002__$1;
(statearr_29016_29033[(2)] = inst_28994);

(statearr_29016_29033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29003 === (8))){
var inst_28983 = (state_29002[(9)]);
var inst_28982 = (state_29002[(7)]);
var inst_28972 = (state_29002[(10)]);
var inst_28981 = (state_29002[(8)]);
var inst_28986 = (function (){var cs = inst_28972;
var vec__28977 = inst_28981;
var v = inst_28982;
var c = inst_28983;
return ((function (cs,vec__28977,v,c,inst_28983,inst_28982,inst_28972,inst_28981,state_val_29003,c__27611__auto___29024,out){
return (function (p1__28968_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28968_SHARP_);
});
;})(cs,vec__28977,v,c,inst_28983,inst_28982,inst_28972,inst_28981,state_val_29003,c__27611__auto___29024,out))
})();
var inst_28987 = cljs.core.filterv.call(null,inst_28986,inst_28972);
var inst_28972__$1 = inst_28987;
var state_29002__$1 = (function (){var statearr_29017 = state_29002;
(statearr_29017[(10)] = inst_28972__$1);

return statearr_29017;
})();
var statearr_29018_29034 = state_29002__$1;
(statearr_29018_29034[(2)] = null);

(statearr_29018_29034[(1)] = (2));


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
});})(c__27611__auto___29024,out))
;
return ((function (switch__27521__auto__,c__27611__auto___29024,out){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_29019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29019[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_29019[(1)] = (1));

return statearr_29019;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_29002){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_29002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e29020){if((e29020 instanceof Object)){
var ex__27525__auto__ = e29020;
var statearr_29021_29035 = state_29002;
(statearr_29021_29035[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29036 = state_29002;
state_29002 = G__29036;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_29002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_29002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___29024,out))
})();
var state__27613__auto__ = (function (){var statearr_29022 = f__27612__auto__.call(null);
(statearr_29022[(6)] = c__27611__auto___29024);

return statearr_29022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___29024,out))
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
var G__29038 = arguments.length;
switch (G__29038) {
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
var c__27611__auto___29083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___29083,out){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___29083,out){
return (function (state_29062){
var state_val_29063 = (state_29062[(1)]);
if((state_val_29063 === (7))){
var inst_29044 = (state_29062[(7)]);
var inst_29044__$1 = (state_29062[(2)]);
var inst_29045 = (inst_29044__$1 == null);
var inst_29046 = cljs.core.not.call(null,inst_29045);
var state_29062__$1 = (function (){var statearr_29064 = state_29062;
(statearr_29064[(7)] = inst_29044__$1);

return statearr_29064;
})();
if(inst_29046){
var statearr_29065_29084 = state_29062__$1;
(statearr_29065_29084[(1)] = (8));

} else {
var statearr_29066_29085 = state_29062__$1;
(statearr_29066_29085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (1))){
var inst_29039 = (0);
var state_29062__$1 = (function (){var statearr_29067 = state_29062;
(statearr_29067[(8)] = inst_29039);

return statearr_29067;
})();
var statearr_29068_29086 = state_29062__$1;
(statearr_29068_29086[(2)] = null);

(statearr_29068_29086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (4))){
var state_29062__$1 = state_29062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29062__$1,(7),ch);
} else {
if((state_val_29063 === (6))){
var inst_29057 = (state_29062[(2)]);
var state_29062__$1 = state_29062;
var statearr_29069_29087 = state_29062__$1;
(statearr_29069_29087[(2)] = inst_29057);

(statearr_29069_29087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (3))){
var inst_29059 = (state_29062[(2)]);
var inst_29060 = cljs.core.async.close_BANG_.call(null,out);
var state_29062__$1 = (function (){var statearr_29070 = state_29062;
(statearr_29070[(9)] = inst_29059);

return statearr_29070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29062__$1,inst_29060);
} else {
if((state_val_29063 === (2))){
var inst_29039 = (state_29062[(8)]);
var inst_29041 = (inst_29039 < n);
var state_29062__$1 = state_29062;
if(cljs.core.truth_(inst_29041)){
var statearr_29071_29088 = state_29062__$1;
(statearr_29071_29088[(1)] = (4));

} else {
var statearr_29072_29089 = state_29062__$1;
(statearr_29072_29089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (11))){
var inst_29039 = (state_29062[(8)]);
var inst_29049 = (state_29062[(2)]);
var inst_29050 = (inst_29039 + (1));
var inst_29039__$1 = inst_29050;
var state_29062__$1 = (function (){var statearr_29073 = state_29062;
(statearr_29073[(8)] = inst_29039__$1);

(statearr_29073[(10)] = inst_29049);

return statearr_29073;
})();
var statearr_29074_29090 = state_29062__$1;
(statearr_29074_29090[(2)] = null);

(statearr_29074_29090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (9))){
var state_29062__$1 = state_29062;
var statearr_29075_29091 = state_29062__$1;
(statearr_29075_29091[(2)] = null);

(statearr_29075_29091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (5))){
var state_29062__$1 = state_29062;
var statearr_29076_29092 = state_29062__$1;
(statearr_29076_29092[(2)] = null);

(statearr_29076_29092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (10))){
var inst_29054 = (state_29062[(2)]);
var state_29062__$1 = state_29062;
var statearr_29077_29093 = state_29062__$1;
(statearr_29077_29093[(2)] = inst_29054);

(statearr_29077_29093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (8))){
var inst_29044 = (state_29062[(7)]);
var state_29062__$1 = state_29062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29062__$1,(11),out,inst_29044);
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
});})(c__27611__auto___29083,out))
;
return ((function (switch__27521__auto__,c__27611__auto___29083,out){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_29078 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29078[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_29078[(1)] = (1));

return statearr_29078;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_29062){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_29062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e29079){if((e29079 instanceof Object)){
var ex__27525__auto__ = e29079;
var statearr_29080_29094 = state_29062;
(statearr_29080_29094[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29095 = state_29062;
state_29062 = G__29095;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_29062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_29062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___29083,out))
})();
var state__27613__auto__ = (function (){var statearr_29081 = f__27612__auto__.call(null);
(statearr_29081[(6)] = c__27611__auto___29083);

return statearr_29081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___29083,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29097 = (function (f,ch,meta29098){
this.f = f;
this.ch = ch;
this.meta29098 = meta29098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29099,meta29098__$1){
var self__ = this;
var _29099__$1 = this;
return (new cljs.core.async.t_cljs$core$async29097(self__.f,self__.ch,meta29098__$1));
});

cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29099){
var self__ = this;
var _29099__$1 = this;
return self__.meta29098;
});

cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29100 = (function (f,ch,meta29098,_,fn1,meta29101){
this.f = f;
this.ch = ch;
this.meta29098 = meta29098;
this._ = _;
this.fn1 = fn1;
this.meta29101 = meta29101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29102,meta29101__$1){
var self__ = this;
var _29102__$1 = this;
return (new cljs.core.async.t_cljs$core$async29100(self__.f,self__.ch,self__.meta29098,self__._,self__.fn1,meta29101__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29102){
var self__ = this;
var _29102__$1 = this;
return self__.meta29101;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29096_SHARP_){
return f1.call(null,(((p1__29096_SHARP_ == null))?null:self__.f.call(null,p1__29096_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29100.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29098","meta29098",522364279,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29097","cljs.core.async/t_cljs$core$async29097",2139832912,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29101","meta29101",463567463,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29100";

cljs.core.async.t_cljs$core$async29100.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29100");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29100.
 */
cljs.core.async.__GT_t_cljs$core$async29100 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29100(f__$1,ch__$1,meta29098__$1,___$2,fn1__$1,meta29101){
return (new cljs.core.async.t_cljs$core$async29100(f__$1,ch__$1,meta29098__$1,___$2,fn1__$1,meta29101));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29100(self__.f,self__.ch,self__.meta29098,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29098","meta29098",522364279,null)], null);
});

cljs.core.async.t_cljs$core$async29097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29097";

cljs.core.async.t_cljs$core$async29097.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29097");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29097.
 */
cljs.core.async.__GT_t_cljs$core$async29097 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29097(f__$1,ch__$1,meta29098){
return (new cljs.core.async.t_cljs$core$async29097(f__$1,ch__$1,meta29098));
});

}

return (new cljs.core.async.t_cljs$core$async29097(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29103 = (function (f,ch,meta29104){
this.f = f;
this.ch = ch;
this.meta29104 = meta29104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29105,meta29104__$1){
var self__ = this;
var _29105__$1 = this;
return (new cljs.core.async.t_cljs$core$async29103(self__.f,self__.ch,meta29104__$1));
});

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29105){
var self__ = this;
var _29105__$1 = this;
return self__.meta29104;
});

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29104","meta29104",953160822,null)], null);
});

cljs.core.async.t_cljs$core$async29103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29103";

cljs.core.async.t_cljs$core$async29103.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29103");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29103.
 */
cljs.core.async.__GT_t_cljs$core$async29103 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29103(f__$1,ch__$1,meta29104){
return (new cljs.core.async.t_cljs$core$async29103(f__$1,ch__$1,meta29104));
});

}

return (new cljs.core.async.t_cljs$core$async29103(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29106 = (function (p,ch,meta29107){
this.p = p;
this.ch = ch;
this.meta29107 = meta29107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29108,meta29107__$1){
var self__ = this;
var _29108__$1 = this;
return (new cljs.core.async.t_cljs$core$async29106(self__.p,self__.ch,meta29107__$1));
});

cljs.core.async.t_cljs$core$async29106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29108){
var self__ = this;
var _29108__$1 = this;
return self__.meta29107;
});

cljs.core.async.t_cljs$core$async29106.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29106.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29106.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29106.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29107","meta29107",1022921018,null)], null);
});

cljs.core.async.t_cljs$core$async29106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29106";

cljs.core.async.t_cljs$core$async29106.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29106");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29106.
 */
cljs.core.async.__GT_t_cljs$core$async29106 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29106(p__$1,ch__$1,meta29107){
return (new cljs.core.async.t_cljs$core$async29106(p__$1,ch__$1,meta29107));
});

}

return (new cljs.core.async.t_cljs$core$async29106(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29110 = arguments.length;
switch (G__29110) {
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
var c__27611__auto___29150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___29150,out){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___29150,out){
return (function (state_29131){
var state_val_29132 = (state_29131[(1)]);
if((state_val_29132 === (7))){
var inst_29127 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29133_29151 = state_29131__$1;
(statearr_29133_29151[(2)] = inst_29127);

(statearr_29133_29151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (1))){
var state_29131__$1 = state_29131;
var statearr_29134_29152 = state_29131__$1;
(statearr_29134_29152[(2)] = null);

(statearr_29134_29152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (4))){
var inst_29113 = (state_29131[(7)]);
var inst_29113__$1 = (state_29131[(2)]);
var inst_29114 = (inst_29113__$1 == null);
var state_29131__$1 = (function (){var statearr_29135 = state_29131;
(statearr_29135[(7)] = inst_29113__$1);

return statearr_29135;
})();
if(cljs.core.truth_(inst_29114)){
var statearr_29136_29153 = state_29131__$1;
(statearr_29136_29153[(1)] = (5));

} else {
var statearr_29137_29154 = state_29131__$1;
(statearr_29137_29154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (6))){
var inst_29113 = (state_29131[(7)]);
var inst_29118 = p.call(null,inst_29113);
var state_29131__$1 = state_29131;
if(cljs.core.truth_(inst_29118)){
var statearr_29138_29155 = state_29131__$1;
(statearr_29138_29155[(1)] = (8));

} else {
var statearr_29139_29156 = state_29131__$1;
(statearr_29139_29156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (3))){
var inst_29129 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29131__$1,inst_29129);
} else {
if((state_val_29132 === (2))){
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29131__$1,(4),ch);
} else {
if((state_val_29132 === (11))){
var inst_29121 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29140_29157 = state_29131__$1;
(statearr_29140_29157[(2)] = inst_29121);

(statearr_29140_29157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (9))){
var state_29131__$1 = state_29131;
var statearr_29141_29158 = state_29131__$1;
(statearr_29141_29158[(2)] = null);

(statearr_29141_29158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (5))){
var inst_29116 = cljs.core.async.close_BANG_.call(null,out);
var state_29131__$1 = state_29131;
var statearr_29142_29159 = state_29131__$1;
(statearr_29142_29159[(2)] = inst_29116);

(statearr_29142_29159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (10))){
var inst_29124 = (state_29131[(2)]);
var state_29131__$1 = (function (){var statearr_29143 = state_29131;
(statearr_29143[(8)] = inst_29124);

return statearr_29143;
})();
var statearr_29144_29160 = state_29131__$1;
(statearr_29144_29160[(2)] = null);

(statearr_29144_29160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (8))){
var inst_29113 = (state_29131[(7)]);
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29131__$1,(11),out,inst_29113);
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
});})(c__27611__auto___29150,out))
;
return ((function (switch__27521__auto__,c__27611__auto___29150,out){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_29145 = [null,null,null,null,null,null,null,null,null];
(statearr_29145[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_29145[(1)] = (1));

return statearr_29145;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_29131){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_29131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e29146){if((e29146 instanceof Object)){
var ex__27525__auto__ = e29146;
var statearr_29147_29161 = state_29131;
(statearr_29147_29161[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29162 = state_29131;
state_29131 = G__29162;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_29131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_29131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___29150,out))
})();
var state__27613__auto__ = (function (){var statearr_29148 = f__27612__auto__.call(null);
(statearr_29148[(6)] = c__27611__auto___29150);

return statearr_29148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___29150,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29164 = arguments.length;
switch (G__29164) {
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
var c__27611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto__){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto__){
return (function (state_29227){
var state_val_29228 = (state_29227[(1)]);
if((state_val_29228 === (7))){
var inst_29223 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29229_29267 = state_29227__$1;
(statearr_29229_29267[(2)] = inst_29223);

(statearr_29229_29267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (20))){
var inst_29193 = (state_29227[(7)]);
var inst_29204 = (state_29227[(2)]);
var inst_29205 = cljs.core.next.call(null,inst_29193);
var inst_29179 = inst_29205;
var inst_29180 = null;
var inst_29181 = (0);
var inst_29182 = (0);
var state_29227__$1 = (function (){var statearr_29230 = state_29227;
(statearr_29230[(8)] = inst_29181);

(statearr_29230[(9)] = inst_29180);

(statearr_29230[(10)] = inst_29182);

(statearr_29230[(11)] = inst_29204);

(statearr_29230[(12)] = inst_29179);

return statearr_29230;
})();
var statearr_29231_29268 = state_29227__$1;
(statearr_29231_29268[(2)] = null);

(statearr_29231_29268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (1))){
var state_29227__$1 = state_29227;
var statearr_29232_29269 = state_29227__$1;
(statearr_29232_29269[(2)] = null);

(statearr_29232_29269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (4))){
var inst_29168 = (state_29227[(13)]);
var inst_29168__$1 = (state_29227[(2)]);
var inst_29169 = (inst_29168__$1 == null);
var state_29227__$1 = (function (){var statearr_29233 = state_29227;
(statearr_29233[(13)] = inst_29168__$1);

return statearr_29233;
})();
if(cljs.core.truth_(inst_29169)){
var statearr_29234_29270 = state_29227__$1;
(statearr_29234_29270[(1)] = (5));

} else {
var statearr_29235_29271 = state_29227__$1;
(statearr_29235_29271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (15))){
var state_29227__$1 = state_29227;
var statearr_29239_29272 = state_29227__$1;
(statearr_29239_29272[(2)] = null);

(statearr_29239_29272[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (21))){
var state_29227__$1 = state_29227;
var statearr_29240_29273 = state_29227__$1;
(statearr_29240_29273[(2)] = null);

(statearr_29240_29273[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (13))){
var inst_29181 = (state_29227[(8)]);
var inst_29180 = (state_29227[(9)]);
var inst_29182 = (state_29227[(10)]);
var inst_29179 = (state_29227[(12)]);
var inst_29189 = (state_29227[(2)]);
var inst_29190 = (inst_29182 + (1));
var tmp29236 = inst_29181;
var tmp29237 = inst_29180;
var tmp29238 = inst_29179;
var inst_29179__$1 = tmp29238;
var inst_29180__$1 = tmp29237;
var inst_29181__$1 = tmp29236;
var inst_29182__$1 = inst_29190;
var state_29227__$1 = (function (){var statearr_29241 = state_29227;
(statearr_29241[(8)] = inst_29181__$1);

(statearr_29241[(9)] = inst_29180__$1);

(statearr_29241[(10)] = inst_29182__$1);

(statearr_29241[(14)] = inst_29189);

(statearr_29241[(12)] = inst_29179__$1);

return statearr_29241;
})();
var statearr_29242_29274 = state_29227__$1;
(statearr_29242_29274[(2)] = null);

(statearr_29242_29274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (22))){
var state_29227__$1 = state_29227;
var statearr_29243_29275 = state_29227__$1;
(statearr_29243_29275[(2)] = null);

(statearr_29243_29275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (6))){
var inst_29168 = (state_29227[(13)]);
var inst_29177 = f.call(null,inst_29168);
var inst_29178 = cljs.core.seq.call(null,inst_29177);
var inst_29179 = inst_29178;
var inst_29180 = null;
var inst_29181 = (0);
var inst_29182 = (0);
var state_29227__$1 = (function (){var statearr_29244 = state_29227;
(statearr_29244[(8)] = inst_29181);

(statearr_29244[(9)] = inst_29180);

(statearr_29244[(10)] = inst_29182);

(statearr_29244[(12)] = inst_29179);

return statearr_29244;
})();
var statearr_29245_29276 = state_29227__$1;
(statearr_29245_29276[(2)] = null);

(statearr_29245_29276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (17))){
var inst_29193 = (state_29227[(7)]);
var inst_29197 = cljs.core.chunk_first.call(null,inst_29193);
var inst_29198 = cljs.core.chunk_rest.call(null,inst_29193);
var inst_29199 = cljs.core.count.call(null,inst_29197);
var inst_29179 = inst_29198;
var inst_29180 = inst_29197;
var inst_29181 = inst_29199;
var inst_29182 = (0);
var state_29227__$1 = (function (){var statearr_29246 = state_29227;
(statearr_29246[(8)] = inst_29181);

(statearr_29246[(9)] = inst_29180);

(statearr_29246[(10)] = inst_29182);

(statearr_29246[(12)] = inst_29179);

return statearr_29246;
})();
var statearr_29247_29277 = state_29227__$1;
(statearr_29247_29277[(2)] = null);

(statearr_29247_29277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (3))){
var inst_29225 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29227__$1,inst_29225);
} else {
if((state_val_29228 === (12))){
var inst_29213 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29248_29278 = state_29227__$1;
(statearr_29248_29278[(2)] = inst_29213);

(statearr_29248_29278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (2))){
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29227__$1,(4),in$);
} else {
if((state_val_29228 === (23))){
var inst_29221 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29249_29279 = state_29227__$1;
(statearr_29249_29279[(2)] = inst_29221);

(statearr_29249_29279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (19))){
var inst_29208 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29250_29280 = state_29227__$1;
(statearr_29250_29280[(2)] = inst_29208);

(statearr_29250_29280[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (11))){
var inst_29193 = (state_29227[(7)]);
var inst_29179 = (state_29227[(12)]);
var inst_29193__$1 = cljs.core.seq.call(null,inst_29179);
var state_29227__$1 = (function (){var statearr_29251 = state_29227;
(statearr_29251[(7)] = inst_29193__$1);

return statearr_29251;
})();
if(inst_29193__$1){
var statearr_29252_29281 = state_29227__$1;
(statearr_29252_29281[(1)] = (14));

} else {
var statearr_29253_29282 = state_29227__$1;
(statearr_29253_29282[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (9))){
var inst_29215 = (state_29227[(2)]);
var inst_29216 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29227__$1 = (function (){var statearr_29254 = state_29227;
(statearr_29254[(15)] = inst_29215);

return statearr_29254;
})();
if(cljs.core.truth_(inst_29216)){
var statearr_29255_29283 = state_29227__$1;
(statearr_29255_29283[(1)] = (21));

} else {
var statearr_29256_29284 = state_29227__$1;
(statearr_29256_29284[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (5))){
var inst_29171 = cljs.core.async.close_BANG_.call(null,out);
var state_29227__$1 = state_29227;
var statearr_29257_29285 = state_29227__$1;
(statearr_29257_29285[(2)] = inst_29171);

(statearr_29257_29285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (14))){
var inst_29193 = (state_29227[(7)]);
var inst_29195 = cljs.core.chunked_seq_QMARK_.call(null,inst_29193);
var state_29227__$1 = state_29227;
if(inst_29195){
var statearr_29258_29286 = state_29227__$1;
(statearr_29258_29286[(1)] = (17));

} else {
var statearr_29259_29287 = state_29227__$1;
(statearr_29259_29287[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (16))){
var inst_29211 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29260_29288 = state_29227__$1;
(statearr_29260_29288[(2)] = inst_29211);

(statearr_29260_29288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29228 === (10))){
var inst_29180 = (state_29227[(9)]);
var inst_29182 = (state_29227[(10)]);
var inst_29187 = cljs.core._nth.call(null,inst_29180,inst_29182);
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29227__$1,(13),out,inst_29187);
} else {
if((state_val_29228 === (18))){
var inst_29193 = (state_29227[(7)]);
var inst_29202 = cljs.core.first.call(null,inst_29193);
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29227__$1,(20),out,inst_29202);
} else {
if((state_val_29228 === (8))){
var inst_29181 = (state_29227[(8)]);
var inst_29182 = (state_29227[(10)]);
var inst_29184 = (inst_29182 < inst_29181);
var inst_29185 = inst_29184;
var state_29227__$1 = state_29227;
if(cljs.core.truth_(inst_29185)){
var statearr_29261_29289 = state_29227__$1;
(statearr_29261_29289[(1)] = (10));

} else {
var statearr_29262_29290 = state_29227__$1;
(statearr_29262_29290[(1)] = (11));

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
});})(c__27611__auto__))
;
return ((function (switch__27521__auto__,c__27611__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27522__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27522__auto____0 = (function (){
var statearr_29263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29263[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27522__auto__);

(statearr_29263[(1)] = (1));

return statearr_29263;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27522__auto____1 = (function (state_29227){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_29227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e29264){if((e29264 instanceof Object)){
var ex__27525__auto__ = e29264;
var statearr_29265_29291 = state_29227;
(statearr_29265_29291[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29292 = state_29227;
state_29227 = G__29292;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27522__auto__ = function(state_29227){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27522__auto____1.call(this,state_29227);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27522__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27522__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto__))
})();
var state__27613__auto__ = (function (){var statearr_29266 = f__27612__auto__.call(null);
(statearr_29266[(6)] = c__27611__auto__);

return statearr_29266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto__))
);

return c__27611__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29294 = arguments.length;
switch (G__29294) {
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
var G__29297 = arguments.length;
switch (G__29297) {
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
var G__29300 = arguments.length;
switch (G__29300) {
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
var c__27611__auto___29347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___29347,out){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___29347,out){
return (function (state_29324){
var state_val_29325 = (state_29324[(1)]);
if((state_val_29325 === (7))){
var inst_29319 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
var statearr_29326_29348 = state_29324__$1;
(statearr_29326_29348[(2)] = inst_29319);

(statearr_29326_29348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (1))){
var inst_29301 = null;
var state_29324__$1 = (function (){var statearr_29327 = state_29324;
(statearr_29327[(7)] = inst_29301);

return statearr_29327;
})();
var statearr_29328_29349 = state_29324__$1;
(statearr_29328_29349[(2)] = null);

(statearr_29328_29349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (4))){
var inst_29304 = (state_29324[(8)]);
var inst_29304__$1 = (state_29324[(2)]);
var inst_29305 = (inst_29304__$1 == null);
var inst_29306 = cljs.core.not.call(null,inst_29305);
var state_29324__$1 = (function (){var statearr_29329 = state_29324;
(statearr_29329[(8)] = inst_29304__$1);

return statearr_29329;
})();
if(inst_29306){
var statearr_29330_29350 = state_29324__$1;
(statearr_29330_29350[(1)] = (5));

} else {
var statearr_29331_29351 = state_29324__$1;
(statearr_29331_29351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (6))){
var state_29324__$1 = state_29324;
var statearr_29332_29352 = state_29324__$1;
(statearr_29332_29352[(2)] = null);

(statearr_29332_29352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (3))){
var inst_29321 = (state_29324[(2)]);
var inst_29322 = cljs.core.async.close_BANG_.call(null,out);
var state_29324__$1 = (function (){var statearr_29333 = state_29324;
(statearr_29333[(9)] = inst_29321);

return statearr_29333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29324__$1,inst_29322);
} else {
if((state_val_29325 === (2))){
var state_29324__$1 = state_29324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29324__$1,(4),ch);
} else {
if((state_val_29325 === (11))){
var inst_29304 = (state_29324[(8)]);
var inst_29313 = (state_29324[(2)]);
var inst_29301 = inst_29304;
var state_29324__$1 = (function (){var statearr_29334 = state_29324;
(statearr_29334[(10)] = inst_29313);

(statearr_29334[(7)] = inst_29301);

return statearr_29334;
})();
var statearr_29335_29353 = state_29324__$1;
(statearr_29335_29353[(2)] = null);

(statearr_29335_29353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (9))){
var inst_29304 = (state_29324[(8)]);
var state_29324__$1 = state_29324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29324__$1,(11),out,inst_29304);
} else {
if((state_val_29325 === (5))){
var inst_29301 = (state_29324[(7)]);
var inst_29304 = (state_29324[(8)]);
var inst_29308 = cljs.core._EQ_.call(null,inst_29304,inst_29301);
var state_29324__$1 = state_29324;
if(inst_29308){
var statearr_29337_29354 = state_29324__$1;
(statearr_29337_29354[(1)] = (8));

} else {
var statearr_29338_29355 = state_29324__$1;
(statearr_29338_29355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (10))){
var inst_29316 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
var statearr_29339_29356 = state_29324__$1;
(statearr_29339_29356[(2)] = inst_29316);

(statearr_29339_29356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (8))){
var inst_29301 = (state_29324[(7)]);
var tmp29336 = inst_29301;
var inst_29301__$1 = tmp29336;
var state_29324__$1 = (function (){var statearr_29340 = state_29324;
(statearr_29340[(7)] = inst_29301__$1);

return statearr_29340;
})();
var statearr_29341_29357 = state_29324__$1;
(statearr_29341_29357[(2)] = null);

(statearr_29341_29357[(1)] = (2));


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
});})(c__27611__auto___29347,out))
;
return ((function (switch__27521__auto__,c__27611__auto___29347,out){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_29342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29342[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_29342[(1)] = (1));

return statearr_29342;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_29324){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_29324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e29343){if((e29343 instanceof Object)){
var ex__27525__auto__ = e29343;
var statearr_29344_29358 = state_29324;
(statearr_29344_29358[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29359 = state_29324;
state_29324 = G__29359;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_29324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_29324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___29347,out))
})();
var state__27613__auto__ = (function (){var statearr_29345 = f__27612__auto__.call(null);
(statearr_29345[(6)] = c__27611__auto___29347);

return statearr_29345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___29347,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29361 = arguments.length;
switch (G__29361) {
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
var c__27611__auto___29427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___29427,out){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___29427,out){
return (function (state_29399){
var state_val_29400 = (state_29399[(1)]);
if((state_val_29400 === (7))){
var inst_29395 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29401_29428 = state_29399__$1;
(statearr_29401_29428[(2)] = inst_29395);

(statearr_29401_29428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (1))){
var inst_29362 = (new Array(n));
var inst_29363 = inst_29362;
var inst_29364 = (0);
var state_29399__$1 = (function (){var statearr_29402 = state_29399;
(statearr_29402[(7)] = inst_29364);

(statearr_29402[(8)] = inst_29363);

return statearr_29402;
})();
var statearr_29403_29429 = state_29399__$1;
(statearr_29403_29429[(2)] = null);

(statearr_29403_29429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (4))){
var inst_29367 = (state_29399[(9)]);
var inst_29367__$1 = (state_29399[(2)]);
var inst_29368 = (inst_29367__$1 == null);
var inst_29369 = cljs.core.not.call(null,inst_29368);
var state_29399__$1 = (function (){var statearr_29404 = state_29399;
(statearr_29404[(9)] = inst_29367__$1);

return statearr_29404;
})();
if(inst_29369){
var statearr_29405_29430 = state_29399__$1;
(statearr_29405_29430[(1)] = (5));

} else {
var statearr_29406_29431 = state_29399__$1;
(statearr_29406_29431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (15))){
var inst_29389 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29407_29432 = state_29399__$1;
(statearr_29407_29432[(2)] = inst_29389);

(statearr_29407_29432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (13))){
var state_29399__$1 = state_29399;
var statearr_29408_29433 = state_29399__$1;
(statearr_29408_29433[(2)] = null);

(statearr_29408_29433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (6))){
var inst_29364 = (state_29399[(7)]);
var inst_29385 = (inst_29364 > (0));
var state_29399__$1 = state_29399;
if(cljs.core.truth_(inst_29385)){
var statearr_29409_29434 = state_29399__$1;
(statearr_29409_29434[(1)] = (12));

} else {
var statearr_29410_29435 = state_29399__$1;
(statearr_29410_29435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (3))){
var inst_29397 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29399__$1,inst_29397);
} else {
if((state_val_29400 === (12))){
var inst_29363 = (state_29399[(8)]);
var inst_29387 = cljs.core.vec.call(null,inst_29363);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29399__$1,(15),out,inst_29387);
} else {
if((state_val_29400 === (2))){
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29399__$1,(4),ch);
} else {
if((state_val_29400 === (11))){
var inst_29379 = (state_29399[(2)]);
var inst_29380 = (new Array(n));
var inst_29363 = inst_29380;
var inst_29364 = (0);
var state_29399__$1 = (function (){var statearr_29411 = state_29399;
(statearr_29411[(10)] = inst_29379);

(statearr_29411[(7)] = inst_29364);

(statearr_29411[(8)] = inst_29363);

return statearr_29411;
})();
var statearr_29412_29436 = state_29399__$1;
(statearr_29412_29436[(2)] = null);

(statearr_29412_29436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (9))){
var inst_29363 = (state_29399[(8)]);
var inst_29377 = cljs.core.vec.call(null,inst_29363);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29399__$1,(11),out,inst_29377);
} else {
if((state_val_29400 === (5))){
var inst_29372 = (state_29399[(11)]);
var inst_29367 = (state_29399[(9)]);
var inst_29364 = (state_29399[(7)]);
var inst_29363 = (state_29399[(8)]);
var inst_29371 = (inst_29363[inst_29364] = inst_29367);
var inst_29372__$1 = (inst_29364 + (1));
var inst_29373 = (inst_29372__$1 < n);
var state_29399__$1 = (function (){var statearr_29413 = state_29399;
(statearr_29413[(11)] = inst_29372__$1);

(statearr_29413[(12)] = inst_29371);

return statearr_29413;
})();
if(cljs.core.truth_(inst_29373)){
var statearr_29414_29437 = state_29399__$1;
(statearr_29414_29437[(1)] = (8));

} else {
var statearr_29415_29438 = state_29399__$1;
(statearr_29415_29438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (14))){
var inst_29392 = (state_29399[(2)]);
var inst_29393 = cljs.core.async.close_BANG_.call(null,out);
var state_29399__$1 = (function (){var statearr_29417 = state_29399;
(statearr_29417[(13)] = inst_29392);

return statearr_29417;
})();
var statearr_29418_29439 = state_29399__$1;
(statearr_29418_29439[(2)] = inst_29393);

(statearr_29418_29439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (10))){
var inst_29383 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29419_29440 = state_29399__$1;
(statearr_29419_29440[(2)] = inst_29383);

(statearr_29419_29440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (8))){
var inst_29372 = (state_29399[(11)]);
var inst_29363 = (state_29399[(8)]);
var tmp29416 = inst_29363;
var inst_29363__$1 = tmp29416;
var inst_29364 = inst_29372;
var state_29399__$1 = (function (){var statearr_29420 = state_29399;
(statearr_29420[(7)] = inst_29364);

(statearr_29420[(8)] = inst_29363__$1);

return statearr_29420;
})();
var statearr_29421_29441 = state_29399__$1;
(statearr_29421_29441[(2)] = null);

(statearr_29421_29441[(1)] = (2));


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
});})(c__27611__auto___29427,out))
;
return ((function (switch__27521__auto__,c__27611__auto___29427,out){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_29422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29422[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_29422[(1)] = (1));

return statearr_29422;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_29399){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_29399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e29423){if((e29423 instanceof Object)){
var ex__27525__auto__ = e29423;
var statearr_29424_29442 = state_29399;
(statearr_29424_29442[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29443 = state_29399;
state_29399 = G__29443;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_29399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_29399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___29427,out))
})();
var state__27613__auto__ = (function (){var statearr_29425 = f__27612__auto__.call(null);
(statearr_29425[(6)] = c__27611__auto___29427);

return statearr_29425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___29427,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29445 = arguments.length;
switch (G__29445) {
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
var c__27611__auto___29515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27611__auto___29515,out){
return (function (){
var f__27612__auto__ = (function (){var switch__27521__auto__ = ((function (c__27611__auto___29515,out){
return (function (state_29487){
var state_val_29488 = (state_29487[(1)]);
if((state_val_29488 === (7))){
var inst_29483 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29489_29516 = state_29487__$1;
(statearr_29489_29516[(2)] = inst_29483);

(statearr_29489_29516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (1))){
var inst_29446 = [];
var inst_29447 = inst_29446;
var inst_29448 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29487__$1 = (function (){var statearr_29490 = state_29487;
(statearr_29490[(7)] = inst_29447);

(statearr_29490[(8)] = inst_29448);

return statearr_29490;
})();
var statearr_29491_29517 = state_29487__$1;
(statearr_29491_29517[(2)] = null);

(statearr_29491_29517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (4))){
var inst_29451 = (state_29487[(9)]);
var inst_29451__$1 = (state_29487[(2)]);
var inst_29452 = (inst_29451__$1 == null);
var inst_29453 = cljs.core.not.call(null,inst_29452);
var state_29487__$1 = (function (){var statearr_29492 = state_29487;
(statearr_29492[(9)] = inst_29451__$1);

return statearr_29492;
})();
if(inst_29453){
var statearr_29493_29518 = state_29487__$1;
(statearr_29493_29518[(1)] = (5));

} else {
var statearr_29494_29519 = state_29487__$1;
(statearr_29494_29519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (15))){
var inst_29477 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29495_29520 = state_29487__$1;
(statearr_29495_29520[(2)] = inst_29477);

(statearr_29495_29520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (13))){
var state_29487__$1 = state_29487;
var statearr_29496_29521 = state_29487__$1;
(statearr_29496_29521[(2)] = null);

(statearr_29496_29521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (6))){
var inst_29447 = (state_29487[(7)]);
var inst_29472 = inst_29447.length;
var inst_29473 = (inst_29472 > (0));
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29473)){
var statearr_29497_29522 = state_29487__$1;
(statearr_29497_29522[(1)] = (12));

} else {
var statearr_29498_29523 = state_29487__$1;
(statearr_29498_29523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (3))){
var inst_29485 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29487__$1,inst_29485);
} else {
if((state_val_29488 === (12))){
var inst_29447 = (state_29487[(7)]);
var inst_29475 = cljs.core.vec.call(null,inst_29447);
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29487__$1,(15),out,inst_29475);
} else {
if((state_val_29488 === (2))){
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29487__$1,(4),ch);
} else {
if((state_val_29488 === (11))){
var inst_29455 = (state_29487[(10)]);
var inst_29451 = (state_29487[(9)]);
var inst_29465 = (state_29487[(2)]);
var inst_29466 = [];
var inst_29467 = inst_29466.push(inst_29451);
var inst_29447 = inst_29466;
var inst_29448 = inst_29455;
var state_29487__$1 = (function (){var statearr_29499 = state_29487;
(statearr_29499[(11)] = inst_29467);

(statearr_29499[(12)] = inst_29465);

(statearr_29499[(7)] = inst_29447);

(statearr_29499[(8)] = inst_29448);

return statearr_29499;
})();
var statearr_29500_29524 = state_29487__$1;
(statearr_29500_29524[(2)] = null);

(statearr_29500_29524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (9))){
var inst_29447 = (state_29487[(7)]);
var inst_29463 = cljs.core.vec.call(null,inst_29447);
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29487__$1,(11),out,inst_29463);
} else {
if((state_val_29488 === (5))){
var inst_29455 = (state_29487[(10)]);
var inst_29451 = (state_29487[(9)]);
var inst_29448 = (state_29487[(8)]);
var inst_29455__$1 = f.call(null,inst_29451);
var inst_29456 = cljs.core._EQ_.call(null,inst_29455__$1,inst_29448);
var inst_29457 = cljs.core.keyword_identical_QMARK_.call(null,inst_29448,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29458 = ((inst_29456) || (inst_29457));
var state_29487__$1 = (function (){var statearr_29501 = state_29487;
(statearr_29501[(10)] = inst_29455__$1);

return statearr_29501;
})();
if(cljs.core.truth_(inst_29458)){
var statearr_29502_29525 = state_29487__$1;
(statearr_29502_29525[(1)] = (8));

} else {
var statearr_29503_29526 = state_29487__$1;
(statearr_29503_29526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (14))){
var inst_29480 = (state_29487[(2)]);
var inst_29481 = cljs.core.async.close_BANG_.call(null,out);
var state_29487__$1 = (function (){var statearr_29505 = state_29487;
(statearr_29505[(13)] = inst_29480);

return statearr_29505;
})();
var statearr_29506_29527 = state_29487__$1;
(statearr_29506_29527[(2)] = inst_29481);

(statearr_29506_29527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (10))){
var inst_29470 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29507_29528 = state_29487__$1;
(statearr_29507_29528[(2)] = inst_29470);

(statearr_29507_29528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (8))){
var inst_29455 = (state_29487[(10)]);
var inst_29451 = (state_29487[(9)]);
var inst_29447 = (state_29487[(7)]);
var inst_29460 = inst_29447.push(inst_29451);
var tmp29504 = inst_29447;
var inst_29447__$1 = tmp29504;
var inst_29448 = inst_29455;
var state_29487__$1 = (function (){var statearr_29508 = state_29487;
(statearr_29508[(14)] = inst_29460);

(statearr_29508[(7)] = inst_29447__$1);

(statearr_29508[(8)] = inst_29448);

return statearr_29508;
})();
var statearr_29509_29529 = state_29487__$1;
(statearr_29509_29529[(2)] = null);

(statearr_29509_29529[(1)] = (2));


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
});})(c__27611__auto___29515,out))
;
return ((function (switch__27521__auto__,c__27611__auto___29515,out){
return (function() {
var cljs$core$async$state_machine__27522__auto__ = null;
var cljs$core$async$state_machine__27522__auto____0 = (function (){
var statearr_29510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29510[(0)] = cljs$core$async$state_machine__27522__auto__);

(statearr_29510[(1)] = (1));

return statearr_29510;
});
var cljs$core$async$state_machine__27522__auto____1 = (function (state_29487){
while(true){
var ret_value__27523__auto__ = (function (){try{while(true){
var result__27524__auto__ = switch__27521__auto__.call(null,state_29487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27524__auto__;
}
break;
}
}catch (e29511){if((e29511 instanceof Object)){
var ex__27525__auto__ = e29511;
var statearr_29512_29530 = state_29487;
(statearr_29512_29530[(5)] = ex__27525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29531 = state_29487;
state_29487 = G__29531;
continue;
} else {
return ret_value__27523__auto__;
}
break;
}
});
cljs$core$async$state_machine__27522__auto__ = function(state_29487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27522__auto____1.call(this,state_29487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27522__auto____0;
cljs$core$async$state_machine__27522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27522__auto____1;
return cljs$core$async$state_machine__27522__auto__;
})()
;})(switch__27521__auto__,c__27611__auto___29515,out))
})();
var state__27613__auto__ = (function (){var statearr_29513 = f__27612__auto__.call(null);
(statearr_29513[(6)] = c__27611__auto___29515);

return statearr_29513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27613__auto__);
});})(c__27611__auto___29515,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1570412446739
