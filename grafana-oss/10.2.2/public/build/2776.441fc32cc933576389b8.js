"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2776],{81036:(L,D,e)=>{e.d(D,{F:()=>u});var l=e(41407),n=e(39953),h=e(82803),E=e(47224);const u=({renderExpandedContent:r,...s})=>{const i=(0,h.wW)(t);return n.createElement(E.t,{renderExpandedContent:r?(T,C,y)=>n.createElement(n.Fragment,null,C!==y.length-1&&n.createElement("div",{className:(0,l.cx)(i.contentGuideline,i.guideline)}),r(T,C,y)):void 0,renderPrefixHeader:()=>n.createElement("div",{className:i.relative},n.createElement("div",{className:(0,l.cx)(i.headerGuideline,i.guideline)})),renderPrefixCell:(T,C,y)=>n.createElement("div",{className:i.relative},n.createElement("div",{className:(0,l.cx)(i.topGuideline,i.guideline)}),C!==y.length-1&&n.createElement("div",{className:(0,l.cx)(i.bottomGuideline,i.guideline)})),...s})},t=r=>({relative:(0,l.css)`
    position: relative;
    height: 100%;
  `,guideline:(0,l.css)`
    left: -19px;
    border-left: 1px solid ${r.colors.border.weak};
    position: absolute;

    ${r.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:(0,l.css)`
    width: 18px;
    border-bottom: 1px solid ${r.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:(0,l.css)`
    top: 50%;
    bottom: 0;
  `,contentGuideline:(0,l.css)`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:(0,l.css)`
    top: -17px;
    bottom: 0;
  `})},61324:(L,D,e)=>{e.d(D,{C0:()=>t,Uv:()=>E,Xq:()=>u});var l=e(39953),n=e(33155),h=e(12608),E=(r=>(r.ContactPoint="contact point",r.Template="template",r.MuteTiming="mute timing",r.AlertRule="alert rule",r.RootNotificationPolicy="root notification policy",r))(E||{});const u=({resource:r})=>l.createElement(n.b,{title:`This ${r} cannot be edited through the UI`,severity:"info"},"This ",r," has been provisioned, that means it was created by config. Please contact your server admin to update this ",r,"."),t=()=>l.createElement(h.C,{text:"Provisioned",color:"purple"})},38153:(L,D,e)=>{e.d(D,{V:()=>h});var l=e(39953),n=e(12190);const h=({namespace:E,group:u})=>u?l.createElement(l.Fragment,null,E," ",l.createElement(n.J,{name:"angle-right"})," ",u):l.createElement(l.Fragment,null,E)},3910:(L,D,e)=>{e.d(D,{V:()=>t});var l=e(41407),n=e(39953),h=e(82803),E=e(69865),u=e(12190);const t=({rule:s})=>{const i=(0,h.wW)(r);return s.health==="err"||s.health==="error"?n.createElement(E.u,{theme:"error",content:s.lastError||"No error message provided."},n.createElement("div",{className:i.warn},n.createElement(u.J,{name:"exclamation-triangle"}),n.createElement("span",null,"error"))):n.createElement(n.Fragment,null,s.health)},r=s=>({warn:(0,l.css)`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${s.spacing(1)};

    color: ${s.colors.warning.text};
  `})},6320:(L,D,e)=>{e.d(D,{p:()=>T});var l=e(41407),n=e(39953),h=e(5195),E=e(27366),u=e(82803),t=e(28409),r=e(17330),s=e(15032),i=e(10162);const T=({rule:y,isDeleting:G,isCreating:V,isPaused:x})=>{const N=(0,u.wW)(C),{promRule:v}=y,F=(0,n.useMemo)(()=>{if(v&&(0,s.x_)(v)&&v.alerts?.length&&v.state!==r.x_.Inactive){const W=v.activeAt?new Date(v.activeAt):(0,s.ub)(v);if(W)return n.createElement("span",{title:String(W),className:N.for},"for"," ",(0,h.vT)({start:W,end:new Date},!1))}return null},[v,N]);return G?n.createElement(E.K,{gap:1},n.createElement(t.$,null),"Deleting"):V?n.createElement(E.K,{gap:1},n.createElement(t.$,null),"Creating"):v&&(0,s.x_)(v)?n.createElement(E.K,{gap:1},n.createElement(i.l,{state:v.state,isPaused:x}),F):v&&(0,s.OP)(v)?n.createElement(n.Fragment,null,"Recording rule"):n.createElement(n.Fragment,null,"n/a")},C=y=>({for:(0,l.css)`
    font-size: ${y.typography.bodySmall.fontSize};
    color: ${y.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},72776:(L,D,e)=>{e.d(D,{i:()=>he});var l=e(41407),n=e(201),h=e(73053);function E(a,p){(0,h.Z)(2,arguments);var M=(0,n.Z)(a),R=(0,n.Z)(p);return M.getTime()<R.getTime()}var u=e(80100),t=e(39953),r=e(5195),s=e(92403),i=e(48069),T=e(82803),C=e(69865),y=e(74602),G=e(2592),V=e(63483),x=e(15032),N=e(47224),v=e(81036),F=e(61324),W=e(38153),k=e(89066),q=e(86832),_=e(53721),ee=e(27366),b=e(4919),te=e(36210),S=e(13767),ne=e(58047),Y=e(12190),ae=e(32840),le=e(90634),oe=e(57721),re=e(41222),se=e(79493),H=e(95712),j=e(76716),z=e(30391),Q=e(24597),ie=e(49376);const Ae=a=>window.matchMedia(`(max-width: ${a}px)`).matches,ce=({rule:a,rulesSource:p})=>{const M=(0,oe.useDispatch)(),R=(0,_.TH)(),I=(0,le.iG)(),A=(0,T.wW)(ue),[c,o]=(0,t.useState)(void 0),{namespace:m,group:g,rulerRule:f}=a,[d,P]=(0,t.useState)(),B=(0,H.EG)(p),$=(0,x.Pc)(a.rulerRule)&&!!a.rulerRule.grafana_alert.provenance,K=[],U=[],X=(0,x.Jq)(g),{isEditable:Pe,isRemovable:Ce}=(0,re.M)(B,f),w=R.pathname+R.search,Z=me(R.pathname),ye=()=>{if(d&&d.rulerRule){const O=z.Zk((0,H.EG)(d.namespace.rulesSource),d.namespace.name,d.group.name,d.rulerRule);M((0,se.hS)(O,{navigateTo:Z?"/alerting/list":void 0})),P(void 0)}},Te=()=>(0,j.t6)(p,a),Oe=(0,H.EG)(p);if(Z||K.push(t.createElement(C.u,{placement:"top",content:"View"},t.createElement(b.Qj,{className:A.button,title:"View",size:"sm",key:"view",variant:"secondary",icon:"eye",href:(0,j.V2)(p,a,w)}))),f&&!X){const O=z.Zk(Oe,m.name,g.name,f);if(Pe){if(!$){const J=(0,Q.u)(`/alerting/${encodeURIComponent(z.$V(O))}/edit`,{returnTo:w});Z&&K.push(t.createElement(te.m,{key:"copy",icon:"copy",onClipboardError:xe=>{I.error("Error while copying URL",xe)},className:A.button,size:"sm",getText:Te},"Copy link to rule")),K.push(t.createElement(C.u,{placement:"top",content:"Edit"},t.createElement(b.Qj,{title:"Edit",className:A.button,size:"sm",key:"edit",variant:"secondary",icon:"pen",href:J})))}U.push(t.createElement(S.v.Item,{label:"Duplicate",icon:"copy",onClick:()=>o({identifier:O,isProvisioned:$})}))}(0,x.Pc)(f)&&U.push(t.createElement(S.v.Item,{label:"Modify export",icon:"edit",url:(0,Q.u)(`/alerting/${encodeURIComponent(z.$V(O))}/modify-export`,{returnTo:R.pathname+R.search})}))}return Ce&&f&&!X&&!$&&U.push(t.createElement(S.v.Item,{label:"Delete",icon:"trash-alt",onClick:()=>P(a)})),K.length||U.length?t.createElement(t.Fragment,null,t.createElement(ee.K,{gap:1},K.map((O,J)=>t.createElement(t.Fragment,{key:J},O)),U.length>0&&t.createElement(ne.L,{overlay:t.createElement(S.v,null,U.map(O=>t.createElement(t.Fragment,{key:(0,q.uniqueId)("action_")},O)))},t.createElement(b.zx,{variant:"secondary",size:"sm"},"More",t.createElement(Y.J,{name:"angle-down"})))),!!d&&t.createElement(ae.s,{isOpen:!0,title:"Delete rule",body:t.createElement("div",null,t.createElement("p",null,'Deleting "',t.createElement("strong",null,d.name),'" will permanently remove it from your alert rule list.'),t.createElement("p",null,"Are you sure you want to delete this rule?")),confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:ye,onDismiss:()=>P(void 0)}),c&&t.createElement(ie._,{identifier:c.identifier,isProvisioned:c.isProvisioned,onDismiss:()=>o(void 0)})):null};function me(a){return a.endsWith("/view")}const ue=a=>({button:(0,l.css)`
    padding: 0 ${a.spacing(2)};
  `});var de=e(32688),Ee=e(73895);function ge({rule:a}){const p=(0,T.wW)(ve),{exceedsLimit:M}=(0,t.useMemo)(()=>(0,Ee.f)(a.group.interval),[a.group.interval]);return M?t.createElement(C.u,{theme:"error",content:t.createElement("div",null,"A minimum evaluation interval of"," ",t.createElement("span",{className:p.globalLimitValue},de.config.unifiedAlerting.minInterval)," has been configured in Grafana and will be used instead of the ",a.group.interval," interval configured for the Rule Group.")},t.createElement(Y.J,{name:"stopwatch-slash",className:p.icon})):null}function ve(a){return{globalLimitValue:(0,l.css)`
      font-weight: ${a.typography.fontWeightBold};
    `,icon:(0,l.css)`
      fill: ${a.colors.warning.text};
    `}}var pe=e(61403),fe=e(3910),De=e(6320);const he=({rules:a,className:p,showGuidelines:M=!1,emptyMessage:R="No rules found.",showGroupColumn:I=!1,showSummaryColumn:A=!1,showNextEvaluationColumn:c=!1})=>{const o=(0,T.wW)(Me),m=(0,l.cx)(o.wrapper,p,{[o.wrapperMargin]:M}),g=(0,t.useMemo)(()=>a.map((P,B)=>({id:`${P.namespace.name}-${P.group.name}-${P.name}-${B}`,data:P})),[a]),f=Re(A,I,c);if(!a.length)return t.createElement("div",{className:(0,l.cx)(m,o.emptyMessage)},R);const d=M?v.F:N.t;return t.createElement("div",{className:m,"data-testid":"rules-table"},t.createElement(d,{cols:f,isExpandable:!0,items:g,renderExpandedContent:({data:P})=>t.createElement(pe.Ii,{rule:P}),pagination:{itemsPerPage:y.gN},paginationStyles:o.pagination}))},Me=a=>({wrapperMargin:(0,l.css)`
    ${a.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:(0,l.css)`
    padding: ${a.spacing(1)};
  `,wrapper:(0,l.css)`
    width: auto;
    border-radius: ${a.shape.radius.default};
  `,pagination:(0,l.css)`
    display: flex;
    margin: 0;
    padding-top: ${a.spacing(1)};
    padding-bottom: ${a.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${a.colors.border.medium};
    border-right: 1px solid ${a.colors.border.medium};
    border-bottom: 1px solid ${a.colors.border.medium};
  `});function Re(a,p,M){const{hasRuler:R,rulerRulesLoaded:I}=(0,G.h)(),A=(0,t.useCallback)(c=>{const o=c.promRule?.lastEvaluation&&(0,r.qb)(c.promRule.lastEvaluation),m=c.group.interval&&(0,r.jO)(c.group.interval);if(!o||!m||(0,x.E)(c))return;const g=(0,r.RA)(c.group.interval),f=Date.parse(c.promRule?.lastEvaluation||""),d=(0,r.Ks)(f,g);return E(d,new Date)?{humanized:`within ${(0,u.Z)(g)}`,fullDate:`within ${(0,u.Z)(g)}`}:{humanized:`in ${(0,s.CQ)(d).locale("en").fromNow(!0)}`,fullDate:(0,i.dq)(d,{format:"YYYY-MM-DD HH:mm:ss"})}},[]);return(0,t.useMemo)(()=>{const c=[{id:"state",label:"State",renderCell:({data:o})=>{const{namespace:m}=o,{rulesSource:g}=m,{promRule:f,rulerRule:d}=o,P=!!(R(g)&&I(g)&&f&&!d),B=!!(R(g)&&I(g)&&d&&!f),$=(0,x.E)(o);return t.createElement(De.p,{rule:o,isDeleting:P,isCreating:B,isPaused:$})},size:"165px"},{id:"name",label:"Name",renderCell:({data:o})=>o.name,size:M?4:5},{id:"provisioned",label:"",renderCell:({data:o})=>{const m=o.rulerRule;return(0,x.Pc)(m)&&m.grafana_alert.provenance?t.createElement(F.C0,null):null},size:"100px"},{id:"warnings",label:"",renderCell:({data:o})=>t.createElement(ge,{rule:o}),size:"45px"},{id:"health",label:"Health",renderCell:({data:{promRule:o,group:m}})=>o?t.createElement(fe.V,{rule:o}):null,size:"75px"}];return a&&c.push({id:"summary",label:"Summary",renderCell:({data:o})=>t.createElement(k.Z,{input:o.annotations[V.q6.summary]??""}),size:M?4:5}),M&&c.push({id:"nextEvaluation",label:"Next evaluation",renderCell:({data:o})=>{const m=A(o);return m&&t.createElement(C.u,{placement:"top",content:`${m?.fullDate}`,theme:"info"},t.createElement("span",null,m?.humanized))},size:2}),p&&c.push({id:"group",label:"Group",renderCell:({data:o})=>{const{namespace:m,group:g}=o;return g.name==="default"?t.createElement(W.V,{namespace:m.name}):t.createElement(W.V,{namespace:m.name,group:g.name})},size:5}),c.push({id:"actions",label:"Actions",renderCell:({data:o})=>t.createElement(ce,{rule:o,rulesSource:o.namespace.rulesSource}),size:"200px"}),c},[a,p,M,R,I,A])}},2592:(L,D,e)=>{e.d(D,{h:()=>E});var l=e(39953),n=e(95712),h=e(26544);function E(){const u=(0,h._)(s=>s.rulerRules),t=(0,l.useCallback)(s=>{const i=typeof s=="string"?s:s.name;return i===n.GC||!!u[i]?.result},[u]),r=(0,l.useCallback)(s=>{const i=(0,n.EG)(s);return!!u[i]?.result},[u]);return{hasRuler:t,rulerRulesLoaded:r}}}}]);

//# sourceMappingURL=2776.441fc32cc933576389b8.js.map