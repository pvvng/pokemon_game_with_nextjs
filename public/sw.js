<<<<<<< HEAD
if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a70dcdbe30c9cda7ad202ed7cf60bf8f"},{url:"/_next/static/chunks/229-9f14683a0054d2bd.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/23-6de92bf77c16c86b.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/231-79af95f00a2a104b.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/69b09407-503ef2f759a585ae.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/8-0894263b96eb56d2.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/913-5e5924731405a4f8.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/_not-found/page-1fe41d8df168b155.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/document/%5Bpokemon_id%5D/page-33161189698dfaa7.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/document/page-9d9ba9ee76f0f63e.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/layout-067591fe7daaf12c.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/page-43c85c220b202564.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/script/page-23128dd0eb8f7df7.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/trip/DrOhS-lab/page-9a091b8c83de359e.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/trip/center/page-ca119b58339aede9.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/trip/deep-forest/page-8cceeca6ef19c141.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/trip/mountain/page-65baf5fc1443abc7.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/trip/ocean/page-fb3322f46cd70f0c.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/trip/page-77c49984b886469a.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/app/trip/urban/page-0629f29a0249a9e0.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/fd9d1056-62aaf4b921c84028.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/main-app-4fa4d6d9de192428.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/main-db2e780b11c7e075.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-efc477cb2f507a3a.js",revision:"tJM7HnjPp24PMkyo4-7jR"},{url:"/_next/static/css/a13f3a22997bb9f4.css",revision:"a13f3a22997bb9f4"},{url:"/_next/static/css/a758aeb3a971b81c.css",revision:"a758aeb3a971b81c"},{url:"/_next/static/css/d3df112486f97f47.css",revision:"d3df112486f97f47"},{url:"/_next/static/css/fc052a71ed346717.css",revision:"fc052a71ed346717"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/deep-foreset-bg.b4f5e919.png",revision:"b4f5e919"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/mountain-bg.e02a0b52.png",revision:"e02a0b52"},{url:"/_next/static/media/ocean-bg.602f8d43.png",revision:"602f8d43"},{url:"/_next/static/media/sky.7f381bb8.jpg",revision:"7f381bb8"},{url:"/_next/static/media/urban-bg.c85ac37f.jpg",revision:"c85ac37f"},{url:"/_next/static/tJM7HnjPp24PMkyo4-7jR/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/tJM7HnjPp24PMkyo4-7jR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/icon-192x192.png",revision:"3f8a859ba102aa1acd5d4adffa4a0d46"},{url:"/icons/icon-256x256.png",revision:"a0ac2262e483af3933826281be234304"},{url:"/icons/icon-384x384.png",revision:"579f9a0acc48b7f804dc1289007e0884"},{url:"/icons/icon-512x512.png",revision:"17e6cdb8644af8ff549258ad3132b10b"},{url:"/images/coin.png",revision:"04b20e61fa840474e405766263fce1b5"},{url:"/images/dr.oh.webp",revision:"780d1f5c19bbedbf8b45d64ab8e681f0"},{url:"/images/grass.png",revision:"7071ce508107a6dd1f2e5c3d5e32789e"},{url:"/images/icon.png",revision:"b2557be2a80f355ca0baf414d39965d4"},{url:"/images/monsterball-front.png",revision:"487cc7e76cf475fc6b37b9cb11384aaa"},{url:"/images/ocean.png",revision:"05b4c94a60155eaf2aaa427cb587c6bf"},{url:"/images/path.jpeg",revision:"f22a92f535462f9bcd396e9c1f52503c"},{url:"/images/pikachu-dancing.gif",revision:"282c33014e153836d58ba2bc3be429fa"},{url:"/images/pikachu-running.gif",revision:"cbf4c0011d2a89a61a34cb7a9866db0c"},{url:"/images/sky.jpg",revision:"25aa059dee6874f490bb5a924a916e04"},{url:"/images/store.jpg",revision:"f7d870550d435b343b6f57a0f2c9afc8"},{url:"/images/나옹이.webp",revision:"ec34ca94bc84da02c8e7bdc1b494c230"},{url:"/images/마스터볼.webp",revision:"af3187cac6c42ca9c573479a48ae4624"},{url:"/images/몬스터볼.webp",revision:"112d7298145a6767cdfb1353b4076486"},{url:"/images/비주기.webp",revision:"04f36be23aea072fd6d4e2168e6f3a91"},{url:"/images/센터.webp",revision:"7c4fc2365f7a4eac6409d5eb15fa1e7b"},{url:"/images/슈퍼볼.webp",revision:"36509c6d9ffc35158553e9c3f457e10e"},{url:"/images/우승.png",revision:"6289d908d97d5c7aae8bf3eb0d01789b"},{url:"/images/조무래기-남.png",revision:"e7e8001be8329bdcc4934fb2a18839b4"},{url:"/images/조무래기-여.png",revision:"fb2940b74728614bc9fee041c3924b52"},{url:"/images/지우.webp",revision:"534d659cee5581ce2ce7664066ee03a9"},{url:"/images/하이퍼볼.webp",revision:"bed6f4acb34cd394639b684477a448ab"},{url:"/manifest.json",revision:"80ce859d9e0ec9aecef89fc0217b3d07"},{url:"/trip-bg/deep-foreset-bg.png",revision:"539c483ff16585f1014ce8bff226bc56"},{url:"/trip-bg/mountain-bg.png",revision:"55d41c574df29a9d17428a32072ec221"},{url:"/trip-bg/ocean-bg.png",revision:"639845d15bb1fe5d32f1d6fd12b1d298"},{url:"/trip-bg/urban-bg.jpg",revision:"d608a76715498d970d7a5b767e6c2049"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
=======
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-e43f5367'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }
        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
>>>>>>> origin/main
