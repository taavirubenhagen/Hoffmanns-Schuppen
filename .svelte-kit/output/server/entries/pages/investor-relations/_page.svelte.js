import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/index4.js";
import { S as SmallParagraph } from "../../../chunks/SmallParagraph.js";
import { M as MediumHeading } from "../../../chunks/MediumHeading.js";
import { S as Section } from "../../../chunks/Section.js";
import "ua-parser-js";
import { B as Button } from "../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "p-8 md:p-16 flex flex-col justify-between"
    },
    {},
    {
      default: () => {
        return `<div><div class="font-display">${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
          default: () => {
            return `F\xFCr eine Sch\xFClerfirma, die den Sch\xFClern geh\xF6rt.
                <br><br>`;
          }
        })}</div>
        ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `Unsere Aktien beteiligen dich direkt am Erfolg von Hoffmann&#39;s Schuppen.
            F\xFCr 5\u20AC erh\xE4lst du eine Aktie, die dir Anspruch auf einen Anteil des Firmenkapitals gibt.
            Du kannst deine Aktien jederzeit wieder an uns zur\xFCckgeben
            und bekommst die bis dahin mit deinem Investment erzielten Gewinne ausgezahlt.
            Die genauen Konditionen, die mit dem Aktienkauf einhergehen, findest du auf dem Informationsblatt.
        `;
          }
        })}</div>
    <div class="mb-8 w-full flex flex-col gap-4">
        ${validate_component(Button, "Button").$$render(
          $$result,
          {
            secondary: true,
            download: true,
            onClick: () => window.location.href = "/aktien/Bedingungen.pdf"
          },
          {},
          {
            default: () => {
              return `Informationsblatt herunterladen
        `;
            }
          }
        )}
        ${validate_component(Button, "Button").$$render(
          $$result,
          {
            next: true,
            onClick: () => alert("Bitte wende dich pers\xF6nlich oder \xFCber IServ an unser Aktienteam.")
          },
          {},
          {
            default: () => {
              return `Jetzt kaufen
        `;
            }
          }
        )}</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
