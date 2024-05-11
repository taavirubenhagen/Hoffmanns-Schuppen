

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2b9f5e9d.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/paths.5e68f265.js","_app/immutable/chunks/RawButton.35a229a4.js","_app/immutable/chunks/ua-parser.28fa800e.js","_app/immutable/chunks/index.8e8fe62f.js","_app/immutable/chunks/SmallParagraph.18b570eb.js","_app/immutable/chunks/SmallHeading.c68c662d.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.fd6dbaed.css"];
export const fonts = [];
