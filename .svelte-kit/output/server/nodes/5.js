import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.39a2c324.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.be5362ee.js","_app/immutable/chunks/SmallHeading.ec91187a.js","_app/immutable/chunks/Section.23a52fd9.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c8ead489.css"];
export const fonts = [];
