import { c as create_ssr_component } from "./index2.js";
import "./index3.js";
const MediumHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-4xl md:text-5xl font-display font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  MediumHeading as M
};
