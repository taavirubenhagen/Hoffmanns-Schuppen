import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.a409b6cc.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/ua-parser.95c44ac2.js","_app/immutable/chunks/SmallHeading.c8e207ee.js","_app/immutable/chunks/Section.0a3409f3.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c7202dd0.css"];
export const fonts = [];
