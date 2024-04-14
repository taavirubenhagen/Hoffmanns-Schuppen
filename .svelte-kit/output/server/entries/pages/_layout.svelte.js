import { c as create_ssr_component, o as onMount, d as subscribe, v as validate_component, e as escape, f as each } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
import "../../chunks/index4.js";
import { S as SmallParagraph } from "../../chunks/SmallParagraph.js";
import { S as SmallHeading } from "../../chunks/SmallHeading.js";
import { R as RawButton, I as Icon } from "../../chunks/RawButton.js";
import { I as InlineButton } from "../../chunks/InlineButton.js";
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
  let $$unsubscribe_cursorPosition;
  $$unsubscribe_cursorPosition = subscribe(cursorPosition, (value) => value);
  let menuExpanded = false;
  $$unsubscribe_cursorPosition();
  return `




<main class="relative h-screen overflow-x-hidden cursor-none bg-white text-onBackground">${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})}
    <header class="${"fixed z-40 w-full h-16 " + escape(menuExpanded ? "bg-background" : "bg-secondary", true) + " px-8 md:px-16 flex justify-between items-center"}">${validate_component(IconButton, "IconButton").$$render(
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
      onClick: () => window.location.href = "/"
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
        
        ${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      inverted: !menuExpanded,
      name: "euro",
      onClick: () => window.location.href = "/investor-relations"
    },
    {},
    {}
  )}</header>
    <div class="${"transition duration-long fixed z-30 " + escape(menuExpanded ? "-translate-x-0" : "-translate-x-full", true) + " w-full h-full background p-8 md:p-16 pt-24 flex flex-col justify-between items-start"}"><div class="flex flex-col items-start gap-4">${each([["Investieren", "/investor-relations"], ["Impressum", "/impressum"]], (e) => {
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
        <div class="mt-32 font-display">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `Technischer Verantwortlicher:
                ${validate_component(InlineButton, "InlineButton").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "https://instagram.com/taavirubenhagen"
        },
        {},
        {
          default: () => {
            return `Taavi R\xFCbenhagen
                `;
          }
        }
      )}`;
    }
  })}</div></div>
    ${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
