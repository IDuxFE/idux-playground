var q=Object.defineProperty,H=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var y=(n,e,t)=>e in n?q(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,x=(n,e)=>{for(var t in e||(e={}))Z.call(e,t)&&y(n,t,e[t]);if(D)for(var t of D(e))K.call(e,t)&&y(n,t,e[t]);return n},V=(n,e)=>H(n,X(e));var p=(n,e,t)=>(y(n,typeof e!="symbol"?e+"":e,t),t);import{F as W,u as Y,c as O,a as A,d as F,b as Q,r as N,I as ee,e as te,f as se,g as ne,o as f,h as b,i as d,w as c,j as R,k as L,l as g,m as k,n as I,p as _,t as ie,q as $,s as oe,v,x as P,y as C,z as re,A as ae,B as ue,R as ce,C as le,D as pe,E as de,G as me,H as fe}from"./vendor.8b989139.js";const ve=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};ve();const he=n=>btoa(unescape(encodeURIComponent(n))),xe=n=>decodeURIComponent(escape(atob(n))),ge="modulepreload",M={},Ie="./",B=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${Ie}${s}`,s in M)return;M[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":ge,i||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),i)return new Promise((a,u)=>{r.addEventListener("load",a),r.addEventListener("error",u)})})).then(()=>e())};var _e=`<!DOCTYPE html>
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

import App from './App.vue'

createApp(App).use(Idux).mount('#app')
`,ye=`
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
`,be=`{
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
`,ke=`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
`,Ce=`# Idux Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

\`\`\`sh
pnpm i
pnpm run dev
\`\`\`
`;const Ee=async n=>{const e=["setupIdux.js","import-map.json"],{default:t}=await B(()=>import("./jszip.min.f577b097.js").then(function(a){return a.j}),["assets/jszip.min.f577b097.js","assets/vendor.8b989139.js"]),s=new t;s.file("index.html",_e),s.file("package.json",be),s.file("vite.config.js",ke),s.file("README.md",Ce);const i=s.folder("src");i==null||i.file("main.js",je),i==null||i.file("idux.js",ye);const o=n.getFiles();for(const a in o){if(e.includes(a))continue;let u=o[a];a==="App.vue"&&(u=u.replace(`import { setupIdux } from './setupIdux.js'
`,"").replace(`setupIdux() // don't remove
`,"")),i==null||i.file(a,u)}const r=await s.generateAsync({type:"blob"});W.exports.saveAs(r,"idux-starter.zip")},U=n=>Y(`https://data.jsdelivr.com/v1/package/npm/${n}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,E=(n,e,t="")=>{const s=e?`@${e}`:"";return`https://unpkg.com/${n}${s}${t}`},Se=()=>{const n=U("vue");return O(()=>{var e;return(e=n.value)==null?void 0:e.filter(t=>A(t,"3.2.0",">="))})},we=()=>{const n=U("@idux/components");return O(()=>{var e;return(e=n.value)==null?void 0:e.filter(t=>A(t,"1.0.0-beta.8",">="))})},De={class:"flex justify-between p-2"},Ve=k("h1",{class:"text-base"}," Idux Playground ",-1),Oe=I(" Download "),Ae=I(" Share "),Fe=I(" GitHub "),Ne=F({props:{store:null},setup(n){const e=n,{success:t,warning:s}=Q(),i=async()=>{if(!navigator.clipboard){s("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),t("Current URL has been copied to clipboard.")},o=N({Vue:{name:"Vue",vers:Se(),activeVer:e.store.versions.Vue,isLoading:!1},iDux:{name:"iDux",vers:we(),activeVer:e.store.versions.iDux,isLoading:!1}}),r=async(a,u)=>{o[a].isLoading=!0,await e.store.setVersion(a,u),o[a].isLoading=!1};return(a,u)=>{const z=ee,T=te,w=se,G=$,j=ne;return f(),b("div",De,[Ve,d(w,null,{default:c(()=>[(f(!0),b(R,null,L(g(o),l=>(f(),_(G,{key:l.name,spinning:l.isLoading},{default:c(()=>[d(w,null,{default:c(()=>[I(ie(l.name)+": ",1),d(T,{value:l.activeVer,"onUpdate:value":[m=>l.activeVer=m,m=>r(l.name,m)],class:"min-w-32",searchable:!0},{default:c(()=>[(f(!0),b(R,null,L(l.vers,m=>(f(),_(z,{key:m,label:m,value:m},null,8,["label","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024)]),_:2},1032,["spinning"]))),128)),d(j,{onClick:u[0]||(u[0]=l=>g(Ee)(n.store))},{default:c(()=>[Oe]),_:1}),d(j,{onClick:i},{default:c(()=>[Ae]),_:1}),d(j,{mode:"link",href:"https://github.com/IDuxFE/idux-playground",target:"_blank",rel:"noopener noreferrer"},{default:c(()=>[Fe]),_:1})]),_:1})])}}}),S="setupIdux.js",Re=`
import { getCurrentInstance } from 'vue'
import IduxComponents from '@idux/components'
import IduxCdk from '@idux/cdk'

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents)
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
`,h="App.vue",J=`<template>
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
<\/script>`,Le=["click-outside","portal","scroll","a11y","breakpoint","forms","platform","popper","utils"],$e=n=>{const{Vue:e,iDux:t}=n,s=Object.fromEntries(Le.map(i=>[`@idux/cdk/${i}`,{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"}]));return V(x({},s),{"@idux/components":{pkg:"@idux/components",version:t,file:"/index.full.min.mjs"},"@idux/cdk":{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"},vue:{pkg:"vue",version:e,file:"/dist/vue.esm-browser.js"},"lodash-es":{pkg:"lodash-es",version:"latest",file:"/lodash.js"},"vue-types":{pkg:"vue-types",version:"latest",file:"/dist/vue-types.m.js"},"@vue/shared":{pkg:"@vue/shared",version:"latest",file:"/dist/shared.esm-bundler.js"},"@juggle/resize-observer":{pkg:"@juggle/resize-observer",version:"latest",file:"/lib/exports/resize-observer.js"},"is-plain-object":{pkg:"is-plain-object",version:"latest",file:"/dist/is-plain-object.mjs"},"@popperjs/core":{pkg:"@popperjs/core",version:"latest",file:"/lib/index.js"}})},Pe=(n="")=>{let e={[h]:new v(h,J)};if(n)try{e={};const t=JSON.parse(xe(n));for(const s of Object.keys(t))e[s]=new v(s,t[s])}catch(t){console.log(t)}return e},Me=n=>{const e=E("@vue/compiler-sfc",n,"/dist/compiler-sfc.esm-browser.js"),t=E("@vue/runtime-dom",n,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},Be=n=>{const e=x({},$e(n));return Object.fromEntries(Object.entries(e).map(([t,s])=>[t,E(s.pkg,s.version,s.file)]))};class Ue{constructor({serializedState:e="",versions:t={Vue:"latest",iDux:"latest"}}){p(this,"state");p(this,"compiler",oe);p(this,"options");p(this,"versions");p(this,"initialShowOutput",!1);p(this,"initialOutputMode","preview");p(this,"pendingCompiler",null);const s=Pe(e),i=s[h]?h:Object.keys(s)[0];this.state=N({mainFile:i,files:s,activeFile:s[i],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new v("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){try{this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}catch(t){this.state.errors=[`stringify error in import-map.json: ${t.message}`]}}addDeps(){const e=this.getImportMap();e.imports=x(x({},e.imports),Be(this.versions)),this.setImportMap(e)}async setVersion(e,t){switch(e){case"iDux":await this.setIduxVersion(t);break;case"Vue":await this.setVueVersion(t);break}}async setIduxVersion(e){this.versions.iDux=e,this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:s}=Me(e);this.pendingCompiler=B(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=s,this.versions.Vue=e,this.addDeps()}async initStore(){await this.setVueVersion(this.versions.Vue),this.state.files[S]=new v(S,Re,!0),P(()=>C(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==h&&C(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new v(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[this.state.mainFile]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=h){const s={};t===h&&!e[t]&&(s[t]=new v(t,J));for(const[i,o]of Object.entries(e))s[i]=new v(i,o);for(const i of Object.values(s))await C(this,i);this.state.mainFile=t,this.state.files=s,this.initImportMap(),this.setActive(t)}serialize(){const e=Object.entries(this.getFiles()).filter(([s])=>s!==S).map(([s,i])=>{if(s==="import-map.json")try{const o=JSON.stringify(this.getImportMap(),null,2);return[s,o]}catch{}return[s,i]}),t=JSON.stringify(Object.fromEntries(e));return`#${he(t)}`}}var Je=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t};const ze=n=>(le("data-v-e2dcf550"),n=n(),pe(),n),Te=ze(()=>k("div",{class:"ixp-height-full"},null,-1)),Ge={class:"flex flex-col ixp-height-full"},qe=F({setup(n){const e=re(!0),t=new Ue({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e.value=!1}),P(()=>history.replaceState({},"",t.serialize())),(s,i)=>{const o=$,r=Ne,a=ae;return f(),_(a,null,{default:c(()=>[e.value?(f(),_(o,{key:0,tip:"loading..."},{default:c(()=>[Te]),_:1})):ue("",!0),k("div",Ge,[d(r,{store:g(t)},null,8,["store"]),d(g(ce),{class:"grow","auto-resize":"","show-compile-output":"",store:g(t),"clear-console":!1},null,8,["store"])])]),_:1})}}});var He=Je(qe,[["__scopeId","data-v-e2dcf550"]]);de(me);fe(He).mount("#app");
