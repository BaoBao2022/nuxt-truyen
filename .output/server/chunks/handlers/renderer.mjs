import { eventHandler, useQuery } from 'h3';
import { joinURL } from 'ufo';
import { u as useRuntimeConfig } from '../nitro/node-server.mjs';
import { g as getDefaultExportFromNamespaceIfNotNamed, v as vue_cjs_prod, s as shared$1 } from '../vue.cjs.prod.mjs';
import require$$0 from 'unenv/runtime/mock/proxy';
import * as stream from 'stream';

const IS_JS_RE = /\.[cm]?js(\?[^.]+)?$/;
const IS_MODULE_RE = /\.mjs(\?[^.]+)?$/;
const HAS_EXT_RE = /[^./]+\.[^./]+$/;
const IS_CSS_RE = /\.(css|postcss|sass|scss|less|stylus|styl)(\?[^.]+)?$/;
function isJS(file) {
  return IS_JS_RE.test(file) || !HAS_EXT_RE.test(file);
}
function isModule(file) {
  return IS_MODULE_RE.test(file) || !HAS_EXT_RE.test(file);
}
function isCSS(file) {
  return IS_CSS_RE.test(file);
}
function getExtension(file) {
  const withoutQuery = file.replace(/\?.*/, "");
  return withoutQuery.split(".").pop() || "";
}
function ensureTrailingSlash(path) {
  if (path === "") {
    return path;
  }
  return path.replace(/([^/])$/, "$1/");
}
function getPreloadType(ext) {
  if (ext === "js" || ext === "cjs" || ext === "mjs") {
    return "script";
  } else if (ext === "css") {
    return "style";
  } else if (/jpe?g|png|svg|gif|webp|ico/.test(ext)) {
    return "image";
  } else if (/woff2?|ttf|otf|eot/.test(ext)) {
    return "font";
  } else {
    return void 0;
  }
}

function createRendererContext({ clientManifest, publicPath, basedir, shouldPrefetch, shouldPreload }) {
  const ctx = {
    shouldPrefetch: shouldPrefetch || (() => true),
    shouldPreload: shouldPreload || ((_file, asType) => ["module", "script", "style"].includes(asType)),
    publicPath: ensureTrailingSlash(publicPath || "/"),
    basedir,
    clientManifest: void 0,
    updateManifest,
    _dependencies: void 0,
    _dependencySets: void 0,
    _entrypoints: void 0,
    _dynamicEntrypoints: void 0
  };
  function updateManifest(clientManifest2) {
    const manifest = normalizeClientManifest(clientManifest2);
    const manifestEntries = Object.entries(manifest);
    ctx.clientManifest = manifest;
    ctx._dependencies = {};
    ctx._dependencySets = {};
    ctx._entrypoints = manifestEntries.filter((e) => e[1].isEntry).map(([module]) => module);
    ctx._dynamicEntrypoints = manifestEntries.filter((e) => e[1].isDynamicEntry).map(([module]) => module);
    ctx.publicPath = ensureTrailingSlash(publicPath || clientManifest2.publicPath || "/");
  }
  updateManifest(clientManifest);
  return ctx;
}
function isLegacyClientManifest(clientManifest) {
  return "all" in clientManifest && "initial" in clientManifest;
}
function getIdentifier(output) {
  return output ? `_${output}` : null;
}
function normalizeClientManifest(manifest = {}) {
  if (!isLegacyClientManifest(manifest)) {
    return manifest;
  }
  const clientManifest = {};
  for (const outfile of manifest.all) {
    if (isJS(outfile)) {
      clientManifest[getIdentifier(outfile)] = {
        file: outfile
      };
    }
  }
  const first = getIdentifier(manifest.initial.find(isJS));
  if (first) {
    if (!(first in clientManifest)) {
      throw new Error(`Invalid manifest - initial entrypoint not in \`all\`: ${manifest.initial.find(isJS)}`);
    }
    clientManifest[first].css = [];
    clientManifest[first].assets = [];
    clientManifest[first].dynamicImports = [];
  }
  for (const outfile of manifest.initial) {
    if (isJS(outfile)) {
      clientManifest[getIdentifier(outfile)].isEntry = true;
    } else if (isCSS(outfile) && first) {
      clientManifest[first].css.push(outfile);
    } else if (first) {
      clientManifest[first].assets.push(outfile);
    }
  }
  for (const outfile of manifest.async) {
    if (isJS(outfile)) {
      const identifier = getIdentifier(outfile);
      if (!(identifier in clientManifest)) {
        throw new Error(`Invalid manifest - async module not in \`all\`: ${outfile}`);
      }
      clientManifest[identifier].isDynamicEntry = true;
      clientManifest[first].dynamicImports.push(identifier);
    } else if (first) {
      const key = isCSS(outfile) ? "css" : "assets";
      const identifier = getIdentifier(outfile);
      clientManifest[identifier] = {
        file: "",
        [key]: [outfile]
      };
      clientManifest[first].dynamicImports.push(identifier);
    }
  }
  for (const [moduleId, importIndexes] of Object.entries(manifest.modules)) {
    const jsFiles = importIndexes.map((index) => manifest.all[index]).filter(isJS);
    jsFiles.forEach((file) => {
      const identifier = getIdentifier(file);
      clientManifest[identifier] = {
        ...clientManifest[identifier],
        file
      };
    });
    const mappedIndexes = importIndexes.map((index) => manifest.all[index]);
    clientManifest[moduleId] = {
      file: "",
      imports: jsFiles.map((id) => getIdentifier(id)),
      css: mappedIndexes.filter(isCSS),
      assets: mappedIndexes.filter((i) => !isJS(i) && !isCSS(i))
    };
  }
  return clientManifest;
}
function getModuleDependencies(id, rendererContext) {
  if (rendererContext._dependencies[id]) {
    return rendererContext._dependencies[id];
  }
  const dependencies = {
    scripts: {},
    styles: {},
    preload: {},
    prefetch: {}
  };
  const meta = rendererContext.clientManifest[id];
  if (!meta) {
    rendererContext._dependencies[id] = dependencies;
    return dependencies;
  }
  if (meta.file) {
    const type = isModule(meta.file) ? "module" : "script";
    dependencies.scripts[id] = { path: meta.file, type };
    dependencies.preload[id] = { path: meta.file, type };
  }
  for (const css of meta.css || []) {
    dependencies.styles[css] = { path: css };
    dependencies.preload[css] = { path: css, type: "style" };
    dependencies.prefetch[css] = { path: css };
  }
  for (const asset of meta.assets || []) {
    dependencies.preload[asset] = { path: asset, type: getPreloadType(asset), extension: getExtension(asset) };
    dependencies.prefetch[asset] = { path: asset };
  }
  for (const depId of meta.imports || []) {
    const depDeps = getModuleDependencies(depId, rendererContext);
    Object.assign(dependencies.styles, depDeps.styles);
    Object.assign(dependencies.preload, depDeps.preload);
    Object.assign(dependencies.prefetch, depDeps.prefetch);
  }
  const filteredPreload = {};
  for (const id2 in dependencies.preload) {
    const dep = dependencies.preload[id2];
    if (rendererContext.shouldPreload(dep.path, dep.type)) {
      filteredPreload[id2] = dependencies.preload[id2];
    }
  }
  dependencies.preload = filteredPreload;
  rendererContext._dependencies[id] = dependencies;
  return dependencies;
}
function getAllDependencies(ids, rendererContext) {
  const cacheKey = Array.from(ids).join(",");
  if (rendererContext._dependencySets[cacheKey]) {
    return rendererContext._dependencySets[cacheKey];
  }
  const allDeps = {
    scripts: {},
    styles: {},
    preload: {},
    prefetch: {}
  };
  for (const id of ids) {
    const deps = getModuleDependencies(id, rendererContext);
    Object.assign(allDeps.scripts, deps.scripts);
    Object.assign(allDeps.styles, deps.styles);
    Object.assign(allDeps.preload, deps.preload);
    Object.assign(allDeps.prefetch, deps.prefetch);
    for (const dynamicDepId of rendererContext.clientManifest[id]?.dynamicImports || []) {
      const dynamicDeps = getModuleDependencies(dynamicDepId, rendererContext);
      Object.assign(allDeps.prefetch, dynamicDeps.scripts);
      Object.assign(allDeps.prefetch, dynamicDeps.styles);
      Object.assign(allDeps.prefetch, dynamicDeps.preload);
      Object.assign(allDeps.prefetch, dynamicDeps.prefetch);
    }
  }
  for (const id in allDeps.prefetch) {
    if (id in allDeps.preload) {
      delete allDeps.prefetch[id];
    }
  }
  rendererContext._dependencySets[cacheKey] = allDeps;
  return allDeps;
}
function getRequestDependencies(ssrContext, rendererContext) {
  if (ssrContext._requestDependencies) {
    return ssrContext._requestDependencies;
  }
  const ids = new Set(Array.from([
    ...rendererContext._entrypoints,
    ...ssrContext.modules || ssrContext._registeredComponents || []
  ]));
  const deps = getAllDependencies(ids, rendererContext);
  ssrContext._requestDependencies = deps;
  return deps;
}
function renderStyles(ssrContext, rendererContext) {
  const { styles } = getRequestDependencies(ssrContext, rendererContext);
  return Object.values(styles).map(({ path }) => `<link rel="stylesheet" href="${rendererContext.publicPath}${path}">`).join("");
}
function renderResourceHints(ssrContext, rendererContext) {
  return renderPreloadLinks(ssrContext, rendererContext) + renderPrefetchLinks(ssrContext, rendererContext);
}
function renderPreloadLinks(ssrContext, rendererContext) {
  const { preload } = getRequestDependencies(ssrContext, rendererContext);
  return Object.values(preload).map((file) => {
    const rel = file.type === "module" ? "modulepreload" : "preload";
    const as = file.type ? file.type === "module" ? ' as="script"' : ` as="${file.type}"` : "";
    const type = file.type === "font" ? ` type="font/${file.extension}" crossorigin` : "";
    const crossorigin = file.type === "font" || file.type === "module" ? " crossorigin" : "";
    return `<link rel="${rel}" href="${rendererContext.publicPath}${file.path}"${as}${type}${crossorigin}>`;
  }).join("");
}
function renderPrefetchLinks(ssrContext, rendererContext) {
  const { prefetch } = getRequestDependencies(ssrContext, rendererContext);
  return Object.values(prefetch).map(({ path }) => {
    const rel = "prefetch" + (isCSS(path) ? " stylesheet" : "");
    const as = isJS(path) ? ' as="script"' : "";
    return `<link rel="${rel}"${as} href="${rendererContext.publicPath}${path}">`;
  }).join("");
}
function renderScripts(ssrContext, rendererContext) {
  const { scripts } = getRequestDependencies(ssrContext, rendererContext);
  return Object.values(scripts).map(({ path, type }) => `<script${type === "module" ? ' type="module"' : ""} src="${rendererContext.publicPath}${path}"${type !== "module" ? " defer" : ""} crossorigin><\/script>`).join("");
}
function createRenderer(createApp, renderOptions) {
  const rendererContext = createRendererContext(renderOptions);
  return {
    rendererContext,
    async renderToString(ssrContext) {
      ssrContext._registeredComponents = ssrContext._registeredComponents || /* @__PURE__ */ new Set();
      const _createApp = await Promise.resolve(createApp).then((r) => r.default || r);
      const app = await _createApp(ssrContext);
      const html = await renderOptions.renderToString(app, ssrContext);
      const wrap = (fn) => () => fn(ssrContext, rendererContext);
      return {
        html,
        renderResourceHints: wrap(renderResourceHints),
        renderStyles: wrap(renderStyles),
        renderScripts: wrap(renderScripts)
      };
    }
  };
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

var serverRenderer = {exports: {}};

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var serverRenderer_cjs_prod = {};

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(stream);

Object.defineProperty(serverRenderer_cjs_prod, '__esModule', { value: true });

var vue = vue_cjs_prod;
var shared = shared$1.exports;
var compilerSsr = require$$0;

// leading comma for empty string ""
const shouldIgnoreProp = shared.makeMap(`,key,ref,innerHTML,textContent,ref_key,ref_for`);
function ssrRenderAttrs(props, tag) {
    let ret = '';
    for (const key in props) {
        if (shouldIgnoreProp(key) ||
            shared.isOn(key) ||
            (tag === 'textarea' && key === 'value')) {
            continue;
        }
        const value = props[key];
        if (key === 'class') {
            ret += ` class="${ssrRenderClass(value)}"`;
        }
        else if (key === 'style') {
            ret += ` style="${ssrRenderStyle(value)}"`;
        }
        else {
            ret += ssrRenderDynamicAttr(key, value, tag);
        }
    }
    return ret;
}
// render an attr with dynamic (unknown) key.
function ssrRenderDynamicAttr(key, value, tag) {
    if (!isRenderableValue(value)) {
        return ``;
    }
    const attrKey = tag && tag.indexOf('-') > 0
        ? key // preserve raw name on custom elements
        : shared.propsToAttrMap[key] || key.toLowerCase();
    if (shared.isBooleanAttr(attrKey)) {
        return shared.includeBooleanAttr(value) ? ` ${attrKey}` : ``;
    }
    else if (shared.isSSRSafeAttrName(attrKey)) {
        return value === '' ? ` ${attrKey}` : ` ${attrKey}="${shared.escapeHtml(value)}"`;
    }
    else {
        console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${attrKey}`);
        return ``;
    }
}
// Render a v-bind attr with static key. The key is pre-processed at compile
// time and we only need to check and escape value.
function ssrRenderAttr(key, value) {
    if (!isRenderableValue(value)) {
        return ``;
    }
    return ` ${key}="${shared.escapeHtml(value)}"`;
}
function isRenderableValue(value) {
    if (value == null) {
        return false;
    }
    const type = typeof value;
    return type === 'string' || type === 'number' || type === 'boolean';
}
function ssrRenderClass(raw) {
    return shared.escapeHtml(shared.normalizeClass(raw));
}
function ssrRenderStyle(raw) {
    if (!raw) {
        return '';
    }
    if (shared.isString(raw)) {
        return shared.escapeHtml(raw);
    }
    const styles = shared.normalizeStyle(raw);
    return shared.escapeHtml(shared.stringifyStyle(styles));
}

const compileCache = Object.create(null);
function ssrCompile(template, instance) {
    // TODO: This is copied from runtime-core/src/component.ts and should probably be refactored
    const Component = instance.type;
    const { isCustomElement, compilerOptions } = instance.appContext.config;
    const { delimiters, compilerOptions: componentCompilerOptions } = Component;
    const finalCompilerOptions = shared.extend(shared.extend({
        isCustomElement,
        delimiters
    }, compilerOptions), componentCompilerOptions);
    finalCompilerOptions.isCustomElement =
        finalCompilerOptions.isCustomElement || shared.NO;
    finalCompilerOptions.isNativeTag = finalCompilerOptions.isNativeTag || shared.NO;
    const cacheKey = JSON.stringify({
        template,
        compilerOptions: finalCompilerOptions
    }, (key, value) => {
        return shared.isFunction(value) ? value.toString() : value;
    });
    const cached = compileCache[cacheKey];
    if (cached) {
        return cached;
    }
    finalCompilerOptions.onError = (err) => {
        {
            throw err;
        }
    };
    const { code } = compilerSsr.compile(template, finalCompilerOptions);
    return (compileCache[cacheKey] = Function('require', code)(commonjsRequire));
}

function ssrRenderTeleport(parentPush, contentRenderFn, target, disabled, parentComponent) {
    parentPush('<!--teleport start-->');
    const context = parentComponent.appContext.provides[vue.ssrContextKey];
    const teleportBuffers = context.__teleportBuffers || (context.__teleportBuffers = {});
    const targetBuffer = teleportBuffers[target] || (teleportBuffers[target] = []);
    // record current index of the target buffer to handle nested teleports
    // since the parent needs to be rendered before the child
    const bufferIndex = targetBuffer.length;
    let teleportContent;
    if (disabled) {
        contentRenderFn(parentPush);
        teleportContent = `<!--teleport anchor-->`;
    }
    else {
        const { getBuffer, push } = createBuffer();
        contentRenderFn(push);
        push(`<!--teleport anchor-->`);
        teleportContent = getBuffer();
    }
    targetBuffer.splice(bufferIndex, 0, teleportContent);
    parentPush('<!--teleport end-->');
}

const { createComponentInstance, setCurrentRenderingInstance, setupComponent, renderComponentRoot, normalizeVNode } = vue.ssrUtils;
// Each component has a buffer array.
// A buffer array can contain one of the following:
// - plain string
// - A resolved buffer (recursive arrays of strings that can be unrolled
//   synchronously)
// - An async buffer (a Promise that resolves to a resolved buffer)
function createBuffer() {
    let appendable = false;
    const buffer = [];
    return {
        getBuffer() {
            // Return static buffer and await on items during unroll stage
            return buffer;
        },
        push(item) {
            const isStringItem = shared.isString(item);
            if (appendable && isStringItem) {
                buffer[buffer.length - 1] += item;
            }
            else {
                buffer.push(item);
            }
            appendable = isStringItem;
            if (shared.isPromise(item) || (shared.isArray(item) && item.hasAsync)) {
                // promise, or child buffer with async, mark as async.
                // this allows skipping unnecessary await ticks during unroll stage
                buffer.hasAsync = true;
            }
        }
    };
}
function renderComponentVNode(vnode, parentComponent = null, slotScopeId) {
    const instance = createComponentInstance(vnode, parentComponent, null);
    const res = setupComponent(instance, true /* isSSR */);
    const hasAsyncSetup = shared.isPromise(res);
    const prefetches = instance.sp; /* LifecycleHooks.SERVER_PREFETCH */
    if (hasAsyncSetup || prefetches) {
        let p = hasAsyncSetup
            ? res
            : Promise.resolve();
        if (prefetches) {
            p = p
                .then(() => Promise.all(prefetches.map(prefetch => prefetch.call(instance.proxy))))
                // Note: error display is already done by the wrapped lifecycle hook function.
                .catch(() => { });
        }
        return p.then(() => renderComponentSubTree(instance, slotScopeId));
    }
    else {
        return renderComponentSubTree(instance, slotScopeId);
    }
}
function renderComponentSubTree(instance, slotScopeId) {
    const comp = instance.type;
    const { getBuffer, push } = createBuffer();
    if (shared.isFunction(comp)) {
        let root = renderComponentRoot(instance);
        // #5817 scope ID attrs not falling through if functional component doesn't
        // have props
        if (!comp.props) {
            for (const key in instance.attrs) {
                if (key.startsWith(`data-v-`)) {
                    (root.props || (root.props = {}))[key] = ``;
                }
            }
        }
        renderVNode(push, (instance.subTree = root), instance, slotScopeId);
    }
    else {
        if ((!instance.render || instance.render === shared.NOOP) &&
            !instance.ssrRender &&
            !comp.ssrRender &&
            shared.isString(comp.template)) {
            comp.ssrRender = ssrCompile(comp.template, instance);
        }
        // perf: enable caching of computed getters during render
        // since there cannot be state mutations during render.
        for (const e of instance.scope.effects) {
            if (e.computed)
                e.computed._cacheable = true;
        }
        const ssrRender = instance.ssrRender || comp.ssrRender;
        if (ssrRender) {
            // optimized
            // resolve fallthrough attrs
            let attrs = instance.inheritAttrs !== false ? instance.attrs : undefined;
            let hasCloned = false;
            let cur = instance;
            while (true) {
                const scopeId = cur.vnode.scopeId;
                if (scopeId) {
                    if (!hasCloned) {
                        attrs = { ...attrs };
                        hasCloned = true;
                    }
                    attrs[scopeId] = '';
                }
                const parent = cur.parent;
                if (parent && parent.subTree && parent.subTree === cur.vnode) {
                    // parent is a non-SSR compiled component and is rendering this
                    // component as root. inherit its scopeId if present.
                    cur = parent;
                }
                else {
                    break;
                }
            }
            if (slotScopeId) {
                if (!hasCloned)
                    attrs = { ...attrs };
                attrs[slotScopeId.trim()] = '';
            }
            // set current rendering instance for asset resolution
            const prev = setCurrentRenderingInstance(instance);
            ssrRender(instance.proxy, push, instance, attrs, 
            // compiler-optimized bindings
            instance.props, instance.setupState, instance.data, instance.ctx);
            setCurrentRenderingInstance(prev);
        }
        else if (instance.render && instance.render !== shared.NOOP) {
            renderVNode(push, (instance.subTree = renderComponentRoot(instance)), instance, slotScopeId);
        }
        else {
            const componentName = comp.name || comp.__file || `<Anonymous>`;
            vue.warn(`Component ${componentName} is missing template or render function.`);
            push(`<!---->`);
        }
    }
    return getBuffer();
}
function renderVNode(push, vnode, parentComponent, slotScopeId) {
    const { type, shapeFlag, children } = vnode;
    switch (type) {
        case vue.Text:
            push(shared.escapeHtml(children));
            break;
        case vue.Comment:
            push(children ? `<!--${shared.escapeHtmlComment(children)}-->` : `<!---->`);
            break;
        case vue.Static:
            push(children);
            break;
        case vue.Fragment:
            if (vnode.slotScopeIds) {
                slotScopeId =
                    (slotScopeId ? slotScopeId + ' ' : '') + vnode.slotScopeIds.join(' ');
            }
            push(`<!--[-->`); // open
            renderVNodeChildren(push, children, parentComponent, slotScopeId);
            push(`<!--]-->`); // close
            break;
        default:
            if (shapeFlag & 1 /* ELEMENT */) {
                renderElementVNode(push, vnode, parentComponent, slotScopeId);
            }
            else if (shapeFlag & 6 /* COMPONENT */) {
                push(renderComponentVNode(vnode, parentComponent, slotScopeId));
            }
            else if (shapeFlag & 64 /* TELEPORT */) {
                renderTeleportVNode(push, vnode, parentComponent, slotScopeId);
            }
            else if (shapeFlag & 128 /* SUSPENSE */) {
                renderVNode(push, vnode.ssContent, parentComponent, slotScopeId);
            }
            else {
                vue.warn('[@vue/server-renderer] Invalid VNode type:', type, `(${typeof type})`);
            }
    }
}
function renderVNodeChildren(push, children, parentComponent, slotScopeId) {
    for (let i = 0; i < children.length; i++) {
        renderVNode(push, normalizeVNode(children[i]), parentComponent, slotScopeId);
    }
}
function renderElementVNode(push, vnode, parentComponent, slotScopeId) {
    const tag = vnode.type;
    let { props, children, shapeFlag, scopeId, dirs } = vnode;
    let openTag = `<${tag}`;
    if (dirs) {
        props = applySSRDirectives(vnode, props, dirs);
    }
    if (props) {
        openTag += ssrRenderAttrs(props, tag);
    }
    if (scopeId) {
        openTag += ` ${scopeId}`;
    }
    // inherit parent chain scope id if this is the root node
    let curParent = parentComponent;
    let curVnode = vnode;
    while (curParent && curVnode === curParent.subTree) {
        curVnode = curParent.vnode;
        if (curVnode.scopeId) {
            openTag += ` ${curVnode.scopeId}`;
        }
        curParent = curParent.parent;
    }
    if (slotScopeId) {
        openTag += ` ${slotScopeId}`;
    }
    push(openTag + `>`);
    if (!shared.isVoidTag(tag)) {
        let hasChildrenOverride = false;
        if (props) {
            if (props.innerHTML) {
                hasChildrenOverride = true;
                push(props.innerHTML);
            }
            else if (props.textContent) {
                hasChildrenOverride = true;
                push(shared.escapeHtml(props.textContent));
            }
            else if (tag === 'textarea' && props.value) {
                hasChildrenOverride = true;
                push(shared.escapeHtml(props.value));
            }
        }
        if (!hasChildrenOverride) {
            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                push(shared.escapeHtml(children));
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                renderVNodeChildren(push, children, parentComponent, slotScopeId);
            }
        }
        push(`</${tag}>`);
    }
}
function applySSRDirectives(vnode, rawProps, dirs) {
    const toMerge = [];
    for (let i = 0; i < dirs.length; i++) {
        const binding = dirs[i];
        const { dir: { getSSRProps } } = binding;
        if (getSSRProps) {
            const props = getSSRProps(binding, vnode);
            if (props)
                toMerge.push(props);
        }
    }
    return vue.mergeProps(rawProps || {}, ...toMerge);
}
function renderTeleportVNode(push, vnode, parentComponent, slotScopeId) {
    const target = vnode.props && vnode.props.to;
    const disabled = vnode.props && vnode.props.disabled;
    if (!target) {
        if (!disabled) {
            vue.warn(`[@vue/server-renderer] Teleport is missing target prop.`);
        }
        return [];
    }
    if (!shared.isString(target)) {
        vue.warn(`[@vue/server-renderer] Teleport target must be a query selector string.`);
        return [];
    }
    ssrRenderTeleport(push, push => {
        renderVNodeChildren(push, vnode.children, parentComponent, slotScopeId);
    }, target, disabled || disabled === '', parentComponent);
}

const { isVNode } = vue.ssrUtils;
async function unrollBuffer(buffer) {
    if (buffer.hasAsync) {
        let ret = '';
        for (let i = 0; i < buffer.length; i++) {
            let item = buffer[i];
            if (shared.isPromise(item)) {
                item = await item;
            }
            if (shared.isString(item)) {
                ret += item;
            }
            else {
                ret += await unrollBuffer(item);
            }
        }
        return ret;
    }
    else {
        // sync buffer can be more efficiently unrolled without unnecessary await
        // ticks
        return unrollBufferSync(buffer);
    }
}
function unrollBufferSync(buffer) {
    let ret = '';
    for (let i = 0; i < buffer.length; i++) {
        let item = buffer[i];
        if (shared.isString(item)) {
            ret += item;
        }
        else {
            // since this is a sync buffer, child buffers are never promises
            ret += unrollBufferSync(item);
        }
    }
    return ret;
}
async function renderToString(input, context = {}) {
    if (isVNode(input)) {
        // raw vnode, wrap with app (for context)
        return renderToString(vue.createApp({ render: () => input }), context);
    }
    // rendering an app
    const vnode = vue.createVNode(input._component, input._props);
    vnode.appContext = input._context;
    // provide the ssr context to the tree
    input.provide(vue.ssrContextKey, context);
    const buffer = await renderComponentVNode(vnode);
    const result = await unrollBuffer(buffer);
    await resolveTeleports(context);
    return result;
}
async function resolveTeleports(context) {
    if (context.__teleportBuffers) {
        context.teleports = context.teleports || {};
        for (const key in context.__teleportBuffers) {
            // note: it's OK to await sequentially here because the Promises were
            // created eagerly in parallel.
            context.teleports[key] = await unrollBuffer((await Promise.all(context.__teleportBuffers[key])));
        }
    }
}

const { isVNode: isVNode$1 } = vue.ssrUtils;
async function unrollBuffer$1(buffer, stream) {
    if (buffer.hasAsync) {
        for (let i = 0; i < buffer.length; i++) {
            let item = buffer[i];
            if (shared.isPromise(item)) {
                item = await item;
            }
            if (shared.isString(item)) {
                stream.push(item);
            }
            else {
                await unrollBuffer$1(item, stream);
            }
        }
    }
    else {
        // sync buffer can be more efficiently unrolled without unnecessary await
        // ticks
        unrollBufferSync$1(buffer, stream);
    }
}
function unrollBufferSync$1(buffer, stream) {
    for (let i = 0; i < buffer.length; i++) {
        let item = buffer[i];
        if (shared.isString(item)) {
            stream.push(item);
        }
        else {
            // since this is a sync buffer, child buffers are never promises
            unrollBufferSync$1(item, stream);
        }
    }
}
function renderToSimpleStream(input, context, stream) {
    if (isVNode$1(input)) {
        // raw vnode, wrap with app (for context)
        return renderToSimpleStream(vue.createApp({ render: () => input }), context, stream);
    }
    // rendering an app
    const vnode = vue.createVNode(input._component, input._props);
    vnode.appContext = input._context;
    // provide the ssr context to the tree
    input.provide(vue.ssrContextKey, context);
    Promise.resolve(renderComponentVNode(vnode))
        .then(buffer => unrollBuffer$1(buffer, stream))
        .then(() => resolveTeleports(context))
        .then(() => stream.push(null))
        .catch(error => {
        stream.destroy(error);
    });
    return stream;
}
/**
 * @deprecated
 */
function renderToStream(input, context = {}) {
    console.warn(`[@vue/server-renderer] renderToStream is deprecated - use renderToNodeStream instead.`);
    return renderToNodeStream(input, context);
}
function renderToNodeStream(input, context = {}) {
    const stream = new (require$$3.Readable)({ read() { } })
        ;
    if (!stream) {
        throw new Error(`ESM build of renderToStream() does not support renderToNodeStream(). ` +
            `Use pipeToNodeWritable() with an existing Node.js Writable stream ` +
            `instance instead.`);
    }
    return renderToSimpleStream(input, context, stream);
}
function pipeToNodeWritable(input, context = {}, writable) {
    renderToSimpleStream(input, context, {
        push(content) {
            if (content != null) {
                writable.write(content);
            }
            else {
                writable.end();
            }
        },
        destroy(err) {
            writable.destroy(err);
        }
    });
}
function renderToWebStream(input, context = {}) {
    if (typeof ReadableStream !== 'function') {
        throw new Error(`ReadableStream constructor is not available in the global scope. ` +
            `If the target environment does support web streams, consider using ` +
            `pipeToWebWritable() with an existing WritableStream instance instead.`);
    }
    const encoder = new TextEncoder();
    let cancelled = false;
    return new ReadableStream({
        start(controller) {
            renderToSimpleStream(input, context, {
                push(content) {
                    if (cancelled)
                        return;
                    if (content != null) {
                        controller.enqueue(encoder.encode(content));
                    }
                    else {
                        controller.close();
                    }
                },
                destroy(err) {
                    controller.error(err);
                }
            });
        },
        cancel() {
            cancelled = true;
        }
    });
}
function pipeToWebWritable(input, context = {}, writable) {
    const writer = writable.getWriter();
    const encoder = new TextEncoder();
    // #4287 CloudFlare workers do not implement `ready` property
    let hasReady = false;
    try {
        hasReady = shared.isPromise(writer.ready);
    }
    catch (e) { }
    renderToSimpleStream(input, context, {
        async push(content) {
            if (hasReady) {
                await writer.ready;
            }
            if (content != null) {
                return writer.write(encoder.encode(content));
            }
            else {
                return writer.close();
            }
        },
        destroy(err) {
            // TODO better error handling?
            console.log(err);
            writer.close();
        }
    });
}

function ssrRenderComponent(comp, props = null, children = null, parentComponent = null, slotScopeId) {
    return renderComponentVNode(vue.createVNode(comp, props, children), parentComponent, slotScopeId);
}

function ssrRenderSlot(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId) {
    // template-compiled slots are always rendered as fragments
    push(`<!--[-->`);
    ssrRenderSlotInner(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId);
    push(`<!--]-->`);
}
function ssrRenderSlotInner(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId, transition) {
    const slotFn = slots[slotName];
    if (slotFn) {
        const slotBuffer = [];
        const bufferedPush = (item) => {
            slotBuffer.push(item);
        };
        const ret = slotFn(slotProps, bufferedPush, parentComponent, slotScopeId ? ' ' + slotScopeId : '');
        if (shared.isArray(ret)) {
            // normal slot
            renderVNodeChildren(push, ret, parentComponent, slotScopeId);
        }
        else {
            // ssr slot.
            // check if the slot renders all comments, in which case use the fallback
            let isEmptySlot = true;
            if (transition) {
                isEmptySlot = false;
            }
            else {
                for (let i = 0; i < slotBuffer.length; i++) {
                    if (!isComment(slotBuffer[i])) {
                        isEmptySlot = false;
                        break;
                    }
                }
            }
            if (isEmptySlot) {
                if (fallbackRenderFn) {
                    fallbackRenderFn();
                }
            }
            else {
                for (let i = 0; i < slotBuffer.length; i++) {
                    push(slotBuffer[i]);
                }
            }
        }
    }
    else if (fallbackRenderFn) {
        fallbackRenderFn();
    }
}
const commentRE = /<!--[^]*?-->/gm;
function isComment(item) {
    return (typeof item === 'string' &&
        commentRE.test(item) &&
        !item.replace(commentRE, '').trim());
}

function ssrInterpolate(value) {
    return shared.escapeHtml(shared.toDisplayString(value));
}

function ssrRenderList(source, renderItem) {
    if (shared.isArray(source) || shared.isString(source)) {
        for (let i = 0, l = source.length; i < l; i++) {
            renderItem(source[i], i);
        }
    }
    else if (typeof source === 'number') {
        for (let i = 0; i < source; i++) {
            renderItem(i + 1, i);
        }
    }
    else if (shared.isObject(source)) {
        if (source[Symbol.iterator]) {
            const arr = Array.from(source);
            for (let i = 0, l = arr.length; i < l; i++) {
                renderItem(arr[i], i);
            }
        }
        else {
            const keys = Object.keys(source);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                renderItem(source[key], key, i);
            }
        }
    }
}

async function ssrRenderSuspense(push, { default: renderContent }) {
    if (renderContent) {
        renderContent();
    }
    else {
        push(`<!---->`);
    }
}

function ssrGetDirectiveProps(instance, dir, value, arg, modifiers = {}) {
    if (typeof dir !== 'function' && dir.getSSRProps) {
        return (dir.getSSRProps({
            dir,
            instance,
            value,
            oldValue: undefined,
            arg,
            modifiers
        }, null) || {});
    }
    return {};
}

const ssrLooseEqual = shared.looseEqual;
function ssrLooseContain(arr, value) {
    return shared.looseIndexOf(arr, value) > -1;
}
// for <input :type="type" v-model="model" value="value">
function ssrRenderDynamicModel(type, model, value) {
    switch (type) {
        case 'radio':
            return shared.looseEqual(model, value) ? ' checked' : '';
        case 'checkbox':
            return (shared.isArray(model) ? ssrLooseContain(model, value) : model)
                ? ' checked'
                : '';
        default:
            // text types
            return ssrRenderAttr('value', model);
    }
}
// for <input v-bind="obj" v-model="model">
function ssrGetDynamicModelProps(existingProps = {}, model) {
    const { type, value } = existingProps;
    switch (type) {
        case 'radio':
            return shared.looseEqual(model, value) ? { checked: true } : null;
        case 'checkbox':
            return (shared.isArray(model) ? ssrLooseContain(model, value) : model)
                ? { checked: true }
                : null;
        default:
            // text types
            return { value: model };
    }
}

vue.initDirectivesForSSR();

serverRenderer_cjs_prod.ssrIncludeBooleanAttr = shared.includeBooleanAttr;
serverRenderer_cjs_prod.pipeToNodeWritable = pipeToNodeWritable;
serverRenderer_cjs_prod.pipeToWebWritable = pipeToWebWritable;
serverRenderer_cjs_prod.renderToNodeStream = renderToNodeStream;
serverRenderer_cjs_prod.renderToSimpleStream = renderToSimpleStream;
serverRenderer_cjs_prod.renderToStream = renderToStream;
serverRenderer_cjs_prod.renderToString = renderToString;
serverRenderer_cjs_prod.renderToWebStream = renderToWebStream;
serverRenderer_cjs_prod.ssrGetDirectiveProps = ssrGetDirectiveProps;
serverRenderer_cjs_prod.ssrGetDynamicModelProps = ssrGetDynamicModelProps;
serverRenderer_cjs_prod.ssrInterpolate = ssrInterpolate;
serverRenderer_cjs_prod.ssrLooseContain = ssrLooseContain;
serverRenderer_cjs_prod.ssrLooseEqual = ssrLooseEqual;
serverRenderer_cjs_prod.ssrRenderAttr = ssrRenderAttr;
serverRenderer_cjs_prod.ssrRenderAttrs = ssrRenderAttrs;
serverRenderer_cjs_prod.ssrRenderClass = ssrRenderClass;
serverRenderer_cjs_prod.ssrRenderComponent = ssrRenderComponent;
serverRenderer_cjs_prod.ssrRenderDynamicAttr = ssrRenderDynamicAttr;
serverRenderer_cjs_prod.ssrRenderDynamicModel = ssrRenderDynamicModel;
serverRenderer_cjs_prod.ssrRenderList = ssrRenderList;
serverRenderer_cjs_prod.ssrRenderSlot = ssrRenderSlot;
serverRenderer_cjs_prod.ssrRenderSlotInner = ssrRenderSlotInner;
serverRenderer_cjs_prod.ssrRenderStyle = ssrRenderStyle;
serverRenderer_cjs_prod.ssrRenderSuspense = ssrRenderSuspense;
serverRenderer_cjs_prod.ssrRenderTeleport = ssrRenderTeleport;
serverRenderer_cjs_prod.ssrRenderVNode = renderVNode;

(function (module) {

	{
	  module.exports = serverRenderer_cjs_prod;
	}
} (serverRenderer));

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const htmlTemplate = (params) => `<!DOCTYPE html>
<html ${params.HTML_ATTRS}>

<head ${params.HEAD_ATTRS}>
  ${params.HEAD}
</head>

<body ${params.BODY_ATTRS}>${params.BODY_PREPEND}
  ${params.APP}
</body>

</html>`;

const getClientManifest = () => import('../app/client.manifest.mjs').then((r) => r.default || r);
const getServerEntry = () => import('../app/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const clientManifest = await getClientManifest();
  if (!clientManifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const renderToString = async (input, context) => {
    const html = await serverRenderer.exports.renderToString(input, context);
    return `<div id="__nuxt">${html}</div>`;
  };
  return createRenderer(createSSRApp, {
    clientManifest,
    renderToString,
    publicPath: buildAssetsURL()
  });
});
const getSPARenderer = lazyCachedFunction(async () => {
  const clientManifest = await getClientManifest();
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      }
    };
    let entryFiles = Object.values(clientManifest).filter((fileValue) => fileValue.isEntry);
    if ("all" in clientManifest && "initial" in clientManifest) {
      entryFiles = clientManifest.initial.map((file) => ({ file }));
    }
    return Promise.resolve({
      html: '<div id="__nuxt"></div>',
      renderResourceHints: () => "",
      renderStyles: () => entryFiles.flatMap(({ css }) => css).filter((css) => css != null).map((file) => `<link rel="stylesheet" href="${buildAssetsURL(file)}">`).join(""),
      renderScripts: () => entryFiles.map(({ file }) => {
        const isMJS = !file.endsWith(".js");
        return `<script ${isMJS ? 'type="module"' : ""} src="${buildAssetsURL(file)}"><\/script>`;
      }).join("")
    });
  };
  return { renderToString };
});
const renderer = eventHandler(async (event) => {
  const ssrError = event.req.url?.startsWith("/__nuxt_error") ? useQuery(event) : null;
  const url = ssrError?.url || event.req.url;
  const ssrContext = {
    url,
    event,
    req: event.req,
    res: event.res,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.req.headers["x-nuxt-no-ssr"],
    error: ssrError,
    nuxt: void 0,
    payload: void 0
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const rendered = await renderer.renderToString(ssrContext).catch((e) => {
    if (!ssrError) {
      throw e;
    }
  });
  if (!rendered) {
    return;
  }
  if (event.res.writableEnded) {
    return;
  }
  if (ssrContext.error && !ssrError) {
    throw ssrContext.error;
  }
  if (ssrContext.nuxt?.hooks) {
    await ssrContext.nuxt.hooks.callHook("app:rendered");
  }
  const html = await renderHTML(ssrContext.payload, rendered, ssrContext);
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  return html;
});
async function renderHTML(payload, rendered, ssrContext) {
  const state = `<script>window.__NUXT__=${devalue(payload)}<\/script>`;
  rendered.meta = rendered.meta || {};
  if (ssrContext.renderMeta) {
    Object.assign(rendered.meta, await ssrContext.renderMeta());
  }
  return htmlTemplate({
    HTML_ATTRS: rendered.meta.htmlAttrs || "",
    HEAD_ATTRS: rendered.meta.headAttrs || "",
    HEAD: (rendered.meta.headTags || "") + rendered.renderResourceHints() + rendered.renderStyles() + (ssrContext.styles || ""),
    BODY_ATTRS: rendered.meta.bodyAttrs || "",
    BODY_PREPEND: ssrContext.teleports?.body || "",
    APP: (rendered.meta.bodyScriptsPrepend || "") + rendered.html + state + rendered.renderScripts() + (rendered.meta.bodyScripts || "")
  });
}
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': renderer
});

export { renderer$1 as r, serverRenderer as s };
//# sourceMappingURL=renderer.mjs.map
