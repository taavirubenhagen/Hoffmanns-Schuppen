

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f59f0047.js","_app/immutable/chunks/index.1b07a146.js"];
export const stylesheets = [];
export const fonts = [];
