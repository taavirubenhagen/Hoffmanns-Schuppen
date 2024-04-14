

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.9b65ff3d.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.1a96785d.js","_app/immutable/chunks/MediumHeading.26ca9f1d.js","_app/immutable/chunks/Section.11110a9c.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.8ff71c75.css"];
export const fonts = [];
