function $(){}function K(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function j(){return Object.create(null)}function g(t){t.forEach(B)}function O(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function ht(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function Q(t){return Object.keys(t).length===0}function W(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(W(n,e))}function pt(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?K(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=n.dirty[u]|r[u];return o}return n.dirty|r}return n.dirty}function gt(t,n,e,i,r,o){if(r){const s=q(n,e,i,o);t.p(s,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t,n,e){return t.set(e),n}let T=!1;function U(){T=!0}function V(){T=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<n.length;c++){const f=n[c];f.claim_order!==void 0&&l.push(f)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const c=n[l].claim_order,f=(r>0&&n[e[r]].claim_order<=c?r+1:X(1,r,x=>n[e[x]].claim_order,c))-1;i[l]=e[f]+1;const a=f+1;e[a]=l,r=Math.max(a,r)}const o=[],s=[];let u=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(o.push(n[l-1]);u>=l;u--)s.push(n[u]);u--}for(;u>=0;u--)s.push(n[u]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(s[l],f)}}function Z(t,n){if(T){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){T&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function D(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function $t(){return M(" ")}function wt(){return M("")}function Tt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Nt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(n(u)){const l=e(u);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(n(u)){const l=e(u);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];e[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function vt(t,n,e){return rt(t,n,e,D)}function st(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>M(n),!0)}function At(t){return st(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Mt(t,n){const e=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",e);if(e===i)return new C(void 0,n);G(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new C(o,n)}function St(t,n){n=""+n,t.data!==n&&(t.data=n)}function Lt(t,n){t.value=n??""}function jt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=D(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class C extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}function Ht(t,n){return new t(n)}let y;function p(t){y=t}function F(){if(!y)throw new Error("Function called outside component initialization");return y}function Ct(t){F().$$.on_mount.push(t)}function Pt(t){F().$$.after_update.push(t)}const h=[],P=[];let m=[];const k=[],I=Promise.resolve();let v=!1;function R(){v||(v=!0,I.then(J))}function kt(){return R(),I}function A(t){m.push(t)}const N=new Set;let d=0;function J(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,p(n),ct(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;P.length;)P.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];N.has(e)||(N.add(e),e())}m.length=0}while(h.length);for(;k.length;)k.pop()();v=!1,N.clear(),p(t)}function ct(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}function ut(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const E=new Set;let _;function Bt(){_={r:0,c:[],p:_}}function Ot(){_.r||g(_.c),_=_.p}function ot(t,n){t&&t.i&&(E.delete(t),t.i(n))}function qt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Dt(t){t&&t.c()}function Gt(t,n){t&&t.l(n)}function at(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||A(()=>{const s=t.$$.on_mount.map(B).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),o.forEach(A)}function ft(t,n){const e=t.$$;e.fragment!==null&&(ut(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(h.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,r,o,s,u=[-1]){const l=y;p(t);const c=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:j(),dirty:u,skip_bound:!1,root:n.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=e?e(t,n.props||{},(a,x,...S)=>{const L=S.length?S[0]:x;return c.ctx&&r(c.ctx[a],c.ctx[a]=L)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](L),f&&_t(t,a)),x}):[],c.update(),f=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,n.target){if(n.hydrate){U();const a=it(n.target);c.fragment&&c.fragment.l(a),a.forEach(w)}else c.fragment&&c.fragment.c();n.intro&&ot(t.$$.fragment),at(t,n.target,n.anchor,n.customElement),V(),J()}p(l)}class Ft{$destroy(){ft(this,1),this.$destroy=$}$on(n,e){if(!O(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Z as A,Bt as B,Ot as C,Et as D,Ct as E,St as F,Mt as G,C as H,Tt as I,O as J,g as K,mt as L,A as M,bt as N,Lt as O,Pt as P,kt as Q,P as R,Ft as S,Ht as T,Gt as a,qt as b,Dt as c,ft as d,M as e,st as f,nt as g,w as h,zt as i,pt as j,D as k,vt as l,at as m,it as n,Nt as o,xt as p,yt as q,$ as r,dt as s,ot as t,gt as u,jt as v,$t as w,wt as x,At as y,ht as z};
