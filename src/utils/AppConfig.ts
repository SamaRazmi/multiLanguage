import type { LocalePrefix } from "node_modules/next-intl/dist/types/src/routing/types";

const localePrefix: LocalePrefix = "as-needed";

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: "Nextjs Starter",
  locales: ["en", "fr", "fa", "ar", "tr"],
  defaultLocale: "fa",
  defaultTheme: "dark",
  localePrefix,
};
