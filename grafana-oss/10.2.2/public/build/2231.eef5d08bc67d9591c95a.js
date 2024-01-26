"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2231],{34397:($,p,t)=>{t.d(p,{K:()=>d});var e=t(41407),O=t(39953),L=t(82803);const d=({children:o})=>{const D=(0,L.wW)(E);return O.createElement("div",{className:D.root},o)},E=o=>({root:(0,e.css)({display:"flex",flexWrap:"wrap",alignItems:"center",gap:o.spacing(3),minHeight:o.spacing(4)})})},13579:($,p,t)=>{t.d(p,{B:()=>O});var e=t(39953);const O=({grow:L,shrink:d})=>e.createElement("div",{style:{display:"block",flexGrow:L,flexShrink:d}})},56504:($,p,t)=>{t.d(p,{X:()=>N});var e=t(41407),O=t(39953),L=t(82803),d=t(9558),E=t(28987),o=Object.defineProperty,D=Object.defineProperties,v=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,T=(n,a,s)=>a in n?o(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s,_=(n,a)=>{for(var s in a||(a={}))l.call(a,s)&&T(n,s,a[s]);if(m)for(var s of m(a))I.call(a,s)&&T(n,s,a[s]);return n},g=(n,a)=>D(n,v(a)),S=(n,a)=>{var s={};for(var i in n)l.call(n,i)&&a.indexOf(i)<0&&(s[i]=n[i]);if(n!=null&&m)for(var i of m(n))a.indexOf(i)<0&&I.call(n,i)&&(s[i]=n[i]);return s};function N(n){var a=n,{label:s}=a,i=S(a,["label"]);const u=(0,L.wW)(r),[h]=(0,O.useState)(()=>Math.random().toString(16).slice(2)),P={SelectContainer:B,ValueContainer:A,SingleValue:A};return O.createElement("div",{className:u.root},s&&O.createElement("label",{className:u.label,htmlFor:h},s,":","\xA0"),O.createElement(d.Ph,g(_({openMenuOnFocus:!0,inputId:h},i),{components:P})))}const B=n=>{const{children:a}=n,s=(0,L.wW)(r);return O.createElement(E.e,g(_({},n),{className:(0,e.cx)(n.className,s.container)}),a)},A=n=>{const{className:a,children:s}=n,i=(0,L.wW)(r);return O.createElement("div",{className:(0,e.cx)(a,i.valueContainer)},s)},r=n=>({root:(0,e.css)({display:"flex",fontSize:12,alignItems:"center"}),label:(0,e.css)({color:n.colors.text.secondary,whiteSpace:"nowrap"}),container:(0,e.css)({background:"none",borderColor:"transparent"}),valueContainer:(0,e.css)({display:"flex",alignItems:"center",flex:"initial",color:n.colors.text.secondary,fontSize:12})})},81793:($,p,t)=>{t.d(p,{P:()=>E});var e=t(39953),O=t(46101),L=t(9558),d=t(60141);const E=v=>{const m=o(v),l=D(m,v);return e.createElement(O.S,{label:"Group by function","data-testid":"cloud-monitoring-aggregation"},e.createElement(L.Ph,{width:"auto",onChange:({value:I})=>v.onChange(I),value:l,options:[{label:"Template Variables",options:v.templateVariableOptions},{label:"Aggregations",expanded:!0,options:m}],placeholder:"Select Reducer",inputId:`${v.refId}-group-by-function`,menuPlacement:"top"}))},o=({metricDescriptor:v})=>{const m=v?.valueType,l=v?.metricKind;return(0,e.useMemo)(()=>!m||!l?[]:(0,d.A_)(m,l).map(I=>({...I,label:I.text})),[m,l])},D=(v,m)=>(0,e.useMemo)(()=>[...v,...m.templateVariableOptions].find(I=>I.value===m.crossSeriesReducer),[v,m.crossSeriesReducer,m.templateVariableOptions])},40208:($,p,t)=>{t.d(p,{B:()=>o});var e=t(86832),O=t.n(e),L=t(39953),d=t(46101),E=t(38637);const o=({refId:D,value:v="",onChange:m})=>{const[l,I]=(0,L.useState)(v??""),T=(0,e.debounce)(m,1e3);return m=_=>{I(_.target.value),T(_.target.value)},L.createElement(d.S,{label:"Alias by"},L.createElement(E.I,{id:`${D}-alias-by`,value:l,onChange:m}))}},81492:($,p,t)=>{t.d(p,{v:()=>v});var e=t(39953),O=t(60481),L=t(46101),d=t(95306),E=t(60141),o=t(38818),D=t(35146);const v=({refId:m,templateVariableOptions:l,onChange:I,query:T,customMetaData:_,datasource:g,metricDescriptor:S,preprocessor:N})=>{const B=(0,e.useMemo)(()=>(0,E.kU)(_,g),[_,g]);return e.createElement(O.s,null,e.createElement(L.S,{label:"Alignment function",tooltip:"The process of alignment consists of collecting all data points received in a fixed length of time, applying a function to combine those data points, and assigning a timestamp to the result."},e.createElement(o.X,{inputId:`${m}-alignment-function`,templateVariableOptions:l,query:T,onChange:A=>I({...T,...A}),metricDescriptor:S,preprocessor:N})),e.createElement(L.S,{label:"Alignment period",tooltip:B},e.createElement(D.$,{inputId:`${m}-alignment-period`,templateVariableOptions:l,current:T.alignmentPeriod,onChange:A=>I({...T,alignmentPeriod:A}),aligmentPeriods:d.dD})))}},38818:($,p,t)=>{t.d(p,{X:()=>d});var e=t(39953),O=t(9558),L=t(60141);const d=({inputId:E,query:o,templateVariableOptions:D,onChange:v,metricDescriptor:m,preprocessor:l})=>{const{perSeriesAligner:I}=o;let{valueType:T,metricKind:_}=m||{};const{perSeriesAligner:g,alignOptions:S}=(0,e.useMemo)(()=>(0,L.ID)(T,_,I,l),[T,_,I,l]);return e.createElement(O.Ph,{onChange:({value:N})=>v({...o,perSeriesAligner:N}),value:[...S,...D].find(N=>N.value===g),options:[{label:"Template Variables",options:D},{label:"Alignment options",expanded:!0,options:S}],placeholder:"Select Alignment",inputId:E,menuPlacement:"top"})}},94307:($,p,t)=>{t.d(p,{X:()=>v});var e=t(39953),O=t(60481),L=t(46101),d=t(9558),E=t(95306),o=t(60141),D=t(81793);const v=({refId:m,labels:l=[],query:I,onChange:T,variableOptionGroup:_,metricDescriptor:g})=>{const S=(0,e.useMemo)(()=>[_,...(0,o.gY)([...l,...E.$e])],[l,_]);return e.createElement(O.s,null,e.createElement(L.S,{label:"Group by",tooltip:"You can reduce the amount of data returned for a metric by combining different time series. To combine multiple time series, you can specify a grouping and a function. Grouping is done on the basis of labels. The grouping function is used to combine the time series in the group into a single time series."},e.createElement(d.NU,{inputId:`${m}-group-by`,width:"auto",placeholder:"Choose label",options:S,value:I.groupBys??[],onChange:N=>{T({...I,groupBys:N.map(B=>B.value)})},menuPlacement:"top"})),e.createElement(D.P,{metricDescriptor:g,templateVariableOptions:_.options,crossSeriesReducer:I.crossSeriesReducer,groupBys:I.groupBys??[],onChange:N=>T({...I,crossSeriesReducer:N}),refId:m}))}},67155:($,p,t)=>{t.d(p,{p:()=>S});var e=t(39953),O=t(99456),L=t(81803),d=t(87355),E=t(46101),o=t(46298),D=t(12223),v=t(9558),m=t(60141);const l="=",I="AND",T=N=>N.flatMap(({key:B,operator:A,value:r,condition:n})=>[B,A,r,n]).slice(0,-1),_=["=","!=","=~","!=~"].map(O.E),g=["metric.type"],S=({labels:N={},filters:B,onChange:A,variableOptionGroup:r})=>{const n=(0,m.mi)(B),a=n.filter(({key:c})=>!g.includes(c)),s=n.filter(({key:c})=>g.includes(c)),i=(0,e.useMemo)(()=>[r,...(0,m.gY)(Object.keys(N))],[N,r]),u=({key:c="",value:U=""})=>{i.some(G=>G.options?i.some(H=>H.label===c):G.label===c)||i.push({label:c,value:c});const y=N.hasOwnProperty(c)?[r,...N[c].map(O.E)]:[r];return y.some(G=>G.label===U)||y.push({label:U,value:U}),{options:i,valueOptions:y}},h=c=>{const U=c.concat(s).map(({key:M,operator:y,value:K,condition:G})=>({key:M||"",operator:y||l,value:K||"",condition:G||I}));A(T(U))},P=(c,U,M)=>{const{key:y="",operator:K=l,value:G="",condition:H=I}=c,{options:b,valueOptions:F}=u(c);return e.createElement(D.Lh,{spacing:"xs",width:"auto"},e.createElement(v.Ph,{"aria-label":"Filter label key",formatCreateLabel:C=>`Use label key: ${C}`,allowCustomValue:!0,value:y,options:b,onChange:({value:C=""})=>U({key:C,operator:K,value:G,condition:H})}),e.createElement(v.Ph,{value:K,options:_,onChange:({value:C=l})=>U({key:y,operator:C,value:G,condition:H})}),e.createElement(v.Ph,{"aria-label":"Filter label value",placeholder:"add filter value",formatCreateLabel:C=>`Use label value: ${C}`,allowCustomValue:!0,value:G,options:F,onChange:({value:C=""})=>U({key:y,operator:K,value:C,condition:H})}),e.createElement(L._,{"aria-label":"Remove",icon:"times",variant:"secondary",onClick:M,type:"button"}))};return e.createElement(d.p,null,e.createElement(E.S,{label:"Filter",tooltip:"To reduce the amount of data charted, apply a filter. A filter has three components: a label, a comparison, and a value. The comparison can be an equality, inequality, or regular expression."},e.createElement(o.k,{items:a,renderItem:P,onChange:h})))}},27678:($,p,t)=>{t.d(p,{a:()=>L});var e=t(39953),O=t(68421);function L({query:d,onChange:E,onRunQuery:o}){const D=v=>{v.key==="Enter"&&(v.shiftKey||v.ctrlKey)&&(v.preventDefault(),o())};return e.createElement(e.Fragment,null,e.createElement(O.K,{name:"Query",className:"slate-query-field",value:d,rows:10,placeholder:"Enter a Cloud Monitoring MQL query (Run with Shift+Enter)",onBlur:o,onChange:v=>E(v.currentTarget.value),onKeyDown:D}))}},5822:($,p,t)=>{t.d(p,{a1:()=>r,mO:()=>N});var e=t(39953),O=t(91386),L=t(27366),d=t(93675),E=t(40208),o=t(87355),D=t(46101),v=t(12223),m=t(26286),l=t(95306),I=t(21601);const T=({refId:n,onChange:a,graphPeriod:s,variableOptionGroup:i})=>e.createElement(o.p,null,e.createElement(D.S,{label:"Graph period",htmlFor:`${n}-graph-period`,tooltip:e.createElement(e.Fragment,null,"Set ",e.createElement("code",null,"graph_period")," which forces a preferred period between points. Automatically set to the current interval if left blank.")},e.createElement(v.Lh,null,e.createElement(m.r,{"data-testid":`${n}-switch-graph-period`,value:s!=="disabled",onChange:u=>a(u.currentTarget.checked?"":"disabled")}),e.createElement(I.$d,{inputId:`${n}-graph-period`,templateVariableOptions:i.options,current:s,onChange:a,disabled:s==="disabled",aligmentPeriods:l.Ry}))));var _=t(27678),g=t(46316),S=t(6703);const N=n=>({projectName:n.getDefaultProject(),crossSeriesReducer:"REDUCE_NONE",alignmentPeriod:"cloud-monitoring-auto",perSeriesAligner:d.CS.ALIGN_MEAN,groupBys:[],filters:[]}),B=n=>({projectName:n.getDefaultProject(),query:""});function A({refId:n,query:a,datasource:s,onChange:i,onRunQuery:u,customMetaData:h,variableOptionGroup:P}){const c=(0,e.useCallback)(M=>{i({...a,timeSeriesList:M}),u()},[i,u,a]),U=(0,e.useCallback)(M=>{i({...a,timeSeriesQuery:M}),u()},[i,u,a]);return(0,e.useEffect)(()=>{a.queryType===d.xL.TIME_SERIES_LIST&&!a.timeSeriesList&&i({refId:a.refId,datasource:a.datasource,queryType:d.xL.TIME_SERIES_LIST,timeSeriesList:N(s),aliasBy:a.aliasBy}),a.queryType===d.xL.TIME_SERIES_QUERY&&!a.timeSeriesQuery&&i({refId:a.refId,datasource:a.datasource,queryType:d.xL.TIME_SERIES_QUERY,timeSeriesQuery:B(s),aliasBy:a.aliasBy})},[i,a,s]),e.createElement(O._,null,(a.queryType===d.xL.ANNOTATION||a.queryType===d.xL.TIME_SERIES_LIST)&&a.timeSeriesList&&e.createElement(S.s,{refId:n,variableOptionGroup:P,customMetaData:h,onChange:c,datasource:s,query:a.timeSeriesList,aliasBy:a.aliasBy,onChangeAliasBy:M=>i({...a,aliasBy:M})}),a.queryType===d.xL.TIME_SERIES_QUERY&&a.timeSeriesQuery&&e.createElement(e.Fragment,null,e.createElement(L.K,{gap:1,direction:"row"},e.createElement(g.I,{refId:n,datasource:s,onChange:M=>U({...a.timeSeriesQuery,projectName:M}),templateVariableOptions:P.options,projectName:a.timeSeriesQuery.projectName}),e.createElement(E.B,{refId:n,value:a.aliasBy,onChange:M=>i({...a,aliasBy:M})})),e.createElement(_.a,{onChange:M=>U({...a.timeSeriesQuery,query:M}),onRunQuery:u,query:a.timeSeriesQuery.query}),e.createElement(T,{onChange:M=>U({...a.timeSeriesQuery,graphPeriod:M}),graphPeriod:a.timeSeriesQuery.graphPeriod,refId:n,variableOptionGroup:P})))}const r=e.memo(A)},35146:($,p,t)=>{t.d(p,{$:()=>L});var e=t(39953),O=t(9558);function L({inputId:d,templateVariableOptions:E,onChange:o,current:D,disabled:v,aligmentPeriods:m}){const l=(0,e.useMemo)(()=>m.map(T=>({...T,label:T.text})),[m]),I=(0,e.useMemo)(()=>l.filter(T=>!T.hidden),[l]);return e.createElement(O.Ph,{width:"auto",onChange:({value:T})=>o(T),value:[...l,...E].find(T=>T.value===D),options:[{label:"Template Variables",options:E},{label:"Aggregations",expanded:!0,options:I}],placeholder:"Select Period",inputId:d,disabled:v,allowCustomValue:!0,menuPlacement:"top"})}},2547:($,p,t)=>{t.d(p,{A:()=>D});var e=t(39953),O=t(46101),L=t(20454),d=t(60141),E=t(93675);const o={label:"None",value:E.mG.None},D=({query:m,metricDescriptor:l,onChange:I})=>{const T=v(l);return e.createElement(O.S,{label:"Pre-processing",tooltip:"Preprocessing options are displayed when the selected metric has a metric kind of delta or cumulative. The specific options available are determined by the metric's value type. If you select 'Rate', data points are aligned and converted to a rate per time series. If you select 'Delta', data points are aligned by their delta (difference) per time series"},e.createElement(L.S,{onChange:_=>{const{perSeriesAligner:g}=m,{valueType:S,metricKind:N}=l??{},{perSeriesAligner:B}=(0,d.ID)(S,N,g,_);I({...m,preprocessor:_,perSeriesAligner:B})},value:m.preprocessor??E.mG.None,options:T}))},v=m=>{const l=m?.metricKind,I=m?.valueType;return(0,e.useMemo)(()=>{if(!l||l===E.lH.GAUGE||I===E.$h.DISTRIBUTION)return[o];const T=[o,{label:"Rate",value:E.mG.Rate,description:"Data points are aligned and converted to a rate per time series"}];return l===E.lH.CUMULATIVE?[...T,{label:"Delta",value:E.mG.Delta,description:"Data points are aligned by their delta (difference) per time series"}]:T},[l,I])}},46316:($,p,t)=>{t.d(p,{I:()=>d});var e=t(39953),O=t(46101),L=t(9558);function d({refId:E,projectName:o,datasource:D,onChange:v,templateVariableOptions:m}){const[l,I]=(0,e.useState)([]);(0,e.useEffect)(()=>{D.getProjects().then(_=>I(_))},[D]);const T=(0,e.useMemo)(()=>[{label:"Template Variables",options:m},...l],[l,m]);return e.createElement(O.S,{label:"Project"},e.createElement(L.Ph,{width:"auto",allowCustomValue:!0,formatCreateLabel:_=>`Use project: ${_}`,onChange:({value:_})=>v(_),options:T,value:{value:o,label:o},placeholder:"Select Project",inputId:`${E}-project`}))}},32231:($,p,t)=>{t.d(p,{W:()=>r});var e=t(39953),O=t(99456),L=t(91386),d=t(93675),E=t(87355),o=t(46101),D=t(68421),v=t(38637),m=t(46316);const l=n=>({projectName:n.getDefaultProject(),expr:"",step:"10s"});function I({refId:n,query:a,datasource:s,onChange:i,variableOptionGroup:u,onRunQuery:h}){function P(c){c.key==="Enter"&&c.shiftKey&&(h(),c.preventDefault(),c.stopPropagation())}return e.createElement(e.Fragment,null,e.createElement(E.p,null,e.createElement(m.I,{refId:n,templateVariableOptions:u.options,projectName:a.projectName,datasource:s,onChange:c=>i({...a,projectName:c})}),e.createElement(D.K,{name:"Query",className:"slate-query-field",value:a.expr,rows:10,placeholder:"Enter a Cloud Monitoring Prometheus query (Run with Shift+Enter)",onBlur:h,onKeyDown:P,onChange:c=>i({...a,expr:c.currentTarget.value})}),e.createElement(o.S,{label:"Min step",tooltip:"Time units and built-in variables can be used here, for example: $__interval, $__rate_interval, 5s, 1m, 3h, 1d, 1y (Default if no unit is specified: 10s)"},e.createElement(v.I,{type:"string",placeholder:"auto",onChange:c=>i({...a,step:c.currentTarget.value}),onKeyDown:P,value:a.step??""}))))}var T=t(34397),_=t(56504),g=t(13579),S=t(95306);const N=n=>{const{query:a,onChange:s,onRunQuery:i}=n,{queryType:u}=a;return e.createElement(T.K,null,e.createElement(_.X,{label:"Query type",options:S.XI,value:u,onChange:({value:h})=>{s({...a,queryType:h}),i()}}),e.createElement(g.B,{grow:1}))};var B=t(68354),A=t(21601);const r=n=>{const{datasource:a,query:s,onRunQuery:i,onChange:u}=n,[h,P]=(0,e.useState)(!1),c=(0,e.useMemo)(()=>{if(!h){P(!0);const C=a.migrateQuery(s);return u({...C}),C}return s},[s,a,u,h]),U={...(0,B.w)(a),...c.sloQuery},M=C=>{u({...c,sloQuery:C}),i()},y={projectName:a.getDefaultProject(),expr:"",step:"10s",...c.promQLQuery},K=C=>{u({...c,promQLQuery:C})},H=(n.data?.series.length?n.data?.series[0].meta:{})?.custom??{},b={label:"Template Variables",expanded:!1,options:a.getVariables().map(O.E)};(0,e.useEffect)(()=>{(!c.queryType||!Object.values(d.xL).includes(c.queryType))&&u({...c,queryType:d.xL.TIME_SERIES_LIST})});const F=c.queryType;return e.createElement(L._,null,e.createElement(N,{query:c,onChange:u,onRunQuery:i}),F===d.xL.PROMQL&&e.createElement(I,{refId:c.refId,variableOptionGroup:b,onChange:K,onRunQuery:i,datasource:a,query:y}),F!==d.xL.SLO&&e.createElement(A.a1,{refId:c.refId,variableOptionGroup:b,customMetaData:H,onChange:u,onRunQuery:i,datasource:a,query:c}),F===d.xL.SLO&&e.createElement(A.D6,{refId:c.refId,variableOptionGroup:b,customMetaData:H,onChange:M,onRunQuery:i,datasource:a,query:U,aliasBy:c.aliasBy,onChangeAliasBy:C=>u({...c,aliasBy:C})}))}},68354:($,p,t)=>{t.d(p,{D:()=>B,w:()=>N});var e=t(39953),O=t(87355),L=t(60481),d=t(46101),E=t(95306),o=t(60141),D=t(93675),v=t(40208),m=t(9558);const l=({refId:A,current:r,templateVariableOptions:n,onChange:a})=>{const s=E.yy.map(u=>({...u,label:u.text}));r&&!s.find(u=>u.value===r)&&s.push({label:r,text:r,value:r,hidden:!1});const i=s.filter(u=>!u.hidden);return e.createElement(d.S,{label:"Lookback period",htmlFor:`${A}-lookback-period`},e.createElement(m.Ph,{inputId:`${A}-lookback-period`,width:"auto",allowCustomValue:!0,value:[...s,...n].find(u=>u.value===r),options:[{label:"Template Variables",options:n},{label:"Predefined periods",expanded:!0,options:i}],onChange:({value:u})=>a(u)}))};var I=t(35146),T=t(46316);const _=({refId:A,query:r,templateVariableOptions:n,onChange:a,datasource:s})=>{const[i,u]=(0,e.useState)([]),{projectName:h,serviceId:P}=r;return(0,e.useEffect)(()=>{!h||!P||s.getServiceLevelObjectives(h,P).then(c=>{u([{label:"Template Variables",options:n},...c])})},[s,h,P,n]),e.createElement(d.S,{label:"SLO"},e.createElement(m.Ph,{inputId:`${A}-slo`,width:"auto",allowCustomValue:!0,value:r?.sloId&&{value:r?.sloId,label:r?.sloName||r?.sloId},placeholder:"Select SLO",options:i,onChange:async({value:c="",label:U=""})=>{const y=(await s.getServiceLevelObjectives(h,P)).find(({value:K})=>K===s.templateSrv.replace(c));a({...r,sloId:c,sloName:U,goal:y?.goal})}}))},g=({refId:A,query:r,templateVariableOptions:n,onChange:a,datasource:s})=>e.createElement(d.S,{label:"Selector",htmlFor:`${A}-slo-selector`},e.createElement(m.Ph,{inputId:`${A}-slo-selector`,width:"auto",allowCustomValue:!0,value:[...E.IR,...n].find(i=>i.value===r?.selectorName),options:[{label:"Template Variables",options:n},...E.IR],onChange:({value:i})=>a({...r,selectorName:i??""})})),S=({refId:A,query:r,templateVariableOptions:n,onChange:a,datasource:s})=>{const[i,u]=(0,e.useState)([]),{projectName:h}=r;return(0,e.useEffect)(()=>{h&&s.getSLOServices(h).then(P=>{u([{label:"Template Variables",options:n},...P])})},[s,h,n]),e.createElement(d.S,{label:"Service"},e.createElement(m.Ph,{inputId:`${A}-slo-service`,width:"auto",allowCustomValue:!0,value:r?.serviceId&&{value:r?.serviceId,label:r?.serviceName||r?.serviceId},placeholder:"Select service",options:i,onChange:({value:P="",label:c=""})=>a({...r,serviceId:P,serviceName:c,sloId:""})}))},N=A=>({projectName:A.getDefaultProject(),alignmentPeriod:"cloud-monitoring-auto",perSeriesAligner:D.CS.ALIGN_MEAN,aliasBy:"",selectorName:"select_slo_health",serviceId:"",serviceName:"",sloId:"",sloName:"",lookbackPeriod:""});function B({refId:A,query:r,datasource:n,onChange:a,variableOptionGroup:s,customMetaData:i,aliasBy:u,onChangeAliasBy:h}){const P=(0,e.useMemo)(()=>(0,o.kU)(i,n),[i,n]);return e.createElement(e.Fragment,null,e.createElement(O.p,null,e.createElement(T.I,{refId:A,templateVariableOptions:s.options,projectName:r.projectName,datasource:n,onChange:c=>a({...r,projectName:c})}),e.createElement(S,{refId:A,datasource:n,templateVariableOptions:s.options,query:r,onChange:a}),e.createElement(_,{refId:A,datasource:n,templateVariableOptions:s.options,query:r,onChange:a}),e.createElement(g,{refId:A,datasource:n,templateVariableOptions:s.options,query:r,onChange:a}),r.selectorName===E.Fh&&e.createElement(l,{refId:A,onChange:c=>a({...r,lookbackPeriod:c}),current:r.lookbackPeriod,templateVariableOptions:s.options}),e.createElement(L.s,null,e.createElement(d.S,{label:"Alignment period",tooltip:P},e.createElement(I.$,{inputId:`${A}-alignment-period`,templateVariableOptions:s.options,current:r.alignmentPeriod,onChange:c=>a({...r,alignmentPeriod:c}),aligmentPeriods:E.dD}))),e.createElement(v.B,{refId:A,value:u,onChange:h})))}},6703:($,p,t)=>{t.d(p,{s:()=>h});var e=t(41407),O=t(97368),L=t.n(O),d=t(86832),E=t.n(d),o=t(39953),D=t(87355),v=t(60481),m=t(46101),l=t(72639),I=t(82803),T=t(15246),_=t(9558),g=t(60141),S=t(93675),N=t(40208),B=t(81492),A=t(94307),r=t(67155),n=t(5822),a=t(2547),s=t(46316);function i({refId:P,onChange:c,datasource:U,query:M,variableOptionGroup:y,customMetaData:K,aliasBy:G,onChangeAliasBy:H}){const[b,F]=(0,o.useState)({}),[C,Ee]=(0,o.useState)([]),[ee,ne]=(0,o.useState)(),[se,te]=(0,o.useState)([]),[ae,ce]=(0,o.useState)([]),[z,le]=(0,o.useState)(""),[X,me]=(0,o.useState)({...U.timeSrv.timeRange()});(f=>{X!==null&&(X.raw.from.toString()!==f.raw.from.toString()||X.raw.to.toString()!==f.raw.to.toString())&&me({...f})})(U.timeSrv.timeRange());const ue=(0,I.l4)(),J=(0,T.D)(ue),Z=(0,I.wW)(u),{projectName:V,groupBys:oe,crossSeriesReducer:re}=M,j=(0,g.WH)(M),{templateSrv:w}=U,k=(0,o.useCallback)((f,x)=>f.find(R=>R.type===w.replace(x)),[w]);(0,o.useEffect)(()=>{V&&j&&U.getLabels(j,P,V,{groupBys:oe,crossSeriesReducer:re},X).then(f=>F(f))},[U,oe,j,V,P,re,X]),(0,o.useEffect)(()=>{(async()=>{if(V){const x=await U.getMetricTypes(V);(0,l.ff)("cloud-monitoring-metric-descriptors-loaded",{count:x.length});const R=ve(x);Ee(x),ce(R)}})()},[U,V,Z,J.optionDescription]),(0,o.useEffect)(()=>{const x=(Y=>{const q=k(Y,j);return q?Y.filter(Q=>Q.service===q.service).map(Q=>({service:Q.service,value:Q.type,label:Q.displayName,component:function(){return o.createElement("div",null,o.createElement("div",{className:Z},Q.type),o.createElement("div",{className:J.optionDescription},Q.description))}})):[]})(C),R=x.length>0?x[0].service:"",W=k(C,j);ne(W),te(x),le(R)},[C,k,j,Z,J.optionDescription]);const de=({value:f})=>{const x=C.filter(R=>R.service===w.replace(f)).map(R=>({service:R.service,value:R.type,label:R.displayName,description:R.description}));M.filters=[],x.length>0&&!x.some(R=>R.value===w.replace(j))?(ie(x[0]),le(f),te(x)):(le(f),te(x))},ve=f=>{const x=f.map(R=>({value:R.service,label:(0,d.startCase)(R.serviceShortName)}));return x.length>0?(0,d.uniqBy)(x,R=>R.value):[]},Ie=async f=>{const R=(await U.filterMetricsByType(V,z)).filter(W=>W.type.includes(f.toLowerCase())).map(W=>({value:W.type,label:W.displayName,component:function(){return o.createElement("div",null,o.createElement("div",{className:Z},W.type),o.createElement("div",{className:J.optionDescription},W.description))}}));return[{label:"Template Variables",options:y.options},...R]},Te=L()(Ie,400),ie=({value:f})=>{const x=k(C,f);ne(x);const{metricKind:R,valueType:W}=x,Y=R===S.lH.GAUGE||W===S.$h.DISTRIBUTION?S.mG.None:S.mG.Rate,{perSeriesAligner:q}=(0,g.ID)(W,R,M.perSeriesAligner,Y);Object.assign(M,{...(0,n.mO)(U),projectName:M.projectName,filters:M.filters}),c({...(0,g.Av)({...M,perSeriesAligner:q},f),preprocessor:Y})};return o.createElement(o.Fragment,null,o.createElement(D.p,null,o.createElement(v.s,null,o.createElement(s.I,{refId:P,templateVariableOptions:y.options,projectName:V,datasource:U,onChange:f=>{c({...M,projectName:f})}}),o.createElement(m.S,{label:"Service",width:"auto"},o.createElement(_.Ph,{width:"auto",onChange:de,isLoading:ae.length===0,value:[...ae,...y.options].find(f=>f.value===z),options:[{label:"Template Variables",options:y.options},...ae],placeholder:"Select Services",inputId:`${P}-service`})),o.createElement(m.S,{label:"Metric name",width:"auto",htmlFor:`${P}-select-metric`},o.createElement("span",{title:z===""?"Select a service first":"Type to search metrics"},o.createElement(_.qb,{width:"auto",onChange:ie,value:[...se,...y.options].find(f=>f.value===j),loadOptions:Te,defaultOptions:[{label:"Template Variables",options:y.options},...se.slice(0,100)],placeholder:"Select Metric",inputId:`${P}-select-metric`,disabled:z===""}))))),o.createElement(o.Fragment,null,o.createElement(r.p,{labels:b,filters:M.filters,onChange:f=>c({...M,filters:f}),variableOptionGroup:y}),o.createElement(D.p,null,o.createElement(a.A,{metricDescriptor:ee,query:M,onChange:c}),o.createElement(A.X,{refId:P,labels:Object.keys(b),query:M,onChange:c,variableOptionGroup:y,metricDescriptor:ee}),o.createElement(B.v,{refId:P,datasource:U,templateVariableOptions:y.options,query:M,customMetaData:K,onChange:c,metricDescriptor:ee,preprocessor:M.preprocessor}),o.createElement(N.B,{refId:P,value:G,onChange:H}))))}const u=P=>(0,e.css)`
  label: grafana-select-option-description;
  font-weight: normal;
  font-style: italic;
  color: ${P.colors.text.secondary};
`,h=o.memo(i)},21601:($,p,t)=>{t.d(p,{zI:()=>o,a1:()=>l.a1,$d:()=>B.$,D6:()=>I.D,Th:()=>S});var e=t(46316),O=t(94307),L=t(81492),d=t(67155),E=t(39953);const o=()=>E.createElement("div",{className:"gf-form grafana-info-box alert-info"},E.createElement("div",null,E.createElement("h5",null,"Annotation Query Format"),E.createElement("p",null,"An annotation is an event that is overlaid on top of graphs. Annotation rendering is expensive so it is important to limit the number of rows returned."," "),E.createElement("p",null,"The Title and Text fields support templating and can use data returned from the query. For example, the Title field could have the following text:"),E.createElement("code",null,"{{metric.type}}"," has value: ","{{metric.value}}"),E.createElement("p",null,"Example Result: ",E.createElement("code",null,"monitoring.googleapis.com/uptime_check/http_status has this value: 502")),E.createElement("span",null,"Patterns:"),E.createElement("p",null,E.createElement("code",null,"{{metric.value}}")," = value of the metric/point"),E.createElement("p",null,E.createElement("code",null,"{{metric.type}}")," = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"),E.createElement("p",null,E.createElement("code",null,"{{metric.name}}")," = name part of metric e.g. instance/cpu/usage_time"),E.createElement("p",null,E.createElement("code",null,"{{metric.service}}")," = service part of metric e.g. compute"),E.createElement("p",null,E.createElement("code",null,"{{metric.label.label_name}}")," = Metric label metadata e.g. metric.label.instance_name"),E.createElement("p",null,E.createElement("code",null,"{{resource.label.label_name}}")," = Resource label metadata e.g. resource.label.zone")));var D=t(38818),v=t(40208),m=t(81793),l=t(5822),I=t(68354),T=t(27678),_=t(96227),g=t(9558);const S=({label:r,onChange:n,value:a,options:s,allowCustomValue:i=!1})=>E.createElement(_.g,{label:r},E.createElement(g.Ph,{width:25,allowCustomValue:i,value:a,onChange:({value:u})=>n(u),options:s}));var N=t(6703),B=t(35146),A=t(2547)},95306:($,p,t)=>{t.d(p,{$e:()=>I,Eu:()=>o,Fh:()=>T,IR:()=>_,Ry:()=>m,XI:()=>g,dD:()=>v,lx:()=>D,yy:()=>l});var e=t(93675);const O=71,L=19,d=14,E=28,o=[{text:"none",value:"ALIGN_NONE",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION,e.$h.STRING,e.$h.VALUE_TYPE_UNSPECIFIED,e.$h.BOOL],metricKinds:[e.lH.GAUGE]},{text:"delta",value:"ALIGN_DELTA",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.CUMULATIVE,e.lH.DELTA]},{text:"rate",value:"ALIGN_RATE",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.CUMULATIVE,e.lH.DELTA]},{text:"interpolate",value:"ALIGN_INTERPOLATE",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE]},{text:"next older",value:"ALIGN_NEXT_OLDER",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION,e.$h.STRING,e.$h.VALUE_TYPE_UNSPECIFIED,e.$h.BOOL],metricKinds:[e.lH.GAUGE]},{text:"min",value:"ALIGN_MIN",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"max",value:"ALIGN_MAX",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"mean",value:"ALIGN_MEAN",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"count",value:"ALIGN_COUNT",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.BOOL],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"sum",value:"ALIGN_SUM",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"stddev",value:"ALIGN_STDDEV",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"count true",value:"ALIGN_COUNT_TRUE",valueTypes:[e.$h.BOOL],metricKinds:[e.lH.GAUGE]},{text:"count false",value:"ALIGN_COUNT_FALSE",valueTypes:[e.$h.BOOL],metricKinds:[e.lH.GAUGE]},{text:"fraction true",value:"ALIGN_FRACTION_TRUE",valueTypes:[e.$h.BOOL],metricKinds:[e.lH.GAUGE]},{text:"percentile 99",value:"ALIGN_PERCENTILE_99",valueTypes:[e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"percentile 95",value:"ALIGN_PERCENTILE_95",valueTypes:[e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"percentile 50",value:"ALIGN_PERCENTILE_50",valueTypes:[e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"percentile 05",value:"ALIGN_PERCENTILE_05",valueTypes:[e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"percent change",value:"ALIGN_PERCENT_CHANGE",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA]}],D=[{text:"none",value:"REDUCE_NONE",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION,e.$h.BOOL,e.$h.STRING],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE,e.lH.METRIC_KIND_UNSPECIFIED]},{text:"mean",value:"REDUCE_MEAN",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]},{text:"min",value:"REDUCE_MIN",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE,e.lH.METRIC_KIND_UNSPECIFIED]},{text:"max",value:"REDUCE_MAX",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE,e.lH.METRIC_KIND_UNSPECIFIED]},{text:"sum",value:"REDUCE_SUM",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE,e.lH.METRIC_KIND_UNSPECIFIED]},{text:"std. dev.",value:"REDUCE_STDDEV",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE,e.lH.METRIC_KIND_UNSPECIFIED]},{text:"count",value:"REDUCE_COUNT",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION,e.$h.BOOL,e.$h.STRING],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]},{text:"count true",value:"REDUCE_COUNT_TRUE",valueTypes:[e.$h.BOOL],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"count false",value:"REDUCE_COUNT_FALSE",valueTypes:[e.$h.BOOL],metricKinds:[e.lH.GAUGE,e.lH.DELTA]},{text:"99th percentile",value:"REDUCE_PERCENTILE_99",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]},{text:"95th percentile",value:"REDUCE_PERCENTILE_95",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]},{text:"50th percentile",value:"REDUCE_PERCENTILE_50",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]},{text:"5th percentile",value:"REDUCE_PERCENTILE_05",valueTypes:[e.$h.INT64,e.$h.DOUBLE,e.$h.MONEY,e.$h.DISTRIBUTION],metricKinds:[e.lH.GAUGE,e.lH.DELTA,e.lH.CUMULATIVE]}],v=[{text:"grafana auto",value:"grafana-auto"},{text:"stackdriver auto",value:"stackdriver-auto",hidden:!0},{text:"cloud monitoring auto",value:"cloud-monitoring-auto"},{text:"1m",value:"+60s"},{text:"2m",value:"+120s"},{text:"5m",value:"+300s"},{text:"10m",value:"+600s"},{text:"30m",value:"+1800s"},{text:"1h",value:"+3600s"},{text:"3h",value:"+7200s"},{text:"6h",value:"+21600s"},{text:"1d",value:"+86400s"},{text:"3d",value:"+259200s"},{text:"1w",value:"+604800s"}],m=[{text:"auto",value:"auto"},{text:"1m",value:"1m"},{text:"2m",value:"2m"},{text:"5m",value:"5m"},{text:"10m",value:"10m"},{text:"30m",value:"30m"},{text:"1h",value:"1h"},{text:"3h",value:"3h"},{text:"6h",value:"6h"},{text:"1d",value:"1d"},{text:"3d",value:"3d"},{text:"1w",value:"1w"}],l=[{text:"1m",value:"1m"},{text:"2m",value:"2m"},{text:"5m",value:"5m"},{text:"10m",value:"10m"},{text:"30m",value:"30m"},{text:"1h",value:"1h"},{text:"3h",value:"3h"},{text:"6h",value:"6h"},{text:"24h",value:"24h"},{text:"72h",value:"72h"}],I=["metadata.system_labels.cloud_account","metadata.system_labels.name","metadata.system_labels.region","metadata.system_labels.state","metadata.system_labels.instance_group","metadata.system_labels.node_name","metadata.system_labels.service_name","metadata.system_labels.top_level_controller_type","metadata.system_labels.top_level_controller_name","metadata.system_labels.container_image"],T="select_slo_burn_rate",_=[{label:"SLI Value",value:"select_slo_health"},{label:"SLO Compliance",value:"select_slo_compliance"},{label:"SLO Error Budget Remaining",value:"select_slo_budget_fraction"},{label:"SLO Burn Rate",value:T}],g=[{label:"Builder",value:e.xL.TIME_SERIES_LIST},{label:"MQL",value:e.xL.TIME_SERIES_QUERY},{label:"Service Level Objectives (SLO)",value:e.xL.SLO},{label:"PromQL",value:e.xL.PROMQL}]},60141:($,p,t)=>{t.d(p,{A_:()=>I,Av:()=>A,FL:()=>m,ID:()=>_,Qd:()=>T,Qf:()=>v,WH:()=>B,gY:()=>g,kU:()=>N,mi:()=>S,oU:()=>l,qA:()=>D});var e=t(86832),O=t.n(e),L=t(81626),d=t(79059),E=t(95306),o=t(93675);const D=r=>(0,e.uniqBy)(r,"service"),v=(r,n)=>r.filter(a=>a.service===n),m=(r,n,a,s)=>{const i=v(r,s).map(c=>({value:c.type,name:c.displayName})),u=i.some(c=>c.value===a),h=i.length?i[0].value:"";return{metricTypes:i,selectedMetricType:u?n:h}},l=(r,n,a)=>(a&&a===o.mG.Rate&&(n=o.lH.GAUGE),r?E.Eu.filter(s=>s.valueTypes.indexOf(r)!==-1&&s.metricKinds.indexOf(n)!==-1):[]),I=(r,n)=>n?E.lx.filter(a=>a.valueTypes.indexOf(r)!==-1&&a.metricKinds.indexOf(n)!==-1):[],T=async(r,n,a)=>{const s="handleLabelKeysQuery",i=await r.getLabels(n,s,a);return[...Object.keys(i),...E.$e]},_=(r=o.$h.DOUBLE,n=o.lH.GAUGE,a=o.CS.ALIGN_MEAN,s)=>{const i=(0,d.J)(),u=l(r,n,s).map(h=>({...h,label:h.text}));return u.some(h=>h.value===i.replace(a))||(a=u.length>0?u[0].value:o.CS.ALIGN_MEAN),{alignOptions:u,perSeriesAligner:a}},g=r=>{const n=r.reduce((a,s)=>{const i=s.split(".").map(e.startCase),u=(i.length===2?i:(0,e.initial)(i)).join(" "),h={value:s,label:s};return a[u]?a[u]=[...a[u],h]:a[u]=[h],a},{});return Object.entries(n).map(([a,s])=>({label:a,options:s,expanded:!0}),[])},S=r=>(0,e.chunk)(r,4).map(([n,a,s,i="AND"])=>({key:n,operator:a,value:s,condition:i})),N=(r,n)=>{const{perSeriesAligner:a,alignmentPeriod:s}=r;if(!s||!a)return"";const i=E.Eu.find(P=>P.value===n.templateSrv.replace(a)),u=parseInt(s,10);return`${L.secondsToHms(u)} interval (${i?.text??""})`},B=r=>{const n=r?.filters?.findIndex(s=>s==="metric.type");return r?.filters?.[n+2]||""},A=(r,n)=>{if(!r.filters)return r.filters=["metric.type","=",n],r;const a=r?.filters?.findIndex(s=>s==="metric.type");return a===-1?r.filters.push("metric.type","=",n):r.filters[a+2]=n,r}},93675:($,p,t)=>{t.d(p,{CS:()=>D,Bp:()=>m,lH:()=>E,mG:()=>L,xL:()=>e,$h:()=>o});var e=(l=>(l.ANNOTATION="annotation",l.PROMQL="promQL",l.SLO="slo",l.TIME_SERIES_LIST="timeSeriesList",l.TIME_SERIES_QUERY="timeSeriesQuery",l))(e||{});const O={filters:[],groupBys:[],secondaryGroupBys:[]};var L=(l=>(l.Delta="delta",l.None="none",l.Rate="rate",l))(L||{});const d={filters:[],groupBys:[]};var E=(l=>(l.CUMULATIVE="CUMULATIVE",l.DELTA="DELTA",l.GAUGE="GAUGE",l.METRIC_KIND_UNSPECIFIED="METRIC_KIND_UNSPECIFIED",l))(E||{}),o=(l=>(l.BOOL="BOOL",l.DISTRIBUTION="DISTRIBUTION",l.DOUBLE="DOUBLE",l.INT64="INT64",l.MONEY="MONEY",l.STRING="STRING",l.VALUE_TYPE_UNSPECIFIED="VALUE_TYPE_UNSPECIFIED",l))(o||{}),D=(l=>(l.ALIGN_COUNT="ALIGN_COUNT",l.ALIGN_COUNT_FALSE="ALIGN_COUNT_FALSE",l.ALIGN_COUNT_TRUE="ALIGN_COUNT_TRUE",l.ALIGN_DELTA="ALIGN_DELTA",l.ALIGN_FRACTION_TRUE="ALIGN_FRACTION_TRUE",l.ALIGN_INTERPOLATE="ALIGN_INTERPOLATE",l.ALIGN_MAX="ALIGN_MAX",l.ALIGN_MEAN="ALIGN_MEAN",l.ALIGN_MIN="ALIGN_MIN",l.ALIGN_NEXT_OLDER="ALIGN_NEXT_OLDER",l.ALIGN_NONE="ALIGN_NONE",l.ALIGN_PERCENTILE_05="ALIGN_PERCENTILE_05",l.ALIGN_PERCENTILE_50="ALIGN_PERCENTILE_50",l.ALIGN_PERCENTILE_95="ALIGN_PERCENTILE_95",l.ALIGN_PERCENTILE_99="ALIGN_PERCENTILE_99",l.ALIGN_PERCENT_CHANGE="ALIGN_PERCENT_CHANGE",l.ALIGN_RATE="ALIGN_RATE",l.ALIGN_STDDEV="ALIGN_STDDEV",l.ALIGN_SUM="ALIGN_SUM",l))(D||{});const v={filters:[]};var m=(l=>(l.Aggregations="aggregations",l.Aligners="aligners",l.AlignmentPeriods="alignmentPeriods",l.DefaultProject="defaultProject",l.LabelKeys="labelKeys",l.LabelValues="labelValues",l.MetricTypes="metricTypes",l.Projects="projects",l.ResourceTypes="resourceTypes",l.SLO="slo",l.SLOServices="sloServices",l.Selectors="selectors",l.Services="services",l))(m||{})}}]);

//# sourceMappingURL=2231.eef5d08bc67d9591c95a.js.map