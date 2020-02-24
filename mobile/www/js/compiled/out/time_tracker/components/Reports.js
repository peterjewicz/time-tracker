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
var seq__22882_22892 = cljs.core.seq.call(null,listOfProjects);
var chunk__22883_22893 = null;
var count__22884_22894 = (0);
var i__22885_22895 = (0);
while(true){
if((i__22885_22895 < count__22884_22894)){
var vec__22886_22896 = cljs.core._nth.call(null,chunk__22883_22893,i__22885_22895);
var date_22897 = cljs.core.nth.call(null,vec__22886_22896,(0),null);
var currentDates_22898 = cljs.core.get.call(null,listOfProjects,date_22897);
var currentKey_22899 = cljs.core.keys.call(null,currentDates_22898);
var i_22900 = (0);
while(true){
if(cljs.core._EQ_.call(null,i_22900,cljs.core.count.call(null,currentKey_22899))){
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = time_tracker.components.Reports.check_time_after.call(null,((10) + module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_22899,i_22900),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.start_date)).unix());
if(cljs.core.truth_(and__3911__auto__)){
return time_tracker.components.Reports.check_time_before.call(null,((10) - module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_22899,i_22900),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.end_date)).unix());
} else {
return and__3911__auto__;
}
})())){
var htmlToSet_22901 = cljs.core.deref.call(null,returnHtml);
var htmlToMerge_22902 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,cljs.core.nth.call(null,currentKey_22899,i_22900)),cljs.core.get.call(null,currentDates_22898,cljs.core.nth.call(null,currentKey_22899,i_22900))]);
var currentVals_22903 = cljs.core.keyword.call(null,date_22897).call(null,cljs.core.deref.call(null,returnHtml));
cljs.core.swap_BANG_.call(null,returnHtml,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22897),cljs.core.conj.call(null,currentVals_22903,htmlToMerge_22902)]));
} else {
}

var G__22904 = (i_22900 + (1));
i_22900 = G__22904;
continue;
}
break;
}


var G__22905 = seq__22882_22892;
var G__22906 = chunk__22883_22893;
var G__22907 = count__22884_22894;
var G__22908 = (i__22885_22895 + (1));
seq__22882_22892 = G__22905;
chunk__22883_22893 = G__22906;
count__22884_22894 = G__22907;
i__22885_22895 = G__22908;
continue;
} else {
var temp__5457__auto___22909 = cljs.core.seq.call(null,seq__22882_22892);
if(temp__5457__auto___22909){
var seq__22882_22910__$1 = temp__5457__auto___22909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22882_22910__$1)){
var c__4319__auto___22911 = cljs.core.chunk_first.call(null,seq__22882_22910__$1);
var G__22912 = cljs.core.chunk_rest.call(null,seq__22882_22910__$1);
var G__22913 = c__4319__auto___22911;
var G__22914 = cljs.core.count.call(null,c__4319__auto___22911);
var G__22915 = (0);
seq__22882_22892 = G__22912;
chunk__22883_22893 = G__22913;
count__22884_22894 = G__22914;
i__22885_22895 = G__22915;
continue;
} else {
var vec__22889_22916 = cljs.core.first.call(null,seq__22882_22910__$1);
var date_22917 = cljs.core.nth.call(null,vec__22889_22916,(0),null);
var currentDates_22918 = cljs.core.get.call(null,listOfProjects,date_22917);
var currentKey_22919 = cljs.core.keys.call(null,currentDates_22918);
var i_22920 = (0);
while(true){
if(cljs.core._EQ_.call(null,i_22920,cljs.core.count.call(null,currentKey_22919))){
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = time_tracker.components.Reports.check_time_after.call(null,((10) + module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_22919,i_22920),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.start_date)).unix());
if(cljs.core.truth_(and__3911__auto__)){
return time_tracker.components.Reports.check_time_before.call(null,((10) - module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_22919,i_22920),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.end_date)).unix());
} else {
return and__3911__auto__;
}
})())){
var htmlToSet_22921 = cljs.core.deref.call(null,returnHtml);
var htmlToMerge_22922 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,cljs.core.nth.call(null,currentKey_22919,i_22920)),cljs.core.get.call(null,currentDates_22918,cljs.core.nth.call(null,currentKey_22919,i_22920))]);
var currentVals_22923 = cljs.core.keyword.call(null,date_22917).call(null,cljs.core.deref.call(null,returnHtml));
cljs.core.swap_BANG_.call(null,returnHtml,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22917),cljs.core.conj.call(null,currentVals_22923,htmlToMerge_22922)]));
} else {
}

var G__22924 = (i_22920 + (1));
i_22920 = G__22924;
continue;
}
break;
}


var G__22925 = cljs.core.next.call(null,seq__22882_22910__$1);
var G__22926 = null;
var G__22927 = (0);
var G__22928 = (0);
seq__22882_22892 = G__22925;
chunk__22883_22893 = G__22926;
count__22884_22894 = G__22927;
i__22885_22895 = G__22928;
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
return (function time_tracker$components$Reports$download_report_$_iter__22929(s__22930){
return (new cljs.core.LazySeq(null,((function (doc,docContent,maxAmountOfItems){
return (function (){
var s__22930__$1 = s__22930;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22930__$1);
if(temp__5457__auto__){
var s__22930__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22930__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22930__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22932 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22931 = (0);
while(true){
if((i__22931 < size__4291__auto__)){
var project = cljs.core._nth.call(null,c__4290__auto__,i__22931);
cljs.core.chunk_append.call(null,b__22932,(function (){
doc.setFontSize((24));

doc.setTextColor("#fff");

doc.setFillColor("#633892");

doc.rect((0),(((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)) - (9)),(250),(12),"FD");

doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,project)))].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.setFontSize((12));

doc.setTextColor("#000");

cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);

return cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (i__22931,project,c__4290__auto__,size__4291__auto__,b__22932,s__22930__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function time_tracker$components$Reports$download_report_$_iter__22929_$_iter__22933(s__22934){
return (new cljs.core.LazySeq(null,((function (i__22931,project,c__4290__auto__,size__4291__auto__,b__22932,s__22930__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function (){
var s__22934__$1 = s__22934;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22934__$1);
if(temp__5457__auto____$1){
var s__22934__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22934__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__22934__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__22936 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__22935 = (0);
while(true){
if((i__22935 < size__4291__auto____$1)){
var date = cljs.core._nth.call(null,c__4290__auto____$1,i__22935);
cljs.core.chunk_append.call(null,b__22936,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
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

var G__22941 = (i__22935 + (1));
i__22935 = G__22941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22936),time_tracker$components$Reports$download_report_$_iter__22929_$_iter__22933.call(null,cljs.core.chunk_rest.call(null,s__22934__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22936),null);
}
} else {
var date = cljs.core.first.call(null,s__22934__$2);
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
})(),time_tracker$components$Reports$download_report_$_iter__22929_$_iter__22933.call(null,cljs.core.rest.call(null,s__22934__$2)));
}
} else {
return null;
}
break;
}
});})(i__22931,project,c__4290__auto__,size__4291__auto__,b__22932,s__22930__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
,null,null));
});})(i__22931,project,c__4290__auto__,size__4291__auto__,b__22932,s__22930__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})());
})()
);

var G__22942 = (i__22931 + (1));
i__22931 = G__22942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22932),time_tracker$components$Reports$download_report_$_iter__22929.call(null,cljs.core.chunk_rest.call(null,s__22930__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22932),null);
}
} else {
var project = cljs.core.first.call(null,s__22930__$2);
return cljs.core.cons.call(null,(function (){
doc.setFontSize((24));

doc.setTextColor("#fff");

doc.setFillColor("#633892");

doc.rect((0),(((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)) - (9)),(250),(12),"FD");

doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,project)))].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.setFontSize((12));

doc.setTextColor("#000");

cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);

return cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (project,s__22930__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function time_tracker$components$Reports$download_report_$_iter__22929_$_iter__22937(s__22938){
return (new cljs.core.LazySeq(null,((function (project,s__22930__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function (){
var s__22938__$1 = s__22938;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22938__$1);
if(temp__5457__auto____$1){
var s__22938__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22938__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22938__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22940 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22939 = (0);
while(true){
if((i__22939 < size__4291__auto__)){
var date = cljs.core._nth.call(null,c__4290__auto__,i__22939);
cljs.core.chunk_append.call(null,b__22940,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
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

var G__22943 = (i__22939 + (1));
i__22939 = G__22943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22940),time_tracker$components$Reports$download_report_$_iter__22929_$_iter__22937.call(null,cljs.core.chunk_rest.call(null,s__22938__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22940),null);
}
} else {
var date = cljs.core.first.call(null,s__22938__$2);
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
})(),time_tracker$components$Reports$download_report_$_iter__22929_$_iter__22937.call(null,cljs.core.rest.call(null,s__22938__$2)));
}
} else {
return null;
}
break;
}
});})(project,s__22930__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
,null,null));
});})(project,s__22930__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})());
})()
,time_tracker$components$Reports$download_report_$_iter__22929.call(null,cljs.core.rest.call(null,s__22930__$2)));
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
return (function time_tracker$components$Reports$render_$_iter__22944(s__22945){
return (new cljs.core.LazySeq(null,((function (project_name){
return (function (){
var s__22945__$1 = s__22945;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22945__$1);
if(temp__5457__auto__){
var s__22945__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22945__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22945__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22947 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22946 = (0);
while(true){
if((i__22946 < size__4291__auto__)){
var project = cljs.core._nth.call(null,c__4290__auto__,i__22946);
cljs.core.chunk_append.call(null,b__22947,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-title"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,project)], null),cljs.core.first.call(null,project)], null),(function (){var iter__4292__auto__ = ((function (i__22946,project,c__4290__auto__,size__4291__auto__,b__22947,s__22945__$2,temp__5457__auto__,project_name){
return (function time_tracker$components$Reports$render_$_iter__22944_$_iter__22948(s__22949){
return (new cljs.core.LazySeq(null,((function (i__22946,project,c__4290__auto__,size__4291__auto__,b__22947,s__22945__$2,temp__5457__auto__,project_name){
return (function (){
var s__22949__$1 = s__22949;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22949__$1);
if(temp__5457__auto____$1){
var s__22949__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22949__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__22949__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__22951 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__22950 = (0);
while(true){
if((i__22950 < size__4291__auto____$1)){
var date = cljs.core._nth.call(null,c__4290__auto____$1,i__22950);
cljs.core.chunk_append.call(null,b__22951,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(1000)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null);
})());

var G__22956 = (i__22950 + (1));
i__22950 = G__22956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22951),time_tracker$components$Reports$render_$_iter__22944_$_iter__22948.call(null,cljs.core.chunk_rest.call(null,s__22949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22951),null);
}
} else {
var date = cljs.core.first.call(null,s__22949__$2);
return cljs.core.cons.call(null,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(1000)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null);
})(),time_tracker$components$Reports$render_$_iter__22944_$_iter__22948.call(null,cljs.core.rest.call(null,s__22949__$2)));
}
} else {
return null;
}
break;
}
});})(i__22946,project,c__4290__auto__,size__4291__auto__,b__22947,s__22945__$2,temp__5457__auto__,project_name))
,null,null));
});})(i__22946,project,c__4290__auto__,size__4291__auto__,b__22947,s__22945__$2,temp__5457__auto__,project_name))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})()], null));

var G__22957 = (i__22946 + (1));
i__22946 = G__22957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22947),time_tracker$components$Reports$render_$_iter__22944.call(null,cljs.core.chunk_rest.call(null,s__22945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22947),null);
}
} else {
var project = cljs.core.first.call(null,s__22945__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-title"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,project)], null),cljs.core.first.call(null,project)], null),(function (){var iter__4292__auto__ = ((function (project,s__22945__$2,temp__5457__auto__,project_name){
return (function time_tracker$components$Reports$render_$_iter__22944_$_iter__22952(s__22953){
return (new cljs.core.LazySeq(null,((function (project,s__22945__$2,temp__5457__auto__,project_name){
return (function (){
var s__22953__$1 = s__22953;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22953__$1);
if(temp__5457__auto____$1){
var s__22953__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22953__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22953__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22955 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22954 = (0);
while(true){
if((i__22954 < size__4291__auto__)){
var date = cljs.core._nth.call(null,c__4290__auto__,i__22954);
cljs.core.chunk_append.call(null,b__22955,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(1000)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null);
})());

var G__22958 = (i__22954 + (1));
i__22954 = G__22958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22955),time_tracker$components$Reports$render_$_iter__22944_$_iter__22952.call(null,cljs.core.chunk_rest.call(null,s__22953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22955),null);
}
} else {
var date = cljs.core.first.call(null,s__22953__$2);
return cljs.core.cons.call(null,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(1000)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null);
})(),time_tracker$components$Reports$render_$_iter__22944_$_iter__22952.call(null,cljs.core.rest.call(null,s__22953__$2)));
}
} else {
return null;
}
break;
}
});})(project,s__22945__$2,temp__5457__auto__,project_name))
,null,null));
});})(project,s__22945__$2,temp__5457__auto__,project_name))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})()], null),time_tracker$components$Reports$render_$_iter__22944.call(null,cljs.core.rest.call(null,s__22945__$2)));
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

//# sourceMappingURL=Reports.js.map?rel=1582304840727
