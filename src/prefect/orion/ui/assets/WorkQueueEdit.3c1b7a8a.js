import{d as k,b as w,Y as m,ax as f,e as Q,o as h,f as y,w as l,g as d,h as a,ay as g,az as q,ae as x,ad as p}from"./index.51b7df8a.js";import{u as C}from"./usePageTitle.5f1ff030.js";const B=k({__name:"WorkQueueEdit",async setup(W){let e,u;const t=w(),r=m("id"),o=([e,u]=f(()=>t.workQueues.getWorkQueue(r.value)),e=await e,u(),e),s=()=>{x.back()},i=async n=>{try{await t.workQueues.updateWorkQueue(r.value,n),p(`${o.name} updated`,"success"),s()}catch(c){p("Error occurred while updating your queue","error"),console.error(c)}};return C(`Edit Work Queue: ${o.name}`),(n,c)=>{const _=Q("p-layout-default");return h(),y(_,null,{header:l(()=>[d(a(g),{"work-queue":a(o)},null,8,["work-queue"])]),default:l(()=>[d(a(q),{"work-queue":a(o),onSubmit:i,onCancel:s},null,8,["work-queue"])]),_:1})}}});export{B as default};
