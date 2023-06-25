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

				const html = updateImageReferences("<p>Cabo San Lucas is famous for its vibrant nightlife scene, with bars and clubs to suit every taste and mood. Whether you’re looking for a romantic evening with your partner, a wild night out with friends, or a laid-back atmosphere to enjoy a few drinks and some live music, Cabo has something for everyone.</p>\n<p>To help you plan your ultimate night out in Cabo San Lucas, we’ve put together this guide to the best bars and clubs in town.</p>\n<p>El Squid Roe - This iconic club has been a fixture in Cabo’s nightlife scene for over 30 years. With three floors of music, dancing, and drinks, El Squid Roe is a must-visit spot for anyone looking for a high-energy night out. Expect to dance on the bar and make some new friends.</p>\n<p>Mandala - Known for its stunning decor, Mandala is one of the most popular nightclubs in Cabo San Lucas. With multiple rooms playing different types of music, there’s something for everyone here.</p>\n<p>La Vaquita - If you’re looking for a more laid-back vibe, La Vaquita is the place to be. With a fun atmosphere and affordable drinks, this is a great spot to start your night.</p>\n<p>Cabo Wabo Cantina - Owned by rocker Sammy Hagar, Cabo Wabo is a popular spot for live music and tequila. You can catch local bands or well-known acts while sipping on one of their signature cocktails.</p>\n<p>Nowhere Bar - This rooftop bar offers some of the best views of Cabo San Lucas, along with great music and drinks. Whether you’re looking for a spot to watch the sunset or a late-night hangout, Nowhere Bar is the place to be.</p>\n<p>Jungle Bar - Located in the heart of downtown Cabo San Lucas, Jungle Bar is a popular spot for locals and tourists alike. With live music, cheap drinks, and a fun atmosphere, this is a great place to start your night out.</p>\n<p>The Rooftop at The Cape - For a more upscale night out, head to The Rooftop at The Cape. This swanky bar offers stunning ocean views, handcrafted cocktails, and live music.</p>\n<p>No matter where you end up in Cabo San Lucas, you’re sure to have an unforgettable night out. Just be sure to pace yourself and stay safe while enjoying the city’s vibrant nightlife scene.</p>");

				const frontmatter = {"draft":false,"title":"The must hit spots during your night out in Cabo","subtitle":"","snippet":"To help you plan your ultimate night out in Cabo San Lucas, we've put together this guide to the best bars and clubs in town.","image":{"src":"https://a.cdn-hotels.com/gdcs/production199/d753/349cec1c-91f4-4643-92e0-e2552667626e.jpg?impolicy=fcrop&w=1600&h=1066&q=high","alt":"bars in cabo"},"publishDate":"2023-05-09 16:39","category":"Cabo San Lucas","author":"Hola Cabo","tags":["nightlife"],"blocks":[]};
				const file = "/Users/kturner/Projects/holacabomx/src/content/experiences/our-cabo-bar-crawl.md";
				const url = undefined;
				function rawContent() {
					return "\nCabo San Lucas is famous for its vibrant nightlife scene, with bars and clubs to suit every taste and mood. Whether you're looking for a romantic evening with your partner, a wild night out with friends, or a laid-back atmosphere to enjoy a few drinks and some live music, Cabo has something for everyone.\n\nTo help you plan your ultimate night out in Cabo San Lucas, we've put together this guide to the best bars and clubs in town.\n\nEl Squid Roe - This iconic club has been a fixture in Cabo's nightlife scene for over 30 years. With three floors of music, dancing, and drinks, El Squid Roe is a must-visit spot for anyone looking for a high-energy night out. Expect to dance on the bar and make some new friends.\n\nMandala - Known for its stunning decor, Mandala is one of the most popular nightclubs in Cabo San Lucas. With multiple rooms playing different types of music, there's something for everyone here.\n\nLa Vaquita - If you're looking for a more laid-back vibe, La Vaquita is the place to be. With a fun atmosphere and affordable drinks, this is a great spot to start your night.\n\nCabo Wabo Cantina - Owned by rocker Sammy Hagar, Cabo Wabo is a popular spot for live music and tequila. You can catch local bands or well-known acts while sipping on one of their signature cocktails.\n\nNowhere Bar - This rooftop bar offers some of the best views of Cabo San Lucas, along with great music and drinks. Whether you're looking for a spot to watch the sunset or a late-night hangout, Nowhere Bar is the place to be.\n\nJungle Bar - Located in the heart of downtown Cabo San Lucas, Jungle Bar is a popular spot for locals and tourists alike. With live music, cheap drinks, and a fun atmosphere, this is a great place to start your night out.\n\nThe Rooftop at The Cape - For a more upscale night out, head to The Rooftop at The Cape. This swanky bar offers stunning ocean views, handcrafted cocktails, and live music.\n\nNo matter where you end up in Cabo San Lucas, you're sure to have an unforgettable night out. Just be sure to pace yourself and stay safe while enjoying the city's vibrant nightlife scene.";
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
