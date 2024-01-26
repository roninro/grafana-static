"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1301],{7225:(se,G,s)=>{s.d(G,{A2:()=>z,bw:()=>X});var c=s(41407),m=s(86832),t=s(39953),y=s(10694),$=s(65038),Q=s(48069),g=s(27366),p=s(82803),D=s(4919),f=s(28448),U=s(68497),R=s(40273),F=s(47970),Z=s(56170),H=s(24753),J=s(87007),L=s(29409),K=s(17330),ee=s(73278),j=s(44351),r=s(67111),d=s(10162),x=s(25825),E=s(99331);const N=e=>{const n=e.fields[0];return n?.config?.displayNameFromDS??e.name??n?.labels?.__name__},C=e=>{const n=e.fields[0]?.values[0];return Number.isFinite(n)?(0,E.O)(n,5):n},S=e=>e.fields[0]?.labels??{},B=e=>Object.entries(e).map(([n,a])=>n+"="+a).join(", "),O=e=>e.every(a=>a.fields.every(l=>l.values.every(u=>u==null))),z=({queries:e=[],query:n,data:a,error:l,warning:u,isAlertCondition:h,onSetCondition:P,onUpdateRefId:b,onRemoveExpression:T,onUpdateExpressionType:A,onChangeQuery:M})=>{const I=(0,p.wW)(o),W=n?.type,_=a&&Object.values(a).some(v=>!!v&&v.state===y.Gu.Loading),te=Array.isArray(a?.series)&&!_,w=a?.series??[],le=w.length,re=h??!1,oe={[K.x_.Firing]:w.filter(v=>C(v)!==0),[K.x_.Inactive]:w.filter(v=>C(v)===0)},ce=(0,t.useCallback)(v=>{const ne=e.filter(ae=>v.refId!==ae.refId).map(ae=>({value:ae.refId,label:ae.refId}));switch(v.type){case L.Us.math:return t.createElement(F.Z,{onChange:M,query:v,labelWidth:"auto",onRunQuery:()=>{}});case L.Us.reduce:return t.createElement(Z.v,{onChange:M,refIds:ne,labelWidth:"auto",query:v});case L.Us.resample:return t.createElement(H.p,{onChange:M,query:v,labelWidth:"auto",refIds:ne});case L.Us.classic:return t.createElement(R.I,{onChange:M,query:v,refIds:ne});case L.Us.threshold:return t.createElement(J.M,{onChange:M,query:v,labelWidth:"auto",refIds:ne});default:return t.createElement(t.Fragment,null,"Expression not supported: ",v.type)}},[M,e]),ie=L.EJ.find(v=>v.value===W)?.description??"";return t.createElement("div",{className:(0,c.cx)(I.expression.wrapper,re&&I.expression.alertCondition,W===L.Us.classic&&I.expression.classic,W!==L.Us.classic&&I.expression.nonClassic)},t.createElement("div",{className:I.expression.stack},t.createElement(V,{refId:n.refId,queryType:W,onRemoveExpression:()=>T(n.refId),onUpdateRefId:v=>b(n.refId,v),onUpdateExpressionType:v=>A(n.refId,v),onSetCondition:P,warning:u,error:l,query:n,alertCondition:re}),t.createElement("div",{className:I.expression.body},t.createElement("div",{className:I.expression.description},ie),ce(n)),te&&t.createElement(t.Fragment,null,t.createElement(X,{series:w,isAlertCondition:h}),t.createElement("div",{className:I.footer},t.createElement(g.K,{direction:"row",alignItems:"center"},t.createElement(r.L,null),t.createElement(k,{isCondition:!!h,firing:oe[K.x_.Firing].length,normal:oe[K.x_.Inactive].length,seriesCount:le}))))))},Y=20,X=({series:e,isAlertCondition:n})=>{const{pageItems:a,previousPage:l,nextPage:u,numberOfPages:h,pageStart:P,pageEnd:b}=(0,ee.h)(e,1,Y),T=(0,p.wW)(o),A=O(e),M=!A&&(0,$.xI)(e),I=h>1;return t.createElement("div",{className:T.expression.results},!A&&M&&t.createElement("div",null,a.map((W,_)=>t.createElement(i,{key:(0,m.uniqueId)(),frame:W,index:P+_,isAlertCondition:n}))),!A&&!M&&a.map((W,_)=>t.createElement(q,{key:(0,m.uniqueId)(),frame:W,index:P+_,isAlertCondition:n})),A&&t.createElement("div",{className:(0,c.cx)(T.expression.noData,T.mutedText)},"No data"),I&&t.createElement("div",{className:T.pagination.wrapper,"data-testid":"paginate-expression"},t.createElement(g.K,null,t.createElement(D.zx,{variant:"secondary",fill:"outline",onClick:l,icon:"angle-left",size:"sm","aria-label":"previous-page"}),t.createElement(r.L,null),t.createElement("span",{className:T.mutedText},P," - ",b," of ",e.length),t.createElement(r.L,null),t.createElement(D.zx,{variant:"secondary",fill:"outline",onClick:u,icon:"angle-right",size:"sm","aria-label":"next-page"}))))},k=({firing:e,normal:n,isCondition:a,seriesCount:l})=>{const{mutedText:u}=(0,p.wW)(o);return l===0?t.createElement("span",{className:u},"No series"):a?t.createElement("span",{className:u},`${l} series: ${e} firing, ${n} normal`):t.createElement("span",{className:u},`${l} series`)},V=({refId:e,queryType:n,onUpdateRefId:a,onRemoveExpression:l,warning:u,onSetCondition:h,alertCondition:P,query:b,error:T})=>{const A=(0,p.wW)(o),M=(0,p.wW)(D.gN),[I,W]=(0,t.useState)(!1),te=I!==!1&&I==="refId";return t.createElement("header",{className:A.header.wrapper},t.createElement(g.K,{direction:"row",gap:.5,alignItems:"center"},t.createElement(g.K,{direction:"row",gap:1,alignItems:"center",wrap:!1},!te&&t.createElement("button",{type:"button",className:(0,c.cx)(M,A.editable),onClick:()=>W("refId")},t.createElement("div",{className:A.expression.refId},e)),te&&t.createElement(f.H,{autoFocus:!0,defaultValue:e,minWidth:5,onChange:w=>{a(w.currentTarget.value),W(!1)},onFocus:w=>w.target.select(),onBlur:w=>{a(w.currentTarget.value),W(!1)}}),t.createElement("div",null,(0,L.hF)(n))),t.createElement(r.L,null),t.createElement(x.H,{error:T,warning:u,onSetCondition:()=>h(b.refId),isCondition:P}),t.createElement(U.h,{name:"trash-alt",variant:"secondary",className:A.mutedIcon,onClick:l,tooltip:"Remove expression"})))},q=({frame:e,index:n,isAlertCondition:a})=>{const l=(0,p.wW)(o),u=N(e)||"Series "+n,h=C(e),P=S(e),b=Object.entries(P),T=b.length>0,A=a&&h!==0,M=a&&h===0,I=`${T?"":u}${T?`{${B(P)}}`:""}`;return t.createElement("div",{className:l.expression.resultsRow},t.createElement(g.K,{direction:"row",gap:1,alignItems:"center"},t.createElement("div",{className:l.expression.resultLabel,title:I},t.createElement("span",null,T?"":u),T&&t.createElement(t.Fragment,null,t.createElement("span",null,"{"),b.map(([W,_],te)=>t.createElement("span",{key:(0,m.uniqueId)()},t.createElement("span",{className:l.expression.labelKey},W),t.createElement("span",null,"="),t.createElement("span",null,'"'),t.createElement("span",{className:l.expression.labelValue},_),t.createElement("span",null,'"'),te<b.length-1&&t.createElement("span",null,", "))),t.createElement("span",null,"}"))),t.createElement("div",{className:l.expression.resultValue},h),A&&t.createElement(d.l,{state:K.x_.Firing,size:"sm"}),M&&t.createElement(d.l,{state:K.x_.Inactive,size:"sm"})))},i=({frame:e,index:n})=>{const a=(0,p.wW)(o),l=e.fields[1],u=l.labels,P=l.config?.displayNameFromDS??(u?B(l.labels??{}):"Series "+n),b=e.fields[0].values,T=M=>e.fields[0].values[M],A=M=>e.fields[1].values[M];return t.createElement("div",{className:a.expression.resultsRow},t.createElement(g.K,{direction:"row",alignItems:"center"},t.createElement("span",{className:(0,c.cx)(a.mutedText,a.expression.resultLabel),title:P},P),t.createElement("div",{className:a.expression.resultValue},t.createElement(j.z,{placement:"right",wrapperClassName:a.timeseriesTableWrapper,content:t.createElement("table",{className:a.timeseriesTable},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Timestamp"),t.createElement("th",null,"Value"))),t.createElement("tbody",null,b.map((M,I)=>t.createElement("tr",{key:I},t.createElement("td",{className:a.mutedText},(0,Q.dq)(T(I))),t.createElement("td",{className:a.expression.resultValue},A(I))))))},t.createElement("span",null,"Time series data")))))},o=e=>({expression:{wrapper:(0,c.css)`
      display: flex;
      border: solid 1px ${e.colors.border.medium};
      flex: 1;
      flex-basis: 400px;
      border-radius: ${e.shape.radius.default};
    `,stack:(0,c.css)`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 0;
      width: 100%;
      min-width: 0; // this one is important to prevent text overflow
    `,classic:(0,c.css)`
      max-width: 100%;
    `,nonClassic:(0,c.css)`
      max-width: 640px;
    `,alertCondition:(0,c.css)``,body:(0,c.css)`
      padding: ${e.spacing(1)};
      flex: 1;
    `,description:(0,c.css)`
      margin-bottom: ${e.spacing(1)};
      font-size: ${e.typography.size.xs};
      color: ${e.colors.text.secondary};
    `,refId:(0,c.css)`
      font-weight: ${e.typography.fontWeightBold};
      color: ${e.colors.primary.text};
    `,results:(0,c.css)`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;

      border-top: solid 1px ${e.colors.border.medium};
    `,noResults:(0,c.css)`
      display: flex;
      align-items: center;
      justify-content: center;
    `,resultsRow:(0,c.css)`
      padding: ${e.spacing(.75)} ${e.spacing(1)};

      &:nth-child(odd) {
        background-color: ${e.colors.background.secondary};
      }

      &:hover {
        background-color: ${e.colors.background.canvas};
      }
    `,labelKey:(0,c.css)`
      color: ${e.isDark?"#73bf69":"#56a64b"};
    `,labelValue:(0,c.css)`
      color: ${e.isDark?"#ce9178":"#a31515"};
    `,resultValue:(0,c.css)`
      text-align: right;
    `,resultLabel:(0,c.css)`
      flex: 1;
      overflow-x: auto;

      display: inline-block;
      white-space: nowrap;
    `,noData:(0,c.css)`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${e.spacing()};
    `},mutedText:(0,c.css)`
    color: ${e.colors.text.secondary};
    font-size: 0.9em;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,header:{wrapper:(0,c.css)`
      background: ${e.colors.background.secondary};
      padding: ${e.spacing(.5)} ${e.spacing(1)};
      border-bottom: solid 1px ${e.colors.border.weak};
    `},footer:(0,c.css)`
    background: ${e.colors.background.secondary};
    padding: ${e.spacing(1)};
    border-top: solid 1px ${e.colors.border.weak};
  `,draggableIcon:(0,c.css)`
    cursor: grab;
  `,mutedIcon:(0,c.css)`
    color: ${e.colors.text.secondary};
  `,editable:(0,c.css)`
    padding: ${e.spacing(.5)} ${e.spacing(1)};
    border: solid 1px ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${e.spacing(1)};

    cursor: pointer;
  `,timeseriesTableWrapper:(0,c.css)`
    max-height: 500px;

    overflow-y: scroll;
  `,timeseriesTable:(0,c.css)`
    table-layout: auto;

    width: 100%;
    height: 100%;

    td,
    th {
      padding: ${e.spacing(1)};
    }

    td {
      background: ${e.colors.background.primary};
    }

    th {
      background: ${e.colors.background.secondary};
    }

    tr {
      border-bottom: 1px solid ${e.colors.border.medium};

      &:last-of-type {
        border-bottom: none;
      }
    }
  `,pagination:{wrapper:(0,c.css)`
      border-top: 1px solid ${e.colors.border.medium};
      padding: ${e.spacing()};
    `}})},25825:(se,G,s)=>{s.d(G,{H:()=>Q});var c=s(41407),m=s(39953),t=s(82803),y=s(12608),$=s(4919);const Q=({error:p,warning:D,isCondition:f,onSetCondition:U})=>{const R=(0,t.wW)(g),F=[];return p&&f?m.createElement(y.C,{color:"red",icon:"exclamation-circle",text:"Alert condition",tooltip:p.message}):(p&&F.push(m.createElement(y.C,{key:"error",color:"red",icon:"exclamation-circle",text:"Error",tooltip:p.message})),D&&f?m.createElement(y.C,{color:"orange",icon:"exclamation-triangle",text:"Alert condition",tooltip:D.message}):(D&&F.push(m.createElement(y.C,{key:"warning",color:"orange",icon:"exclamation-triangle",text:"Warning",tooltip:D.message})),f?F.unshift(m.createElement(y.C,{key:"condition",color:"green",icon:"check",text:"Alert condition"})):F.unshift(m.createElement("button",{key:"make-condition",type:"button",className:R.actionLink,onClick:()=>U&&U()},"Set as alert condition")),m.createElement(m.Fragment,null,F)))},g=p=>{const D=(0,$.gN)(p);return{actionLink:(0,c.css)`
      ${D};
      color: ${p.colors.text.link};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    `}}},65478:(se,G,s)=>{s.d(G,{l:()=>f});var c=s(41407),m=s(39953),t=s(19977),y=s(65038),$=s(82803),Q=s(28833),g=s(38476),p=s(7225),D=s(4835);const f=({data:R,thresholds:F,thresholdsType:Z})=>{const H=(0,$.wW)(U),J=(0,y.xI)(R.series),L=(0,D._4)(R),K=Z?{mode:Z}:void 0,ee={from:R.timeRange.from.valueOf(),to:R.timeRange.to.valueOf()};return m.createElement("div",{className:H.wrapper},m.createElement(t.Z,{disableHeight:!0},({width:j})=>m.createElement("div",{style:{width:j}},J?m.createElement(g.F,{statusMessage:L,data:R.series,eventBus:Q.Z,height:300,width:j,absoluteRange:ee,timeZone:"browser",onChangeTime:()=>{},splitOpenFn:()=>{},loadingState:R.state,thresholdsConfig:F,thresholdsStyle:K}):m.createElement("div",{className:H.instantVectorResultWrapper},m.createElement("header",{className:H.title},"Table"),m.createElement(p.bw,{series:R.series})))))},U=R=>({wrapper:(0,c.css)`
    width: 100%;
    position: relative;
  `,instantVectorResultWrapper:(0,c.css)`
    border: solid 1px ${R.colors.border.medium};
    border-radius: ${R.shape.radius.default};
    padding: 0;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  `,title:(0,c.css)({label:"panel-title",padding:R.spacing(),textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontSize:R.typography.h6.fontSize,fontWeight:R.typography.h6.fontWeight})})},87523:(se,G,s)=>{s.d(G,{S:()=>y});var c=s(39953),m=s(26205),t=s(92743);function y($){return{allDataSourcesAvailable:(0,c.useMemo)(()=>$.filter(g=>!(0,t.Pr)(g.datasourceUid)).every(g=>!!(0,m.F)().getInstanceSettings(g.datasourceUid)),[$])}}},75690:(se,G,s)=>{s.d(G,{F3:()=>Z,HO:()=>L,eq:()=>j});var c=s(39953),m=s(20653),t=s(57721),y=s(26516),$=s(14055),Q=s(79493),g=s(95712),p=s(57675),D=s(30391),f=s(15032),U=s(52106),R=s(26544);function F(r,d){const x=H(d),E=useCombinedRuleNamespaces(d),N=useMemo(()=>{if(!r||!d||E.length===0)return[];const C=[];for(const S of E)for(const B of S.groups)for(const O of B.rules)O.name===r&&C.push(O);return C},[r,d,E]);return{...x,result:N}}function Z(r,d,x){const E=(0,g.c$)(d),{dsFeatures:N,isLoadingDsFeatures:C}=j(d),{currentData:S=[],isLoading:B,error:O}=y.alertRuleApi.endpoints.prometheusRuleNamespaces.useQuery({ruleSourceName:d,ruleName:r,namespace:x?.namespace,groupName:x?.groupName}),[z]=y.alertRuleApi.endpoints.rulerRuleGroup.useLazyQuery(),{loading:Y,error:X,value:k}=(0,m.Z)(async()=>{if(!E)throw new Error("Unable to obtain data source settings");if(O)throw new Error("Unable to obtain Prometheus rules");const V=[];if(N?.rulerConfig){const o=N.rulerConfig,e=S.map(n=>n.groups.map(a=>({namespace:n,group:a}))).flat();await Promise.allSettled(e.map(async n=>{const a=await z({rulerConfig:o,namespace:n.namespace.name,group:n.group.name}).unwrap();V.push(a)}))}return S.map(o=>(0,U.K$)(E,o,V)).flatMap(o=>o.groups.flatMap(e=>e.rules))},[E,N,B,O,S,z]);return{loading:C||Y,error:X,rules:k}}function H(r,d){const x=useDispatch(),E=useUnifiedAlertingSelector(O=>O.promRules),N=J(r,E),C=useUnifiedAlertingSelector(O=>O.rulerRules),S=J(r,C),{loading:B}=useAsync(async()=>{r&&await x(fetchPromAndRulerRulesAction({rulesSourceName:r,identifier:d}))},[x,r]);return{loading:B,error:N.error??isRulerNotSupportedResponse(S)?void 0:S.error,dispatched:N.dispatched&&S.dispatched}}function J(r,d){if(!r)return initialAsyncRequestState;const x=d[r];return x||initialAsyncRequestState}function L({ruleIdentifier:r}){const{ruleSourceName:d}=r,x=(0,g.c$)(d),{dsFeatures:E,isLoadingDsFeatures:N}=j(d),{currentData:C,isLoading:S,error:B}=y.alertRuleApi.endpoints.prometheusRuleNamespaces.useQuery({ruleSourceName:r.ruleSourceName,namespace:(0,f.qE)(r)||(0,f.E4)(r)?r.namespace:void 0,groupName:(0,f.qE)(r)||(0,f.E4)(r)?r.groupName:void 0,ruleName:(0,f.qE)(r)||(0,f.E4)(r)?r.ruleName:void 0}),[O,{currentData:z,isLoading:Y,error:X}]=y.alertRuleApi.endpoints.rulerRuleGroup.useLazyQuery(),[k,{currentData:V,isLoading:q,error:i}]=y.alertRuleApi.endpoints.rulerRules.useLazyQuery();(0,c.useEffect)(()=>{E?.rulerConfig&&(E.rulerConfig&&(0,f.E4)(r)?O({rulerConfig:E.rulerConfig,namespace:r.namespace,group:r.groupName}):(0,f.Kl)(r)&&k({rulerConfig:E.rulerConfig}))},[E,O,k,r]);const o=(0,c.useMemo)(()=>{if(C){if((0,f.Kl)(r)){const e=(0,U.bU)("grafana",C,V);for(const n of e)for(const a of n.groups)for(const l of a.rules){const u=D.Yd(d,l);if(D.Dg(u,r))return l}}if(x&&C.length>0&&((0,f.E4)(r)||(0,f.qE)(r))){const e=C.map(n=>(0,U.K$)(x,n,z?[z]:[]));for(const n of e)for(const a of n.groups)for(const l of a.rules){const u=D.Yd(d,l);if(D.Dg(u,r))return l}}}},[r,d,C,z,V,x]);return{loading:N||S||Y||q,error:B??X??i,result:o}}const ee={rulerConfig:{dataSourceName:g.GC,apiVersion:"legacy"}};function j(r){const d=(0,g.HY)(r),{currentData:x,isLoading:E}=$.T.endpoints.discoverDsFeatures.useQuery({rulesSourceName:r},{skip:d});return d?{isLoadingDsFeatures:!1,dsFeatures:ee}:{isLoadingDsFeatures:E,dsFeatures:x}}},92103:(se,G,s)=>{s.d(G,{v:()=>O});var c=s(86832),m=s(56989),t=s(63302),y=s(10752),$=s(52325),Q=s(71476),g=s(34032),p=s(10694),D=s(53305),f=s(89079),U=s(81626),R=s(54554),F=s(93313),Z=s(26205),H=s(92743),J=s(43882),L=s(20367),K=s(89260),ee=s(49135),j=s(21853),r=s(29409);const d={from:21600,to:0},x=(i,o)=>{const e=E(i,o);if(!e)return d;const{from:n,to:a}=C(e,o);return!n.length&&!a.length?d:{from:Math.max(...n),to:Math.min(...a)}},E=(i,o)=>{switch(i.type){case r.Us.classic:return N(i);case r.Us.math:return S(i,o);case r.Us.resample:case r.Us.reduce:case r.Us.threshold:return B(i)}},N=i=>i.conditions?.map(o=>o.query.params[0]),C=(i,o)=>{let e=[],n=[d.to];for(const a of i){const l=o.find(u=>u.refId===a);!l||!l.relativeTimeRange||(e.push(l.relativeTimeRange.from),n.push(l.relativeTimeRange.to))}return{from:e,to:n}},S=(i,o)=>o.filter(e=>e.queryType==="query"&&i.expression?.includes(e.refId)).map(e=>e.refId),B=i=>i.expression?[i.expression]:void 0;class O{constructor(o=(0,L.i)(),e=(0,Z.F)()){this.backendSrv=o,this.dataSourceSrv=e,this.subject=new m.t(1),this.lastResult={}}get(){return this.subject.asObservable()}async run(o){const e=Y(o,p.Gu.Done),n=[];for(const l of o){const u=l.model.refId;if((0,K.j)(l.model))continue;const h=await this.dataSourceSrv.get(l.datasourceUid);h instanceof H.CK&&h.filterQuery&&!h.filterQuery(l.model)&&n.push(u)}const a=(0,c.reject)(o,l=>n.includes(l.model.refId));if(a.length===0)return this.subject.next(e);this.subscription=z(this.backendSrv,a).subscribe({next:l=>{const u=q(l,(h,P)=>{const b=this.lastResult[h],T=(0,D.zR)(P,b);return(0,j.C)(T,b)});this.lastResult=u,this.subject.next(this.lastResult)},error:l=>{this.lastResult=V(this.lastResult,l),this.subject.next(this.lastResult)}})}cancel(){if(!this.subscription)return;this.subscription.unsubscribe();let o=!1;const e=q(this.lastResult,(n,a)=>(a.state===p.Gu.Loading&&(o=!0),{...a,state:p.Gu.Done}));o&&this.subject.next(e)}destroy(){this.subject&&this.subject.complete(),this.cancel()}}const z=(i,o)=>{const e=Y(o,p.Gu.Loading),n={data:{data:o},url:"/api/v1/eval",method:"POST",requestId:(0,g.Z)()};return(0,f.x)({whileLoading:e,source:i.fetch(n).pipe(k(e),(0,y.K)(a=>(0,t.of)(V(e,a))),(0,ee.V)(i,n.requestId),(0,$.B)())})},Y=(i,o)=>i.reduce((e,n)=>(e[n.refId]={state:o,series:[],timeRange:X(n,i)},e),{}),X=(i,o)=>{if((0,K.j)(i.model)){const e=x(i.model,o);return U.relativeToTimeRange(e)}return i.relativeTimeRange?U.relativeToTimeRange(i.relativeTimeRange):(console.warn(`Query with refId: ${i.refId} did not have any relative time range, using default.`),(0,R.JK)())},k=i=>(0,Q.U)(o=>{const{data:e}=o,n={};for(const[a,l]of Object.entries(e.results)){const{error:u,status:h,frames:P=[]}=l,b=u?[{message:u,refId:a,status:h}]:[];n[a]={errors:b,timeRange:i[a].timeRange,state:p.Gu.Done,series:P.map(F.vP)}}return n}),V=(i,o)=>{const e=(0,J.P)(o);return q(i,(n,a)=>({...a,state:p.Gu.Error,error:e}))},q=(i,o)=>{const e={};for(const[n,a]of Object.entries(i))e[n]=o(n,a);return e}}}]);

//# sourceMappingURL=1301.1ce56f7f95cba9841746.js.map