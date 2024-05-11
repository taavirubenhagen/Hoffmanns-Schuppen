

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.fa3409d2.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/paths.c346ca0e.js","_app/immutable/chunks/RawButton.db59afdc.js","_app/immutable/chunks/ua-parser.061d2225.js","_app/immutable/chunks/index.8e8fe62f.js","_app/immutable/chunks/SmallParagraph.dea168e4.js","_app/immutable/chunks/SmallHeading.cffb9332.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.bd5f5c7f.css"];
export const fonts = [];
