

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.47e7fc44.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.dbf68c38.js","_app/immutable/chunks/Section.ab14c9c1.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.6e92a6a8.css"];
export const fonts = [];
