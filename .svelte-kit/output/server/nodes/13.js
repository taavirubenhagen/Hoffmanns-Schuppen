

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.504fa1ab.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/ua-parser.95c44ac2.js","_app/immutable/chunks/MediumHeading.5acdd480.js","_app/immutable/chunks/Section.0a3409f3.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c7202dd0.css"];
export const fonts = [];
