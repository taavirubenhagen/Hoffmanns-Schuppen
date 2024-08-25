import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import "../../chunks/index3.js";
import { S as Section } from "../../chunks/Section.js";
const LargeHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-5xl md:text-6xl font-bold tracking-wider">${slots.default ? slots.default({}) : ``}</t>`;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "p-8 flex flex-col justify-center items-stretch"
    },
    {},
    {
      default: () => {
        return `${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
          default: () => {
            return `Sorry, page not found 😞`;
          }
        })}`;
      }
    }
  )}`;
});
export {
  Error as default
};
