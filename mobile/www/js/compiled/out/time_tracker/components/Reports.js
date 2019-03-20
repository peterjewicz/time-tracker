// Compiled by ClojureScript 1.10.238 {}
goog.provide('time_tracker.components.Reports');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('time_tracker.utilities.view_handler');
goog.require('time_tracker.utilities.date_formatter');
goog.require('cljs_pikaday.reagent');
goog.require('module$Applications$server$time_tracker$node_modules$localforage$dist$localforage');
goog.require('module$Applications$server$time_tracker$node_modules$moment$moment');
if(typeof time_tracker.components.Reports.start_date !== 'undefined'){
} else {
time_tracker.components.Reports.start_date = reagent.core.atom.call(null,(new Date((new Date()).setHours((0),(0),(0),(0)))));
}
if(typeof time_tracker.components.Reports.end_date !== 'undefined'){
} else {
time_tracker.components.Reports.end_date = reagent.core.atom.call(null,(new Date()));
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
var seq__22089_22099 = cljs.core.seq.call(null,listOfProjects);
var chunk__22090_22100 = null;
var count__22091_22101 = (0);
var i__22092_22102 = (0);
while(true){
if((i__22092_22102 < count__22091_22101)){
var vec__22093_22103 = cljs.core._nth.call(null,chunk__22090_22100,i__22092_22102);
var date_22104 = cljs.core.nth.call(null,vec__22093_22103,(0),null);
var currentDates_22105 = cljs.core.get.call(null,listOfProjects,date_22104);
var currentKey_22106 = cljs.core.keys.call(null,currentDates_22105);
var i_22107 = (0);
while(true){
if(cljs.core._EQ_.call(null,i_22107,cljs.core.count.call(null,currentKey_22106))){
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = time_tracker.components.Reports.check_time_after.call(null,((10) + module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_22106,i_22107),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.start_date)).unix());
if(cljs.core.truth_(and__3911__auto__)){
return time_tracker.components.Reports.check_time_before.call(null,((10) - module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_22106,i_22107),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.end_date)).unix());
} else {
return and__3911__auto__;
}
})())){
var htmlToSet_22108 = cljs.core.deref.call(null,returnHtml);
var htmlToMerge_22109 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,cljs.core.nth.call(null,currentKey_22106,i_22107)),cljs.core.get.call(null,currentDates_22105,cljs.core.nth.call(null,currentKey_22106,i_22107))]);
var currentVals_22110 = cljs.core.keyword.call(null,date_22104).call(null,cljs.core.deref.call(null,returnHtml));
cljs.core.swap_BANG_.call(null,returnHtml,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22104),cljs.core.conj.call(null,currentVals_22110,htmlToMerge_22109)]));
} else {
}

var G__22111 = (i_22107 + (1));
i_22107 = G__22111;
continue;
}
break;
}


var G__22112 = seq__22089_22099;
var G__22113 = chunk__22090_22100;
var G__22114 = count__22091_22101;
var G__22115 = (i__22092_22102 + (1));
seq__22089_22099 = G__22112;
chunk__22090_22100 = G__22113;
count__22091_22101 = G__22114;
i__22092_22102 = G__22115;
continue;
} else {
var temp__5457__auto___22116 = cljs.core.seq.call(null,seq__22089_22099);
if(temp__5457__auto___22116){
var seq__22089_22117__$1 = temp__5457__auto___22116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22089_22117__$1)){
var c__4319__auto___22118 = cljs.core.chunk_first.call(null,seq__22089_22117__$1);
var G__22119 = cljs.core.chunk_rest.call(null,seq__22089_22117__$1);
var G__22120 = c__4319__auto___22118;
var G__22121 = cljs.core.count.call(null,c__4319__auto___22118);
var G__22122 = (0);
seq__22089_22099 = G__22119;
chunk__22090_22100 = G__22120;
count__22091_22101 = G__22121;
i__22092_22102 = G__22122;
continue;
} else {
var vec__22096_22123 = cljs.core.first.call(null,seq__22089_22117__$1);
var date_22124 = cljs.core.nth.call(null,vec__22096_22123,(0),null);
var currentDates_22125 = cljs.core.get.call(null,listOfProjects,date_22124);
var currentKey_22126 = cljs.core.keys.call(null,currentDates_22125);
var i_22127 = (0);
while(true){
if(cljs.core._EQ_.call(null,i_22127,cljs.core.count.call(null,currentKey_22126))){
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = time_tracker.components.Reports.check_time_after.call(null,((10) + module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_22126,i_22127),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.start_date)).unix());
if(cljs.core.truth_(and__3911__auto__)){
return time_tracker.components.Reports.check_time_before.call(null,((10) - module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_22126,i_22127),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.end_date)).unix());
} else {
return and__3911__auto__;
}
})())){
var htmlToSet_22128 = cljs.core.deref.call(null,returnHtml);
var htmlToMerge_22129 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,cljs.core.nth.call(null,currentKey_22126,i_22127)),cljs.core.get.call(null,currentDates_22125,cljs.core.nth.call(null,currentKey_22126,i_22127))]);
var currentVals_22130 = cljs.core.keyword.call(null,date_22124).call(null,cljs.core.deref.call(null,returnHtml));
cljs.core.swap_BANG_.call(null,returnHtml,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_22124),cljs.core.conj.call(null,currentVals_22130,htmlToMerge_22129)]));
} else {
}

var G__22131 = (i_22127 + (1));
i_22127 = G__22131;
continue;
}
break;
}


var G__22132 = cljs.core.next.call(null,seq__22089_22117__$1);
var G__22133 = null;
var G__22134 = (0);
var G__22135 = (0);
seq__22089_22099 = G__22132;
chunk__22090_22100 = G__22133;
count__22091_22101 = G__22134;
i__22092_22102 = G__22135;
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
return (function time_tracker$components$Reports$download_report_$_iter__22136(s__22137){
return (new cljs.core.LazySeq(null,((function (doc,docContent,maxAmountOfItems){
return (function (){
var s__22137__$1 = s__22137;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22137__$1);
if(temp__5457__auto__){
var s__22137__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22137__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22137__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22139 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22138 = (0);
while(true){
if((i__22138 < size__4291__auto__)){
var project = cljs.core._nth.call(null,c__4290__auto__,i__22138);
cljs.core.chunk_append.call(null,b__22139,(function (){
doc.setFontSize((24));

doc.setTextColor("#fff");

doc.setFillColor("#633892");

doc.rect((0),(((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)) - (9)),(250),(12),"FD");

doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,project)))].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.setFontSize((12));

doc.setTextColor("#000");

cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);

return cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (i__22138,project,c__4290__auto__,size__4291__auto__,b__22139,s__22137__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function time_tracker$components$Reports$download_report_$_iter__22136_$_iter__22140(s__22141){
return (new cljs.core.LazySeq(null,((function (i__22138,project,c__4290__auto__,size__4291__auto__,b__22139,s__22137__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function (){
var s__22141__$1 = s__22141;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22141__$1);
if(temp__5457__auto____$1){
var s__22141__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22141__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__22141__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__22143 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__22142 = (0);
while(true){
if((i__22142 < size__4291__auto____$1)){
var date = cljs.core._nth.call(null,c__4290__auto____$1,i__22142);
cljs.core.chunk_append.call(null,b__22143,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
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

var G__22148 = (i__22142 + (1));
i__22142 = G__22148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22143),time_tracker$components$Reports$download_report_$_iter__22136_$_iter__22140.call(null,cljs.core.chunk_rest.call(null,s__22141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22143),null);
}
} else {
var date = cljs.core.first.call(null,s__22141__$2);
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
})(),time_tracker$components$Reports$download_report_$_iter__22136_$_iter__22140.call(null,cljs.core.rest.call(null,s__22141__$2)));
}
} else {
return null;
}
break;
}
});})(i__22138,project,c__4290__auto__,size__4291__auto__,b__22139,s__22137__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
,null,null));
});})(i__22138,project,c__4290__auto__,size__4291__auto__,b__22139,s__22137__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})());
})()
);

var G__22149 = (i__22138 + (1));
i__22138 = G__22149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22139),time_tracker$components$Reports$download_report_$_iter__22136.call(null,cljs.core.chunk_rest.call(null,s__22137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22139),null);
}
} else {
var project = cljs.core.first.call(null,s__22137__$2);
return cljs.core.cons.call(null,(function (){
doc.setFontSize((24));

doc.setTextColor("#fff");

doc.setFillColor("#633892");

doc.rect((0),(((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)) - (9)),(250),(12),"FD");

doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,project)))].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.setFontSize((12));

doc.setTextColor("#000");

cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);

return cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (project,s__22137__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function time_tracker$components$Reports$download_report_$_iter__22136_$_iter__22144(s__22145){
return (new cljs.core.LazySeq(null,((function (project,s__22137__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function (){
var s__22145__$1 = s__22145;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22145__$1);
if(temp__5457__auto____$1){
var s__22145__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22145__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22145__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22147 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22146 = (0);
while(true){
if((i__22146 < size__4291__auto__)){
var date = cljs.core._nth.call(null,c__4290__auto__,i__22146);
cljs.core.chunk_append.call(null,b__22147,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
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

var G__22150 = (i__22146 + (1));
i__22146 = G__22150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22147),time_tracker$components$Reports$download_report_$_iter__22136_$_iter__22144.call(null,cljs.core.chunk_rest.call(null,s__22145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22147),null);
}
} else {
var date = cljs.core.first.call(null,s__22145__$2);
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
})(),time_tracker$components$Reports$download_report_$_iter__22136_$_iter__22144.call(null,cljs.core.rest.call(null,s__22145__$2)));
}
} else {
return null;
}
break;
}
});})(project,s__22137__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
,null,null));
});})(project,s__22137__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})());
})()
,time_tracker$components$Reports$download_report_$_iter__22136.call(null,cljs.core.rest.call(null,s__22137__$2)));
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
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-long-arrow-alt-left","i.fas.fa-long-arrow-alt-left",1932573860)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Reports"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-body","div.Reports-body",1366778911),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Generate New Report"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepickerWrapper","div.datepickerWrapper",-426005648),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Start Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pikaday.reagent.date_selector,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date-atom","date-atom",-1343265988),time_tracker.components.Reports.start_date,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),true], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepickerWrapper","div.datepickerWrapper",-426005648),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"End Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pikaday.reagent.date_selector,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date-atom","date-atom",-1343265988),time_tracker.components.Reports.end_date,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (project_name){
return (function (){
return time_tracker.components.Reports.generate_report.call(null,new cljs.core.Keyword(null,"projectDates","projectDates",760851171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
});})(project_name))
], null),"Generate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (project_name){
return (function (){
return time_tracker.components.Reports.download_report.call(null,new cljs.core.Keyword(null,"projectDates","projectDates",760851171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
});})(project_name))
], null),"Email Report"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-list","div.Reports-list",-1856345467),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (project_name){
return (function time_tracker$components$Reports$render_$_iter__22151(s__22152){
return (new cljs.core.LazySeq(null,((function (project_name){
return (function (){
var s__22152__$1 = s__22152;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22152__$1);
if(temp__5457__auto__){
var s__22152__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22152__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22152__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22154 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22153 = (0);
while(true){
if((i__22153 < size__4291__auto__)){
var project = cljs.core._nth.call(null,c__4290__auto__,i__22153);
cljs.core.chunk_append.call(null,b__22154,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-title"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,project)], null),cljs.core.first.call(null,project)], null),(function (){var iter__4292__auto__ = ((function (i__22153,project,c__4290__auto__,size__4291__auto__,b__22154,s__22152__$2,temp__5457__auto__,project_name){
return (function time_tracker$components$Reports$render_$_iter__22151_$_iter__22155(s__22156){
return (new cljs.core.LazySeq(null,((function (i__22153,project,c__4290__auto__,size__4291__auto__,b__22154,s__22152__$2,temp__5457__auto__,project_name){
return (function (){
var s__22156__$1 = s__22156;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22156__$1);
if(temp__5457__auto____$1){
var s__22156__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22156__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__22156__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__22158 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__22157 = (0);
while(true){
if((i__22157 < size__4291__auto____$1)){
var date = cljs.core._nth.call(null,c__4290__auto____$1,i__22157);
cljs.core.chunk_append.call(null,b__22158,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return cljs.core.doall.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null));
})());

var G__22163 = (i__22157 + (1));
i__22157 = G__22163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22158),time_tracker$components$Reports$render_$_iter__22151_$_iter__22155.call(null,cljs.core.chunk_rest.call(null,s__22156__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22158),null);
}
} else {
var date = cljs.core.first.call(null,s__22156__$2);
return cljs.core.cons.call(null,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return cljs.core.doall.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null));
})(),time_tracker$components$Reports$render_$_iter__22151_$_iter__22155.call(null,cljs.core.rest.call(null,s__22156__$2)));
}
} else {
return null;
}
break;
}
});})(i__22153,project,c__4290__auto__,size__4291__auto__,b__22154,s__22152__$2,temp__5457__auto__,project_name))
,null,null));
});})(i__22153,project,c__4290__auto__,size__4291__auto__,b__22154,s__22152__$2,temp__5457__auto__,project_name))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})()], null));

var G__22164 = (i__22153 + (1));
i__22153 = G__22164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22154),time_tracker$components$Reports$render_$_iter__22151.call(null,cljs.core.chunk_rest.call(null,s__22152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22154),null);
}
} else {
var project = cljs.core.first.call(null,s__22152__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-title"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,project)], null),cljs.core.first.call(null,project)], null),(function (){var iter__4292__auto__ = ((function (project,s__22152__$2,temp__5457__auto__,project_name){
return (function time_tracker$components$Reports$render_$_iter__22151_$_iter__22159(s__22160){
return (new cljs.core.LazySeq(null,((function (project,s__22152__$2,temp__5457__auto__,project_name){
return (function (){
var s__22160__$1 = s__22160;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22160__$1);
if(temp__5457__auto____$1){
var s__22160__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22160__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22160__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22162 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22161 = (0);
while(true){
if((i__22161 < size__4291__auto__)){
var date = cljs.core._nth.call(null,c__4290__auto__,i__22161);
cljs.core.chunk_append.call(null,b__22162,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return cljs.core.doall.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null));
})());

var G__22165 = (i__22161 + (1));
i__22161 = G__22165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22162),time_tracker$components$Reports$render_$_iter__22151_$_iter__22159.call(null,cljs.core.chunk_rest.call(null,s__22160__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22162),null);
}
} else {
var date = cljs.core.first.call(null,s__22160__$2);
return cljs.core.cons.call(null,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return cljs.core.doall.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null));
})(),time_tracker$components$Reports$render_$_iter__22151_$_iter__22159.call(null,cljs.core.rest.call(null,s__22160__$2)));
}
} else {
return null;
}
break;
}
});})(project,s__22152__$2,temp__5457__auto__,project_name))
,null,null));
});})(project,s__22152__$2,temp__5457__auto__,project_name))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})()], null),time_tracker$components$Reports$render_$_iter__22151.call(null,cljs.core.rest.call(null,s__22152__$2)));
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

//# sourceMappingURL=Reports.js.map?rel=1552669619246
