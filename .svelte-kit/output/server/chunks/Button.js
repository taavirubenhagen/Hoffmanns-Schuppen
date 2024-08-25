import { c as create_ssr_component, v as validate_component, e as escape } from "./index2.js";
import "./index3.js";
import { S as SmallParagraph } from "./SmallParagraph.js";
import { R as RawButton, I as Icon } from "./RawButton.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mini = false } = $$props;
  let { secondary = false } = $$props;
  let { openInNew = false } = $$props;
  let { next = false } = $$props;
  let { download = false } = $$props;
  let { onClick } = $$props;
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0) $$bindings.mini(mini);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0) $$bindings.secondary(secondary);
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0) $$bindings.openInNew(openInNew);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0) $$bindings.next(next);
  if ($$props.download === void 0 && $$bindings.download && download !== void 0) $$bindings.download(download);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"rounded-lg " + escape(mini ? "h-10" : "h-12", true) + " px-4 " + escape(
            secondary ? "bg-green-300 text-black" : "bg-primary text-white",
            true
          ) + " flex justify-between items-center font-display"}">${slots.default ? slots.default({}) : ``}  
            <div class="inline relative top-0.5">${openInNew ? `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              inverted: !secondary,
              name: "open-in-new"
            },
            {},
            {}
          )}` : `${next ? `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              inverted: !secondary,
              name: "arrow-forward"
            },
            {},
            {}
          )}` : `${download ? `${validate_component(Icon, "Icon").$$render($$result, { inverted: !secondary, name: "download" }, {}, {})}` : ``}`}`}</div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Button as B
};
