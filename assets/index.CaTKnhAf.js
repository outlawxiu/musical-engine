import{s as a}from"./index-CUPatB1O.js";const t=({url:t,method:s="GET",data:e={},header:r={}})=>new Promise(((l,o)=>{a({url:"https://121.89.213.194:5001"+t,method:s,data:e,header:r,success:a=>{l(a)},fail:o})})),s=()=>t({url:"/banner"}),e=()=>t({url:"/recommend/songs"}),r=()=>t({url:"/top/playlist"}),l=a=>t({url:"/playlist/detail",data:{id:a}}),o=a=>t({url:"/song/url",data:{id:a}}),d=a=>t({url:"/search",data:{keywords:a}}),i=()=>t({url:"/topic/detail/event/hot?actid=111551188"}),u=()=>t({url:"/user/followeds?uid=416608258"}),n=()=>t({url:"/register/anonimous"}),c=a=>t({url:"/login/qr/check",data:{key:a,timestamp:Date.now()}}),p=a=>t({url:"/captcha/sent",data:{phone:a}}),m=(a,s)=>t({url:"/captcha/verify",data:{phone:a,captcha:s}}),h=()=>t({url:"/login/qr/key",timestamp:Date.now()}),g=a=>t({url:"/login/qr/create",data:{key:a,timestamp:Date.now(),qrimg:!0}}),y=()=>t({url:"/user/account"}),k=a=>t({url:"/toplist",data:{id:a}});export{s as a,r as b,u as c,i as d,h as e,g as f,y as g,c as h,p as i,n as j,m as k,o as l,l as p,e as r,d as s,k as t};
