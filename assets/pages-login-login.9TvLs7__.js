import{d as e,H as a,r as l,C as s,G as u,o,c as t,h as n,a as d,T as c,I as i,u as r,J as v,K as m,L as p,j as f,w as g,q as _,F as h,f as k,A as y,b as C,i as V,E as I,M as b,N as x,O as j}from"./index-C_Y5tG7k.js";import{f as N,h as w,i as U,j as q,k as L,l as J}from"./index.BIO3BQlO.js";import{_ as O}from"./plugin-vueexport-helper.BCo6x5W8.js";import{a as S}from"./uni-app.es.DRBqU_QP.js";const T=O(e({__name:"CodeLogin",props:{modelValue:{},modelModifiers:{}},emits:a(["changeCode"],["update:modelValue"]),setup(e,{emit:a}){const r=a,v=l("");s(v,(()=>{r("changeCode",v.value),console.log(v.value)}));const m=u(e,"modelValue");return(e,a)=>{const l=i;return o(),t(c,{to:"body"},[n("div",{class:"whole"},[n("p",null,[n("span",{onClick:a[0]||(a[0]=e=>m.value=!m.value)},"收起")]),n("p",{class:"getCode"},[d(l,{type:"text",modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=e=>v.value=e),placeholder:"请输入验证码"},null,8,["modelValue"]),n("span",null,"重新获取验证码?")])])])}}}),[["__scopeId","data-v-0053f6ed"]]),A=O(e({__name:"QRcodeLogin",setup(e){r({url:"/api/login/refresh"});const a=l(0),s={};S((()=>{clearInterval(a.value)})),v((()=>{clearInterval(a.value)}));const u=l("");return N().then((e=>{const l=e.data.data.unikey;w(e.data.data.unikey).then((e=>{u.value=e.data.data.qrimg,a.value=setInterval((()=>{U(l).then((e=>{console.log(e.data),802===e.data.code&&console.log(e),803===e.data.code&&(console.log(e.data),s.cookie=e.data.cookie,console.log(s),m({key:"userInfo",data:JSON.stringify(s),success:function(){p({url:"/pages/index/index"})}}),r({url:"/api/login/refresh"}),clearInterval(a.value)),800===e.data.code&&clearInterval(a.value)}))}),1e3)}))})),(e,a)=>(o(),t(c,{to:"body"},[n("div",{class:"whole"},[n("img",{src:u.value,alt:""},null,8,["src"])])]))}}),[["__scopeId","data-v-100d3aa2"]]),H=O(e({__name:"login",setup(e){const a=l(!0),u=l(""),c=l(!1),r=l(!1),v=l(!1),N=l(!1),w=()=>{u.value=""},U=l(0),O=e=>{U.value=e};s(U,(()=>{4===String(U.value).length&&J(Number(u.value),U.value).then((e=>{console.log(e),e.data.data&&p({url:"/pages/index/index"})}))}));const S=async()=>{if(!c.value)return void(r.value=!0);console.log(Number(u.value));/^1[3,4,5,6,7,8,9]\d{9}$/.test(u.value)?(v.value=!0,q(Number(u.value))):alert("请输入正确的手机号码")},H=()=>{c.value=!0};s(u,(()=>{a.value=u.value.length>0}),{immediate:!0});const M=async()=>{if(!c.value)return void(r.value=!0);const e=await L();if(200===e.data.code){console.log(e.data.userId);const a={cookie:e.data.cookie,createTime:e.data.createTime,userId:e.data.userId};m({key:"userInfo",data:JSON.stringify(a),success:function(){p({url:"/pages/index/index"})}})}};return(e,l)=>{const s=k,m=V,p=i,U=I,q=y,L=b,J=x,z=j;return o(),f(h,null,[n("div",{class:"whole"},[n("div",{class:"app"},[d(s,null,{default:g((()=>[n("img",{src:"/musical-engine/assets/music-DUeqHshX.png"})])),_:1})]),n("div",{class:"login"},[d(s,{class:"uni-form-item"},{default:g((()=>[d(m,{class:"countrycode"},{default:g((()=>[C("+86")])),_:1}),d(p,{class:"uni-input",type:"tel",modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=e=>u.value=e),focus:"",placeholder:"请输入手机号"},null,8,["modelValue"]),a.value?(o(),t(U,{key:0,type:"clear",size:"26",onClick:w})):_("",!0)])),_:1}),d(q,{class:"quickLogin",onClick:S},{default:g((()=>[C("验证码登录")])),_:1}),d(s,{class:"agreement"},{default:g((()=>[d(z,{onChange:l[1]||(l[1]=e=>c.value=!c.value)},{default:g((()=>[d(J,{class:"label"},{default:g((()=>[d(L,{class:"checkbox",checked:c.value},null,8,["checked"]),C("我已阅读 ")])),_:1})])),_:1})])),_:1}),d(s,{onClick:l[2]||(l[2]=e=>N.value=!0)},{default:g((()=>[C("二维码登录")])),_:1})]),d(s,{class:"tourist",onClick:M},{default:g((()=>[C("立即体验")])),_:1}),r.value?(o(),t(s,{key:0,class:"dialog",onClick:l[3]||(l[3]=e=>r.value=!r.value)},{default:g((()=>[d(s,{class:"btns"},{default:g((()=>[d(s,{class:"tip"},{default:g((()=>[d(m,null,{default:g((()=>[C("同意协议后登录")])),_:1})])),_:1}),d(s,{class:"agree"},{default:g((()=>[d(q,{class:"button noAgree"},{default:g((()=>[C("不同意")])),_:1}),d(q,{class:"button agree",onClick:H},{default:g((()=>[C("同意并继续")])),_:1})])),_:1})])),_:1})])),_:1})):_("",!0)]),v.value?(o(),t(T,{key:0,modelValue:v.value,"onUpdate:modelValue":l[4]||(l[4]=e=>v.value=e),onChangeCode:O},null,8,["modelValue"])):_("",!0),N.value?(o(),t(A,{key:1,modelValue:N.value,"onUpdate:modelValue":l[5]||(l[5]=e=>N.value=e)},null,8,["modelValue"])):_("",!0)],64)}}}),[["__scopeId","data-v-f0385b03"]]);export{H as default};