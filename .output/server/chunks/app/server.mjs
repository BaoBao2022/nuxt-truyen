import { v as vue_cjs_prod, r as require$$0 } from '../vue.cjs.prod.mjs';
import { hasProtocol, isEqual, withLeadingSlash, joinURL, parseURL, encodeParam, withBase, withQuery, encodePath } from 'ufo';
import { useStorage, onClickOutside, useDebounce, isClient } from '@vueuse/core';
import MobileDetect from 'mobile-detect';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { u as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import { s as serverRenderer } from '../handlers/renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'h3';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'node:url';
import 'ipx';
import 'stream';

function u$4(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$4),t}

var R$2=(o=>(o[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o))(R$2||{}),O=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(O||{});function P$3({visible:r=!0,features:t=0,ourProps:e,theirProps:o,...i}){var a;let n=w$3(o,e),s=Object.assign(i,{props:n});if(r||t&2&&n.static)return u$3(s);if(t&1){let l=(a=n.unmount)==null||a?0:1;return u$4(l,{[0](){return null},[1](){return u$3({...i,props:{...n,hidden:!0,style:{display:"none"}}})}})}return u$3(s)}function u$3({props:r,attrs:t,slots:e,slot:o,name:i}){var f;let{as:n,...s}=N$2(r,["unmount","static"]),a=(f=e.default)==null?void 0:f.call(e,o),l={};if(n==="template"){if(a=y(a),Object.keys(s).length>0||Object.keys(t).length>0){let[c,...p]=a!=null?a:[];if(!k(c)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).sort((d,g)=>d.localeCompare(g)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));return vue_cjs_prod.cloneVNode(c,Object.assign({},s,l))}return Array.isArray(a)&&a.length===1?a[0]:a}return vue_cjs_prod.h(n,Object.assign({},s,l),a)}function y(r){return r.flatMap(t=>t.type===vue_cjs_prod.Fragment?y(t.children):[t])}function w$3(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let i of r)for(let n in i)n.startsWith("on")&&typeof i[n]=="function"?((e[n])!=null||(e[n]=[]),e[n].push(i[n])):t[n]=i[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(i=>[i,void 0])));for(let i in e)Object.assign(t,{[i](n,...s){let a=e[i];for(let l of a){if(n!=null&&n.defaultPrevented)return;l(n,...s);}}});return t}function N$2(r,t=[]){let e=Object.assign({},r);for(let o of t)o in e&&delete e[o];return e}function k(r){return r==null?!1:typeof r.type=="string"||typeof r.type=="object"||typeof r.type=="function"}

let e$2=0;function n$2(){return ++e$2}function t(){return n$2()}

var o$1=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o$1||{});

function o(n){var l;return n==null||n.value==null?null:(l=n.value.$el)!=null?l:n.value}

let n$1=Symbol("Context");var l$2=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(l$2||{});function f(){return p$1()!==null}function p$1(){return vue_cjs_prod.inject(n$1,null)}function c$3(o){vue_cjs_prod.provide(n$1,o);}

function r$3(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return "button"}function b$2(t,e){let n=vue_cjs_prod.ref(r$3(t.value.type,t.value.as));return vue_cjs_prod.onMounted(()=>{n.value=r$3(t.value.type,t.value.as);}),vue_cjs_prod.watchEffect(()=>{var o$1;n.value||!o(e)||o(e)instanceof HTMLButtonElement&&!((o$1=o(e))!=null&&o$1.hasAttribute("type"))&&(n.value="button");}),n}

function e$1(n){return null;}

let c$2=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var L$2=(o=>(o[o.First=1]="First",o[o.Previous=2]="Previous",o[o.Next=4]="Next",o[o.Last=8]="Last",o[o.WrapAround=16]="WrapAround",o[o.NoScroll=32]="NoScroll",o))(L$2||{}),N$1=(n=>(n[n.Error=0]="Error",n[n.Overflow=1]="Overflow",n[n.Success=2]="Success",n[n.Underflow=3]="Underflow",n))(N$1||{}),T$2=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(T$2||{});function b$1(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(c$2))}var M$1=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(M$1||{});function F$2(e,r=0){var t;return e===((t=e$1())==null?void 0:t.body)?!1:u$4(r,{[0](){return e.matches(c$2)},[1](){let l=e;for(;l!==null;){if(l.matches(c$2))return !0;l=l.parentElement;}return !1}})}function H$2(e){e==null||e.focus({preventScroll:!0});}let h$1=["textarea","input"].join(",");function v(e){var r,t;return (t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,h$1))!=null?t:!1}function w$2(e,r=t=>t){return e.slice().sort((t,l)=>{let n=r(t),i=r(l);if(n===null||i===null)return 0;let o=n.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function P$2(e,r,t=!0){var d;let l=(d=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?d:document,n=Array.isArray(e)?t?w$2(e):e:b$1(e),i=l.activeElement,o=(()=>{if(r&5)return 1;if(r&10)return -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(i))-1;if(r&4)return Math.max(0,n.indexOf(i))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=r&32?{preventScroll:!0}:{},f=0,s=n.length,u;do{if(f>=s||f+s<=0)return 0;let a=m+f;if(r&16)a=(a+s)%s;else {if(a<0)return 3;if(a>=s)return 1}u=n[a],u==null||u.focus(x),f+=o;}while(u!==l.activeElement);return u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),r&6&&v(u)&&u.select(),2}

function T$1(l,f,a=vue_cjs_prod.computed(()=>!0)){}

var p=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(p||{});let m$1=vue_cjs_prod.defineComponent({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(r,{slots:t,attrs:o}){return ()=>{let{features:e,...d}=r,n={"aria-hidden":(e&2)===2?!0:void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return P$3({ourProps:n,theirProps:d,slot:{},attrs:o,slots:t,name:"Hidden"})}}});

var d$3=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(d$3||{});function n(){let o=vue_cjs_prod.ref(0);return o}

function r$2(n,e,d,o){}

var h=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(h||{});let V=Object.assign(vue_cjs_prod.defineComponent({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:vue_cjs_prod.ref(new Set)}},inheritAttrs:!1,setup(o$1,{attrs:u,slots:n$1,expose:r}){let t=vue_cjs_prod.ref(null);r({el:t,$el:t});let a=vue_cjs_prod.computed(()=>e$1());A$1({ownerDocument:a},vue_cjs_prod.computed(()=>Boolean(o$1.features&16)));let e=N({ownerDocument:a,container:t,initialFocus:vue_cjs_prod.computed(()=>o$1.initialFocus)},vue_cjs_prod.computed(()=>Boolean(o$1.features&2)));C$1({ownerDocument:a,container:t,containers:o$1.containers,previousActiveElement:e},vue_cjs_prod.computed(()=>Boolean(o$1.features&8)));let s=n();function i(){let l=o(t);!l||u$4(s.value,{[d$3.Forwards]:()=>P$2(l,L$2.First),[d$3.Backwards]:()=>P$2(l,L$2.Last)});}return ()=>{let l={},T={"data-hi":"container",ref:t},{features:c,initialFocus:H,containers:R,...y}=o$1;return vue_cjs_prod.h(vue_cjs_prod.Fragment,[Boolean(c&4)&&vue_cjs_prod.h(m$1,{as:"button",type:"button",onFocus:i,features:p.Focusable}),P$3({ourProps:T,theirProps:{...u,...y},slot:l,attrs:u,slots:n$1,name:"FocusTrap"}),Boolean(c&4)&&vue_cjs_prod.h(m$1,{as:"button",type:"button",onFocus:i,features:p.Focusable})])}}}),{features:h});function A$1({ownerDocument:o},u){let n=vue_cjs_prod.ref(null),r={value:!1};vue_cjs_prod.onMounted(()=>{vue_cjs_prod.watch(u,(t,a)=>{var e;t!==a&&(!u.value||(r.value=!0,n.value||(n.value=(e=o.value)==null?void 0:e.activeElement)));},{immediate:!0}),vue_cjs_prod.watch(u,(t,a,e)=>{t!==a&&(!u.value||e(()=>{r.value!==!1&&(r.value=!1,H$2(n.value),n.value=null);}));},{immediate:!0});});}function N({ownerDocument:o$1,container:u,initialFocus:n},r){let t=vue_cjs_prod.ref(null);return vue_cjs_prod.onMounted(()=>{vue_cjs_prod.watch([u,n,r],(a,e)=>{var T,c;if(a.every((H,R)=>(e==null?void 0:e[R])===H)||!r.value)return;let s=o(u);if(!s)return;let i=o(n),l=(T=o$1.value)==null?void 0:T.activeElement;if(i){if(i===l){t.value=l;return}}else if(s.contains(l)){t.value=l;return}i?H$2(i):P$2(s,L$2.First)===N$1.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),t.value=(c=o$1.value)==null?void 0:c.activeElement;},{immediate:!0,flush:"post"});}),t}function C$1({ownerDocument:o,container:u,containers:n,previousActiveElement:r},t){var a;r$2((a=o.value)==null?void 0:a.defaultView);}

let l$1="body > *",i$1=new Set,r$1=new Map;function u$2(t){t.setAttribute("aria-hidden","true"),t.inert=!0;}function s$1(t){let n=r$1.get(t);!n||(n["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert);}function g$2(t,n=vue_cjs_prod.ref(!0)){vue_cjs_prod.watchEffect(d=>{if(!n.value||!t.value)return;let a=t.value,o=e$1();if(!!o){i$1.add(a);for(let e of r$1.keys())e.contains(a)&&(s$1(e),r$1.delete(e));o.querySelectorAll(l$1).forEach(e=>{if(e instanceof HTMLElement){for(let f of i$1)if(e.contains(f))return;i$1.size===1&&(r$1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u$2(e));}}),d(()=>{if(i$1.delete(a),i$1.size>0)o.querySelectorAll(l$1).forEach(e=>{if(e instanceof HTMLElement&&!r$1.has(e)){for(let f of i$1)if(e.contains(f))return;r$1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u$2(e);}});else for(let e of r$1.keys())s$1(e),r$1.delete(e);});}});}

let e=Symbol("ForcePortalRootContext");function u$1(){return vue_cjs_prod.inject(e,!1)}let P$1=vue_cjs_prod.defineComponent({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(o,{slots:t,attrs:r}){return vue_cjs_prod.provide(e,o.force),()=>{let{force:f,...n}=o;return P$3({theirProps:n,ourProps:{},slot:{},slots:t,attrs:r,name:"ForcePortalRoot"})}}});

function c$1(t){let r=e$1();if(!r){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let o=r.getElementById("headlessui-portal-root");if(o)return o;let e=r.createElement("div");return e.setAttribute("id","headlessui-portal-root"),r.body.appendChild(e)}let R$1=vue_cjs_prod.defineComponent({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:r,attrs:o}){let e=vue_cjs_prod.ref(null),p=vue_cjs_prod.computed(()=>e$1()),n=u$1(),u=vue_cjs_prod.inject(g$1,null),l=vue_cjs_prod.ref(n===!0||u==null?c$1(e.value):u.resolveTarget());return vue_cjs_prod.watchEffect(()=>{n||u!=null&&(l.value=u.resolveTarget());}),vue_cjs_prod.onUnmounted(()=>{var i,m;let a=(i=p.value)==null?void 0:i.getElementById("headlessui-portal-root");!a||l.value===a&&l.value.children.length<=0&&((m=l.value.parentElement)==null||m.removeChild(l.value));}),()=>{if(l.value===null)return null;let a={ref:e,"data-headlessui-portal":""};return vue_cjs_prod.h(vue_cjs_prod.Teleport,{to:l.value},P$3({ourProps:a,theirProps:t,slot:{},attrs:o,slots:r,name:"Portal"}))}}}),g$1=Symbol("PortalGroupContext"),L$1=vue_cjs_prod.defineComponent({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:r,slots:o}){let e=vue_cjs_prod.reactive({resolveTarget(){return t.target}});return vue_cjs_prod.provide(g$1,e),()=>{let{target:p,...n}=t;return P$3({theirProps:n,ourProps:{},slot:{},attrs:r,slots:o,name:"PortalGroup"})}}});

let i=Symbol("StackContext");var c=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(c||{});function a(){return vue_cjs_prod.inject(i,()=>{})}function s({type:n,element:o,onUpdate:e}){let m=a();function t(...r){e==null||e(...r),m(...r);}vue_cjs_prod.onMounted(()=>{t(0,n,o),vue_cjs_prod.onUnmounted(()=>{t(1,n,o);});}),vue_cjs_prod.provide(i,t);}

let u=Symbol("DescriptionContext");function b(){let t=vue_cjs_prod.inject(u,null);if(t===null)throw new Error("Missing parent");return t}function P({slot:t=vue_cjs_prod.ref({}),name:o="Description",props:s={}}={}){let e=vue_cjs_prod.ref([]);function n(r){return e.value.push(r),()=>{let i=e.value.indexOf(r);i!==-1&&e.value.splice(i,1);}}return vue_cjs_prod.provide(u,{register:n,slot:t,name:o,props:s}),vue_cjs_prod.computed(()=>e.value.length>0?e.value.join(" "):void 0)}let S=vue_cjs_prod.defineComponent({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t$1,{attrs:o,slots:s}){let e=b(),n=`headlessui-description-${t()}`;return vue_cjs_prod.onMounted(()=>vue_cjs_prod.onUnmounted(e.register(n))),()=>{let{name:r="Description",slot:i=vue_cjs_prod.ref({}),props:l={}}=e,c=t$1,d={...Object.entries(l).reduce((f,[a,g])=>Object.assign(f,{[a]:vue_cjs_prod.unref(g)}),{}),id:n};return P$3({ourProps:d,theirProps:c,slot:i.value,attrs:o,slots:s,name:r})}}});

var ge=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ge||{});let M=Symbol("DialogContext");function R(a){let n=vue_cjs_prod.inject(M,null);if(n===null){let t=new Error(`<${a} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return n}let T="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Ae=vue_cjs_prod.defineComponent({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:T},initialFocus:{type:Object,default:null}},emits:{close:a=>!0},setup(a,{emit:n,attrs:t$1,slots:u,expose:i}){var A;let d=vue_cjs_prod.ref(!1);vue_cjs_prod.onMounted(()=>{d.value=!0;});let r=vue_cjs_prod.ref(0),p$2=p$1(),h=vue_cjs_prod.computed(()=>a.open===T&&p$2!==null?u$4(p$2.value,{[l$2.Open]:!0,[l$2.Closed]:!1}):a.open),E=vue_cjs_prod.ref(new Set),f=vue_cjs_prod.ref(null),B=vue_cjs_prod.ref(null),k=vue_cjs_prod.computed(()=>e$1());if(i({el:f,$el:f}),!(a.open!==T||p$2!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof h.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value===T?void 0:a.open}`);let c$1=vue_cjs_prod.computed(()=>d.value&&h.value?0:1),$=vue_cjs_prod.computed(()=>c$1.value===0),C=vue_cjs_prod.computed(()=>r.value>1),Y=vue_cjs_prod.inject(M,null)!==null,q=vue_cjs_prod.computed(()=>C.value?"parent":"leaf");g$2(f,vue_cjs_prod.computed(()=>C.value?$.value:!1)),s({type:"Dialog",element:f,onUpdate:(o,l,e)=>{if(l==="Dialog")return u$4(o,{[c.Add](){E.value.add(e),r.value+=1;},[c.Remove](){E.value.delete(e),r.value-=1;}})}});let G=P({name:"DialogDescription",slot:vue_cjs_prod.computed(()=>({open:h.value}))}),z=`headlessui-dialog-${t()}`,w=vue_cjs_prod.ref(null),y={titleId:w,panelRef:vue_cjs_prod.ref(null),dialogState:c$1,setTitleId(o){w.value!==o&&(w.value=o);},close(){n("close",!1);}};return vue_cjs_prod.provide(M,y),T$1(()=>{var l,e,m;return [...Array.from((e=(l=k.value)==null?void 0:l.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?e:[]).filter(s=>!(!(s instanceof HTMLElement)||s.contains(o(B))||y.panelRef.value&&s.contains(y.panelRef.value))),(m=y.panelRef.value)!=null?m:f.value]},(o,l)=>{y.close(),vue_cjs_prod.nextTick(()=>l==null?void 0:l.focus());},vue_cjs_prod.computed(()=>c$1.value===0&&!C.value)),r$2((A=k.value)==null?void 0:A.defaultView),vue_cjs_prod.watchEffect(o=>{var j;if(c$1.value!==0||Y)return;let l=k.value;if(!l)return;let e=l==null?void 0:l.documentElement,m=(j=l.defaultView)!=null?j:window,s=e.style.overflow,J=e.style.paddingRight,H=m.innerWidth-e.clientWidth;if(e.style.overflow="hidden",H>0){let Q=e.clientWidth-e.offsetWidth,X=H-Q;e.style.paddingRight=`${X}px`;}o(()=>{e.style.overflow=s,e.style.paddingRight=J;});}),vue_cjs_prod.watchEffect(o$1=>{if(c$1.value!==0)return;let l=o(f);if(!l)return;let e=new IntersectionObserver(m=>{for(let s of m)s.boundingClientRect.x===0&&s.boundingClientRect.y===0&&s.boundingClientRect.width===0&&s.boundingClientRect.height===0&&y.close();});e.observe(l),o$1(()=>e.disconnect());}),()=>{let o={...t$1,ref:f,id:z,role:"dialog","aria-modal":c$1.value===0?!0:void 0,"aria-labelledby":w.value,"aria-describedby":G.value},{open:l,initialFocus:e,...m}=a,s={open:c$1.value===0};return vue_cjs_prod.h(P$1,{force:!0},()=>[vue_cjs_prod.h(R$1,()=>vue_cjs_prod.h(L$1,{target:f.value},()=>vue_cjs_prod.h(P$1,{force:!1},()=>vue_cjs_prod.h(V,{initialFocus:e,containers:E,features:$.value?u$4(q.value,{parent:V.features.RestoreFocus,leaf:V.features.All&~V.features.FocusLock}):V.features.None},()=>P$3({ourProps:o,theirProps:m,slot:s,attrs:t$1,slots:u,visible:c$1.value===0,features:R$2.RenderStrategy|R$2.Static,name:"Dialog"}))))),vue_cjs_prod.h(m$1,{features:p.Hidden,ref:B})])}}});vue_cjs_prod.defineComponent({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:n,slots:t$1}){let u=R("DialogOverlay"),i=`headlessui-dialog-overlay-${t()}`;function d(r){r.target===r.currentTarget&&(r.preventDefault(),r.stopPropagation(),u.close());}return ()=>P$3({ourProps:{id:i,"aria-hidden":!0,onClick:d},theirProps:a,slot:{open:u.dialogState.value===0},attrs:n,slots:t$1,name:"DialogOverlay"})}});vue_cjs_prod.defineComponent({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"}},inheritAttrs:!1,setup(a,{attrs:n,slots:t$1,expose:u}){let i=R("DialogBackdrop"),d=`headlessui-dialog-backdrop-${t()}`,r=vue_cjs_prod.ref(null);return u({el:r,$el:r}),vue_cjs_prod.onMounted(()=>{if(i.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let p=a,h={id:d,ref:r,"aria-hidden":!0};return vue_cjs_prod.h(P$1,{force:!0},()=>vue_cjs_prod.h(R$1,()=>P$3({ourProps:h,theirProps:{...n,...p},slot:{open:i.dialogState.value===0},attrs:n,slots:t$1,name:"DialogBackdrop"})))}}});let Le$1=vue_cjs_prod.defineComponent({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:n,slots:t$1,expose:u}){let i=R("DialogPanel"),d=`headlessui-dialog-panel-${t()}`;u({el:i.panelRef,$el:i.panelRef});function r(p){p.stopPropagation();}return ()=>{let p={id:d,ref:i.panelRef,onClick:r};return P$3({ourProps:p,theirProps:a,slot:{open:i.dialogState.value===0},attrs:n,slots:t$1,name:"DialogPanel"})}}});vue_cjs_prod.defineComponent({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(a,{attrs:n,slots:t$1}){let u=R("DialogTitle"),i=`headlessui-dialog-title-${t()}`;return vue_cjs_prod.onMounted(()=>{u.setTitleId(i),vue_cjs_prod.onUnmounted(()=>u.setTitleId(null));}),()=>P$3({ourProps:{id:i},theirProps:a,slot:{open:u.dialogState.value===0},attrs:n,slots:t$1,name:"DialogTitle"})}});S;

var w$1=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(w$1||{});let x=Symbol("DisclosureContext");function C(l){let r=vue_cjs_prod.inject(x,null);if(r===null){let n=new Error(`<${l} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,C),n}return r}let B$1=Symbol("DisclosurePanelContext");function H$1(){return vue_cjs_prod.inject(B$1,null)}let A=vue_cjs_prod.defineComponent({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(l,{slots:r,attrs:n}){let d=`headlessui-disclosure-button-${t()}`,e=`headlessui-disclosure-panel-${t()}`,o$1=vue_cjs_prod.ref(l.defaultOpen?0:1),i=vue_cjs_prod.ref(null),s=vue_cjs_prod.ref(null),u={buttonId:d,panelId:e,disclosureState:o$1,panel:i,button:s,toggleDisclosure(){o$1.value=u$4(o$1.value,{[0]:1,[1]:0});},closeDisclosure(){o$1.value!==1&&(o$1.value=1);},close(a){u.closeDisclosure();let c=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?o(a):o(u.button):o(u.button))();c==null||c.focus();}};return vue_cjs_prod.provide(x,u),c$3(vue_cjs_prod.computed(()=>u$4(o$1.value,{[0]:l$2.Open,[1]:l$2.Closed}))),()=>{let{defaultOpen:a,...c}=l,m={open:o$1.value===0,close:u.close};return P$3({theirProps:c,ourProps:{},slot:m,slots:r,attrs:n,name:"Disclosure"})}}}),G=vue_cjs_prod.defineComponent({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(l,{attrs:r,slots:n,expose:d}){let e=C("DisclosureButton"),o$2=H$1(),i=o$2===null?!1:o$2===e.panelId,s=vue_cjs_prod.ref(null);d({el:s,$el:s}),i||vue_cjs_prod.watchEffect(()=>{e.button.value=s.value;});let u=b$2(vue_cjs_prod.computed(()=>({as:l.as,type:r.type})),s);function a(){var t;l.disabled||(i?(e.toggleDisclosure(),(t=o(e.button))==null||t.focus()):e.toggleDisclosure());}function c(t){var D;if(!l.disabled)if(i)switch(t.key){case o$1.Space:case o$1.Enter:t.preventDefault(),t.stopPropagation(),e.toggleDisclosure(),(D=o(e.button))==null||D.focus();break}else switch(t.key){case o$1.Space:case o$1.Enter:t.preventDefault(),t.stopPropagation(),e.toggleDisclosure();break}}function m(t){switch(t.key){case o$1.Space:t.preventDefault();break}}return ()=>{let t={open:e.disclosureState.value===0},D=i?{ref:s,type:u.value,onClick:a,onKeydown:c}:{id:e.buttonId,ref:s,type:u.value,"aria-expanded":l.disabled?void 0:e.disclosureState.value===0,"aria-controls":o(e.panel)?e.panelId:void 0,disabled:l.disabled?!0:void 0,onClick:a,onKeydown:c,onKeyup:m};return P$3({ourProps:D,theirProps:l,slot:t,attrs:r,slots:n,name:"DisclosureButton"})}}}),J=vue_cjs_prod.defineComponent({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(l,{attrs:r,slots:n,expose:d}){let e=C("DisclosurePanel");d({el:e.panel,$el:e.panel}),vue_cjs_prod.provide(B$1,e.panelId);let o=p$1(),i=vue_cjs_prod.computed(()=>o!==null?o.value===l$2.Open:e.disclosureState.value===0);return ()=>{let s={open:e.disclosureState.value===0,close:e.close},u={id:e.panelId,ref:e.panel};return P$3({ourProps:u,theirProps:l,slot:s,attrs:r,slots:n,features:R$2.RenderStrategy|R$2.Static,visible:i.value,name:"DisclosurePanel"})}}});

var pe=(f=>(f[f.Open=0]="Open",f[f.Closed=1]="Closed",f))(pe||{});let Z$1=Symbol("PopoverContext");function W(P){let S=vue_cjs_prod.inject(Z$1,null);if(S===null){let f=new Error(`<${P} /> is missing a parent <${ve.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,W),f}return S}let ee$1=Symbol("PopoverGroupContext");function te$1(){return vue_cjs_prod.inject(ee$1,null)}let oe$1=Symbol("PopoverPanelContext");function fe$1(){return vue_cjs_prod.inject(oe$1,null)}let ve=vue_cjs_prod.defineComponent({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(P,{slots:S,attrs:f,expose:E}){var p;let t$1=`headlessui-popover-button-${t()}`,e=`headlessui-popover-panel-${t()}`,m=vue_cjs_prod.ref(null);E({el:m,$el:m});let a=vue_cjs_prod.ref(1),b=vue_cjs_prod.ref(null),g=vue_cjs_prod.ref(null),y=vue_cjs_prod.ref(null),s=vue_cjs_prod.ref(null),c=vue_cjs_prod.computed(()=>e$1()),O=vue_cjs_prod.computed(()=>{if(!o(b)||!o(s))return !1;for(let n of document.querySelectorAll("body > *"))if(Number(n==null?void 0:n.contains(o(b)))^Number(n==null?void 0:n.contains(o(s))))return !0;return !1}),d={popoverState:a,buttonId:t$1,panelId:e,panel:s,button:b,isPortalled:O,beforePanelSentinel:g,afterPanelSentinel:y,togglePopover(){a.value=u$4(a.value,{[0]:1,[1]:0});},closePopover(){a.value!==1&&(a.value=1);},close(n){d.closePopover();let i=(()=>n?n instanceof HTMLElement?n:n.value instanceof HTMLElement?o(n):o(d.button):o(d.button))();i==null||i.focus();}};vue_cjs_prod.provide(Z$1,d),c$3(vue_cjs_prod.computed(()=>u$4(a.value,{[0]:l$2.Open,[1]:l$2.Closed})));let D={buttonId:t$1,panelId:e,close(){d.closePopover();}},l=te$1(),o$1=l==null?void 0:l.registerPopover;return vue_cjs_prod.watchEffect(()=>o$1==null?void 0:o$1(D)),r$2((p=c.value)==null?void 0:p.defaultView),T$1([b,s],(n,i)=>{var v;d.closePopover(),F$2(i,M$1.Loose)||(n.preventDefault(),(v=o(b))==null||v.focus());},vue_cjs_prod.computed(()=>a.value===0)),()=>{let n={open:a.value===0,close:d.close};return P$3({theirProps:P,ourProps:{ref:m},slot:n,slots:S,attrs:f,name:"Popover"})}}}),ke=vue_cjs_prod.defineComponent({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(P,{attrs:S,slots:f,expose:E}){let t$1=W("PopoverButton"),e=vue_cjs_prod.computed(()=>e$1(t$1.button));E({el:t$1.button,$el:t$1.button});let m=te$1(),a=m==null?void 0:m.closeOthers,b=fe$1(),g=b===null?!1:b===t$1.panelId,y=vue_cjs_prod.ref(null),s=`headlessui-focus-sentinel-${t()}`;g||vue_cjs_prod.watchEffect(()=>{t$1.button.value=y.value;});let c=b$2(vue_cjs_prod.computed(()=>({as:P.as,type:S.type})),y);function O(o$2){var u,p,n,i,v;if(g){if(t$1.popoverState.value===1)return;switch(o$2.key){case o$1.Space:case o$1.Enter:o$2.preventDefault(),(p=(u=o$2.target).click)==null||p.call(u),t$1.closePopover(),(n=o(t$1.button))==null||n.focus();break}}else switch(o$2.key){case o$1.Space:case o$1.Enter:o$2.preventDefault(),o$2.stopPropagation(),t$1.popoverState.value===1&&(a==null||a(t$1.buttonId)),t$1.togglePopover();break;case o$1.Escape:if(t$1.popoverState.value!==0)return a==null?void 0:a(t$1.buttonId);if(!o(t$1.button)||((i=e.value)==null?void 0:i.activeElement)&&!((v=o(t$1.button))!=null&&v.contains(e.value.activeElement)))return;o$2.preventDefault(),o$2.stopPropagation(),t$1.closePopover();break}}function d(o){g||o.key===o$1.Space&&o.preventDefault();}function D(o$1){var u,p;P.disabled||(g?(t$1.closePopover(),(u=o(t$1.button))==null||u.focus()):(o$1.preventDefault(),o$1.stopPropagation(),t$1.popoverState.value===1&&(a==null||a(t$1.buttonId)),t$1.togglePopover(),(p=o(t$1.button))==null||p.focus()));}function l(o){o.preventDefault(),o.stopPropagation();}return ()=>{let o$1=t$1.popoverState.value===0,u={open:o$1},p$1=g?{ref:y,type:c.value,onKeydown:O,onClick:D}:{ref:y,id:t$1.buttonId,type:c.value,"aria-expanded":P.disabled?void 0:t$1.popoverState.value===0,"aria-controls":o(t$1.panel)?t$1.panelId:void 0,disabled:P.disabled?!0:void 0,onKeydown:O,onKeyup:d,onClick:D,onMousedown:l},n$1=n();function i(){let v=o(t$1.panel);if(!v)return;function k(){u$4(n$1.value,{[d$3.Forwards]:()=>P$2(v,L$2.First),[d$3.Backwards]:()=>P$2(v,L$2.Last)});}k();}return vue_cjs_prod.h(vue_cjs_prod.Fragment,[P$3({ourProps:p$1,theirProps:{...S,...P},slot:u,attrs:S,slots:f,name:"PopoverButton"}),o$1&&!g&&t$1.isPortalled.value&&vue_cjs_prod.h(m$1,{id:s,features:p.Focusable,as:"button",type:"button",onFocus:i})])}}});vue_cjs_prod.defineComponent({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(P,{attrs:S,slots:f}){let E=W("PopoverOverlay"),t$1=`headlessui-popover-overlay-${t()}`,e=p$1(),m=vue_cjs_prod.computed(()=>e!==null?e.value===l$2.Open:E.popoverState.value===0);function a(){E.closePopover();}return ()=>{let b={open:E.popoverState.value===0};return P$3({ourProps:{id:t$1,"aria-hidden":!0,onClick:a},theirProps:P,slot:b,attrs:S,slots:f,features:R$2.RenderStrategy|R$2.Static,visible:m.value,name:"PopoverOverlay"})}}});let Le=vue_cjs_prod.defineComponent({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},inheritAttrs:!1,setup(P,{attrs:S,slots:f,expose:E}){let{focus:t$1}=P,e=W("PopoverPanel"),m=vue_cjs_prod.computed(()=>e$1(e.panel)),a=`headlessui-focus-sentinel-before-${t()}`,b=`headlessui-focus-sentinel-after-${t()}`;E({el:e.panel,$el:e.panel}),vue_cjs_prod.provide(oe$1,e.panelId),vue_cjs_prod.watchEffect(()=>{var o$1,u;if(!t$1||e.popoverState.value!==0||!e.panel)return;let l=(o$1=m.value)==null?void 0:o$1.activeElement;(u=o(e.panel))!=null&&u.contains(l)||P$2(o(e.panel),L$2.First);});let g=p$1(),y=vue_cjs_prod.computed(()=>g!==null?g.value===l$2.Open:e.popoverState.value===0);function s(l){var o$2,u;switch(l.key){case o$1.Escape:if(e.popoverState.value!==0||!o(e.panel)||m.value&&!((o$2=o(e.panel))!=null&&o$2.contains(m.value.activeElement)))return;l.preventDefault(),l.stopPropagation(),e.closePopover(),(u=o(e.button))==null||u.focus();break}}function c(l){var u,p,n,i,v;let o$1=l.relatedTarget;!o$1||!o(e.panel)||(u=o(e.panel))!=null&&u.contains(o$1)||(e.closePopover(),(((n=(p=o(e.beforePanelSentinel))==null?void 0:p.contains)==null?void 0:n.call(p,o$1))||((v=(i=o(e.afterPanelSentinel))==null?void 0:i.contains)==null?void 0:v.call(i,o$1)))&&o$1.focus({preventScroll:!0}));}let O=n();function d(){let l=o(e.panel);if(!l)return;function o$1(){u$4(O.value,{[d$3.Forwards]:()=>{P$2(l,L$2.Next);},[d$3.Backwards]:()=>{var u;(u=o(e.button))==null||u.focus({preventScroll:!0});}});}o$1();}function D(){let l=o(e.panel);if(!l)return;function o$1(){u$4(O.value,{[d$3.Forwards]:()=>{var $,z;let u=o(e.button),p=o(e.panel);if(!u)return;let n=b$1(),i=n.indexOf(u),v=n.slice(0,i+1),K=[...n.slice(i+1),...v];for(let B of K.slice())if(((z=($=B==null?void 0:B.id)==null?void 0:$.startsWith)==null?void 0:z.call($,"headlessui-focus-sentinel-"))||(p==null?void 0:p.contains(B))){let J=K.indexOf(B);J!==-1&&K.splice(J,1);}P$2(K,L$2.First,!1);},[d$3.Backwards]:()=>P$2(l,L$2.Previous)});}o$1();}return ()=>{let l={open:e.popoverState.value===0,close:e.close},o={ref:e.panel,id:e.panelId,onKeydown:s,onFocusout:t$1&&e.popoverState.value===0?c:void 0,tabIndex:-1};return P$3({ourProps:o,theirProps:{...S,...P},attrs:S,slot:l,slots:{...f,default:(...u)=>{var p$1;return [vue_cjs_prod.h(vue_cjs_prod.Fragment,[y.value&&e.isPortalled.value&&vue_cjs_prod.h(m$1,{id:a,ref:e.beforePanelSentinel,features:p.Focusable,as:"button",type:"button",onFocus:d}),(p$1=f.default)==null?void 0:p$1.call(f,...u),y.value&&e.isPortalled.value&&vue_cjs_prod.h(m$1,{id:b,ref:e.afterPanelSentinel,features:p.Focusable,as:"button",type:"button",onFocus:D})])]}},features:R$2.RenderStrategy|R$2.Static,visible:y.value,name:"PopoverPanel"})}}});vue_cjs_prod.defineComponent({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(P,{attrs:S,slots:f,expose:E}){let t=vue_cjs_prod.ref(null),e=vue_cjs_prod.ref([]),m=vue_cjs_prod.computed(()=>e$1());E({el:t,$el:t});function a(s){let c=e.value.indexOf(s);c!==-1&&e.value.splice(c,1);}function b(s){return e.value.push(s),()=>{a(s);}}function g(){var O;let s=m.value;if(!s)return !1;let c=s.activeElement;return (O=o(t))!=null&&O.contains(c)?!0:e.value.some(d=>{var D,l;return ((D=s.getElementById(d.buttonId))==null?void 0:D.contains(c))||((l=s.getElementById(d.panelId))==null?void 0:l.contains(c))})}function y(s){for(let c of e.value)c.buttonId!==s&&c.close();}return vue_cjs_prod.provide(ee$1,{registerPopover:b,unregisterPopover:a,isFocusWithinPopoverGroup:g,closeOthers:y}),()=>P$3({ourProps:{ref:t},theirProps:P,slot:{},attrs:S,slots:f,name:"PopoverGroup"})}});

let d$2=vue_cjs_prod.defineComponent({props:{onFocus:{type:Function,required:!0}},setup(t){let n=vue_cjs_prod.ref(!0);return ()=>n.value?vue_cjs_prod.h(m$1,{as:"button",type:"button",features:p.Focusable,onFocus(o){o.preventDefault();let e,a=50;function r(){var u;if(a--<=0){e&&cancelAnimationFrame(e);return}if((u=t.onFocus)!=null&&u.call(t)){n.value=!1,cancelAnimationFrame(e);return}e=requestAnimationFrame(r);}e=requestAnimationFrame(r);}}):null}});

let H=Symbol("TabsContext");function I(n){let u=vue_cjs_prod.inject(H,null);if(u===null){let i=new Error(`<${n} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,I),i}return u}let Y=vue_cjs_prod.defineComponent({name:"TabGroup",emits:{change:n=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(n,{slots:u,attrs:i,emit:f}){let t=vue_cjs_prod.ref(null),o$1=vue_cjs_prod.ref([]),l=vue_cjs_prod.ref([]),d={selectedIndex:t,orientation:vue_cjs_prod.computed(()=>n.vertical?"vertical":"horizontal"),activation:vue_cjs_prod.computed(()=>n.manual?"manual":"auto"),tabs:o$1,panels:l,setSelectedIndex(e){t.value!==e&&(t.value=e,f("change",e));},registerTab(e){o$1.value.includes(e)||o$1.value.push(e);},unregisterTab(e){let r=o$1.value.indexOf(e);r!==-1&&o$1.value.splice(r,1);},registerPanel(e){l.value.includes(e)||l.value.push(e);},unregisterPanel(e){let r=l.value.indexOf(e);r!==-1&&l.value.splice(r,1);}};return vue_cjs_prod.provide(H,d),vue_cjs_prod.watchEffect(()=>{var v;if(d.tabs.value.length<=0||n.selectedIndex===null&&t.value!==null)return;let e=d.tabs.value.map(p=>o(p)).filter(Boolean),r=e.filter(p=>!p.hasAttribute("disabled")),s=(v=n.selectedIndex)!=null?v:n.defaultIndex;if(s<0)t.value=e.indexOf(r[0]);else if(s>d.tabs.value.length)t.value=e.indexOf(r[r.length-1]);else {let p=e.slice(0,s),a=[...e.slice(s),...p].find(c=>r.includes(c));if(!a)return;t.value=e.indexOf(a);}}),()=>{let e={selectedIndex:t.value};return vue_cjs_prod.h(vue_cjs_prod.Fragment,[o$1.value.length<=0&&vue_cjs_prod.h(d$2,{onFocus:()=>{for(let r of o$1.value){let s=o(r);if((s==null?void 0:s.tabIndex)===0)return s.focus(),!0}return !1}}),P$3({theirProps:{...i,...N$2(n,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:e,slots:u,attrs:i,name:"TabGroup"})])}}}),Z=vue_cjs_prod.defineComponent({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(n,{attrs:u,slots:i}){let f=I("TabList");return ()=>{let t={selectedIndex:f.selectedIndex.value},o={role:"tablist","aria-orientation":f.orientation.value};return P$3({ourProps:o,theirProps:n,slot:t,attrs:u,slots:i,name:"TabList"})}}}),ee=vue_cjs_prod.defineComponent({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(n,{attrs:u,slots:i,expose:f}){let t$1=I("Tab"),o$2=`headlessui-tabs-tab-${t()}`,l=vue_cjs_prod.ref(null);f({el:l,$el:l}),vue_cjs_prod.onMounted(()=>t$1.registerTab(l)),vue_cjs_prod.onUnmounted(()=>t$1.unregisterTab(l));let d=vue_cjs_prod.computed(()=>t$1.tabs.value.indexOf(l)),e=vue_cjs_prod.computed(()=>d.value===t$1.selectedIndex.value);function r(a){let c=t$1.tabs.value.map(S=>o(S)).filter(Boolean);if(a.key===o$1.Space||a.key===o$1.Enter){a.preventDefault(),a.stopPropagation(),t$1.setSelectedIndex(d.value);return}switch(a.key){case o$1.Home:case o$1.PageUp:return a.preventDefault(),a.stopPropagation(),P$2(c,L$2.First);case o$1.End:case o$1.PageDown:return a.preventDefault(),a.stopPropagation(),P$2(c,L$2.Last)}if(u$4(t$1.orientation.value,{vertical(){if(a.key===o$1.ArrowUp)return P$2(c,L$2.Previous|L$2.WrapAround);if(a.key===o$1.ArrowDown)return P$2(c,L$2.Next|L$2.WrapAround)},horizontal(){if(a.key===o$1.ArrowLeft)return P$2(c,L$2.Previous|L$2.WrapAround);if(a.key===o$1.ArrowRight)return P$2(c,L$2.Next|L$2.WrapAround)}}))return a.preventDefault()}function s(){var a;(a=o(l))==null||a.focus();}function v(){var a;n.disabled||((a=o(l))==null||a.focus(),t$1.setSelectedIndex(d.value));}function p(a){a.preventDefault();}let E=b$2(vue_cjs_prod.computed(()=>({as:n.as,type:u.type})),l);return ()=>{var S,R;let a={selected:e.value},c={ref:l,onKeydown:r,onFocus:t$1.activation.value==="manual"?s:v,onMousedown:p,onClick:v,id:o$2,role:"tab",type:E.value,"aria-controls":(R=(S=t$1.panels.value[d.value])==null?void 0:S.value)==null?void 0:R.id,"aria-selected":e.value,tabIndex:e.value?0:-1,disabled:n.disabled?!0:void 0};return P$3({ourProps:c,theirProps:n,slot:a,attrs:u,slots:i,name:"Tab"})}}}),te=vue_cjs_prod.defineComponent({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(n,{slots:u,attrs:i}){let f=I("TabPanels");return ()=>{let t={selectedIndex:f.selectedIndex.value};return P$3({theirProps:n,ourProps:{},slot:t,attrs:i,slots:u,name:"TabPanels"})}}}),ae$1=vue_cjs_prod.defineComponent({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(n,{attrs:u,slots:i,expose:f}){let t$1=I("TabPanel"),o=`headlessui-tabs-panel-${t()}`,l=vue_cjs_prod.ref(null);f({el:l,$el:l}),vue_cjs_prod.onMounted(()=>t$1.registerPanel(l)),vue_cjs_prod.onUnmounted(()=>t$1.unregisterPanel(l));let d=vue_cjs_prod.computed(()=>t$1.panels.value.indexOf(l)),e=vue_cjs_prod.computed(()=>d.value===t$1.selectedIndex.value);return ()=>{var v,p;let r={selected:e.value},s={ref:l,id:o,role:"tabpanel","aria-labelledby":(p=(v=t$1.tabs.value[d.value])==null?void 0:v.value)==null?void 0:p.id,tabIndex:e.value?0:-1};return P$3({ourProps:s,theirProps:n,slot:r,attrs:u,slots:i,features:R$2.Static|R$2.RenderStrategy,visible:e.value,name:"TabPanel"})}}});

function l(r){let e={called:!1};return (...t)=>{if(!e.called)return e.called=!0,r(...t)}}

function r(){let i=[],o=[],t={enqueue(e){o.push(e);},requestAnimationFrame(...e){let a=requestAnimationFrame(...e);t.add(()=>cancelAnimationFrame(a));},nextFrame(...e){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...e);});},setTimeout(...e){let a=setTimeout(...e);t.add(()=>clearTimeout(a));},add(e){i.push(e);},dispose(){for(let e of i.splice(0))e();},async workQueue(){for(let e of o.splice(0))await e();}};return t}

function m(e,...t){e&&t.length>0&&e.classList.add(...t);}function d$1(e,...t){e&&t.length>0&&e.classList.remove(...t);}var g=(i=>(i.Finished="finished",i.Cancelled="cancelled",i))(g||{});function F$1(e,t){let i=r();if(!e)return i.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[l,s]=[n,a].map(o=>{let[u=0]=o.split(",").filter(Boolean).map(r=>r.includes("ms")?parseFloat(r):parseFloat(r)*1e3).sort((r,c)=>c-r);return u});return l!==0?i.setTimeout(()=>t("finished"),l+s):t("finished"),i.add(()=>t("cancelled")),i.dispose}function L(e,t,i,n,a,l$1){let s=r(),o=l$1!==void 0?l(l$1):()=>{};return d$1(e,...a),m(e,...t,...i),s.nextFrame(()=>{d$1(e,...i),m(e,...n),s.add(F$1(e,u=>(d$1(e,...n,...t),m(e,...a),o(u))));}),s.add(()=>d$1(e,...t,...i,...n,...a)),s.add(()=>o("cancelled")),s.dispose}

function d(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let B=Symbol("TransitionContext");var ae=(a=>(a.Visible="visible",a.Hidden="hidden",a))(ae||{});function le(){return vue_cjs_prod.inject(B,null)!==null}function ie(){let e=vue_cjs_prod.inject(B,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function se(){let e=vue_cjs_prod.inject(F,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let F=Symbol("NestingContext");function w(e){return "children"in e?w(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function K(e){let t=vue_cjs_prod.ref([]),a=vue_cjs_prod.ref(!1);vue_cjs_prod.onMounted(()=>a.value=!0),vue_cjs_prod.onUnmounted(()=>a.value=!1);function s(r,n=O.Hidden){let l=t.value.findIndex(({id:i})=>i===r);l!==-1&&(u$4(n,{[O.Unmount](){t.value.splice(l,1);},[O.Hidden](){t.value[l].state="hidden";}}),!w(t)&&a.value&&(e==null||e()));}function v(r){let n=t.value.find(({id:l})=>l===r);return n?n.state!=="visible"&&(n.state="visible"):t.value.push({id:r,state:"visible"}),()=>s(r,O.Unmount)}return {children:t,register:v,unregister:s}}let _=R$2.RenderStrategy,oe=vue_cjs_prod.defineComponent({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t$1,attrs:a,slots:s,expose:v}){if(!le()&&f())return ()=>vue_cjs_prod.h(fe,{...e,onBeforeEnter:()=>t$1("beforeEnter"),onAfterEnter:()=>t$1("afterEnter"),onBeforeLeave:()=>t$1("beforeLeave"),onAfterLeave:()=>t$1("afterLeave")},s);let r=vue_cjs_prod.ref(null),n=vue_cjs_prod.ref("visible"),l=vue_cjs_prod.computed(()=>e.unmount?O.Unmount:O.Hidden);v({el:r,$el:r});let{show:i,appear:x}=ie(),{register:g$1,unregister:p}=se(),R={value:!0},m=t(),S={value:!1},N=K(()=>{S.value||(n.value="hidden",p(m),t$1("afterLeave"));});vue_cjs_prod.onMounted(()=>{let o=g$1(m);vue_cjs_prod.onUnmounted(o);}),vue_cjs_prod.watchEffect(()=>{if(l.value===O.Hidden&&!!m){if(i&&n.value!=="visible"){n.value="visible";return}u$4(n.value,{["hidden"]:()=>p(m),["visible"]:()=>g$1(m)});}});let k=d(e.enter),$=d(e.enterFrom),q=d(e.enterTo),O$1=d(e.entered),z=d(e.leave),G=d(e.leaveFrom),J=d(e.leaveTo);vue_cjs_prod.onMounted(()=>{vue_cjs_prod.watchEffect(()=>{if(n.value==="visible"){let o$1=o(r);if(o$1 instanceof Comment&&o$1.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}});});function Q(o$1){let c=R.value&&!x.value,u=o(r);!u||!(u instanceof HTMLElement)||c||(S.value=!0,i.value&&t$1("beforeEnter"),i.value||t$1("beforeLeave"),o$1(i.value?L(u,k,$,q,O$1,C=>{S.value=!1,C===g.Finished&&t$1("afterEnter");}):L(u,z,G,J,O$1,C=>{S.value=!1,C===g.Finished&&(w(N)||(n.value="hidden",p(m),t$1("afterLeave")));})));}return vue_cjs_prod.onMounted(()=>{vue_cjs_prod.watch([i],(o,c,u)=>{Q(u),R.value=!1;},{immediate:!0});}),vue_cjs_prod.provide(F,N),c$3(vue_cjs_prod.computed(()=>u$4(n.value,{["visible"]:l$2.Open,["hidden"]:l$2.Closed}))),()=>{let{appear:o,show:c,enter:u,enterFrom:C,enterTo:de,entered:ve,leave:pe,leaveFrom:me,leaveTo:Te,...W}=e;return P$3({theirProps:W,ourProps:{ref:r},slot:{},slots:s,attrs:a,features:_,visible:n.value==="visible",name:"TransitionChild"})}}}),ue=oe,fe=vue_cjs_prod.defineComponent({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:s}){let v=p$1(),r=vue_cjs_prod.computed(()=>e.show===null&&v!==null?u$4(v.value,{[l$2.Open]:!0,[l$2.Closed]:!1}):e.show);vue_cjs_prod.watchEffect(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let n=vue_cjs_prod.ref(r.value?"visible":"hidden"),l=K(()=>{n.value="hidden";}),i=vue_cjs_prod.ref(!0),x={show:r,appear:vue_cjs_prod.computed(()=>e.appear||!i.value)};return vue_cjs_prod.onMounted(()=>{vue_cjs_prod.watchEffect(()=>{i.value=!1,r.value?n.value="visible":w(l)||(n.value="hidden");});}),vue_cjs_prod.provide(F,l),vue_cjs_prod.provide(B,x),()=>{let g=N$2(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return P$3({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...s,default:()=>[vue_cjs_prod.h(ue,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...p,...g},s.default)]},attrs:{},features:_,visible:n.value==="visible",name:"Transition"})}}});

/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject$2(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend$1(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject$2(src[key]) &&
            isObject$2(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend$1(target[key], src[key]);
        }
    });
}

const ssrDocument = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: '',
    },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return {
            initEvent() { },
        };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
}

function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

/* eslint no-underscore-dangle: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });

  function run() {
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(timeout);
    timeout = nextTick(() => {
      let autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit('autoplay');
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit('autoplay');
      } else {
        stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }

  function start() {
    if (typeof timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    emit('autoplayStart');
    run();
    return true;
  }

  function stop() {
    if (!swiper.autoplay.running) return false;
    if (typeof timeout === 'undefined') return false;

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    swiper.autoplay.running = false;
    emit('autoplayStop');
    return true;
  }

  function pause(speed) {
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (timeout) clearTimeout(timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ['transitionend', 'webkitTransitionEnd'].forEach(event => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }

  function onVisibilityChange() {
    const document = getDocument();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }

  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }

  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      emit('autoplayPause');
      pause();
    }

    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }

  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }

    swiper.autoplay.paused = false;
    emit('autoplayResume');
    run();
  }

  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on('mouseenter', onMouseEnter);
      swiper.$el.on('mouseleave', onMouseLeave);
    }
  }

  function detachMouseEvents() {
    swiper.$el.off('mouseenter', onMouseEnter);
    swiper.$el.off('mouseleave', onMouseLeave);
  }

  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = getDocument();
      document.addEventListener('visibilitychange', onVisibilityChange);
      attachMouseEvents();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on('touchEnd', () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on('destroy', () => {
    detachMouseEvents();

    if (swiper.autoplay.running) {
      stop();
    }

    const document = getDocument();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}

function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }

    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;

    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows

      swiper.slides.each(slideEl => {
        const $slideEl = swiper.$(slideEl);
        $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
      }); // create new one

      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;

    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }

    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

function effectTarget(effectParams, $slideEl) {
  if (effectParams.transformEl) {
    return $slideEl.find(effectParams.transformEl).css({
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden'
    });
  }

  return $slideEl;
}

function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformEl,
    allSlides
  } = _ref;
  const {
    slides,
    activeIndex,
    $wrapperEl
  } = swiper;

  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let $transitionEndTarget;

    if (allSlides) {
      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
    } else {
      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
    }

    $transitionEndTarget.transitionEnd(() => {
      if (eventTriggered) return;
      if (!swiper || swiper.destroyed) return;
      eventTriggered = true;
      swiper.animating = false;
      const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

      for (let i = 0; i < triggerEvents.length; i += 1) {
        $wrapperEl.trigger(triggerEvents[i]);
      }
    });
  }
}

function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.css({
        opacity: slideOpacity
      }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.fadeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  effectInit({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request, error, response) {
  let message = "";
  if (request && response) {
    message = `${response.status} ${response.statusText} (${request.toString()})`;
  }
  if (error) {
    message = `${error.message} (${message})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", { get() {
    return request;
  } });
  Object.defineProperty(fetchError, "response", { get() {
    return response;
  } });
  Object.defineProperty(fetchError, "data", { get() {
    return response && response._data;
  } });
  return fetchError;
}
const payloadMethods = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(val) {
  if (val === void 0) {
    return false;
  }
  const t = typeof val;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(val)) {
    return true;
  }
  return val.constructor && val.constructor.name === "Object" || typeof val.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift();
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  409,
  425,
  429,
  500,
  502,
  503,
  504
]);
function createFetch(globalOptions) {
  const { fetch: fetch2, Headers: Headers2 } = globalOptions;
  function onError(ctx) {
    if (ctx.options.retry !== false) {
      const retries = typeof ctx.options.retry === "number" ? ctx.options.retry : isPayloadMethod(ctx.options.method) ? 0 : 1;
      const responseCode = ctx.response && ctx.response.status || 500;
      if (retries > 0 && retryStatusCodes.has(responseCode)) {
        return $fetchRaw(ctx.request, {
          ...ctx.options,
          retry: retries - 1
        });
      }
    }
    const err = createFetchError(ctx.request, ctx.error, ctx.response);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, $fetchRaw);
    }
    throw err;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _opts = {}) {
    const ctx = {
      request: _request,
      options: { ...globalOptions.defaults, ..._opts },
      response: void 0,
      error: void 0
    };
    if (ctx.options.onRequest) {
      await ctx.options.onRequest(ctx);
    }
    if (typeof ctx.request === "string") {
      if (ctx.options.baseURL) {
        ctx.request = withBase(ctx.request, ctx.options.baseURL);
      }
      if (ctx.options.params) {
        ctx.request = withQuery(ctx.request, ctx.options.params);
      }
      if (ctx.options.body && isPayloadMethod(ctx.options.method)) {
        if (isJSONSerializable(ctx.options.body)) {
          ctx.options.body = typeof ctx.options.body === "string" ? ctx.options.body : JSON.stringify(ctx.options.body);
          ctx.options.headers = new Headers2(ctx.options.headers);
          if (!ctx.options.headers.has("content-type")) {
            ctx.options.headers.set("content-type", "application/json");
          }
          if (!ctx.options.headers.has("accept")) {
            ctx.options.headers.set("accept", "application/json");
          }
        }
      }
    }
    ctx.response = await fetch2(ctx.request, ctx.options).catch(async (error) => {
      ctx.error = error;
      if (ctx.options.onRequestError) {
        await ctx.options.onRequestError(ctx);
      }
      return onError(ctx);
    });
    const responseType = (ctx.options.parseResponse ? "json" : ctx.options.responseType) || detectResponseType(ctx.response.headers.get("content-type") || "");
    if (responseType === "json") {
      const data = await ctx.response.text();
      const parseFn = ctx.options.parseResponse || destr;
      ctx.response._data = parseFn(data);
    } else {
      ctx.response._data = await ctx.response[responseType]();
    }
    if (ctx.options.onResponse) {
      await ctx.options.onResponse(ctx);
    }
    if (!ctx.response.ok) {
      if (ctx.options.onResponseError) {
        await ctx.options.onResponseError(ctx);
      }
    }
    return ctx.response.ok ? ctx.response : onError(ctx);
  };
  const $fetch2 = function $fetch22(request, opts) {
    return $fetchRaw(request, opts).then((r) => r._data);
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.create = (defaultOptions = {}) => createFetch({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch2;
}
const _globalThis$2 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const fetch$1 = _globalThis$2.fetch || (() => Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!")));
const Headers = _globalThis$2.Headers;
const $fetch$1 = createFetch({ fetch: fetch$1, Headers });
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
function serialCaller(hooks, args) {
  return hooks.reduce((promise, hookFn) => promise.then(() => hookFn.apply(void 0, args)), Promise.resolve(null));
}
function parallelCaller(hooks, args) {
  return Promise.all(hooks.map((hook) => hook.apply(void 0, args)));
}
class Hookable {
  constructor() {
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let deprecatedHookObj;
    while (this._deprecatedHooks[name]) {
      const deprecatedHook = this._deprecatedHooks[name];
      if (typeof deprecatedHook === "string") {
        deprecatedHookObj = { to: deprecatedHook };
      } else {
        deprecatedHookObj = deprecatedHook;
      }
      name = deprecatedHookObj.to;
    }
    if (deprecatedHookObj) {
      if (!deprecatedHookObj.message) {
        console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
      } else {
        console.warn(deprecatedHookObj.message);
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }
  hookOnce(name, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name, _fn);
    return _unreg;
  }
  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  callHook(name, ...args) {
    return serialCaller(this._hooks[name] || [], args);
  }
  callHookParallel(name, ...args) {
    return parallelCaller(this._hooks[name] || [], args);
  }
  callHookWith(caller, name, ...args) {
    return caller(this._hooks[name] || [], args);
  }
}
function createHooks() {
  return new Hookable();
}
function createContext() {
  let currentInstance = null;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  return {
    use: () => currentInstance,
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = null;
      isSingleton = false;
    },
    call: (instance, cb) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return cb();
      } finally {
        if (!isSingleton) {
          currentInstance = null;
        }
      }
    },
    async callAsync(instance, cb) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = cb();
        if (!isSingleton) {
          currentInstance = null;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace() {
  const contexts = {};
  return {
    get(key) {
      if (!contexts[key]) {
        contexts[key] = createContext();
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey] || (_globalThis$1[globalKey] = createNamespace());
const getContext = (key) => defaultNamespace.get(key);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function createMock(name, overrides = {}) {
  const fn = function() {
  };
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    enumerate(_target) {
      return [];
    }
  });
}
const mockContext = createMock("mock");
function mock(warning) {
  console.warn(warning);
  return mockContext;
}
const unsupported = /* @__PURE__ */ new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = /* @__PURE__ */ new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: false,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
};
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  let needsLegacyContext = false;
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins2.unshift(legacyPlugin);
  }
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const vm = vue_cjs_prod.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vueRouter_prod = {};
/*!
  * vue-router v4.1.1
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = require$$0;
  function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === "Module";
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = isArray2(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const isArray2 = Array.isArray;
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL2(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash2 = "";
    const hashPos = location2.indexOf("#");
    let searchPos = location2.indexOf("?");
    if (hashPos < searchPos && hashPos >= 0) {
      searchPos = -1;
    }
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash2 = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash2,
      path,
      query,
      hash: hash2
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return isArray2(a) ? isEquivalentArray(a, b) : isArray2(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return isArray2(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (segment === ".")
        continue;
      if (segment === "..") {
        if (position > 1)
          position--;
      } else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash: hash2 } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash2.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash2.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash2;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index2 = listeners.indexOf(callback);
          if (index2 > -1)
            listeners.splice(index2, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = Symbol("");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys2 = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys2.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys2[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (isArray2(param) && !repeatable) {
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            }
            const text = isArray2(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2 && segments.length > 1) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path;
    }
    return {
      re,
      score,
      keys: keys2,
      parse,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
      if (isLastScoreNegative(aScore))
        return 1;
      if (isLastScoreNegative(bScore))
        return -1;
    }
    return bScore.length - aScore.length;
  }
  function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if (mainNormalizedRecord.children) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index2 = matchers.indexOf(matcherRef);
        if (index2 > -1) {
          matchers.splice(index2, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys2) {
    const newParams = {};
    for (const key of keys2) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || null : record.component && { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta2, record) => assign(meta2, record.meta), {});
  }
  function mergeOptions(defaults2, partialOptions) {
    const options = {};
    for (const key in defaults2) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath2(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam2(text) {
    return text == null ? "" : encodePath2(text).replace(SLASH_RE, "%2F");
  }
  function decode(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!isArray2(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = isArray2(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = isArray2(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  const matchedRouteKey = Symbol("");
  const viewDepthKey = Symbol("");
  const routerKey = Symbol("");
  const routeLocationKey = Symbol("");
  const routerViewLocationKey = Symbol("");
  function useCallbacks() {
    let handlers2 = [];
    function add(handler) {
      handlers2.push(handler);
      return () => {
        const i = handlers2.indexOf(handler);
        if (i > -1)
          handlers2.splice(i, 1);
      };
    }
    function reset() {
      handlers2 = [];
    }
    return {
      add,
      list: () => handlers2,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false)
          reject(createRouterError(4, {
            from,
            to
          }));
        else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
            enterCallbackArray.push(valid);
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function loadRouteLocation(route) {
    return route.matched.every((record) => record.redirect) ? Promise.reject(new Error("Cannot load a route that redirects.")) : Promise.all(route.matched.map((record) => record.components && Promise.all(Object.keys(record.components).reduce((promises, name) => {
      const rawComponent = record.components[name];
      if (typeof rawComponent === "function" && !("displayName" in rawComponent)) {
        promises.push(rawComponent().then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}". Ensure you passed a function that returns a promise.`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          return;
        }));
      }
      return promises;
    }, [])))).then(() => route);
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index2 > -1)
        return index2;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](vue.unref(props.to)).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!isArray2(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const injectedDepth = vue.inject(viewDepthKey, 0);
      const depth = vue.computed(() => {
        let initialDepth = vue.unref(injectedDepth);
        const { matched } = routeToDisplay.value;
        let matchedRoute;
        while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
          initialDepth++;
        }
        return initialDepth;
      });
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth.value]);
      vue.provide(viewDepthKey, vue.computed(() => depth.value + 1));
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[props.name];
        const currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[props.name];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam2);
    const decodeParams = applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL2(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign({}, rawLocation, {
          path: parseURL2(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash2 = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash2),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign({
        fullPath,
        hash: hash2,
        query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL2(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign({
          query: to.query,
          hash: to.hash,
          params: "path" in newTargetLocation ? {} : to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
          state: data,
          force,
          replace: replace2
        }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign(locationAsObject(failure2.to), {
              state: data,
              force,
              replace: replace2
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (isArray2(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener)
        return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        if (!router.listening)
          return;
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(error.to, toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta)
            routerHistory.go(-info.delta, false);
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = /* @__PURE__ */ new Set();
    const router = {
      currentRoute,
      listening: true,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter2() {
    return vue.inject(routerKey);
  }
  function useRoute2() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.loadRouteLocation = loadRouteLocation;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute2;
  exports.useRouter = useRouter2;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_prod);
var vueRouter_cjs_prod = vueRouter_prod;
const wrapInRef = (value) => vue_cjs_prod.isRef(value) ? value : vue_cjs_prod.ref(value);
const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  var _a, _b, _c, _d, _e;
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = (_b = (_a = options.lazy) != null ? _a : options.defer) != null ? _b : false;
  options.initialCache = (_c = options.initialCache) != null ? _c : true;
  const nuxt = useNuxtApp();
  const instance = vue_cjs_prod.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      vue_cjs_prod.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      vue_cjs_prod.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: wrapInRef((_d = nuxt.payload.data[key]) != null ? _d : options.default()),
    pending: vue_cjs_prod.ref(!useInitialCache()),
    error: vue_cjs_prod.ref((_e = nuxt.payload._errors[key]) != null ? _e : null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = vue_cjs_prod.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer) {
    const promise = initialFetch();
    vue_cjs_prod.onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys2) {
  const newObj = {};
  for (const key of keys2) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const useState = (key, init) => {
  const nuxt = useNuxtApp();
  const state = vue_cjs_prod.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (vue_cjs_prod.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
const useError = () => {
  const nuxtApp = useNuxtApp();
  return useState("error", () => nuxtApp.ssrContext.error);
};
const throwError = (_err) => {
  const nuxtApp = useNuxtApp();
  useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  }
  return err;
};
function murmurHash(key, seed = 0) {
  if (typeof key === "string") {
    key = createBuffer(key);
  }
  let i = 0;
  let h1 = seed;
  let k1;
  let h1b;
  const remainder = key.length & 3;
  const bytes = key.length - remainder;
  const c1 = 3432918353;
  const c2 = 461845907;
  while (i < bytes) {
    k1 = key[i] & 255 | (key[++i] & 255) << 8 | (key[++i] & 255) << 16 | (key[++i] & 255) << 24;
    ++i;
    k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
    k1 = k1 << 15 | k1 >>> 17;
    k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
    h1 ^= k1;
    h1 = h1 << 13 | h1 >>> 19;
    h1b = (h1 & 65535) * 5 + (((h1 >>> 16) * 5 & 65535) << 16) & 4294967295;
    h1 = (h1b & 65535) + 27492 + (((h1b >>> 16) + 58964 & 65535) << 16);
  }
  k1 = 0;
  switch (remainder) {
    case 3:
      k1 ^= (key[i + 2] & 255) << 16;
      break;
    case 2:
      k1 ^= (key[i + 1] & 255) << 8;
      break;
    case 1:
      k1 ^= key[i] & 255;
      k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
      k1 = k1 << 15 | k1 >>> 17;
      k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
      h1 ^= k1;
  }
  h1 ^= key.length;
  h1 ^= h1 >>> 16;
  h1 = (h1 & 65535) * 2246822507 + (((h1 >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 13;
  h1 = (h1 & 65535) * 3266489909 + (((h1 >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 16;
  return h1 >>> 0;
}
function createBuffer(val) {
  return new TextEncoder().encode(val);
}
const defaults = {
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false
};
function objectHash(object, options = {}) {
  options = { ...defaults, ...options };
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
function createHasher(options) {
  const buff = [];
  let context = [];
  const write = (str) => {
    buff.push(str);
  };
  return {
    toString() {
      return buff.join("");
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this["_" + type](value);
    },
    _object(object) {
      const pattern = /\[object (.*)\]/i;
      const objString = Object.prototype.toString.call(object);
      const _objType = pattern.exec(objString);
      const objType = _objType ? _objType[1].toLowerCase() : "unknown:[" + objString.toLowerCase() + "]";
      let objectNumber = null;
      if ((objectNumber = context.indexOf(object)) >= 0) {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      } else {
        context.push(object);
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this["_" + objType]) {
          this["_" + objType](object);
        } else if (options.ignoreUnknown) {
          return write("[" + objType + "]");
        } else {
          throw new Error('Unknown object type "' + objType + '"');
        }
      } else {
        let keys2 = Object.keys(object);
        if (options.unorderedObjects) {
          keys2 = keys2.sort();
        }
        if (options.respectType !== false && !isNativeFunction(object)) {
          keys2.splice(0, 0, "prototype", "__proto__", "letructor");
        }
        if (options.excludeKeys) {
          keys2 = keys2.filter(function(key) {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + keys2.length + ":");
        return keys2.forEach((key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        });
      }
    },
    _array(arr, unordered) {
      unordered = typeof unordered !== "undefined" ? unordered : options.unorderedArrays !== false;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        return arr.forEach((entry2) => {
          return this.dispatch(entry2);
        });
      }
      const contextAdditions = [];
      const entries = arr.map((entry2) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry2);
        contextAdditions.push(hasher.getContext());
        return hasher.toString();
      });
      context = context.concat(contextAdditions);
      entries.sort();
      return this._array(entries, false);
    },
    _date(date) {
      return write("date:" + date.toJSON());
    },
    _symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    _error(err) {
      return write("error:" + err.toString());
    },
    _boolean(bool) {
      return write("bool:" + bool.toString());
    },
    _string(string) {
      write("string:" + string.length + ":");
      write(string.toString());
    },
    _function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this._object(fn);
      }
    },
    _number(number) {
      return write("number:" + number.toString());
    },
    _xml(xml) {
      return write("xml:" + xml.toString());
    },
    _null() {
      return write("Null");
    },
    _undefined() {
      return write("Undefined");
    },
    _regexp(regex) {
      return write("regex:" + regex.toString());
    },
    _uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    _url(url) {
      return write("url:" + url.toString());
    },
    _map(map) {
      write("map:");
      const arr = Array.from(map);
      return this._array(arr, options.unorderedSets !== false);
    },
    _set(set) {
      write("set:");
      const arr = Array.from(set);
      return this._array(arr, options.unorderedSets !== false);
    },
    _file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    _blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
    },
    _domwindow() {
      return write("domwindow");
    },
    _bigint(number) {
      return write("bigint:" + number.toString());
    },
    _process() {
      return write("process");
    },
    _timer() {
      return write("timer");
    },
    _pipe() {
      return write("pipe");
    },
    _tcp() {
      return write("tcp");
    },
    _udp() {
      return write("udp");
    },
    _tty() {
      return write("tty");
    },
    _statwatcher() {
      return write("statwatcher");
    },
    _securecontext() {
      return write("securecontext");
    },
    _connection() {
      return write("connection");
    },
    _zlib() {
      return write("zlib");
    },
    _context() {
      return write("context");
    },
    _nodescript() {
      return write("nodescript");
    },
    _httpparser() {
      return write("httpparser");
    },
    _dataview() {
      return write("dataview");
    },
    _signal() {
      return write("signal");
    },
    _fsevent() {
      return write("fsevent");
    },
    _tlswrap() {
      return write("tlswrap");
    }
  };
}
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  const exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
  return exp.exec(Function.prototype.toString.call(f)) != null;
}
function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return String(murmurHash(hashed));
}
function useFetch(request, opts = {}) {
  const key = "$f_" + (opts.key || hash([request, { ...opts, transform: null }]));
  const _request = vue_cjs_prod.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return vue_cjs_prod.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
const MIMES = {
  html: "text/html",
  json: "application/json"
};
const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      event.res.end(data);
      resolve(void 0);
    });
  });
}
function defaultContentType(event, type) {
  if (type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", type);
  }
}
function sendRedirect(event, location2, code = 302) {
  event.res.statusCode = code;
  event.res.setHeader("Location", location2);
  return send(event, "Redirecting to " + location2, MIMES.html);
}
class H3Error extends Error {
  constructor() {
    super(...arguments);
    this.statusCode = 500;
    this.statusMessage = "Internal Server Error";
  }
}
function createError(input) {
  var _a;
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (input instanceof H3Error) {
    return input;
  }
  const err = new H3Error((_a = input.message) != null ? _a : input.statusMessage, input.cause ? { cause: input.cause } : void 0);
  if (input.statusCode) {
    err.statusCode = input.statusCode;
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  }
  if (input.data) {
    err.data = input.data;
  }
  return err;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  return useNuxtApp()._route;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main2, sub) => {
  };
  return vue_cjs_prod.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = vue_cjs_prod.computed(() => {
        checkPropConflicts();
        return props.to || props.href || "";
      });
      const isExternal = vue_cjs_prod.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return vue_cjs_prod.h(vue_cjs_prod.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        checkPropConflicts();
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return vue_cjs_prod.h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = defineNuxtLink({ componentName: "NuxtLink" });
const nuxtLink = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defineNuxtLink,
  "default": __nuxt_component_0$1
}, Symbol.toStringTag, { value: "Module" }));
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index2;
  let lastIndex = 0;
  for (index2 = match.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html += str.slice(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html += escaped;
  }
  return lastIndex !== index2 ? html + str.slice(lastIndex, index2) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$1(a);
  bValidType = isObject$1(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$1(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.genPropsAccessExp = genPropsAccessExp;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
shared_cjs_prod.isDate = isDate;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject$1;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString;
function useHead(meta2) {
  const resolvedMeta = isFunction_1(meta2) ? vue_cjs_prod.computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {};
function _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47_46nuxt_47components_46plugin_46mjs(nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys2 = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys2.push(key);
  }
  if (keys2.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys2.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a;
  const head = document2.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document2));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index2 = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index2 = i;
                  break;
                }
              }
              if (index2 !== -1) {
                deduped.splice(index2, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults2, namespace = ".", merger) {
  if (!isObject(defaults2)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults2);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = val.concat(obj[key]);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function createDefu(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47node_modules_47nuxt_47dist_47head_47runtime_47lib_47vueuse_45head_46plugin = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    vue_cjs_prod.watchEffect(() => {
      head.updateDOM();
    });
  });
  const titleTemplate = vue_cjs_prod.ref();
  nuxtApp._useHead = (_meta) => {
    const meta2 = vue_cjs_prod.ref(_meta);
    if ("titleTemplate" in meta2.value) {
      titleTemplate.value = meta2.value.titleTemplate;
    }
    const headObj = vue_cjs_prod.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta2.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta2.value.title) : titleTemplate.value.replace(/%s/g, meta2.value.title);
      }
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => renderHeadToString(head);
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script2) => ({
    script: [script2]
  }))
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const metaConfig = { "globalMeta": { "charset": "utf-8", "viewport": "width=device-width, initial-scale=1", "meta": [], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "./assets/favicon.png" }], "style": [], "script": [], "title": "Truy\u1EC7n tranh online free" } };
const metaMixin = {
  created() {
    const instance = vue_cjs_prod.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? vue_cjs_prod.computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47node_modules_47nuxt_47dist_47head_47runtime_47plugin = defineNuxtPlugin((nuxtApp) => {
  useHead(vue_cjs_prod.markRaw({ title: "", ...metaConfig.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = {
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? vue_cjs_prod.h(component, props === true ? {} : props, slots) : vue_cjs_prod.h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = vue_cjs_prod.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = vue_cjs_prod.inject(isNestedKey, false);
    vue_cjs_prod.provide(isNestedKey, true);
    return () => {
      return vue_cjs_prod.h(vueRouter_cjs_prod.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a;
          return routeProps.Component && _wrapIf(vue_cjs_prod.Transition, (_a = routeProps.route.meta.pageTransition) != null ? _a : defaultPageTransition, wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) : vue_cjs_prod.h(vue_cjs_prod.Suspense, {
            onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
            onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
          }, { default: () => vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) }))).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const layouts = {
  default: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _default$1;
  }))
};
const defaultLayoutTransition = { name: "layout", mode: "out-in" };
const __nuxt_component_0 = vue_cjs_prod.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout = (_b = (_a = vue_cjs_prod.isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      return _wrapIf(vue_cjs_prod.Transition, hasLayout && ((_c = route.meta.layoutTransition) != null ? _c : defaultLayoutTransition), _wrapIf(layouts[layout], hasLayout, context.slots)).default();
    };
  }
});
const _sfc_main$B = {
  __name: "SearchLoading",
  __ssrInlineRender: true,
  props: {
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: __props.className,
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        style: { "margin": "auto", "background": "none", "display": "block", "shape-rendering": "auto" },
        width: "200px",
        height: "200px",
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid"
      }, _attrs))}><circle cx="84" cy="50" r="10" fill="#831a19"><animate attributeName="r" repeatCount="indefinite" dur="0.4464285714285714s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate><animate attributeName="fill" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#831a19;#831a19;#831a19;#831a19;#831a19" begin="0s"></animate></circle><circle cx="16" cy="50" r="10" fill="#831a19"><animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate></circle><circle cx="50" cy="50" r="10" fill="#831a19"><animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.4464285714285714s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.4464285714285714s"></animate></circle><circle cx="84" cy="50" r="10" fill="#831a19"><animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8928571428571428s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8928571428571428s"></animate></circle><circle cx="16" cy="50" r="10" fill="#831a19"><animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.3392857142857142s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.3392857142857142s"></animate></circle></svg>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/SearchLoading.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const SearchLoading = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$B
}, Symbol.toStringTag, { value: "Module" }));
const SourceParams = {
  netTruyen: "nt"
};
const MANGA_PATH_NAME = "manga";
const MANGA_PATH_DETAIL_NAME = "detail";
const MANGA_PATH_READ_NAME = "read";
const TailwindColors = [
  "#facc15",
  "#a3e635",
  "#fbbf24",
  "#34d399",
  "#fb923c",
  "#22d3ee",
  "#f87171",
  "#38bdf8",
  "#f472b6",
  "#818cf8",
  "#fb7185",
  "#a78bfa",
  "#e879f9"
];
const MANGA_BROWSE_PAGE = "filter";
const MangaTypesPreview = [
  {
    title: "Manga",
    href: `/${MANGA_BROWSE_PAGE}?comics=manga-112`
  },
  {
    title: "Manhua",
    href: `/${MANGA_BROWSE_PAGE}?comics=manhua`
  },
  {
    title: "Manhwa",
    href: `/${MANGA_BROWSE_PAGE}?comics=manhwa-11400`
  },
  {
    title: "Doujinshi",
    href: `/${MANGA_BROWSE_PAGE}?comics=doujinshi`
  }
];
const MangaGenresPreview = [
  {
    title: "Action",
    href: `/${MANGA_BROWSE_PAGE}?genres=action`
  },
  {
    title: "Adventure",
    href: `/${MANGA_BROWSE_PAGE}?genres=adventure`
  },
  {
    title: "Comedy",
    href: `/${MANGA_BROWSE_PAGE}?genres=comedy-99`
  },
  {
    title: "Horror",
    href: `/${MANGA_BROWSE_PAGE}?genres=horror`
  },
  {
    title: "Romance",
    href: `/${MANGA_BROWSE_PAGE}?genres=romance-121`
  },
  {
    title: "Shoujo",
    href: `/${MANGA_BROWSE_PAGE}?genres=shoujo`
  },
  {
    title: "Slice of Life",
    href: `/${MANGA_BROWSE_PAGE}?genres=slice-of-life`
  },
  {
    title: "Drama",
    href: `/${MANGA_BROWSE_PAGE}?genres=drama-103`
  },
  {
    title: "Xem th\xEAm",
    href: `/${MANGA_BROWSE_PAGE}`
  }
];
const keys$1 = {
  MANGA_DETAIL: "manga-detail"
};
const useFirstPathChapter = async (spotlight, slugs) => {
  var _a, _b;
  const slug = slugs || (spotlight == null ? void 0 : spotlight.slug);
  const { data: comic } = await useFetch(`/api/comic?slug=${slug}&source=${SourceParams.netTruyen}`);
  if (!comic.value) {
    return "";
  }
  const mangas = comic.value;
  const cache = useStorage(keys$1.MANGA_DETAIL, "");
  cache.value = null;
  cache.value = JSON.stringify(mangas);
  const chapterId = (mangas == null ? void 0 : mangas.chapterList) && (mangas == null ? void 0 : mangas.chapterList[((_a = mangas.chapterList) == null ? void 0 : _a.length) - 1].chapterId);
  const chapterNumber = mangas.chapterList && mangas.chapterList[((_b = mangas.chapterList) == null ? void 0 : _b.length) - 1].chapterNumber;
  return `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${slug}/${chapterNumber}/${chapterId}`;
};
const useLastPathChapter = async (spotlight, slugs) => {
  var _a, _b;
  const slug = slugs || (spotlight == null ? void 0 : spotlight.slug);
  const { data: comic } = await useFetch(`/api/comic?slug=${slug}&source=${SourceParams.netTruyen}`);
  if (!comic.value) {
    return "";
  }
  const mangas = comic.value;
  const cache = useStorage(keys$1.MANGA_DETAIL, "");
  cache.value = null;
  cache.value = JSON.stringify(mangas);
  const chapterId = (mangas == null ? void 0 : mangas.chapterList) && (mangas == null ? void 0 : mangas.chapterList[(_a = mangas.chapterList) == null ? void 0 : _a.length].chapterId);
  const chapterNumber = mangas.chapterList && mangas.chapterList[(_b = mangas.chapterList) == null ? void 0 : _b.length].chapterNumber;
  return `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${slug}/${chapterNumber}/${chapterId}`;
};
const useMangaDetailPagePath = (slug) => {
  useState("pickManga", () => slug);
  return `/${MANGA_PATH_NAME}/${MANGA_PATH_DETAIL_NAME}/${slug}`;
};
function render$f(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$e(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$d(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$c(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$b(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$a(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", { d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" }),
    vue_cjs_prod.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$9(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }),
    vue_cjs_prod.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$8(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$7(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$6(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
      "clip-rule": "evenodd"
    })
  ]);
}
const randomColors = (arrayColors, currentIdx) => {
  return arrayColors[currentIdx % arrayColors.length];
};
const __nuxt_component_2_lazy$3 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtLink;
}));
const _sfc_main$A = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const filters = vue_cjs_prod.ref({
      "genres": "action"
    });
    const { data: mangas, pending, refresh } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData("filter", () => $fetch(`/api/filter?genres=${filters.value.genres}`))), __temp = await __temp, __restore(), __temp);
    vue_cjs_prod.watch([route], () => {
      filters.value.genres = route.query.genres;
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_CommonSearchLoading = _sfc_main$B;
      const _component_LazyNuxtLink = __nuxt_component_2_lazy$3;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vue_cjs_prod.unref(pending)) {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_CommonSearchLoading, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<section class="w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"${_scopeId}><div class="w-full rounded-xl pb-4 lg:my-4 col-span-3"${_scopeId}><h2 class="my-6 whitespace-nowrap font-secondary text-3xl text-white lg:text-[160%] h-[40px] absolute-center-between"${_scopeId}> Truy\u1EC7n n\u1ED5i b\u1EADt nh\u1EA5t </h2><ul class="w-full space-y-4 overflow-hidden text-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2"${_scopeId}><!--[-->`);
              serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(mangas).slice(0, 16), (manga) => {
                _push2(`<li class="flex px-4 py-2 w-full inline-grid" style="${serverRenderer.exports.ssrRenderStyle({ "margin-top": "0px !important" })}"${_scopeId}>`);
                _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
                  to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                }, {
                  default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<figure class="relative h-[180px] lg:h-[300px] w-full overflow-hidden rounded-xl"${_scopeId2}><span class="default-span-figure"${_scopeId2}><img alt="img-preview"${serverRenderer.exports.ssrRenderAttr("src", manga.thumbnail)} decoding="async" data-nimg="fill" class="aspect-w-3 aspect-h-4 absolute object-cover object-center default-img" sizes="100vw"${serverRenderer.exports.ssrRenderAttr("srcset", manga.thumbnail)}${_scopeId2}></span></figure>`);
                    } else {
                      return [
                        vue_cjs_prod.createVNode("figure", { class: "relative h-[180px] lg:h-[300px] w-full overflow-hidden rounded-xl" }, [
                          vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                            vue_cjs_prod.createVNode("img", {
                              alt: "img-preview",
                              src: manga.thumbnail,
                              decoding: "async",
                              "data-nimg": "fill",
                              class: "aspect-w-3 aspect-h-4 absolute object-cover object-center default-img",
                              sizes: "100vw",
                              srcset: manga.thumbnail
                            }, null, 8, ["src", "srcset"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="flex w-full flex-col justify-center space-y-2 mt-4"${_scopeId}>`);
                _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
                  to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                }, {
                  default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h3 class="font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(manga.name)}</h3>`);
                    } else {
                      return [
                        vue_cjs_prod.createVNode("h3", { class: "font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl" }, vue_cjs_prod.toDisplayString(manga.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="flex align-center place-content-between"${_scopeId}><h4 class="text-lg"${_scopeId}>${serverRenderer.exports.ssrInterpolate(manga.newChapter)}</h4><div class="flex"${_scopeId}>`);
                _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$9), {
                  class: "h-6 w-5 mr-2",
                  style: { "margin-top": "1px" }
                }, null, _parent2, _scopeId));
                _push2(`<h4 class="text-lg"${_scopeId}>${serverRenderer.exports.ssrInterpolate(manga.view)}</h4></div></div><ul class="space-x-4 text-lg md:flex flex flex-wrap"${_scopeId}><!--[-->`);
                serverRenderer.exports.ssrRenderList(manga.genres.slice(0, 4), (genre, i) => {
                  _push2(`<li class="flex w-fit max-w-[70px] items-center whitespace-nowrap" style="${serverRenderer.exports.ssrRenderStyle([{ "margin-left": "0px", "margin-right": "0px", "margin": "3px" }, { "background-color": vue_cjs_prod.unref(randomColors)(vue_cjs_prod.unref(TailwindColors), i) }])}"${_scopeId}>${serverRenderer.exports.ssrInterpolate(genre)}</li>`);
                });
                _push2(`<!--]--></ul></div></li>`);
              });
              _push2(`<!--]--><li class="flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight"${_scopeId}><button class="lg:text-3xl"${_scopeId}><a href="/browse?comics=api-112&amp;view=all"${_scopeId}>Xem th\xEAm</a></button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"${_scopeId}></path></svg></li></ul></div></div></section>`);
            }
          } else {
            return [
              vue_cjs_prod.unref(pending) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", { key: 0 }, [
                vue_cjs_prod.createVNode(_component_CommonSearchLoading)
              ])) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("section", {
                key: 1,
                class: "w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden"
              }, [
                vue_cjs_prod.createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" }, [
                  vue_cjs_prod.createVNode("div", { class: "w-full rounded-xl pb-4 lg:my-4 col-span-3" }, [
                    vue_cjs_prod.createVNode("h2", { class: "my-6 whitespace-nowrap font-secondary text-3xl text-white lg:text-[160%] h-[40px] absolute-center-between" }, " Truy\u1EC7n n\u1ED5i b\u1EADt nh\u1EA5t "),
                    vue_cjs_prod.createVNode("ul", { class: "w-full space-y-4 overflow-hidden text-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2" }, [
                      (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(mangas).slice(0, 16), (manga) => {
                        return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", {
                          class: "flex px-4 py-2 w-full inline-grid",
                          key: manga.slug,
                          style: { "margin-top": "0px !important" }
                        }, [
                          vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                            to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                          }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode("figure", { class: "relative h-[180px] lg:h-[300px] w-full overflow-hidden rounded-xl" }, [
                                vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                                  vue_cjs_prod.createVNode("img", {
                                    alt: "img-preview",
                                    src: manga.thumbnail,
                                    decoding: "async",
                                    "data-nimg": "fill",
                                    class: "aspect-w-3 aspect-h-4 absolute object-cover object-center default-img",
                                    sizes: "100vw",
                                    srcset: manga.thumbnail
                                  }, null, 8, ["src", "srcset"])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          vue_cjs_prod.createVNode("div", { class: "flex w-full flex-col justify-center space-y-2 mt-4" }, [
                            vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                              to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode("h3", { class: "font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl" }, vue_cjs_prod.toDisplayString(manga.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"]),
                            vue_cjs_prod.createVNode("div", { class: "flex align-center place-content-between" }, [
                              vue_cjs_prod.createVNode("h4", { class: "text-lg" }, vue_cjs_prod.toDisplayString(manga.newChapter), 1),
                              vue_cjs_prod.createVNode("div", { class: "flex" }, [
                                vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$9), {
                                  class: "h-6 w-5 mr-2",
                                  style: { "margin-top": "1px" }
                                }),
                                vue_cjs_prod.createVNode("h4", { class: "text-lg" }, vue_cjs_prod.toDisplayString(manga.view), 1)
                              ])
                            ]),
                            vue_cjs_prod.createVNode("ul", { class: "space-x-4 text-lg md:flex flex flex-wrap" }, [
                              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(manga.genres.slice(0, 4), (genre, i) => {
                                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", {
                                  class: "flex w-fit max-w-[70px] items-center whitespace-nowrap",
                                  style: [{ "margin-left": "0px", "margin-right": "0px", "margin": "3px" }, { "background-color": vue_cjs_prod.unref(randomColors)(vue_cjs_prod.unref(TailwindColors), i) }],
                                  key: `genre_${i}`
                                }, vue_cjs_prod.toDisplayString(genre), 5);
                              }), 128))
                            ])
                          ])
                        ]);
                      }), 128)),
                      vue_cjs_prod.createVNode("li", { class: "flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight" }, [
                        vue_cjs_prod.createVNode("button", { class: "lg:text-3xl" }, [
                          vue_cjs_prod.createVNode("a", { href: "/browse?comics=api-112&view=all" }, "Xem th\xEAm")
                        ]),
                        (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "2",
                          stroke: "currentColor",
                          "aria-hidden": "true",
                          class: "h-8 w-8"
                        }, [
                          vue_cjs_prod.createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M9 5l7 7-7 7"
                          })
                        ]))
                      ])
                    ])
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/filter/index.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const meta$4 = void 0;
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return TheHome;
}));
const meta$3 = void 0;
vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return TheMangaDetail;
}));
const meta$2 = void 0;
const __nuxt_component_1_lazy$9 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return Chaplist;
}));
const _sfc_main$z = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = vue_cjs_prod.ref(route.query.slug);
    const onPickManga = useState("pickManga");
    const url = `/api/comic?slug=${slug.value}&source=${SourceParams.netTruyen}`;
    const { data: comic, refresh } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData("manga-detail", () => $fetch(url))), __temp = await __temp, __restore(), __temp);
    const navigateToManga = async (slug2) => {
      const path = await useFirstPathChapter(null, slug2);
      return navigateTo({
        path
      });
    };
    vue_cjs_prod.watch([onPickManga], async () => {
      if (onPickManga.value) {
        slug.value = onPickManga.value;
        await refresh();
      }
    });
    useHead({
      title: comic.value.title,
      description: comic.value.author
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_LazyMangaChaplist = __nuxt_component_1_lazy$9;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-fit flex-col" style="${serverRenderer.exports.ssrRenderStyle({ "height": "auto" })}"${_scopeId}><div class="absolute inset-0 z-0 h-[35%] w-full lg:h-[45%]"${_scopeId}><figure class="deslide-cover"${_scopeId}><span style="${serverRenderer.exports.ssrRenderStyle({ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" })}"${_scopeId}><img alt="comic-banner"${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(comic).thumbnail)} decoding="async" data-nimg="fill" class="count={10} object-fit absolute h-full w-full bg-cover bg-top bg-no-repeat object-cover blur" sizes="100vw"${serverRenderer.exports.ssrRenderAttr("srcset", vue_cjs_prod.unref(comic).thumbnail)} style="${serverRenderer.exports.ssrRenderStyle({ "position": "absolute", "inset": "0", "box-sizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" })}"${_scopeId}></span></figure></div><div class="z-10 mx-auto w-[85%] pt-32"${_scopeId}><section class="h-fit w-full"${_scopeId}><div class="flex h-full w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start"${_scopeId}><div class="mt-4 w-[50%] md:w-[250px] md:min-w-[250px]"${_scopeId}><figure class="aspect-w-3 aspect-h-5 relative rounded-2xl"${_scopeId}><span style="${serverRenderer.exports.ssrRenderStyle({ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" })}"${_scopeId}><img alt="manga-thumbnail" sizes="100vw"${serverRenderer.exports.ssrRenderAttr("srcset", vue_cjs_prod.unref(comic).thumbnail)}${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(comic).thumbnail)} decoding="async" data-nimg="fill" class="absolute inset-0 rounded-2xl object-cover object-center" style="${serverRenderer.exports.ssrRenderStyle({ "position": "absolute", "inset": "0px", "box-sizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" })}"${_scopeId}></span></figure></div><div class="flex h-full w-full flex-col justify-center p-4 text-white md:min-h-[430px] lg:ml-4"${_scopeId}><div class="w-full space-y-4 text-center md:ml-2 md:text-left lg:w-[80%]"${_scopeId}><h1 class="font-secondary font-bold leading-none text-[6.5vw] md:text-[5.5vw] lg:text-[3.5vw]"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(comic).title)}</h1><h2 class="text-[3vw] md:min-h-[28px] md:text-[2vw] lg:text-[1.2vw]"${_scopeId}></h2><h3 class="text-center text-[3vw] md:text-left md:text-[2vw] lg:text-[1.1vw]"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(comic).author)}</h3><h4 class="flex items-center justify-center gap-4 md:justify-start"${_scopeId}><span class="block h-3 w-3 rounded-full bg-green-500"${_scopeId}></span> ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(comic).status)}</h4></div><div class="mt-4 flex flex-col-reverse gap-2 md:flex-col"${_scopeId}><ul class="my-4 flex flex-wrap items-center gap-4"${_scopeId}><h3 class="px-2 py-2"${_scopeId}>Th\u1EC3 lo\u1EA1i:</h3><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(comic).genres, (genre) => {
              _push2(`<li class="rounded-xl bg-highlight px-4 py-2"${_scopeId}><a href="/browse?genres=mystery"${_scopeId}>${serverRenderer.exports.ssrInterpolate(genre.genreTitle)}</a></li>`);
            });
            _push2(`<!--]--></ul><div class="flex h-[150px] w-full flex-col items-center gap-6 md:flex-row md:items-start"${_scopeId}><a${_scopeId}><button class="pulse-effect-primary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-primary transition-all hover:scale-[110%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg> \u0110\u1ECDc ngay </button></a><a href="/manga/read/nhat-niem-vinh-hang-20674/63.5/872343"${_scopeId}><button class="pulse-effect-secondary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-white text-gray-800 transition-all hover:scale-[110%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-8 w-8 text-primary"${_scopeId}><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"${_scopeId}></path></svg> Chap m\u1EDBi nh\u1EA5t </button></a><button class="shine-effect absolute-center bg-hight-light h-[50px] w-[50px] rounded-xl transition-all hover:text-primary"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"${_scopeId}></path></svg></button></div></div></div></div></section><div class="flex-col-reverse flex"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(A), null, {
              default: vue_cjs_prod.withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(G), null, {
                    default: vue_cjs_prod.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="flex w-full flex-col items-center bg-cyan-300/0 text-white"${_scopeId3}> T\xF3m t\u1EAFt <svg class="${serverRenderer.exports.ssrRenderClass([open ? "rotate-180 transform" : "", "h-8 w-8"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"${_scopeId3}></path></svg></button>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("button", { class: "flex w-full flex-col items-center bg-cyan-300/0 text-white" }, [
                            vue_cjs_prod.createTextVNode(" T\xF3m t\u1EAFt "),
                            (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                              class: [open ? "rotate-180 transform" : "", "h-8 w-8"],
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "2",
                              stroke: "currentColor",
                              "aria-hidden": "true"
                            }, [
                              vue_cjs_prod.createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M19 9l-7 7-7-7"
                              })
                            ], 2))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(J), { class: "transform scale-100 opacity-100" }, {
                    default: vue_cjs_prod.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<p class="text-white"${_scopeId3}>${serverRenderer.exports.ssrInterpolate((_a = vue_cjs_prod.unref(comic)) == null ? void 0 : _a.review)}</p>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("p", { class: "text-white" }, vue_cjs_prod.toDisplayString((_b = vue_cjs_prod.unref(comic)) == null ? void 0 : _b.review), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(G), null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode("button", { class: "flex w-full flex-col items-center bg-cyan-300/0 text-white" }, [
                          vue_cjs_prod.createTextVNode(" T\xF3m t\u1EAFt "),
                          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                            class: [open ? "rotate-180 transform" : "", "h-8 w-8"],
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "2",
                            stroke: "currentColor",
                            "aria-hidden": "true"
                          }, [
                            vue_cjs_prod.createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M19 9l-7 7-7-7"
                            })
                          ], 2))
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(J), { class: "transform scale-100 opacity-100" }, {
                      default: vue_cjs_prod.withCtx(() => {
                        var _a;
                        return [
                          vue_cjs_prod.createVNode("p", { class: "text-white" }, vue_cjs_prod.toDisplayString((_a = vue_cjs_prod.unref(comic)) == null ? void 0 : _a.review), 1)
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyMangaChaplist, {
              chapterList: vue_cjs_prod.unref(comic).chapterList
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                class: "flex h-fit flex-col",
                style: { "height": "auto" }
              }, [
                vue_cjs_prod.createVNode("div", { class: "absolute inset-0 z-0 h-[35%] w-full lg:h-[45%]" }, [
                  vue_cjs_prod.createVNode("figure", { class: "deslide-cover" }, [
                    vue_cjs_prod.createVNode("span", { style: { "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" } }, [
                      vue_cjs_prod.createVNode("img", {
                        alt: "comic-banner",
                        src: vue_cjs_prod.unref(comic).thumbnail,
                        decoding: "async",
                        "data-nimg": "fill",
                        class: "count={10} object-fit absolute h-full w-full bg-cover bg-top bg-no-repeat object-cover blur",
                        sizes: "100vw",
                        srcset: vue_cjs_prod.unref(comic).thumbnail,
                        style: { "position": "absolute", "inset": "0", "box-sizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" }
                      }, null, 8, ["src", "srcset"])
                    ])
                  ])
                ]),
                vue_cjs_prod.createVNode("div", { class: "z-10 mx-auto w-[85%] pt-32" }, [
                  vue_cjs_prod.createVNode("section", { class: "h-fit w-full" }, [
                    vue_cjs_prod.createVNode("div", { class: "flex h-full w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start" }, [
                      vue_cjs_prod.createVNode("div", { class: "mt-4 w-[50%] md:w-[250px] md:min-w-[250px]" }, [
                        vue_cjs_prod.createVNode("figure", { class: "aspect-w-3 aspect-h-5 relative rounded-2xl" }, [
                          vue_cjs_prod.createVNode("span", { style: { "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" } }, [
                            vue_cjs_prod.createVNode("img", {
                              alt: "manga-thumbnail",
                              sizes: "100vw",
                              srcset: vue_cjs_prod.unref(comic).thumbnail,
                              src: vue_cjs_prod.unref(comic).thumbnail,
                              decoding: "async",
                              "data-nimg": "fill",
                              class: "absolute inset-0 rounded-2xl object-cover object-center",
                              style: { "position": "absolute", "inset": "0px", "box-sizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" }
                            }, null, 8, ["srcset", "src"])
                          ])
                        ])
                      ]),
                      vue_cjs_prod.createVNode("div", { class: "flex h-full w-full flex-col justify-center p-4 text-white md:min-h-[430px] lg:ml-4" }, [
                        vue_cjs_prod.createVNode("div", { class: "w-full space-y-4 text-center md:ml-2 md:text-left lg:w-[80%]" }, [
                          vue_cjs_prod.createVNode("h1", { class: "font-secondary font-bold leading-none text-[6.5vw] md:text-[5.5vw] lg:text-[3.5vw]" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(comic).title), 1),
                          vue_cjs_prod.createVNode("h2", { class: "text-[3vw] md:min-h-[28px] md:text-[2vw] lg:text-[1.2vw]" }),
                          vue_cjs_prod.createVNode("h3", { class: "text-center text-[3vw] md:text-left md:text-[2vw] lg:text-[1.1vw]" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(comic).author), 1),
                          vue_cjs_prod.createVNode("h4", { class: "flex items-center justify-center gap-4 md:justify-start" }, [
                            vue_cjs_prod.createVNode("span", { class: "block h-3 w-3 rounded-full bg-green-500" }),
                            vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(comic).status), 1)
                          ])
                        ]),
                        vue_cjs_prod.createVNode("div", { class: "mt-4 flex flex-col-reverse gap-2 md:flex-col" }, [
                          vue_cjs_prod.createVNode("ul", { class: "my-4 flex flex-wrap items-center gap-4" }, [
                            vue_cjs_prod.createVNode("h3", { class: "px-2 py-2" }, "Th\u1EC3 lo\u1EA1i:"),
                            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(comic).genres, (genre) => {
                              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", { class: "rounded-xl bg-highlight px-4 py-2" }, [
                                vue_cjs_prod.createVNode("a", { href: "/browse?genres=mystery" }, vue_cjs_prod.toDisplayString(genre.genreTitle), 1)
                              ]);
                            }), 256))
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "flex h-[150px] w-full flex-col items-center gap-6 md:flex-row md:items-start" }, [
                            vue_cjs_prod.createVNode("a", {
                              onClick: ($event) => navigateToManga(slug.value)
                            }, [
                              vue_cjs_prod.createVNode("button", { class: "pulse-effect-primary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-primary transition-all hover:scale-[110%]" }, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "2",
                                  stroke: "currentColor",
                                  "aria-hidden": "true",
                                  class: "h-8 w-8"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                  })
                                ])),
                                vue_cjs_prod.createTextVNode(" \u0110\u1ECDc ngay ")
                              ])
                            ], 8, ["onClick"]),
                            vue_cjs_prod.createVNode("a", { href: "/manga/read/nhat-niem-vinh-hang-20674/63.5/872343" }, [
                              vue_cjs_prod.createVNode("button", { class: "pulse-effect-secondary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-white text-gray-800 transition-all hover:scale-[110%]" }, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true",
                                  class: "h-8 w-8 text-primary"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                                    "clip-rule": "evenodd"
                                  })
                                ])),
                                vue_cjs_prod.createTextVNode(" Chap m\u1EDBi nh\u1EA5t ")
                              ])
                            ]),
                            vue_cjs_prod.createVNode("button", { class: "shine-effect absolute-center bg-hight-light h-[50px] w-[50px] rounded-xl transition-all hover:text-primary" }, [
                              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "2",
                                stroke: "currentColor",
                                "aria-hidden": "true",
                                class: "h-8 w-8"
                              }, [
                                vue_cjs_prod.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                })
                              ]))
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  vue_cjs_prod.createVNode("div", { class: "flex-col-reverse flex" }, [
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(A), null, {
                      default: vue_cjs_prod.withCtx(({ open }) => [
                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(G), null, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("button", { class: "flex w-full flex-col items-center bg-cyan-300/0 text-white" }, [
                              vue_cjs_prod.createTextVNode(" T\xF3m t\u1EAFt "),
                              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                class: [open ? "rotate-180 transform" : "", "h-8 w-8"],
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "2",
                                stroke: "currentColor",
                                "aria-hidden": "true"
                              }, [
                                vue_cjs_prod.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M19 9l-7 7-7-7"
                                })
                              ], 2))
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(J), { class: "transform scale-100 opacity-100" }, {
                          default: vue_cjs_prod.withCtx(() => {
                            var _a;
                            return [
                              vue_cjs_prod.createVNode("p", { class: "text-white" }, vue_cjs_prod.toDisplayString((_a = vue_cjs_prod.unref(comic)) == null ? void 0 : _a.review), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  vue_cjs_prod.createVNode(_component_LazyMangaChaplist, {
                    chapterList: vue_cjs_prod.unref(comic).chapterList
                  }, null, 8, ["chapterList"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manga/index.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const meta$1 = void 0;
vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return TheRead;
}));
const meta = void 0;
const routes = [
  {
    name: "filter",
    path: "/filter",
    file: "/Users/bonn/Documents/GitHub/next-truyen/pages/filter/index.vue",
    children: [],
    meta: meta$4,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$4;
    })
  },
  {
    name: "index",
    path: "/",
    file: "/Users/bonn/Documents/GitHub/next-truyen/pages/index.vue",
    children: [],
    meta: meta$3,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$3;
    })
  },
  {
    name: "manga-detail-slug",
    path: "/manga/detail/:slug",
    file: "/Users/bonn/Documents/GitHub/next-truyen/pages/manga/detail/[slug].vue",
    children: [],
    meta: meta$2,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return _slug_$1;
    })
  },
  {
    name: "manga",
    path: "/manga",
    file: "/Users/bonn/Documents/GitHub/next-truyen/pages/manga/index.vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$1;
    })
  },
  {
    name: "manga-read-slug-chapter-id",
    path: "/manga/read/:slug/:chapter/:id",
    file: "/Users/bonn/Documents/GitHub/next-truyen/pages/manga/read/[slug]/[chapter]/[id].vue",
    children: [],
    meta,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return _id_$1;
    })
  }
];
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions
};
const globalMiddleware = [];
const namedMiddleware = {};
const _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47node_modules_47nuxt_47dist_47pages_47runtime_47router = defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = vueRouter_cjs_prod.createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = vueRouter_cjs_prod.createRouter({
    ...routerOptions,
    history: routerHistory,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = vue_cjs_prod.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = vue_cjs_prod.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = to.matched[0]) == null ? void 0 : _a.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = vue_cjs_prod.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = vue_cjs_prod.reactive(route);
  nuxtApp._activeRoute = vue_cjs_prod.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    callWithNuxt(nuxtApp, throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    var _a;
    to.meta = vue_cjs_prod.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a = namedMiddleware[entry2]) == null ? void 0 : _a.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, throwError, [createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, throwError, [error2]);
    }
  });
  return { provide: { router } };
});
async function imageMeta$1(_ctx, url) {
  const meta2 = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta2;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await Promise.resolve().then(function() {
      return index;
    }).then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta2 = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta2;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta$1(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults: defaults2 } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults2);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry2 of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
      const s = entry2.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers, width: _cWidth, height: _cHeight }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL: baseURL2 } = {}, _ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL2) {
    baseURL2 = joinURL("/", "/_ipx");
  }
  return {
    url: joinURL(baseURL2, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$1428927605 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  validateDomains,
  supportsAlias
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$1428927605, defaults: {} }
};
const _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47node_modules_47_64nuxt_47image_45edge_47dist_47runtime_47plugin = defineNuxtPlugin(() => {
  const img = createImage(imageOptions);
  return {
    provide: {
      img
    }
  };
});
const preference = "dark";
const script = 'const w=window,de=document.documentElement,knownColorSchemes=["dark","light"],preference=window.localStorage.getItem("nuxt-color-mode")||"dark";let value=preference==="system"?getColorScheme():preference;const forcedColorMode=de.getAttribute("data-color-mode-forced");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w["__NUXT_COLOR_MODE__"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=""+e+"-mode",t="";de.classList?de.classList.add(o):de.className+=" "+o,de.setAttribute("data-"+t,e)}function removeColorScheme(e){const o=""+e+"-mode",t="";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,"g"),""),de.removeAttribute("data-"+t)}function prefersColorScheme(e){return w.matchMedia("(prefers-color-scheme"+e+")")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme("").media!=="not all"){for(const e of knownColorSchemes)if(prefersColorScheme(":"+e).matches)return e}return"dark"}\n';
const _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47node_modules_47_64nuxtjs_47color_45mode_47dist_47runtime_47plugin_46server = defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => vue_cjs_prod.reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({
      htmlAttrs,
      script: [{ children: script }]
    });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47plugins_47device_46ts = ({ req }) => {
  const md = new MobileDetect(req.headers["user-agent"]);
  const isMobile = md.phone() !== null || md.mobile() === "UnknownMobile";
  const isTablet = md.tablet() !== null || md.mobile() === "UnknownTablet";
  const isDesktop = !isMobile && !isTablet;
  const state = {
    hasMobile: isMobile,
    hasTablet: isTablet,
    hasDesktop: isDesktop
  };
  useState("devices", () => state);
  return true;
};
const _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47plugins_47loading_45bar_46ts = defineNuxtPlugin(() => {
  const app = useNuxtApp();
  app.hook("page:start", () => {
    console.log("Page start...");
  });
  app.hook("page:finish", () => {
    console.log("Page finished!");
  });
});
const _plugins = [
  preload,
  _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47_46nuxt_47components_46plugin_46mjs,
  _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47node_modules_47nuxt_47dist_47head_47runtime_47lib_47vueuse_45head_46plugin,
  _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47node_modules_47nuxt_47dist_47head_47runtime_47plugin,
  _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47node_modules_47nuxt_47dist_47pages_47runtime_47router,
  _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47node_modules_47_64nuxt_47image_45edge_47dist_47runtime_47plugin,
  _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47node_modules_47_64nuxtjs_47color_45mode_47dist_47runtime_47plugin_46server,
  _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47plugins_47device_46ts,
  _47Users_47bonn_47Documents_47GitHub_47next_45truyen_47plugins_47loading_45bar_46ts
];
const _sfc_main$y = {
  __name: "error-404",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "404"
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-011aae6d><div class="fixed left-0 right-0 spotlight z-10" data-v-011aae6d></div><div class="max-w-520px text-center z-20" data-v-011aae6d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-011aae6d>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-011aae6d>${serverRenderer.exports.ssrInterpolate(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-011aae6d>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const Error404 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-011aae6d"]]);
const _sfc_main$x = {
  __name: "error-500",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "500"
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-6aee6495><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-6aee6495></div><div class="max-w-520px text-center" data-v-6aee6495><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-6aee6495>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-6aee6495>${serverRenderer.exports.ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const Error500 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-6aee6495"]]);
const _sfc_main$v = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const error = props.error;
    (error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = String(error.statusCode || 500);
    const is404 = statusCode === "404";
    const statusMessage = (_a = error.statusMessage) != null ? _a : is404 ? "Page Not Found" : "Internal Server Error";
    const description = error.message || error.toString();
    const stack = void 0;
    const ErrorTemplate = is404 ? Error404 : Error500;
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ErrorTemplate), vue_cjs_prod.mergeProps({ statusCode: vue_cjs_prod.unref(statusCode), statusMessage: vue_cjs_prod.unref(statusMessage), description: vue_cjs_prod.unref(description), stack: vue_cjs_prod.unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    vue_cjs_prod.onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, throwError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = vue_cjs_prod.resolveComponent("App");
      serverRenderer.exports.ssrRenderSuspense(_push, {
        default: () => {
          if (vue_cjs_prod.unref(error)) {
            _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(_sfc_main$v), { error: vue_cjs_prod.unref(error) }, null, _parent));
          } else {
            _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "NuxtLoadingBar",
  __ssrInlineRender: true,
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    }
  },
  setup(__props) {
    const props = __props;
    const data = vue_cjs_prod.reactive({
      percent: 0,
      show: false,
      canSucceed: true
    });
    let _timer = null;
    let _throttle = null;
    let _cut;
    const clear = () => {
      _timer && clearInterval(_timer);
      _throttle && clearTimeout(_throttle);
      _timer = null;
    };
    const start = () => {
      clear();
      data.percent = 0;
      data.canSucceed = true;
      if (props.throttle) {
        _throttle = setTimeout(startTimer, props.throttle);
      } else {
        startTimer();
      }
    };
    const increase = (num) => {
      data.percent = Math.min(100, Math.floor(data.percent + num));
    };
    const finish = () => {
      data.percent = 100;
      hide();
    };
    const hide = () => {
      clear();
      setTimeout(() => {
        data.show = false;
        setTimeout(() => {
          data.percent = 0;
        }, 400);
      }, 500);
    };
    const startTimer = () => {
      data.show = true;
      _cut = 1e4 / Math.floor(props.duration);
      _timer = setInterval(() => {
        increase(_cut);
      }, 100);
    };
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", start);
    nuxtApp.hook("page:finish", finish);
    vue_cjs_prod.onBeforeUnmount(() => clear);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: ["nuxt-progress", {
          "nuxt-progress-failed": !data.canSucceed
        }],
        style: {
          width: data.percent + "%",
          left: data.left,
          height: props.height + "px",
          opacity: data.show ? 1 : 0,
          backgroundSize: 100 / data.percent * 100 + "% auto"
        }
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NuxtLoadingBar.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingBar = _sfc_main$t;
      const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
      _push(`<!--[-->`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLoadingBar, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = vue_cjs_prod.createApp(_sfc_main$u);
    vueApp.component("App", _sfc_main$s);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
const __nuxt_component_0_lazy$9 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return TheHeader$1;
}));
const __nuxt_component_1_lazy$8 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return TheFooter$1;
}));
const _sfc_main$r = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_LazyTheHeader = __nuxt_component_0_lazy$9;
  const _component_LazyTheFooter = __nuxt_component_1_lazy$8;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "_layout" }, _attrs))}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_LazyTheHeader, null, null, _parent));
  _push(`<div class="overflow-x-hidden">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_LazyTheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$5]]);
const _default$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _default
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "PageLoading",
  __ssrInlineRender: true,
  props: {
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex w-full bg-black h-full fixed z-50" }, _attrs))}><svg class="${serverRenderer.exports.ssrRenderClass([__props.className, "w-[100px] lg:w-[150px]"])}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="${serverRenderer.exports.ssrRenderStyle({ "margin": "auto", "background": "none", "display": "block", "shape-rendering": "auto" })}" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="84" cy="50" r="10" fill="#831a19"><animate attributeName="r" repeatCount="indefinite" dur="0.4464285714285714s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate><animate attributeName="fill" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#831a19;#831a19;#831a19;#831a19;#831a19" begin="0s"></animate></circle><circle cx="16" cy="50" r="10" fill="#831a19"><animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate></circle><circle cx="50" cy="50" r="10" fill="#831a19"><animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.4464285714285714s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.4464285714285714s"></animate></circle><circle cx="84" cy="50" r="10" fill="#831a19"><animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8928571428571428s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8928571428571428s"></animate></circle><circle cx="16" cy="50" r="10" fill="#831a19"><animate attributeName="r" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.3392857142857142s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1.7857142857142856s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.3392857142857142s"></animate></circle></svg></div>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/PageLoading.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __nuxt_component_0_lazy$8 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return SwiperCardContent;
}));
const __nuxt_component_1_lazy$7 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return SwiperCardButton;
}));
const __nuxt_component_2_lazy$2 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return SwiperCard;
}));
const _sfc_main$p = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Spotlight",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: spotlights, pending } = useLazyFetch("/api/spotlights");
    const modules = vue_cjs_prod.ref([Autoplay, EffectFade]);
    const autoPlaySettings = vue_cjs_prod.ref({
      delay: 2e3,
      disableOnInteraction: false
    });
    const backgroundImage = (spotlight) => {
      return {
        backgroundImage: `url(${spotlight.thumbnail})`
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazySharedSwiperCardContent = __nuxt_component_0_lazy$8;
      const _component_LazySharedSwiperCardButton = __nuxt_component_1_lazy$7;
      const _component_LazySharedSwiperCard = __nuxt_component_2_lazy$2;
      if (!vue_cjs_prod.unref(pending)) {
        _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative" }, _attrs))}>`);
        _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Swiper), {
          modules: modules.value,
          autoplay: autoPlaySettings.value,
          effect: "fade"
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(spotlights), (spotlight) => {
                _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(SwiperSlide), {
                  key: spotlight.slug
                }, {
                  default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="cursor-pointer"${_scopeId2}><figure class="deslide-cover h-[200px] w-full bg-cover bg-center bg-no-repeat blur md:h-[300px] lg:h-[480px]" style="${serverRenderer.exports.ssrRenderStyle(backgroundImage(spotlight))}"${_scopeId2}></figure><div class="absolute top-12 left-5 z-40 flex h-[60%] w-[50%] flex-col space-x-4 space-y-4 font-secondary text-white md:left-[5%] md:w-[55%] md:py-4 lg:space-y-6"${_scopeId2}>`);
                      _push3(serverRenderer.exports.ssrRenderComponent(_component_LazySharedSwiperCardContent, { spotlight }, null, _parent3, _scopeId2));
                      _push3(serverRenderer.exports.ssrRenderComponent(_component_LazySharedSwiperCardButton, { spotlight }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                      _push3(serverRenderer.exports.ssrRenderComponent(_component_LazySharedSwiperCard, { spotlight }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        vue_cjs_prod.createVNode("div", { class: "cursor-pointer" }, [
                          vue_cjs_prod.createVNode("figure", {
                            class: "deslide-cover h-[200px] w-full bg-cover bg-center bg-no-repeat blur md:h-[300px] lg:h-[480px]",
                            style: backgroundImage(spotlight)
                          }, null, 4),
                          vue_cjs_prod.createVNode("div", { class: "absolute top-12 left-5 z-40 flex h-[60%] w-[50%] flex-col space-x-4 space-y-4 font-secondary text-white md:left-[5%] md:w-[55%] md:py-4 lg:space-y-6" }, [
                            vue_cjs_prod.createVNode(_component_LazySharedSwiperCardContent, { spotlight }, null, 8, ["spotlight"]),
                            vue_cjs_prod.createVNode(_component_LazySharedSwiperCardButton, { spotlight }, null, 8, ["spotlight"])
                          ]),
                          vue_cjs_prod.createVNode(_component_LazySharedSwiperCard, { spotlight }, null, 8, ["spotlight"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(spotlights), (spotlight) => {
                  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(SwiperSlide), {
                    key: spotlight.slug
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode("div", { class: "cursor-pointer" }, [
                        vue_cjs_prod.createVNode("figure", {
                          class: "deslide-cover h-[200px] w-full bg-cover bg-center bg-no-repeat blur md:h-[300px] lg:h-[480px]",
                          style: backgroundImage(spotlight)
                        }, null, 4),
                        vue_cjs_prod.createVNode("div", { class: "absolute top-12 left-5 z-40 flex h-[60%] w-[50%] flex-col space-x-4 space-y-4 font-secondary text-white md:left-[5%] md:w-[55%] md:py-4 lg:space-y-6" }, [
                          vue_cjs_prod.createVNode(_component_LazySharedSwiperCardContent, { spotlight }, null, 8, ["spotlight"]),
                          vue_cjs_prod.createVNode(_component_LazySharedSwiperCardButton, { spotlight }, null, 8, ["spotlight"])
                        ]),
                        vue_cjs_prod.createVNode(_component_LazySharedSwiperCard, { spotlight }, null, 8, ["spotlight"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home-page/Spotlight.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const imageMixin = {
  props: {
    src: { type: String, required: true },
    format: { type: String, default: void 0 },
    quality: { type: [Number, String], default: void 0 },
    background: { type: String, default: void 0 },
    fit: { type: String, default: void 0 },
    modifiers: { type: Object, default: void 0 },
    preset: { type: String, default: void 0 },
    provider: { type: String, default: void 0 },
    sizes: { type: [Object, String], default: void 0 },
    preload: { type: Boolean, default: void 0 },
    width: { type: [String, Number], default: void 0 },
    height: { type: [String, Number], default: void 0 },
    alt: { type: String, default: void 0 },
    referrerpolicy: { type: String, default: void 0 },
    usemap: { type: String, default: void 0 },
    longdesc: { type: String, default: void 0 },
    ismap: { type: Boolean, default: void 0 },
    crossorigin: { type: [Boolean, String], default: void 0, validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val) },
    loading: { type: String, default: void 0 },
    decoding: { type: String, default: void 0, validator: (val) => ["async", "auto", "sync"].includes(val) }
  },
  computed: {
    nImgAttrs() {
      return {
        width: parseSize(this.width),
        height: parseSize(this.height),
        alt: this.alt,
        referrerpolicy: this.referrerpolicy,
        usemap: this.usemap,
        longdesc: this.longdesc,
        ismap: this.ismap,
        crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
        loading: this.loading,
        decoding: this.decoding
      };
    },
    nModifiers() {
      return {
        ...this.modifiers,
        width: parseSize(this.width),
        height: parseSize(this.height),
        format: this.format,
        quality: this.quality,
        background: this.background,
        fit: this.fit
      };
    },
    nOptions() {
      return {
        provider: this.provider,
        preset: this.preset
      };
    }
  }
};
const _sfc_main$o = vue_cjs_prod.defineComponent({
  name: "NuxtImg",
  mixins: [imageMixin],
  props: {
    placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
  },
  data() {
    return {
      placeholderLoaded: false
    };
  },
  head() {
    if (this.preload === true) {
      return {
        link: [
          {
            rel: "preload",
            as: "image",
            href: this.nSrc
          }
        ]
      };
    }
    return {};
  },
  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;
      if (this.sizes) {
        const { sizes, srcset } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }
      return attrs;
    },
    nMainSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },
    nSizes() {
      return this.$img.getSizes(this.src, {
        ...this.nOptions,
        sizes: this.sizes,
        modifiers: {
          ...this.nModifiers,
          width: parseSize(this.width),
          height: parseSize(this.height)
        }
      });
    },
    nSrc() {
      return this.nPlaceholder ? this.nPlaceholder : this.nMainSrc;
    },
    nPlaceholder() {
      let placeholder = this.placeholder;
      if (placeholder === "") {
        placeholder = true;
      }
      if (!placeholder || this.placeholderLoaded) {
        return false;
      }
      if (typeof placeholder === "string") {
        return placeholder;
      }
      const size = Array.isArray(placeholder) ? placeholder : typeof placeholder === "number" ? [placeholder, placeholder] : [10, 10];
      return this.$img(this.src, {
        ...this.nModifiers,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, this.nOptions);
    }
  },
  mounted() {
    if (this.nPlaceholder) {
      const img = new Image();
      img.src = this.nMainSrc;
      img.onload = () => {
        this.$refs.img.src = this.nMainSrc;
        this.placeholderLoaded = true;
      };
    }
    if (process.static) {
      if (this.sizes) {
        this.nSizes;
      }
    }
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ key: _ctx.nSrc }, _ctx.nAttrs, {
    ref: "img",
    src: _ctx.nSrc
  }, _attrs))}>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image-edge/dist/runtime/components/nuxt-img.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$4]]);
const __nuxt_component_1_lazy$6 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtLink;
}));
const _sfc_main$n = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "NewUpdated",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const comic = vue_cjs_prod.ref("");
    const { data: mangas, pending, refresh } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData("new-mangas", () => $fetch(`/api/manga-new?comic=${comic.value}`))), __temp = await __temp, __restore(), __temp);
    console.log("mangas", mangas.value);
    const comics = [
      {
        title: "Manga",
        slug: "manga-112"
      },
      {
        title: "Manhua",
        slug: "manhua"
      },
      {
        title: "\u0110\xE0m M\u1EF9",
        slug: "dam-my"
      },
      {
        title: "Chuy\u1EC3n Sinh",
        slug: "chuyen-sinh-213"
      },
      {
        title: "Ng\xF4n T\xECnh",
        slug: "ngon-tinh"
      }
    ];
    useState("switch:comic");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonSearchLoading = _sfc_main$B;
      const _component_LazyNuxtLink = __nuxt_component_1_lazy$6;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<!--[-->`);
      if (vue_cjs_prod.unref(pending)) {
        _push(`<div>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_CommonSearchLoading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!vue_cjs_prod.unref(pending)) {
        _push(`<div class="w-full rounded-xl pb-4 lg:my-4 col-span-3"><h2 class="my-6 whitespace-nowrap font-secondary text-3xl text-white lg:text-[160%] h-[40px] absolute-center-between"> Truy\u1EC7n n\u1ED5i b\u1EADt nh\u1EA5t <ul class="hidden space-x-4 text-lg md:flex mr-4"><!--[-->`);
        serverRenderer.exports.ssrRenderList(comics, (comic2, c) => {
          _push(`<li style="${serverRenderer.exports.ssrRenderStyle({ "border": `1px solid ${vue_cjs_prod.unref(randomColors)(vue_cjs_prod.unref(TailwindColors), c)}` })}" class="cursor-pointer flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">${serverRenderer.exports.ssrInterpolate(comic2.title)}</li>`);
        });
        _push(`<!--]--></ul></h2><ul class="w-full space-y-4 overflow-hidden text-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2"><!--[-->`);
        serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(mangas).slice(0, 16), (manga) => {
          _push(`<li class="flex px-4 py-2 w-full inline-grid" style="${serverRenderer.exports.ssrRenderStyle({ "margin-top": "0px !important" })}">`);
          _push(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
            to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
          }, {
            default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<figure class="relative h-[180px] lg:h-[300px] w-full overflow-hidden rounded-xl"${_scopeId}><span class="default-span-figure"${_scopeId}>`);
                _push2(serverRenderer.exports.ssrRenderComponent(_component_nuxt_img, {
                  sizes: "sm:100vw md:100vw lg:100vw",
                  format: "webp",
                  loading: "lazy",
                  alt: "img-preview",
                  src: manga.thumbnail,
                  class: "aspect-w-3 aspect-h-4 absolute object-cover object-center default-img"
                }, null, _parent2, _scopeId));
                _push2(`</span></figure>`);
              } else {
                return [
                  vue_cjs_prod.createVNode("figure", { class: "relative h-[180px] lg:h-[300px] w-full overflow-hidden rounded-xl" }, [
                    vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                      vue_cjs_prod.createVNode(_component_nuxt_img, {
                        sizes: "sm:100vw md:100vw lg:100vw",
                        format: "webp",
                        loading: "lazy",
                        alt: "img-preview",
                        src: manga.thumbnail,
                        class: "aspect-w-3 aspect-h-4 absolute object-cover object-center default-img"
                      }, null, 8, ["src"])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="flex w-full flex-col justify-center space-y-2 mt-4">`);
          _push(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
            to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
          }, {
            default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(manga.name)}</h3>`);
              } else {
                return [
                  vue_cjs_prod.createVNode("h3", { class: "font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl" }, vue_cjs_prod.toDisplayString(manga.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="flex align-center place-content-between"><h4 class="text-lg">${serverRenderer.exports.ssrInterpolate(manga.newChapter)}</h4><div class="flex"><h4 class="text-lg">${serverRenderer.exports.ssrInterpolate(manga.updatedAt)}</h4></div></div><ul class="space-x-4 text-lg md:flex flex flex-wrap"><!--[-->`);
          serverRenderer.exports.ssrRenderList(manga.genres.slice(0, 4), (genre, i) => {
            _push(`<li class="flex w-fit max-w-[70px] items-center whitespace-nowrap" style="${serverRenderer.exports.ssrRenderStyle([{ "margin-left": "0px", "margin-right": "0px", "margin": "3px" }, { "background-color": vue_cjs_prod.unref(randomColors)(vue_cjs_prod.unref(TailwindColors), i) }])}">${serverRenderer.exports.ssrInterpolate(genre)}</li>`);
          });
          _push(`<!--]--></ul></div></li>`);
        });
        _push(`<!--]--><li class="flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight"><button class="lg:text-3xl"><a href="/browse?comics=api-112&amp;view=all">Xem th\xEAm</a></button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manga/Section/NewUpdated.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_2 = vue_cjs_prod.defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots }) {
    const mounted = vue_cjs_prod.ref(false);
    vue_cjs_prod.onMounted(() => {
      mounted.value = true;
    });
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return vue_cjs_prod.createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
const __nuxt_component_1_lazy$5 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return RankList;
}));
const _sfc_main$m = {
  __name: "TabRanking",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const categories = vue_cjs_prod.ref({
      "Top Th\xE1ng": [],
      "Top Tu\u1EA7n": [],
      "Top Ng\xE0y": []
    });
    const wComic = useState("switch:comic");
    const comic = vue_cjs_prod.ref("");
    const { data: month, pending, refresh } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData("month", () => $fetch(`/api/top-month?comic=${comic.value}`))), __temp = await __temp, __restore(), __temp);
    const { data: week } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData("month", () => $fetch(`/api/top-week?comic=${comic.value}`))), __temp = await __temp, __restore(), __temp);
    const { data: day } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData("month", () => $fetch(`/api/top-day?comic=${comic.value}`))), __temp = await __temp, __restore(), __temp);
    vue_cjs_prod.watchEffect(() => {
      categories.value["Top Th\xE1ng"] = month.value;
      categories.value["Top Tu\u1EA7n"] = week.value;
      categories.value["Top Ng\xE0y"] = day.value;
    });
    vue_cjs_prod.watch([wComic], () => {
      categories.value["Top Th\xE1ng"] = month.value;
      categories.value["Top Tu\u1EA7n"] = week.value;
      categories.value["Top Ng\xE0y"] = day.value;
      console.log("categories", categories.value);
      comic.value = wComic.value;
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      const _component_LazyMangaSectionRankList = __nuxt_component_1_lazy$5;
      if (!vue_cjs_prod.unref(pending)) {
        _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "mt-4" }, _attrs))}>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Y), null, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Z), {
                      class: "flex space-x-1 rounded-xl p-1 bg-deep-black my-6",
                      style: { "height": "45px" }
                    }, {
                      default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          serverRenderer.exports.ssrRenderList(Object.keys(categories.value), (category) => {
                            _push4(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ee), {
                              as: "template",
                              key: category
                            }, {
                              default: vue_cjs_prod.withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<button class="${serverRenderer.exports.ssrRenderClass([
                                    "w-full rounded-lg py-2.5 font-medium leading-5 text-white-700 text-1xl",
                                    "focus:outline-none focus:ring-2",
                                    selected ? "bg-white text-gray-700 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                  ])}"${_scopeId4}>${serverRenderer.exports.ssrInterpolate(category)}</button>`);
                                } else {
                                  return [
                                    vue_cjs_prod.createVNode("button", {
                                      class: [
                                        "w-full rounded-lg py-2.5 font-medium leading-5 text-white-700 text-1xl",
                                        "focus:outline-none focus:ring-2",
                                        selected ? "bg-white text-gray-700 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                      ]
                                    }, vue_cjs_prod.toDisplayString(category), 3)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Object.keys(categories.value), (category) => {
                              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(ee), {
                                as: "template",
                                key: category
                              }, {
                                default: vue_cjs_prod.withCtx(({ selected }) => [
                                  vue_cjs_prod.createVNode("button", {
                                    class: [
                                      "w-full rounded-lg py-2.5 font-medium leading-5 text-white-700 text-1xl",
                                      "focus:outline-none focus:ring-2",
                                      selected ? "bg-white text-gray-700 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                    ]
                                  }, vue_cjs_prod.toDisplayString(category), 3)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(te), { class: "mt-2" }, {
                      default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          serverRenderer.exports.ssrRenderList(Object.values(categories.value), (mangas, i) => {
                            _push4(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ae$1), { key: i }, {
                              default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(serverRenderer.exports.ssrRenderComponent(_component_LazyMangaSectionRankList, { mangas }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    vue_cjs_prod.createVNode(_component_LazyMangaSectionRankList, { mangas }, null, 8, ["mangas"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Object.values(categories.value), (mangas, i) => {
                              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(ae$1), { key: i }, {
                                default: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createVNode(_component_LazyMangaSectionRankList, { mangas }, null, 8, ["mangas"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(Z), {
                        class: "flex space-x-1 rounded-xl p-1 bg-deep-black my-6",
                        style: { "height": "45px" }
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Object.keys(categories.value), (category) => {
                            return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(ee), {
                              as: "template",
                              key: category
                            }, {
                              default: vue_cjs_prod.withCtx(({ selected }) => [
                                vue_cjs_prod.createVNode("button", {
                                  class: [
                                    "w-full rounded-lg py-2.5 font-medium leading-5 text-white-700 text-1xl",
                                    "focus:outline-none focus:ring-2",
                                    selected ? "bg-white text-gray-700 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                  ]
                                }, vue_cjs_prod.toDisplayString(category), 3)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(te), { class: "mt-2" }, {
                        default: vue_cjs_prod.withCtx(() => [
                          (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Object.values(categories.value), (mangas, i) => {
                            return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(ae$1), { key: i }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_LazyMangaSectionRankList, { mangas }, null, 8, ["mangas"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                vue_cjs_prod.createVNode(vue_cjs_prod.unref(Y), null, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(Z), {
                      class: "flex space-x-1 rounded-xl p-1 bg-deep-black my-6",
                      style: { "height": "45px" }
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Object.keys(categories.value), (category) => {
                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(ee), {
                            as: "template",
                            key: category
                          }, {
                            default: vue_cjs_prod.withCtx(({ selected }) => [
                              vue_cjs_prod.createVNode("button", {
                                class: [
                                  "w-full rounded-lg py-2.5 font-medium leading-5 text-white-700 text-1xl",
                                  "focus:outline-none focus:ring-2",
                                  selected ? "bg-white text-gray-700 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                ]
                              }, vue_cjs_prod.toDisplayString(category), 3)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(te), { class: "mt-2" }, {
                      default: vue_cjs_prod.withCtx(() => [
                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Object.values(categories.value), (mangas, i) => {
                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(ae$1), { key: i }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode(_component_LazyMangaSectionRankList, { mangas }, null, 8, ["mangas"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manga/Section/TabRanking.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
function render$5(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    })
  ]);
}
function render$4(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function render$3(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    }),
    vue_cjs_prod.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
function render$2(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function render$1(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function render(_ctx, _cache) {
  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    vue_cjs_prod.createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
const __nuxt_component_0_lazy$7 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtLink;
}));
const _sfc_main$l = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Swiper",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: mangas, pending } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useLazyFetch("/api/manga-updated")), __temp = await __temp, __restore(), __temp);
    const device = useState("devices");
    const hasPreview = useState("hasPreview", () => -1);
    const navigateToManga = async (manga) => {
      const path = await useFirstPathChapter(manga, "");
      return navigateTo({
        path
      });
    };
    const sliderPerView = vue_cjs_prod.computed(() => {
      if (device.value.hasDesktop) {
        return 6;
      }
      return 3;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyNuxtLink = __nuxt_component_0_lazy$7;
      const _component_nuxt_img = __nuxt_component_1;
      if (!vue_cjs_prod.unref(pending)) {
        _push(`<section${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "w-[90%] mx-auto w-max-[1300px] mt-6 overflow-x-hidden" }, _attrs))}><h2 class="mt-4 flex select-none items-center font-secondary text-3xl text-white hover:cursor-pointer md:text-4xl lg:text-5xl"><div class="flex items-center transition-all hover:text-primary"><a href="/browse?view=newComic"> Truy\u1EC7n c\u1EADp nh\u1EADt m\u1EDBi </a>`);
        _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$b), { class: "h-8 w-8" }, null, _parent));
        _push(`</div></h2><div class="mt-4 hover:cursor-grab lg:mt-6">`);
        _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Swiper), {
          "slides-per-view": vue_cjs_prod.unref(sliderPerView),
          "space-between": 20
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(mangas), (manga, imanga) => {
                _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(SwiperSlide), {
                  key: `slide_${manga.slug}`,
                  onMousemove: ($event) => hasPreview.value = imanga,
                  onMouseleave: ($event) => hasPreview.value = -1
                }, {
                  default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="aspect-h-4 aspect-w-3 rounded-xl"${_scopeId2}>`);
                      _push3(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
                        to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                      }, {
                        default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="default-span-figure"${_scopeId3}>`);
                            _push4(serverRenderer.exports.ssrRenderComponent(_component_nuxt_img, {
                              sizes: "sm:100vw md:100vw lg:100vw",
                              format: "webp",
                              loading: "lazy",
                              src: manga.thumbnail,
                              class: "absolute inset-0 rounded-xl object-cover object-center default-img"
                            }, null, _parent4, _scopeId3));
                            _push4(`</span>`);
                          } else {
                            return [
                              vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                                vue_cjs_prod.createVNode(_component_nuxt_img, {
                                  sizes: "sm:100vw md:100vw lg:100vw",
                                  format: "webp",
                                  loading: "lazy",
                                  src: manga.thumbnail,
                                  class: "absolute inset-0 rounded-xl object-cover object-center default-img"
                                }, null, 8, ["src"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<span class="absolute top-2 left-2 h-fit w-fit rounded-xl bg-white bg-opacity-40 px-4 py-2 text-base backdrop-blur-md md:text-xl lg:text-3xl"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(manga.newChapter)}</span>`);
                      if (vue_cjs_prod.unref(hasPreview) === imanga && vue_cjs_prod.unref(device).hasDesktop) {
                        _push3(`<div class="animate__faster animate__animated animate__fadeIn flex h-full w-full flex-col space-y-2 overflow-hidden rounded-xl bg-highlight text-white"${_scopeId2}><a${_scopeId2}><h3 class="ml-4 mt-4 min-h-[40px] text-[100%] font-semibold line-clamp-2 hover:text-primary"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(manga.name)}</h3></a><p class="ml-4 flex flex-nowrap items-center"${_scopeId2}>`);
                        _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$a), { class: "h-6 w-6" }, null, _parent3, _scopeId2));
                        _push3(`<span class="ml-2 text-[90%] line-clamp-1"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(manga.newChapter)}</span></p><p class="ml-4 flex items-center"${_scopeId2}>`);
                        _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$4), { class: "h-6 w-6" }, null, _parent3, _scopeId2));
                        _push3(`<span class="ml-2 text-[90%]"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(manga.updatedAt)}</span></p><p class="ml-4 flex items-center"${_scopeId2}>`);
                        _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$7), { class: "h-6 w-6" }, null, _parent3, _scopeId2));
                        _push3(`<span class="ml-2 text-[90%]"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(manga.status)}</span></p><div class="flex h-fit w-full flex-col items-center space-y-4 py-6"${_scopeId2}><button class="w-[110px] flex w-fit items-center justify-center space-x-4 rounded-xl bg-primary py-2 px-4 transition-all hover:scale-[110%]"${_scopeId2}>`);
                        _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$5), { class: "h-5 w-5" }, null, _parent3, _scopeId2));
                        _push3(`<a${_scopeId2}>\u0110\u1ECDc ngay</a></button>`);
                        _push3(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
                          to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                        }, {
                          default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<button class="w-[110px] flex w-fit items-center justify-center space-x-4 rounded-xl bg-white py-2 px-4 text-gray-700 transition-all hover:scale-[110%]"${_scopeId3}>`);
                              _push4(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$1), { class: "h-5 w-5" }, null, _parent4, _scopeId3));
                              _push4(` Th\xF4ng tin </button>`);
                            } else {
                              return [
                                vue_cjs_prod.createVNode("button", { class: "w-[110px] flex w-fit items-center justify-center space-x-4 rounded-xl bg-white py-2 px-4 text-gray-700 transition-all hover:scale-[110%]" }, [
                                  vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$1), { class: "h-5 w-5" }),
                                  vue_cjs_prod.createTextVNode(" Th\xF4ng tin ")
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                      _push3(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
                        to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                      }, {
                        default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<h2 class="my-2 select-none text-xl text-white transition-all line-clamp-1 hover:text-primary md:text-2xl"${_scopeId3}>${serverRenderer.exports.ssrInterpolate(manga.name)}</h2>`);
                          } else {
                            return [
                              vue_cjs_prod.createVNode("h2", { class: "my-2 select-none text-xl text-white transition-all line-clamp-1 hover:text-primary md:text-2xl" }, vue_cjs_prod.toDisplayString(manga.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        vue_cjs_prod.createVNode("div", { class: "aspect-h-4 aspect-w-3 rounded-xl" }, [
                          vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                            to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                          }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                                vue_cjs_prod.createVNode(_component_nuxt_img, {
                                  sizes: "sm:100vw md:100vw lg:100vw",
                                  format: "webp",
                                  loading: "lazy",
                                  src: manga.thumbnail,
                                  class: "absolute inset-0 rounded-xl object-cover object-center default-img"
                                }, null, 8, ["src"])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          vue_cjs_prod.createVNode("span", { class: "absolute top-2 left-2 h-fit w-fit rounded-xl bg-white bg-opacity-40 px-4 py-2 text-base backdrop-blur-md md:text-xl lg:text-3xl" }, vue_cjs_prod.toDisplayString(manga.newChapter), 1),
                          vue_cjs_prod.unref(hasPreview) === imanga && vue_cjs_prod.unref(device).hasDesktop ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                            key: 0,
                            class: "animate__faster animate__animated animate__fadeIn flex h-full w-full flex-col space-y-2 overflow-hidden rounded-xl bg-highlight text-white"
                          }, [
                            vue_cjs_prod.createVNode("a", null, [
                              vue_cjs_prod.createVNode("h3", { class: "ml-4 mt-4 min-h-[40px] text-[100%] font-semibold line-clamp-2 hover:text-primary" }, vue_cjs_prod.toDisplayString(manga.name), 1)
                            ]),
                            vue_cjs_prod.createVNode("p", { class: "ml-4 flex flex-nowrap items-center" }, [
                              vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$a), { class: "h-6 w-6" }),
                              vue_cjs_prod.createVNode("span", { class: "ml-2 text-[90%] line-clamp-1" }, vue_cjs_prod.toDisplayString(manga.newChapter), 1)
                            ]),
                            vue_cjs_prod.createVNode("p", { class: "ml-4 flex items-center" }, [
                              vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$4), { class: "h-6 w-6" }),
                              vue_cjs_prod.createVNode("span", { class: "ml-2 text-[90%]" }, vue_cjs_prod.toDisplayString(manga.updatedAt), 1)
                            ]),
                            vue_cjs_prod.createVNode("p", { class: "ml-4 flex items-center" }, [
                              vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$7), { class: "h-6 w-6" }),
                              vue_cjs_prod.createVNode("span", { class: "ml-2 text-[90%]" }, vue_cjs_prod.toDisplayString(manga.status), 1)
                            ]),
                            vue_cjs_prod.createVNode("div", { class: "flex h-fit w-full flex-col items-center space-y-4 py-6" }, [
                              vue_cjs_prod.createVNode("button", {
                                onClick: ($event) => navigateToManga(manga),
                                class: "w-[110px] flex w-fit items-center justify-center space-x-4 rounded-xl bg-primary py-2 px-4 transition-all hover:scale-[110%]"
                              }, [
                                vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$5), { class: "h-5 w-5" }),
                                vue_cjs_prod.createVNode("a", null, "\u0110\u1ECDc ngay")
                              ], 8, ["onClick"]),
                              vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                                to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                              }, {
                                default: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createVNode("button", { class: "w-[110px] flex w-fit items-center justify-center space-x-4 rounded-xl bg-white py-2 px-4 text-gray-700 transition-all hover:scale-[110%]" }, [
                                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$1), { class: "h-5 w-5" }),
                                    vue_cjs_prod.createTextVNode(" Th\xF4ng tin ")
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ])
                          ])) : vue_cjs_prod.createCommentVNode("", true)
                        ]),
                        vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                          to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("h2", { class: "my-2 select-none text-xl text-white transition-all line-clamp-1 hover:text-primary md:text-2xl" }, vue_cjs_prod.toDisplayString(manga.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(mangas), (manga, imanga) => {
                  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.unref(SwiperSlide), {
                    key: `slide_${manga.slug}`,
                    onMousemove: ($event) => hasPreview.value = imanga,
                    onMouseleave: ($event) => hasPreview.value = -1
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode("div", { class: "aspect-h-4 aspect-w-3 rounded-xl" }, [
                        vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                          to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                              vue_cjs_prod.createVNode(_component_nuxt_img, {
                                sizes: "sm:100vw md:100vw lg:100vw",
                                format: "webp",
                                loading: "lazy",
                                src: manga.thumbnail,
                                class: "absolute inset-0 rounded-xl object-cover object-center default-img"
                              }, null, 8, ["src"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        vue_cjs_prod.createVNode("span", { class: "absolute top-2 left-2 h-fit w-fit rounded-xl bg-white bg-opacity-40 px-4 py-2 text-base backdrop-blur-md md:text-xl lg:text-3xl" }, vue_cjs_prod.toDisplayString(manga.newChapter), 1),
                        vue_cjs_prod.unref(hasPreview) === imanga && vue_cjs_prod.unref(device).hasDesktop ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                          key: 0,
                          class: "animate__faster animate__animated animate__fadeIn flex h-full w-full flex-col space-y-2 overflow-hidden rounded-xl bg-highlight text-white"
                        }, [
                          vue_cjs_prod.createVNode("a", null, [
                            vue_cjs_prod.createVNode("h3", { class: "ml-4 mt-4 min-h-[40px] text-[100%] font-semibold line-clamp-2 hover:text-primary" }, vue_cjs_prod.toDisplayString(manga.name), 1)
                          ]),
                          vue_cjs_prod.createVNode("p", { class: "ml-4 flex flex-nowrap items-center" }, [
                            vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$a), { class: "h-6 w-6" }),
                            vue_cjs_prod.createVNode("span", { class: "ml-2 text-[90%] line-clamp-1" }, vue_cjs_prod.toDisplayString(manga.newChapter), 1)
                          ]),
                          vue_cjs_prod.createVNode("p", { class: "ml-4 flex items-center" }, [
                            vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$4), { class: "h-6 w-6" }),
                            vue_cjs_prod.createVNode("span", { class: "ml-2 text-[90%]" }, vue_cjs_prod.toDisplayString(manga.updatedAt), 1)
                          ]),
                          vue_cjs_prod.createVNode("p", { class: "ml-4 flex items-center" }, [
                            vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$7), { class: "h-6 w-6" }),
                            vue_cjs_prod.createVNode("span", { class: "ml-2 text-[90%]" }, vue_cjs_prod.toDisplayString(manga.status), 1)
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "flex h-fit w-full flex-col items-center space-y-4 py-6" }, [
                            vue_cjs_prod.createVNode("button", {
                              onClick: ($event) => navigateToManga(manga),
                              class: "w-[110px] flex w-fit items-center justify-center space-x-4 rounded-xl bg-primary py-2 px-4 transition-all hover:scale-[110%]"
                            }, [
                              vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$5), { class: "h-5 w-5" }),
                              vue_cjs_prod.createVNode("a", null, "\u0110\u1ECDc ngay")
                            ], 8, ["onClick"]),
                            vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                              to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode("button", { class: "w-[110px] flex w-fit items-center justify-center space-x-4 rounded-xl bg-white py-2 px-4 text-gray-700 transition-all hover:scale-[110%]" }, [
                                  vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$1), { class: "h-5 w-5" }),
                                  vue_cjs_prod.createTextVNode(" Th\xF4ng tin ")
                                ])
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ])
                        ])) : vue_cjs_prod.createCommentVNode("", true)
                      ]),
                      vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                        to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode("h2", { class: "my-2 select-none text-xl text-white transition-all line-clamp-1 hover:text-primary md:text-2xl" }, vue_cjs_prod.toDisplayString(manga.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1032, ["onMousemove", "onMouseleave"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manga/Section/Swiper.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "TheHome",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: topAll, pending } = useFetch("/api/top-all", {
      initialCache: true,
      lazy: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPageLoading = _sfc_main$q;
      const _component_HomePageSpotlight = _sfc_main$p;
      const _component_MangaSectionNewUpdated = _sfc_main$n;
      const _component_MangaSectionTabRanking = _sfc_main$m;
      const _component_MangaSectionSwiper = _sfc_main$l;
      if (vue_cjs_prod.unref(pending)) {
        _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_CommonPageLoading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_HomePageSpotlight, null, null, _parent));
        _push(`<section class="w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_MangaSectionNewUpdated, { mangas: vue_cjs_prod.unref(topAll) }, null, _parent));
        _push(serverRenderer.exports.ssrRenderComponent(_component_MangaSectionTabRanking, null, null, _parent));
        _push(`</div></section>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_MangaSectionSwiper, null, null, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHome.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const TheHome = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_3_lazy$2 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return Chaplist;
}));
const _sfc_main$j = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "TheMangaDetail",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const route = useRoute();
    const params = route.params;
    const slug = vue_cjs_prod.ref("");
    vue_cjs_prod.watchEffect(() => {
      slug.value = params.slug;
    });
    const {
      data: manga,
      pending
    } = useFetch(`/api/comic?slug=${slug.value}&source=${SourceParams.netTruyen}`);
    console.log("manga", manga.value);
    useHead({
      title: (_a = manga.value) == null ? void 0 : _a.title,
      description: (_b = manga.value) == null ? void 0 : _b.author
    });
    const navigateToManga = async () => {
      const path = await useFirstPathChapter(null, slug.value);
      return navigateTo({
        path
      });
    };
    const navigateLastToManga = async () => {
      const path = await useLastPathChapter(null, slug.value);
      return navigateTo({
        path
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_CommonPageLoading = _sfc_main$q;
      const _component_ClientOnly = __nuxt_component_2;
      const _component_LazyMangaChaplist = __nuxt_component_3_lazy$2;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vue_cjs_prod.unref(pending)) {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_CommonPageLoading, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="flex h-fit flex-col" style="${serverRenderer.exports.ssrRenderStyle({ "height": "auto" })}"${_scopeId}><div class="absolute inset-0 z-0 h-[35%] w-full lg:h-[45%]"${_scopeId}><figure class="deslide-cover"${_scopeId}><span class="default-span-figure"${_scopeId}><img alt="comic-banner"${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(manga).thumbnail)} decoding="async" data-nimg="fill" class="count={10} object-fit absolute h-full w-full bg-cover bg-top bg-no-repeat object-cover blur default-img" sizes="100vw"${serverRenderer.exports.ssrRenderAttr("srcset", vue_cjs_prod.unref(manga).thumbnail)}${_scopeId}></span></figure></div><div class="z-10 mx-auto w-[85%] pt-16"${_scopeId}><section class="h-fit w-full"${_scopeId}><div class="flex h-full w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start"${_scopeId}><div class="mt-4 w-[60%] md:w-[250px] md:min-w-[250px]"${_scopeId}><figure class="aspect-w-3 aspect-h-5 relative rounded-2xl"${_scopeId}><span class="default-span-figure"${_scopeId}><img alt="manga-thumbnail" sizes="100vw"${serverRenderer.exports.ssrRenderAttr("srcset", vue_cjs_prod.unref(manga).thumbnail)}${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(manga).thumbnail)} decoding="async" data-nimg="fill" class="absolute inset-0 rounded-2xl object-cover object-center default-img"${_scopeId}></span></figure></div><div class="flex h-full w-full flex-col justify-center p-4 text-white md:min-h-[430px] lg:ml-4"${_scopeId}><div class="w-full space-y-4 text-center md:ml-2 md:text-left lg:w-[80%]"${_scopeId}><h1 class="font-secondary font-bold leading-none text-[6.5vw] md:text-[5.5vw] lg:text-[3.5vw]"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(manga).title)}</h1><h2 class="text-[3vw] md:min-h-[28px] md:text-[2vw] lg:text-[1.2vw]"${_scopeId}></h2><h3 class="text-center text-[3vw] md:text-left md:text-[2vw] lg:text-[1.1vw]"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(manga).author)}</h3><h4 class="flex items-center justify-center gap-4 md:justify-start"${_scopeId}><span class="block h-3 w-3 rounded-full bg-green-500"${_scopeId}></span> ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(manga).status)}</h4></div><div class="mt-4 flex flex-col-reverse gap-2 md:flex-col"${_scopeId}><ul class="my-4 flex flex-wrap items-center gap-4"${_scopeId}><h3 class="px-2 py-2"${_scopeId}>Th\u1EC3 lo\u1EA1i:</h3><!--[-->`);
              serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(manga).genres, (genre, g) => {
                _push2(`<li class="rounded-xl bg-highlight px-4 py-2"${_scopeId}><a href="/browse?genres=mystery"${_scopeId}>${serverRenderer.exports.ssrInterpolate(genre.genreTitle)}</a></li>`);
              });
              _push2(`<!--]--></ul><div class="flex h-[150px] w-full flex-col items-center gap-6 md:flex-row md:items-start"${_scopeId}><a${_scopeId}><button class="pulse-effect-primary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-primary transition-all hover:scale-[110%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg> \u0110\u1ECDc ngay </button></a><a${_scopeId}><button class="pulse-effect-secondary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-white text-gray-800 transition-all hover:scale-[110%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-8 w-8 text-primary"${_scopeId}><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"${_scopeId}></path></svg> Chap m\u1EDBi nh\u1EA5t </button></a><button class="shine-effect absolute-center bg-hight-light h-[50px] w-[50px] rounded-xl transition-all hover:text-primary"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"${_scopeId}></path></svg></button></div></div></div></div></section><div class="flex-col-reverse flex"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(A), null, {
                      default: vue_cjs_prod.withCtx(({ open }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(G), null, {
                            default: vue_cjs_prod.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<button class="flex w-full flex-col items-center bg-cyan-300/0 text-white"${_scopeId4}> T\xF3m t\u1EAFt <svg class="${serverRenderer.exports.ssrRenderClass([open ? "rotate-180 transform" : "", "h-8 w-8"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"${_scopeId4}><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"${_scopeId4}></path></svg></button>`);
                              } else {
                                return [
                                  vue_cjs_prod.createVNode("button", { class: "flex w-full flex-col items-center bg-cyan-300/0 text-white" }, [
                                    vue_cjs_prod.createTextVNode(" T\xF3m t\u1EAFt "),
                                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                      class: [open ? "rotate-180 transform" : "", "h-8 w-8"],
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      "stroke-width": "2",
                                      stroke: "currentColor",
                                      "aria-hidden": "true"
                                    }, [
                                      vue_cjs_prod.createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        d: "M19 9l-7 7-7-7"
                                      })
                                    ], 2))
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(J), { class: "transform scale-100 opacity-100" }, {
                            default: vue_cjs_prod.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2;
                              if (_push5) {
                                _push5(`<p class="text-white"${_scopeId4}>${serverRenderer.exports.ssrInterpolate((_a2 = vue_cjs_prod.unref(manga)) == null ? void 0 : _a2.review)}</p>`);
                              } else {
                                return [
                                  vue_cjs_prod.createVNode("p", { class: "text-white" }, vue_cjs_prod.toDisplayString((_b2 = vue_cjs_prod.unref(manga)) == null ? void 0 : _b2.review), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            vue_cjs_prod.createVNode(vue_cjs_prod.unref(G), null, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode("button", { class: "flex w-full flex-col items-center bg-cyan-300/0 text-white" }, [
                                  vue_cjs_prod.createTextVNode(" T\xF3m t\u1EAFt "),
                                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                    class: [open ? "rotate-180 transform" : "", "h-8 w-8"],
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": "2",
                                    stroke: "currentColor",
                                    "aria-hidden": "true"
                                  }, [
                                    vue_cjs_prod.createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "M19 9l-7 7-7-7"
                                    })
                                  ], 2))
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(vue_cjs_prod.unref(J), { class: "transform scale-100 opacity-100" }, {
                              default: vue_cjs_prod.withCtx(() => {
                                var _a2;
                                return [
                                  vue_cjs_prod.createVNode("p", { class: "text-white" }, vue_cjs_prod.toDisplayString((_a2 = vue_cjs_prod.unref(manga)) == null ? void 0 : _a2.review), 1)
                                ];
                              }),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(A), null, {
                        default: vue_cjs_prod.withCtx(({ open }) => [
                          vue_cjs_prod.createVNode(vue_cjs_prod.unref(G), null, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode("button", { class: "flex w-full flex-col items-center bg-cyan-300/0 text-white" }, [
                                vue_cjs_prod.createTextVNode(" T\xF3m t\u1EAFt "),
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  class: [open ? "rotate-180 transform" : "", "h-8 w-8"],
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "2",
                                  stroke: "currentColor",
                                  "aria-hidden": "true"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M19 9l-7 7-7-7"
                                  })
                                ], 2))
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          vue_cjs_prod.createVNode(vue_cjs_prod.unref(J), { class: "transform scale-100 opacity-100" }, {
                            default: vue_cjs_prod.withCtx(() => {
                              var _a2;
                              return [
                                vue_cjs_prod.createVNode("p", { class: "text-white" }, vue_cjs_prod.toDisplayString((_a2 = vue_cjs_prod.unref(manga)) == null ? void 0 : _a2.review), 1)
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyMangaChaplist, {
                slug: slug.value,
                chapterList: vue_cjs_prod.unref(manga).chapterList
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
          } else {
            return [
              vue_cjs_prod.unref(pending) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", { key: 0 }, [
                vue_cjs_prod.createVNode(_component_CommonPageLoading)
              ])) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                key: 1,
                class: "flex h-fit flex-col",
                style: { "height": "auto" }
              }, [
                vue_cjs_prod.createVNode("div", { class: "absolute inset-0 z-0 h-[35%] w-full lg:h-[45%]" }, [
                  vue_cjs_prod.createVNode("figure", { class: "deslide-cover" }, [
                    vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                      vue_cjs_prod.createVNode("img", {
                        alt: "comic-banner",
                        src: vue_cjs_prod.unref(manga).thumbnail,
                        decoding: "async",
                        "data-nimg": "fill",
                        class: "count={10} object-fit absolute h-full w-full bg-cover bg-top bg-no-repeat object-cover blur default-img",
                        sizes: "100vw",
                        srcset: vue_cjs_prod.unref(manga).thumbnail
                      }, null, 8, ["src", "srcset"])
                    ])
                  ])
                ]),
                vue_cjs_prod.createVNode("div", { class: "z-10 mx-auto w-[85%] pt-16" }, [
                  vue_cjs_prod.createVNode("section", { class: "h-fit w-full" }, [
                    vue_cjs_prod.createVNode("div", { class: "flex h-full w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start" }, [
                      vue_cjs_prod.createVNode("div", { class: "mt-4 w-[60%] md:w-[250px] md:min-w-[250px]" }, [
                        vue_cjs_prod.createVNode("figure", { class: "aspect-w-3 aspect-h-5 relative rounded-2xl" }, [
                          vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                            vue_cjs_prod.createVNode("img", {
                              alt: "manga-thumbnail",
                              sizes: "100vw",
                              srcset: vue_cjs_prod.unref(manga).thumbnail,
                              src: vue_cjs_prod.unref(manga).thumbnail,
                              decoding: "async",
                              "data-nimg": "fill",
                              class: "absolute inset-0 rounded-2xl object-cover object-center default-img"
                            }, null, 8, ["srcset", "src"])
                          ])
                        ])
                      ]),
                      vue_cjs_prod.createVNode("div", { class: "flex h-full w-full flex-col justify-center p-4 text-white md:min-h-[430px] lg:ml-4" }, [
                        vue_cjs_prod.createVNode("div", { class: "w-full space-y-4 text-center md:ml-2 md:text-left lg:w-[80%]" }, [
                          vue_cjs_prod.createVNode("h1", { class: "font-secondary font-bold leading-none text-[6.5vw] md:text-[5.5vw] lg:text-[3.5vw]" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(manga).title), 1),
                          vue_cjs_prod.createVNode("h2", { class: "text-[3vw] md:min-h-[28px] md:text-[2vw] lg:text-[1.2vw]" }),
                          vue_cjs_prod.createVNode("h3", { class: "text-center text-[3vw] md:text-left md:text-[2vw] lg:text-[1.1vw]" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(manga).author), 1),
                          vue_cjs_prod.createVNode("h4", { class: "flex items-center justify-center gap-4 md:justify-start" }, [
                            vue_cjs_prod.createVNode("span", { class: "block h-3 w-3 rounded-full bg-green-500" }),
                            vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(manga).status), 1)
                          ])
                        ]),
                        vue_cjs_prod.createVNode("div", { class: "mt-4 flex flex-col-reverse gap-2 md:flex-col" }, [
                          vue_cjs_prod.createVNode("ul", { class: "my-4 flex flex-wrap items-center gap-4" }, [
                            vue_cjs_prod.createVNode("h3", { class: "px-2 py-2" }, "Th\u1EC3 lo\u1EA1i:"),
                            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(manga).genres, (genre, g) => {
                              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", {
                                class: "rounded-xl bg-highlight px-4 py-2",
                                key: `genre${g}`
                              }, [
                                vue_cjs_prod.createVNode("a", { href: "/browse?genres=mystery" }, vue_cjs_prod.toDisplayString(genre.genreTitle), 1)
                              ]);
                            }), 128))
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "flex h-[150px] w-full flex-col items-center gap-6 md:flex-row md:items-start" }, [
                            vue_cjs_prod.createVNode("a", {
                              onClick: ($event) => navigateToManga()
                            }, [
                              vue_cjs_prod.createVNode("button", { class: "pulse-effect-primary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-primary transition-all hover:scale-[110%]" }, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "2",
                                  stroke: "currentColor",
                                  "aria-hidden": "true",
                                  class: "h-8 w-8"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                  })
                                ])),
                                vue_cjs_prod.createTextVNode(" \u0110\u1ECDc ngay ")
                              ])
                            ], 8, ["onClick"]),
                            vue_cjs_prod.createVNode("a", {
                              onClick: ($event) => navigateLastToManga()
                            }, [
                              vue_cjs_prod.createVNode("button", { class: "pulse-effect-secondary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-white text-gray-800 transition-all hover:scale-[110%]" }, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true",
                                  class: "h-8 w-8 text-primary"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                                    "clip-rule": "evenodd"
                                  })
                                ])),
                                vue_cjs_prod.createTextVNode(" Chap m\u1EDBi nh\u1EA5t ")
                              ])
                            ], 8, ["onClick"]),
                            vue_cjs_prod.createVNode("button", { class: "shine-effect absolute-center bg-hight-light h-[50px] w-[50px] rounded-xl transition-all hover:text-primary" }, [
                              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "2",
                                stroke: "currentColor",
                                "aria-hidden": "true",
                                class: "h-8 w-8"
                              }, [
                                vue_cjs_prod.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                })
                              ]))
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  vue_cjs_prod.createVNode("div", { class: "flex-col-reverse flex" }, [
                    vue_cjs_prod.createVNode(_component_ClientOnly, null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(A), null, {
                          default: vue_cjs_prod.withCtx(({ open }) => [
                            vue_cjs_prod.createVNode(vue_cjs_prod.unref(G), null, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode("button", { class: "flex w-full flex-col items-center bg-cyan-300/0 text-white" }, [
                                  vue_cjs_prod.createTextVNode(" T\xF3m t\u1EAFt "),
                                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                    class: [open ? "rotate-180 transform" : "", "h-8 w-8"],
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": "2",
                                    stroke: "currentColor",
                                    "aria-hidden": "true"
                                  }, [
                                    vue_cjs_prod.createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "M19 9l-7 7-7-7"
                                    })
                                  ], 2))
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(vue_cjs_prod.unref(J), { class: "transform scale-100 opacity-100" }, {
                              default: vue_cjs_prod.withCtx(() => {
                                var _a2;
                                return [
                                  vue_cjs_prod.createVNode("p", { class: "text-white" }, vue_cjs_prod.toDisplayString((_a2 = vue_cjs_prod.unref(manga)) == null ? void 0 : _a2.review), 1)
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  vue_cjs_prod.createVNode(_component_LazyMangaChaplist, {
                    slug: slug.value,
                    chapterList: vue_cjs_prod.unref(manga).chapterList
                  }, null, 8, ["slug", "chapterList"])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheMangaDetail.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const TheMangaDetail = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Chaplist",
  __ssrInlineRender: true,
  props: {
    slug: String,
    chapterList: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "h-fit w-full" }, _attrs))}><h2 class="mt-4 flex select-none items-center font-secondary text-3xl text-white hover:cursor-pointer md:text-4xl lg:text-5xl"><div class="flex items-center transition-all hover:text-primary">Danh s\xE1ch ch\u01B0\u01A1ng</div></h2><div class="my-6 flex h-fit w-full flex-col overflow-x-hidden rounded-xl bg-highlight"><div class="z-40 my-4 flex min-h-[40px] w-full items-center gap-4 text-white md:my-2"><div class="mx-4 flex h-[32px] w-[50%] items-center justify-center rounded-xl bg-[#5f5f5f] px-2 hover:bg-white/25 md:w-[30%] lg:w-[20%]"><input placeholder="\u0110i \u0111\u1EBFn ch\u01B0\u01A1ng..." type="number" min="0" class="w-full bg-transparent p-2 transition-all" value=""><button class="px-4 transition-all"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg></button></div><div class="relative"><button id="headlessui-listbox-button-3" type="button" aria-haspopup="true" aria-expanded="false"><div class="mr-2 flex items-center gap-1 text-lg md:text-2xl"><span>Ngu\u1ED3n: NT</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="animate__animated animate__faster animate__rotateIn h-8 w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg></div></button></div></div><div class="animate__fadeIn animate__animated m-2 overflow-hidden text-white overflow-y-scroll lg:h-[350px] h-[200px]"><!--[-->`);
      serverRenderer.exports.ssrRenderList(__props.chapterList, (chap, cI) => {
        _push(`<button class="w-full my-1"><a class="bg-deep-black flex h-[30px] items-center justify-between rounded-lg"><div class="flex w-[30%] min-w-max items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="mx-4 h-4 w-4"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg><span class="inline-block overflow-hidden text-left text-lg font-bold line-clamp-1 hover:text-white max-w-[200px]"> Chapter ${serverRenderer.exports.ssrInterpolate(chap.chapterNumber)}</span></div><div class="flex items-center px-4"><span class="whitespace-nowrap text-lg font-extralight text-gray-300">${serverRenderer.exports.ssrInterpolate(chap.updatedAt)}</span></div></a></button>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manga/Chaplist.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Chaplist = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_1_lazy$4 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtLink;
}));
const __nuxt_component_3_lazy$1 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return ChapterImg;
}));
const __nuxt_component_4_lazy = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return ReadMangaFooter;
}));
const _sfc_main$h = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "TheRead",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const route = useRoute();
    const router = useRouter();
    const params = route.params;
    const chapterID = vue_cjs_prod.ref(params.id);
    const chapterNumber = vue_cjs_prod.ref(params.chapter);
    const realSlug = params.slug.slice(0, params.slug.lastIndexOf("-"));
    const {
      pending,
      data: chapters,
      refresh
    } = useFetch(`/api/chapters?slug=${realSlug}&chapter=${chapterNumber.value}&id=${chapterID.value}`);
    const manga = useStorage(keys$1.MANGA_DETAIL, {
      serializer: {
        read: (v) => v ? JSON.parse(v) : null,
        write: (v) => JSON.stringify(v)
      }
    });
    const scrollToTop = () => {
      if (isClient) {
        window.scrollTo(0, 0);
      }
    };
    const handleChapter = async (action) => {
      let stt = manga.value.chapterList.findIndex((chapter) => chapter.chapterNumber === params.chapter);
      if (action === "next") {
        if (!manga.value.chapterList[--stt])
          return;
        const [cNum, cID] = [
          manga.value.chapterList[stt].chapterNumber,
          manga.value.chapterList[stt].chapterId
        ];
        chapterID.value = cID;
        chapterNumber.value = cNum;
        router.replace(`/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${params.slug}/${cNum}/${cID}`);
        await refresh();
      }
      if (action === "prev") {
        if (!manga.value.chapterList[++stt])
          return;
        const [cNum, cID] = [
          manga.value.chapterList[stt].chapterNumber,
          manga.value.chapterList[stt].chapterId
        ];
        chapterNumber.value = cNum;
        chapterID.value = cID;
        router.replace(`/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${params.slug}/${cNum}/${cID}`);
      }
      await refresh();
      scrollToTop();
    };
    const handleNextProcess = (action) => {
      handleChapter(action);
    };
    useHead({
      title: `${(_a = manga.value) == null ? void 0 : _a.title} | Chapter ${chapterNumber.value}`,
      description: (_b = manga.value) == null ? void 0 : _b.review
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonPageLoading = _sfc_main$q;
      const _component_LazyNuxtLink = __nuxt_component_1_lazy$4;
      const _component_client_only = __nuxt_component_2;
      const _component_LazyMangaChapterImg = __nuxt_component_3_lazy$1;
      const _component_LazyMangaReadMangaFooter = __nuxt_component_4_lazy;
      if (vue_cjs_prod.unref(pending)) {
        _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_CommonPageLoading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex h-fit min-h-screen flex-col bg-black" }, _attrs))}><div class="relative flex h-fit flex-1 text-white"><div class="h-fit min-h-screen w-full bg-black"><div class="fixed top-0 left-0 z-[999] h-[60px] w-full"><div class="flex h-full w-full items-center justify-between text-lg md:text-2xl bg-black"><div class="flex h-full w-fit items-center justify-evenly gap-4 px-4 md:space-x-4">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
          to: vue_cjs_prod.unref(useMangaDetailPagePath)(vue_cjs_prod.unref(params).slug),
          class: "flex"
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$e), { class: "h-8 w-8" }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              return [
                vue_cjs_prod.createVNode("button", null, [
                  vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$e), { class: "h-8 w-8" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(serverRenderer.exports.ssrRenderComponent(_component_client_only, null, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h1 class="fond-bold h-fit w-[25%] capitalize line-clamp-1 md:w-[30%]"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(manga).title)}</h1>`);
            } else {
              return [
                vue_cjs_prod.createVNode("h1", { class: "fond-bold h-fit w-[25%] capitalize line-clamp-1 md:w-[30%]" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(manga).title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="h-[60%] w-fit max-w-[80px] whitespace-nowrap rounded-xl bg-highlight p-2 text-base line-clamp-1 md:text-lg"> Chapter: ${serverRenderer.exports.ssrInterpolate(chapterNumber.value)}</button><div class="absolute-center h-full w-fit gap-4 md:mx-6"><button data-id="prev" class="rounded-lg bg-highlight p-4 md:p-4">`);
        _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$f), { class: "h-6 w-6" }, null, _parent));
        _push(`</button><button data-id="next" class="rounded-lg bg-highlight p-4 md:p-4">`);
        _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$d), { class: "w-6 h-6" }, null, _parent));
        _push(`</button></div></div><div class="flex h-full w-fit items-center pr-2 md:gap-10 md:px-4"><button class="rounded-lg bg-highlight p-2">`);
        _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$3), { class: "h8 w-8" }, null, _parent));
        _push(`</button></div></div></div>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_LazyMangaChapterImg, {
          chapters: vue_cjs_prod.unref(chapters).data
        }, null, _parent));
        _push(serverRenderer.exports.ssrRenderComponent(_component_LazyMangaReadMangaFooter, { onNextProcess: handleNextProcess }, null, _parent));
        _push(`</div></div></div>`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheRead.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const TheRead = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_2_lazy$1 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtLink;
}));
const _sfc_main$g = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const filters = vue_cjs_prod.ref({
      "genres": "action"
    });
    const { data: mangas, pending, refresh } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData("filter", () => $fetch(`/api/filter?genres=${filters.value.genres}`))), __temp = await __temp, __restore(), __temp);
    vue_cjs_prod.watch([route], () => {
      filters.value.genres = route.query.genres;
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_CommonSearchLoading = _sfc_main$B;
      const _component_LazyNuxtLink = __nuxt_component_2_lazy$1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vue_cjs_prod.unref(pending)) {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_CommonSearchLoading, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<section class="w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"${_scopeId}><div class="w-full rounded-xl pb-4 lg:my-4 col-span-3"${_scopeId}><h2 class="my-6 whitespace-nowrap font-secondary text-3xl text-white lg:text-[160%] h-[40px] absolute-center-between"${_scopeId}> Truy\u1EC7n n\u1ED5i b\u1EADt nh\u1EA5t </h2><ul class="w-full space-y-4 overflow-hidden text-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2"${_scopeId}><!--[-->`);
              serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(mangas).slice(0, 16), (manga) => {
                _push2(`<li class="flex px-4 py-2 w-full inline-grid" style="${serverRenderer.exports.ssrRenderStyle({ "margin-top": "0px !important" })}"${_scopeId}>`);
                _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
                  to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                }, {
                  default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<figure class="relative h-[180px] lg:h-[300px] w-full overflow-hidden rounded-xl"${_scopeId2}><span class="default-span-figure"${_scopeId2}><img alt="img-preview"${serverRenderer.exports.ssrRenderAttr("src", manga.thumbnail)} decoding="async" data-nimg="fill" class="aspect-w-3 aspect-h-4 absolute object-cover object-center default-img" sizes="100vw"${serverRenderer.exports.ssrRenderAttr("srcset", manga.thumbnail)}${_scopeId2}></span></figure>`);
                    } else {
                      return [
                        vue_cjs_prod.createVNode("figure", { class: "relative h-[180px] lg:h-[300px] w-full overflow-hidden rounded-xl" }, [
                          vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                            vue_cjs_prod.createVNode("img", {
                              alt: "img-preview",
                              src: manga.thumbnail,
                              decoding: "async",
                              "data-nimg": "fill",
                              class: "aspect-w-3 aspect-h-4 absolute object-cover object-center default-img",
                              sizes: "100vw",
                              srcset: manga.thumbnail
                            }, null, 8, ["src", "srcset"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="flex w-full flex-col justify-center space-y-2 mt-4"${_scopeId}>`);
                _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
                  to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                }, {
                  default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h3 class="font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(manga.name)}</h3>`);
                    } else {
                      return [
                        vue_cjs_prod.createVNode("h3", { class: "font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl" }, vue_cjs_prod.toDisplayString(manga.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="flex align-center place-content-between"${_scopeId}><h4 class="text-lg"${_scopeId}>${serverRenderer.exports.ssrInterpolate(manga.newChapter)}</h4><div class="flex"${_scopeId}>`);
                _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$9), {
                  class: "h-6 w-5 mr-2",
                  style: { "margin-top": "1px" }
                }, null, _parent2, _scopeId));
                _push2(`<h4 class="text-lg"${_scopeId}>${serverRenderer.exports.ssrInterpolate(manga.view)}</h4></div></div><ul class="space-x-4 text-lg md:flex flex flex-wrap"${_scopeId}><!--[-->`);
                serverRenderer.exports.ssrRenderList(manga.genres.slice(0, 4), (genre, i) => {
                  _push2(`<li class="flex w-fit max-w-[70px] items-center whitespace-nowrap" style="${serverRenderer.exports.ssrRenderStyle([{ "margin-left": "0px", "margin-right": "0px", "margin": "3px" }, { "background-color": vue_cjs_prod.unref(randomColors)(vue_cjs_prod.unref(TailwindColors), i) }])}"${_scopeId}>${serverRenderer.exports.ssrInterpolate(genre)}</li>`);
                });
                _push2(`<!--]--></ul></div></li>`);
              });
              _push2(`<!--]--><li class="flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight"${_scopeId}><button class="lg:text-3xl"${_scopeId}><a href="/browse?comics=api-112&amp;view=all"${_scopeId}>Xem th\xEAm</a></button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"${_scopeId}></path></svg></li></ul></div></div></section>`);
            }
          } else {
            return [
              vue_cjs_prod.unref(pending) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", { key: 0 }, [
                vue_cjs_prod.createVNode(_component_CommonSearchLoading)
              ])) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("section", {
                key: 1,
                class: "w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden"
              }, [
                vue_cjs_prod.createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" }, [
                  vue_cjs_prod.createVNode("div", { class: "w-full rounded-xl pb-4 lg:my-4 col-span-3" }, [
                    vue_cjs_prod.createVNode("h2", { class: "my-6 whitespace-nowrap font-secondary text-3xl text-white lg:text-[160%] h-[40px] absolute-center-between" }, " Truy\u1EC7n n\u1ED5i b\u1EADt nh\u1EA5t "),
                    vue_cjs_prod.createVNode("ul", { class: "w-full space-y-4 overflow-hidden text-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2" }, [
                      (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(mangas).slice(0, 16), (manga) => {
                        return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", {
                          class: "flex px-4 py-2 w-full inline-grid",
                          key: manga.slug,
                          style: { "margin-top": "0px !important" }
                        }, [
                          vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                            to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                          }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode("figure", { class: "relative h-[180px] lg:h-[300px] w-full overflow-hidden rounded-xl" }, [
                                vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                                  vue_cjs_prod.createVNode("img", {
                                    alt: "img-preview",
                                    src: manga.thumbnail,
                                    decoding: "async",
                                    "data-nimg": "fill",
                                    class: "aspect-w-3 aspect-h-4 absolute object-cover object-center default-img",
                                    sizes: "100vw",
                                    srcset: manga.thumbnail
                                  }, null, 8, ["src", "srcset"])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          vue_cjs_prod.createVNode("div", { class: "flex w-full flex-col justify-center space-y-2 mt-4" }, [
                            vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                              to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode("h3", { class: "font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl" }, vue_cjs_prod.toDisplayString(manga.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"]),
                            vue_cjs_prod.createVNode("div", { class: "flex align-center place-content-between" }, [
                              vue_cjs_prod.createVNode("h4", { class: "text-lg" }, vue_cjs_prod.toDisplayString(manga.newChapter), 1),
                              vue_cjs_prod.createVNode("div", { class: "flex" }, [
                                vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$9), {
                                  class: "h-6 w-5 mr-2",
                                  style: { "margin-top": "1px" }
                                }),
                                vue_cjs_prod.createVNode("h4", { class: "text-lg" }, vue_cjs_prod.toDisplayString(manga.view), 1)
                              ])
                            ]),
                            vue_cjs_prod.createVNode("ul", { class: "space-x-4 text-lg md:flex flex flex-wrap" }, [
                              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(manga.genres.slice(0, 4), (genre, i) => {
                                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", {
                                  class: "flex w-fit max-w-[70px] items-center whitespace-nowrap",
                                  style: [{ "margin-left": "0px", "margin-right": "0px", "margin": "3px" }, { "background-color": vue_cjs_prod.unref(randomColors)(vue_cjs_prod.unref(TailwindColors), i) }],
                                  key: `genre_${i}`
                                }, vue_cjs_prod.toDisplayString(genre), 5);
                              }), 128))
                            ])
                          ])
                        ]);
                      }), 128)),
                      vue_cjs_prod.createVNode("li", { class: "flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight" }, [
                        vue_cjs_prod.createVNode("button", { class: "lg:text-3xl" }, [
                          vue_cjs_prod.createVNode("a", { href: "/browse?comics=api-112&view=all" }, "Xem th\xEAm")
                        ]),
                        (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "2",
                          stroke: "currentColor",
                          "aria-hidden": "true",
                          class: "h-8 w-8"
                        }, [
                          vue_cjs_prod.createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M9 5l7 7-7 7"
                          })
                        ]))
                      ])
                    ])
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/filter/index.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const index$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_1_lazy$3 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return TheHome;
}));
const _sfc_main$f = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_LazyTheHome = __nuxt_component_1_lazy$3;
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyTheHome, null, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_LazyTheHome)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$3]]);
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$2
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_0_lazy$6 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return TheMangaDetail;
}));
const _sfc_main$e = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_LazyTheMangaDetail = __nuxt_component_0_lazy$6;
  _push(serverRenderer.exports.ssrRenderComponent(_component_LazyTheMangaDetail, _attrs, null, _parent));
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manga/detail/[slug].vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$2]]);
const _slug_$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _slug_
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_1_lazy$2 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return Chaplist;
}));
const _sfc_main$d = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = vue_cjs_prod.ref(route.query.slug);
    const onPickManga = useState("pickManga");
    const url = `/api/comic?slug=${slug.value}&source=${SourceParams.netTruyen}`;
    const { data: comic, refresh } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData("manga-detail", () => $fetch(url))), __temp = await __temp, __restore(), __temp);
    const navigateToManga = async (slug2) => {
      const path = await useFirstPathChapter(null, slug2);
      return navigateTo({
        path
      });
    };
    vue_cjs_prod.watch([onPickManga], async () => {
      if (onPickManga.value) {
        slug.value = onPickManga.value;
        await refresh();
      }
    });
    useHead({
      title: comic.value.title,
      description: comic.value.author
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_LazyMangaChaplist = __nuxt_component_1_lazy$2;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-fit flex-col" style="${serverRenderer.exports.ssrRenderStyle({ "height": "auto" })}"${_scopeId}><div class="absolute inset-0 z-0 h-[35%] w-full lg:h-[45%]"${_scopeId}><figure class="deslide-cover"${_scopeId}><span style="${serverRenderer.exports.ssrRenderStyle({ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" })}"${_scopeId}><img alt="comic-banner"${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(comic).thumbnail)} decoding="async" data-nimg="fill" class="count={10} object-fit absolute h-full w-full bg-cover bg-top bg-no-repeat object-cover blur" sizes="100vw"${serverRenderer.exports.ssrRenderAttr("srcset", vue_cjs_prod.unref(comic).thumbnail)} style="${serverRenderer.exports.ssrRenderStyle({ "position": "absolute", "inset": "0", "box-sizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" })}"${_scopeId}></span></figure></div><div class="z-10 mx-auto w-[85%] pt-32"${_scopeId}><section class="h-fit w-full"${_scopeId}><div class="flex h-full w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start"${_scopeId}><div class="mt-4 w-[50%] md:w-[250px] md:min-w-[250px]"${_scopeId}><figure class="aspect-w-3 aspect-h-5 relative rounded-2xl"${_scopeId}><span style="${serverRenderer.exports.ssrRenderStyle({ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" })}"${_scopeId}><img alt="manga-thumbnail" sizes="100vw"${serverRenderer.exports.ssrRenderAttr("srcset", vue_cjs_prod.unref(comic).thumbnail)}${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(comic).thumbnail)} decoding="async" data-nimg="fill" class="absolute inset-0 rounded-2xl object-cover object-center" style="${serverRenderer.exports.ssrRenderStyle({ "position": "absolute", "inset": "0px", "box-sizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" })}"${_scopeId}></span></figure></div><div class="flex h-full w-full flex-col justify-center p-4 text-white md:min-h-[430px] lg:ml-4"${_scopeId}><div class="w-full space-y-4 text-center md:ml-2 md:text-left lg:w-[80%]"${_scopeId}><h1 class="font-secondary font-bold leading-none text-[6.5vw] md:text-[5.5vw] lg:text-[3.5vw]"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(comic).title)}</h1><h2 class="text-[3vw] md:min-h-[28px] md:text-[2vw] lg:text-[1.2vw]"${_scopeId}></h2><h3 class="text-center text-[3vw] md:text-left md:text-[2vw] lg:text-[1.1vw]"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(comic).author)}</h3><h4 class="flex items-center justify-center gap-4 md:justify-start"${_scopeId}><span class="block h-3 w-3 rounded-full bg-green-500"${_scopeId}></span> ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(comic).status)}</h4></div><div class="mt-4 flex flex-col-reverse gap-2 md:flex-col"${_scopeId}><ul class="my-4 flex flex-wrap items-center gap-4"${_scopeId}><h3 class="px-2 py-2"${_scopeId}>Th\u1EC3 lo\u1EA1i:</h3><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(comic).genres, (genre) => {
              _push2(`<li class="rounded-xl bg-highlight px-4 py-2"${_scopeId}><a href="/browse?genres=mystery"${_scopeId}>${serverRenderer.exports.ssrInterpolate(genre.genreTitle)}</a></li>`);
            });
            _push2(`<!--]--></ul><div class="flex h-[150px] w-full flex-col items-center gap-6 md:flex-row md:items-start"${_scopeId}><a${_scopeId}><button class="pulse-effect-primary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-primary transition-all hover:scale-[110%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg> \u0110\u1ECDc ngay </button></a><a href="/manga/read/nhat-niem-vinh-hang-20674/63.5/872343"${_scopeId}><button class="pulse-effect-secondary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-white text-gray-800 transition-all hover:scale-[110%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-8 w-8 text-primary"${_scopeId}><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"${_scopeId}></path></svg> Chap m\u1EDBi nh\u1EA5t </button></a><button class="shine-effect absolute-center bg-hight-light h-[50px] w-[50px] rounded-xl transition-all hover:text-primary"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"${_scopeId}></path></svg></button></div></div></div></div></section><div class="flex-col-reverse flex"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(A), null, {
              default: vue_cjs_prod.withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(G), null, {
                    default: vue_cjs_prod.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="flex w-full flex-col items-center bg-cyan-300/0 text-white"${_scopeId3}> T\xF3m t\u1EAFt <svg class="${serverRenderer.exports.ssrRenderClass([open ? "rotate-180 transform" : "", "h-8 w-8"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"${_scopeId3}></path></svg></button>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("button", { class: "flex w-full flex-col items-center bg-cyan-300/0 text-white" }, [
                            vue_cjs_prod.createTextVNode(" T\xF3m t\u1EAFt "),
                            (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                              class: [open ? "rotate-180 transform" : "", "h-8 w-8"],
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "2",
                              stroke: "currentColor",
                              "aria-hidden": "true"
                            }, [
                              vue_cjs_prod.createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M19 9l-7 7-7-7"
                              })
                            ], 2))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(J), { class: "transform scale-100 opacity-100" }, {
                    default: vue_cjs_prod.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<p class="text-white"${_scopeId3}>${serverRenderer.exports.ssrInterpolate((_a = vue_cjs_prod.unref(comic)) == null ? void 0 : _a.review)}</p>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("p", { class: "text-white" }, vue_cjs_prod.toDisplayString((_b = vue_cjs_prod.unref(comic)) == null ? void 0 : _b.review), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(G), null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode("button", { class: "flex w-full flex-col items-center bg-cyan-300/0 text-white" }, [
                          vue_cjs_prod.createTextVNode(" T\xF3m t\u1EAFt "),
                          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                            class: [open ? "rotate-180 transform" : "", "h-8 w-8"],
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "2",
                            stroke: "currentColor",
                            "aria-hidden": "true"
                          }, [
                            vue_cjs_prod.createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M19 9l-7 7-7-7"
                            })
                          ], 2))
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(J), { class: "transform scale-100 opacity-100" }, {
                      default: vue_cjs_prod.withCtx(() => {
                        var _a;
                        return [
                          vue_cjs_prod.createVNode("p", { class: "text-white" }, vue_cjs_prod.toDisplayString((_a = vue_cjs_prod.unref(comic)) == null ? void 0 : _a.review), 1)
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyMangaChaplist, {
              chapterList: vue_cjs_prod.unref(comic).chapterList
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                class: "flex h-fit flex-col",
                style: { "height": "auto" }
              }, [
                vue_cjs_prod.createVNode("div", { class: "absolute inset-0 z-0 h-[35%] w-full lg:h-[45%]" }, [
                  vue_cjs_prod.createVNode("figure", { class: "deslide-cover" }, [
                    vue_cjs_prod.createVNode("span", { style: { "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" } }, [
                      vue_cjs_prod.createVNode("img", {
                        alt: "comic-banner",
                        src: vue_cjs_prod.unref(comic).thumbnail,
                        decoding: "async",
                        "data-nimg": "fill",
                        class: "count={10} object-fit absolute h-full w-full bg-cover bg-top bg-no-repeat object-cover blur",
                        sizes: "100vw",
                        srcset: vue_cjs_prod.unref(comic).thumbnail,
                        style: { "position": "absolute", "inset": "0", "box-sizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" }
                      }, null, 8, ["src", "srcset"])
                    ])
                  ])
                ]),
                vue_cjs_prod.createVNode("div", { class: "z-10 mx-auto w-[85%] pt-32" }, [
                  vue_cjs_prod.createVNode("section", { class: "h-fit w-full" }, [
                    vue_cjs_prod.createVNode("div", { class: "flex h-full w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start" }, [
                      vue_cjs_prod.createVNode("div", { class: "mt-4 w-[50%] md:w-[250px] md:min-w-[250px]" }, [
                        vue_cjs_prod.createVNode("figure", { class: "aspect-w-3 aspect-h-5 relative rounded-2xl" }, [
                          vue_cjs_prod.createVNode("span", { style: { "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" } }, [
                            vue_cjs_prod.createVNode("img", {
                              alt: "manga-thumbnail",
                              sizes: "100vw",
                              srcset: vue_cjs_prod.unref(comic).thumbnail,
                              src: vue_cjs_prod.unref(comic).thumbnail,
                              decoding: "async",
                              "data-nimg": "fill",
                              class: "absolute inset-0 rounded-2xl object-cover object-center",
                              style: { "position": "absolute", "inset": "0px", "box-sizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" }
                            }, null, 8, ["srcset", "src"])
                          ])
                        ])
                      ]),
                      vue_cjs_prod.createVNode("div", { class: "flex h-full w-full flex-col justify-center p-4 text-white md:min-h-[430px] lg:ml-4" }, [
                        vue_cjs_prod.createVNode("div", { class: "w-full space-y-4 text-center md:ml-2 md:text-left lg:w-[80%]" }, [
                          vue_cjs_prod.createVNode("h1", { class: "font-secondary font-bold leading-none text-[6.5vw] md:text-[5.5vw] lg:text-[3.5vw]" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(comic).title), 1),
                          vue_cjs_prod.createVNode("h2", { class: "text-[3vw] md:min-h-[28px] md:text-[2vw] lg:text-[1.2vw]" }),
                          vue_cjs_prod.createVNode("h3", { class: "text-center text-[3vw] md:text-left md:text-[2vw] lg:text-[1.1vw]" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(comic).author), 1),
                          vue_cjs_prod.createVNode("h4", { class: "flex items-center justify-center gap-4 md:justify-start" }, [
                            vue_cjs_prod.createVNode("span", { class: "block h-3 w-3 rounded-full bg-green-500" }),
                            vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(comic).status), 1)
                          ])
                        ]),
                        vue_cjs_prod.createVNode("div", { class: "mt-4 flex flex-col-reverse gap-2 md:flex-col" }, [
                          vue_cjs_prod.createVNode("ul", { class: "my-4 flex flex-wrap items-center gap-4" }, [
                            vue_cjs_prod.createVNode("h3", { class: "px-2 py-2" }, "Th\u1EC3 lo\u1EA1i:"),
                            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(comic).genres, (genre) => {
                              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", { class: "rounded-xl bg-highlight px-4 py-2" }, [
                                vue_cjs_prod.createVNode("a", { href: "/browse?genres=mystery" }, vue_cjs_prod.toDisplayString(genre.genreTitle), 1)
                              ]);
                            }), 256))
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "flex h-[150px] w-full flex-col items-center gap-6 md:flex-row md:items-start" }, [
                            vue_cjs_prod.createVNode("a", {
                              onClick: ($event) => navigateToManga(slug.value)
                            }, [
                              vue_cjs_prod.createVNode("button", { class: "pulse-effect-primary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-primary transition-all hover:scale-[110%]" }, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "2",
                                  stroke: "currentColor",
                                  "aria-hidden": "true",
                                  class: "h-8 w-8"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                  })
                                ])),
                                vue_cjs_prod.createTextVNode(" \u0110\u1ECDc ngay ")
                              ])
                            ], 8, ["onClick"]),
                            vue_cjs_prod.createVNode("a", { href: "/manga/read/nhat-niem-vinh-hang-20674/63.5/872343" }, [
                              vue_cjs_prod.createVNode("button", { class: "pulse-effect-secondary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-white text-gray-800 transition-all hover:scale-[110%]" }, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true",
                                  class: "h-8 w-8 text-primary"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                                    "clip-rule": "evenodd"
                                  })
                                ])),
                                vue_cjs_prod.createTextVNode(" Chap m\u1EDBi nh\u1EA5t ")
                              ])
                            ]),
                            vue_cjs_prod.createVNode("button", { class: "shine-effect absolute-center bg-hight-light h-[50px] w-[50px] rounded-xl transition-all hover:text-primary" }, [
                              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "2",
                                stroke: "currentColor",
                                "aria-hidden": "true",
                                class: "h-8 w-8"
                              }, [
                                vue_cjs_prod.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                })
                              ]))
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  vue_cjs_prod.createVNode("div", { class: "flex-col-reverse flex" }, [
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(A), null, {
                      default: vue_cjs_prod.withCtx(({ open }) => [
                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(G), null, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("button", { class: "flex w-full flex-col items-center bg-cyan-300/0 text-white" }, [
                              vue_cjs_prod.createTextVNode(" T\xF3m t\u1EAFt "),
                              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                class: [open ? "rotate-180 transform" : "", "h-8 w-8"],
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "2",
                                stroke: "currentColor",
                                "aria-hidden": "true"
                              }, [
                                vue_cjs_prod.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M19 9l-7 7-7-7"
                                })
                              ], 2))
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(J), { class: "transform scale-100 opacity-100" }, {
                          default: vue_cjs_prod.withCtx(() => {
                            var _a;
                            return [
                              vue_cjs_prod.createVNode("p", { class: "text-white" }, vue_cjs_prod.toDisplayString((_a = vue_cjs_prod.unref(comic)) == null ? void 0 : _a.review), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  vue_cjs_prod.createVNode(_component_LazyMangaChaplist, {
                    chapterList: vue_cjs_prod.unref(comic).chapterList
                  }, null, 8, ["chapterList"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manga/index.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_0_lazy$5 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return TheRead;
}));
const _sfc_main$c = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_LazyTheRead = __nuxt_component_0_lazy$5;
  _push(serverRenderer.exports.ssrRenderComponent(_component_LazyTheRead, _attrs, null, _parent));
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manga/read/[slug]/[chapter]/[id].vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$1]]);
const _id_$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _id_
}, Symbol.toStringTag, { value: "Module" }));
const BMP = {
  validate(buffer) {
    return buffer.toString("ascii", 0, 2) === "BM";
  },
  calculate(buffer) {
    return {
      height: Math.abs(buffer.readInt32LE(22)),
      width: buffer.readUInt32LE(18)
    };
  }
};
const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(buffer, offset) {
  const value = buffer.readUInt8(offset);
  return value === 0 ? 256 : value;
}
function getImageSize$1(buffer, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(buffer, offset + 1),
    width: getSizeFromOffset(buffer, offset)
  };
}
const ICO = {
  validate(buffer) {
    if (buffer.readUInt16LE(0) !== 0) {
      return false;
    }
    return buffer.readUInt16LE(2) === TYPE_ICON;
  },
  calculate(buffer) {
    const nbImages = buffer.readUInt16LE(4);
    const imageSize = getImageSize$1(buffer, 0);
    if (nbImages === 1) {
      return imageSize;
    }
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(buffer, imageIndex));
    }
    const result = {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
    return result;
  }
};
const TYPE_CURSOR = 2;
const CUR = {
  validate(buffer) {
    if (buffer.readUInt16LE(0) !== 0) {
      return false;
    }
    return buffer.readUInt16LE(2) === TYPE_CURSOR;
  },
  calculate(buffer) {
    return ICO.calculate(buffer);
  }
};
const DDS = {
  validate(buffer) {
    return buffer.readUInt32LE(0) === 542327876;
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32LE(12),
      width: buffer.readUInt32LE(16)
    };
  }
};
const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate(buffer) {
    const signature = buffer.toString("ascii", 0, 6);
    return gifRegexp.test(signature);
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt16LE(8),
      width: buffer.readUInt16LE(6)
    };
  }
};
const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  icp6: 64,
  ic12: 32,
  it32: 128,
  t8mk: 128,
  ic07: 128,
  ic08: 256,
  ic13: 256,
  ic09: 512,
  ic14: 512,
  ic10: 1024
};
function readImageHeader(buffer, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    buffer.toString("ascii", imageOffset, imageLengthOffset),
    buffer.readUInt32BE(imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate(buffer) {
    return buffer.toString("ascii", 0, 4) === "icns";
  },
  calculate(buffer) {
    const bufferLength = buffer.length;
    const fileLength = buffer.readUInt32BE(FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(buffer, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) {
      return imageSize;
    }
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < bufferLength) {
      imageHeader = readImageHeader(buffer, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};
const J2C = {
  validate(buffer) {
    return buffer.toString("hex", 0, 4) === "ff4fff51";
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32BE(12),
      width: buffer.readUInt32BE(8)
    };
  }
};
const BoxTypes = {
  ftyp: "66747970",
  ihdr: "69686472",
  jp2h: "6a703268",
  jp__: "6a502020",
  rreq: "72726571",
  xml_: "786d6c20"
};
const calculateRREQLength = (box) => {
  const unit = box.readUInt8(0);
  let offset = 1 + 2 * unit;
  const numStdFlags = box.readUInt16BE(offset);
  const flagsLength = numStdFlags * (2 + unit);
  offset = offset + 2 + flagsLength;
  const numVendorFeatures = box.readUInt16BE(offset);
  const featuresLength = numVendorFeatures * (16 + unit);
  return offset + 2 + featuresLength;
};
const parseIHDR = (box) => {
  return {
    height: box.readUInt32BE(4),
    width: box.readUInt32BE(8)
  };
};
const JP2 = {
  validate(buffer) {
    const signature = buffer.toString("hex", 4, 8);
    const signatureLength = buffer.readUInt32BE(0);
    if (signature !== BoxTypes.jp__ || signatureLength < 1) {
      return false;
    }
    const ftypeBoxStart = signatureLength + 4;
    const ftypBoxLength = buffer.readUInt32BE(signatureLength);
    const ftypBox = buffer.slice(ftypeBoxStart, ftypeBoxStart + ftypBoxLength);
    return ftypBox.toString("hex", 0, 4) === BoxTypes.ftyp;
  },
  calculate(buffer) {
    const signatureLength = buffer.readUInt32BE(0);
    const ftypBoxLength = buffer.readUInt16BE(signatureLength + 2);
    let offset = signatureLength + 4 + ftypBoxLength;
    const nextBoxType = buffer.toString("hex", offset, offset + 4);
    switch (nextBoxType) {
      case BoxTypes.rreq:
        const MAGIC = 4;
        offset = offset + 4 + MAGIC + calculateRREQLength(buffer.slice(offset + 4));
        return parseIHDR(buffer.slice(offset + 8, offset + 24));
      case BoxTypes.jp2h:
        return parseIHDR(buffer.slice(offset + 8, offset + 24));
      default:
        throw new TypeError("Unsupported header found: " + buffer.toString("ascii", offset, offset + 4));
    }
  }
};
function readUInt(buffer, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return buffer[methodName].call(buffer, offset);
}
const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(buffer) {
  return buffer.toString("hex", 2, 6) === EXIF_MARKER;
}
function extractSize(buffer, index2) {
  return {
    height: buffer.readUInt16BE(index2),
    width: buffer.readUInt16BE(index2 + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(buffer, index2) {
  const exifBlock = buffer.slice(APP1_DATA_SIZE_BYTES, index2);
  const byteAlign = exifBlock.toString("hex", EXIF_HEADER_BYTES, EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES);
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateBuffer(buffer, index2) {
  if (index2 > buffer.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
  if (buffer[index2] !== 255) {
    throw new TypeError("Invalid JPG, marker table corrupted");
  }
}
const JPG = {
  validate(buffer) {
    const SOIMarker = buffer.toString("hex", 0, 2);
    return SOIMarker === "ffd8";
  },
  calculate(buffer) {
    buffer = buffer.slice(4);
    let orientation;
    let next;
    while (buffer.length) {
      const i = buffer.readUInt16BE(0);
      if (isEXIF(buffer)) {
        orientation = validateExifBlock(buffer, i);
      }
      validateBuffer(buffer, i);
      next = buffer[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(buffer, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      buffer = buffer.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};
const SIGNATURE = "KTX 11";
const KTX = {
  validate(buffer) {
    return SIGNATURE === buffer.toString("ascii", 1, 7);
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32LE(40),
      width: buffer.readUInt32LE(36)
    };
  }
};
const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(buffer) {
    if (pngSignature === buffer.toString("ascii", 1, 8)) {
      let chunkName = buffer.toString("ascii", 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = buffer.toString("ascii", 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(buffer) {
    if (buffer.toString("ascii", 12, 16) === pngFriedChunkName) {
      return {
        height: buffer.readUInt32BE(36),
        width: buffer.readUInt32BE(32)
      };
    }
    return {
      height: buffer.readUInt32BE(20),
      width: buffer.readUInt32BE(16)
    };
  }
};
const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const Signatures = Object.keys(PNMTypes);
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate(buffer) {
    const signature = buffer.toString("ascii", 0, 2);
    return Signatures.includes(signature);
  },
  calculate(buffer) {
    const signature = buffer.toString("ascii", 0, 2);
    const type = PNMTypes[signature];
    const lines = buffer.toString("ascii", 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};
const PSD = {
  validate(buffer) {
    return buffer.toString("ascii", 0, 4) === "8BPS";
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32BE(14),
      width: buffer.readUInt32BE(18)
    };
  }
};
const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72
};
function parseLength(len) {
  const m = /([0-9.]+)([a-z]*)/.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(parseFloat(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  validate(buffer) {
    const str = String(buffer);
    return svgReg.test(str);
  },
  calculate(buffer) {
    const root = buffer.toString("utf8").match(extractorRegExps.root);
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};
function calculateExtended(buffer) {
  return {
    height: 1 + buffer.readUIntLE(7, 3),
    width: 1 + buffer.readUIntLE(4, 3)
  };
}
function calculateLossless(buffer) {
  return {
    height: 1 + ((buffer[4] & 15) << 10 | buffer[3] << 2 | (buffer[2] & 192) >> 6),
    width: 1 + ((buffer[2] & 63) << 8 | buffer[1])
  };
}
function calculateLossy(buffer) {
  return {
    height: buffer.readInt16LE(8) & 16383,
    width: buffer.readInt16LE(6) & 16383
  };
}
const WEBP = {
  validate(buffer) {
    const riffHeader = buffer.toString("ascii", 0, 4) === "RIFF";
    const webpHeader = buffer.toString("ascii", 8, 12) === "WEBP";
    const vp8Header = buffer.toString("ascii", 12, 15) === "VP8";
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(buffer) {
    const chunkHeader = buffer.toString("ascii", 12, 16);
    buffer = buffer.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = buffer[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(buffer);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && buffer[0] !== 47) {
      return calculateLossy(buffer);
    }
    const signature = buffer.toString("hex", 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(buffer);
    }
    throw new TypeError("Invalid WebP");
  }
};
const typeHandlers = {
  bmp: BMP,
  cur: CUR,
  dds: DDS,
  gif: GIF,
  icns: ICNS,
  ico: ICO,
  j2c: J2C,
  jp2: JP2,
  jpg: JPG,
  ktx: KTX,
  png: PNG,
  pnm: PNM,
  psd: PSD,
  svg: SVG,
  webp: WEBP
};
const getMimeType = (type) => {
  if (type === "svg") {
    return "image/svg+xml";
  }
  return `image/${type}`;
};
const keys = Object.keys(typeHandlers);
const firstBytes = {
  56: "psd",
  66: "bmp",
  68: "dds",
  71: "gif",
  73: "tiff",
  77: "tiff",
  82: "webp",
  105: "icns",
  137: "png",
  255: "jpg"
};
function detector(buffer) {
  const byte = buffer[0];
  if (byte in firstBytes) {
    const type = firstBytes[byte];
    if (typeHandlers[type].validate(buffer)) {
      return type;
    }
  }
  const finder = (key) => typeHandlers[key].validate(buffer);
  return keys.find(finder);
}
function lookup(buffer, filepath) {
  const type = detector(buffer);
  if (type && type in typeHandlers) {
    const size = typeHandlers[type].calculate(buffer, filepath);
    if (size !== void 0) {
      size.type = type;
      size.mimeType = getMimeType(type);
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type + " (file: " + filepath + ")");
}
function imageMeta(input) {
  if (Buffer.isBuffer(input)) {
    return lookup(input);
  }
  throw new Error("Input should be buffer!");
}
const types = Object.keys(typeHandlers);
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  imageMeta,
  types
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "TheSidebar",
  __ssrInlineRender: true,
  props: {
    close: {
      type: Function
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: "animate__fadeIn animate__animated animate__faster fixed inset-0 z-[100] bg-black/30",
        "aria-hidden": "true"
      }, _attrs))}><aside class="slideLeftReturn magictime absolute-center fixed inset-0 z-[999] w-[250px] min-w-[230px] bg-secondary p-4 md:w-[40%]"><div class="flex h-full w-full flex-col"><div class="absolute-center mt-6 flex h-fit w-full items-center justify-between"><button class="absolute-center bg-hight-light ml-4 rounded-full p-4 text-white md:p-5" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8 md:h-10 md:w-10"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg></button><div class="absolute-center relative flex-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve" class="md:width-[100px] absolute" width="50" height="50"><path d="M133.818 116.364h34.909v116.364h-34.909z" style="${serverRenderer.exports.ssrRenderStyle({ "fill": "rgb(136, 136, 143)" })}"></path><path d="M343.273 116.364h34.909v116.364h-34.909z" style="${serverRenderer.exports.ssrRenderStyle({ "fill": "rgb(121, 119, 129)" })}"></path><path d="M512 23.273C473.659 36.83 377.594 69.818 256 69.818S38.341 36.83 0 23.273l15.914 93.091C54.255 129.921 134.407 139.636 256 139.636s201.745-9.715 240.086-23.273L512 23.273z" style="${serverRenderer.exports.ssrRenderStyle({ "fill": "rgb(224, 39, 83)" })}"></path><path d="M256 69.818v69.818c121.594 0 201.745-9.715 240.086-23.273L512 23.273C473.659 36.83 377.594 69.818 256 69.818z" style="${serverRenderer.exports.ssrRenderStyle({ "fill": "rgb(197, 20, 44)" })}"></path><path d="M116.364 267.636h69.818v221.091h-69.818z" style="${serverRenderer.exports.ssrRenderStyle({ "fill": "rgb(224, 113, 136)" })}"></path><path d="M325.818 267.636h69.818v221.091h-69.818z" style="${serverRenderer.exports.ssrRenderStyle({ "fill": "rgb(224, 39, 83)" })}"></path><path d="m494.547 219.093-11.639-32.911C454.173 196.343 391.48 208.456 256 208.456S57.827 196.343 29.092 186.182l-11.639 32.911c10.358 3.662 22.529 6.91 36.451 9.748v50.432h404.191v-50.432c13.922-2.838 26.094-6.085 36.452-9.748z" style="${serverRenderer.exports.ssrRenderStyle({ "fill": "rgb(224, 39, 83)" })}"></path><path d="M482.908 186.182C454.173 196.343 391.48 208.456 256 208.456v70.817h202.096v-50.432c13.922-2.838 26.093-6.086 36.451-9.748l-11.639-32.911z" style="${serverRenderer.exports.ssrRenderStyle({ "fill": "rgb(197, 20, 44)" })}"></path><path d="M221.091 128h69.818v93.089h-69.818z" style="${serverRenderer.exports.ssrRenderStyle({ "fill": "rgb(136, 136, 143)" })}"></path><path d="M256 128h34.909v93.089H256z" style="${serverRenderer.exports.ssrRenderStyle({ "fill": "rgb(121, 119, 129)" })}"></path></svg><figure class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><svg viewBox="0 0 494.011 82.093" xmlns="http://www.w3.org/2000/svg" class="left-1/2 h-[40px] w-[130px] md:h-[50px] md:w-[200px]"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#ffffff" stroke-width="0.25mm" fill="#ffffff"><path d="M 14.142 61.944 C 14.12 61.935 14.095 61.926 14.064 61.922 A 0.278 0.278 0 0 0 14.026 61.919 A 0.037 0.037 0 0 1 14.024 61.919 C 13.976 61.917 13.928 61.82 13.928 61.626 C 13.928 61.431 13.928 61.187 13.977 60.894 A 4.229 4.229 0 0 0 13.99 60.813 C 14.046 60.427 14.036 60.108 13.96 59.873 A 0.781 0.781 0 0 0 13.831 59.624 C 13.66 59.411 13.489 59.421 13.253 59.656 A 1.965 1.965 0 0 0 13.147 59.771 A 1.155 1.155 0 0 1 13.094 59.855 C 12.943 60.073 12.821 60.033 12.702 59.707 A 2.365 2.365 0 0 1 12.659 59.576 C 12.512 59.087 12.463 58.55 12.561 58.013 A 3.462 3.462 0 0 1 12.588 57.881 C 12.692 57.411 12.879 57.061 13.147 56.792 C 13.44 56.548 13.538 56.353 13.538 56.255 A 0.237 0.237 0 0 0 13.535 56.224 C 13.521 56.114 13.432 55.98 13.268 55.821 A 3.003 3.003 0 0 0 13.098 55.669 A 6.57 6.57 0 0 1 12.916 55.438 C 12.469 54.843 12.431 54.526 12.826 54.461 A 1.087 1.087 0 0 1 13 54.449 A 0.45 0.45 0 0 0 13.01 54.449 C 13.231 54.444 13.368 54.276 13.311 53.907 A 1.458 1.458 0 0 0 13.293 53.814 C 13.245 53.667 13.196 53.521 13.147 53.423 A 0.926 0.926 0 0 1 13.13 53.415 C 13.052 53.373 13.005 53.336 12.928 53.363 A 0.228 0.228 0 0 0 12.903 53.374 A 0.442 0.442 0 0 1 12.824 53.424 C 12.494 53.583 12.319 52.985 12.247 51.655 A 24.884 24.884 0 0 1 12.219 50.933 A 272.374 272.374 0 0 1 12.219 50.573 C 12.22 50.063 12.224 49.722 12.245 49.538 A 0.628 0.628 0 0 1 12.268 49.419 A 0.267 0.267 0 0 1 12.277 49.395 C 12.329 49.279 12.426 49.339 12.61 49.615 C 12.683 49.712 12.744 49.786 12.805 49.847 A 1.233 1.233 0 0 0 13 50.005 A 0.387 0.387 0 0 0 13.02 50.024 C 13.111 50.103 13.199 50.1 13.245 50.054 A 0.829 0.829 0 0 0 13.343 49.86 C 13.375 49.766 13.391 49.658 13.391 49.517 A 6.039 6.039 0 0 0 13.359 49.363 A 2.061 2.061 0 0 0 13.196 48.882 A 1.019 1.019 0 0 0 13.185 48.862 C 13.102 48.705 13.018 48.652 12.902 48.674 A 0.375 0.375 0 0 0 12.854 48.687 A 0.26 0.26 0 0 1 12.839 48.694 C 12.649 48.774 12.461 48.574 12.366 48.003 C 12.289 47.584 12.273 47.045 12.316 46.387 A 14.691 14.691 0 0 1 12.366 45.806 C 12.448 45.311 12.461 44.921 12.434 44.664 A 1.432 1.432 0 0 0 12.415 44.537 A 0.782 0.782 0 0 0 12.412 44.476 C 12.397 44.276 12.3 44.195 12.122 44.195 A 1.01 1.01 0 0 0 11.675 44.305 A 1.464 1.464 0 0 0 11.292 44.585 A 1.978 1.978 0 0 0 10.972 45.097 A 1.773 1.773 0 0 0 10.852 45.562 C 10.852 45.789 10.823 45.927 10.787 45.979 A 0.043 0.043 0 0 1 10.754 46.001 A 0.05 0.05 0 0 1 10.723 45.982 C 10.668 45.925 10.581 45.744 10.461 45.464 A 3.813 3.813 0 0 0 10.372 45.286 C 10.068 44.719 9.867 44.785 9.797 45.456 A 4.654 4.654 0 0 0 9.778 45.708 A 7.651 7.651 0 0 0 9.753 46.031 C 9.702 46.931 9.728 48.501 9.812 50.74 A 298.464 298.464 0 0 0 9.875 52.3 L 9.875 52.788 A 153.286 153.286 0 0 0 9.934 53.786 C 9.951 54.063 9.968 54.322 9.985 54.56 A 42.824 42.824 0 0 0 10.022 55.035 C 10.022 55.483 10.051 55.846 10.064 56.145 A 5.785 5.785 0 0 1 10.071 56.402 A 3.674 3.674 0 0 0 10.073 56.518 C 10.079 56.721 10.101 56.888 10.112 57.029 A 1.91 1.91 0 0 1 10.12 57.183 C 10.12 57.302 10.152 57.421 10.164 57.514 A 0.47 0.47 0 0 1 10.168 57.574 A 0.336 0.336 0 0 0 10.18 57.659 C 10.19 57.698 10.207 57.735 10.226 57.766 A 0.29 0.29 0 0 0 10.266 57.818 L 10.266 57.867 A 0.734 0.734 0 0 1 10.277 57.902 C 10.31 58.02 10.341 58.224 10.355 58.485 A 5.6 5.6 0 0 1 10.364 58.794 C 10.413 59.283 10.461 59.771 10.461 60.357 A 23.974 23.974 0 0 1 10.467 60.445 C 10.549 61.747 10.469 62.233 10.264 61.906 A 1.02 1.02 0 0 1 10.217 61.822 C 10.12 61.627 10.071 61.287 9.926 60.705 A 16.055 16.055 0 0 0 9.924 60.699 C 9.827 60.162 9.729 59.527 9.68 58.843 A 19.358 19.358 0 0 1 9.646 58.591 C 9.614 58.344 9.589 58.109 9.57 57.885 A 10.413 10.413 0 0 1 9.534 57.037 A 10.003 10.003 0 0 0 9.522 57.012 C 9.477 56.923 9.428 56.833 9.338 56.744 A 0.145 0.145 0 0 0 9.271 56.679 C 9.22 56.653 9.153 56.648 9.094 56.646 A 2.212 2.212 0 0 0 9.045 56.646 C 8.645 56.646 8.609 56.565 8.902 56.403 A 2.516 2.516 0 0 1 8.997 56.353 A 1.663 1.663 0 0 0 9.137 56.2 A 0.629 0.629 0 0 0 9.241 56.011 A 1.439 1.439 0 0 0 9.274 55.894 C 9.298 55.795 9.319 55.669 9.33 55.517 A 3.275 3.275 0 0 0 9.338 55.279 C 9.298 54.994 9.291 54.641 9.233 54.164 A 9.381 9.381 0 0 0 9.192 53.863 A 332.436 332.436 0 0 1 9.118 52.883 A 139.354 139.354 0 0 1 9.045 51.861 L 9.045 50.152 A 8.487 8.487 0 0 0 9.07 49.785 C 9.092 49.332 9.084 48.82 9.045 48.247 A 15.874 15.874 0 0 0 9.024 47.969 C 8.972 47.351 8.893 46.798 8.85 46.246 C 8.775 45.797 8.701 45.491 8.626 45.307 A 0.769 0.769 0 0 0 8.557 45.171 C 8.514 45.129 8.397 45.123 8.205 45.155 A 2.749 2.749 0 0 0 8.118 45.171 A 12.144 12.144 0 0 0 7.6 45.265 A 5.928 5.928 0 0 0 7.19 45.367 C 6.799 45.464 6.506 45.513 6.213 45.513 A 1.075 1.075 0 0 1 6.191 45.517 C 5.997 45.552 5.837 45.525 5.761 45.488 A 0.135 0.135 0 0 1 5.725 45.464 A 0.971 0.971 0 0 0 5.65 45.394 C 5.632 45.38 5.613 45.366 5.591 45.352 A 0.709 0.709 0 0 0 5.53 45.318 A 0.117 0.117 0 0 0 5.508 45.301 C 5.456 45.269 5.377 45.269 5.334 45.269 A 2.411 2.411 0 0 1 4.892 45.179 C 4.098 44.94 3.269 44.28 2.405 43.169 A 14.706 14.706 0 0 1 1.239 41.235 A 16.842 16.842 0 0 1 0.11 38.335 C -0.037 37.945 -0.037 37.603 0.11 37.408 A 0.361 0.361 0 0 1 0.161 37.321 C 0.281 37.166 0.551 37.032 0.955 36.921 A 6.139 6.139 0 0 1 1.379 36.822 C 1.892 36.675 2.679 36.529 3.741 36.341 A 8188.696 8188.696 0 0 1 4.895 36.138 C 5.872 35.943 6.75 35.796 7.434 35.601 C 8.029 35.442 8.399 35.316 8.569 35.248 A 1.221 1.221 0 0 0 8.655 35.21 A 1.084 1.084 0 0 0 8.705 35.037 C 8.754 34.804 8.785 34.438 8.796 33.938 A 21.305 21.305 0 0 0 8.801 33.453 A 34.979 34.979 0 0 0 8.792 32.687 A 99.677 99.677 0 0 0 8.704 30.376 A 75.883 75.883 0 0 0 8.698 30.31 C 8.602 29.268 8.505 28.459 8.362 27.837 C 8.265 27.546 8.168 26.966 8.023 26.145 A 206.795 206.795 0 0 0 8.02 26.128 C 7.874 25.249 7.825 24.371 7.776 23.492 A 2.027 2.027 0 0 0 7.772 23.376 C 7.76 23.155 7.712 22.888 7.629 22.515 A 11.933 11.933 0 0 1 7.434 21.85 C 7.404 21.737 7.373 21.622 7.341 21.506 A 15.73 15.73 0 0 0 7.239 21.148 C 7.093 20.712 6.996 20.324 6.899 19.984 A 13.774 13.774 0 0 0 6.897 19.976 A 8.382 8.382 0 0 0 6.835 19.744 C 6.762 19.483 6.702 19.299 6.702 19.146 C 6.702 19.057 6.742 19.009 6.749 19.001 A 0.04 0.04 0 0 1 6.75 18.999 A 0.094 0.094 0 0 1 6.785 19.007 C 6.824 19.022 6.87 19.059 6.944 19.096 A 0.852 0.852 0 0 0 6.946 19.097 L 7.141 19.292 C 7.239 19.39 7.288 19.439 7.385 19.488 C 7.434 19.585 7.483 19.585 7.532 19.585 C 7.532 19.585 7.581 19.537 7.581 19.488 A 11.431 11.431 0 0 0 7.549 19.224 C 7.509 18.927 7.462 18.713 7.385 18.56 A 3.553 3.553 0 0 0 7.357 18.455 A 1.288 1.288 0 0 0 7.19 18.072 A 1.056 1.056 0 0 1 7.167 18.023 C 7.15 17.984 7.133 17.941 7.117 17.895 A 8.585 8.585 0 0 1 7.043 17.681 C 7.043 17.535 6.995 17.339 7.043 17.095 C 7.043 16.9 7.031 16.717 7.007 16.546 A 2.721 2.721 0 0 0 6.897 16.07 L 6.311 14.947 L 7.239 14.556 A 13.902 13.902 0 0 0 7.492 14.48 C 7.571 14.456 7.645 14.434 7.715 14.415 A 1.381 1.381 0 0 1 8.069 14.361 A 1.073 1.073 0 0 1 8.263 14.38 A 2.913 2.913 0 0 1 8.801 14.556 A 10.38 10.38 0 0 0 8.984 14.646 A 2.196 2.196 0 0 0 9.387 14.8 C 9.631 14.8 9.778 14.8 9.924 14.751 A 0.801 0.801 0 0 1 10.019 14.726 C 10.09 14.712 10.162 14.706 10.242 14.704 A 6.187 6.187 0 0 1 10.413 14.703 A 7.661 7.661 0 0 0 10.53 14.74 C 10.571 14.753 10.614 14.767 10.657 14.782 A 1.122 1.122 0 0 1 10.901 14.898 C 11.011 14.934 11.176 14.999 11.395 15.07 A 7.295 7.295 0 0 0 11.633 15.142 A 2.843 2.843 0 0 0 11.861 15.207 A 8.076 8.076 0 0 0 12.61 15.337 C 12.903 15.402 13.152 15.424 13.402 15.431 A 13.106 13.106 0 0 0 13.782 15.435 A 3.161 3.161 0 0 1 13.823 15.431 C 14 15.413 14.169 15.412 14.33 15.427 A 2.05 2.05 0 0 1 14.954 15.581 A 0.603 0.603 0 0 1 15.203 15.75 C 15.381 15.942 15.52 16.276 15.588 16.753 A 1.724 1.724 0 0 1 15.596 16.788 C 15.679 17.202 15.724 18.137 15.698 19.527 A 50.324 50.324 0 0 1 15.686 20.025 A 95.915 95.915 0 0 1 15.686 20.201 C 15.683 21.913 15.634 23.809 15.54 25.933 A 941.918 941.918 0 0 1 15.536 26.092 C 15.501 27.675 15.465 29.077 15.43 30.279 A 304.325 304.325 0 0 1 15.393 31.451 A 940.617 940.617 0 0 0 15.393 31.989 C 15.394 32.984 15.398 33.573 15.426 33.774 A 0.253 0.253 0 0 0 15.442 33.843 A 0.22 0.22 0 0 0 15.498 33.882 C 15.604 33.935 15.803 33.969 16.071 33.983 A 5.902 5.902 0 0 0 16.37 33.99 A 8.046 8.046 0 0 0 17.126 33.953 A 7.527 7.527 0 0 0 17.883 33.843 C 18.228 33.774 18.475 33.705 18.642 33.619 A 0.669 0.669 0 0 0 18.811 33.501 A 1.253 1.253 0 0 1 18.821 33.481 C 18.865 33.398 18.956 33.239 19.058 33.004 A 4.98 4.98 0 0 0 19.153 32.769 C 19.244 32.525 19.355 32.262 19.461 31.979 A 8.285 8.285 0 0 0 19.641 31.451 A 17.517 17.517 0 0 0 19.712 31.27 C 19.781 31.091 19.846 30.918 19.91 30.749 A 12.614 12.614 0 0 1 20.178 30.083 C 20.29 29.784 20.403 29.542 20.493 29.38 A 1.846 1.846 0 0 1 20.569 29.253 C 20.618 29.107 20.764 28.863 20.959 28.472 A 70.864 70.864 0 0 0 21.179 28.03 A 22.106 22.106 0 0 0 21.545 27.251 A 34.359 34.359 0 0 1 22.636 25.185 A 43.528 43.528 0 0 1 24.231 22.613 C 25.305 21.05 26.282 19.781 27.209 18.853 A 0.893 0.893 0 0 0 27.22 18.842 C 27.293 18.767 27.391 18.64 27.516 18.463 A 10.87 10.87 0 0 0 27.649 18.267 A 4.323 4.323 0 0 0 27.901 17.919 A 3.54 3.54 0 0 0 28.186 17.388 A 15.668 15.668 0 0 1 28.331 17.174 C 28.417 17.051 28.509 16.92 28.609 16.782 A 31.132 31.132 0 0 1 28.918 16.363 C 29.163 16.021 29.456 15.679 29.7 15.386 C 32.488 12.504 34.087 11.085 34.497 11.085 A 0.135 0.135 0 0 1 34.534 11.089 L 34.485 11.089 A 0.559 0.559 0 0 1 34.491 11.091 C 34.783 11.193 35.266 11.626 36.034 12.25 A 46.621 46.621 0 0 0 36.047 12.261 A 43.577 43.577 0 0 1 38.196 14.361 A 39.14 39.14 0 0 1 38.31 14.488 C 38.686 14.91 38.941 15.221 39.075 15.533 A 1.426 1.426 0 0 1 39.148 15.706 C 39.235 15.958 39.251 16.242 39.172 16.558 A 1.408 1.408 0 0 1 39.124 16.928 A 1.526 1.526 0 0 1 38.831 17.486 A 2.037 2.037 0 0 1 38.687 17.616 C 38.442 17.818 38.092 18.026 37.61 18.267 C 37.199 18.491 36.587 18.945 35.775 19.627 A 46.598 46.598 0 0 0 34.973 20.318 A 61.235 61.235 0 0 0 33.901 21.247 A 92.666 92.666 0 0 0 31.116 23.833 C 30.243 24.706 29.486 25.487 28.859 26.175 A 27.118 27.118 0 0 0 28.088 27.056 A 39.343 39.343 0 0 1 27.679 27.536 C 26.892 28.443 26.394 28.912 26.184 28.912 C 26.105 28.912 26.025 28.976 25.92 29.105 A 3.002 3.002 0 0 0 25.842 29.204 A 1.997 1.997 0 0 0 25.821 29.226 C 25.753 29.296 25.676 29.386 25.598 29.485 A 3.633 3.633 0 0 0 25.354 29.839 A 3.402 3.402 0 0 1 25.324 29.883 C 25.139 30.152 24.953 30.337 24.768 30.523 C 24.661 30.63 24.569 30.693 24.483 30.728 A 0.521 0.521 0 0 1 24.28 30.767 A 0.159 0.159 0 0 0 24.245 30.772 C 24.132 30.798 23.906 30.932 23.602 31.105 A 53.335 53.335 0 0 1 23.596 31.109 A 4.867 4.867 0 0 0 23.019 31.493 A 4.793 4.793 0 0 0 22.571 31.89 C 22.229 32.183 21.887 32.427 21.594 32.671 A 32.546 32.546 0 0 1 21.459 32.761 C 21.317 32.855 21.218 32.916 21.144 32.945 A 0.243 0.243 0 0 1 21.057 32.964 A 0.189 0.189 0 0 1 21.036 32.963 C 20.923 32.95 20.914 32.83 20.947 32.602 A 4.026 4.026 0 0 1 20.959 32.525 C 21.024 32.333 21.109 32.098 21.229 31.836 A 6.181 6.181 0 0 1 21.448 31.402 A 17.658 17.658 0 0 1 21.796 30.865 A 13.683 13.683 0 0 1 22.327 30.132 A 28.612 28.612 0 0 1 22.357 30.089 C 22.595 29.758 22.872 29.384 23.059 29.009 C 23.303 28.57 23.45 28.228 23.547 27.984 C 23.596 27.691 23.694 27.496 23.792 27.3 A 1.593 1.593 0 0 1 23.834 27.24 C 23.916 27.128 23.994 27.056 24.036 27.056 A 0.11 0.11 0 0 0 24.066 27.051 C 24.107 27.039 24.164 27.004 24.225 26.933 A 0.744 0.744 0 0 0 24.28 26.861 C 24.377 26.763 24.426 26.617 24.475 26.421 A 3.256 3.256 0 0 0 24.487 26.386 C 24.611 25.999 24.572 25.854 24.37 25.878 A 0.505 0.505 0 0 0 24.329 25.884 A 0.528 0.528 0 0 0 24.234 25.947 C 24.055 26.092 23.825 26.409 23.457 26.899 A 93.465 93.465 0 0 1 23.45 26.91 A 22.443 22.443 0 0 0 22.327 28.716 A 11.646 11.646 0 0 0 22.125 29.056 C 21.934 29.391 21.81 29.652 21.743 29.83 A 1.422 1.422 0 0 0 21.692 29.986 A 0.633 0.633 0 0 1 21.692 30.004 C 21.688 30.117 21.655 30.203 21.59 30.335 A 10.557 10.557 0 0 1 21.545 30.425 A 1.633 1.633 0 0 1 21.53 30.449 C 21.437 30.582 21.342 30.675 21.204 30.767 A 1.922 1.922 0 0 0 21.079 30.904 A 3.585 3.585 0 0 0 20.862 31.206 A 14.183 14.183 0 0 0 20.827 31.259 C 20.766 31.351 20.71 31.44 20.683 31.515 A 0.247 0.247 0 0 0 20.667 31.597 C 20.667 31.702 20.641 31.782 20.609 31.837 A 0.265 0.265 0 0 1 20.569 31.89 A 37.593 37.593 0 0 1 20.563 31.896 C 20.488 31.971 20.442 32.016 20.377 32.031 A 0.23 0.23 0 0 1 20.325 32.037 A 0.269 0.269 0 0 0 20.299 32.038 C 20.218 32.045 20.174 32.09 20.129 32.134 A 1.946 1.946 0 0 0 20.129 32.149 C 20.13 32.201 20.134 32.285 20.178 32.329 C 20.219 32.532 20.158 32.634 19.997 32.663 A 0.643 0.643 0 0 1 19.885 32.671 C 19.788 32.671 19.641 32.72 19.495 32.769 A 1.663 1.663 0 0 0 19.354 32.922 A 0.629 0.629 0 0 0 19.25 33.111 A 0.355 0.355 0 0 0 19.238 33.138 C 19.208 33.214 19.213 33.29 19.299 33.366 A 0.458 0.458 0 0 0 19.348 33.404 A 1.042 1.042 0 0 0 19.429 33.427 C 19.556 33.458 19.749 33.486 20.021 33.497 A 6.402 6.402 0 0 0 20.276 33.501 A 6.522 6.522 0 0 0 20.694 33.532 C 20.953 33.544 21.259 33.548 21.615 33.549 A 156.98 156.98 0 0 0 22.229 33.55 A 37.448 37.448 0 0 1 23.621 33.581 A 198.983 198.983 0 0 1 25.159 33.648 C 26.001 33.684 26.733 33.721 27.356 33.758 A 75.367 75.367 0 0 1 27.942 33.794 A 37.652 37.652 0 0 0 28.015 33.8 C 29.724 33.939 30.578 33.889 30.53 33.648 A 0.346 0.346 0 0 0 30.529 33.631 C 30.519 33.424 30.319 33.367 29.929 33.429 A 3.248 3.248 0 0 0 29.797 33.453 A 2.264 2.264 0 0 1 29.755 33.465 C 29.319 33.587 29.09 33.501 29.109 33.209 A 0.622 0.622 0 0 1 29.114 33.16 C 29.114 33.083 29.144 33.005 29.229 32.952 A 0.372 0.372 0 0 1 29.309 32.915 A 0.861 0.861 0 0 1 29.327 32.91 C 29.439 32.875 29.624 32.84 29.865 32.806 A 14.79 14.79 0 0 1 30.139 32.769 C 30.469 32.732 30.881 32.723 31.396 32.721 A 126.622 126.622 0 0 1 31.946 32.72 C 32.564 32.72 33.336 32.69 34.236 32.701 A 27.044 27.044 0 0 1 34.973 32.72 C 38.831 32.72 40.686 32.818 40.637 33.013 C 40.6 33.088 40.448 33.134 40.225 33.173 A 6.843 6.843 0 0 1 40.002 33.208 C 39.661 33.257 39.27 33.306 38.831 33.257 L 37.268 33.257 L 35.852 33.257 C 34.68 33.306 34.485 33.404 35.168 33.599 C 35.313 33.628 35.476 33.657 35.655 33.676 A 3.761 3.761 0 0 0 36.047 33.697 A 2.65 2.65 0 0 0 36.156 33.708 C 36.438 33.731 36.693 33.709 36.922 33.7 A 3.831 3.831 0 0 1 37.073 33.697 A 4.459 4.459 0 0 1 37.305 33.67 C 37.43 33.659 37.547 33.653 37.656 33.65 A 11.823 11.823 0 0 1 37.952 33.648 A 1.347 1.347 0 0 1 38.048 33.671 C 38.234 33.722 38.354 33.8 38.438 33.842 A 0.884 0.884 0 0 0 38.44 33.843 A 0.354 0.354 0 0 0 38.518 33.934 C 38.716 34.098 39.141 34.123 39.856 34.038 A 6.73 6.73 0 0 1 39.86 34.038 C 40.541 33.941 40.979 33.99 41.077 34.136 A 0.102 0.102 0 0 1 41.095 34.194 C 41.095 34.307 40.897 34.442 40.52 34.581 A 5.283 5.283 0 0 1 40.247 34.673 C 40.114 34.706 39.981 34.74 39.879 34.788 A 0.431 0.431 0 0 0 39.758 34.869 A 0.767 0.767 0 0 0 39.725 34.892 C 39.605 34.982 39.567 35.072 39.612 35.162 A 0.083 0.083 0 0 1 39.615 35.168 C 39.652 35.261 39.457 35.31 39.075 35.406 A 11.214 11.214 0 0 1 38.904 35.429 C 38.772 35.445 38.626 35.462 38.47 35.479 A 91.912 91.912 0 0 1 37.756 35.552 A 52.025 52.025 0 0 1 37.269 35.551 C 36.924 35.547 36.609 35.537 36.34 35.503 A 7.161 7.161 0 0 0 36.194 35.484 C 35.152 35.357 33.44 35.359 31.018 35.406 A 180.858 180.858 0 0 0 23.547 35.845 C 21.678 35.998 20.316 36.15 19.483 36.303 A 6.272 6.272 0 0 0 18.909 36.431 A 1.165 1.165 0 0 1 18.754 36.494 C 18.576 36.552 18.363 36.589 18.178 36.626 A 12.073 12.073 0 0 0 18.176 36.626 C 17.883 36.675 17.639 36.724 17.395 36.724 A 30.696 30.696 0 0 0 17.35 36.724 C 17.246 36.724 17.143 36.725 17.049 36.735 A 0.899 0.899 0 0 0 16.858 36.773 A 2.919 2.919 0 0 0 16.834 36.789 C 16.706 36.876 16.66 36.925 16.614 37.017 A 0.216 0.216 0 0 1 16.608 37.071 C 16.592 37.133 16.545 37.163 16.467 37.163 A 1.373 1.373 0 0 1 16.322 37.158 C 16.29 37.155 16.257 37.15 16.221 37.142 A 1.002 1.002 0 0 1 16.125 37.115 A 1.253 1.253 0 0 0 16.069 37.092 C 15.788 36.987 15.66 37.069 15.719 37.305 A 0.722 0.722 0 0 0 15.735 37.359 C 15.735 37.456 15.784 37.505 15.881 37.554 C 15.971 37.644 16.101 37.651 16.311 37.689 A 3.607 3.607 0 0 1 16.37 37.701 C 16.614 37.701 16.956 37.749 17.395 37.701 C 17.883 37.701 18.518 37.652 19.299 37.603 A 306.511 306.511 0 0 1 20.2 37.549 C 20.568 37.527 20.969 37.503 21.407 37.472 A 81.479 81.479 0 0 0 22.278 37.408 A 107.73 107.73 0 0 0 22.584 37.382 C 23.701 37.285 25.056 37.155 26.575 37.066 A 21.821 21.821 0 0 1 27.122 37.019 C 27.753 36.971 28.503 36.938 29.39 36.908 A 214.882 214.882 0 0 1 30.627 36.871 A 1592.408 1592.408 0 0 1 30.708 36.868 A 3578.276 3578.276 0 0 1 35.95 36.724 L 40.588 36.724 C 41.699 36.724 42.287 36.761 42.416 36.803 A 0.034 0.034 0 0 1 42.444 36.822 A 0.249 0.249 0 0 1 42.433 36.832 C 42.375 36.883 42.229 36.971 41.956 37.017 A 1.87 1.87 0 0 1 41.769 37.079 C 41.658 37.11 41.535 37.138 41.407 37.167 A 7.19 7.19 0 0 0 41.028 37.261 A 10.296 10.296 0 0 0 40.87 37.302 C 40.187 37.484 39.804 37.672 39.758 37.945 A 0.308 0.308 0 0 1 39.682 38.151 C 39.552 38.303 39.257 38.4 38.809 38.471 A 9.232 9.232 0 0 1 38.342 38.531 C 38.054 38.531 37.787 38.573 37.554 38.629 A 4.181 4.181 0 0 0 37.219 38.726 A 2.366 2.366 0 0 0 37.055 38.779 C 36.799 38.873 36.617 38.995 36.536 39.117 A 0.856 0.856 0 0 1 36.528 39.124 C 36.49 39.161 36.445 39.198 36.396 39.236 A 5.326 5.326 0 0 1 36.145 39.41 A 22.466 22.466 0 0 0 36.143 39.41 C 36.023 39.45 35.808 39.521 35.524 39.573 A 3.879 3.879 0 0 1 35.315 39.605 A 13.283 13.283 0 0 1 35.008 39.639 C 34.759 39.664 34.459 39.69 34.106 39.715 A 62.143 62.143 0 0 1 33.557 39.751 A 49.522 49.522 0 0 0 33.116 39.783 C 32.617 39.821 32.017 39.87 31.327 39.909 A 44.405 44.405 0 0 1 30.53 39.947 C 29.797 39.996 29.163 40.044 28.625 40.093 A 16.154 16.154 0 0 0 28.411 40.114 C 28.097 40.147 27.894 40.179 27.8 40.212 A 0.148 0.148 0 0 0 27.747 40.24 A 0.062 0.062 0 0 0 27.731 40.27 C 27.714 40.337 27.762 40.473 27.844 40.679 C 27.954 40.862 28.064 41.045 28.194 41.27 A 35.989 35.989 0 0 1 28.333 41.509 A 2.991 2.991 0 0 1 28.519 41.758 A 5.522 5.522 0 0 1 28.87 42.388 A 8.038 8.038 0 0 1 28.906 42.499 C 28.961 42.672 28.995 42.805 29.009 42.896 A 0.533 0.533 0 0 1 29.016 42.974 A 0.836 0.836 0 0 0 29.01 43.031 C 28.983 43.402 29.129 44.206 29.407 45.318 A 23.089 23.089 0 0 0 29.465 45.556 C 29.606 46.115 29.775 46.704 29.963 47.323 A 138.09 138.09 0 0 0 30.627 49.419 A 182.723 182.723 0 0 0 30.761 49.806 C 30.982 50.444 31.196 51.049 31.415 51.629 A 29.994 29.994 0 0 0 32.239 53.619 C 32.434 54.156 32.629 54.595 32.776 55.035 C 32.886 55.328 32.941 55.538 32.961 55.687 A 0.948 0.948 0 0 1 32.971 55.816 A 0.306 0.306 0 0 0 32.973 55.845 C 32.994 56.065 33.235 56.641 33.655 57.574 C 33.948 58.306 34.351 59.176 34.843 60.183 A 129.233 129.233 0 0 0 35.364 61.236 C 35.791 62.06 36.295 62.998 36.886 64.039 A 83.962 83.962 0 0 0 38.049 66.021 C 38.855 67.376 39.578 68.511 40.178 69.385 A 28.675 28.675 0 0 0 40.735 70.171 A 23.057 23.057 0 0 0 40.925 70.421 C 41.32 70.933 41.767 71.47 42.255 72.021 A 44.79 44.79 0 0 0 44.104 73.98 A 63.845 63.845 0 0 0 45.022 74.881 C 45.654 75.488 46.209 75.989 46.686 76.376 A 10.153 10.153 0 0 0 47.327 76.861 C 47.668 77.056 47.961 77.3 48.157 77.496 C 48.336 77.639 48.436 77.756 48.496 77.847 A 0.842 0.842 0 0 1 48.547 77.935 C 48.547 78.081 48.694 78.277 49.036 78.521 A 4.247 4.247 0 0 0 49.417 78.857 A 7.305 7.305 0 0 0 50.061 79.302 A 4.061 4.061 0 0 0 50.209 79.39 C 50.526 79.57 50.764 79.644 50.891 79.644 C 50.926 79.644 51.012 79.694 51.111 79.777 A 1.788 1.788 0 0 1 51.233 79.888 C 51.282 79.961 51.343 80.047 51.41 80.138 A 34.107 34.107 0 0 0 51.624 80.425 A 2.111 2.111 0 0 0 51.706 80.553 A 1.74 1.74 0 0 0 52.112 80.962 C 52.252 81.103 52.367 81.167 52.457 81.193 A 0.347 0.347 0 0 0 52.551 81.206 A 1.702 1.702 0 0 1 52.591 81.207 C 52.745 81.21 52.833 81.235 52.871 81.266 A 0.05 0.05 0 0 1 52.893 81.304 A 0.03 0.03 0 0 1 52.893 81.309 C 52.886 81.349 52.802 81.441 52.679 81.566 A 23.508 23.508 0 0 1 52.551 81.695 A 1.193 1.193 0 0 1 52.202 81.935 C 51.906 82.071 51.509 82.125 50.99 82.074 A 4.988 4.988 0 0 1 50.696 82.037 A 87.554 87.554 0 0 1 49.646 81.884 A 18.794 18.794 0 0 1 48.596 81.695 A 28.623 28.623 0 0 1 47.957 81.551 C 47.544 81.452 47.182 81.354 46.887 81.255 A 4.928 4.928 0 0 1 46.814 81.23 C 46.512 81.124 46.314 81.02 46.238 80.935 A 0.112 0.112 0 0 1 46.204 80.865 A 0.269 0.269 0 0 0 46.202 80.839 C 46.195 80.758 46.15 80.714 46.106 80.669 C 46.057 80.621 45.959 80.572 45.862 80.572 C 45.823 80.572 45.754 80.602 45.727 80.639 A 0.052 0.052 0 0 0 45.715 80.669 A 0.12 0.12 0 0 0 45.686 80.72 C 45.675 80.757 45.676 80.802 45.69 80.85 A 0.375 0.375 0 0 0 45.715 80.913 C 45.764 81.011 45.764 81.06 45.764 81.109 A 0.383 0.383 0 0 1 45.76 81.117 C 45.713 81.206 45.664 81.206 45.569 81.206 A 0.471 0.471 0 0 1 45.504 81.202 C 45.408 81.189 45.374 81.141 45.374 81.06 A 0.092 0.092 0 0 1 45.357 81.036 C 45.335 80.993 45.331 80.922 45.345 80.854 A 0.347 0.347 0 0 1 45.374 80.767 C 45.499 80.473 45.373 80.216 45.025 79.932 A 3.239 3.239 0 0 0 44.836 79.79 A 2.79 2.79 0 0 1 44.733 79.709 C 44.663 79.651 44.601 79.594 44.547 79.536 A 1.4 1.4 0 0 1 44.397 79.351 C 44.34 79.237 44.316 79.156 44.316 79.089 A 0.278 0.278 0 0 1 44.348 78.96 A 1.026 1.026 0 0 0 44.355 78.946 C 44.437 78.777 44.399 78.727 44.243 78.833 A 1.071 1.071 0 0 0 44.202 78.863 A 0.387 0.387 0 0 1 44.128 78.884 C 43.927 78.92 43.612 78.841 43.216 78.662 A 6.189 6.189 0 0 1 42.834 78.472 C 42.151 78.081 41.516 77.642 40.93 77.105 A 1.646 1.646 0 0 0 40.916 77.091 C 40.848 77.024 40.779 76.969 40.71 76.921 A 2.844 2.844 0 0 0 40.344 76.714 A 37.423 37.423 0 0 0 40.238 76.687 C 40.165 76.669 40.099 76.656 40.043 76.658 A 0.195 0.195 0 0 0 39.905 76.714 A 0.275 0.275 0 0 0 39.803 76.803 C 39.766 76.855 39.738 76.923 39.709 77.007 C 39.709 77.065 39.717 77.115 39.729 77.161 A 0.979 0.979 0 0 0 39.807 77.349 A 0.371 0.371 0 0 0 39.834 77.373 C 39.923 77.446 40.011 77.442 40.1 77.398 A 0.115 0.115 0 0 1 40.153 77.385 C 40.235 77.385 40.329 77.472 40.488 77.591 A 5.161 5.161 0 0 0 40.491 77.593 A 2.841 2.841 0 0 1 40.648 77.721 C 40.725 77.788 40.805 77.863 40.889 77.945 A 25.194 25.194 0 0 1 41.125 78.179 A 11.548 11.548 0 0 1 41.139 78.194 C 41.77 78.872 41.891 79.167 41.581 79.039 A 0.998 0.998 0 0 1 41.516 79.009 A 7.269 7.269 0 0 1 41.418 78.947 C 41.016 78.686 40.369 78.219 39.514 77.544 A 36.279 36.279 0 0 1 38.643 76.785 A 96.949 96.949 0 0 1 36.682 74.956 A 39.921 39.921 0 0 1 35.628 73.791 C 34.104 72.034 33.395 70.818 33.557 70.171 A 1.131 1.131 0 0 0 33.561 70.16 C 33.606 70.02 33.606 69.923 33.606 69.781 A 0.284 0.284 0 0 0 33.57 69.642 A 0.259 0.259 0 0 0 33.459 69.537 C 33.362 69.488 33.313 69.488 33.215 69.585 A 0.131 0.131 0 0 0 33.204 69.598 C 33.181 69.629 33.158 69.681 33.142 69.743 A 0.742 0.742 0 0 0 33.118 69.927 A 4.586 4.586 0 0 1 33.106 70.024 C 33.065 70.332 33.021 70.341 32.947 70.107 A 2.894 2.894 0 0 1 32.922 70.025 C 32.874 69.878 32.727 69.585 32.483 69.146 A 15.174 15.174 0 0 1 32.38 68.979 C 32.169 68.63 31.947 68.241 31.653 67.779 A 16.283 16.283 0 0 1 31.54 67.593 C 31.214 67.048 31.003 66.617 30.872 66.265 C 30.811 66.024 30.77 65.819 30.77 65.63 A 1.061 1.061 0 0 1 30.823 65.288 C 30.905 65.001 30.952 64.852 30.936 64.782 A 0.062 0.062 0 0 0 30.92 64.751 A 0.039 0.039 0 0 0 30.912 64.745 C 30.862 64.717 30.741 64.793 30.519 64.973 A 9.011 9.011 0 0 0 30.432 65.044 C 30.11 65.275 29.961 65.331 30.068 65.132 A 0.949 0.949 0 0 1 30.09 65.093 A 0.945 0.945 0 0 0 30.111 65.057 C 30.231 64.835 30.176 64.703 29.944 64.703 C 29.651 64.703 29.651 64.605 29.993 64.41 C 30.163 64.324 30.222 64.201 30.202 64.041 A 0.621 0.621 0 0 0 30.188 63.97 A 1.296 1.296 0 0 0 30.161 63.919 C 30.049 63.718 29.81 63.397 29.407 62.994 A 11.395 11.395 0 0 1 29.364 62.945 C 28.84 62.338 28.588 61.915 28.611 61.698 A 0.164 0.164 0 0 1 28.674 61.578 A 0.617 0.617 0 0 0 28.843 61.413 A 0.406 0.406 0 0 0 28.918 61.187 A 3.152 3.152 0 0 1 28.885 61.117 C 28.855 61.052 28.817 60.977 28.755 60.913 A 0.484 0.484 0 0 0 28.674 60.845 A 0.696 0.696 0 0 0 28.611 60.808 C 28.517 60.758 28.407 60.728 28.293 60.728 A 0.643 0.643 0 0 0 28.137 60.747 A 0.506 0.506 0 0 1 28.129 60.749 C 27.888 60.793 27.696 60.646 27.551 60.308 A 1.091 1.091 0 0 1 27.528 60.265 C 27.348 59.915 27.252 59.296 27.112 58.453 A 1.975 1.975 0 0 0 27.033 58.147 C 26.957 57.934 26.845 57.763 26.687 57.634 A 1.164 1.164 0 0 0 26.282 57.427 A 0.256 0.256 0 0 1 26.172 57.4 C 26.037 57.336 25.877 57.16 25.683 56.899 A 10.525 10.525 0 0 1 25.5 56.646 A 17.509 17.509 0 0 1 25.427 56.511 C 25.136 55.965 24.721 55.125 24.182 53.912 C 23.779 52.959 23.239 51.678 22.603 50.087 A 171.558 171.558 0 0 1 21.936 48.394 A 43.865 43.865 0 0 1 21.865 48.23 C 21.553 47.51 21.284 46.836 21.057 46.246 C 20.813 45.611 20.618 45.22 20.52 45.025 C 20.081 44.146 19.885 43.56 19.934 43.218 C 20.032 42.876 20.422 42.583 21.155 42.339 A 14.057 14.057 0 0 1 21.205 42.314 C 21.575 42.131 21.9 41.989 22.18 41.802 A 3.387 3.387 0 0 0 22.388 41.689 C 22.568 41.583 22.694 41.484 22.766 41.412 C 22.892 41.202 22.802 41.064 22.495 40.967 A 2.03 2.03 0 0 0 22.327 40.923 C 21.99 40.886 21.597 40.906 21.102 40.983 A 11.522 11.522 0 0 0 20.618 41.07 A 14.783 14.783 0 0 1 20.585 41.079 C 20.381 41.137 20.16 41.195 19.943 41.253 A 25.221 25.221 0 0 0 19.543 41.363 A 20.798 20.798 0 0 0 19.312 41.397 C 19.149 41.422 19.002 41.447 18.877 41.473 A 3.767 3.767 0 0 0 18.713 41.509 A 13.171 13.171 0 0 0 17.395 41.79 A 19.349 19.349 0 0 0 16.223 42.144 C 15.65 42.335 15.286 42.496 15.131 42.628 A 0.249 0.249 0 0 0 15.051 42.73 A 7.179 7.179 0 0 0 15.03 42.904 C 14.947 43.675 14.905 45.03 14.905 46.929 C 14.856 48.98 14.905 51.324 14.954 54.009 A 199.232 199.232 0 0 1 14.953 54.606 C 14.952 55.078 14.947 55.626 14.933 56.241 A 67.255 67.255 0 0 1 14.905 57.183 C 14.905 58.501 14.856 59.722 14.807 60.894 A 25.688 25.688 0 0 0 14.794 61.063 C 14.732 61.872 14.715 62.584 14.711 63.201 A 88.05 88.05 0 0 0 14.709 63.824 A 268.557 268.557 0 0 0 14.71 64.126 C 14.71 64.749 14.716 65.044 14.758 65.044 C 14.807 65.044 14.856 65.093 14.856 65.191 A 1.348 1.348 0 0 1 14.905 65.417 C 14.912 65.466 14.92 65.518 14.931 65.574 A 1.869 1.869 0 0 0 14.954 65.679 A 0.702 0.702 0 0 1 14.905 65.933 A 0.953 0.953 0 0 1 14.807 66.119 A 0.729 0.729 0 0 1 14.757 66.165 C 14.725 66.191 14.693 66.212 14.661 66.228 A 0.325 0.325 0 0 1 14.514 66.265 C 14.319 66.265 14.221 66.119 14.172 65.826 C 14.13 65.615 14.088 65.186 14.109 64.602 A 9.28 9.28 0 0 1 14.124 64.312 C 14.124 63.775 14.172 63.287 14.172 62.896 A 10.595 10.595 0 0 0 14.18 62.824 C 14.221 62.43 14.221 62.21 14.221 62.163 A 0.69 0.69 0 0 0 14.231 62.142 C 14.262 62.075 14.266 62.033 14.243 61.996 A 0.148 0.148 0 0 0 14.221 61.968 C 14.198 61.968 14.175 61.957 14.147 61.946 M 376.672 19.537 L 375.891 23.394 A 1.55 1.55 0 0 1 375.537 23.349 C 375.472 23.333 375.411 23.315 375.357 23.297 A 2.439 2.439 0 0 1 375.354 23.296 A 3.823 3.823 0 0 0 374.473 23.124 A 6.755 6.755 0 0 0 373.889 23.101 C 373.421 23.101 372.805 23.249 372.041 23.545 A 13.198 13.198 0 0 0 371.692 23.687 A 42.608 42.608 0 0 0 369.922 24.134 C 368.159 24.625 366.933 25.128 366.223 25.689 A 2.733 2.733 0 0 0 365.954 25.913 C 365.394 26.449 365.491 26.948 366.272 27.359 A 3.62 3.62 0 0 0 366.565 27.496 A 3.189 3.189 0 0 1 366.859 27.643 C 367.191 27.828 367.639 28.13 368.225 28.57 A 55.434 55.434 0 0 1 369.458 29.443 A 52.233 52.233 0 0 1 370.764 30.425 C 373.206 32.329 374.329 33.599 374.133 34.283 A 44.24 44.24 0 0 1 374.096 34.504 C 374.026 34.907 373.892 35.671 373.694 36.822 C 373.453 38.173 373.259 39.667 373.019 41.304 A 159.469 159.469 0 0 1 373.01 41.363 A 61.405 61.405 0 0 1 372.868 42.608 C 372.724 43.744 372.575 44.575 372.401 45.098 A 3.519 3.519 0 0 1 372.375 45.171 A 10.001 10.001 0 0 0 372.131 46.343 C 372.088 46.691 372.044 47.116 372.07 47.618 A 5.826 5.826 0 0 0 372.083 47.808 C 372.083 47.852 372.083 48.017 372.046 48.229 A 2.467 2.467 0 0 1 372.034 48.296 C 372.034 48.737 371.954 49.336 371.867 50.059 A 78.398 78.398 0 0 0 371.838 50.298 A 29.276 29.276 0 0 1 371.656 51.706 A 12.257 12.257 0 0 1 371.448 52.74 A 2.89 2.89 0 0 1 371.416 52.922 C 371.374 53.122 371.319 53.28 371.279 53.396 A 6.099 6.099 0 0 0 371.252 53.472 A 3.968 3.968 0 0 1 371.145 53.577 C 371.105 53.614 371.069 53.643 371.04 53.658 A 0.074 0.074 0 0 1 371.008 53.667 A 0.565 0.565 0 0 1 370.97 53.685 C 370.896 53.715 370.848 53.709 370.764 53.667 L 370.618 53.667 A 0.081 0.081 0 0 0 370.561 53.692 C 370.542 53.711 370.527 53.74 370.522 53.781 A 0.26 0.26 0 0 0 370.52 53.814 A 0.396 0.396 0 0 0 370.492 53.893 C 370.472 53.972 370.462 54.071 370.437 54.19 A 1.82 1.82 0 0 1 370.422 54.253 C 370.227 55.669 370.032 56.841 369.934 57.72 C 369.852 58.416 369.805 59.01 369.791 59.442 A 7.616 7.616 0 0 0 369.788 59.673 A 4.65 4.65 0 0 0 369.797 59.977 C 369.813 60.224 369.851 60.418 369.91 60.586 A 1.644 1.644 0 0 0 369.934 60.65 A 1.255 1.255 0 0 0 370.358 61.037 A 1.165 1.165 0 0 0 370.471 61.089 C 370.764 61.187 371.008 61.236 371.204 61.236 A 1.869 1.869 0 0 1 371.309 61.213 C 371.364 61.202 371.416 61.195 371.466 61.187 A 1.348 1.348 0 0 0 371.692 61.138 C 371.736 61.094 371.82 61.09 371.872 61.089 A 1.946 1.946 0 0 1 371.887 61.089 A 0.131 0.131 0 0 1 371.961 61.054 C 371.999 61.049 372.039 61.057 372.069 61.078 A 0.109 0.109 0 0 1 372.083 61.089 A 0.573 0.573 0 0 0 372.143 61.115 C 372.219 61.142 372.288 61.158 372.327 61.236 A 0.95 0.95 0 0 1 372.399 61.314 C 372.413 61.331 372.427 61.35 372.441 61.373 A 0.713 0.713 0 0 1 372.473 61.431 A 0.326 0.326 0 0 1 372.501 61.463 C 372.54 61.514 372.579 61.584 372.618 61.624 A 0.215 0.215 0 0 0 372.62 61.626 A 0.29 0.29 0 0 0 372.671 61.666 C 372.702 61.686 372.739 61.702 372.779 61.713 A 0.336 0.336 0 0 0 372.864 61.724 A 10.524 10.524 0 0 0 373.612 61.753 A 5.583 5.583 0 0 0 374.866 61.626 C 375.383 61.547 375.739 61.402 375.958 61.193 A 0.902 0.902 0 0 0 376.086 61.04 A 0.374 0.374 0 0 1 376.12 60.987 C 376.188 60.894 376.323 60.78 376.526 60.699 A 1.712 1.712 0 0 1 377.209 60.406 A 11.962 11.962 0 0 0 377.504 60.329 C 377.561 60.314 377.62 60.296 377.684 60.277 A 8.202 8.202 0 0 0 377.893 60.21 A 3.375 3.375 0 0 0 378.442 60.039 A 18.223 18.223 0 0 0 378.625 59.966 A 11.939 11.939 0 0 1 378.628 59.965 C 378.837 59.882 378.974 59.834 379.039 59.76 A 0.177 0.177 0 0 0 379.065 59.722 A 11.288 11.288 0 0 0 379.135 59.505 C 379.246 59.146 379.43 58.504 379.644 57.537 A 37.897 37.897 0 0 0 379.7 57.281 A 158.477 158.477 0 0 0 380.139 55.157 A 192.098 192.098 0 0 0 380.579 52.886 A 335.871 335.871 0 0 1 380.585 52.848 C 380.825 51.531 381.032 50.443 381.151 49.586 A 15.558 15.558 0 0 0 381.213 49.078 A 13.14 13.14 0 0 1 381.304 48.247 C 381.372 47.751 381.464 47.198 381.555 46.587 A 44.53 44.53 0 0 0 381.736 45.573 C 381.841 44.942 381.934 44.311 382.025 43.645 A 126.626 126.626 0 0 0 382.043 43.511 C 382.181 42.55 382.232 41.674 382.198 40.925 A 8.921 8.921 0 0 0 382.19 40.777 L 382.385 39.849 L 382.971 40.044 A 12.784 12.784 0 0 0 383.415 40.324 C 383.595 40.433 383.789 40.549 383.997 40.679 C 384.345 40.834 384.631 40.988 384.905 41.119 A 5.984 5.984 0 0 0 385.12 41.216 A 5.926 5.926 0 0 1 385.47 41.382 C 385.75 41.525 386.084 41.714 386.487 41.949 A 17.925 17.925 0 0 1 387.915 42.878 A 20.142 20.142 0 0 1 388.245 43.121 A 28.408 28.408 0 0 0 389.409 43.975 C 389.798 44.244 390.168 44.487 390.518 44.706 A 26.736 26.736 0 0 0 391.125 45.074 A 25.909 25.909 0 0 0 392.619 45.889 A 23.251 23.251 0 0 0 393.909 46.49 C 395.374 47.124 396.497 47.613 397.131 48.003 C 397.815 48.394 398.254 48.785 398.499 49.273 C 398.661 49.638 398.823 50.173 398.958 50.876 A 14.136 14.136 0 0 1 399.036 51.324 A 65.421 65.421 0 0 0 400.617 58.024 A 111.115 111.115 0 0 0 400.94 59.136 A 92.654 92.654 0 0 0 401.818 61.842 C 402.107 62.684 402.392 63.461 402.675 64.176 A 32.689 32.689 0 0 0 403.333 65.728 C 404.112 67.433 404.648 68.166 404.99 67.878 A 0.333 0.333 0 0 0 404.993 67.876 A 0.302 0.302 0 0 0 405.02 67.794 C 405.033 67.717 405.021 67.625 404.971 67.531 A 0.544 0.544 0 0 0 404.944 67.486 A 2.947 2.947 0 0 0 404.873 67.384 C 404.78 67.256 404.657 67.112 404.504 66.997 A 3.313 3.313 0 0 1 404.382 66.868 C 404.263 66.736 404.189 66.633 404.114 66.558 C 404.027 66.427 404.017 66.335 404.086 66.317 A 0.109 0.109 0 0 1 404.114 66.314 C 404.158 66.314 404.162 66.192 404.126 66.023 A 1.621 1.621 0 0 0 404.114 65.972 A 1.232 1.232 0 0 0 404.043 65.775 C 403.974 65.62 403.873 65.441 403.772 65.24 C 403.577 64.996 403.479 64.703 403.381 64.458 C 403.296 64.245 403.248 64.106 403.237 64.009 A 0.356 0.356 0 0 1 403.235 63.97 C 403.276 63.848 403.248 63.658 403.181 63.371 A 12.038 12.038 0 0 0 403.137 63.189 A 52.43 52.43 0 0 1 403.009 62.887 C 402.878 62.576 402.703 62.154 402.484 61.623 A 424.756 424.756 0 0 1 402.405 61.431 A 2.221 2.221 0 0 1 402.315 61.222 C 402.251 61.053 402.194 60.851 402.161 60.65 A 1.512 1.512 0 0 1 402.065 60.123 A 6.512 6.512 0 0 1 402.063 59.917 A 1.247 1.247 0 0 0 401.977 59.469 A 1.531 1.531 0 0 0 401.917 59.331 C 401.822 59.142 401.727 58.952 401.587 58.852 A 0.438 0.438 0 0 0 401.575 58.843 C 401.453 58.722 401.366 58.467 401.256 58.105 A 75.222 75.222 0 0 1 401.184 57.867 A 10.232 10.232 0 0 1 401.08 57.11 C 401.048 56.808 401.023 56.488 400.999 56.155 A 131.08 131.08 0 0 1 400.989 56.011 C 400.948 55.434 400.906 54.927 400.865 54.46 A 95.673 95.673 0 0 0 400.842 54.204 C 400.793 53.716 400.696 53.423 400.647 53.277 A 2.576 2.576 0 0 1 400.621 53.223 C 400.569 53.113 400.493 52.923 400.452 52.593 A 81.568 81.568 0 0 1 400.378 51.995 C 400.36 51.839 400.342 51.677 400.323 51.502 A 36.89 36.89 0 0 1 400.305 51.324 A 21.154 21.154 0 0 1 400.289 51.081 C 400.258 50.56 400.262 50.243 400.302 50.069 A 0.682 0.682 0 0 1 400.305 50.054 A 0.528 0.528 0 0 1 400.33 49.978 C 400.383 49.851 400.475 49.825 400.634 49.901 A 0.782 0.782 0 0 1 400.647 49.908 A 0.389 0.389 0 0 1 400.754 50.025 C 400.815 50.12 400.867 50.255 400.916 50.419 A 6.201 6.201 0 0 1 400.989 50.689 A 3.665 3.665 0 0 1 401.141 51.409 A 6.766 6.766 0 0 1 401.184 52.203 A 66.845 66.845 0 0 0 401.221 52.753 C 401.252 53.19 401.283 53.558 401.313 53.882 A 37.714 37.714 0 0 0 401.331 54.058 A 9.09 9.09 0 0 0 401.409 54.646 C 401.448 54.884 401.5 55.137 401.569 55.401 A 8.454 8.454 0 0 0 401.672 55.767 C 401.793 56.29 401.98 57.012 402.261 57.906 A 35.904 35.904 0 0 0 402.454 58.501 A 65.877 65.877 0 0 0 404.158 63.653 A 50.101 50.101 0 0 0 405.676 67.242 C 405.954 67.891 406.056 68.407 406.024 68.751 A 1.11 1.11 0 0 1 406.018 68.804 A 0.478 0.478 0 0 1 406.012 68.887 C 405.975 69.092 405.787 69.051 405.481 68.658 A 2.314 2.314 0 0 0 405.421 68.588 C 405.243 68.391 405.156 68.381 405.107 68.506 A 0.452 0.452 0 0 0 405.09 68.56 C 405.09 68.658 405.188 68.902 405.383 69.195 A 7.922 7.922 0 0 0 405.858 69.956 A 4.263 4.263 0 0 0 406.067 70.22 A 20.115 20.115 0 0 0 406.246 70.455 C 406.443 70.711 406.587 70.876 406.702 70.953 A 1.423 1.423 0 0 0 406.738 70.987 C 406.855 71.097 406.892 71.082 406.849 70.909 A 1.241 1.241 0 0 0 406.848 70.904 C 406.459 69.882 406.361 69.442 406.505 69.68 A 0.824 0.824 0 0 1 406.506 69.683 A 0.29 0.29 0 0 0 406.558 69.723 C 406.589 69.742 406.626 69.759 406.665 69.769 A 0.336 0.336 0 0 0 406.75 69.781 A 0.869 0.869 0 0 0 406.827 69.803 C 406.931 69.827 407.016 69.821 407.13 69.784 A 1.11 1.11 0 0 0 407.141 69.781 A 0.825 0.825 0 0 1 407.326 69.804 C 407.506 69.846 407.735 69.945 408.016 70.12 A 4.218 4.218 0 0 1 408.02 70.122 A 14.777 14.777 0 0 1 408.352 70.366 C 408.601 70.554 408.859 70.766 409.094 71.001 A 3.291 3.291 0 0 1 409.396 71.348 C 409.563 71.57 409.681 71.785 409.778 71.978 C 409.827 72.124 409.924 72.271 410.022 72.369 A 0.28 0.28 0 0 0 410.063 72.429 C 410.114 72.486 410.18 72.515 410.217 72.515 A 0.031 0.031 0 0 0 410.247 72.493 C 410.26 72.463 410.255 72.402 410.233 72.323 A 1.021 1.021 0 0 0 410.217 72.271 C 410.217 72.099 410.179 71.927 410.104 71.721 A 3.371 3.371 0 0 0 410.071 71.636 C 409.991 71.437 409.912 71.271 409.885 71.11 A 0.661 0.661 0 0 1 409.875 71.001 C 409.843 70.872 409.832 70.764 409.857 70.678 A 0.262 0.262 0 0 1 409.924 70.562 C 409.973 70.513 409.875 70.22 409.68 69.732 A 14.926 14.926 0 0 0 409.392 69.059 C 409.253 68.755 409.091 68.429 408.899 68.072 C 408.487 67.33 408.214 66.693 408.051 66.219 A 6.5 6.5 0 0 1 407.971 65.972 A 3.352 3.352 0 0 1 407.854 65.085 A 4.045 4.045 0 0 1 407.922 64.361 A 11.636 11.636 0 0 0 408.044 63.695 C 408.081 63.47 408.118 63.238 408.167 62.994 A 34.252 34.252 0 0 1 408.203 62.645 C 408.221 62.479 408.24 62.325 408.258 62.181 A 25.883 25.883 0 0 1 408.313 61.773 C 408.313 61.285 408.264 60.552 408.118 59.673 A 20.324 20.324 0 0 0 407.766 57.924 A 15.038 15.038 0 0 0 407.532 57.085 A 9.212 9.212 0 0 0 407.422 56.682 C 407.263 56.151 407.104 55.846 406.946 55.767 A 1.28 1.28 0 0 1 406.92 55.74 C 406.869 55.687 406.796 55.595 406.754 55.438 A 0.847 0.847 0 0 1 406.75 55.425 A 0.899 0.899 0 0 1 406.713 55.234 C 406.703 55.14 406.702 55.037 406.702 54.933 A 30.696 30.696 0 0 1 406.702 54.888 A 10.089 10.089 0 0 0 406.698 54.544 A 3.723 3.723 0 0 0 406.653 54.058 A 28.493 28.493 0 0 0 406.584 53.605 A 64.935 64.935 0 0 0 406.506 53.13 C 406.421 52.917 406.41 52.666 406.409 52.443 A 15.553 15.553 0 0 1 406.409 52.349 A 3.115 3.115 0 0 1 406.441 52.202 C 406.47 52.088 406.502 52.002 406.546 51.934 A 0.435 0.435 0 0 1 406.604 51.861 A 0.533 0.533 0 0 1 406.746 51.798 C 406.933 51.742 407.246 51.714 407.727 51.714 A 33.615 33.615 0 0 1 408.616 51.722 C 409.021 51.733 409.457 51.757 409.924 51.812 A 34.408 34.408 0 0 0 412.371 51.92 C 412.491 51.921 412.611 51.922 412.732 51.922 A 40.562 40.562 0 0 0 415.686 51.812 C 417.629 51.673 419.134 51.49 420.283 51.139 A 7.784 7.784 0 0 0 420.471 51.079 L 422.034 50.64 L 420.081 50.591 C 419.493 50.591 418.834 50.519 418.102 50.406 A 31.93 31.93 0 0 1 417.737 50.347 C 416.87 50.203 416.051 50.011 415.372 49.818 A 19.12 19.12 0 0 1 415.344 49.81 A 7.807 7.807 0 0 1 414.939 49.691 C 414.521 49.555 414.255 49.419 414.091 49.283 A 0.931 0.931 0 0 1 414.026 49.224 C 413.977 49.127 413.832 49.078 413.589 49.029 A 5.164 5.164 0 0 0 413.586 49.029 A 92.293 92.293 0 0 0 413.583 49.028 A 19.9 19.9 0 0 1 413.581 49.028 C 413.363 48.991 413.172 48.955 412.948 48.939 A 3.39 3.39 0 0 0 412.708 48.931 A 2.982 2.982 0 0 1 412.379 48.912 C 412.235 48.896 412.081 48.869 411.923 48.828 A 2.982 2.982 0 0 1 411.633 48.736 A 7.077 7.077 0 0 1 411.14 48.494 A 5.86 5.86 0 0 1 410.51 48.101 A 10.036 10.036 0 0 0 410.205 47.905 C 409.959 47.753 409.659 47.585 409.29 47.417 A 10.84 10.84 0 0 0 408.386 47.017 A 10.853 10.853 0 0 0 407.874 46.831 A 30.807 30.807 0 0 1 407.073 46.557 A 8.345 8.345 0 0 1 406.653 46.392 C 406.262 46.246 406.018 46.099 405.92 46.001 C 405.823 45.855 405.676 45.415 405.579 44.683 A 55.323 55.323 0 0 1 405.469 43.8 C 405.408 43.278 405.347 42.705 405.286 42.095 A 43.15 43.15 0 0 0 405.114 39.87 A 121.026 121.026 0 0 0 405.042 39.165 C 404.993 38.287 404.895 37.603 404.846 37.261 A 5.782 5.782 0 0 1 404.757 36.842 C 404.719 36.621 404.7 36.419 404.7 36.236 C 404.664 36.02 404.654 35.857 404.652 35.728 A 6.385 6.385 0 0 1 404.651 35.601 A 0.629 0.629 0 0 0 404.674 35.483 C 404.7 35.259 404.7 34.811 404.7 34.136 C 404.7 33.306 404.7 32.281 404.651 31.06 C 404.504 24.273 404.7 20.171 405.139 18.853 A 8.052 8.052 0 0 0 405.288 18.218 C 405.426 17.487 405.419 16.877 405.269 16.38 A 2.058 2.058 0 0 0 404.163 15.093 A 8.541 8.541 0 0 0 402.994 14.794 C 402.485 14.701 401.93 14.646 401.327 14.646 A 10.063 10.063 0 0 0 400.94 14.654 C 399.709 14.699 398.607 14.872 397.671 15.173 A 8.151 8.151 0 0 0 397.473 15.24 L 395.764 15.923 L 395.667 18.218 A 11.758 11.758 0 0 0 395.645 18.623 C 395.621 19.281 395.635 20.157 395.715 21.197 A 57.266 57.266 0 0 0 396.008 25.201 A 51.507 51.507 0 0 0 396.089 26.163 C 396.176 27.099 396.277 27.959 396.35 28.765 C 396.448 29.888 396.497 30.621 396.545 30.962 A 194.564 194.564 0 0 0 396.832 34.315 A 77.564 77.564 0 0 0 397.034 36.187 A 37.799 37.799 0 0 0 397.091 36.766 C 397.223 38.004 397.38 38.86 397.506 39.305 A 3.568 3.568 0 0 0 397.522 39.361 C 397.62 39.654 397.62 39.996 397.668 40.337 A 3.761 3.761 0 0 1 397.648 40.73 C 397.629 40.909 397.6 41.071 397.571 41.216 A 1.241 1.241 0 0 1 397.512 41.345 C 397.434 41.489 397.345 41.552 397.201 41.558 A 0.55 0.55 0 0 1 397.18 41.558 A 0.187 0.187 0 0 1 397.132 41.567 C 396.994 41.575 396.765 41.465 396.444 41.261 A 8.534 8.534 0 0 1 396.301 41.167 A 6.916 6.916 0 0 1 395.936 40.948 C 395.66 40.771 395.336 40.543 394.97 40.263 A 22.959 22.959 0 0 1 394.446 39.849 A 100.376 100.376 0 0 1 389.989 36.306 A 97.594 97.594 0 0 1 388.489 35.015 C 386.943 33.69 385.757 32.614 384.912 31.768 A 19.253 19.253 0 0 1 384.192 31.011 A 2.639 2.639 0 0 1 383.775 30.538 C 383.602 30.289 383.48 30.026 383.39 29.776 A 4.068 4.068 0 0 1 383.362 29.693 C 383.167 29.204 383.118 28.521 383.167 27.642 C 383.241 27.006 383.345 26.113 383.499 25.006 A 89.045 89.045 0 0 1 383.655 23.931 A 18.212 18.212 0 0 0 383.687 23.645 C 383.789 22.66 383.735 22.261 383.524 22.451 A 0.414 0.414 0 0 0 383.508 22.466 A 0.183 0.183 0 0 1 383.469 22.481 C 383.308 22.519 383.224 22.251 383.216 21.678 A 6.631 6.631 0 0 1 383.215 21.587 C 383.215 21.117 383.238 20.578 383.285 19.97 A 36.645 36.645 0 0 1 383.362 19.097 C 383.508 18.121 383.655 17.193 383.899 16.314 A 7.656 7.656 0 0 0 383.972 15.931 C 384.045 15.496 384.119 14.91 384.192 14.214 A 24.845 24.845 0 0 0 384.387 11.48 C 384.436 10.503 384.485 9.527 384.534 8.501 A 164.406 164.406 0 0 1 384.57 7.733 C 384.595 7.231 384.621 6.784 384.646 6.399 A 42.779 42.779 0 0 1 384.68 5.913 C 384.763 4.921 384.741 4.139 384.643 3.537 A 4.791 4.791 0 0 0 384.583 3.228 A 2.857 2.857 0 0 0 384.5 2.994 C 384.319 2.548 384.097 2.431 383.801 2.642 A 0.76 0.76 0 0 0 383.769 2.723 C 383.724 2.849 383.657 3.083 383.569 3.427 A 38.345 38.345 0 0 0 383.508 3.667 A 30.578 30.578 0 0 0 383.368 4.668 C 383.325 5.022 383.289 5.401 383.264 5.816 A 33.178 33.178 0 0 1 383.11 7.162 C 382.975 8.181 382.781 9.396 382.542 10.805 A 418.125 418.125 0 0 1 382.19 12.847 A 221.002 221.002 0 0 1 381.435 16.953 C 381.167 18.33 380.9 19.629 380.632 20.855 A 150.204 150.204 0 0 1 380.579 21.099 A 86.884 86.884 0 0 0 380.263 22.504 A 46.014 46.014 0 0 0 380.139 23.101 A 45.208 45.208 0 0 0 380.136 23.118 C 380.039 23.605 379.963 24.026 379.895 24.382 A 17.227 17.227 0 0 1 379.797 24.859 C 379.718 25.375 379.639 25.729 379.559 25.923 A 0.627 0.627 0 0 1 379.504 26.031 A 0.088 0.088 0 0 1 379.476 26.065 C 379.419 26.104 379.316 26.057 379.207 25.903 A 1.065 1.065 0 0 1 379.163 25.835 A 0.48 0.48 0 0 1 379.133 25.752 C 379.094 25.612 379.056 25.35 379.017 24.966 A 18.524 18.524 0 0 1 379.016 24.956 A 16.118 16.118 0 0 0 379.005 24.454 C 378.994 24.11 378.984 23.752 379.016 23.394 A 47.887 47.887 0 0 1 379.019 22.773 C 379.022 22.55 379.028 22.342 379.042 22.144 A 6.285 6.285 0 0 1 379.065 21.88 A 8.615 8.615 0 0 1 379.088 21.692 C 379.122 21.432 379.157 21.288 379.192 21.224 A 0.121 0.121 0 0 1 379.211 21.197 A 0.196 0.196 0 0 0 379.244 21.143 C 379.287 21.048 379.347 20.839 379.411 20.487 A 10.207 10.207 0 0 0 379.456 20.22 C 379.553 19.634 379.7 18.902 379.797 18.023 A 126.615 126.615 0 0 1 380.249 14.825 A 56.7 56.7 0 0 1 380.774 11.919 A 47.552 47.552 0 0 0 380.92 11.071 C 380.963 10.809 381.006 10.534 381.049 10.24 A 51.244 51.244 0 0 0 381.067 10.113 C 381.165 9.38 381.262 8.794 381.311 8.208 C 381.353 7.743 381.469 7.24 381.595 6.669 A 51.512 51.512 0 0 0 381.653 6.402 A 7.365 7.365 0 0 1 381.787 5.712 C 381.883 5.315 381.998 4.959 382.092 4.644 A 14.936 14.936 0 0 0 382.322 3.6 A 8.465 8.465 0 0 0 382.434 2.691 C 382.532 1.958 382.581 1.324 382.532 0.787 C 382.532 0.249 382.434 -0.044 382.336 0.005 C 382.291 0.005 382.288 0.005 382.249 0.044 A 4.558 4.558 0 0 0 382.239 0.054 A 0.948 0.948 0 0 0 382.165 0.193 C 382.106 0.326 382.042 0.517 381.965 0.787 A 19.78 19.78 0 0 0 381.897 1.031 A 5.815 5.815 0 0 0 381.758 1.423 C 381.634 1.813 381.521 2.264 381.387 2.741 A 24.402 24.402 0 0 1 381.36 2.837 A 443.946 443.946 0 0 1 380.962 4.453 C 380.161 7.673 379.668 9.458 379.459 9.808 A 0.161 0.161 0 0 1 379.407 9.869 C 379.324 9.951 379.276 9.929 379.264 9.861 A 0.226 0.226 0 0 1 379.26 9.82 A 2.82 2.82 0 0 1 379.263 9.667 C 379.268 9.572 379.281 9.46 379.317 9.324 A 2.117 2.117 0 0 1 379.358 9.185 A 19.044 19.044 0 0 0 379.628 7.633 A 76.833 76.833 0 0 0 379.749 6.695 A 29.966 29.966 0 0 0 379.813 6.144 C 379.859 5.707 379.886 5.339 379.893 5.015 A 7.877 7.877 0 0 0 379.895 4.839 A 2.524 2.524 0 0 0 379.89 4.681 C 379.871 4.379 379.797 4.239 379.719 4.286 A 0.104 0.104 0 0 0 379.7 4.302 C 379.577 4.384 379.489 4.568 379.378 4.826 A 74.971 74.971 0 0 0 379.309 4.986 C 379.211 5.328 379.114 5.718 379.016 6.109 C 378.967 6.548 378.87 7.085 378.723 7.671 A 24.66 24.66 0 0 1 378.531 8.392 A 52.308 52.308 0 0 1 378.284 9.234 A 18.485 18.485 0 0 0 378.119 9.822 C 378.05 10.082 377.982 10.359 377.913 10.649 A 51.864 51.864 0 0 0 377.844 10.943 C 377.698 11.626 377.6 12.212 377.502 12.749 C 377.47 13.202 377.438 13.59 377.42 13.928 A 9.055 9.055 0 0 0 377.405 14.41 A 24.41 24.41 0 0 1 377.402 14.863 C 377.399 15.044 377.392 15.24 377.377 15.45 A 9.176 9.176 0 0 1 377.307 16.119 A 26.444 26.444 0 0 1 377.215 16.749 C 377.103 17.458 376.929 18.401 376.672 19.537 Z M 317.566 59.643 C 317.557 59.621 317.548 59.596 317.544 59.565 A 0.278 0.278 0 0 1 317.542 59.527 A 13.487 13.487 0 0 0 317.513 59.402 C 317.455 59.154 317.398 58.939 317.34 58.759 A 3.888 3.888 0 0 0 317.249 58.501 A 4.753 4.753 0 0 0 317.244 58.477 C 317.219 58.359 317.195 58.264 317.171 58.18 A 5.618 5.618 0 0 0 317.102 57.964 A 0.836 0.836 0 0 1 317.056 57.885 C 317.015 57.806 316.982 57.718 316.945 57.627 A 2.574 2.574 0 0 0 316.858 57.427 A 4.558 4.558 0 0 1 316.848 57.417 C 316.809 57.378 316.809 57.375 316.809 57.329 A 2.558 2.558 0 0 1 316.687 57.03 C 316.65 56.927 316.614 56.817 316.565 56.695 A 1.721 1.721 0 0 1 316.535 56.633 C 316.457 56.459 316.413 56.289 316.37 56.158 C 316.37 55.962 316.223 55.572 316.028 54.937 C 315.833 54.351 315.588 53.619 315.344 52.837 A 2193.943 2193.943 0 0 1 315.298 52.691 A 137.914 137.914 0 0 1 314.612 50.445 C 314.478 49.84 314.366 49.352 314.294 48.946 A 6.69 6.69 0 0 1 314.221 48.443 C 314.172 48.199 314.136 47.967 314.099 47.741 A 11.636 11.636 0 0 0 313.977 47.076 C 313.904 46.746 313.858 46.499 313.819 46.313 A 4.531 4.531 0 0 0 313.782 46.148 C 313.504 45.315 313.194 43.515 312.878 40.747 A 136.948 136.948 0 0 1 312.659 38.677 C 312.54 37.447 312.453 36.411 312.346 35.62 A 12.854 12.854 0 0 0 312.268 35.113 C 312.195 34.49 312.094 33.977 311.987 33.616 A 2.89 2.89 0 0 0 311.877 33.306 A 1.677 1.677 0 0 0 311.784 33.119 C 311.735 33.036 311.683 32.966 311.626 32.908 A 0.64 0.64 0 0 0 311.292 32.72 A 1.887 1.887 0 0 0 311.023 32.645 C 310.605 32.556 309.986 32.525 309.241 32.525 A 21.911 21.911 0 0 0 308.202 32.548 A 13.164 13.164 0 0 0 306.555 32.72 C 305.725 32.818 305.237 32.964 305.09 33.111 A 0.9 0.9 0 0 0 305.048 33.275 C 304.989 33.596 304.955 34.251 304.946 35.275 A 66.944 66.944 0 0 0 304.944 35.845 A 99.722 99.722 0 0 0 304.958 37.489 C 304.979 38.759 305.023 40.176 305.09 41.753 C 305.214 45.049 305.233 47.441 305.148 48.93 A 14.985 14.985 0 0 1 305.09 49.663 A 8.887 8.887 0 0 1 305.07 49.899 C 304.998 50.637 304.846 51.151 304.624 51.45 A 0.707 0.707 0 0 1 304.114 51.763 A 0.349 0.349 0 0 0 304.09 51.764 C 303.987 51.771 303.803 51.823 303.577 51.958 A 8.813 8.813 0 0 0 303.462 52.046 C 303.292 52.178 303.101 52.337 302.942 52.496 C 302.707 52.73 302.403 52.919 302.013 53.062 A 4.349 4.349 0 0 1 301.428 53.228 C 300.793 53.423 300.159 53.472 299.524 53.472 A 3.811 3.811 0 0 1 299.333 53.467 C 299.004 53.451 298.736 53.391 298.527 53.297 A 1.077 1.077 0 0 1 298.206 53.081 A 1.613 1.613 0 0 1 297.872 52.394 C 297.486 51.104 297.197 48.177 297.021 43.646 A 210.239 210.239 0 0 1 296.936 41.021 L 296.741 33.746 L 294.983 33.794 A 6.909 6.909 0 0 0 294.818 33.805 C 294.024 33.869 293.444 34.06 293.079 34.38 A 1.341 1.341 0 0 0 292.98 34.476 C 292.749 34.724 292.577 35.087 292.463 35.553 A 5.406 5.406 0 0 0 292.346 36.236 A 10.551 10.551 0 0 0 292.3 36.604 C 292.286 36.737 292.273 36.881 292.264 37.035 A 8.784 8.784 0 0 0 292.249 37.554 A 11.872 11.872 0 0 1 292.245 37.832 A 30.236 30.236 0 0 1 292.151 39.41 A 17.497 17.497 0 0 0 292.133 39.474 C 292.041 39.8 291.946 40.163 291.809 40.484 C 291.711 40.728 291.614 41.021 291.565 41.265 A 7.033 7.033 0 0 0 291.488 41.664 A 5.08 5.08 0 0 0 291.418 42.486 A 18.379 18.379 0 0 1 291.387 42.749 C 291.364 42.939 291.337 43.114 291.304 43.29 A 6.565 6.565 0 0 1 291.223 43.658 A 32.103 32.103 0 0 1 290.94 44.836 C 290.845 45.2 290.748 45.535 290.647 45.843 A 10.269 10.269 0 0 1 290.295 46.783 A 13.802 13.802 0 0 1 290.218 46.972 C 289.96 47.591 289.75 47.959 289.661 48.003 C 289.563 48.052 289.465 48.247 289.417 48.589 A 1.476 1.476 0 0 0 289.365 48.799 C 289.319 49.059 289.319 49.371 289.319 49.712 C 289.319 50.152 289.319 50.542 289.27 50.835 A 2.758 2.758 0 0 1 289.222 50.988 C 289.169 51.14 289.115 51.237 289.062 51.286 A 0.126 0.126 0 0 1 288.977 51.324 C 288.9 51.324 288.823 51.354 288.77 51.439 A 0.372 0.372 0 0 0 288.733 51.519 A 0.389 0.389 0 0 0 288.636 51.679 C 288.617 51.739 288.611 51.807 288.621 51.885 A 0.665 0.665 0 0 0 288.635 51.958 C 288.635 52.105 288.586 52.251 288.44 52.398 C 288.342 52.496 288.196 52.544 288.049 52.593 A 1.072 1.072 0 0 0 287.978 52.595 A 0.814 0.814 0 0 0 287.561 52.74 A 1.611 1.611 0 0 0 287.351 52.996 A 2.213 2.213 0 0 0 287.219 53.228 C 287.17 53.374 287.073 53.521 286.975 53.667 A 2.767 2.767 0 0 1 286.944 53.688 C 286.814 53.772 286.72 53.814 286.584 53.814 A 0.141 0.141 0 0 0 286.563 53.823 C 286.44 53.889 286.235 54.182 285.99 54.68 A 10.061 10.061 0 0 0 285.803 55.083 A 32.106 32.106 0 0 0 285.423 55.873 C 285.291 56.155 285.155 56.457 285.014 56.777 A 67.028 67.028 0 0 0 284.485 58.013 L 283.167 61.529 C 282.629 62.896 282.19 63.579 281.848 63.579 A 0.252 0.252 0 0 1 281.664 63.471 C 281.517 63.259 281.564 62.744 281.775 61.895 A 18.807 18.807 0 0 1 281.897 61.431 C 282.043 60.894 282.19 60.406 282.288 59.917 C 282.369 59.511 282.416 59.206 282.402 58.974 A 0.983 0.983 0 0 0 282.385 58.843 A 4.265 4.265 0 0 1 282.415 58.374 C 282.513 57.503 282.852 56.082 283.459 54.058 A 3.398 3.398 0 0 1 283.463 54.035 C 283.513 53.747 283.609 53.413 283.704 53.033 A 36.962 36.962 0 0 1 283.817 52.631 C 283.917 52.278 283.997 51.992 283.997 51.812 A 3.509 3.509 0 0 0 284.014 51.697 C 284.044 51.466 284.039 51.304 283.997 51.177 A 0.402 0.402 0 0 0 283.966 51.126 C 283.911 51.047 283.816 50.973 283.655 50.933 C 283.528 50.87 283.402 50.868 283.289 50.914 A 0.524 0.524 0 0 0 283.118 51.031 A 0.897 0.897 0 0 0 283.098 51.046 C 283.003 51.121 282.932 51.209 282.887 51.31 A 0.736 0.736 0 0 0 282.825 51.617 C 282.793 51.775 282.802 51.933 282.853 52.092 A 1.223 1.223 0 0 0 282.971 52.349 A 0.419 0.419 0 0 1 282.975 52.357 C 283.016 52.444 283.054 52.6 283.002 52.825 A 1.21 1.21 0 0 1 282.971 52.935 A 2.051 2.051 0 0 1 282.936 53.082 C 282.881 53.279 282.795 53.482 282.678 53.716 A 4.038 4.038 0 0 0 282.635 53.805 C 282.539 54.009 282.407 54.327 282.239 54.79 C 282.043 55.279 281.897 55.816 281.75 56.353 C 281.61 56.739 281.52 57.075 281.463 57.342 A 6.047 6.047 0 0 0 281.409 57.622 C 281.381 57.842 281.338 58.046 281.289 58.235 A 6.649 6.649 0 0 1 281.165 58.648 C 281.018 58.941 280.92 59.087 280.823 59.087 A 0.554 0.554 0 0 1 280.786 59.086 C 280.668 59.078 280.623 59.03 280.579 58.941 A 0.331 0.331 0 0 1 280.542 58.788 C 280.542 58.733 280.554 58.672 280.579 58.599 A 67.445 67.445 0 0 0 280.581 58.592 C 280.621 58.472 280.692 58.257 280.794 57.899 A 24.327 24.327 0 0 0 280.872 57.622 A 40.969 40.969 0 0 0 281.091 56.78 A 51.845 51.845 0 0 0 281.311 55.865 A 23.689 23.689 0 0 0 281.458 55.174 C 281.53 54.817 281.59 54.491 281.649 54.22 A 9.729 9.729 0 0 1 281.653 54.204 C 281.702 53.838 281.763 53.496 281.83 53.173 A 23.232 23.232 0 0 1 282.043 52.251 A 296.18 296.18 0 0 1 282.075 52.126 C 282.204 51.609 282.295 51.26 282.385 51.079 A 2.376 2.376 0 0 0 282.415 50.996 C 282.564 50.548 282.798 49.508 283.118 47.954 A 875.533 875.533 0 0 1 283.516 45.735 C 283.696 44.729 283.879 43.688 284.045 42.632 C 284.338 40.777 284.534 39.361 284.583 38.384 A 13.671 13.671 0 0 1 284.655 37.722 A 56.444 56.444 0 0 1 284.827 36.578 C 284.888 36.15 284.949 35.799 285.01 35.489 A 21.529 21.529 0 0 1 285.12 34.966 A 5.676 5.676 0 0 0 285.189 34.713 C 285.252 34.462 285.287 34.244 285.304 34.068 A 2.467 2.467 0 0 0 285.315 33.843 C 285.266 33.599 285.168 33.404 284.924 33.257 A 1.163 1.163 0 0 0 284.859 33.221 C 284.613 33.094 284.248 33.005 283.801 32.915 A 7.265 7.265 0 0 0 283.577 32.896 C 283.179 32.869 282.82 32.882 282.532 32.964 C 282.378 32.964 282.135 32.934 281.801 32.803 A 3.605 3.605 0 0 1 281.506 32.671 A 9.547 9.547 0 0 1 281.388 32.623 C 280.939 32.436 280.483 32.208 279.944 31.939 C 279.541 31.719 279.166 31.472 278.838 31.238 A 16.087 16.087 0 0 1 278.528 31.011 A 5.888 5.888 0 0 1 278.328 30.872 C 278.124 30.724 277.996 30.604 277.935 30.504 A 0.249 0.249 0 0 1 277.893 30.376 A 0.534 0.534 0 0 0 277.885 30.288 C 277.863 30.162 277.801 29.976 277.7 29.729 A 9.441 9.441 0 0 0 277.6 29.497 A 8.428 8.428 0 0 0 277.539 29.303 A 9.289 9.289 0 0 0 277.014 28.033 C 276.736 27.538 276.556 27.103 276.448 26.713 A 3.613 3.613 0 0 1 276.331 26.079 C 276.282 25.591 276.331 24.81 276.526 23.785 C 276.649 22.961 276.808 22.38 276.942 22.043 A 2.129 2.129 0 0 1 277.014 21.88 A 0.932 0.932 0 0 1 277.049 21.808 C 277.115 21.684 277.204 21.589 277.308 21.522 A 0.891 0.891 0 0 1 277.795 21.392 C 277.975 21.392 278.128 21.392 278.293 21.411 A 2.315 2.315 0 0 1 278.479 21.441 C 278.584 21.467 278.675 21.493 278.752 21.527 A 0.536 0.536 0 0 1 278.918 21.636 C 279.139 21.82 279.58 22.003 280.2 22.208 A 26.65 26.65 0 0 0 280.872 22.417 A 16.805 16.805 0 0 0 283.997 23.003 L 285.999 23.247 L 285.706 21.685 C 285.654 21.451 285.602 21.177 285.557 20.875 A 12.291 12.291 0 0 1 285.461 20.025 A 274.826 274.826 0 0 0 285.379 18.971 A 76.755 76.755 0 0 0 285.315 18.218 C 285.281 17.378 285.155 16.699 284.936 16.215 A 1.793 1.793 0 0 0 284.583 15.679 A 3.881 3.881 0 0 1 284.261 15.317 C 284.158 15.184 284.071 15.052 284.003 14.924 A 1.869 1.869 0 0 1 283.85 14.556 C 283.763 14.324 283.745 14.127 283.785 13.974 A 0.443 0.443 0 0 1 283.948 13.726 A 0.435 0.435 0 0 1 283.993 13.707 C 284.111 13.664 284.346 13.616 284.729 13.531 C 285.168 13.433 285.657 13.335 286.243 13.238 C 287.578 13.053 288.262 13.086 288.213 13.378 A 0.246 0.246 0 0 1 288.196 13.433 C 288.196 13.579 288.245 13.726 288.44 13.824 C 288.546 13.895 288.679 13.966 288.855 14.018 A 1.84 1.84 0 0 0 289.075 14.068 C 289.514 14.117 290.002 14.312 290.637 14.605 A 12.519 12.519 0 0 1 292.346 15.679 A 8.087 8.087 0 0 1 292.537 15.822 C 292.813 16.036 293.029 16.233 293.193 16.416 A 2.536 2.536 0 0 1 293.42 16.704 A 3.079 3.079 0 0 1 293.474 16.851 C 293.547 17.063 293.636 17.383 293.729 17.835 A 15.84 15.84 0 0 1 293.811 18.267 A 44.258 44.258 0 0 1 293.884 18.664 C 294.005 19.344 294.12 20.097 294.202 20.953 L 294.592 24.468 L 296.057 24.419 A 7.979 7.979 0 0 0 296.367 24.414 C 296.785 24.398 297.08 24.343 297.278 24.224 C 297.522 24.126 297.668 23.833 297.815 23.394 A 11.163 11.163 0 0 0 297.899 22.915 C 297.944 22.621 297.989 22.272 298.035 21.863 A 47.036 47.036 0 0 0 298.108 21.148 A 11.469 11.469 0 0 1 298.14 20.841 A 30.483 30.483 0 0 1 298.352 19.439 C 298.45 18.804 298.596 18.267 298.694 17.876 A 1.178 1.178 0 0 0 298.708 17.832 C 298.723 17.778 298.733 17.73 298.743 17.687 A 0.637 0.637 0 0 1 298.792 17.535 A 11.49 11.49 0 0 0 298.914 17.143 C 298.994 16.871 299.051 16.644 299.084 16.509 A 28.787 28.787 0 0 1 299.176 16.063 A 7.893 7.893 0 0 1 299.231 15.826 A 5.202 5.202 0 0 0 299.272 15.642 C 299.297 15.524 299.325 15.384 299.361 15.221 A 11.083 11.083 0 0 1 299.426 14.947 C 299.426 14.913 299.426 14.858 299.442 14.795 A 0.437 0.437 0 0 1 299.475 14.703 A 3.475 3.475 0 0 1 299.502 14.524 C 299.524 14.398 299.553 14.283 299.587 14.177 A 1.927 1.927 0 0 1 299.768 13.775 A 1.956 1.956 0 0 1 299.799 13.687 C 299.887 13.462 299.974 13.384 300.061 13.384 A 0.216 0.216 0 0 1 300.115 13.39 C 300.177 13.406 300.208 13.453 300.208 13.531 C 300.256 13.628 300.256 13.775 300.208 13.921 A 0.628 0.628 0 0 0 300.194 13.967 C 300.159 14.107 300.164 14.278 300.208 14.41 C 300.256 14.556 300.305 14.703 300.452 14.751 A 1.139 1.139 0 0 0 300.562 14.82 C 300.929 15.019 301.198 14.854 301.296 14.349 A 2.211 2.211 0 0 0 301.331 14.068 A 2.545 2.545 0 0 0 301.341 14.037 C 301.359 13.981 301.377 13.918 301.395 13.852 A 16.923 16.923 0 0 0 301.477 13.531 A 1.125 1.125 0 0 1 301.509 13.426 C 301.541 13.336 301.58 13.257 301.615 13.181 A 1.367 1.367 0 0 0 301.672 13.042 A 0.716 0.716 0 0 0 301.701 12.995 C 301.758 12.893 301.797 12.769 301.83 12.61 A 4.97 4.97 0 0 0 301.868 12.408 A 1.532 1.532 0 0 0 301.869 12.403 C 301.933 12.209 301.955 12.015 301.976 11.822 A 5.408 5.408 0 0 1 302.014 11.529 A 3.043 3.043 0 0 1 302.029 11.236 C 302.039 11.129 302.055 11.026 302.072 10.933 A 3.11 3.11 0 0 1 302.112 10.747 A 12.512 12.512 0 0 1 302.143 10.685 C 302.221 10.531 302.269 10.454 302.356 10.454 A 0.015 0.015 0 0 1 302.358 10.455 C 302.4 10.46 302.442 10.646 302.484 10.983 A 11.272 11.272 0 0 1 302.502 11.138 C 302.551 11.626 302.551 12.212 302.502 12.896 A 29.605 29.605 0 0 0 302.496 13.141 C 302.472 14.254 302.525 14.926 302.657 15.176 A 0.168 0.168 0 0 0 302.795 15.288 C 302.872 15.288 302.95 15.258 303.027 15.173 A 0.678 0.678 0 0 0 303.088 15.093 C 303.186 14.947 303.186 14.8 303.235 14.556 A 2.347 2.347 0 0 1 303.236 14.481 C 303.246 14.165 303.326 14.234 303.476 14.687 A 8.083 8.083 0 0 1 303.528 14.849 A 2.502 2.502 0 0 0 303.609 15.06 C 303.675 15.21 303.748 15.34 303.812 15.442 A 3.359 3.359 0 0 0 303.87 15.533 A 0.99 0.99 0 0 0 303.883 15.55 C 303.984 15.679 304.084 15.739 304.167 15.763 A 0.334 0.334 0 0 0 304.26 15.777 A 0.181 0.181 0 0 1 304.358 15.804 C 304.432 15.85 304.488 15.958 304.527 16.148 A 2.24 2.24 0 0 1 304.553 16.314 C 304.614 16.527 304.656 16.817 304.691 17.148 A 29.627 29.627 0 0 1 304.749 17.779 A 75.256 75.256 0 0 0 304.809 19.429 C 304.834 19.947 304.864 20.432 304.899 20.886 A 34.55 34.55 0 0 0 305.042 22.369 C 305.121 23.321 305.232 23.951 305.35 24.206 A 0.281 0.281 0 0 0 305.432 24.322 C 305.53 24.419 305.579 24.517 305.579 24.761 A 1.168 1.168 0 0 1 305.605 24.907 C 305.618 25.021 305.619 25.148 305.605 25.289 A 2.869 2.869 0 0 1 305.579 25.494 A 1.969 1.969 0 0 0 305.563 25.56 C 305.487 25.917 305.538 26.186 305.676 26.324 C 305.823 26.47 306.165 26.617 306.75 26.665 A 6.467 6.467 0 0 1 306.89 26.688 C 307.675 26.823 307.908 27.029 307.588 27.24 A 1.013 1.013 0 0 1 307.483 27.3 A 1.965 1.965 0 0 1 307.227 27.464 A 1.455 1.455 0 0 1 306.897 27.593 A 3.371 3.371 0 0 1 306.812 27.626 C 306.606 27.702 306.434 27.74 306.262 27.74 A 0.682 0.682 0 0 0 305.959 27.846 C 305.776 27.966 305.641 28.182 305.539 28.494 A 3.678 3.678 0 0 0 305.432 28.912 A 3.426 3.426 0 0 0 305.409 29.076 C 305.382 29.311 305.374 29.534 305.334 29.693 L 305.334 30.083 A 0.084 0.084 0 0 1 305.336 30.083 C 305.382 30.084 305.648 30.121 306.103 30.13 A 10.218 10.218 0 0 0 306.311 30.132 C 306.897 30.132 307.629 30.181 308.508 30.181 L 311.633 30.23 L 311.731 28.912 A 5.115 5.115 0 0 0 311.732 28.898 C 311.769 28.478 311.746 28.148 311.687 27.934 A 0.805 0.805 0 0 0 311.633 27.788 A 0.729 0.729 0 0 0 311.445 27.522 C 311.316 27.403 311.135 27.31 310.901 27.251 C 310.544 27.132 310.316 27.046 310.243 26.991 A 0.05 0.05 0 0 1 310.217 26.958 A 0.074 0.074 0 0 1 310.218 26.946 C 310.231 26.869 310.365 26.791 310.619 26.688 A 7.557 7.557 0 0 1 310.803 26.617 A 1.238 1.238 0 0 0 310.997 26.563 A 0.597 0.597 0 0 0 311.34 26.275 C 311.414 26.165 311.459 26 311.498 25.78 A 7.3 7.3 0 0 0 311.536 25.542 A 34.756 34.756 0 0 0 311.535 25.218 C 311.533 25.017 311.528 24.782 311.515 24.506 A 19.309 19.309 0 0 0 311.487 24.029 C 311.389 22.369 311.438 20.611 311.584 18.706 C 311.722 17.402 311.883 16.29 312.086 15.406 A 9.391 9.391 0 0 1 312.366 14.41 C 312.476 14.117 312.585 13.824 312.675 13.592 A 19.018 19.018 0 0 1 312.756 13.384 A 6.532 6.532 0 0 0 312.759 13.38 C 312.871 13.155 312.925 13.018 312.966 12.967 A 0.048 0.048 0 0 1 313 12.945 C 314.076 12.687 314.924 12.58 315.544 12.592 A 4.138 4.138 0 0 1 315.784 12.603 A 4.061 4.061 0 0 1 316.087 12.662 C 316.494 12.757 316.958 12.924 317.5 13.173 A 15.711 15.711 0 0 1 318.225 13.531 C 320.276 14.507 321.448 15.288 321.79 15.923 A 1.343 1.343 0 0 1 321.884 16.17 C 322.029 16.702 321.889 17.4 321.463 18.264 A 9.554 9.554 0 0 1 321.057 18.999 A 8.11 8.11 0 0 0 321.025 19.064 C 320.697 19.735 320.416 20.542 320.227 21.441 C 320.081 22.137 319.989 23.107 319.952 24.352 A 45.622 45.622 0 0 0 319.934 25.689 C 319.885 27.642 319.934 30.376 320.032 33.941 C 320.142 40.052 320.419 44.691 320.842 47.902 A 30.466 30.466 0 0 0 321.301 50.591 A 5.312 5.312 0 0 0 321.305 50.614 C 321.354 50.953 321.451 51.384 321.594 51.91 A 34.42 34.42 0 0 0 321.704 52.533 A 66.912 66.912 0 0 0 321.887 53.472 A 6.717 6.717 0 0 0 321.926 53.653 A 12.556 12.556 0 0 0 322.278 54.839 A 7.14 7.14 0 0 0 322.32 54.95 C 322.407 55.169 322.493 55.355 322.58 55.506 A 2.042 2.042 0 0 0 322.717 55.718 C 322.794 55.833 322.929 56.156 323.102 56.641 A 24.363 24.363 0 0 1 323.254 57.085 A 1511.17 1511.17 0 0 0 323.409 57.661 C 323.489 57.96 323.572 58.277 323.654 58.606 A 28.845 28.845 0 0 1 323.889 59.624 A 176.485 176.485 0 0 1 324.052 60.283 C 324.126 60.584 324.196 60.869 324.263 61.142 A 58.893 58.893 0 0 0 324.524 62.163 A 51.543 51.543 0 0 0 324.568 62.295 C 324.735 62.792 324.853 63.115 324.941 63.301 A 1.054 1.054 0 0 0 325.012 63.433 A 0.977 0.977 0 0 1 325.099 63.591 A 0.712 0.712 0 0 1 325.159 63.872 C 325.159 64.027 325.128 64.15 325.067 64.292 A 2.281 2.281 0 0 1 325.012 64.41 C 324.836 64.762 324.659 64.797 324.519 64.44 A 1.624 1.624 0 0 1 324.475 64.312 A 3.015 3.015 0 0 0 324.452 64.267 A 1.706 1.706 0 0 0 324.133 63.824 C 323.993 63.753 323.878 63.708 323.752 63.689 A 0.998 0.998 0 0 0 323.596 63.677 A 0.724 0.724 0 0 1 323.512 63.672 C 323.44 63.664 323.371 63.646 323.31 63.624 A 0.948 0.948 0 0 1 323.206 63.579 A 0.801 0.801 0 0 1 323.18 63.562 C 323.115 63.515 323.072 63.468 323.046 63.421 A 0.268 0.268 0 0 1 323.01 63.287 C 323.01 63.208 323.024 63.158 323.045 63.12 A 0.337 0.337 0 0 1 323.108 63.042 A 0.366 0.366 0 0 1 323.138 63.029 C 323.21 63.001 323.281 63.002 323.353 63.051 A 0.34 0.34 0 0 1 323.401 63.091 A 0.41 0.41 0 0 0 323.456 63.114 A 0.739 0.739 0 0 0 323.694 63.14 C 323.743 63.091 323.792 62.994 323.792 62.896 A 0.615 0.615 0 0 0 323.791 62.866 C 323.789 62.828 323.783 62.793 323.774 62.762 A 0.248 0.248 0 0 0 323.645 62.603 A 0.239 0.239 0 0 0 323.564 62.51 C 323.534 62.49 323.499 62.475 323.458 62.467 A 0.507 0.507 0 0 0 323.352 62.456 A 1.738 1.738 0 0 1 323.26 62.455 C 323.23 62.453 323.202 62.45 323.177 62.444 A 0.148 0.148 0 0 1 323.108 62.408 A 0.987 0.987 0 0 0 323.086 62.366 C 323.075 62.347 323.065 62.329 323.055 62.313 A 0.773 0.773 0 0 1 323.055 62.312 A 1.021 1.021 0 0 1 323.054 62.311 M 342.981 36.578 L 343.958 34.478 L 344.446 35.992 A 11.542 11.542 0 0 1 344.611 36.467 A 41.333 41.333 0 0 1 344.885 37.359 C 344.952 37.692 345.018 38.002 345.07 38.274 A 8.319 8.319 0 0 1 345.129 38.628 C 345.177 38.958 345.315 39.561 345.587 40.349 A 15.735 15.735 0 0 0 345.618 40.435 C 345.862 41.265 346.155 42.144 346.497 43.072 A 93.243 93.243 0 0 1 347.015 44.53 A 130.444 130.444 0 0 0 347.571 46.099 C 347.913 47.222 348.206 48.15 348.45 48.882 C 348.694 49.663 348.987 50.542 349.329 51.568 A 157.562 157.562 0 0 1 349.846 52.877 C 350.006 53.288 350.156 53.678 350.295 54.048 A 93.748 93.748 0 0 1 350.354 54.204 A 47.68 47.68 0 0 1 350.842 55.376 A 47.68 47.68 0 0 0 351.331 56.548 A 207.965 207.965 0 0 0 351.54 57.105 C 351.735 57.619 351.897 58.042 352.006 58.334 A 49.529 49.529 0 0 1 352.014 58.355 A 43.661 43.661 0 0 0 352.591 59.702 C 353.068 60.77 353.668 62.008 354.407 63.384 A 105.921 105.921 0 0 0 355.579 65.568 C 356.213 66.712 356.824 67.742 357.434 68.658 A 26.633 26.633 0 0 0 357.87 69.308 C 358.292 69.918 358.632 70.342 358.89 70.602 A 3.413 3.413 0 0 0 358.899 70.611 A 2.093 2.093 0 0 0 359.066 70.782 C 359.337 71.029 359.574 71.083 359.778 71.001 A 3.598 3.598 0 0 1 360.446 70.757 C 360.962 70.618 361.595 70.53 362.317 70.464 A 0.519 0.519 0 0 0 362.428 70.407 C 362.589 70.304 362.828 70.079 363.098 69.732 C 363.391 69.366 363.657 68.999 363.936 68.592 A 39.712 39.712 0 0 0 364.221 68.169 A 14.363 14.363 0 0 0 364.539 67.598 C 364.719 67.253 364.857 66.944 364.954 66.656 A 0.772 0.772 0 0 0 365.006 66.403 C 365.013 66.251 364.987 66.081 364.942 65.884 A 7.043 7.043 0 0 0 364.905 65.728 A 5.231 5.231 0 0 0 364.736 65.295 C 364.623 65.037 364.476 64.737 364.294 64.385 A 53.668 53.668 0 0 0 364.026 63.872 C 363.689 63.237 363.21 62.43 362.587 61.429 A 143.604 143.604 0 0 0 361.975 60.454 A 15.611 15.611 0 0 1 361.533 59.681 C 361.409 59.451 361.283 59.208 361.154 58.953 A 128.432 128.432 0 0 1 360.754 58.16 A 81.946 81.946 0 0 0 360.744 58.138 C 360.309 57.22 359.922 56.445 359.631 55.718 A 32.132 32.132 0 0 0 359.167 54.571 A 32.132 32.132 0 0 1 358.704 53.423 C 358.444 52.868 358.241 52.368 358.073 51.968 A 18.849 18.849 0 0 0 357.922 51.617 A 7.033 7.033 0 0 1 357.521 50.723 C 357.489 50.642 357.458 50.559 357.425 50.475 A 21.852 21.852 0 0 0 357.336 50.249 A 8.107 8.107 0 0 1 357.186 49.84 C 357.098 49.58 357.034 49.356 356.975 49.167 A 5.954 5.954 0 0 0 356.946 49.078 A 2.243 2.243 0 0 0 356.765 48.532 A 9.543 9.543 0 0 0 356.604 48.199 A 3.177 3.177 0 0 0 356.48 47.974 C 356.377 47.803 356.274 47.674 356.17 47.569 A 1.859 1.859 0 0 0 356.165 47.564 A 1.176 1.176 0 0 1 355.964 47.394 C 355.894 47.321 355.83 47.234 355.779 47.134 A 1.093 1.093 0 0 1 355.774 47.124 C 355.677 46.979 355.628 46.785 355.627 46.687 A 0.29 0.29 0 0 1 355.627 46.685 A 0.817 0.817 0 0 0 355.613 46.539 C 355.59 46.41 355.535 46.242 355.432 46.001 A 3.951 3.951 0 0 0 355.32 45.67 C 355.256 45.503 355.183 45.336 355.109 45.149 A 8.823 8.823 0 0 1 355.042 44.976 A 4.903 4.903 0 0 1 354.728 44.297 A 11.791 11.791 0 0 1 354.553 43.804 A 22.76 22.76 0 0 1 354.452 43.455 C 354.373 43.178 354.309 42.935 354.248 42.713 A 17.614 17.614 0 0 0 354.211 42.583 A 5.536 5.536 0 0 0 354.052 41.801 A 8.473 8.473 0 0 0 353.918 41.363 A 6.638 6.638 0 0 0 353.738 40.889 C 353.648 40.674 353.554 40.473 353.472 40.286 A 10.091 10.091 0 0 1 353.43 40.191 C 352.9 39.171 352.302 37.743 351.635 35.906 A 85.772 85.772 0 0 1 351.233 34.771 A 117.798 117.798 0 0 1 349.245 28.122 A 73.56 73.56 0 0 1 349.133 27.691 C 348.662 25.988 348.379 24.634 348.245 23.63 A 10.924 10.924 0 0 1 348.157 22.71 A 5.285 5.285 0 0 1 348.445 21.062 A 9.384 9.384 0 0 1 348.792 20.171 A 11.508 11.508 0 0 1 349.119 19.528 C 349.343 19.12 349.558 18.791 349.744 18.531 A 9.141 9.141 0 0 1 349.866 18.365 A 2.63 2.63 0 0 0 350.089 18.037 C 350.183 17.873 350.267 17.687 350.327 17.487 A 2.323 2.323 0 0 0 350.354 17.388 A 3.879 3.879 0 0 0 350.431 16.877 C 350.452 16.639 350.452 16.419 350.452 16.216 C 350.418 15.977 350.336 15.834 350.223 15.769 A 0.32 0.32 0 0 0 350.061 15.728 C 349.984 15.728 349.907 15.667 349.807 15.57 A 7.196 7.196 0 0 1 349.719 15.484 A 1.206 1.206 0 0 1 349.511 15.193 C 349.47 15.115 349.431 15.03 349.394 14.938 A 5.202 5.202 0 0 1 349.377 14.898 A 3.322 3.322 0 0 0 349.085 14.417 C 348.988 14.284 348.875 14.152 348.743 14.019 A 1.353 1.353 0 0 0 348.368 13.762 C 348.158 13.662 347.906 13.588 347.62 13.531 A 6.832 6.832 0 0 1 345.202 12.794 A 8.577 8.577 0 0 1 344.934 12.652 C 344.149 12.19 343.626 11.684 343.365 11.217 A 1.95 1.95 0 0 1 343.323 11.138 C 343.222 10.802 343.029 10.582 342.791 10.477 A 0.856 0.856 0 0 0 342.444 10.406 A 1.112 1.112 0 0 0 341.946 10.513 C 341.794 10.588 341.664 10.704 341.561 10.864 A 1.318 1.318 0 0 0 341.467 11.04 C 341.388 11.238 341.31 11.626 341.256 12.283 A 16.821 16.821 0 0 0 341.223 12.798 C 341.125 13.726 341.077 14.8 341.077 16.021 A 1.576 1.576 0 0 0 341.045 16.183 C 341.035 16.251 341.031 16.313 341.029 16.373 A 4.423 4.423 0 0 0 341.028 16.509 L 341.028 16.753 L 341.028 16.9 L 341.077 16.949 L 341.125 16.997 L 341.125 17.046 C 341.125 17.046 341.125 17.095 341.077 17.095 L 341.077 17.242 A 0.322 0.322 0 0 1 341.061 17.27 C 341.017 17.339 340.974 17.334 340.93 17.29 A 0.387 0.387 0 0 1 340.812 17.191 C 340.774 17.148 340.737 17.098 340.688 17.048 A 0.855 0.855 0 0 0 340.686 17.046 A 0.765 0.765 0 0 0 340.622 16.909 C 340.576 16.827 340.523 16.752 340.491 16.656 L 340.198 16.216 C 340.151 16.123 340.06 16.03 340.01 16.022 A 0.043 0.043 0 0 0 340.002 16.021 A 0.081 0.081 0 0 0 339.989 16.01 C 339.945 15.982 339.905 16.034 339.905 16.167 A 9.865 9.865 0 0 0 339.828 16.832 C 339.792 17.252 339.77 17.749 339.762 18.336 A 39.924 39.924 0 0 0 339.758 18.902 A 854.933 854.933 0 0 0 339.832 20.69 A 504.962 504.962 0 0 0 339.905 22.369 A 43.738 43.738 0 0 0 339.969 23.049 C 340.029 23.637 340.09 24.071 340.15 24.34 A 1.871 1.871 0 0 0 340.198 24.517 C 340.392 25.051 339.958 27.179 338.945 30.852 A 150.646 150.646 0 0 1 338.928 30.913 A 95.499 95.499 0 0 0 338.918 30.951 C 338.651 31.931 338.42 32.838 338.203 33.662 A 58.278 58.278 0 0 1 337.805 35.113 A 116.475 116.475 0 0 0 337.702 35.545 C 337.525 36.297 337.418 36.791 337.38 37.029 A 1.003 1.003 0 0 0 337.366 37.163 C 337.366 37.31 337.366 37.456 337.268 37.554 A 0.841 0.841 0 0 1 337.2 37.674 C 337.167 37.718 337.128 37.749 337.073 37.749 C 336.926 37.749 336.78 38.189 336.487 39.068 A 27.561 27.561 0 0 0 336.256 40.022 C 336.085 40.782 335.907 41.674 335.706 42.681 C 335.665 42.804 335.624 42.96 335.583 43.122 A 62.233 62.233 0 0 0 335.559 43.218 A 4.053 4.053 0 0 0 335.484 43.423 C 335.44 43.553 335.408 43.665 335.378 43.759 A 2.977 2.977 0 0 1 335.364 43.804 C 335.168 44.244 334.778 45.415 334.143 47.369 A 413.823 413.823 0 0 1 333.167 50.31 A 146.227 146.227 0 0 0 332.19 53.326 A 190.771 190.771 0 0 0 331.75 54.662 C 331.39 55.767 331.128 56.614 330.964 57.192 A 20.336 20.336 0 0 0 330.872 57.525 C 330.872 57.569 330.832 57.651 330.824 57.703 A 0.109 0.109 0 0 0 330.823 57.72 A 18.834 18.834 0 0 0 330.697 58.113 C 330.623 58.352 330.566 58.552 330.515 58.723 A 8.484 8.484 0 0 1 330.432 58.99 C 330.39 59.199 330.312 59.409 330.26 59.557 A 4.244 4.244 0 0 0 330.237 59.624 C 330.193 59.755 330.15 59.925 330.071 60.099 A 1.721 1.721 0 0 1 330.042 60.162 L 330.042 60.259 C 329.785 60.9 329.641 61.317 329.609 61.607 A 1.068 1.068 0 0 0 329.602 61.724 C 329.563 61.917 329.617 62.049 329.762 62.145 A 0.753 0.753 0 0 0 329.895 62.212 A 0.63 0.63 0 0 1 329.946 62.235 C 330.11 62.318 330.025 62.396 329.72 62.407 A 2.096 2.096 0 0 1 329.651 62.408 C 329.407 62.408 329.211 62.554 329.114 62.847 A 4.155 4.155 0 0 0 329.082 63.088 C 329.052 63.371 329.027 63.792 329.019 64.337 A 24.788 24.788 0 0 0 329.016 64.703 A 18.047 18.047 0 0 1 329.001 65.396 C 328.989 65.695 328.975 65.982 328.969 66.257 A 10.484 10.484 0 0 0 328.967 66.46 A 25.479 25.479 0 0 1 328.935 66.817 C 328.904 67.139 328.872 67.38 328.841 67.541 A 1.845 1.845 0 0 1 328.821 67.632 A 1.628 1.628 0 0 0 328.807 67.685 C 328.743 67.941 328.882 67.749 329.224 67.071 A 24.656 24.656 0 0 0 329.26 66.997 A 18.926 18.926 0 0 1 329.414 66.733 C 329.575 66.463 329.749 66.18 329.895 65.923 C 330.066 65.624 330.237 65.4 330.375 65.251 A 2.097 2.097 0 0 1 330.432 65.191 C 330.568 65.054 330.663 64.834 330.793 64.567 A 8.537 8.537 0 0 1 330.823 64.507 A 2.404 2.404 0 0 0 331.116 63.677 A 38.974 38.974 0 0 1 331.236 63.247 C 331.348 62.853 331.485 62.399 331.661 61.884 A 26.7 26.7 0 0 1 331.75 61.626 A 54.864 54.864 0 0 1 332.3 60.219 A 46.133 46.133 0 0 1 332.629 59.429 C 332.971 58.794 333.167 58.404 333.264 58.306 A 0.133 0.133 0 0 0 333.319 58.295 C 333.38 58.268 333.411 58.198 333.411 58.16 C 333.445 58.091 333.431 58.023 333.403 57.954 A 1.326 1.326 0 0 0 333.362 57.867 C 333.321 57.703 333.383 57.298 333.549 56.594 A 32.386 32.386 0 0 1 333.655 56.158 A 86.818 86.818 0 0 1 334.044 54.723 A 51.109 51.109 0 0 1 334.534 53.081 A 54.999 54.999 0 0 1 334.782 52.286 C 335.022 51.537 335.242 50.933 335.461 50.494 C 335.608 50.201 335.754 49.761 335.95 49.126 C 336.145 48.492 336.34 47.857 336.487 47.271 C 336.628 46.66 336.724 46.23 336.774 45.937 A 5.852 5.852 0 0 0 336.78 45.904 C 336.78 45.806 336.877 45.562 337.024 45.22 A 6.269 6.269 0 0 1 337.18 44.748 A 6.751 6.751 0 0 1 337.463 44.097 C 337.659 43.658 337.805 43.218 337.952 42.828 C 338.072 42.465 338.16 42.169 338.214 41.94 A 4.012 4.012 0 0 0 338.245 41.802 A 1.672 1.672 0 0 1 338.327 41.273 A 1.22 1.22 0 0 1 338.391 41.119 A 4.164 4.164 0 0 1 338.438 40.908 C 338.475 40.763 338.519 40.649 338.586 40.581 C 338.627 40.5 338.702 40.35 338.754 40.132 A 2.017 2.017 0 0 0 338.782 39.996 A 4.975 4.975 0 0 0 338.922 39.599 A 3.446 3.446 0 0 0 339.026 39.165 C 339.101 38.941 339.175 38.745 339.25 38.578 A 3.759 3.759 0 0 1 339.319 38.433 C 339.435 38.239 339.521 38.137 339.6 38.104 A 0.154 0.154 0 0 1 339.661 38.091 A 0.075 0.075 0 0 1 339.734 38.151 C 339.753 38.204 339.757 38.292 339.758 38.415 A 15.263 15.263 0 0 1 339.758 38.531 A 5.321 5.321 0 0 1 339.698 38.832 C 339.671 38.952 339.638 39.082 339.599 39.22 A 9.75 9.75 0 0 1 339.465 39.654 A 85.525 85.525 0 0 0 339.252 40.227 C 339.218 40.319 339.186 40.407 339.156 40.491 A 13.331 13.331 0 0 0 339.075 40.728 A 8.256 8.256 0 0 0 339.025 40.882 C 338.965 41.076 338.932 41.208 338.929 41.256 A 0.112 0.112 0 0 0 338.928 41.265 A 2.969 2.969 0 0 1 338.928 41.335 C 338.925 41.455 338.911 41.666 338.838 41.966 A 4.057 4.057 0 0 1 338.831 41.997 A 12.613 12.613 0 0 1 338.66 42.589 C 338.606 42.766 338.553 42.947 338.508 43.136 A 5.449 5.449 0 0 0 338.489 43.218 A 81.433 81.433 0 0 1 338.486 43.225 C 338.352 43.583 338.259 43.817 338.208 43.965 A 2.808 2.808 0 0 0 338.196 43.999 A 0.431 0.431 0 0 0 338.115 44.12 C 338.067 44.222 338.034 44.355 338 44.488 C 337.952 44.732 337.952 44.976 337.952 45.22 A 5.104 5.104 0 0 0 337.95 45.227 C 337.912 45.381 337.873 45.565 337.81 45.78 A 4.828 4.828 0 0 1 337.756 45.953 A 3.859 3.859 0 0 1 337.498 46.511 A 1.496 1.496 0 0 1 337.415 46.636 C 337.073 47.027 336.975 47.808 337.122 48.98 C 337.172 49.295 337.196 49.601 337.196 49.899 A 5.818 5.818 0 0 1 336.633 52.349 C 336.445 52.773 336.256 53.288 336.112 53.85 A 9.289 9.289 0 0 0 336.096 53.912 C 335.901 54.546 335.803 55.132 335.706 55.621 A 37.786 37.786 0 0 0 335.688 55.796 C 335.61 56.619 335.614 56.903 335.7 56.57 A 2.636 2.636 0 0 0 335.706 56.548 A 3.253 3.253 0 0 0 335.709 56.541 C 335.803 56.352 335.898 56.116 336.037 55.836 A 7.369 7.369 0 0 1 336.047 55.816 A 3.06 3.06 0 0 1 336.302 55.265 A 11.684 11.684 0 0 1 336.438 55.035 A 2.227 2.227 0 0 0 336.619 54.767 C 336.734 54.569 336.85 54.32 336.965 54.02 A 9.096 9.096 0 0 0 337.024 53.863 C 337.268 53.326 337.512 52.74 337.708 52.154 A 14.546 14.546 0 0 0 337.901 51.661 C 338.044 51.278 338.203 50.822 338.387 50.305 A 105.107 105.107 0 0 1 338.635 49.615 A 216.548 216.548 0 0 1 339.807 46.49 A 46.952 46.952 0 0 0 340.604 44.244 A 35.122 35.122 0 0 0 340.833 43.511 A 22.474 22.474 0 0 0 341.02 42.887 C 341.132 42.494 341.211 42.167 341.262 41.894 A 5.204 5.204 0 0 0 341.321 41.509 A 12.568 12.568 0 0 1 341.466 40.465 A 4.753 4.753 0 0 1 341.516 40.24 C 341.59 39.943 341.692 39.619 341.844 39.245 A 9.801 9.801 0 0 1 342.004 38.872 A 13.602 13.602 0 0 1 342.178 38.425 C 342.377 37.933 342.651 37.31 342.981 36.578 Z M 471.985 36.578 L 472.961 34.478 L 473.45 35.992 A 11.542 11.542 0 0 1 473.615 36.467 A 41.333 41.333 0 0 1 473.889 37.359 C 473.956 37.692 474.022 38.002 474.073 38.274 A 8.319 8.319 0 0 1 474.133 38.628 C 474.18 38.958 474.318 39.561 474.591 40.349 A 15.735 15.735 0 0 0 474.622 40.435 C 474.866 41.265 475.159 42.144 475.5 43.072 A 93.243 93.243 0 0 1 476.019 44.53 A 130.444 130.444 0 0 0 476.575 46.099 C 476.917 47.222 477.209 48.15 477.454 48.882 C 477.698 49.663 477.991 50.542 478.333 51.568 A 157.562 157.562 0 0 1 478.85 52.877 C 479.01 53.288 479.16 53.678 479.299 54.048 A 93.748 93.748 0 0 1 479.358 54.204 A 47.68 47.68 0 0 1 479.846 55.376 A 47.68 47.68 0 0 0 480.334 56.548 A 207.965 207.965 0 0 0 480.544 57.105 C 480.739 57.619 480.901 58.042 481.01 58.334 A 49.529 49.529 0 0 1 481.018 58.355 A 43.661 43.661 0 0 0 481.595 59.702 C 482.072 60.77 482.672 62.008 483.411 63.384 A 105.921 105.921 0 0 0 484.583 65.568 C 485.217 66.712 485.828 67.742 486.438 68.658 A 26.633 26.633 0 0 0 486.873 69.308 C 487.296 69.918 487.636 70.342 487.894 70.602 A 3.413 3.413 0 0 0 487.903 70.611 A 2.093 2.093 0 0 0 488.07 70.782 C 488.341 71.029 488.578 71.083 488.782 71.001 A 3.598 3.598 0 0 1 489.45 70.757 C 489.965 70.618 490.599 70.53 491.321 70.464 A 0.519 0.519 0 0 0 491.432 70.407 C 491.593 70.304 491.832 70.079 492.102 69.732 C 492.395 69.366 492.661 68.999 492.94 68.592 A 39.712 39.712 0 0 0 493.225 68.169 A 14.363 14.363 0 0 0 493.543 67.598 C 493.723 67.253 493.861 66.944 493.958 66.656 A 0.772 0.772 0 0 0 494.01 66.403 C 494.017 66.251 493.99 66.081 493.946 65.884 A 7.043 7.043 0 0 0 493.909 65.728 A 5.231 5.231 0 0 0 493.739 65.295 C 493.627 65.037 493.48 64.737 493.298 64.385 A 53.668 53.668 0 0 0 493.03 63.872 C 492.693 63.237 492.214 62.43 491.591 61.429 A 143.604 143.604 0 0 0 490.979 60.454 A 15.611 15.611 0 0 1 490.537 59.681 C 490.413 59.451 490.287 59.208 490.157 58.953 A 128.432 128.432 0 0 1 489.758 58.16 A 81.946 81.946 0 0 0 489.748 58.138 C 489.313 57.22 488.926 56.445 488.635 55.718 A 32.132 32.132 0 0 0 488.171 54.571 A 32.132 32.132 0 0 1 487.708 53.423 C 487.448 52.868 487.245 52.368 487.077 51.968 A 18.849 18.849 0 0 0 486.926 51.617 A 7.033 7.033 0 0 1 486.525 50.723 C 486.493 50.642 486.461 50.559 486.429 50.475 A 21.852 21.852 0 0 0 486.34 50.249 A 8.107 8.107 0 0 1 486.19 49.84 C 486.101 49.58 486.038 49.356 485.979 49.167 A 5.954 5.954 0 0 0 485.95 49.078 A 2.243 2.243 0 0 0 485.769 48.532 A 9.543 9.543 0 0 0 485.608 48.199 A 3.177 3.177 0 0 0 485.484 47.974 C 485.381 47.803 485.277 47.674 485.174 47.569 A 1.859 1.859 0 0 0 485.168 47.564 A 1.176 1.176 0 0 1 484.967 47.394 C 484.898 47.321 484.834 47.234 484.783 47.134 A 1.093 1.093 0 0 1 484.778 47.124 C 484.681 46.979 484.632 46.785 484.631 46.687 A 0.29 0.29 0 0 1 484.631 46.685 A 0.817 0.817 0 0 0 484.617 46.539 C 484.594 46.41 484.539 46.242 484.436 46.001 A 3.951 3.951 0 0 0 484.324 45.67 C 484.26 45.503 484.187 45.336 484.113 45.149 A 8.823 8.823 0 0 1 484.045 44.976 A 4.903 4.903 0 0 1 483.732 44.297 A 11.791 11.791 0 0 1 483.557 43.804 A 22.76 22.76 0 0 1 483.456 43.455 C 483.377 43.178 483.313 42.935 483.252 42.713 A 17.614 17.614 0 0 0 483.215 42.583 A 5.536 5.536 0 0 0 483.056 41.801 A 8.473 8.473 0 0 0 482.922 41.363 A 6.638 6.638 0 0 0 482.742 40.889 C 482.652 40.674 482.558 40.473 482.475 40.286 A 10.091 10.091 0 0 1 482.434 40.191 C 481.904 39.171 481.306 37.743 480.639 35.906 A 85.772 85.772 0 0 1 480.237 34.771 A 117.798 117.798 0 0 1 478.249 28.122 A 73.56 73.56 0 0 1 478.137 27.691 C 477.666 25.988 477.383 24.634 477.249 23.63 A 10.924 10.924 0 0 1 477.161 22.71 A 5.285 5.285 0 0 1 477.448 21.062 A 9.384 9.384 0 0 1 477.795 20.171 A 11.508 11.508 0 0 1 478.123 19.528 C 478.347 19.12 478.562 18.791 478.747 18.531 A 9.141 9.141 0 0 1 478.87 18.365 A 2.63 2.63 0 0 0 479.093 18.037 C 479.187 17.873 479.271 17.687 479.331 17.487 A 2.323 2.323 0 0 0 479.358 17.388 A 3.879 3.879 0 0 0 479.435 16.877 C 479.456 16.639 479.456 16.419 479.456 16.216 C 479.421 15.977 479.34 15.834 479.227 15.769 A 0.32 0.32 0 0 0 479.065 15.728 C 478.988 15.728 478.911 15.667 478.81 15.57 A 7.196 7.196 0 0 1 478.723 15.484 A 1.206 1.206 0 0 1 478.515 15.193 C 478.473 15.115 478.435 15.03 478.398 14.938 A 5.202 5.202 0 0 1 478.381 14.898 A 3.322 3.322 0 0 0 478.089 14.417 C 477.992 14.284 477.879 14.152 477.747 14.019 A 1.353 1.353 0 0 0 477.371 13.762 C 477.162 13.662 476.91 13.588 476.624 13.531 A 6.832 6.832 0 0 1 474.206 12.794 A 8.577 8.577 0 0 1 473.938 12.652 C 473.153 12.19 472.629 11.684 472.369 11.217 A 1.95 1.95 0 0 1 472.327 11.138 C 472.226 10.802 472.033 10.582 471.795 10.477 A 0.856 0.856 0 0 0 471.448 10.406 A 1.112 1.112 0 0 0 470.949 10.513 C 470.798 10.588 470.668 10.704 470.565 10.864 A 1.318 1.318 0 0 0 470.471 11.04 C 470.392 11.238 470.313 11.626 470.26 12.283 A 16.821 16.821 0 0 0 470.227 12.798 C 470.129 13.726 470.081 14.8 470.081 16.021 A 1.576 1.576 0 0 0 470.049 16.183 C 470.039 16.251 470.035 16.313 470.033 16.373 A 4.423 4.423 0 0 0 470.032 16.509 L 470.032 16.753 L 470.032 16.9 L 470.081 16.949 L 470.129 16.997 L 470.129 17.046 C 470.129 17.046 470.129 17.095 470.081 17.095 L 470.081 17.242 A 0.322 0.322 0 0 1 470.064 17.27 C 470.021 17.339 469.978 17.334 469.934 17.29 A 0.387 0.387 0 0 1 469.815 17.191 C 469.778 17.148 469.741 17.098 469.692 17.048 A 0.855 0.855 0 0 0 469.69 17.046 A 0.765 0.765 0 0 0 469.626 16.909 C 469.58 16.827 469.527 16.752 469.495 16.656 L 469.202 16.216 C 469.155 16.123 469.064 16.03 469.014 16.022 A 0.043 0.043 0 0 0 469.006 16.021 A 0.081 0.081 0 0 0 468.993 16.01 C 468.949 15.982 468.909 16.034 468.909 16.167 A 9.865 9.865 0 0 0 468.832 16.832 C 468.796 17.252 468.774 17.749 468.766 18.336 A 39.924 39.924 0 0 0 468.762 18.902 A 854.933 854.933 0 0 0 468.835 20.69 A 504.962 504.962 0 0 0 468.909 22.369 A 43.738 43.738 0 0 0 468.973 23.049 C 469.033 23.637 469.094 24.071 469.154 24.34 A 1.871 1.871 0 0 0 469.202 24.517 C 469.396 25.051 468.962 27.179 467.949 30.852 A 150.646 150.646 0 0 1 467.932 30.913 A 95.499 95.499 0 0 0 467.922 30.951 C 467.655 31.931 467.424 32.838 467.207 33.662 A 58.278 58.278 0 0 1 466.809 35.113 A 116.475 116.475 0 0 0 466.706 35.545 C 466.529 36.297 466.422 36.791 466.384 37.029 A 1.003 1.003 0 0 0 466.37 37.163 C 466.37 37.31 466.37 37.456 466.272 37.554 A 0.841 0.841 0 0 1 466.204 37.674 C 466.171 37.718 466.132 37.749 466.077 37.749 C 465.93 37.749 465.784 38.189 465.491 39.068 A 27.561 27.561 0 0 0 465.26 40.022 C 465.089 40.782 464.911 41.674 464.709 42.681 C 464.669 42.804 464.628 42.96 464.587 43.122 A 62.233 62.233 0 0 0 464.563 43.218 A 4.053 4.053 0 0 0 464.488 43.423 C 464.444 43.553 464.412 43.665 464.382 43.759 A 2.977 2.977 0 0 1 464.368 43.804 C 464.172 44.244 463.782 45.415 463.147 47.369 A 413.823 413.823 0 0 1 462.17 50.31 A 146.227 146.227 0 0 0 461.194 53.326 A 190.771 190.771 0 0 0 460.753 54.662 C 460.394 55.767 460.132 56.614 459.968 57.192 A 20.336 20.336 0 0 0 459.875 57.525 C 459.875 57.569 459.836 57.651 459.828 57.703 A 0.109 0.109 0 0 0 459.827 57.72 A 18.834 18.834 0 0 0 459.701 58.113 C 459.626 58.352 459.57 58.552 459.519 58.723 A 8.484 8.484 0 0 1 459.436 58.99 C 459.394 59.199 459.316 59.409 459.264 59.557 A 4.244 4.244 0 0 0 459.241 59.624 C 459.197 59.755 459.153 59.925 459.075 60.099 A 1.721 1.721 0 0 1 459.045 60.162 L 459.045 60.259 C 458.789 60.9 458.645 61.317 458.613 61.607 A 1.068 1.068 0 0 0 458.606 61.724 C 458.567 61.917 458.62 62.049 458.766 62.145 A 0.753 0.753 0 0 0 458.899 62.212 A 0.63 0.63 0 0 1 458.949 62.235 C 459.114 62.318 459.029 62.396 458.724 62.407 A 2.096 2.096 0 0 1 458.655 62.408 C 458.411 62.408 458.215 62.554 458.118 62.847 A 4.155 4.155 0 0 0 458.086 63.088 C 458.056 63.371 458.031 63.792 458.023 64.337 A 24.788 24.788 0 0 0 458.02 64.703 A 18.047 18.047 0 0 1 458.005 65.396 C 457.993 65.695 457.979 65.982 457.973 66.257 A 10.484 10.484 0 0 0 457.971 66.46 A 25.479 25.479 0 0 1 457.939 66.817 C 457.908 67.139 457.876 67.38 457.845 67.541 A 1.845 1.845 0 0 1 457.825 67.632 A 1.628 1.628 0 0 0 457.811 67.685 C 457.747 67.941 457.886 67.749 458.227 67.071 A 24.656 24.656 0 0 0 458.264 66.997 A 18.926 18.926 0 0 1 458.418 66.733 C 458.578 66.463 458.752 66.18 458.899 65.923 C 459.07 65.624 459.24 65.4 459.379 65.251 A 2.097 2.097 0 0 1 459.436 65.191 C 459.572 65.054 459.666 64.834 459.797 64.567 A 8.537 8.537 0 0 1 459.827 64.507 A 2.404 2.404 0 0 0 460.12 63.677 A 38.974 38.974 0 0 1 460.239 63.247 C 460.352 62.853 460.489 62.399 460.665 61.884 A 26.7 26.7 0 0 1 460.754 61.626 A 54.864 54.864 0 0 1 461.304 60.219 A 46.133 46.133 0 0 1 461.633 59.429 C 461.975 58.794 462.17 58.404 462.268 58.306 A 0.133 0.133 0 0 0 462.323 58.295 C 462.384 58.268 462.415 58.198 462.415 58.16 C 462.449 58.091 462.435 58.023 462.407 57.954 A 1.326 1.326 0 0 0 462.366 57.867 C 462.325 57.703 462.387 57.298 462.553 56.594 A 32.386 32.386 0 0 1 462.659 56.158 A 86.818 86.818 0 0 1 463.048 54.723 A 51.109 51.109 0 0 1 463.538 53.081 A 54.999 54.999 0 0 1 463.786 52.286 C 464.026 51.537 464.246 50.933 464.465 50.494 C 464.612 50.201 464.758 49.761 464.954 49.126 C 465.149 48.492 465.344 47.857 465.491 47.271 C 465.632 46.66 465.727 46.23 465.778 45.937 A 5.852 5.852 0 0 0 465.784 45.904 C 465.784 45.806 465.881 45.562 466.028 45.22 A 6.269 6.269 0 0 1 466.184 44.748 A 6.751 6.751 0 0 1 466.467 44.097 C 466.663 43.658 466.809 43.218 466.956 42.828 C 467.076 42.465 467.164 42.169 467.218 41.94 A 4.012 4.012 0 0 0 467.249 41.802 A 1.672 1.672 0 0 1 467.331 41.273 A 1.22 1.22 0 0 1 467.395 41.119 A 4.164 4.164 0 0 1 467.442 40.908 C 467.479 40.763 467.523 40.649 467.59 40.581 C 467.631 40.5 467.706 40.35 467.758 40.132 A 2.017 2.017 0 0 0 467.786 39.996 A 4.975 4.975 0 0 0 467.926 39.599 A 3.446 3.446 0 0 0 468.03 39.165 C 468.105 38.941 468.179 38.745 468.254 38.578 A 3.759 3.759 0 0 1 468.323 38.433 C 468.439 38.239 468.525 38.137 468.604 38.104 A 0.154 0.154 0 0 1 468.665 38.091 A 0.075 0.075 0 0 1 468.738 38.151 C 468.757 38.204 468.761 38.292 468.762 38.415 A 15.263 15.263 0 0 1 468.762 38.531 A 5.321 5.321 0 0 1 468.702 38.832 C 468.675 38.952 468.642 39.082 468.603 39.22 A 9.75 9.75 0 0 1 468.469 39.654 A 85.525 85.525 0 0 0 468.256 40.227 C 468.222 40.319 468.19 40.407 468.16 40.491 A 13.331 13.331 0 0 0 468.079 40.728 A 8.256 8.256 0 0 0 468.029 40.882 C 467.968 41.076 467.936 41.208 467.933 41.256 A 0.112 0.112 0 0 0 467.932 41.265 A 2.969 2.969 0 0 1 467.931 41.335 C 467.929 41.455 467.915 41.666 467.842 41.966 A 4.057 4.057 0 0 1 467.834 41.997 A 12.613 12.613 0 0 1 467.664 42.589 C 467.61 42.766 467.557 42.947 467.512 43.136 A 5.449 5.449 0 0 0 467.493 43.218 A 81.433 81.433 0 0 1 467.49 43.225 C 467.356 43.583 467.263 43.817 467.211 43.965 A 2.808 2.808 0 0 0 467.2 43.999 A 0.431 0.431 0 0 0 467.119 44.12 C 467.071 44.222 467.038 44.355 467.004 44.488 C 466.956 44.732 466.956 44.976 466.956 45.22 A 5.104 5.104 0 0 0 466.954 45.227 C 466.916 45.381 466.877 45.565 466.814 45.78 A 4.828 4.828 0 0 1 466.76 45.953 A 3.859 3.859 0 0 1 466.502 46.511 A 1.496 1.496 0 0 1 466.418 46.636 C 466.077 47.027 465.979 47.808 466.125 48.98 C 466.176 49.295 466.2 49.601 466.2 49.899 A 5.818 5.818 0 0 1 465.637 52.349 C 465.449 52.773 465.26 53.288 465.116 53.85 A 9.289 9.289 0 0 0 465.1 53.912 C 464.905 54.546 464.807 55.132 464.709 55.621 A 37.786 37.786 0 0 0 464.692 55.796 C 464.614 56.619 464.618 56.903 464.704 56.57 A 2.636 2.636 0 0 0 464.709 56.548 A 3.253 3.253 0 0 0 464.713 56.541 C 464.807 56.352 464.902 56.116 465.041 55.836 A 7.369 7.369 0 0 1 465.051 55.816 A 3.06 3.06 0 0 1 465.306 55.265 A 11.684 11.684 0 0 1 465.442 55.035 A 2.227 2.227 0 0 0 465.623 54.767 C 465.738 54.569 465.854 54.32 465.969 54.02 A 9.096 9.096 0 0 0 466.028 53.863 C 466.272 53.326 466.516 52.74 466.711 52.154 A 14.546 14.546 0 0 0 466.904 51.661 C 467.047 51.278 467.207 50.822 467.391 50.305 A 105.107 105.107 0 0 1 467.639 49.615 A 216.548 216.548 0 0 1 468.811 46.49 A 46.952 46.952 0 0 0 469.608 44.244 A 35.122 35.122 0 0 0 469.836 43.511 A 22.474 22.474 0 0 0 470.024 42.887 C 470.136 42.494 470.215 42.167 470.266 41.894 A 5.204 5.204 0 0 0 470.325 41.509 A 12.568 12.568 0 0 1 470.47 40.465 A 4.753 4.753 0 0 1 470.52 40.24 C 470.594 39.943 470.696 39.619 470.848 39.245 A 9.801 9.801 0 0 1 471.008 38.872 A 13.602 13.602 0 0 1 471.181 38.425 C 471.381 37.933 471.655 37.31 471.985 36.578 Z M 113.359 65.771 A 4.111 4.111 0 0 1 113.356 65.772 A 3.307 3.307 0 0 1 113.353 65.773 A 2.931 2.931 0 0 1 113.349 65.774 A 2.777 2.777 0 0 1 113.346 65.776 A 0.991 0.991 0 0 1 113.155 65.863 C 112.967 65.928 112.735 65.953 112.444 65.937 A 3.869 3.869 0 0 1 112.268 65.923 C 111.78 65.826 111.292 65.728 110.803 65.533 A 2.01 2.01 0 0 0 110.663 65.47 C 110.535 65.417 110.376 65.365 110.178 65.313 A 7.836 7.836 0 0 0 109.875 65.24 C 109.68 65.191 109.473 65.13 109.259 65.069 A 11.377 11.377 0 0 0 108.606 64.898 A 9.314 9.314 0 0 1 108.237 64.807 C 107.815 64.695 107.255 64.521 106.555 64.263 C 105.627 63.921 104.749 63.531 103.772 63.091 A 26.972 26.972 0 0 1 102.236 62.342 A 22.758 22.758 0 0 1 95.422 56.939 A 16.134 16.134 0 0 0 95.294 56.776 A 30.323 30.323 0 0 0 94.397 55.718 C 94.159 55.44 93.953 55.227 93.832 55.105 A 16.45 16.45 0 0 0 93.762 55.035 A 3.762 3.762 0 0 1 93.748 55.021 C 93.459 54.728 93.123 54.294 92.834 53.765 C 92.578 53.326 92.267 52.666 91.88 51.767 A 77.705 77.705 0 0 1 91.467 50.787 C 91.123 50.036 90.859 49.385 90.675 48.809 A 7.586 7.586 0 0 1 90.442 47.906 A 7.948 7.948 0 0 1 90.438 47.886 C 90.31 47.236 90.22 46.36 90.236 45.222 A 20.003 20.003 0 0 1 90.247 44.781 L 90.247 41.753 C 90.283 41.204 90.32 40.792 90.356 40.497 A 6.301 6.301 0 0 1 90.393 40.24 C 90.42 40.077 90.462 39.96 90.519 39.887 A 0.206 0.206 0 0 1 90.686 39.8 A 0.209 0.209 0 0 1 90.688 39.798 C 90.728 39.76 90.767 39.752 90.807 39.724 A 0.199 0.199 0 0 0 90.833 39.703 A 1.946 1.946 0 0 0 90.832 39.688 C 90.832 39.636 90.828 39.551 90.784 39.507 A 0.455 0.455 0 0 1 90.742 39.436 C 90.559 39.047 90.72 38.143 91.223 36.724 A 12.506 12.506 0 0 1 91.297 36.51 C 91.416 36.172 91.524 35.902 91.565 35.699 A 2.407 2.407 0 0 0 91.572 35.662 C 91.588 35.577 91.597 35.498 91.604 35.422 A 4.311 4.311 0 0 0 91.614 35.064 A 2.571 2.571 0 0 0 91.609 35.048 C 91.571 34.939 91.51 34.78 91.442 34.59 A 10.794 10.794 0 0 1 91.37 34.38 A 0.806 0.806 0 0 1 91.354 34.356 C 91.272 34.223 91.272 34.131 91.272 34.038 A 0.761 0.761 0 0 1 91.277 34.029 C 91.312 33.962 91.347 33.919 91.401 33.902 A 0.21 0.21 0 0 1 91.467 33.892 A 1.048 1.048 0 0 0 91.573 33.913 C 91.83 33.95 92.016 33.865 92.149 33.658 A 1.09 1.09 0 0 0 92.249 33.453 A 1.099 1.099 0 0 0 92.262 33.421 C 92.369 33.146 92.387 32.783 92.315 32.329 A 4.969 4.969 0 0 0 92.249 31.988 A 0.079 0.079 0 0 1 92.238 31.975 C 92.213 31.937 92.248 31.895 92.343 31.828 A 2.259 2.259 0 0 1 92.395 31.792 A 0.592 0.592 0 0 1 92.436 31.774 C 92.541 31.731 92.706 31.689 92.834 31.646 A 2.039 2.039 0 0 0 92.874 31.638 C 93.281 31.548 93.392 31.385 93.24 31.181 A 0.673 0.673 0 0 0 93.176 31.109 A 0.178 0.178 0 0 1 93.133 31.037 C 93.085 30.889 93.178 30.627 93.396 30.285 A 4.909 4.909 0 0 1 93.567 30.035 A 7.857 7.857 0 0 1 93.769 29.769 C 93.951 29.54 94.159 29.303 94.391 29.063 A 11.756 11.756 0 0 1 95.178 28.326 C 95.862 27.74 96.545 27.251 97.18 26.91 C 97.803 26.58 98.315 26.333 98.718 26.147 A 30.492 30.492 0 0 1 99.084 25.982 A 7.741 7.741 0 0 1 99.49 25.792 C 99.797 25.66 100.064 25.577 100.305 25.542 C 100.696 25.494 101.135 25.445 101.624 25.542 A 5.341 5.341 0 0 1 103.577 26.128 A 5.324 5.324 0 0 1 104.026 26.421 C 104.39 26.685 104.669 26.968 104.846 27.251 A 1.382 1.382 0 0 1 104.909 27.363 C 105.046 27.635 105.026 27.857 104.85 28.049 A 0.963 0.963 0 0 1 104.7 28.179 C 104.607 28.241 104.534 28.303 104.48 28.364 A 0.522 0.522 0 0 0 104.407 28.472 A 1.009 1.009 0 0 0 104.381 28.563 C 104.372 28.599 104.367 28.633 104.364 28.664 A 1.343 1.343 0 0 0 104.358 28.814 A 0.221 0.221 0 0 1 104.364 28.835 C 104.391 28.955 104.331 29.133 104.184 29.369 A 3.394 3.394 0 0 1 104.065 29.546 C 103.897 29.781 103.706 29.993 103.492 30.214 A 29.163 29.163 0 0 1 103.186 30.523 A 6.434 6.434 0 0 1 103.087 30.606 C 102.787 30.853 102.527 31.016 102.307 31.06 A 0.284 0.284 0 0 0 102.169 31.095 A 0.259 0.259 0 0 0 102.063 31.206 A 0.117 0.117 0 0 0 102.046 31.228 C 102.014 31.28 102.014 31.359 102.014 31.402 C 102.051 31.475 102.033 31.548 102.001 31.6 A 0.243 0.243 0 0 1 101.965 31.646 A 0.765 0.765 0 0 1 101.946 31.664 C 101.885 31.721 101.822 31.76 101.747 31.778 A 0.506 0.506 0 0 1 101.624 31.792 C 101.425 31.872 101.13 32.177 100.738 32.76 A 12.395 12.395 0 0 0 100.452 33.208 A 11.622 11.622 0 0 0 100.203 33.611 C 99.761 34.36 99.342 35.232 98.889 36.138 A 40.01 40.01 0 0 0 98.689 36.606 C 98.495 37.068 98.32 37.513 98.167 37.941 A 15.477 15.477 0 0 0 97.766 39.214 A 20.075 20.075 0 0 0 97.141 44.17 A 20.408 20.408 0 0 0 97.62 48.54 A 22.329 22.329 0 0 0 97.922 49.708 A 17.517 17.517 0 0 0 101.672 56.646 A 11.977 11.977 0 0 0 101.714 56.696 C 101.92 56.945 102.125 57.173 102.319 57.391 A 13.051 13.051 0 0 1 102.893 58.062 A 150.432 150.432 0 0 0 103.062 58.286 C 103.209 58.481 103.314 58.625 103.358 58.718 A 0.192 0.192 0 0 1 103.381 58.794 A 0.514 0.514 0 0 0 103.435 58.921 C 103.524 59.077 103.712 59.29 104.01 59.561 A 9.476 9.476 0 0 0 104.309 59.82 A 3362.468 3362.468 0 0 0 104.877 60.286 C 105.275 60.612 105.709 60.959 106.165 61.285 C 106.592 61.59 106.962 61.838 107.298 62.04 A 8.399 8.399 0 0 0 107.874 62.359 A 8.414 8.414 0 0 0 108.418 62.551 C 109.058 62.75 109.6 62.816 110.022 62.701 A 5.006 5.006 0 0 0 110.49 62.566 C 110.894 62.43 111.378 62.223 111.945 61.938 A 21.941 21.941 0 0 0 112.805 61.48 C 113.977 60.796 114.856 60.21 115.344 59.673 A 18.289 18.289 0 0 1 115.52 59.499 C 115.576 59.444 115.631 59.392 115.686 59.344 A 2.271 2.271 0 0 1 116.028 59.087 A 9.851 9.851 0 0 0 116.188 58.989 C 116.359 58.881 116.501 58.794 116.614 58.794 A 1.97 1.97 0 0 0 116.667 58.776 C 116.76 58.742 116.837 58.704 116.928 58.648 A 2.593 2.593 0 0 0 117.004 58.599 A 0.427 0.427 0 0 0 117.158 58.471 A 0.204 0.204 0 0 0 117.2 58.355 A 0.816 0.816 0 0 1 117.222 58.314 C 117.265 58.239 117.337 58.141 117.468 58.02 A 2.36 2.36 0 0 1 117.59 57.915 A 3.425 3.425 0 0 1 117.643 57.864 C 117.829 57.686 118.056 57.508 118.323 57.329 A 4.143 4.143 0 0 0 118.497 57.166 C 118.792 56.877 119.188 56.422 119.685 55.79 A 39.138 39.138 0 0 0 120.227 55.083 A 144.605 144.605 0 0 0 121.533 53.216 A 69.083 69.083 0 0 0 122.913 51.128 A 187.914 187.914 0 0 0 123.274 50.555 C 123.629 49.991 123.96 49.456 124.267 48.944 A 44.636 44.636 0 0 0 125.256 47.222 A 30.544 30.544 0 0 1 125.273 47.188 C 125.995 45.75 126.38 45.274 126.428 45.855 C 126.428 45.992 126.404 46.178 126.339 46.395 A 2.746 2.746 0 0 1 126.233 46.685 A 4.594 4.594 0 0 1 125.983 47.173 C 125.96 47.213 125.937 47.253 125.913 47.292 A 28.647 28.647 0 0 0 125.696 47.662 C 125.543 47.845 125.41 48.028 125.295 48.199 A 7.098 7.098 0 0 0 125.11 48.492 A 3.809 3.809 0 0 0 125.1 48.516 C 125.025 48.708 124.981 48.866 124.968 48.942 A 0.241 0.241 0 0 0 124.963 48.98 A 1.131 1.131 0 0 1 124.967 48.991 C 125.012 49.131 125.012 49.228 125.012 49.371 A 1.747 1.747 0 0 1 124.998 49.425 C 124.961 49.553 124.904 49.701 124.813 49.867 A 3.05 3.05 0 0 1 124.67 50.103 A 155.477 155.477 0 0 0 124.518 50.332 C 124.395 50.518 124.249 50.739 124.087 50.989 A 56.32 56.32 0 0 0 123.84 51.372 C 123.45 51.91 122.913 52.642 122.278 53.521 L 120.715 55.718 L 121.936 55.083 A 5.537 5.537 0 0 0 121.954 55.073 C 122.14 54.966 122.327 54.844 122.522 54.707 A 18.763 18.763 0 0 0 123.01 54.351 C 123.186 54.175 123.337 54.011 123.468 53.855 A 4.988 4.988 0 0 0 123.792 53.423 A 6.7 6.7 0 0 1 123.833 53.362 C 123.923 53.23 124.013 53.109 124.103 52.998 A 3.949 3.949 0 0 1 124.377 52.691 A 3.265 3.265 0 0 1 124.465 52.606 C 124.616 52.466 124.727 52.39 124.768 52.349 C 124.837 52.349 124.93 52.301 125.013 52.221 A 0.7 0.7 0 0 0 125.11 52.105 L 125.403 51.519 A 1.394 1.394 0 0 1 125.457 51.328 C 125.507 51.186 125.584 51.024 125.687 50.828 A 15.092 15.092 0 0 1 125.842 50.542 A 8.041 8.041 0 0 1 126.008 50.192 A 9.232 9.232 0 0 1 126.575 49.224 C 126.817 48.788 127.011 48.352 127.205 47.964 A 12.763 12.763 0 0 1 127.209 47.954 A 77.144 77.144 0 0 0 127.297 47.722 C 127.355 47.565 127.4 47.436 127.426 47.325 A 0.866 0.866 0 0 0 127.454 47.124 C 127.454 46.978 127.502 46.831 127.649 46.685 A 0.687 0.687 0 0 1 127.67 46.655 C 127.767 46.525 127.907 46.434 128.088 46.343 C 128.235 46.246 128.381 46.148 128.479 46.001 A 0.728 0.728 0 0 0 128.505 45.96 C 128.576 45.836 128.572 45.743 128.528 45.611 C 128.479 45.513 128.479 45.367 128.528 45.22 A 0.524 0.524 0 0 1 128.602 45.112 C 128.63 45.08 128.662 45.048 128.701 45.016 A 1.384 1.384 0 0 1 128.821 44.927 C 129.096 44.744 129.199 44.819 129.17 45.112 A 1.389 1.389 0 0 1 129.163 45.171 C 129.114 45.513 128.87 46.001 128.528 46.636 C 128.45 46.766 128.372 46.882 128.302 46.991 A 3.022 3.022 0 0 0 128.137 47.271 A 3.148 3.148 0 0 0 128.133 47.278 C 128.038 47.47 127.991 47.613 128.04 47.662 A 1.83 1.83 0 0 1 128.045 47.716 C 128.08 48.153 127.979 48.771 127.698 49.615 C 127.454 50.445 127.112 51.275 126.672 52.056 C 126.395 52.611 126.142 53.019 125.896 53.278 A 1.324 1.324 0 0 1 125.598 53.521 A 0.556 0.556 0 0 0 125.515 53.556 C 125.414 53.61 125.344 53.687 125.305 53.765 A 0.27 0.27 0 0 0 125.301 53.769 C 125.209 53.866 125.257 53.961 125.305 54.009 A 0.348 0.348 0 0 1 125.329 54.026 C 125.451 54.124 125.446 54.267 125.354 54.497 A 3.357 3.357 0 0 1 125.122 54.839 C 125.069 54.908 125.01 54.977 124.945 55.048 A 4.429 4.429 0 0 1 124.817 55.181 C 124.652 55.291 124.503 55.385 124.36 55.456 A 1.325 1.325 0 0 1 124.036 55.572 A 1.749 1.749 0 0 0 123.947 55.594 C 123.598 55.691 123.625 55.826 123.987 55.962 A 0.441 0.441 0 0 0 124.209 56.021 C 124.528 56.021 124.934 55.708 125.403 55.083 C 125.586 54.9 125.731 54.717 125.85 54.546 A 5.237 5.237 0 0 0 126.038 54.253 C 126.184 54.009 126.282 53.863 126.233 53.814 C 126.233 53.716 126.233 53.667 126.331 53.619 C 126.356 53.593 126.394 53.568 126.438 53.543 A 3.074 3.074 0 0 1 126.575 53.472 A 0.183 0.183 0 0 0 126.654 53.451 C 126.791 53.385 126.972 53.165 127.252 52.844 A 28.916 28.916 0 0 1 127.258 52.837 C 127.441 52.563 127.644 52.269 127.865 51.944 A 73.429 73.429 0 0 0 128.284 51.324 C 128.625 50.787 128.918 50.249 129.163 49.761 A 5.091 5.091 0 0 0 129.223 49.657 C 129.469 49.224 129.557 48.917 129.602 48.736 A 0.653 0.653 0 0 1 129.609 48.64 A 0.524 0.524 0 0 1 129.749 48.345 A 1.326 1.326 0 0 1 129.836 48.304 C 129.904 48.276 129.973 48.262 130.042 48.296 A 0.525 0.525 0 0 0 130.106 48.293 C 130.186 48.283 130.248 48.252 130.292 48.189 A 0.342 0.342 0 0 0 130.334 48.101 A 0.535 0.535 0 0 0 130.346 48.06 C 130.369 47.968 130.376 47.846 130.368 47.714 A 1.91 1.91 0 0 0 130.334 47.466 A 1.936 1.936 0 0 1 130.322 47.398 C 130.286 47.177 130.29 46.96 130.334 46.783 C 130.334 46.653 130.411 46.523 130.463 46.495 A 0.039 0.039 0 0 1 130.481 46.49 C 130.579 46.49 130.627 46.441 130.676 46.343 A 1.176 1.176 0 0 0 130.67 46.197 A 0.445 0.445 0 0 0 130.627 46.05 C 130.579 45.855 130.627 45.708 130.725 45.562 A 1.611 1.611 0 0 1 130.981 45.352 A 2.213 2.213 0 0 1 131.213 45.22 A 1.246 1.246 0 0 1 131.338 45.177 C 131.474 45.139 131.599 45.132 131.733 45.146 A 1.757 1.757 0 0 1 131.897 45.171 C 132.141 45.22 132.141 45.025 131.799 44.683 C 131.409 44.292 131.409 44.146 131.75 44.195 A 0.383 0.383 0 0 0 131.785 44.21 C 131.844 44.232 131.902 44.237 131.961 44.224 A 0.353 0.353 0 0 0 132.043 44.195 C 132.092 44.146 132.092 44.097 132.092 43.999 A 0.109 0.109 0 0 1 132.081 43.986 C 132.06 43.956 132.052 43.916 132.057 43.878 A 0.131 0.131 0 0 1 132.092 43.804 A 0.761 0.761 0 0 1 132.097 43.794 C 132.132 43.727 132.167 43.685 132.221 43.667 A 0.21 0.21 0 0 1 132.288 43.658 A 0.157 0.157 0 0 1 132.292 43.655 C 132.367 43.621 132.413 43.674 132.452 43.77 A 1.241 1.241 0 0 1 132.483 43.853 A 5.929 5.929 0 0 1 132.479 44.115 C 132.476 44.183 132.471 44.254 132.462 44.334 A 3.66 3.66 0 0 1 132.434 44.537 A 6.678 6.678 0 0 1 132.36 44.875 A 1.734 1.734 0 0 1 132.239 45.22 A 1.544 1.544 0 0 1 132.2 45.294 C 132.137 45.404 132.077 45.475 132.033 45.522 A 1.586 1.586 0 0 1 131.995 45.562 A 0.124 0.124 0 0 0 131.939 45.574 C 131.896 45.596 131.864 45.643 131.835 45.709 A 1.237 1.237 0 0 0 131.799 45.806 A 1.204 1.204 0 0 0 131.763 46.099 A 1.204 1.204 0 0 0 131.799 46.392 C 131.799 46.56 131.776 46.751 131.714 46.965 A 2.65 2.65 0 0 1 131.604 47.271 A 4.274 4.274 0 0 1 131.116 48.345 C 130.629 49.058 130.294 49.729 130.094 50.327 A 4.46 4.46 0 0 0 129.895 51.177 A 2.37 2.37 0 0 1 129.89 51.193 C 129.839 51.341 129.742 51.58 129.553 51.91 A 2.338 2.338 0 0 1 129.546 51.926 C 129.399 52.262 129.159 52.599 128.918 52.984 A 18.462 18.462 0 0 0 128.755 53.25 C 128.668 53.394 128.589 53.53 128.518 53.659 A 9.153 9.153 0 0 0 128.333 54.009 A 1.702 1.702 0 0 0 128.298 54.054 C 128.164 54.233 128.11 54.381 128.094 54.456 A 0.212 0.212 0 0 0 128.088 54.497 A 0.175 0.175 0 0 1 128.108 54.578 C 128.108 54.638 128.08 54.706 128.034 54.801 A 8.239 8.239 0 0 1 127.991 54.888 A 2.21 2.21 0 0 0 127.954 54.944 C 127.905 55.024 127.854 55.114 127.796 55.208 A 2.935 2.935 0 0 1 127.649 55.425 C 127.161 56.011 127.161 56.109 127.649 55.816 A 3.266 3.266 0 0 1 127.713 55.779 C 127.919 55.661 128.048 55.621 128.137 55.621 C 128.235 55.669 128.235 55.767 128.235 56.011 L 128.235 56.402 L 128.235 56.646 A 0.094 0.094 0 0 1 128.24 56.651 C 128.267 56.683 128.254 56.715 128.228 56.747 A 0.609 0.609 0 0 1 128.186 56.792 A 0.373 0.373 0 0 0 128.081 56.809 A 1.184 1.184 0 0 0 127.893 56.89 A 0.176 0.176 0 0 0 127.814 56.914 C 127.72 56.963 127.591 57.083 127.405 57.232 A 60.139 60.139 0 0 0 127.358 57.291 C 127.248 57.428 127.139 57.567 127.029 57.727 A 4.742 4.742 0 0 0 126.819 58.062 A 10.366 10.366 0 0 1 126.705 58.23 C 126.617 58.356 126.52 58.489 126.409 58.625 A 5.319 5.319 0 0 1 126.038 59.038 C 125.83 59.194 125.636 59.35 125.449 59.491 A 4.705 4.705 0 0 1 124.963 59.82 A 243.645 243.645 0 0 0 124.923 59.843 C 124.595 60.03 124.27 60.218 124.036 60.406 A 2.531 2.531 0 0 0 123.849 60.573 C 123.664 60.753 123.473 60.981 123.254 61.236 A 3.274 3.274 0 0 0 123.095 61.408 C 122.838 61.705 122.542 62.129 122.18 62.652 C 121.741 63.189 121.106 63.579 120.178 63.824 A 2.251 2.251 0 0 0 120.048 63.846 C 119.74 63.909 119.403 64.037 119.104 64.165 A 2.484 2.484 0 0 0 119.051 64.189 C 118.799 64.304 118.603 64.444 118.464 64.567 A 2.019 2.019 0 0 0 118.372 64.654 A 6.697 6.697 0 0 1 118.138 64.88 A 1.805 1.805 0 0 1 117.932 65.044 C 117.857 65.157 117.782 65.212 117.729 65.231 A 0.122 0.122 0 0 1 117.688 65.24 A 7.907 7.907 0 0 0 117.662 65.24 C 117.578 65.24 117.455 65.243 117.221 65.272 A 7.553 7.553 0 0 0 117.102 65.288 A 5.722 5.722 0 0 1 116.791 65.317 C 116.571 65.333 116.327 65.342 116.058 65.357 A 15.925 15.925 0 0 0 115.637 65.386 A 23.219 23.219 0 0 0 114.868 65.465 A 7.514 7.514 0 0 0 114.172 65.581 A 4.084 4.084 0 0 0 114.11 65.589 C 113.734 65.636 113.511 65.719 113.369 65.768 A 5.401 5.401 0 0 1 113.366 65.769 M 217.363 65.771 A 4.111 4.111 0 0 1 217.36 65.772 A 3.307 3.307 0 0 1 217.356 65.773 A 2.931 2.931 0 0 1 217.353 65.774 A 2.777 2.777 0 0 1 217.35 65.776 A 0.991 0.991 0 0 1 217.158 65.863 C 216.971 65.928 216.738 65.953 216.448 65.937 A 3.869 3.869 0 0 1 216.272 65.923 C 215.784 65.826 215.295 65.728 214.807 65.533 A 2.01 2.01 0 0 0 214.667 65.47 C 214.539 65.417 214.38 65.365 214.182 65.313 A 7.836 7.836 0 0 0 213.879 65.24 C 213.684 65.191 213.477 65.13 213.263 65.069 A 11.377 11.377 0 0 0 212.61 64.898 A 9.314 9.314 0 0 1 212.241 64.807 C 211.819 64.695 211.259 64.521 210.559 64.263 C 209.631 63.921 208.752 63.531 207.776 63.091 A 26.972 26.972 0 0 1 206.24 62.342 A 22.758 22.758 0 0 1 199.426 56.939 A 16.134 16.134 0 0 0 199.298 56.776 A 30.323 30.323 0 0 0 198.401 55.718 C 198.163 55.44 197.957 55.227 197.836 55.105 A 16.45 16.45 0 0 0 197.766 55.035 A 3.762 3.762 0 0 1 197.752 55.021 C 197.462 54.728 197.127 54.294 196.838 53.765 C 196.582 53.326 196.271 52.666 195.884 51.767 A 77.705 77.705 0 0 1 195.471 50.787 C 195.127 50.036 194.863 49.385 194.679 48.809 A 7.586 7.586 0 0 1 194.446 47.906 A 7.948 7.948 0 0 1 194.442 47.886 C 194.314 47.236 194.224 46.36 194.24 45.222 A 20.003 20.003 0 0 1 194.25 44.781 L 194.25 41.753 C 194.287 41.204 194.324 40.792 194.36 40.497 A 6.301 6.301 0 0 1 194.397 40.24 C 194.424 40.077 194.466 39.96 194.523 39.887 A 0.206 0.206 0 0 1 194.69 39.8 A 0.209 0.209 0 0 1 194.692 39.798 C 194.732 39.76 194.771 39.752 194.811 39.724 A 0.199 0.199 0 0 0 194.836 39.703 A 1.946 1.946 0 0 0 194.836 39.688 C 194.836 39.636 194.832 39.551 194.788 39.507 A 0.455 0.455 0 0 1 194.746 39.436 C 194.563 39.047 194.724 38.143 195.227 36.724 A 12.506 12.506 0 0 1 195.301 36.51 C 195.42 36.172 195.528 35.902 195.569 35.699 A 2.407 2.407 0 0 0 195.576 35.662 C 195.592 35.577 195.601 35.498 195.607 35.422 A 4.311 4.311 0 0 0 195.618 35.064 A 2.571 2.571 0 0 0 195.612 35.048 C 195.575 34.939 195.514 34.78 195.446 34.59 A 10.794 10.794 0 0 1 195.374 34.38 A 0.806 0.806 0 0 1 195.358 34.356 C 195.276 34.223 195.276 34.131 195.276 34.038 A 0.761 0.761 0 0 1 195.281 34.029 C 195.316 33.962 195.351 33.919 195.405 33.902 A 0.21 0.21 0 0 1 195.471 33.892 A 1.048 1.048 0 0 0 195.577 33.913 C 195.834 33.95 196.02 33.865 196.152 33.658 A 1.09 1.09 0 0 0 196.252 33.453 A 1.099 1.099 0 0 0 196.266 33.421 C 196.373 33.146 196.391 32.783 196.319 32.329 A 4.969 4.969 0 0 0 196.252 31.988 A 0.079 0.079 0 0 1 196.242 31.975 C 196.217 31.937 196.252 31.895 196.347 31.828 A 2.259 2.259 0 0 1 196.399 31.792 A 0.592 0.592 0 0 1 196.44 31.774 C 196.545 31.731 196.71 31.689 196.838 31.646 A 2.039 2.039 0 0 0 196.878 31.638 C 197.285 31.548 197.396 31.385 197.243 31.181 A 0.673 0.673 0 0 0 197.18 31.109 A 0.178 0.178 0 0 1 197.137 31.037 C 197.088 30.889 197.182 30.627 197.4 30.285 A 4.909 4.909 0 0 1 197.571 30.035 A 7.857 7.857 0 0 1 197.773 29.769 C 197.955 29.54 198.162 29.303 198.395 29.063 A 11.756 11.756 0 0 1 199.182 28.326 C 199.866 27.74 200.549 27.251 201.184 26.91 C 201.807 26.58 202.319 26.333 202.722 26.147 A 30.492 30.492 0 0 1 203.088 25.982 A 7.741 7.741 0 0 1 203.494 25.792 C 203.801 25.66 204.067 25.577 204.309 25.542 C 204.7 25.494 205.139 25.445 205.627 25.542 A 5.341 5.341 0 0 1 207.581 26.128 A 5.324 5.324 0 0 1 208.03 26.421 C 208.394 26.685 208.673 26.968 208.85 27.251 A 1.382 1.382 0 0 1 208.913 27.363 C 209.05 27.635 209.03 27.857 208.854 28.049 A 0.963 0.963 0 0 1 208.704 28.179 C 208.611 28.241 208.538 28.303 208.484 28.364 A 0.522 0.522 0 0 0 208.411 28.472 A 1.009 1.009 0 0 0 208.385 28.563 C 208.376 28.599 208.371 28.633 208.368 28.664 A 1.343 1.343 0 0 0 208.362 28.814 A 0.221 0.221 0 0 1 208.368 28.835 C 208.395 28.955 208.335 29.133 208.188 29.369 A 3.394 3.394 0 0 1 208.069 29.546 C 207.901 29.781 207.71 29.993 207.496 30.214 A 29.163 29.163 0 0 1 207.19 30.523 A 6.434 6.434 0 0 1 207.091 30.606 C 206.791 30.853 206.531 31.016 206.311 31.06 A 0.284 0.284 0 0 0 206.173 31.095 A 0.259 0.259 0 0 0 206.067 31.206 A 0.117 0.117 0 0 0 206.05 31.228 C 206.018 31.28 206.018 31.359 206.018 31.402 C 206.055 31.475 206.037 31.548 206.005 31.6 A 0.243 0.243 0 0 1 205.969 31.646 A 0.765 0.765 0 0 1 205.95 31.664 C 205.889 31.721 205.826 31.76 205.751 31.778 A 0.506 0.506 0 0 1 205.627 31.792 C 205.429 31.872 205.134 32.177 204.742 32.76 A 12.395 12.395 0 0 0 204.456 33.208 A 11.622 11.622 0 0 0 204.207 33.611 C 203.765 34.36 203.346 35.232 202.893 36.138 A 40.01 40.01 0 0 0 202.693 36.606 C 202.499 37.068 202.324 37.513 202.17 37.941 A 15.477 15.477 0 0 0 201.77 39.214 A 20.075 20.075 0 0 0 201.145 44.17 A 20.408 20.408 0 0 0 201.624 48.54 A 22.329 22.329 0 0 0 201.926 49.708 A 17.517 17.517 0 0 0 205.676 56.646 A 11.977 11.977 0 0 0 205.717 56.696 C 205.923 56.945 206.129 57.173 206.323 57.391 A 13.051 13.051 0 0 1 206.897 58.062 A 150.432 150.432 0 0 0 207.066 58.286 C 207.213 58.481 207.318 58.625 207.362 58.718 A 0.192 0.192 0 0 1 207.385 58.794 A 0.514 0.514 0 0 0 207.439 58.921 C 207.528 59.077 207.716 59.29 208.014 59.561 A 9.476 9.476 0 0 0 208.313 59.82 A 3362.468 3362.468 0 0 0 208.881 60.286 C 209.279 60.612 209.713 60.959 210.168 61.285 C 210.596 61.59 210.966 61.838 211.302 62.04 A 8.399 8.399 0 0 0 211.877 62.359 A 8.414 8.414 0 0 0 212.422 62.551 C 213.061 62.75 213.604 62.816 214.026 62.701 A 5.006 5.006 0 0 0 214.494 62.566 C 214.898 62.43 215.382 62.223 215.948 61.938 A 21.941 21.941 0 0 0 216.809 61.48 C 217.981 60.796 218.86 60.21 219.348 59.673 A 18.289 18.289 0 0 1 219.524 59.499 C 219.58 59.444 219.635 59.392 219.69 59.344 A 2.271 2.271 0 0 1 220.032 59.087 A 9.851 9.851 0 0 0 220.192 58.989 C 220.363 58.881 220.505 58.794 220.618 58.794 A 1.97 1.97 0 0 0 220.671 58.776 C 220.764 58.742 220.841 58.704 220.932 58.648 A 2.593 2.593 0 0 0 221.008 58.599 A 0.427 0.427 0 0 0 221.162 58.471 A 0.204 0.204 0 0 0 221.204 58.355 A 0.816 0.816 0 0 1 221.226 58.314 C 221.269 58.239 221.34 58.141 221.472 58.02 A 2.36 2.36 0 0 1 221.594 57.915 A 3.425 3.425 0 0 1 221.647 57.864 C 221.833 57.686 222.059 57.508 222.327 57.329 A 4.143 4.143 0 0 0 222.501 57.166 C 222.796 56.877 223.192 56.422 223.689 55.79 A 39.138 39.138 0 0 0 224.231 55.083 A 144.605 144.605 0 0 0 225.537 53.216 A 69.083 69.083 0 0 0 226.917 51.128 A 187.914 187.914 0 0 0 227.278 50.555 C 227.633 49.991 227.963 49.456 228.271 48.944 A 44.636 44.636 0 0 0 229.26 47.222 A 30.544 30.544 0 0 1 229.277 47.188 C 229.999 45.75 230.384 45.274 230.432 45.855 C 230.432 45.992 230.408 46.178 230.343 46.395 A 2.746 2.746 0 0 1 230.237 46.685 A 4.594 4.594 0 0 1 229.987 47.173 C 229.964 47.213 229.94 47.253 229.917 47.292 A 28.647 28.647 0 0 0 229.7 47.662 C 229.547 47.845 229.414 48.028 229.299 48.199 A 7.098 7.098 0 0 0 229.114 48.492 A 3.809 3.809 0 0 0 229.104 48.516 C 229.029 48.708 228.985 48.866 228.972 48.942 A 0.241 0.241 0 0 0 228.967 48.98 A 1.131 1.131 0 0 1 228.971 48.991 C 229.016 49.131 229.016 49.228 229.016 49.371 A 1.747 1.747 0 0 1 229.002 49.425 C 228.965 49.553 228.908 49.701 228.817 49.867 A 3.05 3.05 0 0 1 228.674 50.103 A 155.477 155.477 0 0 0 228.522 50.332 C 228.399 50.518 228.253 50.739 228.091 50.989 A 56.32 56.32 0 0 0 227.844 51.372 C 227.454 51.91 226.917 52.642 226.282 53.521 L 224.719 55.718 L 225.94 55.083 A 5.537 5.537 0 0 0 225.958 55.073 C 226.144 54.966 226.331 54.844 226.525 54.707 A 18.763 18.763 0 0 0 227.014 54.351 C 227.19 54.175 227.341 54.011 227.472 53.855 A 4.988 4.988 0 0 0 227.795 53.423 A 6.7 6.7 0 0 1 227.837 53.362 C 227.927 53.23 228.017 53.109 228.107 52.998 A 3.949 3.949 0 0 1 228.381 52.691 A 3.265 3.265 0 0 1 228.469 52.606 C 228.62 52.466 228.731 52.39 228.772 52.349 C 228.841 52.349 228.933 52.301 229.016 52.221 A 0.7 0.7 0 0 0 229.114 52.105 L 229.407 51.519 A 1.394 1.394 0 0 1 229.461 51.328 C 229.511 51.186 229.588 51.024 229.691 50.828 A 15.092 15.092 0 0 1 229.846 50.542 A 8.041 8.041 0 0 1 230.012 50.192 A 9.232 9.232 0 0 1 230.579 49.224 C 230.821 48.788 231.015 48.352 231.209 47.964 A 12.763 12.763 0 0 1 231.213 47.954 A 77.144 77.144 0 0 0 231.301 47.722 C 231.359 47.565 231.404 47.436 231.43 47.325 A 0.866 0.866 0 0 0 231.458 47.124 C 231.458 46.978 231.506 46.831 231.653 46.685 A 0.687 0.687 0 0 1 231.674 46.655 C 231.771 46.525 231.911 46.434 232.092 46.343 C 232.239 46.246 232.385 46.148 232.483 46.001 A 0.728 0.728 0 0 0 232.509 45.96 C 232.58 45.836 232.576 45.743 232.532 45.611 C 232.483 45.513 232.483 45.367 232.532 45.22 A 0.524 0.524 0 0 1 232.606 45.112 C 232.634 45.08 232.666 45.048 232.704 45.016 A 1.384 1.384 0 0 1 232.825 44.927 C 233.1 44.744 233.203 44.819 233.174 45.112 A 1.389 1.389 0 0 1 233.167 45.171 C 233.118 45.513 232.874 46.001 232.532 46.636 C 232.454 46.766 232.376 46.882 232.306 46.991 A 3.022 3.022 0 0 0 232.141 47.271 A 3.148 3.148 0 0 0 232.137 47.278 C 232.042 47.47 231.995 47.613 232.043 47.662 A 1.83 1.83 0 0 1 232.049 47.716 C 232.084 48.153 231.983 48.771 231.702 49.615 C 231.458 50.445 231.116 51.275 230.676 52.056 C 230.399 52.611 230.146 53.019 229.9 53.278 A 1.324 1.324 0 0 1 229.602 53.521 A 0.556 0.556 0 0 0 229.518 53.556 C 229.418 53.61 229.348 53.687 229.309 53.765 A 0.27 0.27 0 0 0 229.305 53.769 C 229.213 53.866 229.261 53.961 229.309 54.009 A 0.348 0.348 0 0 1 229.333 54.026 C 229.455 54.124 229.45 54.267 229.358 54.497 A 3.357 3.357 0 0 1 229.126 54.839 C 229.073 54.908 229.014 54.977 228.948 55.048 A 4.429 4.429 0 0 1 228.821 55.181 C 228.656 55.291 228.507 55.385 228.364 55.456 A 1.325 1.325 0 0 1 228.04 55.572 A 1.749 1.749 0 0 0 227.951 55.594 C 227.602 55.691 227.629 55.826 227.991 55.962 A 0.441 0.441 0 0 0 228.213 56.021 C 228.532 56.021 228.938 55.708 229.407 55.083 C 229.59 54.9 229.735 54.717 229.854 54.546 A 5.237 5.237 0 0 0 230.042 54.253 C 230.188 54.009 230.286 53.863 230.237 53.814 C 230.237 53.716 230.237 53.667 230.334 53.619 C 230.36 53.593 230.398 53.568 230.442 53.543 A 3.074 3.074 0 0 1 230.579 53.472 A 0.183 0.183 0 0 0 230.658 53.451 C 230.795 53.385 230.976 53.165 231.256 52.844 A 28.916 28.916 0 0 1 231.262 52.837 C 231.445 52.563 231.647 52.269 231.869 51.944 A 73.429 73.429 0 0 0 232.288 51.324 C 232.629 50.787 232.922 50.249 233.167 49.761 A 5.091 5.091 0 0 0 233.227 49.657 C 233.473 49.224 233.561 48.917 233.606 48.736 A 0.653 0.653 0 0 1 233.613 48.64 A 0.524 0.524 0 0 1 233.752 48.345 A 1.326 1.326 0 0 1 233.84 48.304 C 233.908 48.276 233.977 48.262 234.045 48.296 A 0.525 0.525 0 0 0 234.11 48.293 C 234.19 48.283 234.252 48.252 234.296 48.189 A 0.342 0.342 0 0 0 234.338 48.101 A 0.535 0.535 0 0 0 234.35 48.06 C 234.373 47.968 234.38 47.846 234.371 47.714 A 1.91 1.91 0 0 0 234.338 47.466 A 1.936 1.936 0 0 1 234.326 47.398 C 234.29 47.177 234.294 46.96 234.338 46.783 C 234.338 46.653 234.415 46.523 234.466 46.495 A 0.039 0.039 0 0 1 234.485 46.49 C 234.583 46.49 234.631 46.441 234.68 46.343 A 1.176 1.176 0 0 0 234.674 46.197 A 0.445 0.445 0 0 0 234.631 46.05 C 234.583 45.855 234.631 45.708 234.729 45.562 A 1.611 1.611 0 0 1 234.985 45.352 A 2.213 2.213 0 0 1 235.217 45.22 A 1.246 1.246 0 0 1 235.342 45.177 C 235.478 45.139 235.603 45.132 235.737 45.146 A 1.757 1.757 0 0 1 235.901 45.171 C 236.145 45.22 236.145 45.025 235.803 44.683 C 235.413 44.292 235.413 44.146 235.754 44.195 A 0.383 0.383 0 0 0 235.789 44.21 C 235.847 44.232 235.906 44.237 235.965 44.224 A 0.353 0.353 0 0 0 236.047 44.195 C 236.096 44.146 236.096 44.097 236.096 43.999 A 0.109 0.109 0 0 1 236.085 43.986 C 236.064 43.956 236.056 43.916 236.061 43.878 A 0.131 0.131 0 0 1 236.096 43.804 A 0.761 0.761 0 0 1 236.101 43.794 C 236.136 43.727 236.171 43.685 236.225 43.667 A 0.21 0.21 0 0 1 236.292 43.658 A 0.157 0.157 0 0 1 236.296 43.655 C 236.371 43.621 236.417 43.674 236.456 43.77 A 1.241 1.241 0 0 1 236.487 43.853 A 5.929 5.929 0 0 1 236.483 44.115 C 236.48 44.183 236.475 44.254 236.466 44.334 A 3.66 3.66 0 0 1 236.438 44.537 A 6.678 6.678 0 0 1 236.364 44.875 A 1.734 1.734 0 0 1 236.243 45.22 A 1.544 1.544 0 0 1 236.203 45.294 C 236.141 45.404 236.081 45.475 236.037 45.522 A 1.586 1.586 0 0 1 235.999 45.562 A 0.124 0.124 0 0 0 235.943 45.574 C 235.9 45.596 235.868 45.643 235.839 45.709 A 1.237 1.237 0 0 0 235.803 45.806 A 1.204 1.204 0 0 0 235.767 46.099 A 1.204 1.204 0 0 0 235.803 46.392 C 235.803 46.56 235.78 46.751 235.718 46.965 A 2.65 2.65 0 0 1 235.608 47.271 A 4.274 4.274 0 0 1 235.12 48.345 C 234.633 49.058 234.298 49.729 234.098 50.327 A 4.46 4.46 0 0 0 233.899 51.177 A 2.37 2.37 0 0 1 233.894 51.193 C 233.843 51.341 233.746 51.58 233.557 51.91 A 2.338 2.338 0 0 1 233.55 51.926 C 233.403 52.262 233.163 52.599 232.922 52.984 A 18.462 18.462 0 0 0 232.759 53.25 C 232.672 53.394 232.593 53.53 232.522 53.659 A 9.153 9.153 0 0 0 232.336 54.009 A 1.702 1.702 0 0 0 232.302 54.054 C 232.168 54.233 232.114 54.381 232.098 54.456 A 0.212 0.212 0 0 0 232.092 54.497 A 0.175 0.175 0 0 1 232.111 54.578 C 232.111 54.638 232.084 54.706 232.038 54.801 A 8.239 8.239 0 0 1 231.995 54.888 A 2.21 2.21 0 0 0 231.958 54.944 C 231.909 55.024 231.858 55.114 231.8 55.208 A 2.935 2.935 0 0 1 231.653 55.425 C 231.165 56.011 231.165 56.109 231.653 55.816 A 3.266 3.266 0 0 1 231.717 55.779 C 231.923 55.661 232.052 55.621 232.141 55.621 C 232.239 55.669 232.239 55.767 232.239 56.011 L 232.239 56.402 L 232.239 56.646 A 0.094 0.094 0 0 1 232.244 56.651 C 232.271 56.683 232.258 56.715 232.232 56.747 A 0.609 0.609 0 0 1 232.19 56.792 A 0.373 0.373 0 0 0 232.085 56.809 A 1.184 1.184 0 0 0 231.897 56.89 A 0.176 0.176 0 0 0 231.818 56.914 C 231.724 56.963 231.594 57.083 231.409 57.232 A 60.139 60.139 0 0 0 231.362 57.291 C 231.252 57.428 231.143 57.567 231.033 57.727 A 4.742 4.742 0 0 0 230.823 58.062 A 10.366 10.366 0 0 1 230.709 58.23 C 230.621 58.356 230.523 58.489 230.413 58.625 A 5.319 5.319 0 0 1 230.042 59.038 C 229.834 59.194 229.64 59.35 229.453 59.491 A 4.705 4.705 0 0 1 228.967 59.82 A 243.645 243.645 0 0 0 228.927 59.843 C 228.599 60.03 228.274 60.218 228.04 60.406 A 2.531 2.531 0 0 0 227.853 60.573 C 227.668 60.753 227.477 60.981 227.258 61.236 A 3.274 3.274 0 0 0 227.099 61.408 C 226.842 61.705 226.546 62.129 226.184 62.652 C 225.745 63.189 225.11 63.579 224.182 63.824 A 2.251 2.251 0 0 0 224.052 63.846 C 223.743 63.909 223.407 64.037 223.108 64.165 A 2.484 2.484 0 0 0 223.055 64.189 C 222.803 64.304 222.607 64.444 222.468 64.567 A 2.019 2.019 0 0 0 222.375 64.654 A 6.697 6.697 0 0 1 222.142 64.88 A 1.805 1.805 0 0 1 221.936 65.044 C 221.861 65.157 221.786 65.212 221.733 65.231 A 0.122 0.122 0 0 1 221.692 65.24 A 7.907 7.907 0 0 0 221.666 65.24 C 221.582 65.24 221.459 65.243 221.225 65.272 A 7.553 7.553 0 0 0 221.106 65.288 A 5.722 5.722 0 0 1 220.795 65.317 C 220.575 65.333 220.331 65.342 220.062 65.357 A 15.925 15.925 0 0 0 219.641 65.386 A 23.219 23.219 0 0 0 218.872 65.465 A 7.514 7.514 0 0 0 218.176 65.581 A 4.084 4.084 0 0 0 218.114 65.589 C 217.738 65.636 217.515 65.719 217.373 65.768 A 5.401 5.401 0 0 1 217.37 65.769 M 428.248 10.703 A 291.498 291.498 0 0 0 427.942 10.747 A 3.135 3.135 0 0 0 427.44 10.876 C 427.355 10.905 427.276 10.937 427.207 10.969 A 1.787 1.787 0 0 0 427.161 10.992 C 426.917 11.089 426.819 11.187 426.819 11.333 A 2.923 2.923 0 0 0 426.822 11.512 A 0.592 0.592 0 0 0 426.917 11.822 C 426.965 11.968 427.161 12.115 427.405 12.359 A 1.741 1.741 0 0 1 427.505 12.431 C 427.597 12.502 427.661 12.566 427.698 12.603 A 0.63 0.63 0 0 1 427.753 12.634 C 427.789 12.656 427.814 12.679 427.828 12.701 A 0.087 0.087 0 0 1 427.844 12.749 L 427.991 12.896 A 3.973 3.973 0 0 0 428.064 13.038 C 428.094 13.092 428.129 13.152 428.176 13.223 A 3.361 3.361 0 0 0 428.186 13.238 C 428.187 13.24 428.188 13.242 428.189 13.244 C 428.286 13.435 428.381 13.532 428.381 13.628 A 0.825 0.825 0 0 1 428.443 13.695 C 428.455 13.71 428.466 13.726 428.472 13.741 A 0.089 0.089 0 0 1 428.479 13.775 A 0.286 0.286 0 0 1 428.506 13.807 C 428.539 13.851 428.567 13.909 428.574 13.95 A 0.11 0.11 0 0 1 428.577 13.97 A 0.636 0.636 0 0 0 428.653 14.085 C 428.696 14.137 428.747 14.189 428.799 14.241 A 21.977 21.977 0 0 0 428.821 14.263 C 428.918 14.41 429.016 14.507 429.114 14.605 A 0.823 0.823 0 0 1 429.164 14.632 C 429.216 14.663 429.256 14.693 429.307 14.724 A 0.823 0.823 0 0 0 429.358 14.751 A 1.422 1.422 0 0 1 429.541 14.855 C 429.575 14.879 429.61 14.906 429.644 14.94 A 0.823 0.823 0 0 1 429.651 14.947 C 429.699 14.995 429.796 15.091 429.892 15.236 A 1.732 1.732 0 0 1 429.895 15.24 A 2.2 2.2 0 0 1 429.91 15.287 C 429.944 15.398 429.95 15.446 429.992 15.531 A 0.888 0.888 0 0 0 429.993 15.533 A 0.823 0.823 0 0 0 430.02 15.583 C 430.051 15.635 430.081 15.675 430.112 15.726 A 0.823 0.823 0 0 1 430.139 15.777 C 430.139 15.81 430.162 15.843 430.192 15.876 A 1.229 1.229 0 0 0 430.237 15.923 A 0.71 0.71 0 0 0 430.302 16.026 C 430.333 16.068 430.369 16.112 430.408 16.162 A 2.093 2.093 0 0 1 430.481 16.265 L 430.823 16.607 A 360.134 360.134 0 0 1 427.937 16.562 C 425.558 16.515 423.718 16.451 422.386 16.386 A 90.25 90.25 0 0 1 421.936 16.363 A 45.276 45.276 0 0 1 420.691 16.243 C 419.519 16.112 418.567 15.948 417.834 15.728 A 51.336 51.336 0 0 0 417.308 15.623 C 417.03 15.571 416.779 15.533 416.565 15.533 L 416.418 15.533 C 415.588 15.484 415.149 16.07 415.1 17.242 A 8.383 8.383 0 0 0 415.098 17.252 C 415.05 17.543 415.002 17.928 414.905 18.313 A 8.443 8.443 0 0 1 414.905 18.316 C 414.86 18.672 414.816 18.988 414.734 19.263 A 2.462 2.462 0 0 1 414.709 19.341 A 0.629 0.629 0 0 0 414.691 19.476 C 414.688 19.599 414.716 19.739 414.776 19.894 A 2.068 2.068 0 0 0 414.856 20.074 A 11.709 11.709 0 0 0 415.072 20.482 A 43.092 43.092 0 0 0 415.393 21.05 A 9.95 9.95 0 0 1 415.747 21.661 C 415.857 21.868 415.955 22.076 416.028 22.271 A 4.325 4.325 0 0 1 416.347 23.328 A 6.764 6.764 0 0 1 416.418 23.882 A 7.463 7.463 0 0 0 416.455 24.085 C 416.471 24.167 416.487 24.241 416.503 24.311 A 13.212 13.212 0 0 0 416.565 24.566 A 0.703 0.703 0 0 0 416.602 24.676 C 416.655 24.798 416.732 24.859 416.809 24.859 C 416.956 24.859 417.102 24.859 417.2 24.81 A 0.948 0.948 0 0 1 417.304 24.766 C 417.365 24.744 417.434 24.726 417.506 24.717 A 0.724 0.724 0 0 1 417.59 24.712 C 417.754 24.671 417.952 24.665 418.214 24.721 A 2.502 2.502 0 0 1 418.372 24.761 C 418.656 24.802 419.041 24.876 419.528 25.012 A 12.517 12.517 0 0 1 419.836 25.103 A 6.018 6.018 0 0 0 420.456 25.287 C 420.889 25.393 421.391 25.478 421.936 25.542 C 422.766 25.591 423.596 25.64 424.426 25.64 A 101.596 101.596 0 0 1 424.459 25.638 C 425.139 25.603 425.95 25.567 426.929 25.512 A 135.557 135.557 0 0 0 428.04 25.445 A 159.866 159.866 0 0 0 432.678 25.103 A 67.823 67.823 0 0 0 433.813 25.022 C 434.909 24.935 435.889 24.834 436.731 24.761 C 437.688 24.674 438.296 24.587 438.521 24.535 A 0.769 0.769 0 0 0 438.586 24.517 A 0.421 0.421 0 0 1 438.684 24.492 C 438.917 24.45 439.512 24.403 440.442 24.322 C 441.321 24.285 442.31 24.221 443.429 24.171 A 79.179 79.179 0 0 1 444.592 24.126 A 273.609 273.609 0 0 0 446.32 24.016 C 446.776 23.986 447.21 23.955 447.623 23.925 A 126.856 126.856 0 0 0 448.792 23.833 A 38.907 38.907 0 0 0 449.376 23.778 C 450.097 23.705 450.557 23.631 450.714 23.557 A 0.237 0.237 0 0 0 450.745 23.54 C 450.868 23.499 451.167 23.388 451.669 23.237 A 21.456 21.456 0 0 1 451.965 23.15 A 53.278 53.278 0 0 0 452.919 22.934 C 453.243 22.858 453.585 22.777 453.944 22.695 A 65.102 65.102 0 0 1 454.309 22.613 C 454.968 22.503 455.573 22.365 456.101 22.242 A 191.218 191.218 0 0 1 456.604 22.124 C 457.144 22 457.472 21.911 457.618 21.857 A 0.623 0.623 0 0 0 457.678 21.831 C 457.727 21.686 456.954 21.588 455.407 21.539 A 48.617 48.617 0 0 0 455.383 21.538 A 492.535 492.535 0 0 0 453.481 21.541 C 452.345 21.545 451.074 21.557 449.67 21.587 A 34.56 34.56 0 0 1 448.959 21.614 C 448.252 21.633 447.649 21.624 447.131 21.587 A 7.842 7.842 0 0 1 446.778 21.555 C 446.332 21.502 446.07 21.42 446.014 21.309 A 0.111 0.111 0 0 1 446.008 21.294 C 445.813 21.099 446.057 20.904 446.643 20.757 C 447.222 20.624 448.327 20.531 449.961 20.552 A 39.499 39.499 0 0 1 450.452 20.562 C 451.039 20.478 451.554 20.43 452.029 20.356 A 9.131 9.131 0 0 0 452.258 20.318 A 19.539 19.539 0 0 0 452.268 20.317 C 452.791 20.269 453.08 20.222 453.228 20.22 A 0.695 0.695 0 0 1 453.235 20.22 C 453.36 20.179 453.484 20.172 453.669 20.141 A 3.347 3.347 0 0 0 453.772 20.122 A 6.335 6.335 0 0 0 454.242 20.111 A 3.358 3.358 0 0 0 454.553 20.074 A 1.499 1.499 0 0 0 454.83 20.049 A 1.337 1.337 0 0 0 455.188 19.927 A 0.506 0.506 0 0 0 455.31 19.869 C 455.386 19.817 455.432 19.75 455.432 19.683 C 455.432 19.598 454.582 19.587 452.851 19.586 A 1034.174 1034.174 0 0 0 452.014 19.585 C 449.768 19.634 446.838 19.488 443.274 19.195 C 440.694 19.083 438.573 18.999 436.931 18.944 A 244.196 244.196 0 0 0 435.559 18.902 C 435.657 18.706 435.852 18.413 436.096 18.023 A 47.025 47.025 0 0 0 437.677 17.992 A 216.643 216.643 0 0 0 439.368 17.925 A 72.92 72.92 0 0 1 440.987 17.907 C 441.955 17.907 442.887 17.927 443.774 17.968 A 47.329 47.329 0 0 1 445.422 18.072 C 447.247 18.216 448.458 18.265 449.101 18.221 A 4.464 4.464 0 0 0 449.133 18.218 A 15.321 15.321 0 0 0 449.371 18.216 C 449.968 18.207 450.854 18.169 451.965 18.169 A 129.444 129.444 0 0 1 454.904 18.08 A 63.862 63.862 0 0 1 455.92 18.072 A 77.644 77.644 0 0 0 456.93 18.05 C 459.47 17.979 460.511 17.801 460.12 17.583 C 459.192 17.339 453.137 17.046 441.956 16.607 L 436.829 16.607 A 3.845 3.845 0 0 1 436.902 16.468 C 436.963 16.357 437.024 16.256 437.085 16.141 A 3.492 3.492 0 0 0 437.122 16.07 A 3.694 3.694 0 0 1 437.194 15.932 C 437.263 15.807 437.326 15.708 437.363 15.635 A 0.865 0.865 0 0 0 437.366 15.63 A 2.258 2.258 0 0 0 437.515 15.404 C 437.581 15.29 437.629 15.182 437.659 15.093 C 437.7 14.97 437.706 14.811 437.678 14.647 A 1.267 1.267 0 0 0 437.659 14.556 A 2.775 2.775 0 0 0 437.612 14.392 C 437.555 14.211 437.463 13.982 437.317 13.726 C 437.512 13.287 437.561 12.945 437.463 12.701 A 1.713 1.713 0 0 0 437.232 12.308 A 2.941 2.941 0 0 0 436.975 12.017 A 0.56 0.56 0 0 1 436.831 11.909 A 0.553 0.553 0 0 1 436.731 11.773 C 436.643 11.685 436.475 11.636 436.191 11.556 A 58.169 58.169 0 0 1 436.096 11.529 C 435.899 11.463 435.658 11.397 435.388 11.332 A 21.905 21.905 0 0 0 434.973 11.236 A 9.706 9.706 0 0 1 434.583 11.176 A 4.783 4.783 0 0 0 433.801 11.089 A 82.307 82.307 0 0 1 432.88 11.01 C 432.597 10.983 432.3 10.952 431.984 10.912 A 23.34 23.34 0 0 1 431.848 10.894 A 147.059 147.059 0 0 1 430.829 10.823 C 430.573 10.804 430.332 10.785 430.11 10.766 A 37.98 37.98 0 0 1 429.895 10.747 C 429.456 10.699 429.114 10.65 428.821 10.65 C 428.653 10.65 428.462 10.673 428.248 10.703 Z M 162.805 16.656 L 163.879 17.73 L 162.512 17.73 A 5.853 5.853 0 0 1 162.314 17.743 C 161.837 17.767 161.513 17.718 161.34 17.632 C 161.171 17.547 161.111 17.425 161.099 17.203 A 1.923 1.923 0 0 1 161.096 17.095 A 0.935 0.935 0 0 0 161.077 16.901 A 0.827 0.827 0 0 0 160.95 16.607 A 1.651 1.651 0 0 0 160.817 16.483 C 160.764 16.441 160.71 16.412 160.657 16.412 A 5.636 5.636 0 0 1 160.504 16.41 C 160.407 16.407 160.291 16.401 160.15 16.382 A 3.873 3.873 0 0 1 160.022 16.363 C 159.631 16.363 159.241 16.314 158.752 16.314 A 4.776 4.776 0 0 0 158.399 16.282 C 158.331 16.279 158.263 16.277 158.197 16.277 A 3.643 3.643 0 0 0 157.678 16.314 A 6.206 6.206 0 0 0 157.5 16.346 C 157.353 16.375 157.244 16.404 157.183 16.433 A 0.156 0.156 0 0 0 157.141 16.46 A 0.087 0.087 0 0 1 157.103 16.478 C 157 16.505 156.716 16.503 156.206 16.472 A 30.306 30.306 0 0 1 156.018 16.46 A 22.404 22.404 0 0 1 155.187 16.442 C 154.939 16.433 154.677 16.421 154.4 16.407 A 6679.18 6679.18 0 0 1 153.528 16.363 A 49.876 49.876 0 0 0 151.372 16.205 A 888.338 888.338 0 0 0 150.696 16.167 A 60.244 60.244 0 0 0 150.045 16.103 C 149.643 16.065 149.298 16.036 149.004 16.01 A 35.219 35.219 0 0 1 148.596 15.972 A 55.541 55.541 0 0 0 147.287 15.793 C 146.876 15.741 146.486 15.695 146.116 15.65 A 90.844 90.844 0 0 1 145.959 15.63 A 52.201 52.201 0 0 0 145.943 15.628 C 145.327 15.551 144.864 15.505 144.554 15.465 A 5.915 5.915 0 0 1 144.348 15.435 C 144.181 15.435 143.99 15.389 143.777 15.329 A 146.696 146.696 0 0 1 143.469 15.24 A 3.253 3.253 0 0 1 142.506 14.954 A 2.476 2.476 0 0 1 142.493 14.947 A 14.815 14.815 0 0 0 142.023 14.8 A 54.67 54.67 0 0 0 141.516 14.654 C 141.125 14.556 140.833 14.458 140.54 14.41 L 139.661 14.263 L 140.002 16.021 C 140.1 16.558 140.198 17.144 140.247 17.779 C 140.321 18.302 140.339 18.768 140.343 19.177 A 35.284 35.284 0 0 1 140.344 19.537 L 140.344 20.122 A 7.48 7.48 0 0 0 140.326 20.556 C 140.319 21.061 140.365 21.52 140.442 21.978 C 140.491 22.515 140.784 23.052 141.223 23.492 A 5.719 5.719 0 0 0 141.582 23.858 C 141.878 24.133 142.149 24.314 142.395 24.419 A 2.304 2.304 0 0 0 143.286 24.649 A 5.592 5.592 0 0 0 143.713 24.663 C 144.062 24.663 144.49 24.663 145.03 24.698 A 16.082 16.082 0 0 1 145.227 24.712 A 26.782 26.782 0 0 0 146.173 24.834 A 19.327 19.327 0 0 1 147.082 24.956 A 2.782 2.782 0 0 0 147.271 24.976 C 147.66 25.004 148.317 24.998 149.182 24.956 C 150.256 24.956 151.428 24.908 152.747 24.859 A 66.364 66.364 0 0 1 154.266 24.81 C 154.622 24.801 154.968 24.792 155.297 24.779 A 25.096 25.096 0 0 0 155.676 24.761 C 156.555 24.761 157.19 24.712 157.629 24.761 A 32.614 32.614 0 0 0 159.021 24.804 A 125.158 125.158 0 0 0 160.559 24.81 A 251.062 251.062 0 0 0 161.329 24.809 C 162.064 24.807 162.695 24.798 163.245 24.761 A 26.36 26.36 0 0 0 164.41 24.731 A 121.072 121.072 0 0 0 165.686 24.663 C 166.36 24.663 166.97 24.631 167.516 24.619 A 16.628 16.628 0 0 1 167.883 24.615 C 171.621 24.615 174.731 24.518 177.262 24.373 A 117.814 117.814 0 0 0 177.307 24.371 C 179.895 24.224 181.409 24.078 181.897 23.833 A 2.625 2.625 0 0 1 182.14 23.726 C 182.289 23.669 182.465 23.62 182.678 23.589 A 2.313 2.313 0 0 1 183.142 23.498 C 183.301 23.479 183.459 23.467 183.606 23.443 C 183.948 23.443 184.241 23.394 184.583 23.345 A 6.093 6.093 0 0 0 184.849 23.263 C 185.043 23.197 185.2 23.132 185.334 23.067 A 3.298 3.298 0 0 0 185.364 23.052 A 4.551 4.551 0 0 1 185.946 22.85 A 2.448 2.448 0 0 1 186.145 22.808 A 2.99 2.99 0 0 1 186.618 22.692 C 186.736 22.673 186.849 22.663 186.954 22.662 A 1.86 1.86 0 0 1 186.975 22.662 A 7.025 7.025 0 0 0 187.584 22.633 C 187.86 22.609 188.159 22.57 188.489 22.515 C 189.075 22.466 189.661 22.32 190.247 22.222 A 8.77 8.77 0 0 0 190.726 22.121 C 190.989 22.057 191.226 21.988 191.414 21.929 A 9.813 9.813 0 0 0 191.565 21.88 A 7.129 7.129 0 0 0 191.655 21.854 C 191.909 21.778 191.987 21.734 191.92 21.692 A 0.158 0.158 0 0 0 191.907 21.685 A 1.323 1.323 0 0 1 191.711 21.597 C 191.623 21.551 191.529 21.496 191.418 21.441 A 1.235 1.235 0 0 1 191.25 21.338 C 191.136 21.256 191.046 21.166 190.979 21.099 C 190.784 20.953 190.735 20.806 190.784 20.757 A 0.097 0.097 0 0 1 190.817 20.685 C 190.875 20.63 191.005 20.586 191.209 20.518 A 152.913 152.913 0 0 1 191.223 20.513 A 4.095 4.095 0 0 0 191.432 20.443 C 191.898 20.272 192.018 20.105 191.76 19.976 A 0.807 0.807 0 0 0 191.525 19.855 C 191.2 19.74 190.652 19.683 189.905 19.683 A 47.952 47.952 0 0 1 188.983 19.677 C 188.66 19.671 188.318 19.659 187.952 19.634 C 187.219 19.634 186.584 19.585 186.047 19.537 A 12.957 12.957 0 0 0 185.666 19.491 C 185.284 19.452 185.008 19.442 184.827 19.44 A 10.542 10.542 0 0 0 184.68 19.439 C 184.485 19.488 184.485 19.585 184.68 19.732 C 185.093 20.007 185.075 20.067 184.624 19.911 A 6.57 6.57 0 0 1 184.534 19.878 A 17.479 17.479 0 0 0 183.097 19.468 A 21.029 21.029 0 0 0 182.043 19.244 A 32.466 32.466 0 0 0 181.162 19.138 C 180.617 19.081 180.007 19.03 179.358 18.999 A 21.016 21.016 0 0 0 178.863 18.97 C 178.484 18.952 178.135 18.943 177.807 18.921 A 9.938 9.938 0 0 1 177.551 18.902 C 177.081 18.816 176.723 18.768 176.543 18.725 A 0.82 0.82 0 0 1 176.477 18.706 A 4.24 4.24 0 0 0 176.158 18.642 C 175.809 18.584 175.303 18.526 174.64 18.467 A 59.291 59.291 0 0 0 173.987 18.413 A 164.104 164.104 0 0 0 171.985 18.346 A 81.722 81.722 0 0 0 169.836 18.316 C 168.665 18.316 167.786 18.218 167.2 18.072 A 2.968 2.968 0 0 1 166.986 18.011 C 166.57 17.872 166.451 17.697 166.663 17.486 C 166.83 17.36 167.463 17.306 168.593 17.263 A 97.796 97.796 0 0 1 169.202 17.242 A 108.698 108.698 0 0 1 171.582 17.272 A 535.286 535.286 0 0 1 174.182 17.339 A 46.058 46.058 0 0 1 176.014 17.425 C 176.523 17.459 177.001 17.5 177.445 17.543 A 47.144 47.144 0 0 1 178.674 17.681 A 10.179 10.179 0 0 0 178.799 17.697 C 179.422 17.772 179.53 17.715 179.163 17.486 C 179.025 17.44 178.585 17.351 177.844 17.259 A 25.254 25.254 0 0 0 177.698 17.242 C 177.161 17.174 176.554 17.13 175.879 17.094 A 107.456 107.456 0 0 0 174.915 17.046 A 241.022 241.022 0 0 1 173.633 16.982 C 173.374 16.968 173.126 16.955 172.891 16.941 A 82.16 82.16 0 0 1 172.229 16.9 A 32.22 32.22 0 0 1 171.848 16.872 C 171.412 16.838 171.125 16.804 171.004 16.769 A 0.264 0.264 0 0 1 170.959 16.753 C 170.912 16.753 170.679 16.707 170.261 16.659 A 13.51 13.51 0 0 0 170.227 16.656 C 169.836 16.656 169.348 16.607 168.811 16.607 C 168.274 16.607 167.834 16.558 167.444 16.509 A 5.56 5.56 0 0 1 167.267 16.481 C 167.088 16.45 166.967 16.415 166.902 16.365 A 0.149 0.149 0 0 1 166.858 16.314 C 166.858 16.265 166.956 16.07 167.053 15.874 A 4.071 4.071 0 0 1 167.23 15.502 C 167.297 15.374 167.371 15.24 167.444 15.093 C 167.542 14.947 167.59 14.8 167.688 14.703 A 3.312 3.312 0 0 1 167.69 14.698 C 167.751 14.577 167.811 14.475 167.86 14.381 A 1.204 1.204 0 0 0 167.932 14.214 A 0.7 0.7 0 0 0 167.969 13.988 C 167.969 13.909 167.957 13.824 167.932 13.726 A 1.983 1.983 0 0 0 167.871 13.527 C 167.826 13.404 167.762 13.262 167.673 13.095 A 5.692 5.692 0 0 0 167.59 12.945 A 2.596 2.596 0 0 0 167.689 12.724 C 167.793 12.456 167.813 12.238 167.749 12.05 A 0.669 0.669 0 0 0 167.737 12.017 A 1.924 1.924 0 0 0 167.554 11.724 C 167.49 11.639 167.416 11.553 167.333 11.468 A 3.239 3.239 0 0 0 167.297 11.431 L 167.053 11.187 A 0.264 0.264 0 0 0 167.011 11.155 C 166.928 11.101 166.754 11.022 166.516 10.943 C 166.223 10.845 165.881 10.796 165.491 10.699 A 43.678 43.678 0 0 1 164.935 10.625 A 107.242 107.242 0 0 1 164.417 10.552 A 92.02 92.02 0 0 0 163.568 10.479 C 163.306 10.458 163.031 10.436 162.737 10.415 A 100.151 100.151 0 0 0 162.61 10.406 C 162.138 10.372 161.713 10.338 161.334 10.305 A 44.413 44.413 0 0 1 160.852 10.259 A 7 7 0 0 0 160.569 10.23 C 160.312 10.209 160.085 10.199 159.906 10.167 A 1.496 1.496 0 0 1 159.875 10.162 C 159.631 10.162 159.387 10.21 159.094 10.259 A 6.522 6.522 0 0 0 158.785 10.317 C 158.68 10.34 158.583 10.365 158.494 10.398 A 1.268 1.268 0 0 0 158.362 10.454 A 1.181 1.181 0 0 0 158.24 10.524 C 158.123 10.601 158.057 10.684 158.02 10.796 A 1.117 1.117 0 0 0 158.082 11.126 A 6.138 6.138 0 0 0 158.118 11.236 C 158.213 11.331 158.355 11.52 158.544 11.71 A 3.372 3.372 0 0 0 158.557 11.724 A 1.741 1.741 0 0 1 158.658 11.796 C 158.749 11.867 158.813 11.932 158.85 11.968 A 0.223 0.223 0 0 1 158.879 11.97 C 158.948 11.979 158.953 12.022 158.997 12.066 L 159.143 12.212 A 0.186 0.186 0 0 1 159.167 12.244 C 159.208 12.309 159.249 12.424 159.29 12.505 L 159.485 12.896 A 0.199 0.199 0 0 1 159.506 12.921 C 159.535 12.961 159.542 13.001 159.581 13.041 A 0.209 0.209 0 0 0 159.583 13.042 C 159.583 13.076 159.605 13.109 159.635 13.142 A 1.229 1.229 0 0 0 159.68 13.189 A 0.368 0.368 0 0 1 159.72 13.238 C 159.758 13.292 159.802 13.371 159.871 13.476 A 3.5 3.5 0 0 0 159.875 13.482 A 2.637 2.637 0 0 1 160.035 13.651 C 160.068 13.69 160.095 13.728 160.116 13.767 A 0.422 0.422 0 0 1 160.12 13.775 A 3.074 3.074 0 0 1 160.256 13.846 C 160.3 13.871 160.339 13.896 160.364 13.921 A 0.823 0.823 0 0 1 160.414 13.949 C 160.466 13.979 160.506 14.01 160.557 14.04 A 0.823 0.823 0 0 0 160.608 14.068 C 160.694 14.111 160.742 14.192 160.82 14.312 A 4.58 4.58 0 0 0 160.852 14.361 C 160.899 14.455 160.901 14.549 160.945 14.6 A 0.107 0.107 0 0 0 160.95 14.605 A 0.852 0.852 0 0 0 160.951 14.607 C 160.988 14.681 161.025 14.727 161.04 14.766 A 0.094 0.094 0 0 1 161.047 14.8 A 0.326 0.326 0 0 1 161.075 14.832 C 161.114 14.883 161.153 14.954 161.192 14.994 A 0.215 0.215 0 0 0 161.194 14.996 A 0.213 0.213 0 0 1 161.196 14.998 C 161.244 15.047 161.293 15.143 161.389 15.24 C 161.519 15.413 161.687 15.547 161.86 15.712 A 3.833 3.833 0 0 1 161.926 15.777 A 2.118 2.118 0 0 1 162.454 16.218 C 162.523 16.296 162.592 16.379 162.662 16.468 A 11.018 11.018 0 0 1 162.805 16.656 Z M 64.832 50.805 A 0.279 0.279 0 0 1 64.758 50.831 A 0.256 0.256 0 0 1 64.709 50.835 A 1.003 1.003 0 0 0 64.639 50.852 C 64.5 50.89 64.42 50.951 64.387 51.048 A 0.392 0.392 0 0 0 64.368 51.177 A 0.304 0.304 0 0 1 64.354 51.258 C 64.322 51.369 64.239 51.544 64.126 51.806 A 17.558 17.558 0 0 0 64.124 51.812 A 9.109 9.109 0 0 1 64.012 52.06 C 63.883 52.339 63.725 52.647 63.538 52.984 A 6.01 6.01 0 0 0 63.129 53.697 A 6.625 6.625 0 0 0 62.805 54.497 A 10.236 10.236 0 0 0 62.746 54.63 C 62.537 55.108 62.406 55.511 62.317 55.913 C 62.25 56.148 62.183 56.383 62.115 56.587 A 4.47 4.47 0 0 1 62.024 56.841 A 3.481 3.481 0 0 1 62.001 56.887 C 61.9 57.081 61.824 57.18 61.773 57.236 A 1.086 1.086 0 0 1 61.731 57.281 A 0.222 0.222 0 0 0 61.627 57.308 C 61.466 57.392 61.306 57.669 61.145 58.111 C 60.95 58.599 60.852 59.185 60.754 59.82 A 1.475 1.475 0 0 1 60.699 60.232 A 1.342 1.342 0 0 1 60.559 60.552 C 60.493 60.716 60.406 60.858 60.311 60.963 A 0.774 0.774 0 0 1 60.168 61.089 A 19.853 19.853 0 0 1 60.167 61.091 C 59.826 61.48 59.729 61.479 59.924 61.138 A 0.77 0.77 0 0 0 59.94 61.085 C 60.009 60.815 59.897 60.586 59.485 60.357 A 1.469 1.469 0 0 1 59.253 60.124 A 1.773 1.773 0 0 1 58.997 59.673 A 1.452 1.452 0 0 1 58.986 59.599 C 58.97 59.459 58.977 59.331 59 59.215 A 1.093 1.093 0 0 1 59.094 58.941 C 59.241 58.697 59.436 58.599 59.729 58.648 A 1.072 1.072 0 0 0 59.8 58.646 A 0.814 0.814 0 0 0 60.217 58.501 A 1.324 1.324 0 0 0 60.325 58.412 A 1.298 1.298 0 0 0 60.608 58.013 A 2.612 2.612 0 0 1 60.664 57.883 C 60.743 57.713 60.822 57.594 60.901 57.476 C 60.976 57.363 61.051 57.308 61.104 57.289 A 0.122 0.122 0 0 1 61.145 57.281 C 61.243 57.281 61.292 57.232 61.34 57.134 C 61.389 57.037 61.389 56.89 61.389 56.744 A 1.652 1.652 0 0 0 61.367 56.681 C 61.352 56.643 61.337 56.609 61.321 56.579 A 0.297 0.297 0 0 0 61.194 56.451 A 0.346 0.346 0 0 0 61.156 56.418 C 61.07 56.354 60.98 56.359 60.852 56.402 A 0.786 0.786 0 0 1 60.827 56.408 C 60.686 56.438 60.599 56.413 60.522 56.333 A 0.568 0.568 0 0 1 60.461 56.255 C 60.364 56.109 60.364 55.913 60.364 55.669 A 1.929 1.929 0 0 1 60.396 55.557 C 60.421 55.477 60.453 55.391 60.493 55.302 A 2.88 2.88 0 0 1 60.657 54.986 C 60.803 54.742 60.999 54.351 61.243 53.814 C 61.438 53.326 61.584 52.837 61.731 52.349 A 1.019 1.019 0 0 1 61.758 52.268 C 61.85 52.024 62.007 51.938 62.227 51.983 A 0.778 0.778 0 0 1 62.317 52.007 A 1.999 1.999 0 0 0 62.375 52.035 C 62.596 52.137 62.639 52.096 62.503 51.912 A 1.7 1.7 0 0 0 62.463 51.861 A 0.928 0.928 0 0 1 62.371 51.751 C 62.326 51.689 62.282 51.617 62.237 51.537 A 9.221 9.221 0 0 1 62.024 51.128 A 11.349 11.349 0 0 0 62.007 51.077 C 61.967 50.959 61.928 50.849 61.897 50.743 A 1.401 1.401 0 0 1 61.829 50.347 C 61.78 50.103 61.877 50.054 62.073 50.103 A 2.181 2.181 0 0 0 62.149 50.112 C 62.436 50.143 62.561 50.088 62.561 49.908 C 62.561 49.8 62.456 49.666 62.284 49.525 A 2.684 2.684 0 0 0 62.073 49.371 A 1.434 1.434 0 0 1 61.996 49.329 C 61.91 49.28 61.848 49.23 61.803 49.181 A 0.452 0.452 0 0 1 61.731 49.078 A 0.237 0.237 0 0 1 61.719 49.002 C 61.719 48.913 61.77 48.824 61.861 48.735 A 1.158 1.158 0 0 1 61.975 48.638 A 1.225 1.225 0 0 1 62.154 48.53 C 62.299 48.456 62.491 48.382 62.724 48.308 A 9.453 9.453 0 0 1 63.098 48.199 C 63.245 48.15 63.293 48.101 63.342 48.003 A 0.366 0.366 0 0 0 63.356 47.973 C 63.384 47.901 63.383 47.83 63.334 47.759 A 0.34 0.34 0 0 0 63.293 47.71 A 0.45 0.45 0 0 1 63.28 47.704 C 63.218 47.67 63.155 47.618 63.092 47.588 A 0.214 0.214 0 0 0 63 47.564 A 3.718 3.718 0 0 0 62.935 47.564 C 62.842 47.566 62.765 47.575 62.672 47.624 A 0.71 0.71 0 0 0 62.61 47.662 A 2.791 2.791 0 0 0 62.604 47.662 C 62.561 47.662 62.561 47.664 62.561 47.71 L 62.512 47.71 L 62.415 47.71 A 0.093 0.093 0 0 0 62.388 47.715 C 62.362 47.722 62.336 47.739 62.31 47.749 A 0.113 0.113 0 0 1 62.268 47.759 C 62.122 47.759 61.682 47.808 61.047 47.906 A 13.583 13.583 0 0 1 60.421 47.956 C 59.662 48.001 58.837 47.993 57.922 47.954 A 24.632 24.632 0 0 0 57.562 47.943 C 56.829 47.924 56.19 47.942 55.632 47.984 A 14.065 14.065 0 0 0 54.944 48.052 A 10.889 10.889 0 0 1 54.642 48.117 C 54.092 48.228 53.496 48.304 52.795 48.345 A 31.383 31.383 0 0 0 52.03 48.405 C 51.531 48.448 51.054 48.492 50.598 48.492 C 50.47 48.524 50.342 48.535 50.227 48.538 A 4.929 4.929 0 0 1 50.061 48.54 A 12.971 12.971 0 0 1 49.861 48.556 C 49.486 48.581 49.179 48.584 48.939 48.564 A 2.397 2.397 0 0 1 48.743 48.54 A 1.273 1.273 0 0 1 48.679 48.539 C 48.421 48.526 48.24 48.435 48.059 48.345 A 6.255 6.255 0 0 1 47.924 48.207 C 47.866 48.145 47.808 48.079 47.75 48.002 A 2.229 2.229 0 0 1 47.62 47.808 A 0.538 0.538 0 0 1 47.542 47.744 C 47.435 47.639 47.348 47.488 47.229 47.369 C 46.936 47.076 46.692 46.685 46.448 46.246 A 5.911 5.911 0 0 1 46.299 45.959 C 46.141 45.635 46.035 45.339 45.959 45.074 A 10.304 10.304 0 0 1 45.955 45.055 C 45.888 44.787 45.844 44.564 45.791 44.338 A 6.631 6.631 0 0 0 45.715 44.048 A 41.269 41.269 0 0 1 45.587 43.541 C 45.323 42.465 45.159 41.614 45.032 41.021 A 5.954 5.954 0 0 1 45.01 40.852 C 44.943 40.264 44.995 39.873 45.129 39.605 C 45.325 39.361 45.667 39.165 46.155 39.068 C 46.887 38.921 48.108 38.921 49.817 39.019 A 224.817 224.817 0 0 0 50.879 39.092 A 274.379 274.379 0 0 0 52.014 39.165 A 68.61 68.61 0 0 0 52.893 39.185 C 53.796 39.199 54.773 39.195 55.823 39.155 A 47.643 47.643 0 0 0 58.02 39.019 A 1451.073 1451.073 0 0 0 58.365 39.004 C 59.164 38.971 59.889 38.942 60.523 38.952 A 11.997 11.997 0 0 1 61.047 38.97 A 25.101 25.101 0 0 0 61.13 38.974 C 62.197 39.016 62.709 38.965 62.756 38.775 A 0.601 0.601 0 0 1 62.72 38.734 C 62.675 38.679 62.603 38.585 62.479 38.453 A 4.777 4.777 0 0 0 62.366 38.335 A 10.892 10.892 0 0 0 61.936 37.841 A 5.084 5.084 0 0 0 61.536 37.456 A 15.906 15.906 0 0 1 60.954 36.841 A 28.414 28.414 0 0 1 60.51 36.333 A 7.866 7.866 0 0 0 60.285 36.091 A 11.49 11.49 0 0 0 59.192 35.113 A 10.09 10.09 0 0 1 58.917 34.894 C 58.414 34.478 58.018 34.063 57.727 33.648 A 57.851 57.851 0 0 0 57.257 33.031 A 210.491 210.491 0 0 0 56.75 32.378 A 131.327 131.327 0 0 1 56.7 32.321 C 56.38 31.954 56.104 31.636 55.872 31.451 A 4.501 4.501 0 0 1 55.56 31.107 A 3.362 3.362 0 0 1 55.286 30.718 A 2.623 2.623 0 0 1 55.162 30.551 C 55.046 30.381 54.981 30.232 54.944 30.083 A 0.481 0.481 0 0 0 54.865 29.806 A 0.429 0.429 0 0 0 54.749 29.693 A 0.445 0.445 0 0 0 54.681 29.613 A 0.462 0.462 0 0 0 54.358 29.497 A 0.267 0.267 0 0 1 54.314 29.493 C 54.165 29.468 53.939 29.323 53.674 29.058 C 53.506 28.857 53.316 28.632 53.133 28.369 A 4.614 4.614 0 0 1 52.893 27.984 A 4.467 4.467 0 0 1 52.621 27.576 A 4.799 4.799 0 0 1 52.258 26.812 A 0.92 0.92 0 0 0 52.129 26.621 C 51.946 26.409 51.638 26.22 51.184 26.031 A 3.14 3.14 0 0 1 50.969 25.954 C 50.467 25.757 49.927 25.405 49.348 24.899 A 12.217 12.217 0 0 1 48.547 24.126 A 18.555 18.555 0 0 1 47.998 23.325 C 47.651 22.788 47.395 22.312 47.229 21.88 A 3.52 3.52 0 0 0 46.204 20.269 C 44.934 19.146 44.836 18.511 45.911 18.316 C 46.094 18.279 46.442 18.215 46.913 18.144 A 30.741 30.741 0 0 1 47.424 18.072 A 47.385 47.385 0 0 1 47.799 17.998 A 129.815 129.815 0 0 1 48.987 17.779 A 0.879 0.879 0 0 0 49.126 17.718 C 49.204 17.676 49.29 17.617 49.396 17.537 A 6.624 6.624 0 0 0 49.524 17.437 A 2.863 2.863 0 0 0 49.675 17.315 A 8.338 8.338 0 0 0 50.11 16.9 A 4.157 4.157 0 0 1 50.278 16.742 C 50.412 16.621 50.54 16.518 50.644 16.415 A 1.902 1.902 0 0 0 50.647 16.412 A 1.508 1.508 0 0 1 50.739 16.326 C 50.855 16.228 50.971 16.167 51.086 16.167 L 54.553 14.751 A 4.494 4.494 0 0 0 54.742 14.747 C 54.939 14.739 55.106 14.719 55.244 14.694 A 2.864 2.864 0 0 0 55.432 14.654 C 55.623 14.616 55.784 14.607 55.892 14.605 A 4.398 4.398 0 0 1 55.969 14.605 A 1.689 1.689 0 0 1 56.018 14.605 C 56.08 14.607 56.135 14.616 56.156 14.659 A 0.099 0.099 0 0 1 56.165 14.703 A 0.131 0.131 0 0 1 56.176 14.715 C 56.199 14.746 56.222 14.798 56.238 14.86 A 0.742 0.742 0 0 1 56.262 15.044 C 56.262 15.322 56.359 15.793 56.579 16.484 A 18.823 18.823 0 0 0 56.75 16.997 A 8.785 8.785 0 0 0 57.057 17.716 C 57.34 18.312 57.741 19.034 58.261 19.868 A 41.817 41.817 0 0 0 59.094 21.148 C 60.641 23.647 61.576 25.341 61.925 26.255 A 2.517 2.517 0 0 1 62.073 26.763 A 0.807 0.807 0 0 1 62.079 26.781 C 62.114 26.897 62.122 27.009 62.149 27.072 A 0.108 0.108 0 0 0 62.17 27.105 C 62.25 27.264 62.458 27.616 62.821 28.187 A 63.701 63.701 0 0 0 63.098 28.619 A 55.468 55.468 0 0 0 63.873 29.9 A 38.93 38.93 0 0 0 64.758 31.255 A 286.416 286.416 0 0 0 65.168 31.902 C 65.556 32.513 65.868 33 66.125 33.404 A 12.849 12.849 0 0 1 66.206 33.526 C 66.364 33.769 66.488 33.981 66.569 34.172 A 1.37 1.37 0 0 1 66.663 34.478 A 0.773 0.773 0 0 1 66.701 34.606 C 66.743 34.805 66.703 34.992 66.663 35.113 A 3.492 3.492 0 0 1 66.626 35.184 C 66.565 35.299 66.504 35.4 66.443 35.511 A 3.845 3.845 0 0 0 66.37 35.65 A 1.611 1.611 0 0 0 66.16 35.906 A 2.213 2.213 0 0 0 66.028 36.138 C 65.93 36.333 65.881 36.626 65.881 36.919 L 65.686 38.775 L 67.102 38.726 A 1.463 1.463 0 0 0 67.267 38.716 A 3.589 3.589 0 0 0 67.981 38.531 C 68.145 38.465 68.287 38.377 68.392 38.283 A 0.774 0.774 0 0 0 68.518 38.14 A 7.614 7.614 0 0 1 68.624 38.036 C 68.735 37.929 68.846 37.835 68.958 37.798 A 0.761 0.761 0 0 1 69.018 37.762 C 69.1 37.717 69.163 37.705 69.208 37.702 A 0.541 0.541 0 0 1 69.25 37.701 A 0.105 0.105 0 0 1 69.277 37.745 C 69.294 37.8 69.276 37.883 69.202 37.994 C 69.164 38.07 69.155 38.146 69.153 38.199 A 1.079 1.079 0 0 0 69.153 38.238 A 1.229 1.229 0 0 0 69.2 38.283 C 69.233 38.313 69.266 38.335 69.299 38.335 C 69.397 38.335 69.543 38.287 69.69 38.238 C 69.781 38.177 69.873 38.135 69.965 38.088 A 1.615 1.615 0 0 0 70.129 37.994 C 70.227 37.945 70.325 37.847 70.374 37.798 A 0.231 0.231 0 0 0 70.39 37.789 C 70.441 37.758 70.436 37.728 70.413 37.712 A 0.072 0.072 0 0 0 70.374 37.701 C 70.288 37.701 70.278 37.626 70.341 37.543 A 0.361 0.361 0 0 1 70.374 37.505 A 0.438 0.438 0 0 1 70.396 37.452 C 70.459 37.322 70.593 37.189 70.764 37.017 A 3.504 3.504 0 0 1 70.809 36.959 C 70.94 36.791 71.067 36.655 71.155 36.48 A 3.236 3.236 0 0 1 71.176 36.401 C 71.216 36.256 71.245 36.173 71.204 36.089 A 0.164 0.164 0 0 1 71.166 36.064 C 71.108 36.011 71.121 35.928 71.204 35.845 A 0.275 0.275 0 0 1 71.292 35.743 C 71.344 35.706 71.412 35.678 71.497 35.65 A 4.347 4.347 0 0 1 71.57 35.602 C 71.678 35.533 71.758 35.486 71.838 35.406 A 0.337 0.337 0 0 0 71.862 35.345 C 71.879 35.286 71.872 35.23 71.831 35.19 A 0.165 0.165 0 0 0 71.79 35.162 A 5.666 5.666 0 0 1 71.75 35.082 C 71.727 35.034 71.708 34.99 71.698 34.955 A 0.147 0.147 0 0 1 71.692 34.917 C 71.704 34.892 71.714 34.871 71.722 34.851 A 5.886 5.886 0 0 0 71.723 34.85 M 102.342 43.198 A 0.918 0.918 0 0 1 102.356 43.169 A 1.373 1.373 0 0 0 102.351 43.024 C 102.347 42.993 102.342 42.959 102.334 42.923 A 1.002 1.002 0 0 0 102.307 42.828 C 102.258 42.73 102.258 42.583 102.307 42.437 A 0.784 0.784 0 0 1 102.37 42.146 A 1.393 1.393 0 0 1 102.502 41.9 C 102.733 41.531 102.746 41.38 102.459 41.446 A 1.104 1.104 0 0 0 102.405 41.46 C 102.092 41.505 102.025 41.427 102.203 41.189 A 1.705 1.705 0 0 1 102.258 41.119 C 102.307 40.972 102.356 40.826 102.356 40.581 A 1.207 1.207 0 0 0 102.355 40.548 C 102.35 40.364 102.304 40.177 102.258 39.947 A 1.217 1.217 0 0 1 102.166 39.691 C 102.146 39.612 102.132 39.526 102.123 39.432 A 2.836 2.836 0 0 1 102.112 39.165 A 2.663 2.663 0 0 1 102.112 39.147 C 102.113 38.944 102.138 38.72 102.185 38.521 A 1.712 1.712 0 0 1 102.258 38.287 A 4.732 4.732 0 0 0 102.265 38.267 C 102.33 38.069 102.395 37.828 102.46 37.544 A 16.113 16.113 0 0 0 102.551 37.115 A 37.732 37.732 0 0 0 102.692 36.388 A 10.538 10.538 0 0 0 102.795 35.699 A 141.471 141.471 0 0 0 102.879 35.317 A 14.06 14.06 0 0 1 103.137 34.283 C 103.271 33.913 103.383 33.613 103.487 33.367 A 5.207 5.207 0 0 1 103.625 33.062 A 21.783 21.783 0 0 0 103.888 32.525 A 5.901 5.901 0 0 0 104.016 32.232 C 104.058 32.023 104.099 31.851 104.08 31.744 A 0.18 0.18 0 0 0 104.065 31.695 A 0.111 0.111 0 0 1 104.056 31.667 C 104.033 31.556 104.126 31.32 104.26 30.962 A 3.44 3.44 0 0 1 104.382 30.679 C 104.458 30.521 104.548 30.358 104.649 30.186 A 50.919 50.919 0 0 1 104.944 29.693 C 105.235 29.208 105.429 28.772 105.623 28.384 A 12.763 12.763 0 0 1 105.627 28.374 A 5.028 5.028 0 0 0 105.696 28.18 C 105.772 27.951 105.803 27.784 105.789 27.665 A 0.351 0.351 0 0 0 105.774 27.593 C 105.683 27.366 105.719 27.265 105.843 27.292 A 0.276 0.276 0 0 1 105.872 27.3 A 3.171 3.171 0 0 0 105.924 27.3 C 106.026 27.298 106.108 27.286 106.21 27.202 A 0.755 0.755 0 0 0 106.262 27.154 A 1.096 1.096 0 0 0 106.508 26.932 A 0.568 0.568 0 0 0 106.604 26.763 A 0.522 0.522 0 0 0 106.64 26.7 C 106.671 26.636 106.682 26.575 106.675 26.525 A 0.132 0.132 0 0 0 106.604 26.421 C 106.555 26.372 106.604 26.275 106.702 26.079 A 2.723 2.723 0 0 0 106.852 25.914 C 106.953 25.795 107.061 25.655 107.19 25.494 A 2.423 2.423 0 0 0 107.511 25.181 A 4.237 4.237 0 0 0 107.825 24.761 C 107.926 24.559 108.026 24.381 108.095 24.225 A 1.232 1.232 0 0 0 108.167 24.029 A 4.217 4.217 0 0 1 108.24 23.759 A 1.078 1.078 0 0 1 108.362 23.492 A 0.505 0.505 0 0 1 108.421 23.37 C 108.472 23.293 108.539 23.247 108.606 23.247 C 108.655 23.199 108.801 23.15 108.948 23.003 A 1.965 1.965 0 0 1 109.069 22.844 C 109.15 22.746 109.244 22.64 109.338 22.515 A 34.808 34.808 0 0 1 109.704 21.977 C 109.957 21.612 110.179 21.311 110.374 21.062 A 9.747 9.747 0 0 1 110.706 20.66 A 20.469 20.469 0 0 1 110.909 20.458 C 111.05 20.321 111.174 20.209 111.292 20.132 A 0.702 0.702 0 0 1 111.536 20.025 A 7.43 7.43 0 0 1 111.702 19.92 C 111.762 19.883 111.826 19.841 111.891 19.792 A 1.722 1.722 0 0 0 112.073 19.634 C 112.268 19.439 112.463 19.244 112.61 19.048 A 1.31 1.31 0 0 1 112.722 18.892 C 112.883 18.696 113.122 18.487 113.391 18.218 C 113.626 17.983 113.884 17.771 114.134 17.582 A 14.777 14.777 0 0 1 114.465 17.339 C 114.856 17.095 115.1 16.851 115.247 16.704 C 115.393 16.558 115.393 16.509 115.198 16.558 A 3.474 3.474 0 0 1 115.096 16.568 C 114.851 16.588 114.678 16.572 114.587 16.522 A 0.124 0.124 0 0 1 114.514 16.412 C 114.474 16.29 114.602 16.134 114.898 15.945 A 3.893 3.893 0 0 1 115.1 15.826 A 6.168 6.168 0 0 1 115.154 15.801 C 115.679 15.569 116.296 15.383 117.004 15.288 A 14.048 14.048 0 0 1 119.366 15.093 C 120.126 15.093 120.906 15.15 121.708 15.265 A 21.104 21.104 0 0 1 124.524 15.874 A 21.624 21.624 0 0 1 124.81 15.948 A 40.585 40.585 0 0 1 125.598 16.167 C 125.838 16.207 126.013 16.247 126.095 16.261 A 0.287 0.287 0 0 0 126.135 16.265 C 126.379 16.167 126.868 16.363 127.649 16.704 A 19.079 19.079 0 0 1 129.797 17.974 C 130.302 18.298 130.647 18.596 130.852 18.848 A 1.379 1.379 0 0 1 131.018 19.097 C 131.116 19.244 131.213 19.39 131.36 19.488 C 131.446 19.574 131.533 19.623 131.654 19.598 A 0.403 0.403 0 0 0 131.702 19.585 C 131.924 19.541 131.984 19.658 131.847 19.936 A 1.667 1.667 0 0 1 131.799 20.025 A 7.796 7.796 0 0 1 131.768 20.115 C 131.734 20.214 131.712 20.291 131.75 20.367 A 0.264 0.264 0 0 0 131.751 20.376 C 131.753 20.447 131.785 20.461 131.847 20.464 A 1.198 1.198 0 0 0 131.897 20.464 A 1.176 1.176 0 0 1 132.043 20.47 A 0.445 0.445 0 0 1 132.19 20.513 A 2.14 2.14 0 0 1 132.263 20.551 A 0.382 0.382 0 0 1 132.434 20.708 C 132.483 20.854 132.579 20.999 132.724 21.241 A 14.5 14.5 0 0 1 132.727 21.246 C 132.874 21.441 133.02 21.685 133.167 21.929 C 133.43 22.28 133.535 22.513 133.519 22.592 A 0.041 0.041 0 0 1 133.508 22.613 C 133.508 22.697 133.328 22.708 133.06 22.648 A 2.523 2.523 0 0 1 132.922 22.613 A 1.712 1.712 0 0 1 132.239 22.32 A 2.79 2.79 0 0 1 132.135 22.238 C 132.066 22.181 132.004 22.123 131.949 22.066 A 1.4 1.4 0 0 1 131.799 21.88 A 1.068 1.068 0 0 0 131.792 21.859 C 131.697 21.593 131.605 21.699 131.653 22.222 A 6.742 6.742 0 0 0 131.658 22.474 C 131.675 22.915 131.729 23.578 131.808 24.464 A 601.744 601.744 0 0 0 131.897 25.445 A 3.426 3.426 0 0 1 131.92 25.609 C 131.948 25.844 131.955 26.067 131.995 26.226 A 2.551 2.551 0 0 0 131.995 26.229 C 132.031 26.372 132.067 26.462 132.103 26.499 A 0.054 0.054 0 0 0 132.141 26.519 A 0.032 0.032 0 0 1 132.169 26.536 C 132.19 26.571 132.19 26.653 132.19 26.763 C 132.19 26.958 132.19 27.154 132.141 27.398 C 132.107 27.605 132.072 27.763 132.072 27.907 A 0.709 0.709 0 0 0 132.092 28.081 C 132.092 28.207 132.112 28.312 132.152 28.384 A 0.207 0.207 0 0 0 132.239 28.472 C 132.336 28.521 132.385 28.667 132.434 28.863 C 132.467 28.993 132.456 29.145 132.445 29.304 A 3.567 3.567 0 0 0 132.434 29.546 C 132.391 29.717 132.311 29.925 132.259 30.073 A 3.616 3.616 0 0 0 132.239 30.132 A 0.887 0.887 0 0 1 132.205 30.195 C 132.118 30.338 132.026 30.376 131.897 30.376 A 1.449 1.449 0 0 0 131.869 30.371 C 131.667 30.335 131.622 30.377 131.837 30.53 A 2.208 2.208 0 0 0 131.897 30.572 C 132.141 30.767 132.141 30.962 131.946 31.206 A 0.686 0.686 0 0 0 131.871 31.264 C 131.819 31.31 131.784 31.358 131.756 31.413 A 0.985 0.985 0 0 0 131.702 31.548 A 0.38 0.38 0 0 0 131.677 31.575 C 131.604 31.664 131.604 31.752 131.604 31.841 A 1.875 1.875 0 0 1 131.662 31.965 A 0.45 0.45 0 0 1 131.702 32.134 C 131.734 32.198 131.745 32.262 131.762 32.326 A 0.541 0.541 0 0 0 131.799 32.427 C 131.799 32.513 131.799 32.561 131.767 32.637 A 0.661 0.661 0 0 1 131.75 32.671 C 131.725 32.696 131.687 32.722 131.643 32.747 A 3.074 3.074 0 0 1 131.506 32.818 A 0.837 0.837 0 0 1 131.353 32.805 A 0.415 0.415 0 0 1 131.067 32.622 A 1.531 1.531 0 0 1 131.006 32.485 A 1.247 1.247 0 0 1 130.92 32.037 C 130.92 31.953 130.932 31.88 130.953 31.817 A 0.512 0.512 0 0 1 131.165 31.548 C 131.257 31.486 131.33 31.425 131.384 31.363 A 0.522 0.522 0 0 0 131.458 31.255 A 0.269 0.269 0 0 0 131.459 31.252 C 131.484 31.2 131.481 31.162 131.466 31.131 A 0.281 0.281 0 0 0 131.409 31.06 A 0.195 0.195 0 0 1 131.328 30.98 C 131.298 30.928 131.278 30.855 131.269 30.762 A 1.408 1.408 0 0 1 131.262 30.621 L 131.262 29.79 C 131.311 29.449 131.311 29.107 131.311 28.765 A 33.516 33.516 0 0 0 131.242 28.299 C 131.229 28.212 131.215 28.131 131.201 28.058 A 3.059 3.059 0 0 0 131.165 27.886 A 1.184 1.184 0 0 1 131.126 27.775 C 131.094 27.664 131.08 27.554 131.073 27.451 A 3.71 3.71 0 0 1 131.067 27.203 A 1.03 1.03 0 0 1 131.071 27.106 C 131.077 27.048 131.087 26.994 131.104 26.946 A 0.46 0.46 0 0 1 131.213 26.763 A 0.24 0.24 0 0 0 131.214 26.762 C 131.337 26.596 131.286 26.223 130.974 25.671 A 5.185 5.185 0 0 0 130.774 25.347 A 10.722 10.722 0 0 1 130.678 25.175 C 130.578 24.993 130.497 24.829 130.442 24.692 A 1.4 1.4 0 0 1 130.383 24.517 A 0.786 0.786 0 0 1 130.376 24.501 C 130.295 24.33 130.331 24.239 130.412 24.265 A 0.136 0.136 0 0 1 130.432 24.273 C 130.562 24.273 130.538 24.119 130.395 23.778 A 7.364 7.364 0 0 0 130.334 23.638 A 21.332 21.332 0 0 0 130.172 23.281 C 130.004 22.919 129.795 22.511 129.504 22.076 A 1034.879 1034.879 0 0 0 129.431 21.957 A 57.724 57.724 0 0 0 128.333 20.22 C 128.072 19.872 127.845 19.576 127.633 19.321 A 6.999 6.999 0 0 0 127.209 18.853 A 6.686 6.686 0 0 0 126.825 18.496 A 5.23 5.23 0 0 0 126.331 18.121 A 2.566 2.566 0 0 0 126.268 18.07 C 126.074 17.919 125.905 17.833 125.774 17.798 A 0.496 0.496 0 0 0 125.647 17.779 A 1.081 1.081 0 0 0 125.611 17.774 C 125.333 17.744 125.274 17.857 125.402 18.017 A 0.676 0.676 0 0 0 125.452 18.072 A 0.729 0.729 0 0 1 125.498 18.122 C 125.524 18.154 125.546 18.186 125.562 18.218 A 0.325 0.325 0 0 1 125.598 18.365 A 0.233 0.233 0 0 1 125.607 18.383 C 125.64 18.469 125.589 18.511 125.452 18.511 A 0.383 0.383 0 0 1 125.417 18.526 C 125.359 18.549 125.3 18.554 125.241 18.541 A 0.353 0.353 0 0 1 125.159 18.511 A 1.652 1.652 0 0 1 125.096 18.489 C 125.058 18.474 125.024 18.459 124.994 18.443 A 0.297 0.297 0 0 1 124.866 18.316 C 124.742 18.233 124.445 18.255 123.974 18.381 A 7.922 7.922 0 0 0 123.694 18.462 A 10 10 0 0 0 123.681 18.466 C 123.402 18.553 123.104 18.658 122.796 18.781 A 12.359 12.359 0 0 0 121.594 19.341 C 121.191 19.517 120.828 19.707 120.496 19.902 A 10.613 10.613 0 0 0 119.641 20.464 C 118.03 21.783 116.321 23.492 114.612 25.64 A 40.946 40.946 0 0 0 113.508 27.047 C 112.413 28.511 111.738 29.671 111.438 30.572 A 0.426 0.426 0 0 1 111.437 30.602 C 111.423 30.797 111.279 31.082 111.047 31.499 A 6.96 6.96 0 0 1 110.827 31.946 A 22.943 22.943 0 0 1 110.266 32.915 A 136.276 136.276 0 0 1 110.175 33.082 C 109.993 33.415 109.831 33.707 109.689 33.959 A 46.862 46.862 0 0 1 109.534 34.234 C 109.387 34.624 109.29 34.82 109.29 34.869 A 0.216 0.216 0 0 1 109.288 34.892 C 109.278 34.974 109.23 35.205 109.143 35.552 A 115.349 115.349 0 0 0 108.91 36.271 A 22.96 22.96 0 0 1 108.655 37.017 A 31.008 31.008 0 0 0 108.478 37.562 C 108.369 37.913 108.281 38.219 108.215 38.482 C 108.095 38.802 108.041 39.024 108.025 39.12 A 0.319 0.319 0 0 0 108.02 39.165 A 0.084 0.084 0 0 1 108.034 39.184 C 108.061 39.233 108.06 39.326 108.015 39.427 A 0.536 0.536 0 0 1 107.971 39.507 A 3.164 3.164 0 0 1 107.892 39.727 A 1.272 1.272 0 0 1 107.776 39.947 A 10.38 10.38 0 0 0 107.686 40.13 A 2.196 2.196 0 0 0 107.532 40.533 C 107.491 40.654 107.484 40.809 107.511 40.914 A 0.29 0.29 0 0 0 107.532 40.972 A 8.154 8.154 0 0 1 107.53 41.182 C 107.526 41.326 107.516 41.493 107.485 41.704 A 5.627 5.627 0 0 1 107.434 41.997 A 37.661 37.661 0 0 1 107.214 42.632 A 37.661 37.661 0 0 0 106.995 43.267 A 3.512 3.512 0 0 1 106.965 43.343 C 106.871 43.578 106.777 43.733 106.682 43.822 A 0.349 0.349 0 0 1 106.555 43.902 A 1.261 1.261 0 0 1 106.53 43.906 C 106.067 43.981 106.03 43.707 106.418 43.085 A 5.672 5.672 0 0 1 106.555 42.876 A 1.625 1.625 0 0 0 106.77 42.354 A 1.533 1.533 0 0 0 106.799 42.046 A 2.574 2.574 0 0 0 106.799 42.005 A 1.573 1.573 0 0 0 106.604 41.216 A 0.898 0.898 0 0 0 106.529 41.109 C 106.394 40.944 106.23 40.882 106.067 40.923 A 0.63 0.63 0 0 0 106.012 40.954 C 105.977 40.976 105.953 40.998 105.938 41.019 A 0.088 0.088 0 0 0 105.92 41.07 A 0.091 0.091 0 0 0 105.933 41.113 C 105.949 41.144 105.982 41.18 106.033 41.231 A 11.182 11.182 0 0 0 106.067 41.265 A 0.169 0.169 0 0 1 106.089 41.278 C 106.156 41.326 106.193 41.423 106.182 41.53 A 0.374 0.374 0 0 1 106.165 41.607 C 106.165 41.704 106.067 41.851 105.969 41.997 A 1.532 1.532 0 0 0 105.851 42.129 A 1.343 1.343 0 0 0 105.579 42.779 C 105.579 43.001 105.607 43.307 105.684 43.718 A 10.662 10.662 0 0 0 105.774 44.146 A 0.407 0.407 0 0 1 105.794 44.277 C 105.794 44.386 105.76 44.509 105.726 44.679 A 4.86 4.86 0 0 0 105.725 44.683 A 8.262 8.262 0 0 1 105.678 44.866 A 2.164 2.164 0 0 1 105.53 45.269 A 9.998 9.998 0 0 1 105.445 45.431 C 105.419 45.482 105.395 45.53 105.376 45.575 A 0.481 0.481 0 0 0 105.334 45.757 A 2.445 2.445 0 0 0 105.336 45.847 C 105.339 45.944 105.356 46.012 105.432 46.05 A 0.276 0.276 0 0 1 105.486 46.13 C 105.539 46.245 105.563 46.444 105.54 46.763 A 4.447 4.447 0 0 1 105.53 46.88 A 7.92 7.92 0 0 1 105.433 47.549 A 10.619 10.619 0 0 1 105.237 48.394 C 105.042 48.882 104.895 49.273 104.7 49.468 A 3.056 3.056 0 0 1 104.658 49.509 C 104.484 49.677 104.351 49.761 104.26 49.761 A 0.592 0.592 0 0 1 104.237 49.761 C 104.125 49.756 104.074 49.719 104.002 49.649 A 3.765 3.765 0 0 1 103.967 49.615 L 103.967 49.566 A 3.174 3.174 0 0 1 103.896 49.438 C 103.542 48.767 103.398 47.918 103.486 46.891 A 8.249 8.249 0 0 1 103.577 46.197 A 51.903 51.903 0 0 1 103.597 46.014 C 103.618 45.835 103.638 45.664 103.659 45.501 A 30.929 30.929 0 0 1 103.723 45.025 L 103.723 44.39 A 0.17 0.17 0 0 1 103.712 44.36 C 103.69 44.286 103.714 44.187 103.767 44.065 A 2.24 2.24 0 0 1 103.821 43.951 A 2.01 2.01 0 0 1 103.902 43.804 A 5.71 5.71 0 0 1 104.211 43.365 A 1.744 1.744 0 0 1 104.27 43.308 C 104.328 43.255 104.387 43.21 104.445 43.173 A 0.913 0.913 0 0 1 104.651 43.072 C 104.749 43.072 104.797 42.974 104.749 42.828 C 104.749 42.682 104.652 42.537 104.556 42.344 A 3.312 3.312 0 0 1 104.553 42.339 A 1.595 1.595 0 0 1 104.469 42.216 C 104.438 42.165 104.414 42.118 104.393 42.073 A 2.124 2.124 0 0 1 104.309 41.851 C 104.309 41.785 104.319 41.728 104.339 41.686 A 0.125 0.125 0 0 1 104.456 41.607 C 104.524 41.572 104.593 41.562 104.645 41.576 A 0.122 0.122 0 0 1 104.7 41.607 A 0.58 0.58 0 0 1 104.732 41.641 C 104.766 41.681 104.786 41.727 104.749 41.802 A 1.738 1.738 0 0 0 104.75 41.894 C 104.752 41.924 104.755 41.952 104.761 41.977 A 0.148 0.148 0 0 0 104.797 42.046 A 0.729 0.729 0 0 0 104.848 42.092 C 104.88 42.119 104.912 42.14 104.944 42.156 A 0.325 0.325 0 0 0 105.09 42.193 A 0.452 0.452 0 0 0 105.092 42.193 C 105.21 42.232 105.296 42.207 105.377 42.118 A 0.62 0.62 0 0 0 105.432 42.046 A 2.545 2.545 0 0 0 105.442 42.016 C 105.46 41.959 105.478 41.896 105.496 41.83 A 16.923 16.923 0 0 0 105.579 41.509 A 7.755 7.755 0 0 0 105.583 41.409 C 105.615 40.414 105.421 40.103 105.09 40.386 A 0.987 0.987 0 0 0 105.048 40.408 C 105.029 40.419 105.012 40.429 104.996 40.439 A 0.773 0.773 0 0 1 104.994 40.439 A 1.021 1.021 0 0 1 104.993 40.44 M 206.346 43.198 A 0.918 0.918 0 0 1 206.36 43.169 A 1.373 1.373 0 0 0 206.355 43.024 C 206.351 42.993 206.346 42.959 206.338 42.923 A 1.002 1.002 0 0 0 206.311 42.828 C 206.262 42.73 206.262 42.583 206.311 42.437 A 0.784 0.784 0 0 1 206.374 42.146 A 1.393 1.393 0 0 1 206.506 41.9 C 206.737 41.531 206.75 41.38 206.463 41.446 A 1.104 1.104 0 0 0 206.409 41.46 C 206.096 41.505 206.028 41.427 206.207 41.189 A 1.705 1.705 0 0 1 206.262 41.119 C 206.311 40.972 206.36 40.826 206.36 40.581 A 1.207 1.207 0 0 0 206.359 40.548 C 206.354 40.364 206.308 40.177 206.262 39.947 A 1.217 1.217 0 0 1 206.17 39.691 C 206.15 39.612 206.136 39.526 206.127 39.432 A 2.836 2.836 0 0 1 206.116 39.165 A 2.663 2.663 0 0 1 206.116 39.147 C 206.117 38.944 206.142 38.72 206.189 38.521 A 1.712 1.712 0 0 1 206.262 38.287 A 4.732 4.732 0 0 0 206.269 38.267 C 206.334 38.069 206.399 37.828 206.464 37.544 A 16.113 16.113 0 0 0 206.555 37.115 A 37.732 37.732 0 0 0 206.696 36.388 A 10.538 10.538 0 0 0 206.799 35.699 A 141.471 141.471 0 0 0 206.883 35.317 A 14.06 14.06 0 0 1 207.141 34.283 C 207.275 33.913 207.387 33.613 207.491 33.367 A 5.207 5.207 0 0 1 207.629 33.062 A 21.783 21.783 0 0 0 207.892 32.525 A 5.901 5.901 0 0 0 208.02 32.232 C 208.062 32.023 208.103 31.851 208.084 31.744 A 0.18 0.18 0 0 0 208.069 31.695 A 0.111 0.111 0 0 1 208.06 31.667 C 208.037 31.556 208.13 31.32 208.264 30.962 A 3.44 3.44 0 0 1 208.386 30.679 C 208.462 30.521 208.552 30.358 208.653 30.186 A 50.919 50.919 0 0 1 208.948 29.693 C 209.238 29.208 209.433 28.772 209.627 28.384 A 12.763 12.763 0 0 1 209.631 28.374 A 5.028 5.028 0 0 0 209.7 28.18 C 209.776 27.951 209.806 27.784 209.793 27.665 A 0.351 0.351 0 0 0 209.778 27.593 C 209.687 27.366 209.723 27.265 209.847 27.292 A 0.276 0.276 0 0 1 209.875 27.3 A 3.171 3.171 0 0 0 209.928 27.3 C 210.03 27.298 210.112 27.286 210.214 27.202 A 0.755 0.755 0 0 0 210.266 27.154 A 1.096 1.096 0 0 0 210.512 26.932 A 0.568 0.568 0 0 0 210.608 26.763 A 0.522 0.522 0 0 0 210.644 26.7 C 210.675 26.636 210.686 26.575 210.679 26.525 A 0.132 0.132 0 0 0 210.608 26.421 C 210.559 26.372 210.608 26.275 210.706 26.079 A 2.723 2.723 0 0 0 210.856 25.914 C 210.957 25.795 211.065 25.655 211.194 25.494 A 2.423 2.423 0 0 0 211.515 25.181 A 4.237 4.237 0 0 0 211.829 24.761 C 211.929 24.559 212.03 24.381 212.099 24.225 A 1.232 1.232 0 0 0 212.17 24.029 A 4.217 4.217 0 0 1 212.244 23.759 A 1.078 1.078 0 0 1 212.366 23.492 A 0.505 0.505 0 0 1 212.425 23.37 C 212.476 23.293 212.543 23.247 212.61 23.247 C 212.659 23.199 212.805 23.15 212.952 23.003 A 1.965 1.965 0 0 1 213.073 22.844 C 213.154 22.746 213.248 22.64 213.342 22.515 A 34.808 34.808 0 0 1 213.708 21.977 C 213.961 21.612 214.183 21.311 214.378 21.062 A 9.747 9.747 0 0 1 214.709 20.66 A 20.469 20.469 0 0 1 214.913 20.458 C 215.054 20.321 215.178 20.209 215.296 20.132 A 0.702 0.702 0 0 1 215.54 20.025 A 7.43 7.43 0 0 1 215.706 19.92 C 215.766 19.883 215.83 19.841 215.895 19.792 A 1.722 1.722 0 0 0 216.077 19.634 C 216.272 19.439 216.467 19.244 216.614 19.048 A 1.31 1.31 0 0 1 216.726 18.892 C 216.887 18.696 217.126 18.487 217.395 18.218 C 217.63 17.983 217.888 17.771 218.137 17.582 A 14.777 14.777 0 0 1 218.469 17.339 C 218.86 17.095 219.104 16.851 219.25 16.704 C 219.397 16.558 219.397 16.509 219.202 16.558 A 3.474 3.474 0 0 1 219.1 16.568 C 218.855 16.588 218.682 16.572 218.591 16.522 A 0.124 0.124 0 0 1 218.518 16.412 C 218.477 16.29 218.606 16.134 218.902 15.945 A 3.893 3.893 0 0 1 219.104 15.826 A 6.168 6.168 0 0 1 219.158 15.801 C 219.683 15.569 220.3 15.383 221.008 15.288 A 14.048 14.048 0 0 1 223.37 15.093 C 224.13 15.093 224.91 15.15 225.712 15.265 A 21.104 21.104 0 0 1 228.528 15.874 A 21.624 21.624 0 0 1 228.813 15.948 A 40.585 40.585 0 0 1 229.602 16.167 C 229.842 16.207 230.017 16.247 230.099 16.261 A 0.287 0.287 0 0 0 230.139 16.265 C 230.383 16.167 230.872 16.363 231.653 16.704 A 19.079 19.079 0 0 1 233.801 17.974 C 234.306 18.298 234.651 18.596 234.856 18.848 A 1.379 1.379 0 0 1 235.022 19.097 C 235.12 19.244 235.217 19.39 235.364 19.488 C 235.45 19.574 235.537 19.623 235.658 19.598 A 0.403 0.403 0 0 0 235.706 19.585 C 235.927 19.541 235.988 19.658 235.851 19.936 A 1.667 1.667 0 0 1 235.803 20.025 A 7.796 7.796 0 0 1 235.772 20.115 C 235.738 20.214 235.716 20.291 235.754 20.367 A 0.264 0.264 0 0 0 235.755 20.376 C 235.757 20.447 235.789 20.461 235.851 20.464 A 1.198 1.198 0 0 0 235.901 20.464 A 1.176 1.176 0 0 1 236.047 20.47 A 0.445 0.445 0 0 1 236.194 20.513 A 2.14 2.14 0 0 1 236.267 20.551 A 0.382 0.382 0 0 1 236.438 20.708 C 236.486 20.854 236.583 20.999 236.728 21.241 A 14.5 14.5 0 0 1 236.731 21.246 C 236.877 21.441 237.024 21.685 237.17 21.929 C 237.434 22.28 237.539 22.513 237.522 22.592 A 0.041 0.041 0 0 1 237.512 22.613 C 237.512 22.697 237.332 22.708 237.064 22.648 A 2.523 2.523 0 0 1 236.926 22.613 A 1.712 1.712 0 0 1 236.243 22.32 A 2.79 2.79 0 0 1 236.139 22.238 C 236.07 22.181 236.007 22.123 235.953 22.066 A 1.4 1.4 0 0 1 235.803 21.88 A 1.068 1.068 0 0 0 235.796 21.859 C 235.701 21.593 235.609 21.699 235.657 22.222 A 6.742 6.742 0 0 0 235.662 22.474 C 235.679 22.915 235.733 23.578 235.812 24.464 A 601.744 601.744 0 0 0 235.901 25.445 A 3.426 3.426 0 0 1 235.924 25.609 C 235.951 25.844 235.959 26.067 235.999 26.226 A 2.551 2.551 0 0 0 235.999 26.229 C 236.035 26.372 236.071 26.462 236.107 26.499 A 0.054 0.054 0 0 0 236.145 26.519 A 0.032 0.032 0 0 1 236.173 26.536 C 236.194 26.571 236.194 26.653 236.194 26.763 C 236.194 26.958 236.194 27.154 236.145 27.398 C 236.11 27.605 236.076 27.763 236.076 27.907 A 0.709 0.709 0 0 0 236.096 28.081 C 236.096 28.207 236.116 28.312 236.156 28.384 A 0.207 0.207 0 0 0 236.243 28.472 C 236.34 28.521 236.389 28.667 236.438 28.863 C 236.471 28.993 236.46 29.145 236.449 29.304 A 3.567 3.567 0 0 0 236.438 29.546 C 236.395 29.717 236.315 29.925 236.263 30.073 A 3.616 3.616 0 0 0 236.243 30.132 A 0.887 0.887 0 0 1 236.208 30.195 C 236.122 30.338 236.03 30.376 235.901 30.376 A 1.449 1.449 0 0 0 235.873 30.371 C 235.67 30.335 235.626 30.377 235.841 30.53 A 2.208 2.208 0 0 0 235.901 30.572 C 236.145 30.767 236.145 30.962 235.95 31.206 A 0.686 0.686 0 0 0 235.874 31.264 C 235.823 31.31 235.788 31.358 235.76 31.413 A 0.985 0.985 0 0 0 235.706 31.548 A 0.38 0.38 0 0 0 235.681 31.575 C 235.608 31.664 235.608 31.752 235.608 31.841 A 1.875 1.875 0 0 1 235.666 31.965 A 0.45 0.45 0 0 1 235.706 32.134 C 235.738 32.198 235.749 32.262 235.766 32.326 A 0.541 0.541 0 0 0 235.803 32.427 C 235.803 32.513 235.803 32.561 235.771 32.637 A 0.661 0.661 0 0 1 235.754 32.671 C 235.729 32.696 235.691 32.722 235.647 32.747 A 3.074 3.074 0 0 1 235.51 32.818 A 0.837 0.837 0 0 1 235.357 32.805 A 0.415 0.415 0 0 1 235.071 32.622 A 1.531 1.531 0 0 1 235.01 32.485 A 1.247 1.247 0 0 1 234.924 32.037 C 234.924 31.953 234.936 31.88 234.957 31.817 A 0.512 0.512 0 0 1 235.168 31.548 C 235.261 31.486 235.334 31.425 235.388 31.363 A 0.522 0.522 0 0 0 235.461 31.255 A 0.269 0.269 0 0 0 235.463 31.252 C 235.488 31.2 235.485 31.162 235.47 31.131 A 0.281 0.281 0 0 0 235.413 31.06 A 0.195 0.195 0 0 1 235.332 30.98 C 235.302 30.928 235.282 30.855 235.273 30.762 A 1.408 1.408 0 0 1 235.266 30.621 L 235.266 29.79 C 235.315 29.449 235.315 29.107 235.315 28.765 A 33.516 33.516 0 0 0 235.246 28.299 C 235.233 28.212 235.219 28.131 235.205 28.058 A 3.059 3.059 0 0 0 235.168 27.886 A 1.184 1.184 0 0 1 235.13 27.775 C 235.098 27.664 235.083 27.554 235.077 27.451 A 3.71 3.71 0 0 1 235.071 27.203 A 1.03 1.03 0 0 1 235.075 27.106 C 235.081 27.048 235.091 26.994 235.107 26.946 A 0.46 0.46 0 0 1 235.217 26.763 A 0.24 0.24 0 0 0 235.218 26.762 C 235.341 26.596 235.29 26.223 234.978 25.671 A 5.185 5.185 0 0 0 234.778 25.347 A 10.722 10.722 0 0 1 234.682 25.175 C 234.582 24.993 234.501 24.829 234.446 24.692 A 1.4 1.4 0 0 1 234.387 24.517 A 0.786 0.786 0 0 1 234.379 24.501 C 234.299 24.33 234.335 24.239 234.416 24.265 A 0.136 0.136 0 0 1 234.436 24.273 C 234.566 24.273 234.542 24.119 234.399 23.778 A 7.364 7.364 0 0 0 234.338 23.638 A 21.332 21.332 0 0 0 234.176 23.281 C 234.008 22.919 233.799 22.511 233.508 22.076 A 1034.879 1034.879 0 0 0 233.435 21.957 A 57.724 57.724 0 0 0 232.336 20.22 C 232.076 19.872 231.849 19.576 231.636 19.321 A 6.999 6.999 0 0 0 231.213 18.853 A 6.686 6.686 0 0 0 230.829 18.496 A 5.23 5.23 0 0 0 230.334 18.121 A 2.566 2.566 0 0 0 230.272 18.07 C 230.078 17.919 229.909 17.833 229.778 17.798 A 0.496 0.496 0 0 0 229.651 17.779 A 1.081 1.081 0 0 0 229.615 17.774 C 229.337 17.744 229.278 17.857 229.406 18.017 A 0.676 0.676 0 0 0 229.456 18.072 A 0.729 0.729 0 0 1 229.502 18.122 C 229.528 18.154 229.549 18.186 229.565 18.218 A 0.325 0.325 0 0 1 229.602 18.365 A 0.233 0.233 0 0 1 229.61 18.383 C 229.644 18.469 229.592 18.511 229.456 18.511 A 0.383 0.383 0 0 1 229.421 18.526 C 229.362 18.549 229.304 18.554 229.245 18.541 A 0.353 0.353 0 0 1 229.163 18.511 A 1.652 1.652 0 0 1 229.1 18.489 C 229.062 18.474 229.028 18.459 228.998 18.443 A 0.297 0.297 0 0 1 228.87 18.316 C 228.746 18.233 228.449 18.255 227.977 18.381 A 7.922 7.922 0 0 0 227.698 18.462 A 10 10 0 0 0 227.684 18.466 C 227.406 18.553 227.108 18.658 226.8 18.781 A 12.359 12.359 0 0 0 225.598 19.341 C 225.195 19.517 224.831 19.707 224.5 19.902 A 10.613 10.613 0 0 0 223.645 20.464 C 222.034 21.783 220.325 23.492 218.616 25.64 A 40.946 40.946 0 0 0 217.512 27.047 C 216.417 28.511 215.742 29.671 215.442 30.572 A 0.426 0.426 0 0 1 215.441 30.602 C 215.427 30.797 215.283 31.082 215.051 31.499 A 6.96 6.96 0 0 1 214.831 31.946 A 22.943 22.943 0 0 1 214.27 32.915 A 136.276 136.276 0 0 1 214.179 33.082 C 213.997 33.415 213.835 33.707 213.693 33.959 A 46.862 46.862 0 0 1 213.538 34.234 C 213.391 34.624 213.293 34.82 213.293 34.869 A 0.216 0.216 0 0 1 213.292 34.892 C 213.282 34.974 213.234 35.205 213.147 35.552 A 115.349 115.349 0 0 0 212.914 36.271 A 22.96 22.96 0 0 1 212.659 37.017 A 31.008 31.008 0 0 0 212.482 37.562 C 212.373 37.913 212.285 38.219 212.219 38.482 C 212.099 38.802 212.045 39.024 212.029 39.12 A 0.319 0.319 0 0 0 212.024 39.165 A 0.084 0.084 0 0 1 212.038 39.184 C 212.065 39.233 212.064 39.326 212.019 39.427 A 0.536 0.536 0 0 1 211.975 39.507 A 3.164 3.164 0 0 1 211.896 39.727 A 1.272 1.272 0 0 1 211.78 39.947 A 10.38 10.38 0 0 0 211.69 40.13 A 2.196 2.196 0 0 0 211.536 40.533 C 211.495 40.654 211.488 40.809 211.515 40.914 A 0.29 0.29 0 0 0 211.536 40.972 A 8.154 8.154 0 0 1 211.534 41.182 C 211.53 41.326 211.52 41.493 211.489 41.704 A 5.627 5.627 0 0 1 211.438 41.997 A 37.661 37.661 0 0 1 211.218 42.632 A 37.661 37.661 0 0 0 210.999 43.267 A 3.512 3.512 0 0 1 210.969 43.343 C 210.875 43.578 210.78 43.733 210.686 43.822 A 0.349 0.349 0 0 1 210.559 43.902 A 1.261 1.261 0 0 1 210.534 43.906 C 210.071 43.981 210.034 43.707 210.422 43.085 A 5.672 5.672 0 0 1 210.559 42.876 A 1.625 1.625 0 0 0 210.774 42.354 A 1.533 1.533 0 0 0 210.803 42.046 A 2.574 2.574 0 0 0 210.803 42.005 A 1.573 1.573 0 0 0 210.608 41.216 A 0.898 0.898 0 0 0 210.533 41.109 C 210.398 40.944 210.234 40.882 210.071 40.923 A 0.63 0.63 0 0 0 210.016 40.954 C 209.981 40.976 209.957 40.998 209.942 41.019 A 0.088 0.088 0 0 0 209.924 41.07 A 0.091 0.091 0 0 0 209.936 41.113 C 209.953 41.144 209.986 41.18 210.036 41.231 A 11.182 11.182 0 0 0 210.071 41.265 A 0.169 0.169 0 0 1 210.093 41.278 C 210.16 41.326 210.197 41.423 210.185 41.53 A 0.374 0.374 0 0 1 210.168 41.607 C 210.168 41.704 210.071 41.851 209.973 41.997 A 1.532 1.532 0 0 0 209.855 42.129 A 1.343 1.343 0 0 0 209.583 42.779 C 209.583 43.001 209.611 43.307 209.688 43.718 A 10.662 10.662 0 0 0 209.778 44.146 A 0.407 0.407 0 0 1 209.798 44.277 C 209.798 44.386 209.764 44.509 209.73 44.679 A 4.86 4.86 0 0 0 209.729 44.683 A 8.262 8.262 0 0 1 209.682 44.866 A 2.164 2.164 0 0 1 209.534 45.269 A 9.998 9.998 0 0 1 209.449 45.431 C 209.423 45.482 209.399 45.53 209.38 45.575 A 0.481 0.481 0 0 0 209.338 45.757 A 2.445 2.445 0 0 0 209.339 45.847 C 209.343 45.944 209.36 46.012 209.436 46.05 A 0.276 0.276 0 0 1 209.49 46.13 C 209.543 46.245 209.567 46.444 209.544 46.763 A 4.447 4.447 0 0 1 209.534 46.88 A 7.92 7.92 0 0 1 209.437 47.549 A 10.619 10.619 0 0 1 209.241 48.394 C 209.045 48.882 208.899 49.273 208.704 49.468 A 3.056 3.056 0 0 1 208.662 49.509 C 208.488 49.677 208.355 49.761 208.264 49.761 A 0.592 0.592 0 0 1 208.241 49.761 C 208.129 49.756 208.078 49.719 208.006 49.649 A 3.765 3.765 0 0 1 207.971 49.615 L 207.971 49.566 A 3.174 3.174 0 0 1 207.9 49.438 C 207.546 48.767 207.402 47.918 207.49 46.891 A 8.249 8.249 0 0 1 207.581 46.197 A 51.903 51.903 0 0 1 207.601 46.014 C 207.622 45.835 207.642 45.664 207.663 45.501 A 30.929 30.929 0 0 1 207.727 45.025 L 207.727 44.39 A 0.17 0.17 0 0 1 207.716 44.36 C 207.694 44.286 207.718 44.187 207.771 44.065 A 2.24 2.24 0 0 1 207.825 43.951 A 2.01 2.01 0 0 1 207.906 43.804 A 5.71 5.71 0 0 1 208.215 43.365 A 1.744 1.744 0 0 1 208.274 43.308 C 208.332 43.255 208.391 43.21 208.449 43.173 A 0.913 0.913 0 0 1 208.655 43.072 C 208.752 43.072 208.801 42.974 208.752 42.828 C 208.752 42.682 208.656 42.537 208.559 42.344 A 3.312 3.312 0 0 1 208.557 42.339 A 1.595 1.595 0 0 1 208.473 42.216 C 208.442 42.165 208.417 42.118 208.397 42.073 A 2.124 2.124 0 0 1 208.313 41.851 C 208.313 41.785 208.323 41.728 208.343 41.686 A 0.125 0.125 0 0 1 208.459 41.607 C 208.528 41.572 208.597 41.562 208.648 41.576 A 0.122 0.122 0 0 1 208.704 41.607 A 0.58 0.58 0 0 1 208.736 41.641 C 208.77 41.681 208.79 41.727 208.752 41.802 A 1.738 1.738 0 0 0 208.754 41.894 C 208.756 41.924 208.759 41.952 208.765 41.977 A 0.148 0.148 0 0 0 208.801 42.046 A 0.729 0.729 0 0 0 208.852 42.092 C 208.884 42.119 208.916 42.14 208.948 42.156 A 0.325 0.325 0 0 0 209.094 42.193 A 0.452 0.452 0 0 0 209.096 42.193 C 209.214 42.232 209.3 42.207 209.381 42.118 A 0.62 0.62 0 0 0 209.436 42.046 A 2.545 2.545 0 0 0 209.446 42.016 C 209.464 41.959 209.482 41.896 209.5 41.83 A 16.923 16.923 0 0 0 209.583 41.509 A 7.755 7.755 0 0 0 209.586 41.409 C 209.619 40.414 209.425 40.103 209.094 40.386 A 0.987 0.987 0 0 0 209.052 40.408 C 209.033 40.419 209.016 40.429 208.999 40.439 A 0.773 0.773 0 0 1 208.998 40.439 A 1.021 1.021 0 0 1 208.997 40.44 M 71.73 34.834 C 71.747 34.797 71.764 34.769 71.803 34.743 A 0.308 0.308 0 0 1 71.838 34.722 C 71.936 34.673 72.083 34.527 72.278 34.331 A 4.315 4.315 0 0 0 72.62 33.935 C 72.729 33.794 72.839 33.648 72.961 33.501 C 73.206 33.16 73.401 32.867 73.547 32.622 A 6.43 6.43 0 0 0 73.589 32.552 C 73.682 32.392 73.75 32.257 73.778 32.163 A 0.286 0.286 0 0 0 73.792 32.085 C 73.759 32.02 73.704 31.954 73.627 31.918 A 0.3 0.3 0 0 0 73.499 31.89 A 1.196 1.196 0 0 0 73.242 31.918 A 1.411 1.411 0 0 0 72.913 32.037 A 0.758 0.758 0 0 0 72.737 32.094 A 1.307 1.307 0 0 0 72.375 32.378 C 71.647 33.198 71.64 32.786 72.396 31.14 A 32.368 32.368 0 0 1 72.571 30.767 A 40.047 40.047 0 0 1 72.77 30.336 C 72.924 30.008 73.053 29.741 73.157 29.497 A 22.816 22.816 0 0 1 73.202 29.396 C 73.328 29.116 73.432 28.901 73.514 28.735 A 36.094 36.094 0 0 1 73.596 28.57 C 73.694 28.374 73.743 28.228 73.84 28.179 A 0.422 0.422 0 0 1 73.844 28.171 C 73.865 28.133 73.892 28.094 73.925 28.055 A 2.637 2.637 0 0 1 74.084 27.886 L 74.182 27.788 A 4.669 4.669 0 0 1 74.253 27.719 C 74.455 27.526 74.578 27.447 74.622 27.447 C 74.622 27.489 74.622 27.57 74.589 27.752 A 4.233 4.233 0 0 1 74.573 27.837 A 2.482 2.482 0 0 0 74.548 27.962 C 74.5 28.249 74.531 28.436 74.679 28.522 A 0.4 0.4 0 0 0 74.817 28.57 C 75.11 28.619 75.403 28.423 75.745 28.033 A 9.142 9.142 0 0 0 76.721 26.617 A 8.462 8.462 0 0 0 76.927 26.223 C 77.008 26.056 77.08 25.894 77.14 25.742 A 3.904 3.904 0 0 0 77.258 25.396 A 4.159 4.159 0 0 0 77.288 25.27 C 77.335 25.052 77.344 24.906 77.314 24.809 A 0.227 0.227 0 0 0 77.258 24.712 C 77.161 24.712 76.965 24.761 76.721 24.956 A 6.015 6.015 0 0 0 76.355 25.359 A 8.077 8.077 0 0 0 75.989 25.835 C 75.806 26.092 75.623 26.348 75.46 26.563 A 9.175 9.175 0 0 1 75.305 26.763 C 75.125 26.943 74.998 27.044 74.904 27.084 A 0.224 0.224 0 0 1 74.817 27.105 A 0.192 0.192 0 0 1 74.785 27.103 C 74.729 27.093 74.721 27.052 74.719 26.96 A 4.195 4.195 0 0 1 74.719 26.91 A 1.006 1.006 0 0 1 74.802 26.729 C 74.83 26.68 74.863 26.63 74.9 26.576 A 5.146 5.146 0 0 1 75.012 26.421 A 3.305 3.305 0 0 0 75.086 26.319 C 75.148 26.229 75.211 26.13 75.273 26.022 A 6.24 6.24 0 0 0 75.452 25.689 C 75.598 25.445 75.696 25.201 75.745 25.054 A 7.634 7.634 0 0 1 75.877 24.798 A 2.715 2.715 0 0 1 76.086 24.468 C 76.184 24.273 76.331 24.126 76.477 23.98 A 0.967 0.967 0 0 0 76.484 23.972 C 76.593 23.861 76.728 23.671 76.89 23.402 A 10.525 10.525 0 0 0 77.063 23.101 A 17.356 17.356 0 0 0 77.423 22.43 A 7.002 7.002 0 0 0 77.747 21.685 C 77.903 21.341 78.019 21.017 78.108 20.726 A 9.102 9.102 0 0 0 78.235 20.269 A 2.992 2.992 0 0 0 78.244 20.244 C 78.362 19.921 78.378 19.701 78.35 19.585 A 0.231 0.231 0 0 0 78.333 19.537 A 0.216 0.216 0 0 0 78.318 19.532 C 78.17 19.494 77.934 19.596 77.698 19.927 C 77.405 20.318 77.161 20.708 76.868 21.246 A 11.374 11.374 0 0 0 76.661 21.605 C 76.552 21.802 76.453 21.996 76.368 22.179 A 6.166 6.166 0 0 0 76.184 22.613 A 6.648 6.648 0 0 1 75.958 23.028 C 75.919 23.095 75.877 23.162 75.834 23.231 A 10.791 10.791 0 0 1 75.696 23.443 A 31.787 31.787 0 0 1 75.5 23.637 C 75.438 23.698 75.379 23.755 75.321 23.808 A 3.333 3.333 0 0 1 75.061 24.029 A 2.674 2.674 0 0 1 75.043 24.041 C 74.76 24.226 74.571 24.271 74.475 24.175 A 0.289 0.289 0 0 1 74.418 24.083 C 74.371 23.973 74.338 23.79 74.308 23.524 A 12.841 12.841 0 0 1 74.28 23.247 A 5.791 5.791 0 0 1 74.258 23.132 C 74.183 22.712 74.19 22.454 74.28 22.32 C 74.323 22.234 74.479 22.186 74.716 22.242 A 1.193 1.193 0 0 1 74.817 22.271 A 0.496 0.496 0 0 0 74.982 22.241 C 75.283 22.135 75.619 21.742 75.989 21.001 A 20.03 20.03 0 0 0 76.362 20.21 C 76.525 19.844 76.693 19.442 76.864 19.008 A 37.79 37.79 0 0 0 77.405 17.535 A 16.27 16.27 0 0 1 77.447 17.421 C 77.635 16.915 77.868 16.367 78.186 15.777 A 17.3 17.3 0 0 1 78.426 15.347 C 78.685 14.896 78.938 14.502 79.163 14.165 A 7.297 7.297 0 0 1 79.281 14.001 C 79.562 13.622 79.772 13.433 79.944 13.433 C 80.042 13.433 80.286 13.482 80.676 13.628 C 81.116 13.775 81.555 13.97 82.141 14.165 A 14.168 14.168 0 0 1 83.703 14.899 A 9.871 9.871 0 0 1 86.389 16.997 C 87.419 18.12 87.955 19.154 87.955 20.097 A 2.458 2.458 0 0 1 87.952 20.22 C 87.952 20.367 87.854 20.562 87.756 20.806 C 87.659 21.001 87.512 21.246 87.415 21.392 C 87.3 21.545 87.215 21.638 87.16 21.671 A 0.079 0.079 0 0 1 87.122 21.685 A 0.34 0.34 0 0 0 87.03 21.699 C 86.69 21.795 86.107 22.386 85.3 23.513 A 28.178 28.178 0 0 0 84.68 24.419 C 84.241 25.054 83.704 25.738 83.118 26.568 C 82.587 27.34 82.151 27.874 81.811 28.31 A 28.244 28.244 0 0 0 81.799 28.326 C 81.506 28.716 81.213 29.107 81.018 29.4 A 10.725 10.725 0 0 0 80.652 29.949 A 14.044 14.044 0 0 0 80.286 30.572 A 21.018 21.018 0 0 1 80.27 30.604 C 80.027 31.088 79.69 31.713 79.26 32.525 A 7.053 7.053 0 0 1 78.892 33.074 A 12.151 12.151 0 0 1 78.137 33.99 A 2.265 2.265 0 0 0 78.079 34.04 C 77.9 34.2 77.757 34.376 77.627 34.53 A 3.236 3.236 0 0 1 77.454 34.722 A 0.861 0.861 0 0 1 77.441 34.746 C 77.34 34.933 77.153 35.122 76.965 35.357 C 76.477 35.894 76.086 36.48 75.696 37.066 L 74.915 38.579 L 75.745 38.628 A 13.537 13.537 0 0 1 75.916 38.629 C 76.48 38.636 76.468 38.685 75.882 38.838 A 15.976 15.976 0 0 1 75.745 38.872 L 75.696 38.872 A 5.543 5.543 0 0 0 75.693 38.873 C 74.914 39.117 74.671 39.361 74.866 39.605 C 75.058 39.836 75.464 39.976 76.106 40.025 A 7.518 7.518 0 0 0 76.672 40.044 A 9.409 9.409 0 0 0 77.844 40.093 C 78.577 40.093 79.114 40.142 79.553 40.142 A 1.859 1.859 0 0 1 79.673 40.146 C 79.873 40.16 80.161 40.2 80.481 40.24 A 26.637 26.637 0 0 0 82.019 40.423 A 34.483 34.483 0 0 0 83.704 40.533 C 84.515 40.533 85.14 40.57 85.545 40.579 A 7.015 7.015 0 0 0 85.706 40.581 A 9.428 9.428 0 0 1 85.827 40.596 C 86.097 40.629 86.256 40.663 86.336 40.696 A 0.167 0.167 0 0 1 86.389 40.728 A 0.269 0.269 0 0 1 86.392 40.731 C 86.474 40.815 86.446 40.9 86.309 41.017 A 1.385 1.385 0 0 1 86.243 41.07 C 86.03 41.283 85.894 41.444 85.817 41.572 A 0.677 0.677 0 0 0 85.754 41.704 A 0.325 0.325 0 0 0 85.749 41.724 C 85.718 41.84 85.798 41.846 85.989 41.776 A 2.29 2.29 0 0 0 86.047 41.753 C 86.145 41.704 86.243 41.704 86.389 41.704 A 0.702 0.702 0 0 1 86.643 41.753 A 0.953 0.953 0 0 1 86.829 41.851 C 87.122 41.997 86.731 42.242 85.608 42.583 A 17.996 17.996 0 0 1 84.695 42.877 A 56.492 56.492 0 0 1 83.264 43.267 C 82.66 43.435 82.125 43.603 81.675 43.755 A 25.811 25.811 0 0 0 81.116 43.951 A 4.32 4.32 0 0 0 80.897 44.022 C 80.59 44.132 80.426 44.243 80.426 44.353 A 0.116 0.116 0 0 0 80.432 44.39 A 0.186 0.186 0 0 1 80.441 44.449 C 80.441 44.587 80.303 44.757 80.09 44.927 A 2.921 2.921 0 0 1 79.678 45.155 A 3.571 3.571 0 0 1 79.065 45.367 A 4.452 4.452 0 0 1 78.92 45.406 C 78.718 45.456 78.538 45.482 78.391 45.462 A 0.501 0.501 0 0 1 78.235 45.415 C 78.137 45.367 77.991 45.367 77.844 45.367 A 0.653 0.653 0 0 0 77.749 45.374 A 0.524 0.524 0 0 0 77.454 45.513 A 6.099 6.099 0 0 0 77.378 45.539 C 77.262 45.58 77.103 45.635 76.903 45.676 A 2.89 2.89 0 0 1 76.721 45.708 A 16.15 16.15 0 0 1 76.456 45.744 A 6.915 6.915 0 0 1 75.598 45.806 A 11.965 11.965 0 0 1 74.939 45.855 A 11.965 11.965 0 0 0 74.28 45.904 A 24.245 24.245 0 0 0 74.223 45.909 C 73.944 45.938 73.713 45.967 73.512 45.995 A 14.916 14.916 0 0 0 73.157 46.05 A 2.172 2.172 0 0 0 73.079 46.078 C 73.039 46.093 73.002 46.108 72.968 46.123 A 3.614 3.614 0 0 0 72.815 46.197 A 0.11 0.11 0 0 0 72.795 46.199 C 72.754 46.207 72.695 46.235 72.652 46.267 A 0.286 0.286 0 0 0 72.62 46.294 A 0.261 0.261 0 0 1 72.599 46.313 C 72.546 46.355 72.467 46.392 72.424 46.392 A 0.945 0.945 0 0 0 72.4 46.405 A 4.681 4.681 0 0 0 72.352 46.431 M 159.534 25.542 A 0.247 0.247 0 0 0 159.452 25.559 C 159.377 25.586 159.288 25.642 159.196 25.703 A 14.183 14.183 0 0 0 159.143 25.738 A 0.628 0.628 0 0 0 158.962 25.964 C 158.894 26.099 158.848 26.275 158.817 26.491 A 3.974 3.974 0 0 0 158.801 26.617 A 19.591 19.591 0 0 0 158.804 26.964 C 158.81 27.367 158.838 27.935 158.948 28.667 C 158.997 29.4 159.045 30.035 159.094 30.572 C 159.143 31.109 159.143 31.402 159.143 31.548 C 159.143 31.643 159.143 32.062 159.098 32.76 A 27.385 27.385 0 0 1 159.094 32.818 A 20.236 20.236 0 0 0 159.065 33.395 C 159.05 33.797 159.041 34.237 159.026 34.713 A 47.562 47.562 0 0 1 158.997 35.454 A 397.638 397.638 0 0 0 158.997 36.344 C 158.999 37.105 159.006 37.682 159.031 38.091 A 6.75 6.75 0 0 0 159.045 38.287 A 3.562 3.562 0 0 0 159.077 38.526 C 159.119 38.774 159.183 38.928 159.28 38.989 A 0.197 0.197 0 0 0 159.387 39.019 A 1.794 1.794 0 0 1 159.452 39.02 C 159.542 39.023 159.651 39.039 159.729 39.117 A 1.102 1.102 0 0 1 159.863 39.219 A 0.552 0.552 0 0 1 160.022 39.458 C 160.12 39.703 160.12 40.093 160.12 40.581 A 7.947 7.947 0 0 1 160.035 41.216 A 16.261 16.261 0 0 1 159.875 41.997 A 2.395 2.395 0 0 1 159.805 42.232 C 159.728 42.445 159.634 42.584 159.537 42.622 A 0.143 0.143 0 0 1 159.485 42.632 C 159.29 42.681 159.338 42.779 159.68 43.023 A 1.132 1.132 0 0 1 159.912 43.174 C 160.045 43.287 160.132 43.426 160.198 43.602 A 1.712 1.712 0 0 1 160.217 43.658 A 1.58 1.58 0 0 1 160.3 43.924 C 160.312 43.984 160.319 44.042 160.319 44.099 A 0.535 0.535 0 0 1 160.266 44.341 C 160.222 44.516 160.101 44.573 159.902 44.514 A 0.869 0.869 0 0 1 159.827 44.488 A 0.649 0.649 0 0 0 159.758 44.474 C 159.689 44.465 159.629 44.469 159.578 44.487 A 0.224 0.224 0 0 0 159.436 44.634 A 0.455 0.455 0 0 0 159.376 44.788 C 159.342 44.939 159.339 45.159 159.338 45.462 A 96.607 96.607 0 0 0 159.338 45.562 C 159.386 46.562 159.48 46.726 159.621 46.008 A 7.074 7.074 0 0 0 159.631 45.953 A 7.516 7.516 0 0 1 159.664 45.857 C 159.824 45.396 159.869 45.449 159.832 46.016 A 11.746 11.746 0 0 1 159.827 46.099 C 159.744 46.762 159.766 47.953 159.865 49.641 A 113.478 113.478 0 0 0 159.924 50.591 A 24.72 24.72 0 0 0 160.065 52.276 A 48.172 48.172 0 0 0 160.315 54.107 A 78.659 78.659 0 0 0 160.535 55.508 C 160.611 55.965 160.687 56.393 160.764 56.791 A 38.472 38.472 0 0 0 160.901 57.476 C 161.096 58.404 161.243 59.185 161.34 59.869 A 53.962 53.962 0 0 1 161.383 60.174 C 161.446 60.629 161.474 60.91 161.447 61.016 A 0.124 0.124 0 0 1 161.438 61.04 A 0.661 0.661 0 0 0 161.422 61.075 C 161.389 61.151 161.389 61.199 161.389 61.285 C 161.438 61.333 161.487 61.333 161.584 61.333 A 0.32 0.32 0 0 1 161.667 61.396 C 161.726 61.457 161.795 61.553 161.89 61.694 A 35.119 35.119 0 0 1 161.975 61.822 C 162.17 62.115 162.317 62.505 162.463 62.994 A 10.638 10.638 0 0 0 164.411 66.399 A 11.811 11.811 0 0 0 165.247 67.29 A 1.4 1.4 0 0 1 165.432 67.44 C 165.49 67.495 165.547 67.557 165.605 67.626 A 2.79 2.79 0 0 1 165.686 67.73 A 8.736 8.736 0 0 0 166.189 68.188 A 36.709 36.709 0 0 0 166.516 68.462 A 2.364 2.364 0 0 0 167.127 68.909 A 1.726 1.726 0 0 0 167.346 68.999 A 5.369 5.369 0 0 1 168.033 69.263 A 2.074 2.074 0 0 1 168.176 69.341 A 4.053 4.053 0 0 0 168.381 69.417 C 168.511 69.461 168.623 69.492 168.717 69.522 A 2.977 2.977 0 0 1 168.762 69.537 A 0.752 0.752 0 0 0 168.871 69.564 C 168.953 69.578 169.027 69.576 169.072 69.557 A 0.097 0.097 0 0 0 169.104 69.537 A 0.243 0.243 0 0 0 169.139 69.491 C 169.171 69.438 169.189 69.365 169.153 69.292 A 1.738 1.738 0 0 0 169.117 69.193 C 169.081 69.104 169.039 69.027 168.975 68.929 A 3.102 3.102 0 0 0 168.958 68.902 L 168.811 68.609 A 1.198 1.198 0 0 1 168.812 68.559 C 168.814 68.497 168.828 68.465 168.899 68.462 A 0.264 0.264 0 0 1 168.909 68.462 C 168.958 68.462 169.006 68.511 169.153 68.609 A 0.71 0.71 0 0 1 169.256 68.674 C 169.297 68.705 169.342 68.741 169.392 68.78 A 2.093 2.093 0 0 0 169.495 68.853 C 169.788 69.097 170.081 69.292 170.422 69.488 A 4.882 4.882 0 0 0 170.66 69.598 A 17.094 17.094 0 0 0 171.106 69.781 A 17.21 17.21 0 0 1 171.418 69.836 A 33.456 33.456 0 0 1 171.887 69.927 L 172.278 69.927 A 7.951 7.951 0 0 1 171.575 69.297 A 6.697 6.697 0 0 1 171.057 68.706 A 14.101 14.101 0 0 1 170.793 68.396 C 170.546 68.096 170.286 67.755 170.048 67.391 A 9.215 9.215 0 0 1 169.983 67.29 A 6.783 6.783 0 0 1 169.425 66.197 C 169.263 65.787 169.156 65.385 169.104 64.996 A 7.805 7.805 0 0 0 168.86 63.97 A 10.626 10.626 0 0 1 168.572 62.926 C 168.464 62.442 168.378 61.911 168.323 61.333 A 11.021 11.021 0 0 0 168.169 60.279 A 41.743 41.743 0 0 0 168.079 59.82 A 50.453 50.453 0 0 1 167.822 58.282 A 36.795 36.795 0 0 1 167.639 56.89 A 99.986 99.986 0 0 0 167.566 56.383 C 167.542 56.221 167.518 56.065 167.494 55.92 A 16.08 16.08 0 0 0 167.493 55.913 A 7.982 7.982 0 0 1 167.507 55.459 C 167.528 55.094 167.572 54.659 167.639 54.156 A 11.181 11.181 0 0 0 167.802 53.079 C 167.836 52.735 167.852 52.405 167.852 52.089 A 9.13 9.13 0 0 0 167.834 51.519 A 1.947 1.947 0 0 1 167.798 51.392 C 167.784 51.339 167.77 51.28 167.757 51.217 A 19.006 19.006 0 0 1 167.688 50.884 A 66.912 66.912 0 0 1 167.505 49.945 A 34.42 34.42 0 0 1 167.395 49.322 A 8.728 8.728 0 0 1 167.292 48.487 C 167.283 48.355 167.278 48.224 167.278 48.094 A 4.771 4.771 0 0 1 167.297 47.662 A 3.761 3.761 0 0 1 167.318 47.269 C 167.337 47.09 167.366 46.928 167.395 46.783 A 4.291 4.291 0 0 0 167.517 46.416 A 4.291 4.291 0 0 1 167.639 46.05 A 6.902 6.902 0 0 0 167.749 45.755 C 167.787 45.645 167.825 45.528 167.863 45.404 A 12.856 12.856 0 0 0 167.932 45.171 A 4.949 4.949 0 0 0 168.024 44.691 C 168.045 44.546 168.063 44.391 168.08 44.227 A 28.382 28.382 0 0 0 168.127 43.706 C 168.225 42.339 168.274 40.923 168.372 39.41 A 97.905 97.905 0 0 1 168.467 36.998 C 168.512 36.135 168.564 35.328 168.616 34.576 C 168.694 33.443 168.772 32.654 168.85 32.208 A 2.743 2.743 0 0 1 168.909 31.939 A 4.641 4.641 0 0 0 169.184 30.632 C 169.198 30.384 169.188 30.136 169.153 29.888 C 169.104 29.204 168.909 28.667 168.567 28.277 C 168.305 28.015 167.841 27.752 167.176 27.49 A 13.045 13.045 0 0 0 166.516 27.251 A 32.778 32.778 0 0 0 163.391 26.372 A 195.957 195.957 0 0 0 162.64 26.237 C 162.159 26.151 161.756 26.085 161.432 26.053 A 3.924 3.924 0 0 0 161.047 26.031 A 2.333 2.333 0 0 1 160.857 26.022 C 160.671 26.007 160.479 25.973 160.334 25.938 A 2.667 2.667 0 0 1 160.315 25.933 C 160.071 25.884 159.924 25.787 159.827 25.689 C 159.827 25.689 159.827 25.64 159.778 25.64 C 159.729 25.591 159.729 25.591 159.68 25.591 C 159.631 25.542 159.631 25.542 159.583 25.542 L 159.534 25.542 Z M 423.157 26.861 A 3.225 3.225 0 0 0 422.704 26.895 C 422.58 26.913 422.467 26.936 422.375 26.958 A 0.631 0.631 0 0 0 422.146 27.05 C 422.062 27.106 421.995 27.184 421.941 27.282 A 1.061 1.061 0 0 0 421.887 27.398 A 1.359 1.359 0 0 0 421.823 27.618 C 421.768 27.877 421.741 28.252 421.741 28.765 A 0.141 0.141 0 0 1 421.733 28.806 C 421.72 28.848 421.689 28.908 421.641 28.986 A 2.783 2.783 0 0 1 421.594 29.058 C 421.549 29.193 421.422 29.286 421.326 29.376 A 1.048 1.048 0 0 0 421.301 29.4 C 421.155 29.546 421.008 29.595 420.813 29.595 C 420.771 29.595 420.692 29.595 420.639 29.563 A 0.117 0.117 0 0 1 420.618 29.546 A 0.923 0.923 0 0 0 420.536 29.474 C 420.495 29.442 420.456 29.416 420.424 29.393 A 0.442 0.442 0 0 1 420.374 29.352 A 0.923 0.923 0 0 0 420.292 29.279 C 420.251 29.246 420.212 29.221 420.18 29.197 A 0.442 0.442 0 0 1 420.13 29.156 C 420.069 29.126 420.028 29.114 419.993 29.11 A 0.44 0.44 0 0 0 419.934 29.107 A 1.486 1.486 0 0 0 419.797 29.41 C 419.737 29.595 419.698 29.818 419.691 30.089 A 3.514 3.514 0 0 0 419.69 30.181 A 4.526 4.526 0 0 0 419.669 30.567 C 419.665 30.865 419.684 31.143 419.689 31.401 A 5.53 5.53 0 0 1 419.69 31.499 A 1.002 1.002 0 0 1 419.717 31.595 C 419.725 31.631 419.73 31.664 419.733 31.696 A 1.373 1.373 0 0 1 419.739 31.841 A 21.898 21.898 0 0 0 419.824 32.824 C 419.861 33.135 419.91 33.428 419.983 33.697 C 420.078 34.221 420.173 34.745 420.223 35.405 A 11.861 11.861 0 0 1 420.227 35.454 A 6.348 6.348 0 0 1 420.247 35.981 A 17.589 17.589 0 0 1 420.178 37.31 A 32.289 32.289 0 0 0 420.111 37.939 A 6.521 6.521 0 0 0 420.081 38.531 A 5.08 5.08 0 0 0 420.15 39.352 A 7.033 7.033 0 0 0 420.227 39.751 A 17.21 17.21 0 0 0 420.282 40.063 A 33.456 33.456 0 0 0 420.374 40.533 C 420.374 40.874 420.374 41.119 420.325 41.363 A 2.424 2.424 0 0 0 420.285 41.698 C 420.279 41.811 420.277 41.932 420.276 42.061 A 37.036 37.036 0 0 0 420.276 42.242 A 42.724 42.724 0 0 0 420.483 45.14 A 127.609 127.609 0 0 0 420.618 46.392 C 420.685 46.862 420.729 47.286 420.766 47.663 A 219.842 219.842 0 0 0 420.813 48.15 C 420.908 49.332 421.14 50.607 421.509 52.017 A 32.779 32.779 0 0 0 421.545 52.154 A 49.951 49.951 0 0 0 422.262 54.562 A 21.391 21.391 0 0 0 422.815 56.06 C 423.251 57.222 423.638 58 423.978 58.394 A 1.871 1.871 0 0 0 423.987 58.404 C 424.142 58.559 424.297 58.714 424.477 58.943 A 5.271 5.271 0 0 1 424.622 59.136 A 12.745 12.745 0 0 1 425.22 59.891 A 5.079 5.079 0 0 1 425.305 60.015 L 425.354 60.015 C 425.879 60.84 426.635 61.665 427.643 62.49 A 17.988 17.988 0 0 0 428.625 63.238 A 19.166 19.166 0 0 0 432.434 64.996 A 7.272 7.272 0 0 1 432.674 65.069 C 432.8 65.109 432.916 65.15 433.031 65.191 A 16.738 16.738 0 0 0 433.313 65.288 A 0.492 0.492 0 0 1 433.306 65.255 C 433.276 65.088 433.373 65.047 433.557 65.093 A 1.624 1.624 0 0 1 433.701 65.15 C 433.795 65.191 433.904 65.247 434.026 65.318 A 6.447 6.447 0 0 1 434.143 65.386 C 434.29 65.484 434.436 65.533 434.534 65.63 A 17.53 17.53 0 0 1 434.536 65.631 C 434.877 65.728 435.169 65.826 435.559 65.826 C 435.702 65.826 435.798 65.826 435.939 65.871 A 1.131 1.131 0 0 1 435.95 65.874 L 436.194 65.874 C 436.34 65.874 436.487 65.923 436.633 65.923 A 1.473 1.473 0 0 0 436.787 65.975 C 436.961 66.023 437.105 66.032 437.219 66.07 C 437.29 66.07 437.339 66.07 437.375 66.064 A 0.145 0.145 0 0 0 437.463 66.021 A 0.055 0.055 0 0 0 437.479 66.019 C 437.512 66.009 437.506 65.966 437.463 65.923 C 437.463 65.89 437.441 65.857 437.411 65.824 A 1.229 1.229 0 0 0 437.366 65.777 A 0.199 0.199 0 0 1 437.344 65.752 C 437.316 65.712 437.309 65.672 437.27 65.632 A 0.209 0.209 0 0 0 437.268 65.63 L 437.268 65.581 C 437.268 65.541 437.302 65.534 437.341 65.533 A 0.844 0.844 0 0 1 437.366 65.533 C 437.455 65.533 437.585 65.533 437.719 65.607 A 0.562 0.562 0 0 1 437.756 65.63 L 438.342 65.777 A 2.081 2.081 0 0 0 438.595 65.881 C 438.699 65.917 438.797 65.945 438.879 65.972 C 439.075 66.021 439.172 66.021 439.27 66.021 C 440.393 66.021 441.223 65.874 441.76 65.679 A 2.825 2.825 0 0 0 441.891 65.639 C 442.398 65.467 442.132 65.344 441.17 65.384 A 10.746 10.746 0 0 0 441.125 65.386 A 8.597 8.597 0 0 1 439.787 65.173 A 8.161 8.161 0 0 1 439.319 65.044 C 438.765 64.86 438.256 64.675 437.872 64.409 A 2.251 2.251 0 0 1 437.805 64.361 C 437.366 64.117 437.219 63.872 437.268 63.677 A 0.075 0.075 0 0 0 437.255 63.639 C 437.222 63.586 437.128 63.51 436.975 63.433 C 436.85 63.35 436.654 63.231 436.417 63.107 A 7.455 7.455 0 0 0 436.292 63.042 A 8.006 8.006 0 0 1 435.838 62.82 C 435.682 62.739 435.523 62.652 435.362 62.565 A 17.815 17.815 0 0 0 434.875 62.31 A 5.94 5.94 0 0 1 434.405 61.994 C 434.231 61.867 434.071 61.736 433.921 61.61 A 41.789 41.789 0 0 1 433.655 61.382 A 22.807 22.807 0 0 1 432.737 60.324 C 432.433 59.949 432.169 59.588 431.946 59.237 A 6.315 6.315 0 0 1 431.409 58.208 A 10.757 10.757 0 0 1 430.887 56.791 A 11.865 11.865 0 0 1 430.579 55.425 A 3.744 3.744 0 0 1 430.55 55.123 C 430.53 54.775 430.53 54.29 430.53 53.667 A 17.566 17.566 0 0 1 430.481 52.856 C 430.47 52.615 430.46 52.37 430.441 52.117 A 12.235 12.235 0 0 0 430.432 52.007 C 430.432 51.47 430.383 50.982 430.334 50.591 A 0.624 0.624 0 0 1 430.307 50.527 C 430.273 50.433 430.244 50.303 430.238 50.192 A 0.747 0.747 0 0 1 430.237 50.152 C 430.138 49.856 430.062 49.495 429.993 49.068 A 24.721 24.721 0 0 1 429.895 48.394 A 15.993 15.993 0 0 1 429.871 47.877 C 429.853 47.278 429.863 46.567 429.914 45.744 A 29.93 29.93 0 0 1 429.944 45.318 A 146.878 146.878 0 0 1 430.164 43.841 A 669.78 669.78 0 0 1 430.237 43.365 C 430.432 42.437 430.53 41.558 430.53 40.777 C 430.481 37.896 430.53 35.845 430.627 34.624 C 430.672 33.566 430.835 32.706 431.082 32.118 A 3.003 3.003 0 0 1 431.165 31.939 A 371.211 371.211 0 0 0 431.301 31.599 C 431.427 31.283 431.519 31.036 431.555 30.816 A 1.231 1.231 0 0 0 431.606 30.662 C 431.65 30.486 431.642 30.334 431.604 30.181 A 4.011 4.011 0 0 0 431.451 29.963 C 431.416 29.917 431.377 29.869 431.332 29.818 A 2.925 2.925 0 0 0 431.213 29.693 C 430.432 29.009 429.163 28.374 427.502 27.788 A 19.322 19.322 0 0 0 425.72 27.25 C 425.146 27.108 424.603 27.006 424.094 26.941 A 10.803 10.803 0 0 0 423.157 26.861 Z M 319.059 59.681 A 11.598 11.598 0 0 0 319.06 59.685 A 10.978 10.978 0 0 0 319.065 59.697 A 11.181 11.181 0 0 1 319.062 59.689 A 11.598 11.598 0 0 1 319.059 59.681 A 9.846 9.846 0 0 1 319.057 59.677 A 10.029 10.029 0 0 1 319.055 59.673 C 318.933 59.405 318.835 59.1 318.75 58.77 A 19.433 19.433 0 0 1 318.518 57.72 C 318.445 57.354 318.384 57.012 318.341 56.689 A 7.049 7.049 0 0 1 318.274 55.767 A 3.378 3.378 0 0 1 318.269 55.701 C 318.233 55.206 318.329 54.937 318.469 54.937 A 0.227 0.227 0 0 0 318.687 54.8 C 318.773 54.627 318.761 54.294 318.665 53.814 A 39.478 39.478 0 0 1 318.629 53.669 C 318.546 53.332 318.472 53.014 318.408 52.709 A 18.442 18.442 0 0 1 318.225 51.714 C 318.127 51.079 318.03 50.542 317.981 50.152 A 25.95 25.95 0 0 1 317.981 50.036 C 317.982 49.784 317.991 49.644 318.064 49.699 A 0.149 0.149 0 0 1 318.079 49.712 C 318.118 49.752 318.222 50.017 318.365 50.456 A 22.472 22.472 0 0 1 318.469 50.787 C 318.663 51.416 318.857 52.19 319.098 53.061 A 62.246 62.246 0 0 0 319.104 53.081 C 319.299 53.96 319.543 54.742 319.788 55.376 A 10.038 10.038 0 0 0 319.911 55.661 C 320.098 56.074 320.253 56.321 320.374 56.402 C 320.892 56.618 320.837 55.685 320.139 53.672 A 32.655 32.655 0 0 0 319.836 52.837 A 3.734 3.734 0 0 1 319.832 52.824 C 319.639 52.288 319.446 51.375 319.159 50.129 A 139.287 139.287 0 0 0 319.153 50.103 C 318.86 48.833 318.616 47.515 318.372 46.099 A 72.889 72.889 0 0 1 318.154 45.04 C 317.97 44.116 317.818 43.298 317.639 42.583 C 317.441 41.83 317.307 41.366 317.211 41.219 A 0.089 0.089 0 0 0 317.151 41.167 A 0.123 0.123 0 0 0 317.038 41.24 C 317.026 41.262 317.018 41.288 317.012 41.317 A 0.51 0.51 0 0 0 317.004 41.412 A 0.139 0.139 0 0 0 317.003 41.415 C 316.957 41.514 317.005 41.707 317.053 41.9 A 3.548 3.548 0 0 1 317.169 42.3 C 317.293 42.831 317.378 43.557 317.492 44.43 A 163.516 163.516 0 0 0 317.493 44.439 A 78.116 78.116 0 0 1 317.688 47.71 C 317.688 48.499 317.659 49.086 317.579 49.448 A 1.164 1.164 0 0 1 317.493 49.712 A 1.501 1.501 0 0 0 317.354 50.072 C 317.233 50.562 317.319 51.174 317.59 51.91 A 8.473 8.473 0 0 1 317.724 52.347 A 5.536 5.536 0 0 1 317.883 53.13 A 3.114 3.114 0 0 1 317.925 53.321 C 317.967 53.548 317.973 53.736 317.955 53.884 A 1.014 1.014 0 0 1 317.932 54.009 C 317.883 54.302 317.737 54.107 317.542 53.423 C 317.297 52.788 317.053 51.861 316.76 50.738 A 212.929 212.929 0 0 1 316.272 48.405 A 443.243 443.243 0 0 0 316.028 47.222 C 315.873 46.45 315.758 45.755 315.669 45.139 A 38.694 38.694 0 0 1 315.54 44.146 C 315.393 42.437 315.247 41.412 315.1 40.972 C 314.928 40.584 314.717 40.539 314.435 40.769 A 1.554 1.554 0 0 0 314.319 40.874 A 1.206 1.206 0 0 0 314.135 41.072 C 313.961 41.313 313.937 41.579 314.065 41.886 A 1.628 1.628 0 0 0 314.172 42.095 A 1.617 1.617 0 0 1 314.177 42.103 C 314.416 42.539 314.366 42.927 314.075 43.316 C 313.846 43.59 313.832 43.693 313.992 43.625 A 0.652 0.652 0 0 0 314.026 43.609 A 0.131 0.131 0 0 1 314.033 43.606 C 314.111 43.572 314.188 43.631 314.266 43.757 A 1.243 1.243 0 0 1 314.319 43.853 C 314.392 44.036 314.438 44.274 314.477 44.567 A 14.793 14.793 0 0 1 314.514 44.878 A 21.186 21.186 0 0 0 314.615 45.956 C 314.689 46.581 314.793 47.248 314.926 47.956 A 41.721 41.721 0 0 0 315.393 50.103 A 37.278 37.278 0 0 0 315.718 51.462 C 316.087 52.887 316.507 54.134 316.956 55.181 C 317.053 55.425 317.151 55.767 317.249 56.206 C 317.346 56.695 317.444 57.134 317.542 57.622 A 6.965 6.965 0 0 0 317.552 57.711 C 317.604 58.127 317.698 58.586 317.834 59.087 C 317.896 59.392 317.976 59.679 318.063 59.934 A 6.044 6.044 0 0 0 318.225 60.357 A 20.656 20.656 0 0 0 318.296 60.564 C 318.342 60.698 318.382 60.817 318.404 60.914 A 0.602 0.602 0 0 1 318.42 61.04 A 1.063 1.063 0 0 1 318.42 61.065 C 318.416 61.24 318.367 61.282 318.274 61.236 A 0.178 0.178 0 0 1 318.239 61.213 C 318.174 61.158 318.106 61.041 318.022 60.876 A 18.248 18.248 0 0 1 317.932 60.699 A 2.813 2.813 0 0 1 317.855 60.529 A 7.278 7.278 0 0 1 317.59 59.722 C 317.59 59.699 317.579 59.676 317.568 59.648 M 442.151 39.556 A 2.49 2.49 0 0 0 441.744 39.586 A 1.327 1.327 0 0 0 441.272 39.751 C 441.028 39.849 440.93 40.044 440.979 40.24 A 51.483 51.483 0 0 1 441.619 43.602 C 441.953 45.703 442.228 48.098 442.444 50.787 A 238.456 238.456 0 0 0 442.628 53.048 C 442.813 55.19 443.005 56.975 443.225 58.404 A 73.15 73.15 0 0 1 443.492 60.342 C 443.642 61.551 443.785 62.931 443.909 64.507 C 444.058 66.376 444.151 67.931 444.207 69.17 A 102.818 102.818 0 0 1 444.25 70.22 A 51.8 51.8 0 0 0 444.271 70.74 C 444.366 72.872 444.535 73.016 444.81 71.111 A 38.71 38.71 0 0 0 444.885 70.562 A 26.35 26.35 0 0 1 444.934 70.047 C 445.106 68.403 445.317 68.343 445.595 69.896 A 21.935 21.935 0 0 1 445.667 70.318 C 445.764 71.05 445.862 71.441 445.959 71.587 A 0.148 0.148 0 0 0 445.989 71.611 C 446.077 71.662 446.17 71.548 446.301 71.197 C 446.396 71.007 446.491 70.817 446.631 70.717 A 0.438 0.438 0 0 1 446.643 70.708 C 446.787 70.564 446.884 70.515 446.98 70.56 A 0.2 0.2 0 0 1 446.985 70.562 C 447.083 70.611 447.229 70.513 447.327 70.269 C 447.392 70.072 447.458 69.831 447.523 69.561 A 21.905 21.905 0 0 0 447.62 69.146 A 0.783 0.783 0 0 0 447.645 69.213 C 447.686 69.305 447.732 69.339 447.809 69.341 A 0.28 0.28 0 0 0 447.815 69.341 A 0.097 0.097 0 0 0 447.887 69.307 C 447.943 69.249 447.989 69.113 448.059 68.902 C 448.108 68.609 448.157 68.267 448.157 67.876 C 448.157 67.308 448.105 66.946 448.002 66.773 A 0.231 0.231 0 0 0 447.864 66.656 A 2.826 2.826 0 0 1 447.925 66.094 C 447.952 65.957 447.987 65.819 448.023 65.677 A 52.228 52.228 0 0 0 448.059 65.533 A 2.713 2.713 0 0 1 448.27 65.002 A 2.24 2.24 0 0 1 448.499 64.654 C 448.694 64.41 448.84 63.921 449.036 63.287 A 13.918 13.918 0 0 0 449.415 61.568 A 14.73 14.73 0 0 0 449.475 61.138 C 449.568 60.259 449.704 58.767 449.801 56.62 A 102.433 102.433 0 0 0 449.817 56.255 C 449.963 53.912 450.11 51.617 450.208 49.322 A 397.198 397.198 0 0 0 450.265 47.927 C 450.31 46.758 450.338 45.864 450.349 45.235 A 30.064 30.064 0 0 0 450.354 44.732 C 450.275 43.978 449.905 43.256 449.193 42.567 A 6.505 6.505 0 0 0 448.645 42.095 A 8.065 8.065 0 0 0 445.423 40.589 A 9.624 9.624 0 0 0 444.885 40.484 A 4.677 4.677 0 0 0 444.58 40.397 C 444.37 40.343 444.153 40.288 443.958 40.191 A 4.535 4.535 0 0 1 443.692 40.107 C 443.513 40.044 443.372 39.975 443.269 39.889 A 0.665 0.665 0 0 1 443.225 39.849 C 442.932 39.654 442.542 39.556 442.151 39.556 Z M 72.19 46.487 C 72.253 46.48 72.295 46.462 72.338 46.439 A 1.055 1.055 0 0 1 72.341 46.437 C 72.295 46.462 72.253 46.48 72.19 46.487 A 0.538 0.538 0 0 1 72.131 46.49 C 71.497 46.609 70.83 47.63 70.104 49.554 A 32.096 32.096 0 0 0 69.592 51.031 A 98.04 98.04 0 0 1 69.574 51.081 C 69.484 51.328 69.404 51.544 69.324 51.745 A 7.842 7.842 0 0 1 69.055 52.349 C 68.909 52.691 68.811 52.935 68.762 52.984 A 0.367 0.367 0 0 0 68.736 53.013 C 68.681 53.082 68.586 53.231 68.42 53.521 A 5.273 5.273 0 0 0 68.201 53.887 A 19.367 19.367 0 0 0 67.834 54.595 C 67.59 54.986 67.444 55.328 67.346 55.621 A 2.893 2.893 0 0 0 67.329 55.661 C 67.243 55.871 67.157 56.145 67.072 56.454 A 26.117 26.117 0 0 0 66.907 57.085 A 33.197 33.197 0 0 1 66.833 57.374 A 12.747 12.747 0 0 1 66.223 59.234 A 104.251 104.251 0 0 1 65.794 60.275 C 65.345 61.347 64.96 62.212 64.661 62.847 C 64.372 63.521 64.178 64.006 64.032 64.347 A 16.683 16.683 0 0 1 64.026 64.361 A 2.837 2.837 0 0 0 63.991 64.447 C 63.888 64.71 63.846 64.937 63.866 65.081 A 0.337 0.337 0 0 0 63.879 65.142 C 63.879 65.305 63.879 65.4 63.851 65.512 A 0.977 0.977 0 0 1 63.831 65.581 A 0.761 0.761 0 0 1 63.826 65.591 C 63.791 65.658 63.755 65.7 63.702 65.718 A 0.21 0.21 0 0 1 63.635 65.728 A 3.387 3.387 0 0 0 63.6 65.763 C 63.558 65.807 63.498 65.872 63.42 65.97 A 4.119 4.119 0 0 0 63.342 66.07 C 63.197 66.264 63.052 66.553 62.859 66.844 A 4.642 4.642 0 0 1 62.854 66.851 A 21.783 21.783 0 0 0 62.591 67.388 A 5.901 5.901 0 0 0 62.463 67.681 A 7.675 7.675 0 0 1 62.436 67.735 C 62.354 67.897 62.271 68.045 62.189 68.197 A 10.519 10.519 0 0 0 62.024 68.511 A 4.563 4.563 0 0 0 61.938 68.623 C 61.841 68.752 61.755 68.877 61.674 68.983 A 1.64 1.64 0 0 1 61.536 69.146 A 1.67 1.67 0 0 1 61.515 69.173 C 61.38 69.346 61.287 69.388 61.194 69.341 A 0.578 0.578 0 0 0 61.141 69.318 C 60.999 69.264 60.892 69.295 60.861 69.412 A 0.296 0.296 0 0 0 60.852 69.488 A 0.077 0.077 0 0 1 60.852 69.491 C 60.85 69.532 60.816 69.605 60.724 69.709 A 1.563 1.563 0 0 1 60.657 69.781 L 60.168 70.269 A 1.068 1.068 0 0 0 59.973 70.446 C 59.943 70.48 59.912 70.515 59.88 70.55 A 2.643 2.643 0 0 1 59.778 70.66 C 59.705 70.708 59.644 70.757 59.583 70.8 A 0.749 0.749 0 0 1 59.387 70.904 C 59.274 70.941 59.19 70.979 59.09 70.994 A 0.617 0.617 0 0 1 58.997 71.001 A 5.666 5.666 0 0 1 58.917 71.041 C 58.869 71.064 58.825 71.083 58.79 71.093 A 0.147 0.147 0 0 1 58.752 71.099 A 1.229 1.229 0 0 0 58.707 71.146 C 58.677 71.179 58.655 71.212 58.655 71.246 C 58.704 71.392 58.655 71.49 58.606 71.636 A 0.556 0.556 0 0 1 58.57 71.72 C 58.517 71.82 58.44 71.89 58.362 71.929 A 0.19 0.19 0 0 1 58.348 71.941 C 58.335 71.952 58.322 71.96 58.309 71.965 A 0.237 0.237 0 0 1 58.215 71.978 C 58.167 72.002 58.105 72.027 58.044 72.057 A 0.65 0.65 0 0 0 57.874 72.173 C 57.764 72.246 57.681 72.375 57.606 72.558 A 3.112 3.112 0 0 0 57.532 72.759 A 15.046 15.046 0 0 1 57.411 73.022 C 56.733 74.462 56.378 74.528 56.283 73.283 A 8.892 8.892 0 0 1 56.262 72.857 L 56.262 71.978 A 3.07 3.07 0 0 0 56.272 71.928 C 56.293 71.814 56.302 71.723 56.307 71.641 A 3.414 3.414 0 0 0 56.311 71.441 A 26.521 26.521 0 0 1 56.311 71.421 C 56.311 71.307 56.313 71.255 56.344 71.182 A 0.628 0.628 0 0 1 56.36 71.148 L 56.36 71.05 C 56.409 71.05 56.409 71.001 56.458 71.001 C 56.458 71.001 56.506 70.953 56.555 70.953 C 56.59 70.882 56.625 70.812 56.66 70.724 A 2.123 2.123 0 0 0 56.702 70.611 A 0.628 0.628 0 0 0 56.715 70.565 C 56.75 70.425 56.746 70.254 56.702 70.122 C 56.662 69.805 56.816 69.616 57.138 69.557 A 1.373 1.373 0 0 1 57.385 69.537 C 57.544 69.537 57.703 69.504 57.783 69.466 A 0.155 0.155 0 0 0 57.825 69.439 A 0.174 0.174 0 0 0 57.857 69.419 C 57.906 69.378 57.915 69.319 57.897 69.255 A 0.338 0.338 0 0 0 57.874 69.195 A 5.564 5.564 0 0 0 57.849 69.17 C 57.78 69.103 57.733 69.063 57.642 69.052 A 0.492 0.492 0 0 0 57.581 69.048 A 0.366 0.366 0 0 0 57.55 69.035 C 57.479 69.007 57.407 69.008 57.336 69.057 A 0.34 0.34 0 0 0 57.288 69.097 A 0.334 0.334 0 0 1 57.266 69.102 C 57.11 69.13 57.022 69.02 57 68.689 A 2.741 2.741 0 0 1 56.995 68.511 C 57.062 68.075 57.129 67.684 57.196 67.356 A 9.769 9.769 0 0 1 57.288 66.949 A 3.512 3.512 0 0 1 57.317 66.873 C 57.411 66.638 57.506 66.483 57.6 66.394 A 0.349 0.349 0 0 1 57.727 66.314 C 57.825 66.363 57.922 66.46 57.971 66.607 A 29.606 29.606 0 0 1 57.978 66.633 C 58.01 66.762 58.04 66.892 58.04 67.021 A 0.703 0.703 0 0 1 58.02 67.193 A 4.623 4.623 0 0 1 58.018 67.204 C 57.97 67.441 57.92 67.584 57.776 67.632 A 0.286 0.286 0 0 0 57.691 67.732 C 57.608 67.894 57.685 68.146 57.922 68.462 C 58.091 68.673 58.223 68.775 58.319 68.736 A 0.13 0.13 0 0 0 58.362 68.706 A 0.34 0.34 0 0 0 58.402 68.675 C 58.517 68.57 58.638 68.339 58.812 67.936 A 19.507 19.507 0 0 0 58.899 67.73 C 58.972 67.559 59.033 67.4 59.094 67.248 A 5.79 5.79 0 0 1 59.29 66.802 A 7.013 7.013 0 0 1 59.313 66.756 C 59.446 66.494 59.536 66.36 59.583 66.314 C 59.583 66.265 59.631 66.167 59.631 66.021 A 0.628 0.628 0 0 0 59.645 65.975 C 59.68 65.835 59.675 65.664 59.631 65.533 C 59.631 65.322 59.657 65.036 59.743 64.692 A 4.415 4.415 0 0 1 59.875 64.263 A 8.591 8.591 0 0 1 60.092 63.586 A 12.243 12.243 0 0 1 60.413 62.798 C 60.594 62.436 60.748 62.235 60.876 62.135 A 0.417 0.417 0 0 1 60.999 62.066 C 61.047 62.066 61.096 62.017 61.096 61.919 A 0.053 0.053 0 0 0 61.101 61.914 C 61.142 61.861 61.095 61.721 61.047 61.626 C 60.989 61.538 60.965 61.45 60.967 61.362 A 0.581 0.581 0 0 1 60.999 61.187 C 61.033 61.083 61.068 60.979 61.138 60.874 A 0.841 0.841 0 0 1 61.243 60.747 C 61.34 60.601 61.487 60.406 61.633 60.113 A 8.164 8.164 0 0 0 61.847 59.649 C 61.872 59.589 61.896 59.53 61.92 59.471 A 5.815 5.815 0 0 0 62.024 59.185 A 21.196 21.196 0 0 1 62.197 58.599 A 9.833 9.833 0 0 1 62.366 58.111 A 7.712 7.712 0 0 1 62.386 58.058 C 62.524 57.698 62.66 57.423 62.753 57.192 A 3.867 3.867 0 0 0 62.756 57.183 A 2.806 2.806 0 0 0 62.819 57.073 C 62.93 56.868 63 56.673 63 56.548 A 4.707 4.707 0 0 0 63.005 56.532 C 63.04 56.386 63.047 56.328 63.023 56.31 A 0.037 0.037 0 0 0 63 56.304 A 0.092 0.092 0 0 1 62.976 56.301 C 62.921 56.286 62.951 56.211 63.017 56.075 A 12.01 12.01 0 0 1 63.049 56.011 A 3.961 3.961 0 0 0 63.06 55.995 C 63.158 55.847 63.301 55.612 63.489 55.376 A 6.257 6.257 0 0 0 63.831 54.925 C 63.94 54.766 64.05 54.595 64.172 54.4 A 31.948 31.948 0 0 1 64.357 54.039 C 64.416 53.924 64.472 53.814 64.522 53.709 A 3.059 3.059 0 0 0 64.661 53.374 C 64.758 53.033 64.905 52.74 65.051 52.447 A 26.021 26.021 0 0 1 65.168 52.253 C 65.273 52.082 65.37 51.932 65.442 51.861 A 1.744 1.744 0 0 0 65.498 51.802 C 65.551 51.744 65.596 51.685 65.634 51.627 A 0.913 0.913 0 0 0 65.735 51.421 C 65.813 51.265 65.829 51.171 65.832 51.064 A 2.892 2.892 0 0 0 65.833 50.982 A 3.718 3.718 0 0 1 65.833 50.916 C 65.835 50.823 65.844 50.747 65.893 50.654 A 0.71 0.71 0 0 1 65.93 50.591 A 0.711 0.711 0 0 1 65.964 50.544 A 1.484 1.484 0 0 1 66.321 50.249 A 1.176 1.176 0 0 0 66.528 50.073 A 1.124 1.124 0 0 0 66.711 49.81 A 2.231 2.231 0 0 0 66.746 49.718 A 1.929 1.929 0 0 0 66.858 49.078 C 66.858 48.833 66.907 48.589 66.956 48.345 C 67.01 48.235 67.05 48.125 67.1 48.033 A 0.472 0.472 0 0 1 67.249 47.857 A 2.655 2.655 0 0 0 67.35 47.721 C 67.431 47.606 67.486 47.504 67.516 47.414 A 0.46 0.46 0 0 0 67.542 47.271 A 0.465 0.465 0 0 0 67.536 47.198 C 67.513 47.051 67.411 46.978 67.2 46.978 C 67.103 46.978 66.957 47.171 66.716 47.461 A 17.436 17.436 0 0 1 66.711 47.466 A 7.789 7.789 0 0 0 66.53 47.692 C 66.344 47.933 66.151 48.209 65.93 48.54 C 65.686 48.98 65.442 49.371 65.295 49.712 A 10.648 10.648 0 0 0 65.228 49.849 C 65.078 50.161 65.002 50.365 65.002 50.494 C 65.002 50.579 65.002 50.627 64.97 50.703 A 0.661 0.661 0 0 1 64.954 50.738 A 0.987 0.987 0 0 0 64.912 50.76 C 64.893 50.771 64.875 50.781 64.859 50.79 A 0.773 0.773 0 0 1 64.858 50.791 A 1.021 1.021 0 0 1 64.857 50.791 M 346.838 28.716 A 4.661 4.661 0 0 0 346.828 28.601 C 346.771 28.04 346.628 27.737 346.399 27.691 A 1.373 1.373 0 0 0 346.253 27.696 C 346.222 27.699 346.189 27.705 346.153 27.713 A 1.002 1.002 0 0 0 346.057 27.74 A 0.917 0.917 0 0 0 345.787 27.854 A 1.251 1.251 0 0 0 345.569 28.033 C 345.452 28.11 345.397 28.219 345.38 28.31 A 0.344 0.344 0 0 0 345.374 28.374 C 345.374 28.57 345.52 29.156 345.764 30.132 A 577.755 577.755 0 0 1 346.156 31.449 C 346.351 32.103 346.562 32.81 346.79 33.55 A 72.747 72.747 0 0 0 347.4 35.491 A 320.152 320.152 0 0 1 348.01 37.359 A 39.702 39.702 0 0 1 348.037 37.44 C 348.228 38.017 348.463 38.768 348.743 39.654 A 415.406 415.406 0 0 0 349.176 41.009 A 58.4 58.4 0 0 1 349.573 42.29 C 349.817 43.121 350.11 43.853 350.354 44.585 C 350.574 45.135 350.766 45.547 350.931 45.842 A 3.839 3.839 0 0 0 351.086 46.099 C 351.233 46.392 351.428 46.734 351.672 47.222 A 59.181 59.181 0 0 1 351.959 47.948 A 16.353 16.353 0 0 1 352.209 48.638 C 352.356 49.126 352.502 49.517 352.698 49.81 A 3.187 3.187 0 0 0 352.782 49.93 C 352.947 50.155 353.102 50.298 353.186 50.298 C 353.533 50.298 353.495 49.835 353.104 48.909 A 13.044 13.044 0 0 0 352.942 48.54 A 17.707 17.707 0 0 1 352.405 47.076 A 7.284 7.284 0 0 1 352.374 46.972 C 352.285 46.655 352.238 46.406 352.219 46.224 A 1.729 1.729 0 0 1 352.209 46.05 A 1.233 1.233 0 0 0 352.203 45.932 C 352.178 45.674 352.077 45.268 351.868 44.683 A 15.41 15.41 0 0 0 351.659 44.017 A 49.457 49.457 0 0 0 351.086 42.437 A 16.824 16.824 0 0 1 350.862 41.897 C 350.745 41.603 350.641 41.32 350.548 41.053 A 49.281 49.281 0 0 1 350.305 40.337 A 30.553 30.553 0 0 1 350.226 40.097 C 350.115 39.753 350.047 39.519 350.023 39.393 A 0.463 0.463 0 0 1 350.012 39.312 A 0.286 0.286 0 0 0 350.018 39.281 C 350.046 39.073 349.905 38.641 349.719 37.945 A 96.233 96.233 0 0 1 349.535 37.424 A 39.857 39.857 0 0 0 348.938 35.796 C 348.645 35.015 348.401 34.527 348.206 34.283 A 0.665 0.665 0 0 1 348.166 34.239 C 348.08 34.136 348.011 33.995 347.947 33.815 A 4.535 4.535 0 0 1 347.864 33.55 A 3.717 3.717 0 0 1 347.717 32.525 C 347.717 32.354 347.705 32.171 347.681 31.988 A 3.805 3.805 0 0 0 347.571 31.451 A 3.791 3.791 0 0 0 347.569 31.439 C 347.538 31.197 347.488 30.993 347.419 30.826 A 1.167 1.167 0 0 0 347.278 30.572 A 9.091 9.091 0 0 1 347.141 30.213 C 347.113 30.136 347.086 30.052 347.058 29.961 A 6.069 6.069 0 0 1 346.985 29.693 A 3.946 3.946 0 0 1 346.866 29.125 A 3.167 3.167 0 0 1 346.838 28.716 Z M 475.842 28.716 A 4.661 4.661 0 0 0 475.832 28.601 C 475.775 28.04 475.632 27.737 475.403 27.691 A 1.373 1.373 0 0 0 475.257 27.696 C 475.226 27.699 475.193 27.705 475.157 27.713 A 1.002 1.002 0 0 0 475.061 27.74 A 0.917 0.917 0 0 0 474.791 27.854 A 1.251 1.251 0 0 0 474.573 28.033 C 474.456 28.11 474.401 28.219 474.384 28.31 A 0.344 0.344 0 0 0 474.377 28.374 C 474.377 28.57 474.524 29.156 474.768 30.132 A 577.755 577.755 0 0 1 475.16 31.449 C 475.355 32.103 475.566 32.81 475.793 33.55 A 72.747 72.747 0 0 0 476.404 35.491 A 320.152 320.152 0 0 1 477.014 37.359 A 39.702 39.702 0 0 1 477.041 37.44 C 477.232 38.017 477.467 38.768 477.747 39.654 A 415.406 415.406 0 0 0 478.18 41.009 A 58.4 58.4 0 0 1 478.577 42.29 C 478.821 43.121 479.114 43.853 479.358 44.585 C 479.578 45.135 479.77 45.547 479.935 45.842 A 3.839 3.839 0 0 0 480.09 46.099 C 480.237 46.392 480.432 46.734 480.676 47.222 A 59.181 59.181 0 0 1 480.963 47.948 A 16.353 16.353 0 0 1 481.213 48.638 C 481.36 49.126 481.506 49.517 481.702 49.81 A 3.187 3.187 0 0 0 481.786 49.93 C 481.951 50.155 482.106 50.298 482.19 50.298 C 482.537 50.298 482.499 49.835 482.108 48.909 A 13.044 13.044 0 0 0 481.946 48.54 A 17.707 17.707 0 0 1 481.409 47.076 A 7.284 7.284 0 0 1 481.378 46.972 C 481.288 46.655 481.242 46.406 481.223 46.224 A 1.729 1.729 0 0 1 481.213 46.05 A 1.233 1.233 0 0 0 481.207 45.932 C 481.182 45.674 481.08 45.268 480.872 44.683 A 15.41 15.41 0 0 0 480.663 44.017 A 49.457 49.457 0 0 0 480.09 42.437 A 16.824 16.824 0 0 1 479.865 41.897 C 479.749 41.603 479.645 41.32 479.552 41.053 A 49.281 49.281 0 0 1 479.309 40.337 A 30.553 30.553 0 0 1 479.23 40.097 C 479.119 39.753 479.051 39.519 479.026 39.393 A 0.463 0.463 0 0 1 479.016 39.312 A 0.286 0.286 0 0 0 479.022 39.281 C 479.05 39.073 478.909 38.641 478.723 37.945 A 96.233 96.233 0 0 1 478.539 37.424 A 39.857 39.857 0 0 0 477.942 35.796 C 477.649 35.015 477.405 34.527 477.209 34.283 A 0.665 0.665 0 0 1 477.17 34.239 C 477.084 34.136 477.015 33.995 476.951 33.815 A 4.535 4.535 0 0 1 476.868 33.55 A 3.717 3.717 0 0 1 476.721 32.525 C 476.721 32.354 476.709 32.171 476.685 31.988 A 3.805 3.805 0 0 0 476.575 31.451 A 3.791 3.791 0 0 0 476.573 31.439 C 476.542 31.197 476.492 30.993 476.423 30.826 A 1.167 1.167 0 0 0 476.282 30.572 A 9.091 9.091 0 0 1 476.144 30.213 C 476.117 30.136 476.089 30.052 476.062 29.961 A 6.069 6.069 0 0 1 475.989 29.693 A 3.946 3.946 0 0 1 475.87 29.125 A 3.167 3.167 0 0 1 475.842 28.716 Z M 105.927 35.49 A 3.468 3.468 0 0 1 105.926 35.492 A 3.509 3.509 0 0 1 105.925 35.494 A 3.549 3.549 0 0 1 105.924 35.496 A 2.99 2.99 0 0 1 105.923 35.499 A 3.024 3.024 0 0 1 105.922 35.501 A 3.669 3.669 0 0 1 105.92 35.503 C 105.896 35.601 105.884 35.686 105.884 35.766 A 0.7 0.7 0 0 0 105.92 35.992 C 105.96 36.071 105.968 36.184 105.942 36.328 A 1.451 1.451 0 0 1 105.92 36.431 A 7.661 7.661 0 0 0 105.883 36.549 C 105.87 36.59 105.856 36.632 105.841 36.675 A 1.122 1.122 0 0 1 105.725 36.919 C 105.627 37.083 105.55 37.181 105.481 37.243 A 0.447 0.447 0 0 1 105.383 37.31 A 0.043 0.043 0 0 1 105.362 37.304 C 105.326 37.283 105.285 37.21 105.222 37.086 A 22.041 22.041 0 0 1 105.188 37.017 A 0.254 0.254 0 0 1 105.187 37.015 C 105.147 36.892 105.175 36.668 105.27 36.314 A 8.173 8.173 0 0 1 105.334 36.089 C 105.481 35.601 105.676 35.064 105.92 34.429 A 8.151 8.151 0 0 0 106.002 34.262 C 106.117 34.017 106.226 33.757 106.335 33.489 A 59.914 59.914 0 0 1 106.75 32.476 C 106.952 31.972 107.107 31.515 107.232 31.12 A 35.042 35.042 0 0 0 107.385 30.621 A 6.917 6.917 0 0 1 107.442 30.44 C 107.541 30.142 107.653 29.864 107.756 29.604 A 17.048 17.048 0 0 0 107.874 29.302 A 9.493 9.493 0 0 1 107.918 29.204 C 108.044 28.928 108.148 28.737 108.231 28.602 A 3.539 3.539 0 0 1 108.313 28.472 C 108.459 28.277 108.655 27.984 108.801 27.642 A 13.778 13.778 0 0 0 109.024 27.241 A 3.316 3.316 0 0 0 109.29 26.617 C 109.436 26.275 109.534 26.031 109.583 25.835 A 1.241 1.241 0 0 0 109.584 25.83 C 109.626 25.657 109.589 25.643 109.472 25.752 A 1.423 1.423 0 0 0 109.436 25.787 A 14.251 14.251 0 0 0 109.239 26.016 C 109.117 26.162 108.99 26.319 108.865 26.484 A 10.445 10.445 0 0 0 108.362 27.203 A 43.542 43.542 0 0 0 108.2 27.447 C 108.041 27.688 107.893 27.921 107.758 28.145 A 9.764 9.764 0 0 0 107.385 28.814 A 4.433 4.433 0 0 0 107.248 29.082 C 107.104 29.389 107.043 29.616 107.043 29.693 A 0.325 0.325 0 0 1 107.045 29.696 C 107.139 29.889 106.944 29.986 106.506 29.986 A 3.691 3.691 0 0 0 106.484 29.983 C 106.112 29.939 106.021 29.988 106.165 30.083 A 0.204 0.204 0 0 1 106.23 30.156 C 106.306 30.294 106.284 30.563 106.165 30.962 A 4.37 4.37 0 0 1 106.025 31.352 C 105.863 31.751 105.626 32.198 105.334 32.671 C 105.237 32.915 105.09 33.257 104.944 33.648 C 104.797 34.087 104.651 34.527 104.553 34.966 A 7.984 7.984 0 0 1 104.441 35.444 C 104.358 35.758 104.26 36.073 104.163 36.431 C 104.053 36.706 103.958 36.949 103.871 37.171 A 18.598 18.598 0 0 1 103.674 37.652 C 103.577 37.945 103.479 38.238 103.43 38.531 A 2.145 2.145 0 0 0 103.406 38.609 C 103.333 38.859 103.337 39.028 103.381 39.117 C 103.419 39.23 103.457 39.314 103.472 39.414 A 0.617 0.617 0 0 1 103.479 39.507 C 103.479 39.565 103.471 39.615 103.459 39.661 A 0.979 0.979 0 0 1 103.381 39.849 C 103.344 39.924 103.307 40.056 103.269 40.245 A 6.493 6.493 0 0 0 103.235 40.435 C 103.21 40.559 103.198 40.696 103.185 40.838 A 5.451 5.451 0 0 1 103.137 41.265 A 3.745 3.745 0 0 1 103.127 41.543 A 7.033 7.033 0 0 1 103.04 42.193 A 7.063 7.063 0 0 1 103.008 42.369 C 102.985 42.488 102.962 42.588 102.939 42.674 A 2.69 2.69 0 0 1 102.893 42.828 A 6.138 6.138 0 0 0 102.857 42.937 A 1.117 1.117 0 0 0 102.795 43.267 C 102.771 43.34 102.759 43.401 102.759 43.456 A 0.331 0.331 0 0 0 102.795 43.609 A 1.439 1.439 0 0 1 102.829 43.726 C 102.853 43.825 102.874 43.951 102.885 44.103 A 3.275 3.275 0 0 1 102.893 44.341 A 3.133 3.133 0 0 1 102.926 44.629 A 9.759 9.759 0 0 1 102.942 45.318 A 4.169 4.169 0 0 1 102.936 45.535 C 102.923 45.785 102.893 46.006 102.893 46.197 A 2.582 2.582 0 0 1 102.87 46.303 C 102.842 46.416 102.814 46.487 102.787 46.534 A 0.262 0.262 0 0 1 102.747 46.587 A 0.043 0.043 0 0 0 102.725 46.594 C 102.684 46.618 102.649 46.707 102.649 46.831 C 102.649 46.898 102.659 46.974 102.674 47.056 A 5.725 5.725 0 0 0 102.747 47.369 A 1.22 1.22 0 0 1 102.811 47.523 A 1.672 1.672 0 0 1 102.893 48.052 L 102.893 48.638 C 102.795 49.029 102.6 48.785 102.307 47.954 A 7.162 7.162 0 0 1 102.241 47.667 C 102.211 47.525 102.19 47.392 102.177 47.26 A 3.297 3.297 0 0 1 102.161 46.929 A 2.173 2.173 0 0 1 102.166 46.774 C 102.181 46.566 102.228 46.422 102.307 46.343 A 1.629 1.629 0 0 0 102.325 46.325 C 102.549 46.094 102.496 46.004 102.258 46.099 A 0.12 0.12 0 0 1 102.195 46.079 C 102.121 46.033 102.052 45.91 102.014 45.757 C 101.985 45.612 101.956 45.45 101.937 45.271 A 3.761 3.761 0 0 1 101.917 44.878 A 23.134 23.134 0 0 1 101.918 44.6 A 4.222 4.222 0 0 1 101.965 43.951 C 102.014 43.658 102.112 43.462 102.209 43.365 C 102.291 43.324 102.304 43.283 102.335 43.214 M 209.931 35.49 A 3.468 3.468 0 0 1 209.93 35.492 A 3.509 3.509 0 0 1 209.929 35.494 A 3.549 3.549 0 0 1 209.928 35.496 A 2.99 2.99 0 0 1 209.927 35.499 A 3.024 3.024 0 0 1 209.925 35.501 A 3.669 3.669 0 0 1 209.924 35.503 C 209.9 35.601 209.888 35.686 209.888 35.766 A 0.7 0.7 0 0 0 209.924 35.992 C 209.964 36.071 209.971 36.184 209.946 36.328 A 1.451 1.451 0 0 1 209.924 36.431 A 7.661 7.661 0 0 0 209.887 36.549 C 209.874 36.59 209.86 36.632 209.845 36.675 A 1.122 1.122 0 0 1 209.729 36.919 C 209.631 37.083 209.554 37.181 209.485 37.243 A 0.447 0.447 0 0 1 209.387 37.31 A 0.043 0.043 0 0 1 209.366 37.304 C 209.329 37.283 209.289 37.21 209.226 37.086 A 22.041 22.041 0 0 1 209.192 37.017 A 0.254 0.254 0 0 1 209.191 37.015 C 209.151 36.892 209.179 36.668 209.274 36.314 A 8.173 8.173 0 0 1 209.338 36.089 C 209.485 35.601 209.68 35.064 209.924 34.429 A 8.151 8.151 0 0 0 210.006 34.262 C 210.121 34.017 210.23 33.757 210.339 33.489 A 59.914 59.914 0 0 1 210.754 32.476 C 210.956 31.972 211.111 31.515 211.236 31.12 A 35.042 35.042 0 0 0 211.389 30.621 A 6.917 6.917 0 0 1 211.446 30.44 C 211.544 30.142 211.657 29.864 211.76 29.604 A 17.048 17.048 0 0 0 211.877 29.302 A 9.493 9.493 0 0 1 211.922 29.204 C 212.048 28.928 212.152 28.737 212.234 28.602 A 3.539 3.539 0 0 1 212.317 28.472 C 212.463 28.277 212.659 27.984 212.805 27.642 A 13.778 13.778 0 0 0 213.028 27.241 A 3.316 3.316 0 0 0 213.293 26.617 C 213.44 26.275 213.538 26.031 213.586 25.835 A 1.241 1.241 0 0 0 213.588 25.83 C 213.63 25.657 213.593 25.643 213.476 25.752 A 1.423 1.423 0 0 0 213.44 25.787 A 14.251 14.251 0 0 0 213.243 26.016 C 213.121 26.162 212.994 26.319 212.869 26.484 A 10.445 10.445 0 0 0 212.366 27.203 A 43.542 43.542 0 0 0 212.204 27.447 C 212.045 27.688 211.897 27.921 211.762 28.145 A 9.764 9.764 0 0 0 211.389 28.814 A 4.433 4.433 0 0 0 211.252 29.082 C 211.108 29.389 211.047 29.616 211.047 29.693 A 0.325 0.325 0 0 1 211.049 29.696 C 211.143 29.889 210.948 29.986 210.51 29.986 A 3.691 3.691 0 0 0 210.488 29.983 C 210.116 29.939 210.025 29.988 210.168 30.083 A 0.204 0.204 0 0 1 210.234 30.156 C 210.31 30.294 210.288 30.563 210.168 30.962 A 4.37 4.37 0 0 1 210.029 31.352 C 209.867 31.751 209.63 32.198 209.338 32.671 C 209.241 32.915 209.094 33.257 208.948 33.648 C 208.801 34.087 208.655 34.527 208.557 34.966 A 7.984 7.984 0 0 1 208.445 35.444 C 208.362 35.758 208.264 36.073 208.167 36.431 C 208.057 36.706 207.962 36.949 207.875 37.171 A 18.598 18.598 0 0 1 207.678 37.652 C 207.581 37.945 207.483 38.238 207.434 38.531 A 2.145 2.145 0 0 0 207.41 38.609 C 207.337 38.859 207.341 39.028 207.385 39.117 C 207.423 39.23 207.461 39.314 207.476 39.414 A 0.617 0.617 0 0 1 207.483 39.507 C 207.483 39.565 207.475 39.615 207.463 39.661 A 0.979 0.979 0 0 1 207.385 39.849 C 207.348 39.924 207.31 40.056 207.273 40.245 A 6.493 6.493 0 0 0 207.239 40.435 C 207.214 40.559 207.202 40.696 207.189 40.838 A 5.451 5.451 0 0 1 207.141 41.265 A 3.745 3.745 0 0 1 207.131 41.543 A 7.033 7.033 0 0 1 207.043 42.193 A 7.063 7.063 0 0 1 207.012 42.369 C 206.989 42.488 206.966 42.588 206.943 42.674 A 2.69 2.69 0 0 1 206.897 42.828 A 6.138 6.138 0 0 0 206.861 42.937 A 1.117 1.117 0 0 0 206.799 43.267 C 206.775 43.34 206.763 43.401 206.763 43.456 A 0.331 0.331 0 0 0 206.799 43.609 A 1.439 1.439 0 0 1 206.833 43.726 C 206.857 43.825 206.877 43.951 206.889 44.103 A 3.275 3.275 0 0 1 206.897 44.341 A 3.133 3.133 0 0 1 206.93 44.629 A 9.759 9.759 0 0 1 206.946 45.318 A 4.169 4.169 0 0 1 206.94 45.535 C 206.927 45.785 206.897 46.006 206.897 46.197 A 2.582 2.582 0 0 1 206.874 46.303 C 206.846 46.416 206.818 46.487 206.791 46.534 A 0.262 0.262 0 0 1 206.75 46.587 A 0.043 0.043 0 0 0 206.729 46.594 C 206.688 46.618 206.653 46.707 206.653 46.831 C 206.653 46.898 206.663 46.974 206.678 47.056 A 5.725 5.725 0 0 0 206.75 47.369 A 1.22 1.22 0 0 1 206.815 47.523 A 1.672 1.672 0 0 1 206.897 48.052 L 206.897 48.638 C 206.799 49.029 206.604 48.785 206.311 47.954 A 7.162 7.162 0 0 1 206.245 47.667 C 206.215 47.525 206.194 47.392 206.181 47.26 A 3.297 3.297 0 0 1 206.165 46.929 A 2.173 2.173 0 0 1 206.17 46.774 C 206.185 46.566 206.232 46.422 206.311 46.343 A 1.629 1.629 0 0 0 206.329 46.325 C 206.553 46.094 206.5 46.004 206.262 46.099 A 0.12 0.12 0 0 1 206.199 46.079 C 206.124 46.033 206.056 45.91 206.018 45.757 C 205.989 45.612 205.96 45.45 205.941 45.271 A 3.761 3.761 0 0 1 205.92 44.878 A 23.134 23.134 0 0 1 205.921 44.6 A 4.222 4.222 0 0 1 205.969 43.951 C 206.018 43.658 206.116 43.462 206.213 43.365 C 206.295 43.324 206.308 43.283 206.339 43.214 M 451.868 31.695 A 1.744 1.744 0 0 0 451.673 31.708 C 451.401 31.74 450.986 31.824 450.452 31.939 C 449.768 32.085 449.036 32.281 448.303 32.525 A 39.768 39.768 0 0 0 447.264 32.799 A 41.408 41.408 0 0 0 446.204 33.111 A 9.107 9.107 0 0 1 445.833 33.248 A 33.419 33.419 0 0 1 445.374 33.404 A 6.962 6.962 0 0 1 444.836 33.599 A 6.962 6.962 0 0 0 444.299 33.794 A 12.483 12.483 0 0 1 443.64 33.916 A 12.483 12.483 0 0 0 442.981 34.038 A 6.988 6.988 0 0 0 442.24 34.144 C 442.032 34.186 441.838 34.237 441.661 34.297 A 3.434 3.434 0 0 0 441.565 34.331 C 441.42 34.368 441.302 34.404 441.191 34.44 A 18.326 18.326 0 0 0 441.077 34.478 A 45.922 45.922 0 0 0 439.884 34.877 C 439.076 35.162 438.422 35.43 437.952 35.699 A 3.657 3.657 0 0 1 437.95 35.7 C 437.842 35.772 437.761 35.817 437.706 35.875 A 0.282 0.282 0 0 0 437.659 35.943 A 0.326 0.326 0 0 0 437.631 35.975 C 437.592 36.026 437.553 36.096 437.514 36.136 A 0.215 0.215 0 0 1 437.512 36.138 A 0.709 0.709 0 0 1 437.478 36.199 C 437.464 36.222 437.45 36.241 437.436 36.258 A 0.971 0.971 0 0 1 437.366 36.333 L 437.17 36.529 A 12.588 12.588 0 0 0 437.038 36.605 C 436.506 36.918 436.477 37 436.916 36.886 A 4.955 4.955 0 0 0 436.975 36.871 A 29.69 29.69 0 0 1 437.541 36.668 C 438.059 36.489 438.448 36.377 438.696 36.344 A 1.034 1.034 0 0 1 438.831 36.333 A 1.098 1.098 0 0 1 438.874 36.327 C 439.107 36.298 439.157 36.379 439.056 36.572 A 1.072 1.072 0 0 1 439.026 36.626 C 438.933 36.719 438.84 36.812 438.706 36.904 A 1.7 1.7 0 0 1 438.684 36.919 A 0.953 0.953 0 0 1 438.499 37.017 A 0.702 0.702 0 0 1 438.245 37.066 A 0.778 0.778 0 0 0 438.052 37.092 C 437.97 37.113 437.877 37.145 437.762 37.191 A 9.03 9.03 0 0 0 437.708 37.212 A 3.932 3.932 0 0 0 437.553 37.294 C 437.394 37.383 437.22 37.492 437.074 37.602 A 4.267 4.267 0 0 0 437.073 37.603 A 1.449 1.449 0 0 0 437.006 37.656 C 436.883 37.76 436.848 37.835 436.902 37.88 A 0.122 0.122 0 0 0 436.926 37.896 A 0.538 0.538 0 0 0 437.068 37.958 C 437.253 38.014 437.556 38.042 438 38.042 L 440.686 38.042 A 46.656 46.656 0 0 1 442.548 38.006 A 49.465 49.465 0 0 1 444.446 38.042 A 134.995 134.995 0 0 1 445.322 38.08 C 446.158 38.119 446.863 38.164 447.375 38.238 C 447.888 38.274 448.373 38.338 448.811 38.389 A 17.748 17.748 0 0 0 449.231 38.433 A 25.479 25.479 0 0 1 449.587 38.465 C 449.91 38.496 450.151 38.528 450.311 38.559 A 1.845 1.845 0 0 1 450.403 38.579 A 0.712 0.712 0 0 0 450.631 38.535 C 450.831 38.467 451.084 38.321 451.419 38.11 A 25.67 25.67 0 0 0 451.526 38.042 C 451.999 37.711 452.518 37.334 452.994 36.867 A 6.989 6.989 0 0 0 453.04 36.822 A 7.463 7.463 0 0 0 453.489 36.283 C 453.634 36.09 453.755 35.901 453.851 35.715 A 2.439 2.439 0 0 0 454.016 35.308 A 1.427 1.427 0 0 0 454.091 34.854 C 454.091 34.464 453.929 34.074 453.634 33.684 A 3.619 3.619 0 0 0 453.528 33.55 A 0.524 0.524 0 0 1 453.388 33.255 A 0.653 0.653 0 0 1 453.381 33.16 A 1.208 1.208 0 0 1 453.333 32.775 A 10.565 10.565 0 0 1 453.333 32.72 A 1.153 1.153 0 0 0 453.323 32.573 C 453.307 32.444 453.271 32.326 453.235 32.183 C 453.187 32.04 453.094 31.898 452.909 31.845 A 0.505 0.505 0 0 0 452.893 31.841 A 0.982 0.982 0 0 0 452.7 31.772 C 452.564 31.737 452.392 31.714 452.185 31.703 A 5.893 5.893 0 0 0 451.868 31.695 Z M 342.59 48.931 A 0.475 0.475 0 0 0 342.338 49.012 C 342.29 49.042 342.242 49.078 342.192 49.116 A 10.339 10.339 0 0 1 342.053 49.224 A 1.581 1.581 0 0 0 341.942 49.402 C 341.81 49.639 341.643 50.019 341.418 50.542 A 46.439 46.439 0 0 1 341.416 50.55 C 341.21 51.125 340.971 51.769 340.755 52.481 A 18.159 18.159 0 0 0 340.637 52.886 A 169.366 169.366 0 0 0 340.283 54.089 C 340.173 54.473 340.076 54.839 340.002 55.181 C 339.866 55.774 339.814 56.197 339.848 56.329 A 0.118 0.118 0 0 0 339.856 56.353 A 0.173 0.173 0 0 1 339.87 56.4 C 339.888 56.498 339.862 56.674 339.829 56.945 A 17.17 17.17 0 0 0 339.807 57.134 C 339.758 57.574 339.612 58.062 339.465 58.599 A 23.232 23.232 0 0 0 339.252 59.521 C 339.185 59.844 339.124 60.186 339.075 60.552 A 41.153 41.153 0 0 0 338.94 61.535 C 338.904 61.846 338.879 62.139 338.879 62.408 A 13.863 13.863 0 0 1 338.784 63.131 C 338.739 63.421 338.687 63.731 338.635 64.068 A 11.298 11.298 0 0 1 338.521 64.651 C 338.469 64.886 338.414 65.107 338.364 65.303 A 79.93 79.93 0 0 0 338.293 65.581 A 26.206 26.206 0 0 0 338.21 65.836 C 337.761 67.23 337.874 67.347 338.515 66.187 A 21.517 21.517 0 0 0 338.684 65.874 A 10.628 10.628 0 0 1 338.95 65.434 C 339.094 65.207 339.262 64.963 339.465 64.703 A 10.566 10.566 0 0 1 340.36 63.649 A 4.255 4.255 0 0 1 340.54 63.482 A 67.173 67.173 0 0 0 341.236 62.704 C 341.898 61.953 342.456 61.285 342.932 60.699 A 38.709 38.709 0 0 0 343.235 60.29 C 343.634 59.743 343.86 59.383 343.86 59.185 A 0.595 0.595 0 0 1 343.891 59.009 C 343.945 58.835 344.072 58.614 344.271 58.344 A 5.894 5.894 0 0 1 344.299 58.306 C 344.592 57.915 344.934 57.574 345.325 57.232 C 345.648 56.908 345.884 56.76 346.074 56.745 A 0.404 0.404 0 0 1 346.106 56.744 A 0.45 0.45 0 0 0 346.275 56.704 A 1.875 1.875 0 0 0 346.399 56.646 A 0.29 0.29 0 0 0 346.439 56.594 C 346.458 56.563 346.475 56.526 346.485 56.487 A 0.336 0.336 0 0 0 346.497 56.402 C 346.497 56.355 346.587 56.173 346.767 55.942 A 3.166 3.166 0 0 1 346.79 55.913 C 346.985 55.621 347.18 55.376 347.473 55.083 A 8.044 8.044 0 0 0 347.936 54.493 A 2.495 2.495 0 0 0 348.108 54.204 C 348.297 53.92 348.395 53.728 348.401 53.583 A 0.34 0.34 0 0 0 348.401 53.57 A 1.203 1.203 0 0 0 348.274 53.175 C 348.095 52.812 347.733 52.372 347.206 51.838 A 16.91 16.91 0 0 0 347.131 51.763 C 346.35 50.933 345.422 50.298 344.446 49.712 C 343.526 49.18 342.895 48.888 342.598 48.93 A 0.345 0.345 0 0 0 342.59 48.931 Z M 471.594 48.931 A 0.475 0.475 0 0 0 471.342 49.012 C 471.294 49.042 471.246 49.078 471.196 49.116 A 10.339 10.339 0 0 1 471.057 49.224 A 1.581 1.581 0 0 0 470.945 49.402 C 470.814 49.639 470.647 50.019 470.422 50.542 A 46.439 46.439 0 0 1 470.42 50.55 C 470.214 51.125 469.975 51.769 469.759 52.481 A 18.159 18.159 0 0 0 469.641 52.886 A 169.366 169.366 0 0 0 469.287 54.089 C 469.177 54.473 469.08 54.839 469.006 55.181 C 468.869 55.774 468.818 56.197 468.852 56.329 A 0.118 0.118 0 0 0 468.86 56.353 A 0.173 0.173 0 0 1 468.874 56.4 C 468.892 56.498 468.866 56.674 468.833 56.945 A 17.17 17.17 0 0 0 468.811 57.134 C 468.762 57.574 468.616 58.062 468.469 58.599 A 23.232 23.232 0 0 0 468.256 59.521 C 468.188 59.844 468.127 60.186 468.079 60.552 A 41.153 41.153 0 0 0 467.944 61.535 C 467.908 61.846 467.883 62.139 467.883 62.408 A 13.863 13.863 0 0 1 467.787 63.131 C 467.743 63.421 467.691 63.731 467.639 64.068 A 11.298 11.298 0 0 1 467.525 64.651 C 467.473 64.886 467.418 65.107 467.368 65.303 A 79.93 79.93 0 0 0 467.297 65.581 A 26.206 26.206 0 0 0 467.214 65.836 C 466.765 67.23 466.878 67.347 467.519 66.187 A 21.517 21.517 0 0 0 467.688 65.874 A 10.628 10.628 0 0 1 467.953 65.434 C 468.098 65.207 468.266 64.963 468.469 64.703 A 10.566 10.566 0 0 1 469.364 63.649 A 4.255 4.255 0 0 1 469.543 63.482 A 67.173 67.173 0 0 0 470.24 62.704 C 470.901 61.953 471.46 61.285 471.936 60.699 A 38.709 38.709 0 0 0 472.239 60.29 C 472.638 59.743 472.864 59.383 472.864 59.185 A 0.595 0.595 0 0 1 472.895 59.009 C 472.949 58.835 473.076 58.614 473.275 58.344 A 5.894 5.894 0 0 1 473.303 58.306 C 473.596 57.915 473.938 57.574 474.329 57.232 C 474.652 56.908 474.888 56.76 475.078 56.745 A 0.404 0.404 0 0 1 475.11 56.744 A 0.45 0.45 0 0 0 475.279 56.704 A 1.875 1.875 0 0 0 475.403 56.646 A 0.29 0.29 0 0 0 475.443 56.594 C 475.462 56.563 475.479 56.526 475.489 56.487 A 0.336 0.336 0 0 0 475.5 56.402 C 475.5 56.355 475.591 56.173 475.771 55.942 A 3.166 3.166 0 0 1 475.793 55.913 C 475.989 55.621 476.184 55.376 476.477 55.083 A 8.044 8.044 0 0 0 476.94 54.493 A 2.495 2.495 0 0 0 477.112 54.204 C 477.301 53.92 477.399 53.728 477.405 53.583 A 0.34 0.34 0 0 0 477.405 53.57 A 1.203 1.203 0 0 0 477.278 53.175 C 477.098 52.812 476.737 52.372 476.21 51.838 A 16.91 16.91 0 0 0 476.135 51.763 C 475.354 50.933 474.426 50.298 473.45 49.712 C 472.53 49.18 471.899 48.888 471.602 48.93 A 0.345 0.345 0 0 0 471.594 48.931 Z M 116.027 33.961 A 8.272 8.272 0 0 0 115.979 34.038 A 12.947 12.947 0 0 0 115.233 35.359 C 115.043 35.744 114.861 36.157 114.687 36.606 A 18.745 18.745 0 0 0 114.514 37.066 A 6.405 6.405 0 0 0 114.385 37.377 C 114.299 37.601 114.242 37.794 114.203 37.953 A 3.493 3.493 0 0 0 114.172 38.091 C 114.124 38.333 114.124 38.383 114.218 38.289 A 0.789 0.789 0 0 0 114.221 38.287 A 3.954 3.954 0 0 1 114.342 38.114 C 114.517 37.88 114.653 37.769 114.764 37.769 A 0.163 0.163 0 0 1 114.856 37.798 C 114.98 37.84 114.964 38.056 114.867 38.388 A 5.27 5.27 0 0 1 114.807 38.579 A 2.947 2.947 0 0 1 114.703 38.995 C 114.661 39.129 114.612 39.263 114.563 39.41 A 3.162 3.162 0 0 0 114.462 39.711 C 114.424 39.842 114.396 39.96 114.368 40.044 C 114.293 40.343 114.161 40.757 113.994 41.241 A 47.961 47.961 0 0 1 113.831 41.704 C 113.538 42.437 113.293 43.121 113.049 43.804 A 84.763 84.763 0 0 0 112.854 44.231 C 112.711 44.544 112.601 44.792 112.525 44.974 A 8.596 8.596 0 0 0 112.463 45.122 C 112.385 45.28 112.306 45.437 112.278 45.569 A 0.444 0.444 0 0 0 112.268 45.66 A 0.417 0.417 0 0 0 112.255 45.708 C 112.23 45.828 112.274 45.915 112.317 46.001 A 0.281 0.281 0 0 1 112.374 46.072 C 112.39 46.104 112.392 46.142 112.367 46.193 A 0.269 0.269 0 0 1 112.366 46.197 L 112.122 46.441 A 0.465 0.465 0 0 0 111.95 46.539 C 111.895 46.59 111.855 46.655 111.829 46.734 A 0.837 0.837 0 0 0 111.771 46.866 C 111.757 46.914 111.754 46.962 111.772 47.009 A 0.197 0.197 0 0 0 111.78 47.027 A 0.225 0.225 0 0 0 111.939 47.122 C 112.271 47.177 113.007 46.797 114.172 45.953 A 14.519 14.519 0 0 1 114.717 45.637 A 7.733 7.733 0 0 1 114.954 45.513 A 5.293 5.293 0 0 1 115.127 45.413 C 115.289 45.324 115.417 45.269 115.491 45.269 A 0.46 0.46 0 0 0 115.61 45.205 C 115.738 45.113 115.894 44.939 116.077 44.683 C 116.321 44.341 116.614 43.902 116.858 43.413 C 117.108 42.997 117.429 42.545 117.821 42.057 A 18.809 18.809 0 0 1 118.03 41.802 A 10.379 10.379 0 0 1 118.839 40.928 A 6.937 6.937 0 0 1 119.543 40.337 A 11.584 11.584 0 0 0 120.282 39.684 A 44.254 44.254 0 0 0 121.057 38.921 A 24.775 24.775 0 0 0 121.702 38.193 C 121.894 37.964 122.066 37.74 122.21 37.517 A 4.124 4.124 0 0 0 122.278 37.408 A 12.522 12.522 0 0 0 122.508 37.067 C 122.674 36.813 122.795 36.604 122.893 36.417 A 7.068 7.068 0 0 0 122.961 36.285 A 1.266 1.266 0 0 0 123.009 36.143 C 123.057 35.964 123.049 35.816 123.01 35.699 C 122.922 35.521 122.753 35.344 122.503 35.13 A 7.554 7.554 0 0 0 122.424 35.064 C 122.131 34.771 121.729 34.478 121.257 34.185 A 15.611 15.611 0 0 0 120.764 33.892 A 9.852 9.852 0 0 0 119.891 33.391 A 11.414 11.414 0 0 0 118.811 32.915 A 11.976 11.976 0 0 0 118.372 32.755 C 117.967 32.617 117.645 32.543 117.424 32.569 A 0.626 0.626 0 0 0 117.395 32.574 C 117.016 32.716 116.545 33.134 116.027 33.961 Z M 220.031 33.961 A 8.272 8.272 0 0 0 219.983 34.038 A 12.947 12.947 0 0 0 219.237 35.359 C 219.047 35.744 218.865 36.157 218.69 36.606 A 18.745 18.745 0 0 0 218.518 37.066 A 6.405 6.405 0 0 0 218.389 37.377 C 218.303 37.601 218.246 37.794 218.207 37.953 A 3.493 3.493 0 0 0 218.176 38.091 C 218.128 38.333 218.127 38.383 218.222 38.289 A 0.789 0.789 0 0 0 218.225 38.287 A 3.954 3.954 0 0 1 218.346 38.114 C 218.521 37.88 218.657 37.769 218.768 37.769 A 0.163 0.163 0 0 1 218.86 37.798 C 218.984 37.84 218.968 38.056 218.871 38.388 A 5.27 5.27 0 0 1 218.811 38.579 A 2.947 2.947 0 0 1 218.707 38.995 C 218.665 39.129 218.616 39.263 218.567 39.41 A 3.162 3.162 0 0 0 218.466 39.711 C 218.428 39.842 218.4 39.96 218.372 40.044 C 218.297 40.343 218.165 40.757 217.997 41.241 A 47.961 47.961 0 0 1 217.834 41.704 C 217.542 42.437 217.297 43.121 217.053 43.804 A 84.763 84.763 0 0 0 216.858 44.231 C 216.715 44.544 216.605 44.792 216.529 44.974 A 8.596 8.596 0 0 0 216.467 45.122 C 216.389 45.28 216.31 45.437 216.282 45.569 A 0.444 0.444 0 0 0 216.272 45.66 A 0.417 0.417 0 0 0 216.259 45.708 C 216.234 45.828 216.278 45.915 216.321 46.001 A 0.281 0.281 0 0 1 216.378 46.072 C 216.393 46.104 216.396 46.142 216.371 46.193 A 0.269 0.269 0 0 1 216.37 46.197 L 216.125 46.441 A 0.465 0.465 0 0 0 215.954 46.539 C 215.899 46.59 215.859 46.655 215.833 46.734 A 0.837 0.837 0 0 0 215.775 46.866 C 215.761 46.914 215.758 46.962 215.776 47.009 A 0.197 0.197 0 0 0 215.784 47.027 A 0.225 0.225 0 0 0 215.943 47.122 C 216.275 47.177 217.011 46.797 218.176 45.953 A 14.519 14.519 0 0 1 218.721 45.637 A 7.733 7.733 0 0 1 218.958 45.513 A 5.293 5.293 0 0 1 219.131 45.413 C 219.293 45.324 219.421 45.269 219.495 45.269 A 0.46 0.46 0 0 0 219.614 45.205 C 219.742 45.113 219.897 44.939 220.081 44.683 C 220.325 44.341 220.618 43.902 220.862 43.413 C 221.112 42.997 221.433 42.545 221.825 42.057 A 18.809 18.809 0 0 1 222.034 41.802 A 10.379 10.379 0 0 1 222.843 40.928 A 6.937 6.937 0 0 1 223.547 40.337 A 11.584 11.584 0 0 0 224.286 39.684 A 44.254 44.254 0 0 0 225.061 38.921 A 24.775 24.775 0 0 0 225.705 38.193 C 225.898 37.964 226.07 37.74 226.214 37.517 A 4.124 4.124 0 0 0 226.282 37.408 A 12.522 12.522 0 0 0 226.512 37.067 C 226.678 36.813 226.799 36.604 226.897 36.417 A 7.068 7.068 0 0 0 226.965 36.285 A 1.266 1.266 0 0 0 227.013 36.143 C 227.061 35.964 227.053 35.816 227.014 35.699 C 226.926 35.521 226.756 35.344 226.507 35.13 A 7.554 7.554 0 0 0 226.428 35.064 C 226.135 34.771 225.733 34.478 225.261 34.185 A 15.611 15.611 0 0 0 224.768 33.892 A 9.852 9.852 0 0 0 223.895 33.391 A 11.414 11.414 0 0 0 222.815 32.915 A 11.976 11.976 0 0 0 222.376 32.755 C 221.971 32.617 221.649 32.543 221.428 32.569 A 0.626 0.626 0 0 0 221.399 32.574 C 221.02 32.716 220.549 33.134 220.031 33.961 Z M 323.041 62.286 A 0.279 0.279 0 0 1 323.015 62.212 A 0.256 0.256 0 0 1 323.01 62.163 L 323.01 61.773 L 323.01 61.285 A 4.729 4.729 0 0 0 322.996 61.201 C 322.952 60.964 322.908 60.845 322.864 60.845 C 322.823 60.845 322.749 60.946 322.642 61.146 A 5.725 5.725 0 0 0 322.571 61.285 C 322.305 61.773 322.2 61.777 322.183 61.334 A 3.872 3.872 0 0 1 322.18 61.187 A 7.178 7.178 0 0 0 322.158 61.027 C 322.105 60.665 322.014 60.224 321.887 59.673 C 321.692 59.087 321.497 58.55 321.252 58.013 A 6.622 6.622 0 0 0 321.158 57.787 C 321.008 57.45 320.886 57.281 320.764 57.281 A 0.182 0.182 0 0 0 320.615 57.36 C 320.533 57.468 320.495 57.683 320.511 57.994 A 3.211 3.211 0 0 0 320.52 58.111 C 320.569 58.697 320.715 59.331 321.008 59.966 A 8.803 8.803 0 0 1 321.399 60.992 A 4.794 4.794 0 0 1 321.45 61.135 C 321.559 61.455 321.607 61.7 321.692 61.871 A 3.745 3.745 0 0 0 321.784 62.26 A 1.567 1.567 0 0 0 321.936 62.603 A 7.634 7.634 0 0 0 322.068 62.859 A 2.715 2.715 0 0 0 322.278 63.189 C 322.375 63.335 322.473 63.482 322.473 63.677 A 0.599 0.599 0 0 1 322.484 63.714 C 322.501 63.778 322.509 63.85 322.504 63.921 A 0.503 0.503 0 0 1 322.424 64.165 A 0.578 0.578 0 0 0 322.391 64.221 C 322.263 64.47 322.515 64.543 323.108 64.361 A 72.564 72.564 0 0 0 323.208 64.333 C 323.662 64.209 323.776 64.175 323.547 64.312 C 323.394 64.4 323.28 64.487 323.201 64.58 A 0.543 0.543 0 0 0 323.059 64.947 A 0.675 0.675 0 0 0 323.068 64.986 C 323.125 65.201 323.274 65.288 323.596 65.288 A 0.264 0.264 0 0 1 323.669 65.299 C 323.808 65.339 323.968 65.49 324.131 65.754 A 3.304 3.304 0 0 1 324.28 66.021 A 6.599 6.599 0 0 1 324.441 66.336 A 7.641 7.641 0 0 1 324.915 67.632 C 325.031 68.099 325.055 68.442 325.01 68.685 A 0.874 0.874 0 0 1 324.963 68.853 A 7.796 7.796 0 0 1 324.932 68.943 C 324.898 69.043 324.877 69.119 324.915 69.195 C 324.952 69.232 324.99 69.27 325.05 69.285 A 0.242 0.242 0 0 0 325.11 69.292 C 325.215 69.292 325.295 69.318 325.35 69.35 A 0.265 0.265 0 0 1 325.403 69.39 C 325.441 69.428 325.478 69.466 325.494 69.526 A 0.242 0.242 0 0 1 325.5 69.585 C 325.452 69.682 325.5 69.828 325.549 70.022 A 4.898 4.898 0 0 0 325.555 70.049 C 325.594 70.201 325.634 70.325 325.7 70.496 A 8.703 8.703 0 0 0 325.745 70.611 C 326.191 71.817 325.943 71.92 324.963 70.956 A 14.819 14.819 0 0 1 324.67 70.66 A 9.628 9.628 0 0 1 324.347 70.228 C 323.983 69.715 323.514 68.98 322.961 68.023 A 98.242 98.242 0 0 1 321.875 66.094 A 59.161 59.161 0 0 1 320.862 64.165 C 320.366 63.135 320.019 62.344 319.821 61.814 A 6.275 6.275 0 0 1 319.69 61.431 A 3.059 3.059 0 0 0 319.633 61.237 C 319.582 61.079 319.515 60.892 319.448 60.658 A 6.913 6.913 0 0 1 319.446 60.65 A 4.21 4.21 0 0 0 319.269 60.162 C 319.211 60.025 319.149 59.888 319.086 59.744 A 10.859 10.859 0 0 1 319.084 59.74 A 11.052 11.052 0 0 1 319.083 59.737 A 11.252 11.252 0 0 1 319.081 59.733 A 11.455 11.455 0 0 1 319.08 59.73 A 27.466 27.466 0 0 1 319.078 59.726 A 11.873 11.873 0 0 1 319.076 59.723 A 12.087 12.087 0 0 1 319.075 59.719 A 9.846 9.846 0 0 1 319.073 59.715 A 12.531 12.531 0 0 1 319.072 59.712 A 12.761 12.761 0 0 1 319.07 59.708 C 319.067 59.702 319.066 59.699 319.065 59.697 M 27.619 54.3 A 12.262 12.262 0 0 0 27.698 54.4 C 27.699 54.402 27.7 54.404 27.701 54.407 C 27.849 54.701 28.041 55.039 28.186 55.425 A 219.835 219.835 0 0 1 28.855 56.878 C 30.289 60.028 31.005 61.822 31.065 62.198 A 0.434 0.434 0 0 1 31.067 62.212 A 0.23 0.23 0 0 0 31.072 62.265 C 31.087 62.329 31.133 62.376 31.208 62.451 A 37.593 37.593 0 0 0 31.213 62.456 C 31.256 62.499 31.373 62.542 31.468 62.552 A 0.368 0.368 0 0 0 31.506 62.554 A 0.405 0.405 0 0 1 31.84 62.708 C 31.88 62.757 31.915 62.819 31.946 62.896 A 0.988 0.988 0 0 1 32.003 63.109 C 32.036 63.32 32.018 63.574 31.95 63.854 A 2.898 2.898 0 0 1 31.946 63.872 A 0.237 0.237 0 0 0 31.959 63.966 C 31.964 63.979 31.972 63.992 31.982 64.006 A 0.19 0.19 0 0 0 31.995 64.019 A 0.29 0.29 0 0 0 32.046 64.059 C 32.077 64.078 32.114 64.095 32.154 64.105 A 0.336 0.336 0 0 0 32.239 64.117 A 0.778 0.778 0 0 1 32.305 64.119 C 32.444 64.131 32.471 64.19 32.385 64.361 A 0.363 0.363 0 0 0 32.337 64.419 C 32.292 64.488 32.288 64.552 32.288 64.593 A 1.145 1.145 0 0 0 32.288 64.605 A 0.63 0.63 0 0 0 32.318 64.66 C 32.341 64.696 32.363 64.721 32.386 64.736 A 0.087 0.087 0 0 0 32.434 64.751 C 32.532 64.8 32.581 64.947 32.678 65.142 A 2.626 2.626 0 0 1 32.815 65.617 C 32.836 65.725 32.855 65.841 32.874 65.972 A 19.615 19.615 0 0 0 32.874 65.977 A 19.318 19.318 0 0 0 32.874 65.981 A 19.025 19.025 0 0 0 32.875 65.985 A 20.178 20.178 0 0 0 32.875 65.99 A 82.853 82.853 0 0 0 32.876 65.994 A 19.299 19.299 0 0 0 32.876 66.003 A 19.011 19.011 0 0 0 32.877 66.007 A 18.726 18.726 0 0 0 32.877 66.011 A 17.128 17.128 0 0 0 32.878 66.015 C 32.878 66.018 32.878 66.021 32.878 66.024 A 17.633 17.633 0 0 0 32.879 66.028 A 17.369 17.369 0 0 0 32.879 66.032 A 17.112 17.112 0 0 0 32.879 66.036 C 32.88 66.04 32.88 66.044 32.881 66.048 A 17.484 17.484 0 0 0 32.881 66.052 C 32.921 66.479 32.958 66.734 32.936 66.79 A 0.015 0.015 0 0 1 32.922 66.802 A 0.011 0.011 0 0 1 32.921 66.808 C 32.908 66.828 32.791 66.67 32.631 66.364 A 6.192 6.192 0 0 1 32.581 66.265 A 11.24 11.24 0 0 1 32.288 65.716 A 15.173 15.173 0 0 1 31.995 65.093 A 10.224 10.224 0 0 0 31.867 64.773 C 31.762 64.519 31.632 64.222 31.483 63.881 A 87.469 87.469 0 0 1 31.311 63.482 C 31.262 63.238 31.116 62.945 30.92 62.554 C 30.725 62.163 30.53 61.822 30.334 61.431 C 30.185 61.169 30.007 60.793 29.778 60.324 A 51.805 51.805 0 0 0 29.553 59.869 A 81.175 81.175 0 0 0 29.114 58.868 A 81.175 81.175 0 0 1 28.674 57.867 A 26.636 26.636 0 0 1 28.271 56.951 A 19.693 19.693 0 0 1 27.942 56.109 A 33.652 33.652 0 0 0 27.937 56.097 C 27.708 55.595 27.523 55.222 27.422 54.937 A 2.546 2.546 0 0 1 27.405 54.888 L 27.356 54.839 A 1.554 1.554 0 0 1 27.258 54.596 C 27.238 54.529 27.224 54.465 27.217 54.406 A 0.807 0.807 0 0 1 27.209 54.302 A 15.854 15.854 0 0 1 27.21 54.233 C 27.21 54.133 27.213 54.063 27.227 54.016 A 0.129 0.129 0 0 1 27.258 53.96 L 27.307 53.96 C 27.391 54.002 27.474 54.115 27.619 54.3 Z M 34.729 65.386 A 3.226 3.226 0 0 0 34.689 65.32 C 34.564 65.124 34.48 65.044 34.436 65.044 A 0.124 0.124 0 0 0 34.381 65.057 C 34.337 65.078 34.305 65.126 34.277 65.191 A 1.237 1.237 0 0 0 34.241 65.288 C 34.205 65.43 34.17 65.572 34.153 65.752 A 2.361 2.361 0 0 0 34.143 65.972 C 34.098 66.563 34.179 66.816 34.427 66.769 A 0.445 0.445 0 0 0 34.485 66.753 A 1.44 1.44 0 0 1 34.518 66.74 C 34.716 66.667 34.768 66.704 34.739 66.819 A 0.455 0.455 0 0 1 34.729 66.851 A 0.331 0.331 0 0 0 34.692 67.004 C 34.692 67.058 34.705 67.12 34.729 67.193 A 2.001 2.001 0 0 0 34.774 67.28 C 34.804 67.333 34.841 67.389 34.9 67.457 A 1.561 1.561 0 0 0 34.973 67.535 A 1.048 1.048 0 0 0 34.998 67.558 C 35.094 67.648 35.221 67.742 35.266 67.876 C 35.323 67.962 35.364 68.031 35.387 68.093 A 0.346 0.346 0 0 1 35.413 68.218 C 35.37 68.39 36.005 69.428 37.253 71.234 A 127.791 127.791 0 0 0 37.805 72.027 A 0.693 0.693 0 0 1 37.851 72.078 C 37.972 72.226 38.055 72.439 38.098 72.613 A 3.371 3.371 0 0 1 38.131 72.698 C 38.207 72.903 38.245 73.075 38.245 73.247 A 3.276 3.276 0 0 0 38.241 73.29 C 38.205 73.701 38.284 73.766 38.444 73.517 A 1.675 1.675 0 0 0 38.489 73.443 A 0.801 0.801 0 0 1 38.507 73.417 C 38.554 73.352 38.6 73.309 38.647 73.283 A 0.268 0.268 0 0 1 38.782 73.247 C 38.879 73.296 38.976 73.489 39.121 73.731 A 7.274 7.274 0 0 0 39.124 73.736 C 39.27 74.029 39.465 74.322 39.709 74.663 C 39.954 75.005 40.247 75.298 40.491 75.542 C 40.735 75.787 40.93 75.933 41.028 75.933 C 41.077 75.933 40.979 75.738 40.784 75.347 C 40.54 74.956 40.247 74.517 39.905 73.931 A 65.349 65.349 0 0 1 39.62 73.537 A 126.141 126.141 0 0 1 38.831 72.417 A 90.133 90.133 0 0 0 38.787 72.358 C 38.418 71.851 38.14 71.481 37.952 71.246 A 12.079 12.079 0 0 1 37.804 71.082 C 37.342 70.559 36.996 70.072 36.731 69.585 C 36.48 69.126 36.373 68.774 36.408 68.559 A 0.338 0.338 0 0 1 36.438 68.462 A 0.106 0.106 0 0 0 36.461 68.428 C 36.483 68.375 36.468 68.297 36.389 68.218 C 36.34 68.194 36.279 68.157 36.212 68.121 A 1.351 1.351 0 0 0 35.999 68.023 A 2.102 2.102 0 0 1 35.939 68.007 C 35.782 67.963 35.695 67.915 35.608 67.828 A 0.371 0.371 0 0 1 35.584 67.801 C 35.511 67.712 35.515 67.623 35.559 67.535 C 35.64 67.454 35.654 67.406 35.656 67.337 A 1.383 1.383 0 0 0 35.657 67.29 C 35.619 67.253 35.581 67.215 35.521 67.2 A 0.242 0.242 0 0 0 35.461 67.193 C 35.364 67.193 35.315 67.193 35.266 67.144 C 35.185 67.063 35.171 67.016 35.169 66.946 A 1.383 1.383 0 0 1 35.168 66.9 C 35.168 66.704 35.12 66.46 35.022 66.167 C 34.924 65.874 34.827 65.63 34.729 65.386 Z M 286.438 38.726 A 23.15 23.15 0 0 0 286.442 38.678 C 286.534 37.49 286.485 36.919 286.34 36.919 C 286.206 36.919 286.154 37.001 286.071 37.166 A 11.746 11.746 0 0 0 286.047 37.212 A 1.485 1.485 0 0 0 286.02 37.305 C 285.982 37.451 285.95 37.649 285.95 37.847 C 285.95 38.217 285.894 38.811 285.781 39.63 A 52.577 52.577 0 0 1 285.657 40.484 C 285.413 41.753 285.168 42.974 284.875 44.195 A 31.313 31.313 0 0 1 284.709 44.833 C 284.546 45.432 284.403 45.87 284.293 46.134 A 1.687 1.687 0 0 1 284.192 46.343 C 284.045 46.49 283.997 46.783 283.899 47.271 A 5.702 5.702 0 0 0 283.882 47.451 C 283.867 47.636 283.859 47.836 283.855 48.047 A 39.669 39.669 0 0 0 283.85 48.833 A 22.495 22.495 0 0 0 283.85 48.87 C 283.854 51.087 284.188 50.702 284.891 47.753 A 72.021 72.021 0 0 0 285.071 46.978 C 285.364 45.806 285.608 44.439 285.852 42.876 A 36.24 36.24 0 0 0 285.961 42.264 C 286.064 41.662 286.146 41.09 286.217 40.544 A 169.29 169.29 0 0 0 286.438 38.726 Z M 172.209 19.147 A 7.623 7.623 0 0 0 172.083 19.146 C 171.924 19.146 171.765 19.178 171.685 19.216 A 0.155 0.155 0 0 0 171.643 19.244 C 171.6 19.33 171.557 19.417 171.581 19.537 A 0.417 0.417 0 0 0 171.594 19.585 A 0.994 0.994 0 0 0 171.986 20.104 C 172.478 20.465 173.399 20.682 174.757 20.766 A 23.298 23.298 0 0 0 176.184 20.806 A 18.138 18.138 0 0 1 176.596 20.811 A 35.758 35.758 0 0 1 178.333 20.904 C 179.016 20.953 179.504 21.001 179.797 21.099 A 55.647 55.647 0 0 1 180.283 21.181 A 15.296 15.296 0 0 1 180.627 21.246 A 3.177 3.177 0 0 0 180.694 21.256 C 180.902 21.286 181.081 21.29 181.214 21.269 A 0.624 0.624 0 0 0 181.311 21.246 A 1.348 1.348 0 0 1 181.537 21.197 C 181.586 21.189 181.638 21.181 181.694 21.171 A 1.869 1.869 0 0 0 181.799 21.148 A 10.565 10.565 0 0 0 181.854 21.148 A 1.208 1.208 0 0 0 182.239 21.099 C 182.312 21.099 182.413 21.072 182.521 20.996 A 0.826 0.826 0 0 0 182.629 20.904 A 28.495 28.495 0 0 0 182.648 20.885 C 182.693 20.84 182.747 20.785 182.8 20.727 A 1.872 1.872 0 0 0 182.971 20.513 C 183.049 20.32 183.095 20.187 183.087 20.092 A 0.185 0.185 0 0 0 183.069 20.025 A 0.129 0.129 0 0 0 183.051 19.998 C 182.998 19.938 182.879 19.9 182.709 19.885 A 2.082 2.082 0 0 0 182.532 19.878 A 2.554 2.554 0 0 1 182.455 19.877 C 182.235 19.87 181.891 19.84 181.377 19.832 A 16.141 16.141 0 0 0 181.116 19.829 C 180.432 19.781 179.651 19.732 178.772 19.732 A 172.044 172.044 0 0 1 178.428 19.711 C 178.089 19.691 177.768 19.67 177.464 19.649 A 98.488 98.488 0 0 1 176.575 19.585 C 175.989 19.537 175.647 19.439 175.549 19.39 A 1.98 1.98 0 0 0 175.316 19.249 A 0.482 0.482 0 0 0 175.11 19.195 A 1.145 1.145 0 0 0 175.054 19.196 C 174.944 19.201 174.851 19.222 174.775 19.249 A 0.866 0.866 0 0 0 174.67 19.292 C 174.573 19.39 174.573 19.488 174.67 19.634 A 2.221 2.221 0 0 1 174.706 19.689 C 174.846 19.913 174.8 19.952 174.505 19.741 A 4.25 4.25 0 0 1 174.426 19.683 A 1.134 1.134 0 0 0 174.322 19.622 C 174.221 19.569 174.091 19.516 173.932 19.463 A 5.753 5.753 0 0 0 173.694 19.39 A 2.843 2.843 0 0 0 173.466 19.325 A 8.076 8.076 0 0 0 172.717 19.195 A 2.469 2.469 0 0 0 172.4 19.154 C 172.331 19.15 172.267 19.148 172.209 19.147 Z M 75.354 30.279 C 75.549 30.279 75.745 30.376 75.94 30.572 A 0.272 0.272 0 0 1 75.976 30.657 C 76.013 30.808 75.978 31.057 75.889 31.386 A 6.502 6.502 0 0 1 75.842 31.548 C 75.696 32.085 75.549 32.574 75.305 33.111 C 75.144 33.513 74.983 33.816 74.822 34.02 A 1.345 1.345 0 0 1 74.719 34.136 A 0.405 0.405 0 0 0 74.684 34.178 C 74.631 34.248 74.553 34.381 74.475 34.576 C 74.402 34.722 74.301 34.923 74.214 35.159 A 3.455 3.455 0 0 0 74.133 35.406 A 4.351 4.351 0 0 1 73.927 35.866 C 73.844 36.028 73.746 36.198 73.634 36.375 A 9.089 9.089 0 0 1 73.401 36.724 A 8.767 8.767 0 0 1 72.632 37.798 A 11.718 11.718 0 0 1 72.424 38.042 C 72.11 38.357 71.836 38.548 71.681 38.614 A 0.499 0.499 0 0 1 71.643 38.628 C 71.452 38.628 71.355 38.489 71.396 38.21 A 1.06 1.06 0 0 1 71.399 38.189 A 1.975 1.975 0 0 1 71.522 37.475 A 1.804 1.804 0 0 1 71.594 37.31 C 71.741 36.968 71.936 36.724 72.131 36.578 C 72.313 36.487 72.452 36.396 72.55 36.266 A 0.687 0.687 0 0 0 72.571 36.236 A 0.791 0.791 0 0 0 72.65 36.145 C 72.728 36.037 72.753 35.935 72.724 35.859 A 0.165 0.165 0 0 0 72.717 35.845 A 0.251 0.251 0 0 1 72.736 35.759 C 72.763 35.686 72.819 35.592 72.895 35.468 A 32.583 32.583 0 0 0 72.961 35.357 A 7.889 7.889 0 0 1 73.08 35.166 C 73.122 35.1 73.166 35.033 73.212 34.966 A 6.448 6.448 0 0 1 73.499 34.576 A 14.797 14.797 0 0 0 73.673 34.363 C 73.812 34.189 73.937 34.02 74.06 33.821 A 4.633 4.633 0 0 0 74.133 33.697 C 74.28 33.404 74.377 33.111 74.426 32.915 A 1.113 1.113 0 0 1 74.47 32.78 C 74.513 32.67 74.566 32.58 74.604 32.511 A 1.282 1.282 0 0 0 74.622 32.476 A 0.424 0.424 0 0 1 74.764 32.382 C 74.829 32.356 74.896 32.351 74.951 32.373 A 0.167 0.167 0 0 1 74.963 32.378 C 75.208 32.525 75.208 32.378 75.061 31.939 A 0.937 0.937 0 0 1 74.957 31.719 C 74.934 31.652 74.915 31.579 74.897 31.501 A 5.651 5.651 0 0 1 74.866 31.353 C 74.866 31.163 74.866 30.973 74.911 30.828 A 0.597 0.597 0 0 1 74.915 30.816 C 74.972 30.645 75.045 30.507 75.136 30.412 A 0.454 0.454 0 0 1 75.354 30.279 Z M 130.872 33.16 A 0.638 0.638 0 0 0 130.569 33.422 C 130.525 33.49 130.487 33.569 130.454 33.66 A 2.239 2.239 0 0 0 130.383 33.892 A 4.385 4.385 0 0 1 130.267 34.38 A 1.421 1.421 0 0 1 130.188 34.576 A 1.343 1.343 0 0 1 130.162 34.683 C 130.114 34.851 130.045 34.964 130.002 35.046 A 1.074 1.074 0 0 0 129.993 35.064 A 0.813 0.813 0 0 0 129.952 35.108 C 129.854 35.221 129.856 35.293 129.928 35.266 A 0.164 0.164 0 0 0 129.943 35.259 C 130.042 35.259 130.042 35.357 129.944 35.552 C 129.865 35.709 129.787 35.897 129.658 36.117 A 3.438 3.438 0 0 1 129.553 36.285 A 35.989 35.989 0 0 1 129.415 36.524 C 129.285 36.748 129.175 36.932 129.065 37.115 C 128.983 37.362 128.935 37.504 128.951 37.573 A 0.062 0.062 0 0 0 128.967 37.603 A 1.523 1.523 0 0 1 128.965 37.698 C 128.96 37.791 128.94 37.916 128.87 38.091 C 128.807 38.216 128.744 38.382 128.669 38.562 A 5.157 5.157 0 0 1 128.528 38.872 C 128.381 39.117 128.284 39.41 128.186 39.654 C 128.137 39.947 128.088 40.093 128.137 40.24 C 128.186 40.337 128.235 40.386 128.333 40.386 A 0.228 0.228 0 0 0 128.358 40.397 C 128.434 40.424 128.482 40.387 128.56 40.346 A 0.926 0.926 0 0 1 128.577 40.337 A 0.248 0.248 0 0 0 128.706 40.178 C 128.715 40.147 128.721 40.113 128.722 40.074 A 0.615 0.615 0 0 0 128.723 40.044 A 0.353 0.353 0 0 0 128.753 39.962 C 128.766 39.903 128.761 39.844 128.738 39.786 A 0.383 0.383 0 0 0 128.723 39.751 A 0.199 0.199 0 0 1 128.704 39.677 C 128.698 39.6 128.724 39.506 128.756 39.409 A 8.333 8.333 0 0 1 128.772 39.361 A 3.585 3.585 0 0 1 128.989 39.059 A 1.922 1.922 0 0 1 129.114 38.921 C 129.228 38.836 129.309 38.75 129.366 38.664 A 0.757 0.757 0 0 0 129.456 38.482 A 0.9 0.9 0 0 0 129.472 38.427 C 129.503 38.311 129.492 38.231 129.407 38.189 A 0.165 0.165 0 0 1 129.365 38.16 C 129.324 38.12 129.318 38.065 129.334 38.005 A 0.337 0.337 0 0 1 129.358 37.945 A 1.9 1.9 0 0 1 129.514 37.801 C 129.548 37.773 129.587 37.745 129.632 37.717 A 1.427 1.427 0 0 1 129.749 37.652 A 1.872 1.872 0 0 0 129.962 37.481 C 130.021 37.427 130.075 37.374 130.12 37.329 A 28.495 28.495 0 0 0 130.139 37.31 A 0.692 0.692 0 0 0 130.176 37.249 C 130.236 37.135 130.23 37.052 130.188 36.968 A 3.298 3.298 0 0 1 130.065 36.751 C 129.836 36.308 129.843 36.013 130.107 35.888 A 0.617 0.617 0 0 1 130.237 35.845 A 0.646 0.646 0 0 0 130.486 35.73 C 130.618 35.634 130.75 35.487 130.882 35.295 A 3.641 3.641 0 0 0 130.969 35.162 C 131.213 34.771 131.409 34.283 131.506 33.746 A 1.361 1.361 0 0 0 131.536 33.645 C 131.621 33.303 131.496 33.136 131.19 33.113 A 1.025 1.025 0 0 0 131.116 33.111 A 3.091 3.091 0 0 0 131.073 33.111 C 131.01 33.112 130.965 33.117 130.899 33.146 A 0.69 0.69 0 0 0 130.872 33.16 Z M 234.875 33.16 A 0.638 0.638 0 0 0 234.573 33.422 C 234.529 33.49 234.491 33.569 234.458 33.66 A 2.239 2.239 0 0 0 234.387 33.892 A 4.385 4.385 0 0 1 234.271 34.38 A 1.421 1.421 0 0 1 234.192 34.576 A 1.343 1.343 0 0 1 234.166 34.683 C 234.117 34.851 234.049 34.964 234.006 35.046 A 1.074 1.074 0 0 0 233.997 35.064 A 0.813 0.813 0 0 0 233.956 35.108 C 233.858 35.221 233.859 35.293 233.932 35.266 A 0.164 0.164 0 0 0 233.947 35.259 C 234.045 35.259 234.045 35.357 233.948 35.552 C 233.869 35.709 233.791 35.897 233.662 36.117 A 3.438 3.438 0 0 1 233.557 36.285 A 35.989 35.989 0 0 1 233.419 36.524 C 233.289 36.748 233.179 36.932 233.069 37.115 C 232.987 37.362 232.939 37.504 232.955 37.573 A 0.062 0.062 0 0 0 232.971 37.603 A 1.523 1.523 0 0 1 232.969 37.698 C 232.963 37.791 232.944 37.916 232.874 38.091 C 232.811 38.216 232.748 38.382 232.673 38.562 A 5.157 5.157 0 0 1 232.532 38.872 C 232.385 39.117 232.288 39.41 232.19 39.654 C 232.141 39.947 232.092 40.093 232.141 40.24 C 232.19 40.337 232.239 40.386 232.336 40.386 A 0.228 0.228 0 0 0 232.362 40.397 C 232.438 40.424 232.485 40.387 232.564 40.346 A 0.926 0.926 0 0 1 232.581 40.337 A 0.248 0.248 0 0 0 232.71 40.178 C 232.719 40.147 232.724 40.113 232.726 40.074 A 0.615 0.615 0 0 0 232.727 40.044 A 0.353 0.353 0 0 0 232.757 39.962 C 232.77 39.903 232.765 39.844 232.742 39.786 A 0.383 0.383 0 0 0 232.727 39.751 A 0.199 0.199 0 0 1 232.708 39.677 C 232.702 39.6 232.728 39.506 232.76 39.409 A 8.333 8.333 0 0 1 232.776 39.361 A 3.585 3.585 0 0 1 232.993 39.059 A 1.922 1.922 0 0 1 233.118 38.921 C 233.232 38.836 233.313 38.75 233.37 38.664 A 0.757 0.757 0 0 0 233.459 38.482 A 0.9 0.9 0 0 0 233.476 38.427 C 233.507 38.311 233.496 38.231 233.411 38.189 A 0.165 0.165 0 0 1 233.369 38.16 C 233.328 38.12 233.322 38.065 233.338 38.005 A 0.337 0.337 0 0 1 233.362 37.945 A 1.9 1.9 0 0 1 233.518 37.801 C 233.552 37.773 233.591 37.745 233.636 37.717 A 1.427 1.427 0 0 1 233.752 37.652 A 1.872 1.872 0 0 0 233.966 37.481 C 234.025 37.427 234.079 37.374 234.124 37.329 A 28.495 28.495 0 0 0 234.143 37.31 A 0.692 0.692 0 0 0 234.18 37.249 C 234.24 37.135 234.234 37.052 234.192 36.968 A 3.298 3.298 0 0 1 234.069 36.751 C 233.84 36.308 233.847 36.013 234.111 35.888 A 0.617 0.617 0 0 1 234.241 35.845 A 0.646 0.646 0 0 0 234.49 35.73 C 234.622 35.634 234.754 35.487 234.886 35.295 A 3.641 3.641 0 0 0 234.973 35.162 C 235.217 34.771 235.413 34.283 235.51 33.746 A 1.361 1.361 0 0 0 235.54 33.645 C 235.625 33.303 235.5 33.136 235.194 33.113 A 1.025 1.025 0 0 0 235.12 33.111 A 3.091 3.091 0 0 0 235.077 33.111 C 235.014 33.112 234.969 33.117 234.903 33.146 A 0.69 0.69 0 0 0 234.875 33.16 Z M 135.879 35.59 A 1.346 1.346 0 0 1 135.878 35.591 C 135.846 35.631 135.808 35.672 135.754 35.699 A 0.41 0.41 0 0 1 135.699 35.721 A 0.739 0.739 0 0 1 135.461 35.747 C 135.315 35.699 135.266 35.747 135.217 35.845 A 1.373 1.373 0 0 0 135.223 35.991 C 135.226 36.022 135.231 36.055 135.239 36.091 A 1.002 1.002 0 0 0 135.266 36.187 C 135.34 36.335 135.358 36.455 135.32 36.568 A 0.456 0.456 0 0 1 135.266 36.675 C 135.229 36.822 135.165 36.913 135.053 36.991 A 1.048 1.048 0 0 1 134.924 37.066 C 134.68 37.261 134.485 37.505 134.387 37.896 A 1.774 1.774 0 0 0 134.358 38.036 C 134.338 38.155 134.332 38.269 134.339 38.378 A 1.388 1.388 0 0 0 134.485 38.921 A 0.269 0.269 0 0 1 134.487 38.925 C 134.511 38.976 134.509 39.014 134.493 39.046 A 0.281 0.281 0 0 1 134.436 39.117 C 134.366 39.152 134.296 39.187 134.207 39.222 A 2.123 2.123 0 0 1 134.094 39.263 A 2.31 2.31 0 0 0 134.044 39.276 C 133.93 39.307 133.855 39.338 133.804 39.37 A 0.283 0.283 0 0 0 133.752 39.41 C 133.709 39.453 133.704 39.496 133.773 39.54 A 0.322 0.322 0 0 0 133.801 39.556 A 1.326 1.326 0 0 1 133.842 39.643 C 133.871 39.712 133.884 39.78 133.85 39.849 A 0.823 0.823 0 0 1 133.816 39.935 C 133.787 39.998 133.749 40.061 133.701 40.124 A 1.547 1.547 0 0 1 133.557 40.288 A 8.678 8.678 0 0 0 133.48 40.394 C 133.439 40.449 133.402 40.501 133.368 40.551 A 15.088 15.088 0 0 0 133.215 40.777 A 1.528 1.528 0 0 0 133.199 40.849 C 133.176 40.963 133.173 41.058 133.188 41.134 A 0.327 0.327 0 0 0 133.215 41.216 L 133.215 41.509 C 133.19 41.534 133.152 41.56 133.108 41.585 A 3.074 3.074 0 0 1 132.971 41.656 L 132.727 41.656 A 0.381 0.381 0 0 1 132.67 41.653 C 132.652 41.65 132.633 41.644 132.614 41.633 A 0.171 0.171 0 0 1 132.581 41.607 C 132.581 41.558 132.629 41.413 132.677 41.172 A 4.85 4.85 0 0 0 132.678 41.167 A 38.187 38.187 0 0 0 132.826 40.718 A 15.871 15.871 0 0 0 132.971 40.24 C 133.118 39.898 133.167 39.556 133.215 39.214 C 133.264 38.921 133.264 38.677 133.167 38.482 A 1.131 1.131 0 0 1 133.163 38.471 C 133.118 38.33 133.118 38.234 133.118 38.091 A 0.658 0.658 0 0 1 133.138 38.054 C 133.181 37.98 133.229 37.938 133.313 37.896 C 133.459 37.896 133.508 37.749 133.606 37.554 C 133.641 37.412 133.677 37.27 133.694 37.091 A 2.361 2.361 0 0 0 133.704 36.871 C 133.704 36.626 133.752 36.382 133.85 36.187 A 1.26 1.26 0 0 1 133.896 36.103 C 133.92 36.063 133.944 36.028 133.97 36 A 0.285 0.285 0 0 1 134.192 35.894 A 1.593 1.593 0 0 0 134.282 35.861 A 0.704 0.704 0 0 0 134.534 35.699 A 1.875 1.875 0 0 0 134.592 35.575 A 0.45 0.45 0 0 0 134.631 35.406 C 134.672 35.284 134.746 35.197 134.936 35.142 A 1.229 1.229 0 0 1 135.071 35.113 L 135.364 35.113 A 1.145 1.145 0 0 1 135.419 35.114 C 135.53 35.119 135.623 35.14 135.699 35.167 A 0.866 0.866 0 0 1 135.803 35.21 A 0.729 0.729 0 0 1 135.849 35.261 C 135.876 35.293 135.897 35.325 135.913 35.357 A 0.325 0.325 0 0 1 135.95 35.503 C 135.93 35.523 135.91 35.551 135.886 35.581 A 0.948 0.948 0 0 1 135.884 35.584 M 239.883 35.59 A 1.346 1.346 0 0 1 239.882 35.591 C 239.85 35.631 239.812 35.672 239.758 35.699 A 0.41 0.41 0 0 1 239.703 35.721 A 0.739 0.739 0 0 1 239.465 35.747 C 239.319 35.699 239.27 35.747 239.221 35.845 A 1.373 1.373 0 0 0 239.227 35.991 C 239.23 36.022 239.235 36.055 239.243 36.091 A 1.002 1.002 0 0 0 239.27 36.187 C 239.344 36.335 239.362 36.455 239.324 36.568 A 0.456 0.456 0 0 1 239.27 36.675 C 239.233 36.822 239.169 36.913 239.057 36.991 A 1.048 1.048 0 0 1 238.928 37.066 C 238.684 37.261 238.489 37.505 238.391 37.896 A 1.774 1.774 0 0 0 238.362 38.036 C 238.342 38.155 238.336 38.269 238.343 38.378 A 1.388 1.388 0 0 0 238.489 38.921 A 0.269 0.269 0 0 1 238.49 38.925 C 238.515 38.976 238.513 39.014 238.497 39.046 A 0.281 0.281 0 0 1 238.44 39.117 C 238.37 39.152 238.3 39.187 238.211 39.222 A 2.123 2.123 0 0 1 238.098 39.263 A 2.31 2.31 0 0 0 238.048 39.276 C 237.934 39.307 237.859 39.338 237.808 39.37 A 0.283 0.283 0 0 0 237.756 39.41 C 237.713 39.453 237.708 39.496 237.776 39.54 A 0.322 0.322 0 0 0 237.805 39.556 A 1.326 1.326 0 0 1 237.846 39.643 C 237.874 39.712 237.888 39.78 237.854 39.849 A 0.823 0.823 0 0 1 237.82 39.935 C 237.791 39.998 237.752 40.061 237.705 40.124 A 1.547 1.547 0 0 1 237.561 40.288 A 8.678 8.678 0 0 0 237.483 40.394 C 237.443 40.449 237.406 40.501 237.372 40.551 A 15.088 15.088 0 0 0 237.219 40.777 A 1.528 1.528 0 0 0 237.203 40.849 C 237.18 40.963 237.177 41.058 237.192 41.134 A 0.327 0.327 0 0 0 237.219 41.216 L 237.219 41.509 C 237.194 41.534 237.156 41.56 237.111 41.585 A 3.074 3.074 0 0 1 236.975 41.656 L 236.731 41.656 A 0.381 0.381 0 0 1 236.674 41.653 C 236.655 41.65 236.637 41.644 236.618 41.633 A 0.171 0.171 0 0 1 236.584 41.607 C 236.584 41.558 236.633 41.413 236.681 41.172 A 4.85 4.85 0 0 0 236.682 41.167 A 38.187 38.187 0 0 0 236.83 40.718 A 15.871 15.871 0 0 0 236.975 40.24 C 237.122 39.898 237.17 39.556 237.219 39.214 C 237.268 38.921 237.268 38.677 237.17 38.482 A 1.131 1.131 0 0 1 237.167 38.471 C 237.122 38.33 237.122 38.234 237.122 38.091 A 0.658 0.658 0 0 1 237.142 38.054 C 237.185 37.98 237.233 37.938 237.317 37.896 C 237.463 37.896 237.512 37.749 237.61 37.554 C 237.645 37.412 237.681 37.27 237.698 37.091 A 2.361 2.361 0 0 0 237.708 36.871 C 237.708 36.626 237.756 36.382 237.854 36.187 A 1.26 1.26 0 0 1 237.9 36.103 C 237.924 36.063 237.948 36.028 237.974 36 A 0.285 0.285 0 0 1 238.196 35.894 A 1.593 1.593 0 0 0 238.285 35.861 A 0.704 0.704 0 0 0 238.538 35.699 A 1.875 1.875 0 0 0 238.596 35.575 A 0.45 0.45 0 0 0 238.635 35.406 C 238.676 35.284 238.75 35.197 238.94 35.142 A 1.229 1.229 0 0 1 239.075 35.113 L 239.368 35.113 A 1.145 1.145 0 0 1 239.423 35.114 C 239.534 35.119 239.627 35.14 239.703 35.167 A 0.866 0.866 0 0 1 239.807 35.21 A 0.729 0.729 0 0 1 239.853 35.261 C 239.88 35.293 239.901 35.325 239.917 35.357 A 0.325 0.325 0 0 1 239.954 35.503 C 239.934 35.523 239.914 35.551 239.89 35.581 A 0.948 0.948 0 0 1 239.888 35.584 M 46.985 35.015 A 104.224 104.224 0 0 0 46.509 35.016 C 46.156 35.017 45.752 35.022 45.296 35.037 A 37.124 37.124 0 0 0 44.641 35.064 A 228.776 228.776 0 0 0 43.734 35.1 C 42.871 35.137 42.139 35.174 41.516 35.21 A 19.188 19.188 0 0 0 41.221 35.213 C 40.571 35.223 40.192 35.265 40.149 35.308 A 0.041 0.041 0 0 0 40.18 35.335 C 40.269 35.375 40.55 35.415 41.023 35.454 A 21.48 21.48 0 0 0 41.028 35.454 A 42.961 42.961 0 0 0 41.048 35.456 C 41.631 35.504 42.356 35.553 43.225 35.65 C 44.247 35.692 45.083 35.735 45.733 35.713 A 7.399 7.399 0 0 0 46.008 35.699 A 9.913 9.913 0 0 0 46.608 35.639 C 46.826 35.61 47.026 35.574 47.212 35.532 A 4.795 4.795 0 0 0 47.668 35.406 C 48.108 35.23 48.31 35.133 48.31 35.08 A 0.022 0.022 0 0 0 48.303 35.064 C 48.254 35.015 47.815 34.966 46.985 35.015 Z M 104.968 40.453 A 0.279 0.279 0 0 1 104.895 40.479 A 0.256 0.256 0 0 1 104.846 40.484 C 104.804 40.484 104.762 40.484 104.72 40.422 A 0.314 0.314 0 0 1 104.7 40.386 C 104.7 40.338 104.748 40.241 104.797 40.096 A 2.228 2.228 0 0 0 104.797 40.093 C 104.895 39.947 105.042 39.8 105.188 39.654 A 24.475 24.475 0 0 0 105.306 39.535 C 105.479 39.36 105.579 39.246 105.579 39.165 C 105.579 39.068 105.432 39.019 105.188 38.97 A 3.577 3.577 0 0 1 105.148 38.962 C 104.74 38.875 104.715 38.789 105.073 38.702 A 2.994 2.994 0 0 1 105.188 38.677 A 2.571 2.571 0 0 1 105.251 38.664 C 105.412 38.632 105.553 38.622 105.678 38.632 A 0.863 0.863 0 0 1 106.165 38.824 C 106.334 38.951 106.393 39.151 106.31 39.425 A 1.256 1.256 0 0 1 106.262 39.556 A 0.434 0.434 0 0 0 106.216 39.61 A 0.583 0.583 0 0 0 106.116 39.947 C 106.116 40.044 106.165 40.093 106.262 40.142 C 106.302 40.182 106.375 40.124 106.481 40.02 A 8.664 8.664 0 0 0 106.555 39.947 L 106.897 39.263 L 107.288 38.238 L 106.36 38.238 A 1.936 1.936 0 0 0 106.291 38.225 C 106.07 38.189 105.853 38.193 105.676 38.238 C 105.518 38.238 105.391 38.27 105.297 38.282 A 0.479 0.479 0 0 1 105.237 38.287 A 0.385 0.385 0 0 1 105.221 38.297 C 105.087 38.377 105.043 38.279 105.09 38.091 C 105.09 37.994 105.139 37.945 105.237 37.896 A 1.326 1.326 0 0 1 105.324 37.855 C 105.393 37.827 105.461 37.813 105.53 37.847 C 105.647 37.847 105.763 37.723 105.905 37.5 A 4.922 4.922 0 0 0 106.018 37.31 A 10.452 10.452 0 0 0 106.244 36.83 A 7.353 7.353 0 0 0 106.555 35.992 A 5.269 5.269 0 0 0 106.65 35.625 C 106.726 35.289 106.762 34.986 106.798 34.734 A 13.15 13.15 0 0 1 106.799 34.722 A 1.702 1.702 0 0 0 106.799 34.682 C 106.795 34.528 106.771 34.44 106.74 34.402 A 0.05 0.05 0 0 0 106.702 34.38 A 4.957 4.957 0 0 0 106.66 34.423 C 106.589 34.495 106.457 34.635 106.262 34.869 C 106.121 35.057 106.025 35.291 105.93 35.483 M 208.972 40.453 A 0.279 0.279 0 0 1 208.899 40.479 A 0.256 0.256 0 0 1 208.85 40.484 C 208.808 40.484 208.766 40.484 208.724 40.422 A 0.314 0.314 0 0 1 208.704 40.386 C 208.704 40.338 208.752 40.241 208.8 40.096 A 2.228 2.228 0 0 0 208.801 40.093 C 208.899 39.947 209.045 39.8 209.192 39.654 A 24.475 24.475 0 0 0 209.31 39.535 C 209.483 39.36 209.583 39.246 209.583 39.165 C 209.583 39.068 209.436 39.019 209.192 38.97 A 3.577 3.577 0 0 1 209.152 38.962 C 208.744 38.875 208.719 38.789 209.077 38.702 A 2.994 2.994 0 0 1 209.192 38.677 A 2.571 2.571 0 0 1 209.255 38.664 C 209.416 38.632 209.557 38.622 209.682 38.632 A 0.863 0.863 0 0 1 210.168 38.824 C 210.338 38.951 210.397 39.151 210.314 39.425 A 1.256 1.256 0 0 1 210.266 39.556 A 0.434 0.434 0 0 0 210.22 39.61 A 0.583 0.583 0 0 0 210.12 39.947 C 210.12 40.044 210.168 40.093 210.266 40.142 C 210.306 40.182 210.379 40.124 210.485 40.02 A 8.664 8.664 0 0 0 210.559 39.947 L 210.901 39.263 L 211.292 38.238 L 210.364 38.238 A 1.936 1.936 0 0 0 210.295 38.225 C 210.074 38.189 209.857 38.193 209.68 38.238 C 209.521 38.238 209.395 38.27 209.301 38.282 A 0.479 0.479 0 0 1 209.241 38.287 A 0.385 0.385 0 0 1 209.225 38.297 C 209.091 38.377 209.047 38.279 209.094 38.091 C 209.094 37.994 209.143 37.945 209.241 37.896 A 1.326 1.326 0 0 1 209.328 37.855 C 209.397 37.827 209.465 37.813 209.534 37.847 C 209.65 37.847 209.767 37.723 209.909 37.5 A 4.922 4.922 0 0 0 210.022 37.31 A 10.452 10.452 0 0 0 210.248 36.83 A 7.353 7.353 0 0 0 210.559 35.992 A 5.269 5.269 0 0 0 210.654 35.625 C 210.729 35.289 210.766 34.986 210.802 34.734 A 13.15 13.15 0 0 1 210.803 34.722 A 1.702 1.702 0 0 0 210.803 34.682 C 210.799 34.528 210.774 34.44 210.744 34.402 A 0.05 0.05 0 0 0 210.706 34.38 A 4.957 4.957 0 0 0 210.664 34.423 C 210.593 34.495 210.461 34.635 210.266 34.869 C 210.125 35.057 210.029 35.291 209.934 35.483 M 398.545 35.569 A 0.265 0.265 0 0 0 398.401 35.406 C 398.27 35.449 398.256 36.151 398.358 37.58 A 57.92 57.92 0 0 0 398.401 38.14 A 112.114 112.114 0 0 0 398.461 38.834 C 398.535 39.664 398.604 40.335 398.643 40.799 A 26.874 26.874 0 0 1 398.645 40.826 C 398.693 41.407 398.79 41.796 398.839 42.041 A 5.12 5.12 0 0 1 398.84 42.046 A 4.944 4.944 0 0 0 398.921 42.237 C 398.992 42.394 399.063 42.526 399.133 42.632 A 5.441 5.441 0 0 0 399.202 42.716 C 399.353 42.898 399.438 42.962 399.524 42.876 A 0.077 0.077 0 0 0 399.54 42.845 C 399.567 42.754 399.567 42.501 399.54 42.108 A 15.637 15.637 0 0 0 399.524 41.9 A 21.788 21.788 0 0 0 399.523 41.884 C 399.486 41.446 399.422 40.847 399.332 40.066 A 215.635 215.635 0 0 0 399.231 39.214 A 90.232 90.232 0 0 0 399.078 38.125 C 398.875 36.74 398.706 35.902 398.545 35.569 Z M 445.516 58.514 A 0.237 0.237 0 0 0 445.422 58.501 A 0.844 0.844 0 0 0 445.398 58.502 C 445.358 58.503 445.325 58.51 445.325 58.55 C 445.325 58.55 445.325 58.584 445.297 58.623 A 0.192 0.192 0 0 1 445.276 58.648 L 445.276 58.843 L 445.276 58.941 L 445.276 59.038 A 0.043 0.043 0 0 0 445.254 59.045 C 445.214 59.069 445.178 59.158 445.178 59.283 A 3.626 3.626 0 0 0 445.179 59.351 C 445.18 59.414 445.184 59.492 445.199 59.585 A 1.636 1.636 0 0 0 445.227 59.722 C 445.264 59.942 445.3 60.134 445.316 60.361 A 3.39 3.39 0 0 1 445.325 60.601 C 445.325 60.943 445.325 61.333 445.374 61.822 A 21.184 21.184 0 0 1 445.441 62.402 A 5.718 5.718 0 0 1 445.471 62.945 L 445.471 63.579 C 445.422 63.824 445.422 64.068 445.422 64.312 A 2.638 2.638 0 0 1 445.437 64.39 C 445.465 64.556 445.473 64.694 445.498 64.787 A 0.322 0.322 0 0 0 445.52 64.849 C 445.52 64.954 445.545 65.034 445.578 65.089 A 0.265 0.265 0 0 0 445.618 65.142 A 0.062 0.062 0 0 0 445.618 65.152 C 445.625 65.191 445.67 65.191 445.715 65.191 C 445.802 65.234 445.812 65.123 445.813 64.891 A 20.731 20.731 0 0 0 445.813 64.8 A 0.585 0.585 0 0 1 445.797 64.741 C 445.776 64.645 445.768 64.521 445.766 64.375 A 14.364 14.364 0 0 1 445.764 64.117 C 445.796 63.988 445.807 63.86 445.811 63.746 A 4.929 4.929 0 0 0 445.813 63.579 L 445.813 62.163 L 445.813 61.48 A 2.036 2.036 0 0 0 445.808 61.342 C 445.802 61.259 445.793 61.181 445.784 61.106 A 2.237 2.237 0 0 1 445.764 60.845 L 445.764 60.406 L 445.764 60.308 L 445.764 59.722 A 3.451 3.451 0 0 0 445.74 59.362 C 445.728 59.246 445.715 59.136 445.715 59.038 C 445.681 58.867 445.647 58.743 445.612 58.651 A 1.032 1.032 0 0 0 445.569 58.55 A 0.19 0.19 0 0 0 445.555 58.538 C 445.542 58.527 445.529 58.52 445.516 58.514 Z M 302.381 18.484 A 0.208 0.208 0 0 0 302.258 18.365 A 4.957 4.957 0 0 0 302.229 18.365 C 302.161 18.365 302.112 18.369 302.016 18.397 A 1.792 1.792 0 0 0 301.965 18.413 C 301.819 18.462 301.721 18.609 301.624 18.755 A 0.691 0.691 0 0 0 301.587 18.975 A 0.692 0.692 0 0 0 301.624 19.195 A 0.533 0.533 0 0 1 301.641 19.268 C 301.672 19.44 301.672 19.751 301.672 20.171 C 301.672 20.708 301.624 21.246 301.526 21.88 C 301.429 22.508 301.381 23.04 301.332 23.476 A 27.287 27.287 0 0 1 301.331 23.492 C 301.331 23.877 301.331 24.141 301.355 24.283 A 0.324 0.324 0 0 0 301.379 24.371 A 1.704 1.704 0 0 0 301.408 24.404 C 301.824 24.878 302.132 24.662 302.33 23.755 A 6.696 6.696 0 0 0 302.405 23.345 C 302.441 23.052 302.451 22.677 302.473 22.26 A 15.189 15.189 0 0 1 302.502 21.831 A 15.86 15.86 0 0 0 302.543 21.026 A 35.967 35.967 0 0 0 302.551 20.074 A 16.635 16.635 0 0 0 302.549 19.769 C 302.536 19.094 302.48 18.675 302.381 18.484 Z M 429.578 61.755 A 0.279 0.279 0 0 0 429.504 61.728 A 0.256 0.256 0 0 0 429.456 61.724 A 0.093 0.093 0 0 1 429.429 61.72 C 429.403 61.712 429.377 61.696 429.351 61.685 A 0.113 0.113 0 0 0 429.309 61.675 A 0.089 0.089 0 0 1 429.275 61.668 C 429.26 61.662 429.244 61.652 429.229 61.639 A 0.825 0.825 0 0 1 429.163 61.578 A 0.093 0.093 0 0 0 429.158 61.551 C 429.151 61.525 429.134 61.499 429.124 61.473 A 0.113 0.113 0 0 1 429.114 61.431 L 428.967 61.138 C 428.918 61.089 428.821 61.04 428.723 61.04 A 0.721 0.721 0 0 1 428.624 60.997 C 428.492 60.93 428.33 60.814 428.137 60.699 A 11.411 11.411 0 0 1 427.89 60.36 A 5.237 5.237 0 0 1 427.698 60.064 C 427.588 59.917 427.478 59.771 427.389 59.645 A 5.05 5.05 0 0 1 427.307 59.527 C 427.124 59.344 426.968 59.133 426.84 58.936 A 6.113 6.113 0 0 1 426.721 58.746 A 0.823 0.823 0 0 1 426.714 58.739 C 426.681 58.704 426.653 58.67 426.629 58.636 A 1.422 1.422 0 0 1 426.526 58.453 A 9.609 9.609 0 0 1 426.492 58.41 C 426.354 58.235 426.269 58.115 426.217 58.051 A 0.491 0.491 0 0 0 426.184 58.013 A 1.887 1.887 0 0 1 426.156 57.994 C 426.072 57.936 426.004 57.88 425.943 57.847 A 0.216 0.216 0 0 0 425.842 57.818 C 425.745 57.769 425.696 57.72 425.647 57.72 L 425.549 57.72 A 0.347 0.347 0 0 0 425.531 57.831 C 425.531 57.943 425.586 58.062 425.696 58.208 A 10.324 10.324 0 0 1 425.733 58.259 C 425.859 58.429 425.949 58.559 426.038 58.648 L 426.086 58.697 A 0.374 0.374 0 0 0 426.115 58.743 C 426.191 58.851 426.369 59.035 426.618 59.325 A 13.526 13.526 0 0 1 426.624 59.331 C 426.672 59.331 426.672 59.38 426.721 59.429 A 0.29 0.29 0 0 0 426.721 59.433 C 426.722 59.528 426.77 59.577 426.77 59.673 A 0.768 0.768 0 0 1 426.783 59.699 C 426.819 59.78 426.823 59.829 426.868 59.917 A 0.209 0.209 0 0 1 426.869 59.919 C 426.908 59.959 426.915 59.999 426.944 60.039 A 0.199 0.199 0 0 0 426.965 60.064 C 427.267 60.4 427.57 60.689 427.84 60.917 A 5.593 5.593 0 0 0 428.186 61.187 C 428.333 61.285 428.43 61.382 428.479 61.431 L 428.772 61.724 A 1.872 1.872 0 0 1 428.986 61.895 C 429.053 61.956 429.114 62.017 429.163 62.066 C 429.285 62.107 429.373 62.181 429.427 62.205 A 0.074 0.074 0 0 0 429.456 62.212 A 0.381 0.381 0 0 0 429.512 62.209 C 429.531 62.207 429.55 62.201 429.569 62.19 A 0.171 0.171 0 0 0 429.602 62.163 A 0.63 0.63 0 0 0 429.657 62.133 C 429.692 62.111 429.716 62.089 429.731 62.067 A 0.088 0.088 0 0 0 429.749 62.017 A 0.269 0.269 0 0 0 429.75 62.014 C 429.775 61.962 429.772 61.924 429.757 61.893 A 0.281 0.281 0 0 0 429.7 61.822 A 0.987 0.987 0 0 1 429.658 61.799 C 429.632 61.785 429.61 61.771 429.588 61.76 M 10.259 63.615 A 8.407 8.407 0 0 0 10.266 63.726 A 71.561 71.561 0 0 0 10.433 65.035 C 10.493 65.466 10.556 65.872 10.624 66.25 A 16.75 16.75 0 0 0 10.754 66.9 A 12.867 12.867 0 0 0 10.83 67.293 C 10.927 67.758 11.02 68.044 11.095 68.136 A 0.071 0.071 0 0 0 11.145 68.169 C 11.194 68.169 11.243 67.925 11.243 67.339 A 10.986 10.986 0 0 1 11.214 66.918 C 11.198 66.625 11.189 66.308 11.174 65.966 A 24.132 24.132 0 0 0 11.145 65.435 C 11.096 65.069 11.06 64.727 11.023 64.397 A 23.086 23.086 0 0 0 10.901 63.433 C 10.765 62.844 10.629 62.549 10.493 62.549 A 0.099 0.099 0 0 0 10.461 62.554 C 10.277 62.646 10.223 63 10.259 63.615 Z M 444.285 20.948 A 7.913 7.913 0 0 0 443.42 20.904 C 442.59 20.904 441.858 20.953 441.125 21.148 C 439.96 21.506 440.358 21.741 442.319 21.815 A 31.97 31.97 0 0 0 442.883 21.831 C 443.762 21.831 444.449 21.804 444.943 21.749 A 5.093 5.093 0 0 0 445.374 21.685 C 445.816 21.552 445.858 21.419 445.498 21.25 A 2.31 2.31 0 0 0 445.374 21.197 C 445.076 21.078 444.706 20.995 444.285 20.948 Z M 59.436 40.044 C 60.12 39.947 60.803 39.898 61.536 39.898 C 61.932 39.898 62.25 39.938 62.487 39.981 A 4.824 4.824 0 0 1 62.561 39.996 A 1.67 1.67 0 0 1 62.648 40.027 C 62.971 40.155 62.799 40.251 62.057 40.427 A 17.058 17.058 0 0 1 62.024 40.435 C 61.145 40.581 60.315 40.63 59.583 40.63 A 7.48 7.48 0 0 1 59.214 40.622 C 58.677 40.595 58.402 40.507 58.362 40.386 A 0.127 0.127 0 0 1 58.424 40.278 C 58.459 40.253 58.509 40.232 58.575 40.213 A 1.809 1.809 0 0 1 58.655 40.191 A 5.669 5.669 0 0 1 58.875 40.14 C 59.009 40.113 59.164 40.085 59.349 40.057 A 12.304 12.304 0 0 1 59.436 40.044 Z M 162.708 58.794 C 162.805 58.794 162.952 58.843 163.098 58.99 A 1.834 1.834 0 0 1 163.293 59.219 C 163.358 59.31 163.418 59.413 163.468 59.526 A 1.64 1.64 0 0 1 163.489 59.576 A 0.796 0.796 0 0 1 163.554 59.779 C 163.584 59.936 163.586 60.116 163.586 60.277 A 44.029 44.029 0 0 1 163.586 60.308 C 163.586 60.499 163.616 60.719 163.629 60.97 A 4.169 4.169 0 0 1 163.635 61.187 C 163.672 61.444 163.736 61.673 163.787 61.875 A 4.173 4.173 0 0 1 163.831 62.066 A 2.349 2.349 0 0 1 163.925 62.357 C 163.958 62.484 163.975 62.598 163.977 62.684 A 0.709 0.709 0 0 1 163.977 62.701 C 163.977 62.894 163.929 62.992 163.881 62.994 A 0.037 0.037 0 0 1 163.879 62.994 C 163.838 62.994 163.796 62.958 163.724 62.887 A 9.291 9.291 0 0 1 163.684 62.847 A 0.31 0.31 0 0 1 163.644 62.796 C 163.62 62.759 163.596 62.71 163.572 62.648 A 1.864 1.864 0 0 1 163.538 62.554 A 761.049 761.049 0 0 1 163.533 62.539 C 163.158 61.273 162.874 60.325 162.723 59.779 A 19.96 19.96 0 0 1 162.708 59.722 A 6.299 6.299 0 0 1 162.662 59.528 C 162.588 59.188 162.578 58.972 162.631 58.865 A 0.132 0.132 0 0 1 162.708 58.794 Z M 345.553 35.302 A 0.272 0.272 0 0 0 345.52 35.259 C 345.477 35.216 345.472 35.482 345.54 36.126 A 22.573 22.573 0 0 0 345.569 36.382 A 26.323 26.323 0 0 0 345.601 36.679 C 345.796 38.388 346.081 39.263 346.497 39.263 A 0.087 0.087 0 0 0 346.54 39.252 C 346.592 39.222 346.625 39.136 346.637 39.006 A 1.415 1.415 0 0 0 346.643 38.872 C 346.643 38.726 346.616 38.525 346.561 38.268 A 8.355 8.355 0 0 0 346.497 37.994 A 17.658 17.658 0 0 1 346.423 37.729 A 51.204 51.204 0 0 1 346.204 36.871 A 10.585 10.585 0 0 0 346.161 36.745 C 346.031 36.371 345.905 36.075 345.817 35.855 A 12.068 12.068 0 0 1 345.813 35.845 C 345.694 35.567 345.607 35.386 345.553 35.302 Z M 474.557 35.302 A 0.272 0.272 0 0 0 474.524 35.259 C 474.48 35.216 474.476 35.482 474.544 36.126 A 22.573 22.573 0 0 0 474.573 36.382 A 26.323 26.323 0 0 0 474.605 36.679 C 474.8 38.388 475.084 39.263 475.5 39.263 A 0.087 0.087 0 0 0 475.544 39.252 C 475.596 39.222 475.629 39.136 475.641 39.006 A 1.415 1.415 0 0 0 475.647 38.872 C 475.647 38.726 475.62 38.525 475.565 38.268 A 8.355 8.355 0 0 0 475.5 37.994 A 17.658 17.658 0 0 1 475.427 37.729 A 51.204 51.204 0 0 1 475.208 36.871 A 10.585 10.585 0 0 0 475.165 36.745 C 475.035 36.371 474.909 36.075 474.821 35.855 A 12.068 12.068 0 0 1 474.817 35.845 C 474.698 35.567 474.611 35.386 474.557 35.302 Z M 37.317 73.736 C 37.512 73.736 37.952 74.126 38.782 74.956 C 39.861 76.126 40.029 76.756 39.248 76.849 A 1.9 1.9 0 0 1 39.026 76.861 A 0.628 0.628 0 0 1 38.907 76.851 C 38.718 76.814 38.662 76.676 38.766 76.411 A 1.295 1.295 0 0 1 38.782 76.372 C 38.879 76.031 38.684 75.542 38.098 74.908 A 5.646 5.646 0 0 1 37.806 74.591 C 37.735 74.509 37.67 74.429 37.611 74.354 A 8.156 8.156 0 0 1 37.512 74.224 A 1.455 1.455 0 0 1 37.424 74.128 C 37.311 73.993 37.274 73.892 37.269 73.845 A 0.1 0.1 0 0 1 37.268 73.833 C 37.268 73.788 37.268 73.743 37.307 73.736 A 0.062 0.062 0 0 1 37.317 73.736 Z M 71.008 33.648 A 0.142 0.142 0 0 0 70.924 33.681 C 70.866 33.725 70.798 33.81 70.705 33.928 A 17.27 17.27 0 0 1 70.618 34.038 A 4.726 4.726 0 0 0 70.361 34.391 C 70.293 34.495 70.224 34.608 70.155 34.732 A 6.107 6.107 0 0 0 70.032 34.966 C 69.914 35.162 69.828 35.389 69.723 35.648 A 11.15 11.15 0 0 1 69.641 35.845 A 7.525 7.525 0 0 1 69.638 35.854 C 69.492 36.24 69.348 36.531 69.299 36.822 C 69.202 37.115 69.202 37.261 69.25 37.261 C 69.348 37.261 69.446 37.212 69.495 37.163 A 1.02 1.02 0 0 1 69.52 37.117 C 69.559 37.048 69.592 37 69.592 36.919 A 0.478 0.478 0 0 1 69.6 36.841 C 69.615 36.752 69.654 36.622 69.731 36.453 A 3.327 3.327 0 0 1 69.788 36.333 A 11.564 11.564 0 0 0 70.007 35.863 A 41.845 41.845 0 0 0 70.227 35.357 C 70.406 35.044 70.503 34.812 70.631 34.625 A 1.403 1.403 0 0 1 70.667 34.576 C 70.862 34.331 70.959 34.087 71.057 33.941 C 71.106 33.746 71.106 33.648 71.008 33.648 Z M 300.726 15.552 A 0.305 0.305 0 0 0 300.452 15.386 A 0.284 0.284 0 0 0 300.313 15.422 A 0.259 0.259 0 0 0 300.208 15.533 A 0.512 0.512 0 0 0 300.098 15.704 C 300.083 15.741 300.072 15.778 300.067 15.812 A 0.376 0.376 0 0 0 300.061 15.874 A 211.598 211.598 0 0 1 300.021 16.569 C 300 16.927 299.982 17.24 299.972 17.502 A 9.98 9.98 0 0 0 299.963 17.876 C 299.963 18.246 299.963 18.504 299.985 18.671 A 0.713 0.713 0 0 0 300.012 18.804 C 300.037 18.877 300.061 18.939 300.092 18.981 A 0.138 0.138 0 0 0 300.208 19.048 C 300.256 19.048 300.354 18.951 300.452 18.755 A 0.993 0.993 0 0 0 300.482 18.707 C 300.569 18.559 300.652 18.34 300.696 18.121 A 9.208 9.208 0 0 0 300.811 17.406 C 300.844 17.13 300.861 16.868 300.861 16.617 A 5.406 5.406 0 0 0 300.842 16.167 A 2.373 2.373 0 0 0 300.833 15.952 C 300.817 15.777 300.78 15.645 300.726 15.552 Z M 447.561 56.922 A 0.037 0.037 0 0 0 447.522 56.89 A 4.475 4.475 0 0 0 447.381 57.19 A 1.799 1.799 0 0 0 447.278 57.525 C 447.229 57.769 447.18 58.013 447.18 58.208 A 0.706 0.706 0 0 0 447.16 58.381 C 447.16 58.522 447.194 58.671 447.229 58.843 C 447.266 59.029 447.303 59.215 447.297 59.38 A 0.714 0.714 0 0 1 447.278 59.527 L 447.278 59.966 C 447.229 60.113 447.278 60.21 447.278 60.357 C 447.278 60.445 447.318 60.494 447.325 60.502 A 0.04 0.04 0 0 0 447.327 60.503 A 0.087 0.087 0 0 0 447.375 60.488 C 447.397 60.473 447.42 60.448 447.442 60.412 A 0.63 0.63 0 0 0 447.473 60.357 A 0.411 0.411 0 0 0 447.502 60.275 C 447.515 60.223 447.524 60.164 447.536 60.102 A 1.094 1.094 0 0 1 447.571 59.966 L 447.571 59.527 A 1.363 1.363 0 0 1 447.548 59.412 C 447.535 59.333 447.527 59.248 447.517 59.16 A 3.455 3.455 0 0 0 447.473 58.843 L 447.473 58.208 A 14.784 14.784 0 0 1 447.473 58.164 C 447.474 58.023 447.478 57.843 447.522 57.622 C 447.571 57.427 447.571 57.281 447.571 57.134 A 54.829 54.829 0 0 0 447.571 57.112 C 447.571 57.011 447.57 56.953 447.561 56.922 Z M 162.805 56.402 A 17.366 17.366 0 0 0 162.707 56.024 C 162.508 55.299 162.345 54.937 162.219 54.937 A 0.105 0.105 0 0 0 162.194 54.934 C 162.043 54.934 162.03 55.317 162.094 55.995 A 17.456 17.456 0 0 0 162.122 56.255 A 14.27 14.27 0 0 0 162.165 56.66 C 162.321 57.934 162.588 58.475 162.854 58.208 A 0.142 0.142 0 0 0 162.904 58.165 C 162.959 58.09 162.985 57.941 162.963 57.717 A 2.12 2.12 0 0 0 162.952 57.622 A 3.779 3.779 0 0 0 162.951 57.558 C 162.945 57.226 162.897 56.814 162.805 56.402 Z M 132.825 23.296 A 0.097 0.097 0 0 0 132.771 23.374 C 132.758 23.453 132.791 23.584 132.825 23.785 C 132.889 23.977 132.974 24.211 133.08 24.474 A 13.857 13.857 0 0 0 133.264 24.908 A 7.902 7.902 0 0 0 133.479 25.355 C 133.557 25.503 133.634 25.638 133.711 25.764 A 6.701 6.701 0 0 0 133.85 25.982 A 4.409 4.409 0 0 0 133.971 26.128 C 134.084 26.256 134.176 26.34 134.247 26.365 A 0.129 0.129 0 0 0 134.29 26.372 C 134.338 26.324 134.338 26.177 134.241 25.884 C 134.195 25.607 134.061 25.243 133.84 24.832 A 6.031 6.031 0 0 0 133.801 24.761 A 15.088 15.088 0 0 0 133.49 24.161 C 133.398 23.997 133.307 23.85 133.215 23.736 C 133.02 23.443 132.874 23.296 132.825 23.296 Z M 236.829 23.296 A 0.097 0.097 0 0 0 236.775 23.374 C 236.762 23.453 236.795 23.584 236.829 23.785 C 236.893 23.977 236.978 24.211 237.084 24.474 A 13.857 13.857 0 0 0 237.268 24.908 A 7.902 7.902 0 0 0 237.483 25.355 C 237.56 25.503 237.638 25.638 237.715 25.764 A 6.701 6.701 0 0 0 237.854 25.982 A 4.409 4.409 0 0 0 237.975 26.128 C 238.088 26.256 238.18 26.34 238.251 26.365 A 0.129 0.129 0 0 0 238.293 26.372 C 238.342 26.324 238.342 26.177 238.245 25.884 C 238.198 25.607 238.065 25.243 237.844 24.832 A 6.031 6.031 0 0 0 237.805 24.761 A 15.088 15.088 0 0 0 237.494 24.161 C 237.402 23.997 237.311 23.85 237.219 23.736 C 237.024 23.443 236.877 23.296 236.829 23.296 Z M 316.272 42.193 C 316.321 42.144 316.418 42.242 316.565 42.535 A 0.928 0.928 0 0 1 316.702 42.818 C 316.732 42.914 316.754 43.021 316.774 43.135 A 8.569 8.569 0 0 1 316.809 43.365 C 316.899 43.679 316.906 43.993 316.869 44.269 A 2.362 2.362 0 0 1 316.858 44.341 C 316.76 45.562 316.565 45.122 316.321 43.023 A 14.768 14.768 0 0 0 316.32 43.019 A 14.535 14.535 0 0 0 316.32 43.015 A 15.406 15.406 0 0 0 316.32 43.011 C 316.273 42.555 316.229 42.316 316.265 42.21 A 0.135 0.135 0 0 1 316.272 42.193 Z M 432.513 63.995 C 432.535 64.003 432.56 64.012 432.591 64.016 A 0.278 0.278 0 0 0 432.629 64.019 A 0.209 0.209 0 0 0 432.631 64.021 C 432.671 64.06 432.711 64.067 432.751 64.095 A 0.199 0.199 0 0 1 432.776 64.117 L 432.874 64.117 L 432.825 64.068 C 432.821 64.068 432.776 64.066 432.776 64.019 C 432.727 63.97 432.629 63.97 432.581 63.921 L 432.385 63.726 L 432.092 63.433 C 431.98 63.321 431.896 63.266 431.841 63.246 A 0.129 0.129 0 0 0 431.799 63.238 L 431.604 63.238 A 0.19 0.19 0 0 1 431.591 63.25 C 431.578 63.261 431.564 63.268 431.551 63.274 A 0.237 0.237 0 0 1 431.458 63.287 A 0.094 0.094 0 0 1 431.423 63.279 C 431.384 63.264 431.338 63.227 431.264 63.19 A 0.852 0.852 0 0 0 431.262 63.189 A 0.823 0.823 0 0 0 431.255 63.182 C 431.221 63.149 431.187 63.121 431.152 63.097 A 1.422 1.422 0 0 0 430.969 62.994 A 5.666 5.666 0 0 0 430.889 62.954 C 430.842 62.931 430.797 62.912 430.763 62.902 A 0.147 0.147 0 0 0 430.725 62.896 L 430.627 62.896 A 0.779 0.779 0 0 0 430.633 62.987 C 430.639 63.036 430.649 63.088 430.664 63.14 A 0.881 0.881 0 0 0 430.774 63.384 A 11.763 11.763 0 0 1 430.802 63.422 C 430.872 63.516 430.931 63.598 430.992 63.667 A 0.866 0.866 0 0 0 431.165 63.824 C 431.165 63.872 431.165 63.872 431.213 63.921 L 431.262 63.921 A 0.209 0.209 0 0 0 431.264 63.92 C 431.303 63.88 431.31 63.84 431.339 63.8 A 0.199 0.199 0 0 1 431.36 63.775 A 0.089 0.089 0 0 1 431.367 63.741 C 431.373 63.726 431.383 63.71 431.396 63.695 A 0.825 0.825 0 0 1 431.458 63.628 A 0.381 0.381 0 0 1 431.514 63.631 C 431.533 63.634 431.552 63.64 431.571 63.651 A 0.171 0.171 0 0 1 431.604 63.677 A 0.266 0.266 0 0 0 431.622 63.708 A 0.271 0.271 0 0 0 431.848 63.824 A 0.117 0.117 0 0 0 431.87 63.841 C 431.922 63.872 432.001 63.872 432.043 63.872 L 432.19 63.872 C 432.219 63.872 432.265 63.89 432.318 63.914 A 3.643 3.643 0 0 1 432.434 63.97 C 432.457 63.97 432.48 63.981 432.509 63.993 M 297.161 25.437 A 1.138 1.138 0 0 1 297.161 25.438 C 297.152 25.455 297.142 25.473 297.131 25.494 A 1.915 1.915 0 0 1 296.863 25.666 C 296.715 25.742 296.536 25.805 296.306 25.835 A 2.011 2.011 0 0 1 296.301 25.835 A 5.847 5.847 0 0 1 295.443 25.794 A 2.115 2.115 0 0 1 295.178 25.738 C 294.926 25.702 294.753 25.612 294.68 25.49 A 0.275 0.275 0 0 1 294.641 25.347 A 0.432 0.432 0 0 1 294.671 25.179 C 294.729 25.041 294.874 24.97 295.125 25.005 A 1.047 1.047 0 0 1 295.129 25.005 A 1.343 1.343 0 0 1 295.279 25.011 C 295.311 25.014 295.344 25.02 295.38 25.028 A 1.009 1.009 0 0 1 295.471 25.054 C 295.715 25.103 295.959 25.152 296.204 25.152 C 296.439 25.199 296.675 25.201 296.823 25.201 A 35.095 35.095 0 0 0 296.838 25.201 A 0.584 0.584 0 0 1 296.939 25.209 C 297.031 25.225 297.095 25.262 297.131 25.298 A 0.204 0.204 0 0 1 297.153 25.311 C 297.203 25.344 297.192 25.378 297.165 25.43 M 434.181 62.12 A 1.198 1.198 0 0 1 434.202 62.133 C 434.209 62.137 434.216 62.142 434.223 62.148 A 0.212 0.212 0 0 1 434.241 62.163 A 1.706 1.706 0 0 0 434.684 62.482 A 3.015 3.015 0 0 0 434.729 62.505 C 434.855 62.547 435.017 62.589 435.153 62.631 A 3.016 3.016 0 0 1 435.217 62.652 C 435.364 62.701 435.51 62.749 435.608 62.847 A 0.113 0.113 0 0 1 435.645 62.855 C 435.684 62.868 435.73 62.896 435.803 62.896 A 0.146 0.146 0 0 0 435.851 62.926 C 435.904 62.948 435.975 62.958 436.047 62.994 A 1.184 1.184 0 0 0 436.235 63.075 A 0.373 0.373 0 0 0 436.34 63.091 C 436.389 63.14 436.438 63.14 436.438 63.189 C 436.485 63.189 436.487 63.234 436.487 63.237 L 436.438 63.238 A 0.108 0.108 0 0 0 436.435 63.236 C 436.419 63.229 436.327 63.189 436.194 63.189 C 436.051 63.141 435.861 63.093 435.624 63.046 A 9.574 9.574 0 0 0 435.608 63.042 A 7.9 7.9 0 0 0 435.454 63.006 C 435.32 62.975 435.177 62.945 435.048 62.914 A 6.354 6.354 0 0 1 434.973 62.896 C 434.778 62.798 434.68 62.749 434.631 62.701 A 1.706 1.706 0 0 0 434.188 62.382 A 3.015 3.015 0 0 0 434.143 62.359 A 1.833 1.833 0 0 1 434.042 62.322 C 433.979 62.297 433.929 62.272 433.892 62.246 A 0.292 0.292 0 0 1 433.85 62.212 A 0.183 0.183 0 0 0 433.818 62.186 A 0.285 0.285 0 0 0 433.771 62.163 M 74.204 28.596 A 0.29 0.29 0 0 0 74.084 28.57 C 74.048 28.57 73.984 28.625 73.913 28.714 A 1.487 1.487 0 0 0 73.84 28.814 A 1.233 1.233 0 0 0 73.78 28.916 C 73.701 29.063 73.617 29.271 73.502 29.539 A 39.308 39.308 0 0 1 73.499 29.546 A 8.411 8.411 0 0 0 73.4 29.798 C 73.031 30.796 73.228 30.972 73.93 30.328 A 6.614 6.614 0 0 0 74.133 30.132 A 8.061 8.061 0 0 0 74.261 29.983 C 74.524 29.667 74.677 29.429 74.719 29.302 C 74.757 29.151 74.707 29.001 74.57 28.872 A 0.848 0.848 0 0 0 74.426 28.765 C 74.338 28.677 74.268 28.624 74.204 28.596 Z M 34.338 68.462 A 1.488 1.488 0 0 0 34.298 68.399 C 34.166 68.201 34.037 68.121 33.948 68.121 A 0.215 0.215 0 0 0 33.936 68.121 C 33.734 68.131 33.788 68.434 34.065 68.964 A 7.081 7.081 0 0 0 34.192 69.195 C 35.012 70.516 35.237 70.604 34.867 69.46 A 14.651 14.651 0 0 0 34.778 69.195 C 34.694 69.028 34.611 68.876 34.527 68.741 A 3.736 3.736 0 0 0 34.338 68.462 Z M 286.975 34.771 A 9.921 9.921 0 0 0 286.973 34.537 C 286.961 34.064 286.913 33.843 286.829 33.843 A 0.04 0.04 0 0 0 286.799 33.831 C 286.757 33.831 286.697 33.891 286.634 33.997 A 1.372 1.372 0 0 0 286.584 34.087 A 3.521 3.521 0 0 0 286.49 34.293 A 2.996 2.996 0 0 0 286.292 34.966 C 286.253 35.197 286.245 35.429 286.267 35.612 A 1.121 1.121 0 0 0 286.292 35.747 C 286.389 35.992 286.487 36.089 286.633 36.089 C 286.779 36.089 286.828 35.945 286.924 35.704 A 15.452 15.452 0 0 0 286.925 35.702 A 6.183 6.183 0 0 0 286.944 35.605 C 286.986 35.38 287.018 35.113 286.975 34.771 Z M 127.832 41.129 A 6.019 6.019 0 0 0 127.844 41.216 A 1.226 1.226 0 0 1 127.879 41.433 C 127.884 41.513 127.88 41.589 127.868 41.658 A 0.667 0.667 0 0 1 127.844 41.753 A 0.735 0.735 0 0 1 127.799 41.883 C 127.775 41.936 127.745 41.981 127.714 42.021 A 1.446 1.446 0 0 1 127.6 42.144 A 2.476 2.476 0 0 0 127.557 42.173 C 127.443 42.253 127.395 42.306 127.307 42.437 A 0.353 0.353 0 0 0 127.278 42.519 C 127.265 42.578 127.269 42.637 127.292 42.696 A 0.383 0.383 0 0 0 127.307 42.73 A 0.124 0.124 0 0 0 127.324 42.756 C 127.374 42.814 127.457 42.767 127.541 42.647 A 0.823 0.823 0 0 0 127.551 42.632 A 0.774 0.774 0 0 0 127.689 42.512 C 127.771 42.423 127.854 42.302 127.936 42.151 A 3.332 3.332 0 0 0 127.991 42.046 A 3.998 3.998 0 0 0 128.122 41.759 C 128.166 41.651 128.199 41.547 128.218 41.446 A 1.005 1.005 0 0 0 128.235 41.265 A 0.61 0.61 0 0 0 128.252 41.152 C 128.261 40.999 128.206 40.865 128.088 40.826 A 0.825 0.825 0 0 0 128.022 40.764 C 128.007 40.751 127.991 40.741 127.976 40.735 A 0.089 0.089 0 0 0 127.942 40.728 C 127.809 40.728 127.797 40.849 127.832 41.129 Z M 231.836 41.129 A 6.019 6.019 0 0 0 231.848 41.216 A 1.226 1.226 0 0 1 231.882 41.433 C 231.888 41.513 231.884 41.589 231.872 41.658 A 0.667 0.667 0 0 1 231.848 41.753 A 0.735 0.735 0 0 1 231.803 41.883 C 231.779 41.936 231.749 41.981 231.718 42.021 A 1.446 1.446 0 0 1 231.604 42.144 A 2.476 2.476 0 0 0 231.561 42.173 C 231.447 42.253 231.399 42.306 231.311 42.437 A 0.353 0.353 0 0 0 231.281 42.519 C 231.269 42.578 231.273 42.637 231.296 42.696 A 0.383 0.383 0 0 0 231.311 42.73 A 0.124 0.124 0 0 0 231.328 42.756 C 231.378 42.814 231.461 42.767 231.545 42.647 A 0.823 0.823 0 0 0 231.555 42.632 A 0.774 0.774 0 0 0 231.693 42.512 C 231.775 42.423 231.858 42.302 231.94 42.151 A 3.332 3.332 0 0 0 231.995 42.046 A 3.998 3.998 0 0 0 232.126 41.759 C 232.17 41.651 232.203 41.547 232.222 41.446 A 1.005 1.005 0 0 0 232.239 41.265 A 0.61 0.61 0 0 0 232.256 41.152 C 232.265 40.999 232.21 40.865 232.092 40.826 A 0.825 0.825 0 0 0 232.026 40.764 C 232.01 40.751 231.995 40.741 231.98 40.735 A 0.089 0.089 0 0 0 231.946 40.728 C 231.813 40.728 231.801 40.849 231.836 41.129 Z M 316.272 37.847 A 1.261 1.261 0 0 0 316.21 37.737 C 316.133 37.615 316.056 37.554 315.979 37.554 A 0.12 0.12 0 0 0 315.916 37.574 C 315.841 37.62 315.773 37.743 315.735 37.896 A 0.833 0.833 0 0 0 315.663 38.123 A 2.647 2.647 0 0 0 315.637 38.579 A 2.466 2.466 0 0 0 315.64 38.695 C 315.651 38.937 315.699 39.143 315.784 39.312 A 0.742 0.742 0 0 0 315.809 39.395 C 315.839 39.474 315.878 39.53 315.922 39.565 A 0.17 0.17 0 0 0 316.028 39.605 C 316.162 39.605 316.214 39.523 316.297 39.359 A 11.746 11.746 0 0 0 316.321 39.312 C 316.358 39.124 316.396 38.965 316.411 38.767 A 2.421 2.421 0 0 0 316.418 38.579 A 2.466 2.466 0 0 0 316.416 38.464 C 316.405 38.222 316.357 38.016 316.272 37.847 Z M 136.194 30.23 A 0.21 0.21 0 0 0 136.127 30.24 C 136.074 30.257 136.038 30.3 136.004 30.367 A 0.761 0.761 0 0 0 135.999 30.376 A 0.353 0.353 0 0 0 135.969 30.459 C 135.956 30.518 135.961 30.576 135.983 30.635 A 0.383 0.383 0 0 0 135.999 30.669 A 1.002 1.002 0 0 1 136.025 30.765 C 136.034 30.801 136.039 30.834 136.042 30.866 A 1.373 1.373 0 0 1 136.047 31.011 C 135.999 31.158 135.901 31.255 135.803 31.304 A 0.56 0.56 0 0 0 135.737 31.361 C 135.615 31.487 135.645 31.618 135.887 31.783 A 1.474 1.474 0 0 0 135.901 31.792 A 2.988 2.988 0 0 0 135.978 31.848 C 136.081 31.921 136.154 31.957 136.217 31.957 A 0.164 0.164 0 0 0 136.292 31.939 C 136.388 31.89 136.485 31.746 136.582 31.505 A 2.822 2.822 0 0 0 136.584 31.499 C 136.731 31.109 136.78 30.767 136.682 30.523 A 0.753 0.753 0 0 0 136.614 30.389 C 136.528 30.258 136.411 30.202 136.246 30.222 A 0.669 0.669 0 0 0 136.194 30.23 Z M 240.198 30.23 A 0.21 0.21 0 0 0 240.131 30.24 C 240.078 30.257 240.042 30.3 240.007 30.367 A 0.761 0.761 0 0 0 240.002 30.376 A 0.353 0.353 0 0 0 239.973 30.459 C 239.96 30.518 239.965 30.576 239.987 30.635 A 0.383 0.383 0 0 0 240.002 30.669 A 1.002 1.002 0 0 1 240.029 30.765 C 240.038 30.801 240.043 30.834 240.046 30.866 A 1.373 1.373 0 0 1 240.051 31.011 C 240.002 31.158 239.905 31.255 239.807 31.304 A 0.56 0.56 0 0 0 239.741 31.361 C 239.619 31.487 239.649 31.618 239.891 31.783 A 1.474 1.474 0 0 0 239.905 31.792 A 2.988 2.988 0 0 0 239.982 31.848 C 240.085 31.921 240.157 31.957 240.221 31.957 A 0.164 0.164 0 0 0 240.295 31.939 C 240.392 31.89 240.489 31.746 240.586 31.505 A 2.822 2.822 0 0 0 240.588 31.499 C 240.735 31.109 240.784 30.767 240.686 30.523 A 0.753 0.753 0 0 0 240.618 30.389 C 240.532 30.258 240.415 30.202 240.25 30.222 A 0.669 0.669 0 0 0 240.198 30.23 Z M 379.554 10.302 A 0.041 0.041 0 0 0 379.553 10.308 A 0.054 0.054 0 0 0 379.522 10.322 C 379.475 10.358 379.4 10.466 379.28 10.644 A 61.578 61.578 0 0 0 379.211 10.747 A 4.475 4.475 0 0 0 379.071 11.047 A 1.799 1.799 0 0 0 378.967 11.382 A 1.398 1.398 0 0 0 378.946 11.439 C 378.897 11.579 378.879 11.702 378.873 11.808 A 2.642 2.642 0 0 0 378.87 11.968 C 378.87 12.212 378.87 12.31 378.918 12.31 C 378.959 12.31 379.033 12.209 379.14 12.009 A 5.725 5.725 0 0 0 379.211 11.871 A 11.322 11.322 0 0 0 379.395 11.492 A 5.912 5.912 0 0 0 379.504 11.236 A 36.255 36.255 0 0 1 379.549 11.017 C 379.579 10.872 379.602 10.75 379.602 10.65 A 1.802 1.802 0 0 0 379.601 10.599 C 379.596 10.396 379.557 10.275 379.554 10.302 Z M 301.311 33.618 A 0.033 0.033 0 0 0 301.282 33.599 C 301.241 33.599 301.201 33.666 301.16 33.8 A 1.991 1.991 0 0 0 301.135 33.892 A 1.268 1.268 0 0 0 301.079 34.025 C 301.046 34.113 301.02 34.21 300.997 34.315 A 6.522 6.522 0 0 0 300.94 34.624 A 3.043 3.043 0 0 1 300.938 34.732 C 300.932 34.91 300.913 35.069 300.92 35.208 A 0.763 0.763 0 0 0 300.94 35.357 A 1.809 1.809 0 0 0 300.962 35.437 C 300.981 35.502 301.002 35.553 301.027 35.588 A 0.127 0.127 0 0 0 301.135 35.65 A 0.402 0.402 0 0 0 301.186 35.62 C 301.266 35.564 301.339 35.469 301.379 35.308 C 301.414 35.17 301.448 35.007 301.448 34.838 A 1.086 1.086 0 0 0 301.428 34.624 A 14.617 14.617 0 0 0 301.427 34.364 C 301.423 34.184 301.413 34.026 301.379 33.892 A 2.575 2.575 0 0 1 301.377 33.882 C 301.343 33.742 301.333 33.654 301.311 33.618 Z M 161.963 51.439 A 0.055 0.055 0 0 0 161.926 51.421 A 0.033 0.033 0 0 0 161.898 51.439 C 161.878 51.469 161.868 51.541 161.843 51.654 A 2.735 2.735 0 0 1 161.829 51.714 L 161.829 52.398 A 25.89 25.89 0 0 0 161.829 52.478 C 161.829 52.727 161.838 52.904 161.926 53.081 A 1.809 1.809 0 0 0 161.948 53.162 C 161.968 53.227 161.988 53.277 162.013 53.312 A 0.127 0.127 0 0 0 162.122 53.374 C 162.162 53.374 162.202 53.307 162.243 53.173 A 1.991 1.991 0 0 0 162.268 53.081 A 5.929 5.929 0 0 0 162.264 52.819 C 162.261 52.752 162.256 52.68 162.247 52.601 A 3.66 3.66 0 0 0 162.219 52.398 A 14.088 14.088 0 0 0 162.173 52.137 C 162.158 52.054 162.143 51.977 162.127 51.904 A 6.602 6.602 0 0 0 162.073 51.665 A 1.923 1.923 0 0 0 162.054 51.611 C 162.024 51.529 161.994 51.468 161.963 51.439 Z M 170.48 19.483 A 1.305 1.305 0 0 0 170.422 19.488 A 0.743 0.743 0 0 0 170.368 19.49 C 170.273 19.497 170.161 19.521 170.031 19.563 A 3.089 3.089 0 0 0 169.836 19.634 C 169.446 19.829 169.397 19.927 169.592 19.927 C 169.698 19.927 169.778 19.952 169.832 19.985 A 0.265 0.265 0 0 1 169.885 20.025 C 169.885 20.11 169.885 20.158 169.853 20.234 A 0.661 0.661 0 0 1 169.836 20.269 C 169.699 20.498 169.734 20.641 169.86 20.617 A 0.198 0.198 0 0 0 169.885 20.611 A 0.641 0.641 0 0 0 169.911 20.602 C 170.022 20.559 170.182 20.466 170.372 20.305 A 3.301 3.301 0 0 0 170.569 20.122 A 2.44 2.44 0 0 0 170.605 20.081 C 170.941 19.685 170.899 19.46 170.48 19.483 Z M 432.483 18.218 L 433.118 18.853 C 432.385 18.81 431.88 18.729 431.604 18.677 A 8.864 8.864 0 0 1 431.506 18.658 C 431.318 18.563 431.266 18.469 431.395 18.33 A 0.571 0.571 0 0 1 431.409 18.316 A 0.175 0.175 0 0 0 431.419 18.315 C 431.485 18.311 431.748 18.276 432.233 18.237 A 27.415 27.415 0 0 1 432.483 18.218 Z M 457.776 19.488 C 457.483 19.488 457.19 19.488 456.946 19.537 A 1.626 1.626 0 0 0 456.859 19.558 C 456.559 19.642 456.744 19.721 457.476 19.731 A 11.831 11.831 0 0 0 457.629 19.732 C 458.557 19.732 458.85 19.683 458.557 19.585 A 3.11 3.11 0 0 0 458.371 19.545 C 458.279 19.528 458.176 19.513 458.068 19.502 A 3.043 3.043 0 0 0 457.776 19.488 Z M 67.46 39.339 A 0.8 0.8 0 0 0 67.249 39.312 C 66.956 39.312 66.614 39.41 66.321 39.605 A 1.779 1.779 0 0 0 66.282 39.631 C 66.051 39.794 66 39.922 66.159 40.014 A 0.503 0.503 0 0 0 66.223 40.044 A 0.98 0.98 0 0 0 66.671 40.161 C 66.694 40.161 66.718 40.16 66.742 40.158 A 0.99 0.99 0 0 0 66.858 40.142 A 5.651 5.651 0 0 0 67.006 40.111 C 67.084 40.093 67.157 40.073 67.224 40.051 A 0.937 0.937 0 0 0 67.444 39.947 A 0.715 0.715 0 0 0 67.554 39.879 C 67.601 39.844 67.639 39.805 67.668 39.763 A 0.36 0.36 0 0 0 67.737 39.556 C 67.703 39.455 67.6 39.378 67.46 39.339 Z M 32.231 62.034 L 32.23 62.032 A 5.158 5.158 0 0 0 32.23 62.03 C 32.189 61.871 32.15 61.741 32.142 61.585 A 1.151 1.151 0 0 1 32.141 61.529 C 32.092 61.236 32.141 61.04 32.19 60.992 C 32.234 60.992 32.357 61.071 32.559 61.264 A 4.669 4.669 0 0 1 32.629 61.333 A 1.615 1.615 0 0 1 32.724 61.498 C 32.771 61.59 32.813 61.681 32.874 61.773 A 1.561 1.561 0 0 1 32.899 61.895 C 32.918 62.011 32.922 62.115 32.922 62.234 A 16.269 16.269 0 0 1 32.922 62.31 C 32.922 62.744 32.78 62.797 32.541 62.517 A 1.469 1.469 0 0 1 32.532 62.505 C 32.392 62.365 32.341 62.27 32.251 62.09 A 46.55 46.55 0 0 1 32.239 62.066 C 32.238 62.063 32.237 62.06 32.237 62.057 A 5.047 5.047 0 0 0 32.235 62.05 C 32.234 62.048 32.234 62.046 32.233 62.044 L 32.233 62.042 M 314.52 37.637 A 0.191 0.191 0 0 0 314.417 37.603 A 0.996 0.996 0 0 0 314.347 37.64 C 314.275 37.683 314.21 37.747 314.172 37.896 A 0.539 0.539 0 0 0 314.095 38.095 A 1.818 1.818 0 0 0 314.075 38.433 C 314.075 38.677 314.124 38.872 314.172 39.019 C 314.236 39.114 314.299 39.188 314.362 39.229 A 0.191 0.191 0 0 0 314.465 39.263 A 0.159 0.159 0 0 0 314.512 39.256 C 314.567 39.239 314.621 39.194 314.676 39.13 A 1.212 1.212 0 0 0 314.758 39.019 A 91.793 91.793 0 0 0 314.763 39.001 A 2.374 2.374 0 0 0 314.856 38.433 C 314.856 38.303 314.842 38.187 314.814 38.084 A 0.802 0.802 0 0 0 314.709 37.847 C 314.646 37.752 314.583 37.678 314.52 37.637 Z M 445.911 66.363 C 446.155 66.412 446.301 66.509 446.301 66.802 C 446.301 66.802 446.301 66.851 446.252 66.851 C 446.252 66.9 446.204 66.9 446.204 66.949 C 446.119 66.991 446.071 67.033 446.028 67.107 A 0.658 0.658 0 0 0 446.008 67.144 C 445.969 67.263 445.961 67.35 445.934 67.457 A 1.164 1.164 0 0 1 445.911 67.535 L 445.911 67.779 C 445.862 67.828 445.862 67.876 445.813 67.876 A 0.154 0.154 0 0 1 445.689 67.805 C 445.662 67.77 445.64 67.725 445.618 67.681 L 445.471 67.242 L 445.471 66.851 A 0.595 0.595 0 0 1 445.482 66.735 C 445.493 66.681 445.511 66.633 445.531 66.588 A 2.078 2.078 0 0 1 445.569 66.509 C 445.664 66.414 445.76 66.412 445.902 66.366 A 1.177 1.177 0 0 0 445.911 66.363 Z M 378.625 15.288 A 0.471 0.471 0 0 0 378.621 15.224 C 378.608 15.127 378.56 15.093 378.479 15.093 C 378.402 15.093 378.325 15.154 378.248 15.276 A 1.259 1.259 0 0 0 378.186 15.386 A 0.822 0.822 0 0 0 378.115 15.519 C 378.061 15.645 378.026 15.796 377.991 15.972 A 3.488 3.488 0 0 0 377.939 16.202 C 377.919 16.315 377.912 16.421 377.942 16.509 A 0.471 0.471 0 0 0 377.946 16.574 C 377.959 16.67 378.007 16.704 378.088 16.704 A 0.282 0.282 0 0 0 378.156 16.657 C 378.214 16.602 378.26 16.521 378.332 16.413 A 3.657 3.657 0 0 1 378.333 16.412 A 1.693 1.693 0 0 0 378.399 16.303 C 378.472 16.173 378.539 16.014 378.577 15.826 A 3.07 3.07 0 0 0 378.586 15.775 C 378.607 15.662 378.617 15.57 378.621 15.489 A 3.414 3.414 0 0 0 378.625 15.288 Z M 339.905 42.144 A 0.505 0.505 0 0 0 339.846 42.022 C 339.795 41.946 339.728 41.9 339.661 41.9 A 0.159 0.159 0 0 0 339.614 41.907 C 339.559 41.924 339.505 41.969 339.45 42.033 A 1.212 1.212 0 0 0 339.368 42.144 A 2.439 2.439 0 0 0 339.367 42.147 C 339.349 42.201 339.331 42.262 339.315 42.327 A 1.55 1.55 0 0 0 339.27 42.681 A 1.554 1.554 0 0 0 339.316 43.039 A 2.175 2.175 0 0 0 339.368 43.218 A 0.801 0.801 0 0 0 339.386 43.244 C 339.432 43.309 339.479 43.351 339.526 43.378 A 0.268 0.268 0 0 0 339.661 43.413 C 339.738 43.413 339.815 43.383 339.868 43.298 A 0.372 0.372 0 0 0 339.905 43.218 A 0.761 0.761 0 0 0 339.967 43.104 A 1.058 1.058 0 0 0 340.051 42.681 A 1.14 1.14 0 0 0 340.029 42.455 A 0.877 0.877 0 0 0 339.905 42.144 Z M 468.909 42.144 A 0.505 0.505 0 0 0 468.85 42.022 C 468.799 41.946 468.732 41.9 468.665 41.9 A 0.159 0.159 0 0 0 468.618 41.907 C 468.563 41.924 468.508 41.969 468.454 42.033 A 1.212 1.212 0 0 0 468.372 42.144 A 2.439 2.439 0 0 0 468.371 42.147 C 468.353 42.201 468.335 42.262 468.319 42.327 A 1.55 1.55 0 0 0 468.274 42.681 A 1.554 1.554 0 0 0 468.32 43.039 A 2.175 2.175 0 0 0 468.372 43.218 A 0.801 0.801 0 0 0 468.389 43.244 C 468.436 43.309 468.483 43.351 468.53 43.378 A 0.268 0.268 0 0 0 468.665 43.413 C 468.742 43.413 468.819 43.383 468.872 43.298 A 0.372 0.372 0 0 0 468.909 43.218 A 0.761 0.761 0 0 0 468.971 43.104 A 1.058 1.058 0 0 0 469.055 42.681 A 1.14 1.14 0 0 0 469.033 42.455 A 0.877 0.877 0 0 0 468.909 42.144 Z M 48.904 80.199 A 3.406 3.406 0 0 0 48.903 80.2 A 3.29 3.29 0 0 0 48.902 80.2 C 48.831 80.239 48.785 80.268 48.709 80.237 A 0.245 0.245 0 0 1 48.694 80.23 A 0.23 0.23 0 0 1 48.641 80.224 C 48.577 80.209 48.531 80.164 48.455 80.089 A 37.593 37.593 0 0 1 48.45 80.083 A 0.636 0.636 0 0 0 48.373 79.969 C 48.325 79.909 48.265 79.85 48.206 79.79 C 48.059 79.693 47.961 79.644 47.815 79.546 A 4.35 4.35 0 0 1 47.731 79.514 C 47.427 79.392 47.455 79.351 47.815 79.351 A 1.499 1.499 0 0 1 48.092 79.375 A 1.337 1.337 0 0 1 48.45 79.497 A 2.04 2.04 0 0 1 48.615 79.571 C 48.764 79.647 48.865 79.729 48.938 79.839 A 0.253 0.253 0 0 1 48.995 79.926 C 49.023 79.997 49.015 80.077 48.969 80.144 A 0.264 0.264 0 0 1 48.938 80.181 M 13.098 62.994 A 0.237 0.237 0 0 0 13.004 63.006 C 12.991 63.012 12.978 63.019 12.965 63.03 A 0.19 0.19 0 0 0 12.952 63.042 A 0.678 0.678 0 0 0 12.847 63.175 C 12.795 63.263 12.756 63.378 12.756 63.531 A 1.564 1.564 0 0 0 12.724 63.812 C 12.723 63.922 12.736 64.027 12.768 64.124 A 0.69 0.69 0 0 0 12.805 64.214 C 12.852 64.451 12.946 64.55 13.04 64.511 A 0.129 0.129 0 0 0 13.049 64.507 A 0.23 0.23 0 0 0 13.102 64.502 C 13.166 64.487 13.213 64.442 13.288 64.366 A 37.593 37.593 0 0 0 13.293 64.361 A 0.148 0.148 0 0 0 13.329 64.291 C 13.336 64.267 13.339 64.239 13.341 64.209 A 1.738 1.738 0 0 0 13.342 64.117 L 13.342 63.872 A 4.929 4.929 0 0 0 13.34 63.706 C 13.337 63.592 13.326 63.464 13.293 63.335 A 0.787 0.787 0 0 0 13.287 63.228 C 13.271 63.115 13.225 63.047 13.13 63.006 A 0.408 0.408 0 0 0 13.098 62.994 Z M 71.591 39.116 A 0.314 0.314 0 0 0 71.497 39.068 A 0.349 0.349 0 0 0 71.473 39.069 C 71.37 39.076 71.185 39.128 70.959 39.263 A 3.292 3.292 0 0 0 70.758 39.373 A 6.005 6.005 0 0 0 70.471 39.556 A 2.398 2.398 0 0 0 70.411 39.598 C 70.311 39.669 70.276 39.71 70.276 39.751 A 0.043 0.043 0 0 0 70.282 39.773 C 70.306 39.814 70.395 39.849 70.52 39.849 A 0.801 0.801 0 0 0 70.615 39.874 C 70.685 39.888 70.758 39.894 70.838 39.896 A 6.187 6.187 0 0 0 71.008 39.898 C 71.252 39.898 71.399 39.849 71.545 39.751 A 1.293 1.293 0 0 0 71.631 39.66 C 71.682 39.598 71.716 39.531 71.702 39.448 A 0.261 0.261 0 0 0 71.692 39.41 C 71.692 39.265 71.665 39.173 71.591 39.116 Z M 168.025 19.72 A 0.409 0.409 0 0 0 167.981 19.732 C 167.858 19.732 167.735 19.79 167.612 19.881 A 2.034 2.034 0 0 0 167.395 20.074 C 167.159 20.309 167.018 20.45 166.972 20.522 A 0.084 0.084 0 0 0 166.956 20.562 C 166.956 20.641 167.052 20.656 167.219 20.659 A 7.853 7.853 0 0 0 167.346 20.66 C 167.542 20.66 167.688 20.611 167.834 20.562 A 1.7 1.7 0 0 0 167.856 20.547 C 167.991 20.454 168.084 20.362 168.176 20.269 C 168.253 20.116 168.299 19.993 168.292 19.899 A 0.186 0.186 0 0 0 168.274 19.829 C 168.23 19.742 168.147 19.694 168.025 19.72 Z M 286.959 51.15 A 0.043 0.043 0 0 0 286.926 51.128 C 286.844 51.087 286.727 51.15 286.545 51.318 A 3.778 3.778 0 0 0 286.438 51.421 L 286.047 51.812 C 285.95 51.958 285.901 52.056 285.901 52.056 A 0.087 0.087 0 0 0 285.917 52.104 C 285.931 52.127 285.957 52.149 285.992 52.172 A 0.63 0.63 0 0 0 286.047 52.203 L 286.487 52.203 A 0.481 0.481 0 0 0 286.764 52.124 A 0.429 0.429 0 0 0 286.877 52.007 A 0.827 0.827 0 0 0 287.005 51.713 A 0.935 0.935 0 0 0 287.024 51.519 C 287.024 51.33 286.995 51.199 286.959 51.15 Z M 126.917 43.072 C 126.77 43.121 126.672 43.218 126.624 43.413 A 0.646 0.646 0 0 0 126.604 43.571 C 126.604 43.699 126.639 43.831 126.695 43.982 A 3.224 3.224 0 0 0 126.721 44.048 C 126.81 44.315 126.899 44.46 126.951 44.484 A 0.035 0.035 0 0 0 126.965 44.488 C 127.01 44.488 127.097 44.321 127.187 44.064 A 4.396 4.396 0 0 0 127.209 43.999 A 2.281 2.281 0 0 0 127.265 43.881 C 127.326 43.74 127.356 43.616 127.356 43.462 A 0.507 0.507 0 0 0 127.346 43.356 C 127.337 43.315 127.323 43.28 127.303 43.25 A 0.239 0.239 0 0 0 127.209 43.169 C 127.15 43.109 127.09 43.086 127.03 43.077 A 0.761 0.761 0 0 0 126.917 43.072 Z M 230.92 43.072 C 230.774 43.121 230.676 43.218 230.627 43.413 A 0.646 0.646 0 0 0 230.608 43.571 C 230.608 43.699 230.643 43.831 230.699 43.982 A 3.224 3.224 0 0 0 230.725 44.048 C 230.814 44.315 230.903 44.46 230.955 44.484 A 0.035 0.035 0 0 0 230.969 44.488 C 231.014 44.488 231.101 44.321 231.191 44.064 A 4.396 4.396 0 0 0 231.213 43.999 A 2.281 2.281 0 0 0 231.269 43.881 C 231.329 43.74 231.36 43.616 231.36 43.462 A 0.507 0.507 0 0 0 231.35 43.356 C 231.341 43.315 231.326 43.28 231.306 43.25 A 0.239 0.239 0 0 0 231.213 43.169 C 231.153 43.109 231.094 43.086 231.034 43.077 A 0.761 0.761 0 0 0 230.92 43.072 Z M 57.942 64.509 A 1.303 1.303 0 0 0 57.922 64.556 A 1.599 1.599 0 0 0 57.767 64.803 C 57.711 64.916 57.678 65.029 57.678 65.142 A 1.112 1.112 0 0 0 57.666 65.219 C 57.641 65.41 57.68 65.533 57.722 65.62 A 0.782 0.782 0 0 0 57.727 65.63 A 0.154 0.154 0 0 0 57.756 65.672 C 57.806 65.72 57.882 65.713 57.987 65.651 A 0.755 0.755 0 0 0 58.02 65.63 C 58.109 65.586 58.197 65.502 58.249 65.341 A 0.794 0.794 0 0 0 58.264 65.288 A 0.899 0.899 0 0 0 58.302 65.097 C 58.312 65.003 58.313 64.9 58.313 64.796 A 30.696 30.696 0 0 0 58.313 64.751 C 58.264 64.703 58.264 64.703 58.264 64.654 A 1.085 1.085 0 0 0 58.256 64.517 C 58.241 64.4 58.208 64.313 58.174 64.272 A 0.121 0.121 0 0 0 58.167 64.263 C 58.121 64.263 58.033 64.306 57.942 64.509 Z M 131.192 38.414 A 4.478 4.478 0 0 0 131.165 38.482 A 2.508 2.508 0 0 0 131.139 38.679 C 131.121 38.889 131.138 39.076 131.213 39.263 C 131.311 39.556 131.506 39.41 131.702 38.921 A 2.535 2.535 0 0 0 131.799 38.354 A 1.191 1.191 0 0 0 131.799 38.335 A 0.507 0.507 0 0 0 131.789 38.229 C 131.78 38.188 131.766 38.153 131.746 38.123 A 0.239 0.239 0 0 0 131.653 38.042 A 0.171 0.171 0 0 0 131.62 38.016 C 131.601 38.005 131.582 37.999 131.563 37.996 A 0.381 0.381 0 0 0 131.506 37.994 C 131.374 38.038 131.281 38.202 131.192 38.414 Z M 235.196 38.414 A 4.478 4.478 0 0 0 235.168 38.482 A 2.508 2.508 0 0 0 235.143 38.679 C 235.125 38.889 235.142 39.076 235.217 39.263 C 235.315 39.556 235.51 39.41 235.706 38.921 A 2.535 2.535 0 0 0 235.803 38.354 A 1.191 1.191 0 0 0 235.803 38.335 A 0.507 0.507 0 0 0 235.793 38.229 C 235.784 38.188 235.77 38.153 235.75 38.123 A 0.239 0.239 0 0 0 235.657 38.042 A 0.171 0.171 0 0 0 235.624 38.016 C 235.605 38.005 235.586 37.999 235.567 37.996 A 0.381 0.381 0 0 0 235.51 37.994 C 235.378 38.038 235.285 38.202 235.196 38.414 Z M 314.172 34.783 A 0.349 0.349 0 0 0 314.165 34.763 C 314.162 34.755 314.158 34.747 314.154 34.741 A 0.035 0.035 0 0 0 314.124 34.722 C 314.08 34.679 314.037 34.828 314.028 35.237 A 7.514 7.514 0 0 0 314.026 35.406 A 5.518 5.518 0 0 1 314.04 35.513 C 314.068 35.739 314.077 35.916 314.101 36.045 A 0.697 0.697 0 0 0 314.124 36.138 A 14.577 14.577 0 0 0 314.127 36.146 C 314.17 36.23 314.173 36.233 314.213 36.155 A 5.51 5.51 0 0 0 314.221 36.138 A 2.012 2.012 0 0 0 314.268 35.976 C 314.297 35.857 314.319 35.715 314.319 35.552 A 1.843 1.843 0 0 0 314.304 35.316 A 3.383 3.383 0 0 0 314.221 34.917 C 314.208 34.891 314.198 34.864 314.19 34.84 A 3.507 3.507 0 0 1 314.177 34.798 M 129.7 52.984 C 129.651 52.984 129.602 53.033 129.456 53.13 C 129.358 53.228 129.26 53.374 129.163 53.57 C 129.023 53.756 128.972 53.898 128.968 53.996 A 0.306 0.306 0 0 0 128.967 54.009 C 128.922 54.145 128.961 54.197 129.044 54.165 A 0.23 0.23 0 0 0 129.065 54.156 A 0.171 0.171 0 0 0 129.141 54.133 C 129.231 54.087 129.343 53.975 129.456 53.863 A 2.258 2.258 0 0 0 129.605 53.637 C 129.671 53.522 129.719 53.415 129.749 53.326 A 1.927 1.927 0 0 0 129.762 53.268 C 129.781 53.183 129.786 53.12 129.774 53.072 A 0.132 0.132 0 0 0 129.7 52.984 Z M 233.704 52.984 C 233.655 52.984 233.606 53.033 233.459 53.13 C 233.362 53.228 233.264 53.374 233.167 53.57 C 233.027 53.756 232.976 53.898 232.971 53.996 A 0.306 0.306 0 0 0 232.971 54.009 C 232.926 54.145 232.964 54.197 233.048 54.165 A 0.23 0.23 0 0 0 233.069 54.156 A 0.171 0.171 0 0 0 233.145 54.133 C 233.235 54.087 233.347 53.975 233.459 53.863 A 2.258 2.258 0 0 0 233.609 53.637 C 233.675 53.522 233.723 53.415 233.752 53.326 A 1.927 1.927 0 0 0 233.766 53.268 C 233.784 53.183 233.79 53.12 233.778 53.072 A 0.132 0.132 0 0 0 233.704 52.984 Z M 307.336 24.956 A 2.377 2.377 0 0 0 306.75 25.005 C 306.402 25.136 306.52 25.189 307 25.199 A 9.275 9.275 0 0 0 307.19 25.201 A 24.208 24.208 0 0 0 307.42 25.2 C 307.616 25.198 307.763 25.191 307.845 25.163 A 0.217 0.217 0 0 0 307.874 25.152 A 0.602 0.602 0 0 0 307.911 25.138 C 308.01 25.098 308.011 25.057 307.944 25.017 A 0.328 0.328 0 0 0 307.922 25.005 A 1.55 1.55 0 0 0 307.784 24.966 C 307.682 24.942 307.563 24.927 307.428 24.942 A 1.049 1.049 0 0 0 307.336 24.956 Z M 10.608 33.599 C 10.706 33.599 10.754 33.648 10.803 33.794 A 0.866 0.866 0 0 1 10.847 33.899 C 10.873 33.975 10.894 34.068 10.9 34.178 A 1.145 1.145 0 0 1 10.901 34.234 A 1.454 1.454 0 0 0 10.863 34.38 C 10.847 34.451 10.831 34.522 10.799 34.593 A 0.573 0.573 0 0 1 10.754 34.673 A 0.28 0.28 0 0 1 10.713 34.734 C 10.662 34.791 10.596 34.82 10.559 34.82 A 0.271 0.271 0 0 1 10.333 34.705 A 0.266 0.266 0 0 1 10.315 34.673 A 1.208 1.208 0 0 1 10.266 34.289 A 10.565 10.565 0 0 1 10.266 34.234 A 1.096 1.096 0 0 1 10.278 34.073 C 10.295 33.956 10.329 33.863 10.364 33.794 A 2.249 2.249 0 0 1 10.396 33.747 C 10.468 33.645 10.515 33.605 10.59 33.6 A 0.26 0.26 0 0 1 10.608 33.599 Z M 120.032 56.206 C 120.129 56.158 120.178 56.206 120.178 56.304 C 120.178 56.348 120.139 56.469 120.061 56.599 A 1.166 1.166 0 0 1 120.032 56.646 A 1.872 1.872 0 0 1 119.861 56.86 C 119.8 56.927 119.739 56.988 119.69 57.037 A 1.651 1.651 0 0 1 119.557 57.16 C 119.504 57.203 119.45 57.232 119.397 57.232 C 119.349 57.232 119.301 57.232 119.299 57.139 A 0.28 0.28 0 0 1 119.299 57.134 A 0.662 0.662 0 0 0 119.337 57.035 C 119.358 56.969 119.379 56.897 119.437 56.806 A 0.839 0.839 0 0 1 119.446 56.792 A 0.784 0.784 0 0 1 119.599 56.524 A 0.711 0.711 0 0 1 119.739 56.402 A 0.678 0.678 0 0 1 119.801 56.322 C 119.878 56.237 119.955 56.206 120.032 56.206 Z M 224.036 56.206 C 224.133 56.158 224.182 56.206 224.182 56.304 C 224.182 56.348 224.143 56.469 224.065 56.599 A 1.166 1.166 0 0 1 224.036 56.646 A 1.872 1.872 0 0 1 223.865 56.86 C 223.804 56.927 223.743 56.988 223.694 57.037 A 1.651 1.651 0 0 1 223.561 57.16 C 223.508 57.203 223.454 57.232 223.401 57.232 C 223.353 57.232 223.305 57.232 223.303 57.139 A 0.28 0.28 0 0 1 223.303 57.134 A 0.662 0.662 0 0 0 223.341 57.035 C 223.362 56.969 223.383 56.897 223.441 56.806 A 0.839 0.839 0 0 1 223.45 56.792 A 0.784 0.784 0 0 1 223.603 56.524 A 0.711 0.711 0 0 1 223.743 56.402 A 0.678 0.678 0 0 1 223.804 56.322 C 223.882 56.237 223.959 56.206 224.036 56.206 Z M 347.815 41.9 C 347.815 41.9 347.913 41.949 347.961 42.095 A 1.241 1.241 0 0 0 347.982 42.134 C 348.004 42.175 348.032 42.222 348.059 42.272 A 1.351 1.351 0 0 1 348.157 42.486 A 2.152 2.152 0 0 1 348.209 42.657 C 348.225 42.726 348.232 42.791 348.218 42.844 A 0.176 0.176 0 0 1 348.206 42.876 C 348.206 42.944 348.185 42.99 348.153 43.021 A 0.202 0.202 0 0 1 348.01 43.072 A 0.204 0.204 0 0 1 347.895 43.03 A 0.427 0.427 0 0 1 347.766 42.876 A 0.357 0.357 0 0 1 347.674 42.648 A 1.68 1.68 0 0 1 347.668 42.486 L 347.668 42.095 A 0.904 0.904 0 0 1 347.691 42.033 C 347.733 41.935 347.774 41.9 347.815 41.9 Z M 476.819 41.9 C 476.819 41.9 476.917 41.949 476.965 42.095 A 1.241 1.241 0 0 0 476.986 42.134 C 477.008 42.175 477.036 42.222 477.063 42.272 A 1.351 1.351 0 0 1 477.161 42.486 A 2.152 2.152 0 0 1 477.213 42.657 C 477.229 42.726 477.236 42.791 477.222 42.844 A 0.176 0.176 0 0 1 477.209 42.876 C 477.209 42.944 477.189 42.99 477.157 43.021 A 0.202 0.202 0 0 1 477.014 43.072 A 0.204 0.204 0 0 1 476.898 43.03 A 0.427 0.427 0 0 1 476.77 42.876 A 0.357 0.357 0 0 1 476.678 42.648 A 1.68 1.68 0 0 1 476.672 42.486 L 476.672 42.095 A 0.904 0.904 0 0 1 476.695 42.033 C 476.736 41.935 476.778 41.9 476.819 41.9 Z M 13.293 65.338 A 0.136 0.136 0 0 0 13.291 65.34 C 13.28 65.351 13.245 65.393 13.245 65.435 C 13.201 65.611 13.157 65.748 13.148 65.916 A 1.151 1.151 0 0 0 13.147 65.972 A 18.575 18.575 0 0 0 13.147 66.087 C 13.148 66.248 13.154 66.369 13.185 66.51 A 1.622 1.622 0 0 0 13.196 66.558 C 13.24 66.78 13.285 66.638 13.329 66.131 A 14.904 14.904 0 0 0 13.342 65.972 A 3.639 3.639 0 0 0 13.353 65.856 C 13.382 65.497 13.339 65.3 13.296 65.335 A 0.03 0.03 0 0 0 13.293 65.337 Z M 63.473 50.272 A 0.171 0.171 0 0 0 63.44 50.298 A 0.178 0.178 0 0 0 63.41 50.301 C 63.368 50.308 63.318 50.33 63.269 50.359 A 0.922 0.922 0 0 0 63.098 50.494 A 0.823 0.823 0 0 0 63.091 50.5 C 63.058 50.535 63.03 50.569 63.006 50.603 A 1.422 1.422 0 0 0 62.903 50.787 C 62.903 50.982 62.903 51.079 63 51.128 C 63.098 51.177 63.245 51.177 63.391 51.079 A 0.657 0.657 0 0 0 63.597 50.859 A 0.841 0.841 0 0 0 63.684 50.64 A 1.11 1.11 0 0 0 63.701 50.595 C 63.759 50.429 63.74 50.338 63.662 50.285 A 0.304 0.304 0 0 0 63.586 50.249 A 0.381 0.381 0 0 0 63.53 50.252 C 63.511 50.255 63.492 50.261 63.473 50.272 Z M 108.586 30.258 A 3.049 3.049 0 0 0 108.557 30.328 C 108.265 30.913 108.069 31.108 107.972 30.914 A 0.518 0.518 0 0 1 107.972 30.872 C 107.977 30.819 107.994 30.744 108.069 30.669 A 1.303 1.303 0 0 0 108.179 30.541 C 108.232 30.472 108.286 30.393 108.339 30.313 A 44.038 44.038 0 0 0 108.362 30.279 A 2.563 2.563 0 0 1 108.458 30.166 C 108.595 30.013 108.692 29.945 108.703 29.938 A 0.107 0.107 0 0 1 108.704 29.937 C 108.748 29.937 108.673 30.056 108.586 30.258 Z M 212.59 30.258 A 3.049 3.049 0 0 0 212.561 30.328 C 212.268 30.913 212.073 31.108 211.976 30.914 A 0.518 0.518 0 0 1 211.976 30.872 C 211.98 30.819 211.998 30.744 212.073 30.669 A 1.303 1.303 0 0 0 212.183 30.541 C 212.236 30.472 212.289 30.393 212.343 30.313 A 44.038 44.038 0 0 0 212.366 30.279 A 2.563 2.563 0 0 1 212.462 30.166 C 212.598 30.013 212.696 29.945 212.706 29.938 A 0.107 0.107 0 0 1 212.708 29.937 C 212.752 29.937 212.677 30.056 212.59 30.258 Z M 315.738 35.36 A 0.136 0.136 0 0 0 315.735 35.357 A 0.068 0.068 0 0 0 315.712 35.361 C 315.644 35.385 315.604 35.523 315.592 35.774 A 3.669 3.669 0 0 0 315.588 35.943 A 9.859 9.859 0 0 0 315.604 36.115 C 315.649 36.556 315.702 36.654 315.833 36.48 A 1.591 1.591 0 0 0 315.852 36.389 C 315.873 36.282 315.879 36.186 315.881 36.082 A 8.151 8.151 0 0 0 315.881 35.943 C 315.881 35.747 315.833 35.601 315.784 35.454 C 315.784 35.413 315.748 35.371 315.738 35.36 Z M 301.632 25.064 A 0.507 0.507 0 0 0 301.526 25.054 A 0.284 0.284 0 0 0 301.388 25.09 A 0.259 0.259 0 0 0 301.282 25.201 A 0.38 0.38 0 0 0 301.257 25.227 C 301.184 25.316 301.184 25.405 301.184 25.494 A 0.373 0.373 0 0 0 301.201 25.599 A 1.184 1.184 0 0 0 301.282 25.787 A 1.875 1.875 0 0 0 301.405 25.845 A 0.45 0.45 0 0 0 301.575 25.884 A 0.307 0.307 0 0 0 301.672 25.868 C 301.707 25.856 301.743 25.838 301.778 25.813 A 0.66 0.66 0 0 0 301.868 25.738 C 301.904 25.701 301.941 25.637 301.957 25.545 A 0.584 0.584 0 0 0 301.965 25.445 A 0.284 0.284 0 0 0 301.93 25.306 A 0.259 0.259 0 0 0 301.819 25.201 A 0.239 0.239 0 0 0 301.738 25.107 C 301.708 25.087 301.673 25.073 301.632 25.064 Z M 377.896 17.293 A 0.136 0.136 0 0 0 377.894 17.291 C 377.812 17.331 377.765 17.472 377.751 17.741 A 3.593 3.593 0 0 0 377.747 17.925 A 3.089 3.089 0 0 0 377.749 18.063 C 377.766 18.44 377.854 18.54 377.942 18.365 C 377.978 18.221 378.014 18.104 378.03 17.975 A 1.153 1.153 0 0 0 378.04 17.828 C 378.04 17.681 377.991 17.535 377.942 17.388 C 377.942 17.346 377.906 17.305 377.896 17.293 Z M 378.642 13.336 A 0.423 0.423 0 0 0 378.625 13.335 A 0.033 0.033 0 0 0 378.601 13.352 C 378.561 13.408 378.528 13.597 378.528 13.921 A 6.683 6.683 0 0 0 378.529 14.074 C 378.538 14.451 378.583 14.562 378.693 14.408 A 0.749 0.749 0 0 0 378.723 14.361 A 14.147 14.147 0 0 0 378.735 14.325 C 378.78 14.19 378.821 14.052 378.821 13.872 A 0.747 0.747 0 0 0 378.82 13.832 C 378.814 13.721 378.784 13.591 378.75 13.497 A 0.624 0.624 0 0 0 378.723 13.433 A 12.84 12.84 0 0 0 378.715 13.418 C 378.68 13.346 378.673 13.337 378.642 13.336 Z M 134.387 30.621 A 0.133 0.133 0 0 0 134.333 30.632 C 134.271 30.659 134.241 30.728 134.241 30.767 A 0.347 0.347 0 0 0 134.21 30.863 C 134.199 30.932 134.203 31.007 134.225 31.07 A 0.305 0.305 0 0 0 134.241 31.109 A 0.958 0.958 0 0 1 134.31 31.187 C 134.358 31.246 134.397 31.306 134.45 31.365 A 0.869 0.869 0 0 0 134.485 31.402 A 1.507 1.507 0 0 0 134.58 31.447 C 134.63 31.468 134.676 31.479 134.709 31.464 A 0.065 0.065 0 0 0 134.729 31.451 C 134.806 31.451 134.853 31.42 134.869 31.358 A 0.216 0.216 0 0 0 134.875 31.304 C 134.914 31.228 134.892 31.152 134.858 31.053 A 7.796 7.796 0 0 1 134.827 30.962 A 0.775 0.775 0 0 0 134.717 30.784 A 0.291 0.291 0 0 0 134.631 30.718 A 0.363 0.363 0 0 0 134.573 30.67 C 134.504 30.625 134.44 30.621 134.399 30.621 A 1.145 1.145 0 0 0 134.387 30.621 Z M 238.391 30.621 A 0.133 0.133 0 0 0 238.336 30.632 C 238.275 30.659 238.245 30.728 238.245 30.767 A 0.347 0.347 0 0 0 238.214 30.863 C 238.203 30.932 238.207 31.007 238.229 31.07 A 0.305 0.305 0 0 0 238.245 31.109 A 0.958 0.958 0 0 1 238.314 31.187 C 238.362 31.246 238.401 31.306 238.454 31.365 A 0.869 0.869 0 0 0 238.489 31.402 A 1.507 1.507 0 0 0 238.584 31.447 C 238.634 31.468 238.68 31.479 238.713 31.464 A 0.065 0.065 0 0 0 238.733 31.451 C 238.81 31.451 238.857 31.42 238.873 31.358 A 0.216 0.216 0 0 0 238.879 31.304 C 238.917 31.228 238.896 31.152 238.862 31.053 A 7.796 7.796 0 0 1 238.831 30.962 A 0.775 0.775 0 0 0 238.721 30.784 A 0.291 0.291 0 0 0 238.635 30.718 A 0.363 0.363 0 0 0 238.577 30.67 C 238.508 30.625 238.444 30.621 238.403 30.621 A 1.145 1.145 0 0 0 238.391 30.621 Z M 33.85 67.193 A 0.38 0.38 0 0 0 33.823 67.168 C 33.735 67.095 33.646 67.095 33.557 67.095 C 33.448 67.132 33.366 67.168 33.311 67.245 A 0.352 0.352 0 0 0 33.264 67.339 A 0.275 0.275 0 0 0 33.248 67.38 C 33.223 67.458 33.23 67.557 33.303 67.66 A 0.534 0.534 0 0 0 33.362 67.73 C 33.411 67.779 33.459 67.779 33.557 67.779 A 0.34 0.34 0 0 0 33.618 67.773 C 33.696 67.759 33.781 67.721 33.896 67.682 A 2.373 2.373 0 0 1 33.899 67.681 A 0.71 0.71 0 0 0 33.907 67.676 C 34.143 67.53 34.14 67.338 33.85 67.193 Z M 50.319 81.413 C 50.363 81.441 50.41 81.399 50.496 81.355 A 0.8 0.8 0 0 1 50.497 81.355 C 50.41 81.399 50.363 81.441 50.319 81.413 A 0.082 0.082 0 0 1 50.305 81.402 A 0.081 0.081 0 0 1 50.248 81.377 C 50.229 81.358 50.215 81.329 50.21 81.288 A 0.26 0.26 0 0 1 50.208 81.255 A 0.45 0.45 0 0 1 50.247 81.086 A 1.875 1.875 0 0 1 50.305 80.962 L 50.549 80.718 A 0.237 0.237 0 0 0 50.643 80.705 C 50.656 80.7 50.669 80.692 50.682 80.682 A 0.19 0.19 0 0 0 50.696 80.669 C 50.777 80.669 50.825 80.703 50.838 80.8 A 0.471 0.471 0 0 1 50.842 80.865 A 0.45 0.45 0 0 1 50.803 81.034 A 1.875 1.875 0 0 1 50.745 81.158 C 50.696 81.206 50.598 81.304 50.5 81.353 A 0.854 0.854 0 0 0 50.499 81.354 A 0.835 0.835 0 0 0 50.498 81.354 M 287.952 47.808 A 0.401 0.401 0 0 0 287.892 47.756 C 287.853 47.73 287.799 47.71 287.708 47.71 A 0.284 0.284 0 0 0 287.569 47.746 A 0.259 0.259 0 0 0 287.463 47.857 A 0.239 0.239 0 0 0 287.37 47.938 C 287.35 47.968 287.336 48.003 287.327 48.044 A 0.507 0.507 0 0 0 287.317 48.15 A 0.37 0.37 0 0 0 287.323 48.213 C 287.333 48.274 287.355 48.33 287.363 48.369 A 0.131 0.131 0 0 1 287.366 48.394 A 0.63 0.63 0 0 0 287.397 48.449 C 287.418 48.483 287.44 48.508 287.462 48.523 A 0.088 0.088 0 0 0 287.512 48.54 A 0.091 0.091 0 0 0 287.555 48.528 C 287.587 48.512 287.622 48.478 287.673 48.428 A 11.182 11.182 0 0 0 287.708 48.394 A 1.9 1.9 0 0 0 287.734 48.367 C 287.772 48.328 287.823 48.27 287.863 48.193 A 0.605 0.605 0 0 0 287.903 48.101 A 0.371 0.371 0 0 0 287.927 48.074 C 288 47.986 287.996 47.897 287.952 47.808 Z M 300.061 20.269 C 300.11 20.269 300.159 20.269 300.208 20.367 A 0.593 0.593 0 0 0 300.231 20.509 C 300.243 20.557 300.256 20.606 300.256 20.655 A 0.298 0.298 0 0 1 300.256 20.66 A 0.325 0.325 0 0 1 300.22 20.806 C 300.204 20.838 300.182 20.87 300.156 20.902 A 0.729 0.729 0 0 1 300.11 20.953 A 0.162 0.162 0 0 1 300.065 21.009 C 300.013 21.05 299.939 21.05 299.866 21.05 C 299.748 21.089 299.693 21.066 299.651 21.004 A 0.434 0.434 0 0 1 299.622 20.953 C 299.579 20.91 299.574 20.83 299.638 20.712 A 0.733 0.733 0 0 1 299.67 20.66 C 299.713 20.574 299.793 20.489 299.845 20.403 A 0.502 0.502 0 0 0 299.866 20.367 A 0.852 0.852 0 0 0 299.867 20.366 C 299.942 20.328 299.988 20.291 300.027 20.276 A 0.094 0.094 0 0 1 300.061 20.269 Z M 429.652 59.251 A 0.088 0.088 0 0 0 429.602 59.234 C 429.573 59.234 429.527 59.251 429.474 59.275 A 3.643 3.643 0 0 0 429.358 59.331 C 429.26 59.429 429.211 59.527 429.26 59.624 C 429.3 59.704 429.34 59.751 429.432 59.792 A 0.8 0.8 0 0 0 429.504 59.82 A 0.399 0.399 0 0 0 429.52 59.835 C 429.613 59.918 429.705 59.92 429.797 59.966 L 429.944 59.966 A 0.092 0.092 0 0 0 429.945 59.965 C 429.953 59.957 429.988 59.917 429.944 59.917 A 0.089 0.089 0 0 0 429.937 59.884 C 429.93 59.868 429.92 59.853 429.908 59.837 A 0.825 0.825 0 0 0 429.846 59.771 A 0.19 0.19 0 0 1 429.834 59.758 C 429.823 59.744 429.816 59.731 429.81 59.718 A 0.237 0.237 0 0 1 429.797 59.624 A 0.37 0.37 0 0 0 429.791 59.561 C 429.781 59.501 429.759 59.444 429.751 59.405 A 0.131 0.131 0 0 1 429.749 59.38 A 0.63 0.63 0 0 0 429.718 59.325 C 429.696 59.291 429.674 59.266 429.652 59.251 Z M 61.78 55.132 A 0.383 0.383 0 0 0 61.776 55.124 C 61.728 55.035 61.679 55.035 61.584 55.035 A 1.794 1.794 0 0 0 61.52 55.035 C 61.465 55.037 61.403 55.044 61.346 55.066 A 0.294 0.294 0 0 0 61.243 55.132 A 2.14 2.14 0 0 0 61.17 55.17 A 0.382 0.382 0 0 0 60.999 55.328 C 60.964 55.396 60.954 55.465 60.968 55.517 A 0.122 0.122 0 0 0 60.999 55.572 C 61.036 55.609 61.074 55.647 61.134 55.662 A 0.242 0.242 0 0 0 61.194 55.669 A 0.373 0.373 0 0 0 61.299 55.653 A 1.184 1.184 0 0 0 61.487 55.572 A 0.553 0.553 0 0 0 61.623 55.472 A 0.56 0.56 0 0 0 61.731 55.328 C 61.78 55.23 61.78 55.181 61.78 55.132 Z M 10.657 31.451 C 10.706 31.451 10.754 31.548 10.852 31.695 C 10.901 31.841 10.95 31.988 10.95 32.085 A 0.8 0.8 0 0 1 10.922 32.158 C 10.881 32.25 10.834 32.29 10.754 32.329 C 10.709 32.375 10.621 32.378 10.53 32.299 A 0.387 0.387 0 0 1 10.51 32.281 A 0.29 0.29 0 0 1 10.47 32.229 C 10.451 32.198 10.434 32.161 10.424 32.122 A 0.336 0.336 0 0 1 10.413 32.037 C 10.413 31.89 10.413 31.792 10.461 31.695 A 0.576 0.576 0 0 1 10.496 31.612 C 10.548 31.513 10.618 31.451 10.657 31.451 Z M 24.323 40.461 A 0.739 0.739 0 0 0 24.084 40.435 C 24.027 40.435 23.976 40.443 23.931 40.455 A 0.979 0.979 0 0 0 23.743 40.533 A 0.274 0.274 0 0 0 23.731 40.539 C 23.656 40.581 23.612 40.653 23.6 40.703 A 0.11 0.11 0 0 0 23.596 40.728 A 0.269 0.269 0 0 0 23.597 40.753 C 23.605 40.834 23.649 40.879 23.694 40.923 A 1.373 1.373 0 0 0 23.839 40.918 C 23.871 40.915 23.904 40.91 23.94 40.901 A 1.002 1.002 0 0 0 24.036 40.874 A 1.593 1.593 0 0 0 24.125 40.842 A 0.704 0.704 0 0 0 24.377 40.679 A 0.812 0.812 0 0 0 24.387 40.674 C 24.467 40.633 24.511 40.593 24.522 40.584 A 0.111 0.111 0 0 0 24.524 40.581 C 24.524 40.533 24.475 40.484 24.377 40.484 A 0.41 0.41 0 0 0 24.323 40.461 Z M 302.176 16.693 A 0.075 0.075 0 0 0 302.161 16.704 A 0.143 0.143 0 0 1 302.159 16.723 C 302.153 16.771 302.127 16.867 302.116 16.993 A 1.232 1.232 0 0 0 302.112 17.095 A 13.702 13.702 0 0 0 302.112 17.238 C 302.113 17.334 302.117 17.41 302.127 17.473 A 0.39 0.39 0 0 0 302.161 17.583 C 302.204 17.67 302.247 17.68 302.324 17.647 A 0.565 0.565 0 0 0 302.356 17.632 A 0.131 0.131 0 0 0 302.367 17.62 C 302.391 17.589 302.413 17.537 302.43 17.475 A 0.742 0.742 0 0 0 302.454 17.29 C 302.454 17.144 302.405 16.997 302.356 16.851 A 3.205 3.205 0 0 0 302.351 16.843 C 302.266 16.717 302.219 16.667 302.176 16.693 Z M 78.102 23.754 A 3.406 3.406 0 0 1 78.103 23.754 A 3.29 3.29 0 0 0 78.101 23.755 A 1.969 1.969 0 0 1 78.056 23.779 C 78.008 23.804 77.967 23.816 77.908 23.792 A 0.245 0.245 0 0 1 77.893 23.785 A 0.052 0.052 0 0 1 77.863 23.773 C 77.826 23.746 77.795 23.677 77.795 23.638 A 0.739 0.739 0 0 1 77.822 23.4 A 0.41 0.41 0 0 1 77.844 23.345 A 0.56 0.56 0 0 1 77.952 23.201 A 0.553 0.553 0 0 1 78.088 23.101 A 0.171 0.171 0 0 1 78.122 23.075 C 78.14 23.063 78.159 23.058 78.178 23.055 A 0.381 0.381 0 0 1 78.235 23.052 C 78.287 23.026 78.339 23.042 78.384 23.077 A 0.367 0.367 0 0 1 78.479 23.199 A 0.45 0.45 0 0 1 78.439 23.368 A 1.875 1.875 0 0 1 78.381 23.492 A 0.56 0.56 0 0 1 78.274 23.636 A 0.553 0.553 0 0 1 78.137 23.736 M 182.092 17.583 A 0.148 0.148 0 0 0 182.07 17.611 C 182.047 17.648 182.051 17.691 182.082 17.758 A 0.69 0.69 0 0 0 182.092 17.779 L 182.336 18.023 A 1.184 1.184 0 0 0 182.524 18.104 A 0.373 0.373 0 0 0 182.629 18.121 A 2.238 2.238 0 0 0 182.725 18.099 C 182.899 18.057 182.964 18.009 182.922 17.925 C 182.876 17.879 182.743 17.789 182.48 17.656 A 7.013 7.013 0 0 0 182.434 17.632 C 182.291 17.585 182.149 17.583 182.096 17.583 A 4.983 4.983 0 0 0 182.092 17.583 Z M 336.584 49.908 C 336.487 49.908 336.389 49.956 336.389 50.005 A 0.507 0.507 0 0 0 336.373 50.04 C 336.342 50.117 336.353 50.17 336.438 50.298 C 336.487 50.395 336.584 50.493 336.633 50.542 A 1.822 1.822 0 0 1 336.633 50.542 C 336.708 50.617 336.754 50.635 336.793 50.639 A 0.327 0.327 0 0 0 336.829 50.64 C 336.877 50.64 336.925 50.64 336.926 50.548 A 0.28 0.28 0 0 0 336.926 50.542 A 0.148 0.148 0 0 0 336.962 50.473 C 336.969 50.448 336.972 50.42 336.973 50.39 A 1.738 1.738 0 0 0 336.975 50.298 C 336.975 50.164 336.975 50.112 336.9 50.029 A 0.661 0.661 0 0 0 336.877 50.005 A 1.184 1.184 0 0 0 336.69 49.924 A 0.373 0.373 0 0 0 336.584 49.908 Z M 465.588 49.908 C 465.491 49.908 465.393 49.956 465.393 50.005 A 0.507 0.507 0 0 0 465.377 50.04 C 465.346 50.117 465.356 50.17 465.442 50.298 C 465.49 50.395 465.587 50.493 465.636 50.542 A 1.822 1.822 0 0 1 465.637 50.542 C 465.712 50.617 465.758 50.635 465.797 50.639 A 0.327 0.327 0 0 0 465.833 50.64 C 465.88 50.64 465.928 50.64 465.93 50.548 A 0.28 0.28 0 0 0 465.93 50.542 A 0.148 0.148 0 0 0 465.966 50.473 C 465.973 50.448 465.976 50.42 465.977 50.39 A 1.738 1.738 0 0 0 465.979 50.298 C 465.979 50.164 465.979 50.112 465.904 50.029 A 0.661 0.661 0 0 0 465.881 50.005 A 1.184 1.184 0 0 0 465.694 49.924 A 0.373 0.373 0 0 0 465.588 49.908 Z M 377.217 21.413 A 9.208 9.208 0 0 1 377.216 21.411 A 8.977 8.977 0 0 0 377.217 21.414 A 6.163 6.163 0 0 1 377.248 21.505 C 377.278 21.596 377.294 21.677 377.258 21.783 C 377.258 21.914 377.258 22.006 377.187 22.095 A 0.369 0.369 0 0 1 377.161 22.124 C 377.12 22.207 377.079 22.185 377.037 22.147 A 0.835 0.835 0 0 1 377.014 22.124 C 376.965 22.027 376.965 21.88 376.965 21.685 A 1.578 1.578 0 0 1 376.971 21.548 C 376.982 21.421 377.008 21.331 377.038 21.28 A 0.163 0.163 0 0 1 377.063 21.246 A 0.078 0.078 0 0 1 377.077 21.234 C 377.115 21.211 377.153 21.246 377.191 21.34 A 0.911 0.911 0 0 1 377.209 21.392 C 377.21 21.394 377.211 21.395 377.211 21.397 A 2.411 2.411 0 0 0 377.212 21.399 A 5.801 5.801 0 0 0 377.212 21.4 A 2.307 2.307 0 0 0 377.213 21.402 A 2.257 2.257 0 0 0 377.213 21.404 A 2.76 2.76 0 0 0 377.214 21.405 A 2.16 2.16 0 0 0 377.214 21.407 A 9.963 9.963 0 0 0 377.215 21.408 Z M 58.655 62.31 A 0.129 0.129 0 0 0 58.613 62.318 C 58.558 62.338 58.474 62.393 58.362 62.505 A 1.735 1.735 0 0 1 58.36 62.509 C 58.295 62.605 58.23 62.681 58.18 62.749 A 0.69 0.69 0 0 0 58.118 62.847 C 58.118 62.922 58.118 62.997 58.14 63.05 A 0.126 0.126 0 0 0 58.167 63.091 A 0.52 0.52 0 0 0 58.202 63.108 C 58.272 63.136 58.318 63.129 58.391 63.061 A 0.689 0.689 0 0 0 58.411 63.042 A 0.208 0.208 0 0 0 58.442 62.998 C 58.48 62.931 58.519 62.816 58.557 62.701 A 2.386 2.386 0 0 0 58.594 62.601 C 58.655 62.429 58.655 62.352 58.655 62.31 Z M 76.819 38.531 A 0.072 0.072 0 0 0 76.779 38.542 C 76.756 38.558 76.751 38.588 76.803 38.62 A 0.231 0.231 0 0 0 76.819 38.628 C 76.857 38.705 76.925 38.721 77.022 38.725 A 2.445 2.445 0 0 0 77.112 38.726 C 77.255 38.726 77.351 38.726 77.491 38.681 A 1.131 1.131 0 0 0 77.502 38.677 C 77.795 38.531 77.698 38.482 77.258 38.482 A 6.847 6.847 0 0 0 77.105 38.483 C 76.984 38.486 76.889 38.496 76.819 38.531 Z M 188.116 21.465 A 0.279 0.279 0 0 0 188.143 21.392 A 0.256 0.256 0 0 0 188.147 21.343 A 0.37 0.37 0 0 0 188.141 21.28 C 188.13 21.219 188.109 21.163 188.101 21.124 A 0.131 0.131 0 0 1 188.098 21.099 L 188 21.001 A 0.094 0.094 0 0 0 187.966 21.008 C 187.927 21.024 187.881 21.061 187.807 21.098 A 0.852 0.852 0 0 1 187.805 21.099 A 0.442 0.442 0 0 0 187.764 21.15 C 187.74 21.182 187.714 21.22 187.682 21.262 A 0.923 0.923 0 0 1 187.61 21.343 A 0.69 0.69 0 0 0 187.597 21.371 C 187.567 21.437 187.562 21.482 187.561 21.545 A 3.091 3.091 0 0 0 187.561 21.587 C 187.599 21.625 187.637 21.663 187.697 21.678 A 0.242 0.242 0 0 0 187.756 21.685 C 187.903 21.685 187.952 21.636 188.049 21.587 A 0.987 0.987 0 0 1 188.072 21.545 C 188.086 21.52 188.1 21.497 188.111 21.475 M 129.501 27.84 A 0.136 0.136 0 0 0 129.504 27.838 A 0.234 0.234 0 0 1 129.55 27.841 C 129.651 27.861 129.651 27.958 129.651 28.13 A 2.391 2.391 0 0 1 129.65 28.185 C 129.644 28.442 129.596 28.573 129.504 28.619 A 0.058 0.058 0 0 1 129.462 28.636 C 129.419 28.636 129.36 28.592 129.299 28.493 A 0.915 0.915 0 0 1 129.26 28.423 C 129.218 28.339 129.212 28.291 129.243 28.217 A 0.565 0.565 0 0 1 129.26 28.179 L 129.407 27.886 C 129.449 27.886 129.49 27.85 129.501 27.84 Z M 233.505 27.84 A 0.136 0.136 0 0 0 233.508 27.838 A 0.234 0.234 0 0 1 233.553 27.841 C 233.655 27.861 233.655 27.958 233.655 28.13 A 2.391 2.391 0 0 1 233.654 28.185 C 233.648 28.442 233.6 28.573 233.508 28.619 A 0.058 0.058 0 0 1 233.466 28.636 C 233.422 28.636 233.364 28.592 233.303 28.493 A 0.915 0.915 0 0 1 233.264 28.423 C 233.222 28.339 233.216 28.291 233.247 28.217 A 0.565 0.565 0 0 1 233.264 28.179 L 233.411 27.886 C 233.452 27.886 233.494 27.85 233.505 27.84 Z M 76.624 29.888 A 1.229 1.229 0 0 0 76.577 29.843 C 76.543 29.813 76.51 29.79 76.477 29.79 A 0.089 0.089 0 0 0 76.443 29.798 C 76.428 29.804 76.412 29.814 76.397 29.826 A 0.825 0.825 0 0 0 76.331 29.888 A 0.291 0.291 0 0 0 76.245 29.954 A 0.775 0.775 0 0 0 76.135 30.132 A 0.69 0.69 0 0 0 76.122 30.16 C 76.093 30.226 76.088 30.271 76.087 30.334 A 3.091 3.091 0 0 0 76.086 30.376 A 0.126 0.126 0 0 0 76.127 30.403 C 76.18 30.425 76.255 30.425 76.331 30.425 C 76.404 30.425 76.477 30.425 76.53 30.384 A 0.162 0.162 0 0 0 76.575 30.328 C 76.612 30.29 76.65 30.252 76.665 30.192 A 0.242 0.242 0 0 0 76.672 30.132 A 0.37 0.37 0 0 0 76.666 30.069 C 76.656 30.008 76.634 29.952 76.626 29.913 A 0.131 0.131 0 0 1 76.624 29.888 Z M 10.618 46.772 A 4.558 4.558 0 0 0 10.608 46.783 A 0.29 0.29 0 0 0 10.568 46.834 C 10.549 46.865 10.532 46.902 10.522 46.942 A 0.336 0.336 0 0 0 10.51 47.027 A 3.834 3.834 0 0 0 10.511 47.086 C 10.512 47.178 10.519 47.289 10.559 47.369 C 10.648 47.592 10.697 47.57 10.742 47.265 A 4.193 4.193 0 0 0 10.754 47.173 C 10.754 46.978 10.754 46.845 10.729 46.774 A 0.108 0.108 0 0 0 10.706 46.734 C 10.66 46.734 10.657 46.734 10.618 46.772 Z M 434.174 62.115 C 434.16 62.106 434.15 62.097 434.146 62.083 A 0.055 0.055 0 0 1 434.143 62.066 C 434.094 62.066 434.094 62.017 434.094 62.017 L 434.045 61.968 L 433.997 61.968 L 433.997 61.919 L 433.997 61.968 L 433.948 61.919 C 433.899 61.919 433.899 61.871 433.85 61.871 A 0.823 0.823 0 0 0 433.843 61.864 C 433.809 61.83 433.775 61.803 433.74 61.779 A 1.422 1.422 0 0 0 433.557 61.675 A 0.987 0.987 0 0 1 433.515 61.653 C 433.49 61.638 433.467 61.625 433.445 61.613 M 433.435 61.608 A 0.279 0.279 0 0 0 433.361 61.582 A 0.256 0.256 0 0 0 433.313 61.578 L 433.264 61.578 C 433.215 61.675 433.264 61.773 433.362 61.871 A 0.869 0.869 0 0 0 433.398 61.905 C 433.458 61.958 433.517 61.997 433.577 62.045 A 0.958 0.958 0 0 1 433.655 62.115 C 433.697 62.136 433.73 62.148 433.758 62.158 A 1.151 1.151 0 0 0 433.758 62.158 M 36.717 72.544 A 0.918 0.918 0 0 1 36.731 72.515 C 36.731 72.434 36.697 72.387 36.658 72.317 A 1.02 1.02 0 0 1 36.633 72.271 C 36.584 72.222 36.487 72.173 36.389 72.173 A 0.109 0.109 0 0 0 36.372 72.175 C 36.32 72.183 36.238 72.222 36.194 72.222 A 0.212 0.212 0 0 1 36.177 72.237 C 36.169 72.243 36.162 72.248 36.155 72.253 A 1.198 1.198 0 0 1 36.134 72.266 M 36.265 72.554 A 1.346 1.346 0 0 1 36.264 72.553 C 36.297 72.594 36.336 72.635 36.389 72.662 C 36.487 72.71 36.536 72.71 36.584 72.71 C 36.666 72.67 36.679 72.629 36.71 72.56 M 36.127 72.271 C 36.113 72.28 36.103 72.289 36.099 72.303 A 0.055 0.055 0 0 0 36.096 72.32 A 0.089 0.089 0 0 0 36.103 72.354 C 36.11 72.369 36.12 72.384 36.132 72.4 A 0.825 0.825 0 0 0 36.194 72.466 C 36.214 72.487 36.235 72.516 36.259 72.546 A 0.948 0.948 0 0 1 36.259 72.546 M 48.92 80.19 A 1.479 1.479 0 0 1 48.921 80.19 A 1.555 1.555 0 0 1 48.923 80.189 A 1.595 1.595 0 0 1 48.924 80.188 A 1.637 1.637 0 0 1 48.925 80.188 A 1.726 1.726 0 0 1 48.927 80.187 A 1.772 1.772 0 0 1 48.928 80.186 A 0.936 0.936 0 0 1 48.929 80.186 A 0.959 0.959 0 0 0 48.929 80.186 M 32.876 65.994 C 32.876 65.995 32.876 65.997 32.876 65.998 M 319.06 59.685 C 319.061 59.686 319.061 59.688 319.062 59.689 M 32.232 62.04 C 32.232 62.038 32.232 62.037 32.231 62.036 M 286.926 35.699 C 286.926 35.7 286.925 35.701 286.925 35.702 M 316.32 43.011 C 316.319 43.009 316.319 43.008 316.319 43.007 M 323.046 62.295 C 323.046 62.297 323.047 62.298 323.048 62.299 M 64.841 50.8 C 64.843 50.799 64.844 50.799 64.845 50.798 M 104.978 40.448 C 104.979 40.448 104.98 40.447 104.982 40.446 M 208.982 40.448 C 208.983 40.448 208.984 40.447 208.986 40.446 M 64.847 50.797 C 64.848 50.796 64.849 50.795 64.85 50.795 M 104.984 40.445 C 104.985 40.445 104.986 40.444 104.987 40.443 M 208.988 40.445 C 208.989 40.445 208.99 40.444 208.991 40.443 M 113.342 65.777 C 113.343 65.776 113.345 65.776 113.346 65.776 M 217.346 65.777 C 217.347 65.776 217.348 65.776 217.35 65.776 M 78.127 23.741 A 1.772 1.772 0 0 0 78.126 23.741 A 0.936 0.936 0 0 1 78.128 23.74 A 0.959 0.959 0 0 0 78.128 23.74 Z M 301.587 18.978 C 301.587 18.977 301.587 18.976 301.587 18.975 M 78.119 23.745 C 78.119 23.745 78.118 23.746 78.117 23.746 M 323.048 62.299 A 0.682 0.682 0 0 0 323.048 62.3 A 0.794 0.794 0 0 1 323.048 62.3 Z M 104.982 40.446 A 0.682 0.682 0 0 0 104.983 40.446 A 0.794 0.794 0 0 1 104.983 40.446 Z M 208.986 40.446 A 0.682 0.682 0 0 0 208.987 40.446 A 0.794 0.794 0 0 1 208.987 40.446 Z M 64.845 50.798 A 0.682 0.682 0 0 0 64.846 50.797 A 0.794 0.794 0 0 1 64.846 50.797 Z M 48.938 80.181 C 48.937 80.181 48.936 80.182 48.936 80.182 M 78.137 23.736 C 78.136 23.736 78.136 23.736 78.135 23.737 M 323.049 62.301 A 0.658 0.658 0 0 0 323.05 62.302 A 0.767 0.767 0 0 1 323.05 62.302 Z M 64.853 50.794 A 1.093 1.093 0 0 0 64.854 50.793 A 0.831 0.831 0 0 1 64.854 50.793 Z M 104.989 40.442 A 1.093 1.093 0 0 0 104.99 40.442 A 0.831 0.831 0 0 1 104.99 40.442 Z M 208.993 40.442 A 1.093 1.093 0 0 0 208.994 40.442 A 0.831 0.831 0 0 1 208.994 40.442 Z M 323.052 62.307 A 1.093 1.093 0 0 0 323.052 62.308 A 0.831 0.831 0 0 1 323.052 62.308 Z M 78.123 23.743 A 1.595 1.595 0 0 0 78.122 23.743 A 1.555 1.555 0 0 1 78.122 23.743 Z M 433.763 62.16 A 1.207 1.207 0 0 0 433.762 62.16 A 1.684 1.684 0 0 1 433.762 62.16 Z M 78.121 23.744 C 78.121 23.744 78.12 23.745 78.119 23.745 M 433.761 62.16 C 433.76 62.159 433.76 62.159 433.759 62.159 M 32.233 62.042 C 32.233 62.041 32.232 62.04 32.232 62.04 M 32.231 62.036 C 32.231 62.035 32.231 62.034 32.231 62.034 M 78.117 23.746 A 2.539 2.539 0 0 0 78.116 23.747 A 1.308 1.308 0 0 1 78.116 23.747 Z M 377.215 21.408 C 377.215 21.409 377.215 21.409 377.216 21.41 M 377.216 21.41 C 377.216 21.41 377.216 21.411 377.216 21.411 M 377.217 21.414 C 377.217 21.415 377.217 21.415 377.218 21.416 M 50.498 81.354 C 50.498 81.354 50.497 81.355 50.497 81.355 M 64.85 50.795 C 64.851 50.795 64.851 50.794 64.852 50.794 M 104.987 40.443 C 104.988 40.443 104.988 40.443 104.988 40.443 M 208.991 40.443 C 208.991 40.443 208.992 40.443 208.992 40.443 M 323.051 62.304 C 323.051 62.305 323.051 62.305 323.051 62.306 M 323.051 62.306 C 323.051 62.306 323.052 62.306 323.052 62.307 M 64.852 50.794 C 64.852 50.794 64.852 50.794 64.853 50.794 M 104.988 40.443 C 104.989 40.443 104.989 40.442 104.989 40.442 M 208.992 40.443 C 208.993 40.443 208.993 40.442 208.993 40.442 M 48.931 80.184 C 48.931 80.185 48.931 80.185 48.93 80.185 M 78.131 23.739 C 78.13 23.739 78.13 23.739 78.129 23.74 M 323.053 62.309 C 323.053 62.309 323.053 62.309 323.054 62.31 M 64.855 50.793 C 64.855 50.792 64.855 50.792 64.856 50.792 M 104.991 40.441 C 104.992 40.441 104.992 40.441 104.992 40.44 M 208.995 40.441 C 208.996 40.441 208.996 40.441 208.996 40.44 M 48.926 80.187 C 48.926 80.187 48.925 80.187 48.925 80.188 M 78.124 23.742 C 78.124 23.742 78.124 23.743 78.123 23.743 M 48.922 80.189 C 48.922 80.189 48.922 80.189 48.921 80.19 M 48.916 80.193 C 48.915 80.193 48.915 80.193 48.915 80.193 M 48.919 80.191 C 48.919 80.191 48.919 80.191 48.919 80.191 M 78.125 23.742 C 78.125 23.742 78.125 23.742 78.125 23.742 M 113.363 65.77 C 113.363 65.77 113.363 65.77 113.363 65.77 M 135.886 35.582 C 135.886 35.582 135.886 35.582 135.886 35.582 M 217.367 65.77 C 217.367 65.77 217.367 65.77 217.367 65.77 M 239.889 35.582 C 239.889 35.582 239.889 35.582 239.889 35.582 M 32.88 66.044 A 89.878 89.878 0 0 1 32.88 66.04 M 32.238 62.061 A 4.669 4.669 0 0 1 32.238 62.064 M 32.234 62.046 A 4.846 4.846 0 0 1 32.234 62.048 M 48.916 80.193 A 1.308 1.308 0 0 1 48.917 80.192 M 64.844 50.799 A 0.623 0.623 0 0 1 64.843 50.799 M 64.849 50.795 A 0.767 0.767 0 0 1 64.848 50.796 M 64.857 50.791 A 1.039 1.039 0 0 1 64.856 50.792 M 78.118 23.746 A 0.742 0.742 0 0 1 78.119 23.745 M 78.114 23.748 A 0.904 0.904 0 0 1 78.115 23.747 M 104.98 40.447 A 0.623 0.623 0 0 1 104.979 40.448 M 104.986 40.444 A 0.767 0.767 0 0 1 104.985 40.445 M 104.993 40.44 A 1.039 1.039 0 0 1 104.992 40.44 M 208.984 40.447 A 0.623 0.623 0 0 1 208.983 40.448 M 208.99 40.444 A 0.767 0.767 0 0 1 208.989 40.445 M 208.997 40.44 A 1.039 1.039 0 0 1 208.996 40.44 M 323.047 62.298 A 0.623 0.623 0 0 1 323.046 62.297 M 323.051 62.304 A 0.635 0.635 0 0 1 323.05 62.303 M 323.054 62.311 A 1.039 1.039 0 0 1 323.054 62.31 M 377.211 21.395 A 2.522 2.522 0 0 1 377.21 21.394" vector-effect="non-scaling-stroke"></path></g></svg></figure></div></div><ul class="mt-4 h-full w-full text-white"><li class="mx-4 mt-4 md:mt-8"><h3 class="font-secondary text-3xl md:text-5xl">Truy\u1EC7n tranh</h3></li><li class="flex flex-wrap"><button class="absolute-center bg-hight-light ml-4 mt-4 w-fit rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?comics=manga-112">Manga</a></button><button class="absolute-center bg-hight-light ml-4 mt-4 w-fit rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?comics=manhua">Manhua</a></button><button class="absolute-center bg-hight-light ml-4 mt-4 w-fit rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?comics=manhwa-11400">Manhwa</a></button><button class="absolute-center bg-hight-light ml-4 mt-4 w-fit rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?comics=doujinshi">Doujinshi</a></button></li><li class="mx-4 mt-4 border-t-[2px] border-highlight pt-4 md:mt-8"><h3 class="font-secondary text-3xl md:text-5xl">Th\u1EC3 lo\u1EA1i</h3></li><li class="grid grid-cols-2"><button class="hover:bg-hight-light ml-4 mt-4 flex w-full items-center rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?genres=action">Action</a></button><button class="hover:bg-hight-light ml-4 mt-4 flex w-full items-center rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?genres=adventure">Adventure</a></button><button class="hover:bg-hight-light ml-4 mt-4 flex w-full items-center rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?genres=comedy-99">Comedy</a></button><button class="hover:bg-hight-light ml-4 mt-4 flex w-full items-center rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?genres=horror">Horror</a></button><button class="hover:bg-hight-light ml-4 mt-4 flex w-full items-center rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?genres=romance-121">Romance</a></button><button class="hover:bg-hight-light ml-4 mt-4 flex w-full items-center rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?genres=shoujo">Shoujo</a></button><button class="hover:bg-hight-light ml-4 mt-4 flex w-full items-center rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?genres=slice-of-life">Slice of Life</a></button><button class="hover:bg-hight-light ml-4 mt-4 flex w-full items-center rounded-xl py-2 px-4 md:mt-6"><a class="text-xl md:text-3xl" href="/browse?genres=drama-103">Drama</a></button><button class="hover:bg-hight-light ml-4 mt-4 flex w-full items-center rounded-xl py-2 px-4 md:mt-6"><a class="flex items-center text-xl md:text-3xl" href="/browse"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="mr-2 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg> Xem th\xEAm</a></button></li><li class="mx-4 mt-4 border-t-[2px] border-highlight pt-4 md:mt-8"><h3 class="font-secondary text-3xl md:text-5xl"><a class="flex items-center" href="/browse?view=newComic">M\u1EDBi c\u1EADp nh\u1EADt <button class="absolute-center h-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="ml-2 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></button></a></h3></li><li class="mx-4 mt-4 border-t-[2px] border-highlight pt-4 md:mt-8"><h3 class="font-secondary text-3xl md:text-5xl"><a class="flex items-center" href="/browse?view=all">B\u1EA3ng x\u1EBFp h\u1EA1ng <button class="absolute-center h-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="ml-2 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></button></a></h3></li></ul></div></aside></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSidebar.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1_lazy$1 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtLink;
}));
const __nuxt_component_2_lazy = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return TheNav;
}));
const __nuxt_component_3_lazy = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return MangaSearch;
}));
const _sfc_main$a = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheSidebar = _sfc_main$b;
      const _component_LazyNuxtLink = __nuxt_component_1_lazy$1;
      const _component_LazyTheNav = __nuxt_component_2_lazy;
      const _component_LazyModalMangaSearch = __nuxt_component_3_lazy;
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ve), vue_cjs_prod.mergeProps({ class: "relative h-40" }, _attrs), {
        default: vue_cjs_prod.withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-56efbf20${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Le), null, {
              default: vue_cjs_prod.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_TheSidebar, { close }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_TheSidebar, { close }, null, 8, ["close"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><header class="w-full max-w-[1400px] h-40 absolute ranking-[-10px] z-50 left-1/2 -translate-x-1/2 bg-transparent" data-v-56efbf20${_scopeId}><div class="mx-auto flex h-full w-full items-center md:max-w-[644px] lg:max-w-[1200px]" data-v-56efbf20${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ke), { class: "outline-0 button mx-6 rounded-full p-4 md:m-0 lg:hidden" }, {
              default: vue_cjs_prod.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-4xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-56efbf20${_scopeId2}><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-v-56efbf20${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                      stroke: "currentColor",
                      fill: "currentColor",
                      "stroke-width": "0",
                      viewBox: "0 0 20 20",
                      class: "text-4xl text-white",
                      height: "1em",
                      width: "1em",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      vue_cjs_prod.createVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
                        "clip-rule": "evenodd"
                      })
                    ]))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="relative flex h-full w-56 items-center md:w-80 md:px-6 lg:px-0 lg:pl-6" data-v-56efbf20${_scopeId}><figure class="absolute z-10 text-3xl font-semibold text-white md:text-5xl" data-v-56efbf20${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
              to: "/",
              style: { "font-family": "cursive" }
            }, {
              default: vue_cjs_prod.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Next Truyen `);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(" Next Truyen ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</figure><div class="absolute left-10 top-auto z-0" data-v-56efbf20${_scopeId}></div></div>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyTheNav, null, null, _parent2, _scopeId));
            _push2(`<div class="ml-10 flex h-full flex-1 items-center justify-end md:justify-between lg:ml-0" data-v-56efbf20${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_LazyModalMangaSearch, null, null, _parent2, _scopeId));
            _push2(`</div></div></header>`);
          } else {
            return [
              vue_cjs_prod.createVNode(vue_cjs_prod.Transition, {
                "enter-active-class": "transition duration-200 ease-out",
                "enter-from-class": "translate-y-1 opacity-0",
                "enter-to-class": "translate-y-0 opacity-100",
                "leave-active-class": "transition duration-150 ease-in",
                "leave-from-class": "translate-y-0 opacity-100",
                "leave-to-class": "translate-y-1 opacity-0"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode("div", null, [
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(Le), null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_TheSidebar, { close }, null, 8, ["close"])
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ]),
                _: 2
              }, 1024),
              vue_cjs_prod.createVNode("header", { class: "w-full max-w-[1400px] h-40 absolute ranking-[-10px] z-50 left-1/2 -translate-x-1/2 bg-transparent" }, [
                vue_cjs_prod.createVNode("div", { class: "mx-auto flex h-full w-full items-center md:max-w-[644px] lg:max-w-[1200px]" }, [
                  vue_cjs_prod.createVNode(vue_cjs_prod.unref(ke), { class: "outline-0 button mx-6 rounded-full p-4 md:m-0 lg:hidden" }, {
                    default: vue_cjs_prod.withCtx(() => [
                      (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                        stroke: "currentColor",
                        fill: "currentColor",
                        "stroke-width": "0",
                        viewBox: "0 0 20 20",
                        class: "text-4xl text-white",
                        height: "1em",
                        width: "1em",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        vue_cjs_prod.createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
                          "clip-rule": "evenodd"
                        })
                      ]))
                    ]),
                    _: 1
                  }),
                  vue_cjs_prod.createVNode("div", { class: "relative flex h-full w-56 items-center md:w-80 md:px-6 lg:px-0 lg:pl-6" }, [
                    vue_cjs_prod.createVNode("figure", { class: "absolute z-10 text-3xl font-semibold text-white md:text-5xl" }, [
                      vue_cjs_prod.createVNode(_component_LazyNuxtLink, {
                        to: "/",
                        style: { "font-family": "cursive" }
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createTextVNode(" Next Truyen ")
                        ]),
                        _: 1
                      })
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "absolute left-10 top-auto z-0" })
                  ]),
                  vue_cjs_prod.createVNode(_component_LazyTheNav),
                  vue_cjs_prod.createVNode("div", { class: "ml-10 flex h-full flex-1 items-center justify-end md:justify-between lg:ml-0" }, [
                    vue_cjs_prod.createVNode(_component_LazyModalMangaSearch)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-56efbf20"]]);
const TheHeader$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": TheHeader
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "my-6 pb-6 text-white" }, _attrs))}><div class="mx-auto flex w-[70%] flex-col justify-center space-y-4 text-lg md:text-2xl"><h1 class="text-center text-2xl font-bold md:text-4xl">Next Truyen l\xE0 website \u0111\u1ECDc truy\u1EC7n tranh mi\u1EC5n ph\xED</h1><div class="flex flex-col items-center justify-center gap-4 md:flex-row md:space-x-8 md:text-2xl"><a class="hover:text-primary" href="/terms-of-service">\u0110i\u1EC1u kho\u1EA3n d\u1ECBch v\u1EE5</a><a class="hover:text-primary" href="/privacy-policy">Ch\xEDnh s\xE1ch ri\xEAng t\u01B0</a><a class="hover:text-primary" href="/dmca">DMCA</a><a class="hover:text-primary" href="/contact">Li\xEAn h\u1EC7</a></div></div><div class="my-4 mx-auto w-[70%] space-y-4 lg:w-1/2"><p class="text-center text-lg text-white/40 md:text-2xl">Kyoto Manga kh\xF4ng l\u01B0u tr\u1EEF b\u1EA5t k\xEC t\u1EC7p tin n\xE0o tr\xEAn m\xE1y ch\u1EE7, ch\xFAng t\xF4i ch\u1EC9 li\xEAn k\u1EBFt t\u1EDBi nh\u1EEFng ph\u01B0\u01A1ng ti\u1EC7n truy\u1EC1n th\xF4ng \u0111\u01B0\u1EE3c l\u01B0u tr\u1EEF b\xEAn d\u1ECBch v\u1EE5 th\u1EE9 3.</p><p class="text-center text-lg text-white/40 md:text-2xl">Next Truyen does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</p></div></footer>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]);
const TheFooter$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": TheFooter
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_0_lazy$4 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtLink;
}));
const _sfc_main$8 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "SwiperCardContent",
  __ssrInlineRender: true,
  props: {
    spotlight: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyNuxtLink = __nuxt_component_0_lazy$4;
      _push(`<!--[-->`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
        to: vue_cjs_prod.unref(useMangaDetailPagePath)(__props.spotlight.slug)
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="mx-4 mt-6 text-xl md:text-4xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(__props.spotlight.newChapter)}</h3>`);
          } else {
            return [
              vue_cjs_prod.createVNode("h3", { class: "mx-4 mt-6 text-xl md:text-4xl" }, vue_cjs_prod.toDisplayString(__props.spotlight.newChapter), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
        to: vue_cjs_prod.unref(useMangaDetailPagePath)(__props.spotlight.slug)
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-3xl transition-all line-clamp-1 hover:text-primary md:min-h-[30px] md:text-6xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(__props.spotlight.name)}</h1>`);
          } else {
            return [
              vue_cjs_prod.createVNode("h1", { class: "text-3xl transition-all line-clamp-1 hover:text-primary md:min-h-[30px] md:text-6xl" }, vue_cjs_prod.toDisplayString(__props.spotlight.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
        to: vue_cjs_prod.unref(useMangaDetailPagePath)(__props.spotlight.slug)
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-sm line-clamp-3 lg:min-h-[150px] md:text-2xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(__props.spotlight.review ? __props.spotlight.review : "")}</div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "text-sm line-clamp-3 lg:min-h-[150px] md:text-2xl" }, vue_cjs_prod.toDisplayString(__props.spotlight.review ? __props.spotlight.review : ""), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="hidden space-x-4 text-lg md:flex"><!--[-->`);
      serverRenderer.exports.ssrRenderList(__props.spotlight.genres, (genre, i) => {
        _push(`<li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">${serverRenderer.exports.ssrInterpolate(genre)}</li>`);
      });
      _push(`<!--]--></ul><!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/SwiperCardContent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SwiperCardContent = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_0_lazy$3 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtLink;
}));
const _sfc_main$7 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "SwiperCardButton",
  __ssrInlineRender: true,
  props: {
    spotlight: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyNuxtLink = __nuxt_component_0_lazy$3;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex space-x-6 text-xl md:text-2xl lg:pt-6" }, _attrs))}><button class="absolute-center rounded-xl bg-primary py-3 px-5 transition-all hover:scale-110 md:w-[100px]"> \u0110\u1ECDc ngay </button>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
        to: vue_cjs_prod.unref(useMangaDetailPagePath)(__props.spotlight.slug)
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="absolute-center rounded-xl bg-white py-3 px-5 text-gray-800 transition-all hover:scale-110 md:w-[100px]"${_scopeId}> Chi ti\u1EBFt </button>`);
          } else {
            return [
              vue_cjs_prod.createVNode("button", { class: "absolute-center rounded-xl bg-white py-3 px-5 text-gray-800 transition-all hover:scale-110 md:w-[100px]" }, " Chi ti\u1EBFt ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/SwiperCardButton.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const SwiperCardButton = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "SwiperCard",
  __ssrInlineRender: true,
  props: {
    spotlight: Object
  },
  setup(__props) {
    useState("triggerEffect", () => false);
    useSwiper();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "aspect-[3/4] 0 absolute-center absolute top-1/2 right-[5%] md:right-[10%] z-10 flex h-[80%] w-[170px] -translate-y-1/2 items-center md:w-[220px] lg:w-[270px]" }, _attrs))}><div class="relative h-full w-[90%] overflow-hidden rounded-2xl"><span class="default-span-figure"><img alt="image-preview" sizes="100vw"${serverRenderer.exports.ssrRenderAttr("srcset", __props.spotlight.thumbnail)}${serverRenderer.exports.ssrRenderAttr("src", __props.spotlight.thumbnail)} decoding="async" data-nimg="fill" class="absolute inset-0 object-cover object-center default-img"></span></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/SwiperCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SwiperCard = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_0_lazy$2 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtLink;
}));
const _sfc_main$5 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "RankList",
  __ssrInlineRender: true,
  props: {
    title: String,
    mangas: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyNuxtLink = __nuxt_component_0_lazy$2;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "w-full rounded-xl bg-deep-black pb-4 lg:my-4" }, _attrs))}><h2 class="my-6 whitespace-nowrap text-center font-secondary text-3xl text-white lg:text-[160%]">${serverRenderer.exports.ssrInterpolate(__props.title)}</h2><ul class="w-full space-y-4 overflow-hidden text-white"><!--[-->`);
      serverRenderer.exports.ssrRenderList(__props.mangas.slice(0, 12), (manga) => {
        _push(`<li class="flex w-full px-4 py-2 odd:bg-highlight/40">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
          to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<figure class="relative h-[80px] min-h-[80px] w-[60px] min-w-[60px] overflow-hidden rounded-xl"${_scopeId}><span class="default-span-figure"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_nuxt_img, {
                format: "webp",
                loading: "lazy",
                src: manga.thumbnail,
                class: "aspect-w-3 aspect-h-4 absolute object-cover object-center default-img",
                sizes: "sm:100vw md:100vw lg:100vw",
                srcset: manga.thumbnail
              }, null, _parent2, _scopeId));
              _push2(`</span></figure>`);
            } else {
              return [
                vue_cjs_prod.createVNode("figure", { class: "relative h-[80px] min-h-[80px] w-[60px] min-w-[60px] overflow-hidden rounded-xl" }, [
                  vue_cjs_prod.createVNode("span", { class: "default-span-figure" }, [
                    vue_cjs_prod.createVNode(_component_nuxt_img, {
                      format: "webp",
                      loading: "lazy",
                      src: manga.thumbnail,
                      class: "aspect-w-3 aspect-h-4 absolute object-cover object-center default-img",
                      sizes: "sm:100vw md:100vw lg:100vw",
                      srcset: manga.thumbnail
                    }, null, 8, ["src", "srcset"])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex w-full flex-col justify-center space-y-2 pl-4">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
          to: vue_cjs_prod.unref(useMangaDetailPagePath)(manga.slug)
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(manga.name)}</h3>`);
            } else {
              return [
                vue_cjs_prod.createVNode("h3", { class: "font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl" }, vue_cjs_prod.toDisplayString(manga.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<h4 class="text-lg">${serverRenderer.exports.ssrInterpolate(manga.newChapter)}</h4><div class="flex align-center">`);
        _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$9), {
          class: "h-6 w-5 mr-2",
          style: { "margin-top": "1px" }
        }, null, _parent));
        _push(`<h4 class="text-lg">${serverRenderer.exports.ssrInterpolate(manga.view)}</h4></div><ul class="hidden space-x-4 text-lg md:flex"><!--[-->`);
        serverRenderer.exports.ssrRenderList(manga.genres.slice(0, 4), (genre, i) => {
          _push(`<li class="flex w-fit max-w-[70px] items-center whitespace-nowrap" style="${serverRenderer.exports.ssrRenderStyle({ "color": vue_cjs_prod.unref(randomColors)(vue_cjs_prod.unref(TailwindColors), i) })}">${serverRenderer.exports.ssrInterpolate(genre)}</li>`);
        });
        _push(`<!--]--></ul></div></li>`);
      });
      _push(`<!--]--><li class="flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight"><button class="lg:text-3xl"><a href="/browse?comics=api-112&amp;view=all">Xem th\xEAm</a></button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-8 w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></li></ul></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manga/Section/RankList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const RankList = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "ChapterImg",
  __ssrInlineRender: true,
  props: {
    chapters: Array
  },
  setup(__props) {
    const config = useRuntimeConfig();
    const publicAPI = config.public.NUXT_PUBLIC_SERVICE_URL;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "pt-24 mx-auto w-full lg:w-[60%]" }, _attrs))}><!--[-->`);
      serverRenderer.exports.ssrRenderList(__props.chapters, (chap, index2) => {
        _push(`<div class="relative my-0 h-fit w-full"><img alt="chapter-img" class="h-auto comic-img mx-auto w-auto"${serverRenderer.exports.ssrRenderAttr("src", `${vue_cjs_prod.unref(publicAPI)}/api/proxy?url=http://www.nettruyenco.com&src=${chap == null ? void 0 : chap.imgSrc}`)}></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manga/ChapterImg.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ChapterImg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "ReadMangaFooter",
  __ssrInlineRender: true,
  emits: ["nextProcess"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "h-[200px] w-full overflow-hidden py-4" }, _attrs))}><div class="mx-auto flex h-full w-full flex-col space-y-4 md:w-1/2"><div class="flex h-full w-full gap-4"><button data-id="prev" class="absolute-center z-[700] h-full w-[20%] border-2 border-dashed border-white/40 px-2 text-white/40 transition-all hover:border-white hover:text-white md:gap-2">`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$f), { className: "inline h-8 w-8" }, null, _parent));
      _push(` Chapter tr\u01B0\u1EDBc </button><button data-id="next" class="absolute-center h-full w-[80%] gap-2 border-2 border-dashed border-white/40 text-white/40 transition-all hover:border-white hover:text-white"> Chapter k\u1EBF ti\u1EBFp `);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$d), { className: "inline-block h-8 w-8" }, null, _parent));
      _push(`</button></div><h1 class="py-4 px-2 text-center text-white/75"> M\u1EB9o: B\u1EA1n c\xF3 th\u1EC3 double tap/click v\xE0o 2 c\u1EA1nh c\u1EE7a m\xE0n h\xECnh \u0111\u1EC3 chuy\u1EC3n chap \u1EDF b\u1EA5t c\u1EE9 v\u1ECB tr\xED n\xE0o \u1EDF ch\u1EBF \u0111\u1ED9 d\u1ECDc!</h1></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manga/ReadMangaFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ReadMangaFooter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "TheNav",
  __ssrInlineRender: true,
  setup(__props) {
    const genreTars = vue_cjs_prod.ref(null);
    const mangaTars = vue_cjs_prod.ref(null);
    const openGenresPreview = useState("openGenresPreview", () => false);
    const openMangaTypes = useState("openMangaTypes", () => false);
    onClickOutside(genreTars, (event) => openGenresPreview.value = false);
    onClickOutside(mangaTars, (event) => openMangaTypes.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${serverRenderer.exports.ssrRenderAttrs(_attrs)}><ul class="ml-32 hidden h-full w-fit items-center space-x-10 font-secondary text-3xl text-white lg:flex"><li class="relative transition-all"><button class="${serverRenderer.exports.ssrRenderClass([{ "text-primary": vue_cjs_prod.unref(openGenresPreview) }, "flex items-center"])}"> Th\u1EC3 lo\u1EA1i `);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$c), { class: "h-6 w-6" }, null, _parent));
      _push(`</button><div style="${serverRenderer.exports.ssrRenderStyle(vue_cjs_prod.unref(openGenresPreview) ? null : { display: "none" })}"><ul class="animate__animated animate__fadeIn animate__faster absolute top-full left-1/2 z-50 flex h-fit w-fit -translate-x-1/2 flex-col flex-nowrap items-center justify-evenly rounded-2xl bg-secondary py-4 transition-all"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(MangaGenresPreview), (genre) => {
        _push(`<li class="hover:text-primary">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: genre.href,
          class: "absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300"
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.exports.ssrInterpolate(genre.title)}`);
            } else {
              return [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(genre.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></li><li class="relative transition-all"><button class="flex items-center"> Truy\u1EC7n tranh `);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$c), { class: "h-6 w-6" }, null, _parent));
      _push(`</button><div style="${serverRenderer.exports.ssrRenderStyle(vue_cjs_prod.unref(openMangaTypes) ? null : { display: "none" })}"><ul class="animate__animated animate__fadeIn animate__faster absolute top-full left-1/2 z-50 flex h-fit w-fit -translate-x-1/2 flex-col flex-nowrap items-center justify-evenly rounded-2xl bg-secondary py-4 transition-all"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(MangaTypesPreview), (genre) => {
        _push(`<li class="hover:text-primary">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: genre.href,
          class: "absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300"
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.exports.ssrInterpolate(genre.title)}`);
            } else {
              return [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(genre.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></li><li class="transition-all hover:text-primary"><a href="/browse?view=newComic">M\u1EDBi c\u1EADp nh\u1EADt</a></li><li class="transition-all hover:text-primary"><a href="/browse?view=all">B\u1EA3ng x\u1EBFp h\u1EA1ng</a></li></ul></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheNav = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_0_lazy$1 = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return SearchLoading;
}));
const __nuxt_component_1_lazy = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return SearchResult;
}));
const _sfc_main$1 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "MangaSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const refInput = vue_cjs_prod.ref("");
    const debounced = useDebounce(refInput, 300);
    const shouldShow = vue_cjs_prod.ref(false);
    const close = () => {
      shouldShow.value = false;
    };
    const searchData = vue_cjs_prod.ref({});
    const hasResult = vue_cjs_prod.ref(true);
    const loading = vue_cjs_prod.ref(false);
    const clearInput = () => {
      refInput.value = "";
      searchData.value = {};
    };
    vue_cjs_prod.watch([refInput], async () => {
      try {
        hasResult.value = true;
        loading.value = true;
        const mangas = await $fetch(`${config.public.NUXT_PUBLIC_SERVICE_URL}/api/nt/search`, {
          params: {
            q: debounced.value
          }
        });
        searchData.value = mangas;
        loading.value = false;
      } catch (e) {
        hasResult.value = false;
        loading.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyCommonSearchLoading = __nuxt_component_0_lazy$1;
      const _component_LazyModalSearchResult = __nuxt_component_1_lazy;
      _push(`<!--[--><form class="ml-16 flex h-[40%] w-fit items-center justify-between rounded-2xl lg:w-[68%]"><button class="mx-4 hidden rounded-xl bg-rose-300 px-2 py-1 text-rose-600 transition-all hover:bg-rose-500 hover:text-white/80 md:block"></button><input class="hidden w-[80%] bg-transparent md:block" placeholder="T\xECm truy\u1EC7n..."><div class="h-full w-fit rounded-2xl p-4 hover:cursor-pointer hover:opacity-60 text-background">`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$8), { class: "w-8 h-8 text-white" }, null, _parent));
      _push(`</div></form><div class="absolute-center h-full w-40"><div class="relative"><button class="absolute-center h-20 w-20 overflow-hidden rounded-full bg-secondary bg-cover bg-no-repeat text-white hover:bg-white/10">`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$6), { class: "w-12 h-12" }, null, _parent));
      _push(`</button></div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(fe), {
        appear: "",
        show: shouldShow.value,
        as: "template"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Ae), {
              as: "div",
              onClose: close,
              class: "relative z-10"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(oe), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-100"${_scopeId3}></div>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-100" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full justify-center p-4 text-center"${_scopeId2}>`);
                  _push3(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(oe), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(Le$1), { class: "fixed top-[10%] left-0 right-0 overflow-y-auto" }, {
                          default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId4}><div class="max-h-[70vh] w-[85%] transform overflow-x-hidden overflow-y-scroll rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all md:w-[75%] lg:max-h-[85vh] opacity-100 scale-100"${_scopeId4}><div class="flex items-center justify-between"${_scopeId4}><h3 class="my-4 mx-2 font-secondary text-4xl leading-6 text-white md:text-6xl"${_scopeId4}> T\xECm Truy\u1EC7n </h3><button class="button rounded-full p-4 text-white md:mr-6"${_scopeId4}>`);
                              _push5(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render), { class: "h-8 w-8" }, null, _parent5, _scopeId4));
                              _push5(`</button></div><div class="my-10 flex h-[60px] items-center rounded-xl bg-secondary py-4 text-white"${_scopeId4}>`);
                              _push5(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$8), { class: "h-10 w-10 ml-4" }, null, _parent5, _scopeId4));
                              _push5(`<input autofocus type="text" class="w-full bg-transparent p-4"${serverRenderer.exports.ssrRenderAttr("value", refInput.value)}${_scopeId4}>`);
                              if (refInput.value.length > 0) {
                                _push5(`<button class="absolute-center m-4 h-10 w-10 rounded-lg bg-primary text-white hover:opacity-60 md:h-14 md:w-14 md:rounded-xl"${_scopeId4}>`);
                                _push5(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render), { class: "h-10 w-10" }, null, _parent5, _scopeId4));
                                _push5(`</button>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div>`);
                              if (!hasResult.value && !loading.value && refInput.value.length > 0) {
                                _push5(`<div class="absolute-center mx-auto my-4 w-3/4 rounded-xl bg-secondary py-4 text-white"${_scopeId4}><p class="mr-4 whitespace-nowrap text-base md:text-2xl"${_scopeId4}> Truy\u1EC7n b\u1EA1n c\u1EA7n t\xECm ch\u01B0a c\xF3!</p>`);
                                _push5(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(render$2), { class: "h-10 w-10" }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (loading.value) {
                                _push5(serverRenderer.exports.ssrRenderComponent(_component_LazyCommonSearchLoading, { "class-name": "h-20 w-20" }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (hasResult.value) {
                                _push5(serverRenderer.exports.ssrRenderComponent(_component_LazyModalSearchResult, {
                                  onCloseSearchModal: close,
                                  searchData: searchData.value
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div></div>`);
                            } else {
                              return [
                                vue_cjs_prod.createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                                  vue_cjs_prod.createVNode("div", { class: "max-h-[70vh] w-[85%] transform overflow-x-hidden overflow-y-scroll rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all md:w-[75%] lg:max-h-[85vh] opacity-100 scale-100" }, [
                                    vue_cjs_prod.createVNode("div", { class: "flex items-center justify-between" }, [
                                      vue_cjs_prod.createVNode("h3", { class: "my-4 mx-2 font-secondary text-4xl leading-6 text-white md:text-6xl" }, " T\xECm Truy\u1EC7n "),
                                      vue_cjs_prod.createVNode("button", {
                                        onClick: close,
                                        class: "button rounded-full p-4 text-white md:mr-6"
                                      }, [
                                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(render), { class: "h-8 w-8" })
                                      ])
                                    ]),
                                    vue_cjs_prod.createVNode("div", { class: "my-10 flex h-[60px] items-center rounded-xl bg-secondary py-4 text-white" }, [
                                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$8), { class: "h-10 w-10 ml-4" }),
                                      vue_cjs_prod.withDirectives(vue_cjs_prod.createVNode("input", {
                                        autofocus: "",
                                        type: "text",
                                        class: "w-full bg-transparent p-4",
                                        onKeyup: _ctx.search,
                                        onChange: _ctx.search,
                                        "onUpdate:modelValue": ($event) => refInput.value = $event
                                      }, null, 40, ["onKeyup", "onChange", "onUpdate:modelValue"]), [
                                        [vue_cjs_prod.vModelText, refInput.value]
                                      ]),
                                      refInput.value.length > 0 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("button", {
                                        key: 0,
                                        onClick: clearInput,
                                        class: "absolute-center m-4 h-10 w-10 rounded-lg bg-primary text-white hover:opacity-60 md:h-14 md:w-14 md:rounded-xl"
                                      }, [
                                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(render), { class: "h-10 w-10" })
                                      ])) : vue_cjs_prod.createCommentVNode("", true)
                                    ]),
                                    !hasResult.value && !loading.value && refInput.value.length > 0 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                      key: 0,
                                      class: "absolute-center mx-auto my-4 w-3/4 rounded-xl bg-secondary py-4 text-white"
                                    }, [
                                      vue_cjs_prod.createVNode("p", { class: "mr-4 whitespace-nowrap text-base md:text-2xl" }, " Truy\u1EC7n b\u1EA1n c\u1EA7n t\xECm ch\u01B0a c\xF3!"),
                                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$2), { class: "h-10 w-10" })
                                    ])) : vue_cjs_prod.createCommentVNode("", true),
                                    loading.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_LazyCommonSearchLoading, {
                                      key: 1,
                                      "class-name": "h-20 w-20"
                                    })) : vue_cjs_prod.createCommentVNode("", true),
                                    hasResult.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_LazyModalSearchResult, {
                                      key: 2,
                                      onCloseSearchModal: close,
                                      searchData: searchData.value
                                    }, null, 8, ["searchData"])) : vue_cjs_prod.createCommentVNode("", true)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          vue_cjs_prod.createVNode(vue_cjs_prod.unref(Le$1), { class: "fixed top-[10%] left-0 right-0 overflow-y-auto" }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                                vue_cjs_prod.createVNode("div", { class: "max-h-[70vh] w-[85%] transform overflow-x-hidden overflow-y-scroll rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all md:w-[75%] lg:max-h-[85vh] opacity-100 scale-100" }, [
                                  vue_cjs_prod.createVNode("div", { class: "flex items-center justify-between" }, [
                                    vue_cjs_prod.createVNode("h3", { class: "my-4 mx-2 font-secondary text-4xl leading-6 text-white md:text-6xl" }, " T\xECm Truy\u1EC7n "),
                                    vue_cjs_prod.createVNode("button", {
                                      onClick: close,
                                      class: "button rounded-full p-4 text-white md:mr-6"
                                    }, [
                                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(render), { class: "h-8 w-8" })
                                    ])
                                  ]),
                                  vue_cjs_prod.createVNode("div", { class: "my-10 flex h-[60px] items-center rounded-xl bg-secondary py-4 text-white" }, [
                                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$8), { class: "h-10 w-10 ml-4" }),
                                    vue_cjs_prod.withDirectives(vue_cjs_prod.createVNode("input", {
                                      autofocus: "",
                                      type: "text",
                                      class: "w-full bg-transparent p-4",
                                      onKeyup: _ctx.search,
                                      onChange: _ctx.search,
                                      "onUpdate:modelValue": ($event) => refInput.value = $event
                                    }, null, 40, ["onKeyup", "onChange", "onUpdate:modelValue"]), [
                                      [vue_cjs_prod.vModelText, refInput.value]
                                    ]),
                                    refInput.value.length > 0 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("button", {
                                      key: 0,
                                      onClick: clearInput,
                                      class: "absolute-center m-4 h-10 w-10 rounded-lg bg-primary text-white hover:opacity-60 md:h-14 md:w-14 md:rounded-xl"
                                    }, [
                                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(render), { class: "h-10 w-10" })
                                    ])) : vue_cjs_prod.createCommentVNode("", true)
                                  ]),
                                  !hasResult.value && !loading.value && refInput.value.length > 0 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                    key: 0,
                                    class: "absolute-center mx-auto my-4 w-3/4 rounded-xl bg-secondary py-4 text-white"
                                  }, [
                                    vue_cjs_prod.createVNode("p", { class: "mr-4 whitespace-nowrap text-base md:text-2xl" }, " Truy\u1EC7n b\u1EA1n c\u1EA7n t\xECm ch\u01B0a c\xF3!"),
                                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$2), { class: "h-10 w-10" })
                                  ])) : vue_cjs_prod.createCommentVNode("", true),
                                  loading.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_LazyCommonSearchLoading, {
                                    key: 1,
                                    "class-name": "h-20 w-20"
                                  })) : vue_cjs_prod.createCommentVNode("", true),
                                  hasResult.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_LazyModalSearchResult, {
                                    key: 2,
                                    onCloseSearchModal: close,
                                    searchData: searchData.value
                                  }, null, 8, ["searchData"])) : vue_cjs_prod.createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(oe), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-100" })
                      ]),
                      _: 1
                    }),
                    vue_cjs_prod.createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                      vue_cjs_prod.createVNode("div", { class: "flex min-h-full justify-center p-4 text-center" }, [
                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(oe), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode(vue_cjs_prod.unref(Le$1), { class: "fixed top-[10%] left-0 right-0 overflow-y-auto" }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                                  vue_cjs_prod.createVNode("div", { class: "max-h-[70vh] w-[85%] transform overflow-x-hidden overflow-y-scroll rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all md:w-[75%] lg:max-h-[85vh] opacity-100 scale-100" }, [
                                    vue_cjs_prod.createVNode("div", { class: "flex items-center justify-between" }, [
                                      vue_cjs_prod.createVNode("h3", { class: "my-4 mx-2 font-secondary text-4xl leading-6 text-white md:text-6xl" }, " T\xECm Truy\u1EC7n "),
                                      vue_cjs_prod.createVNode("button", {
                                        onClick: close,
                                        class: "button rounded-full p-4 text-white md:mr-6"
                                      }, [
                                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(render), { class: "h-8 w-8" })
                                      ])
                                    ]),
                                    vue_cjs_prod.createVNode("div", { class: "my-10 flex h-[60px] items-center rounded-xl bg-secondary py-4 text-white" }, [
                                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$8), { class: "h-10 w-10 ml-4" }),
                                      vue_cjs_prod.withDirectives(vue_cjs_prod.createVNode("input", {
                                        autofocus: "",
                                        type: "text",
                                        class: "w-full bg-transparent p-4",
                                        onKeyup: _ctx.search,
                                        onChange: _ctx.search,
                                        "onUpdate:modelValue": ($event) => refInput.value = $event
                                      }, null, 40, ["onKeyup", "onChange", "onUpdate:modelValue"]), [
                                        [vue_cjs_prod.vModelText, refInput.value]
                                      ]),
                                      refInput.value.length > 0 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("button", {
                                        key: 0,
                                        onClick: clearInput,
                                        class: "absolute-center m-4 h-10 w-10 rounded-lg bg-primary text-white hover:opacity-60 md:h-14 md:w-14 md:rounded-xl"
                                      }, [
                                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(render), { class: "h-10 w-10" })
                                      ])) : vue_cjs_prod.createCommentVNode("", true)
                                    ]),
                                    !hasResult.value && !loading.value && refInput.value.length > 0 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                      key: 0,
                                      class: "absolute-center mx-auto my-4 w-3/4 rounded-xl bg-secondary py-4 text-white"
                                    }, [
                                      vue_cjs_prod.createVNode("p", { class: "mr-4 whitespace-nowrap text-base md:text-2xl" }, " Truy\u1EC7n b\u1EA1n c\u1EA7n t\xECm ch\u01B0a c\xF3!"),
                                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$2), { class: "h-10 w-10" })
                                    ])) : vue_cjs_prod.createCommentVNode("", true),
                                    loading.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_LazyCommonSearchLoading, {
                                      key: 1,
                                      "class-name": "h-20 w-20"
                                    })) : vue_cjs_prod.createCommentVNode("", true),
                                    hasResult.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_LazyModalSearchResult, {
                                      key: 2,
                                      onCloseSearchModal: close,
                                      searchData: searchData.value
                                    }, null, 8, ["searchData"])) : vue_cjs_prod.createCommentVNode("", true)
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(vue_cjs_prod.unref(Ae), {
                as: "div",
                onClose: close,
                class: "relative z-10"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(vue_cjs_prod.unref(oe), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-100" })
                    ]),
                    _: 1
                  }),
                  vue_cjs_prod.createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                    vue_cjs_prod.createVNode("div", { class: "flex min-h-full justify-center p-4 text-center" }, [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(oe), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode(vue_cjs_prod.unref(Le$1), { class: "fixed top-[10%] left-0 right-0 overflow-y-auto" }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                                vue_cjs_prod.createVNode("div", { class: "max-h-[70vh] w-[85%] transform overflow-x-hidden overflow-y-scroll rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all md:w-[75%] lg:max-h-[85vh] opacity-100 scale-100" }, [
                                  vue_cjs_prod.createVNode("div", { class: "flex items-center justify-between" }, [
                                    vue_cjs_prod.createVNode("h3", { class: "my-4 mx-2 font-secondary text-4xl leading-6 text-white md:text-6xl" }, " T\xECm Truy\u1EC7n "),
                                    vue_cjs_prod.createVNode("button", {
                                      onClick: close,
                                      class: "button rounded-full p-4 text-white md:mr-6"
                                    }, [
                                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(render), { class: "h-8 w-8" })
                                    ])
                                  ]),
                                  vue_cjs_prod.createVNode("div", { class: "my-10 flex h-[60px] items-center rounded-xl bg-secondary py-4 text-white" }, [
                                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$8), { class: "h-10 w-10 ml-4" }),
                                    vue_cjs_prod.withDirectives(vue_cjs_prod.createVNode("input", {
                                      autofocus: "",
                                      type: "text",
                                      class: "w-full bg-transparent p-4",
                                      onKeyup: _ctx.search,
                                      onChange: _ctx.search,
                                      "onUpdate:modelValue": ($event) => refInput.value = $event
                                    }, null, 40, ["onKeyup", "onChange", "onUpdate:modelValue"]), [
                                      [vue_cjs_prod.vModelText, refInput.value]
                                    ]),
                                    refInput.value.length > 0 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("button", {
                                      key: 0,
                                      onClick: clearInput,
                                      class: "absolute-center m-4 h-10 w-10 rounded-lg bg-primary text-white hover:opacity-60 md:h-14 md:w-14 md:rounded-xl"
                                    }, [
                                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(render), { class: "h-10 w-10" })
                                    ])) : vue_cjs_prod.createCommentVNode("", true)
                                  ]),
                                  !hasResult.value && !loading.value && refInput.value.length > 0 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                    key: 0,
                                    class: "absolute-center mx-auto my-4 w-3/4 rounded-xl bg-secondary py-4 text-white"
                                  }, [
                                    vue_cjs_prod.createVNode("p", { class: "mr-4 whitespace-nowrap text-base md:text-2xl" }, " Truy\u1EC7n b\u1EA1n c\u1EA7n t\xECm ch\u01B0a c\xF3!"),
                                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(render$2), { class: "h-10 w-10" })
                                  ])) : vue_cjs_prod.createCommentVNode("", true),
                                  loading.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_LazyCommonSearchLoading, {
                                    key: 1,
                                    "class-name": "h-20 w-20"
                                  })) : vue_cjs_prod.createCommentVNode("", true),
                                  hasResult.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_LazyModalSearchResult, {
                                    key: 2,
                                    onCloseSearchModal: close,
                                    searchData: searchData.value
                                  }, null, 8, ["searchData"])) : vue_cjs_prod.createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/MangaSearch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MangaSearch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_0_lazy = vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtLink;
}));
const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "SearchResult",
  __ssrInlineRender: true,
  props: {
    searchData: Object
  },
  emits: ["closeSearchModal"],
  setup(__props, { emit }) {
    const close = () => {
      emit("closeSearchModal");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyNuxtLink = __nuxt_component_0_lazy;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "min-h-fit w-full" }, _attrs))}><ul class="h-fit w-full space-y-5"><!--[-->`);
      serverRenderer.exports.ssrRenderList(__props.searchData.data, (manga) => {
        _push(`<div class="lazyload-wrapper"><li class="h-fit overflow-x-hidden bg-secondary py-4">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_LazyNuxtLink, {
          class: "flex h-full space-x-2",
          to: useMangaDetailPagePath(manga.slug),
          onClick: close
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<figure class="aspect-w-3 relative mt-4 ml-4 h-[120px] w-[90px] min-w-[85px] overflow-hidden rounded-xl"${_scopeId}><span style="${serverRenderer.exports.ssrRenderStyle({ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0" })}"${_scopeId}><img alt="img-preview"${serverRenderer.exports.ssrRenderAttr("src", manga.thumbnail)} decoding="async" data-nimg="fill" class="absolute inset-0 object-cover object-center" sizes="100vw"${serverRenderer.exports.ssrRenderAttr("srcset", manga.thumbnail)} style="${serverRenderer.exports.ssrRenderStyle({ "position": "absolute", "inset": "0", "box-sizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0", "height": "0", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" })}"${_scopeId}></span></figure><div class="flex h-full flex-1 flex-col space-y-4 text-white transition-all hover:text-primary"${_scopeId}><h2 class="mx-4 mt-4 w-full overflow-hidden font-secondary text-2xl line-clamp-1 md:text-4xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(manga.name)}</h2><h4 class="mx-4 text-base line-clamp-1 md:text-2xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(manga.newChapter)}</h4><ul class="flex h-[50%] flex-wrap"${_scopeId}><!--[-->`);
              serverRenderer.exports.ssrRenderList(manga.genres, (genre) => {
                _push2(`<li class="absolute-center m-2 h-[40%] w-[75px] rounded-xl bg-background text-[60%] md:w-fit md:text-xl" style="${serverRenderer.exports.ssrRenderStyle({ "color": "#" + (Math.random() * 16777215 << 0).toString(16) })}"${_scopeId}><span class="p-4"${_scopeId}>${serverRenderer.exports.ssrInterpolate(genre)}</span></li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              return [
                vue_cjs_prod.createVNode("figure", { class: "aspect-w-3 relative mt-4 ml-4 h-[120px] w-[90px] min-w-[85px] overflow-hidden rounded-xl" }, [
                  vue_cjs_prod.createVNode("span", { style: { "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0" } }, [
                    vue_cjs_prod.createVNode("img", {
                      alt: "img-preview",
                      src: manga.thumbnail,
                      decoding: "async",
                      "data-nimg": "fill",
                      class: "absolute inset-0 object-cover object-center",
                      sizes: "100vw",
                      srcset: manga.thumbnail,
                      style: { "position": "absolute", "inset": "0", "box-sizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0", "height": "0", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" }
                    }, null, 8, ["src", "srcset"])
                  ])
                ]),
                vue_cjs_prod.createVNode("div", { class: "flex h-full flex-1 flex-col space-y-4 text-white transition-all hover:text-primary" }, [
                  vue_cjs_prod.createVNode("h2", { class: "mx-4 mt-4 w-full overflow-hidden font-secondary text-2xl line-clamp-1 md:text-4xl" }, vue_cjs_prod.toDisplayString(manga.name), 1),
                  vue_cjs_prod.createVNode("h4", { class: "mx-4 text-base line-clamp-1 md:text-2xl" }, vue_cjs_prod.toDisplayString(manga.newChapter), 1),
                  vue_cjs_prod.createVNode("ul", { class: "flex h-[50%] flex-wrap" }, [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(manga.genres, (genre) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", {
                        class: "absolute-center m-2 h-[40%] w-[75px] rounded-xl bg-background text-[60%] md:w-fit md:text-xl",
                        style: { "color": "#" + (Math.random() * 16777215 << 0).toString(16) }
                      }, [
                        vue_cjs_prod.createVNode("span", { class: "p-4" }, vue_cjs_prod.toDisplayString(genre), 1)
                      ], 4);
                    }), 256))
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li></div>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/SearchResult.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchResult = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { entry$1 as default };
//# sourceMappingURL=server.mjs.map
