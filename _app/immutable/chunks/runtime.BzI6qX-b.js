var bt=Array.isArray,Pt=Array.from,Ft=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,Qn=Object.getOwnPropertyDescriptors,Lt=Object.prototype,Mt=Array.prototype,Wn=Object.getPrototypeOf;function qt(n){return typeof n=="function"}const Ht=()=>{};function Yt(n){return n()}function Xn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,yn=4,j=8,en=16,A=32,z=64,W=128,I=256,G=512,h=1024,x=2048,b=4096,k=8192,P=16384,nt=32768,wn=65536,jt=1<<17,tt=1<<19,mn=1<<20,pn=Symbol("$state"),Bt=Symbol("legacy props"),Ut=Symbol("");function Tn(n){return n===this.v}function rt(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function An(n){return!rt(n,this.v)}function et(n){throw new Error("effect_in_teardown")}function at(){throw new Error("effect_in_unowned_derived")}function st(n){throw new Error("effect_orphan")}function lt(){throw new Error("effect_update_depth_exceeded")}function Vt(){throw new Error("hydration_failed")}function Gt(n){throw new Error("props_invalid_value")}function Kt(){throw new Error("state_descriptors_fixed")}function $t(){throw new Error("state_prototype_fixed")}function ot(){throw new Error("state_unsafe_local_read")}function ut(){throw new Error("state_unsafe_mutation")}let J=!1;function Zt(){J=!0}function an(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function zt(n){return gn(an(n))}function it(n,t=!1){var e;const r=an(n);return t||(r.equals=An),J&&u!==null&&u.l!==null&&((e=u.l).s??(e.s=[])).push(r),r}function Jt(n,t=!1){return gn(it(n,t))}function gn(n){return i!==null&&i.f&y&&(T===null?gt([n]):T.push(n)),n}function xn(n,t){return i!==null&&un()&&i.f&(y|en)&&(T===null||!T.includes(n))&&ut(),ft(n,t)}function ft(n,t){return n.equals(t)||(n.v=t,n.version=Vn(),Rn(n,x),un()&&o!==null&&o.f&h&&!(o.f&A)&&(v!==null&&v.includes(n)?(m(o,x),Q(o)):g===null?xt([n]):g.push(n))),t}function Rn(n,t){var r=n.reactions;if(r!==null)for(var e=un(),a=r.length,s=0;s<a;s++){var l=r[s],f=l.f;f&x||!e&&l===o||(m(l,t),f&(h|I)&&(f&y?Rn(l,b):Q(l)))}}const Qt=1,Wt=2,Xt=4,nr=8,tr=16,rr=1,er=2,ar=4,sr=8,lr=16,or=4,ur=1,ir=2,_t="[",ct="[!",vt="]",Sn={},fr=Symbol();function In(n){console.warn("hydration_mismatch")}let S=!1;function _r(n){S=n}let w;function q(n){if(n===null)throw In(),Sn;return w=n}function cr(){return q(O(w))}function vr(n){if(S){if(O(w)!==null)throw In(),Sn;w=n}}function pr(n=1){if(S){for(var t=n,r=w;t--;)r=O(r);w=r}}function hr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===vt){if(n===0)return t;n-=1}else(r===_t||r===ct)&&(n+=1)}var e=O(t);t.remove(),t=e}}var hn,On,Dn;function dr(){if(hn===void 0){hn=window;var n=Element.prototype,t=Node.prototype;On=vn(t,"firstChild").get,Dn=vn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function nn(n){return On.call(n)}function O(n){return Dn.call(n)}function Er(n,t){if(!S)return nn(n);var r=nn(w);if(r===null)r=w.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),q(e),e}return q(r),r}function yr(n,t){if(!S){var r=nn(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function wr(n,t=1,r=!1){let e=S?w:n;for(var a;t--;)a=e,e=O(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var l=X();return e===null?a==null||a.after(l):e.before(l),q(l),l}return q(e),e}function mr(n){n.textContent=""}function pt(n){var t=y|x;o===null?t|=I:o.f|=mn;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:u,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(e),e}function Tr(n){const t=pt(n);return t.equals=An,t}function Cn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?sn(e):L(e)}}}function ht(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Nn(n){var t,r=o;Z(ht(n));try{Cn(n),t=Gn(n)}finally{Z(r)}return t}function kn(n){var t=Nn(n),r=(D||n.f&I)&&n.deps!==null?b:h;m(n,r),n.equals(t)||(n.v=t,n.version=Vn())}function sn(n){Cn(n),Y(n,0),m(n,P),n.v=n.children=n.deps=n.ctx=n.reactions=null}function bn(n){o===null&&i===null&&st(),i!==null&&i.f&I&&at(),on&&et()}function dt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function F(n,t,r,e=!0){var a=(n&z)!==0,s=o,l={ctx:u,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=C;try{dn(!0),B(l),l.f|=nt}catch(_){throw L(l),_}finally{dn(f)}}else t!==null&&Q(l);var p=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&mn)===0;if(!p&&!a&&e&&(s!==null&&dt(l,s),i!==null&&i.f&y)){var d=i;(d.children??(d.children=[])).push(l)}return l}function Ar(n){const t=F(j,null,!1);return m(t,h),t.teardown=n,t}function gr(n){bn();var t=o!==null&&(o.f&A)!==0&&u!==null&&!u.m;if(t){var r=u;(r.e??(r.e=[])).push({fn:n,effect:o,reaction:i})}else{var e=Pn(n);return e}}function xr(n){return bn(),ln(n)}function Rr(n){const t=F(z,n,!0);return()=>{L(t)}}function Pn(n){return F(yn,n,!1)}function Sr(n,t){var r=u,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ln(()=>{n(),!e.ran&&(e.ran=!0,xn(r.l.r2,!0),Ct(t))})}function Ir(){var n=u;ln(()=>{if(Jn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&h&&m(r,b),M(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function ln(n){return F(j,n,!0)}function Or(n){return Et(n)}function Et(n,t=0){return F(j|en|t,n,!0)}function Dr(n,t=!0){return F(j|A,n,!0,t)}function Fn(n){var t=n.teardown;if(t!==null){const r=on,e=i;En(!0),$(null);try{t.call(null)}finally{En(r),$(e)}}}function Ln(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)sn(t[r])}}function Mn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;L(r,t),r=e}}function yt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&A||L(t),t=r}}function L(n,t=!0){var r=!1;if((t||n.f&tt)&&n.nodes_start!==null){for(var e=n.nodes_start,a=n.nodes_end;e!==null;){var s=e===a?null:O(e);e.remove(),e=s}r=!0}Mn(n,t&&!r),Ln(n),Y(n,0),m(n,P);var l=n.transitions;if(l!==null)for(const p of l)p.stop();Fn(n);var f=n.parent;f!==null&&f.first!==null&&qn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function qn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Cr(n,t){var r=[];Hn(n,r,!0),wt(r,()=>{L(n),t&&t()})}function wt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var a of n)a.out(e)}else t()}function Hn(n,t,r){if(!(n.f&k)){if(n.f^=k,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var a=e.next,s=(e.f&wn)!==0||(e.f&A)!==0;Hn(e,t,s?r:!1),e=a}}}function Nr(n){Yn(n,!0)}function Yn(n,t){if(n.f&k){M(n)&&B(n),n.f^=k;for(var r=n.first;r!==null;){var e=r.next,a=(r.f&wn)!==0||(r.f&A)!==0;Yn(r,a?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let K=!1,tn=[];function jn(){K=!1;const n=tn.slice();tn=[],Xn(n)}function kr(n){K||(K=!0,queueMicrotask(jn)),tn.push(n)}function mt(){K&&jn()}function Tt(n){throw new Error("lifecycle_outside_component")}const Bn=0,At=1;let U=!1,V=Bn,H=!1,C=!1,on=!1;function dn(n){C=n}function En(n){on=n}let R=[],N=0;let i=null;function $(n){i=n}let o=null;function Z(n){o=n}let T=null;function gt(n){T=n}let v=null,E=0,g=null;function xt(n){g=n}let Un=0,D=!1,u=null;function Vn(){return++Un}function un(){return!J||u!==null&&u.l===null}function M(n){var l,f;var t=n.f;if(t&x)return!0;if(t&b){var r=n.deps,e=(t&I)!==0;if(r!==null){var a;if(t&G){for(a=0;a<r.length;a++)((l=r[a]).reactions??(l.reactions=[])).push(n);n.f^=G}for(a=0;a<r.length;a++){var s=r[a];if(M(s)&&kn(s),e&&o!==null&&!D&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||m(n,h)}return!1}function Rt(n,t){for(var r=t;r!==null;){if(r.f&W)try{r.fn(n);return}catch{r.f^=W}r=r.parent}throw U=!1,n}function St(n){return(n.f&P)===0&&(n.parent===null||(n.parent.f&W)===0)}function fn(n,t,r,e){if(U){if(r===null&&(U=!1),St(t))throw n;return}r!==null&&(U=!0);{Rt(n,t);return}}function Gn(n){var cn;var t=v,r=E,e=g,a=i,s=D,l=T,f=u,p=n.f;v=null,E=0,g=null,i=p&(A|z)?null:n,D=!C&&(p&I)!==0,T=null,u=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!D)for(c=E;c<_.length;c++)((cn=_[c]).reactions??(cn.reactions=[])).push(n)}else _!==null&&E<_.length&&(Y(n,E),_.length=E);return d}finally{v=t,E=r,g=e,i=a,D=s,T=l,u=f}}function It(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[e]=r[a],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(m(t,b),t.f&(I|G)||(t.f^=G),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)It(n,r[e])}function B(n){var t=n.f;if(!(t&P)){m(n,h);var r=o,e=u;o=n;try{t&en?yt(n):Mn(n),Ln(n),Fn(n);var a=Gn(n);n.teardown=typeof a=="function"?a:null,n.version=Un}catch(s){fn(s,n,r,e||n.ctx)}finally{o=r}}}function Kn(){N>1e3&&(N=0,lt()),N++}function $n(n){var t=n.length;if(t!==0){Kn();var r=C;C=!0;try{for(var e=0;e<t;e++){var a=n[e];a.f&h||(a.f^=h);var s=[];Zn(a,s),Ot(s)}}finally{C=r}}}function Ot(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(P|k)))try{M(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qn(e):e.fn=null))}catch(a){fn(a,e,null,e.ctx)}}}function Dt(){if(H=!1,N>1001)return;const n=R;R=[],$n(n),H||(N=0)}function Q(n){V===Bn&&(H||(H=!0,queueMicrotask(Dt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|A)){if(!(r&h))return;t.f^=h}}R.push(t)}function Zn(n,t){var r=n.first,e=[];n:for(;r!==null;){var a=r.f,s=(a&A)!==0,l=s&&(a&h)!==0,f=r.next;if(!l&&!(a&k))if(a&j){if(s)r.f^=h;else try{M(r)&&B(r)}catch(c){fn(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else a&yn&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Zn(p,t)}function zn(n){var t=V,r=R;try{Kn();const a=[];V=At,R=a,H=!1,$n(r);var e=n==null?void 0:n();return mt(),(R.length>0||a.length>0)&&zn(),N=0,e}finally{V=t,R=r}}async function br(){await Promise.resolve(),zn()}function Jn(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&P){var e=Nn(n);return sn(n),e}if(i!==null){T!==null&&T.includes(n)&&ot();var a=i.deps;v===null&&a!==null&&a[E]===n?E++:v===null?v=[n]:v.push(n),g!==null&&o!==null&&o.f&h&&!(o.f&A)&&g.includes(n)&&(m(o,x),Q(o))}else if(r&&n.deps===null)for(var s=n,l=s.parent,f=s;l!==null;)if(l.f&y){var p=l;f=p,l=p.parent}else{var d=l;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(s=n,M(s)&&kn(s)),n.v}function Ct(n){const t=i;try{return i=null,n()}finally{i=t}}const Nt=~(x|b|h);function m(n,t){n.f=n.f&Nt|t}function Pr(n){return _n().get(n)}function Fr(n,t){return _n().set(n,t),t}function Lr(n){return _n().has(n)}function _n(n){return u===null&&Tt(),u.c??(u.c=new Map(kt(u)||void 0))}function kt(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Mr(n,t=1){var r=+Jn(n);return xn(n,r+t),r}function qr(n,t=!1,r){u={p:u,c:null,e:null,m:!1,s:n,x:null,l:null},J&&!t&&(u.l={s:null,u:null,r1:[],r2:an(!1)})}function Hr(n){const t=u;if(t!==null){const l=t.e;if(l!==null){var r=o,e=i;t.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];Z(s.effect),$(s.reaction),Pn(s.fn)}}finally{Z(r),$(e)}}u=t.p,t.m=!0}return{}}function Yr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(pn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&pn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Wn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qn(r);for(let a in e){const s=e[a].get;if(s)try{s.call(n)}catch{}}}}}export{pn as $,q as A,xn as B,zn as C,Ft as D,it as E,br as F,zt as G,mr as H,kr as I,$ as J,Z as K,Bt as L,i as M,Ar as N,bt as O,dr as P,_t as Q,O as R,Sn as S,ur as T,_r as U,vt as V,In as W,Vt as X,Pt as Y,Rr as Z,Dr as _,cr as a,Lt as a0,Mt as a1,an as a2,Kt as a3,fr as a4,vn as a5,$t as a6,Wn as a7,Et as a8,Nr as a9,wt as aA,L as aB,Xt as aC,nr as aD,tr as aE,Ut as aF,Qn as aG,en as aH,nt as aI,or as aJ,un as aK,Pr as aL,Sr as aM,Ir as aN,Jt as aO,pr as aP,Fr as aQ,hn as aR,Lr as aS,Cr as aa,wn as ab,ct as ac,hr as ad,Pn as ae,ln as af,Gt as ag,jt as ah,ar as ai,An as aj,Mr as ak,A as al,z as am,rr as an,J as ao,er as ap,sr as aq,Tr as ar,qt as as,lr as at,Tt as au,k as av,Qt as aw,ft as ax,Wt as ay,Hn as az,gr as b,u as c,Ct as d,Yt as e,Yr as f,Jn as g,S as h,pt as i,Zt as j,yr as k,Hr as l,Er as m,Ht as n,vr as o,qr as p,wr as q,Xn as r,rt as s,Or as t,xr as u,X as v,nn as w,o as x,ir as y,w as z};
