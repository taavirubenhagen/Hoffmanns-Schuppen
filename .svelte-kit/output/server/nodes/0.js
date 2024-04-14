

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7a9334bf.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/stores.2c299ea1.js","_app/immutable/chunks/singletons.82c2e743.js","_app/immutable/chunks/index.e4da4940.js","_app/immutable/chunks/RawButton.cb63e1af.js","_app/immutable/chunks/ua-parser.b2bfadf0.js","_app/immutable/chunks/LargeHeading.08c0a26d.js","_app/immutable/chunks/Button.3f91c9af.js","_app/immutable/chunks/SmallParagraph.ef1ca6d0.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.7cf8cca3.css"];
export const fonts = [];
