import{i as w,s as _,_ as B}from"./BHNlKC2o.js";import{r as p,o as k,J as q,f as x,v as c,x as e,z as v,A as I,T as A,F as b,t as l,G as M,B as d,K as T,H as C,I as H}from"./oKutT0nK.js";import{g as z}from"./DBO2yGN5.js";const N={id:"header-component"},V={key:0,class:"bg-white w-screen h-screen fixed top-0 left-0"},F={key:1},$={id:"mainHome"},R=e("section",{id:"s_1"},null,-1),U=e("section",{id:"s_2"},[e("img",{src:"https://freight.cargo.site/t/original/i/eb7592ba1f63f887f8bfefe0682439c59867bdf787af1ada187e871fa91a7447/_Z9A3926.jpg"}),e("img",{src:"https://freight.cargo.site/t/original/i/2a7cd7086a218f34084b4a2bcba1682f8eeec2272068baf14898a753f0279647/_Z9A3936.jpg"}),e("img",{src:"https://freight.cargo.site/t/original/i/9f672c4aeda59bf5c45247795ff7f5cf9bbd74b9e5e6043597515054de662b08/_Z9A3872_a.jpg"})],-1),Z=e("section",{id:"s_3"},[e("p",null,[d("Trasformare uno spazio in un luogo"),e("br"),d(" di senso che faccia star bene chi"),e("br"),d(" ci trascorre del tempo è per me"),e("br"),d(" una gioia, ma non solo: è il mezzo"),e("br"),d(" con cui faccio la mia parte nella"),e("br"),d(" società civile.")])],-1),D={id:"s_4"},O=["href"],G={class:"group"},J={class:"projectName opacity-0 group-hover:opacity-100 transition-opacity duration-500 fixed pointer-events-none cursor-follower"},K=e("span",{class:"circle"},null,-1),P=["innerHTML"],X=["src"],Y={methods:{beforeEnter(o){o.style.opacity=0},enter(o,m){o.offsetHeight,o.style.transition="opacity 0.5s",o.style.opacity=1,m()},leave(o,m){o.style.transition="opacity 0.5s",o.style.opacity=0,m()},imageUrlFor(o){return`path/to/images/${o}`}}},ee=Object.assign(Y,{__name:"index",setup(o){const m=w(_),h=p(!0),g=p([]),E=async()=>{h.value=!0;try{const s=await _.fetch(z`*[_type == "project"]`);g.value=s}catch(s){console.error(s)}finally{h.value=!1}},L=()=>{const s=["#723137","#7d91a0","#c3c2be"],r=s[Math.floor(Math.random()*s.length)],a=document.getElementById("s_1");a?a.style.backgroundColor=r:console.error("Element not found!")},S=()=>{const s=new IntersectionObserver(a=>{a.forEach(t=>{t.target.getAttribute("id");const f=document.querySelector("#spansRow"),u=document.querySelectorAll("#head a.first"),y=document.querySelectorAll("#head a.menu"),i=document.querySelectorAll("#head a.main");t.isIntersecting&&(t.target.id=="s_4"?(f.classList.add("visible"),y.forEach(n=>{n.classList.add("visible")}),document.querySelector("#head p.arch").classList.add("invisible"),i[0].classList.add("small"),i[1].classList.add("small"),document.querySelector("#head a.blankSpace").classList.add("invisible"),document.querySelector("#head a.first").classList.add("invisible")):(f.classList.remove("visible"),y.forEach(n=>{n.classList.remove("visible")}),document.querySelector("#head p.arch").classList.remove("invisible"),i[0].classList.remove("small"),i[1].classList.remove("small"),document.querySelector("#head a.blankSpace").classList.remove("invisible"),document.querySelector("#head a.first").classList.remove("invisible")),t.target.id=="s_4"?(document.getElementById("head").style.color="white",document.getElementById("head").style.mixBlendMode="difference",document.getElementById("head").classList.add("s4")):t.target.id=="s_1"?(document.getElementById("head").style.color="white",document.getElementById("head").style.mixBlendMode="normal",document.getElementById("head").classList.remove("s4"),u.forEach(n=>{n.style.opacity="1",n.style.pointerEvents="auto"}),i[0].classList.remove("show-dot"),i[1].classList.remove("show-dot")):(document.getElementById("head").style.color="black",document.getElementById("head").style.mixBlendMode="normal",u.forEach(n=>{n.style.opacity="0",n.style.pointerEvents="none"}),i[0].classList.add("show-dot"),i[1].classList.add("show-dot")))})},{threshold:.5});document.querySelectorAll('section[id^="s_"]').forEach(a=>{s.observe(a)})};return k(async()=>{await E(),await q(),L(),S();const s=document.querySelectorAll(".cursor-follower"),r=a=>{const t=a.clientX,f=a.clientY;s.forEach(u=>{u.style.left=`${t}px`,u.style.top=`${f}px`})};document.addEventListener("mousemove",r),x(()=>{document.removeEventListener("mousemove",r)})}),(s,r)=>{const a=B;return l(),c(b,null,[e("div",N,[v(a)]),v(A,{name:"fade",onBeforeEnter:s.beforeEnter,onEnter:s.enter,onLeave:s.leave},{default:I(()=>[h.value?(l(),c("div",V)):(l(),c("div",F,[e("main",$,[R,U,Z,e("section",D,[(l(!0),c(b,null,M(g.value,t=>(l(),c("a",{key:t._key,href:"/progetti/"+t.slug.current,class:"flex",style:T(t.gridSpan?{gridColumn:t.gridSpan.columnStart+" / span "+t.gridSpan.columnSpan,gridRow:t.gridSpan.rowStart+" / span "+t.gridSpan.rowSpan}:{})},[e("figure",G,[e("p",J,[K,e("span",{innerHTML:t.title},null,8,P)]),t.cover_image?(l(),c("img",{key:0,src:C(m).image(t.cover_image),class:"pic w-full h-full object-cover"},null,8,X)):H("",!0)])],12,O))),128))])])]))]),_:1},8,["onBeforeEnter","onEnter","onLeave"])],64)}}});export{ee as default};
