

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/impressum/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.4fc31115.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.8de8c973.js","_app/immutable/chunks/SmallParagraph.e17d89c2.js","_app/immutable/chunks/Section.6ad78428.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.a664c79a.css"];
export const fonts = [];
