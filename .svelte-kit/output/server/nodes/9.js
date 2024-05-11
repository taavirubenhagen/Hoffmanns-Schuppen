

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/impressum/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.b687362e.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.6b1942d4.js","_app/immutable/chunks/SmallParagraph.13d3ff36.js","_app/immutable/chunks/Section.3b0cdc5c.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.8713fd52.css"];
export const fonts = [];
