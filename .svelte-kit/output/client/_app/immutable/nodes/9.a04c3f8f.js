import{S as C,i as H,s as G,k as p,c as _,l as g,n as I,a as b,h as l,v as y,g as f,m as k,t as v,b as w,d as S,w as E,y as F,o as J,A as x,e as z,f as D,r as K}from"../chunks/index.9387a7f5.js";import{S as M}from"../chunks/ua-parser.87cb26f2.js";import{S as P}from"../chunks/SmallParagraph.be7199e9.js";import{M as U}from"../chunks/MediumHeading.ada67b32.js";import{B as j}from"../chunks/Button.3f9e1360.js";function q(o){let e,n,i;return{c(){e=z(`Für eine Schülerfirma, die den Schülern gehört.\r
                    `),n=p("br"),i=p("br")},l(t){e=D(t,`Für eine Schülerfirma, die den Schülern gehört.\r
                    `),n=g(t,"BR",{}),i=g(t,"BR",{})},m(t,a){f(t,e,a),f(t,n,a),f(t,i,a)},p:K,d(t){t&&l(e),t&&l(n),t&&l(i)}}}function N(o){let e;return{c(){e=z(`Unsere Aktien beteiligen dich direkt am Erfolg von Hoffmann's Schuppen.\r
                Für 5€ erhälst du eine Aktie, die dir Anspruch auf einen Anteil des Firmenkapitals gibt.\r
                Du kannst deine Aktien jederzeit wieder an uns zurückgeben\r
                und bekommst die bis dahin mit deinem Investment erzielten Gewinne ausgezahlt.\r
                Die genauen Konditionen, die mit dem Aktienkauf einhergehen, findest du auf dem Informationsblatt.`)},l(n){e=D(n,`Unsere Aktien beteiligen dich direkt am Erfolg von Hoffmann's Schuppen.\r
                Für 5€ erhälst du eine Aktie, die dir Anspruch auf einen Anteil des Firmenkapitals gibt.\r
                Du kannst deine Aktien jederzeit wieder an uns zurückgeben\r
                und bekommst die bis dahin mit deinem Investment erzielten Gewinne ausgezahlt.\r
                Die genauen Konditionen, die mit dem Aktienkauf einhergehen, findest du auf dem Informationsblatt.`)},m(n,i){f(n,e,i)},d(n){n&&l(e)}}}function L(o){let e;return{c(){e=z("Informationsblatt herunterladen")},l(n){e=D(n,"Informationsblatt herunterladen")},m(n,i){f(n,e,i)},d(n){n&&l(e)}}}function O(o){let e;return{c(){e=z("Jetzt kaufen")},l(n){e=D(n,"Jetzt kaufen")},m(n,i){f(n,e,i)},d(n){n&&l(e)}}}function Q(o){let e,n,i,t,a,c,u,m,B,d,A;return i=new U({props:{$$slots:{default:[q]},$$scope:{ctx:o}}}),a=new P({props:{$$slots:{default:[N]},$$scope:{ctx:o}}}),m=new j({props:{secondary:!0,download:!0,onClick:o[0],$$slots:{default:[L]},$$scope:{ctx:o}}}),d=new j({props:{next:!0,onClick:o[1],$$slots:{default:[O]},$$scope:{ctx:o}}}),{c(){e=p("div"),n=p("div"),_(i.$$.fragment),t=E(),_(a.$$.fragment),c=E(),u=p("div"),_(m.$$.fragment),B=E(),_(d.$$.fragment),this.h()},l(r){e=g(r,"DIV",{});var s=I(e);n=g(s,"DIV",{style:!0});var h=I(n);b(i.$$.fragment,h),h.forEach(l),t=F(s),b(a.$$.fragment,s),s.forEach(l),c=F(r),u=g(r,"DIV",{class:!0});var $=I(u);b(m.$$.fragment,$),B=F($),b(d.$$.fragment,$),$.forEach(l),this.h()},h(){y(n,"font-family",'"Roboto Serif"'),J(u,"class","mb-0 w-full flex flex-col gap-4")},m(r,s){f(r,e,s),x(e,n),k(i,n,null),x(e,t),k(a,e,null),f(r,c,s),f(r,u,s),k(m,u,null),x(u,B),k(d,u,null),A=!0},p(r,s){const h={};s&4&&(h.$$scope={dirty:s,ctx:r}),i.$set(h);const $={};s&4&&($.$$scope={dirty:s,ctx:r}),a.$set($);const R={};s&4&&(R.$$scope={dirty:s,ctx:r}),m.$set(R);const V={};s&4&&(V.$$scope={dirty:s,ctx:r}),d.$set(V)},i(r){A||(v(i.$$.fragment,r),v(a.$$.fragment,r),v(m.$$.fragment,r),v(d.$$.fragment,r),A=!0)},o(r){w(i.$$.fragment,r),w(a.$$.fragment,r),w(m.$$.fragment,r),w(d.$$.fragment,r),A=!1},d(r){r&&l(e),S(i),S(a),r&&l(c),r&&l(u),S(m),S(d)}}}function T(o){let e,n,i;return n=new M({props:{className:"bg-green-100 p-8 flex flex-col justify-between",$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){e=p("div"),_(n.$$.fragment),this.h()},l(t){e=g(t,"DIV",{style:!0});var a=I(e);b(n.$$.fragment,a),a.forEach(l),this.h()},h(){y(e,"font-family",'"Roboto Slab"')},m(t,a){f(t,e,a),k(n,e,null),i=!0},p(t,[a]){const c={};a&4&&(c.$$scope={dirty:a,ctx:t}),n.$set(c)},i(t){i||(v(n.$$.fragment,t),i=!0)},o(t){w(n.$$.fragment,t),i=!1},d(t){t&&l(e),S(n)}}}function W(o){return[()=>window.location.href="/investor-relations/bedingungen/Bedingungen.pdf",()=>alert("Bitte wende dich persönlich oder über IServ an unser Aktienteam")]}class te extends C{constructor(e){super(),H(this,e,W,T,G,{})}}export{te as component};
