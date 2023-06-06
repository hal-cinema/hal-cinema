import { Flex } from "@/components/elements/box/Flex";
import { Movie, MovieThumb } from "@/types/movies";
import React from "react";
import Image from "next/image";
import { BoxLabel } from "@/components/elements/label/BoxLabel";

type Props = {
  movies: MovieThumb[];
  label:string;
};
export const Ranking = (props: Props) => {
  const { movies,label } = props;
  return (
    <BoxLabel label={label}>
    <Flex direction="column">
      {movies.map((movie, index) => (
        <Flex>
          <Image
            src={movie.poster_path}
            key={index}
            width={100}
            height={100}
            alt="movies"
          />
          <p>{movie.title}</p>
        </Flex>
      ))}
    </Flex>
    </BoxLabel>
  );
};
