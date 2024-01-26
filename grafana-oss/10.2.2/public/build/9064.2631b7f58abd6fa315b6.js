"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9064],{49372:(w,p,i)=>{i.d(p,{Mo:()=>e});var r=i(86832),t=i.n(r),n=i(92403),s=i(89591);const e=(h,f=!1)=>{const E=h.values;switch(h.type){case s.fS.number:return N(E,f);case s.fS.string:return T(E,f);case s.fS.boolean:return L(E,f);case s.fS.time:return typeof h.values[0]=="number"?S(E,f):P(E,f);default:return A(f)}},c=(h,f)=>{if(!h||!f)return y(h,f);if((0,r.isNumber)(h)&&(0,r.isNumber)(f))return l(h,f);if((0,n.D2)(h)&&(0,n.D2)(f)){if((0,n.CQ)(h).isBefore(f))return-1;if((0,n.CQ)(f).isBefore(h))return 1}return 0},l=(h,f)=>h-f,a=(h,f)=>!h||!f?y(h,f):h.localeCompare(f),g=(h,f)=>y(h,f),y=(h,f)=>!h&&f?1:h&&!f?-1:0,S=(h,f)=>{let E=f?-1:1;return(F,_)=>E*(h[F]-h[_])},P=(h,f)=>(E,F)=>{const _=h[E],M=h[F];return f?c(M,_):c(_,M)},L=(h,f)=>(E,F)=>{const _=h[E],M=h[F];return f?g(M,_):g(_,M)},N=(h,f)=>(E,F)=>{const _=h[E],M=h[F];return f?l(M,_):l(_,M)},T=(h,f)=>(E,F)=>{const _=h[E],M=h[F];return f?a(M,_):a(_,M)},A=h=>(f,E)=>h?l(E,f):l(f,E)},34352:(w,p,i)=>{i.d(p,{f:()=>t});var r=i(34547);function t(n,s,e){switch((n==null||e==null)&&(n==null&&(n="null"),e==null&&(e="null"),(s===r.Bd.GTE||s===r.Bd.LTE)&&(s=r.Bd.EQ)),s){case r.Bd.EQ:return`${n}`==`${e}`;case r.Bd.NEQ:return`${n}`!=`${e}`;case r.Bd.GT:return n>e;case r.Bd.GTE:return n>=e;case r.Bd.LT:return n<e;case r.Bd.LTE:return n<=e;default:return!1}}},62322:(w,p,i)=>{i.d(p,{N:()=>l});var r=i(89591),t=i(86981);const n={id:t.mi.byType,name:"Field Type",description:"match based on the field type",defaultOptions:r.fS.number,get:a=>(g,y,S)=>a===g.type,getOptionsDisplayText:a=>`Field type: ${a}`},s={id:t.mi.byTypes,name:"Field Type",description:"match based on the field types",defaultOptions:new Set,get:a=>(g,y,S)=>a.has(g.type),getOptionsDisplayText:a=>`Field types: ${[...a].join(" | ")}`},e={id:t.mi.numeric,name:"Numeric Fields",description:"Fields with type number",get:()=>n.get(r.fS.number),getOptionsDisplayText:()=>"Numeric Fields"},c={id:t.mi.time,name:"Time Fields",description:"Fields with type time",get:()=>n.get(r.fS.time),getOptionsDisplayText:()=>"Time Fields"};function l(){return[n,s,e,c]}},50416:(w,p,i)=>{i.d(p,{b:()=>c});var r=i(34547),t=i(3181),n=i(34352),s=i(86981);function e(l){return l===t.gz.allIsNull||l===t.gz.allIsZero}const c={id:s.mi.byValue,name:"By value (reducer)",description:"Reduce a field to a single value and test for inclusion",defaultOptions:{reducer:t.gz.allIsZero,op:r.Bd.GTE,value:0},get:l=>{if(!l||!l.reducer)return()=>!1;let{reducer:a,op:g,value:y}=l;const S=e(a);return g||(g=r.Bd.EQ),(P,L,N)=>{const T=(0,t.Kx)({field:P,reducers:[a]})[a];return S?!!T:(0,n.f)(T,g,y)}},getOptionsDisplayText:l=>`By value (${l.reducer})`}},86981:(w,p,i)=>{i.d(p,{E4:()=>n,Ff:()=>r,mE:()=>s,mi:()=>t});var r=(e=>(e.anyMatch="anyMatch",e.allMatch="allMatch",e.invertMatch="invertMatch",e.alwaysMatch="alwaysMatch",e.neverMatch="neverMatch",e))(r||{}),t=(e=>(e.numeric="numeric",e.time="time",e.first="first",e.firstTimeField="firstTimeField",e.byType="byType",e.byTypes="byTypes",e.byName="byName",e.byNames="byNames",e.byRegexp="byRegexp",e.byRegexpOrNames="byRegexpOrNames",e.byFrameRefID="byFrameRefID",e.byValue="byValue",e))(t||{}),n=(e=>(e.byName="byName",e.byRefId="byRefId",e.byIndex="byIndex",e))(n||{}),s=(e=>(e.regex="regex",e.isNull="isNull",e.isNotNull="isNotNull",e.greater="greater",e.greaterOrEqual="greaterOrEqual",e.lower="lower",e.lowerOrEqual="lowerOrEqual",e.equal="equal",e.notEqual="notEqual",e.between="between",e))(s||{})},55912:(w,p,i)=>{i.d(p,{n:()=>s});var r=i(55705),t=i(86981);const n={id:t.E4.byRefId,name:"Query refId",description:"match the refId",defaultOptions:"A",get:e=>{const c=(0,r.jO)(e);return l=>c.test(l.refId||"")},getOptionsDisplayText:e=>`RefID: ${e}`};function s(){return[n]}},75898:(w,p,i)=>{i.d(p,{z:()=>e});var r=i(89591),t=i(86981);const n={id:t.mi.first,name:"First Field",description:"The first field in the frame",get:c=>(l,a,g)=>l===a.fields[0],getOptionsDisplayText:()=>"First field"},s={id:t.mi.firstTimeField,name:"First time field",description:"The first field of type time in a frame",get:c=>(l,a,g)=>l.type===r.fS.time&&l===a.fields.find(y=>y.type===r.fS.time),getOptionsDisplayText:()=>"First time field"};function e(){return[n,s]}},23203:(w,p,i)=>{i.d(p,{T:()=>s});var r=i(86981);const t={id:r.mE.equal,name:"Is equal",description:"Match where value for given field is equal to options value.",get:e=>(c,l)=>l.values[c]==e.value,getOptionsDisplayText:()=>"Matches all rows where field is null.",isApplicable:()=>!0,getDefaultOptions:()=>({value:""})},n={id:r.mE.notEqual,name:"Is not equal",description:"Match where value for given field is not equal to options value.",get:e=>(c,l)=>l.values[c]!=e.value,getOptionsDisplayText:()=>"Matches all rows where field is not null.",isApplicable:()=>!0,getDefaultOptions:()=>({value:""})},s=()=>[t,n]},17436:(w,p,i)=>{i.d(p,{a:()=>s});var r=i(86981);const t={id:r.mE.isNull,name:"Is null",description:"Match where value for given field is null.",get:()=>(e,c)=>c.values[e]==null,getOptionsDisplayText:()=>"Matches all rows where field is null.",isApplicable:()=>!0,getDefaultOptions:()=>({})},n={id:r.mE.isNotNull,name:"Is not null",description:"Match where value for given field is not null.",get:()=>(e,c)=>c.values[e]!=null,getOptionsDisplayText:()=>"Matches all rows where field is not null.",isApplicable:()=>!0,getDefaultOptions:()=>({})},s=()=>[t,n]},64697:(w,p,i)=>{i.d(p,{H:()=>l});var r=i(89591),t=i(86981);const n={id:t.mE.greater,name:"Is greater",description:"Match when field value is greater than option.",get:a=>(g,y)=>{const S=y.values[g];return isNaN(S)?!1:S>a.value},getOptionsDisplayText:a=>`Matches all rows where field value is greater than: ${a.value}.`,isApplicable:a=>a.type===r.fS.number,getDefaultOptions:()=>({value:0})},s={id:t.mE.greaterOrEqual,name:"Is greater or equal",description:"Match when field value is greater than or equal to option.",get:a=>(g,y)=>{const S=y.values[g];return isNaN(S)?!1:S>=a.value},getOptionsDisplayText:a=>`Matches all rows where field value is greater than or equal to: ${a.value}.`,isApplicable:a=>a.type===r.fS.number,getDefaultOptions:()=>({value:0})},e={id:t.mE.lower,name:"Is lower",description:"Match when field value is lower than option.",get:a=>(g,y)=>{const S=y.values[g];return isNaN(S)?!1:S<a.value},getOptionsDisplayText:a=>`Matches all rows where field value is lower than: ${a.value}.`,isApplicable:a=>a.type===r.fS.number,getDefaultOptions:()=>({value:0})},c={id:t.mE.lowerOrEqual,name:"Is lower or equal",description:"Match when field value is lower or equal than option.",get:a=>(g,y)=>{const S=y.values[g];return isNaN(S)?!1:S<=a.value},getOptionsDisplayText:a=>`Matches all rows where field value is lower or equal than: ${a.value}.`,isApplicable:a=>a.type===r.fS.number,getDefaultOptions:()=>({value:0})},l=()=>[n,s,e,c]},90215:(w,p,i)=>{i.d(p,{G:()=>s});var r=i(89591),t=i(86981);const n={id:t.mE.between,name:"Is between",description:"Match when field value is between given option values.",get:e=>(c,l)=>{const a=l.values[c];return isNaN(a)?!1:a>e.from&&a<e.to},getOptionsDisplayText:e=>`Matches all rows where field value is between ${e.from} and ${e.to}.`,isApplicable:e=>e.type===r.fS.number,getDefaultOptions:()=>({from:0,to:100})},s=()=>[n]},67580:(w,p,i)=>{i.d(p,{G:()=>n});var r=i(86981);const t={id:r.mE.regex,name:"Regex",description:"Match when field value is matching regex.",get:s=>{const e=new RegExp(s.value);return(c,l)=>{const a=l.values[c];return e.test(a)}},getOptionsDisplayText:s=>`Matches all rows where field value is matching regex: ${s.value}`,isApplicable:()=>!0,getDefaultOptions:()=>({value:".*"})},n=()=>[t]},7959:(w,p,i)=>{i.d(p,{W:()=>r});var r=(t=>(t.append="append",t.reduce="reduce",t.order="order",t.organize="organize",t.rename="rename",t.calculateField="calculateField",t.seriesToColumns="seriesToColumns",t.seriesToRows="seriesToRows",t.merge="merge",t.concatenate="concatenate",t.labelsToFields="labelsToFields",t.filterFields="filterFields",t.filterFieldsByName="filterFieldsByName",t.filterFrames="filterFrames",t.filterByRefId="filterByRefId",t.renameByRegex="renameByRegex",t.filterByValue="filterByValue",t.noop="noop",t.ensureColumns="ensureColumns",t.groupBy="groupBy",t.sortBy="sortBy",t.histogram="histogram",t.configFromData="configFromData",t.rowsToFields="rowsToFields",t.prepareTimeSeries="prepareTimeSeries",t.convertFieldType="convertFieldType",t.fieldLookup="fieldLookup",t.heatmap="heatmap",t.spatial="spatial",t.joinByField="joinByField",t.joinByLabels="joinByLabels",t.extractFields="extractFields",t.groupingToMatrix="groupingToMatrix",t.limit="limit",t.partitionByValues="partitionByValues",t.timeSeriesTable="timeSeriesTable",t.formatTime="formatTime",t.formatString="formatString",t))(r||{})},77663:(w,p,i)=>{i.d(p,{B:()=>t});var r=i(30670);class t{constructor(s){this.init=s,this.ordered=[],this.byId=new Map,this.initialized=!1,this.setInit=e=>{if(this.initialized)throw new Error("Registry already initialized");this.init=e},this.init=s}getIfExists(s){if(this.initialized||this.initialize(),s)return this.byId.get(s)}initialize(){if(this.init)for(const s of this.init())this.register(s);this.sort(),this.initialized=!0}get(s){const e=this.getIfExists(s);if(!e)throw new Error(`"${s}" not found in: ${this.list().map(c=>c.id)}`);return e}selectOptions(s,e){this.initialized||this.initialize();const c={options:[],current:[]},l={};if(s)for(const a of s)l[a]={};for(const a of this.ordered){if(a.excludeFromPicker||e&&!e(a))continue;const g={value:a.id,label:a.name,description:a.description};a.state===r.BV.alpha&&(g.label+=" (alpha)"),c.options.push(g),l[a.id]&&(l[a.id]=g)}return s&&(c.current=Object.values(l)),c}list(s){if(this.initialized||this.initialize(),s){const e=[];for(const c of s){const l=this.getIfExists(c);l&&e.push(l)}return e}return this.ordered}isEmpty(){return this.initialized||this.initialize(),this.ordered.length===0}register(s){if(this.byId.has(s.id))throw new Error("Duplicate Key:"+s.id);if(this.byId.set(s.id,s),this.ordered.push(s),s.aliasIds)for(const e of s.aliasIds)this.byId.has(e)||this.byId.set(e,s);this.initialized&&this.sort()}sort(){}}},72964:(w,p,i)=>{i.d(p,{W:()=>r});function r(t,n){const s=/\{\{\s*(.+?)\s*\}\}/g;return t.replace(s,(e,c)=>n[c]?n[c]:c)}},43882:(w,p,i)=>{i.d(p,{P:()=>r});function r(t){const n=t||{};if(!n.message){if(typeof t=="string")return{message:t};let s="Query error";n.message?s=n.message:n.data&&n.data.message&&n.data?.message!=="Query data error"?s=n.data.message:n?.data?.message==="Query data error"&&n?.data?.error||n.data&&n.data.error?s=n.data.error:n.status&&(s=`Query error: ${n.status} ${n.statusText}`),n.message=s}return n}},69109:(w,p,i)=>{i.d(p,{R:()=>j});var r=i(52446),t=i(52325),n=i(67014),s=i(86261),e=i(48614),c=i(26058),l=i(36497),a=i(56989),g=i(71476),y=i(10694),S=i(43882),P=i(14191);const L=b=>o=>new l.y(u=>{let d=[],m=!0;const O=()=>{u.next(d),d=[]},R=b.subscribe({next:B=>{m=B,m&&d.length&&O()}}),I=o.subscribe({next(B){m?d.length?O():u.next([B]):d.push(B)},error(B){u.error(B)},complete(){u.complete()}});return()=>{I.unsubscribe(),R.unsubscribe()}});var N=(b=>(b[b.Error=0]="Error",b[b.NewValuesSameSchema=1]="NewValuesSameSchema",b[b.ChangedSchema=2]="ChangedSchema",b))(N||{});const T=b=>({values:b.reduce((o,{values:u})=>{for(let d=0;d<u.length;d++){o[d]||(o[d]=[]);for(let m=0;m<u[d].length;m++)o[d].push(u[d][m])}return o},[]),type:1}),A=(b,o)=>b.filter(u=>u.type===o);class h{constructor(o){this.deps=o,this.stream=new a.t(1),this.shutdown=()=>{this.stream.complete(),this.liveEventsSubscription.unsubscribe(),this.deps.onShutdown()},this.shutdownIfNoSubscribers=()=>{this.stream.observed||this.shutdown()},this.onError=u=>{console.log("LiveQuery [error]",{err:u},this.deps.channelId),this.stream.next({type:0,error:(0,S.P)(u)}),this.shutdown()},this.onComplete=()=>{console.log("LiveQuery [complete]",this.deps.channelId),this.shutdown()},this.onNext=u=>{if((0,e.RL)(u)){this.process(u.message);return}const d=(0,e.se)(u);if(d&&u.error){const m=(0,S.P)(u.error);this.stream.next({type:0,error:{...m,message:`Streaming channel error: ${m.message}`}})}d&&(u.state===e.yS.Connected||u.state===e.yS.Pending)&&u.message&&this.process(u.message)},this.process=u=>{this.frameBuffer.push(u).schemaChanged?this.stream.next({type:2}):this.stream.next({type:1,values:this.frameBuffer.getValuesFromLastPacket()})},this.resizeBuffer=u=>{u&&this.frameBuffer.needsResizing(u)&&this.frameBuffer.resize(u)},this.prepareInternalStreamForNewSubscription=u=>{!this.frameBuffer.hasAtLeastOnePacket()&&u.frame&&this.process(u.frame)},this.clearShutdownTimeout=()=>{this.shutdownTimeoutId&&(clearTimeout(this.shutdownTimeoutId),this.shutdownTimeoutId=void 0)},this.get=(u,d)=>{this.clearShutdownTimeout();const m=(0,c._A)(u.buffer);this.resizeBuffer(m),this.prepareInternalStreamForNewSubscription(u);const O=u?.buffer?.action===c.T0.Replace,R=u.filter?.fields,B=R?.length?({name:v})=>R.includes(v):void 0;let U;const $=(v,x)=>(U=B?this.frameBuffer.getMatchingFieldIndexes(B):void 0,O?x?{key:d,state:y.Gu.Error,data:[{type:P.g0.FullFrame,frame:this.frameBuffer.serialize(B,m,{maxLength:0})}],error:x}:v.length?{key:d,state:y.Gu.Streaming,data:[{type:P.g0.FullFrame,frame:this.frameBuffer.serialize(B,m,{maxLength:this.frameBuffer.packetInfo.length})}],error:x}:(console.warn(`expected to find at least one non error message ${v.map(({type:C})=>C)}`),{key:d,state:y.Gu.Streaming,data:[{type:P.g0.FullFrame,frame:this.frameBuffer.serialize(B,m,{maxLength:0})}],error:x}):{key:d,state:x?y.Gu.Error:y.Gu.Streaming,data:[{type:P.g0.FullFrame,frame:this.frameBuffer.serialize(B,m)}],error:x}),Q=v=>{const x=v.length?v[v.length-1]:void 0,C=O&&x?x.values:T(v).values,z=U?C.filter((k,W)=>U?.includes(W)):C;return{key:d,state:y.Gu.Streaming,data:[{type:P.g0.NewValuesSameSchema,values:z}]}};let V=!0;const G=this.stream.pipe(L(this.deps.subscriberReadiness),(0,g.U)((v,x)=>{const C=A(v,0),z=C.length?C[C.length-1].error:void 0;if(V)return V=!1,$(v,z);if(C.length)return $(v,z);if(v.some(K=>K.type===2))return $(v,void 0);const W=A(v,1);return W.length!==v.length&&console.warn(`unsupported message type ${v.map(({type:K})=>K)}`),Q(W)}));return new l.y(v=>{const x=G.subscribe({next:C=>{v.next(C)},error:C=>{v.error(C)},complete:()=>{v.complete()}});return()=>{x.unsubscribe(),this.stream.observed||(this.clearShutdownTimeout(),this.shutdownTimeoutId=setTimeout(this.shutdownIfNoSubscribers,this.deps.shutdownDelayInMs))}})},this.frameBuffer=c.Av.empty(o.defaultStreamingFrameOptions),this.liveEventsSubscription=o.liveEventsObservable.subscribe({error:this.onError,complete:this.onComplete,next:this.onNext})}}var f=i(23997);class E{constructor(o,u){this.opened=Date.now(),this.stream=new f.x,this.disconnectIfNoListeners=()=>{this.stream.observers.length===0&&this.disconnect()},this.id=o,this.addr=u,this.currentStatus={type:e.FU.Status,id:o,timestamp:this.opened,state:e.yS.Pending},(0,e.nU)(u)||(this.currentStatus.state=e.yS.Invalid,this.currentStatus.error="invalid channel address")}initalize(){if(this.initalized)throw new Error("Channel already initalized: "+this.id);this.initalized=!0,this.subscription.on("publication",o=>{try{o.data&&(o.data.schema&&(this.lastMessageWithSchema=o.data),this.stream.next({type:e.FU.Message,message:o.data})),this.currentStatus.error&&(this.currentStatus.timestamp=Date.now(),delete this.currentStatus.error,this.sendStatus())}catch(u){console.log("publish error",this.addr,u),this.currentStatus.error=u,this.currentStatus.timestamp=Date.now(),this.sendStatus()}}).on("error",o=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.error=o.error.message,this.sendStatus()}).on("subscribed",o=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=e.yS.Connected,delete this.currentStatus.error,o.data?.schema&&(this.lastMessageWithSchema=o.data),this.sendStatus(o.data)}).on("unsubscribed",()=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=e.yS.Disconnected,this.sendStatus()}).on("subscribing",()=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=e.yS.Connecting,this.sendStatus()}).on("join",o=>{this.stream.next({type:e.FU.Join,user:o.info.user})}).on("leave",o=>{this.stream.next({type:e.FU.Leave,user:o.info.user})})}sendStatus(o){const u={...this.currentStatus};o&&(u.message=o),this.stream.next(u)}getStream(){return new l.y(o=>{const u={...this.currentStatus};this.lastMessageWithSchema?.schema&&(u.message={schema:this.lastMessageWithSchema?.schema}),o.next({...this.currentStatus,message:this.lastMessageWithSchema});const d=this.stream.subscribe(o);return()=>{d.unsubscribe(),this.stream.observers.length===0&&setTimeout(this.disconnectIfNoListeners,250)}})}async getPresence(){return this.subscription?this.subscription.presence().then(o=>({users:Object.keys(o.clients)})):Promise.reject("not subscribed")}disconnect(){this.currentStatus.state=e.yS.Shutdown,this.currentStatus.timestamp=Date.now(),this.subscription&&(this.subscription.unsubscribe(),this.subscription.removeAllListeners(),this.subscription=void 0),this.stream.complete(),this.stream.next({...this.currentStatus}),this.stream.complete(),this.shutdownCallback&&this.shutdownCallback()}shutdownWithError(o){this.currentStatus.error=o,this.sendStatus(),this.disconnect()}}function F(b,o,u){return{id:o,opened:Date.now(),addr:u,getStream:()=>of({type:LiveChannelEventType.Status,id:o,timestamp:Date.now(),state:LiveChannelConnectionState.Invalid,error:b}),disconnect:()=>{}}}const _={maxLength:100,maxDelta:1/0,action:c.T0.Append},M=5e3;class j{constructor(o){this.deps=o,this.open=new Map,this.liveDataStreamByChannelId={},this.onConnect=m=>{this.connectionState.next(!0)},this.onDisconnect=m=>{this.connectionState.next(!1)},this.onServerSideMessage=m=>{console.log("Publication from server-side channel",m)},this.getConnectionState=()=>this.connectionState.asObservable(),this.getStream=m=>this.getChannel(m).getStream(),this.createSubscriptionKey=m=>m.key??`xstr/${D++}`,this.getLiveDataStream=m=>{const O=(0,e.Aj)(m.addr),R=this.liveDataStreamByChannelId[O];if(R)return R;const I=this.getChannel(m.addr);return this.liveDataStreamByChannelId[O]=new h({channelId:O,onShutdown:()=>{delete this.liveDataStreamByChannelId[O]},liveEventsObservable:I.getStream(),subscriberReadiness:this.dataStreamSubscriberReadiness,defaultStreamingFrameOptions:_,shutdownDelayInMs:M}),this.liveDataStreamByChannelId[O]},this.getDataStream=m=>{const O=this.createSubscriptionKey(m);return this.getLiveDataStream(m).get(m,O)},this.getQueryData=async m=>(this.centrifuge.state!==r.State.Connected&&await this.connectionBlocker,this.centrifuge.rpc("grafana.query",m.body)),this.getPresence=m=>this.getChannel(m).getPresence(),this.dataStreamSubscriberReadiness=o.dataStreamSubscriberReadiness.pipe((0,t.B)(),(0,n.O)(!0));let u=`${o.appUrl.replace(/^http/,"ws")}/api/live/ws`;const d=o.grafanaAuthToken;d!==null&&d!==""&&(u+="?auth_token="+d),this.centrifuge=new r.Centrifuge(u,{timeout:3e4}),o.liveEnabled&&o.orgRole!==""&&this.centrifuge.connect(),this.connectionState=new s.X(this.centrifuge.state===r.State.Connected),this.connectionBlocker=new Promise(m=>{if(this.centrifuge.state===r.State.Connected)return m();const O=()=>{m(),this.centrifuge.removeListener("connected",O)};this.centrifuge.addListener("connected",O)}),this.centrifuge.on("connected",this.onConnect),this.centrifuge.on("connecting",this.onDisconnect),this.centrifuge.on("disconnected",this.onDisconnect),this.centrifuge.on("publication",this.onServerSideMessage)}getChannel(o){const u=`${this.deps.orgId}/${o.scope}/${o.namespace}/${o.path}`;let d=this.open.get(u);return d!=null||(d=new E(u,o),d.currentStatus.state===e.yS.Invalid)||(d.shutdownCallback=()=>{this.open.delete(u),this.centrifuge.removeSubscription(this.centrifuge.getSubscription(u))},this.open.set(u,d),this.initChannel(d).catch(m=>{d&&(d.currentStatus.state=e.yS.Invalid,d.shutdownWithError(m)),this.open.delete(u)})),d}async initChannel(o){this.centrifuge.state!==r.State.Connected&&await this.connectionBlocker;const u=this.centrifuge.newSubscription(o.id,{data:o.addr.data});o.subscription=u,o.initalize(),u.subscribe()}}let D=0},31457:(w,p,i)=>{var r=i(6222),t=i(9748);const n={canHandle(s){return!!(s&&s instanceof t.Lv)},serialize(s){const e=r.sj(s),{port1:c,port2:l}=new MessageChannel;return r.Jj(e,c),[l,[l]]},deserialize(s){return s.start(),r.Ud(s)}};r.Y6.set("SubscriberHandler",n)}}]);

//# sourceMappingURL=9064.2631b7f58abd6fa315b6.js.map