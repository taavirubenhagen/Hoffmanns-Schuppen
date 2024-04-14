

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/impressum/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.97f8e0b2.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.be5362ee.js","_app/immutable/chunks/SmallParagraph.58020732.js","_app/immutable/chunks/Section.23a52fd9.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c8ead489.css"];
export const fonts = [];
