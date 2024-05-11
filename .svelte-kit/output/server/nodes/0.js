

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.11dde23f.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/paths.5a70e623.js","_app/immutable/chunks/RawButton.8d60331a.js","_app/immutable/chunks/ua-parser.6b1942d4.js","_app/immutable/chunks/index.deee6f29.js","_app/immutable/chunks/SmallParagraph.13d3ff36.js","_app/immutable/chunks/SmallHeading.0fc5ee1a.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.8713fd52.css"];
export const fonts = [];
