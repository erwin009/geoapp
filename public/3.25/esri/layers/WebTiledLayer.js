// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/WebTiledLayer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/url dojo/sniff dojo/string ../config ../kernel ../request ../urlUtils ../SpatialReference ../geometry/Extent ./TiledMapServiceLayer ./TileInfo".split(" "),function(f,g,h,t,n,p,u,v,w,k,l,q,x,y){function z(b,a){var c=[],e;if(b&&a&&(a.customLayerParameters||a.customParameters)){e=g.clone(a.customParameters||{});g.mixin(e,a.customLayerParameters||{});b=k.urlToObject(b);for(var d in b.query)e.hasOwnProperty(d)||
c.push(d+"\x3d"+b.query[d]);b=b.path+(c.length?"?"+c.join("\x26"):"")}return b}f=f(x,{declaredClass:"esri.layers.WebTiledLayer",constructor:function(b,a){a||(a={});this.urlTemplate=b=z(b,a.wmtsInfo);var c=new q(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new l({wkid:102100})),e=new q(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new l({wkid:102100}));this.initialExtent=a.initialExtent||c;this.fullExtent=a.fullExtent||e;this.tileInfo=a.tileInfo?
a.tileInfo:new y({dpi:96,rows:256,cols:256,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:0,resolution:156543.033928,scale:5.91657527591555E8},{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},
{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,
scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.14929107082380833,scale:564.248588},{level:21,resolution:.07464553541190416,scale:282.124294},{level:22,resolution:.03732276770595208,scale:141.062147},{level:23,resolution:.01866138385297604,
scale:70.5310735}]});this.spatialReference=new l(this.tileInfo.spatialReference.toJson());this.copyright=a.copyright||"";var d=new t(b),c=d.scheme+"://"+d.authority+"/";this.urlPath=b.substring(c.length);this.tileServers=a.tileServers||[];-1===d.authority.indexOf("{subDomain}")&&this.tileServers.push(c);if(a.subDomains&&0<a.subDomains.length&&1<d.authority.split(".").length){this.subDomains=a.subDomains;var f;h.forEach(a.subDomains,function(a){-1<d.authority.indexOf("${subDomain}")?f=d.scheme+"://"+
p.substitute(d.authority,{subDomain:a})+"/":-1<d.authority.indexOf("{subDomain}")&&(f=d.scheme+"://"+d.authority.replace(/\{subDomain\}/gi,a)+"/");this.tileServers.push(f)},this)}this.tileServers=h.map(this.tileServers,function(a){"/"!==a.charAt(a.length-1)&&(a+="/");return a});this._levelToLevelValue=[];var r=0;h.forEach(this.tileInfo.lods,function(a,b){this._levelToLevelValue[a.level]=a.levelValue||a.level;0===b&&(r=this._levelToLevelValue[a.level])},this);this._wmtsInfo=a.wmtsInfo;var m=g.hitch(this,
function(){this.loaded=!0;this.onLoad(this)});n("chrome")?(b=this.getTileUrl(r,0,0),a=u.defaults.io,c="with-credentials"===a.useCors?k.canUseXhr(b,!0):-1,(a=-1<c?a.corsEnabledServers[c]:null)&&a.withCredentials?w({url:b,handleAs:"arraybuffer"}).addBoth(function(){m()}):m()):m()},getTileUrl:function(b,a,c){b=this._levelToLevelValue[b];var e=this.tileServers[a%this.tileServers.length]+p.substitute(this.urlPath,{level:b,col:c,row:a}),e=e.replace(/\{level\}/gi,b).replace(/\{row\}/gi,a).replace(/\{col\}/gi,
c),e=this._appendCustomLayerParameters(e),e=this.addTimestampToURL(e);return k.addProxy(e)},_appendCustomLayerParameters:function(b){var a,c;if(this._wmtsInfo&&(this._wmtsInfo.customLayerParameters||this._wmtsInfo.customParameters))for(a in c=g.clone(this._wmtsInfo.customParameters||{}),g.mixin(c,this._wmtsInfo.customLayerParameters||{}),c)b+=(-1===b.indexOf("?")?"?":"\x26")+a+"\x3d"+encodeURIComponent(c[a]);return b}});n("extend-esri")&&g.setObject("layers.WebTiledLayer",f,v);return f});