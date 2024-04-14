

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5044bd90.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/ua-parser.14468aaf.js","_app/immutable/chunks/Section.f8679b08.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.65fb773f.css"];
export const fonts = [];
