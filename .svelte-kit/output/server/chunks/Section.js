import { c as create_ssr_component, e as escape } from "./index3.js";
import "./index4.js";
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let windowHeight;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `


<div class="${escape(className, true) + " mt-16"}" style="${"min-height: calc(" + escape(windowHeight, true) + "px - 4rem);"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Section as S
};
