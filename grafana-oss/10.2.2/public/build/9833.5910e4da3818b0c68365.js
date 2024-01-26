"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9833],{1152:($,R,e)=>{e.d(R,{ce:()=>v,kC:()=>d,zR:()=>I});var n=e(35422),m=e(86832),t=e.n(m),y=e(37546),h=e(95712),C=e(80910);const I=Symbol("receiver_status"),f=10*1e3;function v(o){const g=o===h.GC,E=y.alertmanagerApi.endpoints.getContactPointsStatus.useQuery(void 0,{refetchOnFocus:!0,refetchOnReconnect:!0,pollingInterval:f,skip:!g}),D=y.alertmanagerApi.endpoints.getAlertmanagerConfiguration.useQuery(o,{refetchOnFocus:!0,refetchOnReconnect:!0,selectFromResult:O=>({...O,contactPoints:O.data?(0,C.yo)(O.data,E.data):[]})}),p=D.error??E.error,u=D.isLoading||E.isLoading,c=D.contactPoints;return{error:p,isLoading:u,contactPoints:c}}function d(o){const[g]=y.alertmanagerApi.endpoints.getAlertmanagerConfiguration.useLazyQuery(),[E,D]=y.alertmanagerApi.endpoints.updateAlertmanagerConfiguration.useMutation();return{deleteTrigger:u=>g(o).then(({data:c})=>{if(!c)return;const O=(0,n.Uy)(c,B=>((0,m.remove)(B?.alertmanager_config?.receivers??[],U=>U.name===u),B));return E({selectedAlertmanager:o,config:O}).unwrap()}),updateAlertmanagerState:D}}},80910:($,R,e)=>{e.d(R,{Qx:()=>d,tS:()=>I,yL:()=>C,yo:()=>v});var n=e(86832),m=e.n(n),t=e(62393),y=e(39103),h=e(1152);function C(o){return!!o.grafana_managed_receiver_configs?.find(E=>E.provenance)?.provenance}function I(o){switch(o.type){case"email":return"addresses"in o.settings?f(o.settings.addresses):void 0;case"slack":{const g=o.settings.recipient;return g?`#${g}`:void 0}case"kafka":return o.settings.kafkaTopic;case"webhook":return o.settings.url;default:return}}function f(o){const E=/,|;|\n+/g,p=o.trim().split(E).map(n.trim).length-3,u=(0,n.split)(o,E,3);return p>0&&u.push(`+${p} more`),u.join(", ")}function v(o,g=[]){const E=o.alertmanager_config.receivers??[],D=(0,t.tK)(o?.alertmanager_config?.route??{}),p=d(D),u=(0,n.countBy)(p);return E.map(c=>{const O=(0,y.y)(c),B=g.find(U=>U.name===c.name);return{...c,numberOfPolicies:u[c.name]??0,grafana_managed_receiver_configs:O.map((U,A)=>({...U,[h.zR]:B?.integrations[A]}))}})}function d(o){const g=o.routes?.flatMap(E=>d(E))??[];return o.receiver?[o.receiver,...g]:g}},49833:($,R,e)=>{e.d(R,{Gb:()=>g,ww:()=>D});var n=e(39953),m=e(27366),t=e(33155),y=e(4919),h=e(18314),C=e(95712),I=e(76716),f=e(81456),v=e(75381),d=e(36298),o=e(4262);const g=({config:p,alertManagerName:u})=>{const c=u===C.GC,O=(0,C.RY)(u);return n.createElement(m.K,{direction:"column",gap:4},n.createElement(d.I,{config:p,alertManagerName:u}),!O&&n.createElement(E,{config:p,alertManagerName:u}),!c&&n.createElement(D,{alertManagerName:u}))},E=({config:p,alertManagerName:u})=>{const[c,O]=(0,h.RA)(h.oI.CreateNotificationTemplate);return n.createElement(v.L,{title:"Notification templates",description:"Create notification templates to customize your notifications.",addButtonLabel:"Add template",addButtonTo:(0,I.eQ)("/alerting/notifications/templates/new",u),showButton:c&&O},n.createElement(o.r,{config:p,alertManagerName:u}))},D=({alertManagerName:p})=>{const u=(0,C.RY)(p);return n.createElement(f.q,{actions:[h.oI.UpdateExternalConfiguration]},n.createElement(t.b,{severity:"info",title:"Global config for contact points"},n.createElement("p",null,"For each external Alertmanager you can define global settings, like server addresses, usernames and password, for all the supported contact points."),n.createElement(y.Qj,{href:(0,I.eQ)("alerting/notifications/global-config",p),variant:"secondary"},u?"View global config":"Edit global config")))}},75381:($,R,e)=>{e.d(R,{L:()=>B});var n=e(41407),m=e(39953),t=e(17716),y=e(948),h=e(27366),C=e(82803),I=e(13767),f=e(85001),v=e(4919),d=e(58047),o=e(12190),g=e(84766),E=e(26516),D=e(91753),p=e(42527),u=e(15898);const c=({decrypt:A,exportFormat:W,onClose:x})=>{const{currentData:S="",isFetching:z}=E.alertRuleApi.useExportReceiversQuery({decrypt:A,format:W}),T=`contact-points-${new Date().getTime()}`;return z?m.createElement(g.u,{text:"Loading...."}):m.createElement(D.u,{format:W,textDefinition:S,downloadFileName:T,onClose:x})},O=({onClose:A,decrypt:W})=>{const[x,S]=(0,m.useState)("yaml");return m.createElement(p.i,{activeTab:x,onTabChange:S,onClose:A,formatProviders:Object.values(u.uN)},m.createElement(c,{decrypt:W,exportFormat:x,onClose:A}))},B=({className:A,title:W,description:x,addButtonLabel:S,addButtonTo:z,children:T,showButton:F=!0,canReadSecrets:N=!1,showExport:Q=!1})=>{const j=(0,C.wW)(U),_=Q,[q,X]=(0,y.Z)(!1),V=m.createElement(I.v,null,Q&&m.createElement(f.s,{onClick:X,label:"Export all"}));return m.createElement(h.K,{direction:"column",gap:2},m.createElement("div",{className:(0,n.cx)(j.heading,A)},m.createElement("div",null,m.createElement("h4",null,W),m.createElement("div",{className:j.description},x)),m.createElement(h.K,{direction:"row",gap:.5},F&&m.createElement(t.Link,{to:z},m.createElement(v.zx,{type:"button",icon:"plus"},S)),_&&m.createElement(d.L,{overlay:V},m.createElement(v.zx,{variant:"secondary"},"More",m.createElement(o.J,{name:"angle-down"}))))),T,q&&m.createElement(O,{decrypt:N,onClose:X}))},U=A=>({heading:(0,n.css)`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `,description:(0,n.css)`
    color: ${A.colors.text.secondary};
  `})},36298:($,R,e)=>{e.d(R,{I:()=>We,c:()=>re});var n=e(71757),m=e.n(n),t=e(39953),y=e(948),h=e(92403),C=e(48069),I=e(27366),f=e(12608),v=e(12190),d=e(73075),o=e(4919),g=e(32840),E=e(82803),D=e(57721),p=e(69533),u=e(81456),c=e(18314),O=e(26544),B=e(79493),U=e(98502),A=e(14949),W=e(95712),x=e(76716),S=e(39103),z=e(47224),T=e(61324),F=e(84766),N=e(26516),Q=e(91753),j=e(42527),_=e(15898);const q=({receiverName:a,decrypt:r,exportFormat:i,onClose:s})=>{const{currentData:l="",isFetching:L}=N.alertRuleApi.useExportReceiverQuery({receiverName:a,decrypt:r,format:i}),P=`cp-${a}-${new Date().getTime()}`;return L?t.createElement(F.u,{text:"Loading...."}):t.createElement(Q.u,{format:i,textDefinition:l,downloadFileName:P,onClose:s})},X=({onClose:a,receiverName:r,decrypt:i})=>{const[s,l]=(0,t.useState)("yaml");return t.createElement(j.i,{activeTab:s,onTabChange:l,onClose:a,formatProviders:Object.values(_.uN)},t.createElement(q,{receiverName:r,decrypt:i,exportFormat:s,onClose:a}))};var V=e(57912),ie=e(75381),ne=e(41407),ce=e(12223),de=e(69865);const me=({metadata:{icon:a,title:r,externalUrl:i,warning:s}})=>{const l=(0,E.wW)(Ee);return t.createElement(I.K,{alignItems:"center",gap:1},t.createElement("div",{className:l.wrapper},t.createElement(ce.Lh,{align:"center",spacing:"xs"},t.createElement("img",{src:a,alt:"",height:"12px"}),t.createElement("span",null,r))),i&&t.createElement(o.Qj,{icon:"external-link-alt",href:i,variant:"secondary",size:"sm"}),s&&t.createElement(de.u,{content:s,theme:"error"},t.createElement(v.J,{name:"exclamation-triangle",size:"lg",className:l.warnIcon})))},Ee=a=>({wrapper:(0,ne.css)`
    text-align: left;
    height: 22px;
    display: inline-flex;
    padding: 1px 4px;
    border-radius: ${a.shape.borderRadius()};
    border: 1px solid rgba(245, 95, 62, 1);
    color: rgba(245, 95, 62, 1);
    font-weight: ${a.typography.fontWeightRegular};
  `,warnIcon:(0,ne.css)`
    fill: ${a.colors.warning.main};
  `});var ue=e(80039),ge=e(17241),ee=e(11272),fe=e(34383),ve=e(76197),pe=e(52348);const ae={title:"Grafana OnCall",icon:pe.g[ee.W.OnCall]},Ce=a=>{const{installed:r}=(0,ge.n)(ee.W.OnCall),{data:i=[]}=ue.onCallApi.useGrafanaOnCallIntegrationsQuery(void 0,{skip:!r});return(0,t.useMemo)(()=>{const s=new Map;return a.forEach(l=>{const L=l.grafana_managed_receiver_configs?.find(P=>P.type===ve.hM.OnCall);if(L){if(!r){s.set(l,{...ae,warning:"Grafana OnCall is not enabled"});return}const P=i.find(G=>G.integration_url===L.settings.url);s.set(l,{...ae,externalUrl:P?(0,fe.d)(ee.W.OnCall,`/integrations/${P.value}`):void 0,warning:P?void 0:"OnCall Integration no longer exists"})}}),s},[r,a,i])};var he=e(86832),De=e(80910);function Ae(a){if(!a.receivers)return{contactPoints:{}};if(!a.route)return{contactPoints:Object.fromEntries(a.receivers.map(P=>[P.name,{matchingRoutes:0}]))};const r=a.receivers?.map(P=>P.name)??[],i=(0,De.Qx)(a.route),s=(0,he.countBy)(i),l={},L={contactPoints:l};return r.forEach(P=>{l[P]={matchingRoutes:s[P]??0}}),L}function Pe({alertManagerName:a,receiverName:r,onClickDeleteReceiver:i}){return t.createElement(t.Fragment,null,t.createElement(u.q,{actions:[c.oI.UpdateContactPoint]},t.createElement(V.A,{"aria-label":"Edit","data-testid":"edit",to:(0,x.eQ)(`/alerting/notifications/receivers/${encodeURIComponent(r)}/edit`,a),tooltip:"Edit contact point",icon:"pen"})),t.createElement(u.q,{actions:[c.oI.DeleteContactPoint]},t.createElement(V.A,{onClick:()=>i(r),tooltip:"Delete contact point",icon:"trash-alt"})))}function Re({alertManagerName:a,receiverName:r}){return t.createElement(u.q,{actions:[c.oI.UpdateContactPoint]},t.createElement(V.A,{"data-testid":"view",to:(0,x.eQ)(`/alerting/notifications/receivers/${encodeURIComponent(r)}/edit`,a),tooltip:"View contact point",icon:"file-alt"}))}function Oe({receiverName:a,canReadSecrets:r=!1}){const[i,s]=(0,y.Z)(!1);return t.createElement(u.q,{actions:[c.oI.ExportContactPoint]},t.createElement(V.A,{"data-testid":"export",tooltip:r?"Export contact point with decrypted secrets":"Export contact point with redacted secrets",icon:"download-alt",onClick:s}),i&&t.createElement(X,{receiverName:a,decrypt:r,onClose:s}))}function oe({errorCount:a,errorDetail:r,showErrorCount:i,tooltip:s}){const l=i?`${a} ${m()("error",a)}`:"Error",L=s??r??"Error";return t.createElement(f.C,{color:"red",icon:"exclamation-circle",text:l,tooltip:L})}function Te({errorsByNotifier:a,errorDetail:r,lastNotify:i}){const s=a>0,l=J(i);return s?t.createElement(oe,{errorCount:a,errorDetail:r,showErrorCount:!1}):l?t.createElement(t.Fragment,null,"No attempts"):t.createElement(f.C,{color:"green",text:"OK"})}function ye({errorsByReceiver:a,someWithNoAttempt:r}){return a>0?t.createElement(oe,{errorCount:a,showErrorCount:!0,tooltip:"Expand the contact point to see error details."}):r?t.createElement(t.Fragment,null,"No attempts"):t.createElement(f.C,{color:"green",text:"OK"})}const Me=a=>{const r=(0,p.V)(a),i=r?.receivers??{},s=Object.keys(i).length>0;return{contactPointsState:r,errorStateAvailable:s}},J=a=>a==="0001-01-01T00:00:00.000Z";function Ie({lastNotifyDate:a}){return J(a)?t.createElement(t.Fragment,null,"-"):t.createElement(I.K,{alignItems:"center"},t.createElement("div",null,`${(0,h.CQ)(a).locale("en").fromNow(!0)} ago`),t.createElement(v.J,{name:"clock-nine"}),t.createElement("div",null,`${(0,C.dq)(a,{format:"YYYY-MM-DD HH:mm:ss"})}`))}const xe=["","0","0ms","0s","0m","0h","0d","0w","0y"],Le=a=>xe.includes(a);function Be({notifiersState:a}){function r(){return[{id:"health",label:"Health",renderCell:({data:{lastError:s,lastNotify:l}})=>t.createElement(Te,{errorsByNotifier:s?1:0,errorDetail:s??void 0,lastNotify:l}),size:.5},{id:"name",label:"Name",renderCell:({data:{type:s},id:l})=>t.createElement(t.Fragment,null,`${s}[${l}]`),size:1},{id:"lastNotify",label:"Last delivery attempt",renderCell:({data:{lastNotify:s}})=>t.createElement(Ie,{lastNotifyDate:s}),size:3},{id:"lastNotifyDuration",label:"Last duration",renderCell:({data:{lastNotify:s,lastNotifyDuration:l}})=>t.createElement(t.Fragment,null,J(s)&&Le(l)?"-":l),size:1},{id:"sendResolved",label:"Send resolved",renderCell:({data:{sendResolved:s}})=>t.createElement(t.Fragment,null,String(!!s)),size:1}]}const i=Object.entries(a).flatMap(s=>s[1].map((l,L)=>({id:L,data:{type:s[0],lastError:l.lastNotifyAttemptError,lastNotify:l.lastNotifyAttempt,lastNotifyDuration:l.lastNotifyAttemptDuration,sendResolved:l.sendResolved}})));return t.createElement(z.t,{items:i,cols:r(),pagination:{itemsPerPage:25}})}const We=({config:a,alertManagerName:r})=>{const i=(0,D.useDispatch)(),s=(0,W.RY)(r),l=(0,O._)(H=>H.grafanaNotifiers),L=Ae(a.alertmanager_config),{contactPointsState:P,errorStateAvailable:G}=Me(r),Z=Ce(a.alertmanager_config.receivers??[]),[Y,b]=(0,t.useState)(),[te,M]=(0,t.useState)(!1),[K,Ke]=(0,c.RA)(c.oI.ExportContactPoint),$e=K&&Ke,ze=H=>{(0,A.nv)(H,a)?M(!0):b(H)},Fe=()=>{Y&&i((0,B.X4)(Y,r)),b(void 0)},Ge=(0,t.useMemo)(()=>(a.alertmanager_config.receivers??[]).map(w=>({id:w.name,data:{name:w.name,types:Object.entries((0,S.w)(w,l.result??[])).map(([k,le])=>le>1?`${k} (${le})`:k),provisioned:w.grafana_managed_receiver_configs?.some(k=>k.provenance),metadata:Z.get(w)}}))??[],[l.result,a.alertmanager_config,Z]),[Qe,je]=(0,c.RA)(c.oI.CreateContactPoint),[be,se]=(0,c.RA)(c.oI.DecryptSecrets),He=Ne(r,G,P,L,ze,s,se);return t.createElement(ie.L,{canReadSecrets:se,title:"Contact points",description:"Define where notifications are sent, for example, email or Slack.",showButton:Qe&&je,addButtonLabel:"Add contact point",addButtonTo:(0,x.eQ)("/alerting/notifications/receivers/new",r),showExport:$e},t.createElement(z.t,{pagination:{itemsPerPage:25},items:Ge,cols:He,isExpandable:G,renderExpandedContent:G?({data:{name:H}})=>t.createElement(Be,{notifiersState:P?.receivers[H]?.notifiers??{}}):void 0}),!!te&&t.createElement(d.u,{isOpen:!0,title:"Cannot delete contact point",onDismiss:()=>M(!1)},t.createElement("p",null,"Contact point cannot be deleted because it is used in more policies. Please update or delete these policies first."),t.createElement(d.u.ButtonRow,null,t.createElement(o.zx,{variant:"secondary",onClick:()=>M(!1),fill:"outline"},"Close"))),!!Y&&t.createElement(g.s,{isOpen:!0,title:"Delete contact point",body:`Are you sure you want to delete contact point "${Y}"?`,confirmText:"Yes, delete",onConfirm:Fe,onDismiss:()=>b(void 0)}))},Ue=(a,r)=>a?.receivers[r]?.errorCount??0,Se=(a,r)=>{const i=Object.values(a?.receivers[r]?.notifiers??{});return i.length===0?!1:i.flat().some(l=>J(l.lastNotifyAttempt))};function Ne(a,r,i,s,l,L,P){const G=(0,E.wW)(U.D),Z=r||Object.values(s.contactPoints).some(M=>M.matchingRoutes===0),Y=a===W.GC,b=[{id:"name",label:"Contact point name",renderCell:({data:{name:M,provisioned:K}})=>t.createElement(t.Fragment,null,t.createElement("div",null,M),K&&t.createElement(T.C0,null)),size:3,className:G.nameCell},{id:"type",label:"Type",renderCell:({data:{types:M,metadata:K}})=>t.createElement(t.Fragment,null,K?t.createElement(me,{metadata:K}):M.join(", ")),size:2}],te={id:"health",label:"Health",renderCell:({data:{name:M}})=>s.contactPoints[M]?.matchingRoutes===0?t.createElement(re,null):i&&Object.entries(i.receivers).length>0&&t.createElement(ye,{errorsByReceiver:Ue(i,M),someWithNoAttempt:Se(i,M)}),size:"160px"};return[...b,...Z?[te]:[],{id:"actions",label:"Actions",renderCell:({data:{provisioned:M,name:K}})=>t.createElement(u.q,{actions:[c.oI.UpdateContactPoint,c.oI.DeleteContactPoint,c.oI.ExportContactPoint]},t.createElement("div",{className:G.actionsCell},!L&&!M&&t.createElement(Pe,{alertManagerName:a,receiverName:K,onClickDeleteReceiver:l}),(L||M)&&t.createElement(Re,{alertManagerName:a,receiverName:K}),Y&&t.createElement(Oe,{alertManagerName:a,receiverName:K,canReadSecrets:P}))),size:"100px"}]}function re(){return t.createElement(f.C,{text:"Unused",color:"orange",icon:"exclamation-triangle",tooltip:"This contact point is not used in any notification policy and it will not receive any alerts"})}},4262:($,R,e)=>{e.d(R,{r:()=>p});var n=e(39953),m=e(82803),t=e(32840),y=e(57721),h=e(81456),C=e(18314),I=e(79493),f=e(98502),v=e(76716),d=e(98934),o=e(40700),g=e(61324),E=e(57912),D=e(51224);const p=({config:u,alertManagerName:c})=>{const O=(0,y.useDispatch)(),[B,U]=(0,n.useState)({}),A=(0,m.wW)(f.D),W=(0,n.useMemo)(()=>Object.entries(u.template_files).map(([F,N])=>({name:F,template:N,provenance:(u.template_file_provenances??{})[F]})),[u]),[x,S]=(0,n.useState)(),z=()=>{x&&O((0,I.S6)(x,c)),S(void 0)};return n.createElement(n.Fragment,null,n.createElement("table",{className:A.table,"data-testid":"templates-table"},n.createElement("colgroup",null,n.createElement("col",{className:A.colExpand}),n.createElement("col",null),n.createElement("col",null)),n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null),n.createElement("th",null,"Template"),n.createElement(h.q,{actions:[C.oI.CreateNotificationTemplate,C.oI.UpdateNotificationTemplate,C.oI.DeleteNotificationTemplate]},n.createElement("th",null,"Actions")))),n.createElement("tbody",null,!W.length&&n.createElement("tr",{className:A.evenRow},n.createElement("td",{colSpan:3},"No templates defined.")),W.map(({name:T,template:F,provenance:N},Q)=>{const j=!!B[T];return n.createElement(n.Fragment,{key:T},n.createElement("tr",{key:T,className:Q%2===0?A.evenRow:void 0},n.createElement("td",null,n.createElement(d.U,{isCollapsed:!B[T],onToggle:()=>U({...B,[T]:!j})})),n.createElement("td",null,T," ",N&&n.createElement(g.C0,null)),n.createElement("td",{className:A.actionsCell},N&&n.createElement(E.A,{to:(0,v.eQ)(`/alerting/notifications/templates/${encodeURIComponent(T)}/edit`,c),tooltip:"view template",icon:"file-alt"}),!N&&n.createElement(h.q,{actions:[C.oI.UpdateNotificationTemplate]},n.createElement(E.A,{to:(0,v.eQ)(`/alerting/notifications/templates/${encodeURIComponent(T)}/edit`,c),tooltip:"edit template",icon:"pen"})),n.createElement(h.q,{actions:[C.oI.CreateContactPoint]},n.createElement(E.A,{to:(0,v.eQ)(`/alerting/notifications/templates/${encodeURIComponent(T)}/duplicate`,c),tooltip:"Copy template",icon:"copy"})),!N&&n.createElement(h.q,{actions:[C.oI.DeleteNotificationTemplate]},n.createElement(E.A,{onClick:()=>S(T),tooltip:"delete template",icon:"trash-alt"})))),j&&n.createElement("tr",{className:Q%2===0?A.evenRow:void 0},n.createElement("td",null),n.createElement("td",{colSpan:2},n.createElement(o.C,{label:"Description",horizontal:!0},n.createElement(D.u,{width:"auto",height:"auto",autoHeight:!0,value:F,showLineNumbers:!1,monacoOptions:{readOnly:!0,scrollBeyondLastLine:!1}})))))}))),!!x&&n.createElement(t.s,{isOpen:!0,title:"Delete template",body:`Are you sure you want to delete template "${x}"?`,confirmText:"Yes, delete",onConfirm:z,onDismiss:()=>S(void 0)}))}},98502:($,R,e)=>{e.d(R,{D:()=>m});var n=e(41407);const m=t=>({table:(0,n.css)`
    width: 100%;
    border-radius: ${t.shape.radius.default};
    border: solid 1px ${t.colors.border.weak};
    background-color: ${t.colors.background.secondary};

    th {
      padding: ${t.spacing(1)};
    }

    td {
      padding: 0 ${t.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:(0,n.css)`
    background-color: ${t.colors.background.primary};
  `,colExpand:(0,n.css)`
    width: 36px;
  `,nameCell:(0,n.css)`
    gap: ${t.spacing(1)};
  `,actionsCell:(0,n.css)`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${t.spacing(.5)};
    }
  `})},39103:($,R,e)=>{e.d(R,{w:()=>y,y:()=>C});var n=e(86832),m=e.n(n),t=e(1104);function y(f,v){return"grafana_managed_receiver_configs"in f?I(f.grafana_managed_receiver_configs??[],v):h(f)}function h(f){return Object.entries(f).filter(([v])=>v!=="grafana_managed_receiver_configs"&&v.endsWith("_configs")).filter(([v,d])=>Array.isArray(d)&&!!d.length).reduce((v,[d,o])=>{const g=d.replace("_configs",""),E=t.A[g]??(0,n.capitalize)(g);return{...v,[E]:(v[E]??0)+(Array.isArray(o)?o.length:1)}},{})}function C(f){return"grafana_managed_receiver_configs"in f?f.grafana_managed_receiver_configs??[]:Object.entries(f).filter(([d])=>d!=="grafana_managed_receiver_configs"&&d.endsWith("_configs")).filter(([d,o])=>Array.isArray(o)&&!(0,n.isEmpty)(o)).reduce((d,[o,g])=>{const E=o.replace("_configs",""),D=(0,n.times)(g.length,()=>({name:f.name,type:E,settings:[],disableResolveMessage:!1}));return d.concat(D)},[])}function I(f,v){return f.map(d=>d.type).map(d=>v.find(o=>o.type===d)?.name??(0,n.capitalize)(d)).reduce((d,o)=>({...d,[o]:(d[o]??0)+1}),{})}},1104:($,R,e)=>{e.d(R,{A:()=>n});const n={pagerduty:"PagerDuty",pushover:"Pushover",slack:"Slack",opsgenie:"OpsGenie",webhook:"Webhook",victorops:"VictorOps",wechat:"WeChat",discord:"Discord",webex:"Cisco Webex Teams",sns:"Amazon SNS",telegram:"Telegram",msteams:"Microsoft Teams"}}}]);

//# sourceMappingURL=9833.5910e4da3818b0c68365.js.map