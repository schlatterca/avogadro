import{i as K,s as A,_ as Q}from"./BrI8fkpe.js";import{_ as Z}from"./C63KB44R.js";import{K as j,r as v,L as ee,F as te,i as R,o as N,M as se,v as r,x as i,z as q,A as oe,T as ie,t as a,I as c,J as u,G as C,H as $,B as p,N as ne}from"./wnhiutJ0.js";import{s as le}from"./ea6BtD-w.js";import{g as z}from"./DBO2yGN5.js";const re=i("div",{class:"overlay bg-white",id:"overlay"},null,-1),ae={id:"header-component"},ce={key:0,class:"bg-white w-screen h-[100dvh] fixed top-0 left-0"},de={key:1},ue=i("section",{id:"s_1"},[i("div",{id:"downArrow"})],-1),me={key:0,id:"leftArrow",class:"arrow"},he={key:1,id:"rightArrow",class:"arrow"},fe={key:0,class:"slide"},ye=["src"],ge={key:1,class:"slide"},_e=["src"],ve={key:0},pe={key:1},we={key:2},be={key:3},Le={key:4},Se={id:"s_4"},ke={class:"projectGrid relative h-[100dvh] w-screen"},Be=["href"],Ee={key:0,class:"w-full group"},Ie={class:"projectName opacity-0 group-hover:opacity-100 transition-opacity duration-500 fixed pointer-events-none cursor-follower"},Me=i("span",{class:"circle"},null,-1),Te=["innerHTML"],xe=["src"],Ae={key:1,class:"w-full group"},qe={class:"projectName opacity-0 group-hover:opacity-100 transition-opacity duration-500 fixed pointer-events-none cursor-follower"},Ce=i("span",{class:"circle"},null,-1),Ve=["innerHTML"],He=["src"],Re=["innerHTML"],Ne={id:"footer-component",class:"mt-4 l-0 row-start-[134] row-span-10 relative md:absolute w-[calc(100vw-40px)] md:w-screen"};j();const $e={methods:{beforeEnter(h){h.style.opacity=0},enter(h,y){h.offsetHeight,h.style.transition="opacity 2s",h.style.opacity=1,y()},leave(h,y){h.style.transition="opacity 2s",h.style.opacity=0,y()},imageUrlFor(h){return`path/to/images/${h}`}}},Xe=Object.assign($e,{__name:"index",setup(h){const y=K(A),w=v(!0),L=v([]),B=v([]),D=ee(),E=te();let n=R(()=>E.isMobile);const F=async()=>{w.value=!0;try{const t=await A.fetch(z`*[_type == "project"]`);L.value=t}catch(t){console.error(t)}finally{w.value=!1}},P=async()=>{w.value=!0;try{const t=await A.fetch(z`*[_type == "homepage"]{
            slides[]{
                _key,
                _type,
                title,
                image,
                image_mobile,
            }
        }[0...50]`);B.value=t}catch(t){console.error(t)}finally{w.value=!1}},W=R(()=>!L.value||L.value.length===0?[]:L.value.slice().sort((t,l)=>{const o=new Date(t._createdAt),s=new Date(l._createdAt);return o-s})),X=()=>{const t=["#723137","#7d91a0","#c3c2be"],l=t[Math.floor(Math.random()*t.length)],o=document.getElementById("s_1");o?o.style.backgroundColor=l:console.error("Element not found!")},Y=()=>{const t=new IntersectionObserver(o=>{n.value||o.forEach(s=>{s.target.getAttribute("id");const e=document.querySelector("#spansRow"),d=document.querySelectorAll("#head a.first"),f=document.querySelectorAll("#head a.menu");document.querySelector("#head #spansRowMobile p.menu");const g=document.querySelectorAll("#head a.main");s.isIntersecting&&(s.target.id=="s_2"?s.target.classList.add("inView"):document.getElementById("s_2").classList.remove("inView"),s.target.id=="s_4"?(e.classList.add("visible"),f.forEach(m=>{m.classList.add("visible")}),document.querySelector("#head p.arch").classList.add("invisible"),g[0].classList.add("small"),g[1].classList.add("small"),document.querySelector("#head a.blankSpace").classList.add("invisible"),document.querySelector("#head a.first").classList.add("invisible")):(e.classList.remove("visible"),f.forEach(m=>{m.classList.remove("visible")}),document.querySelector("#head p.arch").classList.remove("invisible"),g[0].classList.remove("small"),g[1].classList.remove("small"),document.querySelector("#head a.blankSpace").classList.remove("invisible"),document.querySelector("#head a.first").classList.remove("invisible")),s.target.id=="s_4"?(d.forEach(m=>{m.classList.add("!hidden")}),document.getElementById("head").style.color="white",document.getElementById("head").style.mixBlendMode="difference",document.getElementById("head").classList.add("s4")):s.target.id=="s_1"?(document.getElementById("head").style.color="white",document.getElementById("head").style.mixBlendMode="normal",document.getElementById("head").classList.remove("s4"),d.forEach(m=>{m.style.opacity="1",m.style.pointerEvents="auto"}),g[0].classList.remove("show-dot"),g[1].classList.remove("show-dot")):(document.getElementById("head").style.color="black",document.getElementById("head").style.mixBlendMode="normal",d.forEach(m=>{m.classList.remove("!hidden"),m.style.opacity="0",m.style.pointerEvents="none"}),g[0].classList.add("show-dot"),g[1].classList.add("show-dot")))})},{threshold:.5});document.querySelectorAll('section[id^="s_"]').forEach(o=>{t.observe(o)})};N(async()=>{await F(),await P(),await se(),X(),Y();const t=()=>{const s=D.hash;if(s){const e=document.querySelector(s);e&&(document.getElementById("overlay").classList.add("show"),e.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{document.getElementById("overlay").classList.remove("show")},1e3))}};setTimeout(()=>{t()});const l=document.querySelectorAll(".cursor-follower"),o=s=>{if(n.value)return;const e=s.clientX,d=s.clientY;l.forEach(f=>{f.style.left=`${e}px`,f.style.top=`${d}px`})};document.addEventListener("mousemove",o),window.addEventListener("keydown",s=>{s.key==="ArrowLeft"?x("left"):s.key==="ArrowRight"&&x("right")})});let b,_;const I=v(null);let M=200,T=!1;N(()=>{setTimeout(()=>{n.value||I.value&&(I.value.querySelectorAll(".slide"),I.value.classList.contains("inView")&&(b=setTimeout(()=>{S()},3e3)))},1e3)});function S(){n.value?M=2e3:M=200,_=le(()=>{if(T==!0){clearTimeout(b),_&&clearInterval(_);return}const t=document.getElementById("s_2"),l=Array.from(t.children).filter(s=>s.classList.contains("slide")),o=l.findIndex(s=>s.getBoundingClientRect().left>=t.getBoundingClientRect().left-10);o<l.length-1&&o+1,setTimeout(()=>{o<l.length-1?l[o+1].scrollIntoView({behavior:"smooth",inline:"start"}):l[0].scrollIntoView({behavior:"smooth",inline:"start"})},M)},4e3)}const V=t=>{if(n.value)return;clearTimeout(b),_&&clearInterval(_);const l=t.currentTarget,o=t.clientX,s=t.clientY;document.documentElement.style.setProperty("--mouse-x",`${o}px`),document.documentElement.style.setProperty("--mouse-y",`${s}px`);const e=l.offsetWidth;o<e/2?(document.querySelector("#leftArrow").classList.add("visible"),document.querySelector("#rightArrow").classList.remove("visible")):(document.querySelector("#leftArrow").classList.remove("visible"),document.querySelector("#rightArrow").classList.add("visible")),document.querySelector("#s_2").classList.contains("inView")&&S()},G=()=>{n.value||(document.querySelector("#leftArrow").classList.remove("visible"),document.querySelector("#rightArrow").classList.remove("visible"),clearTimeout(b),_&&clearInterval(_))},O=t=>{n.value||(V(t),b=setTimeout(()=>{S()},4e3))},k=v(null),H=v(null),U=v(null);function J(){n.value&&(H.value.getBoundingClientRect().top<window.innerHeight/2?E.headerBlack=!0:E.headerBlack=!1,k.value.getBoundingClientRect().top<window.innerHeight/2&&k.value.getBoundingClientRect().bottom>0?S():k.value.getBoundingClientRect().top<0&&(T=!0))}const x=t=>{T=!0;let l,o,s;t!="left"&&t!="right"?(t.preventDefault(),o=t.currentTarget,l=t.clientX-o.getBoundingClientRect().left,s=o.offsetWidth):o=document.getElementById("s_2");const e=Array.from(o.children).filter(f=>f.classList.contains("slide")),d=e.findIndex(f=>f.getBoundingClientRect().left>=o.getBoundingClientRect().left-10);l<s/2||t=="left"?d>0?d-1:e.length-1:d<e.length-1&&d+1,setTimeout(()=>{l<s/2||t=="left"?d>0?e[d-1].scrollIntoView({behavior:"smooth",inline:"start"}):e[e.length-1].scrollIntoView({behavior:"smooth",inline:"start"}):d<e.length-1?e[d+1].scrollIntoView({behavior:"smooth",inline:"start"}):e[0].scrollIntoView({behavior:"smooth",inline:"start"})},200)};return(t,l)=>{const o=Q,s=Z;return a(),r("div",null,[re,i("div",ae,[q(o)]),q(ie,{name:"fade",onBeforeEnter:t.beforeEnter,onEnter:t.enter,onLeave:t.leave},{default:oe(()=>[w.value?(a(),r("div",ce)):(a(),r("div",de,[i("main",{id:"mainHome",onScrollPassive:J,ref_key:"mainHome",ref:U},[ue,c(n)?u("",!0):(a(),r("div",me)),c(n)?u("",!0):(a(),r("div",he)),i("section",{id:"s_2",ref_key:"s_2",ref:k,class:"snap-always",onMousemove:V,onMouseleave:G,onMouseenter:O,onClick:x},[B.value[0]?(a(!0),r(C,{key:0},$(B.value[0].slides,e=>(a(),r(C,{key:e._key},[!c(n)&&e.image?(a(),r("figure",fe,[i("img",{src:c(y).image(e.image.asset).url(),alt:"Carousel Image"},null,8,ye)])):u("",!0),c(n)&&e.image_mobile?(a(),r("figure",ge,[i("img",{src:c(y).image(e.image_mobile.asset).url(),alt:"Carousel Image"},null,8,_e)])):u("",!0)],64))),128)):u("",!0)],544),i("section",{id:"s_3",ref_key:"s_3",ref:H},[i("p",null,[p("Trasformare uno spazio in un luogo"),c(n)?u("",!0):(a(),r("br",ve)),p(" di senso che faccia star bene chi"),c(n)?u("",!0):(a(),r("br",pe)),p(" ci trascorre del tempo è per me"),c(n)?u("",!0):(a(),r("br",we)),p(" una gioia, ma non solo: è il mezzo"),c(n)?u("",!0):(a(),r("br",be)),p(" con cui faccio la mia parte nella"),c(n)?u("",!0):(a(),r("br",Le)),p(" società civile.")])],512),i("section",Se,[i("div",ke,[(a(!0),r(C,null,$(c(W),e=>(a(),r("a",{key:e._key,href:"/progetti/"+e.slug.current,class:"flex cursor-none flex-col md:flex-row",style:ne(e.gridSpan?{gridColumn:e.gridSpan.columnStart+" / span "+e.gridSpan.columnSpan,gridRow:e.gridSpan.rowStart+" / span "+e.gridSpan.rowSpan}:{})},[!c(n)&&e.homepage_image?(a(),r("figure",Ee,[i("p",Ie,[Me,i("span",{innerHTML:e.title},null,8,Te)]),i("img",{src:c(y).image(e.homepage_image),class:"pic w-full h-full object-cover"},null,8,xe)])):u("",!0),c(n)&&e.homepage_image_mobile?(a(),r("figure",Ae,[i("p",qe,[Ce,i("span",{innerHTML:e.title},null,8,Ve)]),i("img",{src:c(y).image(e.homepage_image_mobile),class:"pic w-full h-full object-cover"},null,8,He)])):u("",!0),c(n)?(a(),r("p",{key:2,innerHTML:e.title},null,8,Re)):u("",!0)],12,Be))),128)),i("div",Ne,[q(s)])])])],544)]))]),_:1},8,["onBeforeEnter","onEnter","onLeave"])])}}});export{Xe as default};
