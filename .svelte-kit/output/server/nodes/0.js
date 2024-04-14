

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9579b76b.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/paths.2079db96.js","_app/immutable/chunks/RawButton.b7e11853.js","_app/immutable/chunks/ua-parser.6ed19792.js","_app/immutable/chunks/index.c621ece4.js","_app/immutable/chunks/SmallParagraph.30c5da2d.js","_app/immutable/chunks/SmallHeading.a9a944b8.js","_app/immutable/chunks/InlineButton.405dcf42.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.fae48076.css"];
export const fonts = [];
