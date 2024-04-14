import { c as create_ssr_component, o as onMount, d as subscribe, v as validate_component, e as escape } from "../../chunks/index3.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index2.js";
import { S as Section } from "../../chunks/Section.js";
import { L as LargeHeading } from "../../chunks/LargeHeading.js";
import { R as RawButton, I as Icon } from "../../chunks/RawButton.js";
import UAParser from "ua-parser-js";
const cursorPosition = writable([0, 0]);
const buttonHover = writable(false);
const DeviceDetector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showInDevice = void 0 } = $$props;
  let { showInBrowser = void 0 } = $$props;
  let { showInOs = void 0 } = $$props;
  let showSlot = false;
  onMount(() => {
    const uaParser = new UAParser();
    let detectedBrowser = uaParser.getBrowser();
    let detectedDevice = uaParser.getDevice();
    let detectedOs = uaParser.getOS();
    let show = true;
    if (showInDevice && !equals(getDevice(detectedDevice), showInDevice)) {
      show = false;
    }
    if (showInBrowser && !equals(formatter(detectedBrowser.name), showInBrowser)) {
      show = false;
    }
    if (showInOs && !equals(formatter(detectedOs.name), showInOs)) {
      show = false;
    }
    showSlot = show;
  });
  const getDevice = (device) => {
    if (!device.type) {
      return "desktop";
    }
    return formatter(device.type);
  };
  const formatter = (string) => string.toLowerCase().normalize("NFD").replace(/ /g, "").replace(/[^\w\s]/gi, "").replace(/[\u0300-\u036f]/g, "");
  const equals = (value, option) => {
    if (Array.isArray(option)) {
      return option.some((item) => value === formatter(item));
    }
    return value === formatter(option);
  };
  if ($$props.showInDevice === void 0 && $$bindings.showInDevice && showInDevice !== void 0)
    $$bindings.showInDevice(showInDevice);
  if ($$props.showInBrowser === void 0 && $$bindings.showInBrowser && showInBrowser !== void 0)
    $$bindings.showInBrowser(showInBrowser);
  if ($$props.showInOs === void 0 && $$bindings.showInOs && showInOs !== void 0)
    $$bindings.showInOs(showInOs);
  return `${showSlot ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $buttonHover, $$unsubscribe_buttonHover;
  let $cursorPosition, $$unsubscribe_cursorPosition;
  $$unsubscribe_buttonHover = subscribe(buttonHover, (value) => $buttonHover = value);
  $$unsubscribe_cursorPosition = subscribe(cursorPosition, (value) => $cursorPosition = value);
  $$unsubscribe_buttonHover();
  $$unsubscribe_cursorPosition();
  return `${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape(
        $buttonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100",
        true
      ) + " duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"}" style="${"left: " + escape($cursorPosition[0], true) + "px; top: " + escape($cursorPosition[1], true) + "px; transition-property: transform, opacity, width, height; " + escape(
        $buttonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);",
        true
      )}"></div>`;
    }
  })}`;
});
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { name } = $$props;
  let { onClick } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render($$result, { inverted, name }, {}, {})}`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_cursorPosition;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_cursorPosition = subscribe(cursorPosition, (value) => value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  const routes = $page.url.href.split("/").slice(3);
  !(routes.includes("hoffmanns-schuppen") || routes.includes("website"));
  $$unsubscribe_page();
  $$unsubscribe_cursorPosition();
  $$unsubscribe_navigating();
  return `




<main class="relative h-screen overflow-x-hidden cursor-none bg-white text-onBackground">${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})}
    <header class="fixed w-full h-16 bg-secondary px-8 md:px-16 flex justify-between items-center"><div class="w-1/3 flex">${validate_component(Icon, "Icon").$$render($$result, { inverted: true, name: "menu" }, {}, {})}</div>
        <img src="/logos/logo_solid.png" alt="Logo" class="rounded-full h-10 bg-onPrimary">
        <div class="w-1/3 flex justify-end">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      name: "euro",
      onClick: () => {
      }
    },
    {},
    {}
  )}</div></header>
    ${$navigating ? `${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Loading \u21BA
            `;
        }
      })}`;
    }
  })}` : `
        ${slots.default ? slots.default({}) : ``}`}</main>`;
});
export {
  Layout as default
};
