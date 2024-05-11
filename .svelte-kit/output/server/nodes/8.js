

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.76e08046.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.6b1942d4.js","_app/immutable/chunks/MediumHeading.15056004.js","_app/immutable/chunks/Section.3b0cdc5c.js","_app/immutable/chunks/Button.163d2863.js","_app/immutable/chunks/SmallParagraph.13d3ff36.js","_app/immutable/chunks/RawButton.8d60331a.js","_app/immutable/chunks/index.deee6f29.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.8713fd52.css"];
export const fonts = [];
