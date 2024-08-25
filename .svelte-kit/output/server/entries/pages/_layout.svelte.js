import { c as create_ssr_component, v as validate_component, e as escape, b as each } from "../../chunks/index2.js";
import "../../chunks/index3.js";
import { S as SmallParagraph } from "../../chunks/SmallParagraph.js";
import { S as SmallHeading } from "../../chunks/SmallHeading.js";
import { R as RawButton, I as Icon } from "../../chunks/RawButton.js";
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { name } = $$props;
  let { onClick } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0) $$bindings.inverted(inverted);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render($$result, { inverted, name }, {}, {})}`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuExpanded = false;
  return `




<main class="relative h-screen overflow-x-hidden bg-white text-onBackground"><header class="${"fixed z-40 w-full h-16 " + escape(menuExpanded ? "bg-background" : "bg-secondary", true) + " px-8 md:px-16 flex justify-between items-center"}">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      inverted: !menuExpanded,
      name: menuExpanded ? "close" : "menu",
      onClick: () => menuExpanded = !menuExpanded
    },
    {},
    {}
  )}
        ${validate_component(RawButton, "RawButton").$$render(
    $$result,
    {
      onClick: () => window.location.href = "/home"
    },
    {},
    {
      default: () => {
        return `<div class="${"font-display " + escape(menuExpanded ? "text-onBackground" : "text-onPrimary", true)}">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `Hoffmann&#39;s Schuppen`;
          }
        })}</div>`;
      }
    }
  )}
        
        <div class="opacity-0">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      inverted: !menuExpanded,
      name: "euro",
      onClick: () => window.location.href = "/investor-relations"
    },
    {},
    {}
  )}</div></header>
    <div class="${"transition duration-long fixed z-30 " + escape(menuExpanded ? "-translate-x-0" : "-translate-x-full", true) + " w-full h-full background p-8 md:p-16 pt-24 flex flex-col justify-between items-start"}"><div class="flex flex-col items-start gap-4">
            ${each([["Home", "/home"], ["Über uns", "/ueber-uns"], ["Impressum", "/impressum"]], (e) => {
    return `${validate_component(RawButton, "RawButton").$$render(
      $$result,
      {
        onClick: () => window.location.href = e[1]
      },
      {},
      {
        default: () => {
          return `${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(e[0])}`;
            }
          })}
                `;
        }
      }
    )}`;
  })}</div>
        </div>
    ${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
