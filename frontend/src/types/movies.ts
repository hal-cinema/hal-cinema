export type Movie = {
  id?: number;
  title: string;
  overview: string;
  release_date: Date;
  backdrop_path: string;
  poster_path: string;
  popularity: number;
  video_path: string;
  is_adult: boolean;
  runtime_min: number;
  created_at?: Date;
};

export type MovieThumb = Pick<Movie, "poster_path" | "title">;
export type MainNewsThumb = Pick<Movie, "backdrop_path">;
