// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/context/GxeAdaptor","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/Deferred dijit/_WidgetBase ../../../kernel".split(" "),function(b,d,h,e,c,f,g){b=b([f],{postCreate:function(){this.inherited(arguments)},afterEditDocumentLoad:function(a,b,c,d){},afterViewDocumentLoad:function(a,b){},deleteMetadata:function(){var a=new c;a.resolve();return a},getAllowEditMetadata:function(){return!1},getAllowDeleteMetadata:function(){return!1},getAllowPullItem:function(){return!1},
getAllowPushToItem:function(){return!1},getOriginalXml:function(){return null},pullItem:function(a){a=new c;a.resolve();return a},saveXml:function(a,b,d){a=new c;a.resolve();return a},viewHtml:function(){var a=new c;a.resolve();return a}});e("extend-esri")&&d.setObject("dijit.metadata.context.GxeAdaptor",b,g);return b});