
if(!('fetch' in window)){window.fetch=void 0;window.fetchIsArtificial=true}
(function(){(function(a){"use strict";function b(c,d){if({}.hasOwnProperty.call(b.cache,c))return b.cache[c];var e=b.resolve(c);if(!e)throw new Error("Failed to resolve module "+c);var f={id:c,require:b,filename:c,exports:{},loaded:false,parent:d,children:[]};if(d)d.children.push(f);var g=c.slice(0,c.lastIndexOf("/")+1);b.cache[c]=f.exports;e.call(void 0,f,f.exports,g,c);f.loaded=true;return b.cache[c]=f.exports}b.modules={};b.cache={};b.resolve=function(h){return{}.hasOwnProperty.call(b.modules,h)?b.modules[h]:void 0};b.define=function(i,j){b.modules[i]=j};b.define("1",function(k,l,m,n){var o=b("2",k);var p=o["default"];var q=String.fromCharCode.bind(String);function r(s){return q(8238)+s+q(8237)}var t=r("mkHfibxJd");var u=r("CUqOtaKQd");var v="";var w="";var x=void 0;var y=Object.defineProperty.bind(Object);(function(){var z=XMLHttpRequest.prototype;var A=z.open;var B=z.send;var C=z.setRequestHeader;function D(E,F,G){var H=Object.getOwnPropertyDescriptor(E,F);if(H&&(H.writable||H.configurable)){H.value=G;y(E,F,H)}}function I(J,K,L,M,N){var O=[].slice.call(arguments);var P=""+J;O[0]=P;var Q=A.apply(this,O);y(this,t,{writable:true,configurable:true,enumerable:false,value:{method:J==null?null:P.toLowerCase(),url:K}});return Q}function R(S){if(x!=null&&t in this&&x.shouldHook(this[t])){var T=x.getEncodedData();if(T){for(var U in T){if(!{}.hasOwnProperty.call(T,U))continue;var V=T[U];var W=x.config.headerNamePrefix+U;var X=x.chunk(W,V,x.config.headerChunkSize);for(var Y in X){if(!{}.hasOwnProperty.call(X,Y))continue;C.call(this,Y,X[Y])}}}}return B.apply(this,arguments)}if(!(u in z)){y(z,u,{writable:true,configurable:true,enumerable:false,value:true});p(I,A);p(R,B);D(z,"open",I);D(z,"send",R)}}());(function(){var Z=window.fetch;var ba=window.Request;var bb=function bc(bd,be){var bf=new ba(bd,be);var bg={url:bf.url,method:bf.method};if(x!=null&&x.shouldHook(bg)){var bh=x.getEncodedData();if(bh){for(var bi in bh){if(!{}.hasOwnProperty.call(bh,bi))continue;var bj=bh[bi];var bk=x.config.headerNamePrefix+bi;var bl=x.chunk(bk,bj,x.config.headerChunkSize);for(var bm in bl){if(!{}.hasOwnProperty.call(bl,bm))continue;bf.headers.set(bm,bl[bm])}}}}return Z(bf)};if(typeof Z==="function"&&!(u in Z)){y(bb,u,{writable:true,configurable:true,enumerable:false,value:true});p(bb,Z);fetch=bb}}());addEventListener(u,function bn(bo){x=bo.detail;if(bo.detail==null){removeEventListener(u,bn)}})});b.define("2",function(bp,bq,br,bs){var bt=Function.prototype.call.bind(Function.prototype.toString);var bu=void 0,bv=void 0;var bw=function bx(){var by=bu.lastIndexOf(this);if(by>=0){return bv[by]}return bt(this)};bw.prototype=void 0;bu=[bw];bv=[bt(Function.prototype.toString)];function bz(bA,bB){if(typeof bB!=="function"){return}try{bv.push(bt(bB));bu.push(bA);if(Function.prototype.toString!==bw){Function.prototype.toString=bw}}catch(bC){}}bq["default"]=bz});return b("1")}.call(this,this))}())
;if(window.fetchIsArtificial){delete window.fetch;delete window.fetchIsArtificial}
