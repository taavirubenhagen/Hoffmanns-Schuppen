

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.4812a78e.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/ua-parser.dbe46c45.js","_app/immutable/chunks/MediumHeading.010cd9f7.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.630faec4.css"];
export const fonts = [];
