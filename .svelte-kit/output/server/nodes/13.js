

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.0121ab93.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.28fa800e.js","_app/immutable/chunks/MediumHeading.ff21dae4.js","_app/immutable/chunks/Section.a965c118.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.fd6dbaed.css"];
export const fonts = [];
