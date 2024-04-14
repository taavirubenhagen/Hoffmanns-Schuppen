

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.94426a78.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.be5362ee.js","_app/immutable/chunks/MediumHeading.f4de993b.js","_app/immutable/chunks/Section.23a52fd9.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c8ead489.css"];
export const fonts = [];
