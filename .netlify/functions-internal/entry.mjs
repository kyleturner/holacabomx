import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import { h as deserializeManifest } from './chunks/astro.cd78f4a4.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';

const _page0  = () => import('./chunks/index@_@astro.4db5b107.mjs');
const _page1  = () => import('./chunks/_slug_@_@astro.d176a21f.mjs');
const _page2  = () => import('./chunks/experiences@_@astro.70e2cbad.mjs');
const _page3  = () => import('./chunks/discover@_@astro.37d669fc.mjs');
const _page4  = () => import('./chunks/contact@_@astro.bef67307.mjs');
const _page5  = () => import('./chunks/_slug_@_@astro.095af998.mjs');
const _page6  = () => import('./chunks/_slug_@_@astro.6ae04c12.mjs');
const _page7  = () => import('./chunks/guides@_@astro.b4d2d21f.mjs');
const _page8  = () => import('./chunks/_tag_@_@astro.352afce4.mjs');
const _page9  = () => import('./chunks/404@_@astro.f25aa24b.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/experiences/[slug].astro", _page1],["src/pages/experiences.astro", _page2],["src/pages/discover.astro", _page3],["src/pages/contact.astro", _page4],["src/pages/teasers/[slug].astro", _page5],["src/pages/guides/[slug].astro", _page6],["src/pages/guides.astro", _page7],["src/pages/tags/[tag].astro", _page8],["src/pages/404.astro", _page9]]);const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/experiences","type":"page","pattern":"^\\/experiences\\/?$","segments":[[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experiences.astro","pathname":"/experiences","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"discover/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/discover","type":"page","pattern":"^\\/discover\\/?$","segments":[[{"content":"discover","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/discover.astro","pathname":"/discover","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"guides/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/guides","type":"page","pattern":"^\\/guides\\/?$","segments":[[{"content":"guides","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/guides.astro","pathname":"/guides","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://holacabo.mx","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/kturner/Projects/holacabomx/src/pages/guides.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/guides@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/kturner/Projects/holacabomx/src/pages/guides/[slug].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/guides/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/kturner/Projects/holacabomx/src/pages/teasers/[slug].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/teasers/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.4db5b107.mjs","\u0000@astro-page:src/pages/experiences/[slug]@_@astro":"chunks/_slug_@_@astro.d176a21f.mjs","\u0000@astro-page:src/pages/experiences@_@astro":"chunks/experiences@_@astro.70e2cbad.mjs","\u0000@astro-page:src/pages/discover@_@astro":"chunks/discover@_@astro.37d669fc.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact@_@astro.bef67307.mjs","\u0000@astro-page:src/pages/teasers/[slug]@_@astro":"chunks/_slug_@_@astro.095af998.mjs","\u0000@astro-page:src/pages/guides/[slug]@_@astro":"chunks/_slug_@_@astro.6ae04c12.mjs","\u0000@astro-page:src/pages/guides@_@astro":"chunks/guides@_@astro.b4d2d21f.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag_@_@astro.352afce4.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.f25aa24b.mjs","/Users/kturner/Projects/holacabomx/node_modules/.pnpm/@astrojs+image@0.14.1_astro@2.6.0_sharp@0.31.3/node_modules/@astrojs/image/dist/loaders/sharp.js":"chunks/sharp.b69a0e07.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/5-must-try-sanjose-local-restaurants.md?astroContentCollectionEntry=true":"chunks/5-must-try-sanjose-local-restaurants.c2d5083d.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/hidden-waterfalls-of-los-cabos.md?astroContentCollectionEntry=true":"chunks/hidden-waterfalls-of-los-cabos.af1823d3.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/kitchensink.md?astroContentCollectionEntry=true":"chunks/kitchensink.245b1abe.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/our-cabo-bar-crawl.md?astroContentCollectionEntry=true":"chunks/our-cabo-bar-crawl.48fb83be.mjs","/Users/kturner/Projects/holacabomx/src/content/guides/cabo.mdx?astroContentCollectionEntry=true":"chunks/cabo.0612ce9c.mjs","/Users/kturner/Projects/holacabomx/src/content/guides/sanjose.mdx?astroContentCollectionEntry=true":"chunks/sanjose.e4928400.mjs","/Users/kturner/Projects/holacabomx/src/content/guides/todos.mdx?astroContentCollectionEntry=true":"chunks/todos.0e33b3b2.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/baja-explorer-pack.mdx?astroContentCollectionEntry=true":"chunks/baja-explorer-pack.8a9485c4.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/cabo.mdx?astroContentCollectionEntry=true":"chunks/cabo.99eacbf0.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/east-cape.mdx?astroContentCollectionEntry=true":"chunks/east-cape.82cef6ff.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/sanjose.mdx?astroContentCollectionEntry=true":"chunks/sanjose.26b38f0d.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/todos.mdx?astroContentCollectionEntry=true":"chunks/todos.6e89c5aa.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/valle-de-guadalupe.mdx?astroContentCollectionEntry=true":"chunks/valle-de-guadalupe.09935e0b.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/5-must-try-sanjose-local-restaurants.md?astroPropagatedAssets":"chunks/5-must-try-sanjose-local-restaurants.7e73cab5.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/hidden-waterfalls-of-los-cabos.md?astroPropagatedAssets":"chunks/hidden-waterfalls-of-los-cabos.fd8ea0e2.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/kitchensink.md?astroPropagatedAssets":"chunks/kitchensink.5e50e303.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/our-cabo-bar-crawl.md?astroPropagatedAssets":"chunks/our-cabo-bar-crawl.9f266f52.mjs","/Users/kturner/Projects/holacabomx/src/content/guides/cabo.mdx?astroPropagatedAssets":"chunks/cabo.854d6f75.mjs","/Users/kturner/Projects/holacabomx/src/content/guides/sanjose.mdx?astroPropagatedAssets":"chunks/sanjose.d4ce875f.mjs","/Users/kturner/Projects/holacabomx/src/content/guides/todos.mdx?astroPropagatedAssets":"chunks/todos.3eb0bfaf.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/baja-explorer-pack.mdx?astroPropagatedAssets":"chunks/baja-explorer-pack.365bb0c0.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/cabo.mdx?astroPropagatedAssets":"chunks/cabo.fa3a6f38.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/east-cape.mdx?astroPropagatedAssets":"chunks/east-cape.9aed4236.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/sanjose.mdx?astroPropagatedAssets":"chunks/sanjose.f91e1c6f.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/todos.mdx?astroPropagatedAssets":"chunks/todos.c21d0760.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/valle-de-guadalupe.mdx?astroPropagatedAssets":"chunks/valle-de-guadalupe.39f60228.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/5-must-try-sanjose-local-restaurants.md":"chunks/5-must-try-sanjose-local-restaurants.59135a6f.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/hidden-waterfalls-of-los-cabos.md":"chunks/hidden-waterfalls-of-los-cabos.d52598c5.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/kitchensink.md":"chunks/kitchensink.ed99cd2a.mjs","/Users/kturner/Projects/holacabomx/src/content/experiences/our-cabo-bar-crawl.md":"chunks/our-cabo-bar-crawl.abb8a0a7.mjs","/Users/kturner/Projects/holacabomx/src/content/guides/cabo.mdx":"chunks/cabo.dcbe3fbb.mjs","/Users/kturner/Projects/holacabomx/src/content/guides/sanjose.mdx":"chunks/sanjose.03e6a444.mjs","/Users/kturner/Projects/holacabomx/src/content/guides/todos.mdx":"chunks/todos.59a2f386.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/baja-explorer-pack.mdx":"chunks/baja-explorer-pack.ff3934ae.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/cabo.mdx":"chunks/cabo.fb0c80b6.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/east-cape.mdx":"chunks/east-cape.063aea2a.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/sanjose.mdx":"chunks/sanjose.e10903b9.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/todos.mdx":"chunks/todos.096e9948.mjs","/Users/kturner/Projects/holacabomx/src/content/teasers/valle-de-guadalupe.mdx":"chunks/valle-de-guadalupe.793e67d5.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.fa6a42ad.js","@astrojs/react/client.js":"_astro/client.c67de31f.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/contact.c6a797f7.jpeg","/_astro/holacabo.12a31ccf.svg","/_astro/cactus.912e7c8e.svg","/_astro/inter-cyrillic-variable-wghtOnly-normal.262a1054.woff2","/_astro/inter-greek-variable-wghtOnly-normal.89b4a3fe.woff2","/_astro/inter-cyrillic-ext-variable-wghtOnly-normal.848492d3.woff2","/_astro/inter-latin-variable-wghtOnly-normal.450f3ba4.woff2","/_astro/inter-vietnamese-variable-wghtOnly-normal.ac4e131c.woff2","/_astro/inter-greek-ext-variable-wghtOnly-normal.fe977ddb.woff2","/_astro/inter-latin-ext-variable-wghtOnly-normal.45606f83.woff2","/_astro/beaches.dc61dfea.jpeg","/_astro/hotels.c2041df6.jpeg","/_astro/cocktails.8b80e951.jpeg","/_astro/events.e98e5da0.jpeg","/_astro/food.df2f4ccb.jpeg","/_astro/holacabo_hover.1848d264.svg","/_astro/holacabo-white-transparent_hover.183dfe6a.png","/_astro/transportation.f5148917.png","/_astro/holacabo-white-transparent.5d6aa7f3.png","/_astro/activities.a584a371.png","/_astro/404.9ffc56ef.css","/_astro/_slug_.b79848b5.css","/_astro/_slug_.42d3e6d5.css","/_astro/_slug_.e630ea94.css","/_astro/contact.8679c433.css","/_astro/guides.a9d1cdb7.css","/_astro/index.ac330491.css","/favicon.svg","/hero3.jpeg","/opengraph.jpg","/robots.txt","/_astro/client.c67de31f.js","/index.html","/experiences/index.html","/discover/index.html","/contact/index.html","/guides/index.html","/404.html"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
