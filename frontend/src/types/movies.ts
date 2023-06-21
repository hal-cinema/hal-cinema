export type Movie = {
  id?: number;
  title: string;
  overview: string;
  releaseDate: string;
  backdropPath: string;
  posterPath: string;
  popularity: number;
  videoPath: string;
  isAdult: boolean;
  runtimeMin: number;
};

export type MovieThumb = Pick<Movie, "posterPath" | "title">;
export type MainNewsThumb = Pick<Movie, "backdropPath">;
