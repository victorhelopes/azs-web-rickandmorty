import type { IEpisode } from "../../../types/episode";
import { EpisodeCard } from "../../organism/episodeCard";
import { EpisodeListStyled } from "./styles";

interface EpisodeListProps {
  episodes: IEpisode[];
  empty?: string;
}

export const EpisodeList = ({...props}: EpisodeListProps) => {
  return (
    <EpisodeListStyled>
      {props.episodes.length === 0 ? (
        <p>{props.empty}</p>
      ) : (
        props.episodes.map((episode: IEpisode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))
      )}
    </EpisodeListStyled>
  );
};
