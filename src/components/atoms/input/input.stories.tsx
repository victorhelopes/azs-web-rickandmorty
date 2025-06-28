// Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "tel", "url"],
    },
    // você pode adicionar mais controles conforme props que usa
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Digite algo...",
    disabled: false,
    type: "text",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Input desabilitado",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    placeholder: "Senha",
    type: "password",
  },
};
