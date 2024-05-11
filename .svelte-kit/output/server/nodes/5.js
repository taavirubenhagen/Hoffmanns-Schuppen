import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.8bb694a0.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.95c44ac2.js","_app/immutable/chunks/SmallHeading.a10e7af9.js","_app/immutable/chunks/Section.ad3a548e.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c7202dd0.css"];
export const fonts = [];
