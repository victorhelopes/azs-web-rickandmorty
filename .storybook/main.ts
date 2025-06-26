import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": ['../src/components/**/*.stories.@(ts|tsx|js|jsx)'],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;