(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95a446b4"],{"29ed":function(t,a,e){},"6b64":function(t,a,e){"use strict";var n=e("29ed"),r=e.n(n);r.a},efbb:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("form",{staticClass:"form-inline justify-content-center",on:{submit:t.onSubmit}},[e("div",{staticClass:"form-group mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.forma.tablice,expression:"forma.tablice"}],staticClass:"form-control",attrs:{type:"text",id:"imeVozaca",placeholder:"Tablice"},domProps:{value:t.forma.tablice},on:{input:function(a){a.target.composing||t.$set(t.forma,"tablice",a.target.value)}}})]),e("div",{staticClass:"form-group mx-sm-3 mb-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.forma.tipPrekrsaja,expression:"forma.tipPrekrsaja"}],staticClass:"form-control",attrs:{id:"zonaPrekrsaja"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.$set(t.forma,"tipPrekrsaja",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"Prolazak_kroz_crveno_svetlo"}},[t._v("Prolazak kroz crveno svetlo")]),e("option",{attrs:{value:"Prelazak_preko_pune_linije"}},[t._v("Prelazak preko pune linije")])])]),t._m(0)]),e("p",{staticClass:"lead"},[t._v("\n    Spiskovi vozila koje je potrebno isključiti iz saobraćaja radi izdavanja njihovim vozačima kazne za nasilničku vožnju.\n  ")]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("table",{staticClass:"table table-bordered"},[t._m(1),t._l(t.dates,function(a,n){return e("tr",{key:a},[e("td",[t._v(t._s(a.tablice))]),e("td",t._l(a.prekrsaji,function(a){return e("div",{key:a},[t._v("\n                "+t._s(t._f("formatDate")(new Date(a)))+"\n              ")])}),0),e("td",[e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.remove(n)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])})],2)]),e("div",{staticClass:"col"},[e("table",{staticClass:"table table-bordered"},[t._m(2),t._l(t.dates2,function(a,n){return e("tr",{key:a},[e("td",[t._v(t._s(a.tablice))]),e("td",t._l(a.prekrsaji,function(a){return e("div",{key:a},[t._v("\n                "+t._s(t._f("formatDate")(new Date(a)))+"\n              ")])}),0),e("td",[e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.remove2(n)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])})],2)]),e("div",{staticClass:"col"},[e("table",{staticClass:"table table-bordered"},[t._m(3),t._l(t.dates3,function(a,n){return e("tr",{key:a},[e("td",[t._v(t._s(a.tablice))]),e("td",t._l(a.prekrsaji,function(a){return e("div",{key:a},[t._v("\n                "+t._s(t._f("formatDate")(new Date(a)))+"\n              ")])}),0),e("td",[e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.remove3(n)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])})],2)])])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group mx-sm-3 mb-2"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Evidentiraj prekršaj")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{colspan:"3"}},[t._v("Vozila koja su dva ili više puta u roku od 10 minuta prošla svetlosni saobraćajni znak kada mu je tim znakom zabranjen prolaz")])]),e("tr",[e("th",[t._v("Tablice")]),e("th",{attrs:{colspan:"2"}},[t._v("Vremena")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{colspan:"3"}},[t._v("Vozila koja su tri ili više puta u roku od jednog sata prošla svetlosni saobraćajni znak kada mu je tim znakom zabranjen prolaz")])]),e("tr",[e("th",[t._v("Tablice")]),e("th",{attrs:{colspan:"2"}},[t._v("Vremena")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{colspan:"3"}},[t._v("Vozila koja su se kretala preko neisprekidane uzdužne linije koja razdvaja kolovozne trake po smerovima kretanja")])]),e("tr",[e("th",[t._v("Tablice")]),e("th",{attrs:{colspan:"2"}},[t._v("Vremena")])])])}],i=e("bc3a"),o=e.n(i),s={name:"modul2",components:{},methods:{onSubmit:function(t){var a=this;t.preventDefault(),null!=this.$data.forma.tablice&&""!=this.$data.forma.tablice?o.a.post("http://localhost:8080/nasilnicka",this.$data.forma).then(function(t){alert("Prekršaj uspešno evidentiran!"),a.fun()}).catch(function(t){alert("Evidentiranje prekršaja nije uspelo!")}):alert("Nisu popunjena sva polja!")},fun:function(){var t=this;o.a.get("http://localhost:8080/nasilnicka/dates").then(function(a){t.$data.dates=a.data}),o.a.get("http://localhost:8080/nasilnicka/dates2").then(function(a){t.$data.dates2=a.data}),o.a.get("http://localhost:8080/nasilnicka/dates3").then(function(a){t.$data.dates3=a.data})},remove:function(t){var a=this;o.a.delete("http://localhost:8080/nasilnicka/dates/"+t).then(function(t){a.fun()})},remove2:function(t){var a=this;o.a.delete("http://localhost:8080/nasilnicka/dates2/"+t).then(function(t){a.fun()})},remove3:function(t){var a=this;o.a.delete("http://localhost:8080/nasilnicka/dates3/"+t).then(function(t){a.fun()})}},data:function(){return{forma:{tablice:null,tipPrekrsaja:"Prolazak_kroz_crveno_svetlo"},dates:null,dates2:null,dates3:null}},mounted:function(){this.fun()}},l=s,c=(e("6b64"),e("2877")),u=Object(c["a"])(l,n,r,!1,null,"c102f3b6",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-95a446b4.7b802fe3.js.map