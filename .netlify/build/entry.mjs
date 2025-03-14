import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Ci2WX9MY.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/apropos.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/infospratique.astro.mjs');
const _page4 = () => import('./pages/invite/_id_.astro.mjs');
const _page5 = () => import('./pages/invite.astro.mjs');
const _page6 = () => import('./pages/programmeactivite/_id_.astro.mjs');
const _page7 = () => import('./pages/programmeactivite.astro.mjs');
const _page8 = () => import('./pages/programmefilm/_id_.astro.mjs');
const _page9 = () => import('./pages/programmefilm.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/apropos/index.astro", _page1],
    ["src/pages/contact/index.astro", _page2],
    ["src/pages/infospratique/index.astro", _page3],
    ["src/pages/invite/[id].astro", _page4],
    ["src/pages/invite/index.astro", _page5],
    ["src/pages/programmeactivite/[id].astro", _page6],
    ["src/pages/programmeactivite/index.astro", _page7],
    ["src/pages/Programmefilm/[id].astro", _page8],
    ["src/pages/Programmefilm/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c23eda79-bc74-461d-b8c7-1d6c441df37d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
