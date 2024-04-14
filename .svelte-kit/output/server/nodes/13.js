

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.6e3da453.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/ua-parser.6ed19792.js","_app/immutable/chunks/MediumHeading.c0cdd8aa.js","_app/immutable/chunks/Section.63b0329b.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.fae48076.css"];
export const fonts = [];
