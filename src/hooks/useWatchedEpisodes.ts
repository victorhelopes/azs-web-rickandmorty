import { useEffect, useState } from "react";

type WatchedMap = Record<string, boolean>;

export function useWatchedEpisodes() {
  const [watched, setWatched] = useState<WatchedMap>({});

  useEffect(() => {
    const stored = localStorage.getItem("watchedEpisodes");
    if (stored) setWatched(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("watchedEpisodes", JSON.stringify(watched));
  }, [watched]);

  const toggleWatched = (id: string) => {
    setWatched((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return { watched, toggleWatched };
}
