

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.3787747f.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/paths.f1b97aa4.js","_app/immutable/chunks/RawButton.23e1a3a5.js","_app/immutable/chunks/ua-parser.14468aaf.js","_app/immutable/chunks/index.c621ece4.js","_app/immutable/chunks/SmallParagraph.69b0eadb.js","_app/immutable/chunks/SmallHeading.ec5ac4d9.js","_app/immutable/chunks/InlineButton.7c973b76.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.65fb773f.css"];
export const fonts = [];
