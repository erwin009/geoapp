// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/tasks/RouteResult","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../graphic ./DirectionsFeatureSet".split(" "),function(b,d,e,l,m,f,n){b=b(null,{declaredClass:"esri.tasks.RouteResult",constructor:function(a){var b=a.spatialReference,c=a.route;if(a.directions){var g=[],h=[],k=[];e.forEach(a.directions.features,function(a,b){h[b]=a.compressedGeometry;g[b]=a.strings;k[b]=a.events});a.directions.strings=g;a.directions.events=k;this.directions=new n(a.directions,
h)}this.routeName=a.routeName;c&&(c.geometry&&(c.geometry.spatialReference=b),this.route=new f(c));if(a.stops){var d=this.stops=[];e.forEach(a.stops,function(a,c){a.geometry&&(a.geometry.spatialReference=b);d[a.attributes.Sequence-1]=new f(a)})}},routeName:null,directions:null,route:null,stops:null});l("extend-esri")&&d.setObject("tasks.RouteResult",b,m);return b});