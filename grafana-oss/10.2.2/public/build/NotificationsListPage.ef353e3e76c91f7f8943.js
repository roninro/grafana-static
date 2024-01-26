"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6618],{74198:(A,l,t)=>{t.r(l),t.d(l,{default:()=>T});var n=t(39953),d=t(65489),a=t(4148),s=t(4919),o=t(12223),f=t(11906),i=t(13253),h=t(21308),g=t(83450),D=t(73431);const T=()=>{const M=(0,g.q)("channels"),[E,P]=(0,n.useState)([]),O=async()=>await(0,a.i)().get("/api/alert-notifications"),[m,c]=(0,d.Z)(O);(0,n.useEffect)(()=>{c().then(e=>{P(e)})},[c]);const v=e=>{h.h$.publish(new D.VJ({title:"Delete",text:"Do you want to delete this notification channel?",text2:"Deleting this notification channel will not delete from alerts any references to it",icon:"trash-alt",confirmText:"Delete",yesText:"Delete",onConfirm:async()=>{W(e)}}))},W=async e=>{await(0,a.i)().delete(`/api/alert-notifications/${e}`);const L=await c();P(L)};return n.createElement(i.T,{navModel:M},n.createElement(i.T.Contents,null,m.error&&n.createElement("p",null,m.error.message),!!E.length&&n.createElement(n.Fragment,null,n.createElement("div",{className:"page-action-bar"},n.createElement("div",{className:"page-action-bar__spacer"}),n.createElement(s.Qj,{icon:"channel-add",href:"alerting/notification/new"},"New channel")),n.createElement("table",{className:"filter-table filter-table--hover"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{style:{minWidth:"200px"}},n.createElement("strong",null,"Name")),n.createElement("th",{style:{minWidth:"100px"}},"Type"),n.createElement("th",{style:{width:"1%"}}))),n.createElement("tbody",null,E.map(e=>n.createElement("tr",{key:e.id},n.createElement("td",{className:"link-td"},n.createElement("a",{href:`alerting/notification/${e.id}/edit`},e.name)),n.createElement("td",{className:"link-td"},n.createElement("a",{href:`alerting/notification/${e.id}/edit`},e.type)),n.createElement("td",{className:"text-right"},n.createElement(o.Lh,{justify:"flex-end"},e.isDefault&&n.createElement(s.zx,{disabled:!0,variant:"secondary",size:"sm"},"default"),n.createElement(s.zx,{variant:"destructive",icon:"times",size:"sm",onClick:()=>{v(e.id)}})))))))),!(E.length||m.loading)&&n.createElement(f.Z,{title:"There are no notification channels defined yet",buttonIcon:"channel-add",buttonLink:"alerting/notification/new",buttonTitle:"Add channel",proTip:"You can include images in your alert notifications.",proTipLink:"http://docs.grafana.org/alerting/notifications/",proTipLinkTitle:"Learn more",proTipTarget:"_blank"})))}},531:(A,l,t)=>{t.r(l),t.d(l,{default:()=>m});var n=t(39953),d=t(5229),a=t(53721),s=t(41393),o=t(79684),f=t(762),i=t(45050);const h=(0,o.Q)(()=>Promise.all([t.e(5422),t.e(3713),t.e(8532),t.e(5580),t.e(3968),t.e(4073),t.e(6411),t.e(9833),t.e(9822)]).then(t.bind(t,29822))),g=(0,o.Q)(()=>Promise.all([t.e(5422),t.e(8532),t.e(6411),t.e(9833),t.e(7282)]).then(t.bind(t,42040))),D=(0,o.Q)(()=>Promise.all([t.e(5422),t.e(3713),t.e(3968),t.e(4073),t.e(8516)]).then(t.bind(t,18516))),C=(0,o.Q)(()=>Promise.all([t.e(5422),t.e(3713),t.e(3968),t.e(4073),t.e(7345)]).then(t.bind(t,7345))),T=(0,o.Q)(()=>Promise.all([t.e(5422),t.e(3713),t.e(5580),t.e(567)]).then(t.bind(t,20567))),M=(0,o.Q)(()=>Promise.all([t.e(5422),t.e(3713),t.e(5580),t.e(1178)]).then(t.bind(t,31178))),E=(0,o.Q)(()=>Promise.all([t.e(3968),t.e(7410)]).then(t.bind(t,27410))),P=(0,o.Q)(()=>Promise.all([t.e(5422),t.e(3713),t.e(5580),t.e(8170)]).then(t.bind(t,38170))),O=c=>n.createElement(f.O,{pageId:"receivers",accessType:"notification"},n.createElement(d.WZ,{feature:i.v.ContactPointsV2},n.createElement(a.rs,null,n.createElement(a.AW,{exact:!0,path:"/alerting/notifications",component:g}),n.createElement(a.AW,{exact:!0,path:"/alerting/notifications/receivers/new",component:C}),n.createElement(a.AW,{exact:!0,path:"/alerting/notifications/receivers/:name/edit",component:D}),n.createElement(a.AW,{exact:!0,path:"/alerting/notifications/templates/:name/edit",component:T}),n.createElement(a.AW,{exact:!0,path:"/alerting/notifications/templates/new",component:M}),n.createElement(a.AW,{exact:!0,path:"/alerting/notifications/templates/:name/duplicate",component:P}),n.createElement(a.AW,{exact:!0,path:"/alerting/notifications/global-config",component:E}))),n.createElement(d.kC,{feature:i.v.ContactPointsV2},n.createElement(h,{...c}))),m=(0,s.Pf)(O,{style:"page"})}}]);

//# sourceMappingURL=NotificationsListPage.ef353e3e76c91f7f8943.js.map