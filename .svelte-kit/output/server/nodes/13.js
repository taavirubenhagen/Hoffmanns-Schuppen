

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.bae81fa1.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.dbf68c38.js","_app/immutable/chunks/MediumHeading.addc6077.js","_app/immutable/chunks/Section.ab14c9c1.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.6e92a6a8.css"];
export const fonts = [];
