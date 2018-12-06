// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/requests/ErrorUtil",["dojo/_base/lang","dojo/Deferred","dojo/when","require"],function(g,h,c,k){function l(a){var b=new h;k(["./DataResource"],function(m){c((new m(a)).getFileContent(),b.resolve,b.reject)});return b.promise}var e={getErrorFromBin:function(a){var b=/^text\/|^application\/json/;return a&&a.type&&!b.test(a.type)?null:c(a&&l(a),function(a){if(a){if(a.hasOwnProperty("contentType")&&!b.test(a.contentType))return null;try{var d=JSON.parse(decodeURIComponent(escape(a.data))),
c=e.parseError(d);if(c)return c;if(d.messages&&d.messages.length){var f=d.messages[0];if("esriJobMessageTypeError"==f.type)return Error(f.description)}}catch(n){}}return Error("Binary data error.")})},parseError:function(a){var b;a.error?b=e.makeError(a.error):"error"===a.status&&(b=e.makeError(a));b&&b.code&&null==b.httpCode&&(b.httpCode=b.code);return b},makeError:function(a){null==a?a=Error():"string"===typeof a&&(a={message:a});a instanceof Error||"object"!==typeof a||(a=g.mixin(Error(),a));a.log=
dojoConfig.isDebug;return a}};return e});