import{S as V,i as y,s as N,j,k as h,l as _,n as $,h as d,o as m,g as p,u as A,p as B,q as F,t as v,b,c as w,a as S,m as k,d as I,w as D,y as P,A as E,O as C,I as L,K,r as M,v as O,L as U,x as R,e as z,f as G}from"../chunks/index.9387a7f5.js";import{p as H}from"../chunks/stores.202074aa.js";import{S as J}from"../chunks/ua-parser.7bf42864.js";import{R as Q,I as W}from"../chunks/RawButton.76e72a28.js";function X(o){let e,s;const t=o[1].default,l=j(t,o,o[0],null);return{c(){e=h("t"),l&&l.c(),this.h()},l(n){e=_(n,"T",{class:!0});var i=$(e);l&&l.l(i),i.forEach(d),this.h()},h(){m(e,"class","text-xl")},m(n,i){p(n,e,i),l&&l.m(e,null),s=!0},p(n,[i]){l&&l.p&&(!s||i&1)&&A(l,t,n,n[0],s?F(t,n[0],i,null):B(n[0]),null)},i(n){s||(v(l,n),s=!0)},o(n){b(l,n),s=!1},d(n){n&&d(e),l&&l.d(n)}}}function Y(o,e,s){let{$$slots:t={},$$scope:l}=e;return o.$$set=n=>{"$$scope"in n&&s(0,l=n.$$scope)},[l,t]}class Z extends V{constructor(e){super(),y(this,e,Y,X,N,{})}}function x(o){let e,s,t;return s=new W({props:{inverted:!0,name:"arrow-forward"}}),{c(){e=h("div"),w(s.$$.fragment),this.h()},l(l){e=_(l,"DIV",{class:!0});var n=$(e);S(s.$$.fragment,n),n.forEach(d),this.h()},h(){m(e,"class","rounded-r-lg bg-green-900 w-12 h-12 pr-1 center_row")},m(l,n){p(l,e,n),k(s,e,null),t=!0},p:M,i(l){t||(v(s.$$.fragment,l),t=!0)},o(l){b(s.$$.fragment,l),t=!1},d(l){l&&d(e),I(s)}}}function ee(o){let e,s,t,l,n,i,c,f,u;return i=new Q({props:{onClick:o[7],$$slots:{default:[x]},$$scope:{ctx:o}}}),{c(){e=h("div"),s=h("div"),t=h("input"),n=D(),w(i.$$.fragment),this.h()},l(r){e=_(r,"DIV",{class:!0});var a=$(e);s=_(a,"DIV",{class:!0});var g=$(s);t=_(g,"INPUT",{type:!0,class:!0,placeholder:!0}),g.forEach(d),n=P(a),S(i.$$.fragment,a),a.forEach(d),this.h()},h(){m(t,"type","text"),t.autofocus=o[1],m(t,"class","rounded-l-lg outline-none h-full px-1 text-xl"),m(t,"placeholder",o[3]),m(s,"class",l=(o[0]?"invert":"")+" rounded-l-lg border-2 border-green-900"),m(e,"class","flex")},m(r,a){p(r,e,a),E(e,s),E(s,t),C(t,o[4]),E(e,n),k(i,e,null),c=!0,o[1]&&t.focus(),f||(u=[L(t,"input",o[5]),L(t,"keypress",o[6])],f=!0)},p(r,a){(!c||a&2)&&(t.autofocus=r[1]),(!c||a&8)&&m(t,"placeholder",r[3]),a&16&&t.value!==r[4]&&C(t,r[4]),(!c||a&1&&l!==(l=(r[0]?"invert":"")+" rounded-l-lg border-2 border-green-900"))&&m(s,"class",l);const g={};a&20&&(g.onClick=r[7]),a&256&&(g.$$scope={dirty:a,ctx:r}),i.$set(g)},i(r){c||(v(i.$$.fragment,r),c=!0)},o(r){b(i.$$.fragment,r),c=!1},d(r){r&&d(e),I(i),f=!1,K(u)}}}function te(o){let e,s;return e=new Z({props:{$$slots:{default:[ee]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){k(e,t,l),s=!0},p(t,[l]){const n={};l&287&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function se(o,e,s){let{inverted:t=!1}=e,{autofocus:l=!1}=e,{onSubmit:n}=e,{placeholder:i=""}=e,c="";function f(){c=this.value,s(4,c)}const u=a=>a.key==="Enter"?n(c):null,r=()=>n(c);return o.$$set=a=>{"inverted"in a&&s(0,t=a.inverted),"autofocus"in a&&s(1,l=a.autofocus),"onSubmit"in a&&s(2,n=a.onSubmit),"placeholder"in a&&s(3,i=a.placeholder)},[t,l,n,i,c,f,u,r]}class le extends V{constructor(e){super(),y(this,e,se,te,N,{inverted:0,autofocus:1,onSubmit:2,placeholder:3})}}function T(o){let e;return{c(){e=h("div"),this.h()},l(s){e=_(s,"DIV",{class:!0}),$(e).forEach(d),this.h()},h(){m(e,"class","h-12")},m(s,t){p(s,e,t)},d(s){s&&d(e)}}}function q(o){let e,s;return{c(){e=h("div"),s=z("Login fehlgeschlagen."),this.h()},l(t){e=_(t,"DIV",{class:!0});var l=$(e);s=G(l,"Login fehlgeschlagen."),l.forEach(d),this.h()},h(){m(e,"class","mt-4 h-8 flex items-start text-error")},m(t,l){p(t,e,l),E(e,s)},d(t){t&&d(e)}}}function ne(o){let e=o[0].url.href.split("/").pop()=="failed",s,t,l,n=o[0].url.href.split("/").pop()=="failed",i,c,f=e&&T();t=new le({props:{autofocus:!0,onSubmit:o[1],placeholder:"Passwort"}});let u=n&&q();return{c(){f&&f.c(),s=D(),w(t.$$.fragment),l=D(),u&&u.c(),i=R()},l(r){f&&f.l(r),s=P(r),S(t.$$.fragment,r),l=P(r),u&&u.l(r),i=R()},m(r,a){f&&f.m(r,a),p(r,s,a),k(t,r,a),p(r,l,a),u&&u.m(r,a),p(r,i,a),c=!0},p(r,a){a&1&&(e=r[0].url.href.split("/").pop()=="failed"),e?f||(f=T(),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null),a&1&&(n=r[0].url.href.split("/").pop()=="failed"),n?u||(u=q(),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null)},i(r){c||(v(t.$$.fragment,r),c=!0)},o(r){b(t.$$.fragment,r),c=!1},d(r){f&&f.d(r),r&&d(s),I(t,r),r&&d(l),u&&u.d(r),r&&d(i)}}}function re(o){let e,s,t;return s=new J({props:{className:"center_col",$$slots:{default:[ne]},$$scope:{ctx:o}}}),{c(){e=h("div"),w(s.$$.fragment),this.h()},l(l){e=_(l,"DIV",{style:!0});var n=$(e);S(s.$$.fragment,n),n.forEach(d),this.h()},h(){O(e,"font-family",'"Roboto Slab"')},m(l,n){p(l,e,n),k(s,e,null),t=!0},p(l,[n]){const i={};n&5&&(i.$$scope={dirty:n,ctx:l}),s.$set(i)},i(l){t||(v(s.$$.fragment,l),t=!0)},o(l){b(s.$$.fragment,l),t=!1},d(l){l&&d(e),I(s)}}}function ae(o,e,s){let t;return U(o,H,n=>s(0,t=n)),[t,n=>{console.log(n),window.location.href="/drafts/hoffmanns-schuppen/admin/access/"+n}]}class ce extends V{constructor(e){super(),y(this,e,ae,re,N,{})}}export{ce as component};
