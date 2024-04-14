

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.8c2e8873.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.8be34fb6.js","_app/immutable/chunks/MediumHeading.9a5c90f8.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.d9b210ab.css"];
export const fonts = [];
