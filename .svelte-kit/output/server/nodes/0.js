

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.e424feed.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/paths.b915f36c.js","_app/immutable/chunks/RawButton.9d4fb019.js","_app/immutable/chunks/ua-parser.95c44ac2.js","_app/immutable/chunks/index.deee6f29.js","_app/immutable/chunks/SmallParagraph.f84dc976.js","_app/immutable/chunks/SmallHeading.a10e7af9.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c7202dd0.css"];
export const fonts = [];
