import{c,X as P,d as r,b as d,a as C,e as E,u as S,V as nr,Y as dr,Z as ar,h as L,l as M,_ as ir,$ as sr,g as D,i as R,j as cr,a0 as br,w as k,k as ur,A as gr,T as z,C as h,D as _,F as s,G as a,H as i,a1 as T,J as w,K as x,R as n,a2 as pr,Q as B,a3 as N,L as $}from"./index-187f4365.js";import{N as hr}from"./Empty-1a8eaa01.js";import{u as mr}from"./composables-fe2e51c2.js";import{N as vr,a as fr}from"./text-4cdf836a.js";const o="0!important",V="-1px!important";function g(e){return d(e+"-type",[r("& +",[c("button",{},[d(e+"-type",[C("border",{borderLeftWidth:o}),C("state-border",{left:V})])])])])}function p(e){return d(e+"-type",[r("& +",[c("button",[d(e+"-type",[C("border",{borderTopWidth:o}),C("state-border",{top:V})])])])])}const xr=c("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[P("vertical",{flexDirection:"row"},[P("rtl",[c("button",[r("&:first-child:not(:last-child)",`
 margin-right: ${o};
 border-top-right-radius: ${o};
 border-bottom-right-radius: ${o};
 `),r("&:last-child:not(:first-child)",`
 margin-left: ${o};
 border-top-left-radius: ${o};
 border-bottom-left-radius: ${o};
 `),r("&:not(:first-child):not(:last-child)",`
 margin-left: ${o};
 margin-right: ${o};
 border-radius: ${o};
 `),g("default"),d("ghost",[g("primary"),g("info"),g("success"),g("warning"),g("error")])])])]),d("vertical",{flexDirection:"column"},[c("button",[r("&:first-child:not(:last-child)",`
 margin-bottom: ${o};
 margin-left: ${o};
 margin-right: ${o};
 border-bottom-left-radius: ${o};
 border-bottom-right-radius: ${o};
 `),r("&:last-child:not(:first-child)",`
 margin-top: ${o};
 margin-left: ${o};
 margin-right: ${o};
 border-top-left-radius: ${o};
 border-top-right-radius: ${o};
 `),r("&:not(:first-child):not(:last-child)",`
 margin: ${o};
 border-radius: ${o};
 `),p("default"),d("ghost",[p("primary"),p("info"),p("success"),p("warning"),p("error")])])])]),$r={size:{type:String,default:void 0},vertical:Boolean},Cr=E({name:"ButtonGroup",props:$r,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:b}=S(e);return nr("-button-group",xr,t),dr(ar,e),{rtlEnabled:L("ButtonGroup",b,t),mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return M("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),yr=r([c("table",`
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
 `)]),d("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),d("single-line",[r("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),r("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),d("single-column",[r("tr",[r("&:not(:last-child)",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),d("striped",[r("tr:nth-of-type(even)",[r("td","background-color: var(--n-td-color-striped)")])]),P("bottom-bordered",[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),ir(c("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[r("th",`
 background-color: var(--n-th-color-modal);
 `),r("td",`
 background-color: var(--n-td-color-modal);
 `)])),sr(c("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[r("th",`
 background-color: var(--n-th-color-popover);
 `),r("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),kr=Object.assign(Object.assign({},D.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),zr=E({name:"Table",props:kr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:b,mergedRtlRef:m}=S(e),y=D("Table","-table",yr,br,e,t),u=L("Table",m,t),v=R(()=>{const{size:f}=e,{self:{borderColor:G,tdColor:j,tdColorModal:H,tdColorPopover:I,thColor:F,thColorModal:K,thColorPopover:O,thTextColor:W,tdTextColor:A,borderRadius:J,thFontWeight:Q,lineHeight:U,borderColorModal:X,borderColorPopover:Y,tdColorStriped:Z,tdColorStripedModal:q,tdColorStripedPopover:rr,[k("fontSize",f)]:er,[k("tdPadding",f)]:or,[k("thPadding",f)]:tr},common:{cubicBezierEaseInOut:lr}}=y.value;return{"--n-bezier":lr,"--n-td-color":j,"--n-td-color-modal":H,"--n-td-color-popover":I,"--n-td-text-color":A,"--n-border-color":G,"--n-border-color-modal":X,"--n-border-color-popover":Y,"--n-border-radius":J,"--n-font-size":er,"--n-th-color":F,"--n-th-color-modal":K,"--n-th-color-popover":O,"--n-th-font-weight":Q,"--n-th-text-color":W,"--n-line-height":U,"--n-td-padding":or,"--n-th-padding":tr,"--n-td-color-striped":Z,"--n-td-color-striped-modal":q,"--n-td-color-striped-popover":rr}}),l=b?cr("table",R(()=>e.size[0]),v,e):void 0;return{rtlEnabled:u,mergedClsPrefix:t,cssVars:b?void 0:v,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),M("table",{class:[`${t}-table`,this.themeClass,{[`${t}-table--rtl`]:this.rtlEnabled,[`${t}-table--bottom-bordered`]:this.bottomBordered,[`${t}-table--bordered`]:this.bordered,[`${t}-table--single-line`]:this.singleLine,[`${t}-table--single-column`]:this.singleColumn,[`${t}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),_r=n("thead",null,[n("tr",null,[n("th",null,"隧道 ID"),n("th",null,"隧道名称"),n("th",null,"本地地址"),n("th",null,"隧道协议"),n("th",null,"操作")])],-1),wr={__name:"Index",setup(e){const t=ur([]),b=gr(),m=mr();z.get("/tunnels").then(u=>{t.value=u.data});function y(u){m.warning({title:"删除隧道",content:"确定删除隧道吗？",positiveText:"删除",negativeText:"取消",onPositiveClick:()=>{z.delete(`/tunnels/${u}`).then(v=>{b.success("删除隧道成功"),z.get("/tunnels").then(l=>{t.value=l.data})})}})}return(u,v)=>(h(),_(w,null,[s(i(fr),{prefix:"bar"},{default:a(()=>[s(i(vr),{type:"primary"},{default:a(()=>[x(" 隧道列表 ")]),_:1})]),_:1}),t.value.length!==0?(h(),T(i(zr),{key:0,"single-line":!1,class:"!text-center"},{default:a(()=>[_r,n("tbody",null,[(h(!0),_(w,null,pr(t.value,l=>(h(),_("tr",null,[n("td",null,$(l.id),1),n("td",null,$(l.name),1),n("td",null,$(l.local_address),1),n("td",null,$(l.protocol.toUpperCase()),1),n("td",null,[s(i(Cr),null,{default:a(()=>[s(i(N),{to:{name:"tunnels.show",params:{id:l.id}}},{default:a(()=>[s(i(B),{secondary:"",tertiary:"",type:"info"},{default:a(()=>[x(" 详细信息 ")]),_:1})]),_:2},1032,["to"]),s(i(B),{secondary:"",tertiary:"",type:"error",onClick:f=>y(l.id)},{default:a(()=>[x("删除")]),_:2},1032,["onClick"])]),_:2},1024)])]))),256))])]),_:1})):(h(),T(i(hr),{key:1,description:"无隧道",size:"large"},{extra:a(()=>[s(i(N),{to:{name:"tunnels.create"}},{default:a(()=>[s(i(B),{size:"small"},{default:a(()=>[x(" 创建一个 ")]),_:1})]),_:1},8,["to"])]),_:1}))],64))}};export{wr as default};
