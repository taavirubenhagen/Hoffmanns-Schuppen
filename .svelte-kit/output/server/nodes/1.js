

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e5a30684.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.8de8c973.js","_app/immutable/chunks/Section.6ad78428.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.a664c79a.css"];
export const fonts = [];
