import{C as e,r as a,R as u,D as s}from"./index-DO7k-KY3.js";const l=e("player",(()=>{const e=a(!1);a(488388942);const l=u();a([{name:"顺序播放",value:"sequence"},{name:"单曲循环",value:"single"},{name:"随机播放",value:"random"}]);const t=a([{id:488388942,poster:"https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/music-a.png",name:"致爱丽丝 - 稻香",author:"周杰伦",url:"https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3"}]),n=a(""),r=a(0),i=a(!1),o=a(!1),c=a(!1);a("random");const p=a(!1);a(1),s(t,(()=>{n.value=t.value[0].url})),l.src=t.value[0].url;return s(t,(()=>{r.value=0,n.value=t.value[0].url})),s(r,(()=>{n.value=t.value[r.value].url})),s(n,(()=>l.src=n.value),{immediate:!0}),{playList:t,currentMusic:n,currentIndex:r,show:i,isPlaying:o,showList:c,isDetail:p,playerStatus:e,changeplayerStatus:()=>{e.value?l.play():l.pause()}}}));export{l as u};
