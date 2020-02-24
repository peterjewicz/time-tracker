// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.New');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.utilities.view_handler');
goog.require('time_tracker.utilities.state');
goog.require('time_tracker.components.toast');
goog.require('module$Applications$server$time_tracker$node_modules$localforage$dist$localforage');
time_tracker.components.New.project_exists_QMARK_ = (function time_tracker$components$New$project_exists_QMARK_(project,currentStorage){

if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([project.trim()]),currentStorage))){
return true;
} else {
return false;
}
});
time_tracker.components.New.call_success_toast = (function time_tracker$components$New$call_success_toast(){
return time_tracker.components.toast.fancy_alert.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Project Added",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),true,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#4aa651;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4aa651;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"white;"], null)], null));
});
time_tracker.components.New.call_fail_toast = (function time_tracker$components$New$call_fail_toast(message){
return time_tracker.components.toast.fancy_alert.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),message,new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),true,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#cc4a56;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #cc4a56;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"white;"], null)], null));
});
time_tracker.components.New.add_project = (function time_tracker$components$New$add_project(name,app_state){
return module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].getItem("projects").then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value);
if(cljs.core.not.call(null,time_tracker.components.New.project_exists_QMARK_.call(null,cljs.core.deref.call(null,name),currentStorage))){
if((cljs.core.deref.call(null,name).trim().length > (0))){
module$Applications$server$time_tracker$node_modules$localforage$dist$localforage["default"].setItem("projects",cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,currentStorage,cljs.core.deref.call(null,name).trim()))).then(((function (currentStorage){
return (function (value__$1){
return time_tracker.utilities.state.update_project_state.call(null,app_state);
});})(currentStorage))
);

time_tracker.components.New.call_success_toast.call(null);

cljs.core.reset_BANG_.call(null,name,"");

return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-new","add-new",-1399275206),false], null));
} else {
return time_tracker.components.New.call_fail_toast.call(null,"Project Name Cannot Be Empty");
}
} else {
return time_tracker.components.New.call_fail_toast.call(null,"Project Already Exists");
}
}));
});
time_tracker.components.New.render = (function time_tracker$components$New$render(app_state){
var project_name = reagent.core.atom.call(null,"");
return ((function (project_name){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New","div.New",1346884937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"add-new","add-new",-1399275206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time_tracker.utilities.view_handler.active_view))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New-header","div.New-header",874880472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (project_name){
return (function (){
return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-new","add-new",-1399275206),false], null));
});})(project_name))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-long-arrow-alt-left","i.fas.fa-long-arrow-alt-left",1932573860)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Add New Project"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New-body","div.New-body",525888776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,project_name),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Project Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (project_name){
return (function (p1__22445_SHARP_){
return cljs.core.reset_BANG_.call(null,project_name,p1__22445_SHARP_.target.value);
});})(project_name))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (project_name){
return (function (){
return time_tracker.components.New.add_project.call(null,project_name,app_state);
});})(project_name))
], null),"Add New Project"], null)], null)], null);
});
;})(project_name))
});

//# sourceMappingURL=New.js.map?rel=1582304839689
