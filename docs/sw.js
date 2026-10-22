const VERSION="mm-v2-202610211746"+"202610171422";
const SHELL=["./","./index.html","./manifest.json","./fonts/barlow-condensed-latin-500-normal.woff2","./fonts/barlow-condensed-latin-600-normal.woff2","./fonts/barlow-condensed-latin-700-normal.woff2","./fonts/ibm-plex-sans-latin-400-normal.woff2","./fonts/ibm-plex-sans-latin-500-normal.woff2","./fonts/ibm-plex-sans-latin-600-normal.woff2","./fonts/geist-mono-latin-400-normal.woff2","./fonts/geist-mono-latin-500-normal.woff2","./fonts/geist-mono-latin-600-normal.woff2","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-192.png","./icons/maskable-512.png"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION&&!k.startsWith("mm-fonts")).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{
  const url=new URL(e.request.url);
  if(e.request.mode==="navigate"||url.pathname.endsWith("/index.html")){
    e.respondWith(fetch(e.request).then(r=>{ const copy=r.clone(); caches.open(VERSION).then(c=>c.put("./index.html",copy)); return r; }).catch(()=>caches.match("./index.html")));
    return;
  }
  if(url.hostname==="fonts.googleapis.com"||url.hostname==="fonts.gstatic.com"){
    e.respondWith(caches.open("mm-fonts").then(c=>c.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{ if(r.ok) c.put(e.request,r.clone()); return r; }).catch(()=>hit))));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));
});
