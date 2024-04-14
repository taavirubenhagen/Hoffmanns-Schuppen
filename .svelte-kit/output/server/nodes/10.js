

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/investor-relations/bedingungen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.d93e8aec.js","_app/immutable/chunks/index.18f7e289.js"];
export const stylesheets = [];
export const fonts = [];
