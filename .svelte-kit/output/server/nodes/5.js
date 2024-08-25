import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.b66c6abe.js","_app/immutable/chunks/index.c5707d09.js","_app/immutable/chunks/index.154b2199.js","_app/immutable/chunks/SmallHeading.e1a8720a.js","_app/immutable/chunks/Section.1398f092.js"];
export const stylesheets = ["_app/immutable/assets/index.a665bfe9.css"];
export const fonts = [];
