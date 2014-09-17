//>>built
define("dgrid/Grid","dojo/_base/kernel dojo/_base/declare dojo/on dojo/has put-selector/put ./List ./util/misc dojo/_base/sniff".split(" "),function(v,h,w,n,g,A,x){function q(a,c){c&&c.nodeType&&a.appendChild(c)}function y(a,c,d,f){if(this.formatter){f=this.formatter;var b=this.grid.formatterScope;d.innerHTML="string"===typeof f&&b?b[f](c,a):this.formatter(c,a)}else null!=c&&d.appendChild(document.createTextNode(c))}var z=8>n("ie")&&!n("quirks"),B=/[^\._a-zA-Z0-9-]/g;h=h("dgrid.Grid",A,{columns:null,
cellNavigation:!0,tabableHeader:!0,showHeader:!0,column:function(a){return"object"!=typeof a?this.columns[a]:this.cell(a).column},listType:"grid",cell:function(a,c){if(a.column&&a.element)return a;a.target&&a.target.nodeType&&(a=a.target);var d;if(a.nodeType){do{if(this._rowIdToObject[a.id])break;var f=a.columnId;if(f){c=f;d=a;break}a=a.parentNode}while(a&&a!=this.domNode)}if(!d&&"undefined"!=typeof c){var b=this.row(a);if(f=b&&b.element)for(var f=f.getElementsByTagName("td"),e=0;e<f.length;e++)if(f[e].columnId==
c){d=f[e];break}}if(null!=a)return{row:b||this.row(a),column:c&&this.column(c),element:d}},createRowCells:function(a,c,d,f){var b=g("table.dgrid-row-table[role\x3dpresentation]"),e=9>n("ie")||n("quirks")?g(b,"tbody"):b,u,l,h,t,q,s,m,p,k,r;d=d||this.subRows;l=0;for(h=d.length;l<h;l++){s=d[l];u=g(e,"tr");s.className&&g(u,"."+s.className);t=0;for(q=s.length;t<q;t++){m=s[t];p=m.id;k=m.field?".field-"+m.field:"";(r="function"===typeof m.className?m.className(f):m.className)&&(k+="."+r);k=g(a+(".dgrid-cell.dgrid-cell-padding"+
(p?".dgrid-column-"+p:"")+k.replace(/ +/g,".")).replace(B,"-")+"[role\x3d"+("th"===a?"columnheader":"gridcell")+"]");k.columnId=p;z?(p=g(k,"!dgrid-cell-padding div.dgrid-cell-padding"),k.contents=p):p=k;if(r=m.colSpan)k.colSpan=r;if(r=m.rowSpan)k.rowSpan=r;c(p,m);u.appendChild(k)}}return b},left:function(a,c){a.element||(a=this.cell(a));return this.cell(this._move(a,-(c||1),"dgrid-cell"))},right:function(a,c){a.element||(a=this.cell(a));return this.cell(this._move(a,c||1,"dgrid-cell"))},renderRow:function(a,
c){var d=this.createRowCells("td",function(f,b){var e=a;b.get?e=b.get(a):"field"in b&&"_item"!=b.field&&(e=e[b.field]);b.renderCell?q(f,b.renderCell(a,e,f,c)):y.call(b,a,e,f,c)},c&&c.subRows,a);return g("div[role\x3drow]\x3e",d)},renderHeader:function(){var a=this,c=this.headerNode,d=c.childNodes.length;for(c.setAttribute("role","row");d--;)g(c.childNodes[d],"!");d=this.createRowCells("th",function(a,b){var c=b.headerNode=a;z&&(a=a.parentNode);var d=b.field;d&&(a.field=d);if(b.renderHeaderCell)q(c,
b.renderHeaderCell(c));else if("label"in b||b.field)c.appendChild(document.createTextNode("label"in b?b.label:b.field));!1!==b.sortable&&(d&&"_item"!=d)&&(a.sortable=!0,a.className+=" dgrid-sortable")},this.subRows&&this.subRows.headerRows);this._rowIdToObject[d.id=this.id+"-header"]=this.columns;c.appendChild(d);this._sortListener&&this._sortListener.remove();this._sortListener=w(d,"click,keydown",function(d){if("click"==d.type||32==d.keyCode||!n("opera")&&13==d.keyCode){var b=d.target,e,g,l;do if(b.sortable){l=
[{attribute:e=b.field||b.columnId,descending:(g=a._sort[0])&&g.attribute==e&&!g.descending}];e={bubbles:!0,cancelable:!0,grid:a,parentType:d.type,sort:l};w.emit(d.target,"dgrid-sort",e)&&(a._sortNode=b,a.set("sort",l));break}while((b=b.parentNode)&&b!=c)}})},resize:function(){var a=this.headerNode.firstChild,c=this.contentNode,d;this.inherited(arguments);if(!n("ie")||7<n("ie")&&!n("quirks"))if(c.style.width="",c&&a&&(d=a.offsetWidth)!=c.offsetWidth)c.style.width=d+"px"},destroy:function(){this._destroyColumns();
this._sortListener&&this._sortListener.remove();this.inherited(arguments)},_setSort:function(a,c){this.inherited(arguments);this.updateSortArrow(this._sort)},updateSortArrow:function(a,c){this._lastSortedArrow&&(g(this._lastSortedArrow,"\x3c!dgrid-sort-up!dgrid-sort-down"),g(this._lastSortedArrow,"!"),delete this._lastSortedArrow);c&&(this._sort=a);if(a[0]){var d=a[0].attribute,f=a[0].descending,b=this._sortNode,e,h,l;delete this._sortNode;if(!b)for(l in e=this.columns,e)if(h=e[l],h.field==d){b=h.headerNode;
break}b&&(b=b.contents||b,this._lastSortedArrow=g(b.firstChild,"-div.dgrid-sort-arrow.ui-icon[role\x3dpresentation]"),this._lastSortedArrow.innerHTML="\x26nbsp;",g(b,f?".dgrid-sort-down":".dgrid-sort-up"),this.resize())}},styleColumn:function(a,c){return this.addCssRule("#"+x.escapeCssIdentifier(this.domNode.id)+" .dgrid-column-"+a,c)},_configColumns:function(a,c){var d=[],f=c instanceof Array;x.each(c,function(b,e){"string"==typeof b&&(c[e]=b={label:b});!f&&!b.field&&(b.field=e);e=b.id=b.id||(isNaN(e)?
e:a+e);this._configColumn&&(this._configColumn(b,e,c,a),e=b.id);f&&(this.columns[e]=b);b.grid=this;"function"===typeof b.init&&b.init();d.push(b)},this);return f?c:d},_destroyColumns:function(){var a=this.subRows,c=a&&a.length,d,f,b,e;this.cleanup();for(d=0;d<c;d++){f=0;for(e=a[d].length;f<e;f++)b=a[d][f],"function"===typeof b.destroy&&b.destroy()}},configStructure:function(){var a=this.subRows,c=this._columns=this.columns;this.columns=!c||c instanceof Array?{}:c;if(a)for(c=0;c<a.length;c++)a[c]=
this._configColumns(c+"-",a[c]);else this.subRows=[this._configColumns("",c)]},_getColumns:function(){return this._columns||this.columns},_setColumns:function(a){this._destroyColumns();this.subRows=null;this.columns=a;this._updateColumns()},_setSubRows:function(a){this._destroyColumns();this.subRows=a;this._updateColumns()},setColumns:function(a){v.deprecated("setColumns(...)",'use set("columns", ...) instead',"dgrid 0.4");this.set("columns",a)},setSubRows:function(a){v.deprecated("setSubRows(...)",
'use set("subRows", ...) instead',"dgrid 0.4");this.set("subRows",a)},_updateColumns:function(){this.configStructure();this.renderHeader();this.refresh();this._lastCollection&&this.renderArray(this._lastCollection);this._started&&(this._sort&&this._sort.length?this.updateSortArrow(this._sort):this.resize())}});h.appendIfNode=q;h.defaultRenderCell=y;return h});