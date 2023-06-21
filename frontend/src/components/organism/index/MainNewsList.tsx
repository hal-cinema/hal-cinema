import React from "react";
// Swiperモジュール
import { Swiper, SwiperSlide } from "swiper/react";

// swiperで用意されているデフォルトののスタイル
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ナビゲーションやページネーションのモジュール
import { Navigation, Pagination } from "swiper";
import { Styles } from "@/types/styles";
import Image from "next/image";
import { MainNewsThumb } from "@/types/movies";

export type Props = {
  newsList: MainNewsThumb[];
};

export const MainNews = (props: Props) => {
  const { newsList } = props;

  return (
    <Swiper
      dir="rtl"
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Navigation, Pagination]}
      style={styles.container}
      spaceBetween={-264}
      initialSlide={1}
    >
      {newsList.map((news, index) => (
        <SwiperSlide key={index} style={styles.slide}>
          <Image
            src={news.backdropPath}
            alt={news.backdropPath}
            width={1000}
            height={550}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const styles: Styles = {
  container: {
    width: "100%",
    height: "550px",
  },
  slide: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
};
