import{r as ue,t as L,c as C,a as v,b as H,f as de,d as fe,e as E,u as Q,g as I,h as X,i as R,j as Y,k as M,l as i,N as ve,m as me,n as he,o as ge,p as be,E as pe,W as xe,I as _e,S as Ce,q as w,s as ze,v as ye,w as p,x as Z,y as Ne,z as we,A as Re,B as S,C as O,D as j,F as d,G as f,H as s,J as Se,K as _,L as P,M as W,O as D,P as Ie,Q as G,R as T,T as U,U as Te}from"./index-187f4365.js";import{u as Ae}from"./composables-fe2e51c2.js";import{u as Fe,N as B,a as $e,b as ke}from"./text-4cdf836a.js";import{N as q,a as Pe}from"./Grid-6c6ed78e.js";import{t as ee}from"./toNumber-f7eabace.js";import"./get-slot-1efb97e5.js";var K=1/0,Be=17976931348623157e292;function Ee(e){if(!e)return e===0?e:0;if(e=ee(e),e===K||e===-K){var t=e<0?-1:1;return t*Be}return e===e?e:0}function Me(e){var t=Ee(e),o=t%1;return t===t?o?t-o:t:0}var Ve=ue.isFinite,Le=Math.min;function He(e){var t=Math[e];return function(o,n){if(o=ee(o),n=n==null?0:Le(Me(n),292),n&&Ve(o)){var l=(L(o)+"e").split("e"),c=t(l[0]+"e"+(+l[1]+n));return l=(L(c)+"e").split("e"),+(l[0]+"e"+(+l[1]-n))}return t(o)}}var Oe=He("round");const je=Oe,We=C("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[v("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),H("closable",[C("alert-body",[v("title",`
 padding-right: 24px;
 `)])]),v("icon",{color:"var(--n-icon-color)"}),C("alert-body",{padding:"var(--n-padding)"},[v("title",{color:"var(--n-title-text-color)"}),v("content",{color:"var(--n-content-text-color)"})]),de({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),v("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),v("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),H("show-icon",[C("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),C("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[v("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[fe("& +",[v("content",{marginTop:"9px"})])]),v("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),v("icon",{transition:"color .3s var(--n-bezier)"})]),De=Object.assign(Object.assign({},I.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),Ge=E({name:"Alert",inheritAttrs:!1,props:De,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:o,inlineThemeDisabled:n,mergedRtlRef:l}=Q(e),c=I("Alert","-alert",We,ze,e,t),r=X("Alert",l,t),m=R(()=>{const{common:{cubicBezierEaseInOut:h},self:a}=c.value,{fontSize:y,borderRadius:N,titleFontWeight:F,lineHeight:$,iconSize:k,iconMargin:V,iconMarginRtl:te,closeIconSize:ne,closeBorderRadius:oe,closeSize:re,closeMargin:ae,closeMarginRtl:se,padding:ie}=a,{type:b}=e,{left:le,right:ce}=ye(V);return{"--n-bezier":h,"--n-color":a[p("color",b)],"--n-close-icon-size":ne,"--n-close-border-radius":oe,"--n-close-color-hover":a[p("closeColorHover",b)],"--n-close-color-pressed":a[p("closeColorPressed",b)],"--n-close-icon-color":a[p("closeIconColor",b)],"--n-close-icon-color-hover":a[p("closeIconColorHover",b)],"--n-close-icon-color-pressed":a[p("closeIconColorPressed",b)],"--n-icon-color":a[p("iconColor",b)],"--n-border":a[p("border",b)],"--n-title-text-color":a[p("titleTextColor",b)],"--n-content-text-color":a[p("contentTextColor",b)],"--n-line-height":$,"--n-border-radius":N,"--n-font-size":y,"--n-title-font-weight":F,"--n-icon-size":k,"--n-icon-margin":V,"--n-icon-margin-rtl":te,"--n-close-size":re,"--n-close-margin":ae,"--n-close-margin-rtl":se,"--n-padding":ie,"--n-icon-margin-left":le,"--n-icon-margin-right":ce}}),g=n?Y("alert",R(()=>e.type[0]),m,e):void 0,x=M(!0),z=()=>{const{onAfterLeave:h,onAfterHide:a}=e;h&&h(),a&&a()};return{rtlEnabled:r,mergedClsPrefix:t,mergedBordered:o,visible:x,handleCloseClick:()=>{var h;Promise.resolve((h=e.onClose)===null||h===void 0?void 0:h.call(e)).then(a=>{a!==!1&&(x.value=!1)})},handleAfterLeave:()=>{z()},mergedTheme:c,cssVars:n?void 0:m,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),i(ve,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:t,$slots:o}=this,n={class:[`${t}-alert`,this.themeClass,this.closable&&`${t}-alert--closable`,this.showIcon&&`${t}-alert--show-icon`,this.rtlEnabled&&`${t}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?i("div",Object.assign({},me(this.$attrs,n)),this.closable&&i(he,{clsPrefix:t,class:`${t}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&i("div",{class:`${t}-alert__border`}),this.showIcon&&i("div",{class:`${t}-alert__icon`,"aria-hidden":"true"},ge(o.icon,()=>[i(be,{clsPrefix:t},{default:()=>{switch(this.type){case"success":return i(Ce,null);case"info":return i(_e,null);case"warning":return i(xe,null);case"error":return i(pe,null);default:return null}}})])),i("div",{class:[`${t}-alert-body`,this.mergedBordered&&`${t}-alert-body--bordered`]},w(o.header,l=>{const c=l||this.title;return c?i("div",{class:`${t}-alert-body__title`},c):null}),o.default&&i("div",{class:`${t}-alert-body__content`},o))):null}})}}),Ue=e=>1-Math.pow(1-e,5);function qe(e){const{from:t,to:o,duration:n,onUpdate:l,onFinish:c}=e,r=()=>{const g=performance.now(),x=Math.min(g-m,n),z=t+(o-t)*Ue(x/n);if(x===n){c();return}l(z),requestAnimationFrame(r)},m=performance.now();r()}const Ke={to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},Je=E({name:"NumberAnimation",props:Ke,setup(e){const{localeRef:t}=Fe("name"),{duration:o}=e,n=M(e.from),l=R(()=>{const{locale:u}=e;return u!==void 0?u:t.value});let c=!1;const r=u=>{n.value=u},m=()=>{var u;n.value=e.to,c=!1,(u=e.onFinish)===null||u===void 0||u.call(e)},g=(u=e.from,h=e.to)=>{c=!0,n.value=e.from,u!==h&&qe({from:u,to:h,duration:o,onUpdate:r,onFinish:m})},x=R(()=>{var u;const a=je(n.value,e.precision).toFixed(e.precision).split("."),y=new Intl.NumberFormat(l.value),N=(u=y.formatToParts(.5).find(k=>k.type==="decimal"))===null||u===void 0?void 0:u.value,F=e.showSeparator?y.format(Number(a[0])):a[0],$=a[1];return{integer:F,decimal:$,decimalSeparator:N}});function z(){c||g()}return Z(()=>{Ne(()=>{e.active&&g()})}),Object.assign({formattedValue:x},{play:z})},render(){const{formattedValue:{integer:e,decimal:t,decimalSeparator:o}}=this;return[e,t?o:null,t]}}),Qe=C("statistic",[v("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),C("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[v("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[C("icon",{verticalAlign:"-0.125em"})]),v("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),v("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[C("icon",{verticalAlign:"-0.125em"})])])]),Xe=Object.assign(Object.assign({},I.props),{tabularNums:Boolean,label:String,value:[String,Number]}),J=E({name:"Statistic",props:Xe,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedRtlRef:n}=Q(e),l=I("Statistic","-statistic",Qe,we,e,t),c=X("Statistic",n,t),r=R(()=>{const{self:{labelFontWeight:g,valueFontSize:x,valueFontWeight:z,valuePrefixTextColor:A,labelTextColor:u,valueSuffixTextColor:h,valueTextColor:a,labelFontSize:y},common:{cubicBezierEaseInOut:N}}=l.value;return{"--n-bezier":N,"--n-label-font-size":y,"--n-label-font-weight":g,"--n-label-text-color":u,"--n-value-font-weight":z,"--n-value-font-size":x,"--n-value-prefix-text-color":A,"--n-value-suffix-text-color":h,"--n-value-text-color":a}}),m=o?Y("statistic",void 0,r,e):void 0;return{rtlEnabled:c,mergedClsPrefix:t,cssVars:o?void 0:r,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var e;const{mergedClsPrefix:t,$slots:{default:o,label:n,prefix:l,suffix:c}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),i("div",{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},w(n,r=>i("div",{class:`${t}-statistic__label`},this.label||r)),i("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},w(l,r=>r&&i("span",{class:`${t}-statistic-value__prefix`},r)),this.value!==void 0?i("span",{class:`${t}-statistic-value__content`},this.value):w(o,r=>r&&i("span",{class:`${t}-statistic-value__content`},r)),w(c,r=>r&&i("span",{class:`${t}-statistic-value__suffix`},r))))}}),Ye=T("br",null,null,-1),Ze={key:0},et=T("br",null,null,-1),tt=T("br",null,null,-1),nt=T("br",null,null,-1),ct={__name:"Index",setup(e){const t=Re(),o=Ae();Z(()=>{S.dispatch("fetch")});const n=M("");function l(){U.post("/tokens").then(r=>{n.value=r.data.token,t.success("获取成功")})}function c(){o.warning({title:"删除所有密钥",content:"确定删除所有密钥？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{U.delete("/tokens").then(r=>{t.success("删除成功"),n.value="",Te.push({name:"logout"})})}})}return(r,m)=>(O(),j(Se,null,[d(s($e),{prefix:"bar"},{default:f(()=>[d(s(B),{type:"primary"},{default:f(()=>[_(" 首页 ")]),_:1})]),_:1}),d(s(ke),null,{default:f(()=>[_(" 欢迎使用 "+P(s(W).title),1)]),_:1}),d(s(Ge),{title:"新 UI",type:"warning",class:"mb-3"},{default:f(()=>[_(" 当前为新 UI 的预览版本, 不代表最终成品 ")]),_:1}),d(s(Pe),{cols:2,"x-gap":12},{default:f(()=>[d(s(q),null,{default:f(()=>[d(s(D),{title:"用户信息"},{default:f(()=>[d(s(J),{value:s(S).state.user.name,label:"用户名"},null,8,["value"]),Ye,d(s(J),{label:"剩余流量","tabular-nums":""},{suffix:f(()=>[_(" GB ")]),default:f(()=>[d(s(Je),{duration:s(S).state.user.traffic>=5e3?2500:3e3,from:0,to:s(S).state.user.traffic},null,8,["duration","to"])]),_:1})]),_:1})]),_:1}),d(s(q),null,{default:f(()=>[d(s(D),{title:"访问密钥"},{default:f(()=>[_(" 访问密钥是用于访问 "+P(s(W).title)+" API 的密钥，您可以使用它来开发自己的客户端。删除所有访问密钥后，将需要再次登录此面板。 ",1),n.value?(O(),j("div",Ze,[et,d(s(B),{type:"info"},{default:f(()=>[d(s(B),{type:"error"},{default:f(()=>[_(" 请妥善保管您的访问密钥 ")]),_:1}),tt,_(" "+P(n.value),1)]),_:1})])):Ie("",!0),nt,d(s(G),{class:"!mt-2 !mr-2",secondary:"",strong:"",type:"info",onClick:l},{default:f(()=>[_(" 获取新密钥 ")]),_:1}),d(s(G),{secondary:"",strong:"",type:"error",onClick:c},{default:f(()=>[_(" 删除所有密钥 ")]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{ct as default};
