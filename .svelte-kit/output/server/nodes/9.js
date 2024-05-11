

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/impressum/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.33090e14.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.28fa800e.js","_app/immutable/chunks/SmallParagraph.18b570eb.js","_app/immutable/chunks/SmallHeading.c68c662d.js","_app/immutable/chunks/Section.a965c118.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.fd6dbaed.css"];
export const fonts = [];
