// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.10/js/esri/copyright.txt for details.
//>>built
define("esri/tasks/geoenrichment/GeographyQuery",["../../declare","./GeographyQueryBase"],function(b,c){return b("esri.tasks.geoenrichment.GeographyQuery",[c],{geographyLayerIDs:null,geographyIDs:null,where:null,constructor:function(a){a&&(a.geographyLayers&&(this.geographyLayerIDs=a.geographyLayers.split(";")),a.geographyIDs&&(this.geographyIDs=a.geographyIDs),a.geographyQuery&&(this.where=a.geographyQuery))},toJson:function(){var a=this.inherited(arguments);this.geographyLayerIDs&&(a.geographyLayers=
this.geographyLayerIDs.join(";"));this.geographyIDs&&(a.geographyIDs=this.geographyIDs);this.where&&(a.geographyQuery=this.where);return a}})});