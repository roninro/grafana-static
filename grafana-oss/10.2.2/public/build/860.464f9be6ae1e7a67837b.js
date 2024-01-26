"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[860],{91753:(oe,D,e)=>{e.d(D,{u:()=>T});var s=e(41407),t=e(22160),n=e.n(t),c=e(39953),E=e(19977),P=e(82803),v=e(84541),C=e(4919),N=e(36210),b=e(15898);function T({format:A,textDefinition:S,downloadFileName:k,onClose:q}){const H=(0,P.wW)(V),U=(0,c.useCallback)(()=>{const K=new Blob([S],{type:`application/${A};charset=utf-8`});n()(K,`${k}.${A}`),q()},[S,k,A,q]),_=(0,c.useMemo)(()=>{const K=b.uN[A];return K.formatter?K.formatter(S):S},[A,S]);return c.createElement("div",{className:H.container},c.createElement("div",{className:H.content},c.createElement(E.Z,{disableWidth:!0},({height:K})=>c.createElement(v.p,{width:"100%",height:K,language:A,value:_,monacoOptions:{minimap:{enabled:!1},lineNumbers:"on",readOnly:!0}}))),c.createElement("div",{className:H.actions},c.createElement(C.zx,{variant:"secondary",onClick:q},"Cancel"),c.createElement(N.m,{icon:"copy",getText:()=>S},"Copy code"),c.createElement(C.zx,{icon:"download-alt",onClick:U},"Download")))}const V=A=>({container:(0,s.css)`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: ${A.spacing(2)};
  `,content:(0,s.css)`
    flex: 1 1 100%;
  `,actions:(0,s.css)`
    flex: 0;
    justify-content: flex-end;
    display: flex;
    gap: ${A.spacing(1)};
  `})},42527:(oe,D,e)=>{e.d(D,{i:()=>c});var s=e(39953),t=e(87722),n=e(89525);function c({activeTab:E,onTabChange:P,children:v,onClose:C,formatProviders:N,title:b="Export"}){const T=Object.values(N).map(V=>({label:V.name,value:V.exportFormat}));return s.createElement(t.d,{title:b,subtitle:"Select the format and download the file or copy the contents to clipboard",tabs:s.createElement(n.mg,{tabs:T,setActiveTab:P,activeTab:E}),onClose:C,size:"md"},v)}},15898:(oe,D,e)=>{e.d(D,{uN:()=>c});const s={name:"JSON",exportFormat:"json",formatter:P=>{try{return JSON.stringify(JSON.parse(P),null,4)}catch{return P}}},t={name:"YAML",exportFormat:"yaml"},n={name:"Terraform (HCL)",exportFormat:"hcl"},c={[s.exportFormat]:s,[t.exportFormat]:t,[n.exportFormat]:n},E=[s,t]},98710:(oe,D,e)=>{e.d(D,{w:()=>G,X:()=>Te});var s=e(41407),t=e(39953),n=e(14058),c=e(27366),E=e(82803),P=e(68497),v=e(96227),C=e(36495),N=e(38637),b=e(98632),T=e(9006),V=e(26286),A=e(69865),S=e(12190),k=e(79517),q=e(52106),H=e(26544),U=e(95712),_=e(66793),K=e(98934),le=e(79998),ee=e(86832),me=e(71519),I=e(4919),w=e(9558),$=e(73075),R=e(28833),J=e(97125),re=e(44622),X=e(57721),te=e(79493),o=e(90839),l=e(15032),u=e(61324),a=e(67979);const d=()=>{const r=(0,E.wW)(x),g=()=>window.open("https://github.com/grafana/grafana/issues/42947","_blank");return t.createElement(c.K,{gap:.5},t.createElement("div",{className:r.slashNotAllowed},"Folders with '/' character are not allowed."),t.createElement(A.u,{placement:"top",content:"Link to the Github issue",theme:"info"},t.createElement(S.J,{name:"info-circle",size:"xs",className:r.infoIcon,onClick:g})))},i=r=>r.indexOf("/")!==-1;function m(r){const{value:g}=r,f={warningCondition:L=>i(L),warningComponent:d},y={disallowValues:!0,isAllowedValue:L=>!i(L)};return t.createElement(a.Fz,{showRoot:!1,rootName:"",allowEmpty:!0,initialTitle:g?.title,initialFolderUid:g?.uid,searchQueryType:X.SearchQueryType.AlertFolder,...r,permissionLevel:X.PermissionLevelString.Edit,customAdd:y,folderWarning:f})}const x=r=>({slashNotAllowed:(0,s.css)`
    color: ${r.colors.warning.main};
    font-size: 12px;
    margin-bottom: 2px;
  `,infoIcon:(0,s.css)`
    color: ${r.colors.warning.main};
    font-size: 12px;
    margin-bottom: 2px;
    cursor: pointer;
  `});var F=e(4835);const Q=1e3,h=(r,g)=>{const p=(0,X.useDispatch)();(0,t.useEffect)(()=>{p((0,te.UR)({rulesSourceName:U.GC}))},[p]);const y=(0,H._)(O=>O.rulerRules)[U.GC];return{groupOptions:((0,q.Zo)(U.GC).find(O=>O.name===r)?.groups??[]).map(O=>{const W=z(O);return{label:O.name,value:O.name,description:O.interval??o.EB,isDisabled:g?!1:W,isProvisioned:W}}).sort(ye),loading:y?.loading}},z=r=>r.rules.some(g=>(0,l.Pc)(g.rulerRule)&&!!g.rulerRule.grafana_alert.provenance),ye=(r,g)=>r.label?.localeCompare(g.label??"")||0,Re=(r,g)=>r.label?.toLowerCase().includes(g.toLowerCase());function se({groupfoldersForGrafana:r,enableProvisionedGroups:g}){const{formState:{errors:p},watch:f,setValue:y,control:L}=(0,n.Gc)(),j=(0,E.wW)(ge),B=f("folder"),O=f("group"),{groupOptions:W,loading:M}=h(B?.title??"",g),[Ee,Z]=(0,t.useState)(!1),[ve,ne]=(0,t.useState)(!1),ie=()=>Z(!0),he=()=>ne(!0),Be=ae=>{Ne(),y("folder",ae),Z(!1)},We=(ae,ue)=>{y("group",ae),y("evaluateEvery",ue),ne(!1)},Ne=(0,t.useCallback)(()=>{y("group","")},[y]),Fe=(0,t.useCallback)(async ae=>{const ue=ae?W.filter(Oe=>Re(Oe,ae)):W;return(0,ee.take)(ue,Q)},[W]),be=(0,t.useMemo)(()=>(0,ee.debounce)(Fe,300,{leading:!0}),[Fe]),ce=O?{value:O,label:O}:void 0;return t.createElement("div",{className:j.container},t.createElement("div",null,t.createElement(v.g,{label:t.createElement(C._,{htmlFor:"folder",description:"Select a folder to store your rule."},"Folder"),className:j.formInput,error:p.folder?.message,invalid:!!p.folder?.message,"data-testid":"folder-picker"},t.createElement(c.K,{direction:"row",alignItems:"center"},!Ee&&t.createElement(t.Fragment,null,t.createElement(T.g,{render:({field:{ref:ae,...ue}})=>t.createElement("div",{style:{width:420}},t.createElement(m,{inputId:"folder",...ue,enableReset:!0,onChange:({title:Oe,uid:Ie})=>{ue.onChange({title:Oe,uid:Ie}),Ne()}})),name:"folder",rules:{required:{value:!0,message:"Select a folder"},validate:{pathSeparator:ae=>(0,F.p0)(ae.title)}}}),t.createElement(b.x,{color:"secondary"},"or"),t.createElement(I.zx,{onClick:ie,type:"button",icon:"plus",fill:"outline",variant:"secondary",disabled:!J.contextSrv.hasPermission(X.AccessControlAction.FoldersCreate)},"New folder"))||t.createElement("div",null,"Creating new folder..."))),Ee&&t.createElement(Y,{onCreate:Be,onClose:()=>Z(!1)})),t.createElement("div",null,t.createElement(v.g,{label:"Evaluation group","data-testid":"group-picker",description:"Rules within the same group are evaluated sequentially over the same time interval.",className:j.formInput,error:p.group?.message,invalid:!!p.group?.message},t.createElement(c.K,{direction:"row",alignItems:"center"},t.createElement(T.g,{render:({field:{ref:ae,...ue},fieldState:Oe})=>t.createElement("div",{style:{width:420}},t.createElement(w.qb,{disabled:!B||M,inputId:"group",key:(0,ee.uniqueId)(),...ue,onChange:Ie=>{ue.onChange(Ie.label??"")},isLoading:M,invalid:!!B&&!O&&!!Oe.error,loadOptions:be,cacheOptions:!0,loadingMessage:"Loading groups...",defaultValue:ce,defaultOptions:W,getOptionLabel:Ie=>t.createElement("div",null,t.createElement("span",null,Ie.label),Ie.isProvisioned&&t.createElement(t.Fragment,null," ",t.createElement(u.C0,null))),placeholder:"Select an evaluation group..."})),name:"group",control:L,rules:{required:{value:!0,message:"Must enter a group name"},validate:{pathSeparator:ae=>(0,F.p0)(ae)}}}),t.createElement(b.x,{color:"secondary"},"or"),t.createElement(I.zx,{onClick:he,type:"button",icon:"plus",fill:"outline",variant:"secondary",disabled:!B},"New evaluation group"))),ve&&t.createElement(de,{onCreate:We,onClose:()=>ne(!1),groupfoldersForGrafana:r})))}function Y({onClose:r,onCreate:g}){const p=(0,E.wW)(ge),[f,y]=(0,t.useState)(""),L=async()=>{const B=await(0,re.L6)({title:f});if(!B.uid){R.Z.emit(me.SI.alertError,["Folder could not be created"]);return}const O={title:B.title,uid:B.uid};g(O),R.Z.emit(me.SI.alertSuccess,["Folder Created","OK"])},j=i(f);return t.createElement($.u,{className:p.modal,isOpen:!0,title:"New folder",onDismiss:r,onClickBackdrop:r},t.createElement("div",{className:p.modalTitle},"Create a new folder to store your rule"),t.createElement("form",{onSubmit:L},t.createElement(v.g,{label:t.createElement(C._,{htmlFor:"folder"},"Folder name"),error:"The folder name can't contain slashes",invalid:j},t.createElement(N.I,{autoFocus:!0,id:"folderName",placeholder:"Enter a name",value:f,onChange:B=>y(B.currentTarget.value),className:p.formInput})),t.createElement($.u.ButtonRow,null,t.createElement(I.zx,{variant:"secondary",type:"button",onClick:r},"Cancel"),t.createElement(I.zx,{type:"submit",disabled:!f||j},"Create"))))}function de({onClose:r,onCreate:g,groupfoldersForGrafana:p}){const f=(0,E.wW)(ge),y=()=>{g(ie("group"),ie("evaluateEvery"))},{watch:L}=(0,n.Gc)(),j="eval-every-input",[B,O]=L(["group","folder.title"]),W=(p&&p[O]?.find(he=>he.name===B)?.rules)??[],M=()=>{r()},Ee=(0,n.cI)({defaultValues:{group:"",evaluateEvery:""},mode:"onChange",shouldFocusError:!0}),{register:Z,handleSubmit:ve,formState:ne,getValues:ie}=Ee;return t.createElement($.u,{className:f.modal,isOpen:!0,title:"New evaluation group",onDismiss:M,onClickBackdrop:M},t.createElement("div",{className:f.modalTitle},"Create a new evaluation group to use for this alert rule."),t.createElement(n.RV,{...Ee},t.createElement("form",{onSubmit:ve(()=>y())},t.createElement(v.g,{label:t.createElement(C._,{htmlFor:"group"},"Evaluation group name"),error:ne.errors.group?.message,invalid:!!ne.errors.group},t.createElement(N.I,{className:f.formInput,autoFocus:!0,id:"group",placeholder:"Enter a name",...Z("group",{required:{value:!0,message:"Required."}})})),t.createElement(v.g,{error:ne.errors.evaluateEvery?.message,invalid:!!ne.errors.evaluateEvery,label:t.createElement(C._,{htmlFor:j,description:"How often is the rule evaluated. Applies to every rule within the group."},"Evaluation interval")},t.createElement(N.I,{className:f.formInput,id:j,placeholder:"e.g. 5m",...Z("evaluateEvery",(0,le.MD)(W))})),t.createElement($.u.ButtonRow,null,t.createElement(I.zx,{variant:"secondary",type:"button",onClick:M},"Cancel"),t.createElement(I.zx,{type:"submit",disabled:!ne.isValid},"Create")))))}const ge=r=>({container:(0,s.css)`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    max-width: ${r.breakpoints.values.lg}px;
    justify-content: space-between;
  `,formInput:(0,s.css)`
    flex-grow: 1;
  `,modal:(0,s.css)`
    width: ${r.breakpoints.values.sm}px;
  `,modalTitle:(0,s.css)`
    color: ${r.colors.text.secondary};
    margin-bottom: ${r.spacing(2)};
  `});var pe=e(17330);const Ce=[{value:pe.g0.Alerting,label:"Alerting"},{value:pe.g0.NoData,label:"No Data"},{value:pe.g0.OK,label:"OK"},{value:pe.g0.Error,label:"Error"}],Me=({includeNoData:r,includeError:g,...p})=>{const f=(0,t.useMemo)(()=>r?g?Ce:Ce.filter(y=>y.value!==pe.g0.Error):Ce.filter(y=>y.value!==pe.g0.NoData),[r,g]);return t.createElement(w.Ph,{options:f,...p})};var xe=e(86992),Ae=e(95941);const Te=10,fe=r=>({required:{value:!0,message:"Required."},validate:g=>{if(g==="0")return!0;try{const p=(0,_.nd)(g);if(p===0)return!0;try{const f=(0,_.nd)(r);return p>=f?!0:"For duration must be greater than or equal to the evaluation interval."}catch{return!0}}catch(p){return p instanceof Error?p.message:"Failed to parse duration"}}}),Se=(r,g)=>{const{groupOptions:p}=h(r,!1);return!(0,t.useCallback)(y=>p.some(L=>L.label===y),[p])(g)};function Pe({evaluateEvery:r,setEvaluateEvery:g,enableProvisionedGroups:p}){const f=(0,E.wW)(Le),{watch:y,setValue:L,getValues:j}=(0,n.Gc)(),[B,O]=(0,t.useState)(!1),[W,M]=y(["group","folder.title"]),Z=(0,H._)(ce=>ce.rulerRules)[U.GC],ne=(0,q.Zo)(U.GC).find(ce=>ce.name===M),ie=ne?.groups.find(ce=>ce.name===W),he=Se(M??"",W);(0,t.useEffect)(()=>{!he&&ie?.interval&&g(ie.interval)},[g,he,L,ie]);const Be=(ce=!1)=>{ce||(0,k.PN)(k.z7.leavingRuleGroupEdit),O(!1)},We=()=>O(!0),Ne=Z?.loading||he||!M||!W,Fe={name:M,rulesSource:U.GC,groups:[]},be={name:W,interval:r,rules:[],totals:{}};return t.createElement("div",null,t.createElement(se,{groupfoldersForGrafana:Z?.result,enableProvisionedGroups:p}),M&&B&&t.createElement(le.vq,{namespace:ne??Fe,group:ie??be,onClose:()=>Be(),intervalEditOnly:!0,hideFolder:!0}),M&&W&&t.createElement("div",{className:f.evaluationContainer},t.createElement(c.K,{direction:"column",gap:0},t.createElement("div",{className:f.marginTop},t.createElement(c.K,{direction:"column",gap:1},j("group")&&j("evaluateEvery")&&t.createElement("span",null,"All rules in the selected group are evaluated every ",r,"."," ",!he&&t.createElement(P.h,{name:"pen","aria-label":"Edit",disabled:Ne,onClick:We})))))))}function De({evaluateEvery:r}){const g=(0,E.wW)(Le),{register:p,formState:{errors:f}}=(0,n.Gc)(),y="eval-for-input";return t.createElement(c.K,{direction:"row","justify-content":"flex-start","align-items":"flex-start"},t.createElement(v.g,{label:t.createElement(C._,{htmlFor:"evaluateFor",description:"Period in which an alert rule can be in breach of the condition until the alert rule fires."},"Pending period"),className:g.inlineField,error:f.evaluateFor?.message,invalid:!!f.evaluateFor?.message,validationMessageHorizontalOverflow:!0},t.createElement(N.I,{id:y,width:8,...p("evaluateFor",fe(r))})))}function Ge(){const r="https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rules/rule-evaluation/";return t.createElement(c.K,{direction:"row",gap:.5,alignItems:"baseline"},t.createElement(b.x,{variant:"bodySmall",color:"secondary"},"Define how the alert rule is evaluated."),t.createElement(xe.h,{contentText:"Evaluation groups are containers for evaluating alert and recording rules. An evaluation group defines an evaluation interval - how often a rule is checked. Alert rules within the same evaluation group are evaluated sequentially",externalLink:r,linkText:"Read about evaluation",title:"Evaluation"}))}function G({evaluateEvery:r,setEvaluateEvery:g,existing:p,enableProvisionedGroups:f}){const y=(0,E.wW)(Le),[L,j]=(0,t.useState)(!1),{watch:B,setValue:O}=(0,n.Gc)(),W=B("isPaused");return t.createElement(Ae.z,{stepNo:3,title:"Set evaluation behavior",description:Ge()},t.createElement(c.K,{direction:"column","justify-content":"flex-start","align-items":"flex-start"},t.createElement(Pe,{setEvaluateEvery:g,evaluateEvery:r,enableProvisionedGroups:f}),t.createElement(De,{evaluateEvery:r}),p&&t.createElement(v.g,{htmlFor:"pause-alert-switch"},t.createElement(T.g,{render:()=>t.createElement(c.K,{gap:1,direction:"row",alignItems:"center"},t.createElement(V.r,{id:"pause-alert",onChange:M=>{O("isPaused",M.currentTarget.checked)},value:!!W}),t.createElement("label",{htmlFor:"pause-alert",className:y.switchLabel},"Pause evaluation",t.createElement(A.u,{placement:"top",content:"Turn on to pause evaluation for this alert rule.",theme:"info"},t.createElement(S.J,{tabIndex:0,name:"info-circle",size:"sm",className:y.infoIcon})))),name:"isPaused"}))),t.createElement(K.U,{isCollapsed:!L,onToggle:M=>j(!M),text:"Configure no data and error handling"}),L&&t.createElement(t.Fragment,null,t.createElement(v.g,{htmlFor:"no-data-state-input",label:"Alert state if no data or all values are null"},t.createElement(T.g,{render:({field:{onChange:M,ref:Ee,...Z}})=>t.createElement(Me,{...Z,inputId:"no-data-state-input",width:42,includeNoData:!0,includeError:!1,onChange:ve=>M(ve?.value)}),name:"noDataState"})),t.createElement(v.g,{htmlFor:"exec-err-state-input",label:"Alert state if execution error or timeout"},t.createElement(T.g,{render:({field:{onChange:M,ref:Ee,...Z}})=>t.createElement(Me,{...Z,inputId:"exec-err-state-input",width:42,includeNoData:!1,includeError:!0,onChange:ve=>M(ve?.value)}),name:"execErrState"}))))}const Le=r=>({inlineField:(0,s.css)`
    margin-bottom: 0;
  `,evaluateLabel:(0,s.css)`
    margin-right: ${r.spacing(1)};
  `,evaluationContainer:(0,s.css)`
    color: ${r.colors.text.secondary};
    max-width: ${r.breakpoints.values.sm}px;
    font-size: ${r.typography.size.sm};
  `,intervalChangedLabel:(0,s.css)`
    margin-bottom: ${r.spacing(1)};
  `,warningIcon:(0,s.css)`
    justify-self: center;
    margin-right: ${r.spacing(1)};
    color: ${r.colors.warning.text};
  `,infoIcon:(0,s.css)`
    margin-left: 10px;
  `,warningMessage:(0,s.css)`
    color: ${r.colors.warning.text};
  `,bold:(0,s.css)`
    font-weight: bold;
  `,alignInterval:(0,s.css)`
    margin-top: ${r.spacing(1)};
    margin-left: -${r.spacing(1)};
  `,marginTop:(0,s.css)`
    margin-top: ${r.spacing(1)};
  `,switchLabel:(0,s.css)(`
    color: ${r.colors.text.primary},
    cursor: 'pointer',
    fontSize: ${r.typography.bodySmall.fontSize},
  `)})},89525:(oe,D,e)=>{e.d(D,{CU:()=>H,mg:()=>U});var s=e(41407),t=e(48532),n=e(39953),c=e(14058),E=e(19977),P=e(82803),v=e(87722),C=e(22784),N=e(77804),b=e(4919),T=e(69865),V=e(12190),A=e(84541),S=e(90839),k=e(15032);const q=[{label:"Yaml",value:"yaml"}],H=({onClose:I})=>{const[w,$]=(0,n.useState)("yaml"),{setValue:R}=(0,c.Gc)(),J=(0,P.wW)(me),re=X=>{for(const te in X)R(te,X[te]);I()};return n.createElement(v.d,{title:"Inspect Alert rule",subtitle:n.createElement("div",{className:J.subtitle},n.createElement(U,{tabs:q,setActiveTab:$,activeTab:w})),onClose:I},w==="yaml"&&n.createElement(_,{onSubmit:re}))};function U({tabs:I,activeTab:w,setActiveTab:$}){return n.createElement(C.J,null,I.map((R,J)=>n.createElement(N.O,{key:`${R.value}-${J}`,label:R.label,value:R.value,onChangeTab:()=>$(R.value),active:w===R.value})))}const _=({onSubmit:I})=>{const w=(0,P.wW)(ee),{getValues:$}=(0,c.Gc)(),R=(0,S.yh)($()),[J,re]=(0,n.useState)((0,t.$w)(R)),X=()=>{const te=(0,t.zD)(J),o=$(),l=le(te);I({...o,...l})};return n.createElement(n.Fragment,null,n.createElement("div",{className:w.applyButton},n.createElement(b.zx,{type:"button",onClick:X},"Apply"),n.createElement(T.u,{content:n.createElement(K,null),theme:"info",placement:"left-start",interactive:!0},n.createElement(V.J,{name:"exclamation-triangle",size:"xl"}))),n.createElement("div",{className:w.content},n.createElement(E.Z,{disableWidth:!0},({height:te})=>n.createElement(A.p,{width:"100%",height:te,language:"yaml",value:J,onBlur:re,monacoOptions:{minimap:{enabled:!1}}}))))};function K(){return n.createElement("div",null,"The YAML content in the editor only contains alert rule configuration ",n.createElement("br",null),"To configure Prometheus, you need to provide the rest of the"," ",n.createElement("a",{href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/",target:"_blank",rel:"noreferrer"},"configuration file content."))}function le(I){return(0,k.cG)(I)?(0,S.WL)(I):(0,k.yF)(I)?(0,S.lN)(I):{}}const ee=I=>({content:(0,s.css)`
    flex-grow: 1;
    height: 100%;
    padding-bottom: 16px;
    margin-bottom: ${I.spacing(2)};
  `,applyButton:(0,s.css)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 0;
    margin-bottom: ${I.spacing(2)};
  `}),me=()=>({subtitle:(0,s.css)`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `})},4835:(oe,D,e)=>{e.d(D,{p0:()=>me,Ps:()=>I,_m:()=>w,eW:()=>te,_4:()=>re,Fu:()=>R,Ry:()=>K,Dr:()=>ee,KP:()=>X,Yq:()=>$});var s=e(86832),t=e(65038),n=e(60695),c=e(10694),E=e(34547),P=e(50820),v=e(5026),C=e(89260),N=e(29409),b=e(10235),T=e(16360),V=e(14211);const A=(0,T.Z)(S,(o,l)=>_(o[0])===_(l[0]));function S(o){const l=new V.kJ,u=o.map(a=>a.refId);return l.createNodes(u),o.forEach(a=>{const d=a.refId;((0,C.j)(a.model)&&a.model.type==="math"?k(a.model.expression??""):[a.model.expression]).forEach(x=>{d&&x&&!(d===x)&&l.link(x,d)})}),l}function k(o){const l=new RegExp(/\$\{(?<var>[a-zA-Z0-9_ ]+?)\}/gm),u=new RegExp(/\$(?<var>[a-zA-Z0-9_]+)/gm),a=Array.from(o.matchAll(l)).map(i=>i.groups?.var),d=Array.from(o.matchAll(u)).map(i=>i.groups?.var);return(0,s.compact)((0,s.uniq)([...a,...d]))}const q=(0,s.memoize)(H,(o,l)=>o+U(l));function H(o,l){const u=l.getNode(o);let a=[];function d(i){const m=i.inputEdges;m.length>0?m.forEach(x=>{x.inputNode&&d(x.inputNode)}):a?.push(i)}return d(u),a.map(i=>i.name)}function U(o){return Object.keys(o.nodes).map(l=>{const u=o.nodes[l];let a=u.outputEdges.map(i=>i.outputNode?.name).join(", "),d=u.inputEdges.map(i=>i.inputNode?.name).join(", ");return`${u.name}:${a}:${d}`}).join(" ")}function _(o){return o.map(l=>{const u=(0,C.j)(l.model)?l.model.type:l.queryType;return l.refId+(l.model.expression??"")+u}).join()}function K(o,l,u){return o.map(a=>{if(l===u||!(0,C.j)(a.model))return a;const d=a.model.type==="math",i=a.model.type==="reduce",m=a.model.type==="resample",x=a.model.type==="classic_conditions",F=a.model.type==="threshold";if(d)return{...a,model:{...a.model,expression:le(a.model.expression??"",l,u)}};if(m||i||F){const Q=a.model.expression===l;return{...a,model:{...a.model,expression:Q?u:a.model.expression}}}if(x){const Q=a.model.conditions?.map(h=>({...h,query:{...h.query,params:h.query.params.map(z=>z===l?u:z)}}));return{...a,model:{...a.model,conditions:Q}}}return a})}function le(o,l,u){const a=new RegExp("(\\$"+l+"\\b)|(\\${"+l+"})","gm"),d="${"+u+"}";return o.replace(a,d)}function ee(o,l){return o.find(u=>u.refId===l)!==void 0}function me(o){return o.includes("/")||o.includes("\\")?'Cannot contain "/" or "\\" characters':!0}function I(o){if(o.series.length===0)return;const l=(0,t.xI)(o.series);let u;return l&&(u=new Error("You cannot use time series data as an alert condition, consider adding a reduce expression.")),u}function w(o){if(o.errors?.length)return new Error(o.errors[0].message)}function $(o){const u=(o[0]?.meta?.notices??[]).find(a=>a.severity==="warning")?.text;return u?new Error(u):void 0}function R(o){const l={},u=[N.Us.threshold,N.Us.classic];for(const i of o){if(!(0,C.j)(i.model)||!u.includes(i.model.type)||!Array.isArray(i.model.conditions))continue;const m=i.model.conditions.some(J);i.model.conditions.forEach(x=>{const F=x.evaluator.params,Q=x.query?.params[0]??i.model.expression;if(!Q)return;const h=J(x);try{const z=A(o),ye=q(Q,z);o.filter(se=>ye.includes(se.refId)).forEach(se=>{const Y=se.refId,ge=!!(!(0,C.j)(se?.model)&&Y);Y&&!l[Y]&&(l[Y]={config:{mode:n.H.Absolute,steps:[]},mode:E.i3.Line}),Y&&ge&&!h&&!m?a(Y,F[0]):Y&&ge&&h&&(d(Y,F,x.evaluator.type),l[Y].mode=E.i3.LineAndArea)})}catch(z){console.error("Failed to parse thresholds",z);return}})}function a(i,m){l[i].config.steps.push({value:-1/0,color:"transparent"},{value:m,color:P.config.theme2.colors.error.main})}function d(i,m,x){x===v.$.IsWithinRange&&l[i].config.steps.push({value:-1/0,color:"transparent"},{value:m[0],color:P.config.theme2.colors.error.main},{value:m[1],color:P.config.theme2.colors.error.main},{value:m[1],color:"transparent"}),x===v.$.IsOutsideRange&&l[i].config.steps.push({value:-1/0,color:P.config.theme2.colors.error.main},{value:m[0],color:P.config.theme2.colors.error.main},{value:m[0],color:"transparent"},{value:m[1],color:P.config.theme2.colors.error.main}),l[i].config.steps.sort((F,Q)=>F.value-Q.value),l[i].config.steps=l[i].config.steps.filter(F=>F.value!==void 0)}return l}function J(o){return o.evaluator.type===v.$.IsWithinRange||o.evaluator.type===v.$.IsOutsideRange}function re(o){const l="Failed to fetch data";if(o.state!==c.Gu.Error)return;const u=o.errors;return u?.length?u.map(a=>a.message??l).join(", "):o.error?.message??l}function X(o=""){return o==="recording"?b.$.cloudRecording:b.$.grafana}function te(o,l){const u=l.filter(m=>!(0,C.j)(m.model)).map(m=>m.refId),a=o.filter(m=>!(0,C.j)(m.model)).map(m=>m.refId),[d,i]=(0,s.xor)(a,u);return[d,i]}},79998:(oe,D,e)=>{e.d(D,{vq:()=>l,MD:()=>o});var s=e(41407),t=e(86832),n=e(39953),c=e(14058),E=e(27366),P=e(12608),v=e(82803),C=e(73075),N=e(96227),b=e(36495),T=e(38637),V=e(4919),A=e(90634),S=e(9661),k=e(57721),q=e(26544),H=e(79493),U=e(73895),_=e(95712),K=e(57675),le=e(15032),ee=e(66793),me=e(47224),I=e(32688),w=e(33155);const $=()=>n.createElement(w.b,{severity:"warning",title:"Global evalutation interval limit exceeded"},"A minimum evaluation interval of ",n.createElement("strong",null,I.config.unifiedAlerting.minInterval)," has been configured in Grafana.",n.createElement("br",null),"Please contact the administrator to configure a lower interval.");var R=e(98710);const J=10;function re({message:a,error:d}){return d?n.createElement(P.C,{color:"red",icon:"exclamation-circle",text:"Error",tooltip:a}):n.createElement(P.C,{color:"orange",icon:"exclamation-triangle",text:"Unknown",tooltip:a})}const X=a=>{try{const d=(0,ee.nd)(a);return!(d<R.X*1e3||d%(R.X*1e3)!==0)}catch{return!1}},te=({rulesWithoutRecordingRules:a})=>{const d=(0,v.wW)(u),{watch:i}=(0,c.Gc)(),m=i("groupInterval"),x=!m,F=a.slice().map((h,z)=>({id:z,data:(0,le.qd)(h,m)})).sort((h,z)=>(0,ee.Bg)(h.data.forDuration)-(0,ee.Bg)(z.data.forDuration)),Q=(0,n.useMemo)(()=>[{id:"alertName",label:"Alert",renderCell:({data:{alertName:h}})=>n.createElement(n.Fragment,null,h),size:"330px"},{id:"for",label:"For",renderCell:({data:{forDuration:h}})=>n.createElement(n.Fragment,null,h),size:.5},{id:"numberEvaluations",label:"#Eval",renderCell:({data:{evaluationsToFire:h}})=>x?n.createElement(re,{message:"#Evaluations not available."}):X(m)?h===0?n.createElement(re,{message:"Invalid 'For' value: it should be greater or equal to evaluation interval.",error:!0}):n.createElement(n.Fragment,null,h):n.createElement(re,{message:"Invalid evaluation interval format",error:!0}),size:.4}],[m,x]);return n.createElement("div",{className:d.tableWrapper},n.createElement(me.t,{items:F,cols:Q,pagination:{itemsPerPage:J}}))},o=a=>({required:{value:!0,message:"Required."},validate:d=>{try{const i=(0,ee.nd)(d);return i<R.X*1e3?`Cannot be less than ${R.X} seconds.`:i%(R.X*1e3)!==0?`Must be a multiple of ${R.X} seconds.`:(0,H.iH)(a,d).length===0?!0:"Invalid evaluation interval. Evaluation interval should be smaller or equal to 'For' values for existing rules in this group."}catch(i){return i instanceof Error?i.message:"Failed to parse duration"}}});function l(a){const{namespace:d,group:i,onClose:m,intervalEditOnly:x}=a,F=(0,v.wW)(u),Q=(0,k.useDispatch)(),{loading:h,error:z,dispatched:ye}=(0,q._)(G=>G.updateLotexNamespaceAndGroup)??K.oq,Re=(0,A.iG)(),se=(0,n.useMemo)(()=>({namespaceName:d.name,groupName:i.name,groupInterval:i.interval??""}),[d,i]),Y=(0,_.EG)(d.rulesSource),de=Y===_.GC,ge=de?"Folder":"Namespace";(0,n.useEffect)(()=>{ye&&!h&&!z&&m(!0)},[ye,h,m,z]),(0,S.x)(G=>G.unifiedAlerting.updateLotexNamespaceAndGroup=K.oq);const pe=G=>{Q((0,H.hv)({rulesSourceName:Y,groupName:i.name,newGroupName:G.groupName,namespaceName:d.name,newNamespaceName:G.namespaceName,groupInterval:G.groupInterval||void 0}))},Ce=(0,c.cI)({mode:"onBlur",defaultValues:se,shouldFocusError:!0}),{handleSubmit:Me,register:xe,watch:Ae,formState:{isDirty:Te,errors:fe}}=Ce,Se=()=>{Re.error("There are errors in the form. Correct the errors and retry.")},Pe=(0,t.compact)(i.rules.map(G=>G.rulerRule).filter(G=>!(0,le.yF)(G))),De=Pe.length>0,Ge=x||de?"Edit evaluation group":"Edit namespace or evaluation group";return n.createElement(C.u,{className:F.modal,isOpen:!0,title:Ge,onDismiss:m,onClickBackdrop:m},n.createElement(c.RV,{...Ce},n.createElement("form",{onSubmit:G=>G.preventDefault(),key:JSON.stringify(se)},n.createElement(n.Fragment,null,!a.hideFolder&&n.createElement(N.g,{label:n.createElement(b._,{htmlFor:"namespaceName",description:!de&&"Change the current namespace name. Moving groups between namespaces is not supported"},ge),invalid:!!fe.namespaceName,error:fe.namespaceName?.message},n.createElement(E.K,{gap:1,direction:"row"},n.createElement(T.I,{id:"namespaceName",readOnly:x||de,...xe("namespaceName",{required:"Namespace name is required."}),className:F.formInput}),de&&a.folderUrl&&n.createElement(V.Qj,{href:a.folderUrl,title:"Go to folder",variant:"secondary",icon:"folder-open",target:"_blank"}))),n.createElement(N.g,{label:n.createElement(b._,{htmlFor:"groupName"},"Evaluation group name"),invalid:!!fe.groupName,error:fe.groupName?.message},n.createElement(T.I,{autoFocus:!0,id:"groupName",readOnly:x,...xe("groupName",{required:"Evaluation group name is required."})})),n.createElement(N.g,{label:n.createElement(b._,{htmlFor:"groupInterval",description:"How often is the rule evaluated. Applies to every rule within the group."},n.createElement(E.K,{gap:.5},"Evaluation interval")),invalid:!!fe.groupInterval,error:fe.groupInterval?.message},n.createElement(T.I,{id:"groupInterval",placeholder:"1m",...xe("groupInterval",o(Pe))})),(0,U.f)(Ae("groupInterval")).exceedsLimit&&n.createElement($,null),!De&&n.createElement("div",null,"This group does not contain alert rules."),De&&n.createElement(n.Fragment,null,n.createElement("div",null,"List of rules that belong to this group"),n.createElement("div",{className:F.evalRequiredLabel},"#Eval column represents the number of evaluations needed before alert starts firing."),n.createElement(te,{rulesWithoutRecordingRules:Pe})),n.createElement("div",{className:F.modalButtons},n.createElement(C.u.ButtonRow,null,n.createElement(V.zx,{variant:"secondary",type:"button",disabled:h,onClick:()=>m(!1),fill:"outline"},"Cancel"),n.createElement(V.zx,{type:"button",disabled:!Te||h,onClick:Me(G=>pe(G),Se)},h?"Saving...":"Save")))))))}const u=a=>({modal:(0,s.css)`
    max-width: 560px;
  `,modalButtons:(0,s.css)`
    top: -24px;
    position: relative;
  `,formInput:(0,s.css)`
    flex: 1;
  `,tableWrapper:(0,s.css)`
    margin-top: ${a.spacing(2)};
    margin-bottom: ${a.spacing(2)};
    height: 100%;
  `,evalRequiredLabel:(0,s.css)`
    font-size: ${a.typography.bodySmall.fontSize};
  `})},88617:(oe,D,e)=>{e.d(D,{j:()=>c});var s=e(39953),t=e(53721),n=e(13601);function c(){const{search:E}=(0,t.TH)(),P=(0,s.useMemo)(()=>new URLSearchParams(E),[E]),v=(0,s.useCallback)((C,N)=>{n.E1.partial(C,N)},[]);return[P,v]}},84367:(oe,D,e)=>{e.d(D,{B:()=>n});var s=e(39953),t=e(60703);function n(){return(0,s.useMemo)(()=>(0,t.Rv)(),[])}},89260:(oe,D,e)=>{e.d(D,{j:()=>n});var s=e(92743),t=e(29409);const n=c=>{if(!c)return!1;if((0,s.Pr)(c.datasource))return!0;const E=c;return typeof E.type!="string"?!1:Object.values(t.Us).includes(E.type)}}}]);

//# sourceMappingURL=860.464f9be6ae1e7a67837b.js.map