

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.045c4c4d.js","_app/immutable/chunks/index.c5707d09.js","_app/immutable/chunks/index.154b2199.js","_app/immutable/chunks/Section.1398f092.js"];
export const stylesheets = ["_app/immutable/assets/index.a665bfe9.css"];
export const fonts = [];
