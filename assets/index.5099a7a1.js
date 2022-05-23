var q=Object.defineProperty;var S=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var C=(s,e,t)=>e in s?q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,I=(s,e)=>{for(var t in e||(e={}))Y.call(e,t)&&C(s,t,e[t]);if(S)for(var t of S(e))Z.call(e,t)&&C(s,t,e[t]);return s};var d=(s,e,t)=>(C(s,typeof e!="symbol"?e+"":e,t),t);import{F as K,u as W,c as N,a as O,d as V,b as Q,r as P,I as ee,e as te,f as ne,g as se,h as ie,i as oe,o as v,j as D,k as p,w as c,l as A,m as L,n as x,p as w,q as E,s as _,t as M,v as re,x as m,y,z as $,A as ae,B as le,C as ce,R as pe,D as ue,E as de,G as me,H as fe,J as ve}from"./vendor.cf7d3899.js";const he=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};he();const xe=s=>btoa(unescape(encodeURIComponent(s))),ge=s=>decodeURIComponent(escape(atob(s))),Ie="modulepreload",F={},_e="./",R=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${_e}${n}`,n in F)return;F[n]=!0;const i=n.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":Ie,i||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),i)return new Promise((a,l)=>{r.addEventListener("load",a),r.addEventListener("error",l)})})).then(()=>e())};var ye=`<!DOCTYPE html>
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
`,je=`import { createApp } from 'vue'
import Idux from './idux.js'

import App from './PlaygroundApp.vue'

createApp(App).use(Idux).mount('#app')
`,be=`
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
`,ke=`{
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
`,Ce=`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
`,De=`# Idux Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

\`\`\`sh
pnpm i
pnpm run dev
\`\`\`
`;const we=async s=>{const e=["setupIdux.js","import-map.json"],{default:t}=await R(()=>import("./jszip.min.5f302b9f.js").then(function(a){return a.j}),["assets/jszip.min.5f302b9f.js","assets/vendor.cf7d3899.js"]),n=new t;n.file("index.html",ye),n.file("package.json",ke),n.file("vite.config.js",Ce),n.file("README.md",De);const i=n.folder("src");i==null||i.file("main.js",je),i==null||i.file("idux.js",be);const o=s.getFiles();for(const a in o){if(e.includes(a))continue;let l=o[a];a==="PlaygroundApp.vue"&&(l=l.replace(`import { setupIdux } from './setupIdux.js'
`,"").replace("setupIdux()","")),i==null||i.file(a,l)}const r=await n.generateAsync({type:"blob"});K.exports.saveAs(r,"idux-starter.zip")},U=s=>W(`https://data.jsdelivr.com/v1/package/npm/${s}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,j=(s,e,t="")=>{const n=e?`@${e}`:"";return`https://unpkg.com/${s}${n}${t}`},Ee=()=>{const s=U("vue");return N(()=>{var e;return(e=s.value)==null?void 0:e.filter(t=>O(t,"3.2.9",">="))})},Se=()=>{const s=U("@idux/components");return N(()=>{var e;return(e=s.value)==null?void 0:e.filter(t=>O(t,"1.0.0-beta.8",">="))})},Ne={class:"flex justify-between p-2"},Oe=w("h1",{class:"text-base"}," iDux Playground ",-1),Ve=E(" Download "),Pe=E(" Share "),Ae=E(" GitHub "),Le=V({props:{store:null},setup(s){const e=s,{success:t,warning:n}=Q(),i=async()=>{if(!navigator.clipboard){n("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),t("Current URL has been copied to clipboard.")},o=P({Vue:{name:"Vue",vers:Ee(),activeVer:e.store.versions.Vue,isLoading:!1},iDux:{name:"iDux",vers:Se(),activeVer:e.store.versions.iDux,isLoading:!1}}),r=async(a,l)=>{o[a].isLoading=!0,await e.store.setVersion(a,l),o[a].isLoading=!1};return(a,l)=>{const T=ee,z=te,B=ne,H=M,k=se,G=ie,X=oe;return v(),D("div",Ne,[Oe,p(X,{layout:"inline"},{default:c(()=>[(v(!0),D(A,null,L(x(o),u=>(v(),_(H,{key:u.name,spinning:u.isLoading},{default:c(()=>[p(B,{label:u.name},{default:c(()=>[p(z,{value:u.activeVer,"onUpdate:value":[f=>u.activeVer=f,f=>r(u.name,f)],class:"min-w-32",searchable:!0},{default:c(()=>[(v(!0),D(A,null,L(u.vers,f=>(v(),_(T,{key:f,label:f,value:f},null,8,["label","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["label"])]),_:2},1032,["spinning"]))),128)),p(G,null,{default:c(()=>[p(k,{onClick:l[0]||(l[0]=u=>x(we)(s.store))},{default:c(()=>[Ve]),_:1}),p(k,{onClick:i},{default:c(()=>[Pe]),_:1}),p(k,{mode:"link",href:"https://github.com/IDuxFE/idux-playground",target:"_blank",rel:"noopener noreferrer"},{default:c(()=>[Ae]),_:1})]),_:1})]),_:1})])}}}),Me=s=>{const{Vue:e,iDux:t}=s;return{"@idux/cdk":{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"},"@idux/cdk/":{pkg:"@idux/cdk",version:t,file:"/"},"@idux/components":{pkg:"@idux/components",version:t,file:"/index.full.min.mjs"},"@idux/components/":{pkg:"@idux/components",version:t,file:"/"},"@idux/pro":{pkg:"@idux/pro",version:t,file:"/index.full.min.mjs"},"@idux/pro/":{pkg:"@idux/pro",version:t,file:"/"},vue:{pkg:"vue",version:e,file:"/dist/vue.esm-browser.js"},"lodash-es":{pkg:"lodash-es",version:"latest",file:"/lodash.js"},"vue-types":{pkg:"vue-types",version:"latest",file:"/dist/vue-types.m.js"},"@vue/shared":{pkg:"@vue/shared",version:"latest",file:"/dist/shared.esm-bundler.js"},"@juggle/resize-observer":{pkg:"@juggle/resize-observer",version:"latest",file:"/lib/exports/resize-observer.js"},"is-plain-object":{pkg:"is-plain-object",version:"latest",file:"/dist/is-plain-object.mjs"},"@popperjs/core":{pkg:"@popperjs/core",version:"latest",file:"/lib/index.js"},"date-fns":{pkg:"date-fns",version:"latest",file:"/esm/index.js"},"date-fns/":{pkg:"date-fns",version:"latest",file:"/esm/"}}},b="setupIdux.js",h="App.vue",g="PlaygroundApp.vue";var $e=`<template>
  <IxDrawerProvider>
    <IxNotificationProvider>
      <IxModalProvider>
        <IxMessageProvider>
          <App />
        </IxMessageProvider>
      </IxModalProvider>
    </IxNotificationProvider>
  </IxDrawerProvider>
</template>

<script lang="ts" setup>
import { setupIdux } from './setupIdux.js'
import App from './App.vue'
setupIdux()
<\/script>
`,J=`<template>
  <div style="padding: 24px">
    <IxButton @click="onOpen">Open modal</IxButton>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '@idux/components'

const { open } = useModal()
const onOpen = () => open({ header: 'Hello @idux', content: 'This is playground app' })
<\/script>
`,Fe=`import { getCurrentInstance } from 'vue'
import IduxCdk from '@idux/cdk'
import IduxComponents, {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
  createGlobalConfig,
} from '@idux/components'

addIconDefinitions(IDUX_ICON_DEPENDENCIES)

const loadIconDynamically = (iconName) => {
  return fetch(\`https://idux-cdn.sangfor.com.cn/icons/\${iconName}.svg\`)
    .then((res) => res.text())
}

const globalConfig = createGlobalConfig({
  icon: { loadIconDynamically },
})

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents).use(globalConfig)
}

const loadCss = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '#STYLE_HREF#'
  document.body.appendChild(link)
}

export const setupIdux = () => {
  const instance = getCurrentInstance()
  instance?.appContext.app.use({ install })
  loadCss()
}
`;const Re=(s="")=>{let e={[g]:new m(g,$e,!0),[h]:new m(h,J)};if(s)try{e={};const t=JSON.parse(ge(s));for(const n of Object.keys(t)){const i=n===g;e[n]=new m(n,t[n],i)}}catch(t){console.log(t)}return e},Ue=s=>{const e=j("@vue/compiler-sfc",s,"/dist/compiler-sfc.esm-browser.js"),t=j("@vue/runtime-dom",s,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},Je=s=>{const e=I({},Me(s));return Object.fromEntries(Object.entries(e).map(([t,n])=>[t,j(n.pkg,n.version,n.file)]))};class Te{constructor({serializedState:e="",versions:t={Vue:"latest",iDux:"latest"}}){d(this,"state");d(this,"compiler",re);d(this,"options");d(this,"versions");d(this,"initialShowOutput",!1);d(this,"initialOutputMode","preview");d(this,"pendingCompiler",null);const n=Re(e),i=n[g]?g:Object.keys(n)[0];this.state=P({mainFile:i,files:n,activeFile:n[h],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new m("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){try{this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}catch(t){this.state.errors=[`stringify error in import-map.json: ${t.message}`]}}addDeps(){const e=this.getImportMap();e.imports=I(I({},e.imports),Je(this.versions)),this.setImportMap(e)}async setVersion(e,t){switch(e){case"iDux":await this.setIduxVersion(t),y(this,this.state.files[b]);break;case"Vue":await this.setVueVersion(t);break}}async setIduxVersion(e){this.versions.iDux=e;const t=j("@idux/components",e,"/default.min.css");this.state.files[b]=new m(b,Fe.replace("#STYLE_HREF#",t),!0),this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:n}=Ue(e);this.pendingCompiler=R(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=n,this.versions.Vue=e,this.addDeps()}async initStore(){await this.setVueVersion(this.versions.Vue),await this.setIduxVersion(this.versions.iDux),$(()=>y(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==h&&y(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new m(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[h]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=h){const n={};t===h&&!e[t]&&(n[t]=new m(t,J));for(const[i,o]of Object.entries(e))n[i]=new m(i,o);for(const i of Object.values(n))await y(this,i);this.state.mainFile=t,this.state.files=n,this.initImportMap(),this.setActive(t)}serialize(){const e=Object.entries(this.getFiles()).filter(([n])=>n!==b).map(([n,i])=>{if(n==="import-map.json")try{const o=JSON.stringify(this.getImportMap(),null,2);return[n,o]}catch{}return[n,i]}),t=JSON.stringify(Object.fromEntries(e));return`#${xe(t)}`}}var ze=(s,e)=>{const t=s.__vccOpts||s;for(const[n,i]of e)t[n]=i;return t};const Be=s=>(ue("data-v-e2dcf550"),s=s(),de(),s),He=Be(()=>w("div",{class:"ixp-height-full"},null,-1)),Ge={class:"flex flex-col ixp-height-full"},Xe=V({setup(s){const e=ae(!0),t=new Te({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e.value=!1}),$(()=>history.replaceState({},"",t.serialize())),(n,i)=>{const o=M,r=Le,a=le;return v(),_(a,null,{default:c(()=>[e.value?(v(),_(o,{key:0,tip:"loading..."},{default:c(()=>[He]),_:1})):ce("",!0),w("div",Ge,[p(r,{store:x(t)},null,8,["store"]),p(x(pe),{class:"grow","auto-resize":"","show-compile-output":"",store:x(t),"clear-console":!1},null,8,["store"])])]),_:1})}}});var qe=ze(Xe,[["__scopeId","data-v-e2dcf550"]]);me(fe);ve(qe).mount("#app");
