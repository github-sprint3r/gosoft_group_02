// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.10/js/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/SummarizeNearby.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\n        \x3ctable class\x3d"esriFormTable" \x3e \n          \x3ctr\x3e\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"sumNearbyIcon"\x3e\x3c/div\x3e\x3c/td\x3e\n            \x3ctd class\x3d"esriAlignLeading"\x3e${i18n.summarizeNearby}\x3c/td\x3e\n            \x3ctd\x3e\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\n                  \x3c/div\x3e\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\n                  \x3c/div\x3e              \n              \x3c/div\x3e               \n            \x3c/td\x3e\n          \x3c/tr\x3e\n        \x3c/table\x3e\n      \x3c/div\x3e\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \n         \x3ctbody\x3e\n          \x3ctr\x3e\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_aggregateToolDescription" \x3e${i18n.summarizeDefine}\x3c/td\x3e\n          \x3c/tr\x3e      \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\n              \x3clabel class\x3d""\x3e${i18n.chooseSummarizeLabel}\x3c/label\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"Summarize"\x3e\x3c/a\x3e\n              \x3cselect class\x3d"longInput esriLeadingMargin1"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_layersSelect" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\n          \x3c/tr\x3e\n            \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"2"\x3e\n              \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\n              \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d""\x3e${i18n.findNearLabel}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"shortTextInput"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"BufferOption"\x3e\x3c/a\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd style\x3d"padding:0.25em;width:34%"\x3e\n              \x3cdiv class\x3d"esriLeadingMargin1 bufferSelector selected" data-dojo-attach-point\x3d"_straightLine" \x3e\n                \x3cdiv class\x3d"bufferIcon esriStraightLineDistanceIcon"\x3e\x3c/div\x3e\n                \x3cdiv\x3e\x3clabel class\x3d"esriFloatLeading esriTrailingMargin1 esriSelectLabel"\x3e${i18n.straightLineDistance}\x3c/label\x3e\x3c/div\x3e\n              \x3c/div\x3e\n            \x3c/td\x3e\n            \x3ctd style\x3d"padding:0.25em;width:33%"\x3e\n              \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_drivingDistance"\x3e\n                \x3cdiv class\x3d"bufferIcon esriDrivingDistanceIcon"\x3e\x3c/div\x3e\n                \x3cdiv\x3e\x3clabel data-dojo-attach-point\x3d"_drivingDistanceLabel" class\x3d"esriFloatLeading esriTrailingMargin1 esriSelectLabel"\x3e${i18n.drivingDistance}\x3c/label\x3e\x3c/div\x3e\n              \x3c/div\x3e\n            \x3c/td\x3e\n            \x3ctd style\x3d"esriTrailingMargin2 padding:0.25em;width:33%"\x3e\n              \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_drivingTime" \x3e\n                \x3cdiv class\x3d"bufferIcon esriDrivingTimeIcon"\x3e\x3c/div\x3e\n                \x3cdiv\x3e\x3clabel data-dojo-attach-point\x3d"_drivingTimeLabel" class\x3d"esriFloatLeading esriSelectLabel"\x3e${i18n.drivingTime}\x3c/label\x3e\x3c/div\x3e\n              \x3c/div\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:20%;"\x3e\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-event\x3d"onChange:_handleDistValueChange" data-dojo-props\x3d"intermediateChanges:true,value:\'5\',required:true,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_breakValuesInput" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"\x3e\n            \x3c/td\x3e\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:60%;"\x3e\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-attach-point\x3d"_distanceUnitsSelect" style\x3d"width:85%;table-layout:fixed;"\x3e\n              \x3c/select\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd style\x3d"padding:0" colspan\x3d"3"\x3e\n              \x3cdiv class\x3d"esriLeadingMargin1"\x3e\n                \x3clabel class\x3d"esriSmallLabel"\x3e${i18n.measureHelp}\x3c/label\x3e\n              \x3c/div\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr data-dojo-attach-point\x3d"_useTrafficRow"\x3e\n            \x3ctd style\x3d"padding:0" colspan\x3d"3"\x3e\n              \x3cdiv style\x3d"width:100%;" data-dojo-type\x3d"esri/dijit/analysis/TrafficTime" data-dojo-attach-point\x3d"_trafficTimeWidget"\x3e\x3c/div\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e          \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\n              \x3clabel class\x3d"longTextInput" data-dojo-attach-point\x3d"_addStatsLabel"\x3e\x3c/label\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_addStatsHelpLink" esriHelpTopic\x3d"AddStatisticsFrom"\x3e\x3c/a\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n         \x3ctr\x3e\n           \x3ctd colspan\x3d"3"\x3e\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e\n                \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"_sumMetricCheck" data-dojo-props\x3d"checked:\'true\', disabled:\'true\'"\x3e\x3c/div\x3e\n                \x3clabel data-dojo-attach-point\x3d"_sumMetricLabel"\x3e\x3c/label\x3e\n              \x3c/label\x3e\n           \x3c/td\x3e\n         \x3c/tr\x3e\n         \x3ctr\x3e\n           \x3ctd colspan\x3d"3" style\x3d"padding-top: 0"\x3e\n              \x3cselect class\x3d"longInput esriLongLabel esriLeadingMargin1" data-dojo-type\x3d"dijit.form.Select"  data-dojo-props\x3d"style:{width:\'65%\', tableLayout: \'fixed\', overflowX:\'hidden\'}" data-dojo-attach-event\x3d"onChange:_handleShapeUnitsChange" data-dojo-attach-point\x3d"_shapeUnitsSelect"\x3e\x3c/select\x3e\n           \x3c/td\x3e\n         \x3c/tr\x3e         \n         \x3c!--\x3ctr\x3e\n           \x3ctd colspan\x3d"3"\x3e\n              \x3clabel class\x3d"longTextInput"\x3e\n                \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_addStatesCheck" data-dojo-attach-event\x3d"onChange:_handleStatsCheckChange" data-dojo-props\x3d"checked:\'true\'"\x3e\x3c/div\x3e\n                ${i18n.addStatsLabel}                \n              \x3c/label\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"KeepBoundaryNoPoints"\x3e\x3c/a\x3e\n           \x3c/td\x3e           \n          \x3c/tr\x3e--\x3e           \n          \x3ctr data-dojo-attach-point\x3d"_afterStatsRow"\x3e\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\n          \x3c/tr\x3e\n          \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"2"\x3e\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\n              \x3clabel class\x3d"longTextInput"  data-dojo-attach-point\x3d"_groupByLabel"\x3e${i18n.groupByLabel}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"shortTextInput"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"GroupBy"\x3e\x3c/a\x3e \n            \x3c/td\x3e             \n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3cselect class\x3d"longInput" data-dojo-type\x3d"dijit.form.Select"  data-dojo-attach-point\x3d"_groupBySelect"\x3e\x3c/select\x3e\n            \x3c/td\x3e                \n          \x3c/tr\x3e         \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"2"\x3e\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\n              \x3clabel class\x3d"longTextInput"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"shortTextInput"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputName"\x3e\x3c/a\x3e \n            \x3c/td\x3e             \n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 esriOutputText"  data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\n            \x3c/td\x3e                \n          \x3c/tr\x3e \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\n                 \x3cinput class\x3d"longInput esriFolderSelect" dojoAttachPoint\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/ComboBox" trim\x3d"true"\x3e\x3c/input\x3e\n               \x3c/div\x3e              \n            \x3c/td\x3e\n          \x3c/tr\x3e                                      \n        \x3c/tbody\x3e         \n       \x3c/table\x3e\n     \x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\n      \x3cdiv style\x3d"width:100%;padding:0.5em 0 0.5em 0"\x3e\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv"class\x3d"esriSelectLabel" style\x3d"font-size:smaller;"\x3e\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\n           ${i18n.useMapExtent}\n       \x3c/label\x3e\n      \x3c/div\x3e\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\n          ${i18n.runAnalysis}\n      \x3c/button\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing closeIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\n        \x3cimg src\x3d\'images/close.gif\' border\x3d\'0\'/\x3e \n      \x3c/a\x3e\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\n    \x3c/div\x3e        \n\x3c/div\x3e\n'}});
define("esri/dijit/analysis/SummarizeNearby","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/ComboBox ../../kernel ../../lang ./AnalysisBase ./CreditEstimator ./utils ./TrafficTime dojo/i18n!../../nls/jsapi dojo/text!./templates/SummarizeNearby.html".split(" "),
function(r,z,d,g,h,k,u,A,K,l,m,f,n,B,e,s,v,C,D,E,F,G,w,L,M,N,x,O,P,Q,R,H,y,I,S,q,T,t,J){r=z([C,D,E,F,G,I],{declaredClass:"esri.dijit.analysis.SummarizeNearby",templateString:J,basePath:r.toUrl("."),widgetsInTemplate:!0,sumNearbyLayer:null,summaryLayers:null,summaryFields:null,nearType:null,outputLayerName:null,summarizeMetric:!0,summaryLayer:null,groupByField:null,distances:null,units:null,shapeUnits:null,sumShape:!0,showSelectFolder:!1,showChooseExtent:!0,enableTravelModes:!0,showHelp:!0,showCredits:!0,
returnFeatureCollection:!1,i18n:null,toolName:"SummarizeNearby",helpFileName:"SummarizeNearby",resultParameter:"resultLayer",constructor:function(a){this._pbConnects=[];this._statsRows=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);g.forEach(this._pbConnects,h.disconnect);delete this._pbConnects;this._driveTimeClickHandles&&0<this._driveTimeClickHandles.length&&(g.forEach(this._driveTimeClickHandles,h.disconnect),this._driveTimeClickHandles=null)},
postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,t.bufferTool);d.mixin(this.i18n,t.driveTimes);d.mixin(this.i18n,t.summarizeNearbyTool)},postCreate:function(){this.inherited(arguments);e.add(this._form.domNode,"esriSimpleForm");this._breakValuesInput.set("validator",d.hitch(this,this.validateDistance));this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",
{save:!0}));this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();if(this._form.validate()){a={};var b;b=this.summaryLayers[this._layersSelect.get("value")];a.summaryLayer=k.toJson(q.constructAnalysisInputLyrObj(b));a.nearType=this.get("nearType");a.sumNearbyLayer=k.toJson(q.constructAnalysisInputLyrObj(this.sumNearbyLayer));a.summaryFields=k.toJson(this.get("summaryFields"));a.distances=k.toJson(this.get("distances"));a.units=this._distanceUnitsSelect.get("value");this._trafficTimeWidget.get("checked")&&
(a.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(a.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay")));this.returnFeatureCollection||(a.OutputName=k.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));a.sumShape=this._sumMetricCheck.get("checked");if("esriGeometryPoint"!==b.geometryType||"esriGeometryMultipoint"!==b.geometryType)a.shapeUnits=this.get("shapeUnits");"0"!==this._groupBySelect.get("value")&&
(a.groupByField=this._groupBySelect.get("value"));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=k.toJson({extent:this.map.extent._normalize(!0)}));this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},_handleSaveBtnClick:function(){if(this._form.validate())if(!this._sumMetricCheck.get("checked")&&0===this.get("summaryFields").length)this._showMessages(this.i18n.statsRequiredMsg);else{this._saveBtn.set("disabled",
!0);var a={},b={},c,p;c=this.summaryLayers[this._layersSelect.get("value")];a.summaryLayer=k.toJson(q.constructAnalysisInputLyrObj(c));a.nearType=this.get("nearType");a.sumNearbyLayer=k.toJson(q.constructAnalysisInputLyrObj(this.sumNearbyLayer));a.summaryFields=k.toJson(this.get("summaryFields"));a.distances=this.get("distances");a.units=this._distanceUnitsSelect.get("value");this._trafficTimeWidget.get("checked")&&(a.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&
(a.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay")));this.returnFeatureCollection||(a.OutputName=k.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));a.sumShape=this._sumMetricCheck.get("checked");if("esriGeometryPoint"!==c.geometryType||"esriGeometryMultipoint"!==c.geometryType)a.shapeUnits=this.get("shapeUnits");"0"!==this._groupBySelect.get("value")&&(a.groupByField=this._groupBySelect.get("value"),this.resultParameter=["resultLayer","groupBySummary"]);
this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=k.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(p={outSR:this.map.spatialReference},this.showChooseExtent&&(p.extent=this.map.extent._normalize(!0)),a.context=k.toJson(p));b.jobParams=a;this._saveBtn.set("disabled",!1);b.itemParams={description:l.substitute(this.i18n.itemDescription,{sumNearbyLayerName:this.sumNearbyLayer.name,summaryLayerName:c.name}),tags:l.substitute(this.i18n.itemTags,{sumNearbyLayerName:this.sumNearbyLayer.name,
summaryLayerName:c.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"");this.execute(b)}},_initializeShapeUnits:function(a){this._prevGeometryType&&this._prevGeometryType===a||(this._shapeUnitsSelect.removeOption(this._shapeUnitsSelect.getOptions()),m.set(this._shapeUnitsSelect.domNode,"display","esriGeometryPoint"===a||"esriGeometryMultipoint"===a?"none":""),"esriGeometryPolygon"===
a?(this._shapeUnitsSelect.addOption([{value:"SquareMiles",label:this.i18n.sqMiles},{value:"SquareKilometers",label:this.i18n.sqKm},{value:"SquareMeters",label:this.i18n.sqMeters},{value:"Hectares",label:this.i18n.hectares},{value:"Acres",label:this.i18n.acres}]),"Kilometers"===this.units&&!this.shapeUnits?this.shapeUnits="SquareKilometers":"Kilometers"===this.get("shapeUnits")&&this.set("shapeUnits","SquareKilometers")):"esriGeometryPolyline"===a&&(this._shapeUnitsSelect.addOption([{value:"Miles",
label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters},{value:"Yards",label:this.i18n.yards}]),"Kilometers"===this.units&&!this.shapeUnits?this.shapeUnits="Kilometers":"SquareKilometers"===this.get("shapeUnits")&&this.set("shapeUnits","Kilometers")),this._shapeUnitsSelect.set("value",this.get("shapeUnits")),this._prevGeometryType=a)},_handleLayerChange:function(a){a=this.summaryLayers[a];this.outputLayerName=
l.substitute(this.i18n.outputLayerName,{summaryLayerName:a.name,sumNearbyLayerName:this.sumNearbyLayer.name});this._outputLayerInput.set("value",this.outputLayerName);f.set(this._addStatsLabel,"innerHTML",l.substitute(this.i18n.addStats,{summaryLayerName:a.name}));this._initializeShapeUnits(a.geometryType);"esriGeometryPolygon"===a.geometryType&&(f.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoly),f.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPolygon"));if("esriGeometryPoint"===
a.geometryType||"esriGeometryMultipoint"===a.geometryType)f.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoint),f.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPoint");"esriGeometryPolyline"===a.geometryType&&(f.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricLine),f.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsLine"));this.set("groupBySelect",this.groupByField);this._removeStatsRows();this._createStatsRow()},_handleAttrSelectChange:function(a){var b;
"0"!==a&&(a=this.get("statisticSelect"),"0"!==a.get("value")&&!a.get("isnewRowAdded")&&(b=a.get("removeTd"),m.set(b,"display","block"),b=a.get("referenceWidget"),d.hitch(b,b._createStatsRow()),b._sumMetricCheck.set("disabled",!1),a.set("isnewRowAdded",!0)))},_handleStatsValueUpdate:function(a,b,c){this.get("attributeSelect")&&(a=this.get("attributeSelect"),"0"!==a.get("value")&&"0"!==c&&!this.get("isnewRowAdded")&&(c=this.get("removeTd"),m.set(c,"display","block"),c=this.get("referenceWidget"),d.hitch(c,
c._createStatsRow()),c._sumMetricCheck.set("disabled",!1),this.set("isnewRowAdded",!0)))},_handleDistValueChange:function(a){this.set("outputLayerName")},_handleDistUnitsChange:function(a){this.set("outputLayerName");this.set("units",a)},_handleShapeUnitsChange:function(a){this.set("shapeUnits",a)},_handleDistanceTypeChange:function(a){this.set("nearType",a);e.remove(this._straightLine,"selected");e.remove(this._drivingTime,"selected");e.remove(this._drivingDistance,"selected");a&&(e.add("time"===
a?this._drivingTime:"distance"===a?this._drivingDistance:this._straightLine,"selected"),m.set(this._useTrafficRow,"display","time"===a?"":"none"),this._trafficTimeWidget.set("disabled","time"!==a),this._trafficTimeWidget.set("reset","time"!==a));"time"===a?(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes,selected:"selected"},{value:"Hours",label:this.i18n.hours}]),
this.set("units",this._distanceUnitsSelect.get("value"))):(this.get("units")&&this.set("units",this.get("units")),this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),this._distanceUnitsSelect.set("value",this.units));
this.set("outputLayerName")},_save:function(){},_buildUI:function(){var a;q.initHelpLinks(this.domNode,this.showHelp);this.distances?this._breakValuesInput.set("value",this.distances.toString().replace(/,/g," ")):(this.distances=[],this.distances.push(this._breakValuesInput.get("value")));this.get("enableTravelModes")||this._updateTravelModes(this.enableTravelModes);this.sumNearbyLayer&&(f.set(this._aggregateToolDescription,"innerHTML",l.substitute(this.i18n.summarizeDefine,{sumNearbyLayerName:this.sumNearbyLayer.name})),
"esriGeometryPoint"!==this.sumNearbyLayer.geometryType&&(this.set("enableTravelModes",!1),this._updateTravelModes(!1)));this.units&&this._distanceUnitsSelect.set("value",this.units);this.summaryLayers&&g.forEach(this.summaryLayers,function(a,c){a!==this.sumNearbyLayer&&(this._layersSelect.addOption({value:c,label:a.name}),this.summaryLayer&&this.summaryLayer===a&&this._layersSelect.set("value",c))},this);a=this.summaryLayers[this._layersSelect.get("value")];this.outputLayerName=l.substitute(this.i18n.outputLayerName,
{summaryLayerName:a.name,sumNearbyLayerName:this.sumNearbyLayer.name});f.set(this._addStatsLabel,"innerHTML",l.substitute(this.i18n.addStats,{summaryLayerName:a.name}));this._initializeShapeUnits(a.geometryType);this.shapeUnits&&this._shapeUnitsSelect.set("value",this.shapeUnits);"esriGeometryPolygon"===a.geometryType&&(f.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoly),f.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPolygon"));if("esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===
a.geometryType)f.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoint),f.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPoint");"esriGeometryPolyline"===a.geometryType&&(f.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricLine),f.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsLine"));this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName);!this.sumShape&&this.summaryFields&&this._sumMetricCheck.set("checked",this.sumShape);this._createStatsRow();
g.forEach(this.summaryFields,function(a){a=a.split(" ");this._currentAttrSelect.set("value",a[0]);d.hitch(this._currentAttrSelect,this._handleAttrSelectChange,a[0])();this._currentStatsSelect.set("value",a[1]);d.hitch(this._currentStatsSelect,this._handleStatsValueUpdate,"value","",a[1])()},this);m.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=a;this._webMapFolderSelect.set("store",
a);this._webMapFolderSelect.set("value",this.portalUser.username)}));m.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"block":"none");this.set("groupBySelect",this.groupByField);this._handleDistanceTypeChange("line");this._loadConnections()},validateDistance:function(){var a=this,b,c=[];e.contains(this._drivingTime,"selected");this.set("distances");b=d.trim(this._breakValuesInput.get("value")).split(" ");if(0===b.length)return!1;g.forEach(b,function(b){b=s.parse(b);if(isNaN(b))return c.push(0),
!1;b=s.format(b,{locale:"en-us"});(b=d.trim(b).match(/\D/g))&&g.forEach(b,function(b){"."===b||","===b?c.push(1):"-"===b&&"polygon"===a.inputType?c.push(1):c.push(0)})});return-1!==g.indexOf(c,0)?!1:!0},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1));this.enableTravelModes&&(this._driveTimeClickHandles=[],this._driveTimeClickHandles.push(h.connect(this._drivingDistance,"onclick",d.hitch(this,"_handleDistanceTypeChange",
"distance"))),this._driveTimeClickHandles.push(h.connect(this._drivingTime,"onclick",d.hitch(this,"_handleDistanceTypeChange","time"))),this._driveTimeClickHandles.push(h.connect(this._straightLine,"onclick",d.hitch(this,"_handleDistanceTypeChange","line"))));this.watch("enableTravelModes",d.hitch(this,function(a,b,c){this._updateTravelModes(c);c&&!this._driveTimeClickHandles?(this._driveTimeClickHandles=[],this._driveTimeClickHandles.push(h.connect(this._drivingDistance,"onclick",d.hitch(this,"_handleDistanceTypeChange",
"distance"))),this._driveTimeClickHandles.push(h.connect(this._drivingTime,"onclick",d.hitch(this,"_handleDistanceTypeChange","time"))),this._driveTimeClickHandles.push(h.connect(this._straightLine,"onclick",d.hitch(this,"_handleDistanceTypeChange","line")))):!c&&(this._driveTimeClickHandles&&0<this._driveTimeClickHandles.length)&&(g.forEach(this._driveTimeClickHandles,h.disconnect),this._driveTimeClickHandles=null)}))},_createStatsRow:function(){var a,b,c,p,e;p=this.summaryLayers[this._layersSelect.get("value")];
a=n.create("tr",null,this._afterStatsRow,"before");c=n.create("td",{style:{width:"45%",maxWidth:"100px"}},a);b=n.create("td",{style:{width:"55%",maxWidth:"104px"}},a);c=new x({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin05 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},n.create("select",null,c));this.set("attributes",{selectWidget:c,summaryLayer:p});b=new x({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},n.create("select",
null,b));this.set("statistics",{selectWidget:b});c.set("statisticSelect",b);h.connect(c,"onChange",this._handleAttrSelectChange);e=n.create("td",{"class":"shortTextInput removeTd",style:{display:"none",maxWidth:"12px"}},a);p=n.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+this.basePath+"/images/close.gif' border\x3d'0''/\x3e"},e);h.connect(p,"onclick",d.hitch(this,this._handleRemoveStatsBtnClick,a));this._statsRows.push(a);b.set("attributeSelect",
c);b.set("removeTd",e);b.set("isnewRowAdded",!1);b.set("referenceWidget",this);b.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=b;this._currentAttrSelect=c;return!0},_handleRemoveStatsBtnClick:function(a){this._removeStatsRow(a);0===this.get("summaryFields").length&&(this._sumMetricCheck.set("disabled",!0),this._sumMetricCheck.set("checked",!0))},_removeStatsRows:function(){g.forEach(this._statsRows,this._removeStatsRow,this);this._statsRows=[]},_removeStatsRow:function(a){g.forEach(w.findWidgets(a),
function(a){a.destroyRecursive()});n.destroy(a)},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setSumNearbyLayerAttr:function(a){this.sumNearbyLayer=a},_setSummaryLayersAttr:function(a){this.summaryLayers=a},_setSummaryLayerAttr:function(a){this.summaryLayer=a},_setLayersAttr:function(a){this.summaryLayers=[]},_setAttributesAttr:function(a){if(a.summaryLayer){var b,c;b=a.summaryLayer;c=a.selectWidget;a=b.fields;
c.addOption({value:"0",label:this.i18n.attribute});g.forEach(a,function(a){-1!==g.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&c.addOption({value:a.name,label:y.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this)}},_setStatisticsAttr:function(a){a=a.selectWidget;a.addOption({value:"0",label:this.i18n.statistic});a.addOption({value:"SUM",label:this.i18n.sum});a.addOption({value:"MIN",label:this.i18n.minimum});a.addOption({value:"MAX",
label:this.i18n.maximum});a.addOption({value:"MEAN",label:this.i18n.average});a.addOption({value:"STDDEV",label:this.i18n.standardDev})},_setSummaryFieldsAttr:function(a){this.summaryFields=a},_getSummaryFieldsAttr:function(){var a="",b=[];B(".statsSelect",this.domNode).forEach(function(c){var d;c=w.byNode(c);d=c.get("attributeSelect");"0"!==d.get("value")&&"0"!==c.get("value")&&(a+=d.get("value")+" "+c.get("value")+";",b.push(d.get("value")+" "+c.get("value")))});return b},_setGroupBySelectAttr:function(a){var b=
this.summaryLayers[this._layersSelect.get("value")],c=b.fields;0<this._groupBySelect.getOptions().length&&this._groupBySelect.removeOption(this._groupBySelect.getOptions());this._groupBySelect.addOption({value:"0",label:this.i18n.attribute});g.forEach(c,function(a,c){-1!==g.indexOf("esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate".split(" "),a.type)&&a.name!==b.objectIdField&&this._groupBySelect.addOption({value:a.name,label:y.isDefined(a.alias)&&
""!==a.alias?a.alias:a.name})},this);a&&this._groupBySelect.set("value",a)},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setShowSelectFolderAttr:function(a){this.showSelectFolder=a},_getShowSelectFolderAttr:function(){return this.showSelectFolder},_setShowChooseExtentAttr:function(a){this.showChooseExtent=a},_getShowChooseExtentAttr:function(){return this.showChooseExtent},_setMapAttr:function(a){this.map=a},_getMapAttr:function(){return this.map},_setShowHelpAttr:function(a){this.showHelp=
a},_getShowHelpAttr:function(){return this.showHelp},_setNearTypeAttr:function(a){"line"===a?this.nearType="StraightLine":"distance"===a?this.nearType="DrivingDistance":"time"===a&&(this.nearType="DrivingTime")},_getNearTypeAttr:function(){return this.nearType},_setDistancesAttr:function(a){if(a)this.distances=a;else if(this._breakValuesInput&&this._breakValuesInput.get("value")){a=d.trim(this._breakValuesInput.get("value")).split(" ");var b=[];g.forEach(a,function(a){b.push(s.parse(a))});this.distances=
b}},_getDistancesAttr:function(){return this.distances},_setUnitsAttr:function(a){this.units=a},_getUnitsAttr:function(){return this.units},_setShapeUnitsAttr:function(a){this.shapeUnits=a},_getShapeUnitsAttr:function(){return this.shapeUnits},_getSumShapeAttr:function(){return this._sumMetricCheck.get("checked")},_setSumShapeAttr:function(a){this.sumShape=a},_setShowCreditsAttr:function(a){this.showCredits=a},_getShowCreditsAttr:function(){return this.showCredits},_setReturnFeatureCollectionAttr:function(a){this.returnFeatureCollection=
a},_getReturnFeatureCollectionAttr:function(){return this.returnFeatureCollection},_setEnableTravelModesAttr:function(a){this._set("enableTravelModes",a)},validateServiceName:function(a){var b=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(a);return 0===a.length||0===l.trim(a).length?(this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue),!1):b?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName),!1):98<a.length?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength),
!1):!0},_connect:function(a,b,c){this._pbConnects.push(h.connect(a,b,c))},_showMessages:function(a){f.set(this._bodyNode,"innerHTML",a);u.fadeIn({node:this._errorMessagePane,easing:v.quadIn,onEnd:d.hitch(this,function(){m.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();u.fadeOut({node:this._errorMessagePane,easing:v.quadOut,onEnd:d.hitch(this,function(){m.set(this._errorMessagePane,{display:"none"})})}).play()},_updateTravelModes:function(a){a?
(e.remove(this._drivingTime,"disabled"),e.remove(this._drivingDistance,"disabled"),e.add(this._drivingDistanceLabel,"esriSelectLabel"),e.add(this._drivingTimeLabel,"esriSelectLabel")):(e.add(this._drivingTime,"disabled"),e.add(this._drivingDistance,"disabled"),e.remove(this._drivingDistanceLabel,"esriSelectLabel"),e.remove(this._drivingTimeLabel,"esriSelectLabel"),e.contains(this._drivingTime,"selected")&&e.remove(this._drivingTime,"selected"),e.contains(this._drivingDistance,"selected")&&e.remove(this._drivingDistance,
"selected"))},onSave:function(){},onClose:function(){}});A("extend-esri")&&d.setObject("dijit.analysis.SummarizeNearby",r,H);return r});