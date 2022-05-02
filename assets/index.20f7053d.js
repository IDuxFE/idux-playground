var D=Object.defineProperty;var N=(o,e,t)=>e in o?D(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var l=(o,e,t)=>(N(o,typeof e!="symbol"?e+"":e,t),t);import{F,d as E,u as R,c as O,r as C,I as P,a as B,b as L,o as x,e as V,f as I,t as $,g as m,h as u,w as c,Q as U,i as h,j as M,v as J,k as T,l as z,m as d,n as j,p as _,q,s as G,x as b,y as Q,R as X,z as H,A as Z,B as K,C as W,D as Y}from"./vendor.9c3e8374.js";const ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};ee();const te=o=>btoa(unescape(encodeURIComponent(o))),ne=o=>decodeURIComponent(escape(atob(o))),se="modulepreload",S={},oe="./",ie=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${oe}${s}`,s in S)return;S[s]=!0;const n=s.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":se,n||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),n)return new Promise((a,f)=>{r.addEventListener("load",a),r.addEventListener("error",f)})})).then(()=>e())};var re=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Idux Starter</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>
`,ae=`import { createApp } from 'vue'
import Idux from './idux.js'

import App from './App.vue'

createApp(App).use(Idux).mount('#app')
`,ue=`
import IduxCdk from '@idux/cdk'
import IduxComponents from '@idux/components'
import IduxPro from '@idux/pro'

import '@idux/components/default.min.css'
import '@idux/pro/default.min.css'

// \u9ED8\u8BA4\u4E3A\u4E2D\u6587\uFF0C\u53EF\u4EE5\u6253\u5F00\u6CE8\u91CA\u8BBE\u7F6E\u4E3A\u5176\u4ED6\u8BED\u8A00
// import { useLocale, enUS } from "@idux/components/i18n";
// useLocale(enUS);

// import { createGlobalConfig } from '@idux/components/config'
import {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
} from '@idux/components/icon'

// \u9759\u6001\u52A0\u8F7D: \`IDUX_ICON_DEPENDENCIES\` \u662F \`@idux\` \u7684\u90E8\u5206\u7EC4\u4EF6\u9ED8\u8BA4\u6240\u4F7F\u7528\u5230\u56FE\u6807\uFF0C\u5EFA\u8BAE\u5728\u6B64\u65F6\u9759\u6001\u5F15\u5165\u3002
addIconDefinitions(IDUX_ICON_DEPENDENCIES)

// \u52A8\u6001\u52A0\u8F7D\uFF1A\u4E0D\u4F1A\u88AB\u6253\u5305\uFF0C\u53EF\u4EE5\u51CF\u5C0F\u5305\u4F53\u79EF\uFF0C\u9700\u8981\u52A0\u8F7D\u7684\u65F6\u5019\u65F6\u5019 http \u8BF7\u6C42\u52A0\u8F7D
// \u6CE8\u610F\uFF1A\u8BF7\u786E\u8BA4\u56FE\u6807\u7684 svg \u8D44\u6E90\u4F9D\u65E7\u88AB\u6B63\u786E\u653E\u5165\u5230 \`public/idux-icons\` \u76EE\u5F55\u4E2D
// const loadIconDynamically = (iconName) => {
//   return fetch(\`/idux-icons/\${iconName}.svg\`).then((res) => res.text())
// }

// const globalConfig = createGlobalConfig({
//   icon: { loadIconDynamically },
// })

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents).use(IduxPro)
}

export default { install }
`,ce=`{
  "name": "idux-starter",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.0",
    "@idux/cdk": "^1.0.0-alpha.6",
    "@idux/components": "^1.0.0-alpha.6",
    "@idux/pro": "^1.0.0-alpha.6"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^2.1.0",
    "vite": "^2.7.13"
  }
}
`,le=`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
`,de=`# Idux Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

\`\`\`sh
pnpm i
pnpm run dev
\`\`\`
`;const pe=async o=>{const e=["setupIdux.js","import-map.json"],{default:t}=await ie(()=>import("./jszip.min.9484c2b7.js").then(function(a){return a.j}),["assets/jszip.min.9484c2b7.js","assets/vendor.9c3e8374.js"]),s=new t;s.file("index.html",re),s.file("package.json",ce),s.file("vite.config.js",le),s.file("README.md",de);const n=s.folder("src");n==null||n.file("main.js",ae),n==null||n.file("idux.js",ue);const i=o.getFiles();for(const a in i){if(e.includes(a))continue;let f=i[a];a==="App.vue"&&(f=f.replace(`import { setupIdux } from './setupIdux.js'
`,"").replace(`setupIdux() // don't remove
`,"")),n==null||n.file(a,f)}const r=await s.generateAsync({type:"blob"});F.exports.saveAs(r,"idux-starter.zip")},fe={class:"flex justify-between p-2"},me={class:"text-base"},ve=h(" Download "),he=h(" QRCode "),xe=h(" Share "),Ie=h(" GitHub "),_e=E({props:{store:null},setup(o){const e=o,{success:t,warning:s}=R(),n=async()=>{if(!navigator.clipboard){s("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),t("Current URL has been copied to clipboard.")},i=O(()=>` ( Vue@${e.store.versions.Vue}, Idux@${e.store.versions.Idux} )`),r=C(""),a=()=>{r.value=location.href};return(f,y)=>{const v=P,k=B,A=L;return x(),V("div",fe,[I("h1",me," Idux Playground "+$(m(i)),1),u(A,null,{default:c(()=>[u(v,{onClick:y[0]||(y[0]=Ae=>m(pe)(o.store))},{default:c(()=>[ve]),_:1}),u(k,null,{content:c(()=>[u(U,{value:r.value,size:500},null,8,["value"])]),default:c(()=>[u(v,{onMouseenter:a},{default:c(()=>[he]),_:1})]),_:1}),u(v,{onClick:n},{default:c(()=>[xe]),_:1}),u(v,{mode:"link",href:"https://github.com/IDuxFE/idux-playground",target:"_blank",rel:"noopener noreferrer"},{default:c(()=>[Ie]),_:1})]),_:1})])}}}),g="setupIdux.js",ge=`
import { getCurrentInstance } from 'vue'
import Idux from 'idux'

const install = (app) => {
  app.use(Idux)
}

const loadCss = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = './idux-components.default.min.css'
  document.body.appendChild(link)
}

export const setupIdux = () => {
  const instance = getCurrentInstance()
  instance?.appContext.app.use({ install })
  loadCss()
}
`,p="App.vue",w=`<template>
  <div style="padding: 20px 100px;">
    <div>\u4F60\u8BA4\u4E3A\u4E0B\u9762\u54EA\u4E00\u4E2A\u4EBA\u6700\u5E05\uFF1F</div>
    <IxRadioGroup v-model:value="value">
      <IxSpace vertical>
        <IxRadio value="1998">1998\u5E74\u51FA\u751F\u7684\u5FEB\u54E5</IxRadio>
        <IxRadio value="1989">1989\u5E74\u51FA\u751F\u7684\u5FEB\u5B50</IxRadio>
        <IxRadio value="1898">1898\u5E74\u51FA\u751F\u7684\u5FEB\u7237</IxRadio>
        <IxRadio value="2008">2008\u5E74\u51FA\u751F\u7684\u5FEB\u4ED4</IxRadio>
      </IxSpace>
    </IxRadioGroup>
  </div>
</template>

<script setup lang="ts">
import { setupIdux } from './setupIdux.js'
import { ref } from 'vue'

const value = ref('2008')

setupIdux() // don't remove
<\/script>`,ye=(o="")=>{let e={[p]:new d(p,w)};if(o)try{e={};const t=JSON.parse(ne(o));for(const s of Object.keys(t))e[s]=new d(s,t[s])}catch(t){console.log(t)}return e};class Ee{constructor({serializedState:e="",versions:t={Vue:J.version,Idux:T.version},defaultVueRuntimeURL:s="./vue.esm-browser.js"}){l(this,"state");l(this,"compiler",M);l(this,"options");l(this,"versions");l(this,"initialShowOutput",!1);l(this,"initialOutputMode","preview");l(this,"defaultVueRuntimeURL","");const n=ye(e),i=n[p]?p:Object.keys(n)[0];this.state=z({mainFile:i,files:n,activeFile:n[i],errors:[],vueRuntimeURL:s}),this.defaultVueRuntimeURL=s,this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new d("import-map.json",JSON.stringify({imports:{vue:this.defaultVueRuntimeURL,idux:"./idux.js"}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}async initStore(){this.state.files[g]=new d(g,ge,!0),j(()=>_(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==p&&_(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new d(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[this.state.mainFile]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=p){const s={};t===p&&!e[t]&&(s[t]=new d(t,w));for(const[n,i]of Object.entries(e))s[n]=new d(n,i);for(const n of Object.values(s))await _(this,n);this.state.mainFile=t,this.state.files=s,this.initImportMap(),this.setActive(t)}serialize(){const e=Object.entries(this.getFiles()).filter(([s])=>s!==g).map(([s,n])=>{if(s==="import-map.json")try{const i=JSON.stringify(this.getImportMap(),null,2);return[s,i]}catch{}return[s,n]}),t=JSON.stringify(Object.fromEntries(e));return`#${te(t)}`}}var Ce=(o,e)=>{const t=o.__vccOpts||o;for(const[s,n]of e)t[s]=n;return t};const je=o=>(H("data-v-e2dcf550"),o=o(),Z(),o),be=je(()=>I("div",{class:"ixp-height-full"},null,-1)),Se={class:"flex flex-col ixp-height-full"},we=E({setup(o){const e=C(!0),t=new Ee({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e.value=!1}),j(()=>history.replaceState({},"",t.serialize())),(s,n)=>{const i=q,r=_e,a=G;return x(),b(a,null,{default:c(()=>[e.value?(x(),b(i,{key:0,tip:"loading..."},{default:c(()=>[be]),_:1})):Q("",!0),I("div",Se,[u(r,{store:m(t)},null,8,["store"]),u(m(X),{class:"grow","auto-resize":"","show-compile-output":"",store:m(t),"clear-console":!1},null,8,["store"])])]),_:1})}}});var ke=Ce(we,[["__scopeId","data-v-e2dcf550"]]);K(W);Y(ke).mount("#app");
