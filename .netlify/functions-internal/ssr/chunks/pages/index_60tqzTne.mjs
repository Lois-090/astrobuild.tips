/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_qmBxdsHW.mjs';
import 'kleur/colors';
import { a as $$Layout } from './MarkdownPostLayout_C9Y9M_u_.mjs';
import $$Header from './Header_QR_VBAOb.mjs';
import $$About from './About_DUNagum9.mjs';
import $$Projects from './Projects_tUP9-Snw.mjs';
import $$Stack from './Stack_CBx9jQN6.mjs';
import $$Contact from './Contact_C1LQIUPV.mjs';
import $$Footer from './Footer_DPkrVlqi.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portal Marcos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="container"> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Stack", $$Stack, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </section> ` })}`;
}, "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/pages/index.astro", void 0);

const $$file = "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
