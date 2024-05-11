import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.c0fbbfdb.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.dbf68c38.js","_app/immutable/chunks/SmallHeading.b64305d4.js","_app/immutable/chunks/Section.ab14c9c1.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.6e92a6a8.css"];
export const fonts = [];
