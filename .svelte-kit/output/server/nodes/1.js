

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ca3085ec.js","_app/immutable/chunks/index.61bf405e.js","_app/immutable/chunks/ua-parser.2034c678.js","_app/immutable/chunks/LargeHeading.d7036ad5.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.7b25bba5.css"];
export const fonts = [];
