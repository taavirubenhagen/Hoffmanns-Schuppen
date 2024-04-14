

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.4321a5bf.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.b2bfadf0.js","_app/immutable/chunks/MediumHeading.adb55a5e.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.7cf8cca3.css"];
export const fonts = [];
