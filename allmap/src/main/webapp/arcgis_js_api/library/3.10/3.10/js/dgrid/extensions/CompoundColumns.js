//>>built
define("dgrid/extensions/CompoundColumns",["dojo/_base/lang","dojo/_base/declare","dojo/sniff","../util/misc","xstyle/css!../css/extensions/CompoundColumns.css"],function(r,p,s,t){return p("dgrid.extensions.CompoundColumns",null,{configStructure:function(){function c(a,g,l,k){var h=0,m=function(){},n,q;t.each(a,function(d,p){"string"===typeof d&&(d={label:d});!(a instanceof Array)&&!d.field&&(d.field=p);q=(n=d.children)&&!1!==d.showChildHeaders;d.parentColumn=k;n?null==d.id?d.id=(k&&k.id||g-1)+"-"+
e.length:k&&k.id&&(d.id=k.id+"-"+d.id):(f.push(d),e.push(r.delegate(d,{renderHeaderCell:m})),h++);q||(d=r.delegate(d,{rowSpan:-g}));n&&(h+=d.colSpan=c(n,g+1,q,d));l&&(b[g]||(b[g]=[])).push(d)},this);return h}var a=this.subRows&&this.subRows[0]||this.columns,b=[[]],e=b[0],f=[];b[0].className="dgrid-spacer-row";c(a,1,!0);var a=b.length,g,l,m,h;for(g=0;g<a;g++){m=b[g];for(l=0;l<m.length;l++)h=m[l],1>h.rowSpan&&(h.rowSpan+=a)}f=[f];f.headerRows=b;this.subRows=f;this.inherited(arguments)},renderHeader:function(){var c,
a=this.subRows[0],b=this.subRows.headerRows[0];this.inherited(arguments);for(c=a.length;c--;)a[c].headerNode=b[c].headerNode},_configColumn:function(c,a,b,e){var f=c.parentColumn;if(f){var g=0===a.indexOf(e)?a.substring(e.length):a;e=f.id+"-";a=c.id=e+g}this.inherited(arguments,[c,a,b,e])},cell:function(c,a){if("object"!=typeof a){var b=this.column(a);b&&(a=b.id)}return this.inherited(arguments,[c,a])},column:function(c){var a=this.inherited(arguments);if(null==a&&"object"!=typeof c){var b="-"+c,
e=b.length,f;for(f in this.columns)if(-1!==f.indexOf(b,f.length-e))return this.columns[f]}return a},_updateCompoundHiddenStates:function(c,a){var b=this.columns[c],e;if(!(b&&b.hidden==a))for(;b&&b.parentColumn;){b=b.parentColumn;if(e=b.colSpan+=a?-1:1)b.headerNode.colSpan=e;1===e&&!a?this._showColumn(b.id):!e&&a&&this._hideColumn(b.id)}},_hideColumn:function(c){var a=this;this._updateCompoundHiddenStates(c,!0);this.inherited(arguments);s("ff")&&(this.headerNode.style.display="none",setTimeout(function(){a.headerNode.style.display=
"";a.resize()},0))},_showColumn:function(c){this._updateCompoundHiddenStates(c,!1);this.inherited(arguments)},_getResizedColumnWidths:function(){var c=0,a=this.columns,b;for(b in a)c+=a[b].headerNode.offsetWidth;return{totalWidth:c,lastColId:this.subRows[0][this.subRows[0].length-1].id}}})});