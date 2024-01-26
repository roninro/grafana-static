"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8808],{86723:(G,M,t)=>{t.d(M,{p:()=>A});var o=t(41407),e=t(39953),l=t(32688),P=t(82803),x=t(12190),E=t(18950),D=t(11818),h=t(31851),m=t(10694),I=t(73075),O=t(4919),u=t(50384),r=t(83695),C=t(64840),d=t(77960);const B={loadingState:m.Gu.Loading,dashboardTitles:[]},S=(0,d.PH)("libraryPanels/delete/searchCompleted"),J=(n=B,g)=>S.match(g)?{...n,dashboardTitles:g.payload.dashboards.map(U=>U.title),loadingState:m.Gu.Done}:n;function f(n){return async function(g){const U=await(0,C.E8)(n.uid);g(S({dashboards:U}))}}const N=({libraryPanel:n,onDismiss:g,onConfirm:U})=>{const j=(0,P.wW)(u.J),[{dashboardTitles:K,loadingState:z},V]=(0,e.useReducer)(J,B),F=(0,e.useMemo)(()=>(0,r.tb)(V),[V]);(0,e.useEffect)(()=>{F(f(n))},[F,n]);const H=!!K.length,w=z===m.Gu.Done;return e.createElement(I.u,{className:j.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:g,isOpen:!0},w?null:e.createElement(W,null),w?e.createElement("div",null,H?e.createElement(c,{dashboardTitles:K}):null,H?null:e.createElement(i,null),e.createElement(I.u.ButtonRow,null,e.createElement(O.zx,{variant:"secondary",onClick:g,fill:"outline"},"Cancel"),e.createElement(O.zx,{variant:"destructive",onClick:U,disabled:H},"Delete"))):null)},W=()=>e.createElement("span",null,"Loading library panel..."),i=()=>{const n=(0,P.wW)(u.J);return e.createElement("div",{className:n.modalText},"Do you want to delete this panel?")},c=({dashboardTitles:n})=>{const g=(0,P.wW)(u.J),U=n.length===1?"dashboard.":"dashboards.",j=`${n.length} ${U}`;return n.length===0?null:e.createElement("div",null,e.createElement("p",{className:g.textInfo},"This library panel can not be deleted because it is connected to ",e.createElement("strong",null,j)," Remove the library panel from the dashboards listed below and retry."),e.createElement("table",{className:g.myTable},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Dashboard name"))),e.createElement("tbody",null,n.map((K,z)=>e.createElement("tr",{key:`dash-title-${z}`},e.createElement("td",null,K))))))},A=({libraryPanel:n,onClick:g,onDelete:U,showSecondaryActions:j})=>{const[K,z]=(0,e.useState)(!1),V=()=>{U?.(n),z(!1)},F=l.config.panels[n.model.type]??(0,D.X)(n.model.type).meta;return e.createElement(e.Fragment,null,e.createElement(h.X,{isCurrent:!1,title:n.name,description:n.description,plugin:F,onClick:()=>g?.(n),onDelete:j?()=>z(!0):void 0},e.createElement(T,{libraryPanel:n})),K&&e.createElement(N,{libraryPanel:n,onConfirm:V,onDismiss:()=>z(!1)}))};function T({libraryPanel:n}){const g=(0,P.wW)($);return!n.meta?.folderUid&&!n.meta?.folderName?null:n.meta.folderUid?e.createElement("span",{className:g.metaContainer},e.createElement(E.r,{href:`/dashboards/f/${n.meta.folderUid}`},e.createElement(x.J,{name:"folder-upload",size:"sm"}),e.createElement("span",null,n.meta.folderName))):e.createElement("span",{className:g.metaContainer},e.createElement(x.J,{name:"folder",size:"sm"}),e.createElement("span",null,n.meta.folderName))}function $(n){return{metaContainer:(0,o.css)`
      display: flex;
      align-items: center;
      color: ${n.colors.text.secondary};
      font-size: ${n.typography.bodySmall.fontSize};
      padding-top: ${n.spacing(.5)};

      svg {
        margin-right: ${n.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}},83695:(G,M,t)=>{t.d(M,{UO:()=>S,Xu:()=>B,tb:()=>J});var o=t(31544),e=t(22605),l=t(63302),P=t(3195),x=t(46514),E=t(84289),D=t(10752),h=t(81698),m=t(52325),I=t(66453),O=t(79947),u=t(32688),r=t(42923),C=t(64840),d=t(51675);function B(f){const N=(i,c)=>i.id===c.type,W=(i,c)=>{const A=(0,r.xW)();return i.filter(T=>{const $=A.find(n=>N(n,T));return c?!!$?.skipDataQuery:!$?.skipDataQuery})};return function(i){const c=new o.w0,A=(0,e.D)((0,C.Pq)({searchString:f.searchString,perPage:f.perPage,page:f.page,excludeUid:f.currentPanelId,sortDirection:f.sortDirection,typeFilter:f.panelFilter,folderFilterUIDs:f.folderFilterUIDs})).pipe((0,E.z)(T=>{const{elements:$}=T;if(u.config.featureToggles.vizAndWidgetSplit&&f.isWidget!==void 0){const n=W($,f.isWidget);return(0,l.of)({...T,elements:n})}return(0,l.of)({...T,elements:$})}),(0,E.z)(({perPage:T,elements:$,page:n,totalCount:g})=>(0,l.of)((0,d.zK)({libraryPanels:$,page:n,perPage:T,totalCount:g}))),(0,D.K)(T=>(console.error(T),(0,l.of)((0,d.zK)({...d.p$,page:f.page,perPage:f.perPage})))),(0,h.x)(()=>c.unsubscribe()),(0,m.B)());c.add((0,P.T)((0,x.H)(50).pipe((0,I.h)((0,d.xU)()),(0,O.R)(A)),A).subscribe(i))}}function S(f,N){return async function(W){try{await(0,C.UO)(f),B(N)(W)}catch(i){console.error(i)}}}function J(f){return function(N){return N instanceof Function?N(f):f(N)}}},51675:(G,M,t)=>{t.d(M,{_p:()=>D,oO:()=>E,p$:()=>l,xU:()=>P,zK:()=>x});var o=t(77960),e=t(10694);const l={loadingState:e.Gu.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},P=(0,o.PH)("libraryPanels/view/initSearch"),x=(0,o.PH)("libraryPanels/view/searchCompleted"),E=(0,o.PH)("libraryPanels/view/changePage"),D=(h,m)=>{if(P.match(m))return{...h,loadingState:e.Gu.Loading};if(x.match(m)){const{libraryPanels:I,page:O,perPage:u,totalCount:r}=m.payload,C=Math.ceil(r/u);return{...h,libraryPanels:I,perPage:u,totalCount:r,loadingState:e.Gu.Done,numberOfPages:C,page:O>C?O-1:O}}return E.match(m)?{...h,page:m.payload.page}:h}},50384:(G,M,t)=>{t.d(M,{J:()=>e});var o=t(41407);function e(l){return{myTable:(0,o.css)`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${l.shape.radius.default};
      border: 1px solid ${l.colors.action.hover};
      background: ${l.colors.background.primary};
      color: ${l.colors.text.secondary};
      font-size: ${l.typography.h6.fontSize};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${l.typography.bodySmall.fontSize};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${l.spacing(4)};
      }

      tbody > tr:nth-child(odd) {
        background: ${l.colors.background.secondary};
      }
    `,noteTextbox:(0,o.css)`
      margin-bottom: ${l.spacing(4)};
    `,textInfo:(0,o.css)`
      color: ${l.colors.text.secondary};
      font-size: ${l.typography.size.sm};
    `,dashboardSearch:(0,o.css)`
      margin-top: ${l.spacing(2)};
    `,modal:(0,o.css)`
      width: 500px;
    `,modalText:(0,o.css)`
      font-size: ${l.typography.h4.fontSize};
      color: ${l.colors.text.primary};
      margin-bottom: ${l.spacing(4)};
      padding-top: ${l.spacing(2)};
    `}}},70420:(G,M,t)=>{t.r(M),t.d(M,{default:()=>Oe});var o=t(41407),e=t(39953),l=t(89772),P=t(71519),x=t(10694),E=t(28888),D=t(72639),h=t(32688),m=t(66729),I=t(17789),O=t(85830),u=t(96227),r=t(36495),C=t(38637),d=t(4919),B=t(68421),S=t(12223),J=t(28409),f=t(82803),N=t(64084),W=t(28833),i=t(13253),c=t(62679),A=t(43686),T=t(48069),$=t(13601),n=t(96276),g=t(44622),U=t(81813),j=t(92743),K=t(9006),z=t(67979),V=t(92811),F=t(20463),H=t(4148),w=t(17712);const se=s=>{let a;try{a=JSON.parse(s)}catch{return(0,F.t)("dashboard.validation.invalid-json","Not valid JSON")}if(a&&a.hasOwnProperty("tags"))if(Array.isArray(a.tags)){if(a.tags.some(v=>typeof v!="string"))return(0,F.t)("dashboard.validation.tags-expected-strings","tags expected array of strings")}else return(0,F.t)("dashboard.validation.tags-expected-array","tags expected array");return!0},le=s=>{const a=/(^\d+$)|dashboards\/(\d+)/.exec(s);return a&&(a[1]||a[2])?!0:(0,F.t)("dashboard.validation.invalid-dashboard-id","Could not find a valid Grafana.com ID")},de=(s,a)=>w.t.validateNewDashboardName(a,s).then(()=>!0).catch(L=>{if(L.type==="EXISTING")return L.message}),te=s=>(0,H.i)().get(`/api/dashboards/uid/${s}`).then(a=>`Dashboard named '${a?.dashboard.title}' in folder '${a?.meta.folderTitle}' has the same UID`).catch(a=>(a.isHandled=!0,!0));var ie=t(86723);function ae({inputs:s,label:a,description:L,folderName:v}){const p=(0,f.wW)(ce);return s?.length?e.createElement("div",{className:p.spacer},e.createElement(u.g,{label:a,description:L},e.createElement(e.Fragment,null,s.map((b,Q)=>{const X=`elements[${Q}]`,Y=b.state===U.KQ.New?{...b.model,meta:{...b.model.meta,folderName:v??"General"}}:{...b.model};return e.createElement("div",{className:p.item,key:X},e.createElement(ie.p,{libraryPanel:Y,onClick:()=>{}}))})))):null}function ce(s){return{spacer:(0,o.css)`
      margin-bottom: ${s.spacing(2)};
    `,item:(0,o.css)`
      margin-bottom: ${s.spacing(1)};
    `}}const me=({register:s,errors:a,control:L,getValues:v,uidReset:p,inputs:b,initialFolderUid:Q,onUidReset:X,onCancel:Y,onSubmit:k,watch:q})=>{const[_,Me]=(0,e.useState)(!1),Le=q("dataSources"),re=q("folder");(0,e.useEffect)(()=>{_&&(a.title||a.uid)&&k(v())},[a,v,_,k]);const Se=b?.libraryPanels?.filter(y=>y.state===U.KQ.New)??[],Te=b?.libraryPanels?.filter(y=>y.state===U.KQ.Exists)??[];return e.createElement(e.Fragment,null,e.createElement(n.D,null,"Options"),e.createElement(u.g,{label:"Name",invalid:!!a.title,error:a.title&&a.title.message},e.createElement(C.I,{...s("title",{required:"Name is required",validate:async y=>await de(y,v().folder.uid)}),type:"text","data-testid":E.wl.components.ImportDashboardForm.name})),e.createElement(u.g,{label:"Folder"},e.createElement(K.g,{render:({field:{ref:y,...R}})=>e.createElement(z.Fz,{...R,enableCreateNew:!0,initialFolderUid:Q}),name:"folder",control:L})),e.createElement(u.g,{label:"Unique identifier (UID)",description:`The unique identifier (UID) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs.
                The UID allows having consistent URLs for accessing dashboards so changing the title of a dashboard will not break any
                bookmarked links to that dashboard.`,invalid:!!a.uid,error:a.uid&&a.uid.message},e.createElement(e.Fragment,null,p?e.createElement(C.I,{...s("uid",{required:!0,validate:async y=>await te(y)})}):e.createElement(C.I,{disabled:!0,...s("uid",{validate:async y=>await te(y)}),addonAfter:!p&&e.createElement(d.zx,{onClick:X},"Change uid")}))),b.dataSources&&b.dataSources.map((y,R)=>{if(y.pluginId===j.hr.type)return null;const Z=`dataSources.${R}`,Ue=Le??[];return e.createElement(u.g,{label:y.label,description:y.description,key:Z,invalid:a.dataSources&&!!a.dataSources[R],error:a.dataSources&&a.dataSources[R]&&"A data source is required"},e.createElement(K.g,{name:Z,render:({field:{ref:$e,...Ne}})=>e.createElement(V.q,{...Ne,noDefault:!0,placeholder:y.info,pluginId:y.pluginId,current:Ue[R]?.uid}),control:L,rules:{required:!0}}))}),b.constants&&b.constants.map((y,R)=>{const Z=`constants.${R}`;return e.createElement(u.g,{label:y.label,error:a.constants&&a.constants[R]&&`${y.label} needs a value`,invalid:a.constants&&!!a.constants[R],key:Z},e.createElement(C.I,{...s(Z,{required:!0}),defaultValue:y.value}))}),e.createElement(ae,{inputs:Se,label:"New library panels",description:"List of new library panels that will get imported.",folderName:re.title}),e.createElement(ae,{inputs:Te,label:"Existing library panels",description:"List of existing library panels. These panels are not affected by the import.",folderName:re.title}),e.createElement(S.Lh,null,e.createElement(d.zx,{type:"submit","data-testid":E.wl.components.ImportDashboardForm.submit,variant:ue(a),onClick:()=>{Me(!0)}},pe(a)),e.createElement(d.zx,{type:"reset",variant:"secondary",onClick:Y},"Cancel")))};function ue(s){return s&&(s.title||s.uid)?"destructive":"primary"}function pe(s){return s&&(s.title||s.uid)?"Import (Overwrite)":"Import"}const he="dashboard_import_imported",fe=s=>{const a=$.E1.getSearchObject();return{dashboard:s.importDashboard.dashboard,meta:s.importDashboard.meta,source:s.importDashboard.source,inputs:s.importDashboard.inputs,folder:a.folderUid?{uid:String(a.folderUid)}:{uid:""}}},ge={clearLoadedDashboard:g.ys,importDashboard:g.$j},Ee=(0,l.connect)(fe,ge);class ve extends e.PureComponent{constructor(){super(...arguments),this.state={uidReset:!1},this.onSubmit=a=>{(0,D.ff)(he),this.props.importDashboard(a)},this.onCancel=()=>{this.props.clearLoadedDashboard()},this.onUidReset=()=>{this.setState({uidReset:!0})}}render(){const{dashboard:a,inputs:L,meta:v,source:p,folder:b}=this.props,{uidReset:Q}=this.state;return e.createElement(e.Fragment,null,p===U.G7.Gcom&&e.createElement("div",{style:{marginBottom:"24px"}},e.createElement("div",null,e.createElement(n.D,null,"Importing dashboard from"," ",e.createElement("a",{href:`https://grafana.com/dashboards/${a.gnetId}`,className:"external-link",target:"_blank",rel:"noreferrer"},"Grafana.com"))),e.createElement("table",{className:"filter-table form-inline"},e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"Published by"),e.createElement("td",null,v.orgName)),e.createElement("tr",null,e.createElement("td",null,"Updated on"),e.createElement("td",null,(0,T.dq)(v.updatedAt)))))),e.createElement(O.l,{onSubmit:this.onSubmit,defaultValues:{...a,constants:[],dataSources:[],elements:[],folder:b},validateOnMount:!0,validateFieldsOnMount:["title","uid"],validateOn:"onChange"},({register:X,errors:Y,control:k,watch:q,getValues:_})=>e.createElement(me,{register:X,errors:Y,control:k,getValues:_,uidReset:Q,inputs:L,onCancel:this.onCancel,onUidReset:this.onUidReset,onSubmit:this.onSubmit,watch:q,initialFolderUid:b.uid})))}}const ne=Ee(ve);ne.displayName="ImportDashboardOverview";const ee="dashboard_import_loaded",be=`{
    "title": "Example - Repeating Dictionary variables",
    "uid": "_0HnEoN4z",
    "panels": [...]
    ...
}
`,De=s=>({loadingState:s.importDashboard.state}),ye={fetchGcomDashboard:g.q_,importDashboardJson:g.nQ,cleanUpAction:A.e},Pe=(0,l.connect)(De,ye);class xe extends e.PureComponent{constructor(a){super(a),this.fileListRenderer=(v,p)=>null,this.onFileUpload=v=>{(0,D.ff)(ee,{import_source:"json_uploaded"});try{this.props.importDashboardJson(JSON.parse(String(v)))}catch(p){p instanceof Error&&W.Z.emit(P.SI.alertError,["Import failed","JSON -> JS Serialization failed: "+p.message]);return}},this.getDashboardFromJson=v=>{(0,D.ff)(ee,{import_source:"json_pasted"}),this.props.importDashboardJson(JSON.parse(v.dashboardJson))},this.getGcomDashboard=v=>{(0,D.ff)(ee,{import_source:"gcom"});let p;const b=/(^\d+$)|dashboards\/(\d+)/.exec(v.gcomDashboard);b&&b[1]?p=b[1]:b&&b[2]&&(p=b[2]),p&&this.props.fetchGcomDashboard(p)},this.pageNav={text:"Import dashboard",subTitle:"Import dashboard from file or Grafana.com"};const{gcomDashboardId:L}=this.props.queryParams;if(L){this.getGcomDashboard({gcomDashboard:L});return}}componentWillUnmount(){this.props.cleanUpAction({cleanupAction:a=>a.importDashboard=U.wg})}renderImportForm(){const a=Ce(this.props.theme),L=()=>e.createElement(m.h,{variant:"bodySmall",href:"https://grafana.com/grafana/dashboards/",external:!0},"grafana.com/dashboards");return e.createElement(e.Fragment,null,e.createElement("div",{className:a.option},e.createElement(I.Yo,{options:{multiple:!1,accept:[".json",".txt"]},readAs:"readAsText",fileListRenderer:this.fileListRenderer,onLoad:this.onFileUpload},e.createElement(I.A_,{primaryText:(0,c.t)("dashboard-import.file-dropzone.primary-text","Upload dashboard JSON file"),secondaryText:(0,c.t)("dashboard-import.file-dropzone.secondary-text","Drag and drop here or click to browse")}))),e.createElement("div",{className:a.option},e.createElement(O.l,{onSubmit:this.getGcomDashboard,defaultValues:{gcomDashboard:""}},({register:v,errors:p})=>e.createElement(u.g,{label:e.createElement(r._,{className:a.labelWithLink,htmlFor:"url-input"},e.createElement("span",null,e.createElement(c.cC,{i18nKey:"dashboard-import.gcom-field.label"},"Find and import dashboards for common applications at ",e.createElement(L,null)))),invalid:!!p.gcomDashboard,error:p.gcomDashboard&&p.gcomDashboard.message},e.createElement(C.I,{id:"url-input",placeholder:(0,c.t)("dashboard-import.gcom-field.placeholder","Grafana.com dashboard URL or ID"),type:"text",...v("gcomDashboard",{required:(0,c.t)("dashboard-import.gcom-field.validation-required","A Grafana dashboard URL or ID is required"),validate:le}),addonAfter:e.createElement(d.zx,{type:"submit"},e.createElement(c.cC,{i18nKey:"dashboard-import.gcom-field.load-button"},"Load"))})))),e.createElement("div",{className:a.option},e.createElement(O.l,{onSubmit:this.getDashboardFromJson,defaultValues:{dashboardJson:""}},({register:v,errors:p})=>e.createElement(e.Fragment,null,e.createElement(u.g,{label:(0,c.t)("dashboard-import.json-field.label","Import via dashboard JSON model"),invalid:!!p.dashboardJson,error:p.dashboardJson&&p.dashboardJson.message},e.createElement(B.K,{...v("dashboardJson",{required:(0,c.t)("dashboard-import.json-field.validation-required","Need a dashboard JSON model"),validate:se}),"data-testid":E.wl.components.DashboardImportPage.textarea,id:"dashboard-json-textarea",rows:10,placeholder:be})),e.createElement(S.Lh,null,e.createElement(d.zx,{type:"submit","data-testid":E.wl.components.DashboardImportPage.submit},e.createElement(c.cC,{i18nKey:"dashboard-import.form-actions.load"},"Load")),e.createElement(d.Qj,{variant:"secondary",href:`${h.config.appSubUrl}/dashboards`},e.createElement(c.cC,{i18nKey:"dashboard-import.form-actions.cancel"},"Cancel")))))))}render(){const{loadingState:a}=this.props;return e.createElement(i.T,{navId:"dashboards/browse",pageNav:this.pageNav},e.createElement(i.T.Contents,null,a===x.Gu.Loading&&e.createElement(S.wc,{justify:"center"},e.createElement(S.Lh,{justify:"center"},e.createElement(J.$,{size:32}))),[x.Gu.Error,x.Gu.NotStarted].includes(a)&&this.renderImportForm(),a===x.Gu.Done&&e.createElement(ne,null)))}}const Ie=(0,f.HE)(xe),oe=Pe(Ie);oe.displayName="DashboardImport";const Oe=oe,Ce=(0,N.B)(s=>({option:(0,o.css)`
      margin-bottom: ${s.spacing(4)};
      max-width: 600px;
    `,labelWithLink:(0,o.css)`
      max-width: 100%;
    `,linkWithinLabel:(0,o.css)`
      font-size: inherit;
    `}))},31851:(G,M,t)=>{t.d(M,{X:()=>I});var o=t(41407),e=t(39953),l=t(30670),P=t(88227),x=t(28888),E=t(82803),D=t(68497),h=t(45802),m=t(47082);const I=({isCurrent:r,title:C,plugin:d,onClick:B,onDelete:S,disabled:J,showBadge:f,description:N,children:W})=>{const i=(0,E.wW)(O),c=J||d.state===l.BV.deprecated,A=(0,o.cx)({[i.item]:!0,[i.itemDisabled]:c,[i.current]:r});return e.createElement("div",{className:A,"aria-label":x.wl.components.PluginVisualization.item(d.name),"data-testid":x.wl.components.PluginVisualization.item(d.name),onClick:c?void 0:B,title:r?"Click again to close this section":d.name},e.createElement("img",{className:(0,o.cx)(i.img,{[i.disabled]:c}),src:d.info.logos.small,alt:""}),e.createElement("div",{className:(0,o.cx)(i.itemContent,{[i.disabled]:c})},e.createElement("div",{className:i.name},C),N?e.createElement("span",{className:i.description},N):null,W),f&&e.createElement("div",{className:(0,o.cx)(i.badge,{[i.disabled]:c})},e.createElement(u,{plugin:d})),S&&e.createElement(D.h,{name:"trash-alt",onClick:T=>{T.stopPropagation(),S()},className:i.deleteButton,"aria-label":"Delete button on panel type card",tooltip:"Delete"}))};I.displayName="PanelTypeCard";const O=r=>({item:(0,o.css)`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${r.colors.background.secondary};
      border-radius: ${r.shape.radius.default};
      box-shadow: ${r.shadows.z1};
      border: 1px solid ${r.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${r.transitions.create(["background"],{duration:r.transitions.duration.short})};

      &:hover {
        background: ${r.colors.emphasize(r.colors.background.secondary,.03)};
      }
    `,itemContent:(0,o.css)`
      overflow: hidden;
      position: relative;
      padding: ${r.spacing(0,1)};
    `,itemDisabled:(0,o.css)`
      cursor: default;

      &,
      &:hover {
        background: ${r.colors.action.disabledBackground};
      }
    `,current:(0,o.css)`
      label: currentVisualizationItem;
      border: 1px solid ${r.colors.primary.border};
      background: ${r.colors.action.selected};
    `,disabled:(0,o.css)`
      opacity: 0.6;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:(0,o.css)`
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: ${r.typography.size.sm};
      font-weight: ${r.typography.fontWeightMedium};
      width: 100%;
    `,description:(0,o.css)`
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${r.colors.text.secondary};
      font-size: ${r.typography.bodySmall.fontSize};
      font-weight: ${r.typography.fontWeightLight};
      width: 100%;
      max-height: 4.5em;
    `,img:(0,o.css)`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:(0,o.css)`
      background: ${r.colors.background.primary};
    `,deleteButton:(0,o.css)`
      cursor: pointer;
      margin-left: auto;
    `}),u=({plugin:r})=>(0,P.x)(r.signature)?e.createElement(h.o,{status:r.signature}):e.createElement(m.u,{state:r.state});u.displayName="PanelPluginBadge"},42923:(G,M,t)=>{t.d(M,{Ry:()=>x,hK:()=>E,rw:()=>D,xW:()=>P});var o=t(30670),e=t(55705),l=t(50820);function P(){const h=l.config.panels;return Object.keys(h).filter(m=>h[m].hideFromList===!1).map(m=>h[m]).sort((m,I)=>m.sort-I.sort)}function x(){return P().filter(h=>!!h.skipDataQuery)}function E(){return P().filter(h=>!h.skipDataQuery)}function D(h,m,I){if(!m.length)return h.filter(d=>d.state===o.BV.deprecated?I?.id===d.id:!0);const O=(0,e.x6)(m).toLowerCase(),u=[],r=[],C="graph".startsWith(O);for(const d of h){if(d.state===o.BV.deprecated&&I?.id!==d.id)continue;const S=d.name.toLowerCase().indexOf(O);S===0?u.push(d):S>0?r.push(d):C&&d.id==="timeseries"&&u.push(d)}return u.concat(r)}},47082:(G,M,t)=>{t.d(M,{u:()=>P});var o=t(39953),e=t(30670),l=t(12608);const P=E=>{const D=x(E.state);return D?o.createElement(l.C,{className:E.className,color:D.color,title:D.tooltip,text:D.text,icon:D.icon}):null};function x(E){switch(E){case e.BV.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case e.BV.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case e.BV.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}}}]);

//# sourceMappingURL=DashboardImport.63e262d51615b3d88a5b.js.map