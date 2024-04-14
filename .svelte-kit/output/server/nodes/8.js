

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.bdbab9dc.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/ua-parser.7bf42864.js","_app/immutable/chunks/MediumHeading.07c593d3.js","_app/immutable/chunks/Button.c85cf130.js","_app/immutable/chunks/SmallParagraph.0e838e0b.js","_app/immutable/chunks/RawButton.76e72a28.js","_app/immutable/chunks/state.1c958ab2.js","_app/immutable/chunks/index.a2018c2b.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.16d2bac6.css"];
export const fonts = [];
