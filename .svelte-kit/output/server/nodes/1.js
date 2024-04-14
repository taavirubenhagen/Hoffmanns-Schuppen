

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.15719c86.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.1a96785d.js","_app/immutable/chunks/Section.11110a9c.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.8ff71c75.css"];
export const fonts = [];
