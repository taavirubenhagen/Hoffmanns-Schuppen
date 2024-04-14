

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.56c28511.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.b2bfadf0.js","_app/immutable/chunks/LargeHeading.08c0a26d.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.7cf8cca3.css"];
export const fonts = [];
