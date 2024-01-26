"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{96924:(j,N,t)=>{t.r(N),t.d(N,{default:()=>ee});var a=t(41407),e=t(39953),i=t(82803),h=t(84766),C=t(33155),P=t(67650),S=t(57721),u=t(47858),g=t(37546),b=t(762),d=t(25969),f=t(4919),y=t(76716),n=t(36495),o=t(20454);const U=({onStateFilterChange:c,stateFilter:v})=>{const O=(0,i.wW)(m),x=Object.entries(u.Z9).sort(([r],[l])=>r<l?-1:1).map(([r,l])=>({label:r,value:l}));return e.createElement("div",{className:O.wrapper},e.createElement(n._,null,"State"),e.createElement(o.S,{options:x,value:v,onChange:c}))},m=c=>({wrapper:(0,a.css)`
    margin-left: ${c.spacing(1)};
  `});var $=t(86832),K=t(9558),z=t(12190);const Z=({className:c,groups:v,groupBy:O,onGroupingChange:x})=>{const r=(0,$.uniq)(v.flatMap(l=>l.alerts).flatMap(({labels:l})=>Object.keys(l))).filter(l=>!(l.startsWith("__")&&l.endsWith("__"))).map(l=>({label:l,value:l}));return e.createElement("div",{"data-testid":"group-by-container",className:c},e.createElement(n._,null,"Custom group by"),e.createElement(K.NU,{"aria-label":"group by label keys",value:O,placeholder:"Group by",prefix:e.createElement(z.J,{name:"tag-alt"}),onChange:l=>{x(l.map(({value:p})=>p))},options:r}))};var Q=t(3879);const V=({groups:c})=>{const[v,O]=(0,e.useState)(Math.floor(Math.random()*100)),[x,r]=(0,P.K)(),{groupBy:l=[],queryString:p,alertState:M}=(0,y.lC)(x),D=`matcher-${v}`,G=(0,i.wW)(w),B=()=>{r({groupBy:null,queryString:null,alertState:null}),setTimeout(()=>O(v+1),100)},J=!!(l.length>0||p||M);return e.createElement("div",{className:G.wrapper},e.createElement("div",{className:G.filterSection},e.createElement(Q.F,{className:G.filterInput,key:D,defaultQueryString:p,onFilterChange:T=>r({queryString:T||null})}),e.createElement(Z,{className:G.filterInput,groups:c,groupBy:l,onGroupingChange:T=>r({groupBy:T.length?T.join(","):null})}),e.createElement(U,{stateFilter:M,onStateFilterChange:T=>r({alertState:T||null})}),J&&e.createElement(f.zx,{className:G.clearButton,variant:"secondary",icon:"times",onClick:B},"Clear filters")))},w=c=>({wrapper:(0,a.css)`
    border-bottom: 1px solid ${c.colors.border.medium};
    margin-bottom: ${c.spacing(3)};
  `,filterSection:(0,a.css)`
    display: flex;
    flex-direction: row;
    margin-bottom: ${c.spacing(3)};
  `,filterInput:(0,a.css)`
    width: 340px;
    & + & {
      margin-left: ${c.spacing(1)};
    }
  `,clearButton:(0,a.css)`
    margin-left: ${c.spacing(1)};
    margin-top: 19px;
  `});var s=t(14949);const R=c=>{const[v]=(0,P.K)(),O=(0,y.lC)(v),x=(0,s.Zh)(O.queryString||"");return(0,e.useMemo)(()=>c.reduce((r,l)=>{const p=l.alerts.filter(({labels:M,status:D})=>{const G=(0,s.eD)(M,x),B=O.alertState?D.state===O.alertState:!0;return G&&B});return p.length>0&&(Object.keys(l.labels).length===0?r.unshift({...l,alerts:p}):r.push({...l,alerts:p})),r},[]),[c,O,x])},A=(c,v)=>(0,e.useMemo)(()=>v.length===0?c.filter(r=>Object.keys(r.labels).length===0).length>1?c.reduce((r,l)=>{if(Object.keys(l.labels).length===0){const p=r.find(({labels:M})=>Object.keys(M));p?p.alerts=(0,$.uniqBy)([...p.alerts,...l.alerts],"labels"):r.push({alerts:l.alerts,labels:{},receiver:{name:"NONE"}})}else r.push(l);return r},[]):c:c.flatMap(({alerts:x})=>x).reduce((x,r)=>{if(v.every(p=>Object.keys(r.labels).includes(p))){const p=x.find(M=>v.every(D=>M.labels[D]===r.labels[D]));if(p)p.alerts.push(r);else{const M=v.reduce((D,G)=>(D={...D,[G]:r.labels[G]},D),{});x.push({alerts:[r],labels:M,receiver:{name:"NONE"}})}}else{const p=x.find(M=>Object.keys(M.labels).length===0);p?p.alerts.push(r):x.push({alerts:[r],labels:{},receiver:{name:"NONE"}})}return x},[]),[c,v]);var F=t(26544),W=t(328),E=t(79493),H=t(63483),X=t(95712),Y=t(57675);const k=()=>{const{useGetAlertmanagerChoiceStatusQuery:c}=g.alertmanagerApi,{selectedAlertmanager:v}=(0,W.ZA)(),O=(0,S.useDispatch)(),[x]=(0,P.K)(),{groupBy:r=[]}=(0,y.lC)(x),l=(0,i.wW)(_),{currentData:p}=c(),M=(0,F._)(I=>I.amAlertGroups),{loading:D,error:G,result:B=[]}=M[v||""]??Y.oq,J=A(B,r),T=R(J),te=v===X.GC&&p?.alertmanagersChoice===u.TE.External;return(0,e.useEffect)(()=>{function I(){v&&O((0,E.mS)(v))}I();const L=setInterval(I,H.iF);return()=>{clearInterval(L)}},[O,v]),e.createElement(e.Fragment,null,e.createElement(V,{groups:B}),D&&e.createElement(h.u,{text:"Loading notifications"}),G&&!D&&e.createElement(C.b,{title:"Error loading notifications",severity:"error"},G.message||"Unknown error"),te&&e.createElement(C.b,{title:"Grafana alerts are not delivered to Grafana Alertmanager"},"Grafana is configured to send alerts to external alertmanagers only. No alerts are expected to be available here for the selected Alertmanager."),B&&T.map((I,L)=>e.createElement(e.Fragment,{key:`${JSON.stringify(I.labels)}-group-${L}`},(L===1&&Object.keys(T[0].labels).length===0||L===0&&Object.keys(I.labels).length>0)&&e.createElement("p",{className:l.groupingBanner},"Grouped by: ",Object.keys(I.labels).join(", ")),e.createElement(d.y,{alertManagerSourceName:v||"",group:I}))),B&&!T.length&&e.createElement("p",null,"No results."))},q=()=>e.createElement(b.O,{pageId:"groups",accessType:"instance"},e.createElement(k,null)),_=c=>({groupingBanner:(0,a.css)`
    margin: ${c.spacing(2,0)};
  `}),ee=q},81456:(j,N,t)=>{t.d(N,{q:()=>C});var a=t(86832),e=t.n(a),i=t(39953),h=t(18314);const C=({actions:d,children:f})=>{const y=(0,a.filter)(d,g),n=(0,a.filter)(d,b);return y.length?i.createElement(P,{actions:y},f):n.length?i.createElement(S,{actions:n},f):null},P=({actions:d,children:f})=>{const y=(0,h.Mz)();return u(y,d)?i.createElement(i.Fragment,null,f):null},S=({actions:d,children:f})=>{const y=(0,h.cI)();return u(y,d)?i.createElement(i.Fragment,null,f):null};function u(d,f){return(0,a.chain)(d).pick(f).values().value().some(([y,n])=>n===!0)}function g(d){return Object.values(h.oI).includes(d)}function b(d){return Object.values(h.hB).includes(d)}},81036:(j,N,t)=>{t.d(N,{F:()=>C});var a=t(41407),e=t(39953),i=t(82803),h=t(47224);const C=({renderExpandedContent:S,...u})=>{const g=(0,i.wW)(P);return e.createElement(h.t,{renderExpandedContent:S?(b,d,f)=>e.createElement(e.Fragment,null,d!==f.length-1&&e.createElement("div",{className:(0,a.cx)(g.contentGuideline,g.guideline)}),S(b,d,f)):void 0,renderPrefixHeader:()=>e.createElement("div",{className:g.relative},e.createElement("div",{className:(0,a.cx)(g.headerGuideline,g.guideline)})),renderPrefixCell:(b,d,f)=>e.createElement("div",{className:g.relative},e.createElement("div",{className:(0,a.cx)(g.topGuideline,g.guideline)}),d!==f.length-1&&e.createElement("div",{className:(0,a.cx)(g.bottomGuideline,g.guideline)})),...u})},P=S=>({relative:(0,a.css)`
    position: relative;
    height: 100%;
  `,guideline:(0,a.css)`
    left: -19px;
    border-left: 1px solid ${S.colors.border.weak};
    position: absolute;

    ${S.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:(0,a.css)`
    width: 18px;
    border-bottom: 1px solid ${S.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:(0,a.css)`
    top: 50%;
    bottom: 0;
  `,contentGuideline:(0,a.css)`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:(0,a.css)`
    top: -17px;
    bottom: 0;
  `})},25969:(j,N,t)=>{t.d(N,{y:()=>V});var a=t(41407),e=t(39953),i=t(82803),h=t(47858),C=t(4353),P=t(98934),S=t(5195),u=t(81036),g=t(84070),b=t(4919),d=t(97125),f=t(57721),y=t(18314),n=t(95712),o=t(76716),U=t(75825),m=t(81456);const $=({alert:s,alertManagerSourceName:R})=>{const A=(0,i.wW)(K),W=(0,n.HY)(R)?d.contextSrv.hasPermission(f.AccessControlAction.AlertingRuleRead):!0;return e.createElement(e.Fragment,null,e.createElement("div",{className:A.actionsRow},s.status.state===h.Z9.Suppressed&&e.createElement(m.q,{actions:[y.oI.CreateSilence,y.oI.UpdateSilence]},e.createElement(b.Qj,{href:`${(0,o.eQ)("/alerting/silences",R)}&silenceIds=${s.status.silencedBy.join(",")}`,className:A.button,icon:"bell",size:"sm"},"Manage silences")),s.status.state===h.Z9.Active&&e.createElement(m.q,{actions:[y.oI.CreateSilence]},e.createElement(b.Qj,{href:(0,o.VN)(R,s.labels),className:A.button,icon:"bell-slash",size:"sm"},"Silence")),W&&s.generatorURL&&e.createElement(b.Qj,{className:A.button,href:s.generatorURL,icon:"chart-line",size:"sm"},"See source")),Object.entries(s.annotations).map(([E,H])=>e.createElement(U.a,{key:E,annotationKey:E,value:H})),e.createElement("div",{className:A.receivers},"Receivers:"," ",s.receivers.map(({name:E})=>E).filter(E=>!!E).join(", ")))},K=s=>({button:(0,a.css)`
    & + & {
      margin-left: ${s.spacing(1)};
    }
  `,actionsRow:(0,a.css)`
    padding: ${s.spacing(2,0)} !important;
    border-bottom: 1px solid ${s.colors.border.medium};
  `,receivers:(0,a.css)`
    padding: ${s.spacing(1,0)};
  `}),z=({alerts:s,alertManagerSourceName:R})=>{const A=(0,i.wW)(Z),F=(0,e.useMemo)(()=>[{id:"state",label:"State",renderCell:({data:E})=>e.createElement(e.Fragment,null,e.createElement(g.G,{state:E.status.state}),e.createElement("span",{className:A.duration},"for"," ",(0,S.vT)({start:new Date(E.startsAt),end:new Date(E.endsAt)}))),size:"220px"},{id:"labels",label:"Labels",renderCell:({data:{labels:E}})=>e.createElement(C.s,{labels:E,size:"sm"}),size:1}],[A]),W=(0,e.useMemo)(()=>s.map(E=>({id:E.fingerprint,data:E})),[s]);return e.createElement("div",{className:A.tableWrapper,"data-testid":"alert-group-table"},e.createElement(u.F,{cols:F,items:W,isExpandable:!0,renderExpandedContent:({data:E})=>e.createElement($,{alert:E,alertManagerSourceName:R})}))},Z=s=>({tableWrapper:(0,a.css)`
    margin-top: ${s.spacing(3)};
    ${s.breakpoints.up("md")} {
      margin-left: ${s.spacing(4.5)};
    }
  `,duration:(0,a.css)`
    margin-left: ${s.spacing(1)};
    font-size: ${s.typography.bodySmall.fontSize};
  `});var Q=t(66706);const V=({alertManagerSourceName:s,group:R})=>{const[A,F]=(0,e.useState)(!0),W=(0,i.wW)(w);return e.createElement("div",{className:W.wrapper},e.createElement("div",{className:W.header},e.createElement("div",{className:W.group,"data-testid":"alert-group"},e.createElement(P.U,{size:"sm",isCollapsed:A,onToggle:()=>F(!A),"data-testid":"alert-group-collapse-toggle"}),Object.keys(R.labels).length?e.createElement(C.s,{labels:R.labels,size:"sm"}):e.createElement("span",null,"No grouping")),e.createElement(Q.Z,{group:R})),!A&&e.createElement(z,{alertManagerSourceName:s,alerts:R.alerts}))},w=s=>({wrapper:(0,a.css)`
    & + & {
      margin-top: ${s.spacing(2)};
    }
  `,header:(0,a.css)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${s.spacing(1,1,1,0)};
    background-color: ${s.colors.background.secondary};
    width: 100%;
  `,group:(0,a.css)`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:(0,a.css)``,spanElement:(0,a.css)`
    margin-left: ${s.spacing(.5)};
  `,[h.Z9.Active]:(0,a.css)`
    color: ${s.colors.error.main};
  `,[h.Z9.Suppressed]:(0,a.css)`
    color: ${s.colors.primary.main};
  `,[h.Z9.Unprocessed]:(0,a.css)`
    color: ${s.colors.secondary.main};
  `})},84070:(j,N,t)=>{t.d(N,{G:()=>C});var a=t(39953),e=t(47858),i=t(47624);const h={[e.Z9.Active]:"bad",[e.Z9.Unprocessed]:"neutral",[e.Z9.Suppressed]:"info"},C=({state:P})=>a.createElement(i.i,{state:h[P]},P)},18314:(j,N,t)=>{t.d(N,{Mz:()=>b,RA:()=>d,cI:()=>g,hB:()=>S,o2:()=>f,oI:()=>P,xC:()=>y});var a=t(39953),e=t(97125),i=t(57721),h=t(328),C=t(60703),P=(n=>(n.ViewExternalConfiguration="view-external-configuration",n.UpdateExternalConfiguration="update-external-configuration",n.CreateContactPoint="create-contact-point",n.ViewContactPoint="view-contact-point",n.UpdateContactPoint="edit-contact-points",n.DeleteContactPoint="delete-contact-point",n.ExportContactPoint="export-contact-point",n.CreateNotificationTemplate="create-notification-template",n.ViewNotificationTemplate="view-notification-template",n.UpdateNotificationTemplate="edit-notification-template",n.DeleteNotificationTemplate="delete-notification-template",n.DecryptSecrets="decrypt-secrets",n.CreateNotificationPolicy="create-notification-policy",n.ViewNotificationPolicyTree="view-notification-policy-tree",n.UpdateNotificationPolicyTree="update-notification-policy-tree",n.DeleteNotificationPolicy="delete-notification-policy",n.ExportNotificationPolicies="export-notification-policies",n.CreateSilence="create-silence",n.ViewSilence="view-silence",n.UpdateSilence="update-silence",n.ViewMuteTiming="view-mute-timing",n.CreateMuteTiming="create-mute-timing",n.UpdateMuteTiming="update-mute-timing",n.DeleteMuteTiming="delete-mute-timing",n))(P||{}),S=(n=>(n.CreateAlertRule="create-alert-rule",n.ViewAlertRule="view-alert-rule",n.UpdateAlertRule="update-alert-rule",n.DeleteAlertRule="delete-alert-rule",n.CreateExternalAlertRule="create-external-alert-rule",n.ViewExternalAlertRule="view-external-alert-rule",n.UpdateExternalAlertRule="update-external-alert-rule",n.DeleteExternalAlertRule="delete-external-alert-rule",n))(S||{});const u=!0;function g(){return{["create-alert-rule"]:[u,e.contextSrv.hasPermission(i.AccessControlAction.AlertingRuleCreate)],["view-alert-rule"]:[u,e.contextSrv.hasPermission(i.AccessControlAction.AlertingRuleRead)],["update-alert-rule"]:[u,e.contextSrv.hasPermission(i.AccessControlAction.AlertingRuleUpdate)],["delete-alert-rule"]:[u,e.contextSrv.hasPermission(i.AccessControlAction.AlertingRuleDelete)],["create-external-alert-rule"]:[u,e.contextSrv.hasPermission(i.AccessControlAction.AlertingRuleExternalWrite)],["view-external-alert-rule"]:[u,e.contextSrv.hasPermission(i.AccessControlAction.AlertingRuleExternalRead)],["update-external-alert-rule"]:[u,e.contextSrv.hasPermission(i.AccessControlAction.AlertingRuleExternalWrite)],["delete-external-alert-rule"]:[u,e.contextSrv.hasPermission(i.AccessControlAction.AlertingRuleExternalWrite)]}}function b(){const{selectedAlertmanager:n,hasConfigurationAPI:o,isGrafanaAlertmanager:U}=(0,h.ZA)(),m=(0,C.Ko)(n),$=(0,C.QX)(n);return{["view-external-configuration"]:[u,e.contextSrv.hasPermission(i.AccessControlAction.AlertingNotificationsExternalRead)],["update-external-configuration"]:[o,e.contextSrv.hasPermission(i.AccessControlAction.AlertingNotificationsExternalWrite)],["create-contact-point"]:[o,e.contextSrv.hasPermission(m.create)],["view-contact-point"]:[u,e.contextSrv.hasPermission(m.read)],["edit-contact-points"]:[o,e.contextSrv.hasPermission(m.update)],["delete-contact-point"]:[o,e.contextSrv.hasPermission(m.delete)],["export-contact-point"]:[U,e.contextSrv.hasPermission(m.read)],["create-notification-template"]:[o,e.contextSrv.hasPermission(m.create)],["view-notification-template"]:[u,e.contextSrv.hasPermission(m.read)],["edit-notification-template"]:[o,e.contextSrv.hasPermission(m.update)],["delete-notification-template"]:[o,e.contextSrv.hasPermission(m.delete)],["create-notification-policy"]:[o,e.contextSrv.hasPermission(m.create)],["view-notification-policy-tree"]:[u,e.contextSrv.hasPermission(m.read)],["update-notification-policy-tree"]:[o,e.contextSrv.hasPermission(m.update)],["delete-notification-policy"]:[o,e.contextSrv.hasPermission(m.delete)],["export-notification-policies"]:[U,e.contextSrv.hasPermission(m.read)],["decrypt-secrets"]:[U,e.contextSrv.hasPermission(m.provisioning.readSecrets)],["create-silence"]:[o,e.contextSrv.hasPermission($.create)],["view-silence"]:[u,e.contextSrv.hasPermission($.read)],["update-silence"]:[o,e.contextSrv.hasPermission($.update)],["create-mute-timing"]:[o,e.contextSrv.hasPermission(m.create)],["view-mute-timing"]:[u,e.contextSrv.hasPermission(m.read)],["update-mute-timing"]:[o,e.contextSrv.hasPermission(m.update)],["delete-mute-timing"]:[o,e.contextSrv.hasPermission(m.delete)]}}function d(n){const o=b();return(0,a.useMemo)(()=>o[n],[o,n])}function f(n){const o=b();return(0,a.useMemo)(()=>n.map(U=>o[U]),[o,n])}function y(n){const o=g();return(0,a.useMemo)(()=>o[n],[o,n])}}}]);

//# sourceMappingURL=AlertGroups.c63279e869e91df91e6b.js.map