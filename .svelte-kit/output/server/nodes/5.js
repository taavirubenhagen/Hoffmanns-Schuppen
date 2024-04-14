import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.651ac485.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.b2bfadf0.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.7cf8cca3.css"];
export const fonts = [];
