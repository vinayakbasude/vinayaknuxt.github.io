(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{270:function(t,e,r){"use strict";r(14);e.a=function(t){return fetch("https://partnercreation1.myshopify.com/api/2022-07/graphql.json",{method:"POST",headers:{"Content-Type":"application/graphql","Access-Control-Request-Method":"POST","X-Shopify-Storefront-Access-Token":"ffb10ff882ad6268ab5a27c86c0ebe1a",Referer:"https://partnercreation1.myshopify.com"},body:t}).then((function(t){return t.json()}))}},283:function(t,e,r){var content=r(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(132).default)("35fe9a65",content,!0,{sourceMap:!1})},288:function(t,e,r){"use strict";r(283)},289:function(t,e,r){var n=r(131)(!1);n.push([t.i,".products__cards{display:flex;flex-direction:row;flex-wrap:wrap;grid-gap:1rem;gap:1rem}.products__cards .card{flex:0 0 32%;padding:5px}.products__cards .card__title{font-size:24px}.products__cards .card__image{height:300px;width:100%;-o-object-fit:cover;object-fit:cover}.products__cards .card.border--black{border:1px solid #000;display:none}.products__cards .card.border--blue{border:1px solid #00f}@media(max-width:400px){.products__cards .card{flex:0 0 100%}}",""]),t.exports=n},301:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(40),r(270)),o={data:function(){return{title:"Products",products:[]}},head:{title:"Products",meta:[{name:"descriptions",content:"Products page"}]},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"query{\n                products(first:10){\n                        edges{\n                            node{\n                                title\n                                id\n                                featuredImage {\n                                    id\n                                    url\n                                }\n                            }\n                        }\n                    }\n                }",e.next=3,Object(c.a)("query{\n                products(first:10){\n                        edges{\n                            node{\n                                title\n                                id\n                                featuredImage {\n                                    id\n                                    url\n                                }\n                            }\n                        }\n                    }\n                }");case 3:r=e.sent,t.products=r.data.products.edges;case 5:case"end":return e.stop()}}),e)})))()},fetchOnServer:!0},d=(r(288),r(50)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"products"},[t.$fetchState.pending?e("h1",[t._v("fetching")]):t._e(),t._v(" "),t.$fetchState.pending||t.$fetchState.error?t._e():e("div",{staticClass:"products__cards"},[t._l(t.products,(function(r){return e("div",{staticClass:"card border--blue"},[e("h3",{staticClass:"card__title"},[t._v(t._s(r.node.title))]),t._v(" "),e("img",{staticClass:"card__image",attrs:{src:r.node.featuredImage.url,alt:"text"}})])})),t._v(" "),t._l(t.products,(function(r){return e("div",{staticClass:"card border--black"},[e("h3",{staticClass:"card__title"},[t._v(t._s(r.node.title))]),t._v(" "),e("img",{staticClass:"card__image",attrs:{src:r.node.featuredImage.url,alt:"text"}})])}))],2),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("Back to home")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);