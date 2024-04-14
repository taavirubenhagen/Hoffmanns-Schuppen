

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/investor-relations/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.f1298482.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/ua-parser.dbe46c45.js","_app/immutable/chunks/SmallParagraph.cc4f324b.js","_app/immutable/chunks/MediumHeading.010cd9f7.js","_app/immutable/chunks/Button.b6832841.js","_app/immutable/chunks/RawButton.7ce0dc83.js","_app/immutable/chunks/state.1c958ab2.js","_app/immutable/chunks/index.a2018c2b.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.630faec4.css"];
export const fonts = [];
