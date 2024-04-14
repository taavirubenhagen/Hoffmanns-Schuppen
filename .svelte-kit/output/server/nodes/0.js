

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.e1aaee85.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/paths.878ff32d.js","_app/immutable/chunks/RawButton.3047dd11.js","_app/immutable/chunks/ua-parser.be5362ee.js","_app/immutable/chunks/index.deee6f29.js","_app/immutable/chunks/SmallParagraph.58020732.js","_app/immutable/chunks/SmallHeading.ec91187a.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c8ead489.css"];
export const fonts = [];
