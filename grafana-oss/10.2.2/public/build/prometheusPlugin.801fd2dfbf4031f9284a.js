"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7004],{71190:(ue,W,l)=>{l.d(W,{O6:()=>n,Ql:()=>J,ZO:()=>O,f0:()=>H,qV:()=>_,we:()=>K,xu:()=>X,zj:()=>N});var w=l(14091),e=l(82473),Z=l(88553),P=l(83566);function K(s,E){const v=[C()],x=["$__auto"];let c;return s===P.B5.QuantileOverTime&&(x.push("0.95"),v.push({name:"Quantile",type:"number"})),E&&(v.push({name:"By label",type:"string",restParam:!0,optional:!0}),c=(0,e.ZI)(`__${s}_by`)),{id:s,name:(0,e.t7)(s),params:v,defaultParams:x,alternativesKey:"range function",category:P.Ly.RangeFunctions,orderRank:P.jK.RangeVectorFunction,renderer:q,addOperationHandler:H,paramChangedHandler:c,explainHandler:(p,$)=>{let S=Z.r8.find(B=>B.insertText===p.id)?.documentation??"";return p.params[0]==="$__auto"?`${S} \`$__auto\` is a variable that will be replaced with the [value of step](https://grafana.com/docs/grafana/next/datasources/loki/query-editor/#options) for range queries and with the value of the selected time range (calculated to - from) for instant queries.`:`${S} The [range vector](https://grafana.com/docs/loki/latest/logql/metric_queries/#range-vector-aggregation) is set to \`${p.params[0]}\`.`}}}function n(s){const E=K(s,!0),v=E.params.slice(0,-1);return[E,{id:`__${s}_by`,name:`${(0,e.t7)(s)} by`,params:[...v,{name:"Label",type:"string",restParam:!0,optional:!0,editor:w.g}],defaultParams:[...E.defaultParams,""],alternativesKey:"range function with grouping",category:P.Ly.RangeFunctions,renderer:z(s,"by"),paramChangedHandler:(0,e.j8)(s),explainHandler:(0,e.Sp)(s,"by"),addOperationHandler:H,hideFromList:!0},{id:`__${s}_without`,name:`${(0,e.t7)(s)} without`,params:[...v,{name:"Label",type:"string",restParam:!0,optional:!0,editor:w.g}],defaultParams:[...E.defaultParams,""],alternativesKey:"range function with grouping",category:P.Ly.RangeFunctions,renderer:z(s,"without"),paramChangedHandler:(0,e.j8)(s),explainHandler:(0,e.Sp)(s,"without"),addOperationHandler:H,hideFromList:!0}]}function z(s,E){return function(x,c,p){const $=c.params.findIndex(k=>k.restParam),S=x.params.slice(0,$),B=x.params.slice($);return S.length===2&&s===P.B5.QuantileOverTime?`${s}(${S[1]}, ${p} [${S[0]}]) ${E} (${B.join(", ")})`:`${s}(${p} [${S[0]}]) ${E} (${B.join(", ")})`}}function q(s,E,v){const x=s.params??[],c=x[0]??"$__auto";if(x.length===2&&s.id===P.B5.QuantileOverTime){const p=x[1];return`${s.id}(${p}, ${v} [${c}])`}return`${s.id}(${v} [${x[0]??"$__auto"}])`}function X(s,E,v){return["<","<=",">",">="].includes(String(s.params[1]))?`${v} | ${s.params[0]} ${s.params[1]} ${s.params[2]}`:`${v} | ${s.params[0]} ${s.params[1]} \`${s.params[2]}\``}function O(s,E){const v=s.params[1].toString().startsWith("!");return E.filter(p=>p.id===P.B5.LabelFilter&&p.params[0]===s.params[0]&&p.params[2]===s.params[2]).some(p=>!!(v&&p.params[1].toString().startsWith("!")===!1||v===!1&&p.params[1].toString().startsWith("!")))}function J(s,E,v){switch(s.id){case P.B5.Logfmt:const[x=!1,c=!1,...p]=s.params;return`${v} | logfmt${x?" --strict":""}${c?" --keep-empty":""} ${p.join(", ")}`.trim();default:return`${v} | ${s.id}`}}function I(s){return s.category===P.Ly.RangeFunctions}function U(s,E,v){const x=s.findIndex(c=>{const p=E.getOperationDef(c.id);return p?v(p):!1});return x===-1?s.length:x}function H(s,E,v){const x={id:s.id,params:s.defaultParams},c=[...E.operations],p=c.find($=>{const S=v.getOperationDef($.id);return S?I(S):!1});switch(s.category){case P.Ly.Aggregations:case P.Ly.Functions:if(!p){const S=U(c,v,B=>B.category===P.Ly.Functions);c.splice(S,0,{id:P.B5.Rate,params:["$__auto"]})}c.push(x);break;case P.Ly.RangeFunctions:if(p){const S=c.indexOf(p);c[S]=x;break}default:const $=U(c,v,S=>(s.orderRank??100)<(S.orderRank??100));c.splice($,0,x);break}return{...E,operations:c}}function _(s,E){return{...E,binaryQueries:[...E.binaryQueries??[],{operator:"/",query:E}]}}function N(s,E){return function(x,c,p){return E?`${p} ${s} \`(?i)${x.params[0]}\``:`${p} ${s} \`${x.params[0]}\``}}function C(){return{name:"Range",type:"string",options:["$__auto","1m","5m","10m","1h","24h"]}}},83566:(ue,W,l)=>{l.d(W,{AI:()=>K,B5:()=>Z,Hv:()=>w,Ly:()=>e,jK:()=>P});var w=(n=>(n.Log="log",n.Metric="metric",n))(w||{}),e=(n=>(n.Aggregations="Aggregations",n.RangeFunctions="Range functions",n.Functions="Functions",n.Formats="Formats",n.LineFilters="Line filters",n.LabelFilters="Label filters",n.BinaryOps="Binary operations",n))(e||{}),Z=(n=>(n.Json="json",n.Logfmt="logfmt",n.Regexp="regexp",n.Pattern="pattern",n.Unpack="unpack",n.LineFormat="line_format",n.LabelFormat="label_format",n.Decolorize="decolorize",n.Drop="drop",n.Keep="keep",n.Rate="rate",n.RateCounter="rate_counter",n.CountOverTime="count_over_time",n.SumOverTime="sum_over_time",n.AvgOverTime="avg_over_time",n.MaxOverTime="max_over_time",n.MinOverTime="min_over_time",n.FirstOverTime="first_over_time",n.LastOverTime="last_over_time",n.StdvarOverTime="stdvar_over_time",n.StddevOverTime="stddev_over_time",n.QuantileOverTime="quantile_over_time",n.BytesRate="bytes_rate",n.BytesOverTime="bytes_over_time",n.AbsentOverTime="absent_over_time",n.Sum="sum",n.Avg="avg",n.Min="min",n.Max="max",n.Stddev="stddev",n.Stdvar="stdvar",n.Count="count",n.TopK="topk",n.BottomK="bottomk",n.LineContains="__line_contains",n.LineContainsNot="__line_contains_not",n.LineContainsCaseInsensitive="__line_contains_case_insensitive",n.LineContainsNotCaseInsensitive="__line_contains_not_case_insensitive",n.LineMatchesRegex="__line_matches_regex",n.LineMatchesRegexNot="__line_matches_regex_not",n.LineFilterIpMatches="__line_filter_ip_matches",n.LabelFilter="__label_filter",n.LabelFilterNoErrors="__label_filter_no_errors",n.LabelFilterIpMatches="__label_filter_ip_marches",n.Unwrap="unwrap",n.SumBy="__sum_by",n.SumWithout="__sum_without",n.Addition="__addition",n.Subtraction="__subtraction",n.MultiplyBy="__multiply_by",n.DivideBy="__divide_by",n.Modulo="__modulo",n.Exponent="__exponent",n.NestedQuery="__nested_query",n.EqualTo="__equal_to",n.NotEqualTo="__not_equal_to",n.GreaterThan="__greater_than",n.LessThan="__less_than",n.GreaterOrEqual="__greater_or_equal",n.LessOrEqual="__less_or_equal",n))(Z||{}),P=(n=>(n[n.LineFilters=1]="LineFilters",n[n.Parsers=2]="Parsers",n[n.PipeOperations=3]="PipeOperations",n[n.Unwrap=4]="Unwrap",n[n.NoErrors=5]="NoErrors",n[n.RangeVectorFunction=5]="RangeVectorFunction",n[n.Last=6]="Last",n))(P||{});const K={equals:{label:"=",value:"=",description:"Equals",isMultiValue:!1},doesNotEqual:{label:"!=",value:"!=",description:"Does not equal",isMultiValue:!1},matchesRegex:{label:"=~",value:"=~",description:"Matches regex",isMultiValue:!0},doesNotMatchRegex:{label:"!~",value:"!~",description:"Does not match regex",isMultiValue:!0},greaterThan:{label:">",value:">",description:"Greater than",isMultiValue:!1},greaterThanOrEqual:{label:">=",value:">=",description:"Greater than or equal to",isMultiValue:!1},lessThan:{label:"<",value:"<",description:"Less than",isMultiValue:!1},lessThanOrEqual:{label:"<=",value:"<=",description:"Less than or equal to",isMultiValue:!1},contains:{label:"|=",value:"|=",description:"Contains",isMultiValue:!1},doesNotContain:{label:"!=",value:"!=",description:"Does not contain",isMultiValue:!1}}},58919:(ue,W,l)=>{l.r(W),l.d(W,{plugin:()=>Ct});var w=l(54721),e=l(39953);const Z=[{title:"Request Rate",expression:"rate(http_request_total[5m])",label:"Given an HTTP request counter, this query calculates the per-second average request rate over the last 5 minutes."},{title:"95th Percentile of Request Latencies",expression:"histogram_quantile(0.95, sum(rate(prometheus_http_request_duration_seconds_bucket[5m])) by (le))",label:"Calculates the 95th percentile of HTTP request rate over 5 minute windows."},{title:"Alerts Firing",expression:'sort_desc(sum(sum_over_time(ALERTS{alertstate="firing"}[24h])) by (alertname))',label:"Sums up the alerts that have been firing over the last 24 hours."},{title:"Step",label:"Defines the graph resolution using a duration format (15s, 1m, 3h, ...). Small steps create high-resolution graphs but can be slow over larger time ranges. Using a longer step lowers the resolution and smooths the graph by producing fewer datapoints. If no step is given the resolution is calculated automatically."}],K=t=>e.createElement("div",null,e.createElement("h2",null,"PromQL Cheat Sheet"),Z.map((a,r)=>e.createElement("div",{className:"cheat-sheet-item",key:r},e.createElement("div",{className:"cheat-sheet-item__title"},a.title),a.expression?e.createElement("button",{type:"button",className:"cheat-sheet-item__example",onClick:o=>t.onClickExample({refId:"A",expr:a.expression})},e.createElement("code",null,a.expression)):null,e.createElement("div",{className:"cheat-sheet-item__label"},a.label))));var n=l(96083),z=l(86832),q=l(10694),X=l(28888),O=l(34397),J=l(13579),I=l(30623),U=l(91386),H=l(72639),_=l(32840),N=l(4919),C=l(41407),s=l(82803),E=l(73075),v=l(62818),x=l(78354),c=l(89527),p=l(4236),$=l(6155),S=l(49403);const B=t=>{const{pattern:a,onPatternSelect:r,hasNewQueryOption:o,hasPreviousQuery:i,selectedPatternName:m,setSelectedPatternName:d}=t,g=(0,s.wW)(k),u={grammar:S.ZP,name:"promql"};return e.createElement(p.Z,{className:g.card},e.createElement(p.Z.Heading,null,a.name),e.createElement("div",{className:g.rawQueryContainer},e.createElement($.U,{"aria-label":`${a.name} raw query`,query:c.Z.renderQuery({labels:[],operations:a.operations,binaryQueries:a.binaryQueries}),lang:u,className:g.rawQuery})),e.createElement(p.Z.Actions,null,m!==a.name?e.createElement(N.zx,{size:"sm","aria-label":"use this query button",onClick:()=>{i?d(a.name):r(a)}},"Use this query"):e.createElement(e.Fragment,null,e.createElement("div",{className:g.spacing},`If you would like to use this query, ${o?"you can either apply this query pattern or create a new query":"this query pattern will be applied to your current query"}.`),e.createElement(N.zx,{size:"sm","aria-label":"back button",fill:"outline",onClick:()=>d(null)},"Back"),e.createElement(N.zx,{size:"sm","aria-label":"apply query starter button",onClick:()=>{r(a)}},"Apply query"),o&&e.createElement(N.zx,{size:"sm","aria-label":"create new query button",onClick:()=>{r(a,!0)}},"Create new query"))))},k=t=>({card:(0,C.css)`
      width: 49.5%;
      display: flex;
      flex-direction: column;
    `,rawQueryContainer:(0,C.css)`
      flex-grow: 1;
    `,rawQuery:(0,C.css)`
      background-color: ${t.colors.background.primary};
      padding: ${t.spacing(1)};
      margin-top: ${t.spacing(1)};
    `,spacing:(0,C.css)`
      margin-bottom: ${t.spacing(1)};
    `});var G=l(95522),Fe=l(18533);const $e=t=>{const{isOpen:a,onClose:r,onChange:o,onAddQuery:i,query:m,queries:d,app:g}=t,[u,h]=(0,e.useState)([]),[b,y]=(0,e.useState)(null),A=(0,s.wW)(Re),Q=!!i,V=(0,e.useMemo)(()=>{const f=(0,G._)(m.expr??""),M=f.query.operations.length>0,F=f.query.metric,Y=f.query.labels.length>0,ie=f.query.binaryQueries?f.query.binaryQueries.length>0:!1;return M||F||Y||ie},[m.expr]),oe=(f,M=!1)=>{const F=(0,G._)(M?"":m.expr);(0,H.ff)("grafana_prom_kickstart_your_query_selected",{app:g??"",editorMode:m.editorMode,selectedPattern:f.name,preSelectedOperationsCount:F.query.operations.length,preSelectedLabelsCount:F.query.labels.length,createNewQuery:Q&&M}),F.query.operations=f.operations,F.query.binaryQueries=f.binaryQueries,Q&&M?i({...m,refId:(0,x.Hs)(d??[m]),expr:c.Z.renderQuery(F.query)}):o({...m,expr:c.Z.renderQuery(F.query)}),y(null),r()};return e.createElement(E.u,{"aria-label":"Kick start your query modal",isOpen:a,title:"Kick start your query",onDismiss:r},e.createElement("div",{className:A.spacing},"Kick start your query by selecting one of these queries. You can then continue to complete your query."),Object.values(Fe.Fz).map(f=>e.createElement(v.U,{"aria-label":`open and close ${f} query starter card`,key:f,label:`${(0,z.capitalize)(f)} query starters`,isOpen:u.includes(f),collapsible:!0,onToggle:()=>h(M=>M.includes(f)?M.filter(F=>F!==f):[...M,f])},e.createElement("div",{className:A.cardsContainer},c.Z.getQueryPatterns().filter(M=>M.type===f).map(M=>e.createElement(B,{key:M.name,pattern:M,hasNewQueryOption:Q,hasPreviousQuery:V,onPatternSelect:oe,selectedPatternName:b,setSelectedPatternName:y}))))),e.createElement(N.zx,{"aria-label":"close kick start your query modal",variant:"secondary",onClick:r},"Close"))},Re=t=>({cardsContainer:(0,C.css)`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    `,spacing:(0,C.css)`
      margin-bottom: ${t.spacing(1)};
    `});var Ne=l(77938),Be=l(54081),ce=l(17912),D=l(83065),me=l(23062),T=l(64304);const de="PrometheusQueryEditorModeDefault";function pe(t,a,r){t.expr===""&&me.Z.set(de,a),r({...t,editorMode:a})}function De(t,a=D.c.Builder){if(t!=null&&t!=="")return D.c.Code;const r=me.Z.get(de);switch(r){case D.c.Builder:case D.c.Code:return r;default:return a}}function Ae(t,a,r){let o=t;t.editorMode||(o={...t,editorMode:De(t.expr,r)}),t.expr||(o={...o,expr:"",legendFormat:T.pD.Auto}),t.range==null&&t.instant==null&&(o={...o,range:!0},a===n.zj.Explore&&(o.instant=!0));const i=t.instant&&t.range;return a===n.zj.UnifiedAlerting&&i&&(o={...o,instant:!1,range:!0}),o}var we=l(77960),ze=l(32688),ee=l(87355),He=l(47433),Ve=l(1842),We=l(23070),Ze=l(22162),Ke=l(83188),je=l(85308),Ue=l(27366),Ge=l(99456),L=l(9558),te=l(28448),ge=l(68497),Le=l(96543);const fe=e.memo(t=>{const{nestedQuery:a,index:r,datasource:o,onChange:i,onRemove:m,onRunQuery:d,showExplain:g}=t,u=(0,s.wW)(Je);return e.createElement("div",{className:u.card},e.createElement("div",{className:u.header},e.createElement("div",{className:u.name},"Operator"),e.createElement(L.Ph,{width:"auto",options:qe,value:(0,Ge.E)(a.operator),onChange:h=>{i(r,{...a,operator:h.value})}}),e.createElement("div",{className:u.name},"Vector matches"),e.createElement("div",{className:u.vectorMatchWrapper},e.createElement(L.Ph,{width:"auto",value:a.vectorMatchesType||"on",allowCustomValue:!0,options:[{value:"on",label:"on"},{value:"ignoring",label:"ignoring"}],onChange:h=>{i(r,{...a,vectorMatchesType:h.value})}}),e.createElement(te.H,{className:u.vectorMatchInput,minWidth:20,defaultValue:a.vectorMatches,onCommitChange:h=>{i(r,{...a,vectorMatches:h.currentTarget.value,vectorMatchesType:a.vectorMatchesType||"on"})}})),e.createElement(J.B,{grow:1}),e.createElement(ge.h,{name:"times",size:"sm",onClick:()=>m(r),tooltip:"Remove match"})),e.createElement("div",{className:u.body},e.createElement(U._,null,e.createElement(ae,{showExplain:g,query:a.query,datasource:o,onRunQuery:d,onChange:h=>{i(r,{...a,query:h})}}))))}),qe=Le.iQ.map(t=>({label:t.sign,value:t.sign}));fe.displayName="NestedQuery";const Je=t=>({card:(0,C.css)({label:"card",display:"flex",flexDirection:"column",gap:t.spacing(.5)}),header:(0,C.css)({label:"header",padding:t.spacing(.5,.5,.5,1),gap:t.spacing(1),display:"flex",alignItems:"center"}),name:(0,C.css)({label:"name",whiteSpace:"nowrap"}),body:(0,C.css)({label:"body",paddingLeft:t.spacing(2)}),vectorMatchInput:(0,C.css)({label:"vectorMatchInput",marginLeft:-1}),vectorMatchWrapper:(0,C.css)({label:"vectorMatchWrapper",display:"flex"})});function Ye(t){const{query:a,datasource:r,onChange:o,onRunQuery:i,showExplain:m}=t,d=a.binaryQueries??[],g=(h,b)=>{const y=[...d];y.splice(h,1,b),o({...a,binaryQueries:y})},u=h=>{const b=[...d.slice(0,h),...d.slice(h+1)];o({...a,binaryQueries:b})};return e.createElement(Ue.K,{direction:"column",gap:1},d.map((h,b)=>e.createElement(fe,{key:b.toString(),nestedQuery:h,index:b,onChange:g,datasource:r,onRemove:u,onRunQuery:i,showExplain:m})))}var Xe=l(55751);const ae=e.memo(t=>{const{datasource:a,query:r,onChange:o,onRunQuery:i,data:m,showExplain:d}=t,[g,u]=(0,e.useState)(),h={grammar:S.ZP,name:"promql"},b=a.getInitHints();return e.createElement(e.Fragment,null,e.createElement(ee.p,null,e.createElement(je.U,{query:r,onChange:o,datasource:a})),b.length?e.createElement("div",{className:"query-row-break"},e.createElement("div",{className:"prom-query-field-info text-warning"},b[0].label," ",b[0].fix?e.createElement("button",{type:"button",className:"text-warning"},b[0].fix.label):null)):null,d&&e.createElement(He.B,{stepNumber:1,title:e.createElement($.U,{query:`${r.metric} ${c.Z.renderLabels(r.labels)}`,lang:h})},Xe.A),e.createElement(Ze.B,null,e.createElement(Ve.P,{queryModeller:c.Z,datasource:a,query:r,onChange:o,onRunQuery:i,highlightedOp:g}),e.createElement(Ke.L,{datasource:a,query:r,onChange:o,data:m,queryModeller:c.Z,buildVisualQueryFromString:G._})),d&&e.createElement(We.V,{lang:h,query:r,stepNumber:2,queryModeller:c.Z,onMouseEnter:y=>u(y),onMouseLeave:()=>u(void 0)}),r.binaryQueries&&r.binaryQueries.length>0&&e.createElement(Ye,{query:r,datasource:a,onChange:o,onRunQuery:i,showExplain:d}))});ae.displayName="PromQueryBuilder";var Oe=l(60481);function Ie({query:t}){return t?e.createElement(ee.p,null,e.createElement(Oe.s,null,e.createElement($.U,{query:t,lang:{grammar:S.ZP,name:"promql"}}))):null}var _e=l(93938);const ne=ze.config.featureToggles.prometheusMetricEncyclopedia;function ke(t){const{query:a,onChange:r,onRunQuery:o,datasource:i,data:m,showExplain:d}=t,[g,u]=(0,e.useReducer)(he.reducer,{expr:a.expr});(0,e.useEffect)(()=>{u(at(a.expr)),ne&&u(nt({useBackend:a.useBackend??!1,disableTextWrap:a.disableTextWrap??!1,fullMetaSearch:a.fullMetaSearch??!1,includeNullMetadata:a.includeNullMetadata??!0}))},[a]);const h=b=>{const y=c.Z.renderQuery(b);if(u(tt({visQuery:b,expr:y})),ne){const A=(0,_e.Gw)(b);r({...t.query,expr:y,...A})}else r({...t.query,expr:y})};return g.visQuery?e.createElement(e.Fragment,null,e.createElement(ae,{query:g.visQuery,datasource:i,onChange:h,onRunQuery:o,data:m,showExplain:d}),e.createElement(Ie,{query:a.expr})):null}const et={expr:""},he=(0,we.oM)({name:"prom-builder-container",initialState:et,reducers:{visualQueryChange:(t,a)=>{t.expr=a.payload.expr,t.visQuery=a.payload.visQuery},exprChanged:(t,a)=>{if(!t.visQuery||t.expr!==a.payload){t.expr=a.payload;const r=(0,G._)(a.payload??"");t.visQuery=r.query}},setMetricsModalSettings:(t,a)=>{t.visQuery&&ne&&(t.visQuery.useBackend=a.payload.useBackend,t.visQuery.disableTextWrap=a.payload.disableTextWrap,t.visQuery.fullMetaSearch=a.payload.fullMetaSearch,t.visQuery.includeNullMetadata=a.payload.includeNullMetadata)}}}),{visualQueryChange:tt,exprChanged:at,setMetricsModalSettings:nt}=he.actions;var j=l(46101),rt=l(55629),ve=l(20454),ye=l(7763),Ee=l(56921),lt=l(99491),st=l(69865);function ot({datasource:t,onChange:a,query:r,...o}){const[i,m]=(0,e.useState)(null),d=(0,s.wW)(it),g=(0,ye.Z)(i);(0,e.useEffect)(()=>{t.exemplarsAvailable?r.instant&&!r.range?(m("Exemplars are not available for instant queries"),a(!1)):(m(null),g&&!i&&a(!0)):(m("Exemplars for this query are not available"),a(!1))},[t.exemplarsAvailable,r.instant,r.range,a,g,i]);const u=(0,C.cx)({[d.activeIcon]:!!r.exemplar},d.eyeIcon);return e.createElement(lt.W,{width:"auto","data-testid":o["data-testid"]},e.createElement(st.u,{content:i??""},e.createElement("div",{className:d.iconWrapper},"Exemplars",e.createElement(ge.h,{name:"eye",tooltip:r.exemplar?"Disable query with exemplars":"Enable query with exemplars",disabled:!!i,className:u,onClick:()=>{a(!r.exemplar)}}))))}function it(t){return{eyeIcon:(0,C.css)`
      margin-left: ${t.spacing(2)};
    `,activeIcon:(0,C.css)`
      color: ${t.colors.primary.main};
    `,iconWrapper:(0,C.css)`
      display: flex;
      align-items: center;
    `}}const ut=(0,e.memo)(({query:t,datasource:a,onChange:r,onRunQuery:o})=>{const i=xe(!0),m=(0,ye.Z)(t),d=(0,e.useCallback)(y=>{(!(0,z.isEqual)(t,m)||y!==t.exemplar)&&r({...t,exemplar:y})},[m,t,r]);function g(y){r({...t,interval:y})}function u(y){y.currentTarget.value!==t.interval&&g(y.currentTarget.value)}function h(y){y.key==="Enter"&&y.shiftKey&&o()}const b=be(t,r);return e.createElement("div",{"aria-label":"Prometheus extra field",className:"gf-form-inline","data-testid":re.extraFieldEditor},e.createElement("div",{"data-testid":re.queryTypeField,className:(0,C.cx)("gf-form explore-input-margin",(0,C.css)`
            flex-wrap: nowrap;
          `),"aria-label":"Query type field"},e.createElement(Ee.c,{width:"auto"},"Query type"),e.createElement(ve.S,{options:i,value:t.range&&t.instant?"both":t.instant?"instant":"range",onChange:b})),e.createElement("div",{"data-testid":re.stepField,className:(0,C.cx)("gf-form",(0,C.css)`
            flex-wrap: nowrap;
          `),"aria-label":"Step field"},e.createElement(Ee.c,{width:6,tooltip:"Time units and built-in variables can be used here, for example: $__interval, $__rate_interval, 5s, 1m, 3h, 1d, 1y (Default if no unit is specified: s)"},"Min step"),e.createElement("input",{type:"text",className:"gf-form-input width-4",placeholder:"auto",onChange:u,onKeyDown:h,value:t.interval??""})),e.createElement(ot,{onChange:d,datasource:a,query:t}))});ut.displayName="PromExploreExtraField";function xe(t){const a=[{value:"range",label:"Range",description:"Run query over a range of time"},{value:"instant",label:"Instant",description:'Run query against a single point in time. For this query, the "To" time is used'}];return t&&a.push({value:"both",label:"Both",description:"Run an Instant query and a Range query"}),a}function be(t,a){return r=>{a(r==="instant"?{...t,instant:!0,range:!1,exemplar:!1}:r==="range"?{...t,instant:!1,range:!0}:{...t,instant:!0,range:!0})}}const re={extraFieldEditor:"prom-editor-extra-field",stepField:"prom-editor-extra-field-step",queryTypeField:"prom-editor-extra-field-query-type"};var ct=l(30736);const le=[{label:"Auto",value:T.pD.Auto,description:"Only includes unique labels"},{label:"Verbose",value:T.pD.Verbose,description:"All label names and values"},{label:"Custom",value:T.pD.Custom,description:"Provide a naming template"}],Ce=e.memo(({legendFormat:t,onChange:a,onRunQuery:r})=>{const o=Qe(t),i=(0,e.useRef)(null),m=g=>{let u=g.currentTarget.value;u.length===0&&(u=T.pD.Auto),u!==t&&(a(u),r())},d=g=>{switch(g.value){case T.pD.Auto:a(T.pD.Auto);break;case T.pD.Custom:a("{{label_name}}"),setTimeout(()=>{i.current?.focus(),i.current?.setSelectionRange(2,12,"forward")},10);break;case T.pD.Verbose:a("");break}r()};return e.createElement(j.S,{label:"Legend",tooltip:"Series name override or template. Ex. {{hostname}} will be replaced with label value for hostname."},e.createElement(e.Fragment,null,o===T.pD.Custom&&e.createElement(te.H,{id:"legendFormat",minWidth:22,placeholder:"auto",defaultValue:t,onCommitChange:m,ref:i}),o!==T.pD.Custom&&e.createElement(L.Ph,{inputId:"legend.mode",isSearchable:!1,placeholder:"Select legend mode",options:le,width:22,onChange:d,value:le.find(g=>g.value===o)})))});Ce.displayName="PromQueryLegendEditor";function Qe(t){return t===T.pD.Auto?T.pD.Auto:t==null||t===""?T.pD.Verbose:T.pD.Custom}function mt(t){const a=Qe(t);return a!==T.pD.Custom?le.find(r=>r.value===a)?.label:t}const Se=e.memo(({query:t,app:a,onChange:r,onRunQuery:o})=>{const i=Q=>{r({...t,format:Q.value}),o()},m=Q=>{r({...t,interval:Q.currentTarget.value}),o()},d=xe(a===n.zj.Explore||a===n.zj.Correlations||a===n.zj.PanelEditor),g=be(t,r),u=Q=>{const V=Q.currentTarget.checked;r({...t,exemplar:V}),o()},h=Q=>{r({...t,intervalFactor:Q.value}),o()},b=se.find(Q=>Q.value===t.format)||se[0],y=dt(t),A=d.find(Q=>Q.value===y).label;return e.createElement(ee.p,null,e.createElement(ct.d,{title:"Options",collapsedInfo:pt(t,b.label,A,a)},e.createElement(Ce,{legendFormat:t.legendFormat,onChange:Q=>r({...t,legendFormat:Q}),onRunQuery:o}),e.createElement(j.S,{label:"Min step",tooltip:e.createElement(e.Fragment,null,"An additional lower limit for the step parameter of the Prometheus query and for the"," ",e.createElement("code",null,"$__interval")," and ",e.createElement("code",null,"$__rate_interval")," variables.")},e.createElement(te.H,{type:"text","aria-label":"Set lower limit for the step parameter",placeholder:"auto",minWidth:10,onCommitChange:m,defaultValue:t.interval})),e.createElement(j.S,{label:"Format"},e.createElement(L.Ph,{value:b,allowCustomValue:!0,onChange:i,options:se})),e.createElement(j.S,{label:"Type"},e.createElement(ve.S,{options:d,value:y,onChange:g})),Pe(t,a)&&e.createElement(j.S,{label:"Exemplars"},e.createElement(rt.r,{value:t.exemplar||!1,onChange:u})),t.intervalFactor&&t.intervalFactor>1&&e.createElement(j.S,{label:"Resolution"},e.createElement(L.Ph,{"aria-label":"Select resolution",isSearchable:!1,options:Me,onChange:h,value:Me.find(Q=>Q.value===t.intervalFactor)}))))});function Pe(t,a){return!(a===n.zj.UnifiedAlerting||!t.range)}function dt(t){return t.range&&t.instant?"both":t.instant?"instant":"range"}function pt(t,a,r,o){const i=[];return i.push(`Legend: ${mt(t.legendFormat)}`),i.push(`Format: ${a}`),i.push(`Step: ${t.interval??"auto"}`),i.push(`Type: ${r}`),Pe(t,o)&&(t.exemplar?i.push("Exemplars: true"):i.push("Exemplars: false")),i}Se.displayName="PromQueryBuilderOptions";var gt=l(94180);const se=[{label:"Time series",value:"time_series"},{label:"Table",value:"table"},{label:"Heatmap",value:"heatmap"}],Me=(0,z.map)([1,2,3,4,5,10],t=>({value:t,label:"1/"+t})),Te=e.memo(t=>{const{onChange:a,onRunQuery:r,data:o,app:i,onAddQuery:m,datasource:{defaultEditor:d},queries:g}=t,[u,h]=(0,e.useState)(!1),[b,y]=(0,e.useState)(!1),[A,Q]=(0,e.useState)(!1),{flag:V,setFlag:oe}=(0,ce.P5)(ce.ar),f=Ae(t.query,i,d),M=f.editorMode,F=(0,e.useCallback)(R=>{if((0,H.ff)("user_grafana_prometheus_editor_mode_clicked",{newEditor:R,previousEditor:f.editorMode??"",newQuery:!f.expr,app:i??""}),R===D.c.Builder&&(0,G._)(f.expr||"").errors.length){h(!0);return}pe(f,R,a)},[a,f,i]);(0,e.useEffect)(()=>{Q(!1)},[o]);const Y=R=>{(0,z.isEqual)(R,t.query)||Q(!0),a(R)},ie=R=>{oe(R.currentTarget.checked)};return e.createElement(e.Fragment,null,e.createElement(_.s,{isOpen:u,title:"Parsing error: Switch to the builder mode?",body:"There is a syntax error, or the query structure cannot be visualized when switching to the builder mode. Parts of the query may be lost. ",confirmText:"Continue",onConfirm:()=>{pe(f,D.c.Builder,a),h(!1)},onDismiss:()=>h(!1)}),e.createElement($e,{isOpen:b,onClose:()=>y(!1),query:f,queries:g,app:i,onChange:a,onAddQuery:m}),e.createElement(O.K,null,e.createElement(N.zx,{"aria-label":X.wl.components.QueryBuilder.queryPatterns,variant:"secondary",size:"sm",onClick:()=>y(R=>!R)},"Kick start your query"),e.createElement(Be.n,{label:"Explain",value:V,onChange:ie}),e.createElement(J.B,{grow:1}),i!==n.zj.Explore&&i!==n.zj.Correlations&&e.createElement(N.zx,{variant:A?"primary":"secondary",size:"sm",onClick:r,icon:o?.state===q.Gu.Loading?"fa fa-spinner":void 0,disabled:o?.state===q.Gu.Loading},"Run queries"),e.createElement(Ne.k,{mode:M,onChange:F})),e.createElement(I.T,{v:.5}),e.createElement(U._,null,M===D.c.Code&&e.createElement(gt.j,{...t,query:f,showExplain:V,onChange:Y}),M===D.c.Builder&&e.createElement(ke,{query:f,datasource:t.datasource,onChange:Y,onRunQuery:t.onRunQuery,data:o,showExplain:V}),e.createElement(Se,{query:f,app:t.app,onChange:a,onRunQuery:r})))});Te.displayName="PromQueryEditorSelector";var ft=l(63594);function ht(t){const{datasource:a,query:r,range:o,data:i,onChange:m,onRunQuery:d}=t;return e.createElement(ft.ZP,{datasource:a,query:r,onRunQuery:d,onChange:m,history:[],range:o,data:i,"data-testid":vt.editor})}const vt={editor:"prom-editor-cloud-alerting"};function yt(t){const{app:a}=t;switch(a){case n.zj.CloudAlerting:return e.createElement(ht,{...t});default:return e.createElement(Te,{...t})}}const Et=(0,e.memo)(yt);var xt=l(54913),bt=l(52583);const Ct=new w.hf(bt.vQ).setQueryEditor(Et).setConfigEditor(xt.Z5).setQueryEditorHelp(K)}}]);

//# sourceMappingURL=prometheusPlugin.801fd2dfbf4031f9284a.js.map