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
        return `<div>${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
          default: () => {
            return `F\xFCr eine Sch\xFClerfirma, die den Sch\xFClern geh\xF6rt.
            <br><br>`;
          }
        })}
        ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `Unsere Anteile beteiligen dich direkt am Erfolg von Hoffmann&#39;s Schuppen.
            Du erh\xE4lst Anspruch auf einen Anteil des Firmenkapitals und kannst dir
            die mit deinem Investment erzielten Gewinne jederzeit auszahlen lassen.
            Die genauen Konditionen findest du auf dem Informationsblatt.
        `;
          }
        })}</div>
    <div class="mb-8 w-full flex flex-col gap-4">
        ${validate_component(Button, "Button").$$render(
          $$result,
          {
            secondary: true,
            download: true,
            onClick: () => window.location.href = "/Anteile/Bedingungen.pdf"
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
            onClick: () => alert("Bitte wende dich pers\xF6nlich oder \xFCber IServ an unser Anteileteam.")
          },
          {},
          {
            default: () => {
              return `Jetzt investieren
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
