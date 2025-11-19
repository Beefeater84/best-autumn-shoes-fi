import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/main/page.tsx"),
  route("post/:id", "./pages/post/index.tsx"),
] satisfies RouteConfig;
