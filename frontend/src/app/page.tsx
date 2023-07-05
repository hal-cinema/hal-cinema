"use client";
import { AdvertisementList } from "@/components/organism/index/AdvertisementList";
import { SubNewsList } from "@/components/organism/index/SubNewsList";
import { Ranking } from "@/components/organism/index/Ranking";
import { MovieList } from "@/components/organism/index/MovieList";
import { MainNews } from "@/components/organism/index/MainNewsList";
import { Styles } from "@/types/styles";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { Flex } from "@/components/elements/box/Flex";
import { Header } from "@/components/layouts/header/Header";
import { ApiClient } from "@/core/api";

const Index: NextPage = () => {
  useEffect(() => {
    ApiClient.getMovies().then((res) => console.log(res));
  }, []);
  const main_news = ""
  const MAIN_NEWS = [
    {
      backdropPath: "/home/mainnews1.png",
    },
    {
      backdropPath: "/home/mainnews1.png",
    },
    {
      backdropPath: "/home/mainnews1.png",
    },
  ];
  const MOVIES = [
    {
      posterPath: "/home/movie1.png",
      title: "劇場版アイドリッシュセブンLIVE...",
    },
    {
      posterPath: "/home/movie2.png",
      title: "シナぷしゅ THE MOVIE ぷしゅ...",
    },
    { posterPath: "/home/movie3.png", title: "劇場版TOKYO MER～走る緊..." },
  ];
  const ADVERTISEMENTS = [
    { src: "/home/banner1.png", alt: "", path: "/" },
    { src: "/home/banner2.png", alt: "", path: "/" },
    { src: "/home/banner3.png", alt: "", path: "/" },
    { src: "/home/banner4.png", alt: "", path: "/" },
  ];
  const SUB_NEWS = [
    {
      title: "【アニメ】「ワールドトリガー」第2期が2021年1月9日より放送開始！",
      created_at: "2020/12/19",
    },
    {
      title: "【アニメ】「ワールドトリガー」第2期が2021年1月9日より放送開始！",
      created_at: "2020/12/19",
    },
    {
      title: "【アニメ】「ワールドトリガー」第2期が2021年1月9日より放送開始！",
      created_at: "2020/12/19",
    },
    {
      title: "【アニメ】「ワールドトリガー」第2期が2021年1月9日より放送開始！",
      created_at: "2020/12/19",
    },
    {
      title: "【アニメ】「ワールドトリガー」第2期が2021年1月9日より放送開始！",
      created_at: "2020/12/19",
    },
    {
      title: "【アニメ】「ワールドトリガー」第2期が2021年1月9日より放送開始！",
      created_at: "2020/12/19",
    },
  ];

  return (
    <>
      <Header />
      <Flex style={styles.container} direction="column" align="center">
        <MainNews newsList={MAIN_NEWS} />
        <Flex style={styles.main_contents} justify="space-between">
          <MovieList movies={MOVIES} label={"上映中映画"} />
          <MovieList movies={MOVIES} label={"公開予定映画"} />
        </Flex>
        <Flex style={styles.main_contents} justify="space-between">
          <Ranking movies={MOVIES} label={"ランキング"} />
          <AdvertisementList advertisements={ADVERTISEMENTS} />
        </Flex>
        <Flex style={styles.main_contents} justify="space-between">
          <SubNewsList newsList={SUB_NEWS} label={"ニュース"} />
        </Flex>
      </Flex>
    </>
  );
};

const styles: Styles = {
  container: {
    background: "#eee",
  },
  main_contents: {
    width: "1000px",
    margin: "50px 0 0 0",
  },
};

export default Index;
