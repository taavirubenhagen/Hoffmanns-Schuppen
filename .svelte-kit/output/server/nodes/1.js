

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.97e9bc21.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/ua-parser.dbe46c45.js","_app/immutable/chunks/LargeHeading.0807a561.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.630faec4.css"];
export const fonts = [];
