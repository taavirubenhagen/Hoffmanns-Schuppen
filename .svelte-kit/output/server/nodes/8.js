

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.8e0329e9.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.8be34fb6.js","_app/immutable/chunks/MediumHeading.9a5c90f8.js","_app/immutable/chunks/Button.64a2beb7.js","_app/immutable/chunks/SmallParagraph.db2fe186.js","_app/immutable/chunks/RawButton.2a299451.js","_app/immutable/chunks/index.e4da4940.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.d9b210ab.css"];
export const fonts = [];
