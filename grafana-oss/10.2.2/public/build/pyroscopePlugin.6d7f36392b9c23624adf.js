"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8693],{31479:(j,v,o)=>{o.r(v),o.d(v,{plugin:()=>je});var x=o(54721),l=o(39953),L=o(3782),y=o(3587),h=o(73201),J=o(50820);const X=e=>{const{options:t,onOptionsChange:a}=e;return l.createElement(l.Fragment,null,l.createElement(L.E,{defaultUrl:"http://localhost:4040",dataSourceConfig:t,showAccessOptions:!1,onChange:a,secureSocksDSProxyEnabled:J.config.secureSocksDSProxyEnabled}),l.createElement("h3",{className:"page-heading"},"Querying"),l.createElement("div",{className:"gf-form-group"},l.createElement("div",{className:"gf-form-inline"},l.createElement("div",{className:"gf-form"},l.createElement(y.LegacyForms.FormField,{label:"Minimal step",labelWidth:13,inputEl:l.createElement(y.LegacyForms.Input,{className:"width-6",value:t.jsonData.minStep,spellCheck:!1,placeholder:"15s",onChange:n=>{a({...t,jsonData:{...t.jsonData,minStep:n.currentTarget.value}})},validationEvents:{[h.JU.onBlur]:[(0,h.FE)(/^$|^\d+(ms|[Mwdhmsy])$/,"Value is not valid, you can use number with time unit specifier: y, M, w, d, h, m, s")]}}),tooltip:"Minimal step used for metric query. Should be the same or higher as the scrape interval setting in the Pyroscope database."})))))};var Y=o(89162),k=o.n(Y),O=o(20653),F=o(84766),q=o(10963),_=o.n(q),E=o(63302),V=o(96083),ee=o(92743),te=o(79059),z=o(63163),T=o(22605),C=o(71476),ae=o(95405),le=o(6278),N=o(74661),I=o(69171),A=o(9558),ne=o(52895);function M(e){const t=re(e.profileTypes);return l.createElement(ne.v,{placeholder:e.placeholder,separator:"-",displayAllSelectedLevels:!0,initialValue:e.initialProfileTypeId,allowCustomValue:!0,onSelect:e.onChange,options:t,changeOnSelect:!1})}function re(e){return(0,l.useMemo)(()=>{if(!e)return[];let t=new Map;for(let a of e){let n=[];a.id.indexOf(":")>-1&&(n=a.id.split(":"));const[r,i]=n;t.has(r)||t.set(r,{label:r,value:r,items:[]}),t.get(r)?.items.push({label:i,value:a.id})}return Array.from(t.values())},[e])}function B(e){const[t,a]=(0,l.useState)();return(0,l.useEffect)(()=>{(async()=>{const n=await e.getProfileTypes();a(n)})()},[e]),t}function oe(e){return l.createElement(l.Fragment,null,l.createElement(N.Z,null,l.createElement(I._,{label:"Query type",labelWidth:20,tooltip:l.createElement("div",null,"The Prometheus data source plugin provides the following query types for template variables")},l.createElement(A.Ph,{placeholder:"Select query type","aria-label":"Query type",width:25,options:[{label:"Profile type",value:"profileType"},{label:"Label",value:"label"},{label:"Label value",value:"labelValue"}],onChange:t=>{t.value==="profileType"&&e.onChange({...e.query,type:t.value}),t.value==="label"&&e.onChange({...e.query,type:t.value,profileTypeId:""}),t.value==="labelValue"&&e.onChange({...e.query,type:t.value,profileTypeId:"",labelName:""})},value:e.query.type}))),(e.query.type==="labelValue"||e.query.type==="label")&&l.createElement(ie,{datasource:e.datasource,initialValue:e.query.profileTypeId,onChange:t=>{(e.query.type==="label"||e.query.type==="labelValue")&&e.onChange({...e.query,profileTypeId:t})}}),e.query.type==="labelValue"&&l.createElement(se,{value:e.query.labelName,datasource:e.datasource,profileTypeId:e.query.profileTypeId,onChange:t=>{e.query.type==="labelValue"&&e.onChange({...e.query,labelName:t})},from:e.range?.from.valueOf()||Date.now().valueOf()-1e3*60*60*24,to:e.range?.to.valueOf()||Date.now().valueOf()}))}function se(e){const[t,a]=(0,l.useState)();(0,l.useEffect)(()=>{(async()=>a(await e.datasource.getLabelNames((e.profileTypeId||"")+"{}",e.from,e.to)))()},[e.datasource,e.profileTypeId,e.to,e.from]);const n=t?t.map(r=>({label:r,value:r})):[];return t&&e.value&&!t.find(r=>r===e.value)&&n.push({value:e.value,label:e.value}),l.createElement(N.Z,null,l.createElement(I._,{label:"Label",labelWidth:20,tooltip:l.createElement("div",null,"Select label for which to retrieve available values")},l.createElement(A.Ph,{allowCustomValue:!0,placeholder:"Select label","aria-label":"Select label",width:25,options:n,onChange:r=>e.onChange(r.value),value:e.value})))}function ie(e){const t=B(e.datasource);return l.createElement(N.Z,null,l.createElement(I._,{label:"Profile type","aria-label":"Profile type",labelWidth:20,tooltip:l.createElement("div",null,"Select profile type for which to retrieve available labels")},t?l.createElement(M,{onChange:e.onChange,profileTypes:t,initialProfileTypeId:e.initialValue}):l.createElement(F.u,{text:"Loading"})))}class ce extends ae.Mg{constructor(t,a=(0,le.$t)()){super(),this.dataAPI=t,this.timeSrv=a,this.editor=oe}query(t){return t.targets[0].type==="profileType"?(0,T.D)(this.dataAPI.getProfileTypes()).pipe((0,C.U)(a=>({data:a.map(n=>({text:n.label,value:n.id}))}))):t.targets[0].type==="label"?t.targets[0].profileTypeId?(0,T.D)(this.dataAPI.getLabelNames(t.targets[0].profileTypeId+"{}",this.timeSrv.timeRange().from.valueOf(),this.timeSrv.timeRange().to.valueOf())).pipe((0,C.U)(a=>({data:a.map(n=>({text:n}))}))):(0,E.of)({data:[]}):t.targets[0].type==="labelValue"?!t.targets[0].labelName||!t.targets[0].profileTypeId?(0,E.of)({data:[]}):(0,T.D)(this.dataAPI.getLabelValues(t.targets[0].profileTypeId+"{}",t.targets[0].labelName,this.timeSrv.timeRange().from.valueOf(),this.timeSrv.timeRange().to.valueOf())).pipe((0,C.U)(a=>({data:a.map(n=>({text:n}))}))):(0,E.of)({data:[]})}}const ue="both",de={groupBy:[],labelSelector:"{}"};class fe extends ee.CK{constructor(t,a=(0,te.J)()){super(t),this.templateSrv=a,this.variables=new ce(this)}query(t){const a=t.targets.filter(n=>n.profileTypeId).map(n=>n.labelSelector===""?{...n,labelSelector:"{}"}:D(n,t.app));return a.length?super.query({...t,targets:a}):(0,E.of)({data:[]})}async getProfileTypes(){return await this.getResource("profileTypes")}async getLabelNames(t,a,n){return await this.getResource("labelNames",{query:this.templateSrv.replace(t),start:a,end:n})}async getLabelValues(t,a,n,r){return await this.getResource("labelValues",{label:this.templateSrv.replace(a),query:this.templateSrv.replace(t),start:n,end:r})}applyTemplateVariables(t,a){return{...t,labelSelector:this.templateSrv.replace(t.labelSelector??"",a),profileTypeId:this.templateSrv.replace(t.profileTypeId??"",a)}}async importFromAbstractQueries(t){return t.map(a=>this.importFromAbstractQuery(a))}importFromAbstractQuery(t){return{refId:t.refId,labelSelector:(0,z.PL)(t),queryType:"both",profileTypeId:"",groupBy:[]}}async exportToAbstractQueries(t){return t.map(a=>this.exportToAbstractQuery(a))}exportToAbstractQuery(t){const a=t.labelSelector;if(!a||a.length===0)return{refId:t.refId,labelMatchers:[]};const n=_().tokenize(a,ge);return{refId:t.refId,labelMatchers:(0,z.UO)(n)}}getDefaultQuery(t){return Q}}const Q={...de,queryType:ue};function D(e,t){let a={...Q,...e};return t!==V.zj.Explore&&a.queryType==="both"&&(a.queryType="profile"),a}const ge={"context-labels":{pattern:/\{[^}]*(?=}?)/,greedy:!0,inside:{comment:{pattern:/#.*/},"label-key":{pattern:/[a-zA-Z_]\w*(?=\s*(=|!=|=~|!~))/,alias:"attr-name",greedy:!0},"label-value":{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,alias:"attr-value"},punctuation:/[{]/}},punctuation:/[{}(),.]/};var d=o(41407),m=o(82803);function P(e){const t=(0,m.wW)(pe,e);return l.createElement("div",{className:t.root},e.children)}const pe=(e,t)=>({root:(0,d.css)({display:"flex",flexDirection:t.direction??"row",flexWrap:t.wrap??!0?"wrap":void 0,alignItems:t.alignItems,gap:e.spacing(t.gap??2),flexGrow:t.flexGrow})}),W=({children:e,stackProps:t})=>{const a=(0,m.wW)(me);return l.createElement("div",{className:a.root},l.createElement(P,{gap:2,...t},e))},me=e=>({root:(0,d.css)({padding:e.spacing(1),backgroundColor:e.colors.background.secondary,borderRadius:e.shape.radius.default})}),ye=({children:e})=>l.createElement(P,{gap:.5,direction:"column"},e);var he=o(66533),be=o(84541);const ve={id:"pyroscopeql",extensions:[".pyroscopeql"],aliases:["pyroscope","pyroscopeql"],mimetypes:[],def:{language:{ignoreCase:!1,defaultToken:"",tokenPostfix:".pyroscopeql",keywords:[],operators:[],symbols:/[=><!~?:&|+\-*\/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,integersuffix:/(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,floatsuffix:/[fFlL]?/,tokenizer:{root:[[/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,"tag"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d+/,"number"],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,"number.hex"],[/0[0-7']*[0-7](@integersuffix)/,"number.octal"],[/0[bB][0-1']*[0-1](@integersuffix)/,"number.binary"],[/\d[\d']*\d(@integersuffix)/,"number"],[/\d(@integersuffix)/,"number"]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],clauses:[[/[^(,)]/,"tag"],[/\)/,"identifier","@pop"]],whitespace:[[/[ \t\r\n]+/,"white"]]}},languageConfiguration:{wordPattern:/(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,brackets:[["{","}"]],autoClosingPairs:[{open:"{",close:"}"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{}}}};class Ee{constructor(){this.triggerCharacters=["{",",","[","(","=","~"," ",'"'],this.labels=[],this.getLabelValues=()=>Promise.resolve([])}init(t,a){this.labels=t,this.getLabelValues=a}provideCompletionItems(t,a){if(!(this.monaco&&this.editor))throw new Error("provideCompletionItems called before CompletionProvider was initialized");if(this.editor.getModel()?.id!==t.id)return{suggestions:[]};const{range:n,offset:r}=Ne(this.monaco,t,a),i=Ce(t.getValue(),r);return this.getCompletions(i).then(s=>{const g=s.length.toString().length;return{suggestions:s.map((f,u)=>({kind:Se(f.type,this.monaco),label:f.label,insertText:f.insertText,sortText:u.toString().padStart(g,"0"),range:n}))}})}async getCompletions(t){switch(t.type){case"UNKNOWN":return[];case"EMPTY":return this.labels.map(n=>({label:n,insertText:`{${n}="`,type:"LABEL_NAME"}));case"IN_LABEL_NAME":return this.labels.map(n=>({label:n,insertText:n,type:"LABEL_NAME"}));case"IN_LABEL_VALUE":return(await this.getLabelValues(t.labelName)).map(n=>({label:n,insertText:t.betweenQuotes?n:`"${n}"`,type:"LABEL_VALUE"}));default:throw new Error(`Unexpected situation ${t}`)}}}function Se(e,t){switch(e){case"LABEL_NAME":return t.languages.CompletionItemKind.Enum;case"LABEL_VALUE":return t.languages.CompletionItemKind.EnumMember;default:throw new Error(`Unexpected CompletionType: ${e}`)}}const U=/[a-zA-Z_][a-zA-Z0-9_]*/,$=/[^"]*/,xe=new RegExp(`(${U.source})="(${$.source})"`,"g"),Le=new RegExp(`(${U.source})=("?)${$.source}$`),Te=new RegExp(/[{,]\s*[a-zA-Z0-9_]*$/);function Ce(e,t){if(e==="")return{type:"EMPTY"};const a=e.matchAll(xe),n=Array.from(a).reduce((s,g)=>{const[c,f,u]=g[1];return s.push({name:f,value:u}),s},[]),r=e.substring(0,t).match(Le);return r?{type:"IN_LABEL_VALUE",labelName:r[1],betweenQuotes:!!r[2],otherLabels:n}:e.substring(0,t).match(Te)?{type:"IN_LABEL_NAME",otherLabels:n}:{type:"UNKNOWN"}}function Ne(e,t,a){const n=t.getWordAtPosition(a),r=n!=null?e.Range.lift({startLineNumber:a.lineNumber,endLineNumber:a.lineNumber,startColumn:n.startColumn,endColumn:n.endColumn}):e.Range.fromPositions(a),i={column:a.column,lineNumber:a.lineNumber};return{offset:t.getOffsetAt(i),range:r}}function Ie(e){const t=Pe(e.getLabelValues,e.labels),a=(0,m.wW)(we),n=(0,he.Z)(e.onRunQuery),r=(0,l.useRef)(null);return l.createElement("div",{className:a.wrapper,ref:r},l.createElement(be.p,{value:e.value,language:b,onBlur:e.onChange,containerStyles:a.queryField,monacoOptions:{folding:!1,fontSize:14,lineNumbers:"off",overviewRulerLanes:0,renderLineHighlight:"none",scrollbar:{vertical:"hidden",verticalScrollbarSize:8,horizontal:"hidden",horizontalScrollbarSize:0},scrollBeyondLastLine:!1,wordWrap:"on",padding:{top:4,bottom:5}},onBeforeEditorMount:Re,onEditorDidMount:(i,s)=>{t(i,s);const g=()=>{const c=r.current;if(c!==null){const f=i.getContentHeight();c.style.height=`${f+Ae}px`,c.style.width="100%";const u=c.clientWidth;i.layout({width:u,height:f})}};i.onDidContentSizeChange(g),g(),i.addCommand(s.KeyMod.Shift|s.KeyCode.Enter,()=>{n.current(i.getValue())})}}))}const Ae=2;function Pe(e,t){const a=(0,l.useRef)();a.current===void 0&&(a.current=new Ee),(0,O.Z)(async()=>{a.current&&a.current.init(t||[],e)},[t,e]);const n=(0,l.useRef)(null);return(0,l.useEffect)(()=>()=>{n.current?.()},[]),(r,i)=>{if(a.current){a.current.editor=r,a.current.monaco=i;const{dispose:s}=i.languages.registerCompletionItemProvider(b,a.current);n.current=s}}}let Z=!1;const b="pyroscopeql";function Re(e){if(Z===!1){Z=!0;const{aliases:t,extensions:a,mimetypes:n,def:r}=ve;e.languages.register({id:b,aliases:t,extensions:a,mimetypes:n}),e.languages.setMonarchTokensProvider(b,r.language),e.languages.setLanguageConfiguration(b,r.languageConfiguration)}}const we=()=>({queryField:(0,d.css)`
      label: LabelsEditorQueryField;
      flex: 1;
      // Not exactly sure but without this the editor does not shrink after resizing (so you can make it bigger but not
      // smaller). At the same time this does not actually make the editor 100px because it has flex 1 so I assume
      // this should sort of act as a flex-basis (but flex-basis does not work for this). So yeah CSS magic.
      width: 100px;
    `,wrapper:(0,d.css)`
      label: LabelsEditorWrapper;
      display: flex;
      flex: 1;
      border: 1px solid rgba(36, 41, 46, 0.3);
      border-radius: 2px;
    `});var Oe=o(948),K=o(4919),G=o(12190),Fe=o(20454),Ve=o(38637),ze=o(82360),Me=o(69865),Be=o(96227),Qe=o(64084);const R=e=>{const{label:t,optional:a,tooltip:n,children:r,width:i,...s}=e,g=(0,m.l4)(),c=De(g,i),f=s?.htmlFor||ze?.getChildId(r),u=l.createElement(l.Fragment,null,l.createElement("label",{className:c.label,htmlFor:f},t,a&&l.createElement("span",{className:c.optional}," - optional"),n&&l.createElement(Me.u,{placement:"top",content:n,theme:"info"},l.createElement(G.J,{name:"info-circle",size:"sm",className:c.icon}))),l.createElement("span",{className:c.space}));return l.createElement("div",{className:c.root},l.createElement(Be.g,{className:c.field,label:u,...s},r))},De=(0,Qe.B)((e,t)=>({space:(0,d.css)({paddingRight:e.spacing(0),paddingBottom:e.spacing(.5)}),root:(0,d.css)({minWidth:e.spacing(t??0)}),label:(0,d.css)({fontSize:12,fontWeight:e.typography.fontWeightMedium}),optional:(0,d.css)({fontStyle:"italic",color:e.colors.text.secondary}),field:(0,d.css)({marginBottom:0}),icon:(0,d.css)({color:e.colors.text.secondary,marginLeft:e.spacing(1),":hover":{color:e.colors.text.primary}})})),H=[{value:"metrics",label:"Metric",description:"Return aggregated metrics"},{value:"profile",label:"Profile",description:"Return profile"},{value:"both",label:"Both",description:"Return both metric and profile data"}];function We(e){return e===V.zj.Explore?H:H.filter(t=>t.value!=="both")}function Ue({query:e,onQueryChange:t,app:a,labels:n}){const[r,i]=(0,Oe.Z)(!1),s=(0,m.wW)($e),g=We(a),c=n?n.map(u=>({label:u,value:u})):[],f=(0,m.wW)(K.gN);return l.createElement(P,{gap:0,direction:"column"},l.createElement(K.zx,{className:(0,d.cx)(s.header,f),onClick:i,title:"Click to edit options"},l.createElement("div",{className:s.toggle},l.createElement(G.J,{name:r?"angle-down":"angle-right"})),l.createElement("h6",{className:s.title},"Options"),!r&&l.createElement("div",{className:s.description},[`Type: ${e.queryType}`,e.groupBy?.length?`Group by: ${e.groupBy.join(", ")}`:void 0].filter(u=>u).map((u,p)=>l.createElement("span",{key:p},u)))),r&&l.createElement("div",{className:s.body},l.createElement(R,{label:"Query Type"},l.createElement(Fe.S,{options:g,value:e.queryType,onChange:u=>t({...e,queryType:u})})),l.createElement(R,{label:"Group by",tooltip:l.createElement(l.Fragment,null,"Used to group the metric result by a specific label or set of labels. Does not apply to profile query.")},l.createElement(A.NU,{placeholder:"Label",value:e.groupBy,allowCustomValue:!0,options:c,onChange:u=>{const p=u.map(S=>S.value);t({...e,groupBy:p})}})),l.createElement(R,{label:"Max Nodes",tooltip:l.createElement(l.Fragment,null,"Sets the maximum number of nodes to return in the flamegraph.")},l.createElement(Ve.I,{value:e.maxNodes||"",type:"number",placeholder:"16384",onChange:u=>{let p=parseInt(u.currentTarget.value,10);p=isNaN(p)?0:p,t({...e,maxNodes:p})}}))))}const $e=e=>({switchLabel:(0,d.css)({color:e.colors.text.secondary,cursor:"pointer",fontSize:e.typography.bodySmall.fontSize,"&:hover":{color:e.colors.text.primary}}),header:(0,d.css)({display:"flex",cursor:"pointer",alignItems:"baseline",color:e.colors.text.primary,"&:hover":{background:e.colors.emphasize(e.colors.background.primary,.03)}}),title:(0,d.css)({flexGrow:1,overflow:"hidden",fontSize:e.typography.bodySmall.fontSize,fontWeight:e.typography.fontWeightMedium,margin:0}),description:(0,d.css)({color:e.colors.text.secondary,fontSize:e.typography.bodySmall.fontSize,paddingLeft:e.spacing(2),gap:e.spacing(2),display:"flex"}),body:(0,d.css)({display:"flex",paddingTop:e.spacing(2),gap:e.spacing(2),flexWrap:"wrap"}),toggle:(0,d.css)({color:e.colors.text.secondary,marginRight:`${e.spacing(1)}`})});function Ze(e){const{onChange:t,onRunQuery:a,datasource:n,query:r,range:i,app:s}=e;function g(w){t({...r,labelSelector:w}),a()}const c=B(n),{labels:f,getLabelValues:u,onLabelSelectorChange:p}=He(i,n,r,t);Ke(r,c,t,s);let S=l.createElement(F.u,{text:"Loading"});return c&&r.profileTypeId!==void 0&&(S=l.createElement(M,{placeholder:c.length===0?"No profile types found":"Select profile type",profileTypes:c,initialProfileTypeId:r.profileTypeId,onChange:w=>{t({...r,profileTypeId:w})}})),l.createElement(ye,null,l.createElement(W,{stackProps:{wrap:!1,gap:1}},S,l.createElement(Ie,{value:r.labelSelector,onChange:p,onRunQuery:g,labels:f,getLabelValues:u})),l.createElement(W,null,l.createElement(Ue,{query:r,onQueryChange:e.onChange,app:e.app,labels:f})))}function Ke(e,t,a,n){(0,l.useEffect)(()=>{if(!t)return;const r=D(e,n);e.profileTypeId||(r.profileTypeId=Ge(t)),k()(e,r)||a(r)},[n,e,t,a])}function Ge(e){const t=e.filter(a=>a.id.indexOf("cpu")>=0);if(t.length){const a=t.find(n=>n.id.indexOf("samples")===-1);return a?a.id:t[0].id}return e[0]?.id||""}function He(e,t,a,n){const r={to:Math.ceil((e?.to.valueOf()||0)/5e3)*5e3,from:Math.floor((e?.from.valueOf()||0)/5e3)*5e3},i=(0,O.Z)(()=>t.getLabelNames(a.profileTypeId+a.labelSelector,r.from,r.to),[t,a.profileTypeId,a.labelSelector,r.to,r.from]),s=(0,l.useCallback)(c=>t.getLabelValues(a.profileTypeId+a.labelSelector,c,r.from,r.to),[a,t,r.to,r.from]),g=(0,l.useCallback)(c=>{n({...a,labelSelector:c})},[n,a]);return{labels:i.value,getLabelValues:s,onLabelSelectorChange:g}}const je=new x.hf(fe).setConfigEditor(X).setQueryEditor(Ze)},66533:(j,v,o)=>{o.d(v,{Z:()=>L});var x=o(39953),l=function(y){var h=(0,x.useRef)(y);return h.current=y,h};const L=l}}]);

//# sourceMappingURL=pyroscopePlugin.6d7f36392b9c23624adf.js.map