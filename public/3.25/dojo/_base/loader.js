/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/_base/loader","./kernel ../has require module ../json ./lang ./array".split(" "),function(f,w,h,I,x,k,y){var q=function(a){return a.replace(/\./g,"/")},J=/\/\/>>built/,u=[],K=[],t=function(a,b,c){u.push(c);y.forEach(a.split(","),function(a){a=p(a,b.module);K.push(a);z(a)});A()},A=function(){var a,b;for(b in B)if(a=B[b],void 0===a.noReqPluginCheck&&(a.noReqPluginCheck=/loadInit\!/.test(b)||/require\!/.test(b)?1:0),!a.executed&&!a.noReqPluginCheck&&a.injected==L)return;M(function(){var a=
u;u=[];y.forEach(a,function(a){a(1)})})},N=function(a,b,c){var e=/\(|\)/g,l=1;for(e.lastIndex=b;(b=e.exec(a))&&(l=")"==b[0]?l-1:l+1,0!=l););if(0!=l)throw"unmatched paren around character "+e.lastIndex+" in: "+a;return[f.trim(a.substring(c,e.lastIndex))+";\n",e.lastIndex]},O=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,r=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg,v=/(^|\s)(require|define)\s*\(/m,C=function(a,b){var c,e,l,d=[],f=[];c=[];for(b=
b||a.replace(O,function(a){r.lastIndex=v.lastIndex=0;return r.test(a)||v.test(a)?"":a});c=r.exec(b);)e=r.lastIndex,l=e-c[0].length,e=N(b,e,l),"loadInit"==c[2]?d.push(e[0]):f.push(e[0]),r.lastIndex=e[1];c=d.concat(f);return c.length||!v.test(b)?[a.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 \x26\x26 dojo.loadInit("),c.join(""),c]:0},d=h.initSyncLoader(t,A,function(a,b){var c,e=[],l=[];if(J.test(b)||!(c=C(b)))return 0;b=a.mid+"-*loadInit";for(var d in p("dojo",a).result.scopeMap)e.push(d),l.push('"'+
d+'"');return"// xdomain rewrite of "+a.mid+"\ndefine('"+b+"',{\n\tnames:"+x.stringify(e)+",\n\tdef:function("+e.join(",")+"){"+c[1]+"}});\n\ndefine("+x.stringify(e.concat(["dojo/loadInit!"+b]))+", function("+e.join(",")+"){\n"+c[0]+"});"}),P=d.sync,L=d.requested,Q=d.arrived,D=d.nonmodule,R=d.executing,E=d.executed,g=d.syncExecStack,B=d.modules,F=d.execQ,p=d.getModule,z=d.injectModule,G=d.setArrived,S=d.signal,T=d.finishExec,U=d.execModule,H=d.getLegacyMode,M=d.guardCheckComplete,t=d.dojoRequirePlugin;
f.provide=function(a){var b=g[0],c=k.mixin(p(q(a),h.module),{executed:R,result:k.getObject(a,!0)});G(c);b&&(b.provides||(b.provides=[])).push(function(){c.result=k.getObject(a);delete c.provides;c.executed!==E&&T(c)});return c.result};w.add("config-publishRequireResult",1,0,0);f.require=function(a,b){b=function(a,b){var c=p(q(a),h.module);if(g.length&&g[0].finish)g[0].finish.push(a);else{if(c.executed)return c.result;b&&(c.result=D);b=H();z(c);b=H();c.executed!==E&&c.injected===Q&&d.guardCheckComplete(function(){U(c)});
if(c.executed)return c.result;b==P?c.cjs?F.unshift(c):g.length&&(g[0].finish=[a]):F.push(c)}}(a,b);w("config-publishRequireResult")&&!k.exists(a)&&void 0!==b&&k.setObject(a,b);return b};f.loadInit=function(a){a()};f.registerModulePath=function(a,b){var c={};c[a.replace(/\./g,"/")]=b;h({paths:c})};f.platformRequire=function(a){a=(a.common||[]).concat(a[f._name]||a["default"]||[]);for(var b;a.length;)k.isArray(b=a.shift())?f.require.apply(f,b):f.require(b)};f.requireIf=f.requireAfterIf=function(a,b,
c){a&&f.require(b,c)};f.requireLocalization=function(a,b,c){h(["../i18n"],function(d){d.getLocalization(a,b,c)})};return{extractLegacyApiApplications:C,require:t,loadInit:function(a,b,c){b([a],function(a){b(a.names,function(){for(var d="",e=[],m=0;m<arguments.length;m++)d+="var "+a.names[m]+"\x3d arguments["+m+"]; ",e.push(arguments[m]);eval(d);var k=b.module,g=[],h,d={provide:function(a){a=q(a);a=p(a,k);a!==k&&G(a)},require:function(a,b){a=q(a);b&&(p(a,k).result=D);g.push(a)},requireLocalization:function(a,
b,c){h||(h=["dojo/i18n"]);c=(c||f.locale).toLowerCase();a=q(a)+"/nls/"+(/root/i.test(c)?"":c+"/")+q(b);p(a,k).isXd&&h.push("dojo/i18n!"+a)},loadInit:function(a){a()}},m={},n;try{for(n in d)m[n]=f[n],f[n]=d[n];a.def.apply(null,e)}catch(V){S("error",[{src:I.id,id:"failedDojoLoadInit"},V])}finally{for(n in d)f[n]=m[n]}h&&(g=g.concat(h));g.length?t(g.join(","),b,c):c()})})}}});