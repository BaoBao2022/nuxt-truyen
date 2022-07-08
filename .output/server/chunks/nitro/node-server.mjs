globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, lazyEventHandler, createApp, createRouter } from 'h3';
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
import { fileURLToPath as fileURLToPath$1 } from 'node:url';
import { createIPX, createIPXMiddleware } from 'ipx';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{"NUXT_PUBLIC_SERVICE_URL":"https://truyenmem.herokuapp.com"},"ipx":{"dir":"","domains":[],"sharp":{},"alias":{}}};
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
  "/_nuxt/Chaplist-29c3b250.mjs": {
    "type": "application/javascript",
    "etag": "\"e65-ZMqRjKNDdIeTKEykrOqqMwvN5ME\"",
    "mtime": "2022-07-08T06:46:07.330Z",
    "path": "../public/_nuxt/Chaplist-29c3b250.mjs"
  },
  "/_nuxt/ChapterImg-540bab58.mjs": {
    "type": "application/javascript",
    "etag": "\"2f2-fEIBfI7XjWIXTLMoePl0UCZGUFY\"",
    "mtime": "2022-07-08T06:46:07.330Z",
    "path": "../public/_nuxt/ChapterImg-540bab58.mjs"
  },
  "/_nuxt/EyeIcon-ceebd9d1.mjs": {
    "type": "application/javascript",
    "etag": "\"1c3-WMDYB1aTWRU2rtVhhucgZ9dDBDM\"",
    "mtime": "2022-07-08T06:46:07.330Z",
    "path": "../public/_nuxt/EyeIcon-ceebd9d1.mjs"
  },
  "/_nuxt/MangaSearch-878098b3.mjs": {
    "type": "application/javascript",
    "etag": "\"5c16-0s5uDZYfeIWnyYI6WUsPjZX/tos\"",
    "mtime": "2022-07-08T06:46:07.329Z",
    "path": "../public/_nuxt/MangaSearch-878098b3.mjs"
  },
  "/_nuxt/RankList-6af9b09c.mjs": {
    "type": "application/javascript",
    "etag": "\"c78-4aXhTwc0Y13EcvkLLpgW86nByvM\"",
    "mtime": "2022-07-08T06:46:07.329Z",
    "path": "../public/_nuxt/RankList-6af9b09c.mjs"
  },
  "/_nuxt/ReadMangaFooter-37cf9de8.mjs": {
    "type": "application/javascript",
    "etag": "\"6fc-acsLUSVAHmBhCCrTAjmnbdOx4lY\"",
    "mtime": "2022-07-08T06:46:07.329Z",
    "path": "../public/_nuxt/ReadMangaFooter-37cf9de8.mjs"
  },
  "/_nuxt/SearchLoading-f532ceb8.mjs": {
    "type": "application/javascript",
    "etag": "\"ca2-76x5rTd4dfL91fPqLrwH5FIZVIQ\"",
    "mtime": "2022-07-08T06:46:07.329Z",
    "path": "../public/_nuxt/SearchLoading-f532ceb8.mjs"
  },
  "/_nuxt/SearchResult-a29aec1b.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-DCpHkPQ0Qd/muOiPOpkKd0u4cec\"",
    "mtime": "2022-07-08T06:46:07.329Z",
    "path": "../public/_nuxt/SearchResult-a29aec1b.mjs"
  },
  "/_nuxt/SwiperCard-c2540ec0.mjs": {
    "type": "application/javascript",
    "etag": "\"588-fqnZSTxgIMtQ7MP13mClY5Q9Tqc\"",
    "mtime": "2022-07-08T06:46:07.328Z",
    "path": "../public/_nuxt/SwiperCard-c2540ec0.mjs"
  },
  "/_nuxt/SwiperCardButton-a54f0fdf.mjs": {
    "type": "application/javascript",
    "etag": "\"544-KFw2Qd9UF9BzHz5vVWGQNJ+kp9I\"",
    "mtime": "2022-07-08T06:46:07.328Z",
    "path": "../public/_nuxt/SwiperCardButton-a54f0fdf.mjs"
  },
  "/_nuxt/SwiperCardContent-be779b15.mjs": {
    "type": "application/javascript",
    "etag": "\"5dd-C2zhF580R/UR7X1GNE/ramoPAYQ\"",
    "mtime": "2022-07-08T06:46:07.328Z",
    "path": "../public/_nuxt/SwiperCardContent-be779b15.mjs"
  },
  "/_nuxt/TheFooter-23832d8a.mjs": {
    "type": "application/javascript",
    "etag": "\"59b-RPezS0Zb3JmTDyI0PsunvWUap4c\"",
    "mtime": "2022-07-08T06:46:07.328Z",
    "path": "../public/_nuxt/TheFooter-23832d8a.mjs"
  },
  "/_nuxt/TheHeader-c02660df.mjs": {
    "type": "application/javascript",
    "etag": "\"57285-ECMs2TfehLr1zEDWPyGfl4Tjuco\"",
    "mtime": "2022-07-08T06:46:07.328Z",
    "path": "../public/_nuxt/TheHeader-c02660df.mjs"
  },
  "/_nuxt/TheHeader.096a4d4a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32-tXkBJjMlYw3pos8IaIqu/CDBgww\"",
    "mtime": "2022-07-08T06:46:07.327Z",
    "path": "../public/_nuxt/TheHeader.096a4d4a.css"
  },
  "/_nuxt/TheHome-eb4be4fe.mjs": {
    "type": "application/javascript",
    "etag": "\"1b85f-qKSZpUNwdnYeaJlqSg35Rjbn9yg\"",
    "mtime": "2022-07-08T06:46:07.327Z",
    "path": "../public/_nuxt/TheHome-eb4be4fe.mjs"
  },
  "/_nuxt/TheHome.a5a47ebc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"297e-3Ruq7xaAZAuhAb0UP6gMQ2a+oCY\"",
    "mtime": "2022-07-08T06:46:07.327Z",
    "path": "../public/_nuxt/TheHome.a5a47ebc.css"
  },
  "/_nuxt/TheMangaDetail-db5e8ac1.mjs": {
    "type": "application/javascript",
    "etag": "\"1b9e-dcJHo0SzrMPA3dCvcWFwKnJrYA8\"",
    "mtime": "2022-07-08T06:46:07.326Z",
    "path": "../public/_nuxt/TheMangaDetail-db5e8ac1.mjs"
  },
  "/_nuxt/TheNav-ceeda173.mjs": {
    "type": "application/javascript",
    "etag": "\"e17-jf3Rvef9b1IA0u69JnfvmcFMqJo\"",
    "mtime": "2022-07-08T06:46:07.326Z",
    "path": "../public/_nuxt/TheNav-ceeda173.mjs"
  },
  "/_nuxt/TheRead-61d841fe.mjs": {
    "type": "application/javascript",
    "etag": "\"1768-VeO66YOHj9n9+1jsXjr6CmZLdwk\"",
    "mtime": "2022-07-08T06:46:07.325Z",
    "path": "../public/_nuxt/TheRead-61d841fe.mjs"
  },
  "/_nuxt/_id_-e65325d5.mjs": {
    "type": "application/javascript",
    "etag": "\"1e7-BVP0/TMWxxVHObTS0Q5JqJ6pHww\"",
    "mtime": "2022-07-08T06:46:07.325Z",
    "path": "../public/_nuxt/_id_-e65325d5.mjs"
  },
  "/_nuxt/_slug_-00db710f.mjs": {
    "type": "application/javascript",
    "etag": "\"235-arB3iInyxtV6GCl3UAItSLqoMuo\"",
    "mtime": "2022-07-08T06:46:07.325Z",
    "path": "../public/_nuxt/_slug_-00db710f.mjs"
  },
  "/_nuxt/asyncData-2e01ffb0.mjs": {
    "type": "application/javascript",
    "etag": "\"770-iV32ZtbM+6wICqS+dyyQcTXRgDM\"",
    "mtime": "2022-07-08T06:46:07.325Z",
    "path": "../public/_nuxt/asyncData-2e01ffb0.mjs"
  },
  "/_nuxt/client-only-2813a9b5.mjs": {
    "type": "application/javascript",
    "etag": "\"e83-i0zvVCSZGrWIWz31+2f7zfG2pc0\"",
    "mtime": "2022-07-08T06:46:07.325Z",
    "path": "../public/_nuxt/client-only-2813a9b5.mjs"
  },
  "/_nuxt/default-6b7c0389.mjs": {
    "type": "application/javascript",
    "etag": "\"2a9-qC6WuwHh5KWg2ArxvjyKyP9hQ1U\"",
    "mtime": "2022-07-08T06:46:07.325Z",
    "path": "../public/_nuxt/default-6b7c0389.mjs"
  },
  "/_nuxt/disclosure-5c2aa184.mjs": {
    "type": "application/javascript",
    "etag": "\"c49-mj+Be9snJjO7dt4NdDObQcYpZLk\"",
    "mtime": "2022-07-08T06:46:07.324Z",
    "path": "../public/_nuxt/disclosure-5c2aa184.mjs"
  },
  "/_nuxt/entry-b8207ed2.mjs": {
    "type": "application/javascript",
    "etag": "\"2c159-Phg+HW3JZwkhX4Iq18I9hVDzcV8\"",
    "mtime": "2022-07-08T06:46:07.324Z",
    "path": "../public/_nuxt/entry-b8207ed2.mjs"
  },
  "/_nuxt/entry.89390574.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"130f5-eBvYUD+hA9K71qwTCGVLAZfUA08\"",
    "mtime": "2022-07-08T06:46:07.324Z",
    "path": "../public/_nuxt/entry.89390574.css"
  },
  "/_nuxt/hidden-614d6193.mjs": {
    "type": "application/javascript",
    "etag": "\"c0d-pEcZ8k5IgdGg3jSWEg348PD4tf8\"",
    "mtime": "2022-07-08T06:46:07.323Z",
    "path": "../public/_nuxt/hidden-614d6193.mjs"
  },
  "/_nuxt/index-0ea35529.mjs": {
    "type": "application/javascript",
    "etag": "\"2d2-7ZUfvOYzPDGqgniy9VOSwnxNxDg\"",
    "mtime": "2022-07-08T06:46:07.323Z",
    "path": "../public/_nuxt/index-0ea35529.mjs"
  },
  "/_nuxt/index-566e9911.mjs": {
    "type": "application/javascript",
    "etag": "\"b51-lXgadTfG0Ibe6jfmjdD1VFEJ1A0\"",
    "mtime": "2022-07-08T06:46:07.323Z",
    "path": "../public/_nuxt/index-566e9911.mjs"
  },
  "/_nuxt/index-7c9a43e8.mjs": {
    "type": "application/javascript",
    "etag": "\"875-/zNsT9Ncs7as2RG1VIuLpecN5fM\"",
    "mtime": "2022-07-08T06:46:07.322Z",
    "path": "../public/_nuxt/index-7c9a43e8.mjs"
  },
  "/_nuxt/index-952c70e0.mjs": {
    "type": "application/javascript",
    "etag": "\"1be6-K7UybM1qsyzT37wQQ59RGzHDQkQ\"",
    "mtime": "2022-07-08T06:46:07.322Z",
    "path": "../public/_nuxt/index-952c70e0.mjs"
  },
  "/_nuxt/index-bcfd108b.mjs": {
    "type": "application/javascript",
    "etag": "\"ea9-nWqjKHN+WhC4k6/07t8rTiLCQv8\"",
    "mtime": "2022-07-08T06:46:07.322Z",
    "path": "../public/_nuxt/index-bcfd108b.mjs"
  },
  "/_nuxt/index-f67d4f5a.mjs": {
    "type": "application/javascript",
    "etag": "\"e9-nQrRG78xVJgveF9h9ZnPPYZwi1s\"",
    "mtime": "2022-07-08T06:46:07.322Z",
    "path": "../public/_nuxt/index-f67d4f5a.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"319a-q5OcojObLB++rblej0l/9tWexkI\"",
    "mtime": "2022-07-08T06:46:07.321Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/open-closed-03b1d5d3.mjs": {
    "type": "application/javascript",
    "etag": "\"ff-88diSdU11sY7tbMolmGk2KNKvRE\"",
    "mtime": "2022-07-08T06:46:07.321Z",
    "path": "../public/_nuxt/open-closed-03b1d5d3.mjs"
  },
  "/_nuxt/storage-49453dae.mjs": {
    "type": "application/javascript",
    "etag": "\"1641-Wi9XWvVSt35UosI+iRG9WqoAqoA\"",
    "mtime": "2022-07-08T06:46:07.321Z",
    "path": "../public/_nuxt/storage-49453dae.mjs"
  },
  "/_nuxt/stringHandler-8d1e9e69.mjs": {
    "type": "application/javascript",
    "etag": "\"2d-wiTlkarcTJ8ecS9ZNCxhxXI4G+Y\"",
    "mtime": "2022-07-08T06:46:07.321Z",
    "path": "../public/_nuxt/stringHandler-8d1e9e69.mjs"
  },
  "/_nuxt/use-resolve-button-type-f15fddb7.mjs": {
    "type": "application/javascript",
    "etag": "\"cf4-xiEWx00wS+JwdCidqwzUQFWfisc\"",
    "mtime": "2022-07-08T06:46:07.320Z",
    "path": "../public/_nuxt/use-resolve-button-type-f15fddb7.mjs"
  },
  "/_nuxt/useFirstPathChapter-6b4114d4.mjs": {
    "type": "application/javascript",
    "etag": "\"29c-E1Lvud3Nz2K8dn94QXv0mLnbkHg\"",
    "mtime": "2022-07-08T06:46:07.320Z",
    "path": "../public/_nuxt/useFirstPathChapter-6b4114d4.mjs"
  },
  "/_nuxt/useMangaDetailPagePath-38a61a49.mjs": {
    "type": "application/javascript",
    "etag": "\"9d-F/HWqzguUzofkh+niZrEA6Xauz0\"",
    "mtime": "2022-07-08T06:46:07.320Z",
    "path": "../public/_nuxt/useMangaDetailPagePath-38a61a49.mjs"
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

const _285802 = lazyEventHandler(() => {
  const ipxOptions = {
    ...useRuntimeConfig().ipx || {},
    dir: fileURLToPath$1(new URL("../public", globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.req.url = event.context.params._;
    await middleware(event.req, event.res);
  });
});

const _lazy_265995 = () => import('../top-week.mjs');
const _lazy_205454 = () => import('../top-month.mjs');
const _lazy_360912 = () => import('../top-day.mjs');
const _lazy_339445 = () => import('../top-all.mjs');
const _lazy_112493 = () => import('../spotlights.mjs');
const _lazy_386443 = () => import('../search.mjs');
const _lazy_351432 = () => import('../manga-updated.mjs');
const _lazy_206602 = () => import('../manga-new.mjs');
const _lazy_419096 = () => import('../filter.mjs');
const _lazy_216294 = () => import('../comic.mjs');
const _lazy_961932 = () => import('../chapters.mjs');
const _lazy_215513 = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _152570, lazy: false, middleware: true, method: undefined },
  { route: '/api/top-week', handler: _lazy_265995, lazy: true, middleware: false, method: undefined },
  { route: '/api/top-month', handler: _lazy_205454, lazy: true, middleware: false, method: undefined },
  { route: '/api/top-day', handler: _lazy_360912, lazy: true, middleware: false, method: undefined },
  { route: '/api/top-all', handler: _lazy_339445, lazy: true, middleware: false, method: undefined },
  { route: '/api/spotlights', handler: _lazy_112493, lazy: true, middleware: false, method: undefined },
  { route: '/api/search', handler: _lazy_386443, lazy: true, middleware: false, method: undefined },
  { route: '/api/manga-updated', handler: _lazy_351432, lazy: true, middleware: false, method: undefined },
  { route: '/api/manga-new', handler: _lazy_206602, lazy: true, middleware: false, method: undefined },
  { route: '/api/filter', handler: _lazy_419096, lazy: true, middleware: false, method: undefined },
  { route: '/api/comic', handler: _lazy_216294, lazy: true, middleware: false, method: undefined },
  { route: '/api/chapters', handler: _lazy_961932, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_215513, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _285802, lazy: false, middleware: false, method: undefined },
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
