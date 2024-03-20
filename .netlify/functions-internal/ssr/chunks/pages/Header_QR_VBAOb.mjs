/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_qmBxdsHW.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Astro$2 = createAstro();
const $$NavAurora = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavAurora;
  return renderTemplate`${maybeRenderHead()}<section class="form-container" data-astro-cid-sxbf2nrv> <h1 data-astro-cid-sxbf2nrv></h1> </section> `;
}, "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/components/Nav_aurora.astro", void 0);

function Button() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("label", { className: "hamburger inline-flex items-center justify-end text-white hover:text-indigo-400 focus:outline-none focus:text-white md:hidden", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", onClick: toggleOpen }),
      /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 32", children: [
        /* @__PURE__ */ jsx("path", { className: "line line-top-bottom", d: "M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" }),
        /* @__PURE__ */ jsx("path", { className: "line", d: "M7 16 27 16" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: `flex-col items-center flex-grow ${open ? "flex" : "hidden"} md:pb-0 md:flex md:justify-end md:flex-row`,
        children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "px-2 py-2 text-lg font-normal text-vanta-300 lg:px-6 md:px-3 hover:bg-gradient-to-r from-[#df12ff] to-[#e8b066]hover:bg-clip-text hover:rounded-3xl lg:ml-auto",
              href: "#home",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "px-2 py-2 text-lg font-normal text-vanta-300 lg:px-6 md:px-3 hover:bg-gradient-to-r from-[#df12ff] to-[#e8b066]hover:bg-clip-text hover:rounded-3xl",
              href: "#stack",
              children: "Stack"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "px-2 py-2 text-lg font-normal text-vanta-300 lg:px-6 md:px-3 hover:bg-gradient-to-r from-[#df12ff] to-[#e8b066]hover:bg-clip-text hover:rounded-3xl",
              href: "#project",
              children: "Project"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "px-2 py-2 text-lg font-normal text-vanta-300 lg:px-6 md:px-3 hover:bg-gradient-to-r from-[#df12ff] to-[#e8b066]hover:bg-clip-text hover:rounded-3xl",
              href: "#contact",
              children: "contact"
            }
          )
        ]
      }
    )
  ] });
}

const $$Astro$1 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<div class="fixed z-50 w-full overflow-hidden relatve backdrop-blur-2xl"> <!--   <Nav /> --> ${renderComponent($$result, "NavAurora", $$NavAurora, {})} <div x-data="{ open: false }" class="relative flex flex-col w-full px-8 py-5 mx-auto md:items-center md:justify-between md:flex-row md:px-12 lg:px-32"> <div class="flex flex-row items-center justify-between text-white lg:justify-start"> <a href="/" class="inline-flex items-center gap-3"> <span class="font-light text-xl uppercase">Portfolio</span> </a> </div> <!--  <Buttom client:load></Buttom> --> ${renderComponent($$result, "ButtomDos", Button, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/components/Bottom_dos", "client:component-export": "default" })} </div> </div>
./Bottom_dos.jsx`;
}, "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/components/Nav.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<body id="home" class="" data-astro-cid-rqkunjs7> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-rqkunjs7": true })} </body>`;
}, "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/pages/sections/Header.astro", void 0);

const $$file = "C:/Users/MARCO ANTONIO/astrobuild.tips-master/src/pages/sections/Header.astro";
const $$url = "/sections/Header";

export { $$Header as default, $$file as file, $$url as url };
