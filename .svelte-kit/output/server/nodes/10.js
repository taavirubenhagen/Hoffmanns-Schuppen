

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/investor-relations/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.51b8e65e.js","_app/immutable/chunks/index.c4faa42e.js","_app/immutable/chunks/ua-parser.95c44ac2.js","_app/immutable/chunks/SmallParagraph.16351f26.js","_app/immutable/chunks/MediumHeading.5acdd480.js","_app/immutable/chunks/Section.0a3409f3.js","_app/immutable/chunks/Button.c24e8308.js","_app/immutable/chunks/RawButton.7704e788.js","_app/immutable/chunks/index.c621ece4.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.c7202dd0.css"];
export const fonts = [];
