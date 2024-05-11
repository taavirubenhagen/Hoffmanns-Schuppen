

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/investor-relations/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.9fbf78ea.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.28fa800e.js","_app/immutable/chunks/SmallParagraph.18b570eb.js","_app/immutable/chunks/MediumHeading.ff21dae4.js","_app/immutable/chunks/Section.a965c118.js","_app/immutable/chunks/Button.b3e039d9.js","_app/immutable/chunks/RawButton.35a229a4.js","_app/immutable/chunks/index.8e8fe62f.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.fd6dbaed.css"];
export const fonts = [];
