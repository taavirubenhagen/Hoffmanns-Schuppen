import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "../../../chunks/index3.js";
import { M as MediumHeading } from "../../../chunks/MediumHeading.js";
import { S as Section } from "../../../chunks/Section.js";
import { B as Button } from "../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(Section, "Section").$$render($$result, { className: "p-8 md:p-16 center_col" }, {}, {
    default: () => {
      return `<img src="/images/anteilsausgabe.jpg" alt="Linus mit Anteil" class="fixed min-h-screen brightness-50">
    <div class="relative z-10 text-white">${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Eine Schülerfirma in der Hand der Schüler.
            
            <br><br>`;
        }
      })}</div>
    <div class="mb-8 w-full flex flex-col gap-4 md:items-center">${validate_component(Button, "Button").$$render(
        $$result,
        {
          next: true,
          onClick: () => window.location.href = "/ueber-uns"
        },
        {},
        {
          default: () => {
            return `Wer wir sind
        `;
          }
        }
      )}</div>`;
    }
  })}`;
});
export {
  Page as default
};
