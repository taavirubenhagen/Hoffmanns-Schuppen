import { c as create_ssr_component, f as add_attribute, e as escape } from "./index3.js";
const global = "";
const swap = (obj) => Object.fromEntries(
  Object.entries(obj).map((a) => a.reverse())
);
const twInTextSizes = {
  "text-base": 16,
  "text-xl": 20,
  "text-2xl": 24,
  "text-3xl": 30
};
swap(twInTextSizes);
const tavyVersion = "2024-03-A";
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let windowHeight;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `


<div${add_attribute("class", className, 0)} style="${"min-height: " + escape(windowHeight, true) + "px;"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Section as S,
  tavyVersion as t
};
