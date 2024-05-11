

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/impressum/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.b6297371.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.061d2225.js","_app/immutable/chunks/SmallParagraph.dea168e4.js","_app/immutable/chunks/SmallHeading.cffb9332.js","_app/immutable/chunks/Section.e861cda8.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.bd5f5c7f.css"];
export const fonts = [];
