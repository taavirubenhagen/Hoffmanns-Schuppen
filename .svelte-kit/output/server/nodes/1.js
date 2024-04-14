

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9d55a755.js","_app/immutable/chunks/index.61bf405e.js","_app/immutable/chunks/ua-parser.645a37eb.js","_app/immutable/chunks/LargeHeading.6d52b4bf.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.db2b0c71.css"];
export const fonts = [];
