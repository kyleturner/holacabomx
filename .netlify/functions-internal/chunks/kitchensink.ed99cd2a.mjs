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

				const html = updateImageReferences("<p>import Button from “@components/ui/button.astro”;</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<h2 id=\"headings\"><a name=\"Headings\"></a>Headings</h2>\n<p>Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat commodo id sunt. Nostrud enim ad commodo incididunt cupidatat in ullamco ullamco Lorem cupidatat velit enim et Lorem. Ut laborum cillum laboris fugiat culpa sint irure do reprehenderit culpa occaecat. Exercitation esse mollit tempor magna aliqua in occaecat aliquip veniam reprehenderit nisi dolor in laboris dolore velit.</p>\n<h2 id=\"heading-two\">Heading two</h2>\n<p>Aute officia nulla deserunt do deserunt cillum velit magna. Officia veniam culpa anim minim dolore labore pariatur voluptate id ad est duis quis velit dolor pariatur enim. Incididunt enim excepteur do veniam consequat culpa do voluptate dolor fugiat ad adipisicing sit. Labore officia est adipisicing dolore proident eiusmod exercitation deserunt ullamco anim do occaecat velit. Elit dolor consectetur proident sunt aliquip est do tempor quis aliqua culpa aute. Duis in tempor exercitation pariatur et adipisicing mollit irure tempor ut enim esse commodo laboris proident. Do excepteur laborum anim esse aliquip eu sit id Lorem incididunt elit irure ea nulla dolor et. Nulla amet fugiat qui minim deserunt enim eu cupidatat aute officia do velit ea reprehenderit.</p>\n<h3 id=\"heading-three\">Heading three</h3>\n<p>Voluptate cupidatat cillum elit quis ipsum eu voluptate fugiat consectetur enim. Quis ut voluptate culpa ex anim aute consectetur dolore proident voluptate exercitation eiusmod. Esse in do anim magna minim culpa sint. Adipisicing ipsum consectetur proident ullamco magna sit amet aliqua aute fugiat laborum exercitation duis et.</p>\n<h4 id=\"heading-four\">Heading four</h4>\n<p>Commodo fugiat aliqua minim quis pariatur mollit id tempor. Non occaecat minim esse enim aliqua adipisicing nostrud duis consequat eu adipisicing qui. Minim aliquip sit excepteur ipsum consequat laborum pariatur excepteur. Veniam fugiat et amet ad elit anim laborum duis mollit occaecat et et ipsum et reprehenderit. Occaecat aliquip dolore adipisicing sint labore occaecat officia fugiat. Quis adipisicing exercitation exercitation eu amet est laboris sunt nostrud ipsum reprehenderit ullamco. Enim sint ut consectetur id anim aute voluptate exercitation mollit dolore magna magna est Lorem. Ut adipisicing adipisicing aliqua ullamco voluptate labore nisi tempor esse magna incididunt.</p>\n<h5 id=\"heading-five\">Heading five</h5>\n<p>Veniam enim esse amet veniam deserunt laboris amet enim consequat. Minim nostrud deserunt cillum consectetur commodo eu enim nostrud ullamco occaecat excepteur. Aliquip et ut est commodo enim dolor amet sint excepteur. Amet ad laboris laborum deserunt sint sunt aliqua commodo ex duis deserunt enim est ex labore ut. Duis incididunt velit adipisicing non incididunt adipisicing adipisicing. Ad irure duis nisi tempor eu dolor fugiat magna et consequat tempor eu ex dolore. Mollit esse nisi qui culpa ut nisi ex proident culpa cupidatat cillum culpa occaecat anim. Ut officia sit ea nisi ea excepteur nostrud ipsum et nulla.</p>\n<h6 id=\"heading-six\">Heading six</h6>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<p><a href=\"#top\">[Top]</a></p>\n<h2 id=\"paragraphs\"><a name=\"Paragraphs\"></a>Paragraphs</h2>\n<p>Incididunt ex adipisicing ea ullamco consectetur in voluptate proident fugiat tempor deserunt reprehenderit ullamco id dolore laborum. Do laboris laboris minim incididunt qui consectetur exercitation adipisicing dolore et magna consequat magna anim sunt. Officia fugiat Lorem sunt pariatur incididunt Lorem reprehenderit proident irure. Dolore ipsum aliqua mollit ad officia fugiat sit eu aliquip cupidatat ipsum duis laborum laborum fugiat esse. Voluptate anim ex dolore deserunt ea ex eiusmod irure. Occaecat excepteur aliqua exercitation aliquip dolor esse eu eu.</p>\n<p>Officia dolore laborum aute incididunt commodo nisi velit est est elit et dolore elit exercitation. Enim aliquip magna id ipsum aliquip consectetur ad nulla quis. Incididunt pariatur dolor consectetur cillum enim velit cupidatat laborum quis ex.</p>\n<p>Officia irure in non voluptate adipisicing sit amet tempor duis dolore deserunt enim ut. Reprehenderit incididunt in ad anim et deserunt deserunt Lorem laborum quis. Enim aute anim labore proident laboris voluptate elit excepteur in. Ex labore nulla velit officia ullamco Lorem Lorem id do. Dolore ullamco ipsum magna dolor pariatur voluptate ipsum id occaecat ipsum. Dolore tempor quis duis commodo quis quis enim.</p>\n<p><a href=\"#top\">[Top]</a></p>\n<h2 id=\"blockquotes\"><a name=\"Blockquotes\"></a>Blockquotes</h2>\n<p>Ad nisi laborum aute cupidatat magna deserunt eu id laboris id. Aliquip nulla cupidatat sint ex Lorem mollit laborum dolor amet est ut esse aute. Nostrud ex consequat id incididunt proident ipsum minim duis aliqua ut ex et ad quis. Laborum sint esse cillum anim nulla cillum consectetur aliqua sit. Nisi excepteur cillum labore amet excepteur commodo enim occaecat consequat ipsum proident exercitation duis id in.</p>\n<blockquote>\n<p>Ipsum et cupidatat mollit exercitation enim duis sunt irure aliqua reprehenderit mollit. Pariatur Lorem pariatur laboris do culpa do elit irure. Eiusmod amet nulla voluptate velit culpa et aliqua ad reprehenderit sit ut.</p>\n</blockquote>\n<p>Labore ea magna Lorem consequat aliquip consectetur cillum duis dolore. Et veniam dolor qui incididunt minim amet laboris sit. Dolore ad esse commodo et dolore amet est velit ut nisi ea. Excepteur ea nulla commodo dolore anim dolore adipisicing eiusmod labore id enim esse quis mollit deserunt est. Minim ea culpa voluptate nostrud commodo proident in duis aliquip minim.</p>\n<blockquote>\n<p>Qui est sit et reprehenderit aute est esse enim aliqua id aliquip ea anim. Pariatur sint reprehenderit mollit velit voluptate enim consectetur sint enim. Quis exercitation proident elit non id qui culpa dolore esse aliquip consequat.</p>\n</blockquote>\n<p>Ipsum excepteur cupidatat sunt minim ad eiusmod tempor sit.</p>\n<blockquote>\n<p>Deserunt excepteur adipisicing culpa pariatur cillum laboris ullamco nisi fugiat cillum officia. In cupidatat nulla aliquip tempor ad Lorem Lorem quis voluptate officia consectetur pariatur ex in est duis. Mollit id esse est elit exercitation voluptate nostrud nisi laborum magna dolore dolore tempor in est consectetur.</p>\n</blockquote>\n<p>Adipisicing voluptate ipsum culpa voluptate id aute laboris labore esse fugiat veniam ullamco occaecat do ut. Tempor et esse reprehenderit veniam proident ipsum irure sit ullamco et labore ea excepteur nulla labore ut. Ex aute minim quis tempor in eu id id irure ea nostrud dolor esse.</p>\n<p><a href=\"#top\">[Top]</a></p>\n<h2 id=\"lists\"><a name=\"Lists\"></a>Lists</h2>\n<h3 id=\"ordered-list\">Ordered List</h3>\n<ol>\n<li>Longan</li>\n<li>Lychee</li>\n<li>Excepteur ad cupidatat do elit laborum amet cillum reprehenderit consequat quis.\nDeserunt officia esse aliquip consectetur duis ut labore laborum commodo aliquip aliquip velit pariatur dolore.</li>\n<li>Marionberry</li>\n<li>Melon\n<ul>\n<li>Cantaloupe</li>\n<li>Honeydew</li>\n<li>Watermelon</li>\n</ul>\n</li>\n<li>Miracle fruit</li>\n<li>Mulberry</li>\n</ol>\n<h3 id=\"unordered-list\">Unordered List</h3>\n<ul>\n<li>Olive</li>\n<li>Orange\n<ul>\n<li>Blood orange</li>\n<li>Clementine</li>\n</ul>\n</li>\n<li>Papaya</li>\n<li>Ut aute ipsum occaecat nisi culpa Lorem id occaecat cupidatat id id magna laboris ad duis. Fugiat cillum dolore veniam nostrud proident sint consectetur eiusmod irure adipisicing.</li>\n<li>Passionfruit</li>\n</ul>\n<p><a href=\"#top\">[Top]</a></p>\n<h2 id=\"horizontal-rule\"><a name=\"Horizontal\"></a>Horizontal rule</h2>\n<p>In dolore velit aliquip labore mollit minim tempor veniam eu veniam ad in sint aliquip mollit mollit. Ex occaecat non deserunt elit laborum sunt tempor sint consequat culpa culpa qui sit. Irure ad commodo eu voluptate mollit cillum cupidatat veniam proident amet minim reprehenderit.</p>\n<hr>\n<p>In laboris eiusmod reprehenderit aliquip sit proident occaecat. Non sit labore anim elit veniam Lorem minim commodo eiusmod irure do minim nisi. Dolor amet cillum excepteur consequat sint non sint.</p>\n<p><a href=\"#top\">[Top]</a></p>\n<h2 id=\"table\"><a name=\"Table\"></a>Table</h2>\n<p>Duis sunt ut pariatur reprehenderit mollit mollit magna dolore in pariatur nulla commodo sit dolor ad fugiat. Laboris amet ea occaecat duis eu enim exercitation deserunt ea laborum occaecat reprehenderit. Et incididunt dolor commodo consequat mollit nisi proident non pariatur in et incididunt id. Eu ut et Lorem ea ex magna minim ipsum ipsum do.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Table Heading 1</th><th align=\"left\">Table Heading 2</th><th align=\"center\">Center align</th><th align=\"right\">Right align</th><th align=\"left\">Table Heading 5</th></tr></thead><tbody><tr><td align=\"left\">Item 1</td><td align=\"left\">Item 2</td><td align=\"center\">Item 3</td><td align=\"right\">Item 4</td><td align=\"left\">Item 5</td></tr><tr><td align=\"left\">Item 1</td><td align=\"left\">Item 2</td><td align=\"center\">Item 3</td><td align=\"right\">Item 4</td><td align=\"left\">Item 5</td></tr><tr><td align=\"left\">Item 1</td><td align=\"left\">Item 2</td><td align=\"center\">Item 3</td><td align=\"right\">Item 4</td><td align=\"left\">Item 5</td></tr><tr><td align=\"left\">Item 1</td><td align=\"left\">Item 2</td><td align=\"center\">Item 3</td><td align=\"right\">Item 4</td><td align=\"left\">Item 5</td></tr><tr><td align=\"left\">Item 1</td><td align=\"left\">Item 2</td><td align=\"center\">Item 3</td><td align=\"right\">Item 4</td><td align=\"left\">Item 5</td></tr></tbody></table>\n<p>Minim id consequat adipisicing cupidatat laborum culpa veniam non consectetur et duis pariatur reprehenderit eu ex consectetur. Sunt nisi qui eiusmod ut cillum laborum Lorem officia aliquip laboris ullamco nostrud laboris non irure laboris. Cillum dolore labore Lorem deserunt mollit voluptate esse incididunt ex dolor.</p>\n<p><a href=\"#top\">[Top]</a></p>\n<h2 id=\"code\"><a name=\"Code\"></a>Code</h2>\n<h3 id=\"inline-code\">Inline code</h3>\n<p>Ad amet irure est magna id mollit Lorem in do duis enim. Excepteur velit nisi magna ea pariatur pariatur ullamco fugiat deserunt sint non sint. Duis duis est <code>code in text</code> velit velit aute culpa ex quis pariatur pariatur laborum aute pariatur duis tempor sunt ad. Irure magna voluptate dolore consectetur consectetur irure esse. Anim magna <code>&#x3C;strong>in culpa qui officia&#x3C;/strong></code> dolor eiusmod esse amet aute cupidatat aliqua do id voluptate cupidatat reprehenderit amet labore deserunt.</p>\n<h3 id=\"highlighted\">Highlighted</h3>\n<p>Et fugiat ad nisi amet magna labore do cillum fugiat occaecat cillum Lorem proident. In sint dolor ullamco ad do adipisicing amet id excepteur Lorem aliquip sit irure veniam laborum duis cillum. Aliqua occaecat minim cillum deserunt magna sunt laboris do do irure ea nostrud consequat ut voluptate ex.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">package</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">main</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> (</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #9ECBFF\">\"</span><span style=\"color: #B392F0\">fmt</span><span style=\"color: #9ECBFF\">\"</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #9ECBFF\">\"</span><span style=\"color: #B392F0\">net/http</span><span style=\"color: #9ECBFF\">\"</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">)</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">func</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">handler</span><span style=\"color: #E1E4E8\">(w http.ResponseWriter, r </span><span style=\"color: #F97583\">*</span><span style=\"color: #E1E4E8\">http.Request) {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    fmt.</span><span style=\"color: #79B8FF\">Fprintf</span><span style=\"color: #E1E4E8\">(w, </span><span style=\"color: #9ECBFF\">\"Hi there, I love </span><span style=\"color: #79B8FF\">%s</span><span style=\"color: #9ECBFF\">!\"</span><span style=\"color: #E1E4E8\">, r.URL.Path[</span><span style=\"color: #79B8FF\">1</span><span style=\"color: #E1E4E8\">:])</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">func</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">main</span><span style=\"color: #E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    http.</span><span style=\"color: #79B8FF\">HandleFunc</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">\"/\"</span><span style=\"color: #E1E4E8\">, handler)</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    http.</span><span style=\"color: #79B8FF\">ListenAndServe</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">\":8080\"</span><span style=\"color: #E1E4E8\">, </span><span style=\"color: #79B8FF\">nil</span><span style=\"color: #E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">}</span></span></code></pre>\n<p>Ex amet id ex aliquip id do laborum excepteur exercitation elit sint commodo occaecat nostrud est. Nostrud pariatur esse veniam laborum non sint magna sit laboris minim in id. Aliqua pariatur pariatur excepteur adipisicing irure culpa consequat commodo et ex id ad.</p>\n<p><a href=\"#top\">[Top]</a></p>\n<h2 id=\"inline-elements\"><a name=\"Inline\"></a>Inline elements</h2>\n<p>Sint ea anim ipsum ad commodo cupidatat do <strong>exercitation</strong> incididunt et minim ad labore sunt. Minim deserunt labore laboris velit nulla incididunt ipsum nulla. Ullamco ad laborum ea qui et anim in laboris exercitation tempor sit officia laborum reprehenderit culpa velit quis. <strong>Consequat commodo</strong> reprehenderit duis <a href=\"#!\">irure</a> esse esse exercitation minim enim Lorem dolore duis irure. Nisi Lorem reprehenderit ea amet excepteur dolor excepteur magna labore proident voluptate ipsum. Reprehenderit ex esse deserunt aliqua ea officia mollit Lorem nulla magna enim. Et ad ipsum labore enim ipsum <strong>cupidatat consequat</strong>. Commodo non ea cupidatat magna deserunt dolore ipsum velit nulla elit veniam nulla eiusmod proident officia.</p>\n<p><img src=\"https://images.unsplash.com/photo-1471128466710-c26ff0d26143?crop=entropy&#x26;cs=tinysrgb&#x26;fit=max&#x26;fm=jpg&#x26;ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MDc4MTk3Mw&#x26;ixlib=rb-1.2.1&#x26;q=80&#x26;utm_campaign=api-credit&#x26;utm_medium=referral&#x26;utm_source=unsplash_source&#x26;w=1080\" alt=\"Super wide\"></p>\n<p><em>Proident sit veniam in est proident officia adipisicing</em> ea tempor cillum non cillum velit deserunt. Voluptate laborum incididunt sit consectetur Lorem irure incididunt voluptate nostrud. Commodo ut eiusmod tempor cupidatat esse enim minim ex anim consequat. Mollit sint culpa qui laboris quis consectetur ad sint esse. Amet anim anim minim ullamco et duis non irure. Sit tempor adipisicing ea laboris <code>culpa ex duis sint</code> anim aute reprehenderit id eu ea. Aute <a href=\"#!\">excepteur proident</a> Lorem minim adipisicing nostrud mollit ad ut voluptate do nulla esse occaecat aliqua sint anim.</p>\n<p><img src=\"https://placekitten.com/480/400\" alt=\"Not so big\"></p>\n<p>Incididunt in culpa cupidatat mollit cillum qui proident sit. In cillum aliquip incididunt voluptate magna amet cupidatat cillum pariatur sint aliqua est <em>enim <strong>anim</strong> voluptate</em>. Magna aliquip proident incididunt id duis pariatur eiusmod incididunt commodo culpa dolore sit. Culpa do nostrud elit ad exercitation anim pariatur non minim nisi <strong>adipisicing sunt <em>officia</em></strong>. Do deserunt magna mollit Lorem commodo ipsum do cupidatat mollit enim ut elit veniam ea voluptate.</p>\n<p>Reprehenderit non eu quis in ad elit esse qui aute id <a href=\"#!\">incididunt</a> dolore cillum. Esse laboris consequat dolor anim exercitation tempor aliqua deserunt velit magna laboris. Culpa culpa minim duis amet mollit do quis amet commodo nulla irure.</p>\n<p><a href=\"#top\">[Top]</a></p>\n<h2 id=\"mdx\">MDX</h2>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">---</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">publishDate</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">'Aug 02 2022'</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">title</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">'Markdown elements demo post'</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">---</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> Logo </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">\"@components/ui/button.astro\"</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">## </span><span style=\"color: #79B8FF\">MDX</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">&#x3C;</span><span style=\"color: #79B8FF\">Button</span><span style=\"color: #E1E4E8\">>Click&#x3C;/</span><span style=\"color: #79B8FF\">Button</span><span style=\"color: #E1E4E8\">></span></span></code></pre>\n<div>\n  <button>Click Me</button>\n</div>\n<p><a href=\"#top\">[Top]</a></p>");

				const frontmatter = {"draft":false,"title":"Typography Example Post","subtitle":"","snippet":"Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat","publishDate":"2023-05-05 15:36","image":{"src":"https://images.unsplash.com/photo-1542393545-10f5cde2c810?&fit=crop&w=430&h=240","alt":"typography"},"category":"Technology","author":"Charles North","tags":["nightlife"],"blocks":[]};
				const file = "/Users/kturner/Projects/holacabomx/src/content/experiences/kitchensink.md";
				const url = undefined;
				function rawContent() {
					return "\nimport Button from \"@components/ui/button.astro\";\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n## <a name=\"Headings\"></a>Headings\n\nSint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat commodo id sunt. Nostrud enim ad commodo incididunt cupidatat in ullamco ullamco Lorem cupidatat velit enim et Lorem. Ut laborum cillum laboris fugiat culpa sint irure do reprehenderit culpa occaecat. Exercitation esse mollit tempor magna aliqua in occaecat aliquip veniam reprehenderit nisi dolor in laboris dolore velit.\n\n## Heading two\n\nAute officia nulla deserunt do deserunt cillum velit magna. Officia veniam culpa anim minim dolore labore pariatur voluptate id ad est duis quis velit dolor pariatur enim. Incididunt enim excepteur do veniam consequat culpa do voluptate dolor fugiat ad adipisicing sit. Labore officia est adipisicing dolore proident eiusmod exercitation deserunt ullamco anim do occaecat velit. Elit dolor consectetur proident sunt aliquip est do tempor quis aliqua culpa aute. Duis in tempor exercitation pariatur et adipisicing mollit irure tempor ut enim esse commodo laboris proident. Do excepteur laborum anim esse aliquip eu sit id Lorem incididunt elit irure ea nulla dolor et. Nulla amet fugiat qui minim deserunt enim eu cupidatat aute officia do velit ea reprehenderit.\n\n### Heading three\n\nVoluptate cupidatat cillum elit quis ipsum eu voluptate fugiat consectetur enim. Quis ut voluptate culpa ex anim aute consectetur dolore proident voluptate exercitation eiusmod. Esse in do anim magna minim culpa sint. Adipisicing ipsum consectetur proident ullamco magna sit amet aliqua aute fugiat laborum exercitation duis et.\n\n#### Heading four\n\nCommodo fugiat aliqua minim quis pariatur mollit id tempor. Non occaecat minim esse enim aliqua adipisicing nostrud duis consequat eu adipisicing qui. Minim aliquip sit excepteur ipsum consequat laborum pariatur excepteur. Veniam fugiat et amet ad elit anim laborum duis mollit occaecat et et ipsum et reprehenderit. Occaecat aliquip dolore adipisicing sint labore occaecat officia fugiat. Quis adipisicing exercitation exercitation eu amet est laboris sunt nostrud ipsum reprehenderit ullamco. Enim sint ut consectetur id anim aute voluptate exercitation mollit dolore magna magna est Lorem. Ut adipisicing adipisicing aliqua ullamco voluptate labore nisi tempor esse magna incididunt.\n\n##### Heading five\n\nVeniam enim esse amet veniam deserunt laboris amet enim consequat. Minim nostrud deserunt cillum consectetur commodo eu enim nostrud ullamco occaecat excepteur. Aliquip et ut est commodo enim dolor amet sint excepteur. Amet ad laboris laborum deserunt sint sunt aliqua commodo ex duis deserunt enim est ex labore ut. Duis incididunt velit adipisicing non incididunt adipisicing adipisicing. Ad irure duis nisi tempor eu dolor fugiat magna et consequat tempor eu ex dolore. Mollit esse nisi qui culpa ut nisi ex proident culpa cupidatat cillum culpa occaecat anim. Ut officia sit ea nisi ea excepteur nostrud ipsum et nulla.\n\n###### Heading six\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n[[Top]](#top)\n\n## <a name=\"Paragraphs\"></a>Paragraphs\n\nIncididunt ex adipisicing ea ullamco consectetur in voluptate proident fugiat tempor deserunt reprehenderit ullamco id dolore laborum. Do laboris laboris minim incididunt qui consectetur exercitation adipisicing dolore et magna consequat magna anim sunt. Officia fugiat Lorem sunt pariatur incididunt Lorem reprehenderit proident irure. Dolore ipsum aliqua mollit ad officia fugiat sit eu aliquip cupidatat ipsum duis laborum laborum fugiat esse. Voluptate anim ex dolore deserunt ea ex eiusmod irure. Occaecat excepteur aliqua exercitation aliquip dolor esse eu eu.\n\nOfficia dolore laborum aute incididunt commodo nisi velit est est elit et dolore elit exercitation. Enim aliquip magna id ipsum aliquip consectetur ad nulla quis. Incididunt pariatur dolor consectetur cillum enim velit cupidatat laborum quis ex.\n\nOfficia irure in non voluptate adipisicing sit amet tempor duis dolore deserunt enim ut. Reprehenderit incididunt in ad anim et deserunt deserunt Lorem laborum quis. Enim aute anim labore proident laboris voluptate elit excepteur in. Ex labore nulla velit officia ullamco Lorem Lorem id do. Dolore ullamco ipsum magna dolor pariatur voluptate ipsum id occaecat ipsum. Dolore tempor quis duis commodo quis quis enim.\n\n[[Top]](#top)\n\n## <a name=\"Blockquotes\"></a>Blockquotes\n\nAd nisi laborum aute cupidatat magna deserunt eu id laboris id. Aliquip nulla cupidatat sint ex Lorem mollit laborum dolor amet est ut esse aute. Nostrud ex consequat id incididunt proident ipsum minim duis aliqua ut ex et ad quis. Laborum sint esse cillum anim nulla cillum consectetur aliqua sit. Nisi excepteur cillum labore amet excepteur commodo enim occaecat consequat ipsum proident exercitation duis id in.\n\n> Ipsum et cupidatat mollit exercitation enim duis sunt irure aliqua reprehenderit mollit. Pariatur Lorem pariatur laboris do culpa do elit irure. Eiusmod amet nulla voluptate velit culpa et aliqua ad reprehenderit sit ut.\n\nLabore ea magna Lorem consequat aliquip consectetur cillum duis dolore. Et veniam dolor qui incididunt minim amet laboris sit. Dolore ad esse commodo et dolore amet est velit ut nisi ea. Excepteur ea nulla commodo dolore anim dolore adipisicing eiusmod labore id enim esse quis mollit deserunt est. Minim ea culpa voluptate nostrud commodo proident in duis aliquip minim.\n\n> Qui est sit et reprehenderit aute est esse enim aliqua id aliquip ea anim. Pariatur sint reprehenderit mollit velit voluptate enim consectetur sint enim. Quis exercitation proident elit non id qui culpa dolore esse aliquip consequat.\n\nIpsum excepteur cupidatat sunt minim ad eiusmod tempor sit.\n\n> Deserunt excepteur adipisicing culpa pariatur cillum laboris ullamco nisi fugiat cillum officia. In cupidatat nulla aliquip tempor ad Lorem Lorem quis voluptate officia consectetur pariatur ex in est duis. Mollit id esse est elit exercitation voluptate nostrud nisi laborum magna dolore dolore tempor in est consectetur.\n\nAdipisicing voluptate ipsum culpa voluptate id aute laboris labore esse fugiat veniam ullamco occaecat do ut. Tempor et esse reprehenderit veniam proident ipsum irure sit ullamco et labore ea excepteur nulla labore ut. Ex aute minim quis tempor in eu id id irure ea nostrud dolor esse.\n\n[[Top]](#top)\n\n## <a name=\"Lists\"></a>Lists\n\n### Ordered List\n\n1. Longan\n2. Lychee\n3. Excepteur ad cupidatat do elit laborum amet cillum reprehenderit consequat quis.\n   Deserunt officia esse aliquip consectetur duis ut labore laborum commodo aliquip aliquip velit pariatur dolore.\n4. Marionberry\n5. Melon\n   - Cantaloupe\n   - Honeydew\n   - Watermelon\n6. Miracle fruit\n7. Mulberry\n\n### Unordered List\n\n- Olive\n- Orange\n  - Blood orange\n  - Clementine\n- Papaya\n- Ut aute ipsum occaecat nisi culpa Lorem id occaecat cupidatat id id magna laboris ad duis. Fugiat cillum dolore veniam nostrud proident sint consectetur eiusmod irure adipisicing.\n- Passionfruit\n\n[[Top]](#top)\n\n## <a name=\"Horizontal\"></a>Horizontal rule\n\nIn dolore velit aliquip labore mollit minim tempor veniam eu veniam ad in sint aliquip mollit mollit. Ex occaecat non deserunt elit laborum sunt tempor sint consequat culpa culpa qui sit. Irure ad commodo eu voluptate mollit cillum cupidatat veniam proident amet minim reprehenderit.\n\n---\n\nIn laboris eiusmod reprehenderit aliquip sit proident occaecat. Non sit labore anim elit veniam Lorem minim commodo eiusmod irure do minim nisi. Dolor amet cillum excepteur consequat sint non sint.\n\n[[Top]](#top)\n\n## <a name=\"Table\"></a>Table\n\nDuis sunt ut pariatur reprehenderit mollit mollit magna dolore in pariatur nulla commodo sit dolor ad fugiat. Laboris amet ea occaecat duis eu enim exercitation deserunt ea laborum occaecat reprehenderit. Et incididunt dolor commodo consequat mollit nisi proident non pariatur in et incididunt id. Eu ut et Lorem ea ex magna minim ipsum ipsum do.\n\n| Table Heading 1 | Table Heading 2 | Center align | Right align | Table Heading 5 |\n| :-------------- | :-------------- | :----------: | ----------: | :-------------- |\n| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\n| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\n| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\n| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\n| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\n\nMinim id consequat adipisicing cupidatat laborum culpa veniam non consectetur et duis pariatur reprehenderit eu ex consectetur. Sunt nisi qui eiusmod ut cillum laborum Lorem officia aliquip laboris ullamco nostrud laboris non irure laboris. Cillum dolore labore Lorem deserunt mollit voluptate esse incididunt ex dolor.\n\n[[Top]](#top)\n\n## <a name=\"Code\"></a>Code\n\n### Inline code\n\nAd amet irure est magna id mollit Lorem in do duis enim. Excepteur velit nisi magna ea pariatur pariatur ullamco fugiat deserunt sint non sint. Duis duis est `code in text` velit velit aute culpa ex quis pariatur pariatur laborum aute pariatur duis tempor sunt ad. Irure magna voluptate dolore consectetur consectetur irure esse. Anim magna `<strong>in culpa qui officia</strong>` dolor eiusmod esse amet aute cupidatat aliqua do id voluptate cupidatat reprehenderit amet labore deserunt.\n\n### Highlighted\n\nEt fugiat ad nisi amet magna labore do cillum fugiat occaecat cillum Lorem proident. In sint dolor ullamco ad do adipisicing amet id excepteur Lorem aliquip sit irure veniam laborum duis cillum. Aliqua occaecat minim cillum deserunt magna sunt laboris do do irure ea nostrud consequat ut voluptate ex.\n\n```go\npackage main\n\nimport (\n    \"fmt\"\n    \"net/http\"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprintf(w, \"Hi there, I love %s!\", r.URL.Path[1:])\n}\n\nfunc main() {\n    http.HandleFunc(\"/\", handler)\n    http.ListenAndServe(\":8080\", nil)\n}\n```\n\nEx amet id ex aliquip id do laborum excepteur exercitation elit sint commodo occaecat nostrud est. Nostrud pariatur esse veniam laborum non sint magna sit laboris minim in id. Aliqua pariatur pariatur excepteur adipisicing irure culpa consequat commodo et ex id ad.\n\n[[Top]](#top)\n\n## <a name=\"Inline\"></a>Inline elements\n\nSint ea anim ipsum ad commodo cupidatat do **exercitation** incididunt et minim ad labore sunt. Minim deserunt labore laboris velit nulla incididunt ipsum nulla. Ullamco ad laborum ea qui et anim in laboris exercitation tempor sit officia laborum reprehenderit culpa velit quis. **Consequat commodo** reprehenderit duis [irure](#!) esse esse exercitation minim enim Lorem dolore duis irure. Nisi Lorem reprehenderit ea amet excepteur dolor excepteur magna labore proident voluptate ipsum. Reprehenderit ex esse deserunt aliqua ea officia mollit Lorem nulla magna enim. Et ad ipsum labore enim ipsum **cupidatat consequat**. Commodo non ea cupidatat magna deserunt dolore ipsum velit nulla elit veniam nulla eiusmod proident officia.\n\n![Super wide](https://images.unsplash.com/photo-1471128466710-c26ff0d26143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MDc4MTk3Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)\n\n_Proident sit veniam in est proident officia adipisicing_ ea tempor cillum non cillum velit deserunt. Voluptate laborum incididunt sit consectetur Lorem irure incididunt voluptate nostrud. Commodo ut eiusmod tempor cupidatat esse enim minim ex anim consequat. Mollit sint culpa qui laboris quis consectetur ad sint esse. Amet anim anim minim ullamco et duis non irure. Sit tempor adipisicing ea laboris `culpa ex duis sint` anim aute reprehenderit id eu ea. Aute [excepteur proident](#!) Lorem minim adipisicing nostrud mollit ad ut voluptate do nulla esse occaecat aliqua sint anim.\n\n![Not so big](https://placekitten.com/480/400)\n\nIncididunt in culpa cupidatat mollit cillum qui proident sit. In cillum aliquip incididunt voluptate magna amet cupidatat cillum pariatur sint aliqua est _enim **anim** voluptate_. Magna aliquip proident incididunt id duis pariatur eiusmod incididunt commodo culpa dolore sit. Culpa do nostrud elit ad exercitation anim pariatur non minim nisi **adipisicing sunt _officia_**. Do deserunt magna mollit Lorem commodo ipsum do cupidatat mollit enim ut elit veniam ea voluptate.\n\nReprehenderit non eu quis in ad elit esse qui aute id [incididunt](#!) dolore cillum. Esse laboris consequat dolor anim exercitation tempor aliqua deserunt velit magna laboris. Culpa culpa minim duis amet mollit do quis amet commodo nulla irure.\n\n[[Top]](#top)\n\n## MDX\n\n```js\n---\npublishDate: 'Aug 02 2022'\ntitle: 'Markdown elements demo post'\n---\nimport Logo from \"@components/ui/button.astro\";\n\n## MDX\n\n<Button>Click</Button>\n```\n\n<div>\n  <Button>Click Me</Button>\n</div>\n\n[[Top]](#top)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"headings","text":"Headings"},{"depth":2,"slug":"heading-two","text":"Heading two"},{"depth":3,"slug":"heading-three","text":"Heading three"},{"depth":4,"slug":"heading-four","text":"Heading four"},{"depth":5,"slug":"heading-five","text":"Heading five"},{"depth":6,"slug":"heading-six","text":"Heading six"},{"depth":2,"slug":"paragraphs","text":"Paragraphs"},{"depth":2,"slug":"blockquotes","text":"Blockquotes"},{"depth":2,"slug":"lists","text":"Lists"},{"depth":3,"slug":"ordered-list","text":"Ordered List"},{"depth":3,"slug":"unordered-list","text":"Unordered List"},{"depth":2,"slug":"horizontal-rule","text":"Horizontal rule"},{"depth":2,"slug":"table","text":"Table"},{"depth":2,"slug":"code","text":"Code"},{"depth":3,"slug":"inline-code","text":"Inline code"},{"depth":3,"slug":"highlighted","text":"Highlighted"},{"depth":2,"slug":"inline-elements","text":"Inline elements"},{"depth":2,"slug":"mdx","text":"MDX"}];
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
