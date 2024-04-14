

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7a82a301.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/ua-parser.87cb26f2.js","_app/immutable/chunks/LargeHeading.7c1d95fd.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.d9026b37.css"];
export const fonts = [];
