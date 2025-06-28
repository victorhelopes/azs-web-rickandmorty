import { useState } from "react";
import { Loading } from "./components/atoms/loading";
import { useCharacters } from "./graphql/queries/getCharacters";
import { Header } from "./components/molecules/header";
import { Pagination } from "./components/molecules/pagination";
import { EpisodeList } from "./components/template/episodeList";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useCharacters({
    fields:
      "id episode name air_date characters {id  name  species status image}",
    page: currentPage,
    name: searchTerm,
  });

  if (loading) return <Loading />;
  if (error) return <p>error: {error.message}</p>;

  return (
    <>
      <Header onSearch={(term) => setSearchTerm(term)} />
      <div className="container">
        <EpisodeList
          episodes={data.episodes.results}
          empty="Nenhum episódio encontrado"
        />
        <Pagination
          totalPages={
            data.episodes.info.next ? data.episodes.info.pages : currentPage
          }
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}
