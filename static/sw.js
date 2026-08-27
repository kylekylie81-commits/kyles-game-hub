importScripts("/assets/history/config.js?v=2025-04-15");
importScripts("/assets/history/worker.js?v=2025-04-15");
importScripts("/assets/mathematics/bundle.js?v=2025-04-15");
importScripts("/assets/mathematics/config.js?v=2025-04-15");
importScripts(__uv$config.sw || "/assets/mathematics/sw.js?v=2025-04-15");
importScripts("/assets/languagearts/sj.all.js?v=2025-04-15");
const { ScramjetServiceWorker } = $scramjetLoadWorker();

const uv = new UVServiceWorker();
const dynamic = new Dynamic();
const sj = new ScramjetServiceWorker();

const userKey = new URL(location).searchParams.get("userkey");
self.dynamic = dynamic;

self.addEventListener("fetch", event => {
  event.respondWith(
    (async () => {
      await sj.loadConfig();

      let response;

      if (await sj.route(event)) {
        response = await sj.fetch(event);
      } else if (await dynamic.route(event)) {
        response = await dynamic.fetch(event);
      } else if (event.request.url.startsWith(`${location.origin}/a/`)) {
        response = await uv.fetch(event);
      } else {
        response = await fetch(event.request);
      }

      // FIX: Check if the response is cached/empty and pass it straight back to avoid RangeError
      if (response && (response.status === 304 || response.status === 0)) {
          return response;
      }

      return response;
    })(),
  );
});
