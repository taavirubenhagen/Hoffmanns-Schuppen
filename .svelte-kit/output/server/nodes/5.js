import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.91246a19.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.061d2225.js","_app/immutable/chunks/SmallHeading.cffb9332.js","_app/immutable/chunks/Section.e861cda8.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.bd5f5c7f.css"];
export const fonts = [];
