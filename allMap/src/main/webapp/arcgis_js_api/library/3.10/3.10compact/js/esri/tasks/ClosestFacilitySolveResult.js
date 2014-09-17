// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.10/js/esri/copyright.txt for details.
//>>built
define("esri/tasks/ClosestFacilitySolveResult","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../graphic ../SpatialReference ./DirectionsFeatureSet ./NAMessage".split(" "),function(b,f,c,g,h,k,l,m,n){b=b(null,{declaredClass:"esri.tasks.ClosestFacilitySolveResult",constructor:function(a){a.directions&&(this.directions=[],c.forEach(a.directions,function(a,b){var e=[],d=[];c.forEach(a.features,function(a,b){d[b]=a.compressedGeometry;e[b]=a.strings});a.strings=e;this.directions[b]=
new m(a,d)},this));a.routes&&(this.routes=this._graphicsFromJson(a.routes));a.facilities&&(this.facilities=this._graphicsFromJson(a.facilities));a.incidents&&(this.incidents=this._graphicsFromJson(a.incidents));a.barriers&&(this.pointBarriers=this._graphicsFromJson(a.barriers));a.polylineBarriers&&(this.polylineBarriers=this._graphicsFromJson(a.polylineBarriers));a.polygonBarriers&&(this.polygonBarriers=this._graphicsFromJson(a.polygonBarriers));a.messages&&(this.messages=c.map(a.messages,function(a,
b){return new n(a)}))},routes:null,facilities:null,incidents:null,pointBarriers:null,polylineBarriers:null,polygonBarriers:null,directions:null,messages:null,_graphicsFromJson:function(a){var b=new l(a.spatialReference);return c.map(a.features,function(a,c){var d=new k(a);d.geometry.setSpatialReference(b);return d})}});g("extend-esri")&&f.setObject("tasks.ClosestFacilitySolveResult",b,h);return b});