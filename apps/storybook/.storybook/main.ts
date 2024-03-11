import { join, dirname } from "path"
import type { StorybookConfig } from "@storybook/nextjs"

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")))
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y")
  ],
  framework: {
    // @ts-ignore
    name: getAbsolutePath("@storybook/nextjs"),
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  webpackFinal(config) {
    /**
     *  ? This modifies the existing image rule to exclude `.svg` files, Since we handle those with `@svgr/webpack`.
     */
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test
      if (!test) {
        return false
      }
      return test.test(".svg")
    }) as { [key: string]: any }
    imageRule.exclude = /\.svg$/
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })

    return config
  }
}
export default config
