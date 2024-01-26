"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4325],{61324:(q,W,n)=>{n.d(W,{C0:()=>T,Uv:()=>D,Xq:()=>I});var r=n(39953),g=n(33155),e=n(12608),D=(E=>(E.ContactPoint="contact point",E.Template="template",E.MuteTiming="mute timing",E.AlertRule="alert rule",E.RootNotificationPolicy="root notification policy",E))(D||{});const I=({resource:E})=>r.createElement(g.b,{title:`This ${E} cannot be edited through the UI`,severity:"info"},"This ",E," has been provisioned, that means it was created by config. Please contact your server admin to update this ",E,"."),T=()=>r.createElement(e.C,{text:"Provisioned",color:"purple"})},4835:(q,W,n)=>{n.d(W,{p0:()=>ee,Ps:()=>w,_m:()=>X,eW:()=>xe,_4:()=>ye,Fu:()=>ve,Ry:()=>Y,Dr:()=>fe,KP:()=>he,Yq:()=>Ee});var r=n(86832),g=n(65038),e=n(60695),D=n(10694),I=n(34547),T=n(50820),E=n(5026),h=n(89260),b=n(29409),y=n(10235),N=n(16360),L=n(14211);const J=(0,N.Z)(z,(l,o)=>H(l[0])===H(o[0]));function z(l){const o=new L.kJ,u=l.map(i=>i.refId);return o.createNodes(u),l.forEach(i=>{const $=i.refId;((0,h.j)(i.model)&&i.model.type==="math"?re(i.model.expression??""):[i.model.expression]).forEach(C=>{$&&C&&!($===C)&&o.link(C,$)})}),o}function re(l){const o=new RegExp(/\$\{(?<var>[a-zA-Z0-9_ ]+?)\}/gm),u=new RegExp(/\$(?<var>[a-zA-Z0-9_]+)/gm),i=Array.from(l.matchAll(o)).map(m=>m.groups?.var),$=Array.from(l.matchAll(u)).map(m=>m.groups?.var);return(0,r.compact)((0,r.uniq)([...i,...$]))}const _=(0,r.memoize)(M,(l,o)=>l+se(o));function M(l,o){const u=o.getNode(l);let i=[];function $(m){const v=m.inputEdges;v.length>0?v.forEach(C=>{C.inputNode&&$(C.inputNode)}):i?.push(m)}return $(u),i.map(m=>m.name)}function se(l){return Object.keys(l.nodes).map(o=>{const u=l.nodes[o];let i=u.outputEdges.map(m=>m.outputNode?.name).join(", "),$=u.inputEdges.map(m=>m.inputNode?.name).join(", ");return`${u.name}:${i}:${$}`}).join(" ")}function H(l){return l.map(o=>{const u=(0,h.j)(o.model)?o.model.type:o.queryType;return o.refId+(o.model.expression??"")+u}).join()}function Y(l,o,u){return l.map(i=>{if(o===u||!(0,h.j)(i.model))return i;const $=i.model.type==="math",m=i.model.type==="reduce",v=i.model.type==="resample",C=i.model.type==="classic_conditions",Q=i.model.type==="threshold";if($)return{...i,model:{...i.model,expression:pe(i.model.expression??"",o,u)}};if(v||m||Q){const F=i.model.expression===o;return{...i,model:{...i.model,expression:F?u:i.model.expression}}}if(C){const F=i.model.conditions?.map(Z=>({...Z,query:{...Z.query,params:Z.query.params.map(G=>G===o?u:G)}}));return{...i,model:{...i.model,conditions:F}}}return i})}function pe(l,o,u){const i=new RegExp("(\\$"+o+"\\b)|(\\${"+o+"})","gm"),$="${"+u+"}";return l.replace(i,$)}function fe(l,o){return l.find(u=>u.refId===o)!==void 0}function ee(l){return l.includes("/")||l.includes("\\")?'Cannot contain "/" or "\\" characters':!0}function w(l){if(l.series.length===0)return;const o=(0,g.xI)(l.series);let u;return o&&(u=new Error("You cannot use time series data as an alert condition, consider adding a reduce expression.")),u}function X(l){if(l.errors?.length)return new Error(l.errors[0].message)}function Ee(l){const u=(l[0]?.meta?.notices??[]).find(i=>i.severity==="warning")?.text;return u?new Error(u):void 0}function ve(l){const o={},u=[b.Us.threshold,b.Us.classic];for(const m of l){if(!(0,h.j)(m.model)||!u.includes(m.model.type)||!Array.isArray(m.model.conditions))continue;const v=m.model.conditions.some(te);m.model.conditions.forEach(C=>{const Q=C.evaluator.params,F=C.query?.params[0]??m.model.expression;if(!F)return;const Z=te(C);try{const G=J(l),Re=_(F,G);l.filter(ne=>Re.includes(ne.refId)).forEach(ne=>{const j=ne.refId,ie=!!(!(0,h.j)(ne?.model)&&j);j&&!o[j]&&(o[j]={config:{mode:e.H.Absolute,steps:[]},mode:I.i3.Line}),j&&ie&&!Z&&!v?i(j,Q[0]):j&&ie&&Z&&($(j,Q,C.evaluator.type),o[j].mode=I.i3.LineAndArea)})}catch(G){console.error("Failed to parse thresholds",G);return}})}function i(m,v){o[m].config.steps.push({value:-1/0,color:"transparent"},{value:v,color:T.config.theme2.colors.error.main})}function $(m,v,C){C===E.$.IsWithinRange&&o[m].config.steps.push({value:-1/0,color:"transparent"},{value:v[0],color:T.config.theme2.colors.error.main},{value:v[1],color:T.config.theme2.colors.error.main},{value:v[1],color:"transparent"}),C===E.$.IsOutsideRange&&o[m].config.steps.push({value:-1/0,color:T.config.theme2.colors.error.main},{value:v[0],color:T.config.theme2.colors.error.main},{value:v[0],color:"transparent"},{value:v[1],color:T.config.theme2.colors.error.main}),o[m].config.steps.sort((Q,F)=>Q.value-F.value),o[m].config.steps=o[m].config.steps.filter(Q=>Q.value!==void 0)}return o}function te(l){return l.evaluator.type===E.$.IsWithinRange||l.evaluator.type===E.$.IsOutsideRange}function ye(l){const o="Failed to fetch data";if(l.state!==D.Gu.Error)return;const u=l.errors;return u?.length?u.map(i=>i.message??o).join(", "):l.error?.message??o}function he(l=""){return l==="recording"?y.$.cloudRecording:y.$.grafana}function xe(l,o){const u=o.filter(v=>!(0,h.j)(v.model)).map(v=>v.refId),i=l.filter(v=>!(0,h.j)(v.model)).map(v=>v.refId),[$,m]=(0,r.xor)(i,u);return[$,m]}},74325:(q,W,n)=>{n.r(W),n.d(W,{RuleViewer:()=>We,default:()=>et});var r=n(41407),g=n(35422),e=n(39953),D=n(948),I=n(67534),T=n(10694),E=n(27366),h=n(4148),b=n(32688),y=n(82803),N=n(33155),L=n(84766),J=n(12223),z=n(4919),re=n(12190),_=n(62818),M=n(68497),se=n(74602),H=n(48532),Y=n(86832),pe=n(12608),fe=n(71591),ee=n(89260),w=n(29409),X=n(5026),Ee=n(7225),ve=n(4835),te=n(92403),ye=n(69307),he=n(67823),xe=n(21308),l=n(65478);const o=4;function u({data:t,model:a,thresholds:c,dsSettings:p,relativeTimeRange:d,onTimeRangeChange:f,className:P}){const x=(0,y.wW)($),s=(0,ee.j)(a),S=(0,e.useCallback)(O=>{const B=(0,te.CQ)().unix()-O.unix();if(d){const V=d.from-d.to;f({from:B+V,to:B})}},[f,d]),R=(0,e.useCallback)(O=>O===0?(0,te.CQ)():(0,te.CQ)().subtract(O,"seconds"),[]);if(!t)return null;const A=xe.Vt.hasAccessToExplore();return e.createElement("div",{className:P},e.createElement("div",{className:x.header},e.createElement("div",{className:x.actions},!s&&d?e.createElement(he.x,{date:R(d.to),onChange:S,maxDate:new Date}):null,A&&!s&&e.createElement(z.Qj,{size:"md",variant:"secondary",icon:"compass",target:"_blank",href:i(p,a)},"View in Explore"))),e.createElement(l.l,{data:t,thresholds:c?.config,thresholdsType:c?.mode}))}function i(t,a){const{uid:c,type:p}=t,{refId:d,...f}=a;return ye.Cj.renderUrl(`${b.config.appSubUrl}/explore`,{left:JSON.stringify({datasource:t.uid,queries:[{refId:"A",...f,datasource:{type:p,uid:c}}],range:{from:"now-1h",to:"now"}})})}const $=t=>({header:(0,r.css)`
      height: ${t.spacing(o)};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      white-space: nowrap;
      margin-bottom: ${t.spacing(2)};
    `,refId:(0,r.css)`
      font-weight: ${t.typography.fontWeightMedium};
      color: ${t.colors.text.link};
      overflow: hidden;
    `,dataSource:(0,r.css)`
      margin-left: ${t.spacing(1)};
      font-style: italic;
      color: ${t.colors.text.secondary};
    `,actions:(0,r.css)`
      display: flex;
      align-items: center;
    `,errorMessage:(0,r.css)`
      white-space: pre-wrap;
    `});function m({queries:t,condition:a,evalDataByQuery:c={},evalTimeRanges:p={},onTimeRangeChange:d}){const f=(0,Y.keyBy)(Object.values(b.config.datasources),R=>R.uid),P=t.filter(R=>!(0,ee.j)(R.model)),x=t.filter(R=>(0,ee.j)(R.model)),s=(0,y.wW)($e),S=(0,ve.Fu)(t);return e.createElement(E.K,{gap:2,direction:"column"},e.createElement("div",{className:s.maxWidthContainer},e.createElement(E.K,{gap:2},P.map(({model:R,relativeTimeRange:A,refId:O,datasourceUid:B},V)=>{const k=f[B];return e.createElement(v,{key:V,refId:O,isAlertCondition:a===O,model:R,relativeTimeRange:A,evalTimeRange:p[O],dataSource:k,thresholds:S[O],queryData:c[O],onEvalTimeRangeChange:ue=>d(O,ue)})}))),e.createElement("div",{className:s.maxWidthContainer},e.createElement(E.K,{gap:1},x.map(({model:R,refId:A,datasourceUid:O},B)=>{const V=f[O];return(0,ee.j)(R)&&e.createElement(Q,{key:B,refId:A,isAlertCondition:a===A,model:R,dataSource:V,evalData:c[A]})}))))}function v({refId:t,relativeTimeRange:a,thresholds:c,model:p,dataSource:d,queryData:f,evalTimeRange:P,onEvalTimeRangeChange:x}){const s=(0,y.wW)(C),S=[d?.name??"[[Data source not found]]"];return a&&S.push((0,fe.C_)(a).display),e.createElement(F,{refId:t,headerItems:S,className:s.contentBox},e.createElement("pre",{className:s.code},e.createElement("code",null,(0,H.$w)(p))),d&&e.createElement(u,{refId:t,dsSettings:d,model:p,data:f,thresholds:c,relativeTimeRange:P,onTimeRangeChange:x,className:s.visualization}))}const C=t=>({code:(0,r.css)`
    margin: ${t.spacing(1)};
  `,contentBox:(0,r.css)`
    flex: 1 0 100%;
  `,visualization:(0,r.css)`
    padding: ${t.spacing(1)};
  `});function Q({refId:t,model:a,evalData:c,isAlertCondition:p}){function d(){switch(a.type){case w.Us.math:return e.createElement(we,{model:a});case w.Us.reduce:return e.createElement(Pe,{model:a});case w.Us.resample:return e.createElement(j,{model:a});case w.Us.classic:return e.createElement(G,{model:a});case w.Us.threshold:return e.createElement(ie,{model:a});default:return e.createElement(e.Fragment,null,"Expression not supported: ",a.type)}}return e.createElement(F,{refId:t,headerItems:[(0,Y.startCase)(a.type)],isAlertCondition:p},d(),c&&e.createElement(Ee.bw,{series:c.series,isAlertCondition:p}))}function F({refId:t,headerItems:a=[],children:c,isAlertCondition:p,className:d}){const f=(0,y.wW)(Z);return e.createElement("div",{className:(0,r.cx)(f.container,d)},e.createElement("header",{className:f.header},e.createElement("span",{className:f.refId},t),a.map((P,x)=>e.createElement("span",{key:x,className:f.textBlock},P)),p&&e.createElement("div",{className:f.conditionIndicator},e.createElement(pe.C,{color:"green",icon:"check",text:"Alert condition"}))),c)}const Z=t=>({container:(0,r.css)`
    flex: 1 0 25%;
    border: 1px solid ${t.colors.border.strong};
    max-width: 100%;
  `,header:(0,r.css)`
    display: flex;
    align-items: center;
    gap: ${t.spacing(1)};
    padding: ${t.spacing(1)};
    background-color: ${t.colors.background.secondary};
  `,textBlock:(0,r.css)`
    border: 1px solid ${t.colors.border.weak};
    padding: ${t.spacing(.5,1)};
    background-color: ${t.colors.background.primary};
  `,refId:(0,r.css)`
    color: ${t.colors.text.link};
    padding: ${t.spacing(.5,1)};
    border: 1px solid ${t.colors.border.weak};
  `,conditionIndicator:(0,r.css)`
    margin-left: auto;
  `});function G({model:t}){const a=(0,y.wW)(Re),c=(0,Y.keyBy)(X.Z.reducerTypes,f=>f.value),p=(0,Y.keyBy)(X.Z.evalOperators,f=>f.value),d=(0,Y.keyBy)(X.Z.evalFunctions,f=>f.value);return e.createElement("div",{className:a.container},t.conditions?.map(({query:f,operator:P,reducer:x,evaluator:s},S)=>{const R=Ne(s);return e.createElement(e.Fragment,{key:S},e.createElement("div",{className:a.blue},S===0?"WHEN":!!P?.type&&p[P?.type]?.text),e.createElement("div",{className:a.bold},x?.type&&c[x.type]?.text),e.createElement("div",{className:a.blue},"OF"),e.createElement("div",{className:a.bold},f.params[0]),e.createElement("div",{className:a.blue},d[s.type].text),e.createElement("div",{className:a.bold},R?`(${s.params[0]}; ${s.params[1]})`:s.params[0]))}))}const Re=t=>({container:(0,r.css)`
    padding: ${t.spacing(1)};
    display: grid;
    grid-template-columns: max-content max-content max-content max-content max-content max-content;
    gap: ${t.spacing(0,1)};
  `,...ce(t)});function Pe({model:t}){const a=(0,y.wW)(ne),{reducer:c,expression:p,settings:d}=t,f=w.SQ.find(s=>s.value===c),P=d?.mode??w.kN.Strict,x=w.YM.find(s=>s.value===P);return e.createElement("div",{className:a.container},e.createElement("div",{className:a.label},"Function"),e.createElement("div",{className:a.value},f?.label),e.createElement("div",{className:a.label},"Input"),e.createElement("div",{className:a.value},p),e.createElement("div",{className:a.label},"Mode"),e.createElement("div",{className:a.value},x?.label))}const ne=t=>({container:(0,r.css)`
    padding: ${t.spacing(1)};
    display: grid;
    gap: ${t.spacing(1)};
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    > :nth-child(6) {
      grid-column: span 3;
    }
  `,...ce(t)});function j({model:t}){const a=(0,y.wW)(Te),{expression:c,window:p,downsampler:d,upsampler:f}=t,P=w.Fr.find(s=>s.value===d),x=w.r8.find(s=>s.value===f);return e.createElement("div",{className:a.container},e.createElement("div",{className:a.label},"Input"),e.createElement("div",{className:a.value},c),e.createElement("div",{className:a.label},"Resample to"),e.createElement("div",{className:a.value},p),e.createElement("div",{className:a.label},"Downsample"),e.createElement("div",{className:a.value},P?.label),e.createElement("div",{className:a.label},"Upsample"),e.createElement("div",{className:a.value},x?.label))}const Te=t=>({container:(0,r.css)`
    padding: ${t.spacing(1)};
    display: grid;
    gap: ${t.spacing(1)};
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `,...ce(t)});function ie({model:t}){const a=(0,y.wW)($e),{expression:c,conditions:p}=t,d=p&&p[0]?.evaluator,f=w.Mi.find(x=>x.value===d?.type),P=d?Ne(d):!1;return e.createElement("div",{className:a.container},e.createElement("div",{className:a.label},"Input"),e.createElement("div",{className:a.value},c),d&&e.createElement(e.Fragment,null,e.createElement("div",{className:a.blue},f?.label),e.createElement("div",{className:a.bold},P?`(${d.params[0]}; ${d.params[1]})`:d.params[0])))}const $e=t=>{const{blue:a,bold:c,...p}=ce(t);return{...p,maxWidthContainer:(0,r.css)`
      max-width: 100%;
    `,container:(0,r.css)`
      padding: ${t.spacing(1)};
      display: flex;
      gap: ${t.spacing(1)};
    `,blue:(0,r.css)`
      ${a};
      margin: auto 0;
    `,bold:(0,r.css)`
      ${c};
      margin: auto 0;
    `}};function we({model:t}){const a=(0,y.wW)($e),{expression:c}=t;return e.createElement("div",{className:a.container},e.createElement("div",{className:a.label},"Input"),e.createElement("div",{className:a.value},c))}const ce=t=>({blue:(0,r.css)`
    color: ${t.colors.text.link};
  `,bold:(0,r.css)`
    font-weight: ${t.typography.fontWeightBold};
  `,label:(0,r.css)`
    display: flex;
    align-items: center;
    padding: ${t.spacing(.5,1)};
    background-color: ${t.colors.background.secondary};
    font-size: ${t.typography.bodySmall.fontSize};
    line-height: ${t.typography.bodySmall.lineHeight};
    font-weight: ${t.typography.fontWeightBold};
  `,value:(0,r.css)`
    padding: ${t.spacing(.5,1)};
    border: 1px solid ${t.colors.border.weak};
  `});function Ne(t){return t.type===X.$.IsWithinRange||t.type===X.$.IsOutsideRange}var Be=n(87523),be=n(75690),Le=n(92103),Qe=n(50287),De=n(95712),ae=n(15032);function Me(t){if(!t)return[];const{namespace:a,rulerRule:c}=t,{rulesSource:p}=a;if((0,De.HY)(p)&&(0,ae.Pc)(c))return c.grafana_alert.data;if((0,De.jq)(p)){const d=je(p,t);return[Fe(d,p.uid)]}return[]}function Fe(t,a){return{refId:t.refId,datasourceUid:a,queryType:"",model:t,relativeTimeRange:{from:360,to:0}}}function je(t,a){const c="A";switch(t.type){case"prometheus":return{refId:c,expr:a.query};case"loki":return{refId:c,expr:a.query};default:throw new Error(`Query for datasource type ${t.type} is currently not supported by cloud alert rules.`)}}var Ke=n(30391),Ve=n(4353),oe=n(40700),Oe=n(61324),de=n(12942),ze=n(17539),He=n(87109),Ze=n(93698),Ge=n(1603);const Je=({group:t})=>{const a=t.source_tenants??[];return e.createElement(oe.C,{label:"Tenant sources"},e.createElement(e.Fragment,null,a.map(c=>e.createElement("div",{key:c},c))))};var Ye=n(76121),Xe=n(3910),ke=n(6320);const Ie="Could not find data source for rule",Se="Could not view rule",Ce="View rule";function We({match:t}){const a=(0,y.wW)(Ae),[c,p]=(0,D.Z)(!1),{id:d}=t.params,f=(0,e.useMemo)(()=>{if(!d)throw new Error("Rule ID is required");return Ke.Qc(d,!0)},[d]),{loading:P,error:x,result:s}=(0,be.HO)({ruleIdentifier:f}),S=(0,e.useMemo)(()=>new Le.v,[]),R=(0,I.Z)(S.get()),A=(0,e.useMemo)(()=>Me(s),[s]),O=(0,Qe.$9)(s?.annotations||{}),[B,V]=(0,e.useState)({}),{allDataSourcesAvailable:k}=(0,Be.S)(A),ue=(0,e.useCallback)(()=>{if(A.length>0&&k){const U=A.map(K=>({...K,relativeTimeRange:B[K.refId]??K.relativeTimeRange}));S.run(U)}},[A,B,S,k]);(0,e.useEffect)(()=>{const U=Me(s),K=Object.fromEntries(U.map(ge=>[ge.refId,ge.relativeTimeRange??{from:0,to:0}]));V(K)},[s]),(0,e.useEffect)(()=>{k&&c&&ue()},[ue,k,c]),(0,e.useEffect)(()=>()=>S.destroy(),[S]);const Ue=(0,e.useCallback)((U,K)=>{const ge=(0,g.Uy)(B,nt=>{nt[U]=K});V(ge)},[B,V]);if(!f?.ruleSourceName)return e.createElement(de.$,{title:Ce},e.createElement(N.b,{title:Se},e.createElement("details",{className:a.errorMessage},Ie)));const me=(0,De.o_)(f.ruleSourceName);if(P)return e.createElement(de.$,{title:Ce},e.createElement(L.u,{text:"Loading rule..."}));if(x||!me)return e.createElement(N.b,{title:Se},e.createElement("details",{className:a.errorMessage},(0,h.kW)(x)?x.message:Ie,e.createElement("br",null)));if(!s)return e.createElement(de.$,{title:Ce},e.createElement("span",null,"Rule could not be found."));const le=(0,ae.Jq)(s.group),tt=(0,ae.Pc)(s.rulerRule)&&!!s.rulerRule.grafana_alert.provenance;return e.createElement(e.Fragment,null,le&&e.createElement(N.b,{severity:"info",title:"This rule is part of a federated rule group."},e.createElement(J.wc,null,"Federated rule groups are currently an experimental feature.",e.createElement(z.zx,{fill:"text",icon:"book"},e.createElement("a",{href:"https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation"},"Read documentation")))),tt&&e.createElement(Oe.Xq,{resource:Oe.Uv.AlertRule}),e.createElement(de.l,null,e.createElement("div",null,e.createElement(E.K,{direction:"row",alignItems:"center",wrap:!1,gap:1},e.createElement(re.J,{name:"bell",size:"lg"})," ",e.createElement("span",{className:a.title},s.name)),e.createElement(ke.p,{rule:s,isCreating:!1,isDeleting:!1}),e.createElement(ze.f,{rule:s,rulesSource:me,isViewMode:!0})),e.createElement("div",{className:a.details},e.createElement("div",{className:a.leftSide},s.promRule&&e.createElement(oe.C,{label:"Health",horizontal:!0},e.createElement(Xe.V,{rule:s.promRule})),!!s.labels&&!!Object.keys(s.labels).length&&e.createElement(oe.C,{label:"Labels",horizontal:!0},e.createElement(Ve.s,{labels:s.labels})),e.createElement(Ge.C,{rulesSource:me,rule:s,annotations:O}),e.createElement(He.J,{annotations:O})),e.createElement("div",{className:a.rightSide},e.createElement(Ze.C,{rule:s,rulesSource:me}),le&&e.createElement(Je,{group:s.group}),e.createElement(oe.C,{label:"Namespace / Group",className:a.rightSideDetails},s.namespace.name," / ",s.group.name),(0,ae.Pc)(s.rulerRule)&&e.createElement(qe,{rule:s.rulerRule.grafana_alert}))),e.createElement("div",null,e.createElement(Ye.M,{rule:s,pagination:{itemsPerPage:se.gN},enableFiltering:!0}))),e.createElement(_.U,{label:"Query & Results",isOpen:c,onToggle:p,loading:R&&_e(R),collapsible:!0,className:a.collapse},(0,ae.Pc)(s.rulerRule)&&!le&&e.createElement(m,{condition:s.rulerRule.grafana_alert.condition,queries:A,evalDataByQuery:R,evalTimeRanges:B,onTimeRangeChange:Ue}),!(0,ae.Pc)(s.rulerRule)&&!le&&R&&Object.keys(R).length>0&&e.createElement("div",{className:a.queries},A.map(U=>e.createElement(v,{key:U.refId,refId:U.refId,model:U.model,dataSource:Object.values(b.config.datasources).find(K=>K.uid===U.datasourceUid),queryData:R[U.refId],relativeTimeRange:U.relativeTimeRange,evalTimeRange:B[U.refId],onEvalTimeRangeChange:K=>Ue(U.refId,K),isAlertCondition:!1}))),!le&&!k&&e.createElement(N.b,{title:"Query not available",severity:"warning",className:a.queryWarning},"Cannot display the query preview. Some of the data sources used in the queries are not available.")))}function qe({rule:t}){const a=(0,y.wW)(Ae),c=()=>navigator.clipboard&&navigator.clipboard.writeText(t.uid);return e.createElement(oe.C,{label:"Rule UID",childrenWrapperClassName:a.ruleUid},t.uid," ",e.createElement(M.h,{name:"copy",onClick:c,tooltip:"Copy rule UID"}))}function _e(t){return!!Object.values(t).find(a=>a.state===T.Gu.Loading)}const Ae=t=>({errorMessage:(0,r.css)`
      white-space: pre-wrap;
    `,queries:(0,r.css)`
      height: 100%;
      width: 100%;
    `,collapse:(0,r.css)`
      margin-top: ${t.spacing(2)};
      border-color: ${t.colors.border.weak};
      border-radius: ${t.shape.radius.default};
    `,queriesTitle:(0,r.css)`
      padding: ${t.spacing(2,.5)};
      font-size: ${t.typography.h5.fontSize};
      font-weight: ${t.typography.fontWeightBold};
      font-family: ${t.typography.h5.fontFamily};
    `,query:(0,r.css)`
      border-bottom: 1px solid ${t.colors.border.medium};
      padding: ${t.spacing(2)};
    `,queryWarning:(0,r.css)`
      margin: ${t.spacing(4,0)};
    `,title:(0,r.css)`
      font-size: ${t.typography.h4.fontSize};
      font-weight: ${t.typography.fontWeightBold};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `,details:(0,r.css)`
      display: flex;
      flex-direction: row;
      gap: ${t.spacing(4)};
    `,leftSide:(0,r.css)`
      flex: 1;
      overflow: hidden;
    `,rightSide:(0,r.css)`
      padding-right: ${t.spacing(3)};

      max-width: 360px;
      word-break: break-all;
      overflow: hidden;
    `,rightSideDetails:(0,r.css)`
      & > div:first-child {
        width: auto;
      }
    `,labels:(0,r.css)`
      justify-content: flex-start;
    `,ruleUid:(0,r.css)`
      display: flex;
      align-items: center;
      gap: ${t.spacing(1)};
    `}),et=We},12942:(q,W,n)=>{n.d(W,{$:()=>T,l:()=>E});var r=n(41407),g=n(39953),e=n(82803),D=n(13253);const I={icon:"bell",id:"alert-rule-view"};function T(y){const{wrapInContent:N=!0,children:L,title:J}=y,z=(0,e.wW)(h);return g.createElement(D.T,{pageNav:{...I,text:J},navId:"alert-list"},g.createElement(D.T.Contents,null,g.createElement("div",{className:z.content},N?g.createElement(E,{...y}):L)))}function E({children:y,padding:N=2}){const L=(0,e.wW)(b(N));return g.createElement("div",{className:L.wrapper},y)}const h=y=>({content:(0,r.css)`
      max-width: ${y.breakpoints.values.xxl}px;
    `}),b=y=>N=>({wrapper:(0,r.css)`
      background: ${N.colors.background.primary};
      border: 1px solid ${N.colors.border.weak};
      border-radius: ${N.shape.radius.default};
      padding: ${N.spacing(y)};
    `})},3910:(q,W,n)=>{n.d(W,{V:()=>T});var r=n(41407),g=n(39953),e=n(82803),D=n(69865),I=n(12190);const T=({rule:h})=>{const b=(0,e.wW)(E);return h.health==="err"||h.health==="error"?g.createElement(D.u,{theme:"error",content:h.lastError||"No error message provided."},g.createElement("div",{className:b.warn},g.createElement(I.J,{name:"exclamation-triangle"}),g.createElement("span",null,"error"))):g.createElement(g.Fragment,null,h.health)},E=h=>({warn:(0,r.css)`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${h.spacing(1)};

    color: ${h.colors.warning.text};
  `})},6320:(q,W,n)=>{n.d(W,{p:()=>y});var r=n(41407),g=n(39953),e=n(5195),D=n(27366),I=n(82803),T=n(28409),E=n(17330),h=n(15032),b=n(10162);const y=({rule:L,isDeleting:J,isCreating:z,isPaused:re})=>{const _=(0,I.wW)(N),{promRule:M}=L,se=(0,g.useMemo)(()=>{if(M&&(0,h.x_)(M)&&M.alerts?.length&&M.state!==E.x_.Inactive){const H=M.activeAt?new Date(M.activeAt):(0,h.ub)(M);if(H)return g.createElement("span",{title:String(H),className:_.for},"for"," ",(0,e.vT)({start:H,end:new Date},!1))}return null},[M,_]);return J?g.createElement(D.K,{gap:1},g.createElement(T.$,null),"Deleting"):z?g.createElement(D.K,{gap:1},g.createElement(T.$,null),"Creating"):M&&(0,h.x_)(M)?g.createElement(D.K,{gap:1},g.createElement(b.l,{state:M.state,isPaused:re}),se):M&&(0,h.OP)(M)?g.createElement(g.Fragment,null,"Recording rule"):g.createElement(g.Fragment,null,"n/a")},N=L=>({for:(0,r.css)`
    font-size: ${L.typography.bodySmall.fontSize};
    color: ${L.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},89260:(q,W,n)=>{n.d(W,{j:()=>e});var r=n(92743),g=n(29409);const e=D=>{if(!D)return!1;if((0,r.Pr)(D.datasource))return!0;const I=D;return typeof I.type!="string"?!1:Object.values(g.Us).includes(I.type)}}}]);

//# sourceMappingURL=4325.8d65e176a0471650d98a.js.map