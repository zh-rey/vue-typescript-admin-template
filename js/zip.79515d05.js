(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zip"],{4:function(t,e){},5:function(t,e){},"9d25":function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"d",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return l}),n.d(e,"f",function(){return c}),n.d(e,"e",function(){return s});var a=n("b32d"),i={id:0,status:"draft",title:"",fullContent:"",abstractContent:"",sourceURL:"",imageURL:"",timestamp:"",platforms:["a-platform"],disableComment:!1,importance:0,author:"",reviewer:"",type:"",pageviews:0},r=function(t){return Object(a["a"])({url:"/articles",method:"get",params:t})},o=function(t,e){return Object(a["a"])({url:"/articles/".concat(t),method:"get",params:e})},l=function(t){return Object(a["a"])({url:"/articles",method:"post",data:t})},c=function(t,e){return Object(a["a"])({url:"/articles/".concat(t),method:"put",data:e})},s=function(t){return Object(a["a"])({url:"/pageviews",method:"get",params:t})}},ca54:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"Please enter the file name (default file)","prefix-icon":"el-icon-document"},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),n("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{loading:t.downloadLoading,type:"primary",icon:"document"},on:{click:t.handleDownload}},[t._v("\n    Export Zip\n  ")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),n("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),n("el-table-column",{attrs:{label:"Author",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(e.row.author))])]}}])}),n("el-table-column",{attrs:{label:"Readings",align:"center",width:"115"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),n("el-table-column",{attrs:{label:"Date",align:"center",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(e.row.timestamp))])]}}])})],1)],1)},i=[],r=(n("96cf"),n("3b8d")),o=n("d225"),l=n("b0b4"),c=n("308d"),s=n("6bb5"),u=n("4e2b"),d=n("9ab4"),f=n("60a3"),p=n("9d25"),m=n("d257"),b=(n("6b54"),n("ac6a"),n("21a6")),h=n("7c39"),g=n.n(h),v=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"file",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"file",i=new g.a,r=e,o="".concat(t,"\r\n");r.forEach(function(t){var e="";e=t.toString(),o+="".concat(e,"\r\n")}),i.file("".concat(n,".txt"),o),i.generateAsync({type:"blob"}).then(function(t){Object(b["saveAs"])(t,"".concat(a,".zip"))},function(t){alert("Zip export failed: "+t.message)})},w=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.list=[],t.listLoading=!0,t.downloadLoading=!1,t.filename="",t}return Object(u["a"])(e,t),Object(l["a"])(e,[{key:"created",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,Object(p["d"])({});case 3:e=t.sent,n=e.data,this.list=n.items,setTimeout(function(){a.listLoading=!1},500);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"handleDownload",value:function(){this.downloadLoading=!0;var t=["Id","Title","Author","Readings","Date"],e=["id","title","author","pageviews","timestamp"],n=this.list,a=Object(m["b"])(e,n);""!==this.filename?v(t,a,this.filename,this.filename):v(t,a),this.downloadLoading=!1}}]),e}(f["c"]);w=d["a"]([Object(f["a"])({name:"ExportZip"})],w);var _=w,y=_,j=n("0c7c"),O=Object(j["a"])(y,a,i,!1,null,null,null);e["default"]=O.exports}}]);