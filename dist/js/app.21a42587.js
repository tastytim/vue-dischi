(function(t){function e(e){for(var n,i,l=e[0],s=e[1],c=e[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("5eb3")},"3f27":function(t,e,r){},"3ff5":function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},"5eb3":function(t,e,r){"use strict";r.r(e);var n=r("f3af"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("CardContainer"),r("Footer")],1)},o=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"header"},[n("div",{staticClass:"container"},[n("img",{attrs:{src:r("3ff5"),alt:""}})])])}],s={name:"Header"},c=s,u=r("f5cd"),f=Object(u["a"])(c,i,l,!1,null,null,null),d=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"cardcontainer"},[r("div",{staticClass:"container"},[r("FilterBar",{on:{filterMade:t.onFilterMade}}),r("div",{staticClass:"\n        row\n        row-cols-1\n        row-cols-sm-2\n        row-cols-md-3\n        row-cols-lg-4\n        row-cols-xl-5\n        row-cols-xxl-6\n        g-4\n      "},t._l(t.filteredCardsList,(function(t,e){return r("div",{key:e,staticClass:"col"},[r("Card",{attrs:{poster:t.poster,title:t.title,author:t.author,year:t.year}})],1)})),0),!0===t.loading?r("Loader"):t._e()],1)])},v=[],m=(r("675a"),r("c167"),r("687c")),g=r.n(m),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("img",{staticClass:"card-img-top",attrs:{src:t.poster,alt:t.poster}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.title))]),r("p",{staticClass:"card-text"},[t._v(t._s(t.author))]),r("p",{staticClass:"card-text"},[t._v(t._s(t.year))])])])},_=[],b={name:"Card",props:{poster:String,title:String,author:String,genre:String,year:String}},y=b,C=Object(u["a"])(y,h,_,!1,null,null,null),x=C.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("img",{attrs:{src:r("8e1c"),alt:"gif-loading"}})])}],j={name:"Loader"},L=j,k=Object(u["a"])(L,w,O,!1,null,null,null),$=k.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filterbar"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{name:"filter",id:"filtergenre"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.key=e.target.multiple?r:r[0]},t.startFilter]}},[r("option",{attrs:{selected:"",value:""}},[t._v("All")]),r("option",{attrs:{value:"rock"}},[t._v("Rock")]),r("option",{attrs:{value:"pop"}},[t._v("Pop")]),r("option",{attrs:{value:"jazz"}},[t._v("Jazz")]),r("option",{attrs:{value:"metal"}},[t._v("Metal")])])])},S=[],E={name:"FilterBar",data:function(){return{key:""}},methods:{startFilter:function(){this.$emit("filterMade",this.key)}}},M=E,P=Object(u["a"])(M,F,S,!1,null,null,null),z=P.exports,T={name:"CardContainer",components:{Card:x,Loader:$,FilterBar:z},data:function(){return{cardsList:[],filteredCardsList:[],loading:!0}},mounted:function(){var t=this;this.loading=!0,g.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.cardsList=e.data.response,t.filteredCardsList=t.cardsList,setTimeout((function(){t.loading=!1}),2e3)}))},methods:{onFilterMade:function(t){this.filteredCardsList=null===t||""===t?this.cardsList:this.cardsList.filter((function(e){return e.genre.toLowerCase()==t.toLowerCase()}))}}},A=T,B=Object(u["a"])(A,p,v,!1,null,null,null),H=B.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"})},N=[],R={name:"Footer"},q=R,D=Object(u["a"])(q,J,N,!1,null,null,null),G=D.exports,I={name:"App",components:{Header:d,CardContainer:H,Footer:G}},K=I,Q=(r("80e4"),Object(u["a"])(K,a,o,!1,null,null,null)),U=Q.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(U)}}).$mount("#app")},"80e4":function(t,e,r){"use strict";r("3f27")},"8e1c":function(t,e,r){t.exports=r.p+"img/loading-icegif.61387fab.gif"}});
//# sourceMappingURL=app.21a42587.js.map