import{d as x,b as C,Y as D,u as g,c as o,n as B,a4 as N,e as c,o as s,f as a,w as t,h as e,a5 as R,q as r,a6 as i,g as f,a7 as V,a8 as Y,m as q,E as A}from"./index.51b7df8a.js";import{u as E}from"./usePageTitle.5f1ff030.js";const T=x({__name:"Flow",setup(I){const w=C(),n=D("id"),p=g(),m=o(()=>{const u=["Deployments","Runs"];return q.xl||u.unshift("Details"),u}),_={interval:3e5},d=B(w.flows.getFlow,[n.value],_),l=o(()=>d.response),b=N({flows:[n.value]}),v=o(()=>({flows:[n.value]}));function y(){p.push(A.flows())}const F=o(()=>l.value?`Flow: ${l.value.name}`:"Flow");return E(F),(u,O)=>{const h=c("p-tabs"),k=c("p-layout-well");return s(),a(k,{class:"flow"},{header:t(()=>[e(l)?(s(),a(e(R),{key:0,flow:e(l),onDelete:y},null,8,["flow"])):r("",!0)]),well:t(()=>[e(l)?(s(),a(e(i),{key:0,flow:e(l)},null,8,["flow"])):r("",!0)]),default:t(()=>[f(h,{tabs:e(m)},{details:t(()=>[e(l)?(s(),a(e(i),{key:0,flow:e(l)},null,8,["flow"])):r("",!0)]),deployments:t(()=>[f(e(V),{filter:e(v)},null,8,["filter"])]),runs:t(()=>[f(e(Y),{"flow-run-filter":e(b)},null,8,["flow-run-filter"])]),_:1},8,["tabs"])]),_:1})}}});export{T as default};
