(function(a){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)n=o[u],i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(a[s]=l[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var a,e=0;e<r.length;e++){for(var t=r[e],s=!0,n=1;n<t.length;n++){var o=t[n];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),a=l(l.s=t[0]))}return a}var s={},n={app:0},i={app:0},r=[];function o(a){return l.p+"js/"+({about:"about"}[a]||a)+"."+{about:"b86df92a","chunk-95a446b4":"7b802fe3"}[a]+".js"}function l(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(a){var e=[],t={about:1,"chunk-95a446b4":1};n[a]?e.push(n[a]):0!==n[a]&&t[a]&&e.push(n[a]=new Promise(function(e,t){for(var s="css/"+({about:"about"}[a]||a)+"."+{about:"6444664e","chunk-95a446b4":"f4ab00d0"}[a]+".css",i=l.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===i))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],u=c.getAttribute("data-href");if(u===s||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+a+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[a],d.parentNode.removeChild(d),t(r)},d.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(d)}).then(function(){n[a]=0}));var s=i[a];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise(function(e,t){s=i[a]=[e,t]});e.push(s[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(a),c=function(e){u.onerror=u.onload=null,clearTimeout(p);var t=i[a];if(0!==t){if(t){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,r=new Error("Loading chunk "+a+" failed.\n("+s+": "+n+")");r.type=s,r.request=n,t[1](r)}i[a]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=a,l.c=s,l.d=function(a,e,t){l.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},l.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},l.t=function(a,e){if(1&e&&(a=l(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var s in a)l.d(t,s,function(e){return a[e]}.bind(null,s));return t},l.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return l.d(e,"a",e),e},l.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},l.p="/",l.oe=function(a){throw console.error(a),a};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;r.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"034f":function(a,e,t){"use strict";var s=t("64a9"),n=t.n(s);n.a},4678:function(a,e,t){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(a){var e=i(a);return t(e)}function i(a){var e=s[a];if(!(e+1)){var t=new Error("Cannot find module '"+a+"'");throw t.code="MODULE_NOT_FOUND",t}return e}n.keys=function(){return Object.keys(s)},n.resolve=i,a.exports=n,n.id="4678"},"4dff":function(a,e,t){},"56d7":function(a,e,t){"use strict";t.r(e);t("14c6"),t("08c1"),t("4842"),t("d9fc");var s=t("2b0e"),n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[a._v("Evidentiranje prekršaja")]),a._v(" |\n    "),t("router-link",{attrs:{to:"/modul2"}},[a._v("Modul 2")]),a._v(" |\n    "),t("router-link",{attrs:{to:"/about"}},[a._v("Izmena pravila")])],1),t("router-view")],1)},i=[],r=(t("034f"),t("2877")),o={},l=Object(r["a"])(o,n,i,!1,null,null,null),c=l.exports,u=t("8c4f"),p=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"home"},[t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],v=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container"},[t("h2",[a._v("Unos podataka o prekršaju")]),t("form",{on:{submit:a.onSubmit}},[t("label",{staticClass:"big-title",attrs:{for:"form-row-vozac"}},[a._v("Podaci o vozaču")]),t("div",{staticClass:"form-row form-row-vozac"},[t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:a.zapisnik.vozac.ime,expression:"zapisnik.vozac.ime",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"imeVozaca",placeholder:"Ime"},domProps:{value:a.zapisnik.vozac.ime},on:{input:function(e){e.target.composing||a.$set(a.zapisnik.vozac,"ime",e.target.value.trim())},blur:function(e){return a.$forceUpdate()}}})]),t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:a.zapisnik.vozac.prezime,expression:"zapisnik.vozac.prezime",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"prezimeVozaca",placeholder:"Prezime"},domProps:{value:a.zapisnik.vozac.prezime},on:{input:function(e){e.target.composing||a.$set(a.zapisnik.vozac,"prezime",e.target.value.trim())},blur:function(e){return a.$forceUpdate()}}})])]),t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:a.zapisnik.vozac.jmbg,expression:"zapisnik.vozac.jmbg",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"jmbgVozaca",placeholder:"JMBG"},domProps:{value:a.zapisnik.vozac.jmbg},on:{input:function(e){e.target.composing||a.$set(a.zapisnik.vozac,"jmbg",e.target.value.trim())},blur:function(e){return a.$forceUpdate()}}})]),t("label",{staticClass:"small-title",attrs:{for:"form-row-dozvola"}},[a._v("Podaci o vozačkoj dozvoli")]),t("div",{staticClass:"form-row form-row-dozvola"},[t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:a.zapisnik.vozac.brojDozvole,expression:"zapisnik.vozac.brojDozvole",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"brojDozvoleVozaca",placeholder:"Broj vozačke dozvole"},domProps:{value:a.zapisnik.vozac.brojDozvole},on:{input:function(e){e.target.composing||a.$set(a.zapisnik.vozac,"brojDozvole",e.target.value.trim())},blur:function(e){return a.$forceUpdate()}}})]),t("div",{staticClass:"form-group col-md-6"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.zapisnik.vozac.tipDozvole,expression:"zapisnik.vozac.tipDozvole"}],staticClass:"form-control",attrs:{id:"tipDozvoleVozaca"},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,function(a){return a.selected}).map(function(a){var e="_value"in a?a._value:a.value;return e});a.$set(a.zapisnik.vozac,"tipDozvole",e.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"TRAJNA"}},[a._v("Trajna")]),t("option",{attrs:{value:"PROBNA"}},[a._v("Probna")])])])]),t("hr"),t("label",{staticClass:"big-title",attrs:{for:"form-row-vozac"}},[a._v("Podaci o prekršaju")]),t("div",{staticClass:"form-row form-row-vozac"},[t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:a.zapisnik.ulica,expression:"zapisnik.ulica",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"ulicaPrekrsaja",placeholder:"Ulica u kojoj je prekršaj počinjen"},domProps:{value:a.zapisnik.ulica},on:{input:function(e){e.target.composing||a.$set(a.zapisnik,"ulica",e.target.value.trim())},blur:function(e){return a.$forceUpdate()}}})]),t("div",{staticClass:"form-group col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.nasMest,expression:"nasMest"}],staticClass:"form-control",attrs:{id:"naseljePrekrsaja"},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,function(a){return a.selected}).map(function(a){var e="_value"in a?a._value:a.value;return e});a.nasMest=e.target.multiple?t:t[0]}}},[t("option",[a._v("U naselju")]),t("option",[a._v("Van naselja")])])]),t("div",{staticClass:"form-group col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.zapisnik.zona,expression:"zapisnik.zona"}],staticClass:"form-control",attrs:{id:"zonaPrekrsaja"},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,function(a){return a.selected}).map(function(a){var e="_value"in a?a._value:a.value;return e});a.$set(a.zapisnik,"zona",e.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"REDOVNA"}},[a._v("Redovna")]),t("option",{attrs:{value:"ZONA_USPORENOG_SAOBRACAJA"}},[a._v("Usporena")]),t("option",{attrs:{value:"ZONA_30"}},[a._v("Zona 30")]),t("option",{attrs:{value:"ZONA_SKOLE"}},[a._v("Zona škole")])])])]),t("label",{staticClass:"small-title",attrs:{for:"form-row-voznja"}},[a._v("Podaci o brzini kretanja")]),t("div",{staticClass:"form-row form-row-voznja"},[t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:a.zapisnik.ostvarenaBrzina,expression:"zapisnik.ostvarenaBrzina",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"brzinaKretanjaPrekrsaja",min:"1",placeholder:"Ostvarena brzina kretanja"},domProps:{value:a.zapisnik.ostvarenaBrzina},on:{input:function(e){e.target.composing||a.$set(a.zapisnik,"ostvarenaBrzina",a._n(e.target.value))},blur:function(e){return a.$forceUpdate()}}})]),t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:a.zapisnik.dozvoljenaBrzina,expression:"zapisnik.dozvoljenaBrzina",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"dozvoljenaBrzinaPrekrsaja",min:"1",placeholder:"Dozvoljena brzina kretanja"},domProps:{value:a.zapisnik.dozvoljenaBrzina},on:{input:function(e){e.target.composing||a.$set(a.zapisnik,"dozvoljenaBrzina",a._n(e.target.value))},blur:function(e){return a.$forceUpdate()}}})])]),t("label",{staticClass:"small-title",attrs:{for:"form-row-alkohol"}},[a._v("Podaci o alkoholisanosti i psihoaktivnim supstancama")]),t("div",{staticClass:"form-row form-row-alkohol justify-content-md-center"},[t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:a.zapisnik.prisustvoAlkohola,expression:"zapisnik.prisustvoAlkohola",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"kolicinaAlkoholaPrekrsaja",min:"0",step:"0.01",placeholder:"Količina alkohola u krvi"},domProps:{value:a.zapisnik.prisustvoAlkohola},on:{input:function(e){e.target.composing||a.$set(a.zapisnik,"prisustvoAlkohola",a._n(e.target.value))},blur:function(e){return a.$forceUpdate()}}})]),t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.zapisnik.prisustvoPsihoaktivnihSupstanci,expression:"zapisnik.prisustvoPsihoaktivnihSupstanci"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"prisustvoPsihoaktivnihPrekrsaja"},domProps:{checked:Array.isArray(a.zapisnik.prisustvoPsihoaktivnihSupstanci)?a._i(a.zapisnik.prisustvoPsihoaktivnihSupstanci,null)>-1:a.zapisnik.prisustvoPsihoaktivnihSupstanci},on:{change:function(e){var t=a.zapisnik.prisustvoPsihoaktivnihSupstanci,s=e.target,n=!!s.checked;if(Array.isArray(t)){var i=null,r=a._i(t,i);s.checked?r<0&&a.$set(a.zapisnik,"prisustvoPsihoaktivnihSupstanci",t.concat([i])):r>-1&&a.$set(a.zapisnik,"prisustvoPsihoaktivnihSupstanci",t.slice(0,r).concat(t.slice(r+1)))}else a.$set(a.zapisnik,"prisustvoPsihoaktivnihSupstanci",n)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"prisustvoPsihoaktivnihPrekrsaja"}},[a._v(" prisustvo prihoaktivnih susptanci")])]),t("div",{staticClass:"form-group col-md-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.zapisnik.saobracajnaNesreca,expression:"zapisnik.saobracajnaNesreca"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"saobracajnaNesrecaPrekrsaj"},domProps:{checked:Array.isArray(a.zapisnik.saobracajnaNesreca)?a._i(a.zapisnik.saobracajnaNesreca,null)>-1:a.zapisnik.saobracajnaNesreca},on:{change:function(e){var t=a.zapisnik.saobracajnaNesreca,s=e.target,n=!!s.checked;if(Array.isArray(t)){var i=null,r=a._i(t,i);s.checked?r<0&&a.$set(a.zapisnik,"saobracajnaNesreca",t.concat([i])):r>-1&&a.$set(a.zapisnik,"saobracajnaNesreca",t.slice(0,r).concat(t.slice(r+1)))}else a.$set(a.zapisnik,"saobracajnaNesreca",n)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"saobracajnaNesrecaPrekrsaj"}},[a._v(" izazvana saobraćajna nesreća")])]),t("div",{staticClass:"form-group col-md-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.zapisnik.ometa,expression:"zapisnik.ometa"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"ometaPrekrsaj"},domProps:{checked:Array.isArray(a.zapisnik.ometa)?a._i(a.zapisnik.ometa,null)>-1:a.zapisnik.ometa},on:{change:function(e){var t=a.zapisnik.ometa,s=e.target,n=!!s.checked;if(Array.isArray(t)){var i=null,r=a._i(t,i);s.checked?r<0&&a.$set(a.zapisnik,"ometa",t.concat([i])):r>-1&&a.$set(a.zapisnik,"ometa",t.slice(0,r).concat(t.slice(r+1)))}else a.$set(a.zapisnik,"ometa",n)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"ometaPrekrsaj"}},[a._v(" ometa službeno lice")])]),t("div",{staticClass:"form-group col-md-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.zapisnik.prisutnoDete,expression:"zapisnik.prisutnoDete"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"detePrekrsaj"},domProps:{checked:Array.isArray(a.zapisnik.prisutnoDete)?a._i(a.zapisnik.prisutnoDete,null)>-1:a.zapisnik.prisutnoDete},on:{change:function(e){var t=a.zapisnik.prisutnoDete,s=e.target,n=!!s.checked;if(Array.isArray(t)){var i=null,r=a._i(t,i);s.checked?r<0&&a.$set(a.zapisnik,"prisutnoDete",t.concat([i])):r>-1&&a.$set(a.zapisnik,"prisutnoDete",t.slice(0,r).concat(t.slice(r+1)))}else a.$set(a.zapisnik,"prisutnoDete",n)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"detePrekrsaj"}},[a._v(" prisutno dete mlađe od 12 godina")])])]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[a._v("Evidentiraj prekršaj")])]),t("modal",{attrs:{name:"hello-world",height:"auto",scrollable:!0}},[t("div",{staticClass:"modaldiv"},[t("h1",[a._v("Prekršaj uspešno evidentiran!")]),null!=a.resp.zapisnik.prekoracenjeBrzine?t("h2",[a._v("Prekršaj prekoračenja brzine:")]):a._e(),null!=a.resp.zapisnik.prekoracenjeBrzine?t("p",[a._v("\n        Zatvorska kazna: "+a._s(a.resp.zapisnik.prekoracenjeBrzine.zatvorskaKazna)),t("br"),a._v("\n        Novčana kazna: "+a._s(a.resp.zapisnik.prekoracenjeBrzine.novcanaKazna)),t("br"),a._v("\n        Kazneni poeni: "+a._s(a.resp.zapisnik.prekoracenjeBrzine.kazneniPoeni)),t("br"),a._v("\n        Zabrana upravljanja: "+a._s(a.resp.zapisnik.prekoracenjeBrzine.zabranaUpravljanja)),t("br")]):a._e(),null!=a.resp.zapisnik.voznjaPodUticajem?t("h2",[a._v("Prekršaj vožnje pod uticajem:")]):a._e(),null!=a.resp.zapisnik.voznjaPodUticajem?t("p",[a._v("\n        Zatvorska kazna: "+a._s(a.resp.zapisnik.voznjaPodUticajem.zatvorskaKazna)),t("br"),a._v("\n        Novčana kazna: "+a._s(a.resp.zapisnik.voznjaPodUticajem.novcanaKazna)),t("br"),a._v("\n        Kazneni poeni: "+a._s(a.resp.zapisnik.voznjaPodUticajem.kazneniPoeni)),t("br"),a._v("\n        Zabrana upravljanja: "+a._s(a.resp.zapisnik.voznjaPodUticajem.zabranaUpravljanja)),t("br")]):a._e(),1==a.resp.oduzimanjeDozvole?t("p",[a._v("\n        Vozacu je potrebno oduzeti dozvolu zato što je u prethodna 24 meseca sakupio "),t("b",[a._v(a._s(a.resp.godisnjiKazneniPoeni))]),a._v(" kaznenih poena.\n      ")]):a._e()])])],1)},m=[],f=t("bc3a"),z=t.n(f),j={name:"HelloWorld",props:{msg:String},data:function(){return{zapisnik:{vozac:{ime:"",prezime:"",jmbg:"",brojDozvole:"",tipDozvole:"TRAJNA"},naseljenoMesto:null,zona:"REDOVNA",dozvoljenaBrzina:"",ostvarenaBrzina:"",ulica:"",prisustvoAlkohola:"",prisustvoPsihoaktivnihSupstanci:!1,ometa:!1,saobracajnaNesreca:!1,prisutnoDete:!1},nasMest:"U naselju",resp:{zapisnik:{prekoracenjeBrzine:{zatvorskaKazna:null,novcanaKazna:null,kazneniPoeni:null,zabranaUpravljanja:null},voznjaPodUticajem:{zatvorskaKazna:null,novcanaKazna:null,kazneniPoeni:null,zabranaUpravljanja:null}},godisnjiKazneniPoeni:null,oduzimanjeDozvole:null}}},methods:{onSubmit:function(a){var e=this;a.preventDefault(),null!=this.$data.zapisnik.vozac.ime&&""!=this.$data.zapisnik.vozac.ime&&null!=this.$data.zapisnik.vozac.prezime&&""!=this.$data.zapisnik.vozac.prezime&&null!=this.$data.zapisnik.vozac.jmbg&&""!=this.$data.zapisnik.vozac.jmbg&&null!=this.$data.zapisnik.vozac.brojDozvole&&""!=this.$data.zapisnik.vozac.brojDozvole&&null!=this.$data.zapisnik.ulica&&""!=this.$data.zapisnik.ulica&&null!=this.$data.zapisnik.ostvarenaBrzina&&""!=this.$data.zapisnik.ostvarenaBrzina&&null!=this.$data.zapisnik.dozvoljenaBrzina&&""!=this.$data.zapisnik.dozvoljenaBrzina&&null!=this.$data.zapisnik.prisustvoAlkohola&&null!=this.$data.zapisnik.prisustvoAlkohola?("U naselju"==this.$data.nasMest?this.$data.zapisnik.naseljenoMesto=!0:"Van naselja"==this.$data.nasMest&&(this.$data.zapisnik.naseljenoMesto=!1),z.a.post("http://localhost:8080/zapisnik",this.$data.zapisnik).then(function(a){e.$data.resp=a.data,e.$modal.show("hello-world")}).catch(function(a){alert("Slanje zapisnika nije uspelo!")})):alert("Potrebno je popuniti sva polja!")}}},k=j,b=(t("6109"),Object(r["a"])(k,v,m,!1,null,"19735933",null)),h=b.exports,g={name:"home",components:{HelloWorld:h}},_=g,y=Object(r["a"])(_,p,d,!1,null,null,null),P=y.exports;s["a"].use(u["a"]);var w=new u["a"]({routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/modul2",name:"modul2",component:function(){return t.e("chunk-95a446b4").then(t.bind(null,"efbb"))}}]}),$=(t("ab8b"),t("1881")),C=t.n($),A=t("c1df"),N=t.n(A);s["a"].use(C.a),s["a"].config.productionTip=!1,s["a"].filter("formatDate",function(a){if(a)return N()(String(a)).format("DD/MM/YYYY hh:mm")}),new s["a"]({router:w,render:function(a){return a(c)}}).$mount("#app")},6109:function(a,e,t){"use strict";var s=t("4dff"),n=t.n(s);n.a},"64a9":function(a,e,t){}});
//# sourceMappingURL=app.ba3ad885.js.map