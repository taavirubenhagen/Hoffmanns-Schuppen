

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/investor-relations/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.5ad77bfe.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.8de8c973.js","_app/immutable/chunks/SmallParagraph.e17d89c2.js","_app/immutable/chunks/MediumHeading.fed37c8d.js","_app/immutable/chunks/Section.6ad78428.js","_app/immutable/chunks/Button.261077bb.js","_app/immutable/chunks/RawButton.e13476d9.js","_app/immutable/chunks/index.deee6f29.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.a664c79a.css"];
export const fonts = [];
