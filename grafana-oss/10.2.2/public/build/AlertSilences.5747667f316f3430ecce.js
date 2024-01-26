"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1783],{9661:(U,I,a)=>{a.d(I,{x:()=>M});var e=a(39953),l=a(57721),d=a(43686);function M(C){const T=(0,l.useDispatch)(),b=(0,e.useRef)(C);b.current=C,(0,e.useEffect)(()=>()=>{T((0,d.e)({cleanupAction:b.current}))},[T])}},40648:(U,I,a)=>{a.r(I),a.d(I,{default:()=>St});var e=a(39953),l=a(53721),d=a(33155),M=a(41393),C=a(57721),T=a(14055),b=a(762),P=a(86860),i=a(41407),O=a(86832),x=a(14058),R=a(48993),h=a(5195),s=a(54554),E=a(92403),N=a(32688),p=a(82803),z=a(2827),$=a(96227),F=a(38637),pe=a(68421),K=a(4919),he=a(9661),L=a(47858),Ae=a(88617),X=a(26544),G=a(79493),W=a(14949),xe=a(75404),w=a(76716),k=a(57675),ye=a(9006),Se=a(9558),Ce=a(68497);const Pe=({className:t})=>{const n=(0,p.wW)(De),r=(0,x.Gc)(),{control:m,register:o,formState:{errors:v}}=r,{fields:c=[],append:A,remove:u}=(0,x.Dq)({name:"matchers"});return e.createElement("div",{className:(0,i.cx)(t,n.wrapper)},e.createElement($.g,{label:"Matching labels",required:!0},e.createElement("div",null,e.createElement("div",{className:n.matchers},c.map((y,g)=>e.createElement("div",{className:n.row,key:`${y.id}`,"data-testid":"matcher"},e.createElement($.g,{label:"Label",invalid:!!v?.matchers?.[g]?.name,error:v?.matchers?.[g]?.name?.message},e.createElement(F.I,{...o(`matchers.${g}.name`,{required:{value:!0,message:"Required."}}),defaultValue:y.name,placeholder:"label"})),e.createElement($.g,{label:"Operator"},e.createElement(ye.g,{control:m,render:({field:{onChange:S,ref:f,...D}})=>e.createElement(Se.Ph,{...D,onChange:Q=>S(Q.value),className:n.matcherOptions,options:W.tA,"aria-label":"operator"}),defaultValue:y.operator||W.tA[0].value,name:`matchers.${g}.operator`,rules:{required:{value:!0,message:"Required."}}})),e.createElement($.g,{label:"Value",invalid:!!v?.matchers?.[g]?.value,error:v?.matchers?.[g]?.value?.message},e.createElement(F.I,{...o(`matchers.${g}.value`,{required:{value:!0,message:"Required."}}),defaultValue:y.value,placeholder:"value"})),c.length>1&&e.createElement(Ce.h,{className:n.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>u(g)},"Remove")))),e.createElement(K.zx,{type:"button",icon:"plus",variant:"secondary",onClick:()=>{const y={name:"",value:"",operator:L._M.equal};A(y)}},"Add matcher"))))},De=t=>({wrapper:(0,i.css)`
      margin-top: ${t.spacing(2)};
    `,row:(0,i.css)`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${t.colors.background.secondary};
      padding: ${t.spacing(1)} ${t.spacing(1)} 0 ${t.spacing(1)};
      & > * + * {
        margin-left: ${t.spacing(2)};
      }
    `,removeButton:(0,i.css)`
      margin-left: ${t.spacing(1)};
      margin-top: ${t.spacing(2.5)};
    `,matcherOptions:(0,i.css)`
      min-width: 140px;
    `,matchers:(0,i.css)`
      max-width: ${t.breakpoints.values.sm}px;
      margin: ${t.spacing(1)} 0;
      padding-top: ${t.spacing(.5)};
    `}),Me=Pe;var Te=a(88252);const Ie=()=>{const{control:t,getValues:n}=(0,x.Gc)(),{field:{onChange:r,value:m},fieldState:{invalid:o}}=(0,x.bc)({name:"startsAt",control:t,rules:{validate:D=>n().endsAt>D}}),{field:{onChange:v,value:c},fieldState:{invalid:A}}=(0,x.bc)({name:"endsAt",control:t,rules:{validate:D=>n().startsAt<D}}),{field:{onChange:u,value:y}}=(0,x.bc)({name:"timeZone",control:t}),g=o||A,S=(0,E.CQ)(m),f=(0,E.CQ)(c);return e.createElement($.g,{className:Re.timeRange,label:"Silence start and end",error:g?"To is before or the same as from":"",invalid:g},e.createElement(Te.K,{value:{from:S,to:f,raw:{from:S,to:f}},timeZone:y,onChange:D=>{r((0,E.CQ)(D.from)),v((0,E.CQ)(D.to))},onChangeTimeZone:D=>u(D),hideTimeZone:!1,hideQuickRanges:!0,placeholder:"Select time range"}))},Re={timeRange:(0,i.css)`
    width: 400px;
  `};var Oe=a(12608),be=a(84766),Be=a(37546),Ne=a(66793),ae=a(4353),ne=a(47224),se=a(84070);const $e=({amSourceName:t,matchers:n})=>{const{useGetAlertmanagerAlertsQuery:r}=Be.alertmanagerApi,m=(0,p.wW)(re),o=We(),v=n.some(g=>g.value&&g.name),{currentData:c=[],isFetching:A,isError:u}=r({amSourceName:t,filter:{matchers:n}},{skip:!v,refetchOnMountOrArgChange:!0}),y=c.map(g=>({id:g.fingerprint,data:g}));return e.createElement("div",null,e.createElement("h4",{className:m.title},"Affected alert instances",y.length>0?e.createElement(Oe.C,{className:m.badge,color:"blue",text:y.length}):null),!v&&e.createElement("span",null,"Add a valid matcher to see affected alerts"),u&&e.createElement(d.b,{title:"Preview not available",severity:"error"},"Error occured when generating affected alerts preview. Are you matchers valid?"),A&&e.createElement(be.u,{text:"Loading..."}),!A&&!u&&v&&e.createElement("div",{className:m.table},y.length>0?e.createElement(ne.t,{items:y,isExpandable:!1,cols:o,pagination:{itemsPerPage:10}}):e.createElement("span",null,"No matching alert instances found")))};function We(){const t=(0,p.wW)(re);return[{id:"state",label:"State",renderCell:function({data:r}){return e.createElement(se.G,{state:r.status.state})},size:"120px",className:t.stateColumn},{id:"labels",label:"Labels",renderCell:function({data:r}){return e.createElement(ae.s,{labels:r.labels,size:"sm"})},size:"auto"},{id:"created",label:"Created",renderCell:function({data:r}){return e.createElement(e.Fragment,null,(0,Ne.gV)(r.startsAt)?"-":(0,E.CQ)(r.startsAt).format("YYYY-MM-DD HH:mm:ss"))},size:"180px"}]}const re=t=>({table:(0,i.css)`
    max-width: ${t.breakpoints.values.lg}px;
  `,moreMatches:(0,i.css)`
    margin-top: ${t.spacing(1)};
  `,title:(0,i.css)`
    display: flex;
    align-items: center;
  `,badge:(0,i.css)`
    margin-left: ${t.spacing(1)};
  `,stateColumn:(0,i.css)`
    display: flex;
    align-items: center;
  `}),Ue=t=>{const n={},r=t.get("comment"),m=t.getAll("matcher"),o=(0,xe.RT)(m);return o.length&&(n.matchers=o.map(W.cm)),r&&(n.comment=r),n},Le=(t,n)=>{const r=new Date;if(n){const o=Date.parse(n.endsAt)<Date.now()?{start:r,end:(0,h.Ks)(r,{hours:2})}:{start:new Date(n.startsAt),end:new Date(n.endsAt)};return{id:n.id,startsAt:o.start.toISOString(),endsAt:o.end.toISOString(),comment:n.comment,createdBy:n.createdBy,duration:(0,h.vT)(o),isRegex:!1,matchers:n.matchers?.map(W.cm)||[],matcherName:"",matcherValue:"",timeZone:s.Ys}}else{const m=(0,h.Ks)(r,{hours:2});return{id:"",startsAt:r.toISOString(),endsAt:m.toISOString(),comment:`created ${(0,E.CQ)().format("YYYY-MM-DD HH:mm")}`,createdBy:N.config.bootData.user.name,duration:"2h",isRegex:!1,matchers:[{name:"",value:"",operator:L._M.equal}],matcherName:"",matcherValue:"",timeZone:s.Ys,...Ue(t)}}},we=({silence:t,alertManagerSourceName:n})=>{const[r]=(0,Ae.j)(),m=(0,e.useMemo)(()=>Le(r,t),[t,r]),o=(0,x.cI)({defaultValues:m}),v=(0,C.useDispatch)(),c=(0,p.wW)(Ke),[A,u]=(0,e.useState)(m.matchers.map(W._J)),{loading:y}=(0,X._)(B=>B.updateSilence);(0,he.x)(B=>B.unifiedAlerting.updateSilence=k.oq);const{register:g,handleSubmit:S,formState:f,watch:D,setValue:Q,clearErrors:Ct}=o,Pt=B=>{const{id:Z,startsAt:J,endsAt:Mt,comment:Tt,createdBy:It,matchers:Rt}=B,Ot=Rt.map(W._J),fe=(0,O.pickBy)({id:Z,startsAt:J,endsAt:Mt,comment:Tt,createdBy:It,matchers:Ot},bt=>!!bt);v((0,G.QY)({alertManagerSourceName:n,payload:fe,exitOnSave:!0,successMessage:`Silence ${fe.id?"updated":"created"}`}))},V=D("duration"),Y=D("startsAt"),H=D("endsAt"),ge=D("matchers"),[Ee,ve]=(0,e.useState)(V);(0,R.Z)(()=>{if((0,h.qb)(Y)&&(0,h.qb)(H))if(V!==Ee)Q("endsAt",(0,E.CQ)((0,h.Ks)(new Date(Y),(0,h.RA)(V))).toISOString()),ve(V);else{const B=new Date(Y).valueOf();if(new Date(H).valueOf()>B){const J=(0,h.vT)({start:new Date(Y),end:new Date(H)});Q("duration",J),ve(J)}}},700,[Ct,V,H,Ee,Q,Y]),(0,R.Z)(()=>{const B=ge.filter(Z=>Z.name&&Z.value).map(W._J);(0,O.isEqual)(A,B)||u(B)},700,[ge]);const Dt=!!(N.config.bootData.user.isSignedIn&&N.config.bootData.user.name);return e.createElement(x.RV,{...o},e.createElement("form",{onSubmit:S(Pt)},e.createElement(z.C,{label:`${t?"Recreate silence":"Create silence"}`},e.createElement("div",{className:(0,i.cx)(c.flexRow,c.silencePeriod)},e.createElement(Ie,null),e.createElement($.g,{label:"Duration",invalid:!!f.errors.duration,error:f.errors.duration&&(f.errors.duration.type==="required"?"Required field":f.errors.duration.message)},e.createElement(F.I,{className:c.createdBy,...g("duration",{validate:B=>Object.keys((0,h.RA)(B)).length===0?"Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)":void 0}),id:"duration"}))),e.createElement(Me,null),e.createElement($.g,{className:(0,i.cx)(c.field,c.textArea),label:"Comment",required:!0,error:f.errors.comment?.message,invalid:!!f.errors.comment},e.createElement(pe.K,{...g("comment",{required:{value:!0,message:"Required."}}),rows:5,placeholder:"Details about the silence"})),!Dt&&e.createElement($.g,{className:(0,i.cx)(c.field,c.createdBy),label:"Created By",required:!0,error:f.errors.createdBy?.message,invalid:!!f.errors.createdBy},e.createElement(F.I,{...g("createdBy",{required:{value:!0,message:"Required."}}),placeholder:"Who's creating the silence"})),e.createElement($e,{amSourceName:n,matchers:A})),e.createElement("div",{className:c.flexRow},y&&e.createElement(K.zx,{disabled:!0,icon:"fa fa-spinner",variant:"primary"},"Saving..."),!y&&e.createElement(K.zx,{type:"submit"},"Save silence"),e.createElement(K.Qj,{href:(0,w.eQ)("alerting/silences",n),variant:"secondary"},"Cancel"))))},Ke=t=>({field:(0,i.css)`
    margin: ${t.spacing(1,0)};
  `,textArea:(0,i.css)`
    max-width: ${t.breakpoints.values.sm}px;
  `,createdBy:(0,i.css)`
    width: 200px;
  `,flexRow:(0,i.css)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${t.spacing(1)};
    }
  `,silencePeriod:(0,i.css)`
    max-width: ${t.breakpoints.values.sm}px;
  `}),le=we;var j=a(77877),q=a(27366),ze=a(4516),_=a(12190),Fe=a(18950),ee=a(67650),te=a(18314),Qe=a(81456);const ie=({className:t,...n})=>{const r=(0,p.wW)(Ve);return e.createElement(K.zx,{variant:"secondary",size:"xs",className:(0,i.cx)(r.wrapper,t),...n})},Ve=t=>({wrapper:(0,i.css)`
    height: 24px;
    font-size: ${t.typography.bodySmall.fontSize};
  `});var Ye=a(57912),Ze=a(3532);const Ge=({matchers:t})=>{const n=(0,p.wW)(je);return e.createElement("div",null,e.createElement(Ze.P,{className:n.tags,tags:t.map(r=>`${r.name}${(0,W.zy)(r)}${r.value}`)}))},je=()=>({tags:(0,i.css)`
    justify-content: flex-start;
  `});var He=a(80318),Je=a(11906),Xe=a(97125),ke=a(60703);const qe=({alertManagerSourceName:t})=>{const n=(0,ke.QX)(t);return Xe.contextSrv.hasPermission(n.create)?e.createElement(Je.Z,{title:"You haven't created any silences yet",buttonIcon:"bell-slash",buttonLink:(0,w.eQ)("alerting/silence/new",t),buttonTitle:"Create silence"}):e.createElement(He._,{callToActionElement:e.createElement("div",null),message:"No silences found."})};var _e=a(98502),et=a(98934);const tt=({alert:t,className:n})=>{const[r,m]=(0,e.useState)(!0),o=(0,h.vT)({start:new Date(t.startsAt),end:new Date(t.endsAt)}),v=Object.entries(t.labels).reduce((c,[A,u])=>((A==="alertname"||A==="__alert_rule_title__")&&(c=u),c),"");return e.createElement(e.Fragment,null,e.createElement("tr",{className:n},e.createElement("td",null,e.createElement(et.U,{isCollapsed:r,onToggle:c=>m(c)})),e.createElement("td",null,e.createElement(se.G,{state:t.status.state})),e.createElement("td",null,"for ",o," seconds"),e.createElement("td",null,v)),!r&&e.createElement("tr",{className:n},e.createElement("td",null),e.createElement("td",{colSpan:5},e.createElement(ae.s,{labels:t.labels,size:"sm"}))))},at=({silencedAlerts:t})=>{const n=(0,p.wW)(_e.D),r=(0,p.wW)(nt);return t.length?e.createElement("table",{className:(0,i.cx)(n.table,r.tableMargin)},e.createElement("colgroup",null,e.createElement("col",{className:n.colExpand}),e.createElement("col",{className:r.colState}),e.createElement("col",null),e.createElement("col",{className:r.colName})),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"State"),e.createElement("th",null),e.createElement("th",null,"Alert name"))),e.createElement("tbody",null,t.map((m,o)=>e.createElement(tt,{key:m.fingerprint,alert:m,className:o%2===0?n.evenRow:""})))):null},nt=t=>({tableMargin:(0,i.css)`
    margin-bottom: ${t.spacing(1)};
  `,colState:(0,i.css)`
    width: 110px;
  `,colName:(0,i.css)`
    width: 65%;
  `}),st=at,rt=({silence:t})=>{const{startsAt:n,endsAt:r,comment:m,createdBy:o,silencedAlerts:v}=t,c=(0,p.wW)(lt),A="YYYY-MM-DD HH:mm",u=j.parse(n),y=j.parse(r),g=(0,h.vT)({start:new Date(n),end:new Date(r)});return e.createElement("div",{className:c.container},e.createElement("div",{className:c.title},"Comment"),e.createElement("div",null,m),e.createElement("div",{className:c.title},"Schedule"),e.createElement("div",null,`${u?.format(A)} - ${y?.format(A)}`),e.createElement("div",{className:c.title},"Duration"),e.createElement("div",null," ",g),e.createElement("div",{className:c.title},"Created by"),e.createElement("div",null," ",o),e.createElement("div",{className:c.title},"Affected alerts"),e.createElement(st,{silencedAlerts:v}))},lt=t=>({container:(0,i.css)`
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-row-gap: 1rem;
  `,title:(0,i.css)`
    color: ${t.colors.text.primary};
  `,row:(0,i.css)`
    margin: ${t.spacing(1,0)};
  `});var it=a(47624);const ot={[L.As.Active]:"good",[L.As.Expired]:"neutral",[L.As.Pending]:"neutral"},ct=({state:t})=>e.createElement(it.i,{state:ot[t]},t);var dt=a(36495),mt=a(69865);const oe=()=>(0,O.uniqueId)("query-string-"),ut=()=>{const[t,n]=(0,e.useState)(oe()),[r,m]=(0,ee.K)(),{queryString:o}=(0,w.pF)(r),v=(0,p.wW)(gt),c=(0,O.debounce)(y=>{const g=y.target;m({queryString:g.value||null})},400),A=()=>{m({queryString:null,silenceState:null}),setTimeout(()=>n(oe()))},u=o&&o.length>3?(0,W.Zh)(o).length===0:!1;return e.createElement("div",{className:v.flexRow},e.createElement($.g,{className:v.rowChild,label:e.createElement(dt._,null,e.createElement(q.K,{gap:.5},e.createElement("span",null,"Search by matchers"),e.createElement(mt.u,{content:e.createElement("div",null,"Filter silences by matchers using a comma separated list of matchers, ie:",e.createElement("pre",null,"severity=critical, instance=~cluster-us-.+"))},e.createElement(_.J,{name:"info-circle",size:"sm"})))),invalid:u,error:u?"Query must use valid matcher syntax":null},e.createElement(F.I,{key:t,className:v.searchInput,prefix:e.createElement(_.J,{name:"search"}),onChange:c,defaultValue:o??"",placeholder:"Search","data-testid":"search-query-input"})),o&&e.createElement("div",{className:v.rowChild},e.createElement(K.zx,{variant:"secondary",icon:"times",onClick:A},"Clear filters")))},gt=t=>({searchInput:(0,i.css)`
    width: 360px;
  `,flexRow:(0,i.css)`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${t.spacing(3)};
    border-bottom: 1px solid ${t.colors.border.medium};
  `,rowChild:(0,i.css)`
    margin-right: ${t.spacing(1)};
    margin-bottom: 0;
    max-height: 52px;
  `,fieldLabel:(0,i.css)`
    font-size: 12px;
    font-weight: 500;
  `}),Et=({silences:t,alertManagerAlerts:n,alertManagerSourceName:r})=>{const m=(0,p.wW)(me),[o]=(0,ee.K)(),v=de(t,!1),c=de(t,!0),{silenceState:A}=(0,w.pF)(o),u=A===L.As.Expired,y=(0,e.useMemo)(()=>{const S=f=>n.filter(D=>D.status.silencedBy.includes(f));return v.map(f=>{const D=S(f.id);return{id:f.id,data:{...f,silencedAlerts:D}}})},[v,n]),g=(0,e.useMemo)(()=>{const S=f=>n.filter(D=>D.status.silencedBy.includes(f));return c.map(f=>{const D=S(f.id);return{id:f.id,data:{...f,silencedAlerts:D}}})},[c,n]);return e.createElement("div",{"data-testid":"silences-table"},!!t.length&&e.createElement(q.K,{direction:"column"},e.createElement(ut,null),e.createElement(Qe.q,{actions:[te.oI.CreateSilence]},e.createElement("div",{className:m.topButtonContainer},e.createElement(K.Qj,{href:(0,w.eQ)("/alerting/silence/new",r),icon:"plus"},"Add Silence"))),e.createElement(ce,{items:y,alertManagerSourceName:r,dataTestId:"not-expired-table"}),g.length>0&&e.createElement(ze.s,{label:`Expired silences (${g.length})`,isOpen:u},e.createElement("div",{className:m.callout},e.createElement(_.J,{className:m.calloutIcon,name:"info-circle"}),e.createElement("span",null,"Expired silences are automatically deleted after 5 days.")),e.createElement(ce,{items:g,alertManagerSourceName:r,dataTestId:"expired-table"}))),!t.length&&e.createElement(qe,{alertManagerSourceName:r}))};function ce({items:t,alertManagerSourceName:n,dataTestId:r}){const m=vt(n);return t.length?e.createElement(ne.t,{pagination:{itemsPerPage:25},items:t,cols:m,isExpandable:!0,dataTestId:r,renderExpandedContent:({data:o})=>e.createElement(rt,{silence:o})}):e.createElement(e.Fragment,null,"No matching silences found")}const de=(t,n=!1)=>{const[r]=(0,ee.K)();return(0,e.useMemo)(()=>{const{queryString:m}=(0,w.pF)(r),o=r?.silenceIds;return t.filter(v=>typeof o=="string"&&!o.split(",").includes(v.id)||m&&!(0,W.Zh)(m).every(u=>v.matchers?.some(({name:y,value:g,isEqual:S,isRegex:f})=>u.name===y&&u.value===g&&u.isEqual===S&&u.isRegex===f))?!1:n?v.status.state===L.As.Expired:v.status.state!==L.As.Expired)},[r,t,n])},me=t=>({topButtonContainer:(0,i.css)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,addNewSilence:(0,i.css)`
    margin: ${t.spacing(2,0)};
  `,callout:(0,i.css)`
    background-color: ${t.colors.background.secondary};
    border-top: 3px solid ${t.colors.info.border};
    border-radius: ${t.shape.radius.default};
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * {
      margin-left: ${t.spacing(1)};
    }
  `,calloutIcon:(0,i.css)`
    color: ${t.colors.info.text};
  `,editButton:(0,i.css)`
    margin-left: ${t.spacing(.5)};
  `});function vt(t){const n=(0,C.useDispatch)(),r=(0,p.wW)(me),[m,o]=(0,te.RA)(te.oI.UpdateSilence);return(0,e.useMemo)(()=>{const v=A=>{n((0,G.yO)(t,A))},c=[{id:"state",label:"State",renderCell:function({data:{status:u}}){return e.createElement(ct,{state:u.state})},size:4},{id:"matchers",label:"Matching labels",renderCell:function({data:{matchers:u}}){return e.createElement(Ge,{matchers:u||[]})},size:10},{id:"alerts",label:"Alerts",renderCell:function({data:{silencedAlerts:u}}){return e.createElement("span",{"data-testid":"alerts"},u.length)},size:4},{id:"schedule",label:"Schedule",renderCell:function({data:{startsAt:u,endsAt:y}}){const g=j.parse(u),S=j.parse(y),f="YYYY-MM-DD HH:mm";return e.createElement(e.Fragment,null," ",g?.format(f)," ","-",S?.format(f))},size:7}];return m&&o&&c.push({id:"actions",label:"Actions",renderCell:function({data:u}){return e.createElement(q.K,{gap:.5},u.status.state==="expired"?e.createElement(Fe.r,{href:(0,w.eQ)(`/alerting/silence/${u.id}/edit`,t)},e.createElement(ie,{icon:"sync"},"Recreate")):e.createElement(ie,{icon:"bell",onClick:()=>v(u.id)},"Unsilence"),u.status.state!=="expired"&&e.createElement(Ye.A,{className:r.editButton,to:(0,w.eQ)(`/alerting/silence/${u.id}/edit`,t),icon:"pen",tooltip:"edit"}))},size:5}),c},[t,n,r.editButton,o,m])}const ft=Et,ue={icon:"bell-slash"};function pt(){const{isExact:t,path:n}=(0,l.$B)(),[r,m]=(0,e.useState)();return(0,e.useEffect)(()=>{n==="/alerting/silence/new"?m({...ue,id:"silence-new",text:"Add silence"}):n==="/alerting/silence/:id/edit"&&m({...ue,id:"silence-edit",text:"Edit silence"})},[n,t]),r}var ht=a(328),At=a(63483);const xt=()=>{const{selectedAlertmanager:t}=(0,ht.ZA)(),n=(0,C.useDispatch)(),r=(0,X._)(S=>S.silences),m=(0,X._)(S=>S.amAlerts),o=t?m[t]||k.oq:void 0,{currentData:v}=T.T.useDiscoverAmFeaturesQuery({amSourceName:t??""},{skip:!t});(0,e.useEffect)(()=>{function S(){t&&(n((0,G.je)(t)),n((0,G.dB)(t)))}S();const f=setInterval(()=>S,At.cm);return()=>{clearInterval(f)}},[t,n]);const{result:c,loading:A,error:u}=t&&r[t]||k.oq,y=(0,e.useCallback)(S=>c&&c.find(f=>f.id===S),[c]),g=u?.message?.includes("the Alertmanager is not configured")&&v?.lazyConfigInit;return t?e.createElement(e.Fragment,null,e.createElement(P.u,{currentAlertmanager:t}),g&&e.createElement(d.b,{title:"The selected Alertmanager has no configuration",severity:"warning"},"Create a new contact point to create a configuration using the default values or contact your administrator to set up the Alertmanager."),u&&!A&&!g&&e.createElement(d.b,{severity:"error",title:"Error loading silences"},u.message||"Unknown error."),o?.error&&!o?.loading&&!g&&e.createElement(d.b,{severity:"error",title:"Error loading Alertmanager alerts"},o.error?.message||"Unknown error."),c&&!u&&e.createElement(l.rs,null,e.createElement(l.AW,{exact:!0,path:"/alerting/silences"},e.createElement(ft,{silences:c,alertManagerAlerts:o?.result??[],alertManagerSourceName:t})),e.createElement(l.AW,{exact:!0,path:"/alerting/silence/new"},e.createElement(le,{alertManagerSourceName:t})),e.createElement(l.AW,{exact:!0,path:"/alerting/silence/:id/edit"},({match:S})=>S?.params.id&&e.createElement(le,{silence:y(S.params.id),alertManagerSourceName:t})))):null};function yt(){const t=pt();return e.createElement(b.O,{pageId:"silences",pageNav:t,accessType:"instance"},e.createElement(xt,null))}const St=(0,M.Pf)(yt,{style:"page"})},81456:(U,I,a)=>{a.d(I,{q:()=>C});var e=a(86832),l=a.n(e),d=a(39953),M=a(18314);const C=({actions:x,children:R})=>{const h=(0,e.filter)(x,i),s=(0,e.filter)(x,O);return h.length?d.createElement(T,{actions:h},R):s.length?d.createElement(b,{actions:s},R):null},T=({actions:x,children:R})=>{const h=(0,M.Mz)();return P(h,x)?d.createElement(d.Fragment,null,R):null},b=({actions:x,children:R})=>{const h=(0,M.cI)();return P(h,x)?d.createElement(d.Fragment,null,R):null};function P(x,R){return(0,e.chain)(x).pick(R).values().value().some(([h,s])=>s===!0)}function i(x){return Object.values(M.oI).includes(x)}function O(x){return Object.values(M.hB).includes(x)}},86860:(U,I,a)=>{a.d(I,{u:()=>P});var e=a(41407),l=a(39953),d=a(82803),M=a(33155),C=a(47858),T=a(37546),b=a(95712);function P({currentAlertmanager:O}){const x=(0,d.wW)(i),{useGetAlertmanagerChoiceStatusQuery:R}=T.alertmanagerApi,{currentData:h}=R(),s=O===b.GC;if(!(h?.alertmanagersChoice&&[C.TE.External,C.TE.All].includes(h?.alertmanagersChoice))||!s)return null;const N=h.numExternalAlertmanagers>0;return h.alertmanagersChoice===C.TE.External?l.createElement(M.b,{title:"Grafana alerts are not delivered to Grafana Alertmanager"},"Grafana is configured to send alerts to external Alertmanagers only. Changing Grafana Alertmanager configuration will not affect delivery of your alerts.",l.createElement("div",{className:x.adminHint},"To change your Alertmanager setup, go to the Alerting Admin page. If you do not have access, contact your Administrator.")):h.alertmanagersChoice===C.TE.All&&N?l.createElement(M.b,{title:"You have additional Alertmanagers to configure",severity:"warning"},"Ensure you make configuration changes in the correct Alertmanagers; both internal and external. Changing one will not affect the others.",l.createElement("div",{className:x.adminHint},"To change your Alertmanager setup, go to the Alerting Admin page. If you do not have access, contact your Administrator.")):null}const i=O=>({adminHint:(0,e.css)`
    font-size: ${O.typography.bodySmall.fontSize};
    font-weight: ${O.typography.bodySmall.fontWeight};
  `})},57912:(U,I,a)=>{a.d(I,{A:()=>M});var e=a(39953),l=a(69865),d=a(4919);const M=({tooltip:C,icon:T,to:b,target:P,onClick:i,className:O,tooltipPlacement:x="top",...R})=>{const h=typeof C=="string"?C:void 0;return e.createElement(l.u,{content:C,placement:x},b?e.createElement(d.Qj,{variant:"secondary",fill:"text",icon:T,href:b,size:"sm",target:P,...R,"aria-label":h}):e.createElement(d.zx,{className:O,variant:"secondary",fill:"text",size:"sm",icon:T,type:"button",onClick:i,...R,"aria-label":h}))}},84070:(U,I,a)=>{a.d(I,{G:()=>C});var e=a(39953),l=a(47858),d=a(47624);const M={[l.Z9.Active]:"bad",[l.Z9.Unprocessed]:"neutral",[l.Z9.Suppressed]:"info"},C=({state:T})=>e.createElement(d.i,{state:M[T]},T)},18314:(U,I,a)=>{a.d(I,{Mz:()=>O,RA:()=>x,cI:()=>i,hB:()=>b,o2:()=>R,oI:()=>T,xC:()=>h});var e=a(39953),l=a(97125),d=a(57721),M=a(328),C=a(60703),T=(s=>(s.ViewExternalConfiguration="view-external-configuration",s.UpdateExternalConfiguration="update-external-configuration",s.CreateContactPoint="create-contact-point",s.ViewContactPoint="view-contact-point",s.UpdateContactPoint="edit-contact-points",s.DeleteContactPoint="delete-contact-point",s.ExportContactPoint="export-contact-point",s.CreateNotificationTemplate="create-notification-template",s.ViewNotificationTemplate="view-notification-template",s.UpdateNotificationTemplate="edit-notification-template",s.DeleteNotificationTemplate="delete-notification-template",s.DecryptSecrets="decrypt-secrets",s.CreateNotificationPolicy="create-notification-policy",s.ViewNotificationPolicyTree="view-notification-policy-tree",s.UpdateNotificationPolicyTree="update-notification-policy-tree",s.DeleteNotificationPolicy="delete-notification-policy",s.ExportNotificationPolicies="export-notification-policies",s.CreateSilence="create-silence",s.ViewSilence="view-silence",s.UpdateSilence="update-silence",s.ViewMuteTiming="view-mute-timing",s.CreateMuteTiming="create-mute-timing",s.UpdateMuteTiming="update-mute-timing",s.DeleteMuteTiming="delete-mute-timing",s))(T||{}),b=(s=>(s.CreateAlertRule="create-alert-rule",s.ViewAlertRule="view-alert-rule",s.UpdateAlertRule="update-alert-rule",s.DeleteAlertRule="delete-alert-rule",s.CreateExternalAlertRule="create-external-alert-rule",s.ViewExternalAlertRule="view-external-alert-rule",s.UpdateExternalAlertRule="update-external-alert-rule",s.DeleteExternalAlertRule="delete-external-alert-rule",s))(b||{});const P=!0;function i(){return{["create-alert-rule"]:[P,l.contextSrv.hasPermission(d.AccessControlAction.AlertingRuleCreate)],["view-alert-rule"]:[P,l.contextSrv.hasPermission(d.AccessControlAction.AlertingRuleRead)],["update-alert-rule"]:[P,l.contextSrv.hasPermission(d.AccessControlAction.AlertingRuleUpdate)],["delete-alert-rule"]:[P,l.contextSrv.hasPermission(d.AccessControlAction.AlertingRuleDelete)],["create-external-alert-rule"]:[P,l.contextSrv.hasPermission(d.AccessControlAction.AlertingRuleExternalWrite)],["view-external-alert-rule"]:[P,l.contextSrv.hasPermission(d.AccessControlAction.AlertingRuleExternalRead)],["update-external-alert-rule"]:[P,l.contextSrv.hasPermission(d.AccessControlAction.AlertingRuleExternalWrite)],["delete-external-alert-rule"]:[P,l.contextSrv.hasPermission(d.AccessControlAction.AlertingRuleExternalWrite)]}}function O(){const{selectedAlertmanager:s,hasConfigurationAPI:E,isGrafanaAlertmanager:N}=(0,M.ZA)(),p=(0,C.Ko)(s),z=(0,C.QX)(s);return{["view-external-configuration"]:[P,l.contextSrv.hasPermission(d.AccessControlAction.AlertingNotificationsExternalRead)],["update-external-configuration"]:[E,l.contextSrv.hasPermission(d.AccessControlAction.AlertingNotificationsExternalWrite)],["create-contact-point"]:[E,l.contextSrv.hasPermission(p.create)],["view-contact-point"]:[P,l.contextSrv.hasPermission(p.read)],["edit-contact-points"]:[E,l.contextSrv.hasPermission(p.update)],["delete-contact-point"]:[E,l.contextSrv.hasPermission(p.delete)],["export-contact-point"]:[N,l.contextSrv.hasPermission(p.read)],["create-notification-template"]:[E,l.contextSrv.hasPermission(p.create)],["view-notification-template"]:[P,l.contextSrv.hasPermission(p.read)],["edit-notification-template"]:[E,l.contextSrv.hasPermission(p.update)],["delete-notification-template"]:[E,l.contextSrv.hasPermission(p.delete)],["create-notification-policy"]:[E,l.contextSrv.hasPermission(p.create)],["view-notification-policy-tree"]:[P,l.contextSrv.hasPermission(p.read)],["update-notification-policy-tree"]:[E,l.contextSrv.hasPermission(p.update)],["delete-notification-policy"]:[E,l.contextSrv.hasPermission(p.delete)],["export-notification-policies"]:[N,l.contextSrv.hasPermission(p.read)],["decrypt-secrets"]:[N,l.contextSrv.hasPermission(p.provisioning.readSecrets)],["create-silence"]:[E,l.contextSrv.hasPermission(z.create)],["view-silence"]:[P,l.contextSrv.hasPermission(z.read)],["update-silence"]:[E,l.contextSrv.hasPermission(z.update)],["create-mute-timing"]:[E,l.contextSrv.hasPermission(p.create)],["view-mute-timing"]:[P,l.contextSrv.hasPermission(p.read)],["update-mute-timing"]:[E,l.contextSrv.hasPermission(p.update)],["delete-mute-timing"]:[E,l.contextSrv.hasPermission(p.delete)]}}function x(s){const E=O();return(0,e.useMemo)(()=>E[s],[E,s])}function R(s){const E=O();return(0,e.useMemo)(()=>s.map(N=>E[N]),[E,s])}function h(s){const E=i();return(0,e.useMemo)(()=>E[s],[E,s])}},88617:(U,I,a)=>{a.d(I,{j:()=>M});var e=a(39953),l=a(53721),d=a(13601);function M(){const{search:C}=(0,l.TH)(),T=(0,e.useMemo)(()=>new URLSearchParams(C),[C]),b=(0,e.useCallback)((P,i)=>{d.E1.partial(P,i)},[]);return[T,b]}},98502:(U,I,a)=>{a.d(I,{D:()=>l});var e=a(41407);const l=d=>({table:(0,e.css)`
    width: 100%;
    border-radius: ${d.shape.radius.default};
    border: solid 1px ${d.colors.border.weak};
    background-color: ${d.colors.background.secondary};

    th {
      padding: ${d.spacing(1)};
    }

    td {
      padding: 0 ${d.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:(0,e.css)`
    background-color: ${d.colors.background.primary};
  `,colExpand:(0,e.css)`
    width: 36px;
  `,nameCell:(0,e.css)`
    gap: ${d.spacing(1)};
  `,actionsCell:(0,e.css)`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${d.spacing(.5)};
    }
  `})}}]);

//# sourceMappingURL=AlertSilences.5747667f316f3430ecce.js.map