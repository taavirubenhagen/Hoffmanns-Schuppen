import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.af78f097.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/ua-parser.14468aaf.js","_app/immutable/chunks/SmallHeading.ec5ac4d9.js","_app/immutable/chunks/Section.f8679b08.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.65fb773f.css"];
export const fonts = [];
