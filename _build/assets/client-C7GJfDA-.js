function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/_...404_-Hy0br1dc.js","assets/index-mcL_fFGR.js","assets/HttpStatusCode-DjTx85av.js","assets/about-B7hg814B.js","assets/index-DiqtdELQ.js","assets/index-7whypOeP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as le,c as b,g as ce,u as G,a as ue,b as N,d as xe,e as H,f as te,o as de,s as Ne,i as Oe,h as v,j as Ie,S as fe,k as De,l as he,m as Me,n as O,p as Fe,q as I,t as F,w as B,x as D,y as me,z as Be,M as Ue,T as We,A as je,E as qe,B as ze}from"./index-mcL_fFGR.js";import{H as Ve}from"./HttpStatusCode-DjTx85av.js";const He="modulepreload",Ke=function(e){return"/solid-start-offset/_build/"+e},ne={},$=function(n,t,r){let s=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link");s=Promise.all(t.map(o=>{if(o=Ke(o),o in ne)return;ne[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!r)for(let f=a.length-1;f>=0;f--){const m=a[f];if(m.href===o&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":He,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((f,m)=>{c.addEventListener("load",f),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>n()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},q="Invariant Violation",{setPrototypeOf:Ze=function(e,n){return e.__proto__=n,e}}=Object;class J extends Error{framesToPop=1;name=q;constructor(n=q){super(typeof n=="number"?`${q}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),Ze(this,J.prototype)}}function z(e,n){if(!e)throw new J(n)}const Ge=/^[A-Za-z]:\//;function Je(e=""){return e&&e.replace(/\\/g,"/").replace(Ge,n=>n.toUpperCase())}const Xe=/^[/\\]{2}/,Ye=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Qe=/^[A-Za-z]:$/,et=function(e){if(e.length===0)return".";e=Je(e);const n=e.match(Xe),t=K(e),r=e[e.length-1]==="/";return e=tt(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),Qe.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!K(e)?`/${e}`:e)},pe=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":et(n.replace(/\/\/+/g,"/"))};function tt(e,n){let t="",r=0,s=-1,a=0,o=null;for(let i=0;i<=e.length;++i){if(i<e.length)o=e[i];else{if(o==="/")break;o="/"}if(o==="/"){if(!(s===i-1||a===1))if(a===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const l=t.lastIndexOf("/");l===-1?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),s=i,a=0;continue}else if(t.length>0){t="",r=0,s=i,a=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(s+1,i)}`:t=e.slice(s+1,i),r=i-s-1;s=i,a=0}else o==="."&&a!==-1?++a:a=-1}return t}const K=function(e){return Ye.test(e)};function nt(e){return`virtual:${e}`}function rt(e){return e.handler?.endsWith(".html")?K(e.handler)?e.handler:pe(e.root,e.handler):`#vinxi/handler/${e.name}`}const st=new Proxy({},{get(e,n){return z(typeof n=="string","Bundler name should be a string"),{name:n,type:"client",handler:nt(rt({name:n})),baseURL:"/solid-start-offset/_build",chunks:new Proxy({},{get(t,r){z(typeof r=="string","Chunk expected");let s=pe("/solid-start-offset/_build",r+".mjs");return{import(){return $(()=>import(s),__vite__mapDeps([]))},output:{path:s}}}}),inputs:new Proxy({},{get(t,r){z(typeof r=="string","Input must be string");let s=window.manifest[r].output;return{async import(){return $(()=>import(s),__vite__mapDeps([]))},async assets(){return window.manifest[r].assets},output:{path:s}}}})}}});globalThis.MANIFEST=st;function ge(){let e=new Set;function n(s){return e.add(s),()=>e.delete(s)}let t=!1;function r(s,a){if(t)return!(t=!1);const o={to:s,options:a,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const i of e)i.listener({...o,from:i.location,retry:l=>{l&&(t=!0),i.navigate(s,{...a,resolve:!1})}});return!o.defaultPrevented}return{subscribe:n,confirm:r}}let Z;function X(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Z=window.history.state._depth}X();function ot(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function at(e,n){let t=!1;return()=>{const r=Z;X();const s=r==null?null:Z-r;if(t){t=!1;return}s&&n(s)?(t=!0,window.history.go(-s)):e()}}const it=/^(?:[a-z0-9]+:)?\/\//i,lt=/^\/+|(\/)\/+$/g,we="http://sr";function S(e,n=!1){const t=e.replace(lt,"$1");return t?n||/^[?#]/.test(t)?t:"/"+t:""}function U(e,n,t){if(it.test(n))return;const r=S(e),s=t&&S(t);let a="";return!s||n.startsWith("/")?a=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?a=r+s:a=s,(a||"/")+S(n,!a)}function ct(e,n){if(e==null)throw new Error(n);return e}function ut(e,n){return S(e).replace(/\/*(\*.*)?$/g,"")+S(n)}function ve(e){const n={};return e.searchParams.forEach((t,r)=>{n[r]=t}),n}function dt(e,n,t){const[r,s]=e.split("/*",2),a=r.split("/").filter(Boolean),o=a.length;return i=>{const l=i.split("/").filter(Boolean),d=l.length-o;if(d<0||d>0&&s===void 0&&!n)return null;const c={path:o?"":"/",params:{}},f=m=>t===void 0?void 0:t[m];for(let m=0;m<o;m++){const y=a[m],u=l[m],h=y[0]===":",g=h?y.slice(1):y;if(h&&V(u,f(g)))c.params[g]=u;else if(h||!V(u,y))return null;c.path+=`/${u}`}if(s){const m=d?l.slice(-d).join("/"):"";if(V(m,f(s)))c.params[s]=m;else return null}return c}}function V(e,n){const t=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return n===void 0?!0:typeof n=="string"?t(n):typeof n=="function"?n(e):Array.isArray(n)?n.some(t):n instanceof RegExp?n.test(e):!1}function ft(e){const[n,t]=e.pattern.split("/*",2),r=n.split("/").filter(Boolean);return r.reduce((s,a)=>s+(a.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function ye(e){const n=new Map,t=ce();return new Proxy({},{get(r,s){return n.has(s)||le(t,()=>n.set(s,b(()=>e()[s]))),n.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ee(e){let n=/(\/?\:[^\/]+)\?/.exec(e);if(!n)return[e];let t=e.slice(0,n.index),r=e.slice(n.index+n[0].length);const s=[t,t+=n[1]];for(;n=/^(\/\:[^\/]+)\?/.exec(r);)s.push(t+=n[1]),r=r.slice(n[0].length);return Ee(r).reduce((a,o)=>[...a,...s.map(i=>i+o)],[])}const ht=100,be=ue(),Y=ue(),Q=()=>ct(G(be),"<A> and 'use' router primitives can be only used inside a Route."),mt=()=>G(Y)||Q().base,pt=e=>{const n=mt();return b(()=>n.resolvePath(e()))},gt=e=>{const n=Q();return b(()=>{const t=e();return t!==void 0?n.renderPath(t):t})},wt=()=>Q().location;function vt(e,n=""){const{component:t,load:r,children:s,info:a}=e,o=!s||Array.isArray(s)&&!s.length,i={key:e,component:t,load:r,info:a};return Re(e.path).reduce((l,d)=>{for(const c of Ee(d)){const f=ut(n,c);let m=o?f:f.split("/*",1)[0];m=m.split("/").map(y=>y.startsWith(":")||y.startsWith("*")?y:encodeURIComponent(y)).join("/"),l.push({...i,originalPath:c,pattern:m,matcher:dt(m,!o,e.matchFilters)})}return l},[])}function yt(e,n=0){return{routes:e,score:ft(e[e.length-1])*1e4-n,matcher(t){const r=[];for(let s=e.length-1;s>=0;s--){const a=e[s],o=a.matcher(t);if(!o)return null;r.unshift({...o,route:a})}return r}}}function Re(e){return Array.isArray(e)?e:[e]}function _e(e,n="",t=[],r=[]){const s=Re(e);for(let a=0,o=s.length;a<o;a++){const i=s[a];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const l=vt(i,n);for(const d of l){t.push(d);const c=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!c)_e(i.children,d.pattern,t,r);else{const f=yt([...t],r.length);r.push(f)}t.pop()}}}return t.length?r:r.sort((a,o)=>o.score-a.score)}function Pe(e,n){for(let t=0,r=e.length;t<r;t++){const s=e[t].matcher(n);if(s)return s}return[]}function Et(e,n){const t=new URL(we),r=b(l=>{const d=e();try{return new URL(d,t)}catch{return console.error(`Invalid path ${d}`),l}},t,{equals:(l,d)=>l.href===d.href}),s=b(()=>r().pathname),a=b(()=>r().search,!0),o=b(()=>r().hash),i=()=>"";return{get pathname(){return s()},get search(){return a()},get hash(){return o()},get state(){return n()},get key(){return i()},query:ye(de(a,()=>ve(r())))}}let A;function bt(e,n,t,r={}){const{signal:[s,a],utils:o={}}=e,i=o.parsePath||(p=>p),l=o.renderPath||(p=>p),d=o.beforeLeave||ge(),c=U("",r.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&a({value:c,replace:!0,scroll:!1});const[f,m]=N(!1),y=async p=>{m(!0);try{await Ne(p)}finally{m(!1)}},[u,h]=N(s().value),[g,w]=N(s().state),M=Et(u,g),R=[],_=N([]),T={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(p){return U(c,p)}};return xe(()=>{const{value:p,state:E}=s();H(()=>{p!==u()&&y(()=>{A="native",h(p),w(E),te(),_[1]([])}).then(()=>{A=void 0})})}),{base:T,location:M,isRouting:f,renderPath:l,parsePath:i,navigatorFactory:Se,beforeLeave:d,preloadRoute:ke,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:_};function Le(p,E,L){H(()=>{if(typeof E=="number"){E&&(o.go?o.go(E):console.warn("Router integration does not support relative routing"));return}const{replace:W,resolve:j,scroll:C,state:x}={replace:!1,resolve:!0,scroll:!0,...L},P=j?p.resolvePath(E):U("",E);if(P===void 0)throw new Error(`Path '${E}' is not a routable path`);if(R.length>=ht)throw new Error("Too many redirects");const ee=u();if((P!==ee||x!==g())&&!Oe){if(d.confirm(P,L)){const Te=R.push({value:ee,replace:W,scroll:C,state:g()});y(()=>{A="navigate",h(P),w(x),te(),_[1]([])}).then(()=>{R.length===Te&&(A=void 0,Ce({value:P,state:x}))})}}})}function Se(p){return p=p||G(Y)||T,(E,L)=>Le(p,E,L)}function Ce(p){const E=R[0];E&&((p.value!==E.value||p.state!==E.state)&&a({...p,replace:E.replace,scroll:E.scroll}),R.length=0)}function ke(p,E){const L=Pe(t(),p.pathname),W=A;A="preload";for(let j in L){const{route:C,params:x}=L[j];C.component&&C.component.preload&&C.component.preload();const{load:P}=C;E&&P&&le(n(),()=>P({params:x,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:ve(p),state:null,key:""},intent:"preload"}))}A=W}}function Rt(e,n,t,r,s){const{base:a,location:o}=e,{pattern:i,component:l,load:d}=r().route,c=b(()=>r().path);l&&l.preload&&l.preload();const f=d?d({params:s,location:o,intent:A||"initial"}):void 0;return{parent:n,pattern:i,path:c,params:s,outlet:()=>l?v(l,{params:s,location:o,data:f,get children(){return t()}}):t(),resolvePath(y){return U(a.path(),y,c())}}}const _t=e=>n=>{const{base:t}=n,r=Ie(()=>n.children),s=b(()=>_e(r(),n.base||""));let a;const o=bt(e,()=>a,s,{base:t,singleFlight:n.singleFlight}),i=o.location;return e.create&&e.create(o),v(be.Provider,{value:o,get children(){return v(Pt,{location:i,get root(){return n.root},get load(){return n.rootLoad},get children(){return[b(()=>(a=ce())&&null),v(At,{routerState:o,get branches(){return s()}})]}})}})};function Pt(e){const n=e.location,t=b(()=>e.load&&H(()=>e.load({params:{},location:n,intent:"preload"})));return v(fe,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>v(r,{params:{},location:n,get data(){return t()},get children(){return e.children}})})}function At(e){const n=b(()=>Pe(e.branches,e.routerState.location.pathname)),t=ye(()=>{const o=n(),i={};for(let l=0;l<o.length;l++)Object.assign(i,o[l].params);return i}),r=[];let s;const a=b(de(n,(o,i,l)=>{let d=i&&o.length===i.length;const c=[];for(let f=0,m=o.length;f<m;f++){const y=i&&i[f],u=o[f];l&&y&&u.route.key===y.route.key?c[f]=l[f]:(d=!1,r[f]&&r[f](),De(h=>{r[f]=h,c[f]=Rt(e.routerState,c[f-1]||e.routerState.base,re(()=>a()[f+1]),()=>n()[f],t)}))}return r.splice(o.length).forEach(f=>f()),l&&d?l:(s=c[0],c)}));return re(()=>a()&&s)()}const re=e=>()=>v(fe,{get when(){return e()},keyed:!0,children:n=>v(Y.Provider,{value:n,get children(){return n.outlet()}})});function $t([e,n],t,r){return[t?()=>t(e()):e,r?s=>n(r(s)):n]}function Lt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function St(e){let n=!1;const t=s=>typeof s=="string"?{value:s}:s,r=$t(N(t(e.get()),{equals:(s,a)=>s.value===a.value}),void 0,s=>(!n&&e.set(s),s));return e.init&&he(e.init((s=e.get())=>{n=!0,r[1](t(s)),n=!1})),_t({signal:r,create:e.create,utils:e.utils})}function Ct(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function kt(e,n){const t=Lt(`#${e}`);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const Tt=new Map;function xt(e=!0,n=!1,t="/_server"){return r=>{const s=r.base.path(),a=r.navigatorFactory(r.base);let o={};function i(u){return u.namespaceURI==="http://www.w3.org/2000/svg"}function l(u){if(u.defaultPrevented||u.button!==0||u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)return;const h=u.composedPath().find(T=>T instanceof Node&&T.nodeName.toUpperCase()==="A");if(!h||n&&!h.hasAttribute("link"))return;const g=i(h),w=g?h.href.baseVal:h.href;if((g?h.target.baseVal:h.target)||!w&&!h.hasAttribute("state"))return;const R=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||R&&R.includes("external"))return;const _=g?new URL(w,document.baseURI):new URL(w);if(!(_.origin!==window.location.origin||s&&_.pathname&&!_.pathname.toLowerCase().startsWith(s.toLowerCase())))return[h,_]}function d(u){const h=l(u);if(!h)return;const[g,w]=h,M=r.parsePath(w.pathname+w.search+w.hash),R=g.getAttribute("state");u.preventDefault(),a(M,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:R&&JSON.parse(R)})}function c(u){const h=l(u);if(!h)return;const[g,w]=h;o[w.pathname]||r.preloadRoute(w,g.getAttribute("preload")!=="false")}function f(u){const h=l(u);if(!h)return;const[g,w]=h;o[w.pathname]||(o[w.pathname]=setTimeout(()=>{r.preloadRoute(w,g.getAttribute("preload")!=="false"),delete o[w.pathname]},200))}function m(u){const h=l(u);if(!h)return;const[,g]=h;o[g.pathname]&&(clearTimeout(o[g.pathname]),delete o[g.pathname])}function y(u){let h=u.submitter&&u.submitter.hasAttribute("formaction")?u.submitter.getAttribute("formaction"):u.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const w=new URL(h,we);if(h=r.parsePath(w.pathname+w.search),!h.startsWith(t))return}if(u.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=Tt.get(h);if(g){u.preventDefault();const w=new FormData(u.target);u.submitter&&u.submitter.name&&w.append(u.submitter.name,u.submitter.value),g.call({r,f:u.target},w)}}Me(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mouseover",f),document.addEventListener("mouseout",m),document.addEventListener("focusin",c),document.addEventListener("touchstart",c)),document.addEventListener("submit",y),he(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mouseover",f),document.removeEventListener("mouseout",m),document.removeEventListener("focusin",c),document.removeEventListener("touchstart",c)),document.removeEventListener("submit",y)})}}function Nt(e){const n=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),t=ge();return St({get:n,set({value:r,replace:s,scroll:a,state:o}){s?window.history.replaceState(ot(o),"",r):window.history.pushState(o,"",r),kt(window.location.hash.slice(1),a),X()},init:r=>Ct(window,"popstate",at(r,s=>{if(s&&s<0)return!t.confirm(s);{const a=n();return!t.confirm(a.value,{state:a.state})}})),create:xt(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}var Ot=D("<a>");function se(e){e=O({inactiveClass:"inactive",activeClass:"active"},e);const[,n]=Fe(e,["href","state","class","activeClass","inactiveClass","end"]),t=pt(()=>e.href),r=gt(t),s=wt(),a=b(()=>{const o=t();if(o===void 0)return[!1,!1];const i=S(o.split(/[?#]/,1)[0]).toLowerCase(),l=S(s.pathname).toLowerCase();return[e.end?i===l:l.startsWith(i),i===l]});return(()=>{var o=I(Ot);return F(o,O(n,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!a()[0],[e.activeClass]:a()[0],...n.classList}},link:"",get"aria-current"(){return a()[1]?"page":void 0}}),!1,!1),B(),o})()}function It(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var Dt=D("<style>"),Mt=D("<link>"),Ft=D("<script> ");const Bt={style:e=>(()=>{var n=I(Dt);return F(n,O(()=>e.attrs),!1,!0),me(n,()=>e.children),B(),n})(),link:e=>(()=>{var n=I(Mt);return F(n,O(()=>e.attrs),!1,!1),B(),n})(),script:e=>e.attrs.src?(()=>{var n=I(Ft);return F(n,O(()=>e.attrs,{get id(){return e.key}}),!1,!0),B(),n})():null};function Ut(e){let{tag:n,attrs:{key:t,...r}={key:void 0},children:s}=e;return Bt[n]({attrs:r,key:t,children:s})}function Wt(e,n,t,r="default"){return Be(async()=>{{const a=(await e.import())[r],i=(await n.inputs?.[e.src].assets()).filter(d=>d.tag==="style"||d.attrs.rel==="stylesheet");return typeof window<"u"&&It(i),{default:d=>[...i.map(c=>Ut(c)),v(a,d)]}}})}const k={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function jt(e={}){const n={options:e,rootNode:Ae(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)oe(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>qt(n,t(r)),insert:(r,s)=>oe(n,t(r),s),remove:r=>zt(n,t(r))}}function qt(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),s={};let a=!1,o=null,i=e.rootNode,l=null;for(let d=0;d<r.length;d++){const c=r[d];i.wildcardChildNode!==null&&(o=i.wildcardChildNode,l=r.slice(d).join("/"));const f=i.children.get(c);if(f===void 0){if(i=i.placeholderChildNode,i===null)break;i.paramName&&(s[i.paramName]=c),a=!0}else i=f}return(i===null||i.data===null)&&o!==null&&(i=o,s[i.paramName||"_"]=l,a=!0),i?a?{...i.data,params:a?s:void 0}:i.data:null}function oe(e,n,t){let r=!0;const s=n.split("/");let a=e.rootNode,o=0;for(const i of s){let l;if(l=a.children.get(i))a=l;else{const d=Vt(i);l=Ae({type:d,parent:a}),a.children.set(i,l),d===k.PLACEHOLDER?(l.paramName=i==="*"?`_${o++}`:i.slice(1),a.placeholderChildNode=l,r=!1):d===k.WILDCARD&&(a.wildcardChildNode=l,l.paramName=i.slice(3)||"_",r=!1),a=l}}return a.data=t,r===!0&&(e.staticRoutesMap[n]=a),a}function zt(e,n){let t=!1;const r=n.split("/");let s=e.rootNode;for(const a of r)if(s=s.children.get(a),!s)return t;if(s.data){const a=r.at(-1)||"";s.data=null,Object.keys(s.children).length===0&&s.parent&&(s.parent.children.delete(a),s.parent.wildcardChildNode=null,s.parent.placeholderChildNode=null),t=!0}return t}function Ae(e={}){return{type:e.type||k.NORMAL,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildNode:null}}function Vt(e){return e.startsWith("**")?k.WILDCARD:e[0]===":"||e==="*"?k.PLACEHOLDER:k.NORMAL}const $e=[{$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>$(()=>import("./_...404_-Hy0br1dc.js"),__vite__mapDeps([0,1,2])),import:()=>{const e="src/routes/[...404].tsx?pick=default&pick=$css";return $(()=>import(globalThis.MANIFEST.client.inputs[e].output.path),__vite__mapDeps([]))}},path:"/*404",filePath:"/home/runner/work/solid-start-offset/solid-start-offset/src/routes/[...404].tsx"},{$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>$(()=>import("./about-B7hg814B.js"),__vite__mapDeps([3,1])),import:()=>{const e="src/routes/about.tsx?pick=default&pick=$css";return $(()=>import(globalThis.MANIFEST.client.inputs[e].output.path),__vite__mapDeps([]))}},path:"/about",filePath:"/home/runner/work/solid-start-offset/solid-start-offset/src/routes/about.tsx"},{$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>$(()=>import("./index-DiqtdELQ.js"),__vite__mapDeps([4,1,5])),import:()=>{const e="src/routes/index.tsx?pick=default&pick=$css";return $(()=>import(globalThis.MANIFEST.client.inputs[e].output.path),__vite__mapDeps([]))}},path:"/",filePath:"/home/runner/work/solid-start-offset/solid-start-offset/src/routes/index.tsx"}],Ht=Kt($e.filter(e=>e.$component));function Kt(e){function n(t,r,s,a){const o=Object.values(t).find(i=>s.startsWith(i.id+"/"));return o?(n(o.children||(o.children=[]),r,s.slice(o.id.length)),t):(t.push({...r,id:s,path:s.replace(/\/\([^)/]+\)/g,"").replace(/\./g,"/")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function Zt(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}jt({routes:$e.reduce((e,n)=>{if(!Zt(n))return e;let t=n.path.replace(/\(.*\)\/?/g,"").replace(/\*([^/]*)/g,(r,s)=>`**:${s}`);if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function Gt(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:Wt(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return Ht.map(e)}let ae;const Jt=()=>ae||(ae=Gt());function Xt(){return v(Nt,{get base(){return"/solid-start-offset/"},root:e=>v(Ue,{get children(){return[v(We,{children:"SolidStart - Basic"}),v(se,{href:"/",children:"Index"}),v(se,{href:"/about",children:"About"}),v(je,{get children(){return e.children}})]}}),get children(){return v(Jt,{})}})}var Yt=D("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const Qt=e=>{const n="Error | Uncaught Client Exception";return v(qe,{get fallback(){return[(()=>{var t=I(Yt);return me(t,n),t})(),v(Ve,{code:500})]},get children(){return e.children}})};function en(e,n){return ze(e,n)}function ie(e){return e.children}function tn(){return v(ie,{get children(){return v(ie,{get children(){return v(Qt,{get children(){return v(Xt,{})}})}})}})}en(()=>v(tn,{}),document.getElementById("app"));const on=void 0;export{on as default};