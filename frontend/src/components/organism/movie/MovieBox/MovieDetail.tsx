import { Flex } from "@/components/elements/box/Flex";
import { Movie } from "@/types/movies";
import { Styles } from "@/types/styles";
import Image from "next/image";

type MovieElementProps = {
  movie: Movie;
};

export const MovieDetail = ({ movie }: MovieElementProps) => {
  return (
    <Flex style={styles.container}>
      <Image
        width={213}
        height={300}
        src={movie.poster_path}
        alt={movie.title}
        style={styles.movieImage}
      />
      <div>{movie.title}</div>
      <div>{movie.overview}</div>
    </Flex>
  );
};

const styles: Styles = {
  container: {
    margin: "10px",
    padding: "10px",
    width: "974px",
    height: "322px",
    backgroundColor: "#EEEEEE",
  },
  movieImage: {
    objectFit: "cover",
  },
  movieTitle: {
    color: "#333",
    fontSize: "20px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
};
