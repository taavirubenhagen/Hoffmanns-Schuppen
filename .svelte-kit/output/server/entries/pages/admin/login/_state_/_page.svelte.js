import { g as getContext, c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, f as subscribe } from "../../../../../chunks/index2.js";
import "../../../../../chunks/index3.js";
import { S as Section } from "../../../../../chunks/Section.js";
import { R as RawButton, I as Icon } from "../../../../../chunks/RawButton.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const MediumParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const TextField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { autofocus = false } = $$props;
  let { onSubmit } = $$props;
  let { placeholder = "" } = $$props;
  let input = "";
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0) $$bindings.inverted(inverted);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0) $$bindings.autofocus(autofocus);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0) $$bindings.onSubmit(onSubmit);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  return `${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex"><div class="${escape(inverted ? "invert" : "", true) + " rounded-l-lg border-2 border-green-900"}">
           
           <input type="text" ${autofocus ? "autofocus" : ""} class="rounded-l-lg outline-none h-full px-1 text-xl"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", input, 0)}></div>
       ${validate_component(RawButton, "RawButton").$$render($$result, { onClick: () => onSubmit(input) }, {}, {
        default: () => {
          return `<div class="rounded-r-lg bg-green-900 w-12 h-12 pr-1 center_row">${validate_component(Icon, "Icon").$$render($$result, { inverted: true, name: "arrow-forward" }, {}, {})}</div>`;
        }
      })}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const onPasswordSubmitted = (input) => {
    console.log(input);
    window.location.href = "/drafts/hoffmanns-schuppen/admin/access/" + input;
  };
  $$unsubscribe_page();
  return `<div style="font-family: &quot;Roboto Slab&quot;;">${validate_component(Section, "Section").$$render($$result, { className: "center_col" }, {}, {
    default: () => {
      return `${$page.url.href.split("/").pop() == "failed" ? `<div class="h-12"></div>` : ``}
        ${validate_component(TextField, "TextField").$$render(
        $$result,
        {
          autofocus: true,
          onSubmit: onPasswordSubmitted,
          placeholder: "Passwort"
        },
        {},
        {}
      )}
        ${$page.url.href.split("/").pop() == "failed" ? `<div class="mt-4 h-8 flex items-start text-error">Login fehlgeschlagen.
            </div>` : ``}`;
    }
  })}</div>`;
});
export {
  Page as default
};
