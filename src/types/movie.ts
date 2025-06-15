import { type Actor } from './actor';

export interface Movie extends ContentProps {
  status: Status;
  duration: number;
}

export interface Serie extends ContentProps {
  seasons: SeasonProps[];
  firstAirDate: Date;
  endAirDate: Date;
}

export interface SeasonProps {
  seasonNumber: number;
  status: Status;
  episodes: EpisodeProps[];
  releaseDate: Date;
  posterUrl: Array<string>;
  trailerUrl: string;
}

export interface EpisodeProps {
  episodeNumber: number;
  status: Status;
  duration: number;
  releaseDate: Date;
}

interface ContentProps {
  identification: number;
  title: string;
  description: string;
  coverUrl: string;
  trailerUrl: string;
  releaseDate: Date;
  genres: Array<string>;
  protagonist: Actor[];
  cast: Actor[];
}

type Status = 'watch' | 'watching' | 'watched';
