import{_ as b,d as y,a as k,u as C,r as z,z as j,w as B,b as A,A as D,o as d,c as E,e as h,f as M,B as T,g as L,j as t,t as a,C as m,h as p,k as P,F as S,i as u,l as F}from"./entry-b8207ed2.mjs";import{u as V}from"./asyncData-2e01ffb0.mjs";import{S as N}from"./index-f67d4f5a.mjs";import{u as H}from"./useFirstPathChapter-6b4114d4.mjs";import{A as O,G as R,J as q}from"./disclosure-5c2aa184.mjs";import"./storage-49453dae.mjs";import"./index-566e9911.mjs";import"./index-7c9a43e8.mjs";import"./use-resolve-button-type-f15fddb7.mjs";import"./open-closed-03b1d5d3.mjs";const G=y(()=>M(()=>import("./Chaplist-29c3b250.mjs"),["Chaplist-29c3b250.mjs","entry-b8207ed2.mjs","entry.89390574.css","storage-49453dae.mjs","asyncData-2e01ffb0.mjs","index-f67d4f5a.mjs","index-566e9911.mjs","index-7c9a43e8.mjs"])),I=k({__name:"index",async setup(g,{expose:l}){l();let i,e;const _=C(),r=z(_.query.slug),o=j("pickManga"),c=`/api/comic?slug=${r.value}&source=${N.netTruyen}`,{data:s,refresh:n}=([i,e]=B(()=>V("manga-detail",()=>$fetch(c))),i=await i,e(),i),f=async w=>{const v=await H(null,w);return T({path:v})};A([o],async()=>{o.value&&(r.value=o.value,await n())}),D({title:s.value.title,description:s.value.author});const x={route:_,slug:r,onPickManga:o,url:c,comic:s,refresh:n,navigateToManga:f,Disclosure:O,DisclosureButton:R,DisclosurePanel:q};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),J={class:"flex h-fit flex-col",style:{height:"auto"}},K={class:"absolute inset-0 z-0 h-[35%] w-full lg:h-[45%]"},Q={class:"deslide-cover"},U={style:{"box-sizing":"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:"1",border:"0px",margin:"0px",padding:"0px",position:"absolute",inset:"0px"}},W=["src","srcset"],X={class:"z-10 mx-auto w-[85%] pt-32"},Y={class:"h-fit w-full"},Z={class:"flex h-full w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start"},$={class:"mt-4 w-[50%] md:w-[250px] md:min-w-[250px]"},tt={class:"aspect-w-3 aspect-h-5 relative rounded-2xl"},et={style:{"box-sizing":"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:"1",border:"0px",margin:"0px",padding:"0px",position:"absolute",inset:"0px"}},st=["srcset","src"],ot={class:"flex h-full w-full flex-col justify-center p-4 text-white md:min-h-[430px] lg:ml-4"},it={class:"w-full space-y-4 text-center md:ml-2 md:text-left lg:w-[80%]"},nt={class:"font-secondary font-bold leading-none text-[6.5vw] md:text-[5.5vw] lg:text-[3.5vw]"},at=t("h2",{class:"text-[3vw] md:min-h-[28px] md:text-[2vw] lg:text-[1.2vw]"},null,-1),lt={class:"text-center text-[3vw] md:text-left md:text-[2vw] lg:text-[1.1vw]"},rt={class:"flex items-center justify-center gap-4 md:justify-start"},ct=t("span",{class:"block h-3 w-3 rounded-full bg-green-500"},null,-1),dt={class:"mt-4 flex flex-col-reverse gap-2 md:flex-col"},ht={class:"my-4 flex flex-wrap items-center gap-4"},ut=t("h3",{class:"px-2 py-2"},"Th\u1EC3 lo\u1EA1i:",-1),mt={class:"rounded-xl bg-highlight px-4 py-2"},_t={href:"/browse?genres=mystery"},pt={class:"flex h-[150px] w-full flex-col items-center gap-6 md:flex-row md:items-start"},xt=t("button",{class:"pulse-effect-primary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-primary transition-all hover:scale-[110%]"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true",class:"h-8 w-8"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})]),m(" \u0110\u1ECDc ngay ")],-1),gt=[xt],ft=t("a",{href:"/manga/read/nhat-niem-vinh-hang-20674/63.5/872343"},[t("button",{class:"pulse-effect-secondary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-white text-gray-800 transition-all hover:scale-[110%]"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",class:"h-8 w-8 text-primary"},[t("path",{"fill-rule":"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z","clip-rule":"evenodd"})]),m(" Chap m\u1EDBi nh\u1EA5t ")])],-1),wt=t("button",{class:"shine-effect absolute-center bg-hight-light h-[50px] w-[50px] rounded-xl transition-all hover:text-primary"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true",class:"h-8 w-8"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})])],-1),vt={class:"flex-col-reverse flex"},bt={class:"flex w-full flex-col items-center bg-cyan-300/0 text-white"},yt=m(" T\xF3m t\u1EAFt "),kt=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"},null,-1),Ct=[kt],zt={class:"text-white"};function jt(g,l,i,e,_,r){const o=G,c=L;return d(),E(c,null,{default:h(()=>[t("div",J,[t("div",K,[t("figure",Q,[t("span",U,[t("img",{alt:"comic-banner",src:e.comic.thumbnail,decoding:"async","data-nimg":"fill",class:"count={10} object-fit absolute h-full w-full bg-cover bg-top bg-no-repeat object-cover blur",sizes:"100vw",srcset:e.comic.thumbnail,style:{position:"absolute",inset:"0","box-sizing":"border-box",padding:"0",border:"none",margin:"auto",display:"block",width:"0px",height:"0px","min-width":"100%","max-width":"100%","min-height":"100%","max-height":"100%"}},null,8,W)])])]),t("div",X,[t("section",Y,[t("div",Z,[t("div",$,[t("figure",tt,[t("span",et,[t("img",{alt:"manga-thumbnail",sizes:"100vw",srcset:e.comic.thumbnail,src:e.comic.thumbnail,decoding:"async","data-nimg":"fill",class:"absolute inset-0 rounded-2xl object-cover object-center",style:{position:"absolute",inset:"0px","box-sizing":"border-box",padding:"0px",border:"none",margin:"auto",display:"block",width:"0px",height:"0px","min-width":"100%","max-width":"100%","min-height":"100%","max-height":"100%"}},null,8,st)])])]),t("div",ot,[t("div",it,[t("h1",nt,a(e.comic.title),1),at,t("h3",lt,a(e.comic.author),1),t("h4",rt,[ct,m(" "+a(e.comic.status),1)])]),t("div",dt,[t("ul",ht,[ut,(d(!0),p(S,null,P(e.comic.genres,s=>(d(),p("li",mt,[t("a",_t,a(s.genreTitle),1)]))),256))]),t("div",pt,[t("a",{onClick:l[0]||(l[0]=s=>e.navigateToManga(e.slug))},gt),ft,wt])])])])]),t("div",vt,[u(e.Disclosure,null,{default:h(({open:s})=>[u(e.DisclosureButton,null,{default:h(()=>[t("button",bt,[yt,(d(),p("svg",{class:F([s?"rotate-180 transform":"","h-8 w-8"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},Ct,2))])]),_:2},1024),u(e.DisclosurePanel,{class:"transform scale-100 opacity-100"},{default:h(()=>{var n;return[t("p",zt,a((n=e.comic)==null?void 0:n.review),1)]}),_:1})]),_:1})]),u(o,{chapterList:e.comic.chapterList},null,8,["chapterList"])])])]),_:1})}var Vt=b(I,[["render",jt]]);export{Vt as default};
