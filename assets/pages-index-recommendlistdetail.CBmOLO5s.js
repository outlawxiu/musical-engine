import{d as a,r as l,Q as s,o as e,c as t,w as r,f as n,a as i,b as o,t as u,j as c,k as d,F as m,e as p,i as f,A as v}from"./index-C_Y5tG7k.js";import{p as _,n as g}from"./index.BIO3BQlO.js";import{u as y}from"./musicPlayer.CgYAzH5q.js";import{o as j}from"./uni-app.es.DRBqU_QP.js";import{_ as k}from"./plugin-vueexport-helper.BCo6x5W8.js";const x=k(a({__name:"recommendlistdetail",setup(a){const k=y(),x=l({});j((a=>{_(null==a?void 0:a.id).then((a=>{x.value=a.data.playlist}))})),s();return(a,l)=>{const s=p,_=f,y=n,j=v;return e(),t(y,null,{default:r((()=>[i(y,{class:"nav"},{default:r((()=>[i(s,{src:x.value.coverImgUrl,alt:"",class:"coverImg"},null,8,["src"]),i(y,{class:"desc"},{default:r((()=>[i(_,null,{default:r((()=>[o(u(x.value.name),1)])),_:1}),i(y,{class:"creator"},{default:r((()=>{var a,l;return[i(s,{src:null==(l=null==(a=x.value)?void 0:a.creator)?void 0:l.avatarUrl,alt:"",class:"avatar"},null,8,["src"]),i(_,{class:"nickname"},{default:r((()=>{var a,l;return[o(u(null==(l=null==(a=x.value)?void 0:a.creator)?void 0:l.nickname),1)]})),_:1})]})),_:1}),i(y,{class:"btn"},{default:r((()=>[(e(!0),c(m,null,d(x.value.tags,((a,l)=>(e(),t(j,{size:"mini",key:l},{default:r((()=>[o(u(a),1)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),i(_,{class:"description"},{default:r((()=>[o(u(x.value.description),1)])),_:1}),(e(!0),c(m,null,d(x.value.tracks,((a,l)=>(e(),t(y,{class:"songs",key:l},{default:r((()=>[i(_,{class:"id"},{default:r((()=>[o(u(l+1),1)])),_:2},1024),i(y,{class:"song",style:{display:"flex","flex-direction":"column"},onClick:l=>(a=>{console.log(a.al.id,"item.id"),g(a.id).then((l=>{console.log(l.data.data[0].url,"playMusicApi"),k.playList.unshift({poster:a.al.picUrl,id:a.al.id,name:a.name,url:l.data.data[0].url,poster:a.al.picUrl}),console.log(k.playList,"playerStore.playList")})),console.log(a,"item")})(a)},{default:r((()=>[i(_,{class:"name"},{default:r((()=>[o(u(a.name),1)])),_:2},1024),i(_,{class:"artists"},{default:r((()=>[o(u(a.ar.map((a=>a.name)).join("、")),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-3ea645ec"]]);export{x as default};
