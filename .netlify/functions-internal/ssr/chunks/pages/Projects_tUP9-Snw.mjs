/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderSlot, m as maybeRenderHead, f as addAttribute, e as renderComponent } from '../astro_qmBxdsHW.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro$1 = createAstro();
const $$CardsProject = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardsProject;
  const { title, href_link, href_img } = Astro2.props;
  return renderTemplate`${renderSlot($$result, $$slots["default"], renderTemplate` <!--   <li
    class=" ring-white/10 ring-1 p-2 bg-gradient-to-t from-white/20 rounded-3xl"
  >
    
  </li> --> ${maybeRenderHead()}<li class="card w-full h-[26rem] ring-white/10 ring-1 p-2 bg-gradient-to-t from-white/20 rounded-3xl mb-8 sm:mb-72" data-astro-cid-ul6pqaea> <div class="content rounded-3xl" data-astro-cid-ul6pqaea> <div class="back rounded-3xl" data-astro-cid-ul6pqaea> <div class="back-content rounded-3xl" data-astro-cid-ul6pqaea> <div class=" h-full w-full p-8 ring-1 ring-white/10 rounded-2xl lg:p-4 shadow-massive bg-card/80 " data-astro-cid-ul6pqaea> <div class="flex flex-col justify-between h-full " data-astro-cid-ul6pqaea> <div data-astro-cid-ul6pqaea> <div class="flex-shrink-0 block" data-astro-cid-ul6pqaea> <div class="flex flex-col items-center justify-center" data-astro-cid-ul6pqaea> <div class="pb-4" data-astro-cid-ul6pqaea> <p class="text-3xl text-[#ffffff98]" data-astro-cid-ul6pqaea>${title}</p> </div> <img class="inline-block w-full h-48 sm:h-60 shrink-0"${addAttribute(href_img, "src")} alt="image project" data-astro-cid-ul6pqaea> </div> </div> </div> <!--    <a
          href={href_link}
          class="rounded-lg ml-1 px-7 py-6 text-lg transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-10 ring-1 ring-inset ring-white/10"
          >view project</a
        > --> <a${addAttribute(href_link, "href")} class="cssbuttons-io-button" target="_blank" data-astro-cid-ul6pqaea>
View Project
<div class="icon" data-astro-cid-ul6pqaea> <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ul6pqaea> <path d="M0 0h24v24H0z" fill="none" data-astro-cid-ul6pqaea></path> <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" data-astro-cid-ul6pqaea></path> </svg> </div> </a> </div> </div> </div> </div> </div> </li> `)}`;
}, "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/components/Cards_project.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<section class="fondo relative px-8 py-10 mx-auto md:px-12 lg:px-32 max-w-7xl lg:pt-56 lg:pb-20" data-astro-cid-isidiiyj> <div id="project" class="flex justify-start p-7 w-full" data-astro-cid-isidiiyj> <h1 class="pt-28 text-shadow-glow xs:text-fluid-base z-20 max-w-[20ch] animate-fade-up text-center sm:text-6xl text-[35px] font-semibold leading-none" data-astro-cid-isidiiyj> <span class="bg-clip-text text-transparent pb-2 bg-gradient-to-r from-[#e8b066] to-[#df12ff]" data-astro-cid-isidiiyj>Projects</span> </h1> </div> <ol role="list" class="flex flex-col justify-center sm:grid gap-4 mt-12 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3" data-astro-cid-isidiiyj> ${renderComponent($$result, "Cards_project", $$CardsProject, { "title": "Portfolio", ",": true, "href_img": "/983shots_so.png", ",": true, "href_link": "https://github.com/SantiAlfonso375/portafolio_astro_build", "data-astro-cid-isidiiyj": true })} ${renderComponent($$result, "Cards_project", $$CardsProject, { "title": "", ",": true, "href_img": "", ",": true, "href_link": "", "data-astro-cid-isidiiyj": true })} ${renderComponent($$result, "Cards_project", $$CardsProject, { "title": "", ",": true, "href_img": "", ",": true, "href_link": "", "data-astro-cid-isidiiyj": true })} </ol> </section> `;
}, "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/pages/sections/Projects.astro", void 0);

const $$file = "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/pages/sections/Projects.astro";
const $$url = "/sections/Projects";

export { $$Projects as default, $$file as file, $$url as url };
