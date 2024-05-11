

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c594c447.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.061d2225.js","_app/immutable/chunks/Section.e861cda8.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.bd5f5c7f.css"];
export const fonts = [];
