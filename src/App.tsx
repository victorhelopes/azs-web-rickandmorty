import { useState } from "react";
import { Loading } from "./components/atoms/loading";
import { EpisodeList } from "./styles";
import { useCharacters } from "./graphql/queries/getCharacters";
import { EpisodeCard } from "./components/organism/episodeCard";
import type { IEpisode } from "./types/episode";
import { Header } from "./components/molecules/header";
import { Pagination } from "./components/molecules/pagination";

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useCharacters({
    fields: 'id episode name air_date characters {id  name  species status image}',
    page: currentPage,
    name: searchTerm
  });

  if (loading) return <Loading />;
  if (error) return <p>error: {error.message}</p>;

  return (
    <>
      <Header
        onSearch={(term) => setSearchTerm(term)}
      />
      <div className='container'>
        <EpisodeList>
          {data.episodes.results.map((episode: IEpisode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </EpisodeList>
        <Pagination
          totalPages={data.episodes.info.next ? data.episodes.info.pages : currentPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}
