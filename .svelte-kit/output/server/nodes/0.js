

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.77a3bc16.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/stores.454a7a20.js","_app/immutable/chunks/singletons.eecf216c.js","_app/immutable/chunks/index.a2018c2b.js","_app/immutable/chunks/state.1c958ab2.js","_app/immutable/chunks/ua-parser.7bf42864.js","_app/immutable/chunks/LargeHeading.26be73a2.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.16d2bac6.css"];
export const fonts = [];
