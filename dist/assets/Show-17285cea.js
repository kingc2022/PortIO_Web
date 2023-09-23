import{h as N,W as xe,r as R,X as ut,Y as vt,k as b,aW as gt,aX as ee,aY as ht,E as xt,aq as mt,B as Le,D as yt,K as Z,a1 as Ct,F as ze,ac as St,ab as wt,ap as Tt,aZ as Pt,e as n,x as l,f as T,g as W,v as Rt,i as Lt,J as $e,ay as me,aS as re,ax as zt,T as ne,y as $t,af as F,a_ as Bt,au as Wt,L as _t,ag as ye,a2 as Ce,ar as K,a5 as oe,aF as At,Q as kt,a$ as Et,aT as Mt,M,an as J,l as Vt,q as jt,s as It,o as Ft,c as Ht,a as O,w as Q,u as D,b as Gt,t as Ot}from"./index-dd49acc8.js";import{N as Dt,a as Nt}from"./text-2b5a18d6.js";import{N as Xt}from"./Input-b2aded0f.js";import"./use-locale-2069067a.js";const Ut=xe(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[xe("&::-webkit-scrollbar",{width:0,height:0})]),Yt=N({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=R(null);function a(s){!(s.currentTarget.offsetWidth<s.currentTarget.scrollWidth)||s.deltaY===0||(s.currentTarget.scrollLeft+=s.deltaY+s.deltaX,s.preventDefault())}const o=ut();return Ut.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:vt,ssr:o}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...s){var v;(v=e.value)===null||v===void 0||v.scrollTo(...s)}})},render(){return b("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var qt=/\s/;function Kt(e){for(var a=e.length;a--&&qt.test(e.charAt(a)););return a}var Jt=/^\s+/;function Qt(e){return e&&e.slice(0,Kt(e)+1).replace(Jt,"")}var Se=0/0,Zt=/^[-+]0x[0-9a-f]+$/i,ea=/^0b[01]+$/i,ta=/^0o[0-7]+$/i,aa=parseInt;function we(e){if(typeof e=="number")return e;if(gt(e))return Se;if(ee(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ee(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Qt(e);var o=ea.test(e);return o||ta.test(e)?aa(e.slice(2),o?2:8):Zt.test(e)?Se:+e}var ra=function(){return ht.Date.now()};const ie=ra;var na="Expected a function",oa=Math.max,ia=Math.min;function la(e,a,o){var f,s,v,p,u,y,x=0,C=!1,S=!1,m=!0;if(typeof e!="function")throw new TypeError(na);a=we(a)||0,ee(o)&&(C=!!o.leading,S="maxWait"in o,v=S?oa(we(o.maxWait)||0,a):v,m="trailing"in o?!!o.trailing:m);function h(c){var $=f,V=s;return f=s=void 0,x=c,p=e.apply(V,$),p}function w(c){return x=c,u=setTimeout(_,a),C?h(c):p}function L(c){var $=c-y,V=c-x,I=a-$;return S?ia(I,v-V):I}function P(c){var $=c-y,V=c-x;return y===void 0||$>=a||$<0||S&&V>=v}function _(){var c=ie();if(P(c))return z(c);u=setTimeout(_,L(c))}function z(c){return u=void 0,m&&f?h(c):(f=s=void 0,p)}function A(){u!==void 0&&clearTimeout(u),x=0,f=y=s=u=void 0}function E(){return u===void 0?p:z(ie())}function g(){var c=ie(),$=P(c);if(f=arguments,s=this,y=c,$){if(u===void 0)return w(y);if(S)return clearTimeout(u),u=setTimeout(_,a),h(y)}return u===void 0&&(u=setTimeout(_,a)),p}return g.cancel=A,g.flush=E,g}var sa="Expected a function";function le(e,a,o){var f=!0,s=!0;if(typeof e!="function")throw new TypeError(sa);return ee(o)&&(f="leading"in o?!!o.leading:f,s="trailing"in o?!!o.trailing:s),la(e,a,{leading:f,maxWait:a,trailing:s})}const da=N({name:"Add",render(){return b("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ca={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},ba=e=>{const{textColor2:a,primaryColor:o,textColorDisabled:f,closeIconColor:s,closeIconColorHover:v,closeIconColorPressed:p,closeColorHover:u,closeColorPressed:y,tabColor:x,baseColor:C,dividerColor:S,fontWeight:m,textColor1:h,borderRadius:w,fontSize:L,fontWeightStrong:P}=e;return Object.assign(Object.assign({},ca),{colorSegment:x,tabFontSizeCard:L,tabTextColorLine:h,tabTextColorActiveLine:o,tabTextColorHoverLine:o,tabTextColorDisabledLine:f,tabTextColorSegment:h,tabTextColorActiveSegment:a,tabTextColorHoverSegment:a,tabTextColorDisabledSegment:f,tabTextColorBar:h,tabTextColorActiveBar:o,tabTextColorHoverBar:o,tabTextColorDisabledBar:f,tabTextColorCard:h,tabTextColorHoverCard:h,tabTextColorActiveCard:o,tabTextColorDisabledCard:f,barColor:o,closeIconColor:s,closeIconColorHover:v,closeIconColorPressed:p,closeColorHover:u,closeColorPressed:y,closeBorderRadius:w,tabColor:x,tabColorSegment:C,tabBorderColor:S,tabFontWeightActive:m,tabFontWeight:m,tabBorderRadius:w,paneTextColor:a,fontWeightStrong:P})},fa={name:"Tabs",common:xt,self:ba},pa=fa,ce=mt("n-tabs"),Be={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ua=N({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Be,setup(e){const a=Le(ce,null);return a||yt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return b("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),va=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Pt(Be,["displayDirective"])),de=N({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:va,setup(e){const{mergedClsPrefixRef:a,valueRef:o,typeRef:f,closableRef:s,tabStyleRef:v,tabChangeIdRef:p,onBeforeLeaveRef:u,triggerRef:y,handleAdd:x,activateTab:C,handleClose:S}=Le(ce);return{trigger:y,mergedClosable:Z(()=>{if(e.internalAddable)return!1;const{closable:m}=e;return m===void 0?s.value:m}),style:v,clsPrefix:a,value:o,type:f,handleClose(m){m.stopPropagation(),!e.disabled&&S(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){x();return}const{name:m}=e,h=++p.id;if(m!==o.value){const{value:w}=u;w?Promise.resolve(w(e.name,o.value)).then(L=>{L&&p.id===h&&C(m)}):C(m)}}}},render(){const{internalAddable:e,clsPrefix:a,name:o,disabled:f,label:s,tab:v,value:p,mergedClosable:u,style:y,trigger:x,$slots:{default:C}}=this,S=s??v;return b("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?b("div",{class:`${a}-tabs-tab-pad`}):null,b("div",Object.assign({key:o,"data-name":o,"data-disabled":f?!0:void 0},Ct({class:[`${a}-tabs-tab`,p===o&&`${a}-tabs-tab--active`,f&&`${a}-tabs-tab--disabled`,u&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?void 0:y},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),b("span",{class:`${a}-tabs-tab__label`},e?b(ze,null,b("div",{class:`${a}-tabs-tab__height-placeholder`}," "),b(St,{clsPrefix:a},{default:()=>b(da,null)})):C?C():typeof S=="object"?S:wt(S??o)),u&&this.type==="card"?b(Tt,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:f}):null))}}),ga=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[l("segment-type",[n("tabs-rail",[T("&.transition-disabled","color: red;",[n("tabs-tab",`
 transition: none;
 `)])])]),l("top",[n("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),l("left",[n("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),l("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),l("right",`
 flex-direction: row-reverse;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),n("tabs-bar",`
 left: 0;
 `)]),l("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),l("flex",[n("tabs-nav",{width:"100%"},[n("tabs-wrapper",{width:"100%"},[n("tabs-tab",{marginRight:0})])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[W("prefix, suffix",`
 display: flex;
 align-items: center;
 `),W("prefix","padding-right: 16px;"),W("suffix","padding-left: 16px;")]),l("top, bottom",[n("tabs-nav-scroll-wrapper",[T("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),T("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),l("shadow-start",[T("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[T("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),l("left, right",[n("tabs-nav-scroll-wrapper",[T("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),T("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),l("shadow-start",[T("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[T("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[T("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),T("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[l("disabled",{cursor:"not-allowed"}),W("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),W("label",`
 display: flex;
 align-items: center;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[T("&.transition-disabled",`
 transition: none;
 `),l("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[T("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),T("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),T("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),T("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),T("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),l("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[T("&:hover",{color:"var(--n-tab-text-color-hover)"}),l("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),l("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[l("line-type",[l("top",[W("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 bottom: -1px;
 `)]),l("left",[W("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 right: -1px;
 `)]),l("right",[W("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 left: -1px;
 `)]),l("bottom",[W("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 top: -1px;
 `)]),W("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-bar",`
 border-radius: 0;
 `)]),l("card-type",[W("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[l("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[W("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Rt("disabled",[T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),l("closable","padding-right: 8px;"),l("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),l("disabled","color: var(--n-tab-text-color-disabled);")]),n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),l("left, right",[n("tabs-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),l("top",[l("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-bottom: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),l("left",[l("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-right: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),l("right",[l("card-type",[n("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-left: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),l("bottom",[l("card-type",[n("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-top: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ha=Object.assign(Object.assign({},$e.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),xa=N({name:"Tabs",props:ha,setup(e,{slots:a}){var o,f,s,v;const{mergedClsPrefixRef:p,inlineThemeDisabled:u}=Lt(e),y=$e("Tabs","-tabs",ga,pa,e,p),x=R(null),C=R(null),S=R(null),m=R(null),h=R(null),w=R(!0),L=R(!0),P=me(e,["labelSize","size"]),_=me(e,["activeName","value"]),z=R((f=(o=_.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&f!==void 0?f:a.default?(v=(s=re(a.default())[0])===null||s===void 0?void 0:s.props)===null||v===void 0?void 0:v.name:null),A=zt(_,z),E={id:0},g=Z(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ne(A,()=>{E.id=0,I(),be()});function c(){var t;const{value:r}=A;return r===null?null:(t=x.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${r}"]`)}function $(t){if(e.type==="card")return;const{value:r}=C;if(r&&t){const i=`${p.value}-tabs-bar--disabled`,{barWidth:d,placement:B}=e;if(t.dataset.disabled==="true"?r.classList.add(i):r.classList.remove(i),["top","bottom"].includes(B)){if(V(["top","maxHeight","height"]),typeof d=="number"&&t.offsetWidth>=d){const k=Math.floor((t.offsetWidth-d)/2)+t.offsetLeft;r.style.left=`${k}px`,r.style.maxWidth=`${d}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width="8192px",r.offsetWidth}else{if(V(["left","maxWidth","width"]),typeof d=="number"&&t.offsetHeight>=d){const k=Math.floor((t.offsetHeight-d)/2)+t.offsetTop;r.style.top=`${k}px`,r.style.maxHeight=`${d}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height="8192px",r.offsetHeight}}}function V(t){const{value:r}=C;if(r)for(const i of t)r.style[i]=""}function I(){if(e.type==="card")return;const t=c();t&&$(t)}function be(t){var r;const i=(r=h.value)===null||r===void 0?void 0:r.$el;if(!i)return;const d=c();if(!d)return;const{scrollLeft:B,offsetWidth:k}=i,{offsetLeft:G,offsetWidth:Y}=d;B>G?i.scrollTo({top:0,left:G,behavior:"smooth"}):G+Y>B+k&&i.scrollTo({top:0,left:G+Y-k,behavior:"smooth"})}const X=R(null);let te=0,j=null;function We(t){const r=X.value;if(r){te=t.getBoundingClientRect().height;const i=`${te}px`,d=()=>{r.style.height=i,r.style.maxHeight=i};j?(d(),j(),j=null):j=d}}function _e(t){const r=X.value;if(r){const i=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,r.style.maxHeight=`${i}px`,r.style.height=`${Math.max(te,i)}px`};j?(j(),j=null,d()):j=d}}function Ae(){const t=X.value;t&&(t.style.maxHeight="",t.style.height="")}const fe={value:[]},pe=R("next");function ke(t){const r=A.value;let i="next";for(const d of fe.value){if(d===r)break;if(d===t){i="prev";break}}pe.value=i,Ee(t)}function Ee(t){const{onActiveNameChange:r,onUpdateValue:i,"onUpdate:value":d}=e;r&&K(r,t),i&&K(i,t),d&&K(d,t),z.value=t}function Me(t){const{onClose:r}=e;r&&K(r,t)}function ue(){const{value:t}=C;if(!t)return;const r="transition-disabled";t.classList.add(r),I(),t.classList.remove(r)}let ve=0;function Ve(t){var r;if(t.contentRect.width===0&&t.contentRect.height===0||ve===t.contentRect.width)return;ve=t.contentRect.width;const{type:i}=e;(i==="line"||i==="bar")&&ue(),i!=="segment"&&ae((r=h.value)===null||r===void 0?void 0:r.$el)}const je=le(Ve,64);ne([()=>e.justifyContent,()=>e.size],()=>{oe(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ue()})});const U=R(!1);function Ie(t){var r;const{target:i,contentRect:{width:d}}=t,B=i.parentElement.offsetWidth;if(!U.value)B<d&&(U.value=!0);else{const{value:k}=m;if(!k)return;B-d>k.$el.offsetWidth&&(U.value=!1)}ae((r=h.value)===null||r===void 0?void 0:r.$el)}const Fe=le(Ie,64);function He(){const{onAdd:t}=e;t&&t(),oe(()=>{const r=c(),{value:i}=h;!r||!i||i.scrollTo({left:r.offsetLeft,top:0,behavior:"smooth"})})}function ae(t){if(!t)return;const{placement:r}=e;if(r==="top"||r==="bottom"){const{scrollLeft:i,scrollWidth:d,offsetWidth:B}=t;w.value=i<=0,L.value=i+B>=d}else{const{scrollTop:i,scrollHeight:d,offsetHeight:B}=t;w.value=i<=0,L.value=i+B>=d}}const Ge=le(t=>{ae(t.target)},64);$t(ce,{triggerRef:F(e,"trigger"),tabStyleRef:F(e,"tabStyle"),paneClassRef:F(e,"paneClass"),paneStyleRef:F(e,"paneStyle"),mergedClsPrefixRef:p,typeRef:F(e,"type"),closableRef:F(e,"closable"),valueRef:A,tabChangeIdRef:E,onBeforeLeaveRef:F(e,"onBeforeLeave"),activateTab:ke,handleClose:Me,handleAdd:He}),Bt(()=>{I(),be()}),Wt(()=>{const{value:t}=S;if(!t)return;const{value:r}=p,i=`${r}-tabs-nav-scroll-wrapper--shadow-start`,d=`${r}-tabs-nav-scroll-wrapper--shadow-end`;w.value?t.classList.remove(i):t.classList.add(i),L.value?t.classList.remove(d):t.classList.add(d)});const ge=R(null);ne(A,()=>{if(e.type==="segment"){const t=ge.value;t&&oe(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Oe={syncBarPosition:()=>{I()}},he=Z(()=>{const{value:t}=P,{type:r}=e,i={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[r],d=`${t}${i}`,{self:{barColor:B,closeIconColor:k,closeIconColorHover:G,closeIconColorPressed:Y,tabColor:De,tabBorderColor:Ne,paneTextColor:Xe,tabFontWeight:Ue,tabBorderRadius:Ye,tabFontWeightActive:qe,colorSegment:Ke,fontWeightStrong:Je,tabColorSegment:Qe,closeSize:Ze,closeIconSize:et,closeColorHover:tt,closeColorPressed:at,closeBorderRadius:rt,[M("panePadding",t)]:q,[M("tabPadding",d)]:nt,[M("tabPaddingVertical",d)]:ot,[M("tabGap",d)]:it,[M("tabGap",`${d}Vertical`)]:lt,[M("tabTextColor",r)]:st,[M("tabTextColorActive",r)]:dt,[M("tabTextColorHover",r)]:ct,[M("tabTextColorDisabled",r)]:bt,[M("tabFontSize",t)]:ft},common:{cubicBezierEaseInOut:pt}}=y.value;return{"--n-bezier":pt,"--n-color-segment":Ke,"--n-bar-color":B,"--n-tab-font-size":ft,"--n-tab-text-color":st,"--n-tab-text-color-active":dt,"--n-tab-text-color-disabled":bt,"--n-tab-text-color-hover":ct,"--n-pane-text-color":Xe,"--n-tab-border-color":Ne,"--n-tab-border-radius":Ye,"--n-close-size":Ze,"--n-close-icon-size":et,"--n-close-color-hover":tt,"--n-close-color-pressed":at,"--n-close-border-radius":rt,"--n-close-icon-color":k,"--n-close-icon-color-hover":G,"--n-close-icon-color-pressed":Y,"--n-tab-color":De,"--n-tab-font-weight":Ue,"--n-tab-font-weight-active":qe,"--n-tab-padding":nt,"--n-tab-padding-vertical":ot,"--n-tab-gap":it,"--n-tab-gap-vertical":lt,"--n-pane-padding-left":J(q,"left"),"--n-pane-padding-right":J(q,"right"),"--n-pane-padding-top":J(q,"top"),"--n-pane-padding-bottom":J(q,"bottom"),"--n-font-weight-strong":Je,"--n-tab-color-segment":Qe}}),H=u?_t("tabs",Z(()=>`${P.value[0]}${e.type[0]}`),he,e):void 0;return Object.assign({mergedClsPrefix:p,mergedValue:A,renderedNames:new Set,tabsRailElRef:ge,tabsPaneWrapperRef:X,tabsElRef:x,barElRef:C,addTabInstRef:m,xScrollInstRef:h,scrollWrapperElRef:S,addTabFixed:U,tabWrapperStyle:g,handleNavResize:je,mergedSize:P,handleScroll:Ge,handleTabsResize:Fe,cssVars:u?void 0:he,themeClass:H==null?void 0:H.themeClass,animationDirection:pe,renderNameListRef:fe,onAnimationBeforeLeave:We,onAnimationEnter:_e,onAnimationAfterEnter:Ae,onRender:H==null?void 0:H.onRender},Oe)},render(){const{mergedClsPrefix:e,type:a,placement:o,addTabFixed:f,addable:s,mergedSize:v,renderNameListRef:p,onRender:u,paneWrapperClass:y,paneWrapperStyle:x,$slots:{default:C,prefix:S,suffix:m}}=this;u==null||u();const h=C?re(C()).filter(g=>g.type.__TAB_PANE__===!0):[],w=C?re(C()).filter(g=>g.type.__TAB__===!0):[],L=!w.length,P=a==="card",_=a==="segment",z=!P&&!_&&this.justifyContent;p.value=[];const A=()=>{const g=b("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},z?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),L?h.map((c,$)=>(p.value.push(c.props.name),se(b(de,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0&&(!z||z==="center"||z==="start"||z==="end")}),c.children?{default:c.children.tab}:void 0)))):w.map((c,$)=>(p.value.push(c.props.name),se($!==0&&!z?Re(c):c))),!f&&s&&P?Pe(s,(L?h.length:w.length)!==0):null,z?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return b("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&s?b(Ce,{onResize:this.handleTabsResize},{default:()=>g}):g,P?b("div",{class:`${e}-tabs-pad`}):null,P?null:b("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},E=_?"top":o;return b("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${v}-size`,z&&`${e}-tabs--flex`,`${e}-tabs--${E}`],style:this.cssVars},b("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav--${E}`,`${e}-tabs-nav`]},ye(S,g=>g&&b("div",{class:`${e}-tabs-nav__prefix`},g)),_?b("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},L?h.map((g,c)=>(p.value.push(g.props.name),b(de,Object.assign({},g.props,{internalCreatedByPane:!0,internalLeftPadded:c!==0}),g.children?{default:g.children.tab}:void 0))):w.map((g,c)=>(p.value.push(g.props.name),c===0?g:Re(g)))):b(Ce,{onResize:this.handleNavResize},{default:()=>b("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(E)?b(Yt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:A}):b("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},A()))}),f&&s&&P?Pe(s,!0):null,ye(m,g=>g&&b("div",{class:`${e}-tabs-nav__suffix`},g))),L&&(this.animated&&(E==="top"||E==="bottom")?b("div",{ref:"tabsPaneWrapperRef",style:x,class:[`${e}-tabs-pane-wrapper`,y]},Te(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Te(h,this.mergedValue,this.renderedNames)))}});function Te(e,a,o,f,s,v,p){const u=[];return e.forEach(y=>{const{name:x,displayDirective:C,"display-directive":S}=y.props,m=w=>C===w||S===w,h=a===x;if(y.key!==void 0&&(y.key=x),h||m("show")||m("show:lazy")&&o.has(x)){o.has(x)||o.add(x);const w=!m("if");u.push(w?At(y,[[kt,h]]):y)}}),p?b(Et,{name:`${p}-transition`,onBeforeLeave:f,onEnter:s,onAfterEnter:v},{default:()=>u}):u}function Pe(e,a){return b(de,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function Re(e){const a=Mt(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function se(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const wa={__name:"Show",setup(e){const a=R({}),o=R(""),f=Vt();jt.get(`/tunnels/${It.currentRoute.value.params.id}`).then(v=>{a.value=v.data,o.value=a.value.config.server+`

`+a.value.config.client});function s(v){navigator.clipboard.writeText(v),f.success("复制成功")}return(v,p)=>(Ft(),Ht(ze,null,[O(D(Nt),{prefix:"bar"},{default:Q(()=>[O(D(Dt),{type:"primary"},{default:Q(()=>[Gt(Ot(a.value.name),1)]),_:1})]),_:1}),O(D(xa),{animated:"",type:"line"},{default:Q(()=>[O(D(ua),{name:"config",tab:"配置文件"},{default:Q(()=>[O(D(Xt),{value:o.value,"onUpdate:value":p[0]||(p[0]=u=>o.value=u),placeholder:"加载中",readonly:"",rows:"15",type:"textarea",onClick:p[1]||(p[1]=u=>s(o.value))},null,8,["value"])]),_:1})]),_:1})],64))}};export{wa as default};
