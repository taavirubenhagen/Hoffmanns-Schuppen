

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.bb9ab228.js","_app/immutable/chunks/index.18f7e289.js","_app/immutable/chunks/ua-parser.3b5097ce.js","_app/immutable/chunks/MediumHeading.088201f3.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.725bda61.css"];
export const fonts = [];
