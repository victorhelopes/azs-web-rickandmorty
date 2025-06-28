import { Image } from "../../atoms/image";
import { Text } from "../../atoms/text";
import { Body, StyledCharacterCard } from "./styles";

interface CharacterCardProps {
  name: string;
  species: string;
  status: string;
  image: string;
}

export const CharacterCard = ({
  name,
  species,
  status,
  image,
}: CharacterCardProps) => (
  <StyledCharacterCard>
    <Image src={image} size={50} avatar alt={name} />
    <Body>
      <Text weight="bold">{name}</Text>
      <Text>Espécie: {species}</Text>
      <Text>Status: {status}</Text>
    </Body>
  </StyledCharacterCard>
);
