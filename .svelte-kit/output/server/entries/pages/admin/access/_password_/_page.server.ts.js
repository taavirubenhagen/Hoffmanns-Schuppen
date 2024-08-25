import { r as redirect } from "../../../../../chunks/index.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
function load({ params }) {
  if (params.password != define_import_meta_env_default.VITE_HOFFMANNS_ADMIN_PASSWORD) {
    throw redirect(307, "/drafts/hoffmanns-schuppen/admin/login/failed");
  }
}
export {
  load
};
