webpackJsonp([7],{I8bk:function(t,e,a){"use strict";var s=a("L26m"),r=a("Lwyv");e.a={components:{TableAtomic:s.a,Responsive:r.a},data:function(){return{property:[["Class","lt-spc-[value]-[responsive]"],["Property","letter-spacing"]],value:[["Class","8px - 40px"],["Value Description","สำหรับ 8px ถึง 40px"]]}}}},L26m:function(t,e,a){"use strict";var s=a("p5hY"),r=a("gOg8"),i=!1;var o=function(t){i||a("MYkw")},n=a("VU/8")(s.a,r.a,!1,o,"data-v-644ccde4",null);n.options.__file="components/TableAtomic.vue",e.a=n.exports},Lwyv:function(t,e,a){"use strict";var s=a("SdWF"),r=a("kxtF"),i=a("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="components/Responsive.vue",e.a=i.exports},MYkw:function(t,e,a){var s=a("T0XP");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("603ce41e",s,!1,{sourceMap:!1})},NYqy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("I8bk"),r=a("ySjp"),i=a("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="pages/typography/letterspacing.vue",e.default=i.exports},SdWF:function(t,e,a){"use strict";var s=a("L26m");e.a={components:{TableAtomic:s.a},data:function(){return{responsive_data:[["Class","mobile","tablet","tablet-only","desktop"],["Breakpoints","up to 768px","from 769px","769px to 1023px","from 1024px"]]}}}},T0XP:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".is-bd-top[data-v-644ccde4]{border-top:1px solid #dbdbdb}.is-bd-right[data-v-644ccde4]{border-right:1px solid #dbdbdb}.is-bd-bottom[data-v-644ccde4]{border-bottom:1px solid #dbdbdb}.is-bd-left[data-v-644ccde4]{border-left:1px solid #dbdbdb}.cl-777[data-v-644ccde4]{color:#777}.tag[data-v-644ccde4]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;padding:5px 10px}.property[data-v-644ccde4]{background-color:#0050ff;color:#fff}.value[data-v-644ccde4]{background-color:#23d160;color:#fff}.responsive[data-v-644ccde4]{background-color:#f5f5f5}",""])},gOg8:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mg-5px is-bd-bottom w-90pct"},t._l(t.data[0],function(e,s){return a("div",{key:s,staticClass:"dp-flex f-drt-row flex-1"},t._l(t.length,function(e,r){return a("div",{key:r,staticClass:"dp-flex w-100pct f-drt-column pd-10px is-bd-top is-bd-right jtf-ct-center",class:{"is-bd-left":0===r}},[t.isColorCode(t.data[r][s])?a("div",[a("div",{staticClass:"f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px",style:{backgroundColor:t.data[r][s]}}),a("div",{staticClass:"f-left pd-t-5px pd-l-10px",class:{"f-w-bold cl-black":0===s,"cl-777":0!==s}},[t._v(t._s(t.data[r][s]))])]):a("span",{class:{"f-w-bold cl-black":0===s,"cl-777":0!==s}},[""!==t.type&&0!==s&&0===r?a("div",[a("div",{staticClass:"tag",class:t.type},[t._v("\n            "+t._s(t.data[r][s])+"\n         ")])]):a("div",[t._v("\n          "+t._s(t.data[r][s])+"\n        ")])])])}))}))};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},kxtF:function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("table-atomic",{attrs:{data:this.responsive_data,type:"responsive"}})],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},p5hY:function(t,e,a){"use strict";e.a={props:{data:{type:Array},type:{type:String,default:""}},computed:{length:function(){return Array(this.data.length).fill(0)}},methods:{isColorCode:function(t){return new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$").test(t)}}}},ySjp:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pd-10px"},[a("h1",[t._v("Letter Spacing")]),a("div",[t._v("ใช้สำหรับกำหนดระยะห่างระหว่างตัวอักษร")]),a("h3",[t._v("Property")]),a("table-atomic",{attrs:{data:t.property,type:"property"}}),a("h3",[t._v("Value")]),a("table-atomic",{attrs:{data:t.value,type:"value"}}),t._m(0),a("responsive"),t._m(1)],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Responsive "),e("span",{staticClass:"cl-success"},[this._v("YES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Hover "),e("span",{staticClass:"cl-danger"},[this._v("NO")])])}]};e.a=r}});