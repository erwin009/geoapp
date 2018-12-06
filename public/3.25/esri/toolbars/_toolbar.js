// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/toolbars/_toolbar",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../Evented"],function(c,g,h,k,l){c=c([l],{declaredClass:"esri.toolbars._Toolbar",constructor:function(b){this.map=b},_cursors:{move:"pointer","move-v":"pointer","move-gv":"pointer",box0:"nw-resize",box1:"n-resize",box2:"ne-resize",box3:"e-resize",box4:"se-resize",box5:"s-resize",box6:"sw-resize",box7:"w-resize",box8:"pointer"},_deactivateMapTools:function(b,e,c,f){var a=this.map;b&&(this._mapNavState={isDoubleClickZoom:a.isDoubleClickZoom,
isClickRecenter:a.isClickRecenter,isPan:a.isPan,isRubberBandZoom:a.isRubberBandZoom,isKeyboardNavigation:a.isKeyboardNavigation,isScrollWheelZoom:a.isScrollWheelZoom},a.disableDoubleClickZoom(),a.disableClickRecenter(),a.disablePan(),a.disableRubberBandZoom(),a.disableKeyboardNavigation());e&&a.hideZoomSlider();c&&a.hidePanArrows();f&&a.graphics.disableMouseEvents()},_activateMapTools:function(b,e,c,f){var a=this.map,d=this._mapNavState;b&&d&&(d.isDoubleClickZoom&&a.enableDoubleClickZoom(),d.isClickRecenter&&
a.enableClickRecenter(),d.isPan&&a.enablePan(),d.isRubberBandZoom&&a.enableRubberBandZoom(),d.isKeyboardNavigation&&a.enableKeyboardNavigation(),d.isScrollWheelZoom&&a.enableScrollWheelZoom());e&&a.showZoomSlider();c&&a.showPanArrows();f&&a.graphics.enableMouseEvents()},_deactivateScrollWheel:function(){var b=this.map;this._scrollWheelState={isScrollWheelZoom:b.isScrollWheelZoom,isScrollWheelPan:b.isScrollWheelPan};b.disableScrollWheelZoom();b.disableScrollWheelPan()},_activateScrollWheel:function(){var b=
this.map,c=this._scrollWheelState;c&&(c.isScrollWheelZoom&&b.enableScrollWheelZoom(),c.isScrollWheelPan&&b.enableScrollWheelPan())}});h("extend-esri")&&g.setObject("toolbars._Toolbar",c,k);return c});