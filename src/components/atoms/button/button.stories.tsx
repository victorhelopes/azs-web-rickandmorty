// src/components/atoms/button/button.stories.tsx

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./index";
import { Icon } from "../icon";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      options: ["default", "outlined", "icon"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined Button",
    variant: "outlined",
  },
};

export const IconButton: Story = {
  args: {
    children: <Icon name="Heart"  />,
    variant: "icon",
  },
};
