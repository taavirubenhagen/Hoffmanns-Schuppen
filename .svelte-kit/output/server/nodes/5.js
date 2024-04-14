import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.7cd23d8a.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/ua-parser.6ed19792.js","_app/immutable/chunks/SmallHeading.a9a944b8.js","_app/immutable/chunks/Section.63b0329b.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.fae48076.css"];
export const fonts = [];
