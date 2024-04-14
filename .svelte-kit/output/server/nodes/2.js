

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8e4ca9fe.js","_app/immutable/chunks/index.bbc92f60.js"];
export const stylesheets = [];
export const fonts = [];
