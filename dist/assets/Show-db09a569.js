import{e as U,ay as ge,k as T,az as ut,aA as pt,l as b,r as vt,aB as Te,aa as ht,a4 as ze,a6 as gt,i as Z,m as mt,J as $e,p as xt,aC as yt,n as wt,aD as Ct,c as r,b as i,d as R,a as L,X as Rt,u as St,g as Pe,am as me,av as ae,aE as Tt,a8 as re,Y as zt,ag as O,aF as $t,y as Pt,j as _t,q as xe,au as ye,aG as q,aH as ne,aI as Wt,aq as Lt,aJ as At,aw as Bt,aK as kt,w as j,v as J,A as Et,T as jt,U as It,C as Ht,D as Ft,F as D,G as Q,H as V,K as Ot,L as Mt}from"./index-187f4365.js";import{t as we}from"./toNumber-f7eabace.js";import{N as Nt,a as Dt}from"./text-4cdf836a.js";import{N as Vt}from"./Input-2e67a2ba.js";const Ut=ge(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[ge("&::-webkit-scrollbar",{width:0,height:0})]),Xt=U({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=T(null);function n(s){!(s.currentTarget.offsetWidth<s.currentTarget.scrollWidth)||s.deltaY===0||(s.currentTarget.scrollLeft+=s.deltaY+s.deltaX,s.preventDefault())}const l=ut();return Ut.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:pt,ssr:l}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...s){var h;(h=e.value)===null||h===void 0||h.scrollTo(...s)}})},render(){return b("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Gt=function(){return vt.Date.now()};const oe=Gt;var Kt="Expected a function",Yt=Math.max,qt=Math.min;function Jt(e,n,l){var p,s,h,f,u,g,m=0,y=!1,w=!1,x=!0;if(typeof e!="function")throw new TypeError(Kt);n=we(n)||0,Te(l)&&(y=!!l.leading,w="maxWait"in l,h=w?Yt(we(l.maxWait)||0,n):h,x="trailing"in l?!!l.trailing:x);function C(c){var $=p,I=s;return p=s=void 0,m=c,f=e.apply(I,$),f}function S(c){return m=c,u=setTimeout(A,n),y?C(c):f}function W(c){var $=c-g,I=c-m,F=n-$;return w?qt(F,h-I):F}function P(c){var $=c-g,I=c-m;return g===void 0||$>=n||$<0||w&&I>=h}function A(){var c=oe();if(P(c))return z(c);u=setTimeout(A,W(c))}function z(c){return u=void 0,x&&p?C(c):(p=s=void 0,f)}function B(){u!==void 0&&clearTimeout(u),m=0,p=g=s=u=void 0}function E(){return u===void 0?f:z(oe())}function v(){var c=oe(),$=P(c);if(p=arguments,s=this,g=c,$){if(u===void 0)return S(g);if(w)return clearTimeout(u),u=setTimeout(A,n),C(g)}return u===void 0&&(u=setTimeout(A,n)),f}return v.cancel=B,v.flush=E,v}var Qt="Expected a function";function ie(e,n,l){var p=!0,s=!0;if(typeof e!="function")throw new TypeError(Qt);return Te(l)&&(p="leading"in l?!!l.leading:p,s="trailing"in l?!!l.trailing:s),Jt(e,n,{leading:p,maxWait:n,trailing:s})}const Zt=U({name:"Add",render(){return b("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),de=ht("n-tabs"),_e={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ea=U({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:_e,setup(e){const n=ze(de,null);return n||gt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return b("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ta=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Ct(_e,["displayDirective"])),le=U({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ta,setup(e){const{mergedClsPrefixRef:n,valueRef:l,typeRef:p,closableRef:s,tabStyleRef:h,tabChangeIdRef:f,onBeforeLeaveRef:u,triggerRef:g,handleAdd:m,activateTab:y,handleClose:w}=ze(de);return{trigger:g,mergedClosable:Z(()=>{if(e.internalAddable)return!1;const{closable:x}=e;return x===void 0?s.value:x}),style:h,clsPrefix:n,value:l,type:p,handleClose(x){x.stopPropagation(),!e.disabled&&w(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}const{name:x}=e,C=++f.id;if(x!==l.value){const{value:S}=u;S?Promise.resolve(S(e.name,l.value)).then(W=>{W&&f.id===C&&y(x)}):y(x)}}}},render(){const{internalAddable:e,clsPrefix:n,name:l,disabled:p,label:s,tab:h,value:f,mergedClosable:u,style:g,trigger:m,$slots:{default:y}}=this,w=s??h;return b("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?b("div",{class:`${n}-tabs-tab-pad`}):null,b("div",Object.assign({key:l,"data-name":l,"data-disabled":p?!0:void 0},mt({class:[`${n}-tabs-tab`,f===l&&`${n}-tabs-tab--active`,p&&`${n}-tabs-tab--disabled`,u&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?void 0:g},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),b("span",{class:`${n}-tabs-tab__label`},e?b($e,null,b("div",{class:`${n}-tabs-tab__height-placeholder`}," "),b(xt,{clsPrefix:n},{default:()=>b(Zt,null)})):y?y():typeof w=="object"?w:yt(w??l)),u&&this.type==="card"?b(wt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:p}):null))}}),aa=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("segment-type",[r("tabs-rail",[R("&.transition-disabled","color: red;",[r("tabs-tab",`
 transition: none;
 `)])])]),i("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),i("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),i("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),i("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),i("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),i("flex",[r("tabs-nav",{width:"100%"},[r("tabs-wrapper",{width:"100%"},[r("tabs-tab",{marginRight:0})])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[L("prefix, suffix",`
 display: flex;
 align-items: center;
 `),L("prefix","padding-right: 16px;"),L("suffix","padding-left: 16px;")]),i("top, bottom",[r("tabs-nav-scroll-wrapper",[R("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),R("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),i("shadow-start",[R("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[R("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),i("left, right",[r("tabs-nav-scroll-wrapper",[R("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),R("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),i("shadow-start",[R("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[R("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[R("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),R("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
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
 `,[i("disabled",{cursor:"not-allowed"}),L("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),L("label",`
 display: flex;
 align-items: center;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[R("&.transition-disabled",`
 transition: none;
 `),i("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[R("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),R("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),R("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),R("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),R("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),i("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[R("&:hover",{color:"var(--n-tab-text-color-hover)"}),i("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),i("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[i("line-type",[i("top",[L("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),i("left",[L("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),i("right",[L("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),i("bottom",[L("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),i("card-type",[L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
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
 `,[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[L("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Rt("disabled",[R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),i("closable","padding-right: 8px;"),i("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),i("disabled","color: var(--n-tab-text-color-disabled);")]),r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),i("left, right",[r("tabs-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),i("top",[i("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),i("left",[i("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),i("right",[i("card-type",[r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),i("bottom",[i("card-type",[r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ra=Object.assign(Object.assign({},Pe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),na=U({name:"Tabs",props:ra,setup(e,{slots:n}){var l,p,s,h;const{mergedClsPrefixRef:f,inlineThemeDisabled:u}=St(e),g=Pe("Tabs","-tabs",aa,kt,e,f),m=T(null),y=T(null),w=T(null),x=T(null),C=T(null),S=T(!0),W=T(!0),P=me(e,["labelSize","size"]),A=me(e,["activeName","value"]),z=T((p=(l=A.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&p!==void 0?p:n.default?(h=(s=ae(n.default())[0])===null||s===void 0?void 0:s.props)===null||h===void 0?void 0:h.name:null),B=Tt(A,z),E={id:0},v=Z(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});re(B,()=>{E.id=0,F(),ce()});function c(){var t;const{value:a}=B;return a===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function $(t){if(e.type==="card")return;const{value:a}=y;if(a&&t){const o=`${f.value}-tabs-bar--disabled`,{barWidth:d,placement:_}=e;if(t.dataset.disabled==="true"?a.classList.add(o):a.classList.remove(o),["top","bottom"].includes(_)){if(I(["top","maxHeight","height"]),typeof d=="number"&&t.offsetWidth>=d){const k=Math.floor((t.offsetWidth-d)/2)+t.offsetLeft;a.style.left=`${k}px`,a.style.maxWidth=`${d}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(I(["left","maxWidth","width"]),typeof d=="number"&&t.offsetHeight>=d){const k=Math.floor((t.offsetHeight-d)/2)+t.offsetTop;a.style.top=`${k}px`,a.style.maxHeight=`${d}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function I(t){const{value:a}=y;if(a)for(const o of t)a.style[o]=""}function F(){if(e.type==="card")return;const t=c();t&&$(t)}function ce(t){var a;const o=(a=C.value)===null||a===void 0?void 0:a.$el;if(!o)return;const d=c();if(!d)return;const{scrollLeft:_,offsetWidth:k}=o,{offsetLeft:N,offsetWidth:K}=d;_>N?o.scrollTo({top:0,left:N,behavior:"smooth"}):N+K>_+k&&o.scrollTo({top:0,left:N+K-k,behavior:"smooth"})}const X=T(null);let ee=0,H=null;function We(t){const a=X.value;if(a){ee=t.getBoundingClientRect().height;const o=`${ee}px`,d=()=>{a.style.height=o,a.style.maxHeight=o};H?(d(),H(),H=null):H=d}}function Le(t){const a=X.value;if(a){const o=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(ee,o)}px`};H?(H(),H=null,d()):H=d}}function Ae(){const t=X.value;t&&(t.style.maxHeight="",t.style.height="")}const be={value:[]},fe=T("next");function Be(t){const a=B.value;let o="next";for(const d of be.value){if(d===a)break;if(d===t){o="prev";break}}fe.value=o,ke(t)}function ke(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":d}=e;a&&q(a,t),o&&q(o,t),d&&q(d,t),z.value=t}function Ee(t){const{onClose:a}=e;a&&q(a,t)}function ue(){const{value:t}=y;if(!t)return;const a="transition-disabled";t.classList.add(a),F(),t.classList.remove(a)}let pe=0;function je(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||pe===t.contentRect.width)return;pe=t.contentRect.width;const{type:o}=e;(o==="line"||o==="bar")&&ue(),o!=="segment"&&te((a=C.value)===null||a===void 0?void 0:a.$el)}const Ie=ie(je,64);re([()=>e.justifyContent,()=>e.size],()=>{ne(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ue()})});const G=T(!1);function He(t){var a;const{target:o,contentRect:{width:d}}=t,_=o.parentElement.offsetWidth;if(!G.value)_<d&&(G.value=!0);else{const{value:k}=x;if(!k)return;_-d>k.$el.offsetWidth&&(G.value=!1)}te((a=C.value)===null||a===void 0?void 0:a.$el)}const Fe=ie(He,64);function Oe(){const{onAdd:t}=e;t&&t(),ne(()=>{const a=c(),{value:o}=C;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function te(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:d,offsetWidth:_}=t;S.value=o<=0,W.value=o+_>=d}else{const{scrollTop:o,scrollHeight:d,offsetHeight:_}=t;S.value=o<=0,W.value=o+_>=d}}const Me=ie(t=>{te(t.target)},64);zt(de,{triggerRef:O(e,"trigger"),tabStyleRef:O(e,"tabStyle"),paneClassRef:O(e,"paneClass"),paneStyleRef:O(e,"paneStyle"),mergedClsPrefixRef:f,typeRef:O(e,"type"),closableRef:O(e,"closable"),valueRef:B,tabChangeIdRef:E,onBeforeLeaveRef:O(e,"onBeforeLeave"),activateTab:Be,handleClose:Ee,handleAdd:Oe}),$t(()=>{F(),ce()}),Pt(()=>{const{value:t}=w;if(!t)return;const{value:a}=f,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,d=`${a}-tabs-nav-scroll-wrapper--shadow-end`;S.value?t.classList.remove(o):t.classList.add(o),W.value?t.classList.remove(d):t.classList.add(d)});const ve=T(null);re(B,()=>{if(e.type==="segment"){const t=ve.value;t&&ne(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Ne={syncBarPosition:()=>{F()}},he=Z(()=>{const{value:t}=P,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],d=`${t}${o}`,{self:{barColor:_,closeIconColor:k,closeIconColorHover:N,closeIconColorPressed:K,tabColor:De,tabBorderColor:Ve,paneTextColor:Ue,tabFontWeight:Xe,tabBorderRadius:Ge,tabFontWeightActive:Ke,colorSegment:Ye,fontWeightStrong:qe,tabColorSegment:Je,closeSize:Qe,closeIconSize:Ze,closeColorHover:et,closeColorPressed:tt,closeBorderRadius:at,[j("panePadding",t)]:Y,[j("tabPadding",d)]:rt,[j("tabPaddingVertical",d)]:nt,[j("tabGap",d)]:ot,[j("tabGap",`${d}Vertical`)]:it,[j("tabTextColor",a)]:st,[j("tabTextColorActive",a)]:lt,[j("tabTextColorHover",a)]:dt,[j("tabTextColorDisabled",a)]:ct,[j("tabFontSize",t)]:bt},common:{cubicBezierEaseInOut:ft}}=g.value;return{"--n-bezier":ft,"--n-color-segment":Ye,"--n-bar-color":_,"--n-tab-font-size":bt,"--n-tab-text-color":st,"--n-tab-text-color-active":lt,"--n-tab-text-color-disabled":ct,"--n-tab-text-color-hover":dt,"--n-pane-text-color":Ue,"--n-tab-border-color":Ve,"--n-tab-border-radius":Ge,"--n-close-size":Qe,"--n-close-icon-size":Ze,"--n-close-color-hover":et,"--n-close-color-pressed":tt,"--n-close-border-radius":at,"--n-close-icon-color":k,"--n-close-icon-color-hover":N,"--n-close-icon-color-pressed":K,"--n-tab-color":De,"--n-tab-font-weight":Xe,"--n-tab-font-weight-active":Ke,"--n-tab-padding":rt,"--n-tab-padding-vertical":nt,"--n-tab-gap":ot,"--n-tab-gap-vertical":it,"--n-pane-padding-left":J(Y,"left"),"--n-pane-padding-right":J(Y,"right"),"--n-pane-padding-top":J(Y,"top"),"--n-pane-padding-bottom":J(Y,"bottom"),"--n-font-weight-strong":qe,"--n-tab-color-segment":Je}}),M=u?_t("tabs",Z(()=>`${P.value[0]}${e.type[0]}`),he,e):void 0;return Object.assign({mergedClsPrefix:f,mergedValue:B,renderedNames:new Set,tabsRailElRef:ve,tabsPaneWrapperRef:X,tabsElRef:m,barElRef:y,addTabInstRef:x,xScrollInstRef:C,scrollWrapperElRef:w,addTabFixed:G,tabWrapperStyle:v,handleNavResize:Ie,mergedSize:P,handleScroll:Me,handleTabsResize:Fe,cssVars:u?void 0:he,themeClass:M==null?void 0:M.themeClass,animationDirection:fe,renderNameListRef:be,onAnimationBeforeLeave:We,onAnimationEnter:Le,onAnimationAfterEnter:Ae,onRender:M==null?void 0:M.onRender},Ne)},render(){const{mergedClsPrefix:e,type:n,placement:l,addTabFixed:p,addable:s,mergedSize:h,renderNameListRef:f,onRender:u,paneWrapperClass:g,paneWrapperStyle:m,$slots:{default:y,prefix:w,suffix:x}}=this;u==null||u();const C=y?ae(y()).filter(v=>v.type.__TAB_PANE__===!0):[],S=y?ae(y()).filter(v=>v.type.__TAB__===!0):[],W=!S.length,P=n==="card",A=n==="segment",z=!P&&!A&&this.justifyContent;f.value=[];const B=()=>{const v=b("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},z?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),W?C.map((c,$)=>(f.value.push(c.props.name),se(b(le,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0&&(!z||z==="center"||z==="start"||z==="end")}),c.children?{default:c.children.tab}:void 0)))):S.map((c,$)=>(f.value.push(c.props.name),se($!==0&&!z?Se(c):c))),!p&&s&&P?Re(s,(W?C.length:S.length)!==0):null,z?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return b("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&s?b(ye,{onResize:this.handleTabsResize},{default:()=>v}):v,P?b("div",{class:`${e}-tabs-pad`}):null,P?null:b("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},E=A?"top":l;return b("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${h}-size`,z&&`${e}-tabs--flex`,`${e}-tabs--${E}`],style:this.cssVars},b("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${E}`,`${e}-tabs-nav`]},xe(w,v=>v&&b("div",{class:`${e}-tabs-nav__prefix`},v)),A?b("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},W?C.map((v,c)=>(f.value.push(v.props.name),b(le,Object.assign({},v.props,{internalCreatedByPane:!0,internalLeftPadded:c!==0}),v.children?{default:v.children.tab}:void 0))):S.map((v,c)=>(f.value.push(v.props.name),c===0?v:Se(v)))):b(ye,{onResize:this.handleNavResize},{default:()=>b("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(E)?b(Xt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:B}):b("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},B()))}),p&&s&&P?Re(s,!0):null,xe(x,v=>v&&b("div",{class:`${e}-tabs-nav__suffix`},v))),W&&(this.animated&&(E==="top"||E==="bottom")?b("div",{ref:"tabsPaneWrapperRef",style:m,class:[`${e}-tabs-pane-wrapper`,g]},Ce(C,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ce(C,this.mergedValue,this.renderedNames)))}});function Ce(e,n,l,p,s,h,f){const u=[];return e.forEach(g=>{const{name:m,displayDirective:y,"display-directive":w}=g.props,x=S=>y===S||w===S,C=n===m;if(g.key!==void 0&&(g.key=m),C||x("show")||x("show:lazy")&&l.has(m)){l.has(m)||l.add(m);const S=!x("if");u.push(S?Wt(g,[[Lt,C]]):g)}}),f?b(At,{name:`${f}-transition`,onBeforeLeave:p,onEnter:s,onAfterEnter:h},{default:()=>u}):u}function Re(e,n){return b(le,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Se(e){const n=Bt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function se(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const da={__name:"Show",setup(e){const n=T({}),l=T(""),p=Et();jt.get(`/tunnels/${It.currentRoute.value.params.id}`).then(h=>{n.value=h.data,l.value=n.value.config.server+`

`+n.value.config.client});function s(h){navigator.clipboard.writeText(h),p.success("复制成功")}return(h,f)=>(Ht(),Ft($e,null,[D(V(Dt),{prefix:"bar"},{default:Q(()=>[D(V(Nt),{type:"primary"},{default:Q(()=>[Ot(Mt(n.value.name),1)]),_:1})]),_:1}),D(V(na),{animated:"",type:"line"},{default:Q(()=>[D(V(ea),{name:"config",tab:"配置文件"},{default:Q(()=>[D(V(Vt),{value:l.value,"onUpdate:value":f[0]||(f[0]=u=>l.value=u),placeholder:"加载中",readonly:"",rows:"15",type:"textarea",onClick:f[1]||(f[1]=u=>s(l.value))},null,8,["value"])]),_:1})]),_:1})],64))}};export{da as default};
