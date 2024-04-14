

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.c4cd1729.js","_app/immutable/chunks/index.61bf405e.js","_app/immutable/chunks/ua-parser.2034c678.js","_app/immutable/chunks/MediumHeading.ad9394ec.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.7b25bba5.css"];
export const fonts = [];
