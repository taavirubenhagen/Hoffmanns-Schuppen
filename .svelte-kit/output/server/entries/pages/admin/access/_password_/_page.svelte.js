import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { S as Section } from "../../../../../chunks/Section.js";
import "ua-parser-js";
const SmallHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-3xl md:text-5xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col justify-center items-stretch">${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Login Successful`;
        }
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
