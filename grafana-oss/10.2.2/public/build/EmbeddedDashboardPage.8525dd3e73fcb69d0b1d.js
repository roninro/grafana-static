"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7454],{81776:(H,g,t)=>{t.r(g),t.d(g,{default:()=>I});var C=t(41407),e=t(39953),D=t(15750),u=t(4148),y=t(13601),N=t(82803),P=t(44138),T=t(39106),m=t(4919),b=t(13253),x=t(61205),f=t(57721),M=t(16920),O=t(33620),F=t(19873),V=t(69234),$=t(32688),z=t(87722),B=t(22784),E=t(77804),G=t(61527),J=t(94112),Z=t(14768),S=t(27366),A=t(85830),K=t(90634);const L=({dashboard:a,onCancel:d,onSubmit:c,onSuccess:v,saveModel:n})=>{const[s,o]=(0,e.useState)(!1),i=(0,K.iG)(),l=(0,e.useMemo)(()=>a.hasTimeChanged()||n.hasChanges,[a,n]),r=async()=>{c&&(o(!0),c(n.clone).then(()=>{i.success("Dashboard saved locally"),v()}).catch(h=>{i.error(h.message||"Error saving dashboard")}).finally(()=>o(!1)))};return e.createElement(A.l,{onSubmit:r},()=>e.createElement(S.K,{gap:2},e.createElement(S.K,{alignItems:"center"},e.createElement(m.zx,{variant:"secondary",onClick:d,fill:"outline"},"Cancel"),e.createElement(m.zx,{type:"submit",disabled:!l,icon:s?"fa fa-spinner":void 0},"Save"),!l&&e.createElement("div",null,"No changes to save"))))},Q=({dashboard:a,onDismiss:d,dashboardJson:c,onSave:v})=>{const n=(0,e.useMemo)(()=>{const i=a.getSaveModelClone(),l=(0,Z.Q$)(JSON.parse(JSON.stringify(c,null,2)),i);let r=0;for(const h of Object.values(l))r+=h.length;return{clone:i,diff:l,diffCount:r,hasChanges:r>0}},[a,c]),[s,o]=(0,e.useState)(!1);return e.createElement(z.d,{title:"Save dashboard",onClose:d,subtitle:a.title,tabs:e.createElement(B.J,null,e.createElement(E.O,{label:"Details",active:!s,onChangeTab:()=>o(!1)}),n.hasChanges&&e.createElement(E.O,{label:"Changes",active:s,onChangeTab:()=>o(!0),counter:n.diffCount}))},s?e.createElement(J._,{diff:n.diff,oldValue:c,newValue:n.clone}):e.createElement(L,{dashboard:a,saveModel:n,onCancel:d,onSuccess:d,onSubmit:v}),$.config.featureToggles.showDashboardValidationWarnings&&e.createElement(G.Z,{dashboard:a}))};var W=t(75671),Y=t(75397),j=t(35260);function I({route:a,queryParams:d}){const c=(0,f.useDispatch)(),v=(0,x.p)(),n=(0,f.useSelector)(l=>l.dashboard),s=n.getModel(),[o,i]=(0,e.useState)("");return(0,e.useEffect)(()=>{const l=d.serverPort;if(!l)throw new Error("No serverPort provided");(0,u.i)().get(`http://localhost:${l}/load-dashboard`).then(r=>{i(r),delete r.uid;const h=new Y.f(r);c((0,j.mV)({routeName:a.routeName,fixUrl:!1,keybindingSrv:v.keybindings,dashboardDto:{dashboard:h,meta:{canEdit:!0}}}))}).catch(r=>{console.log("Error getting dashboard JSON: ",r)})},[]),s?s.meta.dashboardNotFound?e.createElement("p",null,"Not available"):e.createElement(b.T,{pageNav:{text:s.title},layout:D.Q.Custom},e.createElement(U,{dashboard:s,dashboardJson:o}),n.initError&&e.createElement(F.u,{initError:n.initError}),e.createElement("div",null,e.createElement(W.Z,{dashboard:s,isEditable:!0,viewPanel:null,editPanel:null,hidePanelMenus:!0}))):e.createElement(V.B,{initPhase:n.initPhase})}const U=({dashboard:a,dashboardJson:d})=>{const c=(0,f.useDispatch)(),v=(0,N.wW)(X),n=o=>{c((0,M.YT)(o))},s=async o=>{const l=y.E1.getSearch().get("serverPort");if(!(!o||!l))return(0,u.i)().post(`http://localhost:${l}/save-dashboard`,{dashboard:o})};return e.createElement(P.X,{title:a.title,buttonOverflowAlignment:"right",className:v.toolbar},!a.timepicker.hidden&&e.createElement(O.C,{dashboard:a,onChangeTimeZone:n}),e.createElement(T.JY,{key:"button-save"},({showModal:o,hideModal:i})=>e.createElement(m.zx,{onClick:()=>{o(Q,{dashboard:a,dashboardJson:d,onDismiss:i,onSave:s})}},"Save")))},X=a=>({toolbar:(0,C.css)`
      padding: ${a.spacing(3,2)};
    `})}}]);

//# sourceMappingURL=EmbeddedDashboardPage.8525dd3e73fcb69d0b1d.js.map