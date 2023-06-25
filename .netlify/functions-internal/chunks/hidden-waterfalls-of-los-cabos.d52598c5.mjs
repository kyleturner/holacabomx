import { j as createVNode, F as Fragment, s as spreadAttributes } from './astro.cd78f4a4.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Los Cabos is famous for its beaches and ocean views, but there’s so much more to explore beyond the coast. One of the most stunning natural wonders you can find in the area is the hidden waterfalls tucked away in the mountains.</p>\n<p>To reach these hidden gems, you’ll need to go off the beaten path and venture into the heart of the Sierra de la Laguna mountain range. The journey is not for the faint of heart, but the reward is worth it. The area is home to some of the most beautiful waterfalls you’ll ever see.</p>\n<p>The best way to reach these waterfalls is by hiring a local guide. They will not only show you the way but also provide valuable information about the area’s flora and fauna. Some of the most popular waterfalls to explore include Cascada Sol de Mayo, El Chorro, and Las Animas.</p>\n<p>Cascada Sol de Mayo is the largest and most impressive of the waterfalls. It’s located near the town of Santiago and requires a moderate hike to reach. Once you arrive, you’ll be greeted by a 40-foot waterfall and crystal-clear pools of water perfect for swimming.</p>\n<p>El Chorro is another popular waterfall, located near the village of Todos Santos. It’s a bit harder to reach but well worth the effort. You’ll need to hike through a narrow canyon and over a rocky stream to reach the waterfall. The payoff is a stunning 50-foot waterfall that cascades into a tranquil pool of water.</p>\n<p>Finally, Las Animas is a series of waterfalls located near the town of Miraflores. This area is less crowded than Cascada Sol de Mayo and El Chorro, making it a great option if you’re looking for a more secluded experience.</p>\n<p>In conclusion, exploring the hidden waterfalls of Los Cabos is an experience you’ll never forget. It’s a chance to get off the beaten path and discover some of the area’s most stunning natural wonders. Whether you’re an adventure seeker or just looking for a unique day trip, these hidden waterfalls are well worth the effort.</p>");

				const frontmatter = {"draft":false,"title":"Off the Beaten Path: Exploring Hidden Waterfalls in the Mountains of Los Cabos","subtitle":"","snippet":"Los Cabos is famous for its beaches and ocean views, but there's so much more to explore beyond the coast. One of the most stunning natural wonders you can find in the area is the hidden waterfalls tucked away in the mountains.","image":{"src":"https://www.ernstopia.com/wp-content/uploads/2021/05/Santiago-9091-blog.jpg","alt":"beautiful waterfalls"},"publishDate":"2023-05-07 15:39","category":"Explore","author":"Hola Cabo","tags":["explore","waterfalls"],"blocks":[]};
				const file = "/Users/kturner/Projects/holacabomx/src/content/experiences/hidden-waterfalls-of-los-cabos.md";
				const url = undefined;
				function rawContent() {
					return "\nLos Cabos is famous for its beaches and ocean views, but there's so much more to explore beyond the coast. One of the most stunning natural wonders you can find in the area is the hidden waterfalls tucked away in the mountains.\n\nTo reach these hidden gems, you'll need to go off the beaten path and venture into the heart of the Sierra de la Laguna mountain range. The journey is not for the faint of heart, but the reward is worth it. The area is home to some of the most beautiful waterfalls you'll ever see.\n\nThe best way to reach these waterfalls is by hiring a local guide. They will not only show you the way but also provide valuable information about the area's flora and fauna. Some of the most popular waterfalls to explore include Cascada Sol de Mayo, El Chorro, and Las Animas.\n\nCascada Sol de Mayo is the largest and most impressive of the waterfalls. It's located near the town of Santiago and requires a moderate hike to reach. Once you arrive, you'll be greeted by a 40-foot waterfall and crystal-clear pools of water perfect for swimming.\n\nEl Chorro is another popular waterfall, located near the village of Todos Santos. It's a bit harder to reach but well worth the effort. You'll need to hike through a narrow canyon and over a rocky stream to reach the waterfall. The payoff is a stunning 50-foot waterfall that cascades into a tranquil pool of water.\n\nFinally, Las Animas is a series of waterfalls located near the town of Miraflores. This area is less crowded than Cascada Sol de Mayo and El Chorro, making it a great option if you're looking for a more secluded experience.\n\nIn conclusion, exploring the hidden waterfalls of Los Cabos is an experience you'll never forget. It's a chance to get off the beaten path and discover some of the area's most stunning natural wonders. Whether you're an adventure seeker or just looking for a unique day trip, these hidden waterfalls are well worth the effort.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
