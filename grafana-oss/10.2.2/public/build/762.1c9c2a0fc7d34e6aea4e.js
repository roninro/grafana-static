"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[762],{762:(Ne,pe,C)=>{C.d(pe,{J:()=>le,O:()=>ge});var v=C(67163),fe=C.n(v),x=C(39953),N=C(5229),P=C(12573),R=C(13253),Q=C(45050),he=C(328),ve=C(41407),q=C(82803),ee=C(69171),$=C(9558),H=C(95712);function G(J){return J.name===H.GC?"Grafana":J.name.slice(0,37)}const ie=({disabled:J=!1})=>{const ue=(0,q.wW)(K),{selectedAlertmanager:we,availableAlertManagers:V,setSelectedAlertmanager:ye}=(0,he.ZA)(),Ze=(0,x.useMemo)(()=>V.map(ce=>({label:G(ce),value:ce.name,imgUrl:ce.imgUrl,meta:ce.meta})),[V]);return x.createElement(ee._,{className:ue.field,label:J?"Alertmanager":"Choose Alertmanager",disabled:J||Ze.length===1,"data-testid":"alertmanager-picker"},x.createElement($.Ph,{"aria-label":J?"Alertmanager":"Choose Alertmanager",width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:ce=>{ce?.value&&ye(ce.value)},options:Ze,maxMenuHeight:500,noOptionsMessage:"No datasources found",value:we,getOptionLabel:ce=>ce.label}))},K=J=>({field:(0,ve.css)`
    margin: 0;
  `});var re=C(33155);const ke=()=>x.createElement(re.b,{title:"No Alertmanager found",severity:"warning"},"We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."),me=()=>x.createElement(re.b,{title:"Selected Alertmanager not found.",severity:"warning"},"The selected Alertmanager no longer exists or you may not have permission to access it. You can select a different Alertmanager from the dropdown."),je=({availableAlertManagers:J})=>{const ue=J.length>0;return x.createElement("div",null,ue?x.createElement(me,null):x.createElement(ke,null))},be="ctrl+1",Te=new(fe())(document.body),le=({children:J,pageId:ue,pageNav:we,actions:V,isLoading:ye})=>{const[Ze,ce]=(0,x.useState)(!1);return(0,x.useEffect)(()=>(Te.bind(be,()=>{ce(dt=>!dt)}),()=>{Te.unbind(be)}),[]),x.createElement(N.AN,{features:Q.Z},x.createElement(R.T,{pageNav:we,navId:ue,actions:V},x.createElement(R.T.Contents,{isLoading:ye},J)),Ze?x.createElement(N.zJ,{defaultOpen:!0}):null)},ge=({children:J,accessType:ue,...we})=>{const V=Ae();return x.createElement(he.h5,{accessType:ue},x.createElement(le,{...we,actions:x.createElement(ie,{disabled:V})},x.createElement(Ie,null,J)))};function Ae(){const J=(0,P.Z)();return["/edit","/new"].some(we=>J?.pathname?.includes(we))}const Ie=({children:J})=>{const{availableAlertManagers:ue,selectedAlertmanager:we}=(0,he.ZA)();return we?x.createElement(x.Fragment,null,J):x.createElement(je,{availableAlertManagers:ue})}},45050:(Ne,pe,C)=>{C.d(pe,{Z:()=>N,v:()=>fe});var v=C(32688),fe=(P=>(P.NotificationPoliciesV2MatchingInstances="notification-policies.v2.matching-instances",P.DetailsViewV2="details-view.v2",P.ContactPointsV2="contact-points.v2",P))(fe||{});const N=[{name:"notification-policies.v2.matching-instances",defaultValue:v.config.featureToggles.alertingNotificationsPoliciesMatchingInstances},{name:"contact-points.v2",defaultValue:!1},{name:"details-view.v2",defaultValue:!1}]},328:(Ne,pe,C)=>{C.d(pe,{h5:()=>ve,ZA:()=>q});var v=C(39953),fe=C(67650),x=C(23062),N=C(47858),P=C(95712);function R(G){return(0,v.useMemo)(()=>(0,P.LE)(G),[G])}var Q=C(63483);const he=v.createContext(void 0),ve=({children:G,accessType:ie,alertmanagerSourceName:K})=>{const[re,ke]=(0,fe.K)(),me=R(ie),je=v.useCallback(ye=>{ee(me,ye)&&(ye===P.GC?(x.Z.delete(Q.de),ke({[Q.c4]:null})):(x.Z.set(Q.de,ye),ke({[Q.c4]:ye})))},[me,ke]),be=re[Q.c4],Te=x.Z.get(Q.de),le=P.GC,ge=K??be??Te??le,Ae=ee(me,ge)?ge:void 0,Ie=(0,P.EQ)(Ae)?.jsonData,J=Ae===P.GC,ue=Ie?H(Ie):!1,V={selectedAlertmanager:Ae,hasConfigurationAPI:J||ue,isGrafanaAlertmanager:J,selectedAlertmanagerConfig:Ie,availableAlertManagers:me,setSelectedAlertmanager:je};return v.createElement(he.Provider,{value:V},G)};function q(){const G=v.useContext(he);if(G===void 0)throw new Error("useAlertmanager must be used within a AlertmanagerContext");return G}function ee(G,ie){return G.map(re=>re.name).includes(ie)}const $=[N.sK.mimir,N.sK.cortex,void 0];function H(G){return $.includes(G.implementation)}},5229:(Ne,pe,C)=>{C.d(pe,{kC:()=>Xi,WZ:()=>Hi,AN:()=>Bi,zJ:()=>qi,Qb:()=>Jr});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var v=function(){return v=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},v.apply(this,arguments)};function fe(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function x(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function N(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(l){o={error:l}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return a}function P(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var R;(function(e){e.Start="xstate.start",e.Stop="xstate.stop",e.Raise="xstate.raise",e.Send="xstate.send",e.Cancel="xstate.cancel",e.NullEvent="",e.Assign="xstate.assign",e.After="xstate.after",e.DoneState="done.state",e.DoneInvoke="done.invoke",e.Log="xstate.log",e.Init="xstate.init",e.Invoke="xstate.invoke",e.ErrorExecution="error.execution",e.ErrorCommunication="error.communication",e.ErrorPlatform="error.platform",e.ErrorCustom="xstate.error",e.Update="xstate.update",e.Pure="xstate.pure",e.Choose="xstate.choose"})(R||(R={}));var Q;(function(e){e.Parent="#_parent",e.Internal="#_internal"})(Q||(Q={}));var he=R.Start,ve=R.Stop,q=R.Raise,ee=R.Send,$=R.Cancel,H=R.NullEvent,G=R.Assign,ie=R.After,K=R.DoneState,re=R.Log,ke=R.Init,me=R.Invoke,je=R.ErrorExecution,be=R.ErrorPlatform,Te=R.ErrorCustom,le=R.Update,ge=R.Choose,Ae=R.Pure,Ie=".",J={},ue="xstate.guard",we="",V=!0,ye;function Ze(e){return Object.keys(e)}function ce(e,t,r){r===void 0&&(r=Ie);var n=Ke(e,r),i=Ke(t,r);return _(i)?_(n)?i===n:!1:_(n)?n in i:Object.keys(n).every(function(a){return a in i?ce(n[a],i[a]):!1})}function dt(e){try{return _(e)||typeof e=="number"?"".concat(e):e.type}catch{throw new Error("Events must be strings or objects with a string event.type property.")}}function ta(e){try{return _(e)||typeof e=="number"?"".concat(e):U(e)?e.name:e.type}catch{throw new Error("Actions must be strings or objects with a string action.type property.")}}function jt(e,t){try{return Ue(e)?e:e.toString().split(t)}catch{throw new Error("'".concat(e,"' is not a valid state path."))}}function Yr(e){return typeof e=="object"&&"value"in e&&"context"in e&&"event"in e&&"_event"in e}function Ke(e,t){if(Yr(e))return e.value;if(Ue(e))return ft(e);if(typeof e!="string")return e;var r=jt(e,t);return ft(r)}function ft(e){if(e.length===1)return e[0];for(var t={},r=t,n=0;n<e.length-1;n++)n===e.length-2?r[e[n]]=e[n+1]:(r[e[n]]={},r=r[e[n]]);return t}function Qe(e,t){for(var r={},n=Object.keys(e),i=0;i<n.length;i++){var a=n[i];r[a]=t(e[a],a,e,i)}return r}function qt(e,t,r){var n,i,a={};try{for(var o=x(Object.keys(e)),l=o.next();!l.done;l=o.next()){var s=l.value,u=e[s];r(u)&&(a[s]=t(u,s,e))}}catch(d){n={error:d}}finally{try{l&&!l.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return a}var Xr=function(e){return function(t){var r,n,i=t;try{for(var a=x(e),o=a.next();!o.done;o=a.next()){var l=o.value;i=i[l]}}catch(s){r={error:s}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i}};function Zr(e,t){return function(r){var n,i,a=r;try{for(var o=x(e),l=o.next();!l.done;l=o.next()){var s=l.value;a=a[t][s]}}catch(u){n={error:u}}finally{try{l&&!l.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return a}}function ht(e){if(!e)return[[]];if(_(e))return[[e]];var t=Y(Object.keys(e).map(function(r){var n=e[r];return typeof n!="string"&&(!n||!Object.keys(n).length)?[[r]]:ht(e[r]).map(function(i){return[r].concat(i)})}));return t}function ra(e){var t,r,n={};if(e&&e.length===1&&e[0].length===1)return e[0][0];try{for(var i=__values(e),a=i.next();!a.done;a=i.next())for(var o=a.value,l=n,s=0;s<o.length;s++){var u=o[s];if(s===o.length-2){l[u]=o[s+1];break}l[u]=l[u]||{},l=l[u]}}catch(d){t={error:d}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n}function Y(e){var t;return(t=[]).concat.apply(t,P([],N(e),!1))}function er(e){return Ue(e)?e:[e]}function Se(e){return e===void 0?[]:er(e)}function pt(e,t,r){var n,i;if(U(e))return e(t,r.data);var a={};try{for(var o=x(Object.keys(e)),l=o.next();!l.done;l=o.next()){var s=l.value,u=e[s];U(u)?a[s]=u(t,r.data):a[s]=u}}catch(d){n={error:d}}finally{try{l&&!l.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return a}function Kr(e){return/^(done|error)\./.test(e)}function tr(e){return!!(e instanceof Promise||e!==null&&(U(e)||typeof e=="object")&&U(e.then))}function Qr(e){return e!==null&&typeof e=="object"&&"transition"in e&&typeof e.transition=="function"}function qr(e,t){var r,n,i=N([[],[]],2),a=i[0],o=i[1];try{for(var l=x(e),s=l.next();!s.done;s=l.next()){var u=s.value;t(u)?a.push(u):o.push(u)}}catch(d){r={error:d}}finally{try{s&&!s.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return[a,o]}function rr(e,t){return Qe(e.states,function(r,n){if(r){var i=(_(t)?void 0:t[n])||(r?r.current:void 0);if(i)return{current:i,states:rr(r,i)}}})}function en(e,t){return{current:t,states:rr(e,t)}}function nr(e,t,r,n){V||ne(!!e,"Attempting to update undefined context");var i=e&&r.reduce(function(a,o){var l,s,u=o.assignment,d={state:n,action:o,_event:t},h={};if(U(u))h=u(a,t.data,d);else try{for(var c=x(Object.keys(u)),p=c.next();!p.done;p=c.next()){var g=p.value,y=u[g];h[g]=U(y)?y(a,t.data,d):y}}catch(O){l={error:O}}finally{try{p&&!p.done&&(s=c.return)&&s.call(c)}finally{if(l)throw l.error}}return Object.assign({},a,h)},e);return i}var ne=function(){};V||(ne=function(e,t){var r=e instanceof Error?e:void 0;if(!(!r&&e)&&console!==void 0){var n=["Warning: ".concat(t)];r&&n.push(r),console.warn.apply(console,n)}});function Ue(e){return Array.isArray(e)}function U(e){return typeof e=="function"}function _(e){return typeof e=="string"}function ir(e,t){if(e)return _(e)?{type:ue,name:e,predicate:t?t[e]:void 0}:U(e)?{type:ue,name:e.name,predicate:e}:e}function tn(e){try{return"subscribe"in e&&U(e.subscribe)}catch{return!1}}var De=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),na=(ye={},ye[De]=function(){return this},ye[Symbol.observable]=function(){return this},ye);function Ce(e){return!!e&&"__xstatenode"in e}function rn(e){return!!e&&typeof e.send=="function"}var nn=function(){var e=0;return function(){return e++,e.toString(16)}}();function vt(e,t){return _(e)||typeof e=="number"?v({type:e},t):e}function ae(e,t){if(!_(e)&&"$$type"in e&&e.$$type==="scxml")return e;var r=vt(e);return v({name:r.type,data:r,$$type:"scxml",type:"external"},t)}function Ge(e,t){var r=er(t).map(function(n){return typeof n>"u"||typeof n=="string"||Ce(n)?{target:n,event:e}:v(v({},n),{event:e})});return r}function an(e){if(!(e===void 0||e===we))return Se(e)}function on(e,t,r){if(!V){var n=e.stack?" Stacktrace was '".concat(e.stack,"'"):"";if(e===t)console.error("Missing onError handler for invocation '".concat(r,"', error was '").concat(e,"'.").concat(n));else{var i=t.stack?" Stacktrace was '".concat(t.stack,"'"):"";console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(r,"'. ")+"Original error: '".concat(e,"'. ").concat(n," Current error is '").concat(t,"'.").concat(i))}}}function ar(e,t,r,n,i){var a=e.options.guards,o={state:i,cond:t,_event:n};if(t.type===ue)return(a?.[t.name]||t.predicate)(r,n.data,o);var l=a?.[t.type];if(!l)throw new Error("Guard '".concat(t.type,"' is not implemented on machine '").concat(e.id,"'."));return l(r,n.data,o)}function or(e){return typeof e=="string"?{type:e}:e}function mt(e,t,r){var n=function(){},i=typeof e=="object",a=i?e:null;return{next:((i?e.next:e)||n).bind(a),error:((i?e.error:t)||n).bind(a),complete:((i?e.complete:r)||n).bind(a)}}function gt(e,t){return"".concat(e,":invocation[").concat(t,"]")}function It(e){return(e.type===q||e.type===ee&&e.to===Q.Internal)&&typeof e.delay!="number"}var yt=function(e){return e.type==="atomic"||e.type==="final"};function sr(e){return Object.keys(e.states).map(function(t){return e.states[t]})}function qe(e){return sr(e).filter(function(t){return t.type!=="history"})}function lr(e){var t=[e];return yt(e)?t:t.concat(Y(qe(e).map(lr)))}function et(e,t){var r,n,i,a,o,l,s,u,d=new Set(e),h=Dt(d),c=new Set(t);try{for(var p=x(c),g=p.next();!g.done;g=p.next())for(var y=g.value,O=y.parent;O&&!c.has(O);)c.add(O),O=O.parent}catch(k){r={error:k}}finally{try{g&&!g.done&&(n=p.return)&&n.call(p)}finally{if(r)throw r.error}}var S=Dt(c);try{for(var w=x(c),E=w.next();!E.done;E=w.next()){var y=E.value;if(y.type==="compound"&&(!S.get(y)||!S.get(y).length))h.get(y)?h.get(y).forEach(function(W){return c.add(W)}):y.initialStateNodes.forEach(function(W){return c.add(W)});else if(y.type==="parallel")try{for(var A=(o=void 0,x(qe(y))),I=A.next();!I.done;I=A.next()){var F=I.value;c.has(F)||(c.add(F),h.get(F)?h.get(F).forEach(function(W){return c.add(W)}):F.initialStateNodes.forEach(function(W){return c.add(W)}))}}catch(W){o={error:W}}finally{try{I&&!I.done&&(l=A.return)&&l.call(A)}finally{if(o)throw o.error}}}}catch(k){i={error:k}}finally{try{E&&!E.done&&(a=w.return)&&a.call(w)}finally{if(i)throw i.error}}try{for(var L=x(c),D=L.next();!D.done;D=L.next())for(var y=D.value,O=y.parent;O&&!c.has(O);)c.add(O),O=O.parent}catch(k){s={error:k}}finally{try{D&&!D.done&&(u=L.return)&&u.call(L)}finally{if(s)throw s.error}}return c}function ur(e,t){var r=t.get(e);if(!r)return{};if(e.type==="compound"){var n=r[0];if(n){if(yt(n))return n.key}else return{}}var i={};return r.forEach(function(a){i[a.key]=ur(a,t)}),i}function Dt(e){var t,r,n=new Map;try{for(var i=x(e),a=i.next();!a.done;a=i.next()){var o=a.value;n.has(o)||n.set(o,[]),o.parent&&(n.has(o.parent)||n.set(o.parent,[]),n.get(o.parent).push(o))}}catch(l){t={error:l}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n}function sn(e,t){var r=et([e],t);return ur(e,Dt(r))}function tt(e,t){return Array.isArray(e)?e.some(function(r){return r===t}):e instanceof Set?e.has(t):!1}function ln(e){return P([],N(new Set(Y(P([],N(e.map(function(t){return t.ownEvents})),!1)))),!1)}function bt(e,t){return t.type==="compound"?qe(t).some(function(r){return r.type==="final"&&tt(e,r)}):t.type==="parallel"?qe(t).every(function(r){return bt(e,r)}):!1}function un(e){return e===void 0&&(e=[]),e.reduce(function(t,r){return r.meta!==void 0&&(t[r.id]=r.meta),t},{})}function cr(e){return new Set(Y(e.map(function(t){return t.tags})))}var Ve=ae({type:ke});function Rt(e,t){return t&&t[e]||void 0}function rt(e,t){var r;if(_(e)||typeof e=="number"){var n=Rt(e,t);U(n)?r={type:e,exec:n}:n?r=n:r={type:e,exec:void 0}}else if(U(e))r={type:e.name||e.toString(),exec:e};else{var n=Rt(e.type,t);if(U(n))r=v(v({},e),{exec:n});else if(n){var i=n.type||e.type;r=v(v(v({},n),e),{type:i})}else r=e}return r}var Re=function(e,t){if(!e)return[];var r=Ue(e)?e:[e];return r.map(function(n){return rt(n,t)})};function Lt(e){var t=rt(e);return v(v({id:_(e)?e:t.id},t),{type:t.type})}function cn(e,t){return{type:q,event:typeof e=="function"?e:vt(e),delay:t?t.delay:void 0,id:t?.id}}function dn(e,t,r,n){var i={_event:r},a=ae(U(e.event)?e.event(t,r.data,i):e.event),o;if(_(e.delay)){var l=n&&n[e.delay];o=U(l)?l(t,r.data,i):l}else o=U(e.delay)?e.delay(t,r.data,i):e.delay;return v(v({},e),{type:q,_event:a,delay:o})}function nt(e,t){return{to:t?t.to:void 0,type:ee,event:U(e)?e:vt(e),delay:t?t.delay:void 0,id:t&&t.id!==void 0?t.id:U(e)?e.name:dt(e)}}function fn(e,t,r,n){var i={_event:r},a=ae(U(e.event)?e.event(t,r.data,i):e.event),o;if(_(e.delay)){var l=n&&n[e.delay];o=U(l)?l(t,r.data,i):l}else o=U(e.delay)?e.delay(t,r.data,i):e.delay;var s=U(e.to)?e.to(t,r.data,i):e.to;return v(v({},e),{to:s,_event:a,event:a.data,delay:o})}function dr(e,t){return nt(e,__assign(__assign({},t),{to:SpecialTargets.Parent}))}function ia(e,t,r){return nt(t,__assign(__assign({},r),{to:e}))}function aa(){return dr(update)}function oa(e,t){return nt(e,__assign(__assign({},t),{to:function(r,n,i){var a=i._event;return a.origin}}))}var hn=function(e,t){return{context:e,event:t}};function sa(e,t){return e===void 0&&(e=hn),{type:log$1,label:t,expr:e}}var pn=function(e,t,r){return v(v({},e),{value:_(e.expr)?e.expr:e.expr(t,r.data,{_event:r})})},vn=function(e){return{type:$,sendId:e}};function mn(e){var t=Lt(e);return{type:R.Start,activity:t,exec:void 0}}function gn(e){var t=U(e)?e:Lt(e);return{type:R.Stop,activity:t,exec:void 0}}function yn(e,t,r){var n=U(e.activity)?e.activity(t,r.data):e.activity,i=typeof n=="string"?{id:n}:n,a={type:R.Stop,activity:i};return a}var bn=function(e){return{type:G,assignment:e}};function la(e){return typeof e=="object"&&"type"in e}function wn(e,t){var r=t?"#".concat(t):"";return"".concat(R.After,"(").concat(e,")").concat(r)}function wt(e,t){var r="".concat(R.DoneState,".").concat(e),n={type:r,data:t};return n.toString=function(){return r},n}function xt(e,t){var r="".concat(R.DoneInvoke,".").concat(e),n={type:r,data:t};return n.toString=function(){return r},n}function it(e,t){var r="".concat(R.ErrorPlatform,".").concat(e),n={type:r,data:t};return n.toString=function(){return r},n}function ua(e){return{type:ActionTypes.Pure,get:e}}function ca(e,t){if(!IS_PRODUCTION&&(!e||typeof e=="function")){var r=e;e=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var a=typeof r=="function"?r.apply(void 0,__spreadArray([],__read(n),!1)):r;if(!a)throw new Error("Attempted to forward event to undefined actor. This risks an infinite loop in the sender.");return a}}return nt(function(n,i){return i},__assign(__assign({},t),{to:e}))}function da(e,t){return dr(function(r,n,i){return{type:error$1,data:isFunction(e)?e(r,n,i):e}},__assign(__assign({},t),{to:SpecialTargets.Parent}))}function fa(e){return{type:ActionTypes.Choose,conds:e}}var xn=function(e){var t,r,n=[];try{for(var i=x(e),a=i.next();!a.done;a=i.next())for(var o=a.value,l=0;l<o.actions.length;){if(o.actions[l].type===G){n.push(o.actions[l]),o.actions.splice(l,1);continue}l++}}catch(s){t={error:s}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n};function St(e,t,r,n,i,a,o){o===void 0&&(o=!1);var l=o?[]:xn(i),s=l.length?nr(r,n,l,t):r,u=o?[r]:void 0,d=[];function h(g,y){var O;switch(y.type){case q:{var S=dn(y,s,n,e.options.delays);return a&&typeof S.delay=="number"&&a(S,s,n),S}case ee:var w=fn(y,s,n,e.options.delays);if(!V){var E=y.delay;ne(!_(E)||typeof w.delay=="number","No delay reference for delay expression '".concat(E,"' was found on machine '").concat(e.id,"'"))}return a&&w.to!==Q.Internal&&(g==="entry"?d.push(w):a(w,s,n)),w;case re:{var A=pn(y,s,n);return a?.(A,s,n),A}case ge:{var I=y,F=(O=I.conds.find(function(Pe){var j=ir(Pe.cond,e.options.guards);return!j||ar(e,j,s,n,a?void 0:t)}))===null||O===void 0?void 0:O.actions;if(!F)return[];var L=N(St(e,t,s,n,[{type:g,actions:Re(Se(F),e.options.actions)}],a,o),2),D=L[0],k=L[1];return s=k,u?.push(s),D}case Ae:{var F=y.get(s,n.data);if(!F)return[];var W=N(St(e,t,s,n,[{type:g,actions:Re(Se(F),e.options.actions)}],a,o),2),T=W[0],z=W[1];return s=z,u?.push(s),T}case ve:{var A=yn(y,s,n);return a?.(A,r,n),A}case G:{s=nr(s,n,[y],a?void 0:t),u?.push(s);break}default:var X=rt(y,e.options.actions),de=X.exec;if(a)a(X,s,n);else if(de&&u){var Me=u.length-1,Le=v(v({},X),{exec:function(Pe){for(var j=[],B=1;B<arguments.length;B++)j[B-1]=arguments[B];de.apply(void 0,P([u[Me]],N(j),!1))}});X=Le}return X}}function c(g){var y,O,S=[];try{for(var w=x(g.actions),E=w.next();!E.done;E=w.next()){var A=E.value,I=h(g.type,A);I&&(S=S.concat(I))}}catch(F){y={error:F}}finally{try{E&&!E.done&&(O=w.return)&&O.call(w)}finally{if(y)throw y.error}}return d.forEach(function(F){a(F,s,n)}),d.length=0,S}var p=Y(i.map(c));return[p,s]}function fr(e,t){if(e===t)return!0;if(e===void 0||t===void 0)return!1;if(_(e)||_(t))return e===t;var r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(function(i){return fr(e[i],t[i])})}function Sn(e){return typeof e!="object"||e===null?!1:"value"in e&&"_event"in e}var ha=null;function En(e,t){var r=e.exec,n=v(v({},e),{exec:r!==void 0?function(){return r(t.context,t.event,{action:e,state:t,_event:t._event})}:void 0});return n}var xe=function(){function e(t){var r=this,n;this.actions=[],this.activities=J,this.meta={},this.events=[],this.value=t.value,this.context=t.context,this._event=t._event,this._sessionid=t._sessionid,this.event=this._event.data,this.historyValue=t.historyValue,this.history=t.history,this.actions=t.actions||[],this.activities=t.activities||J,this.meta=un(t.configuration),this.events=t.events||[],this.matches=this.matches.bind(this),this.toStrings=this.toStrings.bind(this),this.configuration=t.configuration,this.transitions=t.transitions,this.children=t.children,this.done=!!t.done,this.tags=(n=Array.isArray(t.tags)?new Set(t.tags):t.tags)!==null&&n!==void 0?n:new Set,this.machine=t.machine,Object.defineProperty(this,"nextEvents",{get:function(){return ln(r.configuration)}})}return e.from=function(t,r){if(t instanceof e)return t.context!==r?new e({value:t.value,context:r,_event:t._event,_sessionid:null,historyValue:t.historyValue,history:t.history,actions:[],activities:t.activities,meta:{},events:[],configuration:[],transitions:[],children:{}}):t;var n=Ve;return new e({value:t,context:r,_event:n,_sessionid:null,historyValue:void 0,history:void 0,actions:[],activities:void 0,meta:void 0,events:[],configuration:[],transitions:[],children:{}})},e.create=function(t){return new e(t)},e.inert=function(t,r){if(t instanceof e){if(!t.actions.length)return t;var n=Ve;return new e({value:t.value,context:r,_event:n,_sessionid:null,historyValue:t.historyValue,history:t.history,activities:t.activities,configuration:t.configuration,transitions:[],children:{}})}return e.from(t,r)},e.prototype.toStrings=function(t,r){var n=this;if(t===void 0&&(t=this.value),r===void 0&&(r="."),_(t))return[t];var i=Object.keys(t);return i.concat.apply(i,P([],N(i.map(function(a){return n.toStrings(t[a],r).map(function(o){return a+r+o})})),!1))},e.prototype.toJSON=function(){var t=this;t.configuration,t.transitions;var r=t.tags;t.machine;var n=fe(t,["configuration","transitions","tags","machine"]);return v(v({},n),{tags:Array.from(r)})},e.prototype.matches=function(t){return ce(t,this.value)},e.prototype.hasTag=function(t){return this.tags.has(t)},e.prototype.can=function(t){var r;V&&ne(!!this.machine,"state.can(...) used outside of a machine-created State object; this will always return false.");var n=(r=this.machine)===null||r===void 0?void 0:r.getTransitionData(this,t);return!!n?.transitions.length&&n.transitions.some(function(i){return i.target!==void 0||i.actions.length})},e}(),Et=[],$e=function(e,t){Et.push(e);var r=t(e);return Et.pop(),r},On=function(e){return e(Et[Et.length-1])};function hr(e){var t;return t={id:e,send:function(){},subscribe:function(){return{unsubscribe:function(){}}},getSnapshot:function(){},toJSON:function(){return{id:e}}},t[De]=function(){return this},t}function kn(e,t,r,n){var i,a=or(e.src),o=(i=t?.options.services)===null||i===void 0?void 0:i[a.type],l=e.data?pt(e.data,r,n):void 0,s=o?_t(o,e.id,l):hr(e.id);return s.meta=e,s}function _t(e,t,r){var n=hr(t);if(n.deferred=!0,Ce(e)){var i=n.state=$e(void 0,function(){return(r?e.withContext(r):e).initialState});n.getSnapshot=function(){return i}}return n}function An(e){try{return typeof e.send=="function"}catch{return!1}}function Nn(e){return An(e)&&"id"in e}function Tn(e){var t;return v((t={subscribe:function(){return{unsubscribe:function(){}}},id:"anonymous",getSnapshot:function(){}},t[De]=function(){return this},t),e)}function Cn(e){if(typeof e=="string"){var t={type:e};return t.toString=function(){return e},t}return e}function Ot(e){return v(v({type:me},e),{toJSON:function(){e.onDone,e.onError;var t=fe(e,["onDone","onError"]);return v(v({},t),{type:me,src:Cn(e.src)})}})}var Be="",Ft="#",at="*",We={},He=function(e){return e[0]===Ft},Pn=function(){return{actions:{},guards:{},services:{},activities:{},delays:{}}},jn=function(e,t,r){var n=r.slice(0,-1).some(function(a){return!("cond"in a)&&!("in"in a)&&(_(a.target)||Ce(a.target))}),i=t===Be?"the transient event":"event '".concat(t,"'");ne(!n,"One or more transitions for ".concat(i," on state '").concat(e.id,"' are unreachable. ")+"Make sure that the default transition is the last one defined.")},In=function(){function e(t,r,n,i){n===void 0&&(n="context"in t?t.context:void 0);var a=this,o;this.config=t,this._context=n,this.order=-1,this.__xstatenode=!0,this.__cache={events:void 0,relativeValue:new Map,initialStateValue:void 0,initialState:void 0,on:void 0,transitions:void 0,candidates:{},delayedTransitions:void 0},this.idMap={},this.tags=[],this.options=Object.assign(Pn(),r),this.parent=i?.parent,this.key=this.config.key||i?.key||this.config.id||"(machine)",this.machine=this.parent?this.parent.machine:this,this.path=this.parent?this.parent.path.concat(this.key):[],this.delimiter=this.config.delimiter||(this.parent?this.parent.delimiter:Ie),this.id=this.config.id||P([this.machine.key],N(this.path),!1).join(this.delimiter),this.version=this.parent?this.parent.version:this.config.version,this.type=this.config.type||(this.config.parallel?"parallel":this.config.states&&Object.keys(this.config.states).length?"compound":this.config.history?"history":"atomic"),this.schema=this.parent?this.machine.schema:(o=this.config.schema)!==null&&o!==void 0?o:{},this.description=this.config.description,V||ne(!("parallel"in this.config),'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel?"Replace with `type: 'parallel'`":"Use `type: '".concat(this.type,"'`")," in the config for state node '").concat(this.id,"' instead.")),this.initial=this.config.initial,this.states=this.config.states?Qe(this.config.states,function(u,d){var h,c=new e(u,{},void 0,{parent:a,key:d});return Object.assign(a.idMap,v((h={},h[c.id]=c,h),c.idMap)),c}):We;var l=0;function s(u){var d,h;u.order=l++;try{for(var c=x(sr(u)),p=c.next();!p.done;p=c.next()){var g=p.value;s(g)}}catch(y){d={error:y}}finally{try{p&&!p.done&&(h=c.return)&&h.call(c)}finally{if(d)throw d.error}}}s(this),this.history=this.config.history===!0?"shallow":this.config.history||!1,this._transient=!!this.config.always||(this.config.on?Array.isArray(this.config.on)?this.config.on.some(function(u){var d=u.event;return d===Be}):Be in this.config.on:!1),this.strict=!!this.config.strict,this.onEntry=Se(this.config.entry||this.config.onEntry).map(function(u){return rt(u)}),this.onExit=Se(this.config.exit||this.config.onExit).map(function(u){return rt(u)}),this.meta=this.config.meta,this.doneData=this.type==="final"?this.config.data:void 0,this.invoke=Se(this.config.invoke).map(function(u,d){var h,c;if(Ce(u)){var p=gt(a.id,d);return a.machine.options.services=v((h={},h[p]=u,h),a.machine.options.services),Ot({src:p,id:p})}else if(_(u.src)){var p=u.id||gt(a.id,d);return Ot(v(v({},u),{id:p,src:u.src}))}else if(Ce(u.src)||U(u.src)){var p=u.id||gt(a.id,d);return a.machine.options.services=v((c={},c[p]=u.src,c),a.machine.options.services),Ot(v(v({id:p},u),{src:p}))}else{var g=u.src;return Ot(v(v({id:gt(a.id,d)},u),{src:g}))}}),this.activities=Se(this.config.activities).concat(this.invoke).map(function(u){return Lt(u)}),this.transition=this.transition.bind(this),this.tags=Se(this.config.tags)}return e.prototype._init=function(){this.__cache.transitions||lr(this).forEach(function(t){return t.on})},e.prototype.withConfig=function(t,r){var n=this.options,i=n.actions,a=n.activities,o=n.guards,l=n.services,s=n.delays;return new e(this.config,{actions:v(v({},i),t.actions),activities:v(v({},a),t.activities),guards:v(v({},o),t.guards),services:v(v({},l),t.services),delays:v(v({},s),t.delays)},r??this.context)},e.prototype.withContext=function(t){return new e(this.config,this.options,t)},Object.defineProperty(e.prototype,"context",{get:function(){return U(this._context)?this._context():this._context},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"definition",{get:function(){return{id:this.id,key:this.key,version:this.version,context:this.context,type:this.type,initial:this.initial,history:this.history,states:Qe(this.states,function(t){return t.definition}),on:this.on,transitions:this.transitions,entry:this.onEntry,exit:this.onExit,activities:this.activities||[],meta:this.meta,order:this.order||-1,data:this.doneData,invoke:this.invoke,description:this.description,tags:this.tags}},enumerable:!1,configurable:!0}),e.prototype.toJSON=function(){return this.definition},Object.defineProperty(e.prototype,"on",{get:function(){if(this.__cache.on)return this.__cache.on;var t=this.transitions;return this.__cache.on=t.reduce(function(r,n){return r[n.eventType]=r[n.eventType]||[],r[n.eventType].push(n),r},{})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"after",{get:function(){return this.__cache.delayedTransitions||(this.__cache.delayedTransitions=this.getDelayedTransitions(),this.__cache.delayedTransitions)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"transitions",{get:function(){return this.__cache.transitions||(this.__cache.transitions=this.formatTransitions(),this.__cache.transitions)},enumerable:!1,configurable:!0}),e.prototype.getCandidates=function(t){if(this.__cache.candidates[t])return this.__cache.candidates[t];var r=t===Be,n=this.transitions.filter(function(i){var a=i.eventType===t;return r?a:a||i.eventType===at});return this.__cache.candidates[t]=n,n},e.prototype.getDelayedTransitions=function(){var t=this,r=this.config.after;if(!r)return[];var n=function(a,o){var l=U(a)?"".concat(t.id,":delay[").concat(o,"]"):a,s=wn(l,t.id);return t.onEntry.push(nt(s,{delay:a})),t.onExit.push(vn(s)),s},i=Ue(r)?r.map(function(a,o){var l=n(a.delay,o);return v(v({},a),{event:l})}):Y(Object.keys(r).map(function(a,o){var l=r[a],s=_(l)?{target:l}:l,u=isNaN(+a)?a:+a,d=n(u,o);return Se(s).map(function(h){return v(v({},h),{event:d,delay:u})})}));return i.map(function(a){var o=a.delay;return v(v({},t.formatTransition(a)),{delay:o})})},e.prototype.getStateNodes=function(t){var r,n=this;if(!t)return[];var i=t instanceof xe?t.value:Ke(t,this.delimiter);if(_(i)){var a=this.getStateNode(i).initial;return a!==void 0?this.getStateNodes((r={},r[i]=a,r)):[this,this.states[i]]}var o=Object.keys(i),l=[this];return l.push.apply(l,P([],N(Y(o.map(function(s){return n.getStateNode(s).getStateNodes(i[s])}))),!1)),l},e.prototype.handles=function(t){var r=dt(t);return this.events.includes(r)},e.prototype.resolveState=function(t){var r=t instanceof xe?t:xe.create(t),n=Array.from(et([],this.getStateNodes(r.value)));return new xe(v(v({},r),{value:this.resolve(r.value),configuration:n,done:bt(n,this),tags:cr(n),machine:this.machine}))},e.prototype.transitionLeafNode=function(t,r,n){var i=this.getStateNode(t),a=i.next(r,n);return!a||!a.transitions.length?this.next(r,n):a},e.prototype.transitionCompoundNode=function(t,r,n){var i=Object.keys(t),a=this.getStateNode(i[0]),o=a._transition(t[i[0]],r,n);return!o||!o.transitions.length?this.next(r,n):o},e.prototype.transitionParallelNode=function(t,r,n){var i,a,o={};try{for(var l=x(Object.keys(t)),s=l.next();!s.done;s=l.next()){var u=s.value,d=t[u];if(d){var h=this.getStateNode(u),c=h._transition(d,r,n);c&&(o[u]=c)}}}catch(S){i={error:S}}finally{try{s&&!s.done&&(a=l.return)&&a.call(l)}finally{if(i)throw i.error}}var p=Object.keys(o).map(function(S){return o[S]}),g=Y(p.map(function(S){return S.transitions})),y=p.some(function(S){return S.transitions.length>0});if(!y)return this.next(r,n);var O=Y(Object.keys(o).map(function(S){return o[S].configuration}));return{transitions:g,exitSet:Y(p.map(function(S){return S.exitSet})),configuration:O,source:r,actions:Y(Object.keys(o).map(function(S){return o[S].actions}))}},e.prototype._transition=function(t,r,n){return _(t)?this.transitionLeafNode(t,r,n):Object.keys(t).length===1?this.transitionCompoundNode(t,r,n):this.transitionParallelNode(t,r,n)},e.prototype.getTransitionData=function(t,r){return this._transition(t.value,t,ae(r))},e.prototype.next=function(t,r){var n,i,a=this,o=r.name,l=[],s=[],u;try{for(var d=x(this.getCandidates(o)),h=d.next();!h.done;h=d.next()){var c=h.value,p=c.cond,g=c.in,y=t.context,O=g?_(g)&&He(g)?t.matches(Ke(this.getStateNodeById(g).path,this.delimiter)):ce(Ke(g,this.delimiter),Xr(this.path.slice(0,-2))(t.value)):!0,S=!1;try{S=!p||ar(this.machine,p,y,r,t)}catch(A){throw new Error("Unable to evaluate guard '".concat(p.name||p.type,"' in transition for event '").concat(o,"' in state node '").concat(this.id,`':
`).concat(A.message))}if(S&&O){c.target!==void 0&&(s=c.target),l.push.apply(l,P([],N(c.actions),!1)),u=c;break}}}catch(A){n={error:A}}finally{try{h&&!h.done&&(i=d.return)&&i.call(d)}finally{if(n)throw n.error}}if(u){if(!s.length)return{transitions:[u],exitSet:[],configuration:t.value?[this]:[],source:t,actions:l};var w=Y(s.map(function(A){return a.getRelativeStateNodes(A,t.historyValue)})),E=!!u.internal;return{transitions:[u],exitSet:E?[]:Y(s.map(function(A){return a.getPotentiallyReenteringNodes(A)})),configuration:w,source:t,actions:l}}},e.prototype.getPotentiallyReenteringNodes=function(t){if(this.order<t.order)return[this];for(var r=[],n=this,i=t;n&&n!==i;)r.push(n),n=n.parent;return n!==i?[]:(r.push(i),r)},e.prototype.getActions=function(t,r,n,i,a,o,l){var s,u,d,h,c=this,p=o?et([],this.getStateNodes(o.value)):[],g=new Set;try{for(var y=x(Array.from(t).sort(function(T,z){return T.order-z.order})),O=y.next();!O.done;O=y.next()){var S=O.value;(!tt(p,S)||tt(n.exitSet,S)||S.parent&&g.has(S.parent))&&g.add(S)}}catch(T){s={error:T}}finally{try{O&&!O.done&&(u=y.return)&&u.call(y)}finally{if(s)throw s.error}}try{for(var w=x(p),E=w.next();!E.done;E=w.next()){var S=E.value;(!tt(t,S)||tt(n.exitSet,S.parent))&&n.exitSet.push(S)}}catch(T){d={error:T}}finally{try{E&&!E.done&&(h=w.return)&&h.call(w)}finally{if(d)throw d.error}}n.exitSet.sort(function(T,z){return z.order-T.order});var A=Array.from(g).sort(function(T,z){return T.order-z.order}),I=new Set(n.exitSet),F=Y(A.map(function(T){var z=[];if(T.type!=="final")return z;var X=T.parent;if(!X.parent)return z;z.push(wt(T.id,T.doneData),wt(X.id,T.doneData?pt(T.doneData,i,a):void 0));var de=X.parent;return de.type==="parallel"&&qe(de).every(function(Me){return bt(n.configuration,Me)})&&z.push(wt(de.id)),z})),L=A.map(function(T){var z=T.onEntry,X=T.activities.map(function(de){return mn(de)});return{type:"entry",actions:Re(l?P(P([],N(z),!1),N(X),!1):P(P([],N(X),!1),N(z),!1),c.machine.options.actions)}}).concat({type:"state_done",actions:F.map(function(T){return cn(T)})}),D=Array.from(I).map(function(T){return{type:"exit",actions:Re(P(P([],N(T.onExit),!1),N(T.activities.map(function(z){return gn(z)})),!1),c.machine.options.actions)}}),k=D.concat({type:"transition",actions:Re(n.actions,this.machine.options.actions)}).concat(L);if(r){var W=Re(Y(P([],N(t),!1).sort(function(T,z){return z.order-T.order}).map(function(T){return T.onExit})),this.machine.options.actions).filter(function(T){return!It(T)});return k.concat({type:"stop",actions:W})}return k},e.prototype.transition=function(t,r,n,i){t===void 0&&(t=this.initialState);var a=ae(r),o;if(t instanceof xe)o=n===void 0?t:this.resolveState(xe.from(t,n));else{var l=_(t)?this.resolve(ft(this.getResolvedPath(t))):this.resolve(t),s=n??this.machine.context;o=this.resolveState(xe.from(l,s))}if(!V&&a.name===at)throw new Error("An event cannot have the wildcard type ('".concat(at,"')"));if(this.strict&&!this.events.includes(a.name)&&!Kr(a.name))throw new Error("Machine '".concat(this.id,"' does not accept event '").concat(a.name,"'"));var u=this._transition(o.value,o,a)||{transitions:[],configuration:[],exitSet:[],source:o,actions:[]},d=et([],this.getStateNodes(o.value)),h=u.configuration.length?et(d,u.configuration):d;return u.configuration=P([],N(h),!1),this.resolveTransition(u,o,o.context,i,a)},e.prototype.resolveRaisedTransition=function(t,r,n,i){var a,o=t.actions;return t=this.transition(t,r,void 0,i),t._event=n,t.event=n.data,(a=t.actions).unshift.apply(a,P([],N(o),!1)),t},e.prototype.resolveTransition=function(t,r,n,i,a){var o,l,s,u,d=this;a===void 0&&(a=Ve);var h=t.configuration,c=!r||t.transitions.length>0,p=c?t.configuration:r?r.configuration:[],g=bt(p,this),y=c?sn(this.machine,h):void 0,O=r?r.historyValue?r.historyValue:t.source?this.machine.historyValue(r.value):void 0:void 0,S=this.getActions(new Set(p),g,t,n,a,r,i),w=r?v({},r.activities):{};try{for(var E=x(S),A=E.next();!A.done;A=E.next()){var I=A.value;try{for(var F=(s=void 0,x(I.actions)),L=F.next();!L.done;L=F.next()){var D=L.value;D.type===he?w[D.activity.id||D.activity.type]=D:D.type===ve&&(w[D.activity.id||D.activity.type]=!1)}}catch(Oe){s={error:Oe}}finally{try{L&&!L.done&&(u=F.return)&&u.call(F)}finally{if(s)throw s.error}}}}catch(Oe){o={error:Oe}}finally{try{A&&!A.done&&(l=E.return)&&l.call(E)}finally{if(o)throw o.error}}var k=N(St(this,r,n,a,S,i,this.machine.config.predictableActionArguments||this.machine.config.preserveActionOrder),2),W=k[0],T=k[1],z=N(qr(W,It),2),X=z[0],de=z[1],Me=W.filter(function(Oe){var Xe;return Oe.type===he&&((Xe=Oe.activity)===null||Xe===void 0?void 0:Xe.type)===me}),Le=Me.reduce(function(Oe,Xe){return Oe[Xe.activity.id]=kn(Xe.activity,d.machine,T,a),Oe},r?v({},r.children):{}),Pe=new xe({value:y||r.value,context:T,_event:a,_sessionid:r?r._sessionid:null,historyValue:y?O?en(O,y):void 0:r?r.historyValue:void 0,history:!y||t.source?r:void 0,actions:y?de:[],activities:y?w:r?r.activities:{},events:[],configuration:p,transitions:t.transitions,children:Le,done:g,tags:cr(p),machine:this}),j=n!==T;Pe.changed=a.name===le||j;var B=Pe.history;B&&delete B.history;var oe=!g&&(this._transient||h.some(function(Oe){return Oe._transient}));if(!c&&(!oe||a.name===Be))return Pe;var te=Pe;if(!g)for(oe&&(te=this.resolveRaisedTransition(te,{type:H},a,i));X.length;){var se=X.shift();te=this.resolveRaisedTransition(te,se._event,a,i)}var ze=te.changed||(B?!!te.actions.length||j||typeof B.value!=typeof te.value||!fr(te.value,B.value):void 0);return te.changed=ze,te.history=B,te},e.prototype.getStateNode=function(t){if(He(t))return this.machine.getStateNodeById(t);if(!this.states)throw new Error("Unable to retrieve child state '".concat(t,"' from '").concat(this.id,"'; no child states exist."));var r=this.states[t];if(!r)throw new Error("Child state '".concat(t,"' does not exist on '").concat(this.id,"'"));return r},e.prototype.getStateNodeById=function(t){var r=He(t)?t.slice(Ft.length):t;if(r===this.id)return this;var n=this.machine.idMap[r];if(!n)throw new Error("Child state node '#".concat(r,"' does not exist on machine '").concat(this.id,"'"));return n},e.prototype.getStateNodeByPath=function(t){if(typeof t=="string"&&He(t))try{return this.getStateNodeById(t.slice(1))}catch{}for(var r=jt(t,this.delimiter).slice(),n=this;r.length;){var i=r.shift();if(!i.length)break;n=n.getStateNode(i)}return n},e.prototype.resolve=function(t){var r,n=this;if(!t)return this.initialStateValue||We;switch(this.type){case"parallel":return Qe(this.initialStateValue,function(a,o){return a?n.getStateNode(o).resolve(t[o]||a):We});case"compound":if(_(t)){var i=this.getStateNode(t);return i.type==="parallel"||i.type==="compound"?(r={},r[t]=i.initialStateValue,r):t}return Object.keys(t).length?Qe(t,function(a,o){return a?n.getStateNode(o).resolve(a):We}):this.initialStateValue||{};default:return t||We}},e.prototype.getResolvedPath=function(t){if(He(t)){var r=this.machine.idMap[t.slice(Ft.length)];if(!r)throw new Error("Unable to find state node '".concat(t,"'"));return r.path}return jt(t,this.delimiter)},Object.defineProperty(e.prototype,"initialStateValue",{get:function(){var t;if(this.__cache.initialStateValue)return this.__cache.initialStateValue;var r;if(this.type==="parallel")r=qt(this.states,function(n){return n.initialStateValue||We},function(n){return n.type!=="history"});else if(this.initial!==void 0){if(!this.states[this.initial])throw new Error("Initial state '".concat(this.initial,"' not found on '").concat(this.key,"'"));r=yt(this.states[this.initial])?this.initial:(t={},t[this.initial]=this.states[this.initial].initialStateValue,t)}else r={};return this.__cache.initialStateValue=r,this.__cache.initialStateValue},enumerable:!1,configurable:!0}),e.prototype.getInitialState=function(t,r){this._init();var n=this.getStateNodes(t);return this.resolveTransition({configuration:n,exitSet:[],transitions:[],source:void 0,actions:[]},void 0,r??this.machine.context,void 0)},Object.defineProperty(e.prototype,"initialState",{get:function(){var t=this.initialStateValue;if(!t)throw new Error("Cannot retrieve initial state from simple state '".concat(this.id,"'."));return this.getInitialState(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"target",{get:function(){var t;if(this.type==="history"){var r=this.config;_(r.target)?t=He(r.target)?ft(this.machine.getStateNodeById(r.target).path.slice(this.path.length-1)):r.target:t=r.target}return t},enumerable:!1,configurable:!0}),e.prototype.getRelativeStateNodes=function(t,r,n){return n===void 0&&(n=!0),n?t.type==="history"?t.resolveHistory(r):t.initialStateNodes:[t]},Object.defineProperty(e.prototype,"initialStateNodes",{get:function(){var t=this;if(yt(this))return[this];if(this.type==="compound"&&!this.initial)return V||ne(!1,"Compound state node '".concat(this.id,"' has no initial state.")),[this];var r=ht(this.initialStateValue);return Y(r.map(function(n){return t.getFromRelativePath(n)}))},enumerable:!1,configurable:!0}),e.prototype.getFromRelativePath=function(t){if(!t.length)return[this];var r=N(t),n=r[0],i=r.slice(1);if(!this.states)throw new Error("Cannot retrieve subPath '".concat(n,"' from node with no states"));var a=this.getStateNode(n);if(a.type==="history")return a.resolveHistory();if(!this.states[n])throw new Error("Child state '".concat(n,"' does not exist on '").concat(this.id,"'"));return this.states[n].getFromRelativePath(i)},e.prototype.historyValue=function(t){if(Object.keys(this.states).length)return{current:t||this.initialStateValue,states:qt(this.states,function(r,n){if(!t)return r.historyValue();var i=_(t)?void 0:t[n];return r.historyValue(i||r.initialStateValue)},function(r){return!r.history})}},e.prototype.resolveHistory=function(t){var r=this;if(this.type!=="history")return[this];var n=this.parent;if(!t){var i=this.target;return i?Y(ht(i).map(function(o){return n.getFromRelativePath(o)})):n.initialStateNodes}var a=Zr(n.path,"states")(t).current;return _(a)?[n.getStateNode(a)]:Y(ht(a).map(function(o){return r.history==="deep"?n.getFromRelativePath(o):[n.states[o[0]]]}))},Object.defineProperty(e.prototype,"stateIds",{get:function(){var t=this,r=Y(Object.keys(this.states).map(function(n){return t.states[n].stateIds}));return[this.id].concat(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"events",{get:function(){var t,r,n,i;if(this.__cache.events)return this.__cache.events;var a=this.states,o=new Set(this.ownEvents);if(a)try{for(var l=x(Object.keys(a)),s=l.next();!s.done;s=l.next()){var u=s.value,d=a[u];if(d.states)try{for(var h=(n=void 0,x(d.events)),c=h.next();!c.done;c=h.next()){var p=c.value;o.add("".concat(p))}}catch(g){n={error:g}}finally{try{c&&!c.done&&(i=h.return)&&i.call(h)}finally{if(n)throw n.error}}}}catch(g){t={error:g}}finally{try{s&&!s.done&&(r=l.return)&&r.call(l)}finally{if(t)throw t.error}}return this.__cache.events=Array.from(o)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ownEvents",{get:function(){var t=new Set(this.transitions.filter(function(r){return!(!r.target&&!r.actions.length&&r.internal)}).map(function(r){return r.eventType}));return Array.from(t)},enumerable:!1,configurable:!0}),e.prototype.resolveTarget=function(t){var r=this;if(t!==void 0)return t.map(function(n){if(!_(n))return n;var i=n[0]===r.delimiter;if(i&&!r.parent)return r.getStateNodeByPath(n.slice(1));var a=i?r.key+n:n;if(r.parent)try{var o=r.parent.getStateNodeByPath(a);return o}catch(l){throw new Error("Invalid transition definition for state node '".concat(r.id,`':
`).concat(l.message))}else return r.getStateNodeByPath(a)})},e.prototype.formatTransition=function(t){var r=this,n=an(t.target),i="internal"in t?t.internal:n?n.some(function(s){return _(s)&&s[0]===r.delimiter}):!0,a=this.machine.options.guards,o=this.resolveTarget(n),l=v(v({},t),{actions:Re(Se(t.actions)),cond:ir(t.cond,a),target:o,source:this,internal:i,eventType:t.event,toJSON:function(){return v(v({},l),{target:l.target?l.target.map(function(s){return"#".concat(s.id)}):void 0,source:"#".concat(r.id)})}});return l},e.prototype.formatTransitions=function(){var t,r,n=this,i;if(!this.config.on)i=[];else if(Array.isArray(this.config.on))i=this.config.on;else{var a=this.config.on,o=at,l=a[o],s=l===void 0?[]:l,u=fe(a,[typeof o=="symbol"?o:o+""]);i=Y(Object.keys(u).map(function(w){!V&&w===Be&&ne(!1,"Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. "+'Please check the `on` configuration for "#'.concat(n.id,'".'));var E=Ge(w,u[w]);return V||jn(n,w,E),E}).concat(Ge(at,s)))}var d=this.config.always?Ge("",this.config.always):[],h=this.config.onDone?Ge(String(wt(this.id)),this.config.onDone):[];V||ne(!(this.config.onDone&&!this.parent),'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id,'".'));var c=Y(this.invoke.map(function(w){var E=[];return w.onDone&&E.push.apply(E,P([],N(Ge(String(xt(w.id)),w.onDone)),!1)),w.onError&&E.push.apply(E,P([],N(Ge(String(it(w.id)),w.onError)),!1)),E})),p=this.after,g=Y(P(P(P(P([],N(h),!1),N(c),!1),N(i),!1),N(d),!1).map(function(w){return Se(w).map(function(E){return n.formatTransition(E)})}));try{for(var y=x(p),O=y.next();!O.done;O=y.next()){var S=O.value;g.push(S)}}catch(w){t={error:w}}finally{try{O&&!O.done&&(r=y.return)&&r.call(y)}finally{if(t)throw t.error}}return g},e}(),pr=!1;function pa(e,t,r){return r===void 0&&(r=e.context),new StateNode(e,t,r)}function vr(e,t){return!V&&!("predictableActionArguments"in e)&&!pr&&(pr=!0,console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")),new In(e,t)}var Je=bn,va=null,ma=null,ga=null,ya=null,ba=null,wa=null,xa=null,Dn={deferEvents:!1},mr=function(){function e(t){this.processingEvent=!1,this.queue=[],this.initialized=!1,this.options=v(v({},Dn),t)}return e.prototype.initialize=function(t){if(this.initialized=!0,t){if(!this.options.deferEvents){this.schedule(t);return}this.process(t)}this.flushEvents()},e.prototype.schedule=function(t){if(!this.initialized||this.processingEvent){this.queue.push(t);return}if(this.queue.length!==0)throw new Error("Event queue should be empty when it is not processing events");this.process(t),this.flushEvents()},e.prototype.clear=function(){this.queue=[]},e.prototype.flushEvents=function(){for(var t=this.queue.shift();t;)this.process(t),t=this.queue.shift()},e.prototype.process=function(t){this.processingEvent=!0;try{t()}catch(r){throw this.clear(),r}finally{this.processingEvent=!1}},e}(),Mt=new Map,Rn=0,ot={bookId:function(){return"x:".concat(Rn++)},register:function(e,t){return Mt.set(e,t),e},get:function(e){return Mt.get(e)},free:function(e){Mt.delete(e)}};function zt(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof C.g<"u")return C.g;V||console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues")}function Ln(){var e=zt();if(e&&"__xstate__"in e)return e.__xstate__}function _n(e){if(zt()){var t=Ln();t&&t.register(e)}}function Sa(e,t){return{transition:e,initialState:t}}function Ea(e){var t={error:void 0,data:void 0,status:"pending"};return{transition:function(r,n,i){var a=i.parent,o=i.id,l=i.observers;switch(n.type){case"fulfill":return a?.send(doneInvoke(o,n.data)),{error:void 0,data:n.data,status:"fulfilled"};case"reject":return a?.send(error(o,n.error)),l.forEach(function(s){s.error(n.error)}),{error:n.error,data:void 0,status:"rejected"};default:return r}},initialState:t,start:function(r){var n=r.self;return e().then(function(i){n.send({type:"fulfill",data:i})},function(i){n.send({type:"reject",error:i})}),t}}}function Fn(e,t){t===void 0&&(t={});var r=e.initialState,n=new Set,i=[],a=!1,o=function(){if(!a){for(a=!0;i.length>0;){var u=i.shift();r=e.transition(r,u,s),n.forEach(function(d){return d.next(r)})}a=!1}},l=Tn({id:t.id,send:function(u){i.push(u),o()},getSnapshot:function(){return r},subscribe:function(u,d,h){var c=mt(u,d,h);return n.add(c),c.next(r),{unsubscribe:function(){n.delete(c)}}}}),s={parent:t.parent,self:l,id:t.id||"anonymous",observers:n};return r=e.start?e.start(s):r,l}var Ut={sync:!1,autoForward:!1},Z;(function(e){e[e.NotStarted=0]="NotStarted",e[e.Running=1]="Running",e[e.Stopped=2]="Stopped"})(Z||(Z={}));var Mn=function(){function e(t,r){r===void 0&&(r=e.defaultOptions);var n=this;this.machine=t,this.delayedEventsMap={},this.listeners=new Set,this.contextListeners=new Set,this.stopListeners=new Set,this.doneListeners=new Set,this.eventListeners=new Set,this.sendListeners=new Set,this.initialized=!1,this.status=Z.NotStarted,this.children=new Map,this.forwardTo=new Set,this._outgoingQueue=[],this.init=this.start,this.send=function(d,h){if(Ue(d))return n.batch(d),n.state;var c=ae(vt(d,h));if(n.status===Z.Stopped)return V||ne(!1,'Event "'.concat(c.name,'" was sent to stopped service "').concat(n.machine.id,`". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(c.data))),n.state;if(n.status!==Z.Running&&!n.options.deferEvents)throw new Error('Event "'.concat(c.name,'" was sent to uninitialized service "').concat(n.machine.id,`". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(c.data)));return n.scheduler.schedule(function(){n.forward(c);var p=n._nextState(c);n.update(p,c)}),n._state},this.sendTo=function(d,h,c){var p=n.parent&&(h===Q.Parent||n.parent.id===h),g=p?n.parent:_(h)?h===Q.Internal?n:n.children.get(h)||ot.get(h):rn(h)?h:void 0;if(!g){if(!p)throw new Error("Unable to send event to child '".concat(h,"' from service '").concat(n.id,"'."));V||ne(!1,"Service '".concat(n.id,"' has no parent: unable to send event ").concat(d.type));return}if("machine"in g){if(n.status!==Z.Stopped||n.parent!==g||n.state.done){var y=v(v({},d),{name:d.name===Te?"".concat(it(n.id)):d.name,origin:n.sessionId});!c&&n.machine.config.predictableActionArguments?n._outgoingQueue.push([g,y]):g.send(y)}}else!c&&n.machine.config.predictableActionArguments?n._outgoingQueue.push([g,d.data]):g.send(d.data)},this._exec=function(d,h,c,p){p===void 0&&(p=n.machine.options.actions);var g=d.exec||Rt(d.type,p),y=U(g)?g:g?g.exec:d.exec;if(y)try{return y(h,c.data,n.machine.config.predictableActionArguments?{action:d,_event:c}:{action:d,state:n.state,_event:c})}catch(de){throw n.parent&&n.parent.send({type:"xstate.error",data:de}),de}switch(d.type){case q:{var O=d;n.defer(O);break}case ee:var S=d;if(typeof S.delay=="number"){n.defer(S);return}else S.to?n.sendTo(S._event,S.to,c===Ve):n.send(S._event);break;case $:n.cancel(d.sendId);break;case he:{if(n.status!==Z.Running)return;var w=d.activity;if(!n.machine.config.predictableActionArguments&&!n.state.activities[w.id||w.type])break;if(w.type===R.Invoke){var E=or(w.src),A=n.machine.options.services?n.machine.options.services[E.type]:void 0,I=w.id,F=w.data;V||ne(!("forward"in w),"`forward` property is deprecated (found in invocation of '".concat(w.src,"' in in machine '").concat(n.machine.id,"'). ")+"Please use `autoForward` instead.");var L="autoForward"in w?w.autoForward:!!w.forward;if(!A){V||ne(!1,"No service found for invocation '".concat(w.src,"' in machine '").concat(n.machine.id,"'."));return}var D=F?pt(F,h,c):void 0;if(typeof A=="string")return;var k=U(A)?A(h,c.data,{data:D,src:E,meta:w.meta}):A;if(!k)return;var W=void 0;Ce(k)&&(k=D?k.withContext(D):k,W={autoForward:L}),n.spawn(k,I,W)}else n.spawnActivity(w);break}case ve:{n.stopChild(d.activity.id);break}case re:var T=d,z=T.label,X=T.value;z?n.logger(z,X):n.logger(X);break;default:V||ne(!1,"No implementation found for action type '".concat(d.type,"'"));break}};var i=v(v({},e.defaultOptions),r),a=i.clock,o=i.logger,l=i.parent,s=i.id,u=s!==void 0?s:t.id;this.id=u,this.logger=o,this.clock=a,this.parent=l,this.options=i,this.scheduler=new mr({deferEvents:this.options.deferEvents}),this.sessionId=ot.bookId()}return Object.defineProperty(e.prototype,"initialState",{get:function(){var t=this;return this._initialState?this._initialState:$e(this,function(){return t._initialState=t.machine.initialState,t._initialState})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return V||ne(this.status!==Z.NotStarted,"Attempted to read state from uninitialized service '".concat(this.id,"'. Make sure the service is started first.")),this._state},enumerable:!1,configurable:!0}),e.prototype.execute=function(t,r){var n,i;try{for(var a=x(t.actions),o=a.next();!o.done;o=a.next()){var l=o.value;this.exec(l,t,r)}}catch(s){n={error:s}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},e.prototype.update=function(t,r){var n,i,a,o,l,s,u,d,h=this;if(t._sessionid=this.sessionId,this._state=t,(!this.machine.config.predictableActionArguments||r===Ve)&&this.options.execute)this.execute(this.state);else for(var c=void 0;c=this._outgoingQueue.shift();)c[0].send(c[1]);if(this.children.forEach(function(k){h.state.children[k.id]=k}),this.devTools&&this.devTools.send(r.data,t),t.event)try{for(var p=x(this.eventListeners),g=p.next();!g.done;g=p.next()){var y=g.value;y(t.event)}}catch(k){n={error:k}}finally{try{g&&!g.done&&(i=p.return)&&i.call(p)}finally{if(n)throw n.error}}try{for(var O=x(this.listeners),S=O.next();!S.done;S=O.next()){var y=S.value;y(t,t.event)}}catch(k){a={error:k}}finally{try{S&&!S.done&&(o=O.return)&&o.call(O)}finally{if(a)throw a.error}}try{for(var w=x(this.contextListeners),E=w.next();!E.done;E=w.next()){var A=E.value;A(this.state.context,this.state.history?this.state.history.context:void 0)}}catch(k){l={error:k}}finally{try{E&&!E.done&&(s=w.return)&&s.call(w)}finally{if(l)throw l.error}}if(this.state.done){var I=t.configuration.find(function(k){return k.type==="final"&&k.parent===h.machine}),F=I&&I.doneData?pt(I.doneData,t.context,r):void 0;this._doneEvent=xt(this.id,F);try{for(var L=x(this.doneListeners),D=L.next();!D.done;D=L.next()){var y=D.value;y(this._doneEvent)}}catch(k){u={error:k}}finally{try{D&&!D.done&&(d=L.return)&&d.call(L)}finally{if(u)throw u.error}}this._stop(),this._stopChildren(),ot.free(this.sessionId)}},e.prototype.onTransition=function(t){return this.listeners.add(t),this.status===Z.Running&&t(this.state,this.state.event),this},e.prototype.subscribe=function(t,r,n){var i=this,a=mt(t,r,n);this.listeners.add(a.next),this.status!==Z.NotStarted&&a.next(this.state);var o=function(){i.doneListeners.delete(o),i.stopListeners.delete(o),a.complete()};return this.status===Z.Stopped?a.complete():(this.onDone(o),this.onStop(o)),{unsubscribe:function(){i.listeners.delete(a.next),i.doneListeners.delete(o),i.stopListeners.delete(o)}}},e.prototype.onEvent=function(t){return this.eventListeners.add(t),this},e.prototype.onSend=function(t){return this.sendListeners.add(t),this},e.prototype.onChange=function(t){return this.contextListeners.add(t),this},e.prototype.onStop=function(t){return this.stopListeners.add(t),this},e.prototype.onDone=function(t){return this.status===Z.Stopped&&this._doneEvent?t(this._doneEvent):this.doneListeners.add(t),this},e.prototype.off=function(t){return this.listeners.delete(t),this.eventListeners.delete(t),this.sendListeners.delete(t),this.stopListeners.delete(t),this.doneListeners.delete(t),this.contextListeners.delete(t),this},e.prototype.start=function(t){var r=this;if(this.status===Z.Running)return this;this.machine._init(),ot.register(this.sessionId,this),this.initialized=!0,this.status=Z.Running;var n=t===void 0?this.initialState:$e(this,function(){return Sn(t)?r.machine.resolveState(t):r.machine.resolveState(xe.from(t,r.machine.context))});return this.options.devTools&&this.attachDev(),this.scheduler.initialize(function(){r.update(n,Ve)}),this},e.prototype._stopChildren=function(){this.children.forEach(function(t){U(t.stop)&&t.stop()}),this.children.clear()},e.prototype._stop=function(){var t,r,n,i,a,o,l,s,u,d;try{for(var h=x(this.listeners),c=h.next();!c.done;c=h.next()){var p=c.value;this.listeners.delete(p)}}catch(L){t={error:L}}finally{try{c&&!c.done&&(r=h.return)&&r.call(h)}finally{if(t)throw t.error}}try{for(var g=x(this.stopListeners),y=g.next();!y.done;y=g.next()){var p=y.value;p(),this.stopListeners.delete(p)}}catch(L){n={error:L}}finally{try{y&&!y.done&&(i=g.return)&&i.call(g)}finally{if(n)throw n.error}}try{for(var O=x(this.contextListeners),S=O.next();!S.done;S=O.next()){var p=S.value;this.contextListeners.delete(p)}}catch(L){a={error:L}}finally{try{S&&!S.done&&(o=O.return)&&o.call(O)}finally{if(a)throw a.error}}try{for(var w=x(this.doneListeners),E=w.next();!E.done;E=w.next()){var p=E.value;this.doneListeners.delete(p)}}catch(L){l={error:L}}finally{try{E&&!E.done&&(s=w.return)&&s.call(w)}finally{if(l)throw l.error}}if(!this.initialized)return this;this.initialized=!1,this.status=Z.Stopped,this._initialState=void 0;try{for(var A=x(Object.keys(this.delayedEventsMap)),I=A.next();!I.done;I=A.next()){var F=I.value;this.clock.clearTimeout(this.delayedEventsMap[F])}}catch(L){u={error:L}}finally{try{I&&!I.done&&(d=A.return)&&d.call(A)}finally{if(u)throw u.error}}this.scheduler.clear(),this.scheduler=new mr({deferEvents:this.options.deferEvents})},e.prototype.stop=function(){var t=this,r=this.scheduler;return this._stop(),r.schedule(function(){var n=ae({type:"xstate.stop"}),i=$e(t,function(){var a=Y(P([],N(t.state.configuration),!1).sort(function(d,h){return h.order-d.order}).map(function(d){return Re(d.onExit,t.machine.options.actions)})),o=N(St(t.machine,t.state,t.state.context,n,[{type:"exit",actions:a}],t.machine.config.predictableActionArguments?t._exec:void 0,t.machine.config.predictableActionArguments||t.machine.config.preserveActionOrder),2),l=o[0],s=o[1],u=new xe({value:t.state.value,context:s,_event:n,_sessionid:t.sessionId,historyValue:void 0,history:t.state,actions:l.filter(function(d){return!It(d)}),activities:{},events:[],configuration:[],transitions:[],children:{},done:t.state.done,tags:t.state.tags,machine:t.machine});return u.changed=!0,u});t.update(i,n),t._stopChildren(),ot.free(t.sessionId)}),this},e.prototype.batch=function(t){var r=this;if(this.status===Z.NotStarted&&this.options.deferEvents)V||ne(!1,"".concat(t.length,' event(s) were sent to uninitialized service "').concat(this.machine.id,`" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));else if(this.status!==Z.Running)throw new Error("".concat(t.length,' event(s) were sent to uninitialized service "').concat(this.machine.id,'". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));if(t.length){var n=!!this.machine.config.predictableActionArguments&&this._exec;this.scheduler.schedule(function(){var i,a,o=r.state,l=!1,s=[],u=function(p){var g=ae(p);r.forward(g),o=$e(r,function(){return r.machine.transition(o,g,void 0,n||void 0)}),s.push.apply(s,P([],N(r.machine.config.predictableActionArguments?o.actions:o.actions.map(function(y){return En(y,o)})),!1)),l=l||!!o.changed};try{for(var d=x(t),h=d.next();!h.done;h=d.next()){var c=h.value;u(c)}}catch(p){i={error:p}}finally{try{h&&!h.done&&(a=d.return)&&a.call(d)}finally{if(i)throw i.error}}o.changed=l,o.actions=s,r.update(o,ae(t[t.length-1]))})}},e.prototype.sender=function(t){return this.send.bind(this,t)},e.prototype._nextState=function(t,r){var n=this;r===void 0&&(r=!!this.machine.config.predictableActionArguments&&this._exec);var i=ae(t);if(i.name.indexOf(be)===0&&!this.state.nextEvents.some(function(o){return o.indexOf(be)===0}))throw i.data.data;var a=$e(this,function(){return n.machine.transition(n.state,i,void 0,r||void 0)});return a},e.prototype.nextState=function(t){return this._nextState(t,!1)},e.prototype.forward=function(t){var r,n;try{for(var i=x(this.forwardTo),a=i.next();!a.done;a=i.next()){var o=a.value,l=this.children.get(o);if(!l)throw new Error("Unable to forward event '".concat(t,"' from interpreter '").concat(this.id,"' to nonexistant child '").concat(o,"'."));l.send(t)}}catch(s){r={error:s}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}},e.prototype.defer=function(t){var r=this,n=this.clock.setTimeout(function(){"to"in t&&t.to?r.sendTo(t._event,t.to,!0):r.send(t._event)},t.delay);t.id&&(this.delayedEventsMap[t.id]=n)},e.prototype.cancel=function(t){this.clock.clearTimeout(this.delayedEventsMap[t]),delete this.delayedEventsMap[t]},e.prototype.exec=function(t,r,n){n===void 0&&(n=this.machine.options.actions),this._exec(t,r.context,r._event,n)},e.prototype.removeChild=function(t){var r;this.children.delete(t),this.forwardTo.delete(t),(r=this.state)===null||r===void 0||delete r.children[t]},e.prototype.stopChild=function(t){var r=this.children.get(t);r&&(this.removeChild(t),U(r.stop)&&r.stop())},e.prototype.spawn=function(t,r,n){if(this.status!==Z.Running)return _t(t,r);if(tr(t))return this.spawnPromise(Promise.resolve(t),r);if(U(t))return this.spawnCallback(t,r);if(Nn(t))return this.spawnActor(t,r);if(tn(t))return this.spawnObservable(t,r);if(Ce(t))return this.spawnMachine(t,v(v({},n),{id:r}));if(Qr(t))return this.spawnBehavior(t,r);throw new Error('Unable to spawn entity "'.concat(r,'" of type "').concat(typeof t,'".'))},e.prototype.spawnMachine=function(t,r){var n=this;r===void 0&&(r={});var i=new e(t,v(v({},this.options),{parent:this,id:r.id||t.id})),a=v(v({},Ut),r);a.sync&&i.onTransition(function(l){n.send(le,{state:l,id:i.id})});var o=i;return this.children.set(i.id,o),a.autoForward&&this.forwardTo.add(i.id),i.onDone(function(l){n.removeChild(i.id),n.send(ae(l,{origin:i.id}))}).start(),o},e.prototype.spawnBehavior=function(t,r){var n=Fn(t,{id:r,parent:this});return this.children.set(r,n),n},e.prototype.spawnPromise=function(t,r){var n,i=this,a=!1,o;t.then(function(s){a||(o=s,i.removeChild(r),i.send(ae(xt(r,s),{origin:r})))},function(s){if(!a){i.removeChild(r);var u=it(r,s);try{i.send(ae(u,{origin:r}))}catch(d){on(s,d,r),i.devTools&&i.devTools.send(u,i.state),i.machine.strict&&i.stop()}}});var l=(n={id:r,send:function(){},subscribe:function(s,u,d){var h=mt(s,u,d),c=!1;return t.then(function(p){c||(h.next(p),!c&&h.complete())},function(p){c||h.error(p)}),{unsubscribe:function(){return c=!0}}},stop:function(){a=!0},toJSON:function(){return{id:r}},getSnapshot:function(){return o}},n[De]=function(){return this},n);return this.children.set(r,l),l},e.prototype.spawnCallback=function(t,r){var n,i=this,a=!1,o=new Set,l=new Set,s,u=function(c){s=c,l.forEach(function(p){return p(c)}),!a&&i.send(ae(c,{origin:r}))},d;try{d=t(u,function(c){o.add(c)})}catch(c){this.send(it(r,c))}if(tr(d))return this.spawnPromise(d,r);var h=(n={id:r,send:function(c){return o.forEach(function(p){return p(c)})},subscribe:function(c){var p=mt(c);return l.add(p.next),{unsubscribe:function(){l.delete(p.next)}}},stop:function(){a=!0,U(d)&&d()},toJSON:function(){return{id:r}},getSnapshot:function(){return s}},n[De]=function(){return this},n);return this.children.set(r,h),h},e.prototype.spawnObservable=function(t,r){var n,i=this,a,o=t.subscribe(function(s){a=s,i.send(ae(s,{origin:r}))},function(s){i.removeChild(r),i.send(ae(it(r,s),{origin:r}))},function(){i.removeChild(r),i.send(ae(xt(r),{origin:r}))}),l=(n={id:r,send:function(){},subscribe:function(s,u,d){return t.subscribe(s,u,d)},stop:function(){return o.unsubscribe()},getSnapshot:function(){return a},toJSON:function(){return{id:r}}},n[De]=function(){return this},n);return this.children.set(r,l),l},e.prototype.spawnActor=function(t,r){return this.children.set(r,t),t},e.prototype.spawnActivity=function(t){var r=this.machine.options&&this.machine.options.activities?this.machine.options.activities[t.type]:void 0;if(!r){V||ne(!1,"No implementation found for activity '".concat(t.type,"'"));return}var n=r(this.state.context,t);this.spawnEffect(t.id,n)},e.prototype.spawnEffect=function(t,r){var n;this.children.set(t,(n={id:t,send:function(){},subscribe:function(){return{unsubscribe:function(){}}},stop:r||void 0,getSnapshot:function(){},toJSON:function(){return{id:t}}},n[De]=function(){return this},n))},e.prototype.attachDev=function(){var t=zt();if(this.options.devTools&&t){if(t.__REDUX_DEVTOOLS_EXTENSION__){var r=typeof this.options.devTools=="object"?this.options.devTools:void 0;this.devTools=t.__REDUX_DEVTOOLS_EXTENSION__.connect(v(v({name:this.id,autoPause:!0,stateSanitizer:function(n){return{value:n.value,context:n.context,actions:n.actions}}},r),{features:v({jump:!1,skip:!1},r?r.features:void 0)}),this.machine),this.devTools.init(this.state)}_n(this)}},e.prototype.toJSON=function(){return{id:this.id}},e.prototype[De]=function(){return this},e.prototype.getSnapshot=function(){return this.status===Z.NotStarted?this.initialState:this._state},e.defaultOptions={execute:!0,deferEvents:!0,clock:{setTimeout:function(t,r){return setTimeout(t,r)},clearTimeout:function(t){return clearTimeout(t)}},logger:console.log.bind(console),devTools:!1},e.interpret=gr,e}(),zn=function(e){return _(e)?v(v({},Ut),{name:e}):v(v(v({},Ut),{name:nn()}),e)};function Un(e,t){var r=zn(t);return On(function(n){if(!V){var i=Ce(e)||U(e);ne(!!n||i,'Attempted to spawn an Actor (ID: "'.concat(Ce(e)?e.id:"undefined",'") outside of a service. This will have no effect.'))}return n?n.spawn(e,r.name,r):_t(e,r.name)})}function gr(e,t){var r=new Mn(e,t);return r}var f=C(39953),Gn=C(8595),Vn=C(87925);function yr(e){var t=f.useRef();return t.current||(t.current={v:e()}),t.current.v}var kt=function(){return kt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kt.apply(this,arguments)},$n=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r},Bn=function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(l){o={error:l}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return a};function br(e,t){var r=yr(function(){return typeof e=="function"?e():e});if(!1)var n,i;var a=t.context,o=t.guards,l=t.actions,s=t.activities,u=t.services,d=t.delays,h=t.state,c=$n(t,["context","guards","actions","activities","services","delays","state"]),p=yr(function(){var g={context:a,guards:o,actions:l,activities:s,services:u,delays:d},y=r.withConfig(g,function(){return kt(kt({},r.context),a)});return gr(y,c)});return(0,Vn.Z)(function(){Object.assign(p.machine.options.actions,l),Object.assign(p.machine.options.guards,o),Object.assign(p.machine.options.activities,s),Object.assign(p.machine.options.services,u),Object.assign(p.machine.options.delays,d)},[l,o,s,u,d]),p}function Oa(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Bn(t,2),i=n[0],a=i===void 0?{}:i,o=n[1],l=br(e,a);return useEffect(function(){if(o){var s=l.subscribe(toObserver(o));return function(){s.unsubscribe()}}},[o]),useEffect(function(){var s=a.state;return l.start(s?State.create(s):void 0),function(){l.stop(),l.status=InterpreterStatus.NotStarted}},[]),l}var Wn=function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(l){o={error:l}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return a},Hn=function(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};function ka(e,t){var r,n,i=Wn([[],[]],2),a=i[0],o=i[1];try{for(var l=Hn(e),s=l.next();!s.done;s=l.next()){var u=s.value;t(u)?a.push(u):o.push(u)}}catch(d){r={error:d}}finally{try{s&&!s.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return[a,o]}function Aa(e){return e.status!==0?e.getSnapshot():e.machine.initialState}function wr(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Na(e,t){if(wr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var i=0;i<r.length;i++)if(!Object.prototype.hasOwnProperty.call(t,r[i])||!wr(e[r[i]],t[r[i]]))return!1;return!0}function Ta(e){return"state"in e&&"machine"in e}function Jn(e,t,r){if(e.status===Z.NotStarted)return!0;var n=r.changed===void 0&&(Object.keys(r.children).length>0||typeof t.changed=="boolean");return!(r.changed||n)}var Yn=function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(l){o={error:l}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return a};function Xn(e){return e}function xr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Yn(t,1),i=n[0],a=i===void 0?{}:i,o=br(e,a),l=(0,f.useCallback)(function(){return o.status===Z.NotStarted?a.state?xe.create(a.state):o.machine.initialState:o.getSnapshot()},[o]),s=(0,f.useCallback)(function(h,c){return Jn(o,h,c)},[o]),u=(0,f.useCallback)(function(h){var c=o.subscribe(h).unsubscribe;return c},[o]),d=(0,Gn.useSyncExternalStoreWithSelector)(u,l,l,Xn,s);return(0,f.useEffect)(function(){var h=a.state;return o.start(h?xe.create(h):void 0),function(){o.stop(),o.status=Z.NotStarted}},[]),[d,o.send,o]}var Zn=C(49065);function Kn(...e){return e.filter(Boolean).join(" ")}function Gt(e,t,...r){if(e in t){let i=t[e];return typeof i=="function"?i(...r):i}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Gt),n}var Qn=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Qn||{}),qn=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(qn||{});function st({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:i,visible:a=!0,name:o}){let l=Sr(t,e);if(a)return At(l,r,n,o);let s=i??0;if(s&2){let{static:u=!1,...d}=l;if(u)return At(d,r,n,o)}if(s&1){let{unmount:u=!0,...d}=l;return Gt(u?0:1,{[0](){return null},[1](){return At({...d,hidden:!0,style:{display:"none"}},r,n,o)}})}return At(l,r,n,o)}function At(e,t={},r,n){var i;let{as:a=r,children:o,refName:l="ref",...s}=$t(e,["unmount","static"]),u=e.ref!==void 0?{[l]:e.ref}:{},d=typeof o=="function"?o(t):o;s.className&&typeof s.className=="function"&&(s.className=s.className(t));let h={};if(t){let c=!1,p=[];for(let[g,y]of Object.entries(t))typeof y=="boolean"&&(c=!0),y===!0&&p.push(g);c&&(h["data-headlessui-state"]=p.join(" "))}if(a===f.Fragment&&Object.keys(Vt(s)).length>0){if(!(0,f.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let c=Kn((i=d.props)==null?void 0:i.className,s.className),p=c?{className:c}:{};return(0,f.cloneElement)(d,Object.assign({},Sr(d.props,Vt($t(s,["ref"]))),h,u,ei(d.ref,u.ref),p))}return(0,f.createElement)(a,Object.assign({},$t(s,["ref"]),a!==f.Fragment&&u,a!==f.Fragment&&h),d)}function ei(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}}function Sr(...e){var t;if(e.length===0)return{};if(e.length===1)return e[0];let r={},n={};for(let i of e)for(let a in i)a.startsWith("on")&&typeof i[a]=="function"?((t=n[a])!=null||(n[a]=[]),n[a].push(i[a])):r[a]=i[a];if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(n).map(i=>[i,void 0])));for(let i in n)Object.assign(r,{[i](a,...o){let l=n[i];for(let s of l){if((a instanceof Event||a?.nativeEvent instanceof Event)&&a.defaultPrevented)return;s(a,...o)}}});return r}function lt(e){var t;return Object.assign((0,f.forwardRef)(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Vt(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function $t(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}var ti=Object.defineProperty,ri=(e,t,r)=>t in e?ti(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Bt=(e,t,r)=>(ri(e,typeof t!="symbol"?t+"":t,r),r);class ni{constructor(){Bt(this,"current",this.detect()),Bt(this,"handoffState","pending"),Bt(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let _e=new ni,Ye=(e,t)=>{_e.isServer?(0,f.useEffect)(e,t):(0,f.useLayoutEffect)(e,t)};function ii(){let[e,t]=(0,f.useState)(_e.isHandoffComplete);return e&&_e.isHandoffComplete===!1&&t(!1),(0,f.useEffect)(()=>{e!==!0&&t(!0)},[e]),(0,f.useEffect)(()=>_e.handoff(),[]),e}var Er;let Nt=(Er=f.useId)!=null?Er:function(){let e=ii(),[t,r]=f.useState(e?()=>_e.nextId():null);return Ye(()=>{t===null&&r(_e.nextId())},[t]),t!=null?""+t:void 0};var Fe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Fe||{});let Wt=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var ut=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(ut||{}),Ht=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ht||{}),ai=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ai||{});function Or(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Wt)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var oi=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(oi||{});function si(e,t=0){var r;return e===((r=m(e))==null?void 0:r.body)?!1:M(t,{[0](){return e.matches(Wt)},[1](){let n=e;for(;n!==null;){if(n.matches(Wt))return!0;n=n.parentElement}return!1}})}function Ca(e){let t=m(e);b().nextFrame(()=>{t&&!si(t.activeElement,0)&&li(e)})}function li(e){e?.focus({preventScroll:!0})}let ui=["textarea","input"].join(",");function ci(e){var t,r;return(r=(t=e?.matches)==null?void 0:t.call(e,ui))!=null?r:!1}function kr(e,t=r=>r){return e.slice().sort((r,n)=>{let i=t(r),a=t(n);if(i===null||a===null)return 0;let o=i.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Pa(e,t){return Jt(Or(),t,{relativeTo:e})}function Jt(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:i=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?r?kr(e):e:Or(e);i.length>0&&o.length>1&&(o=o.filter(p=>!i.includes(p))),n=n??a.activeElement;let l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(n))-1;if(t&4)return Math.max(0,o.indexOf(n))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},d=0,h=o.length,c;do{if(d>=h||d+h<=0)return 0;let p=s+d;if(t&16)p=(p+h)%h;else{if(p<0)return 3;if(p>=h)return 1}c=o[p],c?.focus(u),d+=l}while(c!==a.activeElement);return t&6&&ci(c)&&c.select(),c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),2}function di(e=0){let[t,r]=(0,f.useState)(e),n=(0,f.useCallback)(l=>r(s=>s|l),[t]),i=(0,f.useCallback)(l=>!!(t&l),[t]),a=(0,f.useCallback)(l=>r(s=>s&~l),[r]),o=(0,f.useCallback)(l=>r(s=>s^l),[r]);return{flags:t,addFlag:n,hasFlag:i,removeFlag:a,toggleFlag:o}}function Ar(e){let t=(0,f.useRef)(e);return Ye(()=>{t.current=e},[e]),t}let Ee=function(e){let t=Ar(e);return f.useCallback((...r)=>t.current(...r),[t])},Nr=Symbol();function ja(e,t=!0){return Object.assign(e,{[Nr]:t})}function Tt(...e){let t=(0,f.useRef)(e);(0,f.useEffect)(()=>{t.current=e},[e]);let r=Ee(n=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(n):i.current=n)});return e.every(n=>n==null||n?.[Nr])?void 0:r}let Tr=(0,f.createContext)(null);function Cr(){let e=(0,f.useContext)(Tr);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Cr),t}return e}function Pr(){let[e,t]=(0,f.useState)([]);return[e.length>0?e.join(" "):void 0,(0,f.useMemo)(()=>function(r){let n=Ee(a=>(t(o=>[...o,a]),()=>t(o=>{let l=o.slice(),s=l.indexOf(a);return s!==-1&&l.splice(s,1),l}))),i=(0,f.useMemo)(()=>({register:n,slot:r.slot,name:r.name,props:r.props}),[n,r.slot,r.name,r.props]);return f.createElement(Tr.Provider,{value:i},r.children)},[t])]}let fi="label",hi=lt(function(e,t){let r=Nt(),{id:n=`headlessui-label-${r}`,passive:i=!1,...a}=e,o=Cr(),l=Tt(t);Ye(()=>o.register(n),[n,o.register]);let s={ref:l,...o.props,id:n};return i&&("onClick"in s&&delete s.onClick,"onClick"in a&&delete a.onClick),st({ourProps:s,theirProps:a,slot:o.slot||{},defaultTag:fi,name:o.name||"Label"})}),jr=(0,f.createContext)(null);function Ir(){let e=(0,f.useContext)(jr);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ir),t}return e}function Dr(){let[e,t]=(0,f.useState)([]);return[e.length>0?e.join(" "):void 0,(0,f.useMemo)(()=>function(r){let n=Ee(a=>(t(o=>[...o,a]),()=>t(o=>{let l=o.slice(),s=l.indexOf(a);return s!==-1&&l.splice(s,1),l}))),i=(0,f.useMemo)(()=>({register:n,slot:r.slot,name:r.name,props:r.props}),[n,r.slot,r.name,r.props]);return f.createElement(jr.Provider,{value:i},r.children)},[t])]}let pi="p",vi=lt(function(e,t){let r=Nt(),{id:n=`headlessui-description-${r}`,...i}=e,a=Ir(),o=Tt(t);Ye(()=>a.register(n),[n,a.register]);let l={ref:o,...a.props,id:n};return st({ourProps:l,theirProps:i,slot:a.slot||{},defaultTag:pi,name:a.name||"Description"})});function Rr(e){return _e.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function mi({container:e,accept:t,walk:r,enabled:n=!0}){let i=(0,f.useRef)(t),a=(0,f.useRef)(r);(0,f.useEffect)(()=>{i.current=t,a.current=r},[t,r]),Ye(()=>{if(!e||!n)return;let o=Rr(e);if(!o)return;let l=i.current,s=a.current,u=Object.assign(h=>l(h),{acceptNode:l}),d=o.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,u,!1);for(;d.nextNode();)s(d.currentNode)},[e,n,i,a])}let gi="div";var Lr=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Lr||{});let yi=lt(function(e,t){let{features:r=1,...n}=e,i={ref:t,"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return st({ourProps:i,theirProps:n,slot:{},defaultTag:gi,name:"Hidden"})});function _r(e={},t=null,r=[]){for(let[n,i]of Object.entries(e))Mr(r,Fr(t,n),i);return r}function Fr(e,t){return e?e+"["+t+"]":t}function Mr(e,t,r){if(Array.isArray(r))for(let[n,i]of r.entries())Mr(e,Fr(t,n.toString()),i);else r instanceof Date?e.push([t,r.toISOString()]):typeof r=="boolean"?e.push([t,r?"1":"0"]):typeof r=="string"?e.push([t,r]):typeof r=="number"?e.push([t,`${r}`]):r==null?e.push([t,""]):_r(r,t,e)}function bi(e){var t;let r=(t=e?.form)!=null?t:e.closest("form");if(r){for(let n of r.elements)if(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image"){n.click();return}}}function wi(e,t,r){let[n,i]=(0,f.useState)(r),a=e!==void 0,o=(0,f.useRef)(a),l=(0,f.useRef)(!1),s=(0,f.useRef)(!1);return a&&!o.current&&!l.current?(l.current=!0,o.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!a&&o.current&&!s.current&&(s.current=!0,o.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[a?e:n,Ee(u=>(a||i(u),t?.(u)))]}function zr(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=t?.getAttribute("disabled")==="";return n&&xi(r)?!1:n}function xi(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function Si(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function Ei(){let e=[],t=[],r={enqueue(n){t.push(n)},addEventListener(n,i,a,o){return n.addEventListener(i,a,o),r.add(()=>n.removeEventListener(i,a,o))},requestAnimationFrame(...n){let i=requestAnimationFrame(...n);return r.add(()=>cancelAnimationFrame(i))},nextFrame(...n){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...n))},setTimeout(...n){let i=setTimeout(...n);return r.add(()=>clearTimeout(i))},microTask(...n){let i={current:!0};return Si(()=>{i.current&&n[0]()}),r.add(()=>{i.current=!1})},add(n){return e.push(n),()=>{let i=e.indexOf(n);if(i>=0){let[a]=e.splice(i,1);a()}}},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()},style(n,i,a){let o=n.style.getPropertyValue(i);return Object.assign(n.style,{[i]:a}),this.add(()=>{Object.assign(n.style,{[i]:o})})}};return r}function Oi(){let[e]=(0,f.useState)(Ei);return(0,f.useEffect)(()=>()=>e.dispose(),[e]),e}var ki=(e=>(e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption",e))(ki||{});let Ai={[0](e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:kr(r,n=>n.element.current)}},[1](e,t){let r=e.options.slice(),n=e.options.findIndex(i=>i.id===t.id);return n===-1?e:(r.splice(n,1),{...e,options:r})}},Yt=(0,f.createContext)(null);Yt.displayName="RadioGroupDataContext";function Ur(e){let t=(0,f.useContext)(Yt);if(t===null){let r=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ur),r}return t}let Xt=(0,f.createContext)(null);Xt.displayName="RadioGroupActionsContext";function Gr(e){let t=(0,f.useContext)(Xt);if(t===null){let r=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Gr),r}return t}function Ni(e,t){return Gt(t.type,Ai,e,t)}let Ti="div",Ci=lt(function(e,t){let r=Nt(),{id:n=`headlessui-radiogroup-${r}`,value:i,defaultValue:a,name:o,onChange:l,by:s=(j,B)=>j===B,disabled:u=!1,...d}=e,h=Ee(typeof s=="string"?(j,B)=>{let oe=s;return j?.[oe]===B?.[oe]}:s),[c,p]=(0,f.useReducer)(Ni,{options:[]}),g=c.options,[y,O]=Pr(),[S,w]=Dr(),E=(0,f.useRef)(null),A=Tt(E,t),[I,F]=wi(i,l,a),L=(0,f.useMemo)(()=>g.find(j=>!j.propsRef.current.disabled),[g]),D=(0,f.useMemo)(()=>g.some(j=>h(j.propsRef.current.value,I)),[g,I]),k=Ee(j=>{var B;if(u||h(j,I))return!1;let oe=(B=g.find(te=>h(te.propsRef.current.value,j)))==null?void 0:B.propsRef.current;return oe!=null&&oe.disabled?!1:(F?.(j),!0)});mi({container:E.current,accept(j){return j.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:j.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(j){j.setAttribute("role","none")}});let W=Ee(j=>{let B=E.current;if(!B)return;let oe=Rr(B),te=g.filter(se=>se.propsRef.current.disabled===!1).map(se=>se.element.current);switch(j.key){case Fe.Enter:bi(j.currentTarget);break;case Fe.ArrowLeft:case Fe.ArrowUp:if(j.preventDefault(),j.stopPropagation(),Jt(te,ut.Previous|ut.WrapAround)===Ht.Success){let se=g.find(ze=>ze.element.current===oe?.activeElement);se&&k(se.propsRef.current.value)}break;case Fe.ArrowRight:case Fe.ArrowDown:if(j.preventDefault(),j.stopPropagation(),Jt(te,ut.Next|ut.WrapAround)===Ht.Success){let se=g.find(ze=>ze.element.current===oe?.activeElement);se&&k(se.propsRef.current.value)}break;case Fe.Space:{j.preventDefault(),j.stopPropagation();let se=g.find(ze=>ze.element.current===oe?.activeElement);se&&k(se.propsRef.current.value)}break}}),T=Ee(j=>(p({type:0,...j}),()=>p({type:1,id:j.id}))),z=(0,f.useMemo)(()=>({value:I,firstOption:L,containsCheckedOption:D,disabled:u,compare:h,...c}),[I,L,D,u,h,c]),X=(0,f.useMemo)(()=>({registerOption:T,change:k}),[T,k]),de={ref:A,id:n,role:"radiogroup","aria-labelledby":y,"aria-describedby":S,onKeyDown:W},Me=(0,f.useMemo)(()=>({value:I}),[I]),Le=(0,f.useRef)(null),Pe=Oi();return(0,f.useEffect)(()=>{!Le.current||a!==void 0&&Pe.addEventListener(Le.current,"reset",()=>{k(a)})},[Le,k]),f.createElement(w,{name:"RadioGroup.Description"},f.createElement(O,{name:"RadioGroup.Label"},f.createElement(Xt.Provider,{value:X},f.createElement(Yt.Provider,{value:z},o!=null&&I!=null&&_r({[o]:I}).map(([j,B],oe)=>f.createElement(yi,{features:Lr.Hidden,ref:oe===0?te=>{var se;Le.current=(se=te?.closest("form"))!=null?se:null}:void 0,...Vt({key:j,as:"input",type:"radio",checked:B!=null,hidden:!0,readOnly:!0,name:j,value:B})})),st({ourProps:de,theirProps:d,slot:Me,defaultTag:Ti,name:"RadioGroup"})))))});var Pi=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(Pi||{});let ji="div",Ii=lt(function(e,t){var r;let n=Nt(),{id:i=`headlessui-radiogroup-option-${n}`,value:a,disabled:o=!1,...l}=e,s=(0,f.useRef)(null),u=Tt(s,t),[d,h]=Pr(),[c,p]=Dr(),{addFlag:g,removeFlag:y,hasFlag:O}=di(1),S=Ar({value:a,disabled:o}),w=Ur("RadioGroup.Option"),E=Gr("RadioGroup.Option");Ye(()=>E.registerOption({id:i,element:s,propsRef:S}),[i,E,s,e]);let A=Ee(z=>{var X;if(zr(z.currentTarget))return z.preventDefault();!E.change(a)||(g(2),(X=s.current)==null||X.focus())}),I=Ee(z=>{if(zr(z.currentTarget))return z.preventDefault();g(2)}),F=Ee(()=>y(2)),L=((r=w.firstOption)==null?void 0:r.id)===i,D=w.disabled||o,k=w.compare(w.value,a),W={ref:u,id:i,role:"radio","aria-checked":k?"true":"false","aria-labelledby":d,"aria-describedby":c,"aria-disabled":D?!0:void 0,tabIndex:(()=>D?-1:k||!w.containsCheckedOption&&L?0:-1)(),onClick:D?void 0:A,onFocus:D?void 0:I,onBlur:D?void 0:F},T=(0,f.useMemo)(()=>({checked:k,disabled:D,active:O(2)}),[k,D,O]);return f.createElement(p,{name:"RadioGroup.Description"},f.createElement(h,{name:"RadioGroup.Label"},st({ourProps:W,theirProps:l,slot:T,defaultTag:ji,name:"RadioGroup.Option"})))}),ct=Object.assign(Ci,{Option:Ii,Label:hi,Description:vi});var Di=Object.defineProperty,Vr=Object.getOwnPropertySymbols,Ri=Object.prototype.hasOwnProperty,Li=Object.prototype.propertyIsEnumerable,$r=(e,t,r)=>t in e?Di(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_i=(e,t)=>{for(var r in t||(t={}))Ri.call(t,r)&&$r(e,r,t[r]);if(Vr)for(var r of Vr(t))Li.call(t,r)&&$r(e,r,t[r]);return e},Zt=(e,t,r)=>new Promise((n,i)=>{var a=s=>{try{l(r.next(s))}catch(u){i(u)}},o=s=>{try{l(r.throw(s))}catch(u){i(u)}},l=s=>s.done?n(s.value):Promise.resolve(s.value).then(a,o);l((r=r.apply(e,t)).next())});function Fi(e){var t,r;return[e.matches("enabled")?!0:e.matches("disabled")?!1:void 0,(r=(t=e.context.featureDesc)==null?void 0:t.force)!=null?r:!1]}var Mi=vr({id:"feature",initial:"initial",context:{},predictableActionArguments:!0,on:{ENABLE:[{target:"asyncEnabled",cond:e=>{var t;return((t=e.featureDesc)==null?void 0:t.onChangeDefault)!=null}},{target:"enabled"}],TOGGLE:[{target:"asyncEnabled",cond:e=>{var t;return((t=e.featureDesc)==null?void 0:t.onChangeDefault)!=null}},{target:"enabled"}],DISABLE:[{target:"asyncDisabled",cond:e=>{var t;return((t=e.featureDesc)==null?void 0:t.onChangeDefault)!=null}},{target:"disabled"}],UNSET:[{target:"asyncUnspecied",cond:e=>{var t;return((t=e.featureDesc)==null?void 0:t.onChangeDefault)!=null}},{target:"unspecified"}],SET:[{target:"asyncEnabled",cond:(e,t)=>{var r;return t.value===!0&&((r=e.featureDesc)==null?void 0:r.onChangeDefault)!=null}},{target:"asyncDisabled",cond:(e,t)=>{var r;return t.value===!1&&((r=e.featureDesc)==null?void 0:r.onChangeDefault)!=null}},{target:"asyncUnspecied",cond:(e,t)=>{var r;return((r=e.featureDesc)==null?void 0:r.onChangeDefault)!=null}},{target:"enabled",cond:(e,t)=>t.value===!0},{target:"disabled",cond:(e,t)=>t.value===!1},{target:"unspecified"}]},states:{initial:{on:{INIT:[{actions:Je({featureDesc:(e,t)=>t.feature}),target:"enabled",cond:(e,t)=>t.feature.defaultValue===!0},{actions:Je({featureDesc:(e,t)=>t.feature}),target:"unspecified",cond:(e,t)=>t.feature.defaultValue===void 0},{actions:Je({featureDesc:(e,t)=>t.feature}),target:"disabled",cond:(e,t)=>t.feature.defaultValue===!1}]}},unspecified:{},disabled:{},enabled:{},asyncDisabled:{invoke:{id:"set-off-upstream",src:e=>Zt(void 0,null,function*(){var t;let r=(t=e.featureDesc)==null?void 0:t.onChangeDefault;if(r!=null&&e.featureDesc!=null)return r(e.featureDesc.name,!1)}),onDone:[{target:"enabled",cond:(e,t)=>t.data===!0},{target:"disabled",cond:(e,t)=>t.data===!1},{target:"unspecified"}],onError:"unspecified"}},asyncUnspecied:{invoke:{id:"set-unset-upstream",src:e=>Zt(void 0,null,function*(){var t;let r=(t=e.featureDesc)==null?void 0:t.onChangeDefault;if(r!=null&&e.featureDesc!=null)return r(e.featureDesc.name,void 0)}),onDone:[{target:"enabled",cond:(e,t)=>t.data===!0},{target:"disabled",cond:(e,t)=>t.data===!1},{target:"unspecified"}],onError:"unspecified"}},asyncEnabled:{invoke:{id:"set-on-upstream",src:e=>Zt(void 0,null,function*(){var t;let r=(t=e.featureDesc)==null?void 0:t.onChangeDefault;if(r!=null&&e.featureDesc!=null)return r(e.featureDesc.name,!0)}),onDone:[{target:"enabled",cond:(e,t)=>t.data===!0},{target:"disabled",cond:(e,t)=>t.data===!1},{target:"unspecified"}],onError:"unspecified"}}}});function Ct(e,t){if(e.context.features[t]==null)return[void 0,!1];let r=e.context.features[t].getSnapshot();return r!=null?Fi(r):[void 0,!1]}var Br=vr({id:"features",initial:"idle",predictableActionArguments:!0,context:{features:{}},states:{idle:{on:{INIT:{target:"ready",cond:(e,t)=>t.features.length>0,actions:Je({features:(e,t)=>{let r={};for(let n of t.features)r[n.name]=Un(Mi,{name:n.name,sync:!0}),r[n.name].send({type:"INIT",feature:n});return r}})}}},ready:{on:{DE_INIT:{target:"idle",actions:Je({features:(e,t)=>({})})},SET_ALL:{actions:Je({features:(e,t)=>{let r=_i({},e.features);return Object.keys(r).forEach(n=>{var i;r[n].send({type:"SET",value:(i=t.features[n])!=null?i:void 0})}),r}})},SET:{actions:(e,t)=>{let r=e.features[t.name];r?.send({type:"SET",value:t.value})}},TOGGLE:{actions:(e,t)=>{let r=e.features[t.name];r?.send({type:"TOGGLE"})}},ENABLE:{actions:(e,t)=>{let r=e.features[t.name];r?.send({type:"ENABLE"})}},DISABLE:{actions:(e,t)=>{let r=e.features[t.name];r?.send({type:"DISABLE"})}},UNSET:{actions:(e,t)=>{let r=e.features[t.name];r?.send({type:"UNSET"})}}}}}}),Wr=(0,f.createContext)(e=>!1),Kt=(0,f.createContext)(null),zi=class{constructor(e,t,r){this.featureDesc=r,this.dispatch=e,this.testFeature=t}toggle(e){this.dispatch({type:"TOGGLE",name:e})}enable(e){this.dispatch({type:"ENABLE",name:e})}unset(e){this.dispatch({type:"UNSET",name:e})}disable(e){this.dispatch({type:"DISABLE",name:e})}setAll(e){this.dispatch({type:"SET_ALL",features:e})}listFeatures(){return this.featureDesc.map(e=>[e.name,this.testFeature(e.name)])}};function Ui(e,t,r,n){(0,f.useEffect)(()=>e?(window.feature=new zi(n,r,t),()=>{window.feature!=null&&delete window.feature}):()=>{},[t,n,e,r])}var Hr="react-enable:feature-values";function Gi(e,t,r){let n=(0,f.useMemo)(()=>{let a={};if(r.matches("ready"))for(let o of t){let[l]=Ct(r,o.name);l!=null&&(a[o.name]=l)}return a},[t,r]),i=Object.keys(n).length===0||e==null?"{}":JSON.stringify({overrides:n});(0,f.useEffect)(()=>{try{e!=null&&r.matches("ready")&&e.setItem(Hr,i)}catch{}},[r,e,i])}function Vi(e,t){let r=t.map(n=>Ct(n,e));for(let[n,i]of r)if(n!=null&&i)return n;for(let[n]of r)if(n!=null)return n}function $i(e,t){return(0,f.useCallback)(r=>Vi(r,[e,t]),[e,t])}function Bi({children:e,features:t,disableConsole:r=!1,storage:n=window.sessionStorage}){let i=(0,f.useRef)(t),[a,o]=xr(Br),[l,s]=xr(Br);(0,f.useEffect)(()=>(s({type:"INIT",features:t}),()=>{s({type:"DE_INIT"})}),[s,t]),(0,f.useEffect)(()=>{let h={};if(n!=null)try{let c=n.getItem(Hr);c!=null&&(h=JSON.parse(c).overrides)}catch(c){console.error("error in localStorage",c)}return o({type:"INIT",features:i.current.filter(c=>c.noOverride!==!0).map(c=>{var p;return{name:c.name,description:c.description,defaultValue:(p=h?.[c.name])!=null?p:void 0}})}),()=>{o({type:"DE_INIT"})}},[i,o,n]),Gi(n,i.current,a);let u=$i(a,l);Ui(!r,i.current,u,s);let d=(0,f.useMemo)(()=>({overridesSend:o,defaultsSend:s,featuresDescription:i.current,overridesState:a,defaultsState:l,test:u}),[o,s,a,l,u]);return f.createElement(Kt.Provider,{value:d},f.createElement(Wr.Provider,{value:u},e))}function Pt(e){let t=(0,f.useContext)(Wr),r=(0,f.useMemo)(()=>e==null?[]:Array.isArray(e)?e:[e],[e]);return[t,r]}function Wi(e){let[t,r]=Pt(e);return r.length>0&&r.every(t)}function Jr(e){let[t,r]=Pt(e);return r.some(t)}function Hi({feature:e=[],allFeatures:t=[],children:r}){let n=Jr(e),i=Wi(t);return n||i?f.createElement(f.Fragment,null,r):null}function Ji(e){let[t,r]=Pt(e);return e.length>0&&r.every(n=>{var i;return!((i=t(n))!=null&&i)})}function Yi(e){let[t,r]=Pt(e);return r.some(n=>{var i;return!((i=t(n))!=null&&i)})}var Xi=({feature:e=[],allFeatures:t=[],children:r})=>{let n=Yi(e),i=Ji(t);return n||i?f.createElement(f.Fragment,null,r):null},Zi=`/*
! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
Ensure the default browser behavior of the \`hidden\` attribute.
*/

[hidden] {
  display: none;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto -webkit-focus-ring-color;
}

*, ::before, ::after {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.pointer-events-none {
  pointer-events: none;
}

.invisible {
  visibility: hidden;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.-inset-px {
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
}

.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

.bottom-0 {
  bottom: 0px;
}

.left-0 {
  left: 0px;
}

.z-10 {
  z-index: 10;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.mx-8 {
  margin-left: 2rem;
  margin-right: 2rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.inline-block {
  display: inline-block;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.h-7 {
  height: 1.75rem;
}

.h-4 {
  height: 1rem;
}

.h-5 {
  height: 1.25rem;
}

.h-8 {
  height: 2rem;
}

.h-6 {
  height: 1.5rem;
}

.min-h-screen {
  min-height: 100vh;
}

.w-4 {
  width: 1rem;
}

.w-5 {
  width: 1.25rem;
}

.w-8 {
  width: 2rem;
}

.w-6 {
  width: 1.5rem;
}

.max-w-full {
  max-width: 100%;
}

.shrink {
  flex-shrink: 1;
}

.grow {
  flex-grow: 1;
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.cursor-pointer {
  cursor: pointer;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-1 {
  gap: 0.25rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-9 {
  gap: 2.25rem;
}

.gap-y-6 {
  row-gap: 1.5rem;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-y-auto {
  overflow-y: auto;
}

.rounded-sm {
  border-radius: 0.125rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.border {
  border-width: 1px;
}

.border-2 {
  border-width: 2px;
}

.border-orange-500 {
  --tw-border-opacity: 1;
  border-color: rgb(249 115 22 / var(--tw-border-opacity));
}

.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(34 197 94 / var(--tw-border-opacity));
}

.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-transparent {
  border-color: transparent;
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.p-3 {
  padding: 0.75rem;
}

.p-1 {
  padding: 0.25rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pb-10 {
  padding-bottom: 2.5rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pt-0 {
  padding-top: 0px;
}

.pb-0 {
  padding-bottom: 0px;
}

.pr-4 {
  padding-right: 1rem;
}

.pl-4 {
  padding-left: 1rem;
}

.text-left {
  text-align: left;
}

.align-middle {
  vertical-align: middle;
}

.align-bottom {
  vertical-align: bottom;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.font-medium {
  font-weight: 500;
}

.leading-6 {
  line-height: 1.5rem;
}

.leading-7 {
  line-height: 1.75rem;
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(249 115 22 / var(--tw-text-opacity));
}

.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-blue-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}

.ring-gray-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}

.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-blue-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity));
}

.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

@media (min-width: 640px) {
  .sm\\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .sm\\:mt-3 {
    margin-top: 0.75rem;
  }

  .sm\\:mt-6 {
    margin-top: 1.5rem;
  }

  .sm\\:block {
    display: block;
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:gap-x-4 {
    -moz-column-gap: 1rem;
         column-gap: 1rem;
  }

  .sm\\:p-0 {
    padding: 0px;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:align-middle {
    vertical-align: middle;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .lg\\:max-w-\\[80\\%\\] {
    max-width: 80%;
  }

  .lg\\:gap-4 {
    gap: 1rem;
  }
}
`;function Qt(...e){return e.filter(Boolean).join(" ")}function Ki({feature:e}){var t,r,n;let i=(0,f.useContext)(Kt),a=(0,f.useCallback)(c=>{if(i?.overridesSend!=null)switch(c){case"true":{i.overridesSend({type:"ENABLE",name:e.name});break}case"false":{i.overridesSend({type:"DISABLE",name:e.name});break}case"unset":{i.overridesSend({type:"UNSET",name:e.name});break}}},[e.name,i]);if(i==null)return null;let{overridesState:o,test:l,defaultsState:s}=i,u=((t=Ct(s,e.name)[0])!=null?t:"unset").toString(),d=((r=Ct(o,e.name)[0])!=null?r:"unset").toString(),h=l(e.name);return f.createElement(ct,{disabled:e.noOverride,onChange:a,value:d},f.createElement(ct.Label,null,f.createElement("h6",{className:"text-gray-900 align-center flex flex-row flex-nowrap items-center gap-2 lg:gap-4 h-7"},f.createElement("span",{className:"font-medium"},"Feature: ",f.createElement("code",null,e.name)),e.noOverride===!0?f.createElement("div",{className:"border-orange-500 text-orange-500 flex flex-nowrap text-xs flex-row gap-1 rounded-sm border items-center justify-center px-2 py-1"},f.createElement("svg",{"aria-hidden":"true",className:"h-4 w-4 min-w-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{clipRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",fillRule:"evenodd"})),f.createElement("div",null,"No Overrides")):null,h===!0?f.createElement("div",{className:"flex flex-nowrap text-xs text-green-500 flex-row gap-1 rounded-sm border items-center justify-center border-green-500 px-2 py-1"},f.createElement("svg",{"aria-hidden":"true",className:"h-4 w-4 min-w-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{clipRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",fillRule:"evenodd"})),f.createElement("div",null,h?"Enabled":"Disabled")):null),e.description==null?null:f.createElement("p",{className:"text-base text-gray-500 text-sm"},e.description)),f.createElement("div",{className:"mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"},[{id:"false",title:`Disable ${e.name}`,description:"Override the feature to be disabled"},{id:"unset",title:"Default",description:"Inherit enabled state from defaults",disabled:((n=e.noOverride)!=null?n:!1)||e.force,defaultValue:u==="true"?f.createElement("div",{className:"text-green-500 border-green-500 flex flex-nowrap text-xs flex-row gap-1 rounded-sm border items-center justify-center px-2 py-1"},f.createElement("span",null,"Enabled")):f.createElement("div",{className:"text-red-500 border-red-500 flex flex-nowrap text-xs flex-row gap-1 rounded-sm border items-center justify-center px-2 py-1"},f.createElement("span",null,"Disabled"))},{id:"true",title:`Enable ${e.name}`,description:"Override the feature to be enabled"}].map(c=>f.createElement(ct.Option,{className:({checked:p,active:g,disabled:y})=>Qt(p?"border-transparent":"border-gray-300",!y&&g?"border-blue-500 ring-2 ring-blue-500":"",y?"border-transparent ring-gray-500 cursor-not-allowed":"cursor-pointer","relative bg-white border rounded-lg shadow-sm p-3 flex focus:outline-none"),disabled:c.disabled,key:c.id,value:c.id},({checked:p,active:g,disabled:y})=>f.createElement(f.Fragment,null,f.createElement("div",{className:"flex flex-col grow"},f.createElement(ct.Label,{as:"span",className:"flex flex-nowrap flex-row gap-1 items-center space-between"},f.createElement("span",{className:"text-sm font-medium text-gray-900 grow shrink"},c.title),c.defaultValue!=null?c.defaultValue:null,f.createElement("svg",{"aria-hidden":"true",className:Qt(p?"":"invisible","h-5 w-5 text-blue-500 min-w-4"),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{clipRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",fillRule:"evenodd"}))),f.createElement(ct.Description,{as:"span",className:"mt-1 flex items-center text-sm text-gray-500"},c.description)),f.createElement("div",{"aria-hidden":"true",className:Qt(!y&&g?"border":"border-2",p?y?"border-gray-500":"border-blue-500":"border-transparent","absolute -inset-px rounded-lg pointer-events-none")}))))))}function Qi({root:e,children:t}){return Zn.createPortal(t,e)}function qi({defaultOpen:e=!1,hidden:t=!1}){let[r,n]=(0,f.useState)(null),i=a=>{if(a==null||r!=null)return;let o=a?.attachShadow({mode:"open"}),l=document.createElement("style"),s=document.createElement("div");l.textContent=Zi,o.appendChild(l),o.appendChild(s),n(s)};return t?null:f.createElement("div",{ref:i,style:{zIndex:99999,position:"fixed",width:"0",height:"0",bottom:0}},r!=null?f.createElement(Qi,{root:r},f.createElement(ea,{defaultOpen:e})):null)}function ea({defaultOpen:e=!1,hidden:t=!1}){let[r,n]=(0,f.useState)(e),i=(0,f.useContext)(Kt);if(i==null||t)return null;let{featuresDescription:a}=i;return a.length===0?null:f.createElement("div",{className:"relative"},f.createElement("div",{className:"absolute bottom-0 left-0 mx-4 my-4"},f.createElement("button",{className:"inline-flex items-center text-sm font-medium p-1 h-8 w-8 align-middle cursor-pointer rounded-full bg-blue-600 text-white  border border-transparent justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:text-sm",onClick:()=>n(!0),title:"Toggle features",type:"button"},f.createElement("svg",{className:"w-6 h-6 min-h-6 min-w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{clipRule:"evenodd",d:"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",fillRule:"evenodd"})))),r?f.createElement("div",{className:"fixed z-10 inset-0 overflow-y-auto"},f.createElement("div",{className:"flex items-end justify-flex-start mx-8 my-4 min-h-screen pt-4 px-4 pb-10 sm:block sm:p-0"},f.createElement("div",{className:"relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6 lg:max-w-[80%] max-w-full"},f.createElement("div",null,f.createElement("div",{className:"mt-1 sm:mt-3"},f.createElement("h3",{className:"flex flex-row gap-4 flex-nowrap items-center space-between"},f.createElement("div",{className:"grow text-lg leading-6 font-medium text-gray-900"},"Feature Flag Overrides")),f.createElement("p",{className:"text-sm text-gray-500"},"Features can be enabled or disabled unless they are forced upstream. You can also revert to default."),f.createElement("div",{className:"mt-6"},f.createElement("fieldset",{className:"flex flex-col gap-9"},f.createElement("legend",{className:"sr-only"},"Feature Flags"),a.map(o=>f.createElement(Ki,{feature:o,key:o.name})))),f.createElement("div",{className:"flex justify-center items-center mt-5 sm:mt-6"},f.createElement("button",{className:"inline-flex items-center text-sm font-medium pt-0 pb-0 pr-4 pl-4 h-8 leading-7 align-middle cursor-pointer rounded-sm bg-blue-600 text-white border border-transparent justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:text-sm",onClick:()=>n(!1),type:"button"},"Done"))))))):null)}},78195:(Ne,pe,C)=>{/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=C(39953);function fe($,H){return $===H&&($!==0||1/$===1/H)||$!==$&&H!==H}var x=typeof Object.is=="function"?Object.is:fe,N=v.useState,P=v.useEffect,R=v.useLayoutEffect,Q=v.useDebugValue;function he($,H){var G=H(),ie=N({inst:{value:G,getSnapshot:H}}),K=ie[0].inst,re=ie[1];return R(function(){K.value=G,K.getSnapshot=H,ve(K)&&re({inst:K})},[$,G,H]),P(function(){return ve(K)&&re({inst:K}),$(function(){ve(K)&&re({inst:K})})},[$]),Q(G),G}function ve($){var H=$.getSnapshot;$=$.value;try{var G=H();return!x($,G)}catch{return!0}}function q($,H){return H()}var ee=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?q:he;pe.useSyncExternalStore=v.useSyncExternalStore!==void 0?v.useSyncExternalStore:ee},28026:(Ne,pe,C)=>{/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=C(39953),fe=C(40609);function x(q,ee){return q===ee&&(q!==0||1/q===1/ee)||q!==q&&ee!==ee}var N=typeof Object.is=="function"?Object.is:x,P=fe.useSyncExternalStore,R=v.useRef,Q=v.useEffect,he=v.useMemo,ve=v.useDebugValue;pe.useSyncExternalStoreWithSelector=function(q,ee,$,H,G){var ie=R(null);if(ie.current===null){var K={hasValue:!1,value:null};ie.current=K}else K=ie.current;ie=he(function(){function ke(le){if(!me){if(me=!0,je=le,le=H(le),G!==void 0&&K.hasValue){var ge=K.value;if(G(ge,le))return be=ge}return be=le}if(ge=be,N(je,le))return ge;var Ae=H(le);return G!==void 0&&G(ge,Ae)?ge:(je=le,be=Ae)}var me=!1,je,be,Te=$===void 0?null:$;return[function(){return ke(ee())},Te===null?void 0:function(){return ke(Te())}]},[ee,$,H,G]);var re=P(q,ie[0],ie[1]);return Q(function(){K.hasValue=!0,K.value=re},[re]),ve(re),re}},40609:(Ne,pe,C)=>{Ne.exports=C(78195)},8595:(Ne,pe,C)=>{Ne.exports=C(28026)}}]);
