if(!self.define){let e,r={};const s=(s,i)=>(s=new URL(s+".js",i).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(r[d])return;let n={};const f=e=>s(e,d),o={module:{uri:d},exports:n,require:f};r[d]=Promise.all(i.map((e=>o[e]||f(e)))).then((e=>(c(...e),n)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f988ffa22c2bccddc6960f5a172735c8"},{url:"assets/index.e0498a50.css",revision:null},{url:"console.js",revision:"c61e6ba803ca8cdab6440510f9476596"},{url:"dycalendar.css",revision:"0a6e9753b72f79c4ebcbd4f5b1a057bb"},{url:"dycalendar.js",revision:"0ddee3024146f55db4a4645c9e6fb67b"},{url:"google5c2eff7d87cfc5e5.html",revision:"ad9159626e01456e4ed759bbf4e6a7dd"},{url:"index.html",revision:"122f8a31100ca5d7da63f577f242f4d1"},{url:"react-pwa.js",revision:"c2774c2d6f8f1fe4a0d9532882397337"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"script.js",revision:"37d8da44a68495bbc7f3f3ddcef2d16b"},{url:"serviceWorker.js",revision:"e641967b716166ea13cc574e001ee2d7"},{url:"style.css",revision:"8e49efa9e183bf241b4be8ed039537df"},{url:"manifest.webmanifest",revision:"d8801b9a9a617c0234933675774554fe"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));