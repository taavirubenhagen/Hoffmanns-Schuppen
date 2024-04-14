import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.f5f748ab.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/ua-parser.dbe46c45.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.630faec4.css"];
export const fonts = [];
