

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.da8da104.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.28fa800e.js","_app/immutable/chunks/SmallParagraph.18b570eb.js","_app/immutable/chunks/RawButton.35a229a4.js","_app/immutable/chunks/index.8e8fe62f.js","_app/immutable/chunks/Section.a965c118.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.fd6dbaed.css"];
export const fonts = [];
