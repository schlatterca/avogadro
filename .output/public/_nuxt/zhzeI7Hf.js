import{i as S,s as _,_ as w}from"./Br_cZqua.js";import{J as M,r as g,o as k,v as n,x as a,z as m,A as E,T as L,t as o,F as T,G as q,I as v,Y as H}from"./DWpuE4PC.js";import{u as U}from"./DspjSqTc.js";import{u as C}from"./BOh9Uvbh.js";const D=a("div",{id:"headOverlay"},null,-1),z={id:"header-component",class:"z-50"},A={key:0,class:"bg-white w-screen h-screen fixed top-0 left-0"},F={key:1},I={id:"header-component",class:"pointer-events-none"},V={key:0,class:"text absolute bottom-0 left-0 w-full z-10 text-white p-20px pr-66% pointer-events-none leading-tight text-base blur-[20px] transition-[filter] duration-[2000ms]"},$=["innerHTML"],N=["innerHTML"],W={class:"pic w-full h-full"},Y=["src"],j={methods:{beforeEnter(s){s.style.opacity=0},enter(s,c){s.offsetHeight,s.style.transition="opacity 0.5s",s.style.opacity=1,c()},leave(s,c){s.style.transition="opacity 0.5s",s.style.opacity=0,c()},imageUrlFor(s){return`path/to/images/${s}`}}},K=Object.assign(j,{__name:"vision",setup(s){const c=S(_);M().params.slug;const u=g(!0),p=g([]);U({title:"Cecilia Avogadro",meta:[{name:"description",content:""}]});const f=`*[_type == "vision"]{
    title,
    slides[]{
        _key,
        _type,
        title,
        image,
        description,
    }
}[0...50]`,x=e=>c.image(e),b=()=>{u.value=!0,_.fetch(f).then(e=>{console.log(f),console.log("data: ",e[0]),u.value=!1,p.value=e[0]},e=>{u.value=!1,console.error(e)})};k(()=>{b()}),C();let h=0;function B(e){if(e.target.parentElement.parentElement.querySelector(".text"))if(e.target.classList.contains("isUnblurred")){const i=e.currentTarget,l=Array.from(i.querySelectorAll(".slide"));let t=l.find(r=>r.querySelector("img")&&!r.querySelector("img").classList.contains("isUnblurred"));l.find(r=>r.querySelector("div.text")&&!r.querySelector("img").classList.contains("isUnblurred"))&&t.scrollIntoView({behavior:"smooth",block:"start"});return}else{const i=e.target;i.style.filter.split(/blur\(|px\)/)[1]<=0&&setTimeout(()=>{e.target.classList.add("isUnblurred")},2e3),e.preventDefault();const t=20,y=0,r=.06;h+=Math.abs(e.deltaY);let d=t-Math.max(0,h*r-60);d=Math.max(y,Math.min(t,d)),i.style.filter=`blur(${d}px)`,i.parentElement.parentElement.querySelector(".text").style.filter=`blur(${d}px)`;return}}return(e,i)=>{const l=w;return o(),n("div",null,[D,a("div",z,[m(l)]),m(L,{name:"fade",onBeforeEnter:e.beforeEnter,onEnter:e.enter,onLeave:e.leave},{default:E(()=>[u.value?(o(),n("div",A)):(o(),n("div",F,[a("div",I,[m(l)]),a("div",{id:"snapContainer",class:"flex flex-col overflow-scroll snap-mandatory snap-y absolute left-0 top-0 w-screen h-screen select-none",ref:"snapContainer",onWheel:B},[(o(!0),n(T,null,q(p.value.slides,t=>(o(),n("div",{key:t._key,class:"slide pic relative snap-start w-screen h-screen shrink-0 flex gap-20px items-end p-0 overflow-hidden bg-lightgrey"},[t.description?(o(),n("div",V,[a("p",{class:"text-xl mb-8",innerHTML:t.title},null,8,$),a("p",{class:"DM-Mono text-base",innerHTML:t.description},null,8,N)])):v("",!0),a("figure",W,[t.image?(o(),n("img",{key:0,src:x(t.image.asset),class:H(["pic vision object-cover transition-[filter] duration-[1200ms] transform scale-[1.2]",{"blur-[20px]":t.title}])},null,10,Y)):v("",!0)])]))),128))],544)]))]),_:1},8,["onBeforeEnter","onEnter","onLeave"])])}}});export{K as default};
