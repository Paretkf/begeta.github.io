webpackJsonp([2],{FUUl:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pd-10px"},[s("h1",[t._v("Z-Index")]),s("div",[t._v("เป็น Atomic Class ค่าของ Z-Index เพื่อกำหนดลำดับชั้นการจัดวางในแนวแกน Z-Axis")]),s("h3",[t._v("Property")]),s("table-atomic",{attrs:{data:t.property}}),s("h3",[t._v("Value")]),s("table-atomic",{attrs:{data:t.value}}),s("h3",[t._v("Responsive YES")]),s("responsive"),s("h3",[t._v("Hover NO")])],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},L26m:function(t,e,s){"use strict";var a=s("p5hY"),i=s("gOg8"),o=!1;var r=function(t){o||s("MYkw")},d=s("VU/8")(a.a,i.a,!1,r,"data-v-644ccde4",null);d.options.__file="components/TableAtomic.vue",e.a=d.exports},Lwyv:function(t,e,s){"use strict";var a=s("SdWF"),i=s("kxtF"),o=s("VU/8")(a.a,i.a,!1,null,null,null);o.options.__file="components/Responsive.vue",e.a=o.exports},MYkw:function(t,e,s){var a=s("T0XP");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("603ce41e",a,!1,{sourceMap:!1})},SdWF:function(t,e,s){"use strict";var a=s("L26m");e.a={components:{TableAtomic:a.a},data:function(){return{responsive_data:[["Class","mobile","tablet","desktop","widescreen"],["Breakpoints","up to 768px","from 769px","from 1024px","from 1408px"]]}}}},T0XP:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".is-bd-top[data-v-644ccde4]{border-top:1px solid #dbdbdb}.is-bd-right[data-v-644ccde4]{border-right:1px solid #dbdbdb}.is-bd-bottom[data-v-644ccde4]{border-bottom:1px solid #dbdbdb}.is-bd-left[data-v-644ccde4]{border-left:1px solid #dbdbdb}.cl-777[data-v-644ccde4]{color:#777}",""])},gOg8:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dp-flex mg-5px"},t._l(t.data,function(e,a){return s("div",{key:a,staticClass:"dp-flex f-drt-column w-40pct is-bd-bottom",class:{"is-bd-right":0!==a}},t._l(e,function(e,a){return s("div",{key:a,staticClass:"is-bd-top is-bd-left pd-5px h-45px pd-10px"},[t.isColorCode(e)?s("div",[s("div",{staticClass:"f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px",style:{backgroundColor:e}}),s("div",{staticClass:"f-left pd-t-5px pd-l-10px",class:{"f-w-bold cl-black":0===a,"cl-777":0!==a}},[t._v(t._s(e))])]):s("span",{class:{"f-w-bold cl-black":0===a,"cl-777":0!==a}},[t._v(t._s(e))])])}))}))};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},"j/9R":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("xcdj"),i=s("FUUl"),o=s("VU/8")(a.a,i.a,!1,null,null,null);o.options.__file="pages/zindex.vue",e.default=o.exports},kxtF:function(t,e,s){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("table-atomic",{attrs:{data:this.responsive_data}})],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},p5hY:function(t,e,s){"use strict";e.a={props:["data"],methods:{isColorCode:function(t){return new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$").test(t)}}}},xcdj:function(t,e,s){"use strict";var a=s("L26m"),i=s("Lwyv");e.a={components:{TableAtomic:a.a,Responsive:i.a},data:function(){return{property:[["Class","z-id-[value]-[responsive]"],["Property","z-index"]],value:[["Class","auto","0","1","-1"],["Value Description",'ใช้สำหรับ "auto"','สำหรับ "0"','สำหรับ "1"','สำหรับ "-1"']]}}}}});