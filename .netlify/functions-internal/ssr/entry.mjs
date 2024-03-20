import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ULwEQVkC.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_B-Gtxt2E.mjs');
const _page1 = () => import('./chunks/MarkdownPostLayout_C8-rizI-.mjs');
const _page2 = () => import('./chunks/Post_xagj-8ax.mjs');
const _page3 = () => import('./chunks/About_DuG_5Dd5.mjs');
const _page4 = () => import('./chunks/Contact_Dk9jnnEm.mjs');
const _page5 = () => import('./chunks/Footer_CeRLFAP1.mjs');
const _page6 = () => import('./chunks/Header_CCbvbHlB.mjs');
const _page7 = () => import('./chunks/Projects_o_aLVY3M.mjs');
const _page8 = () => import('./chunks/Stack_C14x1FR7.mjs');
const _page9 = () => import('./chunks/index_CEn8YXar.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/posts/MarkdownPostLayout.astro", _page1],
    ["src/pages/posts/Post.md", _page2],
    ["src/pages/sections/About.astro", _page3],
    ["src/pages/sections/Contact.astro", _page4],
    ["src/pages/sections/Footer.astro", _page5],
    ["src/pages/sections/Header.astro", _page6],
    ["src/pages/sections/Projects.astro", _page7],
    ["src/pages/sections/Stack.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "7245a3a4-8c94-4737-bd2b-75598f5bc614"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
