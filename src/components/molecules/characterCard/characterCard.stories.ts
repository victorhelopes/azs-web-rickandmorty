import type { Meta, StoryObj } from "@storybook/react-vite";
import { CharacterCard } from "./index";

const meta: Meta<typeof CharacterCard> = {
  title: "Molecules/CharacterCard",
  component: CharacterCard,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    species: { control: "text" },
    status: { control: "text" },
    image: { control: "text" }, // Pode ser url da imagem
  },
};

export default meta;

type Story = StoryObj<typeof CharacterCard>;

export const Default: Story = {
  args: {
    name: "Rick Sanchez",
    species: "Humano",
    status: "Vivo",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
};

export const DeadCharacter: Story = {
  args: {
    name: "Birdperson",
    species: "Alien",
    status: "Morto",
    image: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
  },
};
