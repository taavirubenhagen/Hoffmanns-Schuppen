import { c as create_ssr_component, g as add_attribute, e as escape } from "./index3.js";
import { t as tavyVersion } from "./index4.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { inverted = false } = $$props;
  let { size = 16 } = $$props;
  const src = `/tavy/icons/${tavyVersion}/svg/${name}.svg`;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", name, 0)}${add_attribute("class", inverted ? "invert" : "", 0)} style="${"height: " + escape(size / 16 * 1.25, true) + "rem;"}">`;
});
const RawButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<button class="relative z-20">${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Icon as I,
  RawButton as R
};
