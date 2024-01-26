"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6940,7641],{31584:(U,d,n)=>{n.r(d),n.d(d,{ServerStats:()=>P});var s=n(41407),e=n(39953),v=n(82803),c=n(4919),S=n(78020),u=n(57721),h=n(97125),A=n(21266),b=n(4148);const N=async()=>(0,b.i)().get("api/admin/stats").catch(a=>(console.error(a),null)),P=()=>{const[a,f]=(0,e.useState)(null),[o,m]=(0,e.useState)(!1),p=(0,v.wW)(C),L=h.contextSrv.hasPermission(u.AccessControlAction.DataSourcesRead),T=h.contextSrv.hasPermission(u.AccessControlAction.UsersRead);return(0,e.useEffect)(()=>{h.contextSrv.hasPermission(u.AccessControlAction.ActionServerStatsRead)&&(m(!0),N().then(E=>{f(E),m(!1)}))},[]),h.contextSrv.hasPermission(u.AccessControlAction.ActionServerStatsRead)?e.createElement(e.Fragment,null,e.createElement("h2",{className:p.title},"Instance statistics"),o?e.createElement("div",{className:p.loader},e.createElement(A.a,{text:"Loading instance stats..."})):a?e.createElement("div",{className:p.row},e.createElement(g,{content:[{name:"Dashboards (starred)",value:`${a.dashboards} (${a.stars})`},{name:"Tags",value:a.tags},{name:"Playlists",value:a.playlists},{name:"Snapshots",value:a.snapshots}],footer:e.createElement(c.Qj,{href:"/dashboards",variant:"secondary"},"Manage dashboards")}),e.createElement("div",{className:p.doubleRow},e.createElement(g,{content:[{name:"Data sources",value:a.datasources}],footer:L&&e.createElement(c.Qj,{href:"/datasources",variant:"secondary"},"Manage data sources")}),e.createElement(g,{content:[{name:"Alerts",value:a.alerts}],footer:e.createElement(c.Qj,{href:"/alerting/list",variant:"secondary"},"Alerts")})),e.createElement(g,{content:[{name:"Organisations",value:a.orgs},{name:"Users total",value:a.users},{name:"Active users in last 30 days",value:a.activeUsers},{name:"Active sessions",value:a.activeSessions}],footer:T&&e.createElement(c.Qj,{href:"/admin/users",variant:"secondary"},"Manage users")})):e.createElement("p",{className:p.notFound},"No stats found.")):null},C=a=>({title:(0,s.css)`
      margin-bottom: ${a.spacing(4)};
    `,row:(0,s.css)`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${a.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:(0,s.css)`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${a.spacing(2)};
      }
    `,loader:(0,s.css)`
      height: 290px;
    `,notFound:(0,s.css)`
      font-size: ${a.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),g=({content:a,footer:f})=>{const o=(0,v.wW)(D);return e.createElement(S._,{className:o.container,disableHover:!0},e.createElement("div",{className:o.inner},e.createElement("div",{className:o.content},a.map(m=>e.createElement("div",{key:m.name,className:o.row},e.createElement("span",null,m.name),e.createElement("span",null,m.value)))),f&&e.createElement("div",null,f)))},D=a=>({container:(0,s.css)`
      padding: ${a.spacing(2)};
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
      margin-bottom: ${a.spacing(2)};
      align-items: center;
    `})},86940:(U,d,n)=>{n.r(d),n.d(d,{UpgradeInfo:()=>a,UpgradePage:()=>g,default:()=>$});var s=n(41407),e=n(39953),v=n(89772),c=n(82803),S=n(4919),u=n(13253),h=n(45015);const A={fontWeight:500,fontSize:"26px",lineHeight:"123%"},b=r=>{const l=r.isDark?"public/img/licensing/header_dark.svg":"public/img/licensing/header_light.svg",i=r.isDark?r.v1.palette.dark9:r.v1.palette.gray6;return{container:(0,s.css)`
      padding: 36px 79px;
      background: ${r.components.panel.background};
    `,footer:(0,s.css)`
      text-align: center;
      padding: 16px;
      background: ${i};
    `,header:(0,s.css)`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${l}') right;
    `}};function N({header:r,editionNotice:l,subheader:i,children:y}){const x=(0,c.wW)(b);return e.createElement(e.Fragment,null,e.createElement("div",{className:x.header},e.createElement("h2",{style:A},r),i&&e.createElement("h3",null,i),e.createElement(P,{size:"128px",style:{boxShadow:"0px 0px 24px rgba(24, 58, 110, 0.45)",background:"#0A1C36",position:"absolute",top:"19px",left:"71%"}},e.createElement("img",{src:"public/img/grafana_icon.svg",alt:"Grafana",width:"80px",style:{position:"absolute",left:"23px",top:"20px"}}))),e.createElement("div",{className:x.container},y),l&&e.createElement("div",{className:x.footer},l))}const P=({size:r,style:l,children:i})=>{const y=(0,c.l4)();return e.createElement("div",{style:{width:r,height:r,position:"absolute",bottom:0,right:0,borderRadius:y.shape.radius.circle,...l}},i)};var C=n(31584);function g({navModel:r}){return e.createElement(u.T,{navModel:r},e.createElement(u.T.Contents,null,e.createElement(C.ServerStats,null),e.createElement(a,{editionNotice:`You are running the open-source version of Grafana.
        You have to install the Enterprise edition in order enable Enterprise features.`})))}const D={fontWeight:500,fontSize:"26px",lineHeight:"123%"},a=({editionNotice:r})=>{const l=(0,c.wW)(f);return e.createElement(e.Fragment,null,e.createElement("h2",{className:l.title},"Enterprise license"),e.createElement(N,{header:"Grafana Enterprise",subheader:"Get your free trial",editionNotice:r},e.createElement("div",{className:l.column},e.createElement(L,null),e.createElement(p,null))))},f=r=>({column:(0,s.css)`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,title:(0,s.css)`
      margin: ${r.spacing(4)} 0;
    `}),o=()=>e.createElement("div",{style:{marginTop:"40px",marginBottom:"30px"}},e.createElement("h2",{style:D},"Get Grafana Enterprise"),e.createElement(m,null),e.createElement("p",{style:{paddingTop:"12px"}},"You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends.")),m=()=>e.createElement(S.Qj,{variant:"primary",size:"lg",href:"https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page"},"Contact us and get a free trial"),p=()=>e.createElement("div",null,e.createElement("h4",null,"At your service"),e.createElement(E,null,e.createElement(t,{title:"Enterprise Plugins",image:"public/img/licensing/plugin_enterprise.svg"}),e.createElement(t,{title:"Critical SLA: 2 hours",image:"public/img/licensing/sla.svg"}),e.createElement(t,{title:"Unlimited Expert Support",image:"public/img/licensing/customer_support.svg"},"24 x 7 x 365 support via",e.createElement(E,{nested:!0},e.createElement(t,{title:"Email"}),e.createElement(t,{title:"Private Slack channel"}),e.createElement(t,{title:"Phone"}))),e.createElement(t,{title:"Hand-in-hand support",image:"public/img/licensing/handinhand_support.svg"},"in the upgrade process")),e.createElement("div",{style:{marginTop:"20px"}},e.createElement("strong",null,"Also included:"),e.createElement("br",null),"Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."),e.createElement(o,null)),L=()=>e.createElement("div",{style:{paddingRight:"11px"}},e.createElement("h4",null,"Enhanced functionality"),e.createElement(T,null)),T=()=>e.createElement(E,null,e.createElement(t,{title:"Data source permissions"}),e.createElement(t,{title:"Reporting"}),e.createElement(t,{title:"SAML authentication"}),e.createElement(t,{title:"Enhanced LDAP integration"}),e.createElement(t,{title:"Team Sync"},"LDAP, GitHub OAuth, Auth Proxy, Okta"),e.createElement(t,{title:"White labeling"}),e.createElement(t,{title:"Auditing"}),e.createElement(t,{title:"Settings updates at runtime"}),e.createElement(t,{title:"Grafana usage insights"},e.createElement(E,{nested:!0},e.createElement(t,{title:"Sort dashboards by popularity in search"}),e.createElement(t,{title:"Find unused dashboards"}),e.createElement(t,{title:"Dashboard usage stats drawer"}),e.createElement(t,{title:"Dashboard presence indicators"}))),e.createElement(t,{title:"Enterprise plugins"},e.createElement(E,{nested:!0},e.createElement(t,{title:"Oracle"}),e.createElement(t,{title:"Splunk"}),e.createElement(t,{title:"Service Now"}),e.createElement(t,{title:"Dynatrace"}),e.createElement(t,{title:"New Relic"}),e.createElement(t,{title:"DataDog"}),e.createElement(t,{title:"AppDynamics"}),e.createElement(t,{title:"SAP HANA\xAE"}),e.createElement(t,{title:"Gitlab"}),e.createElement(t,{title:"Honeycomb"}),e.createElement(t,{title:"Jira"}),e.createElement(t,{title:"MongoDB"}),e.createElement(t,{title:"Salesforce"}),e.createElement(t,{title:"Snowflake"}),e.createElement(t,{title:"Wavefront"})))),E=({children:r,nested:l})=>{const i=(0,s.css)`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${l?0:8}px;
    }
  `;return e.createElement("div",{className:i},r)},t=({children:r,title:l,image:i})=>{const y=i||"public/img/licensing/checkmark.svg",x=(0,s.css)`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `,G=(0,s.css)`
    font-weight: 500;
    line-height: 1.7;
  `;return e.createElement("div",{className:x},e.createElement("img",{src:y,alt:""}),e.createElement("div",null,e.createElement("div",{className:G},l),r))},w=r=>({navModel:(0,h.ht)(r.navIndex,"upgrading")}),$=(0,v.connect)(w)(g)},21266:(U,d,n)=>{n.d(d,{a:()=>v});var s=n(39953),e=n(84766);const v=({text:c="Loading..."})=>s.createElement("div",{className:"page-loader-wrapper"},s.createElement(e.u,{text:c}))}}]);

//# sourceMappingURL=6940.c90036e0865604c4b7ad.js.map