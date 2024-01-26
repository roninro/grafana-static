"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8741],{4378:(Y,C,a)=>{a.r(C),a.d(C,{AuthConfigPageUnconnected:()=>$,default:()=>Q});var r=a(41407),N=a(86832),n=a(39953),T=a(89772),E=a(72639),u=a(82803),x=a(13253),S=a(28888),z=a(4919),I=a(80318);const k=({title:t,buttonIcon:s,buttonLink:o,buttonTitle:c,buttonDisabled:g,description:i,onClick:d})=>{const l=(0,u.wW)(B),m=i?n.createElement("span",{key:"proTipFooter"},i):"",y=i?"":l.button,h=n.createElement(z.Qj,{size:"lg",href:o,icon:s,className:y,"data-testid":S.wl.components.CallToActionCard.buttonV2(c),disabled:g,onClick:()=>d&&d()},c);return n.createElement(I._,{className:l.cta,message:t,footer:m,callToActionElement:h})},B=t=>({cta:(0,r.css)`
      text-align: center;
    `,button:(0,r.css)`
      margin-bottom: ${t.spacing(2.5)};
    `}),W=k;var j=a(4236),v=a(12608),F=a(12190);const P="admin/authentication/",w="48px";function A({providerId:t,displayName:s,enabled:o,configPath:c,authType:g,badges:i,onClick:d}){const l=(0,u.wW)(H);return c=P+(c||t),n.createElement(j.Z,{href:c,className:l.container,onClick:()=>d&&d()},n.createElement("div",{className:l.header},n.createElement("span",{className:l.smallText},g),n.createElement("span",{className:l.name},s)),n.createElement("div",{className:l.footer},n.createElement("div",{className:l.badgeContainer},o?n.createElement(v.C,{text:"Enabled",color:"green",icon:"check"}):n.createElement(v.C,{text:"Not enabled",color:"blue"})),n.createElement("span",{className:l.edit},"Edit",n.createElement(F.J,{color:"blue",name:"arrow-right",size:"sm"}))))}const H=t=>({container:(0,r.css)`
      min-height: ${t.spacing(18)};
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-radius: ${t.spacing(.5)};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `,header:(0,r.css)`
      margin-top: -${t.spacing(2)};
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;
      margin-bottom: ${t.spacing(2)};
    `,footer:(0,r.css)`
      margin-top: ${t.spacing(2)};
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,name:(0,r.css)`
      align-self: flex-start;
      font-size: ${t.typography.h4.fontSize};
      color: ${t.colors.text.primary};
      margin: 0;
      margin-top: ${t.spacing(-1)};
    `,smallText:(0,r.css)`
      font-size: ${t.typography.bodySmall.fontSize};
      color: ${t.colors.text.secondary};
      padding: ${t.spacing(1)} 0; // Add some padding
      max-width: 90%; // Add a max-width to prevent text from stretching too wide
    `,badgeContainer:(0,r.css)`
      display: flex;
      gap: ${t.spacing(1)};
    `,edit:(0,r.css)`
      display: flex;
      align-items: center;
      color: ${t.colors.text.link};
      gap: ${t.spacing(.5)};
    `});var L=a(4148),U=a(21308),V=a(57721),p=a(35045),f=a(26071);function R(){return async t=>{if(U.Vt.hasPermission(V.AccessControlAction.SettingsRead)){t((0,f.uX)());const s=await(0,L.i)().get("/api/admin/settings");return t((0,f.AW)(s)),await t(O()),t((0,f._E)()),s}}}function O(){return async t=>{const s=(0,p.getRegisteredAuthProviders)(),o={},c=[];for(const i of s)c.push((0,p.getAuthProviderStatus)(i.id));const g=await Promise.all(c);for(let i=0;i<s.length;i++){const d=s[i],l=g[i];o[d.id]=l}t((0,f.AB)(o))}}function K(t){return async s=>{if(contextSrv.hasPermission(AccessControlAction.SettingsWrite))try{return await lastValueFrom(getBackendSrv().fetch({url:"/api/admin/settings",method:"PUT",data:t,showSuccessAlert:!1,showErrorAlert:!1})),s(resetError()),!0}catch(o){if(console.log(o),isFetchError(o)){o.isHandled=!0;const c={message:o.data?.message,errors:o.data?.errors};return s(setError(c)),!1}}return!1}}function Z(t){return P+(t.configPath||t.id)}function D(t){const{isLoading:s,providerStatuses:o}=t.authConfig;return{isLoading:s,providerStatuses:o}}const G={loadSettings:R},J=(0,T.connect)(D,G),$=({providerStatuses:t,isLoading:s,loadSettings:o})=>{const c=(0,u.wW)(M);(0,n.useEffect)(()=>{o()},[o]);const g=(0,p.getRegisteredAuthProviders)(),i=g.filter(e=>t[e.id]?.enabled),d=g.filter(e=>t[e.id]?.configured&&!t[e.id]?.enabled),l=g.filter(e=>!t[e.id]?.enabled&&!t[e.id]?.configured&&!t[e.id]?.hide),m=l?.length?l[0]:null,y=n.createElement("a",{className:"external-link",href:"https://grafana.com/docs/grafana/next/setup-grafana/configure-security/configure-authentication/saml-ui/",target:"_blank",rel:"noopener noreferrer"},"documentation."),h=n.createElement("span",null,"Manage your auth settings and configure single sign-on. Find out more in our ",y),X=()=>{(0,E.ff)("authentication_ui_created",{provider:m?.type})},b=e=>{(0,E.ff)("authentication_ui_provider_clicked",{provider:e.type})};return n.createElement(x.T,{navId:"authentication",subTitle:h},n.createElement(x.T.Contents,{isLoading:s},n.createElement("h3",{className:c.sectionHeader},"Configured authentication"),!!i?.length&&n.createElement("div",{className:c.cardsContainer},i.map(e=>n.createElement(A,{key:e.id,providerId:e.id,displayName:t[e.id]?.name||e.displayName,authType:e.protocol,enabled:t[e.id]?.enabled,configPath:e.configPath,onClick:()=>b(e)}))),!i?.length&&m&&!(0,N.isEmpty)(t)&&n.createElement(W,{title:`You have no ${m.type} configuration created at the moment`,buttonIcon:"plus-circle",buttonLink:Z(m),buttonTitle:`Configure ${m.type}`,onClick:X}),!!d?.length&&n.createElement("div",{className:c.cardsContainer},d.map(e=>n.createElement(A,{key:e.id,providerId:e.id,displayName:t[e.id]?.name||e.displayName,authType:e.protocol,enabled:t[e.id]?.enabled,configPath:e.configPath,onClick:()=>b(e)})))))},M=t=>({cardsContainer:(0,r.css)`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${t.spacing(3)};
      margin-bottom: ${t.spacing(3)};
      margin-top: ${t.spacing(2)};
    `,sectionHeader:(0,r.css)`
      margin-bottom: ${t.spacing(3)};
    `,settingsSection:(0,r.css)`
      margin-top: ${t.spacing(4)};
    `,settingName:(0,r.css)`
      padding-left: 25px;
    `,doclink:(0,r.css)`
      padding-bottom: 5px;
      padding-top: -5px;
      font-size: ${t.typography.bodySmall.fontSize};
      a {
        color: ${t.colors.info.name}; // use theme link color or any other color
        text-decoration: underline; // underline or none, as you prefer
      }
    `,settingValue:(0,r.css)`
      white-space: break-spaces;
    `}),Q=J($)}}]);

//# sourceMappingURL=AdminAuthentication.a9df76989e5591ce7daa.js.map