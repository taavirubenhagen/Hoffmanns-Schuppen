

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2e41a0d5.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/stores.7d306b56.js","_app/immutable/chunks/singletons.ea2e712e.js","_app/immutable/chunks/index.a2018c2b.js","_app/immutable/chunks/state.1c958ab2.js","_app/immutable/chunks/ua-parser.87cb26f2.js","_app/immutable/chunks/LargeHeading.7c1d95fd.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.d9026b37.css"];
export const fonts = [];
