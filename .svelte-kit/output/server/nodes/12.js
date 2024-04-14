

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.aa77d928.js","_app/immutable/chunks/index.61bf405e.js","_app/immutable/chunks/ua-parser.645a37eb.js","_app/immutable/chunks/MediumHeading.21890563.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.db2b0c71.css"];
export const fonts = [];
