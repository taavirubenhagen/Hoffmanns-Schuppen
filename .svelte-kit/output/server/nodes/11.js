

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.636797ee.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/ua-parser.7bf42864.js","_app/immutable/chunks/MediumHeading.07c593d3.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.16d2bac6.css"];
export const fonts = [];
