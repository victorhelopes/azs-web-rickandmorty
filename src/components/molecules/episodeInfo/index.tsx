import { Text } from "../../atoms/text";

interface EpisodeInfoProps {
  name: string;
  code: string;
  airDate: string;
}

export const EpisodeInfo = ({ name, code, airDate }: EpisodeInfoProps) => (
  <>
    <Text>{name}</Text>
    <Text>{code}</Text>
    <Text>{airDate}</Text>
  </>
);
