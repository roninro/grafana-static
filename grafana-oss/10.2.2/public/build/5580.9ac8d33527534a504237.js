"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5580],{51224:(q,B,n)=>{n.d(B,{u:()=>R});var a=n(39953),M=n(84541),K=n(86832),C=n(905);function L(l){const c=l.languages.CompletionItemKind.Function;return[{label:C.AlertmanagerTemplateFunction.toUpper,detail:"function(s string)",kind:c},{label:C.AlertmanagerTemplateFunction.toLower,detail:"function(s string)",kind:c},{label:C.AlertmanagerTemplateFunction.title,documentation:"Capitalizes the first letter of each word",detail:"function(s string)",kind:c},{label:C.AlertmanagerTemplateFunction.join,documentation:{value:"Joins an array of strings using the separator provided."},detail:"function(separator string, s []string)",kind:c},{label:C.AlertmanagerTemplateFunction.match,detail:"function",kind:c},{label:C.AlertmanagerTemplateFunction.safeHtml,detail:"function(pattern, repl, text)",kind:c},{label:C.AlertmanagerTemplateFunction.reReplaceAll,detail:"function(pattern, repl, text)",kind:c},{label:C.AlertmanagerTemplateFunction.stringSlice,detail:"function(s ...string)",kind:c}]}var e=n(15439);function N(l){const c={triggerCharacters:["."],provideCompletionItems(h,d,x){const E=h.getWordUntilPosition(d),z={startLineNumber:d.lineNumber,endLineNumber:d.lineNumber,startColumn:E.startColumn,endColumn:E.endColumn},V=new G(l,z);if(!v(h,d))return V.getSnippetsSuggestions();if(x.triggerKind===l.languages.CompletionTriggerKind.Invoke&&!x.triggerCharacter)return V.getFunctionsSuggestions();const ie=h.getWordUntilPosition({lineNumber:d.lineNumber,column:d.column-1});return V.getTemplateDataSuggestions(ie.word)}};return l.languages.registerCompletionItemProvider("go-template",c)}function v(l,c){const h={startLineNumber:c.lineNumber,endLineNumber:c.lineNumber,startColumn:l.getLineMinColumn(c.lineNumber),endColumn:l.getLineMaxColumn(c.lineNumber)},d='\\{\\{[a-zA-Z0-9._() "]+\\}\\}';return l.findMatches(d,h,!0,!1,null,!0).some(E=>E.range.containsPosition(c))}class G{constructor(c,h){this.monaco=c,this.range=h,this.getSnippetsSuggestions=()=>this.getCompletionsFromDefinitions((0,e.Zn)(this.monaco)),this.getFunctionsSuggestions=()=>this.getCompletionsFromDefinitions(L(this.monaco)),this.getTemplateDataSuggestions=d=>{switch(d){case"":return this.getCompletionsFromDefinitions((0,e.y5)(this.monaco),(0,e.J_)(this.monaco));case"Alerts":return this.getCompletionsFromDefinitions((0,e.WA)(this.monaco));case"GroupLabels":case"CommonLabels":case"CommonAnnotations":case"Labels":case"Annotations":return this.getCompletionsFromDefinitions((0,e.wY)(this.monaco));default:return{suggestions:[]}}},this.getCompletionsFromDefinitions=(...d)=>({suggestions:(0,K.concat)(...d).map(E=>U(E,this.range))})}}function U({label:l,detail:c,documentation:h,kind:d,insertText:x},E){const z=typeof l=="string"?l:l.label,V=typeof l=="string"?{label:l,description:c}:{...l};return V.description??=c,{label:V,kind:d,insertText:x??z,range:E,documentation:h,detail:c}}const H="go-template",k={id:H,extensions:[],aliases:[],mimetypes:[],loader:()=>Promise.resolve().then(n.bind(n,905))},_=(l,c)=>{const{id:h,loader:d}=c;l.languages.getLanguages().find(E=>E.id===h)||(l.languages.register({id:h}),d().then(E=>{l.languages.setMonarchTokensProvider(h,E.language),l.languages.setLanguageConfiguration(h,E.conf)}))},R=l=>{const c=!!l.autoHeight,h=(0,a.useRef)(null),d=x=>{if(c){const E=x.getContentHeight();try{x.layout({height:E,width:NaN})}catch{}}};return(0,a.useEffect)(()=>()=>{h.current?.dispose()},[]),a.createElement(M.p,{showLineNumbers:!0,showMiniMap:!1,...l,onEditorDidMount:d,onBeforeEditorMount:x=>{_(x,k),h.current=N(x)},language:H})}},9853:(q,B,n)=>{n.d(B,{OZ:()=>lt});var a=n(41407),M=n(11830),K=n(73053),C=n(28410);function L(t,o){(0,K.Z)(2,arguments);var m=(0,C.Z)(o);return(0,M.Z)(t,-m)}var e=n(39953),N=n(14058),v=n(53721),G=n(19977),U=n(27366),H=n(4148),P=n(82803),k=n(33155),_=n(2827),R=n(96227),l=n(38637),c=n(22784),h=n(77804),d=n(4919),x=n(4516),E=n(28409),z=n(9661),V=n(57721),Q=n(20584);const ie="/api/alertmanager/grafana/config/api/v1/templates/test",Ae=Q.C.injectEndpoints({endpoints:t=>({previewTemplate:t.mutation({query:({template:o,alerts:m,name:s})=>({url:ie,data:{template:o,alerts:m,name:s},method:"POST"})})})}),{usePreviewTemplateMutation:xe}=Ae;var Te=n(26544),we=n(79493),me=n(95712),Ce=n(76716),Le=n(57675),Ne=n(8822),ue=n(61324),pe=n(69865),ge=n(12190),Re=n(84541),Oe=n(12608),fe=n(68084),De=n(51064),ae=n(73075),$e=n(41245),he=n(84766),Pe=n(37546),ee=n(68694),be=n(10254);function Ie({onSelect:t,isOpen:o,onClose:m}){const s=(0,P.wW)(Fe),[r,b]=(0,e.useState)(),[i,p]=(0,e.useState)(null),{useGetAlertmanagerAlertsQuery:I}=Pe.alertmanagerApi,{currentData:D=[],isFetching:T,isError:j}=I({amSourceName:me.GC,filter:{inhibited:!0,silenced:!0,active:!0}}),[F,W]=(0,e.useState)(""),S=(0,e.useMemo)(()=>{const g={};return!T&&D&&D.forEach(f=>{g[f.labels.alertname]||(g[f.labels.alertname]=[]),g[f.labels.alertname].push(f)}),g},[T,D]),O=(0,e.useCallback)(g=>{b(g),p(null)},[]),w=(0,e.useMemo)(()=>{const g=Object.keys(S).filter(u=>u.toLowerCase().includes(F.toLowerCase())),f={};return g.forEach(u=>{f[u]=S[u]}),f},[S,F]);if(j)return null;const y=Object.keys(w||[]),A=({index:g,style:f})=>{if(!w)return null;const u=y[g],$=u===r;return e.createElement("button",{type:"button",title:u,style:f,className:(0,a.cx)(s.rowButton,{[s.rowOdd]:g%2===1,[s.rowSelected]:$}),onClick:()=>O(u)},e.createElement("div",{className:(0,a.cx)(s.ruleTitle,s.rowButtonTitle)},u),e.createElement("div",{className:s.alertFolder},e.createElement(e.Fragment,null,e.createElement(ge.J,{name:"folder"})," ",w[u][0].labels.grafana_folder??"")))},te=(g,f)=>{const $=g.map(Z=>Z.labels).map(ee.cH),J=(0,be.z)($),X=(0,be.r)((0,ee.cH)(f.labels),J);return X.length?(0,ee.P3)((0,ee.nW)(X)):(0,ee.P3)(f.labels)},ne=({index:g,style:f})=>{const u=(0,e.useMemo)(()=>r?S[r]:[],[]),$=u[g],J=i?.includes($),X=(0,e.useMemo)(()=>te(u,$),[u,$]),re=()=>{if(J&&i){p(i.filter(Z=>Z!==$));return}p([...i||[],$])};return e.createElement("button",{type:"button",style:f,className:(0,a.cx)(s.rowButton,s.instanceButton,{[s.rowOdd]:g%2===1,[s.rowSelected]:J}),onClick:re},e.createElement("div",{className:s.rowButtonTitle,title:$.labels.alertname},e.createElement(pe.u,{placement:"bottom",content:e.createElement("pre",null,JSON.stringify($,null,2)),theme:"info"},e.createElement("div",null,X.map((Z,mt)=>e.createElement(De.V,{key:mt,name:Z,className:s.tag}))))))},Y=()=>{const g=i?.map(f=>({annotations:f.annotations,labels:f.labels,startsAt:f.startsAt,endsAt:f.endsAt}))||[];t(g),le()},le=()=>{b(void 0),p(null),W(""),oe("")},se=()=>{le(),m()},oe=g=>{W(g)};return e.createElement("div",null,e.createElement(ae.u,{title:"Select alert instances",className:s.modal,closeOnEscape:!0,isOpen:o,onDismiss:se,contentClassName:s.modalContent},e.createElement("div",{className:s.container},e.createElement($e.H,{value:F,onChange:oe,title:"Search alert rule",placeholder:"Search alert rule",autoFocus:!0}),e.createElement("div",null,r&&"Select one or more instances from the list below"||""),e.createElement("div",{className:s.column},T&&e.createElement(he.u,{text:"Loading rules...",className:s.loadingPlaceholder}),!T&&e.createElement(G.Z,null,({height:g,width:f})=>e.createElement(fe.t7,{itemSize:50,height:g,width:f,itemCount:y.length},A))),e.createElement("div",{className:s.column},!r&&!T&&e.createElement("div",{className:s.selectedRulePlaceholder},e.createElement("div",null,"Select an alert rule to get a list of available firing instances")),T&&e.createElement(he.u,{text:"Loading rule...",className:s.loadingPlaceholder}),r&&S[r].length&&!T&&e.createElement(G.Z,null,({width:g,height:f})=>e.createElement(fe.t7,{itemSize:32,height:f,width:g,itemCount:S[r].length||0},ne)))),e.createElement(ae.u.ButtonRow,null,e.createElement(d.zx,{type:"button",variant:"secondary",onClick:se},"Cancel"),e.createElement(d.zx,{type:"button",variant:"primary",disabled:!(r&&i),onClick:()=>{r&&i&&Y()}},"Add alert data to payload"))))}const Fe=t=>{const o=(0,d.gN)(t);return{container:(0,a.css)`
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      grid-template-rows: min-content auto;
      gap: ${t.spacing(2)};
      flex: 1;
    `,tag:(0,a.css)`
      margin: 5px;
    `,column:(0,a.css)`
      flex: 1 1 auto;
    `,alertLabels:(0,a.css)`
      overflow-x: auto;
      height: 32px;
    `,ruleTitle:(0,a.css)`
      height: 22px;
      font-weight: ${t.typography.fontWeightBold};
    `,rowButton:(0,a.css)`
      ${o};
      padding: ${t.spacing(.5)};
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
      white-space: nowrap;
      cursor: pointer;
      border: 2px solid transparent;

      &:disabled {
        cursor: not-allowed;
        color: ${t.colors.text.disabled};
      }
    `,rowButtonTitle:(0,a.css)`
      overflow-x: auto;
    `,rowSelected:(0,a.css)`
      border-color: ${t.colors.primary.border};
    `,rowOdd:(0,a.css)`
      background-color: ${t.colors.background.secondary};
    `,instanceButton:(0,a.css)`
      display: flex;
      gap: ${t.spacing(1)};
      justify-content: space-between;
      align-items: center;
    `,loadingPlaceholder:(0,a.css)`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,selectedRulePlaceholder:(0,a.css)`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-weight: ${t.typography.fontWeightBold};
    `,modal:(0,a.css)`
      height: 100%;
    `,modalContent:(0,a.css)`
      flex: 1;
      display: flex;
      flex-direction: column;
    `,modalAlert:(0,a.css)`
      flex-grow: 0;
    `,warnIcon:(0,a.css)`
      fill: ${t.colors.warning.main};
    `,labels:(0,a.css)`
      justify-content: flex-start;
    `,alertFolder:(0,a.css)`
      height: 20px;
      font-size: ${t.typography.bodySmall.fontSize};
      color: ${t.colors.text.secondary};
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      column-gap: ${t.spacing(1)};
      align-items: center;
    `}},We=[{name:"Receiver",type:"string",notes:"Name of the contact point that the notification is being sent to."},{name:"Status",type:"string",notes:"firing if at least one alert is firing, otherwise resolved"},{name:"Alerts",type:"[]Alert",notes:"List of alert objects that are included in this notification."},{name:"Alerts.Firing",type:"[]Alert",notes:"List of firing alerts"},{name:"Alerts.Resolved",type:"[]Alert",notes:"List of resolved alerts"},{name:"GroupLabels",type:"KeyValue",notes:"Labels these alerts were grouped by."},{name:"CommonLabels",type:"KeyValue",notes:"Labels common to all the alerts included in this notification."},{name:"CommonAnnotations",type:"KeyValue",notes:"Annotations common to all the alerts included in this notification."},{name:"ExternalURL",type:"string",notes:"Back link to the Grafana that sent the notification."}],Ke=[{name:"Labels",type:"KeyValue",notes:"Set of labels attached to the alert."},{name:"Annotations",type:"KeyValue",notes:"Set of annotations attached to the alert."},{name:"StartsAt",type:"time.Time",notes:"Time the alert started firing."},{name:"EndsAt",type:"time.Time",notes:"Time the alert ends firing."}],Ve=[{name:"Status",type:"string",notes:"firing or resolved."},{name:"Labels",type:"KeyValue",notes:"Set of labels attached to the alert."},{name:"Annotations",type:"KeyValue",notes:"Set of annotations attached to the alert."},{name:"Values",type:"KeyValue",notes:"The values of all instant queries, reduce and math expressions, and classic conditions for the alert. It does not contain time series data."},{name:"StartsAt",type:"time.Time",notes:"Time the alert started firing."},{name:"EndsAt",type:"time.Time",notes:"Only set if the end time of an alert is known. Otherwise set to a configurable timeout period from the time since the last alert was received."},{name:"GeneratorURL",type:"string",notes:"A back link to Grafana or external Alertmanager."},{name:"SilenceURL",type:"string",notes:"Link to Grafana silence for with labels for this alert pre-filled. Only for Grafana managed alerts."},{name:"DashboardURL",type:"string",notes:"Link to Grafana dashboard, if alert rule belongs to one. Only for Grafana managed alerts."},{name:"PanelURL",type:"string",notes:"Link to Grafana dashboard panel, if alert rule belongs to one. Only for Grafana managed alerts."},{name:"Fingerprint",type:"string",notes:"Fingerprint that can be used to identify the alert."},{name:"ValueString",type:"string",notes:"String that contains the labels and value of each reduced expression in the alert."}],Be=[{name:"SortedPairs",returns:"KeyValue",notes:"Returns sorted list of key & value string pairs"},{name:"Remove",args:"[]string",returns:"KeyValue",notes:"Returns a copy of the Key/Value map without the given keys."},{name:"Names",returns:"[]string",notes:"List of label names"},{name:"Values",returns:"[]string",notes:"List of label values"}],Ge=`{
  "summary": "alert summary",
  "description": "alert description"
}
`;var ye=n(44351);function Me(){const t=(0,P.wW)(Ue),o=e.createElement(ce,{caption:e.createElement("h4",{className:t.header},"Alert template data ",e.createElement("span",null,"Available only when in the context of an Alert (e.g. inside .Alerts loop)")),dataItems:Ve});return e.createElement(U.K,{gap:2,flexGrow:1},e.createElement(ce,{caption:e.createElement("h4",{className:t.header},"Template Data"),dataItems:We,typeRenderer:m=>m==="[]Alert"?e.createElement(ye.z,{content:o},e.createElement("div",{className:t.interactiveType},m)):m==="KeyValue"?e.createElement(ye.z,{content:e.createElement(ze,null)},e.createElement("div",{className:t.interactiveType},m)):m}))}const Ue=t=>({header:(0,a.css)`
    color: ${t.colors.text.primary};

    span {
      color: ${t.colors.text.secondary};
      font-size: ${t.typography.bodySmall.fontSize};
    }
  `,interactiveType:(0,a.css)`
    color: ${t.colors.text.link};
  `});function ce({dataItems:t,caption:o,typeRenderer:m}){const s=(0,P.wW)(ve);return e.createElement("table",{className:s.table},e.createElement("caption",null,o),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Type"),e.createElement("th",null,"Notes"))),e.createElement("tbody",null,t.map(({name:r,type:b,notes:i},p)=>e.createElement("tr",{key:p},e.createElement("td",null,r),e.createElement("td",null,m?m(b):b),e.createElement("td",null,i)))))}function ze(){const t=(0,P.wW)(ve);return e.createElement("div",null,"KeyValue is a set of key/value string pairs that represent labels and annotations.",e.createElement("pre",null,e.createElement("code",null,Ge)),e.createElement("table",{className:t.table},e.createElement("caption",null,"Key-value methods"),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Arguments"),e.createElement("th",null,"Returns"),e.createElement("th",null,"Notes"))),e.createElement("tbody",null,Be.map(({name:o,args:m,returns:s,notes:r})=>e.createElement("tr",{key:o},e.createElement("td",null,o),e.createElement("td",null,m),e.createElement("td",null,s),e.createElement("td",null,r))))))}const ve=t=>({table:(0,a.css)`
    border-collapse: collapse;
    width: 100%;

    caption {
      caption-side: top;
    }

    td,
    th {
      padding: ${t.spacing(1,1)};
    }

    thead {
      font-weight: ${t.typography.fontWeightBold};
    }

    tbody tr:nth-child(2n + 1) {
      background-color: ${t.colors.background.secondary};
    }

    tbody td:nth-child(1) {
      font-weight: ${t.typography.fontWeightBold};
    }

    tbody td:nth-child(2) {
      font-style: italic;
    }
  `});var je=n(4236),ke=n(20454),Je=n(28894),Ze=n(34685);const He={annotations:[{key:"",value:""}],labels:[{key:"",value:""}],status:"firing"},Qe=({isOpen:t,onDismiss:o,onAccept:m})=>{const s=(0,P.wW)(Ye),[r,b]=(0,e.useState)([]),i=(0,N.cI)({defaultValues:He,mode:"onBlur"}),p=i.watch("annotations"),I=i.watch("labels"),[D,T]=(0,e.useState)("firing"),j=()=>{const O={annotations:p.filter(({key:w,value:y})=>!!w&&!!y).reduce((w,{key:y,value:A})=>({...w,[y]:A}),{}),labels:I.filter(({key:w,value:y})=>!!w&&!!y).reduce((w,{key:y,value:A})=>({...w,[y]:A}),{}),startsAt:"2023-04-01T00:00:00Z",endsAt:D==="firing"?(0,M.Z)(new Date,1).toISOString():L(new Date,1).toISOString()};b(w=>[...w,O]),i.reset()},F=()=>{m(r),b([]),i.reset(),T("firing")},W=()=>{const O=I.some(y=>y.key!==""&&y.value!==""),w=p.some(y=>y.key!==""&&y.value!=="");return O||w},S=[{label:"Firing",value:"firing"},{label:"Resolved",value:"resolved"}];return e.createElement(ae.u,{onDismiss:o,isOpen:t,title:"Add custom alerts"},e.createElement(N.RV,{...i},e.createElement("form",{onSubmit:O=>{O.preventDefault(),O.stopPropagation(),i.reset(),T("firing")}},e.createElement(e.Fragment,null,e.createElement(je.Z,null,e.createElement(U.K,{direction:"column",gap:1},e.createElement("div",{className:s.section},e.createElement(Je.Z,null)),e.createElement("div",{className:s.section},e.createElement(Ze.Z,null)),e.createElement("div",{className:s.flexWrapper},e.createElement(ke.S,{value:D,options:S,onChange:O=>T(O)}),e.createElement(d.zx,{onClick:j,className:s.onAddButton,icon:"plus-circle",type:"button",variant:"secondary",disabled:!W()},"Add alert data"))))),e.createElement("div",{className:s.onSubmitWrapper}),r.length>0&&e.createElement(U.K,{direction:"column",gap:1},e.createElement("h5",null," Review alert data to add to the payload:"),e.createElement("pre",{className:s.result,"data-testid":"payloadJSON"},JSON.stringify(r,null,2))),e.createElement("div",{className:s.onSubmitWrapper},e.createElement(ae.u.ButtonRow,null,e.createElement(d.zx,{onClick:F,disabled:r.length===0,className:s.onSubmitButton},"Add alert data to payload"))))))},Ye=t=>({section:(0,a.css)`
    margin-bottom: ${t.spacing(2)};
  `,onAddButton:(0,a.css)`
    flex: none;
    width: fit-content;
    padding-right: ${t.spacing(1)};
    margin-left: auto;
  `,flexWrapper:(0,a.css)`
    display: flex;
    flex-direction: row,
    justify-content: space-between;
  `,onSubmitWrapper:(0,a.css)`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
  `,onSubmitButton:(0,a.css)`
    margin-left: ${t.spacing(2)};
  `,result:(0,a.css)`
    width: 570px;
    height: 363px;
  `}),Xe="Reset to default";function qe({payload:t,setPayload:o,defaultPayload:m,setPayloadFormatError:s,payloadFormatError:r,onPayloadError:b}){const i=(0,P.wW)(Ee),p=()=>{o(m)},[I,D]=(0,e.useState)(!1),T=()=>{D(!1)},j=r!==null,F=()=>{try{const A=JSON.parse(t);JSON.stringify([...A]),s(null)}catch(A){throw s(A instanceof Error?A.message:"Invalid JSON."),b(),A}},W=()=>{try{F(),D(!0)}catch{}},S=()=>{try{F(),y(!0)}catch{}},O=A=>{T(),y(!1),o(te=>{const ne=JSON.parse(te);return JSON.stringify([...ne,...A],void 0,2)})},[w,y]=(0,e.useState)(!1);return e.createElement("div",{className:i.wrapper},e.createElement("div",{className:i.editor},e.createElement("div",{className:i.title},"Payload data",e.createElement(pe.u,{placement:"top",content:e.createElement(_e,null),theme:"info"},e.createElement(ge.J,{name:"info-circle",className:i.tooltip,size:"xl"}))),e.createElement(G.Z,{disableHeight:!0},({width:A})=>e.createElement("div",{className:i.editorWrapper},e.createElement(Re.p,{width:A,height:362,language:"json",showLineNumbers:!0,showMiniMap:!1,value:t,readOnly:!1,onBlur:o}))),e.createElement("div",{className:i.buttonsWrapper},e.createElement(d.zx,{type:"button",variant:"secondary",className:i.button,icon:"bell",disabled:j,onClick:S},"Select alert instances"),e.createElement(d.zx,{onClick:W,className:i.button,icon:"plus-circle",type:"button",variant:"secondary",disabled:j},"Add custom alerts"),e.createElement(d.zx,{onClick:p,className:i.button,icon:"arrow-up",type:"button",variant:"destructive"},Xe),r!==null&&e.createElement(Oe.C,{color:"orange",icon:"exclamation-triangle",text:"JSON Error",tooltip:"Fix errors in payload, and click Refresh preview button"}))),e.createElement(Qe,{isOpen:I,onDismiss:T,onAccept:O}),e.createElement(Ie,{onSelect:O,isOpen:w,onClose:()=>y(!1)}))}const _e=()=>{const t=(0,P.wW)(Ee);return e.createElement(ce,{caption:e.createElement("h4",{className:t.templateDataDocsHeader},"Alert template data ",e.createElement("span",null,"This is the list of alert data fields used in the preview.")),dataItems:Ke})},Ee=t=>({jsonEditor:(0,a.css)`
    width: 100%;
    height: 100%;
  `,buttonsWrapper:(0,a.css)`
    margin-top: ${t.spacing(1)};
    display: flex;
    flex-wrap: wrap;
  `,button:(0,a.css)`
    flex: none;
    width: fit-content;
    padding-right: ${t.spacing(1)};
    margin-right: ${t.spacing(1)};
    margin-bottom: ${t.spacing(1)};
  `,title:(0,a.css)`
    font-weight: ${t.typography.fontWeightBold};
    heigth: 41px;
    padding-top: 10px;
    padding-left: ${t.spacing(2)};
    margin-top: 19px;
  `,wrapper:(0,a.css)`
    flex: 1;
    min-width: 450px;
  `,tooltip:(0,a.css)`
    padding-left: ${t.spacing(1)};
  `,editorWrapper:(0,a.css)`
    width: min-content;
    padding-top: 7px;
  `,editor:(0,a.css)`
    display: flex;
    flex-direction: column;
    margin-top: ${t.spacing(-1)};
  `,templateDataDocsHeader:(0,a.css)`
    color: ${t.colors.text.primary};

    span {
      color: ${t.colors.text.secondary};
      font-size: ${t.typography.bodySmall.fontSize};
    }
  `});var et=n(51224),tt=n(15439);const nt=Object.freeze({name:"",content:""}),at=t=>t.pathname.endsWith("/duplicate"),Se=`[
  {
    "annotations": {
      "summary": "Instance instance1 has been down for more than 5 minutes"
    },
    "labels": {
      "instance": "instance1"
    },
    "startsAt": "${L(new Date,1).toISOString()}"
  }]
`,lt=({existing:t,alertManagerSourceName:o,config:m,provenance:s})=>{const r=(0,P.wW)(de),b=(0,V.useDispatch)();(0,z.x)(u=>u.unifiedAlerting.saveAMConfig=Le.oq);const{loading:i,error:p}=(0,Te._)(u=>u.saveAMConfig),I=(0,v.TH)(),D=at(I),[T,j]=(0,e.useState)(Se),[F,W]=(0,e.useState)(null),[S,O]=(0,e.useState)("content"),w=()=>O("preview"),y=u=>{const $=(0,Ne.Z)(u.name,u.content),J={...m.template_files,[u.name]:$};t&&t.name!==u.name&&delete J[t.name];const X=[...(m.alertmanager_config.templates??[]).filter(Z=>Z!==t?.name),u.name],re={template_files:J,alertmanager_config:{...m.alertmanager_config,templates:X}};b((0,we.mM)({alertManagerSourceName:o,newConfig:re,oldConfig:m,successMessage:"Template saved.",redirectPath:"/alerting/notifications"}))},A=(0,N.cI)({mode:"onSubmit",defaultValues:t??nt}),{handleSubmit:te,register:ne,formState:{errors:Y},getValues:le,setValue:se,watch:oe}=A,g=u=>!m.template_files[u]||t?.name===u?!0:"Another template with this name already exists.",f=o===me.GC;return e.createElement(N.RV,{...A},e.createElement("form",{onSubmit:te(y)},e.createElement("h4",null,t&&!D?"Edit notification template":"Create notification template"),p&&e.createElement(k.b,{severity:"error",title:"Error saving template"},p.message||(0,H.kW)(p)&&p.data?.message||String(p)),s&&e.createElement(ue.Xq,{resource:ue.Uv.Template}),e.createElement(_.C,{disabled:!!s},e.createElement(R.g,{label:"Template name",error:Y?.name?.message,invalid:!!Y.name?.message,required:!0},e.createElement(l.I,{...ne("name",{required:{value:!0,message:"Required."},validate:{nameIsUnique:g}}),placeholder:"Give your template a name",width:42,autoFocus:!0})),e.createElement(st,null),e.createElement("div",{className:r.editorsWrapper},e.createElement("div",{className:r.contentContainer},e.createElement(c.J,null,e.createElement(h.O,{label:"Content",active:S==="content",onChangeTab:()=>O("content")}),f&&e.createElement(h.O,{label:"Preview",active:S==="preview",onChangeTab:()=>O("preview")})),e.createElement("div",{className:r.contentContainerEditor},e.createElement(G.Z,null,({width:u})=>e.createElement(e.Fragment,null,S==="content"?e.createElement("div",null,e.createElement(R.g,{error:Y?.content?.message,invalid:!!Y.content?.message,required:!0},e.createElement("div",{className:r.editWrapper},e.createElement(et.u,{value:le("content"),width:u,height:363,onBlur:$=>se("content",$)}))),e.createElement("div",{className:r.buttons},i&&e.createElement(d.zx,{disabled:!0,icon:"fa fa-spinner",variant:"primary"},"Saving..."),!i&&e.createElement(d.zx,{type:"submit",variant:"primary"},"Save template"),e.createElement(d.Qj,{disabled:i,href:(0,Ce.eQ)("alerting/notifications",o),variant:"secondary",type:"button"},"Cancel"))):e.createElement(dt,{width:u,payload:T,templateName:oe("name"),setPayloadFormatError:W,payloadFormatError:F}))))),f&&e.createElement(qe,{payload:T,setPayload:j,defaultPayload:Se,setPayloadFormatError:W,payloadFormatError:F,onPayloadError:w}))),e.createElement(x.s,{label:"Data cheat sheet",isOpen:!1,className:r.collapsableSection},e.createElement(Me,null))))};function st(){const t=(0,P.wW)(de);return e.createElement(k.b,{title:"Templating guideline",severity:"info"},e.createElement(U.K,{direction:"row"},e.createElement("div",null,"Grafana uses Go templating language to create notification messages.",e.createElement("br",null),"To find out more about templating please visit our documentation."),e.createElement("div",null,e.createElement(d.Qj,{href:"https://grafana.com/docs/grafana/latest/alerting/manage-notifications/template-notifications/",target:"_blank",icon:"external-link-alt",variant:"secondary"},"Templating documentation"))),e.createElement("div",{className:t.snippets},"To make templating easier, we provide a few snippets in the content editor to help you speed up your workflow.",e.createElement("div",{className:t.code},Object.values(tt.hn).map(o=>o.label).join(", "))))}function ot(t){const o=t.filter(r=>r.text.trim().length>0),m=o.length>1,s=r=>{const b=`Preview for ${r.name}:`,i="=".repeat(b.length).concat(">"),p="<".concat("=".repeat(b.length));return m?`${b}
${i}${r.text}${p}
`:`${i}${r.text}${p}
`};return o.map(r=>s(r)).join(`
`)}function rt(t){return t.map(o=>o.name?`ERROR in ${o.name}:
`.concat(`${o.kind}
${o.message}
`):`ERROR:
${o.kind}
${o.message}
`).join(`
`)}const it="Preview request failed. Check if the payload data has the correct structure.";function ct(t,o,m){const s=t?it:void 0,r=t||!!o,b=o||s,i=m?.results,p=m?.errors,I=i?ot(i):"",D=p?rt(p):"";return r?b:`${I}
${D}`}function dt({payload:t,templateName:o,payloadFormatError:m,setPayloadFormatError:s,width:r}){const b=(0,P.wW)(de),{watch:i}=(0,N.Gc)(),p=i("content"),[I,{data:D,isError:T,isLoading:j}]=xe(),F=ct(T,m,D),W=(0,e.useCallback)(()=>{try{const S=JSON.parse(t);JSON.stringify([...S]),I({template:p,alerts:S,name:o}),s(null)}catch(S){s(S instanceof Error?S.message:"Invalid JSON.")}},[p,o,t,s,I]);return(0,e.useEffect)(()=>W(),[W]),e.createElement("div",{style:{width:`${r}px`},className:b.preview.wrapper},j&&e.createElement(e.Fragment,null,e.createElement(E.$,{inline:!0})," Loading preview..."),e.createElement("pre",{className:b.preview.result,"data-testid":"payloadJSON"},F),e.createElement(d.zx,{onClick:W,className:b.preview.button,icon:"arrow-up",type:"button",variant:"secondary"},"Refresh preview"))}const de=t=>({contentContainer:(0,a.css)`
    flex: 1;
    margin-bottom: ${t.spacing(6)};
  `,contentContainerEditor:(0,a.css)`
      flex:1;
      display: flex;
      padding-top: 10px;
      gap: ${t.spacing(2)};
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
      ${t.breakpoints.up("xxl")} {
        flex - wrap: nowrap;
    }
      min-width: 450px;
      height: 363px;
      `,snippets:(0,a.css)`
    margin-top: ${t.spacing(2)};
    font-size: ${t.typography.bodySmall.fontSize};
  `,code:(0,a.css)`
    color: ${t.colors.text.secondary};
    font-weight: ${t.typography.fontWeightBold};
  `,buttons:(0,a.css)`
    display: flex;
    & > * + * {
      margin-left: ${t.spacing(1)};
    }
    margin-top: -7px;
  `,textarea:(0,a.css)`
    max-width: 758px;
  `,editWrapper:(0,a.css)`
      display: flex;
      width: 100%
      heigth:100%;
      position: relative;
      `,toggle:(0,a.css)`
      color: theme.colors.text.secondary,
      marginRight: ${t.spacing(1)}`,preview:{wrapper:(0,a.css)`
      display: flex;
      width: 100%
      heigth:100%;
      position: relative;
      flex-direction: column;
      `,result:(0,a.css)`
      width: 100%;
      height: 363px;
    `,button:(0,a.css)`
      flex: none;
      width: fit-content;
      margin-top: -6px;
    `},collapsableSection:(0,a.css)`
    width: fit-content;
  `,editorsWrapper:(0,a.css)`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: ${t.spacing(1)};
  `})},15439:(q,B,n)=>{n.d(B,{J_:()=>U,WA:()=>H,y5:()=>G,wY:()=>P,Zn:()=>_,hn:()=>k});const a=`
{{ range .Alerts }}
  Status: {{ .Status }}
  Starts at: {{ .StartsAt }}
{{ end }}
`,M=`
[{{.Status}}] {{ .Labels.alertname }}

Labels:
{{ range .Labels.SortedPairs }}
  {{ .Name }}: {{ .Value }}
{{ end }}

{{ if gt (len .Annotations) 0 }}
Annotations:
{{ range .Annotations.SortedPairs }}
  {{ .Name }}: {{ .Value }}
{{ end }}
{{ end }}

{{ if gt (len .SilenceURL ) 0 }}
  Silence alert: {{ .SilenceURL }}
{{ end }}
{{ if gt (len .DashboardURL ) 0 }}
  Go to dashboard: {{ .DashboardURL }}
{{ end }}
`,K=v("GroupLabels.SortedPairs"),C=v("CommonLabels.SortedPairs"),L=v("CommonAnnotations.SortedPairs"),e=v("Labels.SortedPairs"),N=v("Annotations.SortedPairs");function v(R){return`
{{ range .${R} }}
  {{ .Name }} = {{ .Value }}
{{ end }}`}function G(R){const l=R.languages.CompletionItemKind.Field;return[{label:"Alerts",kind:l,detail:"Alert[]",documentation:{value:"An Array containing all alerts"}},{label:"Receiver",kind:l,detail:"string"},{label:"Status",kind:l,detail:"string"},{label:"GroupLabels",kind:l,detail:"[]KeyValue"},{label:"CommonLabels",kind:l,detail:"[]KeyValue"},{label:"CommonAnnotations",kind:l,detail:"[]KeyValue"},{label:"ExternalURL",kind:l,detail:"string"}]}function U(R){const l=R.languages.CompletionItemKind.Field;return[{label:{label:"Status",detail:"(Alert)",description:"string"},kind:l,detail:"string",documentation:{value:"Status of the alert. It can be `firing` or `resolved`"}},{label:{label:"Labels",detail:"(Alert)"},kind:l,detail:"[]KeyValue",documentation:{value:"A set of labels attached to the alert."}},{label:{label:"Annotations",detail:"(Alert)"},kind:l,detail:"[]KeyValue",documentation:"A set of annotations attached to the alert."},{label:{label:"StartsAt",detail:"(Alert)"},kind:l,detail:"time.Time",documentation:"Time the alert started firing."},{label:{label:"EndsAt",detail:"(Alert)"},kind:l,detail:"time.Time",documentation:"Only set if the end time of an alert is known. Otherwise set to a configurable timeout period from the time since the last alert was received."},{label:{label:"GeneratorURL",detail:"(Alert)"},kind:l,detail:"string",documentation:"Back link to Grafana or external Alertmanager."},{label:{label:"SilenceURL",detail:"(Alert)"},kind:l,detail:"string",documentation:"Link to Grafana silence for with labels for this alert pre-filled. Only for Grafana managed alerts."},{label:{label:"DashboardURL",detail:"(Alert)"},kind:l,detail:"string",documentation:"Link to Grafana dashboard, if alert rule belongs to one. Only for Grafana managed alerts."},{label:{label:"PanelURL",detail:"(Alert)"},kind:l,detail:"string",documentation:"Link to Grafana dashboard panel, if alert rule belongs to one. Only for Grafana managed alerts."},{label:{label:"Fingerprint",detail:"(Alert)"},kind:l,detail:"string",documentation:"Fingerprint that can be used to identify the alert."},{label:{label:"ValueString",detail:"(Alert)"},kind:l,detail:"string",documentation:"String that contains labels and values of each reduced expression in the alert."}]}function H(R){const l=R.languages.CompletionItemKind.Field;return[{label:"Firing",kind:l,detail:"Alert[]"},{label:"Resolved",kind:l,detail:"Alert[]"}]}function P(R){const l=R.languages.CompletionItemKind.Field;return[{label:"SortedPairs",kind:l,detail:"[]KeyValue"},{label:"Names",kind:l,detail:"[]string"},{label:"Values",kind:l,detail:"[]string"},{label:"Remove",detail:"KeyValue[] function(keys []string)",kind:R.languages.CompletionItemKind.Method}]}const k={alerts:{label:"alertsloop",description:"Renders a loop through alerts",snippet:a},alertDetails:{label:"alertdetails",description:"Renders all information available about the alert",snippet:M},groupLabels:{label:"grouplabelsloop",description:"Renders a loop through group labels",snippet:K},commonLabels:{label:"commonlabelsloop",description:"Renders a loop through common labels",snippet:C},commonAnnotations:{label:"commonannotationsloop",description:"Renders a loop through common annotations",snippet:L},labels:{label:"labelsloop",description:"Renders a loop through labels",snippet:e},annotations:{label:"annotationsloop",description:"Renders a loop through annotations",snippet:N}};function _(R){const l=R.languages.CompletionItemKind.Snippet,c=R.languages.CompletionItemInsertTextRule.InsertAsSnippet,{alerts:h,alertDetails:d,groupLabels:x,commonLabels:E,commonAnnotations:z,labels:V,annotations:Q}=k;return[{label:h.label,documentation:h.description,kind:l,insertText:h.snippet,insertTextRules:c},{label:{label:d.label,detail:"(Alert)"},documentation:d.description,kind:l,insertText:d.snippet,insertTextRules:c},{label:x.label,documentation:x.description,kind:l,insertText:x.snippet,insertTextRules:c},{label:E.label,documentation:E.description,kind:l,insertText:E.snippet,insertTextRules:c},{label:z.label,documentation:z.description,kind:l,insertText:z.snippet,insertTextRules:c},{label:{label:V.label,detail:"(Alert)"},documentation:V.description,kind:l,insertText:V.snippet,insertTextRules:c},{label:{label:Q.label,detail:"(Alert)"},documentation:Q.description,kind:l,insertText:Q.snippet,insertTextRules:c}]}},10254:(q,B,n)=>{n.d(B,{r:()=>K,z:()=>C});var a=n(86832),M=n.n(a);function K(L,e){return L.filter(N=>!e.find(v=>JSON.stringify(v)===JSON.stringify(N)))}function C(L){const e=L.flatMap(v=>v);return(0,a.uniqBy)(e.filter(v=>e.filter(U=>(0,a.isEqual)(v,U)).length===Object.keys(L).length),v=>JSON.stringify(v))}},72401:(q,B,n)=>{n.d(B,{W:()=>M});var a=n(37546);function M(K,C){const L=a.alertmanagerApi.endpoints.getAlertmanagerConfiguration.useQuery(K??"",{...C,skip:!K});return{...L,error:L.error}}},8822:(q,B,n)=>{n.d(B,{M:()=>C,Z:()=>K});var a=n(86832),M=n.n(a);function K(L,e){let N=e.trim();if(!N.match(/\{\{\s*define/)){const v=N.split(`
`).map(G=>"  "+G).join(`
`);N=`{{ define "${L}" }}
${v}
{{ end }}`}return N}function C(L){const e=(N,v)=>`{{ define "${v}_NEW_${(0,a.now)()}" }}`;return L.replace(/\{\{\s*define\s*\"(?<defineName>.*)\"\s*\}\}/g,e)}}}]);

//# sourceMappingURL=5580.9ac8d33527534a504237.js.map