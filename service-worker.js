"use strict";var precacheConfig=[["/resume/index.html","4251a16f060cc94a66120d838bfe2a68"],["/resume/static/css/main.9319bc29.css","08affd54f6974c2729f3058ec5391858"],["/resume/static/js/main.3ab7ca7f.js","963b701388f20f05c3922eb2da72a7f5"],["/resume/static/media/css.fbe9b31b.png","fbe9b31b7cb4e1daf27dbceeee445fa9"],["/resume/static/media/dynamic.08d41435.png","08d41435c15cbff55cf509965cbc9626"],["/resume/static/media/fast.66f539fb.png","66f539fb9b1cc5c46c43f2201cb0942e"],["/resume/static/media/fb.a7b509ee.png","a7b509eeaa35ae41f4b7aba5a587644e"],["/resume/static/media/git.8fe708e8.png","8fe708e8eba9228eff175ebb51f31ba2"],["/resume/static/media/hossam.96b01e08.jpg","96b01e080a4da8f73c5304abfa85009b"],["/resume/static/media/intuitive.fe741b53.png","fe741b5380a400b5c1f6a7ec1bb40d87"],["/resume/static/media/lnk.a08f59f4.png","a08f59f44e32ab5f5fe579b7b4088b97"],["/resume/static/media/mongo.e182d6b1.png","e182d6b1f264bdbdd9714b3108983f9f"],["/resume/static/media/new.b4cc9b6d.png","b4cc9b6dc76bcc06f3d83656720ebde7"],["/resume/static/media/node.c68ae12d.jpg","c68ae12d581033ceb513cad74324d69e"],["/resume/static/media/pic1.0e2f4493.jpg","0e2f449324fccbc07d9bd6784080e504"],["/resume/static/media/pic10.11851851.jpg","118518519c6d8973c684ca9105ae12a4"],["/resume/static/media/pic11.bad35c24.jpg","bad35c24d59dd693d29acd6fe7cffb22"],["/resume/static/media/pic12.e179dec9.jpg","e179dec96365afca55a8e0d737a5057c"],["/resume/static/media/pic13.b9847d73.jpg","b9847d73e2de800575c274345dc413a0"],["/resume/static/media/pic14.c254bc00.jpg","c254bc00f9e56f2956d6a4fc585881c8"],["/resume/static/media/pic15.56f85d59.jpg","56f85d59180661082054c551746359ab"],["/resume/static/media/pic2.1e5d6735.jpg","1e5d673541d83feb4337fa3ff1f8d040"],["/resume/static/media/pic3.4e16ba23.jpg","4e16ba233379b769fac26c374246ba2b"],["/resume/static/media/pic4.f6496cf5.jpg","f6496cf5f998dbe3546949386bd861c8"],["/resume/static/media/pic5.98437f44.jpg","98437f442017dedc6b66fa5e7b5ea66a"],["/resume/static/media/pic6.ad056444.jpg","ad0564440e9d97ab20afca07f8f3ccf9"],["/resume/static/media/pic7.64391a71.png","64391a719b8a430eb340e9863bfcbc79"],["/resume/static/media/pic8.f1707055.jpg","f17070550d1bc8749357472a3859805d"],["/resume/static/media/pic9.702602d0.jpg","702602d0c3c92af8d8329970b6a6d472"],["/resume/static/media/pin1.ce5ced67.png","ce5ced6749fa931ebcff7d436b9993a4"],["/resume/static/media/react.a1c6111d.png","a1c6111d1ee614a84cc3c386ead6f67e"],["/resume/static/media/responsive.9eaf437a.png","9eaf437aba327c1eb6d9427d14c7e13e"],["/resume/static/media/second.2888eef4.png","2888eef44877e5a3df6e0bd0e2e59d12"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/resume/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});