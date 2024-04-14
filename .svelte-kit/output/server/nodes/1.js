

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fbf1601f.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.c493f9d5.js","_app/immutable/chunks/LargeHeading.d7ce4576.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.725bda61.css"];
export const fonts = [];
