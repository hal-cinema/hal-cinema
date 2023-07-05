import { Movie } from "@/types/movies";
import { Styles } from "@/types/styles";
import Image from "next/image";
import { Text } from "@/components/elements/text/Text";

type MovieElementProps = {
  movie: Movie;
};

export const MinimumMovie = ({ movie }: MovieElementProps) => {
  return (
    <>
      <div style={styles.container}>
        <Image
          width={213}
          height={300}
          src={movie.poster_path}
          alt={movie.title}
          style={styles.movieImage}
        />
        <Text style={styles.movieTitle}>{movie.title}</Text>
      </div>
    </>
  );
};

const styles: Styles = {
  container: {
    margin: "10px",
    padding: "10px",
    width: "236px",
    height: "400px",
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
