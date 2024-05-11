import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.bad0a55a.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.28fa800e.js","_app/immutable/chunks/SmallHeading.c68c662d.js","_app/immutable/chunks/Section.a965c118.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.fd6dbaed.css"];
export const fonts = [];
