//>>built
define("dojox/fx/Timeline","dojo/_base/lang dojo/fx/easing dojo/_base/fx dojo/dom ./_base dojo/_base/connect dojo/_base/html dojo/_base/array dojo/_base/Color".split(" "),function(r,l,t,u,n,q,v,w,p){n.animateTimeline=function(e,f){var b=new m(e.keys),c=t.animateProperty({node:u.byId(f||e.node),duration:e.duration||1E3,properties:b._properties,easing:l.linear,onAnimate:function(b){}});q.connect(c,"onEnd",function(b){var d=c.curve.getValue(c.reversed?0:1);v.style(b,d)});q.connect(c,"beforeBegin",function(){c.curve&&
delete c.curve;c.curve=b;b.ani=c});return c};var m=function(e){this.keys=r.isArray(e)?this.flatten(e):e};m.prototype.flatten=function(e){var f={},b={};w.forEach(e,function(c,g){var d=c.step;g="from"==d?0:"to"==d?1:void 0===d?0==g?0:g/(e.length-1):.01*parseInt(d,10);var d=l[c.ease]||l.linear,a;for(a in c)"step"!=a&&"ease"!=a&&"from"!=a&&"to"!=a&&(b[a]||(b[a]={steps:[],values:[],eases:[],ease:d},f[a]={},/#/.test(c[a])?f[a].units=b[a].units="isColor":f[a].units=b[a].units=/\D{1,}/.exec(c[a]).join("")),
b[a].eases.push(l[c.ease||"linear"]),b[a].steps.push(g),"isColor"==f[a].units?b[a].values.push(new p(c[a])):b[a].values.push(parseInt(/\d{1,}/.exec(c[a]).join(""))),void 0===f[a].start?f[a].start=b[a].values[b[a].values.length-1]:f[a].end=b[a].values[b[a].values.length-1])});this._properties=f;return b};m.prototype.getValue=function(e){e=this.ani._reversed?1-e:e;var f={},b=this,c=function(a,c){return"isColor"!=b._properties[a].units?b.keys[a].values[c]+b._properties[a].units:b.keys[a].values[c].toCss()},
g;for(g in this.keys)for(var d=this.keys[g],a=0;a<d.steps.length;a++){var h=d.steps[a],l=d.steps[a+1],k=a<d.steps.length?!0:!1,m=d.eases[a]||function(a){return a};if(e==h){if(f[g]=c(g,a),!k||k&&this.ani._reversed)break}else if(e>h)if(k&&e<d.steps[a+1]){k=d.values[a+1];d=d.values[a];h=1/(l-h)*(e-h);h=m(h);f[g]=d instanceof p?p.blendColors(d,k,h).toCss(!1):d+h*(k-d)+this._properties[g].units;break}else f[g]=c(g,a);else if(k&&!this.ani._reversed||!k&&this.ani._reversed)f[g]=c(g,a)}return f};n._Timeline=
m;return n});