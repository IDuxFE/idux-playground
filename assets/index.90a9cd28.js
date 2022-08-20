var q=Object.defineProperty,K=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var j=(s,e,t)=>e in s?q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,u=(s,e)=>{for(var t in e||(e={}))W.call(e,t)&&j(s,t,e[t]);if(w)for(var t of w(e))Q.call(e,t)&&j(s,t,e[t]);return s},L=(s,e)=>K(s,Z(e));var m=(s,e,t)=>(j(s,typeof e!="symbol"?e+"":e,t),t);import{F as ee,u as te,c as O,a as N,d as V,b as ne,r as P,I as se,e as oe,f as ie,g as re,h as ae,i as ce,o as h,j as D,k as p,w as l,l as A,m as M,n as g,p as E,q as S,s as k,t as F,v as le,x as f,y,z as R,A as pe,B as de,C as ue,R as me,D as fe,E as ve,G as he,H as xe,J as ge}from"./vendor.fa12a857.js";const Ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};Ie();const _e=s=>btoa(unescape(encodeURIComponent(s))),ke=s=>decodeURIComponent(escape(atob(s))),ye="modulepreload",$={},Ce="./",U=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Ce}${n}`,n in $)return;$[n]=!0;const o=n.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":ye,o||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),o)return new Promise((a,c)=>{r.addEventListener("load",a),r.addEventListener("error",c)})})).then(()=>e())};var be=`<!DOCTYPE html>
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
`,De=`
// \u5BFC\u5165 cdk \u6837\u5F0F\uFF0C\u6CE8\u610F\u662F \`index\`, \u56E0\u4E3A cdk \u4E0D\u4F1A\u533A\u5206\u4E3B\u9898
import '@idux/cdk/index.css'

// \u5982\u679C\u4E0D\u9700\u8981 reset \u5168\u5C40\u6837\u5F0F\u548C\u6EDA\u52A8\u6761\u6837\u5F0F\uFF0C\u79FB\u9664\u4E0B\u9762 2 \u884C\u4EE3\u7801
import '@idux/components/style/core/reset.default.css'
import '@idux/components/style/core/reset-scroll.default.css'

// \u5982\u679C\u9700\u8981 css \u6309\u9700\u52A0\u8F7D\uFF0C\u79FB\u9664\u4E0B\u9762 2 \u884C\u4EE3\u7801
import '@idux/components/default.css'
import '@idux/pro/default.css'

import IduxCdk from '@idux/cdk'
import IduxComponents from '@idux/components'
import IduxPro from '@idux/pro'

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
`,Se=`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
`,we=`# Idux Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

\`\`\`sh
pnpm i
pnpm run dev
\`\`\`
`;const Le=async s=>{const e=["setupIdux.js","import-map.json"],{default:t}=await U(()=>import("./jszip.min.cc1d9120.js").then(function(a){return a.j}),["assets/jszip.min.cc1d9120.js","assets/vendor.fa12a857.js"]),n=new t;n.file("index.html",be),n.file("package.json",Ee),n.file("vite.config.js",Se),n.file("README.md",we);const o=n.folder("src");o==null||o.file("main.js",je),o==null||o.file("idux.js",De);const i=s.getFiles();for(const a in i){if(e.includes(a))continue;let c=i[a];a==="PlaygroundApp.vue"&&(c=c.replace(`import { setupIdux } from './setupIdux.js'
`,"").replace("setupIdux()","")),o==null||o.file(a,c)}const r=await n.generateAsync({type:"blob"});ee.exports.saveAs(r,"idux-starter.zip")},T=s=>te(`https://data.jsdelivr.com/v1/package/npm/${s}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,I=(s,e,t="")=>{const n=e?`@${e}`:"";return`https://unpkg.com/${s}${n}${t}`},Oe=()=>{const s=T("vue");return O(()=>{var e;return(e=s.value)==null?void 0:e.filter(t=>N(t,"3.2.9",">="))})},Ne=()=>{const s=T("@idux/components");return O(()=>{var e;return(e=s.value)==null?void 0:e.filter(t=>N(t,"1.0.0-beta.8",">="))})},Ve={class:"flex justify-between p-2"},Pe=E("h1",{class:"text-base"}," iDux Playground ",-1),Ae=S(" Download "),Me=S(" Share "),Fe=S(" GitHub "),Re=V({props:{store:null},setup(s){const e=s,{success:t,warning:n}=ne(),o=async()=>{if(!navigator.clipboard){n("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),t("Current URL has been copied to clipboard.")},i=P({Vue:{name:"Vue",vers:Oe(),activeVer:e.store.versions.Vue,isLoading:!1},iDux:{name:"iDux",vers:Ne(),activeVer:e.store.versions.iDux,isLoading:!1}}),r=async(a,c)=>{i[a].isLoading=!0,await e.store.setVersion(a,c),i[a].isLoading=!1};return(a,c)=>{const J=se,z=oe,B=ie,G=F,b=re,X=ae,Y=ce;return h(),D("div",Ve,[Pe,p(Y,{layout:"inline"},{default:l(()=>[(h(!0),D(A,null,M(g(i),d=>(h(),k(G,{key:d.name,spinning:d.isLoading},{default:l(()=>[p(B,{label:d.name},{default:l(()=>[p(z,{value:d.activeVer,"onUpdate:value":[v=>d.activeVer=v,v=>r(d.name,v)],class:"min-w-32",searchable:!0},{default:l(()=>[(h(!0),D(A,null,M(d.vers,v=>(h(),k(J,{key:v,label:v,value:v},null,8,["label","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["label"])]),_:2},1032,["spinning"]))),128)),p(X,null,{default:l(()=>[p(b,{onClick:c[0]||(c[0]=d=>g(Le)(s.store))},{default:l(()=>[Ae]),_:1}),p(b,{onClick:o},{default:l(()=>[Me]),_:1}),p(b,{mode:"link",href:"https://github.com/IDuxFE/idux-playground",target:"_blank",rel:"noopener noreferrer"},{default:l(()=>[Fe]),_:1})]),_:1})]),_:1})])}}}),$e=["click-outside","portal","scroll","a11y","breakpoint","forms","platform","popper","utils","resize"],Ue=s=>{const{Vue:e,iDux:t}=s,n=Object.fromEntries($e.map(o=>[`@idux/cdk/${o}`,{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"}]));return L(u({"@idux/cdk":{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"}},n),{"@idux/cdk/":{pkg:"@idux/cdk",version:t,file:"/"},"@idux/components":{pkg:"@idux/components",version:t,file:"/index.full.min.mjs"},"@idux/components/":{pkg:"@idux/components",version:t,file:"/"},"@idux/pro":{pkg:"@idux/pro",version:t,file:"/index.full.min.mjs"},"@idux/pro/":{pkg:"@idux/pro",version:t,file:"/"},vue:{pkg:"@vue/runtime-dom",version:e,file:"/dist/runtime-dom.esm-browser.js"},"vue-types":{pkg:"vue-types",version:"latest",file:"/dist/vue-types.m.js"},"@vue/shared":{pkg:"@vue/shared",version:"latest",file:"/dist/shared.esm-bundler.js"},"@juggle/resize-observer":{pkg:"@juggle/resize-observer",version:"latest",file:"/lib/exports/resize-observer.js"},"is-plain-object":{pkg:"is-plain-object",version:"latest",file:"/dist/is-plain-object.mjs"},"date-fns":{pkg:"date-fns",version:"latest",file:"/esm/index.js"},"date-fns/":{pkg:"date-fns",version:"latest",file:"/esm/"}})},Te=()=>({"lodash-es":{pkg:"lodash-es",version:"latest",file:"./lodash-es.js"},"@popperjs/core":{pkg:"@popperjs/core",version:"latest",file:"./popper.js"}}),C="setupIdux.js",x="App.vue",_="PlaygroundApp.vue";var He=`<template>
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
`,H=`<template>
  <div style="padding: 24px">
    <IxButton @click="onOpen">Open modal</IxButton>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '@idux/components'

const { open } = useModal()
const onOpen = () => open({ header: 'Hello @idux', content: 'This is playground app' })
<\/script>
`,Je=`import { getCurrentInstance } from 'vue'
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

const targetConfig = {
  target: document.body,
}

const globalConfig = createGlobalConfig({
  icon: { loadIconDynamically },
  modal: targetConfig,
  drawer: targetConfig,
  message: targetConfig,
  notification: targetConfig,
  imageViewer: targetConfig,
})

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents).use(globalConfig)
}

const loadResetCss = () => {
  const resetLink = document.createElement('link')
  resetLink.rel = 'stylesheet'
  resetLink.href = './reset.default.css'
  document.body.appendChild(resetLink)

  const resetScrollLink = document.createElement('link')
  resetScrollLink.rel = 'stylesheet'
  resetScrollLink.href = './reset-scroll.default.css'
  document.body.appendChild(resetScrollLink)
}

const loadCss = () => {
  const cdkLink = document.createElement('link')
  cdkLink.rel = 'stylesheet'
  cdkLink.href = '#CDK_STYLE_HREF#'
  document.body.appendChild(cdkLink)

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '#STYLE_HREF#'
  document.body.appendChild(link)
}

export const setupIdux = () => {
  const instance = getCurrentInstance()
  instance?.appContext.app.use({ install })
  loadResetCss()
  loadCss()
}
`;const ze=(s="")=>{let e={[_]:new f(_,He,!0),[x]:new f(x,H)};if(s)try{e={};const t=JSON.parse(ke(s));for(const n of Object.keys(t)){const o=n===_;e[n]=new f(n,t[n],o)}}catch(t){console.log(t)}return e},Be=s=>{const e=I("@vue/compiler-sfc",s,"/dist/compiler-sfc.esm-browser.js"),t=I("@vue/runtime-dom",s,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},Ge=s=>{const e=u({},Ue(s));return u(u({},Object.fromEntries(Object.entries(e).map(([t,n])=>[t,I(n.pkg,n.version,n.file)]))),Object.fromEntries(Object.entries(u({},Te())).map(([t,n])=>[t,n.file])))};class Xe{constructor({serializedState:e="",versions:t={Vue:"latest",iDux:"latest"}}){m(this,"state");m(this,"compiler",le);m(this,"options");m(this,"versions");m(this,"initialShowOutput",!1);m(this,"initialOutputMode","preview");m(this,"pendingCompiler",null);const n=ze(e),o=n[_]?_:Object.keys(n)[0];this.state=P({mainFile:o,files:n,activeFile:n[x],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new f("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){try{this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}catch(t){this.state.errors=[`stringify error in import-map.json: ${t.message}`]}}addDeps(){const e=this.getImportMap();e.imports=u(u({},e.imports),Ge(this.versions)),this.setImportMap(e)}async setVersion(e,t){switch(e){case"iDux":await this.setIduxVersion(t),y(this,this.state.files[C]);break;case"Vue":await this.setVueVersion(t);break}}async setIduxVersion(e){this.versions.iDux=e;const t=I("@idux/components",e,"/default.min.css"),n=I("@idux/cdk",e,"/index.min.css");this.state.files[C]=new f(C,Je.replace("#STYLE_HREF#",t).replace("#CDK_STYLE_HREF#",n),!0),this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:n}=Be(e);this.pendingCompiler=U(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=n,this.versions.Vue=e,this.addDeps()}async initStore(){await this.setVueVersion(this.versions.Vue),await this.setIduxVersion(this.versions.iDux),R(()=>y(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==x&&y(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new f(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[x]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=x){const n={};t===x&&!e[t]&&(n[t]=new f(t,H));for(const[o,i]of Object.entries(e))n[o]=new f(o,i);for(const o of Object.values(n))await y(this,o);this.state.mainFile=t,this.state.files=n,this.initImportMap(),this.setActive(t)}serialize(){const e=Object.entries(this.getFiles()).filter(([n])=>n!==C&&n!=="import-map.json").map(([n,o])=>{if(n==="import-map.json")try{const i=JSON.stringify(this.getImportMap(),null,2);return[n,i]}catch{}return[n,o]}),t=JSON.stringify(Object.fromEntries(e));return`#${_e(t)}`}}var Ye=(s,e)=>{const t=s.__vccOpts||s;for(const[n,o]of e)t[n]=o;return t};const qe=s=>(fe("data-v-e2dcf550"),s=s(),ve(),s),Ke=qe(()=>E("div",{class:"ixp-height-full"},null,-1)),Ze={class:"flex flex-col ixp-height-full"},We=V({setup(s){const e=pe(!0),t=new Xe({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e.value=!1}),R(()=>history.replaceState({},"",t.serialize())),(n,o)=>{const i=F,r=Re,a=de;return h(),k(a,null,{default:l(()=>[e.value?(h(),k(i,{key:0,tip:"loading..."},{default:l(()=>[Ke]),_:1})):ue("",!0),E("div",Ze,[p(r,{store:g(t)},null,8,["store"]),p(g(me),{class:"grow","auto-resize":"","show-compile-output":"",store:g(t),"clear-console":!1},null,8,["store"])])]),_:1})}}});var Qe=Ye(We,[["__scopeId","data-v-e2dcf550"]]);he(xe);ge(Qe).mount("#app");
