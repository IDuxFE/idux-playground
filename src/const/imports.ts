import { fetchIduxCdkVersions } from "./../utils";
import { VersionRecord } from "@/types";
import { compare } from 'compare-versions'
import * as compInfo from "@idux/components";

const iduxCdks = [
  "click-outside",
  "portal",
  "scroll",
  "a11y",
  "breakpoint",
  "forms",
  "platform",
  "popper",
  "utils",
  "resize",
];

export const genImportsMap = async (versions: VersionRecord) => {
  const { Vue, iDux } = versions;

  let cdkVersions = (await fetchIduxCdkVersions()) ?? [];
  if (!iDux.startsWith('2') && iDux !== 'latest') {
    cdkVersions = cdkVersions.filter((ver: string) => ver.startsWith('1'))
  }

  const cdkVersion = cdkVersions.includes(iDux) || iDux === 'latest' ? iDux : cdkVersions.find((ver: string) => compare(ver, iDux, '<=')) ?? cdkVersions[0];

  const iduxCdksMap = Object.fromEntries(
    iduxCdks.map((item) => [
      `@idux/cdk/${item}`,
      {
        pkg: "@idux/cdk",
        version: cdkVersion,
        file: "/index.full.min.mjs",
      },
    ])
  );

  const compNames = Object.keys(compInfo)
    .map((name) => name.toLowerCase())
    .filter((name) => name.startsWith("ix"));
  compNames.push("ixtheme");
  const iduxCompMap = Object.fromEntries(
    compNames.map((name) => [
      `@idux/components/${name.slice(2)}`,
      {
        pkg: "@idux/components",
        version: iDux,
        file: "/index.full.min.mjs",
      },
    ])
  );

  return {
    vue: {
      pkg: "@vue/runtime-dom",
      version: Vue,
      file: "/dist/runtime-dom.esm-browser.js",
    },
    "vue-types": {
      pkg: "vue-types",
      version: "latest",
      file: "/dist/vue-types.m.js",
    },
    "@vue/shared": {
      pkg: "@vue/shared",
      version: "latest",
      file: "/dist/shared.esm-bundler.js",
    },
    "@juggle/resize-observer": {
      pkg: "@juggle/resize-observer",
      version: "latest",
      file: "/lib/exports/resize-observer.js",
    },
    "is-plain-object": {
      pkg: "is-plain-object",
      version: "latest",
      file: "/dist/is-plain-object.mjs",
    },
    "@idux/cdk": {
      pkg: "@idux/cdk",
      version: cdkVersion,
      file: "/index.full.min.mjs",
    },
    ...iduxCdksMap,
    "@idux/cdk/": {
      pkg: "@idux/cdk",
      version: cdkVersion,
      file: "/",
    },
    "@idux/components": {
      pkg: "@idux/components",
      version: iDux,
      file: "/index.full.min.mjs",
    },
    ...iduxCompMap,
    "@idux/components/": {
      pkg: "@idux/components",
      version: iDux,
      file: "/",
    },
    "@idux/pro": {
      pkg: "@idux/pro",
      version: iDux,
      file: "/index.full.min.mjs",
    },
    "@idux/pro/": {
      pkg: "@idux/pro",
      version: iDux,
      file: "/",
    },
  };
};

export const genLocalImportsMap = () => {
  return {
    "lodash-es": {
      pkg: "lodash-es",
      version: "latest",
      file: "./deps/lodash-es.js",
    },
    "@floating-ui/dom": {
      pkg: "@floating-ui/dom",
      version: "latest",
      file: "./deps/floating-ui.js",
    },
    ajv: {
      pkg: "ajv",
      version: "latest",
      file: "./deps/ajv.js",
    },
    "ajv-formats": {
      pkg: "ajv-formats",
      version: "latest",
      file: "./deps/ajv-formats.js",
    },
    "date-fns": {
      pkg: "date-fns",
      version: "latest",
      file: "./deps/date-fns.js",
    },
    "date-fns/locale": {
      pkg: "date-fns",
      version: "latest",
      file: "./deps/date-fns.js",
    },
    "@emotion/hash": {
      pkg: "@emotion/hash",
      version: "latest",
      file: "./deps/emotion-hash.js",
    },
  };
};
