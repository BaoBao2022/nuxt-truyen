import{_ as p,d as u,f as x,a as g,o as l,h as i,i as r,e as _,j as e,t as a,F as d,k as f}from"./entry-b8207ed2.mjs";import{u as w}from"./useMangaDetailPagePath-38a61a49.mjs";import"./index-f67d4f5a.mjs";const P=u(()=>x(()=>import("./entry-b8207ed2.mjs").then(function(n){return n.a6}),["entry-b8207ed2.mjs","entry.89390574.css"])),v=g({__name:"SwiperCardContent",props:{spotlight:Object},setup(n,{expose:c}){c();const t={useMangaDetailPagePath:w};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),y={class:"mx-4 mt-6 text-xl md:text-4xl"},C={class:"text-3xl transition-all line-clamp-1 hover:text-primary md:min-h-[30px] md:text-6xl"},D={class:"text-sm line-clamp-3 lg:min-h-[150px] md:text-2xl"},b={class:"hidden space-x-4 text-lg md:flex"};function k(n,c,t,s,S,L){const o=P;return l(),i(d,null,[r(o,{to:s.useMangaDetailPagePath(t.spotlight.slug)},{default:_(()=>[e("h3",y,a(t.spotlight.newChapter),1)]),_:1},8,["to"]),r(o,{to:s.useMangaDetailPagePath(t.spotlight.slug)},{default:_(()=>[e("h1",C,a(t.spotlight.name),1)]),_:1},8,["to"]),r(o,{to:s.useMangaDetailPagePath(t.spotlight.slug)},{default:_(()=>[e("div",D,a(t.spotlight.review?t.spotlight.review:""),1)]),_:1},8,["to"]),e("ul",b,[(l(!0),i(d,null,f(t.spotlight.genres,(m,h)=>(l(),i("li",{key:`genre_spotlight_${h}`,class:"flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1"},a(m),1))),128))])],64)}var E=p(v,[["render",k]]);export{E as default};
