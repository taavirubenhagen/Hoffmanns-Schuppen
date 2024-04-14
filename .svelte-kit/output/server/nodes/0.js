

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.74dba560.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/stores.ef4fe8d2.js","_app/immutable/chunks/singletons.f6d21c09.js","_app/immutable/chunks/index.e4da4940.js","_app/immutable/chunks/RawButton.cb63e1af.js","_app/immutable/chunks/ua-parser.b2bfadf0.js","_app/immutable/chunks/LargeHeading.08c0a26d.js","_app/immutable/chunks/Button.a18942bf.js","_app/immutable/chunks/SmallParagraph.ef1ca6d0.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.7cf8cca3.css"];
export const fonts = [];
