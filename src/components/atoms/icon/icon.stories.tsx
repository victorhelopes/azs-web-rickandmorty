import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./index";
import { theme } from "../../../styles/theme";
import * as ReactFeatherIcons from "react-feather";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    name: "Heart",
    size: "base",
    color: theme.colors.primary,
    fill: false,
    strokeWidth: 2,
  },
  argTypes: {
    name: {
      control: {
        options: Object.keys(ReactFeatherIcons),
      },
    },
    size: {
        options: ["xsmall", "small", "base", "large", "xlarge"],
        control: {
            type: "select",
        },
    },
    color: { control: "color" },
    fill: { control: "boolean" },
    strokeWidth: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
