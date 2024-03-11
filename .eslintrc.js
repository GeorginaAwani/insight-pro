// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname
  },
  ignorePatterns: ["!.storybook"],
  rules: {
    "@next/next/no-html-link-for-pages": "off"
  },
  settings: {
    next: {
      rootDir: ["/apps/backoffice", "/apps/web", "/apps/newsletter"]
    }
  }
}
