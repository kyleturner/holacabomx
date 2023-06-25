import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './astro.cd78f4a4.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const frontmatter = {
  "draft": true,
  "paid": false,
  "title": "Todos Santos & Pescadero",
  "subtitle": "",
  "snippet": "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat",
  "publishDate": "2023-10-01 15:36",
  "image": {
    "src": "https://images.unsplash.com/photo-1667670650077-d474b7b0a1a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=100",
    "alt": "typography"
  },
  "category": "Guides",
  "author": "Leigh Turner",
  "tags": ["cabo", "experiences", "dining", "nightlife", "activities"],
  "plan": {
    "name": "The Locals Guide to Los Cabos",
    "detail": "Hola Cabo's Paid Guide to Cabo San Lucas",
    "price": 20,
    "frequency": "yearly",
    "features": ["Curated insider recommendations from local experts", "Comprehensive guide covering the best restaurants, nightlife, hotels, and activities in Los Cabos", "Tips and tricks to make the most out of your vacation", "Off-the-beaten-path suggestions to discover hidden gems in Los Cabos", "High-quality visuals and detailed descriptions of each recommendation", "Money-back guarantee for customer satisfaction", "Lifetime updates via email, guide refreshed frequently every year."],
    "button": {
      "text": "Purchase",
      "link": "https://buy.stripe.com/test_3cs3dSa6O7Eh4P6aEE"
    }
  },
  "highlights": [],
  "testimonials": [{
    "featured": true,
    "description": "Hola Cabo planned a New Year's week vacation in Cabo San Lucas for my friends and me. My friends said it was the best vacation they've ever experienced.",
    "author": "Tourist, USA, Missouri",
    "avatar": ""
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
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
  }) : _createMdxContent();
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/teasers/todos.mdx";
const file = "/Users/kturner/Projects/holacabomx/src/content/teasers/todos.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
