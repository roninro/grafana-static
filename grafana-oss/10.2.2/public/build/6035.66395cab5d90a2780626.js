"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6035],{81456:(U,O,n)=>{n.d(O,{q:()=>C});var i=n(86832),e=n.n(i),l=n(39953),h=n(18314);const C=({actions:f,children:c})=>{const r=(0,i.filter)(f,g),t=(0,i.filter)(f,M);return r.length?l.createElement(T,{actions:r},c):t.length?l.createElement(x,{actions:t},c):null},T=({actions:f,children:c})=>{const r=(0,h.Mz)();return u(r,f)?l.createElement(l.Fragment,null,c):null},x=({actions:f,children:c})=>{const r=(0,h.cI)();return u(r,f)?l.createElement(l.Fragment,null,c):null};function u(f,c){return(0,i.chain)(f).pick(c).values().value().some(([r,t])=>t===!0)}function g(f){return Object.values(h.oI).includes(f)}function M(f){return Object.values(h.hB).includes(f)}},18677:(U,O,n)=>{n.d(O,{g:()=>x});var i=n(41407),e=n(39953),l=n(27366),h=n(82803),C=n(98632),T=n(12190);const x=({children:g,icon:M,color:f="secondary",...c})=>{const r=(0,h.wW)(u),t=typeof c.onClick=="function";return e.createElement("div",{className:(0,i.cx)({[r.interactive]:t}),...c},e.createElement(C.x,{variant:"bodySmall",color:f},e.createElement(l.K,{direction:"row",alignItems:"center",gap:.5},M&&e.createElement(T.J,{size:"sm",name:M}),g)))},u=()=>({interactive:(0,i.css)`
    cursor: pointer;
  `})},96440:(U,O,n)=>{n.d(O,{g:()=>g});var i=n(41407),e=n(86832),l=n.n(e),h=n(39953),C=n(27366),T=n(82803),x=n(72899),u=n(44351);const g=({matchers:c})=>{const r=(0,T.wW)(f),t=5,o=(0,e.take)(c,t),m=(0,e.takeRight)(c,c.length-t),d=m.length>0;return h.createElement("span",{"data-testid":"label-matchers"},h.createElement(C.K,{direction:"row",gap:1,alignItems:"center"},o.map(E=>h.createElement(M,{key:(0,e.uniqueId)(),matcher:E})),d&&h.createElement(u.z,{arrow:!0,placement:"top",content:h.createElement(h.Fragment,null,m.map(E=>h.createElement(M,{key:(0,e.uniqueId)(),matcher:E})))},h.createElement("span",null,h.createElement("div",{className:r.metadata},`and ${m.length} more`)))))},M=({matcher:[c,r,t]})=>{const o=(0,T.wW)(f);return h.createElement("div",{className:o.matcher(c).wrapper},h.createElement(C.K,{direction:"row",gap:0,alignItems:"baseline"},c," ",r," ",t))},f=c=>({matcher:r=>{const{color:t,borderColor:o}=(0,x.Bx)(r);return{wrapper:(0,i.css)`
        color: #fff;
        background: ${t};
        padding: ${c.spacing(.33)} ${c.spacing(.66)};
        font-size: ${c.typography.bodySmall.fontSize};

        border: solid 1px ${o};
        border-radius: ${c.shape.borderRadius(2)};
      `}},metadata:(0,i.css)`
    color: ${c.colors.text.secondary};

    font-size: ${c.typography.bodySmall.fontSize};
    font-weight: ${c.typography.bodySmall.fontWeight};
  `})},46035:(U,O,n)=>{n.r(O),n.d(O,{default:()=>ie});var i=n(41407),e=n(39953),l=n(82803),h=n(33155),C=n(84766),T=n(41393),x=n(65577),u=n(86832),g=n(71757),M=n.n(g),f=n(948),c=n(4919),r=n(72899),t=n(3532),o=n(98934),m=n(18677),d=n(67111),E=n(96440);function y(a){return a.path?.length===0}function R(a){const v=new Map;function P(D,A=[]){v.set(D.id,{...D,path:A}),D.routes?.forEach(p=>P(p,[...A,D.id]))}return P(a,[]),v}function b(a){return a.object_matchers?.length===0}function _({route:a}){const v=(0,l.wW)(H);return y(a)?e.createElement("div",{className:v.defaultPolicy},"Default policy"):b(a)?e.createElement("div",{className:v.textMuted},"No matchers"):e.createElement(E.g,{matchers:a.object_matchers??[]})}const H=a=>({defaultPolicy:(0,i.css)`
    padding: ${a.spacing(.5)};
    background: ${a.colors.background.secondary};
    width: fit-content;
  `,textMuted:(0,i.css)`
    color: ${a.colors.text.secondary};
  `});var k=n(73075),Z=n(12190),s=n(18314),I=n(328),B=n(95712),w=n(76716),L=n(81456);function $({route:a,routesByIdMap:v}){const P=(0,l.wW)(X),D=a.path?.slice(1)??[],A=[...(0,u.compact)(D.map(p=>v.get(p))),a];return e.createElement("div",{className:P.policyPathWrapper},e.createElement("div",{className:P.defaultPolicy},"Default policy"),A.map((p,N)=>e.createElement("div",{key:p.id},e.createElement("div",{className:P.policyInPath(N,N===A.length-1)},b(p)?e.createElement("div",{className:P.textMuted},"No matchers"):e.createElement(E.g,{matchers:p.object_matchers??[]})))))}function j({onClose:a,route:v,receiver:P,routesByIdMap:D,alertManagerSourceName:A}){const p=(0,l.wW)(X),N=y(v);return e.createElement(I.h5,{accessType:"notification",alertmanagerSourceName:B.JY},e.createElement(k.u,{className:p.detailsModal,isOpen:!0,title:"Routing details",onDismiss:a,onClickBackdrop:a},e.createElement(x.K,{gap:0,direction:"column"},e.createElement("div",{className:(0,i.cx)(p.textMuted,p.marginBottom(2))},"Your alert instances are routed as follows."),e.createElement("div",null,"Notification policy path"),N&&e.createElement("div",{className:p.textMuted},"Default policy"),e.createElement("div",{className:p.separator(1)}),!N&&e.createElement(e.Fragment,null,e.createElement($,{route:v,routesByIdMap:D})),e.createElement("div",{className:p.separator(4)}),e.createElement("div",{className:p.contactPoint},e.createElement(x.K,{gap:1,direction:"row",alignItems:"center"},"Contact point:",e.createElement("span",{className:p.textMuted},P.name)),e.createElement(L.q,{actions:[s.oI.UpdateContactPoint]},e.createElement(x.K,{gap:1,direction:"row",alignItems:"center"},e.createElement("a",{href:(0,w.eQ)(`/alerting/notifications/receivers/${encodeURIComponent(P.name)}/edit`,A),className:p.link,target:"_blank",rel:"noreferrer"},"See details ",e.createElement(Z.J,{name:"external-link-alt"}))))),e.createElement("div",{className:p.button},e.createElement(c.zx,{variant:"primary",type:"button",onClick:a},"Close")))))}const X=a=>({textMuted:(0,i.css)`
    color: ${a.colors.text.secondary};
  `,link:(0,i.css)`
    display: block;
    color: ${a.colors.text.link};
  `,button:(0,i.css)`
    justify-content: flex-end;
    display: flex;
  `,detailsModal:(0,i.css)`
    max-width: 560px;
  `,defaultPolicy:(0,i.css)`
    padding: ${a.spacing(.5)};
    background: ${a.colors.background.secondary};
    width: fit-content;
  `,contactPoint:(0,i.css)`
    display: flex;
    flex-direction: row;
    gap: ${a.spacing(1)};
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${a.spacing(1)};
  `,policyPathWrapper:(0,i.css)`
    display: flex;
    flex-direction: column;
    margin-top: ${a.spacing(1)};
  `,separator:v=>(0,i.css)`
    margin-top: ${a.spacing(v)};
  `,marginBottom:v=>(0,i.css)`
    margin-bottom: ${a.spacing(a.spacing(v))};
  `,policyInPath:(v=0,P=!1)=>(0,i.css)`
    margin-left: ${30+v*30}px;
    padding: ${a.spacing(1)};
    margin-top: ${a.spacing(1)};
    border: solid 1px ${a.colors.border.weak};
    background: ${a.colors.background.secondary};
    width: fit-content;
    position: relative;

    ${P&&(0,i.css)`
        border: solid 1px ${a.colors.info.border};
      `},
    &:before {
      content: '';
      position: absolute;
      height: calc(100% - 10px);
      width: ${a.spacing(1)};
      border-left: solid 1px ${a.colors.border.weak};
      border-bottom: solid 1px ${a.colors.border.weak};
      margin-top: ${a.spacing(-2)};
      margin-left: -17px;
    }
  }  `});function q({route:a,receiver:v,routesByIdMap:P,instancesCount:D,alertManagerSourceName:A,expandRoute:p,onExpandRouteClick:N}){const W=(0,l.wW)(te),[z,Y]=(0,e.useState)(!1),G=()=>{Y(!0)};return e.createElement("div",{className:W.routeHeader},e.createElement(o.U,{isCollapsed:!p,onToggle:F=>N(!F),"aria-label":"Expand policy route"}),e.createElement(x.K,{flexGrow:1,gap:1},e.createElement("div",{onClick:()=>N(!p),className:W.expandable},e.createElement(x.K,{gap:1,direction:"row",alignItems:"center"},"Notification policy",e.createElement(_,{route:a}))),e.createElement(d.L,null),e.createElement(x.K,{gap:2,direction:"row",alignItems:"center"},e.createElement(m.g,{icon:"layers-alt","data-testid":"matching-instances"},D??"-",e.createElement("span",null,M()("instance",D))),e.createElement(x.K,{gap:1,direction:"row",alignItems:"center"},e.createElement("div",null,e.createElement("span",{className:W.textMuted},"@ Delivered to")," ",v.name),e.createElement("div",{className:W.verticalBar}),e.createElement(c.zx,{type:"button",onClick:G,variant:"secondary",fill:"outline",size:"sm"},"See details")))),z&&e.createElement(j,{onClose:()=>Y(!1),route:a,receiver:v,routesByIdMap:P,alertManagerSourceName:A}))}function ee({route:a,instanceMatches:v,receiver:P,routesByIdMap:D,alertManagerSourceName:A}){const p=(0,l.wW)(te),[N,W]=(0,f.Z)(!1),z=9;return e.createElement("div",{"data-testid":"matching-policy-route"},e.createElement(q,{route:a,receiver:P,routesByIdMap:D,instancesCount:v.length,alertManagerSourceName:A,expandRoute:N,onExpandRouteClick:W}),N&&e.createElement(x.K,{gap:1,direction:"column"},e.createElement("div",{className:p.routeInstances,"data-testid":"route-matching-instance"},v.map(Y=>{const G=Array.from(Y.labelsMatch);let F=G.map(([S,V])=>({label:`${S[0]}=${S[1]}`,match:V.match,colorIndex:V.match?(0,r.tu)(S[0]):z}));const K=F.filter(S=>S.match),Q=F.filter(S=>!S.match);return e.createElement("div",{className:p.tagListCard,key:(0,u.uniqueId)()},G.length>0?e.createElement(e.Fragment,null,K.length>0?e.createElement(t.P,{tags:K.map(S=>S.label),className:p.labelList,getColorIndex:(S,V)=>K[V].colorIndex}):e.createElement("div",{className:(0,i.cx)(p.textMuted,p.textItalic)},"No matching labels"),e.createElement("div",{className:p.labelSeparator}),e.createElement(t.P,{tags:Q.map(S=>S.label),className:p.labelList,getColorIndex:(S,V)=>Q[V].colorIndex})):e.createElement("div",{className:p.textMuted},"No labels"))}))))}const te=a=>({textMuted:(0,i.css)`
    color: ${a.colors.text.secondary};
  `,textItalic:(0,i.css)`
    font-style: italic;
  `,expandable:(0,i.css)`
    cursor: pointer;
  `,routeHeader:(0,i.css)`
    display: flex;
    flex-direction: row;
    gap: ${a.spacing(1)};
    align-items: center;
    border-bottom: 1px solid ${a.colors.border.weak};
    &:hover {
      background-color: ${a.components.table.rowHoverBackground};
    }
    padding: ${a.spacing(.5,.5,.5,0)};
  `,labelList:(0,i.css)`
    flex: 0 1 auto;
    justify-content: flex-start;
  `,labelSeparator:(0,i.css)`
    width: 1px;
    background-color: ${a.colors.border.weak};
  `,tagListCard:(0,i.css)`
    display: flex;
    flex-direction: row;
    gap: ${a.spacing(2)};

    position: relative;
    background: ${a.colors.background.secondary};
    padding: ${a.spacing(1)};

    border-radius: ${a.shape.borderRadius(2)};
    border: solid 1px ${a.colors.border.weak};
  `,routeInstances:(0,i.css)`
    padding: ${a.spacing(1,0,1,4)};
    position: relative;

    display: flex;
    flex-direction: column;
    gap: ${a.spacing(1)};

    &:before {
      content: '';
      position: absolute;
      left: ${a.spacing(2)};
      height: calc(100% - ${a.spacing(2)});
      width: ${a.spacing(4)};
      border-left: solid 1px ${a.colors.border.weak};
    }
  `,verticalBar:(0,i.css)`
    width: 1px;
    height: 20px;
    background-color: ${a.colors.secondary.main};
    margin-left: ${a.spacing(1)};
    margin-right: ${a.spacing(1)};
  `});var J=n(20653),ne=n(72401),ce=n(47853),ae=n(93139),re=n(62393);const oe=(a,v)=>{const{currentData:P,isLoading:D,error:A}=(0,ne.W)(a),p=P?.alertmanager_config,{matchInstancesToRoute:N}=(0,ce.N)(),{rootRoute:W,receivers:z}=(0,e.useMemo)(()=>p?{rootRoute:p.route?(0,re.w2)((0,ae.br)(p.route)):void 0,receivers:p.receivers??[]}:{receivers:[],rootRoute:void 0},[p]),Y=W?R((0,re.tK)(W)):new Map,G=z.reduce((S,V)=>S.set(V.name,V),new Map)??new Map,{value:F=new Map,loading:K,error:Q}=(0,J.Z)(async()=>{if(W)return await N(W,v)},[W,v]);return{routesByIdMap:Y,receiversByName:G,matchingMap:F,loading:D||K,error:A??Q}};function le({alertManagerSource:a,potentialInstances:v,onlyOneAM:P}){const D=(0,l.wW)(se),{routesByIdMap:A,receiversByName:p,matchingMap:N,loading:W,error:z}=oe(a.name,v);return z?e.createElement(h.b,{title:"Cannot load Alertmanager configuration",severity:"error"},z.message):W?e.createElement(C.u,{text:"Loading routing preview..."}):N.size>0?e.createElement("div",{className:D.alertManagerRow},!P&&e.createElement(x.K,{direction:"row",alignItems:"center"},e.createElement("div",{className:D.firstAlertManagerLine}),e.createElement("div",{className:D.alertManagerName}," ","Alert manager:",e.createElement("img",{src:a.img,alt:"",className:D.img}),a.name),e.createElement("div",{className:D.secondAlertManagerLine})),e.createElement(x.K,{gap:1,direction:"column"},Array.from(N.entries()).map(([G,F])=>{const K=A.get(G),Q=K?.receiver&&p.get(K.receiver);if(!K)return null;if(!Q)throw new Error("Receiver not found");return e.createElement(ee,{instanceMatches:F,route:K,receiver:Q,key:G,routesByIdMap:A,alertManagerSourceName:a.name})}))):null}const ie=(0,T.Pf)(le),se=a=>({alertManagerRow:(0,i.css)`
    display: flex;
    flex-direction: column;
    gap: ${a.spacing(1)};
    width: 100%;
  `,firstAlertManagerLine:(0,i.css)`
    height: 1px;
    width: ${a.spacing(4)};
    background-color: ${a.colors.secondary.main};
  `,alertManagerName:(0,i.css)`
    width: fit-content;
  `,secondAlertManagerLine:(0,i.css)`
    height: 1px;
    width: 100%;
    flex: 1;
    background-color: ${a.colors.secondary.main};
  `,img:(0,i.css)`
    margin-left: ${a.spacing(2)};
    width: ${a.spacing(3)};
    height: ${a.spacing(3)};
    margin-right: ${a.spacing(1)};
  `})},18314:(U,O,n)=>{n.d(O,{Mz:()=>M,RA:()=>f,cI:()=>g,hB:()=>x,o2:()=>c,oI:()=>T,xC:()=>r});var i=n(39953),e=n(97125),l=n(57721),h=n(328),C=n(60703),T=(t=>(t.ViewExternalConfiguration="view-external-configuration",t.UpdateExternalConfiguration="update-external-configuration",t.CreateContactPoint="create-contact-point",t.ViewContactPoint="view-contact-point",t.UpdateContactPoint="edit-contact-points",t.DeleteContactPoint="delete-contact-point",t.ExportContactPoint="export-contact-point",t.CreateNotificationTemplate="create-notification-template",t.ViewNotificationTemplate="view-notification-template",t.UpdateNotificationTemplate="edit-notification-template",t.DeleteNotificationTemplate="delete-notification-template",t.DecryptSecrets="decrypt-secrets",t.CreateNotificationPolicy="create-notification-policy",t.ViewNotificationPolicyTree="view-notification-policy-tree",t.UpdateNotificationPolicyTree="update-notification-policy-tree",t.DeleteNotificationPolicy="delete-notification-policy",t.ExportNotificationPolicies="export-notification-policies",t.CreateSilence="create-silence",t.ViewSilence="view-silence",t.UpdateSilence="update-silence",t.ViewMuteTiming="view-mute-timing",t.CreateMuteTiming="create-mute-timing",t.UpdateMuteTiming="update-mute-timing",t.DeleteMuteTiming="delete-mute-timing",t))(T||{}),x=(t=>(t.CreateAlertRule="create-alert-rule",t.ViewAlertRule="view-alert-rule",t.UpdateAlertRule="update-alert-rule",t.DeleteAlertRule="delete-alert-rule",t.CreateExternalAlertRule="create-external-alert-rule",t.ViewExternalAlertRule="view-external-alert-rule",t.UpdateExternalAlertRule="update-external-alert-rule",t.DeleteExternalAlertRule="delete-external-alert-rule",t))(x||{});const u=!0;function g(){return{["create-alert-rule"]:[u,e.contextSrv.hasPermission(l.AccessControlAction.AlertingRuleCreate)],["view-alert-rule"]:[u,e.contextSrv.hasPermission(l.AccessControlAction.AlertingRuleRead)],["update-alert-rule"]:[u,e.contextSrv.hasPermission(l.AccessControlAction.AlertingRuleUpdate)],["delete-alert-rule"]:[u,e.contextSrv.hasPermission(l.AccessControlAction.AlertingRuleDelete)],["create-external-alert-rule"]:[u,e.contextSrv.hasPermission(l.AccessControlAction.AlertingRuleExternalWrite)],["view-external-alert-rule"]:[u,e.contextSrv.hasPermission(l.AccessControlAction.AlertingRuleExternalRead)],["update-external-alert-rule"]:[u,e.contextSrv.hasPermission(l.AccessControlAction.AlertingRuleExternalWrite)],["delete-external-alert-rule"]:[u,e.contextSrv.hasPermission(l.AccessControlAction.AlertingRuleExternalWrite)]}}function M(){const{selectedAlertmanager:t,hasConfigurationAPI:o,isGrafanaAlertmanager:m}=(0,h.ZA)(),d=(0,C.Ko)(t),E=(0,C.QX)(t);return{["view-external-configuration"]:[u,e.contextSrv.hasPermission(l.AccessControlAction.AlertingNotificationsExternalRead)],["update-external-configuration"]:[o,e.contextSrv.hasPermission(l.AccessControlAction.AlertingNotificationsExternalWrite)],["create-contact-point"]:[o,e.contextSrv.hasPermission(d.create)],["view-contact-point"]:[u,e.contextSrv.hasPermission(d.read)],["edit-contact-points"]:[o,e.contextSrv.hasPermission(d.update)],["delete-contact-point"]:[o,e.contextSrv.hasPermission(d.delete)],["export-contact-point"]:[m,e.contextSrv.hasPermission(d.read)],["create-notification-template"]:[o,e.contextSrv.hasPermission(d.create)],["view-notification-template"]:[u,e.contextSrv.hasPermission(d.read)],["edit-notification-template"]:[o,e.contextSrv.hasPermission(d.update)],["delete-notification-template"]:[o,e.contextSrv.hasPermission(d.delete)],["create-notification-policy"]:[o,e.contextSrv.hasPermission(d.create)],["view-notification-policy-tree"]:[u,e.contextSrv.hasPermission(d.read)],["update-notification-policy-tree"]:[o,e.contextSrv.hasPermission(d.update)],["delete-notification-policy"]:[o,e.contextSrv.hasPermission(d.delete)],["export-notification-policies"]:[m,e.contextSrv.hasPermission(d.read)],["decrypt-secrets"]:[m,e.contextSrv.hasPermission(d.provisioning.readSecrets)],["create-silence"]:[o,e.contextSrv.hasPermission(E.create)],["view-silence"]:[u,e.contextSrv.hasPermission(E.read)],["update-silence"]:[o,e.contextSrv.hasPermission(E.update)],["create-mute-timing"]:[o,e.contextSrv.hasPermission(d.create)],["view-mute-timing"]:[u,e.contextSrv.hasPermission(d.read)],["update-mute-timing"]:[o,e.contextSrv.hasPermission(d.update)],["delete-mute-timing"]:[o,e.contextSrv.hasPermission(d.delete)]}}function f(t){const o=M();return(0,i.useMemo)(()=>o[t],[o,t])}function c(t){const o=M();return(0,i.useMemo)(()=>t.map(m=>o[m]),[o,t])}function r(t){const o=g();return(0,i.useMemo)(()=>o[t],[o,t])}},72401:(U,O,n)=>{n.d(O,{W:()=>e});var i=n(37546);function e(l,h){const C=i.alertmanagerApi.endpoints.getAlertmanagerConfiguration.useQuery(l??"",{...h,skip:!l});return{...C,error:C.error}}},47853:(U,O,n)=>{n.d(O,{N:()=>c});var i=n(6222),e=n(39953),l=n(5229),h=n(54538),C=n(79517),T=n(84474);const x=()=>new T.q(new URL(n.p+n.u(7530),n.b));var u=n(45050);let g;function M(){let r;if(g===void 0)try{r=x(),g=i.Ud(r)}catch(o){o instanceof Error&&(0,h.H)(o)}return{disposeWorker:()=>{r&&g&&(g[i.Yy](),r.terminate(),g=void 0,r=void 0)}}}function f(r,t){if(!r)throw new Error("Matching routes preview is disabled");if(!g)throw new Error("Route Matcher has not been initialized")}function c(){const r=(0,l.Qb)(u.v.NotificationPoliciesV2MatchingInstances);(0,e.useEffect)(()=>{if(r){const{disposeWorker:m}=M();return m}return()=>null},[r]);const t=(0,e.useCallback)(async(m,d)=>{f(r,g);const E=performance.now(),y=await g.getRouteGroupsMap(m,d),R=performance.now()-E;return(0,C.PN)(`Route Groups Matched in  ${R} ms`,{matchingTime:R.toString(),alertGroupsCount:d.length.toString(),topLevelRoutesCount:m.routes?.length.toString()??"0"}),y},[r]),o=(0,e.useCallback)(async(m,d)=>{f(r,g);const E=performance.now(),y=await g.matchInstancesToRoute(m,d),R=performance.now()-E;return(0,C.PN)(`Instances Matched in  ${R} ms`,{matchingTime:R.toString(),instancesToMatchCount:d.length.toString(),topLevelRoutesCount:m.routes?.length.toString()??"0"}),y},[r]);return{getRouteGroupsMap:t,matchInstancesToRoute:o}}},93139:(U,O,n)=>{n.d(O,{Oy:()=>H,T0:()=>y,Yg:()=>E,ZS:()=>d,bi:()=>_,br:()=>m,dO:()=>t,eP:()=>Z,eh:()=>R,fx:()=>c,mJ:()=>b});var i=n(86832),e=n.n(i),l=n(47858),h=n(14949),C=n(95712),T=n(75404),x=n(75964),u=n(66793);const g=(s,I)=>Object.entries(s??{}).reduce((B,[w,L])=>[...B,{name:w,value:L,operator:I?l._M.regex:l._M.equal}],[]),M=s=>s.value,f=s=>(s??[]).map(M),c={name:"",value:"",operator:l._M.equal},r=["grafana_folder","alertname"],t=[{label:"grafana_folder",value:"grafana_folder"},{label:"alertname",value:"alertname"},{label:"Disable (...)",value:"..."}],o={id:"",overrideGrouping:!1,groupBy:r,object_matchers:[],routes:[],continue:!1,receiver:"",overrideTimings:!1,groupWaitValue:"",groupIntervalValue:"",repeatIntervalValue:"",muteTimeIntervals:[]};function m(s){return{id:(0,i.uniqueId)("route-"),...s,routes:(s.routes??[]).map(m)}}const d=s=>{if(!s)return o;const I="id"in s?s.id:(0,i.uniqueId)("route-");if(Object.keys(s).length===0)return{...o,id:I};const B=[];s.routes?.forEach($=>{const j=d($);B.push(j)});const w=s.object_matchers?.map($=>({name:$[0],operator:$[1],value:$[2]}))??[],L=s.matchers?.map($=>(0,h.cm)((0,T.tC)($)))??[];return{id:I,object_matchers:[...L,...w,...g(s.match,!1),...g(s.match_re,!0)],continue:s.continue??!1,receiver:s.receiver??"",overrideGrouping:Array.isArray(s.group_by)&&s.group_by.length>0,groupBy:s.group_by??void 0,overrideTimings:[s.group_wait,s.group_interval,s.repeat_interval].some(Boolean),groupWaitValue:s.group_wait??"",groupIntervalValue:s.group_interval??"",repeatIntervalValue:s.repeat_interval??"",routes:B,muteTimeIntervals:s.mute_time_intervals??[]}},E=(s,I,B)=>{const w=(0,x.Tx)(I.id??"",B),{overrideGrouping:L,groupBy:$,overrideTimings:j,groupWaitValue:X,groupIntervalValue:q,repeatIntervalValue:ee,receiver:te}=I,J=void 0,ne=L?$:J,ae=j&&X?X:J,oe=j&&q?q:J,ie=j&&ee?ee:J,se=I.object_matchers?.filter(P=>P.name&&P.value&&P.operator).map(({name:P,operator:D,value:A})=>[P,D,A]),a=I.routes?.map(P=>E(s,P,B)),v={...w??{},continue:I.continue,group_by:ne,object_matchers:se,match:void 0,match_re:void 0,group_wait:ae,group_interval:oe,repeat_interval:ie,routes:a,mute_time_intervals:I.muteTimeIntervals,receiver:te};return s!==C.GC?(v.matchers=I.object_matchers?.map(({name:P,operator:D,value:A})=>`${P}${D}${A}`),v.object_matchers=void 0):(v.object_matchers=(0,T.QO)(v),v.matchers=void 0),I.receiver&&(v.receiver=I.receiver),v},y=s=>({label:s,value:s}),R=s=>(s??[]).map(y),b=s=>{if(s!==null)return s?M(s)??"":""},_=s=>s?f(s):[];function H(s){return s.length===0?!0:(0,u.wd)(s)||"Invalid duration format. Must be {number}{time_unit}"}const k=s=>s.map(I=>{const[B,w,L]=I;return`${B}${w}${L}`}),Z=(s,I)=>{if(s.length===0)return!0;const B=H(s),w=H(I);if(B!==!0)return B;if(w!==!0)return w;const L=(0,u.Bg)(s),$=(0,u.Bg)(I);return $!==0&&L<$?"Repeat interval should be higher or equal to Group interval":!0}},62393:(U,O,n)=>{n.d(O,{$2:()=>f,tK:()=>c,w2:()=>g});var i=n(86832),e=n.n(i),l=n(47858),h=n(75404);const C={[l._M.equal]:(r,t)=>r===t,[l._M.notEqual]:(r,t)=>r!==t,[l._M.regex]:(r,t)=>!!r.match(new RegExp(t)),[l._M.notRegex]:(r,t)=>!r.match(new RegExp(t))};function T(r,t){const[o,m]=t,[d,E,y]=r;if(o!==d)return!1;const R=C[E];if(!R)throw new Error(`no such operator: ${E}`);return R(m,y)}function x(r,t){const o=new Map,m=new Map(t.map(E=>[E,{match:!1,matchers:[]}]));return{matches:r.every(E=>{const y=t.filter(R=>T(E,R));return y.forEach(R=>{const b=m.get(R);b&&(b.match=!0,b.matchers.push(E))}),y.length===0?!1:(o.set(E,y),y.length>0)}),details:o,labelsMatch:m}}function u(r,t){let o=[];const m=x(r.object_matchers??[],t);if(!m.matches)return[];if(r.routes)for(let d=0;d<r.routes.length;d++){let E=r.routes[d],y=u(E,t);if(o=o.concat(y),y.length&&!E.continue)break}return o.length===0&&o.push({route:r,details:m.details,labelsMatch:m.labelsMatch}),o}function g(r){function t(m){m.object_matchers=(0,h.QO)(m),delete m.matchers,delete m.match,delete m.match_re,m.routes?.forEach(t)}const o=structuredClone(r);return t(o),o}function M(r,t,o){const m=[];return o.reduce((d,E)=>{const y=E.alerts.filter(R=>{const b=Object.entries(R.labels);return u(r,b).some(_=>_.route===t)});return y.length&&d.push({...E,alerts:y}),d},m)}function f(r,t,o){const m=(0,i.merge)({},r,o),d=(0,i.pick)(m,["receiver","group_by","group_wait","group_interval","repeat_interval","mute_time_intervals"]);return(0,i.reduce)(d,(y={},R,b)=>{const _=R!==void 0,H=_&&t[b]===void 0,k=_&&t[b]==="",Z=b==="group_by"&&_&&(0,i.isArray)(t[b])&&t[b]?.length===0;return(H||k||Z)&&(y[b]=R),y},{})}function c(r){return{...r,routes:r.routes?.map(t=>{const o=f(r,t);return c({...t,...o})})}}},75964:(U,O,n)=>{n.d(O,{SF:()=>h,Tx:()=>x,_P:()=>T,wB:()=>C});var i=n(86832),e=n.n(i),l=n(93139);const h=(u,g,M)=>{if(!x(g.id??"",M))throw new Error(`No such route with ID '${g.id}'`);function c(r){let t=r;if(r.id===g.id){const o=(0,l.Yg)(u,g,M);t=(0,i.omit)({...r,...o},"id")}return(0,i.omit)({...t,routes:r.routes?.map(c)},"id")}return c(M)},C=(u,g)=>{if(u.id===g.id)throw new Error("You cant remove the root policy");function M(f){return(0,i.omit)({...f,routes:f.routes?.reduce((c=[],r)=>(r.id===u.id||c.push(M(r)),c),[])},"id")}return M(g)},T=(u,g,M,f)=>{const c=(0,l.Yg)(u,g,f);function r(o){return o.id===M.id?{...o,routes:o.routes?.concat(c)}:{...o,routes:o.routes?.map(r)}}function t(o){return(0,i.omit)({...o,routes:o.routes?.map(t)},"id")}return t(r(f))};function x(u,g){return g.id===u?g:g.routes?.find(M=>x(u,M))}}}]);

//# sourceMappingURL=6035.66395cab5d90a2780626.js.map