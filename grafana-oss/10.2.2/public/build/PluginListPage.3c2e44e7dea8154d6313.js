"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{67048:(z,D,n)=>{n.d(D,{r:()=>c});var r=n(41407),t=n(39953),m=n(82803);const c=(0,t.forwardRef)((i,y)=>{const{children:p,gap:h,columns:C,minColumnWidth:x,...L}=i,B=(0,m.wW)(E,h,C,x);return t.createElement("div",{ref:y,...L,className:B.grid},p)});c.displayName="Grid";const E=(i,y,p,h)=>({grid:(0,r.css)([{display:"grid",gap:y?i.spacing(y):void 0},h&&{gridTemplateColumns:`repeat(auto-fill, minmax(${i.spacing(h)}, 1fr))`},p&&{gridTemplateColumns:`repeat(${p}, 1fr)`}])})},39826:(z,D,n)=>{n.d(D,{Nq:()=>f,Do:()=>g,SX:()=>c,IF:()=>A,oZ:()=>h,xh:()=>N});var r=n(39953),t=n(30670),m=n(12608);function c({error:u}){const S=E(u);return r.createElement(m.C,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:S})}function E(u){switch(u){case t.w2.modifiedSignature:return"Plugin disabled due to modified content";case t.w2.invalidSignature:return"Plugin disabled due to invalid plugin signature";case t.w2.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return`Plugin disabled due to unknown error${u?`: ${u}`:""}`}}var i=n(82803),y=n(41407);const p=u=>(0,y.css)`
  background: ${u.colors.background.primary};
  border-color: ${u.colors.border.strong};
  color: ${u.colors.text.secondary};
`;function h(){const u=(0,i.wW)(p);return r.createElement(m.C,{text:"Installed",color:"orange",className:u})}var C=n(13475),x=n(12223),L=n(45802),B=n(4919);function A({plugin:u}){const S=(0,i.wW)(p),T=M=>{M.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${u.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")};return(0,C.v)("enterprise.plugins")?r.createElement(m.C,{text:"Enterprise",color:"blue"}):r.createElement(x.Lh,null,r.createElement(L.o,{status:u.signature}),r.createElement(m.C,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:S}),r.createElement(B.zx,{size:"sm",fill:"text",icon:"external-link-alt",onClick:T},"Learn more"))}function N({plugin:u}){const S=(0,i.wW)(I);return r.createElement("p",{className:S.hasUpdate},"Update available!")}const I=u=>({hasUpdate:(0,y.css)`
      color: ${u.colors.text.secondary};
      font-size: ${u.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `});function f(){return r.createElement(m.C,{icon:"exclamation-triangle",text:"Angular",color:"orange",tooltip:"This plugin uses deprecated functionality, support for which is being removed."})}function g(){return r.createElement(m.C,{icon:"exclamation-triangle",text:"Deprecated",color:"orange",tooltip:"This plugin is deprecated and no longer receives updates."})}},55006:(z,D,n)=>{n.r(D),n.d(D,{default:()=>w});var r=n(41407),t=n(39953),m=n(53721),c=n(13601),E=n(82803),i=n(96227),y=n(9558),p=n(20454),h=n(69865),C=n(84766),x=n(13253),L=n(45015),B=n(91473),A=n(57721),N=n(30862),I=n(32688),f=n(67048),g=n(31931),u=n(12190),S=n(30670),T=n(12223),M=n(45802),v=n(39826);function O({plugin:e}){const o=e.hasUpdate&&!e.isCore&&e.type!==S.zV.renderer;return e.isEnterprise?t.createElement(T.Lh,{height:"auto",wrap:!0},t.createElement(v.IF,{plugin:e}),e.isDisabled&&t.createElement(v.SX,{error:e.error}),o&&t.createElement(v.xh,{plugin:e}),e.angularDetected&&t.createElement(v.Nq,null)):t.createElement(T.Lh,{height:"auto",wrap:!0},t.createElement(M.o,{status:e.signature}),e.isDisabled&&t.createElement(v.SX,{error:e.error}),e.isDeprecated&&t.createElement(v.Do,null),e.isInstalled&&t.createElement(v.oZ,null),o&&t.createElement(v.xh,{plugin:e}),e.angularDetected&&t.createElement(v.Nq,null))}function Q({alt:e,className:o,src:a,height:l}){return t.createElement("img",{src:a,className:o,alt:e,loading:"lazy",height:l})}const R="48px";function Z({plugin:e,pathName:o,displayMode:a=g.lL.Grid}){const l=(0,E.wW)(H),d=a===g.lL.List;return t.createElement("a",{href:`${o}/${e.id}`,className:(0,r.cx)(l.container,{[l.list]:d})},t.createElement(Q,{src:e.info.logos.small,className:l.pluginLogo,height:R,alt:""}),t.createElement("h2",{className:(0,r.cx)(l.name,"plugin-name")},e.name),t.createElement("div",{className:(0,r.cx)(l.content,"plugin-content")},t.createElement("p",null,"By ",e.orgName),t.createElement(O,{plugin:e})),t.createElement("div",{className:l.pluginType},e.type&&t.createElement(u.J,{name:g.Co[e.type],title:`${e.type} plugin`})))}const H=e=>({container:(0,r.css)`
      display: grid;
      grid-template-columns: ${R} 1fr ${e.spacing(3)};
      grid-template-rows: auto;
      gap: ${e.spacing(2)};
      grid-auto-flow: row;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.radius.default};
      padding: ${e.spacing(3)};
      transition: ${e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,list:(0,r.css)`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${e.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:(0,r.css)`
      grid-area: 1 / 3 / 2 / 4;
      color: ${e.colors.text.secondary};
    `,pluginLogo:(0,r.css)`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:(0,r.css)`
      grid-area: 3 / 1 / 4 / 3;
      color: ${e.colors.text.secondary};
    `,name:(0,r.css)`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${e.typography.h4.fontSize};
      color: ${e.colors.text.primary};
      margin: 0;
    `}),j=({plugins:e,displayMode:o})=>{const a=o===g.lL.List,{pathname:l}=(0,m.TH)(),d=I.config.appSubUrl+(l.endsWith("/")?l.slice(0,-1):l);return t.createElement(f.r,{gap:3,columns:a?1:void 0,minColumnWidth:a?void 0:34,"data-testid":"plugin-list"},e.map($=>t.createElement(Z,{key:$.id,plugin:$,pathName:d,displayMode:o})))};var K=n(48993),V=n(41245);const X=(e,o=0,a=[])=>{const l=(0,t.useRef)(!0),d=[...a,l];return(0,K.Z)(()=>{if(l.current){l.current=!1;return}return e()},o,d)},b=({value:e,onSearch:o})=>{const[a,l]=(0,t.useState)(e);return X(()=>o(a??""),500,[a]),t.createElement(V.H,{value:a,onKeyDown:d=>{(d.key==="Enter"||d.keyCode===13)&&o(d.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:d=>{l(d)},width:46})};var J=n(51411);const Y=()=>({push:({query:e})=>{c.E1.partial(e)}});var F=n(27440);function w({route:e}){const o=(0,m.TH)(),a=(0,c.Ox)(o.search),l=(0,A.useSelector)(P=>(0,L.ht)(P.navIndex,"plugins")),{displayMode:d,setDisplayMode:$}=(0,F.iY)(),k=(0,E.wW)(s),U=Y(),ne=(0,F.y9)(),q=a.q?.toString()||"",G=a.filterBy?.toString()||"installed",W=a.filterByType||"all",_=a.sortBy||J.Nh.nameAsc,{isLoading:ae,error:ee,plugins:oe}=(0,F.Pj)({keyword:q,type:W!=="all"?W:void 0,isInstalled:G==="installed"?!0:void 0,isCore:G==="installed"?void 0:!1},_),te=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],re=P=>{U.push({query:{sortBy:P.value}})},se=P=>{U.push({query:{filterBy:P}})},le=P=>{U.push({query:{filterByType:P.value}})},ce=P=>{U.push({query:{filterBy:G,filterByType:W,q:P}})};if(ee)return console.error(ee.message),null;const ie=t.createElement("div",null,"Extend the Grafana experience with panel plugins and apps. To find more data sources go to"," ",t.createElement("a",{className:"external-link",href:`${B.Z.AddNewConnection}?cat=data-source`},"Connections"),".");return t.createElement(x.T,{navModel:l,subTitle:ie},t.createElement(x.T.Contents,null,t.createElement(N.L,{wrap:!0},t.createElement(i.g,{label:"Search"},t.createElement(b,{value:q,onSearch:ce})),t.createElement(N.L,{wrap:!0,className:k.actionBar},t.createElement(i.g,{label:"Type"},t.createElement(y.Ph,{"aria-label":"Plugin type filter",value:W,onChange:le,width:18,options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})),ne?t.createElement(i.g,{label:"State"},t.createElement(p.S,{value:G,onChange:se,options:te})):t.createElement(h.u,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top"},t.createElement("div",null,t.createElement(i.g,{label:"State"},t.createElement(p.S,{disabled:!0,value:G,onChange:se,options:te})))),t.createElement(i.g,{label:"Sort"},t.createElement(y.Ph,{"aria-label":"Sort Plugins List",width:24,value:_,onChange:re,options:[{value:"nameAsc",label:"By name (A-Z)"},{value:"nameDesc",label:"By name (Z-A)"},{value:"updated",label:"By updated date"},{value:"published",label:"By published date"},{value:"downloads",label:"By downloads"}]})),t.createElement(i.g,{label:"View"},t.createElement(p.S,{className:k.displayAs,value:d,onChange:$,options:[{value:g.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:g.lL.List,icon:"list-ul",description:"Display plugins in list"}]})))),t.createElement("div",{className:k.listWrap},ae?t.createElement(C.u,{className:(0,r.css)`
                margin-bottom: 0;
              `,text:"Loading results"}):t.createElement(j,{plugins:oe,displayMode:d}))))}const s=e=>({actionBar:(0,r.css)`
    ${e.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:(0,r.css)`
    margin-top: ${e.spacing(2)};
  `,displayAs:(0,r.css)`
    svg {
      margin-right: 0;
    }
  `})},27440:(z,D,n)=>{n.d(D,{iY:()=>w,or:()=>F,bt:()=>K,ZV:()=>j,Pj:()=>S,UQ:()=>v,bJ:()=>T,x3:()=>O,IS:()=>V,y9:()=>Z,S1:()=>R,wq:()=>X,kH:()=>Q});var r=n(39953),t=n(57721),m=n(51411),c=n(31063),E=n(2263),i=n(38874),y=n(55705),p=n(31931);const h=s=>s.plugins,C=(0,i.P1)(h,({items:s})=>s),x=(0,i.P1)(h,({settings:s})=>s.displayMode),{selectAll:L,selectById:B}=E.CD.getSelectors(C),A=s=>(0,i.P1)(L,e=>{const o=s.keyword?(0,y.x6)(s.keyword.toLowerCase()):"";return e.filter(a=>{const l=[a.name,a.orgName].filter(Boolean).map(d=>d.toLowerCase());return!(o&&!l.some(d=>d.includes(o))||s.type&&a.type!==s.type||s.isInstalled!==void 0&&a.isInstalled!==s.isInstalled||s.isCore!==void 0&&a.isCore!==s.isCore||s.isEnterprise!==void 0&&a.isEnterprise!==s.isEnterprise)})}),N=s=>(0,i.P1)(L,e=>{const o=[];for(const a of e)a.error&&(!s||a.type===s)&&o.push({pluginId:a.id,errorCode:a.error,pluginType:a.type});return o}),I=s=>(0,i.P1)(h,({requests:e={}})=>e[s]),f=s=>(0,i.P1)(I(s),e=>e?.status===p.eE.Pending),g=s=>(0,i.P1)(I(s),e=>e?.status===p.eE.Rejected?e?.error:null),u=s=>(0,i.P1)(I(s),e=>e===void 0),S=(s,e=m.Nh.nameAsc)=>{b();const o=(0,r.useMemo)(()=>A(s),[s]),a=(0,t.useSelector)(o),{isLoading:l,error:d}=H(),$=(0,m.AA)(a,e);return{isLoading:l,error:d,plugins:$}},T=s=>(b(),Y(s),(0,t.useSelector)(e=>B(e,s))),M=s=>(J(),useSelector(e=>selectById(e,s))),v=s=>(b(),(0,t.useSelector)(N(s))),O=()=>{const s=(0,t.useDispatch)();return(e,o,a)=>s((0,c.N9)({id:e,version:o,isUpdating:a}))},Q=()=>{const s=(0,t.useDispatch)();return()=>s((0,c.bQ)())},R=()=>{const s=(0,t.useDispatch)();return e=>s((0,c.Tz)(e))},Z=()=>(0,t.useSelector)(g(c.tQ.typePrefix))===null,H=()=>{const s=(0,t.useSelector)(f("plugins/fetchLocal")),e=(0,t.useSelector)(g("plugins/fetchLocal"));return{isLoading:s,error:e}},j=()=>{const s=(0,t.useSelector)(f(c.Qd.typePrefix)),e=(0,t.useSelector)(g(c.Qd.typePrefix));return{isLoading:s,error:e}},K=()=>{const s=(0,t.useSelector)(f(c.DD.typePrefix)),e=(0,t.useSelector)(g(c.DD.typePrefix));return{isLoading:s,error:e}},V=()=>{const s=(0,t.useSelector)(f(c.N9.typePrefix)),e=(0,t.useSelector)(g(c.N9.typePrefix));return{isInstalling:s,error:e}},X=()=>{const s=(0,t.useSelector)(f(c.Tz.typePrefix)),e=(0,t.useSelector)(g(c.Tz.typePrefix));return{isUninstalling:s,error:e}},b=()=>{const s=(0,t.useDispatch)(),e=(0,t.useSelector)(u(c.Qd.typePrefix));(0,r.useEffect)(()=>{e&&s((0,c.Qd)())},[])},J=()=>{const s=useDispatch(),e=useSelector(selectIsRequestNotFetched(fetchAllLocal.typePrefix));useEffect(()=>{e&&s(fetchAllLocal())},[])},Y=s=>{const e=(0,t.useDispatch)(),o=(0,t.useSelector)(d=>B(d,s)),l=!(0,t.useSelector)(f(c.DD.typePrefix))&&o&&!o.details;(0,r.useEffect)(()=>{l&&e((0,c.DD)(s))},[o])},F=()=>{const s=(0,t.useDispatch)();return e=>s((0,c.DD)(e))},w=()=>{const s=(0,t.useDispatch)();return{displayMode:(0,t.useSelector)(x),setDisplayMode:o=>s((0,E.UC)(o))}}}}]);

//# sourceMappingURL=PluginListPage.3c2e44e7dea8154d6313.js.map