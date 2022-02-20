var S=Object.defineProperty;var w=(o,e,t)=>e in o?S(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var c=(o,e,t)=>(w(o,typeof e!="symbol"?e+"":e,t),t);import{F as k,d as g,u as A,c as N,I as D,a as F,o as v,b as O,e as h,t as R,f as m,g as d,w as f,h as x,i as P,v as B,j as L,r as $,k as l,l as y,m as I,n as U,p as M,q as V,s as E,x as J,R as T,y as z,z as G,A as q,B as X,C as H}from"./vendor.7b3235aa.js";const Z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};Z();const K=o=>btoa(unescape(encodeURIComponent(o))),W=o=>decodeURIComponent(escape(atob(o))),Y="modulepreload",j={},Q="./",ee=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${Q}${s}`,s in j)return;j[s]=!0;const n=s.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":Y,n||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),n)return new Promise((a,u)=>{r.addEventListener("load",a),r.addEventListener("error",u)})})).then(()=>e())};var te=`<!DOCTYPE html>
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
`,ne=`import { createApp } from 'vue'
import Idux from './idux.js'

import App from './App.vue'

createApp(App).use(Idux).mount('#app')
`,se=`
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
`,oe=`{
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
`,ie=`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
`,re=`# Idux Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

\`\`\`sh
pnpm i
pnpm run dev
\`\`\`
`;const ae=async o=>{const e=["setupIdux.js","import-map.json"],{default:t}=await ee(()=>import("./jszip.min.ea1d1e6a.js").then(function(a){return a.j}),["assets/jszip.min.ea1d1e6a.js","assets/vendor.7b3235aa.js"]),s=new t;s.file("index.html",te),s.file("package.json",oe),s.file("vite.config.js",ie),s.file("README.md",re);const n=s.folder("src");n==null||n.file("main.js",ne),n==null||n.file("idux.js",se);const i=o.getFiles();for(const a in i){if(e.includes(a))continue;let u=i[a];a==="App.vue"&&(u=u.replace(`import { setupIdux } from './setupIdux.js'
`,"").replace(`setupIdux() // don't remove
`,"")),n==null||n.file(a,u)}const r=await s.generateAsync({type:"blob"});k.exports.saveAs(r,"idux-starter.zip")},ue={class:"flex justify-between p-2"},ce={class:"text-base"},le=x(" Download "),pe=x(" Share "),de=x(" GitHub "),fe=g({props:{store:null},setup(o){const e=o,{success:t,warning:s}=A(),n=async()=>{if(!navigator.clipboard){s("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),t("Current URL has been copied to clipboard.")},i=N(()=>` ( Vue@${e.store.versions.Vue}, Idux@${e.store.versions.Idux} )`);return(r,a)=>{const u=D,b=F;return v(),O("div",ue,[h("h1",ce," Idux Playground "+R(m(i)),1),d(b,null,{default:f(()=>[d(u,{onClick:a[0]||(a[0]=je=>m(ae)(o.store))},{default:f(()=>[le]),_:1}),d(u,{onClick:n},{default:f(()=>[pe]),_:1}),d(u,{mode:"link",href:"https://github.com/brenner8023/idux-playground",target:"_blank",rel:"noopener noreferrer"},{default:f(()=>[de]),_:1})]),_:1})])}}}),_="setupIdux.js",me=`
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
`,p="App.vue",C=`<template>
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
<\/script>`,ve=(o="")=>{let e={[p]:new l(p,C)};if(o)try{e={};const t=JSON.parse(W(o));for(const s of Object.keys(t))e[s]=new l(s,t[s])}catch(t){console.log(t)}return e};class he{constructor({serializedState:e="",versions:t={Vue:B.version,Idux:L.version},defaultVueRuntimeURL:s="./vue.esm-browser.js"}){c(this,"state");c(this,"compiler",P);c(this,"options");c(this,"versions");c(this,"initialShowOutput",!1);c(this,"initialOutputMode","preview");c(this,"defaultVueRuntimeURL","");const n=ve(e),i=n[p]?p:Object.keys(n)[0];this.state=$({mainFile:i,files:n,activeFile:n[i],errors:[],vueRuntimeURL:s}),this.defaultVueRuntimeURL=s,this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new l("import-map.json",JSON.stringify({imports:{vue:this.defaultVueRuntimeURL,idux:"./idux.js"}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}async initStore(){this.state.files[_]=new l(_,me,!0),y(()=>I(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==p&&I(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new l(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[this.state.mainFile]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=p){const s={};t===p&&!e[t]&&(s[t]=new l(t,C));for(const[n,i]of Object.entries(e))s[n]=new l(n,i);for(const n of Object.values(s))await I(this,n);this.state.mainFile=t,this.state.files=s,this.initImportMap(),this.setActive(t)}serialize(){const e=Object.entries(this.getFiles()).filter(([s])=>s!==_).map(([s,n])=>{if(s==="import-map.json")try{const i=JSON.stringify(this.getImportMap(),null,2);return[s,i]}catch{}return[s,n]}),t=JSON.stringify(Object.fromEntries(e));return`#${K(t)}`}}var xe=(o,e)=>{const t=o.__vccOpts||o;for(const[s,n]of e)t[s]=n;return t};const Ie=o=>(z("data-v-e2dcf550"),o=o(),G(),o),_e=Ie(()=>h("div",{class:"ixp-height-full"},null,-1)),ge={class:"flex flex-col ixp-height-full"},ye=g({setup(o){const e=U(!0),t=new he({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e.value=!1}),y(()=>history.replaceState({},"",t.serialize())),(s,n)=>{const i=M,r=fe,a=V;return v(),E(a,null,{default:f(()=>[e.value?(v(),E(i,{key:0,tip:"loading..."},{default:f(()=>[_e]),_:1})):J("",!0),h("div",ge,[d(r,{store:m(t)},null,8,["store"]),d(m(T),{class:"grow","auto-resize":"","show-compile-output":"",store:m(t),"clear-console":!1},null,8,["store"])])]),_:1})}}});var Ee=xe(ye,[["__scopeId","data-v-e2dcf550"]]);q(X);H(Ee).mount("#app");
