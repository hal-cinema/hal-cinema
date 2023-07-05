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

  type ScreenSchedule = {
    screen: string;
    startTime: string;
    endTime: string;
    sale: string;
  };
  type MovieSchedule = {
    title: string;
    time: number;
    imageURL: string;
    screenSchedules: ScreenSchedule[];
  };
  type DailySchedule = MovieSchedule[];
  type WeeklySchedule = DailySchedule[];

  const weeklySchedule: WeeklySchedule = [
    [
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
      {
        title: "字幕 ワイルド・スピード／ファイヤーブースト",
        time: 155,
        imageURL: "/speedMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 5",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
        ],
      },
    ],
    [
      {
        title: "字幕 ワイルド・スピード／ファイヤーブースト",
        time: 155,
        imageURL: "/speedMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 5",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenSold",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
        ],
      },
    ],
    [
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenSold",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenSold",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 4",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 5",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 6",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
    ],
    [
      {
        title: "字幕 ワイルド・スピード／ファイヤーブースト",
        time: 155,
        imageURL: "/speedMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenSold",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 5",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
    ],
    [
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenSold",
          },
          {
            screen: "Screen 6",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 4",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 7",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 6",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenLow",
          },
        ],
      },
    ],
    [
      {
        title: "字幕 ワイルド・スピード／ファイヤーブースト",
        time: 155,
        imageURL: "/speedMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
        ],
      },
    ],
    [
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 2",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 7",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
          {
            screen: "Screen 5",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
    ],
    [
      {
        title: "字幕 ワイルド・スピード／ファイヤーブースト",
        time: 155,
        imageURL: "/speedMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
    ],
    [
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
    ],
    [
      {
        title: "字幕 ワイルド・スピード／ファイヤーブースト",
        time: 155,
        imageURL: "/speedMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenSold",
          },
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenSold",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
    ],
    [
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 6",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenLow",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
    ],
    [
      {
        title: "字幕 ワイルド・スピード／ファイヤーブースト",
        time: 155,
        imageURL: "/speedMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 1",
            startTime: "15:00",
            endTime: "16:50",
            sale: "screenOnSale",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 3",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
    ],
    [
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 2",
            startTime: "12:00",
            endTime: "13:50",
            sale: "screenLow",
          },
          {
            screen: "Screen 3",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenLow",
          },
        ],
      },
    ],
    [
      {
        title: "字幕 ワイルド・スピード／ファイヤーブースト",
        time: 155,
        imageURL: "/speedMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 4",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
      {
        title: "ザ・スーパーマリオブラザーズ・ムービー",
        time: 110,
        imageURL: "/marioMovie.png",
        screenSchedules: [
          {
            screen: "Screen 1",
            startTime: "10:00",
            endTime: "11:50",
            sale: "screenOnSale",
          },
          {
            screen: "Screen 4",
            startTime: "14:00",
            endTime: "15:50",
            sale: "screenSold",
          },
        ],
      },
    ],
  ];
  
  const [itemOffset, setItemOffset] = useState(0);
  
  const todaySchedule = weeklySchedule[itemOffset];

  console.log(todaySchedule);
  

  const handleDateClick = (e: MouseEvent<HTMLDivElement>) => {
    const { index } = e.currentTarget.dataset;
    setItemOffset(+index!);
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
                className={`${scheduleStyle.day} ${
                  itemOffset === index
                    ? scheduleStyle.active
                    : scheduleStyle.disactive
                }`}
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
        {
          todaySchedule.map((movieSchedule, index) => {
            return(
            <Movie
              key={index}
              title={movieSchedule.title}
              time={movieSchedule.time}
              imageURL={movieSchedule.imageURL}
              screenSchedules={movieSchedule.screenSchedules}
            />)
          })}
      </div>
    </>
  );
};

export default Schedule;
