import{e as t,f as r,g as d,h,i as g,j as x,k as _,r as N,l as k,m as v,n as e,o as w,c as y,a,w as s,u as i,F as C,p as T,b as p,N as b,q as B,s as P}from"./index-dd49acc8.js";import{N as G}from"./Input-b2aded0f.js";import{N as I,a as V}from"./text-2b5a18d6.js";import"./use-locale-2069067a.js";const E=t("input-group",`
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
 `)])])])])])]),F={},M=h({name:"InputGroup",props:F,setup(n){const{mergedClsPrefixRef:o}=g(n);return x("-input-group",E,o),{mergedClsPrefix:o}},render(){const{mergedClsPrefix:n}=this;return _("div",{class:`${n}-input-group`},this.$slots)}}),U=T("br",null,null,-1),H={__name:"Login",setup(n){const o=N(""),u=k();function c(){e.commit("updateToken",o.value),B.get("/user").then(l=>{l.status===200&&(e.commit("updateToken",o.value),e.dispatch("fetch"),u.success("登录成功"),P.push({name:"index"}))}).catch(()=>{e.commit("updateToken",null),u.error("登录失败")})}return v(()=>{e.commit("updateToken",null),e.commit("updateUser",{})}),(l,m)=>(w(),y(C,null,[a(i(V),{prefix:"bar"},{default:s(()=>[a(i(I),{type:"primary"},{default:s(()=>[p(" 登录 ")]),_:1})]),_:1}),a(i(M),{class:"mt-3"},{default:s(()=>[a(i(G),{value:o.value,"onUpdate:value":m[0]||(m[0]=f=>o.value=f),autosize:"",placeholder:"请输入访问密钥",style:{"min-width":"25%"}},null,8,["value"]),a(i(b),{href:"https://muhanfrp.cn/auth/login",tag:"a",target:"_blank",type:"warning"},{default:s(()=>[p(" 获取访问密钥 ")]),_:1}),a(i(b),{type:"primary",onClick:c},{default:s(()=>[p(" 登录 ")]),_:1})]),_:1}),U],64))}};export{H as default};
