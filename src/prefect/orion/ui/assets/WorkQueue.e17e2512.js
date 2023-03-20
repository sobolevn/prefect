import{d as L,u as O,b as j,c as o,Y as z,r as Q,n as b,a4 as G,aA as q,I as H,e as c,o as a,f as n,w as s,h as e,aB as J,q as r,g as i,aC as K,aD as y,s as M,aE as X,D as Z,a8 as ee,m as ue,E as te,am as oe}from"./index.51b7df8a.js";import{u as se}from"./useToast.2d2d3cf2.js";import{u as ae}from"./usePageTitle.5f1ff030.js";const ne={class:"work-queue__upcoming-runs"},de=L({__name:"WorkQueue",setup(re){const g=O(),v=j(),R=se(),C=o(()=>{const t=["Upcoming Runs","Runs"];return ue.xl||t.unshift("Details"),t}),h=z("id"),F=o(()=>`prefect agent start ${u.value?` --work-queue "${u.value.name}"`:""}`),d=Q([]),w=Q(),W=()=>{d.value=["running","pending"],w.value="Runs"},x={interval:3e5},_=b(v.workQueues.getWorkQueue,[h.value],x),u=o(()=>_.response),m=o(()=>{var t;return(t=u.value)==null?void 0:t.concurrencyLimit}),U=o(()=>{var t;return(t=u.value)==null?void 0:t.isPaused}),f=o(()=>!!(m.value&&m.value<=$.value&&!U.value)),p=o(()=>u.value?[u.value.name]:[]),T=G({workQueues:p}),B=q({workQueues:p}),D=o(()=>f.value?B.value:T.value),N=()=>{g.push(te.workQueues())},V=o(()=>u.value?`Work Queue: ${u.value.name}`:"Work Queue");ae(V);const P=q({states:["Running","Pending"],workQueues:p}),S=b(v.flowRuns.getFlowRunsCount,[P.value],{interval:3e4}),$=o(()=>{var t;return(t=S.response)!=null?t:[]});return H(()=>{var t;return(t=u.value)==null?void 0:t.deprecated},t=>{t&&R(oe.info.deprecatedWorkQueue,"default",{dismissible:!1,timeout:!1})}),(t,l)=>{const A=c("p-button"),E=c("p-tabs"),I=c("p-layout-well"),Y=c("p-layout-default");return a(),n(Y,{class:"work-queue"},{header:s(()=>[e(u)?(a(),n(e(J),{key:0,"work-queue":e(u),onUpdate:e(_).refresh,onDelete:N},null,8,["work-queue","onUpdate"])):r("",!0)]),default:s(()=>[i(I,{class:"work-queue__body"},{header:s(()=>[i(e(K),{command:e(F),title:"Work queue is ready to go!",subtitle:"Work queues define the work to be done and agents poll a specific work queue for new work."},null,8,["command"])]),well:s(()=>[e(u)?(a(),n(e(y),{key:0,alternate:"","work-queue":e(u)},null,8,["work-queue"])):r("",!0)]),default:s(()=>[i(E,{selected:w.value,"onUpdate:selected":l[1]||(l[1]=k=>w.value=k),tabs:e(C)},{details:s(()=>[e(u)?(a(),n(e(y),{key:0,"work-queue":e(u)},null,8,["work-queue"])):r("",!0)]),"upcoming-runs":s(()=>[M("div",ne,[e(u)?(a(),n(e(X),{key:0,"work-queue":e(u)},null,8,["work-queue"])):r("",!0),e(f)?(a(),n(A,{key:1,secondary:"",class:"work-queue__active-runs-button",onClick:W},{default:s(()=>[Z(" Show active runs ")]),_:1})):r("",!0)])]),runs:s(()=>[i(e(ee),{states:d.value,"onUpdate:states":l[0]||(l[0]=k=>d.value=k),"flow-run-filter":e(D)},null,8,["states","flow-run-filter"])]),_:1},8,["selected","tabs"])]),_:1})]),_:1})}}});export{de as default};
