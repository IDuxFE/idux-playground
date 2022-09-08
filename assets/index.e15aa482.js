var q=Object.defineProperty,K=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var b=(s,e,t)=>e in s?q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,p=(s,e)=>{for(var t in e||(e={}))Z.call(e,t)&&b(s,t,e[t]);if(L)for(var t of L(e))Q.call(e,t)&&b(s,t,e[t]);return s},D=(s,e)=>K(s,W(e));var m=(s,e,t)=>(b(s,typeof e!="symbol"?e+"":e,t),t);import{F as ee,u as te,c as O,a as N,d as V,b as ne,r as P,o as h,e as E,f as d,w as l,g as A,h as M,i as g,j as S,k as w,I as se,l as oe,m as ie,n as k,p as re,q as ae,s as ce,t as $,v as le,x as pe,y as f,z as y,A as F,B as de,C as ue,D as me,R as fe,E as ve,G as he,H as xe,J as ge,K as Ie}from"./vendor.6f9b8683.js";const _e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};_e();const ke=s=>btoa(unescape(encodeURIComponent(s))),ye=s=>decodeURIComponent(escape(atob(s))),je="modulepreload",R={},Ce="./",U=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Ce}${n}`,n in R)return;R[n]=!0;const o=n.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":je,o||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),o)return new Promise((a,c)=>{r.addEventListener("load",a),r.addEventListener("error",c)})})).then(()=>e())};var be=`<!DOCTYPE html>
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
`,De=`import { createApp } from 'vue'
import Idux from './idux.js'

import App from './PlaygroundApp.vue'

createApp(App).use(Idux).mount('#app')
`,Ee=`
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
`,Se=`{
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
`,Le=`# Idux Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

\`\`\`sh
pnpm i
pnpm run dev
\`\`\`
`;const Oe=async s=>{const e=["setupIdux.js","import-map.json"],{default:t}=await U(()=>import("./jszip.min.b1d1a706.js").then(function(a){return a.j}),["assets/jszip.min.b1d1a706.js","assets/vendor.6f9b8683.js"]),n=new t;n.file("index.html",be),n.file("package.json",Se),n.file("vite.config.js",we),n.file("README.md",Le);const o=n.folder("src");o==null||o.file("main.js",De),o==null||o.file("idux.js",Ee);const i=s.getFiles();for(const a in i){if(e.includes(a))continue;let c=i[a];a==="PlaygroundApp.vue"&&(c=c.replace(`import { setupIdux } from './setupIdux.js'
`,"").replace("setupIdux()","")),o==null||o.file(a,c)}const r=await n.generateAsync({type:"blob"});ee.exports.saveAs(r,"idux-starter.zip")},z=s=>te(`https://data.jsdelivr.com/v1/package/npm/${s}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,I=(s,e,t="")=>{const n=e?`@${e}`:"";return`https://unpkg.com/${s}${n}${t}`},Ne=()=>{const s=z("vue");return O(()=>{var e;return(e=s.value)==null?void 0:e.filter(t=>N(t,"3.2.9",">="))})},Ve=()=>{const s=z("@idux/components");return O(()=>{var e;return(e=s.value)==null?void 0:e.filter(t=>N(t,"1.0.0-beta.8",">="))})};const Pe={class:"flex justify-between p-2"},Ae=S("h1",{class:"text-base"}," iDux Playground ",-1),Me=w(" Download "),$e=w(" Share "),Fe=w(" GitHub "),Re=V({props:{store:null},setup(s){const e=s,{success:t,warning:n}=ne(),o=async()=>{if(!navigator.clipboard){n("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),t("Current URL has been copied to clipboard.")},i=P({Vue:{name:"Vue",vers:Ne(),activeVer:e.store.versions.Vue,isLoading:!1},iDux:{name:"iDux",vers:Ve(),activeVer:e.store.versions.iDux,isLoading:!1}}),r=async(a,c)=>{i[a].isLoading=!0,await e.store.setVersion(a,c),i[a].isLoading=!1};return(a,c)=>{const T=re,J=ae,B=ce,G=$,C=se,X=oe,Y=ie;return h(),E("div",Pe,[Ae,d(Y,{class:"playground-header-form",layout:"inline","message-tooltip":!0},{default:l(()=>[(h(!0),E(A,null,M(g(i),u=>(h(),k(G,{key:u.name,spinning:u.isLoading},{default:l(()=>[d(B,{label:u.name},{default:l(()=>[d(J,{value:u.activeVer,"onUpdate:value":[v=>u.activeVer=v,v=>r(u.name,v)],class:"min-w-32",searchable:!0},{default:l(()=>[(h(!0),E(A,null,M(u.vers,v=>(h(),k(T,{key:v,label:v,value:v},null,8,["label","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["label"])]),_:2},1032,["spinning"]))),128)),d(X,{size:"sm"},{default:l(()=>[d(C,{size:"sm",onClick:c[0]||(c[0]=u=>g(Oe)(s.store))},{default:l(()=>[Me]),_:1}),d(C,{size:"sm",onClick:o},{default:l(()=>[$e]),_:1}),d(C,{size:"sm",mode:"link",href:"https://github.com/IDuxFE/idux-playground",target:"_blank",rel:"noopener noreferrer"},{default:l(()=>[Fe]),_:1})]),_:1})]),_:1})])}}}),Ue=["click-outside","portal","scroll","a11y","breakpoint","forms","platform","popper","utils","resize"],ze=s=>{const{Vue:e,iDux:t}=s,n=Object.fromEntries(Ue.map(r=>[`@idux/cdk/${r}`,{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"}])),o=Object.keys(le).map(r=>r.toLowerCase()).filter(r=>r.startsWith("ix")),i=Object.fromEntries(o.map(r=>[`@idux/components/${r.slice(2)}`,{pkg:"@idux/components",version:t,file:"/index.full.min.mjs"}]));return D(p(D(p({vue:{pkg:"@vue/runtime-dom",version:e,file:"/dist/runtime-dom.esm-browser.js"},"vue-types":{pkg:"vue-types",version:"latest",file:"/dist/vue-types.m.js"},"@vue/shared":{pkg:"@vue/shared",version:"latest",file:"/dist/shared.esm-bundler.js"},"@juggle/resize-observer":{pkg:"@juggle/resize-observer",version:"latest",file:"/lib/exports/resize-observer.js"},"is-plain-object":{pkg:"is-plain-object",version:"latest",file:"/dist/is-plain-object.mjs"},"@idux/cdk":{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"}},n),{"@idux/cdk/":{pkg:"@idux/cdk",version:t,file:"/"},"@idux/components":{pkg:"@idux/components",version:t,file:"/index.full.min.mjs"}}),i),{"@idux/components/":{pkg:"@idux/components",version:t,file:"/"},"@idux/pro":{pkg:"@idux/pro",version:t,file:"/index.full.min.mjs"},"@idux/pro/":{pkg:"@idux/pro",version:t,file:"/"}})},He=()=>({"lodash-es":{pkg:"lodash-es",version:"latest",file:"./deps/lodash-es.js"},"@popperjs/core":{pkg:"@popperjs/core",version:"latest",file:"./deps/popper.js"},ajv:{pkg:"ajv",version:"latest",file:"./deps/ajv.js"},"ajv-formats":{pkg:"ajv-formats",version:"latest",file:"./deps/ajv-formats.js"},"date-fns":{pkg:"date-fns",version:"latest",file:"./deps/date-fns.js"},"date-fns/locale":{pkg:"date-fns",version:"latest",file:"./deps/date-fns.js"}}),j="setupIdux.js",x="App.vue",_="PlaygroundApp.vue";var Te=`<template>
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
import IduxPro from '@idux/pro'

addIconDefinitions(IDUX_ICON_DEPENDENCIES)

const loadIconDynamically = (iconName) => {
  return fetch(\`https://idux-cdn.sangfor.com.cn/icons/\${iconName}.svg\`)
    .then((res) => res.text())
}

// const targetConfig = {
//   target: document.body,
// }

const globalConfig = createGlobalConfig({
  icon: { loadIconDynamically },
  // modal: targetConfig,
  // drawer: targetConfig,
  // message: targetConfig,
  // notification: targetConfig,
  // imageViewer: targetConfig,
})

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents).use(IduxPro).use(globalConfig)
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
`;const Be=(s="")=>{const e={[_]:new f(_,Te,!0),[x]:new f(x,H)};if(s)try{const t=JSON.parse(ye(s));for(const n of Object.keys(t)){const o=n===_;e[n]=new f(n,t[n],o)}}catch(t){console.log(t)}return e},Ge=s=>{const e=I("@vue/compiler-sfc",s,"/dist/compiler-sfc.esm-browser.js"),t=I("@vue/runtime-dom",s,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},Xe=s=>{const e=p({},ze(s));return p(p({},Object.fromEntries(Object.entries(p({},He())).map(([t,n])=>[t,n.file]))),Object.fromEntries(Object.entries(e).map(([t,n])=>[t,I(n.pkg,n.version,n.file)])))};class Ye{constructor({serializedState:e="",versions:t={Vue:"latest",iDux:"latest"}}){m(this,"state");m(this,"compiler",pe);m(this,"options");m(this,"versions");m(this,"initialShowOutput",!1);m(this,"initialOutputMode","preview");m(this,"pendingCompiler",null);const n=Be(e),o=n[_]?_:Object.keys(n)[0];this.state=P({mainFile:o,files:n,activeFile:n[x],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new f("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){try{this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}catch(t){this.state.errors=[`stringify error in import-map.json: ${t.message}`]}}addDeps(){const e=this.getImportMap();e.imports=p(p({},e.imports),Xe(this.versions)),this.setImportMap(e)}async setVersion(e,t){switch(e){case"iDux":await this.setIduxVersion(t),y(this,this.state.files[j]);break;case"Vue":await this.setVueVersion(t);break}}async setIduxVersion(e){this.versions.iDux=e;const t=I("@idux/components",e,"/default.min.css"),n=I("@idux/cdk",e,"/index.min.css");this.state.files[j]=new f(j,Je.replace("#STYLE_HREF#",t).replace("#CDK_STYLE_HREF#",n),!0),this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:n}=Ge(e);this.pendingCompiler=U(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=n,this.versions.Vue=e,this.addDeps()}async initStore(){await this.setVueVersion(this.versions.Vue),await this.setIduxVersion(this.versions.iDux),F(()=>y(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==x&&y(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new f(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[x]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=x){const n={};t===x&&!e[t]&&(n[t]=new f(t,H));for(const[o,i]of Object.entries(e))n[o]=new f(o,i);for(const o of Object.values(n))await y(this,o);this.state.mainFile=t,this.state.files=n,this.initImportMap(),this.setActive(t)}serialize(){const e=Object.entries(this.getFiles()).filter(([n])=>n!==j&&n!=="import-map.json").map(([n,o])=>{if(n==="import-map.json")try{const i=JSON.stringify(this.getImportMap(),null,2);return[n,i]}catch{}return[n,o]}),t=JSON.stringify(Object.fromEntries(e));return`#${ke(t)}`}}var qe=(s,e)=>{const t=s.__vccOpts||s;for(const[n,o]of e)t[n]=o;return t};const Ke=s=>(ve("data-v-e2dcf550"),s=s(),he(),s),We=Ke(()=>S("div",{class:"ixp-height-full"},null,-1)),Ze={class:"flex flex-col ixp-height-full"},Qe=V({setup(s){const e=de(!0),t=new Ye({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e.value=!1}),F(()=>history.replaceState({},"",t.serialize())),(n,o)=>{const i=$,r=Re,a=ue;return h(),k(a,null,{default:l(()=>[e.value?(h(),k(i,{key:0,tip:"loading..."},{default:l(()=>[We]),_:1})):me("",!0),S("div",Ze,[d(r,{store:g(t)},null,8,["store"]),d(g(fe),{class:"grow","auto-resize":"","show-compile-output":"",store:g(t),"clear-console":!1},null,8,["store"])])]),_:1})}}});var et=qe(Qe,[["__scopeId","data-v-e2dcf550"]]);xe(ge);Ie(et).mount("#app");
