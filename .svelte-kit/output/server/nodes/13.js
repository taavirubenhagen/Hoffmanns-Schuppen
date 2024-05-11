

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.38b71b2b.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.061d2225.js","_app/immutable/chunks/MediumHeading.96cfca1c.js","_app/immutable/chunks/Section.e861cda8.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.bd5f5c7f.css"];
export const fonts = [];
