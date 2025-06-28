import { HeaderContainer } from "./styles";
import { useState } from "react";

import { Icon } from "../../atoms/icon";
import { Input } from "../../atoms/input";
import { Button } from "../../atoms/button";
import { Image } from "../../atoms/image";

import header from "../../../assets/logo.png";

import { Modal } from "../../organism/modal";
import { useFavorites } from "../../../contexts/FavoritesContext";
import { EpisodeList } from "../../template/episodeList";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  const [search, setSearch] = useState("");
  const { favorites } = useFavorites();
  const [isModalFavoritesOpen, setModalFavoritesOpen] = useState(false);

  const handleSearchClick = () => {
    onSearch(search);
  };

  const handleFavoriteClick = () => {
    setModalFavoritesOpen(true);
  };

  const handleCloseModal = () => {
    setModalFavoritesOpen(false);
  };

  return (
    <HeaderContainer>
      <Image src={header} alt="Rick and Morty Logo" size={100} />
      <Input
        type="text"
        placeholder="Buscar episódio..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSearchClick}>Buscar</Button>
      <Button onClick={handleFavoriteClick}>
        {" "}
        <Icon name="Heart" /> Favoritos
      </Button>

      {isModalFavoritesOpen && (
        <Modal onClose={handleCloseModal} title={`Episodios Favoritos`}>
          {
            <EpisodeList
              episodes={Object.values(favorites)}
              empty="Nenhum episódio favorito encontrado."
            />
          }
        </Modal>
      )}
    </HeaderContainer>
  );
};
