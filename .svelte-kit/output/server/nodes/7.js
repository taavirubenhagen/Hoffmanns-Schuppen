

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.72cf1945.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.8be34fb6.js","_app/immutable/chunks/SmallParagraph.db2fe186.js","_app/immutable/chunks/RawButton.2a299451.js","_app/immutable/chunks/index.e4da4940.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.d9b210ab.css"];
export const fonts = [];
