import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "../../../chunks/index3.js";
import { S as SmallParagraph } from "../../../chunks/SmallParagraph.js";
import { S as SmallHeading } from "../../../chunks/SmallHeading.js";
import { S as Section } from "../../../chunks/Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(Section, "Section").$$render($$result, { className: "p-8 md:p-16" }, {}, {
    default: () => {
      return `${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Hoffmann&#39;s Schuppen, Schülerfirma der HvF Braunschweig<br><br>`;
        }
      })}
    ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `Zuständiger Lehrer: Fred Lorenz`;
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
          return `E-Mail für Rechtliches: lorenz@hvf-bs.net`;
        }
      })}<br>
    ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `E-Mails für Geschäftliches: bjoern.merkes@hvf-bs.net; lunis.hildebrandt@hvf-bs.net`;
        }
      })}<br>
    <br><br>
    ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `Technischer Verantwortlicher: Taavi Rübenhagen (taavi.ruebenhagen@hvf-bs.net)`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
