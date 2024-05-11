

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.f75dd433.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.6b1942d4.js","_app/immutable/chunks/SmallParagraph.13d3ff36.js","_app/immutable/chunks/RawButton.8d60331a.js","_app/immutable/chunks/index.deee6f29.js","_app/immutable/chunks/Section.3b0cdc5c.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.8713fd52.css"];
export const fonts = [];
