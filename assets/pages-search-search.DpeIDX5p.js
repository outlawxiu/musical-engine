import{d as s,r as a,a as e,A as l,o as t,c as u,b as o,g as r,F as c,j as n,u as i,e as d,I as h,t as p,h as v,B as y}from"./index-DOkeQljo.js";import{s as m}from"./index.CEL0-cPM.js";import{_ as g}from"./plugin-vueexport-helper.BCo6x5W8.js";const b=s("counter",(()=>({SearchHistoryList:a([])}))),x=g(e({__name:"search",setup(s){const e=b();console.log(e.SearchHistoryList);const g=a([]),x=a("");a(1),l(x,(async()=>{const s=await m(x.value);g.value=s.data.result.songs}));const H=()=>{x.value.length&&(e.SearchHistoryList.includes(x.value)||e.SearchHistoryList.push(x.value))};return(s,a)=>{const l=h,m=y;return t(),u("div",{class:"whole"},[o("div",{class:"input"},[r(l,{type:"text",modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=s=>x.value=s),placeholder:"搜索歌曲",class:"search-input"},null,8,["modelValue"]),r(l,{type:"button",value:"搜索",onClick:H,class:"search-btn"})]),o("div",{class:"history"},[o("p",null,"搜索历史"),o("ul",null,[(t(!0),u(c,null,n(i(e).SearchHistoryList,((s,a)=>(t(),u("li",{key:a},p(s),1)))),128))])]),x.value.length?(t(),u("div",{key:0,class:"search-result"},[o("ul",null,[(t(!0),u(c,null,n(g.value,((s,a)=>(t(),u("li",{key:a},[r(m,{type:"search",size:"15"}),v(" "+p(s.name),1)])))),128))])])):d("",!0)])}}}),[["__scopeId","data-v-98bd360c"]]);export{x as default};
