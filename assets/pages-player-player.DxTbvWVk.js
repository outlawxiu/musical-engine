import{d as a,R as e,l,C as s,r as u,o as t,e as v,w as n,f as r,v as o,x as i,g as c,t as d,k as p,j as m,m as f}from"./index-CF5EOIf_.js";import{_ as y}from"./uni-icons.COLXnoKc.js";import{o as g,c as _,r as h}from"./uni-app.es.DelBefSo.js";import{c as k}from"./index.Ccczw-Vf.js";import{p as j}from"./index.CSKfA4nI.js";import{_ as x}from"./plugin-vueexport-helper.BCo6x5W8.js";/* empty css                                                          */const C=x(a({__name:"player",setup(a){const x=e();x.autoplay=!0;const C=l(),b=l(),z=l(0),I=l([]),w=l(""),B=l(""),P=l(""),R=l();g((a=>{const e=a.id;j(e).then((a=>{I.value=[...a.data.playlist.tracks],C.value=I.value.length,b.value=Number(I.value[z.value].id),k(b.value).then((a=>{B.value=I.value[z.value].ar[0].name,P.value=I.value[z.value].al.name,w.value=I.value[z.value].al.picUrl,x.src=a.data.data[0].url,R.value=!0}))}))})),s(z,((a,e)=>{w.value=I.value[a].al.picUrl,B.value=I.value[a].ar[0].name,P.value=I.value[a].al.name})),x.onPlay((()=>{R.value=!0}));const U=()=>{z.value>=C.value?z.value=0:z.value=z.value+1,b.value=I.value[z.value].id,k(b.value).then((a=>{x.destroy(),x.src=a.data.data[0].url}))},A=()=>{z.value>=0?z.value=z.value-1:z.value=0,b.value=I.value[z.value].id,k(b.value).then((a=>{x.destroy(),x.src=a.data.data[0].url}))},D=()=>{x.paused?(R.value=!0,x.play()):(R.value=!1,x.pause())};return _((()=>{x.destroy()})),(a,e)=>{const l=p,s=m,g=f,_=h(u("uni-icons"),y);return t(),v(l,{class:"playPage"},{default:n((()=>[r(l,{class:"pic"},{default:n((()=>[r(l,{class:"mask",style:o({backgroundImage:"url("+w.value+")"})},null,8,["style"]),r(s,{src:w.value,mode:"widthFix",class:i([{playing:R.value},{paused:!R.value}])},null,8,["src","class"])])),_:1}),r(l,{class:"detail"},{default:n((()=>[r(l,{class:"musicInfo"},{default:n((()=>[r(g,null,{default:n((()=>[c(d(B.value),1)])),_:1}),r(g,null,{default:n((()=>[c(d(P.value),1)])),_:1})])),_:1}),r(l,{class:"s-p"},{default:n((()=>[r(_,{type:"left",size:"60",onClick:A,color:"#fff"}),R.value?(t(),v(s,{key:0,src:"/musical-engine/assets/start-BHA7XoRj.png",onClick:D})):(t(),v(s,{key:1,src:"/musical-engine/assets/stop-DhzeY9xB.png",onClick:D})),r(_,{type:"right",size:"60",onClick:U,color:"#fff"})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-42f6b98f"]]);export{C as default};
