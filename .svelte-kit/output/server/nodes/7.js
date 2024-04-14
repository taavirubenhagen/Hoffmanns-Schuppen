

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.1576b488.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.8607bdc8.js","_app/immutable/chunks/SmallParagraph.2240051a.js","_app/immutable/chunks/RawButton.2398eb79.js","_app/immutable/chunks/index.e4da4940.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.5d697239.css"];
export const fonts = [];
