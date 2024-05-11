

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.d8b15a82.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.95c44ac2.js","_app/immutable/chunks/MediumHeading.28cacd99.js","_app/immutable/chunks/Section.ad3a548e.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c7202dd0.css"];
export const fonts = [];
