

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/mach-mit/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.f2bb0200.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.95c44ac2.js","_app/immutable/chunks/Section.ad3a548e.js","_app/immutable/chunks/SmallParagraph.f84dc976.js","_app/immutable/chunks/MediumHeading.28cacd99.js","_app/immutable/chunks/Button.6846c392.js","_app/immutable/chunks/RawButton.9d4fb019.js","_app/immutable/chunks/index.deee6f29.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c7202dd0.css"];
export const fonts = [];
