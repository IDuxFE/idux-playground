var G=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var w=(s,e,t)=>e in s?G(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,x=(s,e)=>{for(var t in e||(e={}))Z.call(e,t)&&w(s,t,e[t]);if(V)for(var t of V(e))K.call(e,t)&&w(s,t,e[t]);return s},O=(s,e)=>X(s,Y(e));var u=(s,e,t)=>(w(s,typeof e!="symbol"?e+"":e,t),t);import{F as W,u as Q,c as N,a as A,d as L,b as ee,r as P,I as te,e as ne,f as se,g as ie,o as v,h as S,i as d,w as l,j as $,k as M,l as g,m as D,n as I,p as y,t as oe,q as R,s as re,v as m,x as j,y as F,z as ae,A as ce,B as le,R as pe,C as ue,D as de,E as me,G as fe,H as ve}from"./vendor.f5d362e4.js";const he=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};he();const xe=s=>btoa(unescape(encodeURIComponent(s))),ge=s=>decodeURIComponent(escape(atob(s))),_e="modulepreload",U={},Ie="./",J=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Ie}${n}`,n in U)return;U[n]=!0;const i=n.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":_e,i||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),i)return new Promise((a,c)=>{r.addEventListener("load",a),r.addEventListener("error",c)})})).then(()=>e())};var ye=`<!DOCTYPE html>
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
`,we=`# Idux Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

\`\`\`sh
pnpm i
pnpm run dev
\`\`\`
`;const Se=async s=>{const e=["setupIdux.js","import-map.json"],{default:t}=await J(()=>import("./jszip.min.308b4566.js").then(function(a){return a.j}),["assets/jszip.min.308b4566.js","assets/vendor.f5d362e4.js"]),n=new t;n.file("index.html",ye),n.file("package.json",ke),n.file("vite.config.js",Ce),n.file("README.md",we);const i=n.folder("src");i==null||i.file("main.js",je),i==null||i.file("idux.js",be);const o=s.getFiles();for(const a in o){if(e.includes(a))continue;let c=o[a];a==="App.vue"&&(c=c.replace(`import { setupIdux } from './setupIdux.js'
`,"").replace(`setupIdux() // don't remove
`,"")),i==null||i.file(a,c)}const r=await n.generateAsync({type:"blob"});W.exports.saveAs(r,"idux-starter.zip")},T=s=>Q(`https://data.jsdelivr.com/v1/package/npm/${s}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,b=(s,e,t="")=>{const n=e?`@${e}`:"";return`https://unpkg.com/${s}${n}${t}`},De=()=>{const s=T("vue");return N(()=>{var e;return(e=s.value)==null?void 0:e.filter(t=>A(t,"3.2.9",">="))})},Ee=()=>{const s=T("@idux/components");return N(()=>{var e;return(e=s.value)==null?void 0:e.filter(t=>A(t,"1.0.0-beta.8",">="))})},Ve={class:"flex justify-between p-2"},Oe=D("h1",{class:"text-base"}," iDux Playground ",-1),Ne=I(" Download "),Ae=I(" Share "),Le=I(" GitHub "),Pe=L({props:{store:null},setup(s){const e=s,{success:t,warning:n}=ee(),i=async()=>{if(!navigator.clipboard){n("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),t("Current URL has been copied to clipboard.")},o=P({Vue:{name:"Vue",vers:De(),activeVer:e.store.versions.Vue,isLoading:!1},iDux:{name:"iDux",vers:Ee(),activeVer:e.store.versions.iDux,isLoading:!1}}),r=async(a,c)=>{o[a].isLoading=!0,await e.store.setVersion(a,c),o[a].isLoading=!1};return(a,c)=>{const H=te,B=ne,E=se,q=R,C=ie;return v(),S("div",Ve,[Oe,d(E,null,{default:l(()=>[(v(!0),S($,null,M(g(o),p=>(v(),y(q,{key:p.name,spinning:p.isLoading},{default:l(()=>[d(E,null,{default:l(()=>[I(oe(p.name)+": ",1),d(B,{value:p.activeVer,"onUpdate:value":[f=>p.activeVer=f,f=>r(p.name,f)],class:"min-w-32",searchable:!0},{default:l(()=>[(v(!0),S($,null,M(p.vers,f=>(v(),y(H,{key:f,label:f,value:f},null,8,["label","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024)]),_:2},1032,["spinning"]))),128)),d(C,{onClick:c[0]||(c[0]=p=>g(Se)(s.store))},{default:l(()=>[Ne]),_:1}),d(C,{onClick:i},{default:l(()=>[Ae]),_:1}),d(C,{mode:"link",href:"https://github.com/IDuxFE/idux-playground",target:"_blank",rel:"noopener noreferrer"},{default:l(()=>[Le]),_:1})]),_:1})])}}}),$e=["click-outside","portal","scroll","a11y","breakpoint","forms","platform","popper","utils"],Me=s=>{const{Vue:e,iDux:t}=s,n=Object.fromEntries($e.map(i=>[`@idux/cdk/${i}`,{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"}]));return O(x({},n),{"@idux/components":{pkg:"@idux/components",version:t,file:"/index.full.min.mjs"},"@idux/cdk":{pkg:"@idux/cdk",version:t,file:"/index.full.min.mjs"},vue:{pkg:"vue",version:e,file:"/dist/vue.esm-browser.js"},"lodash-es":{pkg:"lodash-es",version:"latest",file:"/lodash.js"},"vue-types":{pkg:"vue-types",version:"latest",file:"/dist/vue-types.m.js"},"@vue/shared":{pkg:"@vue/shared",version:"latest",file:"/dist/shared.esm-bundler.js"},"@juggle/resize-observer":{pkg:"@juggle/resize-observer",version:"latest",file:"/lib/exports/resize-observer.js"},"is-plain-object":{pkg:"is-plain-object",version:"latest",file:"/dist/is-plain-object.mjs"},"@popperjs/core":{pkg:"@popperjs/core",version:"latest",file:"/lib/index.js"}})},k="setupIdux.js",h="App.vue",_="PlaygroundApp.vue";var Re=`<template>
  <App />
</template>

<script lang="ts" setup>
import { setupIdux } from './setupIdux.js'
import App from './App.vue'
setupIdux()
<\/script>
`,z=`<template>
  <div style="padding: 20px 100px;">
    <p>\u731C\u8C1C\u8BED\uFF1A</p>
    <p>\u6211\u5728\u4E0A\uFF0C\u4F60\u5728\u4E0B\uFF0C\u4F60\u4E0D\u52A8\uFF0C\u6211\u4E0D\u52A8\u3002</p>
    <p>\u6211\u4E00\u52A8\u4F60\u5C31\u75DB\uFF0C\u4F60\u51FA\u6C34\u6211\u9AD8\u5174\u3002</p>
    <IxDivider />
    \u6253\u4E00\u6D3B\u52A8\u3002
    <IxSwitch :labels="['\u9493\u9C7C', '\u67E5\u770B\u8C1C\u5E95']"></IxSwitch>
  </div>
</template>

<script setup lang="ts">

<\/script>
`,Fe=`import { getCurrentInstance } from 'vue'
import IduxComponents from '@idux/components'
import IduxCdk from '@idux/cdk'

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents)
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
`;const Ue=(s="")=>{let e={[_]:new m(_,Re,!0),[h]:new m(h,z)};if(s)try{e={};const t=JSON.parse(ge(s));for(const n of Object.keys(t)){const i=n===_;e[n]=new m(n,t[n],i)}}catch(t){console.log(t)}return e},Je=s=>{const e=b("@vue/compiler-sfc",s,"/dist/compiler-sfc.esm-browser.js"),t=b("@vue/runtime-dom",s,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},Te=s=>{const e=x({},Me(s));return Object.fromEntries(Object.entries(e).map(([t,n])=>[t,b(n.pkg,n.version,n.file)]))};class ze{constructor({serializedState:e="",versions:t={Vue:"latest",iDux:"latest"}}){u(this,"state");u(this,"compiler",re);u(this,"options");u(this,"versions");u(this,"initialShowOutput",!1);u(this,"initialOutputMode","preview");u(this,"pendingCompiler",null);const n=Ue(e),i=n[_]?_:Object.keys(n)[0];this.state=P({mainFile:i,files:n,activeFile:n[h],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new m("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){try{this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}catch(t){this.state.errors=[`stringify error in import-map.json: ${t.message}`]}}addDeps(){const e=this.getImportMap();e.imports=x(x({},e.imports),Te(this.versions)),this.setImportMap(e)}async setVersion(e,t){switch(e){case"iDux":await this.setIduxVersion(t),j(this,this.state.files[k]);break;case"Vue":await this.setVueVersion(t);break}}async setIduxVersion(e){this.versions.iDux=e;const t=b("@idux/components",e,"/default.min.css");this.state.files[k]=new m(k,Fe.replace("#STYLE_HREF#",t),!0),this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:n}=Je(e);this.pendingCompiler=J(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=n,this.versions.Vue=e,this.addDeps()}async initStore(){await this.setVueVersion(this.versions.Vue),await this.setIduxVersion(this.versions.iDux),F(()=>j(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==h&&j(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new m(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[h]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=h){const n={};t===h&&!e[t]&&(n[t]=new m(t,z));for(const[i,o]of Object.entries(e))n[i]=new m(i,o);for(const i of Object.values(n))await j(this,i);this.state.mainFile=t,this.state.files=n,this.initImportMap(),this.setActive(t)}serialize(){const e=Object.entries(this.getFiles()).filter(([n])=>n!==k).map(([n,i])=>{if(n==="import-map.json")try{const o=JSON.stringify(this.getImportMap(),null,2);return[n,o]}catch{}return[n,i]}),t=JSON.stringify(Object.fromEntries(e));return`#${xe(t)}`}}var He=(s,e)=>{const t=s.__vccOpts||s;for(const[n,i]of e)t[n]=i;return t};const Be=s=>(ue("data-v-e2dcf550"),s=s(),de(),s),qe=Be(()=>D("div",{class:"ixp-height-full"},null,-1)),Ge={class:"flex flex-col ixp-height-full"},Xe=L({setup(s){const e=ae(!0),t=new ze({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e.value=!1}),F(()=>history.replaceState({},"",t.serialize())),(n,i)=>{const o=R,r=Pe,a=ce;return v(),y(a,null,{default:l(()=>[e.value?(v(),y(o,{key:0,tip:"loading..."},{default:l(()=>[qe]),_:1})):le("",!0),D("div",Ge,[d(r,{store:g(t)},null,8,["store"]),d(g(pe),{class:"grow","auto-resize":"","show-compile-output":"",store:g(t),"clear-console":!1},null,8,["store"])])]),_:1})}}});var Ye=He(Xe,[["__scopeId","data-v-e2dcf550"]]);me(fe);ve(Ye).mount("#app");
