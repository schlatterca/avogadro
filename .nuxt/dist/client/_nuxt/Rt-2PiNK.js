import{c as N,i as Q,s as R,_ as X}from"./Br_cZqua.js";import{a as W,M as T,r as L,N as Y,O as Z,P as ee,Q as te,R as se,S as F,U as re,H as ae,V as ne,W as ie,X as A,q as oe,J as ce,o as le,E as ue,A as de,T as fe,t as _,v as w,x,z as he,I as M,F as I,G as $,Y as ye,Z as ge}from"./DWpuE4PC.js";import{u as pe}from"./DspjSqTc.js";import{u as K}from"./DjI_PS2M.js";import{u as me}from"./BOh9Uvbh.js";const V=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function _e(s,r){r?r={...V,...r}:r=V;const a=J(r);return a.dispatch(s),a.toString()}const ve=Object.freeze(["prototype","__proto__","constructor"]);function J(s){let r="",a=new Map;const t=e=>{r+=e};return{toString(){return r},getContext(){return a},dispatch(e){return s.replacer&&(e=s.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let i="";const m=n.length;m<10?i="unknown:["+n+"]":i=n.slice(8,m-1),i=i.toLowerCase();let l=null;if((l=a.get(e))===void 0)a.set(e,a.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](e):s.ignoreUnknown||this.unkown(e,i);else{let f=Object.keys(e);s.unorderedObjects&&(f=f.sort());let o=[];s.respectType!==!1&&!j(e)&&(o=ve),s.excludeKeys&&(f=f.filter(u=>!s.excludeKeys(u)),o=o.filter(u=>!s.excludeKeys(u))),t("object:"+(f.length+o.length)+":");const v=u=>{this.dispatch(u),t(":"),s.excludeValues||this.dispatch(e[u]),t(",")};for(const u of f)v(u);for(const u of o)v(u)}},array(e,n){if(n=n===void 0?s.unorderedArrays!==!1:n,t("array:"+e.length+":"),!n||e.length<=1){for(const l of e)this.dispatch(l);return}const i=new Map,m=e.map(l=>{const f=J(s);f.dispatch(l);for(const[o,v]of f.getContext())i.set(o,v);return f.toString()});return a=i,m.sort(),this.array(m,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,n){if(t(n),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),j(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const n=[...e];return this.array(n,s.unorderedSets!==!1)},set(e){t("set:");const n=[...e];return this.array(n,s.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const G="[native code] }",we=G.length;function j(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-we)===G}class D{constructor(r,a){r=this.words=r||[],this.sigBytes=a===void 0?r.length*4:a}toString(r){return(r||be).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let a=0;a<r.sigBytes;a++){const t=r.words[a>>>2]>>>24-a%4*8&255;this.words[this.sigBytes+a>>>2]|=t<<24-(this.sigBytes+a)%4*8}else for(let a=0;a<r.sigBytes;a+=4)this.words[this.sigBytes+a>>>2]=r.words[a>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new D([...this.words])}}const be={stringify(s){const r=[];for(let a=0;a<s.sigBytes;a++){const t=s.words[a>>>2]>>>24-a%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},Be={stringify(s){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,n=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,m=e<<16|n<<8|i;for(let l=0;l<4&&t*8+l*6<s.sigBytes*8;l++)a.push(r.charAt(m>>>6*(3-l)&63))}return a.join("")}},Se={parse(s){const r=s.length,a=[];for(let t=0;t<r;t++)a[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new D(a,r)}},xe={parse(s){return Se.parse(unescape(encodeURIComponent(s)))}};class ke{constructor(){this._data=new D,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new D,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=xe.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,a){}_process(r){let a,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,n=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);a=this._data.words.splice(0,e),this._data.sigBytes-=n}return new D(a,n)}}class De extends ke{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const q=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Ce=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],H=[];class Me extends De{constructor(){super(...arguments),this._hash=new D([...q])}reset(){super.reset(),this._hash=new D([...q])}_doProcessBlock(r,a){const t=this._hash.words;let e=t[0],n=t[1],i=t[2],m=t[3],l=t[4],f=t[5],o=t[6],v=t[7];for(let u=0;u<64;u++){if(u<16)H[u]=r[a+u]|0;else{const B=H[u-15],U=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,C=H[u-2],z=(C<<15|C>>>17)^(C<<13|C>>>19)^C>>>10;H[u]=U+H[u-7]+z+H[u-16]}const P=l&f^~l&o,E=e&n^e&i^n&i,p=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),b=(l<<26|l>>>6)^(l<<21|l>>>11)^(l<<7|l>>>25),y=v+b+P+Ce[u]+H[u],d=p+E;v=o,o=f,f=l,l=m+y|0,m=i,i=n,n=e,e=y+d|0}t[0]=t[0]+e|0,t[1]=t[1]+n|0,t[2]=t[2]+i|0,t[3]=t[3]+m|0,t[4]=t[4]+l|0,t[5]=t[5]+f|0,t[6]=t[6]+o|0,t[7]=t[7]+v|0}finalize(r){super.finalize(r);const a=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(a/4294967296),this._data.words[(t+64>>>9<<4)+15]=a,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function He(s){return new Me().finalize(s).toString(Be)}function Le(s,r={}){const a=typeof s=="string"?s:_e(s,r);return He(a).slice(0,10)}const Pe=s=>s==="defer"||s===!1;function Ee(...s){var E;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[a,t,e={}]=s;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=W(),i=t,m=()=>T.value,l=()=>n.isHydrating?n.payload.data[a]:n.static.data[a];e.server=e.server??!0,e.default=e.default??m,e.getCachedData=e.getCachedData??l,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??T.deep,e.dedupe=e.dedupe??"cancel";const f=()=>e.getCachedData(a,n)!=null;if(!n._asyncData[a]||!e.immediate){(E=n.payload._errors)[a]??(E[a]=T.errorValue);const p=e.deep?L:Y;n._asyncData[a]={data:p(e.getCachedData(a,n)??e.default()),pending:L(!f()),error:Z(n.payload._errors,a),status:L("idle"),_default:e.default}}const o={...n._asyncData[a]};delete o._default,o.refresh=o.execute=(p={})=>{if(n._asyncDataPromises[a]){if(Pe(p.dedupe??e.dedupe))return n._asyncDataPromises[a];n._asyncDataPromises[a].cancelled=!0}if((p._initial||n.isHydrating&&p._initial!==!1)&&f())return Promise.resolve(e.getCachedData(a,n));o.pending.value=!0,o.status.value="pending";const b=new Promise((y,d)=>{try{y(i(n))}catch(B){d(B)}}).then(async y=>{if(b.cancelled)return n._asyncDataPromises[a];let d=y;e.transform&&(d=await e.transform(y)),e.pick&&(d=ze(d,e.pick)),n.payload.data[a]=d,o.data.value=d,o.error.value=T.errorValue,o.status.value="success"}).catch(y=>{if(b.cancelled)return n._asyncDataPromises[a];o.error.value=re(y),o.data.value=ae(e.default()),o.status.value="error"}).finally(()=>{b.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[a])});return n._asyncDataPromises[a]=b,n._asyncDataPromises[a]},o.clear=()=>Te(n,a);const v=()=>o.refresh({_initial:!0}),u=e.server!==!1&&n.payload.serverRendered;{const p=ne();if(p&&!p._nuxtOnBeforeMountCbs){p._nuxtOnBeforeMountCbs=[];const d=p._nuxtOnBeforeMountCbs;ee(()=>{d.forEach(B=>{B()}),d.splice(0,d.length)}),te(()=>d.splice(0,d.length))}u&&n.isHydrating&&(o.error.value||f())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):p&&(n.payload.serverRendered&&n.isHydrating||e.lazy)&&e.immediate?p._nuxtOnBeforeMountCbs.push(v):e.immediate&&v();const b=ie();if(e.watch){const d=se(e.watch,()=>o.refresh());b&&F(d)}const y=n.hook("app:data:refresh",async d=>{(!d||d.includes(a))&&await o.refresh()});b&&F(y)}const P=Promise.resolve(n._asyncDataPromises[a]).then(()=>o);return Object.assign(P,o),P}function Te(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=T.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=void 0,s._asyncData[r].error.value=T.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function ze(s,r){const a={};for(const t of r)a[t]=s[t];return a}const Ue=String.raw||((s,...r)=>{const a=s.length-1;return s.slice(0,a).reduce((t,e,n)=>t+e+r[n],"")+s[a]}),O=s=>{const r={...s};let a=N(r);return{client:a,config:r,fetch:(...t)=>a.fetch(...t),setToken(t){r.token=t,a=N(r)}}},Ne=(s="default")=>{var n;const r=W();if((n=r._sanity)!=null&&n[s])return r._sanity[s];r._sanity=r._sanity||{};const a=oe(),{additionalClients:t={},...e}=A(a.sanity,a.public.sanity);return!e.disableSmartCdn&&r.$preview?e.useCdn=!1:!e.useCdn&&!e.token&&(e.useCdn=!0),s==="default"?(r._sanity.default=O(e),r._sanity.default):(r._sanity[s]=O(A(t[s],e)),r._sanity[s])},Re=(s,r,a={})=>{const{client:t,...e}=a,n=Ne(t);return Ee("sanity-"+Le(s+""),()=>n.fetch(s,{}),e)},Fe={key:0,class:"bg-white w-screen h-screen fixed top-0 left-0"},Ae={key:1},Ie={id:"header-component",class:"pointer-events-none"},$e={id:"background",class:"pic snap-start w-screen h-screen shrink-0"},Ke=["src"],Ve=x("div",{id:"leftArrow",class:"arrow"},null,-1),je=x("div",{id:"rightArrow",class:"arrow"},null,-1),qe=x("div",{class:"overlay",id:"overlay"},null,-1),Oe=x("div",{id:"empty",class:"slide active pic snap-start w-screen h-screen shrink-0"},null,-1),We={id:"planimetria",class:"slide w-66% ml-33% grid grid-cols-2 pic snap-end h-screen shrink-0 bg-lightgrey"},Je={class:"w-auto mx-20% bg-lightgrey mt-auto mb-auto"},Ge=["src"],Qe={class:"m-auto w-[20rem] mx-auto DM-Mono leading-tight"},Xe=["innerHTML"],Ye=["innerHTML"],Ze=["innerHTML"],et=["innerHTML"],tt=["src"],st={methods:{beforeEnter(s){s.style.opacity=0},enter(s,r){s.offsetHeight,s.style.transition="opacity 0.5s",s.style.opacity=1,r()},leave(s,r){s.style.transition="opacity 0.5s",s.style.opacity=0,r()},imageUrlFor(s){return`path/to/images/${s}`}}},ct=Object.assign(st,{__name:"[slug]",setup(s){const r=Q(R),t=ce().params.slug,e=L(!0),n=L([]),i=L([]);pe({title:"Cecilia Avogadro",meta:[{name:"description",content:""}]});const m=`*[_type == "project" && slug.current == "${t}"]{
    _id,
    _type,
    title,
    slug,
    citta,
    cover_image,
    planimetria,
    description,
    altre_info,
    slides[]{
        _key,
        _type,
        title,
        justify,
        fixed_height,
        images[]{
            _key,
            _type,
            image{
                asset->
            },
            image_2{
                asset->
            },
            image_3{
                asset->
            },
            image_width,
            margin_left,
            margin_right,
            margin_top,
            margin_bottom,
        }
    }
}[0...50]`,l=c=>r.image(c),f=c=>c.split("%")[0],o=c=>c?String(c).replaceAll("left-","").replaceAll("right-",""):"20",v=c=>{switch(c){case"top-0":return"no";case"top-20":return"0";case"top-max":return"max";default:return"0"}},u=c=>{switch(c){case"bottom-0":return"no";case"bottom-20":return"0";case"bottom-max":return"max";default:return"0"}},P=c=>{switch(c){case"destra":return"end";case"sinistra":return"start";case"giustifica":return"justify";default:return"center"}},E=c=>{switch(c){case"60%":return"60";case"70%":return"70";case"80%":return"80";case"max":return"max";default:return"auto"}},p=()=>{e.value=!0,R.fetch(m).then(c=>{e.value=!1,n.value=c[0],i.value=c[0]},c=>{e.value=!1,console.error(c)})};le(()=>{p()});const b=Ue`*[_type == "project" && slug.current == "${t}"]`;Re(b);const y=me();function d(c){const{width:k,height:g}=K();let S=document.getElementById("planimetria");S.getBoundingClientRect().left<=k._value/3?document.querySelectorAll("#head a:not(.text-black)").forEach(h=>{h.classList.add("text-black")}):S.getBoundingClientRect().left<=k._value/3*2+10?(document.querySelectorAll("#head a:not(.menu).text-black").forEach(h=>{h.classList.remove("text-black")}),document.querySelectorAll("#head a.menu:not(.text-black)").forEach(h=>{h.classList.add("text-black")})):document.querySelectorAll("#head a.text-black").forEach(h=>{h.classList.remove("text-black")})}const B=L(null);function U(c,k){let g=B.value;if(g.length>0){const S=g[0].getElementsByTagName("img")[0].src;y.myUrlSaved||(y.myUrl_1=S,y.myUrl_2=g[0].getElementsByTagName("img")[0].parentElement.getAttribute("alt_1"),y.myUrlSaved=!0),g.length>0&&c>k/2&&g[0].classList.contains("changed")?(g[0].classList.remove("changed"),g[0].getElementsByTagName("img")[0].src=y.myUrl_1):g.length>0&&c<=k/2&&!g[0].classList.contains("changed")&&(g[0].classList.add("changed"),g[0].getElementsByTagName("img")[0].src=y.myUrl_2)}}const C=c=>{z(c)},z=c=>{c.currentTarget;const k=c.clientX;c.clientY;const{width:g,height:S}=K();document.querySelector("figure[alt_1]")&&document.querySelector("figure[alt_1]").getBoundingClientRect().left>0&&document.querySelector("figure[alt_1]").getBoundingClientRect().left<g._value&&U(k,g._value)};return(c,k)=>{const g=X;return _(),ue(fe,{name:"fade",onBeforeEnter:c.beforeEnter,onEnter:c.enter,onLeave:c.leave},{default:de(()=>[e.value?(_(),w("div",Fe)):(_(),w("div",Ae,[x("div",Ie,[he(g)]),x("figure",$e,[i.value.cover_image?(_(),w("img",{key:0,src:l(i.value.cover_image),class:"pic w-full h-full object-cover"},null,8,Ke)):M("",!0)]),Ve,je,x("div",{id:"snapContainer",class:"flex overflow-scroll snap-mandatory snap-x absolute left-0 top-0 w-screen h-screen select-none",ref:"snapContainer",onScrollPassive:d,onMouseenter:C,onMousemove:z},[qe,Oe,x("div",We,[x("figure",Je,[i.value.planimetria?(_(),w("img",{key:0,src:l(i.value.planimetria),class:"pic w-auto h-full m-auto object-cover mix-blend-multiply"},null,8,Ge)):M("",!0)]),x("div",Qe,[i.value.title?(_(),w("p",{key:0,class:"text-base uppercase",innerHTML:i.value.title},null,8,Xe)):M("",!0),i.value.citta?(_(),w("p",{key:1,class:"text-s mt-4",innerHTML:i.value.citta},null,8,Ye)):M("",!0),i.value.description?(_(),w("p",{key:2,class:"text-s lg:text-base mt-8",innerHTML:i.value.description},null,8,Ze)):M("",!0),i.value.altre_info?(_(),w("p",{key:3,class:"text-s mt-6",innerHTML:i.value.altre_info},null,8,et)):M("",!0)])]),(_(!0),w(I,null,$(n.value.slides,S=>(_(),w("div",{key:S._key,class:ye(["slide pic snap-start w-screen h-screen shrink-0 flex gap-20px items-end p-20px bg-lightgrey",[`place-content-${P(S.justify)}`],[`fixed-height-${E(S.fixed_height)}`]])},[(_(!0),w(I,null,$(S.images,h=>(_(),w("figure",ge({class:"pic h-auto",key:h._key,ref_for:!0},{alt_1:h.image_2?l(h.image_2):void 0,ref:h.image_2?"originalImg":void 0},{class:[`image-width-${f(h.image_width)}`,`mg-left-${o(h.margin_left)}`,`mg-right-${o(h.margin_right)}`,`mg-top-${v(h.margin_top)}`,`mg-bottom-${u(h.margin_bottom)}`]}),[h.image.asset?(_(),w("img",{key:0,src:l(h.image.asset),class:"pic object-cover"},null,8,tt)):M("",!0)],16))),128))],2))),128))],544)]))]),_:1},8,["onBeforeEnter","onEnter","onLeave"])}}});export{ct as default};