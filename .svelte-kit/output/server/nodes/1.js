

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.46ba18cf.js","_app/immutable/chunks/index.18f7e289.js","_app/immutable/chunks/ua-parser.3b5097ce.js","_app/immutable/chunks/LargeHeading.595f6566.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.725bda61.css"];
export const fonts = [];
