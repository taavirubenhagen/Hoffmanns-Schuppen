

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.45d22a3d.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.061d2225.js","_app/immutable/chunks/SmallParagraph.dea168e4.js","_app/immutable/chunks/RawButton.db59afdc.js","_app/immutable/chunks/index.8e8fe62f.js","_app/immutable/chunks/Section.e861cda8.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.bd5f5c7f.css"];
export const fonts = [];
