

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9d5a52bc.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/stores.d01b22f9.js","_app/immutable/chunks/singletons.4918cfd8.js","_app/immutable/chunks/index.e4da4940.js","_app/immutable/chunks/RawButton.2a299451.js","_app/immutable/chunks/ua-parser.8be34fb6.js","_app/immutable/chunks/LargeHeading.bd07f525.js","_app/immutable/chunks/Button.64a2beb7.js","_app/immutable/chunks/SmallParagraph.db2fe186.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.d9b210ab.css"];
export const fonts = [];
