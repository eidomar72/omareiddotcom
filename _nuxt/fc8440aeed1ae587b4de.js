(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{533:function(e,t,n){},598:function(e,t,n){"use strict";var o=n(533);n.n(o).a},627:function(e,t,n){"use strict";n.r(t);var o=n(30),r=(n(14),n(11),n(61),{layout:"no-scroll",nuxtI18n:{paths:{en:"/dispatch/:id",fr:"/dispatch/:id",es:"/despacho/:id",pt:"/dispatch/:id",ru:"/dispatch/:id",ar:"/dispatch/:id",cz:"/dispatch/:id",ja:"/dispatch/:id"}},asyncData:function(e){var t=e.store,n=e.error,r=e.params,l=e.app;return Promise.all([t.dispatch("fetchWPData",{context:l,type:"footer_push"}),t.dispatch("fetchWPData",{context:l,type:"dispatch",query:{slug:r.id}})]).then((function(e){var t=Object(o.a)(e,2),data=(t[0],t[1]);return new Promise((function(e){setTimeout((function(){e({data:data[0]})}),400)}))})).catch((function(e){n({statusCode:404,message:"Page not found"})}))},data:function(){return{translateList:"none",currentPlaying:"none",listItemNumber:"",groupPosition:0,ratio:1,isLoading:!0,mousePos:!1,mouseOverEnabled:!0}},components:{},mounted:function(){this.onLoad||(this.isLoading=!1);var e=this.$refs.item;if(e)if(this.listItemNumber=e.length,window.innerWidth>992)this.$el.addEventListener("wheel",this.onWheel);else{this.currentPlaying=1;for(var t=this.$refs.item,i=0;i<t.length;i++)t[i].firstChild.firstChild.play();t[0].firstChild.firstChild.play()}},methods:{onMouseEnter:function(e){e.currentTarget.firstChild.firstChild.play(),this.currentPlaying=e.currentTarget.dataset.index},onMouseLeave:function(e){e.currentTarget.firstChild.firstChild.pause(),this.mousePos=!1},onWheel:function(e){var t=this;this.mouseOverEnabled=!1,this.mousePos=!1,this.currentPlaying="",e.preventDefault(),this.translateView(this.groupPosition-(0!==e.deltaX?e.deltaX:e.deltaY),1,(function(){t.mouseOverEnabled=!0}))},translateView:function(e,t,n){this.groupPosition=Math.max(-(this.$refs.wrapper.offsetWidth-window.innerWidth),Math.min(0,e)),TweenMax.to(this.$refs.wrapper,t,{x:this.groupPosition,ease:Power4.easeOut,onComplete:function(){n&&n()}})},onMouseMove:function(e){var t=Math.max(.5,Math.min(1.5,e.x/window.innerWidth*2))-.5;this.ratio=t}},watch:{ratio:function(e){this.mouseOverEnabled&&e&&(this.groupPosition=-e*(this.$refs.wrapper.offsetWidth-window.innerWidth),new TweenMax(this.$refs.wrapper,2,{x:this.groupPosition}))}},destroyed:function(){this.$el.removeEventListener("wheel",this.onWheel)}}),l=(n(598),n(4)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.data.acf.disable_translation?n("c-redirect-post",{attrs:{lang:e.data.acf.default_lang}}):e.data?n("section",{class:e.data.acf.footer.length>3?"large":""},[n("ul",{ref:"wrapper"},[n("div",e._l(e.data.acf.footer,(function(t,o){return e.getPush(t.push)?n("scroll-object",{key:o,staticClass:"item__wrapper",attrs:{onLoad:!0}},[n("li",{ref:"item",refInFor:!0,class:{active:e.currentPlaying==o+1||"mobile"==e.deviceType||"tablet"!=e.deviceType,full:e.data.acf.footer.length<=3},attrs:{"data-index":o+1},on:{mouseenter:e.onMouseEnter,mouseleave:e.onMouseLeave,mousemove:e.onMouseMove}},[n("nuxt-link",{attrs:{to:e.localePath(e.getInternalLink(e.getPush(t.push).acf.footer_push.link))}},[e.getPush(t.push).acf.footer_push.video_files?n("video",{attrs:{src:e.getVideoUrl(e.getPush(t.push).acf.footer_push.video_files.filename),loop:"",muted:"",playsinline:"",autoplay:"mobile"==e.deviceType||"tablet"==e.deviceType},domProps:{muted:!0}}):e._e(),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.currentPlaying!=o+1&&"mobile"!=e.deviceType&&"tablet"!=e.deviceType,expression:"currentPlaying != index + 1 && deviceType != 'mobile' && deviceType != 'tablet'"}],ref:"cover",refInFor:!0,staticClass:"cover",style:{backgroundImage:"url("+e.getPush(t.push).acf.footer_push.video_cover+")"}})]),e._v(" "),n("div",{staticClass:"overlay"}),e._v(" "),n("c-title-splited",{staticClass:"title--h3",attrs:{data:e.getPush(t.push).acf.footer_push.title,onLoad:!0}})],1),e._v(" "),n("div",{staticClass:"mask",style:{transitionDelay:.05*o+"s"}})],1)]):e._e()})),1)]),e._v(" "),n("button",{staticClass:"icon-arrow-down btn-scroll",class:{active:0===e.groupPosition&&e.data.acf.footer.length>3},on:{click:function(t){return e.translateView(-300,2)}}})]):e._e()}),[],!1,null,"a5145c3c",null);t.default=component.exports}}]);