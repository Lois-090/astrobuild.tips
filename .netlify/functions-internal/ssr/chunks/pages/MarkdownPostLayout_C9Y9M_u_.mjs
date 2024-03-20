/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as addAttribute, g as renderHead, h as renderSlot, e as renderComponent, m as maybeRenderHead } from '../astro_qmBxdsHW.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                                       */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/public/logo2.jpg" id="favicon"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "data-astro-cid-hhz54xsb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="form-container flex justify-center py-20 px-20" data-astro-cid-hhz54xsb> <section class="flex flex-row" data-astro-cid-hhz54xsb> <h1 data-astro-cid-hhz54xsb>title</h1> <img src="" alt="" data-astro-cid-hhz54xsb> </section> <p data-astro-cid-hhz54xsb>description</p> <img src="" alt="" data-astro-cid-hhz54xsb> </div> ` })} `;
}, "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/pages/posts/MarkdownPostLayout.astro", void 0);

const $$file = "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/pages/posts/MarkdownPostLayout.astro";
const $$url = "/posts/MarkdownPostLayout";

const MarkdownPostLayout = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MarkdownPostLayout,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownPostLayout as $, MarkdownPostLayout as M, $$Layout as a };
