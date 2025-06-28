import { Row } from "../../../styles";
import type { IEpisode } from "../../../types/episode";
import { formatDate } from "../../../utils/formatDate";
import { Icon } from "../../atoms/icon";
import { CharacterCard } from "../../molecules/characterCard";
import { Badge } from "../../organism/episodeCard/styles";
import { Modal } from "../../organism/modal";
import { CharacterList } from "../../organism/modal/styles";

interface EpisodeDetailsProps {
  episode: IEpisode;
  onClose: () => void;
}


export const EpisodeDetails = ({...props}: EpisodeDetailsProps) => {
  return (
    <Modal
      onClose={props.onClose}
      title={`${props.episode.episode} - ${props.episode.name}`}
    >
      <Row>
        <Badge>
          <Icon name="Calendar" size="large" />
          {formatDate(props.episode.air_date)}
        </Badge>
      </Row>
      <CharacterList>
        {props.episode.characters.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
              status={character.status}
            />
          );
        })}
      </CharacterList>
    </Modal>
  );
};
