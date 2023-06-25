import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './astro.cd78f4a4.mjs';
import './prerender.1007ad3c.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
/* empty css                          *//* empty css                           *//* empty css                            *//* empty css                           *//* empty css                           *//* empty css                           */import '@storyblok/js';
/* empty css                        */import 'svgo';

const frontmatter = {
  "draft": false,
  "paid": true,
  "title": "Our Exclusive Guide to San Jose",
  "subtitle": "",
  "snippet": "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat",
  "publishDate": "2023-05-05 15:36",
  "image": {
    "src": "https://images.unsplash.com/photo-1542393545-10f5cde2c810?&fit=crop&w=430&h=240",
    "alt": "typography"
  },
  "category": "Guides",
  "author": "Leigh Turner",
  "tags": ["cabo", "experiences", "dining", "nightlife", "activities"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "hola",
    "text": "Hola!"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "hola",
      children: "Hola!"
    }), "\n", createVNode(_components.p, {
      children: "TODO: San Jose after Cabo template complete"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/guides/sanjose.mdx";
const file = "/Users/kturner/Projects/holacabomx/src/content/guides/sanjose.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
