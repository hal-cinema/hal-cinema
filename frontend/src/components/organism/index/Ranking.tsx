import { Flex } from "@/components/elements/box/Flex";
import { MovieThumb } from "@/types/movies";
import React from "react";
import Image from "next/image";
import { BoxLabel } from "@/components/elements/label/BoxLabel";
import { Styles } from "@/types/styles";

type Props = {
  movies: MovieThumb[];
  label: string;
};
export const Ranking = (props: Props) => {
  const { movies, label } = props;
  return (
    <BoxLabel label={label}>
      <Flex direction="column" style={styles.container}>
        {movies.map((movie, index) => (
          <Flex
            key={index}
            align="center"
            justify="space-between"
            style={styles.movie_box}
          >
            <Image src={`/home/no${index+1}.svg`} alt='no' width={45} height={45} style={styles.no}/>
            <Image
              src={movie.poster_path}
              width={106}
              height={150}
              alt="movies"
            />
            <Flex style={styles.movie_title}>
              <p>{movie.title}</p>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </BoxLabel>
  );
};

const styles: Styles = {
  container: {
    width: "650px",
    height: "733px",
    borderTop: "4px solid #222550",
    background: "#fff",
  },
  movie_box: {
    padding: "21.5px",
    boxSizing: "unset",
    width: "617px",
    height: "173px",
    borderBottom: "2px dashed #22255045",
    position: "relative",
  },
  movie_title: {
    fontSize: "23px",
    fontWeight: "bold",
    width: "464px",
    height: "100%",
    padding: "11.5px 0",
  },
  no:{
    position: "absolute",
    top: "12px",
    left: "0px",
  }
};
