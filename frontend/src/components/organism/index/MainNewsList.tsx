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

export const MainNews = () => {
  const IMAGES = [
    { name: "image1", src: "https://picsum.photos/id/1018/1000/600/" },
    { name: "image2", src: "https://picsum.photos/id/1015/1000/600/" },
    { name: "image3", src: "https://picsum.photos/id/1019/1000/600/" },
    { name: "image4", src: "https://picsum.photos/id/1018/1000/600/" },
  ];
  return (
    <Swiper
      dir="rtl"
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      style={styles.container}
    >
      {IMAGES.map((image, index) => (
        <SwiperSlide key={index} style={styles.slide}>
          <Image src={"/next.svg"} alt={image.name} width={400} height={200} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const styles: Styles = {
  container: {
    width: "100%",
    height: "200px",
  },
  slide: {
    width: "100%",
  },
};
