

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d39fe7b6.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.8be34fb6.js","_app/immutable/chunks/LargeHeading.bd07f525.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.d9b210ab.css"];
export const fonts = [];
