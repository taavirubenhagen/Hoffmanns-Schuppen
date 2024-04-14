

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.7cbb55f0.js","_app/immutable/chunks/index.61bf405e.js","_app/immutable/chunks/ua-parser.645a37eb.js","_app/immutable/chunks/SmallParagraph.f97809d5.js","_app/immutable/chunks/RawButton.09be87a9.js","_app/immutable/chunks/index.db8c0992.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.db2b0c71.css"];
export const fonts = [];
