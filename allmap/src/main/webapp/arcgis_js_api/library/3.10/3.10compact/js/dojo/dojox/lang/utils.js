//>>built
define("dojox/lang/utils",["..","dojo/_base/lang"],function(n,g){var f=g.getObject("lang.utils",!0,n),l={},h=Object.prototype.toString,m=function(b){if(b)switch(h.call(b)){case "[object Array]":return b.slice(0);case "[object Object]":return g.delegate(b)}return b};g.mixin(f,{coerceType:function(b,a){switch(typeof b){case "number":return Number(eval("("+a+")"));case "string":return String(a);case "boolean":return Boolean(eval("("+a+")"))}return eval("("+a+")")},updateWithObject:function(b,a,e){if(!a)return b;
for(var d in b)if(d in a&&!(d in l)){var c=b[d];c&&"object"==typeof c?f.updateWithObject(c,a[d],e):b[d]=e?f.coerceType(c,a[d]):m(a[d])}return b},updateWithPattern:function(b,a,e,d){if(!a||!e)return b;for(var c in e)c in a&&!(c in l)&&(b[c]=d?f.coerceType(e[c],a[c]):m(a[c]));return b},merge:function(b,a){if(a){var e=h.call(b),d=h.call(a),c,k;switch(d){case "[object Array]":if(d==e){e=Array(Math.max(b.length,a.length));c=0;for(d=e.length;c<d;++c)e[c]=f.merge(b[c],a[c]);return e}return a.slice(0);case "[object Object]":if(d==
e&&b){e=g.delegate(b);for(c in a)c in b?(d=b[c],k=a[c],k!==d&&(e[c]=f.merge(d,k))):e[c]=g.clone(a[c]);return e}return g.clone(a)}}return a}});return f});