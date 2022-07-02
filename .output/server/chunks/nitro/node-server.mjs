globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{},"NUXT_PUBLIC_SERVICE_URL":"http://baobaoapp.herokuapp.com"};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      return decodeURI(parseURL(event.req.originalUrl || event.req.url).pathname).replace(/\/$/, "/index");
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/_nuxt/Chaplist-8dcd3ad5.mjs": {
    "type": "application/javascript",
    "etag": "\"c53-i3ItT2MJ1KOZ74YfVBL+VITw1Kc\"",
    "mtime": "2022-07-02T13:10:38.484Z",
    "path": "../public/_nuxt/Chaplist-8dcd3ad5.mjs"
  },
  "/_nuxt/MangaFeatured-10a343ea.mjs": {
    "type": "application/javascript",
    "etag": "\"bf4-7FHN5WhJix+gziabU+3Ibk8kV5g\"",
    "mtime": "2022-07-02T13:10:38.484Z",
    "path": "../public/_nuxt/MangaFeatured-10a343ea.mjs"
  },
  "/_nuxt/MangeNewUpdate-5f36dcb9.mjs": {
    "type": "application/javascript",
    "etag": "\"290f-L6r433ZCnc3AHNLbBMbe92E578A\"",
    "mtime": "2022-07-02T13:10:38.484Z",
    "path": "../public/_nuxt/MangeNewUpdate-5f36dcb9.mjs"
  },
  "/_nuxt/MangeNewUpdate.f32f72f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2a-h3ql6bL1vs10QSG8TZvtX9vTNOU\"",
    "mtime": "2022-07-02T13:10:38.483Z",
    "path": "../public/_nuxt/MangeNewUpdate.f32f72f8.css"
  },
  "/_nuxt/Review-85acabcd.mjs": {
    "type": "application/javascript",
    "etag": "\"100e-8XEdguwTZTv5l8r8i+aC0YNS4Wg\"",
    "mtime": "2022-07-02T13:10:38.483Z",
    "path": "../public/_nuxt/Review-85acabcd.mjs"
  },
  "/_nuxt/Spotlight-d28d576f.mjs": {
    "type": "application/javascript",
    "etag": "\"24da-NOQ7Ebw6EIkNglWoHWzm7Z9U9rI\"",
    "mtime": "2022-07-02T13:10:38.483Z",
    "path": "../public/_nuxt/Spotlight-d28d576f.mjs"
  },
  "/_nuxt/TheHome-af7c6fac.mjs": {
    "type": "application/javascript",
    "etag": "\"5f9-W5wtF3SlVEfslF+/uOQtzctwbrc\"",
    "mtime": "2022-07-02T13:10:38.482Z",
    "path": "../public/_nuxt/TheHome-af7c6fac.mjs"
  },
  "/_nuxt/TheHome.428024a6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15e-ebDvKYp64FQDBIKds2qaoFlQF6U\"",
    "mtime": "2022-07-02T13:10:38.482Z",
    "path": "../public/_nuxt/TheHome.428024a6.css"
  },
  "/_nuxt/_id_-b08f03c3.mjs": {
    "type": "application/javascript",
    "etag": "\"151f-pOtQLk4bUEaoPFmNa9A5DpHz9YA\"",
    "mtime": "2022-07-02T13:10:38.477Z",
    "path": "../public/_nuxt/_id_-b08f03c3.mjs"
  },
  "/_nuxt/default-55c4fd31.mjs": {
    "type": "application/javascript",
    "etag": "\"ac072-F90me3+Auqtlbi7jJS7tz1WKObI\"",
    "mtime": "2022-07-02T13:10:38.476Z",
    "path": "../public/_nuxt/default-55c4fd31.mjs"
  },
  "/_nuxt/default.7f12ad6b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32-2CdP9k8z5PK4cOEE9qCAbfTdRQw\"",
    "mtime": "2022-07-02T13:10:38.475Z",
    "path": "../public/_nuxt/default.7f12ad6b.css"
  },
  "/_nuxt/entry-84b7f966.mjs": {
    "type": "application/javascript",
    "etag": "\"1f6f6-GtcnvZjQMtgfloeSXz1XfEMi8xQ\"",
    "mtime": "2022-07-02T13:10:38.474Z",
    "path": "../public/_nuxt/entry-84b7f966.mjs"
  },
  "/_nuxt/entry.234c7573.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16c05-WFVuJbdX3GAI02w9FKWLQkr8zTQ\"",
    "mtime": "2022-07-02T13:10:38.473Z",
    "path": "../public/_nuxt/entry.234c7573.css"
  },
  "/_nuxt/fetch-d2b543ce.mjs": {
    "type": "application/javascript",
    "etag": "\"1d1e-55zkLQ7gv+cwXLJRlgedJtn8Kdg\"",
    "mtime": "2022-07-02T13:10:38.471Z",
    "path": "../public/_nuxt/fetch-d2b543ce.mjs"
  },
  "/_nuxt/index-0a246f51.mjs": {
    "type": "application/javascript",
    "etag": "\"184-ctzoB96YH4/0hqkQOHak55KefGk\"",
    "mtime": "2022-07-02T13:10:38.471Z",
    "path": "../public/_nuxt/index-0a246f51.mjs"
  },
  "/_nuxt/index-229f113e.mjs": {
    "type": "application/javascript",
    "etag": "\"4a-TmmzrbIyzBic3S6Xy/WjweKxAPM\"",
    "mtime": "2022-07-02T13:10:38.470Z",
    "path": "../public/_nuxt/index-229f113e.mjs"
  },
  "/_nuxt/index-a27ec4c6.mjs": {
    "type": "application/javascript",
    "etag": "\"17e4-Gfx3iiOrm8WLJCJpSBkMhNQIEoM\"",
    "mtime": "2022-07-02T13:10:38.470Z",
    "path": "../public/_nuxt/index-a27ec4c6.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"f9f-G4A7/+70eI+HHUKKxXpWLBeZVs0\"",
    "mtime": "2022-07-02T13:10:38.470Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/swiper-slide-47f30077.mjs": {
    "type": "application/javascript",
    "etag": "\"14605-lQPQKKAyfNPPhI0zWUXVjgjPJ3I\"",
    "mtime": "2022-07-02T13:10:38.469Z",
    "path": "../public/_nuxt/swiper-slide-47f30077.mjs"
  },
  "/_nuxt/use-resolve-button-type-df7a29e6.mjs": {
    "type": "application/javascript",
    "etag": "\"b79-IvrfUX/exRISkCHg6n6PiLlsogs\"",
    "mtime": "2022-07-02T13:10:38.469Z",
    "path": "../public/_nuxt/use-resolve-button-type-df7a29e6.mjs"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _152570 = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_377064 = () => import('../home-props.mjs');
const _lazy_419423 = () => import('../header.mjs');
const _lazy_216294 = () => import('../comic.mjs');
const _lazy_961932 = () => import('../chapters.mjs');
const _lazy_215513 = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _152570, lazy: false, middleware: true, method: undefined },
  { route: '/api/home-props', handler: _lazy_377064, lazy: true, middleware: false, method: undefined },
  { route: '/api/header', handler: _lazy_419423, lazy: true, middleware: false, method: undefined },
  { route: '/api/comic', handler: _lazy_216294, lazy: true, middleware: false, method: undefined },
  { route: '/api/chapters', handler: _lazy_961932, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_215513, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_215513, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
