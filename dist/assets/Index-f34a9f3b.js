import{e as m,v as E,f as r,x as a,g as P,h as G,i as H,j as nr,y as ar,z as ir,A as I,k as O,B as sr,C as cr,D as br,E as ur,G as u,H as gr,I as pr,J as W,K as L,L as hr,M as T,r as mr,l as vr,q as w,o as x,c as M,a as h,w as s,u as c,O as j,F as D,b as $,p as d,P as fr,N,R as V,t as y}from"./index-dd49acc8.js";import{N as Cr}from"./Empty-3dd158f1.js";import{N as xr,a as $r}from"./text-2b5a18d6.js";import"./use-locale-2069067a.js";const t="0!important",F="-1px!important";function f(o){return a(o+"-type",[r("& +",[m("button",{},[a(o+"-type",[P("border",{borderLeftWidth:t}),P("state-border",{left:F})])])])])}function C(o){return a(o+"-type",[r("& +",[m("button",[a(o+"-type",[P("border",{borderTopWidth:t}),P("state-border",{top:F})])])])])}const yr=m("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[E("vertical",{flexDirection:"row"},[E("rtl",[m("button",[r("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),r("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),r("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),f("default"),a("ghost",[f("primary"),f("info"),f("success"),f("warning"),f("error")])])])]),a("vertical",{flexDirection:"column"},[m("button",[r("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),r("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),r("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),C("default"),a("ghost",[C("primary"),C("info"),C("success"),C("warning"),C("error")])])])]),Pr={size:{type:String,default:void 0},vertical:Boolean},zr=G({name:"ButtonGroup",props:Pr,setup(o){const{mergedClsPrefixRef:e,mergedRtlRef:n}=H(o);return nr("-button-group",yr,e),ar(ir,o),{rtlEnabled:I("ButtonGroup",n,e),mergedClsPrefix:e}},render(){const{mergedClsPrefix:o}=this;return O("div",{class:[`${o}-button-group`,this.rtlEnabled&&`${o}-button-group--rtl`,this.vertical&&`${o}-button-group--vertical`],role:"group"},this.$slots)}});function kr(){const o=sr(cr,null);return o===null&&br("use-dialog","No outer <n-dialog-provider /> founded."),o}const Sr={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},_r=o=>{const{dividerColor:e,cardColor:n,modalColor:b,popoverColor:g,tableHeaderColor:i,tableColorStriped:p,textColor1:l,textColor2:v,borderRadius:z,fontWeightStrong:k,lineHeight:S,fontSizeSmall:_,fontSizeMedium:B,fontSizeLarge:R}=o;return Object.assign(Object.assign({},Sr),{fontSizeSmall:_,fontSizeMedium:B,fontSizeLarge:R,lineHeight:S,borderRadius:z,borderColor:u(n,e),borderColorModal:u(b,e),borderColorPopover:u(g,e),tdColor:n,tdColorModal:b,tdColorPopover:g,tdColorStriped:u(n,p),tdColorStripedModal:u(b,p),tdColorStripedPopover:u(g,p),thColor:u(n,i),thColorModal:u(b,i),thColorPopover:u(g,i),thTextColor:l,tdTextColor:v,thFontWeight:k})},Br={name:"Table",common:ur,self:_r},Rr=Br,Tr=r([m("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[r("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),r("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),a("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),a("single-line",[r("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),r("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),a("single-column",[r("tr",[r("&:not(:last-child)",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),a("striped",[r("tr:nth-of-type(even)",[r("td","background-color: var(--n-td-color-striped)")])]),E("bottom-bordered",[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),gr(m("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[r("th",`
 background-color: var(--n-th-color-modal);
 `),r("td",`
 background-color: var(--n-td-color-modal);
 `)])),pr(m("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[r("th",`
 background-color: var(--n-th-color-popover);
 `),r("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),wr=Object.assign(Object.assign({},W.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),Mr=G({name:"Table",props:wr,setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:n,mergedRtlRef:b}=H(o),g=W("Table","-table",Tr,Rr,o,e),i=I("Table",b,e),p=L(()=>{const{size:v}=o,{self:{borderColor:z,tdColor:k,tdColorModal:S,tdColorPopover:_,thColor:B,thColorModal:R,thColorPopover:K,thTextColor:A,tdTextColor:q,borderRadius:J,thFontWeight:U,lineHeight:Q,borderColorModal:X,borderColorPopover:Y,tdColorStriped:Z,tdColorStripedModal:rr,tdColorStripedPopover:or,[T("fontSize",v)]:er,[T("tdPadding",v)]:tr,[T("thPadding",v)]:lr},common:{cubicBezierEaseInOut:dr}}=g.value;return{"--n-bezier":dr,"--n-td-color":k,"--n-td-color-modal":S,"--n-td-color-popover":_,"--n-td-text-color":q,"--n-border-color":z,"--n-border-color-modal":X,"--n-border-color-popover":Y,"--n-border-radius":J,"--n-font-size":er,"--n-th-color":B,"--n-th-color-modal":R,"--n-th-color-popover":K,"--n-th-font-weight":U,"--n-th-text-color":A,"--n-line-height":Q,"--n-td-padding":tr,"--n-th-padding":lr,"--n-td-color-striped":Z,"--n-td-color-striped-modal":rr,"--n-td-color-striped-popover":or}}),l=n?hr("table",L(()=>o.size[0]),p,o):void 0;return{rtlEnabled:i,mergedClsPrefix:e,cssVars:n?void 0:p,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var o;const{mergedClsPrefix:e}=this;return(o=this.onRender)===null||o===void 0||o.call(this),O("table",{class:[`${e}-table`,this.themeClass,{[`${e}-table--rtl`]:this.rtlEnabled,[`${e}-table--bottom-bordered`]:this.bottomBordered,[`${e}-table--bordered`]:this.bordered,[`${e}-table--single-line`]:this.singleLine,[`${e}-table--single-column`]:this.singleColumn,[`${e}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),Nr=d("thead",null,[d("tr",null,[d("th",null,"隧道 ID"),d("th",null,"隧道名称"),d("th",null,"本地地址"),d("th",null,"隧道协议"),d("th",null,"操作")])],-1),Vr={__name:"Index",setup(o){const e=mr([]),n=vr(),b=kr();w.get("/tunnels").then(i=>{e.value=i.data});function g(i){b.warning({title:"删除隧道",content:"确定删除隧道吗？",positiveText:"删除",negativeText:"取消",onPositiveClick:()=>{w.delete(`/tunnels/${i}`).then(p=>{n.success("删除隧道成功"),w.get("/tunnels").then(l=>{e.value=l.data})})}})}return(i,p)=>(x(),M(D,null,[h(c($r),{prefix:"bar"},{default:s(()=>[h(c(xr),{type:"primary"},{default:s(()=>[$(" 隧道列表 ")]),_:1})]),_:1}),e.value.length!==0?(x(),j(c(Mr),{key:0,"single-line":!1,class:"!text-center"},{default:s(()=>[Nr,d("tbody",null,[(x(!0),M(D,null,fr(e.value,l=>(x(),M("tr",null,[d("td",null,y(l.id),1),d("td",null,y(l.name),1),d("td",null,y(l.local_address),1),d("td",null,y(l.protocol.toUpperCase()),1),d("td",null,[h(c(zr),null,{default:s(()=>[h(c(V),{to:{name:"tunnels.show",params:{id:l.id}}},{default:s(()=>[h(c(N),{secondary:"",tertiary:"",type:"info"},{default:s(()=>[$(" 详细信息 ")]),_:1})]),_:2},1032,["to"]),h(c(N),{secondary:"",tertiary:"",type:"error",onClick:v=>g(l.id)},{default:s(()=>[$("删除")]),_:2},1032,["onClick"])]),_:2},1024)])]))),256))])]),_:1})):(x(),j(c(Cr),{key:1,description:"无隧道",size:"large"},{extra:s(()=>[h(c(V),{to:{name:"tunnels.create"}},{default:s(()=>[h(c(N),{size:"small"},{default:s(()=>[$(" 创建一个 ")]),_:1})]),_:1},8,["to"])]),_:1}))],64))}};export{Vr as default};
