import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index2.js";
import "../../../../../chunks/index3.js";
import { S as SmallHeading } from "../../../../../chunks/SmallHeading.js";
import { S as Section } from "../../../../../chunks/Section.js";
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
