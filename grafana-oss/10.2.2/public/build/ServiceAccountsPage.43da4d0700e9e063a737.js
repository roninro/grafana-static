"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1337],{19889:(J,$,n)=>{n.r($),n.d($,{ServiceAccountsListPageUnconnected:()=>O,default:()=>Z,getStyles:()=>Q});var a=n(41407),o=n(71757),y=n.n(o),e=n(39953),C=n(89772),f=n(82803),i=n(69171),T=n(41245),w=n(20454),m=n(4919),M=n(32840),N=n(11906),B=n(13253),X=n(13150),d=n(21308),r=n(57721),p=n(98908),D=n(12190),l=n(12223),s=n(68497),b=n(10639),u=n(65741);const E=t=>`Edit service account's ${t} details`,L=(0,e.memo)(({serviceAccount:t,onRoleChange:P,roleOptions:G,onRemoveButtonClick:x,onDisable:K,onEnable:I,onAddTokenClick:F})=>{const R=`org/serviceaccounts/${t.id}`,k=(0,f.wW)(W),V=d.Vt.hasPermissionInMetadata(r.AccessControlAction.ServiceAccountsWrite,t),H=d.Vt.hasPermission(r.AccessControlAction.ActionRolesList)&&d.Vt.hasPermission(r.AccessControlAction.ActionUserRolesList);return e.createElement("tr",{key:t.id,className:(0,a.cx)({[k.disabled]:t.isDisabled})},e.createElement("td",{className:"width-4 text-center link-td"},e.createElement("a",{href:R,"aria-label":E(t.name)},e.createElement("img",{className:"filter-table__avatar",src:t.avatarUrl,alt:`Avatar for user ${t.name}`}))),e.createElement("td",{className:"link-td max-width-10"},e.createElement("a",{className:"ellipsis",href:R,title:t.name,"aria-label":E(t.name)},t.name)),e.createElement("td",{className:"link-td max-width-10"},e.createElement("a",{className:k.accountId,href:R,title:t.login,"aria-label":E(t.name)},t.login)),d.Vt.licensedAccessControlEnabled()?e.createElement("td",null,H&&e.createElement(b.R,{userId:t.id,orgId:t.orgId,basicRole:t.role,roles:t.roles||[],onBasicRoleChange:j=>P(j,t),roleOptions:G,basicRoleDisabled:!V,disabled:t.isDisabled,width:40})):e.createElement("td",null,e.createElement(u.A,{"aria-label":"Role",value:t.role,disabled:!V||t.isDisabled,onChange:j=>P(j,t)})),e.createElement("td",{className:"link-td max-width-10"},e.createElement("a",{className:"ellipsis",href:R,title:"Tokens","aria-label":E(t.name)},e.createElement("div",{className:(0,a.cx)(k.tokensInfo,{[k.tokensInfoSecondary]:!t.tokens})},e.createElement("span",null,e.createElement(D.J,{name:"key-skeleton-alt"})),t.tokens||"No tokens"))),e.createElement("td",null,e.createElement(l.Lh,{justify:"flex-end"},d.Vt.hasPermission(r.AccessControlAction.ServiceAccountsWrite)&&!t.tokens&&e.createElement(m.zx,{onClick:()=>F(t),disabled:t.isDisabled},"Add token"),d.Vt.hasPermissionInMetadata(r.AccessControlAction.ServiceAccountsWrite,t)&&(t.isDisabled?e.createElement(m.zx,{variant:"primary",onClick:()=>I(t)},"Enable"):e.createElement(m.zx,{variant:"secondary",onClick:()=>K(t)},"Disable")),d.Vt.hasPermissionInMetadata(r.AccessControlAction.ServiceAccountsDelete,t)&&e.createElement(s.h,{className:k.deleteButton,name:"trash-alt",size:"md",onClick:()=>x(t),tooltip:`Delete service account ${t.name}`}))))});L.displayName="ServiceAccountListItem";const W=t=>({iconRow:(0,a.css)`
      svg {
        margin-left: ${t.spacing(.5)};
      }
    `,accountId:(0,a.cx)("ellipsis",(0,a.css)`
        color: ${t.colors.text.secondary};
      `),deleteButton:(0,a.css)`
      color: ${t.colors.text.secondary};
    `,tokensInfo:(0,a.css)`
      span {
        margin-right: ${t.spacing(1)};
      }
    `,tokensInfoSecondary:(0,a.css)`
      color: ${t.colors.text.secondary};
    `,disabled:(0,a.css)`
      td a {
        color: ${t.colors.text.secondary};
      }
    `}),A=L;var v=n(21953);function U(t){return{...t.serviceAccounts}}const h={changeQuery:v.R5,fetchACOptions:v.bX,fetchServiceAccounts:v.Xd,deleteServiceAccount:v.yN,updateServiceAccount:v.TL,changeStateFilter:v.XE,createServiceAccountToken:v.fT},S=(0,C.connect)(U,h),O=({serviceAccounts:t,isLoading:P,roleOptions:G,query:x,serviceAccountStateFilter:K,changeQuery:I,fetchACOptions:F,fetchServiceAccounts:R,deleteServiceAccount:k,updateServiceAccount:V,changeStateFilter:H,createServiceAccountToken:j})=>{const _=(0,f.wW)(Q),[le,q]=(0,e.useState)(!1),[ce,ee]=(0,e.useState)(!1),[re,te]=(0,e.useState)(!1),[ie,ne]=(0,e.useState)(""),[g,z]=(0,e.useState)(null);(0,e.useEffect)(()=>{R({withLoadingIndicator:!0}),d.Vt.licensedAccessControlEnabled()&&F()},[F,R]);const ae=t.length===0&&K===r.ServiceAccountStateFilter.All&&!x,de=async(c,Te)=>{const Ae={...Te,role:c};V(Ae),d.Vt.licensedAccessControlEnabled()&&F()},me=c=>{I(c)},ue=c=>{H(c)},Ee=c=>{z(c),ee(!0)},ge=async()=>{g&&k(g.id),oe()},ve=c=>{z(c),te(!0)},fe=()=>{g&&V({...g,isDisabled:!0}),se()},pe=c=>{V({...c,isDisabled:!1})},De=c=>{z(c),q(!0)},ye=async c=>{g&&j(g.id,c,ne)},Ce=()=>{q(!1),z(null),ne("")},oe=()=>{ee(!1),z(null)},se=()=>{te(!1),z(null)},he=e.createElement("a",{className:"external-link",href:"https://grafana.com/docs/grafana/latest/administration/service-accounts/",target:"_blank",rel:"noopener noreferrer"},"documentation."),Se=e.createElement("span",null,"Service accounts and their tokens can be used to authenticate against the Grafana API. Find out more in our"," ",he);return e.createElement(B.T,{navId:"serviceaccounts",subTitle:Se},e.createElement(B.T.Contents,null,e.createElement("div",{className:"page-action-bar"},e.createElement(i._,{grow:!0},e.createElement(T.H,{placeholder:"Search service account by name",value:x,onChange:me,width:50})),e.createElement(w.S,{options:[{label:"All",value:r.ServiceAccountStateFilter.All},{label:"With expired tokens",value:r.ServiceAccountStateFilter.WithExpiredTokens},{label:"Disabled",value:r.ServiceAccountStateFilter.Disabled}],onChange:ue,value:K,className:_.filter}),!ae&&d.Vt.hasPermission(r.AccessControlAction.ServiceAccountsCreate)&&e.createElement(m.Qj,{href:"org/serviceaccounts/create",variant:"primary"},"Add service account")),P&&e.createElement(X.Z,null),!P&&ae&&e.createElement(e.Fragment,null,e.createElement(N.Z,{title:"You haven't created any service accounts yet.",buttonIcon:"key-skeleton-alt",buttonLink:"org/serviceaccounts/create",buttonTitle:"Add service account",buttonDisabled:!d.Vt.hasPermission(r.AccessControlAction.ServiceAccountsCreate),proTip:"Remember, you can provide specific permissions for API access to other applications.",proTipLink:"",proTipLinkTitle:"",proTipTarget:"_blank"})),!P&&t.length!==0&&e.createElement(e.Fragment,null,e.createElement("div",{className:(0,a.cx)(_.table,"admin-list-table")},e.createElement("table",{className:"filter-table filter-table--hover"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"Account"),e.createElement("th",null,"ID"),e.createElement("th",null,"Roles"),e.createElement("th",null,"Tokens"),e.createElement("th",{style:{width:"120px"}}))),e.createElement("tbody",null,t.map(c=>e.createElement(A,{serviceAccount:c,key:c.id,roleOptions:G,onRoleChange:de,onRemoveButtonClick:Ee,onDisable:ve,onEnable:pe,onAddTokenClick:De})))))),g&&e.createElement(e.Fragment,null,e.createElement(M.s,{isOpen:ce,body:`Are you sure you want to delete '${g.name}'${g.tokens?` and ${g.tokens} accompanying ${y()("token",g.tokens)}`:""}?`,confirmText:"Delete",title:"Delete service account",onConfirm:ge,onDismiss:oe}),e.createElement(M.s,{isOpen:re,title:"Disable service account",body:`Are you sure you want to disable '${g.name}'?`,confirmText:"Disable service account",onConfirm:fe,onDismiss:se}),e.createElement(p.m,{isOpen:le,token:ie,serviceAccountLogin:g.login,onCreateToken:ye,onClose:Ce}))))},Q=t=>({table:(0,a.css)`
      margin-top: ${t.spacing(3)};
    `,filter:(0,a.css)`
      margin: 0 ${t.spacing(1)};
    `,row:(0,a.css)`
      display: flex;
      align-items: center;
      height: 100% !important;

      a {
        padding: ${t.spacing(.5)} 0 !important;
      }
    `,unitTooltip:(0,a.css)`
      display: flex;
      flex-direction: column;
    `,unitItem:(0,a.css)`
      cursor: pointer;
      padding: ${t.spacing(.5)} 0;
      margin-right: ${t.spacing(1)};
    `,disabled:(0,a.css)`
      color: ${t.colors.text.disabled};
    `,link:(0,a.css)`
      color: inherit;
      cursor: pointer;
      text-decoration: underline;
    `,pageHeader:(0,a.css)`
      display: flex;
      margin-bottom: ${t.spacing(2)};
    `,apiKeyInfoLabel:(0,a.css)`
      margin-left: ${t.spacing(1)};
      line-height: 2.2;
      flex-grow: 1;
      color: ${t.colors.text.secondary};

      span {
        padding: ${t.spacing(.5)};
      }
    `,filterDelimiter:(0,a.css)`
      flex-grow: 1;
    `}),Z=S(O)},98908:(J,$,n)=>{n.d($,{m:()=>X});var a=n(41407),o=n(39953),y=n(34032),e=n(32688),C=n(82803),f=n(73075),i=n(96227),T=n(38637),w=n(20454),m=n(16991),M=n(4919),N=n(36210);const B=[{label:"No expiration",value:!1},{label:"Set expiration date",value:!0}],X=({isOpen:p,token:D,serviceAccountLogin:l,onCreateToken:s,onClose:b})=>{const u=new Date;u.setDate(u.getDate()+1);const E=new Date;e.config.tokenExpirationDayLimit!==void 0&&e.config.tokenExpirationDayLimit>-1?E.setDate(E.getDate()+e.config.tokenExpirationDayLimit+1):E.setDate(864e13);const L=e.config.tokenExpirationDayLimit!==void 0&&e.config.tokenExpirationDayLimit>0,[W,A]=(0,o.useState)(""),[v,U]=(0,o.useState)(""),[h,S]=(0,o.useState)(L),[O,Q]=(0,o.useState)(u),[Y,Z]=(0,o.useState)(O!==""),t=(0,C.wW)(r);(0,o.useEffect)(()=>{p&&A(`${l}-${(0,y.Z)()}`)},[l,p]);const P=I=>{Z(I!==""),Q(I)},G=()=>{s({name:v||W,secondsToLive:h?d(O):void 0})},x=()=>{U(""),A(""),S(L),Q(u),Z(O!==""),b()},K=D?"Service account token created":"Add service account token";return o.createElement(f.u,{isOpen:p,title:K,onDismiss:x,className:t.modal,contentClassName:t.modalContent},D?o.createElement(o.Fragment,null,o.createElement(i.g,{label:"Token",description:"Copy the token now as you will not be able to see it again. Losing a token requires creating a new one."},o.createElement("div",{className:t.modalTokenRow},o.createElement(T.I,{name:"tokenValue",value:D,readOnly:!0}),o.createElement(N.m,{className:t.modalCopyToClipboardButton,variant:"primary",size:"md",icon:"copy",getText:()=>D},"Copy clipboard"))),o.createElement(f.u.ButtonRow,null,o.createElement(N.m,{variant:"primary",getText:()=>D,onClipboardCopy:x},"Copy to clipboard and close"),o.createElement(M.zx,{variant:"secondary",onClick:x},"Close"))):o.createElement("div",null,o.createElement(i.g,{label:"Display name",description:"Name to easily identify the token",required:!0},o.createElement(T.I,{name:"tokenName",value:v,placeholder:W,onChange:I=>{U(I.currentTarget.value)}})),o.createElement(i.g,{label:"Expiration"},o.createElement(w.S,{options:B,value:h,onChange:S,size:"md"})),h&&o.createElement(i.g,{label:"Expiration date"},o.createElement(m.d,{onChange:P,value:O,placeholder:"",minDate:u,maxDate:E})),o.createElement(f.u.ButtonRow,null,o.createElement(M.zx,{onClick:G,disabled:h&&!Y},"Generate token"))))},d=p=>{const D=new Date(p),l=new Date;return Math.ceil((D.getTime()-l.getTime())/1e3)},r=p=>({modal:(0,a.css)`
      width: 550px;
    `,modalContent:(0,a.css)`
      overflow: visible;
    `,modalTokenRow:(0,a.css)`
      display: flex;
    `,modalCopyToClipboardButton:(0,a.css)`
      margin-left: ${p.spacing(.5)};
    `})},21953:(J,$,n)=>{n.d($,{R5:()=>r,TL:()=>N,XE:()=>p,Xd:()=>m,bX:()=>w,fT:()=>X,yN:()=>B});var a=n(86832),o=n.n(a),y=n(4148),e=n(4171),C=n(97125),f=n(57721),i=n(2322);const T="/api/serviceaccounts";function w(){return async l=>{try{if(C.contextSrv.licensedAccessControlEnabled()&&C.contextSrv.hasPermission(f.AccessControlAction.ActionRolesList)){const s=await(0,e.ul)();l((0,i.Dn)(s))}}catch(s){console.error(s)}}}function m({withLoadingIndicator:l}={withLoadingIndicator:!1}){return async(s,b)=>{try{if(C.contextSrv.hasPermission(f.AccessControlAction.ServiceAccountsRead)){l&&s((0,i.pN)());const{perPage:u,page:E,query:L,serviceAccountStateFilter:W}=b().serviceAccounts,A=await(0,y.i)().get(`/api/serviceaccounts/search?perpage=${u}&page=${E}&query=${L}${d(W)}&accesscontrol=true`);if(C.contextSrv.licensedAccessControlEnabled()){s((0,i.Fy)());const v=C.contextSrv.user.orgId,U=A?.serviceAccounts.map(S=>S.id),h=await(0,y.i)().post("/api/access-control/users/roles/search",{userIds:U,orgId:v});A.serviceAccounts.forEach(S=>{S.roles=h?h[S.id]||[]:[]}),s((0,i.BR)())}s((0,i.Ub)(A))}}catch(u){console.error(u)}finally{s((0,i.dt)())}}}const M=(0,a.debounce)(l=>l(m()),500,{leading:!0});function N(l){return async s=>{await(0,y.i)().patch(`${T}/${l.id}?accesscontrol=true`,{...l}),s(m())}}function B(l){return async s=>{await(0,y.i)().delete(`${T}/${l}`),s(m())}}function X(l,s,b){return async u=>{const E=await(0,y.i)().post(`${T}/${l}/tokens`,s);b(E.key),u(m())}}const d=l=>{switch(l){case f.ServiceAccountStateFilter.WithExpiredTokens:return"&expiredTokens=true";case f.ServiceAccountStateFilter.Disabled:return"&disabled=true";default:return""}};function r(l){return async s=>{s((0,i.aj)(l)),M(s)}}function p(l){return async s=>{s((0,i.M4)(l)),s(m())}}function D(l){return async s=>{s(pageChanged(l)),s(m())}}}}]);

//# sourceMappingURL=ServiceAccountsPage.43da4d0700e9e063a737.js.map