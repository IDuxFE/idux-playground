var Y=Object.defineProperty,Z=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var C=(s,e,t)=>e in s?Y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,d=(s,e)=>{for(var t in e||(e={}))W.call(e,t)&&C(s,t,e[t]);if(S)for(var t of S(e))Q.call(e,t)&&C(s,t,e[t]);return s},O=(s,e)=>Z(s,K(e));var m=(s,e,t)=>(C(s,typeof e!="symbol"?e+"":e,t),t);import{F as ee,u as te,c as N,a as V,d as P,b as ne,r as A,I as se,e as ie,f as oe,g as re,h as ae,i as ce,o as h,j as D,k as p,w as l,l as L,m as M,n as g,p as E,q as w,s as _,t as $,v as le,x as f,y,z as F,A as pe,B as ue,C as de,R as me,D as fe,E as ve,G as he,H as xe,J as ge}from"./vendor.fa12a857.js";const Ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};Ie();const _e=s=>btoa(unescape(encodeURIComponent(s))),ye=s=>decodeURIComponent(escape(atob(s))),je="modulepreload",R={},ke="./",U=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${ke}${n}`,n in R)return;R[n]=!0;const i=n.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":je,i||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),i)return new Promise((a,c)=>{r.addEventListener("load",a),r.addEventListener("error",c)})})).then(()=>e())};var be=`<!DOCTYPE html>
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
`,Ce=`import { createApp } from 'vue'
import Idux from './idux.js'

import App from './PlaygroundApp.vue'

createApp(App).use(Idux).mount('#app')
`,De=`
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
`,Ee=`{
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
`,we=`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
`,Se=`# Idux Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

\`\`\`sh
pnpm i
pnpm run dev
\`\`\`
`;const Oe=async s=>{const e=["setupIdux.js","import-map.json"],{default:t}=await U(()=>import("./jszip.min.cc1d9120.js").then(function(a){return a.j}),["assets/jszip.min.cc1d9120.js","assets/vendor.fa12a857.js"]),n=new t;n.file("index.html",be),n.file("package.json",Ee),n.file("vite.config.js",we),n.file("README.md",Se);const i=n.folder("src");i==null||i.file("main.js",Ce),i==null||i.file("idux.js",De);const o=s.getFiles();for(const a in o){if(e.includes(a))continue;let c=o[a];a==="PlaygroundApp.vue"&&(c=c.replace(`import { setupIdux } from './setupIdux.js'
`,"").replace("setupIdux()","")),i==null||i.file(a,c)}const r=await n.generateAsync({type:"blob"});ee.exports.saveAs(r,"idux-starter.zip")},J=s=>te(`https://data.jsdelivr.com/v1/package/npm/${s}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,j=(s,e,t="")=>{const n=e?`@${e}`:"";return`https://unpkg.com/${s}${n}${t}`},Ne=()=>{const s=J("vue");return N(()=>{var e;return(e=s.value)==null?void 0:e.filter(t=>V(t,"3.2.9",">="))})},Ve=()=>{const s=J("@idux/components");return N(()=>{var e;return(e=s.value)==null?void 0:e.filter(t=>V(t,"1.0.0-beta.8",">="))})},Pe={class:"flex justify-between p-2"},Ae=E("h1",{class:"text-base"}," iDux Playground ",-1),Le=w(" Download "),Me=w(" Share "),$e=w(" GitHub "),Fe=P({props:{store:null},setup(s){const e=s,{success:t,warning:n}=ne(),i=async()=>{if(!navigator.clipboard){n("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),t("Current URL has been copied to clipboard.")},o=A({Vue:{name:"Vue",vers:Ne(),activeVer:e.store.versions.Vue,isLoading:!1},iDux:{name:"iDux",vers:Ve(),activeVer:e.store.versions.iDux,isLoading:!1}}),r=async(a,c)=>{o[a].isLoading=!0,await e.store.setVersion(a,c),o[a].isLoading=!1};return(a,c)=>{const z=se,B=ie,H=oe,G=$,b=re,X=ae,q=ce;return h(),D("div",Pe,[Ae,p(q,{layout:"inline"},{default:l(()=>[(h(!0),D(L,null,M(g(o),u=>(h(),_(G,{key:u.name,spinning:u.isLoading},{default:l(()=>[p(H,{label:u.name},{default:l(()=>[p(B,{value:u.activeVer,"onUpdate:value":[v=>u.activeVer=v,v=>r(u.name,v)],class:"min-w-32",searchable:!0},{default:l(()=>[(h(!0),D(L,null,M(u.vers,v=>(h(),_(z,{key:v,label:v,value:v},null,8,["label","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["label"])]),_:2},1032,["spinning"]))),128)),p(X,null,{default:l(()=>[p(b,{onClick:c[0]||(c[0]=u=>g(Oe)(s.store))},{default:l(()=>[Le]),_:1}),p(b,{onClick:i},{default:l(()=>[Me]),_:1}),p(b,{mode:"link",href:"https://github.com/IDuxFE/idux-playground",target:"_blank",rel:"noopener noreferrer"},{default:l(()=>[$e]),_:1})]),_:1})]),_:1})])}}}),Re=["click-outside","portal","scroll","a11y","breakpoint","forms","platform","popper","utils","resize"],Ue=s=>{const{Vue:e,iDux:t}=s,n=Object.fromEntries(Re.map(i=>[`@idux/cdk/${i}`,{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"}]));return O(d({"@idux/cdk":{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"}},n),{"@idux/cdk/":{pkg:"@idux/cdk",version:t,file:"/"},"@idux/components":{pkg:"@idux/components",version:t,file:"/index.full.min.mjs"},"@idux/components/":{pkg:"@idux/components",version:t,file:"/"},"@idux/pro":{pkg:"@idux/pro",version:t,file:"/index.full.min.mjs"},"@idux/pro/":{pkg:"@idux/pro",version:t,file:"/"},vue:{pkg:"@vue/runtime-dom",version:e,file:"/dist/runtime-dom.esm-browser.js"},"vue-types":{pkg:"vue-types",version:"latest",file:"/dist/vue-types.m.js"},"@vue/shared":{pkg:"@vue/shared",version:"latest",file:"/dist/shared.esm-bundler.js"},"@juggle/resize-observer":{pkg:"@juggle/resize-observer",version:"latest",file:"/lib/exports/resize-observer.js"},"is-plain-object":{pkg:"is-plain-object",version:"latest",file:"/dist/is-plain-object.mjs"},"date-fns":{pkg:"date-fns",version:"latest",file:"/esm/index.js"},"date-fns/":{pkg:"date-fns",version:"latest",file:"/esm/"}})},Je=()=>({"lodash-es":{pkg:"lodash-es",version:"latest",file:"./lodash-es.js"},"@popperjs/core":{pkg:"@popperjs/core",version:"latest",file:"./popper.js"}}),k="setupIdux.js",x="App.vue",I="PlaygroundApp.vue";var Te=`<template>
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
`,T=`<template>
  <div style="padding: 24px">
    <IxButton @click="onOpen">Open modal</IxButton>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '@idux/components'

const { open } = useModal()
const onOpen = () => open({ header: 'Hello @idux', content: 'This is playground app' })
<\/script>
`,ze=`import { getCurrentInstance } from 'vue'
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
`;const Be=(s="")=>{let e={[I]:new f(I,Te,!0),[x]:new f(x,T)};if(s)try{e={};const t=JSON.parse(ye(s));for(const n of Object.keys(t)){const i=n===I;e[n]=new f(n,t[n],i)}}catch(t){console.log(t)}return e},He=s=>{const e=j("@vue/compiler-sfc",s,"/dist/compiler-sfc.esm-browser.js"),t=j("@vue/runtime-dom",s,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},Ge=s=>{const e=d({},Ue(s));return d(d({},Object.fromEntries(Object.entries(e).map(([t,n])=>[t,j(n.pkg,n.version,n.file)]))),Object.fromEntries(Object.entries(d({},Je())).map(([t,n])=>[t,n.file])))};class Xe{constructor({serializedState:e="",versions:t={Vue:"latest",iDux:"latest"}}){m(this,"state");m(this,"compiler",le);m(this,"options");m(this,"versions");m(this,"initialShowOutput",!1);m(this,"initialOutputMode","preview");m(this,"pendingCompiler",null);const n=Be(e),i=n[I]?I:Object.keys(n)[0];this.state=A({mainFile:i,files:n,activeFile:n[x],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new f("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){try{this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}catch(t){this.state.errors=[`stringify error in import-map.json: ${t.message}`]}}addDeps(){const e=this.getImportMap();e.imports=d(d({},e.imports),Ge(this.versions)),this.setImportMap(e)}async setVersion(e,t){switch(e){case"iDux":await this.setIduxVersion(t),y(this,this.state.files[k]);break;case"Vue":await this.setVueVersion(t);break}}async setIduxVersion(e){this.versions.iDux=e;const t=j("@idux/components",e,"/default.min.css");this.state.files[k]=new f(k,ze.replace("#STYLE_HREF#",t),!0),this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:n}=He(e);this.pendingCompiler=U(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=n,this.versions.Vue=e,this.addDeps()}async initStore(){await this.setVueVersion(this.versions.Vue),await this.setIduxVersion(this.versions.iDux),F(()=>y(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==x&&y(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new f(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[x]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=x){const n={};t===x&&!e[t]&&(n[t]=new f(t,T));for(const[i,o]of Object.entries(e))n[i]=new f(i,o);for(const i of Object.values(n))await y(this,i);this.state.mainFile=t,this.state.files=n,this.initImportMap(),this.setActive(t)}serialize(){const e=Object.entries(this.getFiles()).filter(([n])=>n!==k&&n!=="import-map.json").map(([n,i])=>{if(n==="import-map.json")try{const o=JSON.stringify(this.getImportMap(),null,2);return[n,o]}catch{}return[n,i]}),t=JSON.stringify(Object.fromEntries(e));return`#${_e(t)}`}}var qe=(s,e)=>{const t=s.__vccOpts||s;for(const[n,i]of e)t[n]=i;return t};const Ye=s=>(fe("data-v-e2dcf550"),s=s(),ve(),s),Ze=Ye(()=>E("div",{class:"ixp-height-full"},null,-1)),Ke={class:"flex flex-col ixp-height-full"},We=P({setup(s){const e=pe(!0),t=new Xe({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e.value=!1}),F(()=>history.replaceState({},"",t.serialize())),(n,i)=>{const o=$,r=Fe,a=ue;return h(),_(a,null,{default:l(()=>[e.value?(h(),_(o,{key:0,tip:"loading..."},{default:l(()=>[Ze]),_:1})):de("",!0),E("div",Ke,[p(r,{store:g(t)},null,8,["store"]),p(g(me),{class:"grow","auto-resize":"","show-compile-output":"",store:g(t),"clear-console":!1},null,8,["store"])])]),_:1})}}});var Qe=qe(We,[["__scopeId","data-v-e2dcf550"]]);he(xe);ge(Qe).mount("#app");
