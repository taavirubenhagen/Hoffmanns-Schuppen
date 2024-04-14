

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.da1ca20d.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/ua-parser.14468aaf.js","_app/immutable/chunks/MediumHeading.8de0a455.js","_app/immutable/chunks/Section.f8679b08.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.65fb773f.css"];
export const fonts = [];
