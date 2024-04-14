

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/investor-relations/bedingungen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.050aaaac.js","_app/immutable/chunks/index.c4faa42e.js"];
export const stylesheets = [];
export const fonts = [];
