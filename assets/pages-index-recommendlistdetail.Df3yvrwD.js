import{a,r as l,N as s,o as e,f as t,w as o,i as r,g as n,h as c,t as u,c as d,j as i,F as m,m as f,l as _,J as p}from"./index-BuFgFvq9.js";import{p as v,l as g}from"./index.Cz2X8r-q.js";import{a as y}from"./uni-app.es.CLGQIBZ8.js";import{_ as k}from"./_plugin-vue_export-helper.BCo6x5W8.js";const j=k(a({__name:"recommendlistdetail",setup(a){const k=l([]);y((a=>{v(a.id).then((a=>{k.value=a.data.playlist,console.log(1111,a.data.playlist)}))}));const j=s();return j.onPlay((()=>{console.log("开始播放")})),j.onError((a=>{console.log(a.errMsg),console.log(a.errCode)})),(a,l)=>{const s=f,v=_,y=r,x=p;return e(),t(y,null,{default:o((()=>[n(y,{class:"nav"},{default:o((()=>[n(s,{src:k.value.coverImgUrl,alt:"",class:"coverImg"},null,8,["src"]),n(y,{class:"desc"},{default:o((()=>[n(v,null,{default:o((()=>[c(u(k.value.name),1)])),_:1}),n(y,{class:"creator"},{default:o((()=>{var a,l;return[n(s,{src:null==(l=null==(a=k.value)?void 0:a.creator)?void 0:l.avatarUrl,alt:"",class:"avatar"},null,8,["src"]),n(v,{class:"nickname"},{default:o((()=>[c(u(k.value.creator.nickname),1)])),_:1})]})),_:1}),n(y,{class:"btn"},{default:o((()=>[(e(!0),d(m,null,i(k.value.tags,((a,l)=>(e(),t(x,{size:"mini",key:l},{default:o((()=>[c(u(a),1)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),n(v,{class:"description"},{default:o((()=>[c(u(k.value.description),1)])),_:1}),(e(!0),d(m,null,i(k.value.tracks,((a,l)=>(e(),t(y,{class:"songs",key:l},{default:o((()=>[n(v,{class:"id"},{default:o((()=>[c(u(l+1),1)])),_:2},1024),n(y,{class:"song",style:{display:"flex","flex-direction":"column"},onClick:l=>(a=>{g(a).then((a=>{console.log(a.data.data[0].url),j.autoplay=!0,j.src=a.data.data[0].url}))})(a.id)},{default:o((()=>[n(v,{class:"name"},{default:o((()=>[c(u(a.name),1)])),_:2},1024),n(v,{class:"artists"},{default:o((()=>[c(u(a.ar.map((a=>a.name)).join("、")),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-c3e31bdd"]]);export{j as default};
