// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.Reports');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.utilities.view_handler');
goog.require('time_tracker.utilities.date_formatter');
goog.require('time_tracker.components.datepicker');
goog.require('cljs_pikaday.reagent');
goog.require('module$Applications$server$time_tracker$node_modules$localforage$dist$localforage');
goog.require('module$Applications$server$time_tracker$node_modules$moment$moment');
if(typeof time_tracker.components.Reports.start_date !== 'undefined'){
} else {
time_tracker.components.Reports.start_date = reagent.core.atom.call(null,module$Applications$server$time_tracker$node_modules$moment$moment["default"]((new Date((new Date()).setHours((0),(0),(0),(0))))).format("MM/DD/YYYY"));
}
if(typeof time_tracker.components.Reports.end_date !== 'undefined'){
} else {
time_tracker.components.Reports.end_date = reagent.core.atom.call(null,module$Applications$server$time_tracker$node_modules$moment$moment["default"]((new Date())).format("MM/DD/YYYY"));
}
if(typeof time_tracker.components.Reports.current_report !== 'undefined'){
} else {
time_tracker.components.Reports.current_report = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof time_tracker.components.Reports.current_pdf_offset !== 'undefined'){
} else {
time_tracker.components.Reports.current_pdf_offset = reagent.core.atom.call(null,(1));
}
time_tracker.components.Reports.check_time_after = (function time_tracker$components$Reports$check_time_after(time,minTime){

if((time > minTime)){
return true;
} else {
return false;
}
});
time_tracker.components.Reports.check_time_before = (function time_tracker$components$Reports$check_time_before(time,maxTime){

if((time < maxTime)){
return true;
} else {
return false;
}
});
time_tracker.components.Reports.generate_report = (function time_tracker$components$Reports$generate_report(projects){

var returnHtml = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listOfProjects = cljs.core.into.call(null,cljs.core.js__GT_clj.call(null,projects),cljs.core.PersistentArrayMap.EMPTY);
var seq__27909_27919 = cljs.core.seq.call(null,listOfProjects);
var chunk__27910_27920 = null;
var count__27911_27921 = (0);
var i__27912_27922 = (0);
while(true){
if((i__27912_27922 < count__27911_27921)){
var vec__27913_27923 = cljs.core._nth.call(null,chunk__27910_27920,i__27912_27922);
var date_27924 = cljs.core.nth.call(null,vec__27913_27923,(0),null);
var currentDates_27925 = cljs.core.get.call(null,listOfProjects,date_27924);
var currentKey_27926 = cljs.core.keys.call(null,currentDates_27925);
var i_27927 = (0);
while(true){
if(cljs.core._EQ_.call(null,i_27927,cljs.core.count.call(null,currentKey_27926))){
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = time_tracker.components.Reports.check_time_after.call(null,((10) + module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_27926,i_27927),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.start_date)).unix());
if(cljs.core.truth_(and__3911__auto__)){
return time_tracker.components.Reports.check_time_before.call(null,((10) - module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_27926,i_27927),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.end_date)).unix());
} else {
return and__3911__auto__;
}
})())){
var htmlToSet_27928 = cljs.core.deref.call(null,returnHtml);
var htmlToMerge_27929 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,cljs.core.nth.call(null,currentKey_27926,i_27927)),cljs.core.get.call(null,currentDates_27925,cljs.core.nth.call(null,currentKey_27926,i_27927))]);
var currentVals_27930 = cljs.core.keyword.call(null,date_27924).call(null,cljs.core.deref.call(null,returnHtml));
cljs.core.swap_BANG_.call(null,returnHtml,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_27924),cljs.core.conj.call(null,currentVals_27930,htmlToMerge_27929)]));
} else {
}

var G__27931 = (i_27927 + (1));
i_27927 = G__27931;
continue;
}
break;
}


var G__27932 = seq__27909_27919;
var G__27933 = chunk__27910_27920;
var G__27934 = count__27911_27921;
var G__27935 = (i__27912_27922 + (1));
seq__27909_27919 = G__27932;
chunk__27910_27920 = G__27933;
count__27911_27921 = G__27934;
i__27912_27922 = G__27935;
continue;
} else {
var temp__5457__auto___27936 = cljs.core.seq.call(null,seq__27909_27919);
if(temp__5457__auto___27936){
var seq__27909_27937__$1 = temp__5457__auto___27936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27909_27937__$1)){
var c__4319__auto___27938 = cljs.core.chunk_first.call(null,seq__27909_27937__$1);
var G__27939 = cljs.core.chunk_rest.call(null,seq__27909_27937__$1);
var G__27940 = c__4319__auto___27938;
var G__27941 = cljs.core.count.call(null,c__4319__auto___27938);
var G__27942 = (0);
seq__27909_27919 = G__27939;
chunk__27910_27920 = G__27940;
count__27911_27921 = G__27941;
i__27912_27922 = G__27942;
continue;
} else {
var vec__27916_27943 = cljs.core.first.call(null,seq__27909_27937__$1);
var date_27944 = cljs.core.nth.call(null,vec__27916_27943,(0),null);
var currentDates_27945 = cljs.core.get.call(null,listOfProjects,date_27944);
var currentKey_27946 = cljs.core.keys.call(null,currentDates_27945);
var i_27947 = (0);
while(true){
if(cljs.core._EQ_.call(null,i_27947,cljs.core.count.call(null,currentKey_27946))){
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = time_tracker.components.Reports.check_time_after.call(null,((10) + module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_27946,i_27947),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.start_date)).unix());
if(cljs.core.truth_(and__3911__auto__)){
return time_tracker.components.Reports.check_time_before.call(null,((10) - module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_27946,i_27947),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.end_date)).unix());
} else {
return and__3911__auto__;
}
})())){
var htmlToSet_27948 = cljs.core.deref.call(null,returnHtml);
var htmlToMerge_27949 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,cljs.core.nth.call(null,currentKey_27946,i_27947)),cljs.core.get.call(null,currentDates_27945,cljs.core.nth.call(null,currentKey_27946,i_27947))]);
var currentVals_27950 = cljs.core.keyword.call(null,date_27944).call(null,cljs.core.deref.call(null,returnHtml));
cljs.core.swap_BANG_.call(null,returnHtml,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_27944),cljs.core.conj.call(null,currentVals_27950,htmlToMerge_27949)]));
} else {
}

var G__27951 = (i_27947 + (1));
i_27947 = G__27951;
continue;
}
break;
}


var G__27952 = cljs.core.next.call(null,seq__27909_27937__$1);
var G__27953 = null;
var G__27954 = (0);
var G__27955 = (0);
seq__27909_27919 = G__27952;
chunk__27910_27920 = G__27953;
count__27911_27921 = G__27954;
i__27912_27922 = G__27955;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,time_tracker.components.Reports.current_report,cljs.core.deref.call(null,returnHtml));

return cljs.core.deref.call(null,returnHtml);
});
time_tracker.components.Reports.download_report = (function time_tracker$components$Reports$download_report(projects){

var doc = (new jsPDF());
var docContent = time_tracker.components.Reports.generate_report.call(null,projects);
var maxAmountOfItems = reagent.core.atom.call(null,(16));
cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (doc,docContent,maxAmountOfItems){
return (function time_tracker$components$Reports$download_report_$_iter__27956(s__27957){
return (new cljs.core.LazySeq(null,((function (doc,docContent,maxAmountOfItems){
return (function (){
var s__27957__$1 = s__27957;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27957__$1);
if(temp__5457__auto__){
var s__27957__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27957__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27957__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27959 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27958 = (0);
while(true){
if((i__27958 < size__4291__auto__)){
var project = cljs.core._nth.call(null,c__4290__auto__,i__27958);
cljs.core.chunk_append.call(null,b__27959,(function (){
doc.setFontSize((24));

doc.setTextColor("#fff");

doc.setFillColor("#633892");

doc.rect((0),(((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)) - (9)),(250),(12),"FD");

doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,project)))].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.setFontSize((12));

doc.setTextColor("#000");

cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);

return cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (i__27958,project,c__4290__auto__,size__4291__auto__,b__27959,s__27957__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function time_tracker$components$Reports$download_report_$_iter__27956_$_iter__27960(s__27961){
return (new cljs.core.LazySeq(null,((function (i__27958,project,c__4290__auto__,size__4291__auto__,b__27959,s__27957__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function (){
var s__27961__$1 = s__27961;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__27961__$1);
if(temp__5457__auto____$1){
var s__27961__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27961__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__27961__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__27963 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__27962 = (0);
while(true){
if((i__27962 < size__4291__auto____$1)){
var date = cljs.core._nth.call(null,c__4290__auto____$1,i__27962);
cljs.core.chunk_append.call(null,b__27963,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.text(time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems))),(75),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

if((cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset) > cljs.core.deref.call(null,maxAmountOfItems))){
doc.addPage();

return cljs.core.reset_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,(1));
} else {
return cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);
}
})());

var G__27968 = (i__27962 + (1));
i__27962 = G__27968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27963),time_tracker$components$Reports$download_report_$_iter__27956_$_iter__27960.call(null,cljs.core.chunk_rest.call(null,s__27961__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27963),null);
}
} else {
var date = cljs.core.first.call(null,s__27961__$2);
return cljs.core.cons.call(null,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.text(time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems))),(75),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

if((cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset) > cljs.core.deref.call(null,maxAmountOfItems))){
doc.addPage();

return cljs.core.reset_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,(1));
} else {
return cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);
}
})(),time_tracker$components$Reports$download_report_$_iter__27956_$_iter__27960.call(null,cljs.core.rest.call(null,s__27961__$2)));
}
} else {
return null;
}
break;
}
});})(i__27958,project,c__4290__auto__,size__4291__auto__,b__27959,s__27957__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
,null,null));
});})(i__27958,project,c__4290__auto__,size__4291__auto__,b__27959,s__27957__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})());
})()
);

var G__27969 = (i__27958 + (1));
i__27958 = G__27969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27959),time_tracker$components$Reports$download_report_$_iter__27956.call(null,cljs.core.chunk_rest.call(null,s__27957__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27959),null);
}
} else {
var project = cljs.core.first.call(null,s__27957__$2);
return cljs.core.cons.call(null,(function (){
doc.setFontSize((24));

doc.setTextColor("#fff");

doc.setFillColor("#633892");

doc.rect((0),(((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)) - (9)),(250),(12),"FD");

doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,project)))].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.setFontSize((12));

doc.setTextColor("#000");

cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);

return cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (project,s__27957__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function time_tracker$components$Reports$download_report_$_iter__27956_$_iter__27964(s__27965){
return (new cljs.core.LazySeq(null,((function (project,s__27957__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function (){
var s__27965__$1 = s__27965;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__27965__$1);
if(temp__5457__auto____$1){
var s__27965__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27965__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27965__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27967 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27966 = (0);
while(true){
if((i__27966 < size__4291__auto__)){
var date = cljs.core._nth.call(null,c__4290__auto__,i__27966);
cljs.core.chunk_append.call(null,b__27967,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.text(time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems))),(75),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

if((cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset) > cljs.core.deref.call(null,maxAmountOfItems))){
doc.addPage();

return cljs.core.reset_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,(1));
} else {
return cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);
}
})());

var G__27970 = (i__27966 + (1));
i__27966 = G__27970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27967),time_tracker$components$Reports$download_report_$_iter__27956_$_iter__27964.call(null,cljs.core.chunk_rest.call(null,s__27965__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27967),null);
}
} else {
var date = cljs.core.first.call(null,s__27965__$2);
return cljs.core.cons.call(null,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.text(time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems))),(75),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

if((cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset) > cljs.core.deref.call(null,maxAmountOfItems))){
doc.addPage();

return cljs.core.reset_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,(1));
} else {
return cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);
}
})(),time_tracker$components$Reports$download_report_$_iter__27956_$_iter__27964.call(null,cljs.core.rest.call(null,s__27965__$2)));
}
} else {
return null;
}
break;
}
});})(project,s__27957__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
,null,null));
});})(project,s__27957__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})());
})()
,time_tracker$components$Reports$download_report_$_iter__27956.call(null,cljs.core.rest.call(null,s__27957__$2)));
}
} else {
return null;
}
break;
}
});})(doc,docContent,maxAmountOfItems))
,null,null));
});})(doc,docContent,maxAmountOfItems))
;
return iter__4292__auto__.call(null,docContent);
})());

alert("Time Report Generated");

cordova.plugins.email.open(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"body","body",-2049205669),"test tst",new cljs.core.Keyword(null,"to","to",192099007),cljs.core.to_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)),new cljs.core.Keyword(null,"subject","subject",-1411880451),"Your Time Report",new cljs.core.Keyword(null,"attachments","attachments",-1535547830),cljs.core.to_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["base64:report.pdf//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(btoa(doc.output()))].join('')], null))], null)));

return cljs.core.reset_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,(1));
});
time_tracker.components.Reports.render = (function time_tracker$components$Reports$render(app_state){
var project_name = reagent.core.atom.call(null,"");
return ((function (project_name){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports","div.Reports",408566248),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"reports","reports",1629311767).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,time_tracker.utilities.view_handler.active_view))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-header","div.Reports-header",1992748693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (project_name){
return (function (){
return time_tracker.utilities.view_handler.change_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reports","reports",1629311767),false], null));
});})(project_name))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-long-arrow-alt-left","i.fas.fa-long-arrow-alt-left",1932573860)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Reports"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-body","div.Reports-body",1366778911),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Generate New Report"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepickerWrapper","div.datepickerWrapper",-426005648),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Start Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_tracker.components.datepicker.datepicker,time_tracker.components.Reports.start_date], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepickerWrapper","div.datepickerWrapper",-426005648),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"End Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_tracker.components.datepicker.datepicker,time_tracker.components.Reports.end_date], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (project_name){
return (function (){
return time_tracker.components.Reports.generate_report.call(null,new cljs.core.Keyword(null,"projectDates","projectDates",760851171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
});})(project_name))
], null),"Generate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (project_name){
return (function (){
return time_tracker.components.Reports.download_report.call(null,new cljs.core.Keyword(null,"projectDates","projectDates",760851171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
});})(project_name))
], null),"Email Report"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-list","div.Reports-list",-1856345467),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (project_name){
return (function time_tracker$components$Reports$render_$_iter__27971(s__27972){
return (new cljs.core.LazySeq(null,((function (project_name){
return (function (){
var s__27972__$1 = s__27972;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27972__$1);
if(temp__5457__auto__){
var s__27972__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27972__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27972__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27974 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27973 = (0);
while(true){
if((i__27973 < size__4291__auto__)){
var project = cljs.core._nth.call(null,c__4290__auto__,i__27973);
cljs.core.chunk_append.call(null,b__27974,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-title"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,project)], null),cljs.core.first.call(null,project)], null),(function (){var iter__4292__auto__ = ((function (i__27973,project,c__4290__auto__,size__4291__auto__,b__27974,s__27972__$2,temp__5457__auto__,project_name){
return (function time_tracker$components$Reports$render_$_iter__27971_$_iter__27975(s__27976){
return (new cljs.core.LazySeq(null,((function (i__27973,project,c__4290__auto__,size__4291__auto__,b__27974,s__27972__$2,temp__5457__auto__,project_name){
return (function (){
var s__27976__$1 = s__27976;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__27976__$1);
if(temp__5457__auto____$1){
var s__27976__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27976__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__27976__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__27978 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__27977 = (0);
while(true){
if((i__27977 < size__4291__auto____$1)){
var date = cljs.core._nth.call(null,c__4290__auto____$1,i__27977);
cljs.core.chunk_append.call(null,b__27978,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(1000)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null);
})());

var G__27983 = (i__27977 + (1));
i__27977 = G__27983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27978),time_tracker$components$Reports$render_$_iter__27971_$_iter__27975.call(null,cljs.core.chunk_rest.call(null,s__27976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27978),null);
}
} else {
var date = cljs.core.first.call(null,s__27976__$2);
return cljs.core.cons.call(null,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(1000)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null);
})(),time_tracker$components$Reports$render_$_iter__27971_$_iter__27975.call(null,cljs.core.rest.call(null,s__27976__$2)));
}
} else {
return null;
}
break;
}
});})(i__27973,project,c__4290__auto__,size__4291__auto__,b__27974,s__27972__$2,temp__5457__auto__,project_name))
,null,null));
});})(i__27973,project,c__4290__auto__,size__4291__auto__,b__27974,s__27972__$2,temp__5457__auto__,project_name))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})()], null));

var G__27984 = (i__27973 + (1));
i__27973 = G__27984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27974),time_tracker$components$Reports$render_$_iter__27971.call(null,cljs.core.chunk_rest.call(null,s__27972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27974),null);
}
} else {
var project = cljs.core.first.call(null,s__27972__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-title"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,project)], null),cljs.core.first.call(null,project)], null),(function (){var iter__4292__auto__ = ((function (project,s__27972__$2,temp__5457__auto__,project_name){
return (function time_tracker$components$Reports$render_$_iter__27971_$_iter__27979(s__27980){
return (new cljs.core.LazySeq(null,((function (project,s__27972__$2,temp__5457__auto__,project_name){
return (function (){
var s__27980__$1 = s__27980;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__27980__$1);
if(temp__5457__auto____$1){
var s__27980__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27980__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27980__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27982 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27981 = (0);
while(true){
if((i__27981 < size__4291__auto__)){
var date = cljs.core._nth.call(null,c__4290__auto__,i__27981);
cljs.core.chunk_append.call(null,b__27982,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(1000)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null);
})());

var G__27985 = (i__27981 + (1));
i__27981 = G__27985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27982),time_tracker$components$Reports$render_$_iter__27971_$_iter__27979.call(null,cljs.core.chunk_rest.call(null,s__27980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27982),null);
}
} else {
var date = cljs.core.first.call(null,s__27980__$2);
return cljs.core.cons.call(null,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(1000)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null);
})(),time_tracker$components$Reports$render_$_iter__27971_$_iter__27979.call(null,cljs.core.rest.call(null,s__27980__$2)));
}
} else {
return null;
}
break;
}
});})(project,s__27972__$2,temp__5457__auto__,project_name))
,null,null));
});})(project,s__27972__$2,temp__5457__auto__,project_name))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})()], null),time_tracker$components$Reports$render_$_iter__27971.call(null,cljs.core.rest.call(null,s__27972__$2)));
}
} else {
return null;
}
break;
}
});})(project_name))
,null,null));
});})(project_name))
;
return iter__4292__auto__.call(null,cljs.core.deref.call(null,time_tracker.components.Reports.current_report));
})())], null)], null)], null);
});
;})(project_name))
});

//# sourceMappingURL=Reports.js.map?rel=1570485674807
