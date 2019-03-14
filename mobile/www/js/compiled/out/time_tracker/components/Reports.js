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
var seq__28725_28735 = cljs.core.seq.call(null,listOfProjects);
var chunk__28726_28736 = null;
var count__28727_28737 = (0);
var i__28728_28738 = (0);
while(true){
if((i__28728_28738 < count__28727_28737)){
var vec__28729_28739 = cljs.core._nth.call(null,chunk__28726_28736,i__28728_28738);
var date_28740 = cljs.core.nth.call(null,vec__28729_28739,(0),null);
var currentDates_28741 = cljs.core.get.call(null,listOfProjects,date_28740);
var currentKey_28742 = cljs.core.keys.call(null,currentDates_28741);
var i_28743 = (0);
while(true){
if(cljs.core._EQ_.call(null,i_28743,cljs.core.count.call(null,currentKey_28742))){
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = time_tracker.components.Reports.check_time_after.call(null,((10) + module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_28742,i_28743),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.start_date)).unix());
if(cljs.core.truth_(and__3911__auto__)){
return time_tracker.components.Reports.check_time_before.call(null,((10) - module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_28742,i_28743),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.end_date)).unix());
} else {
return and__3911__auto__;
}
})())){
var htmlToSet_28744 = cljs.core.deref.call(null,returnHtml);
var htmlToMerge_28745 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,cljs.core.nth.call(null,currentKey_28742,i_28743)),cljs.core.get.call(null,currentDates_28741,cljs.core.nth.call(null,currentKey_28742,i_28743))]);
var currentVals_28746 = cljs.core.keyword.call(null,date_28740).call(null,cljs.core.deref.call(null,returnHtml));
cljs.core.swap_BANG_.call(null,returnHtml,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_28740),cljs.core.conj.call(null,currentVals_28746,htmlToMerge_28745)]));
} else {
}

var G__28747 = (i_28743 + (1));
i_28743 = G__28747;
continue;
}
break;
}


var G__28748 = seq__28725_28735;
var G__28749 = chunk__28726_28736;
var G__28750 = count__28727_28737;
var G__28751 = (i__28728_28738 + (1));
seq__28725_28735 = G__28748;
chunk__28726_28736 = G__28749;
count__28727_28737 = G__28750;
i__28728_28738 = G__28751;
continue;
} else {
var temp__5457__auto___28752 = cljs.core.seq.call(null,seq__28725_28735);
if(temp__5457__auto___28752){
var seq__28725_28753__$1 = temp__5457__auto___28752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28725_28753__$1)){
var c__4319__auto___28754 = cljs.core.chunk_first.call(null,seq__28725_28753__$1);
var G__28755 = cljs.core.chunk_rest.call(null,seq__28725_28753__$1);
var G__28756 = c__4319__auto___28754;
var G__28757 = cljs.core.count.call(null,c__4319__auto___28754);
var G__28758 = (0);
seq__28725_28735 = G__28755;
chunk__28726_28736 = G__28756;
count__28727_28737 = G__28757;
i__28728_28738 = G__28758;
continue;
} else {
var vec__28732_28759 = cljs.core.first.call(null,seq__28725_28753__$1);
var date_28760 = cljs.core.nth.call(null,vec__28732_28759,(0),null);
var currentDates_28761 = cljs.core.get.call(null,listOfProjects,date_28760);
var currentKey_28762 = cljs.core.keys.call(null,currentDates_28761);
var i_28763 = (0);
while(true){
if(cljs.core._EQ_.call(null,i_28763,cljs.core.count.call(null,currentKey_28762))){
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = time_tracker.components.Reports.check_time_after.call(null,((10) + module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_28762,i_28763),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.start_date)).unix());
if(cljs.core.truth_(and__3911__auto__)){
return time_tracker.components.Reports.check_time_before.call(null,((10) - module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.nth.call(null,currentKey_28762,i_28763),"MMDDYYYY").unix()),module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,time_tracker.components.Reports.end_date)).unix());
} else {
return and__3911__auto__;
}
})())){
var htmlToSet_28764 = cljs.core.deref.call(null,returnHtml);
var htmlToMerge_28765 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,cljs.core.nth.call(null,currentKey_28762,i_28763)),cljs.core.get.call(null,currentDates_28761,cljs.core.nth.call(null,currentKey_28762,i_28763))]);
var currentVals_28766 = cljs.core.keyword.call(null,date_28760).call(null,cljs.core.deref.call(null,returnHtml));
cljs.core.swap_BANG_.call(null,returnHtml,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,date_28760),cljs.core.conj.call(null,currentVals_28766,htmlToMerge_28765)]));
} else {
}

var G__28767 = (i_28763 + (1));
i_28763 = G__28767;
continue;
}
break;
}


var G__28768 = cljs.core.next.call(null,seq__28725_28753__$1);
var G__28769 = null;
var G__28770 = (0);
var G__28771 = (0);
seq__28725_28735 = G__28768;
chunk__28726_28736 = G__28769;
count__28727_28737 = G__28770;
i__28728_28738 = G__28771;
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
return (function time_tracker$components$Reports$download_report_$_iter__28772(s__28773){
return (new cljs.core.LazySeq(null,((function (doc,docContent,maxAmountOfItems){
return (function (){
var s__28773__$1 = s__28773;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28773__$1);
if(temp__5457__auto__){
var s__28773__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28773__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28773__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28775 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28774 = (0);
while(true){
if((i__28774 < size__4291__auto__)){
var project = cljs.core._nth.call(null,c__4290__auto__,i__28774);
cljs.core.chunk_append.call(null,b__28775,(function (){
doc.setFontSize((24));

doc.setTextColor("#fff");

doc.setFillColor("#633892");

doc.rect((0),(((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)) - (9)),(250),(12),"FD");

doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,project)))].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.setFontSize((12));

doc.setTextColor("#000");

cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);

return cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (i__28774,project,c__4290__auto__,size__4291__auto__,b__28775,s__28773__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function time_tracker$components$Reports$download_report_$_iter__28772_$_iter__28776(s__28777){
return (new cljs.core.LazySeq(null,((function (i__28774,project,c__4290__auto__,size__4291__auto__,b__28775,s__28773__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function (){
var s__28777__$1 = s__28777;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__28777__$1);
if(temp__5457__auto____$1){
var s__28777__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28777__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__28777__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__28779 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__28778 = (0);
while(true){
if((i__28778 < size__4291__auto____$1)){
var date = cljs.core._nth.call(null,c__4290__auto____$1,i__28778);
cljs.core.chunk_append.call(null,b__28779,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
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

var G__28784 = (i__28778 + (1));
i__28778 = G__28784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28779),time_tracker$components$Reports$download_report_$_iter__28772_$_iter__28776.call(null,cljs.core.chunk_rest.call(null,s__28777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28779),null);
}
} else {
var date = cljs.core.first.call(null,s__28777__$2);
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
})(),time_tracker$components$Reports$download_report_$_iter__28772_$_iter__28776.call(null,cljs.core.rest.call(null,s__28777__$2)));
}
} else {
return null;
}
break;
}
});})(i__28774,project,c__4290__auto__,size__4291__auto__,b__28775,s__28773__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
,null,null));
});})(i__28774,project,c__4290__auto__,size__4291__auto__,b__28775,s__28773__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})());
})()
);

var G__28785 = (i__28774 + (1));
i__28774 = G__28785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28775),time_tracker$components$Reports$download_report_$_iter__28772.call(null,cljs.core.chunk_rest.call(null,s__28773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28775),null);
}
} else {
var project = cljs.core.first.call(null,s__28773__$2);
return cljs.core.cons.call(null,(function (){
doc.setFontSize((24));

doc.setTextColor("#fff");

doc.setFillColor("#633892");

doc.rect((0),(((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)) - (9)),(250),(12),"FD");

doc.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,project)))].join(''),(10),((15) * cljs.core.deref.call(null,time_tracker.components.Reports.current_pdf_offset)));

doc.setFontSize((12));

doc.setTextColor("#000");

cljs.core.swap_BANG_.call(null,time_tracker.components.Reports.current_pdf_offset,cljs.core.inc);

return cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (project,s__28773__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function time_tracker$components$Reports$download_report_$_iter__28772_$_iter__28780(s__28781){
return (new cljs.core.LazySeq(null,((function (project,s__28773__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems){
return (function (){
var s__28781__$1 = s__28781;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__28781__$1);
if(temp__5457__auto____$1){
var s__28781__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28781__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28781__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28783 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28782 = (0);
while(true){
if((i__28782 < size__4291__auto__)){
var date = cljs.core._nth.call(null,c__4290__auto__,i__28782);
cljs.core.chunk_append.call(null,b__28783,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
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

var G__28786 = (i__28782 + (1));
i__28782 = G__28786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28783),time_tracker$components$Reports$download_report_$_iter__28772_$_iter__28780.call(null,cljs.core.chunk_rest.call(null,s__28781__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28783),null);
}
} else {
var date = cljs.core.first.call(null,s__28781__$2);
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
})(),time_tracker$components$Reports$download_report_$_iter__28772_$_iter__28780.call(null,cljs.core.rest.call(null,s__28781__$2)));
}
} else {
return null;
}
break;
}
});})(project,s__28773__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
,null,null));
});})(project,s__28773__$2,temp__5457__auto__,doc,docContent,maxAmountOfItems))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})());
})()
,time_tracker$components$Reports$download_report_$_iter__28772.call(null,cljs.core.rest.call(null,s__28773__$2)));
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
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-long-arrow-alt-left","i.fas.fa-long-arrow-alt-left",1932573860)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Reports"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-body","div.Reports-body",1366778911),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Generate New Report"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Start Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pikaday.reagent.date_selector,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date-atom","date-atom",-1343265988),time_tracker.components.Reports.start_date], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"End Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pikaday.reagent.date_selector,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date-atom","date-atom",-1343265988),time_tracker.components.Reports.end_date], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (project_name){
return (function (){
return time_tracker.components.Reports.generate_report.call(null,new cljs.core.Keyword(null,"projectDates","projectDates",760851171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
});})(project_name))
], null),"Generate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (project_name){
return (function (){
return time_tracker.components.Reports.download_report.call(null,new cljs.core.Keyword(null,"projectDates","projectDates",760851171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
});})(project_name))
], null),"Download"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-list","div.Reports-list",-1856345467),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (project_name){
return (function time_tracker$components$Reports$render_$_iter__28787(s__28788){
return (new cljs.core.LazySeq(null,((function (project_name){
return (function (){
var s__28788__$1 = s__28788;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28788__$1);
if(temp__5457__auto__){
var s__28788__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28788__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28788__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28790 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28789 = (0);
while(true){
if((i__28789 < size__4291__auto__)){
var project = cljs.core._nth.call(null,c__4290__auto__,i__28789);
cljs.core.chunk_append.call(null,b__28790,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-title"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,project)], null),cljs.core.first.call(null,project)], null),(function (){var iter__4292__auto__ = ((function (i__28789,project,c__4290__auto__,size__4291__auto__,b__28790,s__28788__$2,temp__5457__auto__,project_name){
return (function time_tracker$components$Reports$render_$_iter__28787_$_iter__28791(s__28792){
return (new cljs.core.LazySeq(null,((function (i__28789,project,c__4290__auto__,size__4291__auto__,b__28790,s__28788__$2,temp__5457__auto__,project_name){
return (function (){
var s__28792__$1 = s__28792;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__28792__$1);
if(temp__5457__auto____$1){
var s__28792__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28792__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__28792__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__28794 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__28793 = (0);
while(true){
if((i__28793 < size__4291__auto____$1)){
var date = cljs.core._nth.call(null,c__4290__auto____$1,i__28793);
cljs.core.chunk_append.call(null,b__28794,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return cljs.core.doall.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null));
})());

var G__28799 = (i__28793 + (1));
i__28793 = G__28799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28794),time_tracker$components$Reports$render_$_iter__28787_$_iter__28791.call(null,cljs.core.chunk_rest.call(null,s__28792__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28794),null);
}
} else {
var date = cljs.core.first.call(null,s__28792__$2);
return cljs.core.cons.call(null,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return cljs.core.doall.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null));
})(),time_tracker$components$Reports$render_$_iter__28787_$_iter__28791.call(null,cljs.core.rest.call(null,s__28792__$2)));
}
} else {
return null;
}
break;
}
});})(i__28789,project,c__4290__auto__,size__4291__auto__,b__28790,s__28788__$2,temp__5457__auto__,project_name))
,null,null));
});})(i__28789,project,c__4290__auto__,size__4291__auto__,b__28790,s__28788__$2,temp__5457__auto__,project_name))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})()], null));

var G__28800 = (i__28789 + (1));
i__28789 = G__28800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28790),time_tracker$components$Reports$render_$_iter__28787.call(null,cljs.core.chunk_rest.call(null,s__28788__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28790),null);
}
} else {
var project = cljs.core.first.call(null,s__28788__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-title"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,project)], null),cljs.core.first.call(null,project)], null),(function (){var iter__4292__auto__ = ((function (project,s__28788__$2,temp__5457__auto__,project_name){
return (function time_tracker$components$Reports$render_$_iter__28787_$_iter__28795(s__28796){
return (new cljs.core.LazySeq(null,((function (project,s__28788__$2,temp__5457__auto__,project_name){
return (function (){
var s__28796__$1 = s__28796;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__28796__$1);
if(temp__5457__auto____$1){
var s__28796__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28796__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28796__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28798 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28797 = (0);
while(true){
if((i__28797 < size__4291__auto__)){
var date = cljs.core._nth.call(null,c__4290__auto__,i__28797);
cljs.core.chunk_append.call(null,b__28798,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return cljs.core.doall.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null));
})());

var G__28801 = (i__28797 + (1));
i__28797 = G__28801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28798),time_tracker$components$Reports$render_$_iter__28787_$_iter__28795.call(null,cljs.core.chunk_rest.call(null,s__28796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28798),null);
}
} else {
var date = cljs.core.first.call(null,s__28796__$2);
return cljs.core.cons.call(null,(function (){var dateKey = cljs.core.first.call(null,cljs.core.first.call(null,date));
var dateItems = cljs.core.second.call(null,cljs.core.first.call(null,date));
return cljs.core.doall.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Reports-dayValue","div.Reports-dayValue",-32365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,project)),"-values"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$time_tracker$node_modules$moment$moment["default"](cljs.core.name.call(null,dateKey),"MMDDYYYY").format("LL"))," : "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),time_tracker.utilities.date_formatter.format_time_taken.call(null,(0),((1000) * time_tracker.utilities.date_formatter.get_total_seconds.call(null,dateItems)))], null)], null));
})(),time_tracker$components$Reports$render_$_iter__28787_$_iter__28795.call(null,cljs.core.rest.call(null,s__28796__$2)));
}
} else {
return null;
}
break;
}
});})(project,s__28788__$2,temp__5457__auto__,project_name))
,null,null));
});})(project,s__28788__$2,temp__5457__auto__,project_name))
;
return iter__4292__auto__.call(null,cljs.core.second.call(null,project));
})()], null),time_tracker$components$Reports$render_$_iter__28787.call(null,cljs.core.rest.call(null,s__28788__$2)));
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

//# sourceMappingURL=Reports.js.map?rel=1552515470045
