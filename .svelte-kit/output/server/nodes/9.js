

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/impressum/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.726da1a0.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/ua-parser.95c44ac2.js","_app/immutable/chunks/SmallParagraph.16351f26.js","_app/immutable/chunks/Section.0a3409f3.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c7202dd0.css"];
export const fonts = [];
