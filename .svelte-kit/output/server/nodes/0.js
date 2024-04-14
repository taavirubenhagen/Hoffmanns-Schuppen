

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.48da33cf.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/paths.ce126216.js","_app/immutable/chunks/RawButton.1d2735b2.js","_app/immutable/chunks/ua-parser.1a96785d.js","_app/immutable/chunks/index.deee6f29.js","_app/immutable/chunks/SmallParagraph.11871bdb.js","_app/immutable/chunks/SmallHeading.8a1659eb.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.8ff71c75.css"];
export const fonts = [];
