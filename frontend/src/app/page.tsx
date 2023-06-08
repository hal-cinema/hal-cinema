"use client";
import { AdvertisementList } from "@/components/organism/index/AdvertisementList";
import { SubNewsList } from "@/components/organism/index/SubNewsList";
import { Ranking } from "@/components/organism/index/Ranking";
import { MovieList } from "@/components/organism/index/MovieList";
import { MainNews } from "@/components/organism/index/MainNewsList";
import { Styles } from "@/types/styles";
import { NextPage } from "next";
import React from "react";
import { Flex } from "@/components/elements/box/Flex";

const Index: NextPage = () => {
  const MAIN_NEWS = [
    {
      backdrop_path: "/home/mainnews1.png",
    },
    {
      backdrop_path: "/home/mainnews1.png",
    },
    {
      backdrop_path: "/home/mainnews1.png",
    },
  ];
  const MOVIES = [
    {
      poster_path: "/home/movie1.png",
      title: "劇場版アイドリッシュセブンLIVE...",
    },
    {
      poster_path: "/home/movie2.png",
      title: "シナぷしゅ THE MOVIE ぷしゅ...",
    },
    { poster_path: "/home/movie3.png", title: "劇場版TOKYO MER～走る緊..." },
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
        <SubNewsList newsList={SUB_NEWS} label={"ニュース"}/>
      </Flex>
    </Flex>
  );
};

const styles: Styles = {
  main_contents: {
    width: "1000px",
    margin: "50px 0 0 0",
  },
};

export default Index;
