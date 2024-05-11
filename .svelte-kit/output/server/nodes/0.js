

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.64e9572f.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/paths.9f073b36.js","_app/immutable/chunks/RawButton.4b121e4d.js","_app/immutable/chunks/ua-parser.dbf68c38.js","_app/immutable/chunks/index.8e8fe62f.js","_app/immutable/chunks/SmallParagraph.f9b830aa.js","_app/immutable/chunks/SmallHeading.b64305d4.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.6e92a6a8.css"];
export const fonts = [];
