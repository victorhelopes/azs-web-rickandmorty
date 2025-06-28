import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "./index";

const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
  args: {
    src: "https://via.placeholder.com/150",
    size: 100,
    alt: "Exemplo de imagem",
    avatar: false,
  },
  argTypes: {
    src: { control: "text" },
    size: { control: "number" },
    alt: { control: "text" },
    avatar: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {};
