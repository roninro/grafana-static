"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3713],{9661:(_,O,t)=>{t.d(O,{x:()=>C});var l=t(39953),n=t(57721),e=t(43686);function C(A){const h=(0,n.useDispatch)(),m=(0,l.useRef)(A);m.current=A,(0,l.useEffect)(()=>()=>{h((0,e.e)({cleanupAction:m.current}))},[h])}},61324:(_,O,t)=>{t.d(O,{C0:()=>h,Uv:()=>C,Xq:()=>A});var l=t(39953),n=t(33155),e=t(12608),C=(m=>(m.ContactPoint="contact point",m.Template="template",m.MuteTiming="mute timing",m.AlertRule="alert rule",m.RootNotificationPolicy="root notification policy",m))(C||{});const A=({resource:m})=>l.createElement(n.b,{title:`This ${m} cannot be edited through the UI`,severity:"info"},"This ",m," has been provisioned, that means it was created by config. Please contact your server admin to update this ",m,"."),h=()=>l.createElement(e.C,{text:"Provisioned",color:"purple"})},28894:(_,O,t)=>{t.d(O,{Z:()=>J});var l=t(41407),n=t(35422),e=t(39953),C=t(14058),A=t(948),h=t(27366),m=t(82803),$=t(98632),x=t(38637),M=t(68421),F=t(96227),R=t(4919),z=t(20584);const T=z.C.injectEndpoints({endpoints:a=>({search:a.query({query:({query:r})=>{const g=new URLSearchParams({type:"dash-db",limit:"1000",page:"1",sort:"name_sort"});return r&&g.set("query",r),{url:`/api/search?${g.toString()}`}}}),dashboard:a.query({query:({uid:r})=>({url:`/api/dashboards/uid/${r}`})})})});var f=t(63483),ye=t(9006);const be=({field:a})=>{const r=(0,m.wW)(De);return e.createElement("div",null,e.createElement("span",{className:r.annotationTitle},"Custom annotation name and content"),e.createElement(x.I,{placeholder:"Enter custom annotation name...",width:18,...a,className:r.customAnnotationInput}))},De=a=>({annotationTitle:(0,l.css)`
    color: ${a.colors.text.primary};
    margin-bottom: 3px;
  `,customAnnotationInput:(0,l.css)`
    margin-top: 5px;
    width: 100%;
  `}),xe=be,Ce=({annotationField:a,annotations:r,annotation:g,index:N})=>{const{control:D}=(0,C.Gc)();return e.createElement(h.K,{direction:"column",gap:0},e.createElement("label",null,e.createElement(ye.g,{name:`annotations.${N}.key`,defaultValue:a.key,render:({field:{ref:i,...s}})=>{if(!f.vY[g])return e.createElement(xe,{field:s});let d;switch(a.key){case f.q6.dashboardUID:d="Dashboard and panel";case f.q6.panelID:d="";default:d=f.vY[g]&&f.vY[g]+" (optional)"}return e.createElement("span",{"data-testid":`annotation-key-${N}`},e.createElement($.x,{color:"primary",variant:"bodySmall"},d))},control:D,rules:{required:{value:!!r[N]?.value,message:"Required."}}})),e.createElement($.x,{variant:"bodySmall",color:"secondary"},f._y[g]))};var K=t(12190),Ie=t(76716);const le=({dashboard:a,panel:r,dashboardUid:g,panelId:N,onEditClick:D,onDeleteClick:i})=>{const s=(0,m.wW)(Se),d=(0,Ie.RQ)(a?.uid||g),b=(0,Ie.yM)(a?.uid||g,r?.id?.toString()||N);return e.createElement("div",{className:s.container},a&&e.createElement("a",{href:d,className:s.link,target:"_blank",rel:"noreferrer","data-testid":"dashboard-annotation"},a.title," ",e.createElement(K.J,{name:"external-link-alt"})),!a&&e.createElement("span",{className:s.noLink},"Dashboard ",g," "),r&&e.createElement("a",{href:b,className:s.link,target:"_blank",rel:"noreferrer","data-testid":"panel-annotation"},r.title||"<No title>"," ",e.createElement(K.J,{name:"external-link-alt"})),!r&&e.createElement("span",{className:s.noLink}," - Panel ",N),(a||r)&&e.createElement(e.Fragment,null,e.createElement(K.J,{name:"pen",onClick:D,className:s.icon}),e.createElement(K.J,{name:"trash-alt",onClick:i,className:s.icon})))},Se=a=>({container:(0,l.css)`
    margin-top: 5px;
  `,noLink:(0,l.css)`
    color: ${a.colors.text.secondary};
  `,link:(0,l.css)`
    color: ${a.colors.text.link};
    margin-right: ${a.spacing(1.5)};
  `,icon:(0,l.css)`
    margin-right: ${a.spacing(1)};
    cursor: pointer;
  `}),oe=le;var se=t(86832),re=t(48993),ce=t(19977),ie=t(68084),de=t(69865),Y=t(73075),Pe=t(33155),o=t(41245),c=t(84766);function S(a,r){return a.title&&r.title?a.title.localeCompare(r.title):a.title&&!r.title?1:!a.title&&r.title?-1:0}function P(a){const r=a?.dashboard?.panels?.filter(D=>D.type!=="row")||[],g=a?.dashboard?.panels?.filter(D=>D.collapsed).map(D=>D.panels)||[];return[...r,...g.flat()]}const I=({dashboardUid:a,panelId:r,isOpen:g,onChange:N,onDismiss:D})=>{const i=(0,m.wW)(w),[s,d]=(0,e.useState)(a),[b,me]=(0,e.useState)(r),[ee,Ae]=(0,e.useState)(""),[H,G]=(0,e.useState)(""),[te,ue]=(0,e.useState)(""),{useSearchQuery:$e,useDashboardQuery:ge}=T,{currentData:X=[],isFetching:q}=$e({query:H}),{currentData:Z,isFetching:ae}=ge({uid:s??""},{skip:!s}),Ne=(0,e.useCallback)(v=>{d(v),me(void 0)},[]),pe=P(Z),fe=pe?.filter(v=>v.title?.toLowerCase().includes(te.toLowerCase())).sort(S)??[],u=pe.find(v=>p(v)&&v.id?.toString()===b),E=(0,e.useMemo)(()=>X.map(v=>v.uid).indexOf(s??""),[X,s]),k=a&&a===s,j=E>=0,Q=(0,e.useCallback)(v=>{const U=E>=0;k&&U&&v?.scrollToItem(E,"smart")},[k,E]);(0,re.Z)(()=>{G(ee)},500,[ee]);const Ee=({index:v,style:U})=>{const B=X[v],ve=s===B.uid;return e.createElement("button",{type:"button",title:B.title,style:U,className:(0,l.cx)(i.rowButton,{[i.rowOdd]:v%2===1,[i.rowSelected]:ve}),onClick:()=>Ne(B.uid)},e.createElement("div",{className:(0,l.cx)(i.dashboardTitle,i.rowButtonTitle)},B.title),e.createElement("div",{className:i.dashboardFolder},e.createElement(K.J,{name:"folder"})," ",B.folderTitle??"General"))},ne=({index:v,style:U})=>{const B=fe[v],ve=B.title||"<No title>",Re=B.id&&b===B.id?.toString(),Le=B.type==="graph"||B.type==="timeseries",he=!p(B);return e.createElement("button",{type:"button",style:U,disabled:he,className:(0,l.cx)(i.rowButton,i.panelButton,{[i.rowOdd]:v%2===1,[i.rowSelected]:Re}),onClick:()=>he?se.noop:me(B.id?.toString())},e.createElement("div",{className:i.rowButtonTitle,title:ve},ve),!Le&&!he&&e.createElement(de.u,{content:"Alert tab will be disabled for this panel. It is only supported on graph and timeseries panels"},e.createElement(K.J,{name:"exclamation-triangle",className:i.warnIcon,"data-testid":"warning-icon"})),he&&e.createElement(de.u,{content:"This panel does not have a valid identifier."},e.createElement(K.J,{name:"info-circle","data-testid":"info-icon"})))};return e.createElement(Y.u,{title:"Select dashboard and panel",closeOnEscape:!0,isOpen:g,onDismiss:D,className:i.modal,contentClassName:i.modalContent},!j&&a&&e.createElement(Pe.b,{title:"Current selection",severity:"info",topSpacing:0,bottomSpacing:1,className:i.modalAlert},e.createElement("div",null,"Dashboard: ",Z?.dashboard.title," (",Z?.dashboard.uid,") in folder"," ",Z?.meta.folderTitle??"General"),u&&e.createElement("div",null,"Panel: ",u.title," (",u.id,")")),e.createElement("div",{className:i.container},e.createElement(o.H,{value:ee,onChange:Ae,title:"Search dashboard",placeholder:"Search dashboard",autoFocus:!0}),e.createElement(o.H,{value:te,onChange:ue,title:"Search panel",placeholder:"Search panel"}),e.createElement("div",{className:i.column},q&&e.createElement(c.u,{text:"Loading dashboards...",className:i.loadingPlaceholder}),!q&&e.createElement(ce.Z,null,({height:v,width:U})=>e.createElement(ie.t7,{ref:Q,itemSize:50,height:v,width:U,itemCount:X.length},Ee))),e.createElement("div",{className:i.column},!s&&!ae&&e.createElement("div",{className:i.selectDashboardPlaceholder},e.createElement("div",null,"Select a dashboard to get a list of available panels")),ae&&e.createElement(c.u,{text:"Loading dashboard...",className:i.loadingPlaceholder}),s&&!ae&&e.createElement(ce.Z,null,({width:v,height:U})=>e.createElement(ie.t7,{itemSize:32,height:U,width:v,itemCount:fe.length},ne)))),e.createElement(Y.u.ButtonRow,null,e.createElement(R.zx,{type:"button",variant:"secondary",onClick:D,fill:"text"},"Cancel"),e.createElement(R.zx,{type:"button",variant:"primary",disabled:!(s&&b),onClick:()=>{s&&b&&N(s,b)}},"Confirm")))},p=a=>typeof a.id=="number"&&typeof a.type=="string",w=a=>{const r=(0,R.gN)(a);return{container:(0,l.css)`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: min-content auto;
      gap: ${a.spacing(2)};
      flex: 1;
    `,column:(0,l.css)`
      flex: 1 1 auto;
    `,dashboardTitle:(0,l.css)`
      height: 22px;
      font-weight: ${a.typography.fontWeightBold};
    `,dashboardFolder:(0,l.css)`
      height: 20px;
      font-size: ${a.typography.bodySmall.fontSize};
      color: ${a.colors.text.secondary};
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      column-gap: ${a.spacing(1)};
      align-items: center;
    `,rowButton:(0,l.css)`
      ${r};
      padding: ${a.spacing(.5)};
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
      white-space: nowrap;
      cursor: pointer;
      border: 2px solid transparent;

      &:disabled {
        cursor: not-allowed;
        color: ${a.colors.text.disabled};
      }
    `,rowButtonTitle:(0,l.css)`
      text-overflow: ellipsis;
      overflow: hidden;
    `,rowSelected:(0,l.css)`
      border-color: ${a.colors.primary.border};
    `,rowOdd:(0,l.css)`
      background-color: ${a.colors.background.secondary};
    `,panelButton:(0,l.css)`
      display: flex;
      gap: ${a.spacing(1)};
      justify-content: space-between;
      align-items: center;
    `,loadingPlaceholder:(0,l.css)`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,selectDashboardPlaceholder:(0,l.css)`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-weight: ${a.typography.fontWeightBold};
    `,modal:(0,l.css)`
      height: 100%;
    `,modalContent:(0,l.css)`
      flex: 1;
      display: flex;
      flex-direction: column;
    `,modalAlert:(0,l.css)`
      flex-grow: 0;
    `,warnIcon:(0,l.css)`
      fill: ${a.colors.warning.main};
    `}};var V=t(86992),L=t(95941);const W=()=>{const a=(0,m.wW)(y),[r,g]=(0,A.Z)(!1),{control:N,register:D,watch:i,formState:{errors:s},setValue:d}=(0,C.Gc)(),b=i("annotations"),{fields:me,append:ee,remove:Ae}=(0,C.Dq)({control:N,name:"annotations"}),H=b.find(u=>u.key===f.q6.dashboardUID)?.value,G=b.find(u=>u.key===f.q6.panelID)?.value,[te,ue]=(0,e.useState)(void 0),[$e,ge]=(0,e.useState)(void 0),{useDashboardQuery:X}=T,{currentData:q,isFetching:Z}=X({uid:H??""},{skip:!H});(0,e.useEffect)(()=>{if(Z)return;ue(q?.dashboard);const E=P(q).find(k=>k.id.toString()===G);ge(E)},[G,q,Z]);const ae=(u,E)=>{const k=(0,n.Uy)(b,j=>{const Q=j.find(ne=>ne.key===f.q6.dashboardUID),Ee=j.find(ne=>ne.key===f.q6.panelID);Q?Q.value=u:j.push({key:f.q6.dashboardUID,value:u}),Ee?Ee.value=E:j.push({key:f.q6.panelID,value:E})});d("annotations",k),g(!1)},Ne=()=>{const u=b.filter(E=>E.key!==f.q6.dashboardUID&&E.key!==f.q6.panelID);d("annotations",u),ue(void 0),ge(void 0)},pe=()=>{g(!0)};function fe(){const u="https://grafana.com/docs/grafana/latest/alerting/fundamentals/annotation-label/variables-label-annotation";return e.createElement(h.K,{direction:"row",gap:.5,alignItems:"baseline"},e.createElement($.x,{variant:"bodySmall",color:"secondary"},"Add annotations to provide more context in your alert notifications."),e.createElement(V.h,{contentText:`Annotations add metadata to provide more information on the alert in your alert notifications.
          For example, add a Summary annotation to tell you which value caused the alert to fire or which server it happened on.
          Annotations can contain a combination of text and template code.`,externalLink:u,linkText:"Read about annotations",title:"Annotations"}))}return e.createElement(L.z,{stepNo:4,title:"Add annotations",description:fe(),fullWidth:!0},e.createElement(h.K,{direction:"column",gap:1},me.map((u,E)=>{const k=b[E]?.key?.toLocaleLowerCase().endsWith("url"),j=k?x.I:M.K,Q=u.key;return e.createElement("div",{key:u.id,className:a.flexRow},e.createElement("div",null,e.createElement(Ce,{annotationField:u,annotations:b,annotation:Q,index:E}),H&&G&&u.key===f.q6.dashboardUID&&e.createElement(oe,{dashboard:te,panel:$e,dashboardUid:H.toString(),panelId:G.toString(),onEditClick:pe,onDeleteClick:Ne}),e.createElement("div",{className:a.annotationValueContainer},e.createElement(F.g,{hidden:u.key===f.q6.dashboardUID||u.key===f.q6.panelID,className:(0,l.cx)(a.flexRowItemMargin,a.field),invalid:!!s.annotations?.[E]?.value?.message,error:s.annotations?.[E]?.value?.message},e.createElement(j,{"data-testid":`annotation-value-${E}`,className:(0,l.cx)(a.annotationValueInput,{[a.textarea]:!k}),...D(`annotations.${E}.value`),placeholder:k?"https://":u.key&&`Enter a ${u.key}...`||"Enter custom annotation content...",defaultValue:u.value})),!f.vY[Q]&&e.createElement(R.zx,{type:"button",className:a.deleteAnnotationButton,"aria-label":"delete annotation",icon:"trash-alt",variant:"secondary",onClick:()=>Ae(E)}))))}),e.createElement(h.K,{direction:"row",gap:1},e.createElement("div",{className:a.addAnnotationsButtonContainer},e.createElement(R.zx,{icon:"plus",type:"button",variant:"secondary",onClick:()=>{ee({key:"",value:""})}},"Add custom annotation"),!te&&e.createElement(R.zx,{type:"button",variant:"secondary",icon:"dashboard",onClick:()=>g(!0)},"Link dashboard and panel"))),r&&e.createElement(I,{isOpen:!0,dashboardUid:H,panelId:G,onChange:ae,onDismiss:()=>g(!1)})))},y=a=>({annotationValueInput:(0,l.css)`
    width: 394px;
  `,textarea:(0,l.css)`
    height: 76px;
  `,addAnnotationsButtonContainer:(0,l.css)`
    margin-top: ${a.spacing(1)};
    gap: ${a.spacing(1)};
    display: flex;
  `,field:(0,l.css)`
    margin-bottom: ${a.spacing(.5)};
  `,flexRow:(0,l.css)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,flexRowItemMargin:(0,l.css)`
    margin-top: ${a.spacing(1)};
  `,deleteAnnotationButton:(0,l.css)`
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
  `,annotationTitle:(0,l.css)`
    color: ${a.colors.text.primary};
    margin-bottom: 3px;
  `,annotationContainer:(0,l.css)`
    margin-top: 5px;
  `,annotationDescription:(0,l.css)`
    color: ${a.colors.text.secondary};
  `,annotationValueContainer:(0,l.css)`
    display: flex;
  `}),J=W},34685:(_,O,t)=>{t.d(O,{Z:()=>Pe});var l=t(41407),n=t(39953),e=t(14058),C=t(27366),A=t(4919),h=t(82803),m=t(84766),$=t(96227),x=t(99491),M=t(38637),F=t(36495),R=t(98632),z=t(69865),T=t(12190),f=t(57721),ye=t(26544),be=t(79493),De=t(85385),xe=t(9558);const Be=(0,De.c)({ignoreCase:!1});function Ce(o,c){return Be({label:o.label??"",value:o.value??"",data:{}},c)}const K=(o,c,S)=>{const P=S.some(p=>p.label===o),I=o.trim().length;return!P&&!!I},le=n.forwardRef(function({onChange:c,options:S,defaultValue:P,type:I,onOpenMenu:p=()=>{}},w){return n.createElement("div",{ref:w},n.createElement($.g,{disabled:!1,"data-testid":`alertlabel-${I}-picker`},n.createElement(xe.Ph,{placeholder:`Choose ${I}`,width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:c,onOpenMenu:p,filterOption:Ce,isValidNewOption:K,options:S,maxMenuHeight:500,noOptionsMessage:"No labels found",defaultValue:P,allowCustomValue:!0})))}),Se=o=>{const c=(0,f.useDispatch)();(0,n.useEffect)(()=>{c((0,be.IA)(o))},[c,o]);const P=(0,ye._)(p=>p.rulerRules)[o],I=(0,n.useMemo)(()=>{const p={},w=P?.result;return w&&Object.values(w).flatMap(L=>L).flatMap(L=>L.rules).forEach(L=>{L.labels&&Object.entries(L.labels).forEach(([W,y])=>{if(!y)return;const J=p[W];J?J.add(y):p[W]=new Set([y])})}),p},[P]);return{loading:P?.loading,labelsByKey:I}};function oe(o=[]){return Array.from(o,c=>({label:c,value:c}))}const se=({remove:o,className:c,index:S})=>n.createElement(A.zx,{className:c,"aria-label":"delete label",icon:"trash-alt","data-testid":`delete-label-${S}`,variant:"secondary",onClick:()=>{o(S)}}),re=({append:o,className:c})=>n.createElement(A.zx,{className:c,icon:"plus-circle",type:"button",variant:"secondary",onClick:()=>{o({key:"",value:""})}},"Add label"),ce=({dataSourceName:o})=>{const c=(0,h.wW)(Y),{register:S,control:P,watch:I,formState:{errors:p},setValue:w}=(0,e.Gc)(),V=I("labels"),{fields:L,remove:W,append:y}=(0,e.Dq)({control:P,name:"labels"}),{loading:J,labelsByKey:a}=Se(o),[r,g]=(0,n.useState)(""),N=(0,n.useMemo)(()=>oe(Object.keys(a)),[a]),D=(0,n.useCallback)(s=>oe(a[s]),[a]),i=(0,n.useMemo)(()=>D(r),[r,D]);return n.createElement(n.Fragment,null,J&&n.createElement(m.u,{text:"Loading"}),!J&&n.createElement(C.K,{direction:"column",gap:.5},L.map((s,d)=>n.createElement("div",{key:s.id},n.createElement("div",{className:(0,l.cx)(c.flexRow,c.centerAlignRow)},n.createElement($.g,{className:c.labelInput,invalid:!!p.labels?.[d]?.key?.message,error:p.labels?.[d]?.key?.message,"data-testid":`label-key-${d}`},n.createElement(le,{...S(`labels.${d}.key`,{required:{value:!!V[d]?.value,message:"Required."}}),defaultValue:s.key?{label:s.key,value:s.key}:void 0,options:N,onChange:b=>{w(`labels.${d}.key`,b.value),g(b.value)},type:"key"})),n.createElement(x.W,{className:c.equalSign},"="),n.createElement($.g,{className:c.labelInput,invalid:!!p.labels?.[d]?.value?.message,error:p.labels?.[d]?.value?.message,"data-testid":`label-value-${d}`},n.createElement(le,{...S(`labels.${d}.value`,{required:{value:!!V[d]?.key,message:"Required."}}),defaultValue:s.value?{label:s.value,value:s.value}:void 0,options:i,onChange:b=>{w(`labels.${d}.value`,b.value)},onOpenMenu:()=>{g(V[d].key)},type:"value"})),n.createElement(se,{className:c.deleteLabelButton,index:d,remove:W})))),n.createElement(re,{className:c.addLabelButton,append:y})))},ie=()=>{const o=(0,h.wW)(Y),{register:c,control:S,watch:P,formState:{errors:I}}=(0,e.Gc)(),p=P("labels"),{fields:w,remove:V,append:L}=(0,e.Dq)({control:S,name:"labels"});return n.createElement(n.Fragment,null,w.map((W,y)=>n.createElement("div",{key:W.id},n.createElement("div",{className:(0,l.cx)(o.flexRow,o.centerAlignRow),"data-testid":"alertlabel-input-wrapper"},n.createElement($.g,{className:o.labelInput,invalid:!!I.labels?.[y]?.key?.message,error:I.labels?.[y]?.key?.message},n.createElement(M.I,{...c(`labels.${y}.key`,{required:{value:!!p[y]?.value,message:"Required."}}),placeholder:"key","data-testid":`label-key-${y}`,defaultValue:W.key})),n.createElement(x.W,{className:o.equalSign},"="),n.createElement($.g,{className:o.labelInput,invalid:!!I.labels?.[y]?.value?.message,error:I.labels?.[y]?.value?.message},n.createElement(M.I,{...c(`labels.${y}.value`,{required:{value:!!p[y]?.key,message:"Required."}}),placeholder:"value","data-testid":`label-value-${y}`,defaultValue:W.value})),n.createElement(se,{className:o.deleteLabelButton,index:y,remove:V})))),n.createElement(re,{className:o.addLabelButton,append:L}))},de=({dataSourceName:o})=>{const c=(0,h.wW)(Y);return n.createElement("div",null,n.createElement(F._,{description:"A set of default labels is automatically added. Add additional labels as required."},n.createElement(C.K,{gap:.5,alignItems:"center"},n.createElement(R.x,{variant:"bodySmall",color:"primary"},"Labels"),n.createElement(z.u,{content:n.createElement("div",null,"The dropdown only displays labels that you have previously used for alerts. Select a label from the dropdown or type in a new one.")},n.createElement(T.J,{className:c.icon,name:"info-circle",size:"sm"})))),o?n.createElement(ce,{dataSourceName:o}):n.createElement(ie,null))},Y=o=>({icon:(0,l.css)`
      margin-right: ${o.spacing(.5)};
    `,flexColumn:(0,l.css)`
      display: flex;
      flex-direction: column;
    `,flexRow:(0,l.css)`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      & + button {
        margin-left: ${o.spacing(.5)};
      }
    `,deleteLabelButton:(0,l.css)`
      margin-left: ${o.spacing(.5)};
      align-self: flex-start;
    `,addLabelButton:(0,l.css)`
      flex-grow: 0;
      align-self: flex-start;
    `,centerAlignRow:(0,l.css)`
      align-items: baseline;
    `,equalSign:(0,l.css)`
      align-self: flex-start;
      width: 28px;
      justify-content: center;
      margin-left: ${o.spacing(.5)};
    `,labelInput:(0,l.css)`
      width: 175px;
      margin-bottom: -${o.spacing(1)};

      & + & {
        margin-left: ${o.spacing(1)};
      }
    `}),Pe=de},86992:(_,O,t)=>{t.d(O,{h:()=>$});var l=t(41407),n=t(39953),e=t(27366),C=t(82803),A=t(36884),h=t(12190),m=t(98632);function $({contentText:M,externalLink:F,linkText:R,title:z}){const T=(0,C.wW)(x);return n.createElement(A.P,{content:n.createElement("div",{className:T.mutedText},M),title:n.createElement(e.K,{gap:1,direction:"row"},n.createElement(h.J,{name:"question-circle"}),z),footer:F?n.createElement("a",{href:F,target:"_blank",rel:"noreferrer"},n.createElement(e.K,{direction:"row",gap:.5,alignItems:"center"},n.createElement(m.x,{color:"link"},R," ",n.createElement(h.J,{size:"sm",name:"external-link-alt"})))):void 0,closeButton:!0,placement:"bottom-start"},n.createElement("div",{className:T.helpInfo},n.createElement(e.K,{direction:"row",alignItems:"center",gap:.5},n.createElement(h.J,{name:"question-circle",size:"sm"}),n.createElement(m.x,{variant:"bodySmall",color:"primary"},"Need help?"))))}const x=M=>({mutedText:(0,l.css)`
    color: ${M.colors.text.secondary};
    font-size: ${M.typography.size.sm};
  `,helpInfo:(0,l.css)`
    cursor: pointer;
    text-decoration: underline;
  `})},95941:(_,O,t)=>{t.d(O,{z:()=>m});var l=t(41407),n=t(39953),e=t(27366),C=t(82803),A=t(2827),h=t(98632);const m=({title:x,stepNo:M,children:F,fullWidth:R=!1,description:z})=>{const T=(0,C.wW)($);return n.createElement("div",{className:T.parent},n.createElement(A.C,{className:(0,l.cx)(R&&T.fullWidth),label:n.createElement(h.x,{variant:"h3"},M,". ",x)},n.createElement(e.K,{direction:"column"},z&&n.createElement("div",{className:T.description},z),F)))},$=x=>({parent:(0,l.css)`
    display: flex;
    flex-direction: row;
    max-width: ${x.breakpoints.values.xl}px;
    border: solid 1px ${x.colors.border.weak};
    border-radius: ${x.shape.radius.default};
    padding: ${x.spacing(2)} ${x.spacing(3)};
  `,description:(0,l.css)`
    margin-top: -${x.spacing(2)};
  `,fullWidth:(0,l.css)`
    width: 100%;
  `})}}]);

//# sourceMappingURL=3713.56c7482a7e8afef49670.js.map