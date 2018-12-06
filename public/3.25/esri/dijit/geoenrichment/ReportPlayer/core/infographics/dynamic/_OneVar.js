// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/dynamic/_OneVar",["dojo/_base/declare","esri/dijit/geoenrichment/OneVar","esri/dijit/geoenrichment/utils/DynamicStyleUtil","dojo/i18n!esri/nls/jsapi"],function(d,e,c,a){a=a.geoenrichment.dijit.ReportPlayer.OneVar;return d(e,{infographicStyleProvider:null,parentInfographic:null,_themeAddedFlag:!1,updateUI:function(){this.inherited(arguments);if(!this._themeAddedFlag){var b=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;
if(b){var a=this.parent.id;c.addStyle(["#"+a+" .OneVarMultiComparison_Expanded_Value_Primary { color:"+b.male.backgroundColor+"; } #"+a+" .OneVarMultiComparison_Expanded_CurrentBar { background-color:"+b.male.backgroundColor+"; }"],a);this._themeAddedFlag=!0}}},_getLessThanPattern:function(){return this._isAverageShown()?this.inherited(arguments):a.lessThan},_getMoreThanPattern:function(){return this._isAverageShown()?this.inherited(arguments):a.moreThan},_getSamePattern:function(){return this._isAverageShown()?
this.inherited(arguments):a.same},_isAverageShown:function(){var a=this.parentInfographic._ge.variables;return a&&"KeyGlobalFacts.AVGHHSZ"===a[0]},destroy:function(){c.removeStyle(this.parent.id);this.inherited(arguments)}})});