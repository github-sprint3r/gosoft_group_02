//>>built
define("dojox/mobile/Heading","dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/_base/lang dojo/_base/window dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-style dojo/dom-attr dijit/registry dijit/_Contained dijit/_Container dijit/_WidgetBase ./ProgressIndicator ./ToolBarButton ./View dojo/has dojo/has!dojo-bidi?dojox/mobile/bidi/Heading".split(" "),function(k,g,l,m,r,s,n,f,h,p,z,t,u,v,w,x,A,q,y){m.getObject("dojox.mobile",!0);g=l(q("dojo-bidi")?"dojox.mobile.NonBidiHeading":"dojox.mobile.Heading",
[v,u,t],{back:"",href:"",moveTo:"",transition:"slide",label:"",iconBase:"",tag:"h1",busy:!1,progStyle:"mblProgWhite",baseClass:"mblHeading",buildRendering:function(){this.templateString||(this.domNode=this.containerNode=this.srcNodeRef||r.doc.createElement(this.tag));this.inherited(arguments);this.templateString||(this.label||k.forEach(this.domNode.childNodes,function(a){if(3==a.nodeType){var b=m.trim(a.nodeValue);b&&(this.label=b,this.labelNode=f.create("span",{innerHTML:b},a,"replace"))}},this),
this.labelNode||(this.labelNode=f.create("span",null,this.domNode)),this.labelNode.className="mblHeadingSpanTitle",this.labelDivNode=f.create("div",{className:"mblHeadingDivTitle",innerHTML:this.labelNode.innerHTML},this.domNode));this.labelDivNode&&(p.set(this.labelDivNode,"role","heading"),p.set(this.labelDivNode,"aria-level","1"));s.setSelectable(this.domNode,!1)},startup:function(){if(!this._started){var a=this.getParent&&this.getParent();if(!a||!a.resize){var b=this;b.defer(function(){b.resize()})}this.inherited(arguments)}},
resize:function(){if(this.labelNode){for(var a,b,d=this.containerNode.childNodes,e=d.length-1;0<=e;e--){var c=d[e];1===c.nodeType&&"none"!==h.get(c,"display")&&(!b&&"right"===h.get(c,"float")&&(b=c),!a&&"left"===h.get(c,"float")&&(a=c))}!this.labelNodeLen&&this.label&&(this.labelNode.style.display="inline",this.labelNodeLen=this.labelNode.offsetWidth,this.labelNode.style.display="");d=this.domNode.offsetWidth;e=this.labelNodeLen||0;n[d-2*Math.max(b?d-b.offsetLeft+5:0,a?a.offsetLeft+a.offsetWidth+
5:0)>e?"add":"remove"](this.domNode,"mblHeadingCenterTitle")}k.forEach(this.getChildren(),function(a){a.resize&&a.resize()})},_setBackAttr:function(a){this._set("back",a);this.backButton?this.backButton.set("label",a):(this.backButton=new x({arrow:"left",label:a,moveTo:this.moveTo,back:!this.moveTo&&!this.href,href:this.href,transition:this.transition,transitionDir:-1,dir:this.isLeftToRight()?"ltr":"rtl"}),this.backButton.placeAt(this.domNode,"first"));this.resize()},_setMoveToAttr:function(a){this._set("moveTo",
a);this.backButton&&(this.backButton.set("moveTo",a),this.backButton.set("back",!a&&!this.href))},_setHrefAttr:function(a){this._set("href",a);this.backButton&&(this.backButton.set("href",a),this.backButton.set("back",!this.moveTo&&!a))},_setTransitionAttr:function(a){this._set("transition",a);this.backButton&&this.backButton.set("transition",a)},_setLabelAttr:function(a){this._set("label",a);this.labelNode.innerHTML=this.labelDivNode.innerHTML=this._cv?this._cv(a):a},_setBusyAttr:function(a){var b=
this._prog;a?(b||(b=this._prog=new w({size:30,center:!1}),n.add(b.domNode,this.progStyle)),f.place(b.domNode,this.domNode,"first"),b.start()):b&&b.stop();this._set("busy",a)}});return q("dojo-bidi")?l("dojox.mobile.Heading",[g,y]):g});