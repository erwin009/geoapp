// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/tiling/TileQueue",["require","exports","../../../core/QueueProcessor","../libs/gl-matrix/vec2"],function(w,x,r,u){function v(c,a){c.length=0;a.forEach(function(a){return c.push(a)});return c}var q=new Set,m=[],g=new Map;return function(){function c(a){var b=this;this._keysToRequests=new Map;this.tileInfoView=null;var d=a.strategy&&"scale-first"!==a.strategy?this._peekByCenterFirst.bind(this):this._peekByScaleFirst.bind(this);this.tileInfoView=a.tileInfoView;
this._queues=a.tileServers&&0<a.tileServers.length?a.tileServers.map(function(k){return new r({concurrency:a.concurrency||6,process:function(d){d=b._keysToRequests.get(d);return a.process(d,k)},peeker:d})}):[new r({concurrency:a.concurrency||6,process:function(d){d=b._keysToRequests.get(d);return a.process(d)},peeker:d})]}Object.defineProperty(c.prototype,"length",{get:function(){return this._queues.reduce(function(a,b){return a+b.length},0)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"onGoingCount",{get:function(){return this._keysToRequests.size},enumerable:!0,configurable:!0});c.prototype.clear=function(){for(var a=0,b=this._queues;a<b.length;a++)b[a].clear();this._keysToRequests.clear()};c.prototype.find=function(a,b){var d=this;b=0;for(var c=this._queues;b<c.length;b++){var h=c[b].find(function(b){return a(d._keysToRequests.get(b).key)});if(h)return h}};c.prototype.get=function(a){a="string"===typeof a?a:a.id;for(var b=0,d=this._queues;b<d.length;b++){var c=d[b].get(a);if(c)return c}};
c.prototype.getRequest=function(a){return this._keysToRequests.get("string"===typeof a?a:a.id)};c.prototype.has=function(a){return"string"===typeof a?this._keysToRequests.has(a):this._keysToRequests.has(a.id)};c.prototype.isOngoing=function(a){var b="string"===typeof a?a:a.id;return this.has(b)&&this._queues.some(function(a){return a.isOngoing(b)})};c.prototype.pause=function(){for(var a=0,b=this._queues;a<b.length;a++)b[a].pause()};c.prototype.push=function(a){var b=this,d=a.key.id,c=this._queues[a.key.row%
this._queues.length].push(d);this._keysToRequests.set(d,a);c.then(function(){b._keysToRequests.delete(d)});c.catch(function(){b._keysToRequests.delete(d)});return c};c.prototype.reset=function(){for(var a=0,b=this._queues;a<b.length;a++)b[a].reset()};c.prototype.resume=function(){for(var a=0,b=this._queues;a<b.length;a++)b[a].resume()};c.prototype._peekByScaleFirst=function(a){if(!this.state)return a[0];for(var b=this.tileInfoView,c=Number.NEGATIVE_INFINITY,k=Number.POSITIVE_INFINITY,h=0;h<a.length;h++){var t=
this._keysToRequests.get(a[h]),f=this.tileInfoView.getTileScale(t.key);g.has(f)||(g.set(f,[]),c=Math.max(f,c),k=Math.min(f,k));g.get(f).push(t.key);q.add(f)}var e=this.state.scale;g.has(e)||(v(m,q),m.sort(),e=m.reduce(function(a,b,c,d){return Math.abs(b-e)<Math.abs(a-e)?b:a},m[0]));e=Math.min(e,c);e=Math.max(e,k);a=g.get(e);var l=b.getClosestInfoForScale(e),n=l.getColumnForX(this.state.center[0]),p=l.getRowForY(this.state.center[1]);a.sort(function(a,b){var c=l.denormalizeCol(a.col,a.world),d=l.denormalizeCol(b.col,
b.world);return Math.sqrt((n-c)*(n-c)+(p-a.row)*(p-a.row))-Math.sqrt((n-d)*(n-d)+(p-b.row)*(p-b.row))});q.clear();g.clear();return a[0].id};c.prototype._peekByCenterFirst=function(a){if(!this.state)return a[0];for(var b=this.tileInfoView,c=this.state.center,k=[0,0],h=Number.POSITIVE_INFINITY,g=null,f=0;f<a.length;f++){var e=this._keysToRequests.get(a[f]);b.getTileCoords(k,e.key);var l=u.distance(k,c);l<h&&(h=l,g=e.key)}return g.id};return c}()});