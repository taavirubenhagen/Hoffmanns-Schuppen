

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.01500944.js","_app/immutable/chunks/index.61bf405e.js","_app/immutable/chunks/ua-parser.2034c678.js","_app/immutable/chunks/MediumHeading.ad9394ec.js","_app/immutable/chunks/Button.3fed3692.js","_app/immutable/chunks/SmallParagraph.83fb6858.js","_app/immutable/chunks/RawButton.f6d8b701.js","_app/immutable/chunks/index.db8c0992.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.7b25bba5.css"];
export const fonts = [];
