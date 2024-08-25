import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "../../../chunks/index3.js";
import { S as SmallParagraph } from "../../../chunks/SmallParagraph.js";
import { S as SmallHeading } from "../../../chunks/SmallHeading.js";
import { M as MediumHeading } from "../../../chunks/MediumHeading.js";
import { S as Section } from "../../../chunks/Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "p-8 md:p-16 flex flex-col justify-between"
    },
    {},
    {
      default: () => {
        return `${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
              default: () => {
                return `Hoffmann&#39;s Schuppen stellt sich vor
        `;
              }
            })}
        ${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
              default: () => {
                return `<br><br><br>
            Wer wir sind
            <br><br>`;
              }
            })}
        Willkommen bei Hoffmann&#39;s Schuppen! Wir sind eine Schülerfirma, die sich zum Ziel gesetzt hat, das im Fachunterricht erworbene Wissen in realitätsnahen wirtschaftlichen Zusammenhängen anzuwenden.
        Unser Team besteht aus engagierten Schüler*innen, die nicht nur lernen, wie man ein Unternehmen führt, sondern auch wichtige Schlüsselqualifikationen wie Eigeninitiative, Verantwortungsbereitschaft und Teamfähigkeit erwerben.
        Darüber hinaus möchten wir eine sinnvolle Freizeitgestaltung an unserer Schule fördern.
        ${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
              default: () => {
                return `<br><br><br>
            Unsere Ziele
            <br><br>`;
              }
            })}
            Unser Hauptziel ist es, einen angenehmeren Schulalltag für die gesamte Schulgemeinschaft zu schaffen. Wir bieten fair gehandelte Konsumgüter zu fairen Preisen an und möchten damit nicht nur den Schülerinnen, sondern auch Lehrkräften und Eltern eine nachhaltige und bewusste Kaufentscheidung innerhalb der Schule ermöglichen. Zudem streben wir an, unseren Leistungsbereich kontinuierlich zu erweitern, um noch mehr Produkte und Dienstleistungen anzubieten, die den Bedürfnissen unserer Schulgemeinschaft entsprechen.
        ${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
              default: () => {
                return `<br><br><br>
            Wohin fließt das Geld?
            <br><br>`;
              }
            })}
            Die Einnahmen aus dem Verkauf unserer Produkte fließen direkt in die Weiterentwicklung unserer Firma und in Projekte, die der gesamten Schulgemeinschaft zugutekommen. Ein Teil der Gewinne wird auch in die Verbesserung der schulischen Infrastruktur investiert, um eine noch angenehmere Lernumgebung zu schaffen. Zudem möchten wir die Schulgemeinschaft aktiv an unseren Entscheidungen und Gewinnen beteiligen. 
        ${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
              default: () => {
                return `<br><br><br>
            Wie kann ich unterstützen?
            <br><br>`;
              }
            })}
        Wenn du uns helfen möchtest, gibt es viele Möglichkeiten, dich zu engagieren!
        Du kannst uns unterstützen, indem du unsere Produkte kaufst und so zur Förderung eines fairen Handels beiträgst.
        Zusätzlich planen wir ein Beteiligungssystem, mithilfe dessen du dich finanziell an Hoffmann&#39;s Schuppen beteiligen kannst.
        Außerdem freuen wir uns über neue Mitglieder, die unser Team verstärken und frische Ideen einbringen möchten. Egal, ob du Interesse an der Organisation, dem Verkauf oder der Produktentwicklung hast
        (Kontakt:max.brueckner@hvf-bs.net, tom.wennrich@hvf-bs.net).
        Alternativ kannst du uns immer in der Schule ansprechen, um mehr über die Mitmachmöglichkeiten zu erfahren und uns hilfreiches Feedback zu geben.
        Mit deiner Hilfe wird Hoffi&#39;s Schuppen immer besser. 
        ${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
              default: () => {
                return `<br><br><br>
            Kontakt
            <br><br>`;
              }
            })}
        Allgemeine Ansprechperson: taavi.rübenhagen@hvf-bs.net
        <br>
        Zuständige Lehrkraft: lorenz@hvf-bs.net
    `;
          }
        })}
    <div class="mb-8 w-full flex flex-col gap-4">
        </div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
