

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.52cceacb.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.8de8c973.js","_app/immutable/chunks/MediumHeading.fed37c8d.js","_app/immutable/chunks/Section.6ad78428.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.a664c79a.css"];
export const fonts = [];
