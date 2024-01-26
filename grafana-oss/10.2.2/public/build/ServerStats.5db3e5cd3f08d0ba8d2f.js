"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7641],{31584:(g,l,a)=>{a.r(l),a.d(l,{ServerStats:()=>y});var s=a(41407),e=a(39953),i=a(82803),n=a(4919),f=a(78020),d=a(57721),m=a(97125),E=a(21266),h=a(4148);const S=async()=>(0,h.i)().get("api/admin/stats").catch(t=>(console.error(t),null)),y=()=>{const[t,v]=(0,e.useState)(null),[r,o]=(0,e.useState)(!1),c=(0,i.wW)(p),x=m.contextSrv.hasPermission(d.AccessControlAction.DataSourcesRead),C=m.contextSrv.hasPermission(d.AccessControlAction.UsersRead);return(0,e.useEffect)(()=>{m.contextSrv.hasPermission(d.AccessControlAction.ActionServerStatsRead)&&(o(!0),S().then(N=>{v(N),o(!1)}))},[]),m.contextSrv.hasPermission(d.AccessControlAction.ActionServerStatsRead)?e.createElement(e.Fragment,null,e.createElement("h2",{className:c.title},"Instance statistics"),r?e.createElement("div",{className:c.loader},e.createElement(E.a,{text:"Loading instance stats..."})):t?e.createElement("div",{className:c.row},e.createElement(u,{content:[{name:"Dashboards (starred)",value:`${t.dashboards} (${t.stars})`},{name:"Tags",value:t.tags},{name:"Playlists",value:t.playlists},{name:"Snapshots",value:t.snapshots}],footer:e.createElement(n.Qj,{href:"/dashboards",variant:"secondary"},"Manage dashboards")}),e.createElement("div",{className:c.doubleRow},e.createElement(u,{content:[{name:"Data sources",value:t.datasources}],footer:x&&e.createElement(n.Qj,{href:"/datasources",variant:"secondary"},"Manage data sources")}),e.createElement(u,{content:[{name:"Alerts",value:t.alerts}],footer:e.createElement(n.Qj,{href:"/alerting/list",variant:"secondary"},"Alerts")})),e.createElement(u,{content:[{name:"Organisations",value:t.orgs},{name:"Users total",value:t.users},{name:"Active users in last 30 days",value:t.activeUsers},{name:"Active sessions",value:t.activeSessions}],footer:C&&e.createElement(n.Qj,{href:"/admin/users",variant:"secondary"},"Manage users")})):e.createElement("p",{className:c.notFound},"No stats found.")):null},p=t=>({title:(0,s.css)`
      margin-bottom: ${t.spacing(4)};
    `,row:(0,s.css)`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${t.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:(0,s.css)`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${t.spacing(2)};
      }
    `,loader:(0,s.css)`
      height: 290px;
    `,notFound:(0,s.css)`
      font-size: ${t.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),u=({content:t,footer:v})=>{const r=(0,i.wW)(A);return e.createElement(f._,{className:r.container,disableHover:!0},e.createElement("div",{className:r.inner},e.createElement("div",{className:r.content},t.map(o=>e.createElement("div",{key:o.name,className:r.row},e.createElement("span",null,o.name),e.createElement("span",null,o.value)))),v&&e.createElement("div",null,v)))},A=t=>({container:(0,s.css)`
      padding: ${t.spacing(2)};
    `,inner:(0,s.css)`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:(0,s.css)`
      flex: 1 0 auto;
    `,row:(0,s.css)`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${t.spacing(2)};
      align-items: center;
    `})},21266:(g,l,a)=>{a.d(l,{a:()=>i});var s=a(39953),e=a(84766);const i=({text:n="Loading..."})=>s.createElement("div",{className:"page-loader-wrapper"},s.createElement(e.u,{text:n}))}}]);

//# sourceMappingURL=ServerStats.5db3e5cd3f08d0ba8d2f.js.map