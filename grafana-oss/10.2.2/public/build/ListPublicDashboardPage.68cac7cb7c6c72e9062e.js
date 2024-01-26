"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1344],{3317:(J,b,t)=>{t.r(b),t.d(b,{ListPublicDashboardPage:()=>x,default:()=>Z});var a=t(39953),l=t(41407),$=t(15138),D=t(28888),L=t(72639),h=t(82803),r=t(4236),S=t(69865),T=t(12190),C=t(26286),p=t(4919),v=t(28409),N=t(12223),A=t(39017),f=t(13253),I=t(97125),E=t(27587),y=t(94939),U=t(57721),W=t(41987);const B=({pd:e})=>{const s=(0,h.wW)(P),o=(0,h.l4)(),n=(0,$.Z)(`(max-width: ${o.breakpoints.values.sm}px)`),[d,{isLoading:m}]=(0,E.Mi)(),i=D.wl.pages.PublicDashboards,g=I.contextSrv.hasPermission(U.AccessControlAction.DashboardsPublicWrite),u=!e.dashboardUid,j=(c,O)=>{const H={dashboard:{uid:c.dashboardUid},payload:{uid:c.uid,isEnabled:!O}};d(H)},z=(0,a.useMemo)(()=>n?r.Z.Actions:r.Z.SecondaryActions,[n]);return a.createElement(r.Z,{className:s.card,href:u?void 0:`/d/${e.dashboardUid}`},a.createElement(r.Z.Heading,{className:s.heading},u?a.createElement(S.u,{content:"The linked dashboard has already been deleted",placement:"top"},a.createElement("div",{className:s.orphanedTitle},a.createElement("span",null,"Orphaned public dashboard"),a.createElement(T.J,{name:"info-circle"}))):a.createElement("span",null,e.title)),a.createElement(z,{className:s.actions},a.createElement("div",{className:s.pauseSwitch},a.createElement(C.r,{value:!e.isEnabled,label:"Pause sharing",disabled:m,onChange:c=>{(0,L.ff)("grafana_dashboards_public_enable_clicked",{action:c.currentTarget.checked?"disable":"enable"}),j(e,c.currentTarget.checked)},"data-testid":i.ListItem.pauseSwitch}),a.createElement("span",null,"Pause sharing")),a.createElement(p.Qj,{disabled:u,fill:"text",icon:"external-link-alt",variant:"secondary",target:"_blank",color:o.colors.warning.text,href:(0,y._M)(e.accessToken),key:"public-dashboard-url",tooltip:"View public dashboard","data-testid":i.ListItem.linkButton}),a.createElement(p.Qj,{disabled:u,fill:"text",icon:"cog",variant:"secondary",color:o.colors.warning.text,href:(0,y.Ez)(e.dashboardUid),key:"public-dashboard-config-url",tooltip:"Configure public dashboard","data-testid":i.ListItem.configButton}),g&&a.createElement(W.H,{fill:"text",icon:"trash-alt",variant:"secondary",publicDashboard:e,tooltip:"Revoke public dashboard url",loader:a.createElement(v.$,null),"data-testid":i.ListItem.trashcanButton})))},M=()=>{const[e,s]=(0,a.useState)(1),o=(0,h.wW)(P),{data:n,isLoading:d,isFetching:m,isError:i}=(0,E.WJ)(e);return a.createElement(f.T,{navId:"dashboards/public",actions:m&&a.createElement(v.$,null)},a.createElement(f.T.Contents,{isLoading:d},!d&&!i&&!!n&&a.createElement("div",null,a.createElement("ul",{className:o.list},n.publicDashboards.map(g=>a.createElement("li",{key:g.uid},a.createElement(B,{pd:g})))),a.createElement(N.Lh,{justify:"flex-end"},a.createElement(A.t,{onNavigate:s,currentPage:n.page,numberOfPages:n.totalPages,hideWhenSinglePage:!0})))))},P=e=>({list:(0,l.css)`
    list-style-type: none;
    margin-bottom: ${e.spacing(2)};
  `,card:(0,l.css)`
    ${e.breakpoints.up("sm")} {
      display: flex;
    }
  `,heading:(0,l.css)`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
    flex: 1;
  `,orphanedTitle:(0,l.css)`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
  `,actions:(0,l.css)`
    display: flex;
    align-items: center;
    position: relative;

    gap: ${e.spacing(.5)};
    ${e.breakpoints.up("sm")} {
      gap: ${e.spacing(1)};
    }
  `,pauseSwitch:(0,l.css)`
    display: flex;
    gap: ${e.spacing(1)};
    align-items: center;
    font-size: ${e.typography.bodySmall.fontSize};
    margin-bottom: 0;
    flex: 1;

    ${e.breakpoints.up("sm")} {
      padding-right: ${e.spacing(2)};
    }
  `}),x=({})=>a.createElement(M,null),Z=x}}]);

//# sourceMappingURL=ListPublicDashboardPage.68cac7cb7c6c72e9062e.js.map