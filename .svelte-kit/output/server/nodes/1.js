

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fa9cac28.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.95c44ac2.js","_app/immutable/chunks/Section.ad3a548e.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c7202dd0.css"];
export const fonts = [];
