/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import webpackConfig from "../webpack.config";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/client",
    "storybook-addon-styled-component-theme/dist/preset",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: webpackConfig.module.rules,
      },
      resolve: {
        ...config.resolve,
        ...webpackConfig.resolve,
      },
    };
  },
};
export default config;
