import{d as a,r as s,o as e,c as l,w as t,a as r,b as c,n,i as u,e as d,f as o,g as i,h as m,j as _,k as f,F as p,t as g,I as v,S as h,l as y}from"./index-D-xWtDk2.js";import{_ as x,a as k}from"./music_1.CGI4yL4b.js";import{r as j,g as w,a as I}from"./index.De3wf8Wh.js";import{_ as C}from"./plugin-vueexport-helper.BCo6x5W8.js";import{R}from"./Rankings.BczkrG96.js";const U=C(a({__name:"DailyRecommend",setup(a){const i=s([]);j().then((a=>{i.value=a.data.data.dailySongs}));const m=()=>{n({url:"/pages/index/recommendlist"})};return(a,s)=>{const n=u,_=d,f=o;return e(),l(f,{class:"daily-recommend"},{default:t((()=>[r(f,{class:"recommend-title",onClick:m},{default:t((()=>{var a;return[r(n,null,{default:t((()=>[c("💕每日推荐")])),_:1}),r(_,{src:null==(a=i.value[0])?void 0:a.al.picUrl,alt:""},null,8,["src"])]})),_:1}),r(f,{class:"heart-pattern"},{default:t((()=>[r(n,null,{default:t((()=>[c("❤️心动模式")])),_:1}),r(_,{src:"",alt:""})])),_:1}),r(f,{class:"private-radar"},{default:t((()=>[r(n,null,{default:t((()=>[c("⛈️私人雷达")])),_:1}),r(_,{src:"",alt:""})])),_:1})])),_:1})}}}),[["__scopeId","data-v-35086f45"]]),b=C(a({__name:"index",setup(a){const j=s("");i((()=>{(()=>{const a=(new Date).getHours();a>=18||a<5?j.value="晚上好":a>12&&a<18?j.value="下午好":(a<12||a>=5)&&(j.value="早上好")})()}));const C=s([]);w().then((a=>{C.value=a.data.banners}));const b=s([]);I().then((a=>{b.value=a.data.playlists}));const D=()=>{n({url:"/pages/search/search"})};return(a,s)=>{const i=v,w=o,I=d,F=h,S=y,H=u;return e(),l(w,{class:"content"},{default:t((()=>[r(w,{class:"nav"},{default:t((()=>[m("img",{src:x,alt:"",class:"img1"}),r(i,{type:"text",placeholder:"输入搜索内容",class:"search",onFocus:D}),m("img",{src:k,alt:"",class:"img2"})])),_:1}),r(S,{class:"swiper"},{default:t((()=>[(e(!0),_(p,null,f(C.value,(a=>(e(),l(F,{key:a.targetId},{default:t((()=>[r(w,{class:"swiper-item"},{default:t((()=>[r(I,{src:a.imageUrl,alt:"",style:{width:"100%",height:"180px"}},null,8,["src"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),r(H,{class:"greeting"},{default:t((()=>[c(g(j.value),1)])),_:1}),r(U),r(w,{class:"recommend"},{default:t((()=>[r(H,{class:"title"},{default:t((()=>[c("推荐歌单>")])),_:1}),r(w,{class:"recommends"},{default:t((()=>[(e(!0),_(p,null,f(b.value,(a=>(e(),l(w,{class:"recommend-list",key:a.id,onClick:s=>{return e=a.id,void n({url:"/pages/index/recommendlistdetail?id="+e});var e}},{default:t((()=>[r(H,{class:"plays"},{default:t((()=>[c("🎧"+g(a.playCount),1)])),_:2},1024),r(I,{src:a.coverImgUrl,alt:""},null,8,["src"]),r(w,{class:"desc"},{default:t((()=>[r(H,{class:"name"},{default:t((()=>[c(g(a.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),r(R)])),_:1})}}}),[["__scopeId","data-v-6a241182"]]);export{b as default};
