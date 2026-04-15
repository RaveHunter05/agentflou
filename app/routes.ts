import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx"),
  route("contact", "routes/contact.tsx"),
  route("terms", "routes/terms.tsx"),
  route("privacy", "routes/privacy.tsx")
] satisfies RouteConfig;
