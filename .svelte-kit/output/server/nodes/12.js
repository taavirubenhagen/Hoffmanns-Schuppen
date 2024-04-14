

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.b2fdabba.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.c493f9d5.js","_app/immutable/chunks/MediumHeading.b3ef6d3b.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.725bda61.css"];
export const fonts = [];
