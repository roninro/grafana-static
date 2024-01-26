"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8595],{49245:(B,P,e)=>{e.d(P,{l:()=>M});var t=e(39953),O=e(24058),f=e(72639),m=e(26205),y=e(29581);class M extends t.PureComponent{constructor(){super(...arguments),this.onRemoveQuery=n=>{this.props.onQueriesChange(this.props.queries.filter(r=>r!==n))},this.onDragStart=n=>{const{queries:r,dsSettings:s}=this.props;(0,f.ff)("query_row_reorder_started",{startIndex:n.source.index,numberOfQueries:r.length,datasourceType:s.type})},this.onDragEnd=n=>{const{queries:r,onQueriesChange:s,dsSettings:d}=this.props;if(!n||!n.destination)return;const a=n.source.index,i=n.destination.index;if(a===i){(0,f.ff)("query_row_reorder_canceled",{startIndex:a,endIndex:i,numberOfQueries:r.length,datasourceType:d.type});return}const c=Array.from(r),[g]=c.splice(a,1);c.splice(i,0,g),s(c),(0,f.ff)("query_row_reorder_ended",{startIndex:a,endIndex:i,numberOfQueries:r.length,datasourceType:d.type})}}onChangeQuery(n,r){const{queries:s,onQueriesChange:d}=this.props;d(s.map((a,i)=>i===r?n:a))}onDataSourceChange(n,r){const{queries:s,onQueriesChange:d}=this.props;d(s.map((a,i)=>{if(i!==r)return a;const c={type:n.type,uid:n.uid};return a.datasource&&(0,m.F)().getInstanceSettings(a.datasource)?.type===n.type?{...a,datasource:c}:{refId:a.refId,hide:a.hide,datasource:c}}))}render(){const{dsSettings:n,data:r,queries:s,app:d,history:a,eventBus:i,onAddQuery:c,onRunQueries:g,onQueryCopied:v,onQueryRemoved:C,onQueryToggled:T}=this.props;return t.createElement(O.Z5,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd},t.createElement(O.bK,{droppableId:"transformations-list",direction:"vertical"},D=>t.createElement("div",{"data-testid":"query-editor-rows",ref:D.innerRef,...D.droppableProps},s.map((u,_)=>{const o=R(u,n),l=n.meta.mixed?h=>this.onDataSourceChange(h,_):void 0;return t.createElement(y.x,{id:u.refId,index:_,key:u.refId,data:r,query:u,dataSource:o,onChangeDataSource:l,onChange:h=>this.onChangeQuery(h,_),onRemoveQuery:this.onRemoveQuery,onAddQuery:c,onRunQuery:g,onQueryCopied:v,onQueryRemoved:C,onQueryToggled:T,queries:s,app:d,history:a,eventBus:i})}),D.placeholder)))}}const R=(p,n)=>p.datasource&&(0,m.F)().getInstanceSettings(p.datasource)||n},88567:(B,P,e)=>{e.r(P),e.d(P,{TestStuffPage:()=>v,default:()=>D,getDefaultState:()=>C});var t=e(39953),O=e(67534),f=e(19977),m=e(77877),y=e(97898),M=e(44076),R=e(64654),p=e(12223),n=e(23968),r=e(4919),s=e(13253),d=e(50820),a=e(90634),i=e(95430),c=e(21026),g=e(74277);const v=()=>{const[u,_]=(0,t.useState)(C()),{queryOptions:o,queryRunner:l}=u,h=()=>{const E={from:"now-1h",to:"now"};l.run({queries:o.queries,datasource:o.dataSource,timezone:"browser",timeRange:{from:m.parse(E.from),to:m.parse(E.to),raw:E},maxDataPoints:o.maxDataPoints??100,minInterval:o.minInterval})},L=E=>{_({...u,queryOptions:E})},Q=(0,t.useMemo)(()=>l.getData({withFieldConfig:!0,withTransforms:!0}),[l]),I=(0,O.Z)(Q),A={id:"test-page",text:"Test page",icon:"dashboard",subTitle:"FOR TESTING!",url:"sandbox/test"},S=(0,a.iG)();return t.createElement(s.T,{navModel:{node:A,main:A}},t.createElement(s.T.Contents,null,t.createElement(p.Lh,null,t.createElement(T,{extensionPointId:"grafana/sandbox/testing"})),I&&t.createElement(f.Z,{style:{width:"100%",height:"600px"}},({width:E})=>t.createElement("div",null,t.createElement(i.$,{title:"Hello",pluginId:"timeseries",width:E,height:300,data:I,options:{},fieldConfig:{defaults:{},overrides:[]},timeZone:"browser"}),t.createElement(n.i,{data:I.series[0],width:E,height:300}))),t.createElement("div",{style:{marginTop:"16px",height:"45%"}},t.createElement(c.D,{options:o,queryRunner:l,onRunQueries:h,onOptionsChange:L})),t.createElement("div",{style:{display:"flex",gap:"1em"}},t.createElement(r.zx,{onClick:()=>S.success("Success toast","some more text goes here"),variant:"primary"},"Success"),t.createElement(r.zx,{onClick:()=>S.warning("Warning toast","some more text goes here","bogus-trace-99999"),variant:"secondary"},"Warning"),t.createElement(r.zx,{onClick:()=>S.error("Error toast","some more text goes here","bogus-trace-fdsfdfsfds"),variant:"destructive"},"Error"))))};function C(){const u={fieldConfig:{defaults:{color:{mode:y.S.PaletteClassic}},overrides:[]},replaceVariables:o=>o,theme:d.config.theme2},_={getTransformations:()=>[],getFieldOverrideOptions:()=>u,getDataSupport:()=>({annotations:!1,alertStates:!1})};return{queryRunner:new g.o(_),queryOptions:{queries:[],dataSource:{name:"gdev-testdata"},maxDataPoints:100}}}function T({extensionPointId:u}){const{extensions:_}=(0,M.I4)({extensionPointId:u});return _.length===0?null:t.createElement("div",null,_.map((o,l)=>(0,R.c)(o)?t.createElement(r.Qj,{href:o.path,title:o.description,key:o.id},o.title):null))}const D=v}}]);

//# sourceMappingURL=TestStuffPage.715b00561840626ea6cd.js.map