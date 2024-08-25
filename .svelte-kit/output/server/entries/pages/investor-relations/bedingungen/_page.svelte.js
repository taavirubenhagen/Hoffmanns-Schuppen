import { c as create_ssr_component } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  document.getElementById("dl")?.click();
  close();
  return `<a id="dl" style="display: none" href="/Anteile/Bedingungen.pdf" download>Download
</a>`;
});
export {
  Page as default
};
