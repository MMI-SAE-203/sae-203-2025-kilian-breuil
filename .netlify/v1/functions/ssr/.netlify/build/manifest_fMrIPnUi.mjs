import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_BZPsnJEQ.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/kilia/OneDrive/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA/GitHub/sae-203-2025-kilian-breuil/","cacheDir":"file:///C:/Users/kilia/OneDrive/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA/GitHub/sae-203-2025-kilian-breuil/node_modules/.astro/","outDir":"file:///C:/Users/kilia/OneDrive/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA/GitHub/sae-203-2025-kilian-breuil/dist/","srcDir":"file:///C:/Users/kilia/OneDrive/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA/GitHub/sae-203-2025-kilian-breuil/src/","publicDir":"file:///C:/Users/kilia/OneDrive/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA/GitHub/sae-203-2025-kilian-breuil/public/","buildClientDir":"file:///C:/Users/kilia/OneDrive/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA/GitHub/sae-203-2025-kilian-breuil/dist/","buildServerDir":"file:///C:/Users/kilia/OneDrive/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA/GitHub/sae-203-2025-kilian-breuil/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Bk4Amx6l.css"}],"routeData":{"route":"/apropos","isIndex":true,"type":"page","pattern":"^\\/apropos\\/?$","segments":[[{"content":"apropos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apropos/index.astro","pathname":"/apropos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Bk4Amx6l.css"}],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Bk4Amx6l.css"}],"routeData":{"route":"/infospratique","isIndex":true,"type":"page","pattern":"^\\/infospratique\\/?$","segments":[[{"content":"infospratique","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/infospratique/index.astro","pathname":"/infospratique","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Bk4Amx6l.css"}],"routeData":{"route":"/invite/[id]","isIndex":false,"type":"page","pattern":"^\\/invite\\/([^/]+?)\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invite/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Bk4Amx6l.css"}],"routeData":{"route":"/invite","isIndex":true,"type":"page","pattern":"^\\/invite\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite/index.astro","pathname":"/invite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Bk4Amx6l.css"}],"routeData":{"route":"/programmeactivite/[id]","isIndex":false,"type":"page","pattern":"^\\/programmeactivite\\/([^/]+?)\\/?$","segments":[[{"content":"programmeactivite","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/programmeactivite/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Bk4Amx6l.css"}],"routeData":{"route":"/programmeactivite","isIndex":true,"type":"page","pattern":"^\\/programmeactivite\\/?$","segments":[[{"content":"programmeactivite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programmeactivite/index.astro","pathname":"/programmeactivite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Bk4Amx6l.css"}],"routeData":{"route":"/programmefilm/[id]","isIndex":false,"type":"page","pattern":"^\\/Programmefilm\\/([^/]+?)\\/?$","segments":[[{"content":"Programmefilm","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/Programmefilm/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Bk4Amx6l.css"}],"routeData":{"route":"/programmefilm","isIndex":true,"type":"page","pattern":"^\\/Programmefilm\\/?$","segments":[[{"content":"Programmefilm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Programmefilm/index.astro","pathname":"/Programmefilm","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Bk4Amx6l.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/Programmefilm/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/Programmefilm/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/apropos/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/infospratique/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/invite/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/invite/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/programmeactivite/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/pages/programmeactivite/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/apropos/index@_@astro":"pages/apropos.astro.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/infospratique/index@_@astro":"pages/infospratique.astro.mjs","\u0000@astro-page:src/pages/invite/[id]@_@astro":"pages/invite/_id_.astro.mjs","\u0000@astro-page:src/pages/invite/index@_@astro":"pages/invite.astro.mjs","\u0000@astro-page:src/pages/programmeactivite/[id]@_@astro":"pages/programmeactivite/_id_.astro.mjs","\u0000@astro-page:src/pages/programmeactivite/index@_@astro":"pages/programmeactivite.astro.mjs","\u0000@astro-page:src/pages/Programmefilm/[id]@_@astro":"pages/programmefilm/_id_.astro.mjs","\u0000@astro-page:src/pages/Programmefilm/index@_@astro":"pages/programmefilm.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_fMrIPnUi.mjs","C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D_jpbsrX.mjs","C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DO4CWw4M.js","astro:scripts/page.js":"_astro/page.BCFd37Sx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),o=document.querySelector(\"#menu\"),c=document.body;e&&o&&e.addEventListener(\"click\",()=>{const n=e.ariaExpanded===\"true\",t=!n;e.ariaExpanded=String(t),o.ariaHidden=String(n),c.classList.toggle(\"noscroll\",t)});"]],"assets":["/_astro/image 6.BJAoN2Rs.png","/_astro/image 7.BuFOtA5u.png","/_astro/image 23.CVvYzZQc.png","/_astro/image 32.C3a0EiJF.png","/_astro/image 33-1.sHt0V3Hs.png","/_astro/image 25.Cx1ZD9pJ.png","/_astro/image 10._z5-o-9q.png","/_astro/image 24.BxcYFbv1.png","/_astro/image 27.Cs9H46SF.png","/_astro/image 26.WicCiQo6.png","/_astro/image 28.lcp3m4sc.png","/_astro/image 29.DpGKbG-Y.png","/_astro/image 11.DaWG5QGa.png","/_astro/image 30.fcM7w9N3.png","/_astro/image 31.RBM4t-K7.png","/_astro/logosite.rzGUb2bY.svg","/_astro/IconInstagram.BJyPoKIl.svg","/_astro/IconFacebook.CUSe2Mo7.svg","/_astro/tiktok.DklwUbkl.svg","/_astro/Youtube.CxKf8XJ5.svg","/_astro/_id_.Bk4Amx6l.css","/favicon.svg","/_astro/page.BCFd37Sx.js","/_astro/page.BCFd37Sx.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"osLh0RWbqZXqH2bJ3KtHQz6RmgZxo1vOzKU7TUTPdy4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
