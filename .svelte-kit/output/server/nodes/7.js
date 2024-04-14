

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.ac270841.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/ua-parser.6ed19792.js","_app/immutable/chunks/InlineButton.405dcf42.js","_app/immutable/chunks/SmallParagraph.30c5da2d.js","_app/immutable/chunks/RawButton.b7e11853.js","_app/immutable/chunks/index.c621ece4.js","_app/immutable/chunks/Section.63b0329b.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.fae48076.css"];
export const fonts = [];
