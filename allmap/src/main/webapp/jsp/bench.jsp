<jsp:include page="layout/header.jsp" flush="false" />
<jsp:include page="layout/header-menu.jsp" flush="false" />

<div class="container-map" id="divContentMap" style="height: 100%;">
	<div id="divMap"></div>
</div>

<jsp:include page="layout/footer.jsp" flush="false" />

<script>
	var baseLocation = window.location.protocol
			+ '//'
			+ window.location.host
			+ window.location.pathname.substring(0, window.location.pathname
					.lastIndexOf('/'));
	//console.log("baseLocation", baseLocation);
	dojoConfig = {
		parseOnLoad : true,
		tlmSiblingOfDojo : false,
		isDebug : true,
		usePlainJson : true,
		locale : 'th',
		modulePaths : {
			"widgets" : baseLocation + "/js/widgets"/* ,
									"agsjs" : baseLocation + "/js/agsjs",
									"dbootstrap" : baseLocation + "/js/dbootstrap" */
		},
		extraLocale : [ 'en' ],
		async : true
	};
</script>
<script src="../arcgis_js_api/library/3.10/3.10/init.js"></script>
<style type="text/css">
@import
	url("../arcgis_js_api/library/3.10/3.10/js/dojo/dijit/themes/claro/claro.css")
	;

@import url("../arcgis_js_api/library/3.10/3.10/js/esri/css/esri.css");
</style>

<script>
	require(
			[ "dojo/ready", "dijit/registry", "dojo/_base/lang", "dojo/on",
					"dojo/dom", "dojo/dom-construct", "dojo/dom-style",
					"dojo/_base/connect", "esri/map", "esri/geometry/Extent",
					"esri/layers/ArcGISTiledMapServiceLayer",
					"esri/layers/ArcGISDynamicMapServiceLayer",
					"esri/dijit/Popup","dojo/dom-geometry" ,"esri/symbols/PictureMarkerSymbol","esri/graphic","esri/geometry/Point"],
			function(ready, registry, lang, on, dom, domConstruct, domStyle,
					connect, Map, Extent, ArcGISTiledMapServiceLayer,
					ArcGISDynamicMapServiceLayer, Popup, domGeom,PictureMarkerSymbol,Graphic,Point) {
				
				var map = null;
			
				ready(function() {
					//alert("ddd");

					esriConfig.defaults.io.proxyUrl = "./proxy.jsp";
					esriConfig.defaults.io.alwaysUseProxy = false;
					console.log("test", dom.byId("divTest"));

					var popup = new Popup({

					}, domConstruct.create("div"));

					map = new Map("divMap", {
						extent : new Extent({
							xmin : 11140696.872561403,
							ymin : 1533938.28362662,
							xmax : 11245109.853198811,
							ymax : 1566729.7687609165,
							spatialReference : {
								wkid : 102100
							}
						}),
						infoWindow : popup,
						sliderStyle : "large",
						logo : false
					});
					//var layers = new Array();

					var baseMap = new ArcGISTiledMapServiceLayer(
							"http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
							{
								id : "baseMap"
							});

					var dynamic = new ArcGISTiledMapServiceLayer(
							"http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
							{
								id : "dynamicPoi"
							});

					map.addLayers([ baseMap, dynamic ]);
					
					var h = domGeom.getMarginBox(dom.byId("divContentMap")).h;
					
					domStyle.set(dom.byId("divMap"), "height", h+"px");
					
					dom.byId("divMap");
					
					on(map, "load", lang.hitch(this, "_loadMap_complete"));

				});

				this._loadMap_complete = function(mapEsri) {
					//console.log("mapEsri", mapEsri);
					if( navigator.geolocation ) { 
						navigator.geolocation.getCurrentPosition(lang.hitch(this,"_zoomToLocation"),lang.hitch(this,"_locationError"));
					}
				};
				
				this._zoomToLocation = function(location){
					console.log("location",location);
					
					var symbol =  new PictureMarkerSymbol({
					    "url":"../img/man.png",
					    "height":50,
					    "width":50,
					    "type":"esriPMS"
					  });
					
					var pt = new Point(location.coords.longitude, location.coords.latitude);
					
					var g = Graphic(pt,symbol);
					map.graphics.add(g);
				};
				
				this._locationError = function(){
					alert("เกิดข้อผิดพลาด");
				};
			});
</script>