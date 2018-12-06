// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/mesh","require exports dojo/has ../../../../core/screenUtils ../../../../core/libs/earcut/earcut ../../../../core/libs/gl-matrix/mat2d ../../../../core/libs/gl-matrix/vec2 ../../../../core/libs/libtess/libtess ./color ./enums ./lineMeshUtil ./MeshData ./number ./TileClipper ./Utils ./visualVariablesUtils".split(" "),function(P,da,Ba,Q,Ca,ea,R,k,S,Da,wb,Wa,a,xb,Xa,yb){function Ya(q,p,c,d,n,k,r){d=c.slice(d,n);c=q.length/(r.length+1);k=Ca(d,k,2);
n=k.length;if(0>=n)return 0;for(var m=0;m<d.length;)q.push(a.i1616to32(d[m++],d[m++])),q.push.apply(q,r);for(q=0;q<n;)p.push(k[q++]+c,k[q++]+c,k[q++]+c)}Object.defineProperty(da,"__esModule",{value:!0});var zb=3.14159265359/180,d=R.create(),r=ea.create(),n=[],U=[],w,Ab=function(){function a(){this._indexCounter=this._currentVertexIndex=0;this._triangleIndices=[-1,-1,-1];this.glu=new k.GluTesselator;this.glu.gluTessCallback(k.gluEnum.GLU_TESS_BEGIN,this._begincallback.bind(this));this.glu.gluTessCallback(k.gluEnum.GLU_TESS_VERTEX_DATA,
this._vertexCallback.bind(this));this.glu.gluTessCallback(k.gluEnum.GLU_TESS_END,this._endcallback.bind(this));this.glu.gluTessCallback(k.gluEnum.GLU_TESS_COMBINE,this._combinecallback.bind(this));this.glu.gluTessCallback(k.gluEnum.GLU_TESS_ERROR,this._errorcallback.bind(this));this.glu.gluTessCallback(k.gluEnum.GLU_TESS_EDGE_FLAG,this._edgeCallback.bind(this));this.glu.gluTessProperty(k.gluEnum.GLU_TESS_WINDING_RULE,k.windingRule.GLU_TESS_WINDING_ODD)}a.prototype.beginPolygon=function(a,c){this._triangleIndices[0]=
-1;this._triangleIndices[1]=-1;this._triangleIndices[2]=-1;this._indexCounter=this._currentVertexIndex=0;this.glu.gluTessBeginPolygon(a);this._indices=c};a.prototype.endPolygon=function(){this.glu.gluTessEndPolygon()};a.prototype.beginContour=function(){this.glu.gluTessBeginContour()};a.prototype.endContour=function(){this.glu.gluTessEndContour()};a.prototype.addVertex=function(a,c){this.glu.gluTessVertex(a,c)};a.prototype._vertexCallback=function(a,c){c[c.length]=a[0];c[c.length]=a[1];this._triangleIndices[this._currentVertexIndex]=
-1;if(2<=this._currentVertexIndex){for(a=0;3>a;a++)-1===this._triangleIndices[a]&&(this._triangleIndices[a]=this._indexCounter++),this._indices[this._indices.length]=this._triangleIndices[a];this._currentVertexIndex=0}else this._currentVertexIndex++};a.prototype._begincallback=function(a){this._triangleIndices[0]=-1;this._triangleIndices[1]=-1;this._triangleIndices[2]=-1;this._currentVertexIndex=0};a.prototype._endcallback=function(){this._currentVertexIndex=0};a.prototype._errorcallback=function(a){};
a.prototype._combinecallback=function(a,c,d){return[a[0],a[1],a[2]]};a.prototype._edgeCallback=function(a){};return a}();P=Ba("esri-featurelayer-webgl");var Za="libtess"===(P&&P.tesselator||"libtess"),x;da.createMesh=function(k,p,c,fa,P,da,T,m,f,$a){switch(P){case Da.WGLGeometryType.MARKER:var q=new Wa,V,W,ga,ha,ab=0,bb=0,L,B,C,D,ia,M=p.heatmapInfo;if(M){var cb=Math.round(p.heatmapInfo.radius);W=V=0;ha=ga=cb;L=[1,1,1,1];B=[0,0,0,0];D=C=cb;ia=0}else{var ja=fa.spriteMosaicItem;V=Math.round(ja.rect.x/
4);W=Math.round(ja.rect.y/4);ga=V+Math.round(ja.rect.width/4);ha=W+Math.round(ja.rect.height/4);var ab=Math.round(T*Q.pt2px(f.xoffset|0)),bb=Math.round(T*Q.pt2px(f.yoffset|0)),Ba=f.color?f.color:[0,0,0,0];L=Xa.isPictureSymbol(f)?[255,255,255,255]:S.copyAndPremultiply(Ba);C=Math.round(T*Q.pt2px(f.width||f.size));D=Math.round(T*Q.pt2px(f.height||f.size));f.outline?(B=null!=f.outline.color?S.copyAndPremultiply(f.outline.color):[0,0,0,0],ia=null!=f.outline.width?Math.round(Q.pt2px(f.outline.width)):0):
(B=[0,0,0,0],ia=0)}ea.identity(r);f.angle&&ea.rotate(r,r,zb*f.angle);ea.translate(r,r,new Float32Array([-ab,-bb]));var b=[],ka=a.i8888to32(L[0],L[1],L[2],L[3]),la=a.i8888to32(B[0],B[1],B[2],B[3]),ma=a.i8888to32(C,D,ia,0),na=a.numTo32(k),db=0,eb=0,fb=0,gb=0,X=0,Y=c.vvColor||c.vvOpacity||c.vvRotation||c.vvSizeMinMaxValue||c.vvSizeScaleStops||c.vvSizeFieldStops||c.vvSizeUnitValue;if(Y){var y=p.vvFields,oa=y.rotation?p.getValue(m,y.rotation):0,pa=y.opacity?p.getValue(m,y.opacity):0,qa=y.color?p.getValue(m,
y.color):0,N=y.size&&!c.vvSizeScaleStops?p.getValue(m,y.size):0;c.vvSizeUnitValue&&(N=yb.getVisualVariableSizeValueRepresentationRatio(N,p.vvRanges.size.unitValue.valueRepresentation));if(null===N||isNaN(N))N=NaN;if(null===oa||isNaN(oa))oa=NaN;if(null===qa||isNaN(qa))qa=NaN;if(null===pa||isNaN(pa))pa=NaN;db=a.toUint32(N);eb=a.toUint32(pa);fb=a.toUint32(oa);gb=a.toUint32(qa)}var ra=[db,gb,eb,fb];M&&(X=a.toUint32(p.heatmapInfo.getIntensity(m)));var E=m.centroid||m.geometry,F;switch(da){case "esriGeometryPoint":F=
[[E.x,E.y]];break;case "esriGeometryMultipoint":F=E.points;break;case "esriGeometryPolyline":F=E.paths[0];break;case "esriGeometryPolygon":F=m.centroid?[[E.x,E.y]]:E.rings[0]}for(var z=0,G,Ea=0,Fa=0,H=Array(4*F.length),sa=0;sa<F.length;sa++){var hb=F[sa],ib=hb[0],jb=hb[1],ta=a.i1616to32(ib+Ea,jb+Fa),Ea=Ea+ib,Fa=Fa+jb;d.set([-.5*C,-.5*D]);R.transformMat2d(d,d,r);b.push(ta);b.push(a.i8888to32(d[0],d[1],V,W));b.push(na);b.push(ka);b.push(la);b.push(ma);Y?b.push.apply(b,ra):M&&b.push(X);d.set([.5*C,-.5*
D]);R.transformMat2d(d,d,r);b.push(ta);b.push(a.i8888to32(d[0],d[1],ga,W));b.push(na);b.push(ka);b.push(la);b.push(ma);Y?b.push.apply(b,ra):M&&b.push(X);d.set([-.5*C,.5*D]);R.transformMat2d(d,d,r);b.push(ta);b.push(a.i8888to32(d[0],d[1],V,ha));b.push(na);b.push(ka);b.push(la);b.push(ma);Y?b.push.apply(b,ra):M&&b.push(X);d.set([.5*C,.5*D]);R.transformMat2d(d,d,r);b.push(ta);b.push(a.i8888to32(d[0],d[1],ga,ha));b.push(na);b.push(ka);b.push(la);b.push(ma);Y?b.push.apply(b,ra):M&&b.push(X);G=6*sa;H[G+
0]=z+0;H[G+1]=z+1;H[G+2]=z+2;H[G+3]=z+1;H[G+4]=z+3;H[G+5]=z+2;z+=4}q.update({geometry:b},z,H);return q;case Da.WGLGeometryType.FILL:var Ga;a:{var ua=null!=fa?fa.spriteMosaicItem:null,Ha=m.geometry,kb=Xa.isPictureSymbol(f),lb;lb=kb?S.premultiplyAlphaUint32(S.white):f.color?S.premultiplyAlphaUint32(f.color):0;var Ca=c.vvColor||c.vvOpacity,mb=new Wa,Ia=0,Ja=0,Ka=0,La=0;if(ua)var nb=ua.rect,ob=nb.x,pb=nb.y,Bb=ua.width,Cb=ua.height,Ia=ob+1,Ja=pb+1,Ka=ob+1+Bb,La=pb+1+Cb;var Db=kb&&f.width&&f.height?a.i8888to32(a.nextHighestPowerOfTwo(f.width),
a.nextHighestPowerOfTwo(f.height),0,0):a.i8888to32(a.nextHighestPowerOfTwo(Ka-Ia),a.nextHighestPowerOfTwo(La-Ja),0,0),Z=[a.numTo32(k),lb,a.i1616to32(Ia,Ja),a.i1616to32(Ka,La),Db];if(Ca){var va=p.vvFields,wa=va.opacity?p.getValue(m,va.opacity):0,xa=va.color?p.getValue(m,va.color):0;if($a||null===xa||isNaN(xa))xa=NaN;if($a||null===wa||isNaN(wa))wa=NaN;Z.push(a.toUint32(xa),a.toUint32(wa))}for(var A=!1,Ma=0,qb=Ha.rings;Ma<qb.length;Ma++){var e=qb[Ma],aa=e.length;if(!(3>aa)){var ba=e[0][0],ca=e[0][1];
if(-8>ba||520<ba||-8>ca||520<ca){A=!0;break}for(var g=1;g<aa;++g)if(ba+=e[g][0],ca+=e[g][1],-8>ba||520<ba||-8>ca||520<ca){A=!0;break}if(A)break}}var O,l,h;if(A){w||(w=new xb.TileClipper(0,0,0,1,8),w.setExtent(512));w.reset(3);for(var Na=0,rb=Ha.rings;Na<rb.length;Na++)if(e=rb[Na],aa=e.length,!(3>aa)){l=e[0][0];h=e[0][1];w.moveTo(l,h);for(g=1;g<aa;++g)l+=e[g][0],h+=e[g][1],w.lineTo(l,h);w.close()}O={rings:w.result(!Za)};if(!O.rings||0===O.rings.length){Ga=null;break a}}else O=Ha;var I=[],ya=[],t,u;
if(Za){x||(x=new Ab);x.beginPolygon(n,ya);for(var Oa=0,sb=O.rings;Oa<sb.length;Oa++)if(e=sb[Oa],!(3>e.length)){x.beginContour();t=u=0;A?(l=e[0].x,h=e[0].y):(Pa=e[0],l=Pa[0],h=Pa[1]);var tb=[l,h,0];x.addVertex(tb,tb);for(g=1;g<e.length-1;g++){A?(l=e[g].x,h=e[g].y):(Qa=e[g],t=Qa[0],u=Qa[1],l+=t,h+=u);var ub=[l,h,0];x.addVertex(ub,ub)}x.endContour()}x.endPolygon();for(var za=0;za<n.length;za+=2)I.push(a.i1616to32(n[za],n[za+1])),I.push.apply(I,Z)}else{for(var J=0,v=0,Ra=void 0,Sa=void 0,Ta=0,vb=O.rings;Ta<
vb.length;Ta++){var e=vb[Ta],K=v;A?(l=e[0].x,h=e[0].y):(Ua=e[0],l=Ua[0],h=Ua[1]);n[v++]=l;n[v++]=h;var Aa=0;t=u=0;for(g=1;g<e.length;++g)A?(Ra=e[g].x,Sa=e[g].y,t=Ra-l,u=Sa-h,Aa-=t*(h+h+u),l=Ra,h=Sa):(Va=e[g],t=Va[0],u=Va[1],Aa-=t*(h+h+u),l+=t,h+=u),n[v++]=l,n[v++]=h;0<Aa?(0<K-J&&(Ya(I,ya,n,J,K,U,Z),J=K),U.length=0):0>Aa?0<K-J?U.push(.5*(K-J)):v=K:v=K}0<v-J&&Ya(I,ya,n,J,v,U,Z)}n.length=U.length=0;mb.update({geometry:I},I.length/(Z.length+1),ya);Ga=mb;break a;var Pa,Qa,Ua,Va}return Ga;case Da.WGLGeometryType.LINE:return wb.createLineMeshData(k,
p,c,fa,T,m,f)}return null}});