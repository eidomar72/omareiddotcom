(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{468:function(t,e,c){},471:function(t,e,c){"use strict";var n=c(15),r=c(308)(6),o="findIndex",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),n(n.P+n.F*l,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(101)(o)},474:function(t,e,c){},475:function(t,e,c){"use strict";var n=c(468);c.n(n).a},476:function(t,e,c){"use strict";var n={props:["data","grid"],data:function(){return{loaded:!1}},methods:{onMouseEnter:function(){this.$nuxt.$emit("product-item-mouseenter",this.data)},onMouseLeave:function(){this.$nuxt.$emit("product-item-mouseleave")},preload:function(){}},mounted:function(){this.preload()}},r=(c(475),c(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("a",{staticClass:"product-item",class:{"product-item__grid":t.grid},attrs:{href:t.localePath({name:"collections-id",params:{id:t.data.slug}}),id:t.data.slug},nativeOn:{mouseenter:function(e){return t.onMouseEnter()},mouseleave:function(e){return t.onMouseLeave()}}},[c("div",[c("div",{staticClass:"item__image",class:{loaded:t.loaded}},[t.data.acf.settings?c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.data.acf.settings.product_image,expression:"data.acf.settings.product_image"}],key:t.data.acf.settings.product_image,attrs:{alt:""}}):t._e()]),t._v(" "),c("div",{staticClass:"title--h4 product-item__title"},[t._v(t._s(t.data.acf.settings.name))]),t._v(" "),c("div",{staticClass:"headline"},[t._v(t._s(t.data.acf.settings.subtitle))])])])}),[],!1,null,"db9f90d6",null);e.a=component.exports},484:function(t,e,c){"use strict";(function(t){c(23),c(17),c(19),c(471),c(24),c(47);var n=c(7),r=(c(45),c(46),c(131),c(132),c(48),c(30)),o=(c(14),c(11),c(61),c(550)),l=c(130),d=c(9);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}e.a={scrollToTop:!1,nuxtI18n:{paths:{en:"/collections",fr:"/collections",es:"/colecciones",pt:"/collections",ru:"/collections",ar:"/collections",cz:"/collections",ja:"/collections"}},asyncData:function(t){var e=t.store,c=t.error,n=t.app,o=t.from;return Promise.all([e.dispatch("fetchWPData",{context:n,type:"product"}),e.dispatch("fetchWPData",{context:n,type:"technique"}),e.dispatch("fetchWPData",{context:n,type:"concept"})]).then((function(t){var e=Object(r.a)(t,3),c=e[0],n=e[1],l=e[2];return new Promise((function(t){setTimeout((function(){t({data:c,filterTechnical:n,filterConcept:l,previousRoute:o})}),400)}))})).catch((function(t){c({statusCode:404,message:"Page not found"})}))},components:{"c-product-list":o.a,"c-floating-text":l.a},head:function(){var title=this.$t("Collections");return{title:"- ".concat(title),meta:[{hid:"og:title",property:"og:title",content:"Richard Mille - "+title},{hid:"og:url",property:"og:url",content:t.env.FRONT_PROTOCOL+"://"+t.env.FRONT_DOMAIN+this.$route.fullPath}]}},data:function(){return{limit:12,page:1,sort:"date",scrollTop:0,filters:{gender:[],concept:[],technical:[]},filterFixed:!1,activeProduct:!1,bgTimeout:!1,activeFilter:!1,isLoading:!1,filterGender:[{name:"men",id:"men"},{name:"ladies",id:"women"}],realData:[],hideList:!0,clickActivated:0}},directives:{clickOutside:{bind:function(t,e,c){t.clickOutsideEvent=function(n){t==n.target||t.contains(n.target)||c.context[e.expression](n)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}}},computed:{filteredData:function(){var t=this,e=this.data;return e=(e=e.filter((function(e){if(!e.acf.settings)return!1;if(t.$route.query.gender){for(var c=t.$route.query.gender.toString().split(","),n=!1,r=0;r<c.length;r++)for(var i=0;i<e.acf.settings.gender.length;i++)c[r]===e.acf.settings.gender[i].slug&&(n=!0);if(!n)return!1}if(t.$route.query.concept){for(var o=t.$route.query.concept.toString().split(","),l=!1,d=0;d<o.length;d++)e.acf.settings.concept&&e.acf.settings.concept.includes(parseInt(o[d]))&&(l=!0);if(!l)return!1}if(t.$route.query.technical){for(var f=t.$route.query.technical.toString().split(","),v=!1,h=0;h<f.length;h++)e.acf.settings.technique&&e.acf.settings.technique.includes(parseInt(f[h]))&&(v=!0);if(!v)return!1}return!0}))).sort((function(a,b){return b.acf.settings.order_code>a.acf.settings.order_code?1:-1}))},limitedData:function(){return this.realData.slice(0,this.limit*this.page)}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)({setHeaderTransparent:"setHeaderTransparent",setHeaderBackgrounded:"setHeaderBackgrounded",setNavActive:"setNavActive",toggleSearch:"toggleSearch"}),{clearFilters:function(){this.$router.push(this.localePath({name:"collections"})),this.filters.gender=[],this.filters.concept=[],this.filters.technical=[]},onProductHover:function(data){var t=this;this.activeProduct=!1,this.bgTimeout&&clearTimeout(this.bgTimeout),this.bgTimeout=setTimeout((function(){var img=new Image;t.onImgLoad(img,(function(){t.activeProduct=data})),img.src=data.acf.settings.background_image}),300)},onProductLeave:function(){this.activeProduct=!1},toggleFilter:function(t){if("desktop"!=this.deviceType){if(this.filterTitle=this.$el.querySelectorAll(".js-dropdown"),t.target.parentNode.classList.contains("active"))for(var i=0;i<this.filterTitle.length;i++)this.filterTitle[i].parentNode.classList.remove("active"),t.target.parentNode.classList.add("active");else for(var e=0;e<this.filterTitle.length;e++)this.filterTitle[e].parentNode.classList.remove("active");t.target.parentNode.classList.toggle("active")}},updateLoading:function(){var t=this;this.$refs.list&&this.limit*this.page<this.filteredData.length&&!this.isLoading&&this.$refs.list.$el.getBoundingClientRect().bottom<1.5*window.innerHeight&&(this.isLoading=!0,setTimeout((function(){t.page++,t.isLoading=!1}),200))},initScroll:function(){var t=this,e=!1;if(this.$route.hash?e=this.$route.hash.replace("#",""):this.previousRoute&&0==this.previousRoute.name.indexOf("collections-id")&&(e=this.previousRoute.params.id),e){var c=this.filteredData.findIndex((function(t){return t.slug==e}));if(c>=0){var n=Math.ceil((c+1)/this.limit);this.page=n,this.$nextTick((function(){var c=t.$el.querySelector("#"+e);c&&t.$nuxt.$emit("scrollTo",c.getBoundingClientRect().top-window.innerHeight/2+c.offsetHeight/2-35,!0,!0),t.hideList=!1}))}else this.hideList=!1}else this.hideList=!1},updateNavActive:function(){var t=!1,e=this.$route.query.gender;e&&1==e.split(",").length&&(t=e),this.setNavActive({value:"collections-"+t})},onScroll:function(t){this.scrollTop=t,this.updateLoading()},initFilters:function(){var t=this.$route.query;for(var e in t)this.filters[e]=t[e].toString().split(",")},openFilters:function(){this.activeFilter=!0,this.$nuxt.$emit("disableScroll")},closeFilters:function(){this.activeFilter=!1,this.$nuxt.$emit("enableScroll",this.$refs.filters)},checkClickFilters:function(){var t=this;document.addEventListener("click",(function(e){if(t.activeFilter){var c=e.target;do{if(c==t.$refs.filters)return;c=c.parentNode}while(c);1==t.clickActivated?(t.closeFilters(),t.clickActivated=0):t.clickActivated++}}))},buttonsToggle:function(){var t=this,e=document.querySelector(".menu"),c=document.querySelector("button.collections__filters-cta"),n=document.querySelector("button.search");c.addEventListener("click",(function(){e.addEventListener("click",(function(){t.closeFilters()}))})),n.addEventListener("click",(function(){e.addEventListener("click",(function(){t.toggleSearch(!1)}))}))}}),created:function(){this.$nuxt.$on("product-item-mouseenter",this.onProductHover),this.$nuxt.$on("product-item-mouseleave",this.onProductLeave),this.$nuxt.$on("layoutScroll",this.onScroll),this.initFilters(),this.updateNavActive()},mounted:function(){var t=this;console.log("Category data",this.data),this.realData=this.filteredData,setTimeout((function(){t.initScroll()}),200),this.initScroll(),this.setHeaderBackgrounded(!0),this.buttonsToggle(),this.checkClickFilters()},watch:{filteredData:function(t){var e=this;this.page=1,this.activeProduct=!1,this.hideList=!0,setTimeout((function(){e.realData=t,e.$nextTick((function(){e.$nuxt.$emit("scrollTo",0,!1,!0),e.hideList=!1}))}),400)},filters:{handler:function(t){var e={};for(var c in t)t[c].length&&(e[c]=t[c].toString());this.$router.push(this.localePath({name:"collections",query:e}))},deep:!0},$route:function(){this.updateNavActive(),this.initFilters()}},destroyed:function(){this.setNavActive({value:!1}),this.$nuxt.$off("product-item-mouseenter",this.onProductHover),this.$nuxt.$off("product-item-mouseleave",this.onProductLeave),this.$nuxt.$off("layoutScroll",this.onScroll),this.setHeaderBackgrounded(!1)}}}).call(this,c(129))},485:function(t,e,c){"use strict";var n=c(474);c.n(n).a},486:function(t,e,c){},550:function(t,e,c){"use strict";var n={props:["data","grid","container","inactiveProduct"],components:{"product-item":c(476).a},data:function(){return{nothing:!0,backgroundImage:!1}}},r=(c(485),c(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"product-list",class:"collection"==t.container?"product-list--collection":""},[c("div",{staticClass:"container",class:[t.grid?"product-list__grid":"","collection"==t.container?"container--fluid":""]},["collection"==t.container?t._l(t.data,(function(e,n){return c("div",{key:n,staticClass:"product-list__item"},[c("div",{staticClass:"product-list__item__animate"},[c("product-item",{key:n,staticClass:"product-item--collection",class:{inactive:t.inactiveProduct},attrs:{data:e,grid:t.grid}})],1)])})):t._l(t.data,(function(e,n){return c("product-item",{key:n,class:{inactive:t.inactiveProduct},attrs:{data:e,grid:t.grid}})}))],2)])}),[],!1,null,"e782a32e",null);e.a=component.exports},556:function(t,e,c){"use strict";var n=c(486);c.n(n).a},633:function(t,e,c){"use strict";c.r(e);var n=c(484).a,r=(c(556),c(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"collections"},[c("transition",{attrs:{name:"fade"}},[t.activeProduct&&t.limitedData.length>0?c("div",{staticClass:"collections__bg"},[c("span",{style:{backgroundImage:"url("+t.activeProduct.acf.settings.background_image+")"}}),t._v(" "),c("div",{staticClass:"collections__floating-text"},[c("c-floating-text",{style:{color:t.activeProduct.acf.hero.roll_color}},[t._v("\n                    "+t._s(t.activeProduct.acf.settings.name))])],1)]):t._e()]),t._v(" "),c("div",{ref:"filters",staticClass:"filters out-of-scroll",class:{active:t.activeFilter},attrs:{"data-scroll-lock-scrollable":""}},[c("div",[c("div",{staticClass:"filters__category"},[c("div",{staticClass:"filters__title"},[t._v("\n                    "+t._s(t.$t("Concept"))+"\n                ")]),t._v(" "),c("div",{staticClass:"filters__options"},t._l(t.filterConcept,(function(filter,e){return c("div",{staticClass:"filters__input"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.concept,expression:"filters.concept"}],attrs:{type:"checkbox",id:"concept"+e,name:"concept"+e},domProps:{value:filter.id,checked:Array.isArray(t.filters.concept)?t._i(t.filters.concept,filter.id)>-1:t.filters.concept},on:{change:function(e){var c=t.filters.concept,n=e.target,r=!!n.checked;if(Array.isArray(c)){var o=filter.id,l=t._i(c,o);n.checked?l<0&&t.$set(t.filters,"concept",c.concat([o])):l>-1&&t.$set(t.filters,"concept",c.slice(0,l).concat(c.slice(l+1)))}else t.$set(t.filters,"concept",r)}}}),t._v(" "),c("label",{staticClass:"icon-checked",attrs:{for:"concept"+e}},[t._v(t._s(filter.name))])])})),0)]),t._v(" "),c("div",{staticClass:"filters__category"},[c("div",{staticClass:"filters__title"},[t._v("\n                    "+t._s(t.$t("Range"))+"\n                ")]),t._v(" "),c("div",{staticClass:"filters__options"},t._l(t.filterGender,(function(filter,e){return c("div",{staticClass:"filters__input"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.gender,expression:"filters.gender"}],attrs:{type:"checkbox",id:"gender"+e,name:"gender"+e},domProps:{value:filter.id,checked:Array.isArray(t.filters.gender)?t._i(t.filters.gender,filter.id)>-1:t.filters.gender},on:{change:function(e){var c=t.filters.gender,n=e.target,r=!!n.checked;if(Array.isArray(c)){var o=filter.id,l=t._i(c,o);n.checked?l<0&&t.$set(t.filters,"gender",c.concat([o])):l>-1&&t.$set(t.filters,"gender",c.slice(0,l).concat(c.slice(l+1)))}else t.$set(t.filters,"gender",r)}}}),t._v(" "),c("label",{staticClass:"icon-checked",attrs:{for:"gender"+e}},[t._v(t._s(filter.name))])])})),0)]),t._v(" "),c("div",{staticClass:"filters__category"},[c("div",{staticClass:"filters__title"},[t._v("\n                    "+t._s(t.$t("Type"))+"\n                ")]),t._v(" "),c("div",{staticClass:"filters__options"},t._l(t.filterTechnical,(function(filter,e){return c("div",{staticClass:"filters__input"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.technical,expression:"filters.technical"}],attrs:{type:"checkbox",id:"technical"+e,name:"technical"+e},domProps:{value:filter.id,checked:Array.isArray(t.filters.technical)?t._i(t.filters.technical,filter.id)>-1:t.filters.technical},on:{change:function(e){var c=t.filters.technical,n=e.target,r=!!n.checked;if(Array.isArray(c)){var o=filter.id,l=t._i(c,o);n.checked?l<0&&t.$set(t.filters,"technical",c.concat([o])):l>-1&&t.$set(t.filters,"technical",c.slice(0,l).concat(c.slice(l+1)))}else t.$set(t.filters,"technical",r)}}}),t._v(" "),c("label",{staticClass:"icon-checked",attrs:{for:"technical"+e}},[t._v(t._s(filter.name))])])})),0)]),t._v(" "),c("c-button",{staticClass:"filters__cta active filters__cta--select",attrs:{value:t.$t("Filter")},nativeOn:{click:function(e){return t.closeFilters()}}}),t._v(" "),t.filters.concept>0||t.filters.technical>0||t.filters.gender?c("c-button",{staticClass:"filters__cta active",attrs:{value:t.$t("CLEAR FILTERS")},nativeOn:{click:function(e){return t.clearFilters()}}}):t._e(),t._v(" "),c("div",{staticClass:"burger-btn close",on:{click:function(e){return t.closeFilters()}}},[c("span",{staticClass:"stripe"}),t._v(" "),c("span",{staticClass:"stripe"}),t._v(" "),c("span",{staticClass:"stripe"})])],1)]),t._v(" "),c("button",{staticClass:"collections__filters-cta icon-parameters",class:t.activeFilter?"active":"",on:{click:function(e){return t.openFilters()}}}),t._v(" "),c("c-product-list",{ref:"list",staticClass:"collections__list",class:{inactive:t.hideList},attrs:{data:t.limitedData,inactiveProduct:!1!==t.activeProduct,grid:"true",container:"collection"}}),t._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:t.limitedData.length<=0,expression:"limitedData.length <= 0"}],staticClass:"container container--small collections__empty headline"},[t._v("\n        "+t._s(t.$t("Sorry, no results found")))]),t._v(" "),c("scroll-object",{attrs:{opacity:"true"}},[c("div",{staticClass:"loading",class:{active:t.isLoading}},[t._v("\n            "+t._s(t.$t("Loading"))+"...\n        ")])])],1)}),[],!1,null,"3137dc50",null);e.default=component.exports}}]);