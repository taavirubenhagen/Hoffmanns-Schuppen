import { c as create_ssr_component } from "./index2.js";
import "./index3.js";
const SmallHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-3xl md:text-4xl font-bold font-display">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  SmallHeading as S
};
