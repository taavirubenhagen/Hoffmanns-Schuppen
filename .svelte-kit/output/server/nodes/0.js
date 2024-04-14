

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c6b2cdee.js","_app/immutable/chunks/index.61bf405e.js","_app/immutable/chunks/stores.f46a656a.js","_app/immutable/chunks/singletons.7d0314d4.js","_app/immutable/chunks/index.db8c0992.js","_app/immutable/chunks/RawButton.f6d8b701.js","_app/immutable/chunks/ua-parser.2034c678.js","_app/immutable/chunks/SmallParagraph.83fb6858.js","_app/immutable/chunks/LargeHeading.d7036ad5.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.7b25bba5.css"];
export const fonts = [];
