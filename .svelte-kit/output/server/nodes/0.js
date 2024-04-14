

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.633543c0.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/stores.bb8da84b.js","_app/immutable/chunks/singletons.8d148ce2.js","_app/immutable/chunks/index.a2018c2b.js","_app/immutable/chunks/state.1c958ab2.js","_app/immutable/chunks/ua-parser.dbe46c45.js","_app/immutable/chunks/LargeHeading.0807a561.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.630faec4.css"];
export const fonts = [];
