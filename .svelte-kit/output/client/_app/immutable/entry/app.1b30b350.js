import{S as B,i as U,s as q,w as F,x as d,y as Q,g as E,b as h,C as L,t as w,h as g,P as W,E as j,k as z,l as G,n as H,o as D,v as p,e as J,f as K,F as M,B as T,Q as X,R as I,T as b,c as k,a as O,m as R,d as P}from"../chunks/index.9387a7f5.js";const Y="modulepreload",Z=function(s,e){return new URL(s,e).href},V={},m=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in V)return;V[f]=!0;const t=f.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(!!i)for(let l=r.length-1;l>=0;l--){const u=r[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${o}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":Y,t||(a.as="script",a.crossOrigin=""),a.href=f,document.head.appendChild(a),t)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(s){let e,n,i;var r=s[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return r&&(e=b(r,f(s)),s[12](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&R(e,t,o),E(t,n,o),i=!0},p(t,o){const c={};if(o&8&&(c.data=t[3]),o&4&&(c.form=t[2]),o&2&&r!==(r=t[1][0])){if(e){T();const a=e;h(a.$$.fragment,1,0,()=>{P(a,1)}),L()}r?(e=b(r,f(t)),t[12](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){s[12](null),t&&g(n),e&&P(e,t)}}}function x(s){let e,n,i;var r=s[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=b(r,f(s)),s[11](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&R(e,t,o),E(t,n,o),i=!0},p(t,o){const c={};if(o&8&&(c.data=t[3]),o&8215&&(c.$$scope={dirty:o,ctx:t}),o&2&&r!==(r=t[1][0])){if(e){T();const a=e;h(a.$$.fragment,1,0,()=>{P(a,1)}),L()}r?(e=b(r,f(t)),t[11](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){s[11](null),t&&g(n),e&&P(e,t)}}}function ee(s){let e,n,i;var r=s[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return r&&(e=b(r,f(s)),s[10](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&R(e,t,o),E(t,n,o),i=!0},p(t,o){const c={};if(o&16&&(c.data=t[4]),o&4&&(c.form=t[2]),o&2&&r!==(r=t[1][1])){if(e){T();const a=e;h(a.$$.fragment,1,0,()=>{P(a,1)}),L()}r?(e=b(r,f(t)),t[10](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){s[10](null),t&&g(n),e&&P(e,t)}}}function A(s){let e,n=s[6]&&y(s);return{c(){e=z("div"),n&&n.c(),this.h()},l(i){e=G(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=H(e);n&&n.l(r),r.forEach(g),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){E(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=y(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function y(s){let e;return{c(){e=J(s[7])},l(n){e=K(n,s[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&M(e,n[7])},d(n){n&&g(e)}}}function te(s){let e,n,i,r,f;const t=[x,$],o=[];function c(l,u){return l[1][1]?0:1}e=c(s),n=o[e]=t[e](s);let a=s[5]&&A(s);return{c(){n.c(),i=F(),a&&a.c(),r=d()},l(l){n.l(l),i=Q(l),a&&a.l(l),r=d()},m(l,u){o[e].m(l,u),E(l,i,u),a&&a.m(l,u),E(l,r,u),f=!0},p(l,[u]){let v=e;e=c(l),e===v?o[e].p(l,u):(T(),h(o[v],1,1,()=>{o[v]=null}),L(),n=o[e],n?n.p(l,u):(n=o[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?a?a.p(l,u):(a=A(l),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null)},i(l){f||(w(n),f=!0)},o(l){h(n),f=!1},d(l){o[e].d(l),l&&g(i),a&&a.d(l),l&&g(r)}}}function ne(s,e,n){let{stores:i}=e,{page:r}=e,{constructors:f}=e,{components:t=[]}=e,{form:o}=e,{data_0:c=null}=e,{data_1:a=null}=e;W(i.page.notify);let l=!1,u=!1,v=null;j(()=>{const _=i.page.subscribe(()=>{l&&(n(6,u=!0),X().then(()=>{n(7,v=document.title||"untitled page")}))});return n(5,l=!0),_});function N(_){I[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function C(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return s.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,r=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,o=_.form),"data_0"in _&&n(3,c=_.data_0),"data_1"in _&&n(4,a=_.data_1)},s.$$.update=()=>{s.$$.dirty&768&&i.page.set(r)},[t,f,o,c,a,l,u,v,i,r,N,S,C]}class se extends B{constructor(e){super(),U(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const oe=[()=>m(()=>import("../nodes/0.d8863d14.js"),["..\\nodes\\0.d8863d14.js","..\\chunks\\index.9387a7f5.js","..\\chunks\\stores.202074aa.js","..\\chunks\\singletons.2b4460d2.js","..\\chunks\\index.a2018c2b.js","..\\chunks\\state.1c958ab2.js","..\\chunks\\ua-parser.7bf42864.js","..\\assets\\ua-parser.16d2bac6.css","..\\chunks\\LargeHeading.26be73a2.js"],import.meta.url),()=>m(()=>import("../nodes/1.45e8870f.js"),["..\\nodes\\1.45e8870f.js","..\\chunks\\index.9387a7f5.js","..\\chunks\\ua-parser.7bf42864.js","..\\assets\\ua-parser.16d2bac6.css","..\\chunks\\LargeHeading.26be73a2.js"],import.meta.url),()=>m(()=>import("../nodes/2.dea07778.js"),["..\\nodes\\2.dea07778.js","..\\chunks\\index.9387a7f5.js"],import.meta.url),()=>m(()=>import("../chunks/4.11bfe1bd.js").then(s=>s._),[],import.meta.url),()=>m(()=>import("../chunks/4.11bfe1bd.js").then(s=>s.a),[],import.meta.url),()=>m(()=>import("../nodes/5.73111d65.js"),["..\\nodes\\5.73111d65.js","..\\chunks\\index.9387a7f5.js","..\\chunks\\ua-parser.7bf42864.js","..\\assets\\ua-parser.16d2bac6.css"],import.meta.url),()=>m(()=>import("../nodes/6.5d583d13.js"),["..\\nodes\\6.5d583d13.js","..\\chunks\\index.9387a7f5.js","..\\chunks\\stores.202074aa.js","..\\chunks\\singletons.2b4460d2.js","..\\chunks\\index.a2018c2b.js","..\\chunks\\ua-parser.7bf42864.js","..\\assets\\ua-parser.16d2bac6.css","..\\chunks\\RawButton.76e72a28.js","..\\chunks\\state.1c958ab2.js"],import.meta.url),()=>m(()=>import("../nodes/7.b0a7f042.js"),["..\\nodes\\7.b0a7f042.js","..\\chunks\\index.9387a7f5.js","..\\chunks\\ua-parser.7bf42864.js","..\\assets\\ua-parser.16d2bac6.css","..\\chunks\\SmallParagraph.0e838e0b.js","..\\chunks\\RawButton.76e72a28.js","..\\chunks\\state.1c958ab2.js","..\\chunks\\index.a2018c2b.js"],import.meta.url),()=>m(()=>import("../nodes/8.bdbab9dc.js"),["..\\nodes\\8.bdbab9dc.js","..\\chunks\\index.9387a7f5.js","..\\chunks\\ua-parser.7bf42864.js","..\\assets\\ua-parser.16d2bac6.css","..\\chunks\\MediumHeading.07c593d3.js","..\\chunks\\Button.c85cf130.js","..\\chunks\\SmallParagraph.0e838e0b.js","..\\chunks\\RawButton.76e72a28.js","..\\chunks\\state.1c958ab2.js","..\\chunks\\index.a2018c2b.js"],import.meta.url),()=>m(()=>import("../nodes/9.70191229.js"),["..\\nodes\\9.70191229.js","..\\chunks\\index.9387a7f5.js","..\\chunks\\ua-parser.7bf42864.js","..\\assets\\ua-parser.16d2bac6.css","..\\chunks\\SmallParagraph.0e838e0b.js","..\\chunks\\MediumHeading.07c593d3.js","..\\chunks\\Button.c85cf130.js","..\\chunks\\RawButton.76e72a28.js","..\\chunks\\state.1c958ab2.js","..\\chunks\\index.a2018c2b.js"],import.meta.url),()=>m(()=>import("../nodes/10.9c1585e9.js"),["..\\nodes\\10.9c1585e9.js","..\\chunks\\index.9387a7f5.js","..\\chunks\\ua-parser.7bf42864.js","..\\assets\\ua-parser.16d2bac6.css","..\\chunks\\SmallParagraph.0e838e0b.js","..\\chunks\\MediumHeading.07c593d3.js","..\\chunks\\Button.c85cf130.js","..\\chunks\\RawButton.76e72a28.js","..\\chunks\\state.1c958ab2.js","..\\chunks\\index.a2018c2b.js"],import.meta.url),()=>m(()=>import("../nodes/11.636797ee.js"),["..\\nodes\\11.636797ee.js","..\\chunks\\index.9387a7f5.js","..\\chunks\\ua-parser.7bf42864.js","..\\assets\\ua-parser.16d2bac6.css","..\\chunks\\MediumHeading.07c593d3.js"],import.meta.url)],ae=[],le={"/":[2],"/admin":[-4],"/admin/access":[-5],"/admin/access/[password]":[-6],"/admin/login/[state]":[6],"/countdown":[7],"/home":[8],"/investor-relations":[9],"/mach-mit":[10],"/produkte":[11]},fe={handleError:({error:s})=>{console.error(s)}};export{le as dictionary,fe as hooks,re as matchers,oe as nodes,se as root,ae as server_loads};
