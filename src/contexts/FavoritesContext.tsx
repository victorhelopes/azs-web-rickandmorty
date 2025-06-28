// src/contexts/FavoritesContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import type { IEpisode } from "../types/episode";

type FavoritesMap = Record<string, IEpisode>;

interface FavoritesContextProps {
  favorites: FavoritesMap;
  toggleFavorite: (episode: IEpisode) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoritesMap>({});

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (episode: IEpisode) => {
    setFavorites((prev) => {
      const exists = prev[episode.id];
      if (exists) {
        const copy = { ...prev };
        delete copy[episode.id];
        return copy;
      } else {
        return {
          ...prev,
          [episode.id]: episode,
        };
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used inside FavoritesProvider");
  return ctx;
}
