"use client";
import { Flex } from "@/components/elements/box/Flex";
import { RadioInput } from "@/components/elements/input/RadioInput";
import { Header } from "@/components/layouts/header/Header";
import { MinimumMovie } from "@/components/organism/movie/MovieBox/MinimumMovie";
import { MovieBox } from "@/components/organism/movie/MovieBox/MovieBox";
import { MovieDetail } from "@/components/organism/movie/MovieBox/MovieDetail";
import { MovieSizeTab } from "@/components/organism/movie/MovieSizeTab";
import { MovieTab } from "@/components/organism/movie/MovieTab";
import { useSetMinimum } from "@/hooks/movie/useSetMinimum";
import { useSetScreen } from "@/hooks/movie/useSetScreen";
import { Movie } from "@/types/movies";
import { Styles } from "@/types/styles";
import Image from "next/image";
import React, { useState, useMemo, CSSProperties } from "react";

// TODO コンポーネントをちゃんと別ファイルにする

const MovieContainer = () => {
  const { isScreening, handleSetScreen } = useSetScreen();
  const { isMinimum, handleSetMinimum } = useSetMinimum();

  const [movies, setMovies] = useState<Movie[]>([
    {
      id: 1,
      title: "シュタゲ(未公開)",
      overview: "HALに入るなというDメールを送れ！",
      release_date: new Date("2024-01-01"),
      backdrop_path: "",
      popularity: 0,
      poster_path: "/movie/shutage.jpg",
      video_path: "test",
      is_adult: true,
      runtime_min: 0,
    },
    {
      id: 2,
      title: "BLACK LAGOON(公開中)",
      overview: "シガーキスしたい",
      release_date: new Date("2021-01-01"),
      backdrop_path: "",
      popularity: 0,
      poster_path: "/movie/black-lagoon.avif",
      video_path: "test",
      is_adult: true,
      runtime_min: 0,
    },
    {
      id: 3,
      title: "YUNO(公開中)",
      overview: "間違いなく神アニメ、異世界ループ",
      release_date: new Date("2021-01-01"),
      backdrop_path: "test",
      popularity: 0,
      poster_path: "/movie/yuno.jpg",
      video_path: "test",
      is_adult: true,
      runtime_min: 0,
    },
  ]);

  const currentMovies = useMemo(() => {
    if (isScreening) {
      return movies.filter((x) => x.release_date > new Date());
    } else {
      return movies.filter((x) => x.release_date < new Date());
    }
  }, [movies, isScreening]);

  return (
    <Flex style={styles.container} direction="column" align="center">
      <Header />
      <Flex style={styles.box} direction="column">
        <MovieTab isScreening={isScreening} handleSetScreen={handleSetScreen} />
        <MovieSizeTab
          handleSetMinimum={handleSetMinimum}
          isMinimum={isMinimum}
        />
        <MovieBox currentMovies={currentMovies} isMinimum={isMinimum} />
      </Flex>
    </Flex>
  );
};

const styles: Styles = {
  container: {
    backgroundColor: "#EEEEEE",
  },
  box: {
    width: "1000px",
    backgroundColor: "#fff",
    padding: "0 0 50px 0",
  },
};

export default MovieContainer;
