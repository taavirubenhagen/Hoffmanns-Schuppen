import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/index4.js";
import { S as SmallParagraph } from "../../../chunks/SmallParagraph.js";
import { S as Section } from "../../../chunks/Section.js";
import "ua-parser-js";
const LargeParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-3xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, { className: "p-8 md:p-16" }, {}, {
    default: () => {
      return `${validate_component(LargeParagraph, "LargeParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `Hoffmann&#39;s Schuppen, Sch\xFClerfirma der HvF Braunschweig`;
        }
      })}<br>
    <br><br>
    ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `Zust\xE4ndiger Lehrer: Fred Lorenz`;
        }
      })}<br>
    ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `Anschrift: Sackring 15, 38118 Braunschweig`;
        }
      })}<br>
    <br><br>
    ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `E-Mail f\xFCr Rechtliches: lorenz@hvf-bs.net`;
        }
      })}<br>
    ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `E-Mails f\xFCr Gesch\xE4ftliches: bjoern.merkes@hvf-bs.net; lunis.hildebrandt@hvf-bs.net`;
        }
      })}<br>
    <br><br>
    ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `Technischer Verantwortlicher: Taavi R\xFCbenhagen (taavi.ruebenhagen@hvf-bs.net)`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
