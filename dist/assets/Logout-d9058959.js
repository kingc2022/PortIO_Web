import{A as t,x as u,B as e,U as a}from"./index-187f4365.js";const m={__name:"Logout",setup(o){const s=t();return u(()=>{e.commit("updateToken",null),e.commit("updateUser",{}),s.success("已退出登录"),a.push({name:"index"})}),(n,r)=>null}};export{m as default};