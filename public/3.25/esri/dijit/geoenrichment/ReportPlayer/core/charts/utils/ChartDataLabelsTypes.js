// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartDataLabelsTypes",[],function(){var c={NONE:"None",VALUE:"Value",LABEL_VALUE:"LabelValue",PERCENT:"Percent",LABEL_PERCENT:"LabelPercent",buildType:function(a){var b="";a.label&&(b="Label");a.value?b+="Value":a.percent&&(b+="Percent");return b||c.NONE},hasLabel:function(a){return a&&-1!==a.indexOf("Label")},hasValue:function(a){return a&&-1!==a.indexOf("Value")},hasPercent:function(a){return a&&-1!==a.indexOf("Percent")}};return c});