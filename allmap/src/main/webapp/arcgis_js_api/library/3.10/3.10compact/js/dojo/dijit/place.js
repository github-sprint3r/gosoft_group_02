//>>built
define("dijit/place","dojo/_base/array dojo/dom-geometry dojo/dom-style dojo/_base/kernel dojo/_base/window ./Viewport ./main".split(" "),function(y,s,u,A,x,B,C){function z(d,a,n,q){var e=B.getEffectiveBox(d.ownerDocument);(!d.parentNode||"body"!=String(d.parentNode.tagName).toLowerCase())&&x.body(d.ownerDocument).appendChild(d);var c=null;y.some(a,function(b){var a=b.corner,h=b.pos,k=0,g={w:{L:e.l+e.w-h.x,R:h.x-e.l,M:e.w}[a.charAt(1)],h:{T:e.t+e.h-h.y,B:h.y-e.t,M:e.h}[a.charAt(0)]},f=d.style;f.left=
f.right="auto";n&&(k=n(d,b.aroundCorner,a,g,q),k="undefined"==typeof k?0:k);var l=d.style,m=l.display,r=l.visibility;"none"==l.display&&(l.visibility="hidden",l.display="");f=s.position(d);l.display=m;l.visibility=r;m={L:h.x,R:h.x-f.w,M:Math.max(e.l,Math.min(e.l+e.w,h.x+(f.w>>1))-f.w)}[a.charAt(1)];r={T:h.y,B:h.y-f.h,M:Math.max(e.t,Math.min(e.t+e.h,h.y+(f.h>>1))-f.h)}[a.charAt(0)];h=Math.max(e.l,m);l=Math.max(e.t,r);m=Math.min(e.l+e.w,m+f.w);r=Math.min(e.t+e.h,r+f.h);m-=h;r-=l;k+=f.w-m+(f.h-r);if(null==
c||k<c.overflow)c={corner:a,aroundCorner:b.aroundCorner,x:h,y:l,w:m,h:r,overflow:k,spaceAvailable:g};return!k});c.overflow&&n&&n(d,c.aroundCorner,c.corner,c.spaceAvailable,q);a=s.isBodyLtr(d.ownerDocument);var b=c.y,p=a?c.x:e.w-c.x-c.w;/relative|absolute/.test(u.get(x.body(d.ownerDocument),"position"))&&(b-=u.get(x.body(d.ownerDocument),"marginTop"),p-=(a?1:-1)*u.get(x.body(d.ownerDocument),a?"marginLeft":"marginRight"));var g=d.style;g.top=b+"px";g[a?"left":"right"]=p+"px";g[a?"right":"left"]="auto";
return c}var D={TL:"BR",TR:"BL",BL:"TR",BR:"TL"};return C.place={at:function(d,a,n,q,e){n=y.map(n,function(c){var b={corner:c,aroundCorner:D[c],pos:{x:a.x,y:a.y}};q&&(b.pos.x+="L"==c.charAt(1)?q.x:-q.x,b.pos.y+="T"==c.charAt(0)?q.y:-q.y);return b});return z(d,n,e)},around:function(d,a,n,q,e){function c(b,a){m.push({aroundCorner:b,corner:a,pos:{x:{L:k,R:k+f,M:k+(f>>1)}[b.charAt(1)],y:{T:w,B:w+l,M:w+(l>>1)}[b.charAt(0)]}})}var b;if("string"==typeof a||"offsetWidth"in a){if(b=s.position(a,!0),/^(above|below)/.test(n[0])){var p=
s.getBorderExtents(a),g=a.firstChild?s.getBorderExtents(a.firstChild):{t:0,l:0,b:0,r:0},t=s.getBorderExtents(d),v=d.firstChild?s.getBorderExtents(d.firstChild):{t:0,l:0,b:0,r:0};b.y+=Math.min(p.t+g.t,t.t+v.t);b.h-=Math.min(p.t+g.t,t.t+v.t)+Math.min(p.b+g.b,t.b+v.b)}}else b=a;if(a.parentNode){p="absolute"==u.getComputedStyle(a).position;for(a=a.parentNode;a&&1==a.nodeType&&"BODY"!=a.nodeName;){g=s.position(a,!0);t=u.getComputedStyle(a);/relative|absolute/.test(t.position)&&(p=!1);if(!p&&/hidden|auto|scroll/.test(t.overflow)){var v=
Math.min(b.y+b.h,g.y+g.h),h=Math.min(b.x+b.w,g.x+g.w);b.x=Math.max(b.x,g.x);b.y=Math.max(b.y,g.y);b.h=v-b.y;b.w=h-b.x}"absolute"==t.position&&(p=!0);a=a.parentNode}}var k=b.x,w=b.y,f="w"in b?b.w:b.w=b.width,l="h"in b?b.h:(A.deprecated("place.around: dijit/place.__Rectangle: { x:"+k+", y:"+w+", height:"+b.height+", width:"+f+" } has been deprecated.  Please use { x:"+k+", y:"+w+", h:"+b.height+", w:"+f+" }","","2.0"),b.h=b.height),m=[];y.forEach(n,function(b){var a=q;switch(b){case "above-centered":c("TM",
"BM");break;case "below-centered":c("BM","TM");break;case "after-centered":a=!a;case "before-centered":c(a?"ML":"MR",a?"MR":"ML");break;case "after":a=!a;case "before":c(a?"TL":"TR",a?"TR":"TL");c(a?"BL":"BR",a?"BR":"BL");break;case "below-alt":a=!a;case "below":c(a?"BL":"BR",a?"TL":"TR");c(a?"BR":"BL",a?"TR":"TL");break;case "above-alt":a=!a;case "above":c(a?"TL":"TR",a?"BL":"BR");c(a?"TR":"TL",a?"BR":"BL");break;default:c(b.aroundCorner,b.corner)}});d=z(d,m,e,{w:f,h:l});d.aroundNodePos=b;return d}}});