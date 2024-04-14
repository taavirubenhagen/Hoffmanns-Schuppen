

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5d771b24.js","_app/immutable/chunks/index.c4faa42e.js"];
export const stylesheets = [];
export const fonts = [];
