import{d as S,c as C,o as l,i as _,g as t,w as a,F as w,b0 as A,h as s,b1 as b,b2 as h,t as B,A as O,b3 as V,ax as v,e as c,f as F,b4 as M,b5 as R,b6 as r,v as U}from"./index.51b7df8a.js";import{u as $}from"./usePageTitle.5f1ff030.js";const j={class:"settings-block"},D=S({__name:"SettingsCodeBlock",props:{engineSettings:null},setup(i){const e=i,n=C(()=>Object.entries(e.engineSettings));return(u,d)=>(l(),_("div",j,[t(s(h),{multiline:""},{default:a(()=>[(l(!0),_(w,null,A(s(n),(o,g)=>(l(),_("div",{key:g,class:"settings-block--code-line"},b(o[0])+": "+b(o[1]),1))),128))]),_:1})]))}});class E extends O(V){}const f=B(new E);const P=S({__name:"Settings",async setup(i){let e,n;const u=[{text:"Settings"}],d=([e,n]=v(()=>f.getSettings()),e=await e,n(),e),o=([e,n]=v(()=>f.getVersion()),e=await e,n(),e);return $("Settings"),(g,p)=>{const y=c("p-key-value"),m=c("p-label"),k=c("p-layout-default");return l(),F(k,{class:"settings"},{header:a(()=>[t(s(M),{crumbs:u},{actions:a(()=>[t(y,{label:"Version",value:s(o),alternate:""},null,8,["value"])]),_:1})]),default:a(()=>[t(m,{label:"Color Mode",class:"settings__color-mode"},{default:a(()=>[t(s(R),{selected:s(r),"onUpdate:selected":p[0]||(p[0]=x=>U(r)?r.value=x:null)},null,8,["selected"])]),_:1}),t(m,{label:"Orion Settings"},{default:a(()=>[t(D,{class:"settings__code-block","engine-settings":s(d)},null,8,["engine-settings"])]),_:1})]),_:1})}}});export{P as default};
