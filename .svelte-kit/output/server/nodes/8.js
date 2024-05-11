

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.630c3015.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.061d2225.js","_app/immutable/chunks/MediumHeading.96cfca1c.js","_app/immutable/chunks/Section.e861cda8.js","_app/immutable/chunks/Button.a25758da.js","_app/immutable/chunks/SmallParagraph.dea168e4.js","_app/immutable/chunks/RawButton.db59afdc.js","_app/immutable/chunks/index.8e8fe62f.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.bd5f5c7f.css"];
export const fonts = [];
