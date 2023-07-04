import { Flex } from "@/components/elements/box/Flex";
import React from "react";
import { MinimumMovie } from "./MinimumMovie";
import { MovieDetail } from "./MovieDetail";
import { Movie } from "@/types/movies";

type Props = {
  isMinimum: boolean;
  currentMovies: Movie[];
};
export const MovieBox = (props: Props) => {
  const { isMinimum, currentMovies } = props;
  return (
    <>
      {isMinimum ? (
        <Flex>
          {currentMovies.map((movie) => (
            <MinimumMovie movie={movie} key={movie.id} />
          ))}
        </Flex>
      ) : (
        currentMovies.map((movie) => (
          <MovieDetail movie={movie} key={movie.id} />
        ))
      )}
    </>
  );
};
