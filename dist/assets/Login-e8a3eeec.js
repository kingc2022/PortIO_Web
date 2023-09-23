import{c as t,d as r,a as d,e as h,u as g,V as x,l as _,k,A as N,x as v,B as e,C as y,D as w,F as a,G as s,H as i,J as C,R as T,K as p,Q as b,T as B,U as G}from"./index-187f4365.js";import{N as P}from"./Input-2e67a2ba.js";import{N as V,a as I}from"./text-4cdf836a.js";const U=t("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[r(">",[t("input",[r("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),r("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),t("button",[r("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[d("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),r("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[d("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),r("*",[r("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[r(">",[t("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),t("base-selection",[t("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),t("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),d("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),r("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[r(">",[t("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),t("base-selection",[t("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),t("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),d("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),E={},F=h({name:"InputGroup",props:E,setup(n){const{mergedClsPrefixRef:o}=g(n);return x("-input-group",U,o),{mergedClsPrefix:o}},render(){const{mergedClsPrefix:n}=this;return _("div",{class:`${n}-input-group`},this.$slots)}}),H=T("br",null,null,-1),z={__name:"Login",setup(n){const o=k(""),u=N();function c(){e.commit("updateToken",o.value),B.get("/user").then(l=>{l.status===200&&(e.commit("updateToken",o.value),e.dispatch("fetch"),u.success("登录成功"),G.push({name:"index"}))}).catch(()=>{e.commit("updateToken",null),u.error("登录失败")})}return v(()=>{e.commit("updateToken",null),e.commit("updateUser",{})}),(l,m)=>(y(),w(C,null,[a(i(I),{prefix:"bar"},{default:s(()=>[a(i(V),{type:"primary"},{default:s(()=>[p(" 登录 ")]),_:1})]),_:1}),a(i(F),{class:"mt-3"},{default:s(()=>[a(i(P),{value:o.value,"onUpdate:value":m[0]||(m[0]=f=>o.value=f),autosize:"",placeholder:"请输入访问密钥",style:{"min-width":"25%"}},null,8,["value"]),a(i(b),{href:"https://muhanfrp.cn/auth/login",tag:"a",target:"_blank",type:"warning"},{default:s(()=>[p(" 获取访问密钥 ")]),_:1}),a(i(b),{type:"primary",onClick:c},{default:s(()=>[p(" 登录 ")]),_:1})]),_:1}),H],64))}};export{z as default};
