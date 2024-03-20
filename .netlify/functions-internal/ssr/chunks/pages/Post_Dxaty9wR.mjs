/* empty css                          */
import { d as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_qmBxdsHW.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_C9Y9M_u_.mjs';

const html = "<h1 id=\"mi-primera-publicación-en-el-blog\"><em><strong>Mi primera publicación en el blog</strong></em></h1>\n<p>Publicado el: 2022-07-01</p>\n<p>¡Bienvenido a mi <em>nuevo blog</em> sobre el aprendizaje de Astro! Aquí, voy a compartir mi viaje de aprendizaje a medida que construyo un nuevo sitio web.</p>\n<h2 id=\"lo-que-he-conseguido\">Lo que he conseguido</h2>\n<ol>\n<li>\n<p><strong>Instalación de Astro</strong>: En primer lugar, he creado un nuevo proyecto Astro y configurar mis cuentas en línea.</p>\n</li>\n<li>\n<p><strong>Creación de páginas</strong>: Luego aprendí cómo hacer páginas creando nuevos archivos <code>.astro</code> y colocándolos en la carpeta <code>src/pages/</code>.</p>\n</li>\n<li>\n<p><strong>Creación de publicaciones</strong>: ¡Esta es mi primera publicación! ¡Ahora tengo páginas de Astro y publicaciónes en Markdown!</p>\n</li>\n</ol>\n<h2 id=\"próximos-pasos\">Próximos pasos</h2>\n<p>Terminaré el tutorial de Astro, y luego seguiré añadiendo más publicaciones. Mira este espacio para más por venir.</p>";

				const frontmatter = {"title":"Mi primera publicación en el blog","pubDate":"2022-07-01T00:00:00.000Z","description":"Este es la primera publicación de mi nuevo blog de Astro.","author":"Alumno de Astro","image":{"alt":"El logotipo completo de Astro."},"tags":["astro","bloguear","aprender en público"],"layout":"./MarkdownPostLayout.astro"};
				const file = "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/pages/posts/Post.md";
				const url = "/posts/Post";
				function rawContent() {
					return "# ***Mi primera publicación en el blog***\r\n\r\nPublicado el: 2022-07-01\r\n\r\n¡Bienvenido a mi _nuevo blog_ sobre el aprendizaje de Astro! Aquí, voy a compartir mi viaje de aprendizaje a medida que construyo un nuevo sitio web.\r\n\r\n## Lo que he conseguido\r\n\r\n1. **Instalación de Astro**: En primer lugar, he creado un nuevo proyecto Astro y configurar mis cuentas en línea.\r\n\r\n2. **Creación de páginas**: Luego aprendí cómo hacer páginas creando nuevos archivos `.astro` y colocándolos en la carpeta `src/pages/`.\r\n\r\n3. **Creación de publicaciones**: ¡Esta es mi primera publicación! ¡Ahora tengo páginas de Astro y publicaciónes en Markdown!\r\n\r\n## Próximos pasos\r\n\r\nTerminaré el tutorial de Astro, y luego seguiré añadiendo más publicaciones. Mira este espacio para más por venir.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"mi-primera-publicación-en-el-blog","text":"Mi primera publicación en el blog"},{"depth":2,"slug":"lo-que-he-conseguido","text":"Lo que he conseguido"},{"depth":2,"slug":"próximos-pasos","text":"Próximos pasos"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
