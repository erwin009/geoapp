// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/ColorPicker/templates/ColorPicker.html":'\x3cdiv class\x3d"${css.container}"\x3e\r\n  \x3cdiv class\x3d"${css.header}" data-dojo-attach-point\x3d"dap_header"\x3e\r\n    \x3cspan class\x3d"${css.swatchPreview} ${css.container}"\x3e\r\n      \x3cspan class\x3d"${css.swatch} ${css.swatchTransparencyBackground}"\x3e\x3c/span\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"dap_previewSwatch" class\x3d"${css.swatch}"\x3e\x3c/span\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan aria-hidden\x3d"true" role\x3d"presentation" class\x3d"${css.collapseIcon} ${css.downArrowIcon}" \x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"${css.colorControls}" data-dojo-attach-point\x3d"dap_colorControls"\x3e\r\n    \x3cdiv class\x3d"${css.middle}"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_paletteContainer" class\x3d"${css.palette} ${css.container}"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_primaryPalette" class\x3d"${css.palette}"\x3e\x3c/div\x3e\x3c!--\r\n      --\x3e\x3cdiv data-dojo-attach-point\x3d"dap_secondaryPalette" class\x3d"${css.palette}"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.paletteOptions}"\x3e\r\n        \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"dap_hexInput" class\x3d"${css.hexInput}"/\x3e\r\n        \x3cinput class\x3d"${css.paletteToggle}" type\x3d"button" data-dojo-type\x3d"dijit/form/ToggleButton" data-dojo-attach-point\x3d"dap_paletteToggle" label\x3d"${labels.more}"/\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.footer}" data-dojo-attach-point\x3d"dap_footer"\x3e\r\n      \x3cdiv class\x3d"${css.section} ${css.displayNone}" data-dojo-attach-point\x3d"dap_suggestedColorSection"\x3e\r\n        \x3cdiv class\x3d"${css.label}"\x3e${labels.suggested}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_suggestedColorPalette" class\x3d"${css.suggested} ${css.palette} ${css.swatchRow}"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.section}" data-dojo-attach-point\x3d"dap_recentColorSection"\x3e\r\n        \x3cdiv class\x3d"${css.label}"\x3e${labels.recent}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_recentColorPalette" class\x3d"${css.recent} ${css.palette} ${css.swatchRow}"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.section}" data-dojo-attach-point\x3d"dap_transparencySection"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_transparencyLabel" class\x3d"${css.label}"\x3e${labels.transparency}\x3c/div\x3e\r\n        \x3cdiv class\x3d"${css.transparencySlider}"\r\n             data-dojo-attach-point\x3d"dap_transparencySlider"\r\n             data-dojo-type\x3d"esri/dijit/HorizontalSlider"\r\n             data-dojo-props\x3d"minimum: 0, maximum: 1, discreteValues: 100, labels: ${_transparencyLabels}"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/ColorPicker","../Color ../kernel ./_EventedWidget ./_Tooltip ./ColorPicker/colorUtil ./ColorPicker/HexPalette dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/on dojo/query dojo/sniff dojo/dom-style dojo/i18n!../nls/jsapi dojo/text!./ColorPicker/templates/ColorPicker.html ./HorizontalSlider dijit/form/RadioButton dijit/form/TextBox dijit/form/ToggleButton dojo/NodeList-dom".split(" "),
function(p,w,q,x,d,t,y,z,g,A,h,e,m,l,r,u,n,v,B){q=A([q,y,z,x],{baseClass:"esriColorPicker",css:{container:"esriContainer",collapsed:"esriCollapsed",collapsible:"esriCollapsible",collapseIcon:"esriCollapseIcon",colorControls:"esriColorControls",header:"esriHeader",footer:"esriFooter",middle:"esriMiddle",swatch:"esriSwatch",swatchRow:"esriSwatchRow",swatchEmpty:"esriSwatchEmpty",swatchPreview:"esriSwatchPreview",swatchTransparencyBackground:"esriSwatchTransparencyBackground",palette:"esriPalette",paletteOptions:"esriPaletteOptions",
paletteToggle:"esriPaletteToggle",label:"esriLabel",hexInput:"esriHexInput",recent:"esriRecent",suggested:"esriSuggested",selected:"esriSelected",disabled:"esriDisabled",section:"esriSection",displayNone:"esriDisplayNone",transparencySlider:"esriTransparencySlider",alt:"esriAlt",downArrowIcon:"esri-icon-down"},declaredClass:"esri.dijit.ColorPicker",labels:v.widgets.colorPicker,templateString:B,constructor:function(a,b){a=a||{};this._colorInstance=new p;this._brightsPalette=new t({colors:a.palette});
this._pastelsPalette=new t({colors:this._toPastels(this._brightsPalette.get("colors"))});this._activePalette=this._brightsPalette;this._swatchCreator=a.swatchCreator||this._createSwatch;this._swatches={}},buildRendering:function(){this.inherited(arguments);this._createPalettes();this._noColorSwatchNode=m.create("div",{className:this.css.swatch+" "+this.css.swatchEmpty},this.dap_hexInput.domNode,"after")},postCreate:function(){this.inherited(arguments);this._addListeners();this._selectColor();this.dap_hexInput.intermediateChanges=
!0;this.dap_transparencySlider.intermediateChanges=!0;this.createTooltips([{node:this.dap_paletteContainer,label:this.labels.paletteTooltip},{node:this.dap_hexInput,label:this.labels.hexInputTooltip},{node:this._noColorSwatchNode,label:this.labels.noColorTooltip},{node:this.dap_paletteToggle,label:this.labels.moreColorsTooltip}])},_activePalette:null,_autoCollapseHandle:null,_brightsPalette:null,_colorInstance:null,_noColorSwatchNode:null,_pastelsPalette:null,_previousColor:null,_swatchCreator:null,
_swatches:null,_transparencyLabels:function(){return"["+[0,50,100].map(function(a){return h.replace(v.widgets.colorPicker.percent,{percent:a})}).map(function(a){return"'"+a+"'"})+"]"}(),collapsed:!1,_setCollapsedAttr:function(a){this.collapsible&&(e.toggle(this.domNode,this.css.collapsed,a),this._set("collapsed",a))},collapsible:!1,_setCollapsibleAttr:function(a){e.toggle(this.domNode,this.css.collapsible,a);if(a){if(!this._autoCollapseHandle){var b=l.pausable(this.ownerDocument,"click",function(a){a=
this.domNode.contains(a.target);this.collapsed||a||this.set("collapsed",!0)}.bind(this));this._autoCollapseHandle=b;this.own(b)}this._autoCollapseHandle.resume()}else this._autoCollapseHandle&&this._autoCollapseHandle.pause();this._set("collapsible",a)},color:null,_getColorAttr:function(){return"no-color"===this.color?"no-color":new p(this.color)},_setColorAttr:function(a,b){a=a||"no-color";b=b||void 0===b;if(!this.required){if("no-color"===a){this._set("color","no-color");this._previousColor="no-color";
this._disableTransparencySlider();this._clearSelection();this._silentlyUpdateHexInput("no-color");this._updatePreviewSwatch(a);e.add(this._noColorSwatchNode,this.css.selected);b&&this.emit("color-change",{color:"no-color"});return}this._enableTransparencySlider();e.remove(this._noColorSwatchNode,this.css.selected)}a=d.normalizeColor(a);var c=this._previousColor,f=this._colorInstance,k=this.css.selected;if(c){if(d.equal(c,a))return;if(c=this._findColorSwatch(c))e.remove(c,k),n.set(c,"borderColor",
"")}f.setColor(a);k=f.toHex();this._set("color",new p(f));this._previousColor=a;this._silentlyUpdateIntermediateChangingValueWidget(this.dap_transparencySlider,1-f.a);this._updatePreviewSwatch(f);this._checkSelection();this._silentlyUpdateHexInput(f);this.trackColors&&this._addRecentColor(k);b&&this.emit("color-change",{color:new p(f)})},colorsPerRow:13,_setColorsPerRow:function(a){this._set("colorsPerRow",0<a?a:13)},_setPaletteAttr:function(a){var b=this._activePalette===this._brightsPalette;this._brightsPalette.set("colors",
a);this._pastelsPalette.set("colors",this._toPastels(this._brightsPalette.get("colors")));this._activePalette=b?this._brightsPalette:this._pastelsPalette;this._createPalettes();this._togglePalette(!b)},recentColors:[],_getRecentColorsAttr:function(){return g.map(this.recentColors,function(a){return d.normalizeColor(a)})},_setRecentColorsAttr:function(a){this.recentColors=a||[];this.recentColors=g.map(this.recentColors,function(a){return d.normalizeColor(a).toHex()});0===this.recentColors.length?this._clearRecentSwatches():
this._renderRecentSwatches()},required:!1,_setRequiredAttr:function(a){e.toggle(this._noColorSwatchNode,this.css.displayNone,a);this._set("required",a)},_showRecentColors:!0,_setShowRecentColorsAttr:function(a){e.toggle(this.dap_recentColorSection,this.css.displayNone,!a);this._set("showRecentColors",a)},_showSuggestedColors:!1,_setShowSuggestedColorsAttr:function(a){e.toggle(this.dap_suggestedColorSection,this.css.displayNone,!a);this._set("showSuggestedColors",a)},_showTransparencySlider:!0,_setShowTransparencySliderAttr:function(a){e.toggle(this.dap_transparencySection,
this.css.displayNone,!a);this._set("showTransparencySlider",a)},suggestedColors:null,_getSuggestedColorsAttr:function(){return g.map(this.suggestedColors,function(a){return d.normalizeColor(a)})},_setSuggestedColorsAttr:function(a){this._clearSuggestedSwatches();this.suggestedColors=a||[];this.suggestedColors=g.map(this.suggestedColors,function(a){return d.normalizeColor(a).toHex()});0<this.suggestedColors.length&&this._renderSuggestedSwatches()},trackColors:!0,addRecentColor:function(a){a&&"no-color"!==
a&&this._addRecentColor(d.normalizeColor(a).toHex())},loadRecentColors:function(a){this.set("recentColors",JSON.parse(localStorage.getItem(a)))},saveRecentColors:function(a){localStorage.setItem(a,JSON.stringify(this.get("recentColors")))},_toPastels:function(a){var b=this._colorInstance,c=new p([238,238,238]);return g.map(a,function(a){return p.blendColors(b.setColor(a),c,.2)},this)},_createSwatch:function(a){return m.create("span",{className:a.className,style:{background:a.hexColor||"transparent"}},
a.paletteNode)},_createSwatches:function(a,b){var c=this.css.swatch,f=this.css.swatchRow,k=this.colorsPerRow;b=b.get("colors");var d,e;g.forEach(b,function(b,g){0===g%k&&(d=m.create("div",{className:f},a));e=this._swatchCreator({className:c,hexColor:b,paletteNode:d});this._swatches[b]=e},this)},_selectColor:function(){var a=this.color||this._activePalette.get("colors")[0];this.set("color",a)},_setColorWithCurrentAlpha:function(a){"no-color"!==a&&"no-color"!==this.color&&(a=d.normalizeColor(a),a.a=
this.color.a);this.set("color",a)},_updatePreviewSwatch:function(a){var b=this.css.swatchEmpty,c=this.dap_previewSwatch,f,k;"no-color"===a?(e.add(c,b),n.set(c,{backgroundColor:"",borderColor:""})):(f=d.getContrastingColor(a),k=8!==u("ie"),e.remove(c,b),b=a.toCss(k),f=f.toCss(k),f={backgroundColor:b,borderColor:f},k||(f.opacity=a.a),n.set(c,f))},_showBrights:function(){e.remove(this.dap_paletteContainer,this.css.alt);this._activePalette=this._brightsPalette},_showPastels:function(){e.add(this.dap_paletteContainer,
this.css.alt);this._activePalette=this._pastelsPalette},_setColorFromSwatch:function(a){a=n.get(a,"backgroundColor");this._setColorWithCurrentAlpha(a)},_checkSelection:function(){var a=this.get("color");this._activePalette.contains(a)?this._highlightColor(a):this._clearSelection()},_addListeners:function(){var a="."+this.css.swatch;this.own(l(this.dap_paletteContainer,l.selector(a,"click"),h.hitch(this,function(a){this._setColorFromSwatch(a.target)})));this.own(l(this.dap_recentColorPalette,l.selector(a,
"click"),h.hitch(this,function(a){this._setColorFromSwatch(a.target)})));this.own(l(this.dap_suggestedColorPalette,l.selector(a,"click"),h.hitch(this,function(a){this._setColorFromSwatch(a.target)})));this.own(l(this._noColorSwatchNode,"click",h.hitch(this,function(a){this.set("color","no-color")})));var b=this.dap_hexInput;b.on("blur",h.hitch(this,function(){var a=d.normalizeHex(b.get("value"));d.isShorthandHex(a)?this._setColorWithCurrentAlpha(a):this._silentlyUpdateHexInput(this.color)}));b.on("change",
h.hitch(this,function(){var a=d.normalizeHex(b.get("value"));d.isLonghandHex(a)&&("no-color"!==this.color&&this.color.toHex()===a||this._setColorWithCurrentAlpha(a))}));this.dap_transparencySlider.on("change",h.hitch(this,function(a){var b=this.get("color");"no-color"!==b&&(b=d.normalizeColor(this._colorInstance.setColor(b)),b.a=1-a,this._updatePreviewSwatch(b),this._silentlyUpdateHexInput(b),this.set("color",b))}));this.dap_paletteToggle.on("change",h.hitch(this,this._togglePalette));this.own(l(this.dap_header,
"click",function(){this.collapsible&&this.set("collapsed",!this.collapsed)}.bind(this)))},_togglePalette:function(a){this.dap_paletteToggle.set("checked",a,!1);a?this._showPastels():this._showBrights();this._checkSelection()},_createPalettes:function(){this._swatches={};m.empty(this.dap_primaryPalette);m.empty(this.dap_secondaryPalette);this._createSwatches(this.dap_primaryPalette,this._brightsPalette);this._createSwatches(this.dap_secondaryPalette,this._pastelsPalette)},_silentlyUpdateHexInput:function(a){a=
"no-color"===a?"":a.toHex();this._silentlyUpdateIntermediateChangingValueWidget(this.dap_hexInput,a)},_silentlyUpdateIntermediateChangingValueWidget:function(a,b){a.intermediateChanges=!1;a.set("value",b,!1);a.intermediateChanges=!0},_addRecentColor:function(a){if(a){var b=this.recentColors,c=g.indexOf(b,a);-1<c&&b.splice(c,1);b.unshift(a);b.length>this.colorsPerRow&&b.pop();this._renderRecentSwatches()}},_renderRecentSwatches:function(){if(this.recentColors){var a=this.css.recent,b=this.css.swatch,
c=r("."+a+"."+b,this.dap_recentColorPalette);g.forEach(this.recentColors,function(f,d){if(d<this.colorsPerRow){if(d+1>c.length){var e=this._swatchCreator({hexColor:f,className:b+" "+a,paletteNode:this.dap_recentColorPalette});c.push(e)}n.set(c[d],"backgroundColor",f)}},this)}},_renderSuggestedSwatches:function(){if(this.suggestedColors){var a=this.css.suggested,b=this.css.swatch,c=r("."+a+"."+b,this.dap_recentColorPalette);g.forEach(this.suggestedColors,function(d,e){if(e<this.colorsPerRow){if(e+
1>c.length){var f=this._swatchCreator({hexColor:d,className:b+" "+a,paletteNode:this.dap_suggestedColorPalette});c.push(f)}n.set(c[e],"backgroundColor",d)}},this)}},_clearRecentSwatches:function(){m.empty(this.dap_recentColorPalette)},_clearSuggestedSwatches:function(){m.empty(this.dap_suggestedColorPalette)},_clearSelection:function(){var a=this.css.selected;r("."+a,this.dap_paletteContainer).removeClass(a)},_highlightColor:function(a){var b=this.css.selected,c=this._findColorSwatch(a);c&&(a=d.normalizeColor(a),
a=d.getContrastingColor(a),e.add(c,b),n.set(c,"borderColor",a.toHex()))},_findColorSwatch:function(a){var b=this._activePalette.get("colors");a=this._colorInstance.setColor(a).toHex();var c;-1<g.indexOf(b,a)&&(c=this._swatches[a]);return c},_enableTransparencySlider:function(){e.remove(this.dap_transparencyLabel,this.css.disabled);this.dap_transparencySlider.set("disabled",!1)},_disableTransparencySlider:function(){e.add(this.dap_transparencyLabel,this.css.disabled);this.dap_transparencySlider.set("disabled",
!0)}});q.NO_COLOR="no-color";u("extend-esri")&&h.setObject("dijit.ColorPicker",q,w);return q});