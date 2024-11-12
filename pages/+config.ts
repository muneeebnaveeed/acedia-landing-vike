import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import { BaseLayout } from "../components/layout/base-layout.jsx";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout: BaseLayout,

  // https://vike.dev/head-tags
  title: "Acedia Devs",
  description: "Acedia Landing Page",

  extends: vikeReact,
  ssr: false,
} satisfies Config;
