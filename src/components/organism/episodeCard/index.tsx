import { useState } from "react";
import { formatDate } from "../../../utils/formatDate";

import { Badge, Card, CardHeader } from "./styles";
import { Icon } from "../../atoms/icon";

import type { IEpisode } from "../../../types/episode";
import { useFavorites } from "../../../contexts/FavoritesContext";
import { Button } from "../../atoms/button";
import { theme } from "../../../styles/theme";
import { useWatchedEpisodes } from "../../../hooks/useWatchedEpisodes";
import { Title } from "../../atoms/title/styles";
import { Text } from "../../atoms/text";
import { EpisodeDetails } from "../../template/episodeDetails";
import { Row } from "../../../styles";

interface EpisodeCardProps {
  episode: IEpisode;
}

export const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  const { toggleFavorite, favorites } = useFavorites();
  const { toggleWatched, watched } = useWatchedEpisodes();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card onClick={handleCardClick}>
        <CardHeader>
          <Title>{episode.episode}</Title>
          <Button
            variant="icon"
            aria-label={
              watched[episode.id]
                ? "Desmarcar como assistido"
                : "Marcar como assistido"
            }
            onClick={(e) => {
              e.stopPropagation();
              toggleWatched(episode.id);
            }}
          >
            <Icon name="Eye" size="large" color={theme.colors.black} />
          </Button>
          <Button
            variant="icon"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(episode);
            }}
          >
            <Icon
              name="Heart"
              size="large"
              color="red"
              fill={!!favorites[episode.id]}
            />
          </Button>
        </CardHeader>
        <Text size={theme.iconSizes.large}>{episode.name}</Text>
        <Row>
          <Badge>
            <Icon name="Calendar" size="large" />
            {formatDate(episode.air_date)}
          </Badge>
          <Badge>
            <Icon name="User" size="large" />
            {episode.characters.length}
          </Badge>
          {watched[episode.id] && (
            <Badge>
              <Icon name="Eye" size="large" />
              Assistido
            </Badge>
          )}
        </Row>
      </Card>

      {isModalOpen && (
        <EpisodeDetails
          episode={episode}
          onClose={() => {
            handleCloseModal();
          }}
        />
      )}
    </>
  );
};
