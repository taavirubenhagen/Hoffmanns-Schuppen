

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.6485c2d4.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.be5362ee.js","_app/immutable/chunks/MediumHeading.f4de993b.js","_app/immutable/chunks/Section.23a52fd9.js","_app/immutable/chunks/Button.eed3994e.js","_app/immutable/chunks/SmallParagraph.58020732.js","_app/immutable/chunks/RawButton.3047dd11.js","_app/immutable/chunks/index.deee6f29.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c8ead489.css"];
export const fonts = [];
