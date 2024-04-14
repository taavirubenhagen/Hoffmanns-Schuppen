

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.156a8d2c.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.8607bdc8.js","_app/immutable/chunks/LargeHeading.e1440dd4.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.5d697239.css"];
export const fonts = [];
