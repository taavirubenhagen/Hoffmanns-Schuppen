

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.4d05f12d.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.c493f9d5.js","_app/immutable/chunks/SmallParagraph.6ddd1832.js","_app/immutable/chunks/RawButton.d8e66b2f.js","_app/immutable/chunks/index.e4da4940.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.725bda61.css"];
export const fonts = [];
