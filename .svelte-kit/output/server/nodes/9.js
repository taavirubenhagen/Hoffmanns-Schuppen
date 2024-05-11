

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/impressum/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.9446a466.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.95c44ac2.js","_app/immutable/chunks/SmallParagraph.f84dc976.js","_app/immutable/chunks/Section.ad3a548e.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c7202dd0.css"];
export const fonts = [];
