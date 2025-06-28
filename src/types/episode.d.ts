export interface IEpisode {
  id: string;
  episode: string;
  name: string;
  air_date: string;
  characters: {
    id: string;
    name: string;
    species: string;
    status: string;
    image: string;
  }[];
}
