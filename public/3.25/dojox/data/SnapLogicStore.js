//>>built
define("dojox/data/SnapLogicStore",["dojo","dojox","dojo/io/script","dojo/data/util/sorter"],function(d,h){return d.declare("dojox.data.SnapLogicStore",null,{Parts:{DATA:"data",COUNT:"count"},url:"",constructor:function(a){a.url&&(this.url=a.url);this._parameters=a.parameters},_assertIsItem:function(a){if(!this.isItem(a))throw Error("dojox.data.SnapLogicStore: a function was passed an item argument that was not an item");},_assertIsAttribute:function(a){if("string"!==typeof a)throw Error("dojox.data.SnapLogicStore: a function was passed an attribute argument that was not an attribute name string");
},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(a,b,c){this._assertIsItem(a);this._assertIsAttribute(b);b=d.indexOf(a.attributes,b);return-1!==b?a.values[b]:c},getAttributes:function(a){this._assertIsItem(a);return a.attributes},hasAttribute:function(a,b){this._assertIsItem(a);this._assertIsAttribute(b);for(var c=0;c<a.attributes.length;++c)if(b==a.attributes[c])return!0;return!1},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){},getLabel:function(a){},
getLabelAttributes:function(a){return null},containsValue:function(a,b,c){return this.getValue(a,b)===c},getValues:function(a,b){this._assertIsItem(a);this._assertIsAttribute(b);b=d.indexOf(a.attributes,b);return-1!==b?[a.values[b]]:[]},isItem:function(a){return a&&a._store===this?!0:!1},close:function(a){},_fetchHandler:function(a){var b=a.scope||d.global;a.onBegin&&a.onBegin.call(b,a._countResponse[0],a);if(a.onItem||a.onComplete){var c=a._dataResponse;if(c.length){if("record count"!=a.query){for(var g=
c.shift(),e=[],f=0;f<c.length&&!a._aborted;++f)e.push({attributes:g,values:c[f],_store:this});a.sort&&!a._aborted&&e.sort(d.data.util.sorter.createSortFunction(a.sort,self))}else e=[{attributes:["count"],values:c,_store:this}];if(a.onItem){for(f=0;f<e.length&&!a._aborted;++f)a.onItem.call(b,e[f],a);e=null}a.onComplete&&!a._aborted&&a.onComplete.call(b,e,a)}else a.onError.call(b,Error("dojox.data.SnapLogicStore: invalid response of length 0"),a)}},_partHandler:function(a,b,c){c instanceof Error?(b==
this.Parts.DATA?a._dataHandle=null:a._countHandle=null,a._aborted=!0,a.onError&&a.onError.call(a.scope,c,a)):a._aborted||(b==this.Parts.DATA?a._dataResponse=c:a._countResponse=c,a._dataHandle&&null===a._dataResponse||a._countHandle&&null===a._countResponse||this._fetchHandler(a))},fetch:function(a){a._countResponse=null;a._dataResponse=null;a._aborted=!1;a.abort=function(){a._aborted||(a._aborted=!0,a._dataHandle&&a._dataHandle.cancel&&a._dataHandle.cancel(),a._countHandle&&a._countHandle.cancel&&
a._countHandle.cancel())};if(a.onItem||a.onComplete){var b=this._parameters||{};if(a.start){if(0>a.start)throw Error("dojox.data.SnapLogicStore: request start value must be 0 or greater");b["sn.start"]=a.start+1}if(a.count){if(0>a.count)throw Error("dojox.data.SnapLogicStore: request count value 0 or greater");b["sn.limit"]=a.count}b["sn.content_type"]="application/javascript";b={url:this.url,content:b,timeout:6E4,callbackParamName:"sn.stream_header",handle:d.hitch(this,"_partHandler",a,this.Parts.DATA)};
a._dataHandle=d.io.script.get(b)}a.onBegin&&(b={"sn.count":"records","sn.content_type":"application/javascript"},b={url:this.url,content:b,timeout:6E4,callbackParamName:"sn.stream_header",handle:d.hitch(this,"_partHandler",a,this.Parts.COUNT)},a._countHandle=d.io.script.get(b));return a}})});