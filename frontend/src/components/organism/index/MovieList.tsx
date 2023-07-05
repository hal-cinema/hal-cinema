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
      <Link href="/movie" >
        <Flex  justify="center" style={styles.movie_list}>
          {movies.map((movie, index) => (
            <Flex
              direction="column"
              key={index}
              align="center"
              justify="space-between"
              style={styles.movie_box}
            >
              <Image
                src={movie.posterPath}
                alt="movie"
                width={134}
                height={190}
              />
              <p style={styles.movie_title}>{movie.title}</p>
            </Flex>
          ))}
        <p style={styles.more}>もっと見る＞</p>
        </Flex>
      </Link>
    </BoxLabel>
  );
};

const styles: Styles = {
  container: {},
  movie_list: {
    borderTop: "4px solid #222550",
    width: "475px",
    height: "330px",
    background:"#fff",
    position: "relative",
    color: "#000",
  },
  movie_box: {
    margin: "21.5px 5px",
    height: "242px",
  },
  movie_title: {
    fontSize: "15px",
    width: "134px",
  },
  more: {
    position: "absolute",
    bottom: "21.5px",
    right: "21.5px",
    color: "#222550",
    borderBottom: "1px solid #222550",
    fontSize: "16px",
    lineHeight: "11px",
    fontWeight: "bold",
  }
};
