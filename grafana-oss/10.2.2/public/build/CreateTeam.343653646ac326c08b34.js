"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8715],{21090:(T,l,e)=>{e.d(l,{f:()=>o});var a=e(39953),i=e(65489),n=e(21308),_=e(57721),m=e(35430),s=e(4171);const o=({teamId:t,roleOptions:E,disabled:c,roles:P,onApplyRoles:u,pendingRoles:r,apply:O=!1,maxWidth:v,width:M,isLoading:f})=>{const[{loading:I,value:R=P||[]},D]=(0,i.Z)(async()=>{try{if(P)return P;if(O&&r?.length)return r;if(n.Vt.hasPermission(_.AccessControlAction.ActionTeamsRolesList))return await(0,s._C)(t)}catch(d){console.error("Error loading options",d)}return[]},[t,r,P]);(0,a.useEffect)(()=>{D()},[D]);const g=async d=>{O?u&&u(d):(await(0,s.u7)(d,t),await D())},U=n.Vt.hasPermission(_.AccessControlAction.ActionTeamsRolesAdd)&&n.Vt.hasPermission(_.AccessControlAction.ActionTeamsRolesRemove);return a.createElement(m.I,{apply:O,onRolesChange:g,roleOptions:E,appliedRoles:R,isLoading:I||f,disabled:c,basicRoleDisabled:!0,canUpdateRoles:U,maxWidth:v,width:M})}},38957:(T,l,e)=>{e.d(l,{C:()=>s});var a=e(39953),i=e(99292),n=e(21308),_=e(57721),m=e(4171);const s=o=>{const[t,E]=(0,a.useState)(o),{value:c=[]}=(0,i.Z)(async()=>n.Vt.licensedAccessControlEnabled()&&n.Vt.hasPermission(_.AccessControlAction.ActionRolesList)?(0,m.ul)(t):Promise.resolve([]),[t]);return[{roleOptions:c},E]}},20713:(T,l,e)=>{e.r(l),e.d(l,{CreateTeam:()=>M,default:()=>f});var a=e(39953),i=e(4148),n=e(13601),_=e(85830),m=e(2827),s=e(96227),o=e(38637),t=e(4919),E=e(13253),c=e(21090),P=e(4171),u=e(38957),r=e(21308),O=e(57721);const v={icon:"users-alt",id:"team-new",text:"New team",subTitle:"Create a new team. Teams let you grant permissions to a group of users."},M=()=>{const I=r.Vt.user.orgId,[R,D]=(0,a.useState)([]),[{roleOptions:g}]=(0,u.C)(I),U=r.Vt.hasPermission(O.AccessControlAction.ActionUserRolesAdd)&&r.Vt.hasPermission(O.AccessControlAction.ActionUserRolesRemove),d=async C=>{const A=await(0,i.i)().post("/api/teams",C);if(A.teamId){try{await r.Vt.fetchUserPermissions(),r.Vt.licensedAccessControlEnabled()&&U&&await(0,P.u7)(R,A.teamId,A.orgId)}catch(L){console.error(L)}n.E1.push(`/org/teams/edit/${A.teamId}`)}};return a.createElement(E.T,{navId:"teams",pageNav:v},a.createElement(E.T.Contents,null,a.createElement(_.l,{onSubmit:d},({register:C,errors:A})=>a.createElement(a.Fragment,null,a.createElement(m.C,null,a.createElement(s.g,{label:"Name",required:!0,invalid:!!A.name,error:"Team name is required"},a.createElement(o.I,{...C("name",{required:!0}),id:"team-name"})),r.Vt.licensedAccessControlEnabled()&&a.createElement(s.g,{label:"Role"},a.createElement(c.f,{teamId:0,roleOptions:g,disabled:!1,apply:!0,onApplyRoles:D,pendingRoles:R,maxWidth:"100%"})),a.createElement(s.g,{label:"Email",description:"This is optional and is primarily used for allowing custom team avatars."},a.createElement(o.I,{...C("email"),type:"email",id:"team-email",placeholder:"email@test.com"}))),a.createElement(t.zx,{type:"submit",variant:"primary"},"Create")))))},f=M},99292:(T,l,e)=>{var a;a={value:!0};var i=e(52732),n=e(39953),_=i.__importDefault(e(95681));function m(s,o){o===void 0&&(o=[]);var t=_.default(s,o,{loading:!0}),E=t[0],c=t[1];return n.useEffect(function(){c()},[c]),E}l.Z=m}}]);

//# sourceMappingURL=CreateTeam.343653646ac326c08b34.js.map