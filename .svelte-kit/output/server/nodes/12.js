

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.4820863f.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/ua-parser.87cb26f2.js","_app/immutable/chunks/MediumHeading.ada67b32.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.d9026b37.css"];
export const fonts = [];
