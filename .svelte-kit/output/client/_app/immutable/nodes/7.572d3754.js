import{S as ee,i as te,s as se,e as h,f as Q,c as $,k as g,g as R,d as c,v as ne,b as j,m as W,t as X,h as Y,j as Z,w as ae,l as u,x as y,o as d,y as B,a as E,z as n,A as z}from"../chunks/index.c4faa42e.js";import"../chunks/ua-parser.14468aaf.js";import{I as oe}from"../chunks/InlineButton.7c973b76.js";import{S as le}from"../chunks/Section.f8679b08.js";function re(o){let t;return{c(){t=u("Admin")},l(e){t=d(e,"Admin")},m(e,i){j(e,t,i)},d(e){e&&c(t)}}}function ie(o){let t,e,i,a,l,p,S,T,b,k,f,m,C,x,v,N,P,M,U,F,A,G,q,V,w,I;return w=new oe({props:{invisible:!0,onClick:o[4],$$slots:{default:[re]},$$scope:{ctx:o}}}),{c(){t=h("div"),e=h("t"),i=u(o[0]),a=u(":"),l=u(o[1]),p=u(":"),S=u(o[2]),T=u(":"),b=u(o[3]),k=y(),f=h("div"),m=h("div"),C=u("Tage"),x=y(),v=h("div"),N=u("Stunden"),P=y(),M=h("div"),U=u("Minuten"),F=y(),A=h("div"),G=u("Sekunden"),q=y(),V=h("div"),Q(w.$$.fragment),this.h()},l(s){t=$(s,"DIV",{class:!0});var r=g(t);e=$(r,"T",{class:!0});var _=g(e);i=d(_,o[0]),a=d(_,":"),l=d(_,o[1]),p=d(_,":"),S=d(_,o[2]),T=d(_,":"),b=d(_,o[3]),_.forEach(c),k=B(r),f=$(r,"DIV",{class:!0});var D=g(f);m=$(D,"DIV",{class:!0});var H=g(m);C=d(H,"Tage"),H.forEach(c),x=B(D),v=$(D,"DIV",{class:!0});var J=g(v);N=d(J,"Stunden"),J.forEach(c),P=B(D),M=$(D,"DIV",{class:!0});var K=g(M);U=d(K,"Minuten"),K.forEach(c),F=B(D),A=$(D,"DIV",{class:!0});var L=g(A);G=d(L,"Sekunden"),L.forEach(c),D.forEach(c),r.forEach(c),q=B(s),V=$(s,"DIV",{class:!0});var O=g(V);R(w.$$.fragment,O),O.forEach(c),this.h()},h(){E(e,"class","text-6xl md:text-7xl font-bold tracking-wider"),E(m,"class","center_row"),E(v,"class","center_row"),E(M,"class","center_row"),E(A,"class","center_row"),E(f,"class","w-full grid grid-cols-4 text-xs text-white"),E(t,"class","flex flex-col gap-2"),E(V,"class","absolute bottom-8 w-full center_row")},m(s,r){j(s,t,r),n(t,e),n(e,i),n(e,a),n(e,l),n(e,p),n(e,S),n(e,T),n(e,b),n(t,k),n(t,f),n(f,m),n(m,C),n(f,x),n(f,v),n(v,N),n(f,P),n(f,M),n(M,U),n(f,F),n(f,A),n(A,G),j(s,q,r),j(s,V,r),W(w,V,null),I=!0},p(s,r){(!I||r&1)&&z(i,s[0]),(!I||r&2)&&z(l,s[1]),(!I||r&4)&&z(S,s[2]),(!I||r&8)&&z(b,s[3]);const _={};r&512&&(_.$$scope={dirty:r,ctx:s}),w.$set(_)},i(s){I||(X(w.$$.fragment,s),I=!0)},o(s){Y(w.$$.fragment,s),I=!1},d(s){s&&c(t),s&&c(q),s&&c(V),Z(w)}}}function ce(o){let t,e,i;return e=new le({props:{className:"bg-green-900 center_col text-white",$$slots:{default:[ie]},$$scope:{ctx:o}}}),{c(){t=h("div"),Q(e.$$.fragment),this.h()},l(a){t=$(a,"DIV",{style:!0});var l=g(t);R(e.$$.fragment,l),l.forEach(c),this.h()},h(){ne(t,"font-family",'"Caveat Brush"')},m(a,l){j(a,t,l),W(e,t,null),i=!0},p(a,[l]){const p={};l&527&&(p.$$scope={dirty:l,ctx:a}),e.$set(p)},i(a){i||(X(e.$$.fragment,a),i=!0)},o(a){Y(e.$$.fragment,a),i=!1},d(a){a&&c(t),Z(e)}}}function fe(o,t,e){let i,a,l,p,S,T,b;function k(){function m(C,x){const v=Math.floor(l%C/x);return v/10<1?"0"+v.toString():v}i=new Date,a=new Date("04/15/2024 11:20 AM"),l=a.getTime()-i.getTime(),e(0,p=m(31556952e3,864e5)),e(1,S=m(864e5,36e5)),e(2,T=m(36e5,6e4)),e(3,b=m(6e4,1e3))}return setInterval(k,1e3),ae(k),[p,S,T,b,()=>window.location.href="/drafts/hoffmanns-schuppen/admin"]}class ve extends ee{constructor(t){super(),te(this,t,fe,ce,se,{})}}export{ve as component};
