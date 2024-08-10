import{i as W,s as E,_ as Y}from"./Br_cZqua.js";import{d as Z,t as g,E as $,h as k,r as A,o as ee,T as te,A as ne,v as x,x as w,z as re,F as P,G as S,H as B,I as oe}from"./DWpuE4PC.js";import{g as ie}from"./DBO2yGN5.js";function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?L(Object(t),!0).forEach(function(r){se(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function se(e,n,t){return n=le(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function le(e){var n=ce(e,"string");return typeof n=="symbol"?n:n+""}function ce(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function T(e){return e._type==="span"&&"text"in e&&typeof e.text=="string"&&(typeof e.marks>"u"||Array.isArray(e.marks)&&e.marks.every(n=>typeof n=="string"))}function V(e){return typeof e._type=="string"&&e._type[0]!=="@"&&(!("markDefs"in e)||!e.markDefs||Array.isArray(e.markDefs)&&e.markDefs.every(n=>typeof n._key=="string"))&&"children"in e&&Array.isArray(e.children)&&e.children.every(n=>typeof n=="object"&&"_type"in n)}function H(e){return V(e)&&"listItem"in e&&typeof e.listItem=="string"&&(typeof e.level>"u"||typeof e.level=="number")}function z(e){return e._type==="@list"}function G(e){return e._type==="@span"}function J(e){return e._type==="@text"}const C=["strong","em","code","underline","strike-through"];function ae(e,n,t){if(!T(e)||!e.marks)return[];if(!e.marks.length)return[];const r=e.marks.slice(),l={};return r.forEach(o=>{l[o]=1;for(let c=n+1;c<t.length;c++){const u=t[c];if(u&&T(u)&&Array.isArray(u.marks)&&u.marks.indexOf(o)!==-1)l[o]++;else break}}),r.sort((o,c)=>ue(l,o,c))}function ue(e,n,t){const r=e[n],l=e[t];if(r!==l)return l-r;const o=C.indexOf(n),c=C.indexOf(t);return o!==c?o-c:n.localeCompare(t)}function de(e){var n;const{children:t,markDefs:r=[]}=e;if(!t||!t.length)return[];const l=t.map(ae),o={_type:"@span",children:[],markType:"<unknown>"};let c=[o];for(let u=0;u<t.length;u++){const f=t[u];if(!f)continue;const b=l[u]||[];let _=1;if(c.length>1)for(_;_<c.length;_++){const s=((n=c[_])==null?void 0:n.markKey)||"",a=b.indexOf(s);if(a===-1)break;b.splice(a,1)}c=c.slice(0,_);let i=c[c.length-1];if(i){for(const s of b){const a=r.find(m=>m._key===s),y=a?a._type:s,d={_type:"@span",_key:f._key,children:[],markDef:a,markType:y,markKey:s};i.children.push(d),c.push(d),i=d}if(T(f)){const s=f.text.split(`
`);for(let a=s.length;a-- >1;)s.splice(a,0,`
`);i.children=i.children.concat(s.map(a=>({_type:"@text",text:a})))}else i.children=i.children.concat(f)}}return o.children}function fe(e,n){const t=[];let r;for(let l=0;l<e.length;l++){const o=e[l];if(o){if(!H(o)){t.push(o),r=void 0;continue}if(!r){r=j(o,l,n),t.push(r);continue}if(pe(o,r)){r.children.push(o);continue}if((o.level||1)>r.level){const c=j(o,l,n);if(n==="html"){const u=r.children[r.children.length-1],f=M(M({},u),{},{children:[...u.children,c]});r.children[r.children.length-1]=f}else r.children.push(c);r=c;continue}if((o.level||1)<r.level){const c=t[t.length-1],u=c&&D(c,o);if(u){r=u,r.children.push(o);continue}r=j(o,l,n),t.push(r);continue}if(o.listItem!==r.listItem){const c=t[t.length-1],u=c&&D(c,{level:o.level||1});if(u&&u.listItem===o.listItem){r=u,r.children.push(o);continue}else{r=j(o,l,n),t.push(r);continue}}console.warn("Unknown state encountered for block",o),t.push(o)}}return t}function pe(e,n){return(e.level||1)===n.level&&e.listItem===n.listItem}function j(e,n,t){return{_type:"@list",_key:`${e._key||`${n}`}-parent`,mode:t,level:e.level||1,listItem:e.listItem,children:[e]}}function D(e,n){const t=n.level||1,r=n.listItem||"normal",l=typeof n.listItem=="string";if(z(e)&&(e.level||1)===t&&l&&(e.listItem||"normal")===r)return e;if(!("children"in e))return;const o=e.children[e.children.length-1];return o&&!T(o)?D(o,n):void 0}function Q(e){let n="";return e.children.forEach(t=>{J(t)?n+=t.text:G(t)&&(n+=Q(t))}),n}const ye="html";function me(e,n){const{block:t,list:r,listItem:l,marks:o,types:c,...u}=n;return{...e,block:O(e,n,"block"),list:O(e,n,"list"),listItem:O(e,n,"listItem"),marks:O(e,n,"marks"),types:O(e,n,"types"),...u}}function O(e,n,t){const r=n[t],l=e[t];return typeof r=="function"||r&&typeof l=="function"?r:r?{...l,...r}:l}const p=e=>(n,{slots:t})=>{var r;return k(e,(r=t.default)==null?void 0:r.call(t))},he=({value:e},{slots:n})=>{var t;return k("a",{href:e==null?void 0:e.href},(t=n.default)==null?void 0:t.call(n))},ke={textDecoration:"underline"},ve={code:p("code"),em:p("em"),link:he,"strike-through":p("del"),strong:p("strong"),underline:(e,{slots:n})=>{var t;return k("span",{style:ke},(t=n.default)==null?void 0:t.call(n))}},_e={number:p("ol"),bullet:p("ul")},ge=p("li"),N=(e,n)=>`[@portabletext/vue] Unknown ${e}, specify a component for it in the \`components.${n}\` prop`,R=e=>N(`block type "${e}"`,"types"),be=e=>N(`mark type "${e}"`,"marks"),Ie=e=>N(`block style "${e}"`,"block"),we=e=>N(`list style "${e}"`,"list"),xe=e=>N(`list item style "${e}"`,"listItem");function Oe(e){console.warn(e)}const K={display:"none"},Ne=({value:e,isInline:n})=>{const t=R(e._type);return n?k("span",{style:K},t):k("div",{style:K},t)},je=({markType:e},{slots:n})=>{var t;return k("span",{class:`unknown__pt__mark__${e}`},(t=n.default)==null?void 0:t.call(n))},$e=p("p"),Te=p("ul"),Be=p("li"),De=()=>k("br"),Ee={normal:p("p"),blockquote:p("blockquote"),h1:p("h1"),h2:p("h2"),h3:p("h3"),h4:p("h4"),h5:p("h5"),h6:p("h6")},U={types:{},block:Ee,marks:ve,list:_e,listItem:ge,hardBreak:De,unknownType:Ne,unknownMark:je,unknownList:Te,unknownListItem:Be,unknownBlockStyle:$e},Ae=(e,n)=>{function t(i){const{node:s,index:a,isInline:y}=i,d=s._key||`node-${a}`;return z(s)?o(s,a,d):H(s)?l(s,a,d):G(s)?c(s,a,d):r(s)?_(s,a,d,y):V(s)?u(s,a,d,y):J(s)?f(s,d):b(s,a,d,y)}function r(i){return i._type in e.types}function l(i,s,a){const y=q({node:i,index:s,isInline:!1,renderNode:t}),d=e.listItem,m=(typeof d=="function"?d:d[i.listItem])||e.unknownListItem;if(m===e.unknownListItem){const v=i.listItem||"bullet";n(xe(v),{type:v,nodeType:"listItemStyle"})}let h=y.children;if(i.style&&i.style!=="normal"){const{listItem:v,...I}=i;h=t({node:I,index:s,isInline:!1,renderNode:t})}return k(m,{key:a,value:i,index:s,isInline:!1,renderNode:t},()=>h)}function o(i,s,a){const y=i.children.map((h,v)=>t({node:h._key?h:{...h,_key:`li-${s}-${v}`},index:v,isInline:!1,renderNode:t})),d=e.list,m=(typeof d=="function"?d:d[i.listItem])||e.unknownList;if(m===e.unknownList){const h=i.listItem||"bullet";n(we(h),{nodeType:"listStyle",type:h})}return k(m,{key:a,value:i,index:s,isInline:!1,renderNode:t},()=>y)}function c(i,s,a){const{markDef:y,markType:d,markKey:m}=i,h=e.marks[d]||e.unknownMark,v=i.children.map((I,X)=>t({node:I,index:X,isInline:!0,renderNode:t}));return h===e.unknownMark&&n(be(d),{nodeType:"mark",type:d}),k(h,{key:a,text:Q(i),value:y,markType:d,markKey:m,renderNode:t},()=>v)}function u(i,s,a,y){const{_key:d,children:m,...h}=q({node:i,index:s,isInline:y,renderNode:t}),v=h.node.style||"normal",I=(typeof e.block=="function"?e.block:e.block[v])||e.unknownBlockStyle;return I===e.unknownBlockStyle&&n(Ie(v),{nodeType:"blockStyle",type:v}),k(I,{key:a,...h,value:h.node,renderNode:t},()=>m)}function f(i,s){if(i.text===`
`){const a=e.hardBreak;return a?k(a,{key:s}):`
`}return i.text}function b(i,s,a,y){const d={value:i,isInline:y,index:s,renderNode:t};n(R(i._type),{nodeType:"block",type:i._type});const m=e.unknownType;return k(m,{key:a,...d})}function _(i,s,a,y){const d={value:i,isInline:y,index:s,renderNode:t},m=e.types[i._type];return m?k(m,{key:a,...d}):void 0}return t};function q(e){const{node:n,index:t,isInline:r,renderNode:l}=e,o=de(n).map((c,u)=>l({node:c,isInline:!0,index:u,renderNode:l}));return{_key:n._key||`block-${t}`,children:o,index:t,isInline:r,node:n}}const F=Z({__name:"vue-portable-text",props:{value:{},components:{},onMissingComponent:{type:[Function,Boolean],default:()=>Oe},listNestingMode:{}},setup(e){function n(){}const t=e,r=()=>{const l=t.onMissingComponent||n,o=Array.isArray(t.value)?t.value:[t.value],c=fe(o,t.listNestingMode||ye),u=t.components?me(U,t.components):U,f=Ae(u,l);return c.map((b,_)=>f({node:b,index:_,isInline:!1,renderNode:f}))};return(l,o)=>(g(),$(r))}}),Pe={key:0,class:"bg-white w-screen h-screen fixed top-0 left-0"},Se={key:1},Le={id:"header-component"},Me={id:"about",class:"bg-lightgrey w-auto h-screen p-20px flex justify-between gap-20px pt-20vh"},Ce={id:"aboutText",class:"relative h-full w-50vw flex flex-col justify-between leading-normal"},Ke={class:"upper text-s *:mb-4"},Ue={class:"bottom text-base"},qe={id:"mainImg",class:"h-full w-auto max-w-40vw"},Fe=["src"],Ve={methods:{beforeEnter(e){e.style.opacity=0},enter(e,n){e.offsetHeight,e.style.transition="opacity 0.5s",e.style.opacity=1,n()},leave(e,n){e.style.transition="opacity 0.5s",e.style.opacity=0,n()},imageUrlFor(e){return`path/to/images/${e}`}}},Je=Object.assign(Ve,{__name:"about",setup(e){const n=W(E),t=A(!0),r=A([]),l=async()=>{t.value=!0;try{const o=await E.fetch(ie`*[_type == "about"][0]`);r.value=o}catch(o){console.error(o)}finally{t.value=!1}};return ee(async()=>{await l()}),(o,c)=>{const u=Y;return g(),$(te,{name:"fade",onBeforeEnter:o.beforeEnter,onEnter:o.enter,onLeave:o.leave},{default:ne(()=>[t.value?(g(),x("div",Pe)):(g(),x("div",Se,[w("div",Le,[re(u)]),w("main",Me,[w("div",Ce,[w("div",Ke,[(g(!0),x(P,null,S(r.value.text_top,f=>(g(),$(B(F),{key:f._key,value:[f]},null,8,["value"]))),128))]),w("div",Ue,[(g(!0),x(P,null,S(r.value.text_bottom,f=>(g(),$(B(F),{key:f._key,value:[f]},null,8,["value"]))),128))])]),w("figure",qe,[r.value.cover_image.asset._ref?(g(),x("img",{key:0,src:B(n).image(r.value.cover_image.asset._ref),class:"pic w-full h-full object-cover"},null,8,Fe)):oe("",!0)])])]))]),_:1},8,["onBeforeEnter","onEnter","onLeave"])}}});export{Je as default};