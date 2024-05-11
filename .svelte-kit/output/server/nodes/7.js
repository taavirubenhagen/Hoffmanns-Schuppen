

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.618a3c88.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.dbf68c38.js","_app/immutable/chunks/SmallParagraph.f9b830aa.js","_app/immutable/chunks/RawButton.4b121e4d.js","_app/immutable/chunks/index.8e8fe62f.js","_app/immutable/chunks/Section.ab14c9c1.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.6e92a6a8.css"];
export const fonts = [];
