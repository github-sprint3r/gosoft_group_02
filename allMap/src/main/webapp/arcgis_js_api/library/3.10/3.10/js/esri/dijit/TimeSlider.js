// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.10/js/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/TimeSlider.html":'   \x3cdiv class\x3d"esriTimeSlider"\x3e\n   \x3ctable width\x3d"100%" cellspacing\x3d"0" cellpadding\x3d"0" border\x3d"0"\x3e\n   \x3ctr\x3e\n   \x3ctd align\x3d"right" valign\x3d"middle"\x3e\x3cbutton dojoType\x3d"dijit.form.Button" showLabel\x3d"false" iconClass\x3d"tsButton tsPlayButton" dojoAttachEvent\x3d"onClick:_onPlay" dojoAttachPoint\x3d"playPauseBtn" type\x3d"button"\x3e${NLS_play}\x3c/button\x3e\x3c/td\x3e\n   \x3ctd align\x3d"center" valign\x3d"middle" width\x3d"80%" class\x3d"tsTmp"\x3e\x3c/td\x3e\n   \x3ctd align\x3d"left" valign\x3d"middle" width\x3d"30"\x3e\x3cbutton dojoType\x3d"dijit.form.Button" showLabel\x3d"false" iconClass\x3d"tsButton tsPrevButton" dojoAttachEvent\x3d"onClick:_onPrev" dojoAttachPoint\x3d"previousBtn" type\x3d"button"\x3e${NLS_previous}\x3c/button\x3e\x3c/td\x3e\n   \x3ctd align\x3d"left" valign\x3d"middle"\x3e\x3cbutton dojoType\x3d"dijit.form.Button" showLabel\x3d"false" iconClass\x3d"tsButton tsNextButton" dojoAttachEvent\x3d"onClick:_onNext" dojoAttachPoint\x3d"nextBtn" type\x3d"button"\x3e${NLS_next}\x3c/button\x3e\x3c/td\x3e\n   \x3c/tr\x3e    \n   \x3c/table\x3e\n   \x3c/div\x3e',
"url:dojox/form/resources/HorizontalRangeSlider.html":'\x3ctable class\x3d"dijit dijitReset dijitSlider dijitSliderH dojoxRangeSlider" cellspacing\x3d"0" cellpadding\x3d"0" border\x3d"0" rules\x3d"none" dojoAttachEvent\x3d"onkeypress:_onKeyPress,onkeyup:_onKeyUp" role\x3d"presentation"\n\t\x3e\x3ctr class\x3d"dijitReset"\n\t\t\x3e\x3ctd class\x3d"dijitReset" colspan\x3d"2"\x3e\x3c/td\n\t\t\x3e\x3ctd dojoAttachPoint\x3d"topDecoration" class\x3d"dijitReset dijitSliderDecoration dijitSliderDecorationT dijitSliderDecorationH"\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset" colspan\x3d"2"\x3e\x3c/td\n\t\x3e\x3c/tr\n\t\x3e\x3ctr class\x3d"dijitReset"\n\t\t\x3e\x3ctd class\x3d"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n\t\t\t\x3e\x3cdiv class\x3d"dijitSliderDecrementIconH" tabIndex\x3d"-1" style\x3d"display:none" dojoAttachPoint\x3d"decrementButton"\x3e\x3cspan class\x3d"dijitSliderButtonInner"\x3e-\x3c/span\x3e\x3c/div\n\t\t\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset"\n\t\t\t\x3e\x3cdiv class\x3d"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper" dojoAttachEvent\x3d"onmousedown:_onClkDecBumper"\x3e\x3c/div\n\t\t\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset"\n\t\t\t\x3e\x3cinput dojoAttachPoint\x3d"valueNode" type\x3d"hidden" ${!nameAttrSetting}\n\t\t\t/\x3e\x3cdiv role\x3d"presentation" class\x3d"dojoxRangeSliderBarContainer" dojoAttachPoint\x3d"sliderBarContainer"\n\t\t\t\t\x3e\x3cdiv dojoAttachPoint\x3d"sliderHandle" tabIndex\x3d"${tabIndex}" class\x3d"dijitSliderMoveable dijitSliderMoveableH" dojoAttachEvent\x3d"onmousedown:_onHandleClick" role\x3d"slider"\n\t\t\t\t\t\x3e\x3cdiv class\x3d"dijitSliderImageHandle dijitSliderImageHandleH"\x3e\x3c/div\n\t\t\t\t\x3e\x3c/div\n\t\t\t\t\x3e\x3cdiv role\x3d"presentation" dojoAttachPoint\x3d"progressBar,focusNode" class\x3d"dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH" dojoAttachEvent\x3d"onmousedown:_onBarClick"\x3e\x3c/div\n\t\t\t\t\x3e\x3cdiv dojoAttachPoint\x3d"sliderHandleMax" tabIndex\x3d"${tabIndex}" class\x3d"dijitSliderMoveable dijitSliderMoveableH" dojoAttachEvent\x3d"onmousedown:_onHandleClickMax" role\x3d"slider"\n\t\t\t\t\t\x3e\x3cdiv class\x3d"dijitSliderImageHandle dijitSliderImageHandleH"\x3e\x3c/div\n\t\t\t\t\x3e\x3c/div\n\t\t\t\t\x3e\x3cdiv role\x3d"presentation" dojoAttachPoint\x3d"remainingBar" class\x3d"dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH" dojoAttachEvent\x3d"onmousedown:_onRemainingBarClick"\x3e\x3c/div\n\t\t\t\x3e\x3c/div\n\t\t\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset"\n\t\t\t\x3e\x3cdiv class\x3d"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper" dojoAttachEvent\x3d"onmousedown:_onClkIncBumper"\x3e\x3c/div\n\t\t\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n\t\t\t\x3e\x3cdiv class\x3d"dijitSliderIncrementIconH" tabIndex\x3d"-1" style\x3d"display:none" dojoAttachPoint\x3d"incrementButton"\x3e\x3cspan class\x3d"dijitSliderButtonInner"\x3e+\x3c/span\x3e\x3c/div\n\t\t\x3e\x3c/td\n\t\x3e\x3c/tr\n\t\x3e\x3ctr class\x3d"dijitReset"\n\t\t\x3e\x3ctd class\x3d"dijitReset" colspan\x3d"2"\x3e\x3c/td\n\t\t\x3e\x3ctd dojoAttachPoint\x3d"containerNode,bottomDecoration" class\x3d"dijitReset dijitSliderDecoration dijitSliderDecorationB dijitSliderDecorationH"\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset" colspan\x3d"2"\x3e\x3c/td\n\t\x3e\x3c/tr\n\x3e\x3c/table\x3e\n'}});
define("esri/dijit/TimeSlider","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/kernel dojo/has dojo/query dojo/dom-class dojo/dom-construct dojo/dom-style dojo/dom-geometry dijit/_Widget dijit/_Templated dijit/form/HorizontalSlider dijit/form/HorizontalRule dijit/form/HorizontalRuleLabels dojox/timing/_base dojox/form/RangeSlider dojo/text!dojox/form/resources/HorizontalRangeSlider.html ../kernel ../lang ../TimeExtent ./_EventedWidget dojo/text!./templates/TimeSlider.html dojo/i18n!../nls/jsapi".split(" "),
function(g,l,c,m,n,r,F,f,h,s,p,t,u,q,v,w,x,y,z,A,B,k,C,D,E){g=l([C,t,u],{declaredClass:"esri.dijit.TimeSlider",widgetsInTemplate:!0,templateString:D,basePath:g.toUrl(".")+"/",_slideDuration:1E3,_defaultCount:10,_eventMap:{"time-extent-change":!0,play:!0,pause:!0,next:!0,previous:!0},constructor:function(a,b){c.mixin(this,E.widgets.timeSlider);this._iconClass="tsButton tsPlayButton";this.loop=this.playing=!1;this.thumbCount=1;this.thumbMovingRate=1E3;this._createTimeInstants=!1;this._options=c.mixin({excludeDataAtTrailingThumb:!1,
excludeDataAtLeadingThumb:!1},a.options||{})},postCreate:function(){this.inherited(arguments);p.isBodyLtr()||(this.playPauseBtn.domNode.parentNode.align="left",this.previousBtn.domNode.parentNode.align="right",this.nextBtn.domNode.parentNode.align="right",f.add(this.playPauseBtn.iconNode,"tsFlipImage"),f.add(this.previousBtn.iconNode,"tsFlipImage"),f.add(this.nextBtn.iconNode,"tsFlipImage"))},startup:function(){this.inherited(arguments);this._timer=new x.Timer;this._timer.setInterval(this.thumbMovingRate);
this._timer.onTick=c.hitch(this,"_bumpSlider",1);this._createSlider()},destroy:function(){this._timer.stop();this.timeStops=this._timer=null;this._slider.destroy();this._slider=null;this._hTicks&&(this._hTicks.destroyRecursive(),this._hTicks=null);this._hLabels&&(this._hLabels.destroyRecursive(),this._hLabels=null);this.inherited(arguments)},onTimeExtentChange:function(){},onPlay:function(){},onPause:function(){},onNext:function(){},onPrevious:function(){},_onHorizontalChange:function(){var a=this._sliderToTimeExtent();
this.onTimeExtentChange(a)},_onPlay:function(){this.playing=!this.playing;this._updateUI();this.playing?(this._timer.start(),this.onPlay(this._sliderToTimeExtent())):(this._timer.stop(),this.onPause(this._sliderToTimeExtent()));var a=this._getSliderValue();this._offset=c.isArray(a)?a[1]-a[0]:0},_onNext:function(){this.playing||(this._bumpSlider(1),this.onNext(this._sliderToTimeExtent()))},_onPrev:function(){this.playing||(this._bumpSlider(-1),this.onPrevious(this._sliderToTimeExtent()))},createTimeStopsByCount:function(a,
b){if(!a||!a.startTime||!a.endTime)console.log(this.NLS_invalidTimeExtent);else{b=b||this._defaultCount;var e=Math.ceil((a.endTime-a.startTime)/(b-1));this.createTimeStopsByTimeInterval(a,e,"esriTimeUnitsMilliseconds")}},createTimeStopsByTimeInterval:function(a,b,e,d){if(!a||!a.startTime||!a.endTime)console.log(this.NLS_invalidTimeExtent);else{this.fullTimeExtent=new k(a.startTime,a.endTime);d&&!0===d.resetStartTime&&this._resetStartTime(this.fullTimeExtent,e);this._timeIntervalUnits=e;d=this.fullTimeExtent.startTime;
for(var c=[];d<=a.endTime;)c.push(d),d=a._getOffsettedDate(d,b,e);0<c.length&&c[c.length-1]<a.endTime&&c.push(d);this.setTimeStops(c)}},getCurrentTimeExtent:function(){return this._sliderToTimeExtent()},setTimeStops:function(a){this.timeStops=a||[];this._numTicks=this._numStops=this.timeStops.length;!1===B.isDefined(this.fullTimeExtent)&&(this.fullTimeExtent=new k(a[0],a[a.length-1]))},setLoop:function(a){this.loop=a},setThumbCount:function(a){this.thumbCount=a;this.singleThumbAsTimeInstant(this._createTimeInstants);
this._slider&&this._createSlider()},setThumbIndexes:function(a){this.thumbIndexes=c.clone(a)||[0,1];this._initializeThumbs()},setThumbMovingRate:function(a){this.thumbMovingRate=a;this._timer&&this._timer.setInterval(this.thumbMovingRate)},setLabels:function(a){this.labels=a;this._slider&&this._createSlider()},setTickCount:function(a){this._numTicks=a;this._slider&&this._createSlider()},singleThumbAsTimeInstant:function(a){this._createTimeInstants=a&&1===this.thumbCount},next:function(){this._onNext()},
pause:function(){this.playing=!1;this._updateUI();this._timer.stop()},play:function(){!0!==this.playing&&(this.playing=!1,this._onPlay())},previous:function(){this._onPrev()},_updateUI:function(){f.remove(this.playPauseBtn.iconNode,this._iconClass);this._iconClass=this.playing?"tsButton tsPauseButton":"tsButton tsPlayButton";f.add(this.playPauseBtn.iconNode,this._iconClass);this.previousBtn.set("disabled",this.playing);this.nextBtn.set("disabled",this.playing)},_createSlider:function(){this._slider&&
(this._slider.destroy(),this._slider=null);for(var a=this.domNode;a.parentNode&&!a.dir;)a=a.parentNode;a={onChange:c.hitch(this,"_onHorizontalChange"),showButtons:!1,discreteValues:this._numStops,slideDuration:this._slideDuration,"class":"ts",dir:p.isBodyLtr()?"ltr":"rtl"};this._ts=h.create("div",{},n.query(".tsTmp",this.domNode)[0],"first");this._timeSliderTicks=h.create("div",{},this._ts,"first");this._timeSliderLabels=h.create("div",{},this._ts);2===this.thumbCount?this._createRangeSlider(a):this._createSingleSlider(a);
this.thumbIndexes=this.thumbIndexes||[0,1];this._createHorizRule();this._createLabels();!0===this._createTimeInstants&&n.query(".dijitSliderProgressBarH, .dijitSliderLeftBumper, .dijitSliderRightBumper").forEach(function(a){s.set(a,{background:"none"})});this._initializeThumbs();m.disconnect(this._onChangeConnect);this._onChangeConnect=m.connect(this._slider,"onChange",c.hitch(this,"_updateThumbIndexes"))},_createRangeSlider:function(a){this._isRangeSlider=!0;this._slider=new (l([q,y],{templateString:z}))(a,
this._ts)},_createSingleSlider:function(a){this._isRangeSlider=!1;this._slider=new q(a,this._ts)},_createHorizRule:function(){this._hTicks&&(this._hTicks.destroyRecursive(),this._hTicks=null);2>this._numTicks||(this._hTicks=new v({container:"topDecoration",ruleStyle:"","class":"tsTicks",count:this._numTicks},this._timeSliderTicks))},_createLabels:function(){this._hLabels&&(this._hLabels.destroyRecursive(),this._hLabels=null);this.labels&&0<this.labels.length&&(this._hLabels=new w({labels:this.labels,
labelStyle:"","class":"tsLabels"},this._timeSliderLabels))},_initializeThumbs:function(){if(this._slider){this._offset=this._toSliderValue(this.thumbIndexes[1])||0;var a=this._toSliderValue(this.thumbIndexes[0]),a=a>this._slider.maximum||a<this._slider.minimum?this._slider.minimum:a;if(!0===this._isRangeSlider){var b=this._toSliderValue(this.thumbIndexes[1]),b=b>this._slider.maximum||b<this._slider.minimum?this._slider.maximum:b;this._setSliderValue([a,b<a?a:b])}else this._setSliderValue(a);this._onHorizontalChange()}},
_bumpSlider:function(a){var b=this._getSliderValue(),e=b,d=e,f=a;c.isArray(b)&&(d=b[0],e=b[1],f=[{change:a,useMaxValue:!0},{change:a,useMaxValue:!1}]);1E-10>Math.abs(d-this._slider.minimum)&&0>a||1E-10>Math.abs(e-this._slider.maximum)&&0<a?this._timer.isRunning&&(this.loop?(this._timer.stop(),this._setSliderValue(this._getSliderMinValue()),a=this._sliderToTimeExtent(),this.onTimeExtentChange(a),this._timer.start(),this.playing=!0):this.pause()):this._slider._bumpValue(f)},_updateThumbIndexes:function(){var a=
this._getSliderValue();c.isArray(a)?(this.thumbIndexes[0]=this._toSliderIndex(a[0]),this.thumbIndexes[1]=this._toSliderIndex(a[1])):this.thumbIndexes[0]=this._toSliderIndex(a)},_sliderToTimeExtent:function(){if(this.timeStops&&0!==this.timeStops.length){var a=new k,b=this._getSliderValue(),e,d;c.isArray(b)?(b[0]>b[1]?(d=b[0],e=b[1]):(e=b[0],d=b[1]),a.startTime=new Date(this.timeStops[this._toSliderIndex(e)]),a.endTime=new Date(this.timeStops[this._toSliderIndex(d)]),this._adjustTimeExtent(a)):(a.startTime=
!0===this._createTimeInstants?new Date(this.timeStops[this._toSliderIndex(b)]):new Date(this.fullTimeExtent.startTime),a.endTime=!0===this._createTimeInstants?a.startTime:new Date(this.timeStops[this._toSliderIndex(b)]));return a}},_adjustTimeExtent:function(a){if(!(!1===this._options.excludeDataAtTrailingThumb&&!1===this._options.excludeDataAtLeadingThumb)&&a.startTime.getTime()!==a.endTime.getTime()){if(this._options.excludeDataAtTrailingThumb){var b=a.startTime;b.setUTCSeconds(b.getUTCSeconds()+
1)}this._options.excludeDataAtLeadingThumb&&(a=a.endTime,a.setUTCSeconds(a.getUTCSeconds()-1))}},_resetStartTime:function(a,b){switch(b){case "esriTimeUnitsSeconds":a.startTime.setUTCMilliseconds(0);break;case "esriTimeUnitsMinutes":a.startTime.setUTCSeconds(0,0,0);break;case "esriTimeUnitsHours":a.startTime.setUTCMinutes(0,0,0);break;case "esriTimeUnitsDays":a.startTime.setUTCHours(0,0,0,0);break;case "esriTimeUnitsWeeks":a.startTime.setUTCDate(a.startTime.getUTCDate()-a.startTime.getUTCDay());break;
case "esriTimeUnitsMonths":a.startTime.setUTCDate(1);a.startTime.setUTCHours(0,0,0,0);break;case "esriTimeUnitsDecades":a.startTime.setUTCFullYear(a.startTime.getUTCFullYear()-a.startTime.getUTCFullYear()%10);break;case "esriTimeUnitsCenturies":a.startTime.setUTCFullYear(a.startTime.getUTCFullYear()-a.startTime.getUTCFullYear()%100)}},_getSliderMinValue:function(){return this._isRangeSlider?[this._slider.minimum,this._slider.minimum+this._offset]:this._slider.minimum},_toSliderIndex:function(a){a=
Math.floor((a-this._slider.minimum)*this._numStops/(this._slider.maximum-this._slider.minimum));0>a&&(a=0);a>=this._numStops&&(a=this._numStops-1);return a},_toSliderValue:function(a){return a*(this._slider.maximum-this._slider.minimum)/(this._numStops-1)+this._slider.minimum},_getSliderValue:function(){return this._slider.get("value")},_setSliderValue:function(a){this._slider._setValueAttr(a,!1,!1)}});r("extend-esri")&&c.setObject("dijit.TimeSlider",g,A);return g});