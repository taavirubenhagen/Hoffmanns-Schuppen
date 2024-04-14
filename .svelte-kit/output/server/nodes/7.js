

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.01937a30.js","_app/immutable/chunks/index.18f7e289.js","_app/immutable/chunks/ua-parser.3b5097ce.js","_app/immutable/chunks/SmallParagraph.821795e9.js","_app/immutable/chunks/RawButton.aff01f10.js","_app/immutable/chunks/index.6f0d1e23.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.725bda61.css"];
export const fonts = [];
