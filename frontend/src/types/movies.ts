export type Movie = {
  id?: number;
  title: string;
  overview: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  popularity: number;
  video_path: string;
  is_adult: boolean;
  runtime_min: number;
  created_at?: string;
};

export type MovieThumb = Pick<Movie, "poster_path" | "title">;
