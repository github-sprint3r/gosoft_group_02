// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.10/js/esri/copyright.txt for details.
//>>built
define("esri/tasks/FeatureSet","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../lang ../graphic ../SpatialReference ../graphicsUtils ../geometry/jsonUtils ../symbols/jsonUtils".split(" "),function(c,d,h,k,l,m,n,p,q,f,r){c=c(null,{declaredClass:"esri.tasks.FeatureSet",constructor:function(a){if(a){d.mixin(this,a);var b=this.features,c=a.spatialReference,g=f.getGeometryType(a.geometryType),c=this.spatialReference=new p(c);this.geometryType=a.geometryType;a.fields&&(this.fields=
a.fields);h.forEach(b,function(a,e){var d=a.geometry&&a.geometry.spatialReference;b[e]=new n(g&&a.geometry?new g(a.geometry):null,a.symbol&&r.fromJson(a.symbol),a.attributes);b[e].geometry&&!d&&b[e].geometry.setSpatialReference(c)})}else this.features=[]},displayFieldName:null,geometryType:null,spatialReference:null,fieldAliases:null,toJson:function(a){var b={};this.displayFieldName&&(b.displayFieldName=this.displayFieldName);this.fields&&(b.fields=this.fields);this.spatialReference?b.spatialReference=
this.spatialReference.toJson():this.features[0]&&this.features[0].geometry&&(b.spatialReference=this.features[0].geometry.spatialReference.toJson());this.features[0]&&(this.features[0].geometry&&(b.geometryType=f.getJsonType(this.features[0].geometry)),b.features=q._encodeGraphics(this.features,a));b.exceededTransferLimit=this.exceededTransferLimit;return m.fixJson(b)}});k("extend-esri")&&d.setObject("tasks.FeatureSet",c,l);return c});