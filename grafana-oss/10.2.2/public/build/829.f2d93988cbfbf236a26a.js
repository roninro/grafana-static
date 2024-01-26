"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[829],{34397:(U,P,a)=>{a.d(P,{K:()=>v});var n=a(41407),t=a(39953),y=a(82803);const v=({children:f})=>{const d=(0,y.wW)(B);return t.createElement("div",{className:d.root},f)},B=f=>({root:(0,n.css)({display:"flex",flexWrap:"wrap",alignItems:"center",gap:f.spacing(3),minHeight:f.spacing(4)})})},13579:(U,P,a)=>{a.d(P,{B:()=>t});var n=a(39953);const t=({grow:y,shrink:v})=>n.createElement("div",{style:{display:"block",flexGrow:y,flexShrink:v}})},1842:(U,P,a)=>{a.d(P,{P:()=>me});var n=a(41407),t=a(39953),y=a(24058),v=a(87786),B=a(7763),f=a(27366),d=a(82803),L=a(52895),p=a(4919),u=a(69865),I=a(12190),R=a(69171),W=a(71190),A=a(83566),o=a(13579),N=a(9558),w=a(20588),M=a(52807),H=a(70393);const Q=t.memo(({def:e,operation:r})=>{const s=(0,d.wW)(S),[l,c]=(0,t.useState)(!1),{getTooltipProps:x,setTooltipRef:C,setTriggerRef:D,visible:O}=(0,w.O)({placement:"top",visible:l,offset:[0,16],onVisibleChange:c,interactive:!0,trigger:["click"]});return t.createElement(t.Fragment,null,t.createElement(p.zx,{title:"Click to show description",ref:D,icon:"info-circle",size:"sm",variant:"secondary",fill:"text"}),O&&t.createElement(H.h_,null,t.createElement("div",{ref:C,...x(),className:s.docBox},t.createElement("div",{className:s.docBoxHeader},t.createElement("span",null,e.renderer(r,e,"<expr>")),t.createElement(o.B,{grow:1}),t.createElement(p.zx,{icon:"times",onClick:()=>c(!1),fill:"text",variant:"secondary",title:"Remove operation"})),t.createElement("div",{className:s.docBoxBody,dangerouslySetInnerHTML:{__html:J(e,r)}}))))});Q.displayName="OperationDocs";const S=e=>({docBox:(0,n.css)({overflow:"hidden",background:e.colors.background.primary,border:`1px solid ${e.colors.border.strong}`,boxShadow:e.shadows.z3,maxWidth:"600px",padding:e.spacing(1),borderRadius:e.shape.radius.default,zIndex:e.zIndex.tooltip}),docBoxHeader:(0,n.css)({fontSize:e.typography.h5.fontSize,fontFamily:e.typography.fontFamilyMonospace,paddingBottom:e.spacing(1),display:"flex",alignItems:"center"}),docBoxBody:(0,n.css)({marginBottom:e.spacing(-1),color:e.colors.text.secondary}),signature:(0,n.css)({fontSize:e.typography.bodySmall.fontSize,fontFamily:e.typography.fontFamilyMonospace}),dropdown:(0,n.css)({opacity:0,color:e.colors.text.secondary})});function J(e,r){return(0,M.a)(e.explainHandler?e.explainHandler(r,e):e.documentation??"no docs")}const V=t.memo(({operation:e,def:r,index:s,onChange:l,onRemove:c,queryModeller:x,dragHandleProps:C})=>{const D=(0,d.wW)(k),[O,$]=(0,t.useState)({}),h=()=>{if(O.isOpen)$({...O,isOpen:!1});else{const b=x.getAlternativeOperations(r.alternativesKey).map(T=>({label:T.name,value:T}));$({isOpen:!0,alternatives:b})}};return t.createElement("div",{className:D.header},!O.isOpen&&t.createElement(t.Fragment,null,t.createElement("div",{...C},r.name??r.id),t.createElement(o.B,{grow:1}),t.createElement("div",{className:`${D.operationHeaderButtons} operation-header-show-on-hover`},t.createElement(p.zx,{icon:"angle-down",size:"sm",onClick:h,fill:"text",variant:"secondary",title:"Click to view alternative operations"}),t.createElement(Q,{def:r,operation:e}),t.createElement(p.zx,{icon:"times",size:"sm",onClick:()=>c(s),fill:"text",variant:"secondary",title:"Remove operation"}))),O.isOpen&&t.createElement("div",{className:D.selectWrapper},t.createElement(N.Ph,{autoFocus:!0,openMenuOnFocus:!0,placeholder:"Replace with",options:O.alternatives,isOpen:!0,onCloseMenu:h,onChange:b=>{if(b.value){const T=x.getOperationDef(b.value.id),z=[...T.defaultParams];for(let m=0;m<Math.min(e.params.length,z.length);m++)T.params[m].type===r.params[m].type&&(z[m]=e.params[m]);const F={...e,params:z,id:b.value.id};l(s,r.changeTypeHandler?r.changeTypeHandler(F,T):F)}}})))});V.displayName="OperationHeader";const k=e=>({header:(0,n.css)({borderBottom:`1px solid ${e.colors.border.medium}`,padding:e.spacing(.5,.5,.5,1),display:"flex",alignItems:"center"}),operationHeaderButtons:(0,n.css)({opacity:1}),selectWrapper:(0,n.css)({paddingRight:e.spacing(2)})});var q=a(99456),ee=a(28448),te=a(13026),Z=a(82473);function ae(e){if(e.editor)return e.editor;if(e.options)return se;switch(e.type){case"boolean":return re;case"number":case"string":default:return ne}}function ne(e){return t.createElement(ee.H,{id:(0,Z.i1)(e.operationId,e.index),defaultValue:e.value?.toString(),minWidth:e.paramDef.minWidth,placeholder:e.paramDef.placeholder,title:e.paramDef.description,maxWidth:(e.paramDef.minWidth||20)*3,onCommitChange:r=>{e.onChange(e.index,r.currentTarget.value),e.paramDef.runQueryOnEnter&&r.type==="keydown"&&e.onRunQuery()}})}function re(e){return t.createElement(te.X,{id:(0,Z.i1)(e.operationId,e.index),value:!!e.value,onChange:r=>e.onChange(e.index,r.currentTarget.checked)})}function se({paramDef:e,value:r,index:s,operationId:l,onChange:c}){const x=(0,d.wW)(oe);let C=e.options;C[0]?.label||(C=e.options.map(O=>({label:O.toString(),value:O})));let D=C.find(O=>O.value===r)??(0,q.E)(r);return!r&&e.optional?t.createElement("div",{className:x.optionalParam},t.createElement(p.zx,{size:"sm",variant:"secondary",title:`Add ${e.name}`,icon:"plus",onClick:()=>c(s,C[0].value)},e.name)):t.createElement(f.K,{gap:.5,direction:"row",alignItems:"center",wrap:!1},t.createElement(N.Ph,{id:(0,Z.i1)(l,s),value:D,options:C,placeholder:e.placeholder,allowCustomValue:!0,onChange:O=>c(s,O.value),width:e.minWidth||"auto"}),e.optional&&t.createElement(p.zx,{"data-testid":`operations.${s}.remove-param`,size:"sm",fill:"text",icon:"times",variant:"secondary",title:`Remove ${e.name}`,onClick:()=>c(s,"")}))}const oe=e=>({optionalParam:(0,n.css)({marginTop:e.spacing(1)})});function le({operation:e,index:r,onRemove:s,onChange:l,onRunQuery:c,queryModeller:x,query:C,datasource:D,flash:O,highlight:$}){const h=x.getOperationDef(e.id),b=ie(O),T=(0,t.useId)(),z=e.id===A.B5.LabelFilter&&(0,W.ZO)(e,C.operations),F=(0,d.l4)(),m=de(F,z);if(!h)return t.createElement("span",null,"Operation ",e.id," not found");const X=(i,_)=>{const G={...e,params:[...e.params]};G.params[i]=_,j(h,G,r,i,l)},E=()=>{const i={...e,params:[...e.params,""]};j(h,i,r,e.params.length,l)},g=i=>{const _={...e,params:[...e.params.slice(0,i),...e.params.slice(i+1)]};j(h,_,r,i,l)},K=[];for(let i=0;i<e.params.length;i++){const _=h.params[Math.min(h.params.length-1,i)],G=ae(_);K.push(t.createElement("div",{className:m.paramRow,key:`${i}-1`},!_.hideName&&t.createElement("div",{className:m.paramName},t.createElement("label",{htmlFor:(0,Z.i1)(T,i)},_.name),_.description&&t.createElement(u.u,{placement:"top",content:_.description,theme:"info"},t.createElement(I.J,{name:"info-circle",size:"sm",className:m.infoIcon}))),t.createElement("div",{className:m.paramValue},t.createElement(f.K,{gap:.5,direction:"row",alignItems:"center",wrap:!1},t.createElement(G,{index:i,paramDef:_,value:e.params[i],operation:e,operationId:T,onChange:X,onRunQuery:c,query:C,datasource:D}),_.restParam&&(e.params.length>h.params.length||_.optional)&&t.createElement(p.zx,{"data-testid":`operations.${r}.remove-rest-param`,size:"sm",fill:"text",icon:"times",variant:"secondary",title:`Remove ${_.name}`,onClick:()=>g(i)})))))}let Y;if(h.params.length>0){const i=h.params[h.params.length-1];i.restParam&&(Y=ce(i,E,r,e.params.length,m))}const Ee=i=>{if(!i)return z?!0:void 0};return t.createElement(y._l,{draggableId:`operation-${r}`,index:r},(i,_)=>t.createElement(R._,{error:"You have conflicting label filters",invalid:Ee(_.isDragging),className:(0,n.cx)(m.error,m.cardWrapper)},t.createElement("div",{className:(0,n.cx)(m.card,(b||$)&&m.cardHighlight,z&&m.cardError),ref:i.innerRef,...i.draggableProps,"data-testid":`operations.${r}.wrapper`},t.createElement(V,{operation:e,dragHandleProps:i.dragHandleProps,def:h,index:r,onChange:l,onRemove:s,queryModeller:x}),t.createElement("div",{className:m.body},K),Y,r<C.operations.length-1&&t.createElement("div",{className:m.arrow},t.createElement("div",{className:m.arrowLine}),t.createElement("div",{className:m.arrowArrow})))))}function ie(e){const[r,s]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{let l;return e?l=setTimeout(()=>{s(!1)},1e3):s(!0),()=>clearTimeout(l)},[e]),r&&e}function ce(e,r,s,l,c){return t.createElement("div",{className:c.restParam,key:`${l}-2`},t.createElement(p.zx,{size:"sm",icon:"plus",title:`Add ${e.name}`,variant:"secondary",onClick:r,"data-testid":`operations.${s}.add-rest-param`},e.name))}function j(e,r,s,l,c){e.paramChangedHandler?c(s,e.paramChangedHandler(l,r,e)):c(s,r)}const de=(e,r)=>({cardWrapper:(0,n.css)({alignItems:"stretch"}),error:(0,n.css)({marginBottom:e.spacing(1)}),card:(0,n.css)({background:e.colors.background.primary,border:`1px solid ${e.colors.border.medium}`,cursor:"grab",borderRadius:e.shape.radius.default,position:"relative",transition:"all 0.5s ease-in 0s",height:r?"auto":"100%"}),cardError:(0,n.css)({boxShadow:`0px 0px 4px 0px ${e.colors.warning.main}`,border:`1px solid ${e.colors.warning.main}`}),cardHighlight:(0,n.css)({boxShadow:`0px 0px 4px 0px ${e.colors.primary.border}`,border:`1px solid ${e.colors.primary.border}`}),infoIcon:(0,n.css)({marginLeft:e.spacing(.5),color:e.colors.text.secondary,":hover":{color:e.colors.text.primary}}),body:(0,n.css)({margin:e.spacing(1,1,.5,1),display:"table"}),paramRow:(0,n.css)({label:"paramRow",display:"table-row",verticalAlign:"middle"}),paramName:(0,n.css)({display:"table-cell",padding:e.spacing(0,1,0,0),fontSize:e.typography.bodySmall.fontSize,fontWeight:e.typography.fontWeightMedium,verticalAlign:"middle",height:"32px"}),paramValue:(0,n.css)({label:"paramValue",display:"table-cell",verticalAlign:"middle"}),restParam:(0,n.css)({padding:e.spacing(0,1,1,1)}),arrow:(0,n.css)({position:"absolute",top:"0",right:"-18px",display:"flex"}),arrowLine:(0,n.css)({height:"2px",width:"8px",backgroundColor:e.colors.border.strong,position:"relative",top:"14px"}),arrowArrow:(0,n.css)({width:0,height:0,borderTop:"5px solid transparent",borderBottom:"5px solid transparent",borderLeft:`7px solid ${e.colors.border.strong}`,position:"relative",top:"10px"})});function me({query:e,datasource:r,queryModeller:s,onChange:l,onRunQuery:c,highlightedOp:x}){const C=(0,d.wW)(ge),{operations:D}=e,O=pe(D),[$,h]=(0,t.useState)(!1),b=(E,g)=>{const K=[...D];K.splice(E,1,g),l({...e,operations:K})},T=E=>{const g=[...D.slice(0,E),...D.slice(E+1)];l({...e,operations:g})},z=s.getCategories().map(E=>({value:E,label:E,items:s.getOperationsForCategory(E).map(g=>({value:g.id,label:g.name,isLeaf:!0}))})),F=E=>{const g=s.getOperationDef(E);g&&(l(g.addOperationHandler(g,e,s)),h(!1))},m=E=>{if(!E.destination)return;const g=[...D],K=g[E.source.index];g.splice(E.source.index,1),g.splice(E.destination.index,0,K),l({...e,operations:g})},X=()=>{h(!1)};return t.createElement(f.K,{gap:1,direction:"column"},t.createElement(f.K,{gap:1},D.length>0&&t.createElement(y.Z5,{onDragEnd:m},t.createElement(y.bK,{droppableId:"sortable-field-mappings",direction:"horizontal"},E=>t.createElement("div",{className:C.operationList,ref:E.innerRef,...E.droppableProps},D.map((g,K)=>t.createElement(le,{key:g.id+JSON.stringify(g.params)+K,queryModeller:s,index:K,operation:g,query:e,datasource:r,onChange:b,onRemove:T,onRunQuery:c,flash:O[K],highlight:x===g})),E.placeholder))),t.createElement("div",{className:C.addButton},$?t.createElement(L.v,{options:z,onSelect:F,onBlur:X,autoFocus:!0,alwaysOpen:!0,hideActiveLevelLabel:!0,placeholder:"Search"}):t.createElement(p.zx,{icon:"plus",variant:"secondary",onClick:()=>h(!0),title:"Add operation"},"Operations"))))}function pe(e){const r=(0,v.Z)(),s=(0,B.Z)(e);if(!r())return e.map(()=>!1);if(!s)return e.map(()=>!0);let l=[];if(s.length-1===e.length&&e.every(c=>s.includes(c)))return e.map(()=>!1);if(s.length+1===e.length&&s.every(c=>e.includes(c))){const c=e.find(x=>!s.includes(x));l=e.map(x=>x===c)}else l=e.map((c,x)=>!ue(c.id,s[x]?.id));return l}function ue(e,r){return e===r||`__${e}_by`===r||e===`__${r}_by`}const ge=e=>({heading:(0,n.css)({label:"heading",fontSize:12,fontWeight:e.typography.fontWeightMedium,marginBottom:0}),operationList:(0,n.css)({label:"operationList",display:"flex",flexWrap:"wrap",gap:e.spacing(2)}),addButton:(0,n.css)({label:"addButton",width:126,paddingBottom:e.spacing(1)})})},22162:(U,P,a)=>{a.d(P,{B:()=>B});var n=a(41407),t=a(39953),y=a(27366),v=a(82803);function B({children:d}){const L=(0,v.wW)(f);return t.createElement("div",{className:L.root},t.createElement(y.K,{gap:1},d))}const f=d=>({root:(0,n.css)({padding:d.spacing(1,1,0,1),backgroundColor:d.colors.background.secondary,borderRadius:d.shape.radius.default})})},83188:(U,P,a)=>{a.d(P,{L:()=>d});var n=a(41407),t=a(39953),y=a(72639),v=a(82803),B=a(69865),f=a(4919);const d=({datasource:p,query:u,onChange:I,data:R,queryModeller:W,buildVisualQueryFromString:A})=>{const[o,N]=(0,t.useState)([]),w=(0,v.wW)(L);return(0,t.useEffect)(()=>{const M={expr:W.renderQuery(u),refId:""},H=p.getQueryHints(M,R?.series||[]).filter(Q=>Q.fix?.action);N(H)},[p,u,R,W]),t.createElement(t.Fragment,null,o.length>0&&t.createElement("div",{className:w.container},o.map(M=>t.createElement(B.u,{content:`${M.label} ${M.fix?.label}`,key:M.type},t.createElement(f.zx,{onClick:()=>{if((0,y.ff)("grafana_query_builder_hints_clicked",{hint:M.type,datasourceType:p.type}),M?.fix?.action){const H={expr:W.renderQuery(u),refId:""},Q=p.modifyQuery(H,M.fix.action),S=A(Q.expr);return I(S.query)}},fill:"outline",size:"sm",className:w.hint},"hint: ",M.fix?.title||M.fix?.action?.type.toLowerCase().replace("_"," "))))))};d.displayName="QueryBuilderHints";const L=p=>({container:(0,n.css)`
      display: flex;
      align-items: start;
    `,hint:(0,n.css)`
      margin-right: ${p.spacing(1)};
    `})},77938:(U,P,a)=>{a.d(P,{k:()=>B});var n=a(39953),t=a(20454),y=a(83065);const v=[{label:"Builder",value:y.c.Builder},{label:"Code",value:y.c.Code}];function B({mode:f,onChange:d}){return n.createElement("div",{"data-testid":"QueryEditorModeToggle"},n.createElement(t.S,{options:v,size:"sm",value:f,onChange:d}))}},54081:(U,P,a)=>{a.d(P,{n:()=>L});var n=a(41407),t=a(86832),y=a.n(t),v=a(39953),B=a(27366),f=a(82803),d=a(26286);function L({label:u,...I}){const R=u.replace(" ","-"),W=(0,v.useRef)((0,t.uniqueId)(`switch-${R}`)),A=(0,f.wW)(p);return v.createElement(B.K,{gap:1},v.createElement("label",{htmlFor:W.current,className:A.switchLabel},u),v.createElement(d.r,{...I,id:W.current}))}const p=u=>({switchLabel:(0,n.css)({color:u.colors.text.secondary,cursor:"pointer",fontSize:u.typography.bodySmall.fontSize,"&:hover":{color:u.colors.text.primary}})})},30736:(U,P,a)=>{a.d(P,{d:()=>I});var n=a(41407),t=a(39953),y=a(948),v=a(83502),B=a(27366),f=a(32688),d=a(82803),L=a(62818),p=a(69865),u=a(12190);function I({title:o,children:N,collapsedInfo:w,queryStats:M}){const[H,Q]=(0,y.Z)(!1),S=(0,d.wW)(R);return t.createElement("div",{className:S.wrapper},t.createElement(L.U,{className:S.collapse,collapsible:!0,isOpen:H,onToggle:Q,label:t.createElement(B.K,{gap:0,wrap:!1},t.createElement("h6",{className:S.title},o),!H&&t.createElement("div",{className:S.description},w.map((J,V)=>t.createElement("span",{key:V},J))))},t.createElement("div",{className:S.body},N)),M&&f.config.featureToggles.lokiQuerySplitting&&t.createElement(p.u,{content:"Note: the query will be split into multiple parts and executed in sequence. Query limits will only apply each individual part."},t.createElement(u.J,{tabIndex:0,name:"info-circle",className:S.tooltip,size:"sm"})),M&&t.createElement("p",{className:S.stats},W(M)))}const R=o=>({collapse:(0,n.css)({backgroundColor:"unset",border:"unset",marginBottom:0,["> button"]:{padding:o.spacing(0,1)}}),wrapper:(0,n.css)({width:"100%",display:"flex",justifyContent:"space-between",alignItems:"baseline"}),title:(0,n.css)({flexGrow:1,overflow:"hidden",fontSize:o.typography.bodySmall.fontSize,fontWeight:o.typography.fontWeightMedium,margin:0}),description:(0,n.css)({color:o.colors.text.secondary,fontSize:o.typography.bodySmall.fontSize,fontWeight:o.typography.bodySmall.fontWeight,paddingLeft:o.spacing(2),gap:o.spacing(2),display:"flex"}),body:(0,n.css)({display:"flex",gap:o.spacing(2),flexWrap:"wrap"}),stats:(0,n.css)({margin:"0px",color:o.colors.text.secondary,fontSize:o.typography.bodySmall.fontSize}),tooltip:(0,n.css)({marginRight:o.spacing(.25)})}),W=o=>o.message?o.message:`This query will process approximately ${A(o)}.`,A=o=>{const{text:N,suffix:w}=(0,v.Cf)("bytes")(o.bytes,1);return N+w}},17912:(U,P,a)=>{a.d(P,{P5:()=>p,ar:()=>y,iS:()=>B});var n=a(39953),t=a(23062);const y="PrometheusQueryEditorExplainDefault",v="PrometheusQueryEditorRawQueryDefault",B="LokiQueryEditorExplainDefault",f="LokiQueryEditorRawQueryDefault";function d(u,I=!1){const R=t.Z.get(u);return R===void 0?I:!!parseInt(R,10)}function L(u,I){t.Z.set(u,I?"1":"0")}function p(u,I=!1){const[R,W]=(0,n.useState)(d(u,I)),A=(0,n.useCallback)(o=>{L(u,o),W(o)},[u]);return{flag:R,setFlag:A}}}}]);

//# sourceMappingURL=829.f2d93988cbfbf236a26a.js.map