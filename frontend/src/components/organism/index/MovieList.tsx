import React from "react";
import Image from "next/image";
import { Styles } from "@/types/styles";
import Link from "next/link";
import { Movie, MovieThumb } from "@/types/movies";
import { Flex } from "@/components/elements/box/Flex";
import { BoxLabel } from "@/components/elements/label/BoxLabel";

type Props = {
  movies: MovieThumb[];
  label: string;
};

export const MovieList = (props: Props) => {
  const { movies, label } = props;
  return (
    <BoxLabel label={label}>
      <Link href="/movie">
        <Flex style={styles.movie_list}>
          {movies.map((movie, index) => (
            <Flex direction="column">
              <Image
                src={movie.poster_path}
                key={index}
                alt="movie"
                width={100}
                height={100}
              />
              <p>{movie.title}</p>
            </Flex>
          ))}
        </Flex>
      </Link>
    </BoxLabel>
  );
};

const styles: Styles = {
  container: {},
  movie_list: {},
};
