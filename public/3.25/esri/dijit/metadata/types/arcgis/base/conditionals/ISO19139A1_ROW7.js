// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/ISO19139A1_ROW7","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional".split(" "),function(d,h,q,g,k,l,m,n){d=d(n,{key:"ISO19139A1_ROW7",postCreate:function(){this.inherited(arguments);var e=this;this.own(g.subscribe("gxe/interaction-occurred",function(a){try{if(e.parentXNode&&a&&a.inputWidget&&a.inputWidget.parentXNode){var b=a.inputWidget.parentXNode.gxePath,
c=e.parentXNode.gxePath;b!==c+"/accessConsts/RestrictCd/@value"&&b!==c+"/useConsts/RestrictCd/@value"&&b!==c+"/othConsts"||e.emitInteractionOccurred()}}catch(p){console.error(p)}}));this.own(g.subscribe("gxe/after-xnode-destroyed",function(a){try{if(e.parentXNode&&a&&a.xnode){var b=a.xnode.target;"accessConsts"!==b&&"useConsts"!==b&&"othConsts"!==b||e.emitInteractionOccurred()}}catch(c){console.error(c)}}))},validateConditionals:function(e){var a=this.newStatus({message:m.conditionals[this.key]}),
b=!0,c=this.parentXNode.domNode,d=!1,f=this.parentXNode.gxePath,g=f+"/accessConsts/RestrictCd/@value",h=f+"/useConsts/RestrictCd/@value",f=f+"/othConsts";this.isXNodeOff(this.parentXNode)||this.forActiveXNodes(g+","+h,c,function(a){if("008"===a.inputWidget.getInputValue())return d=!0});d&&(b=!1,this.forActiveXNodes(f,c,function(a){if(!this.isXNodeInputEmpty(a))return b=!0},this));a.isValid=b;this.track(a,e);return a}});k("extend-esri")&&h.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW7",
d,l);return d});