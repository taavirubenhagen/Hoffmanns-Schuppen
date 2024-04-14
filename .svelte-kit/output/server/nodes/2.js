

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.19483840.js","_app/immutable/chunks/index.9387a7f5.js"];
export const stylesheets = [];
export const fonts = [];
