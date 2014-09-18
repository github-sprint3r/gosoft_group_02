// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.10/js/esri/copyright.txt for details.
//>>built
define("esri/process/SpatialIndex","../sniff ../kernel dojo/_base/declare dojo/Deferred dojo/_base/lang ./Processor ../workers/WorkerClient ../layers/FeatureLayer".split(" "),function(q,r,e,l,n,s,p,t){e=e([s],{declaredClass:"esri.process.SpatialIndex",index:null,indexType:"rtree",workerCallback:["./scripts/helpers","./scripts/indexInterface","./indexWorker"],autostart:!1,constructor:function(a){a=a||{};var b=!1!==a.autostart;n.mixin(this,a);if(!this.fetchWithWorker){var c=this;this.workerClient=new p("./mutableWorker",
!0);this.workerCallback.push("./libs/"+this.indexType);this.workerClient.importScripts(this.workerCallback).then(function(){c._attachedSystem=!0;b&&c.start()})}this._featCache={}},addLayer:function(a,b){if(a.graphics&&a.graphics.length||b||a.isInstanceOf(t))if(this._attachedSystem)this.inherited(arguments,[a]);else{var c=this.workerClient,h=this;this.inherited(arguments,[a,!0]);c.importScripts("./libs/"+this.indexType).then(function(){h.runProcess(a.graphics,a.id);h._attachedSystem=!0})}},unsetMap:function(){this.stop();
this.workerClient.terminate();this.fetchWithWorker||(this.workerClient=new p(this.workerCallback,!0));this.inherited(arguments);this.start()},removeLayer:function(a){this.inherited(arguments)},runProcess:function(a,b){if(a&&a.length){var c=this,h=this.workerClient,d=a[0]._graphicsLayer;!b&&0!==b&&(b=d?d.id:"rawFeatures_"+Object.keys(this._featCache).length);this._featCache[b]||(this._featCache[b]={});for(var f,g,m=[],k=a.length,e=d&&d.objectIdField;k--;)if(g=a[k],f=g.attributes&&e?g.attributes[e]:
g.id,null==f||!this._featCache[b][f])this._featCache[b][f]=1,g.declaredClass?m.push({id:f,geometry:g.geometry,attributes:g.attributes}):m.push(g);h.postMessage({insert:m,system:this.indexType,options:this.indexOptions,idField:d&&d.objectIdField,layerId:b}).then(function(a){d&&d.emit("process-end",{processor:c,results:{insert:a.insert}})});d&&d.emit("process-start",{processor:this})}},_sendFeaturesFromLayer:function(a,b){var c=b.graphic,h=this.workerClient,d=this,f=c.attributes[a.objectIdField];this._featCache[a.id]||
(this._featCache[a.id]={});this._featCache[a.id][f]||(this._featCache[a.id][f]=1,h.postMessage({insert:[{attributes:c.attributes,geometry:c.geometry}],system:this.indexType,options:this.indexOptions,idField:a.objectIdField,layerId:a.id}).then(function(b){a.emit("process-end",{processor:d,results:{insert:b.insert}})}),a.emit("process-start",{processor:d}))},_notifyProcessStart:function(a,b){},_sendFeaturesFromTask:function(a,b){var c=b.featureSet.features,h=[],d=this.workerClient,f=this,g=c.length,
e,k;for(this._featCache[a.id]||(this._featCache[a.id]={});g--;)k=c[g],e=k.attributes[a.objectIdField],this._featCache[a.id][e]||(this._featCache[a.id][e]=1,h.push(k));d.postMessage({insert:h,system:this.indexType,options:this.indexOptions,idField:a.objectIdField,layerId:a.id}).then(function(b){a.emit("process-end",{processor:f,results:{insert:b.insert}})});a.emit("process-start",{processor:f})},get:function(){},intersects:function(a,b,c){return"rtree"!=this.indexType?(console.error("Index.intersects only works with rtree indexes"),
a=new l,a.reject({message:"Index.intersects only works with rtree indexes"}),a.promise):a=this.workerClient.postMessage({search:a,layerId:b,returnNode:c})},within:function(a,b,c){if("rtree"!=this.indexType)return console.error("Index.within only works with rtree indexes"),a=new l,a.reject({message:"Index.within only works with rtree indexes"}),a.promise},nearest:function(a){return"kdtree"!=this.indexType?(console.error("Index.nearest only works with kdtree indexes"),a=new l,a.reject({message:"Index.nearest only works with kdtree indexes"}),
a.promise):a=this.workerClient.postMessage({search:a})}});q("extend-esri")&&n.setObject("process.SpatialIndex",e,r);return e});