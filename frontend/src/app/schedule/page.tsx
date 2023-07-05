"use client";
import { MouseEvent, useState } from "react";
import scheduleStyle from "@/app/schedule/schedule.module.css";
import "./schedule.css";
import { Header } from "@/components/layouts/header/Header";
import { useSchewdule } from "./useSchedule";
import Movie from "./Movie";
import Rating from "./Rating";
// Swiperモジュール
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Schedule = () => {
  const weeks = useSchewdule();

  const [active, setActive] = useState(0);

  const handleDateClick = (e: MouseEvent<HTMLDivElement>) => {
    const { index } = e.currentTarget.dataset;
    console.log(`${index}がクリックされた`);
    setActive(+index!);
  };

  return (
    <>
      <Header />
      <div className={scheduleStyle.wrap}>
        {/* レイティングコンポーネント */}
        <Rating />
        {/* スケジュールコンポーネント */}
        <div className={`${scheduleStyle.scheduleContainer} scheduleContainer`}>
          <div className={scheduleStyle.left} id="button_prev">
            <span>＜</span>
          </div>
          <Swiper
            slidesPerView={7}
            spaceBetween={10}
            navigation={{
              // パラメータを設定
              prevEl: "#button_prev",
              nextEl: "#button_next",
            }}
            modules={[Navigation]}
            className={scheduleStyle.days}
            id="days"
          >
            {weeks.map((week, index) => (
              <SwiperSlide
                className={`${scheduleStyle.day} ${active === index ? scheduleStyle.active : scheduleStyle.disactive}`}
                key={week.date}
                data-index={index}
                onClick={handleDateClick}
              >
                <span>{week.date}</span>
                <span>（{week.day}）</span>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={scheduleStyle.right} id="button_next">
            <span>＞</span>
          </div>
        </div>
        {/* 映画スケジュールコンポーネント */}
        <Movie title="ザ・スーパーマリオブラザーズ・ムービー" time={110} imageURL="/marioMovie.png" />
        <Movie title="字幕 ワイルド・スピード／ファイヤーブースト" time={155} imageURL="/speedMovie.png" />
        <Movie title="ザ・スーパーマリオブラザーズ・ムービー" time={110} imageURL="/marioMovie.png" />
        <Movie title="字幕 ワイルド・スピード／ファイヤーブースト" time={155} imageURL="/speedMovie.png" />
      </div>
    </>
  );
};

export default Schedule;
