import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.4eac27db.js","_app/immutable/chunks/index.18f7e289.js","_app/immutable/chunks/ua-parser.3b5097ce.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.725bda61.css"];
export const fonts = [];
