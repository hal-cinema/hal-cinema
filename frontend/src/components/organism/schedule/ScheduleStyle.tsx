import { MouseEvent, useState } from "react";
import scheduleStyle from "./schedule.module.css";
import "./schedule.css";
import { useSchewdule } from "./useSchedule";
import { weeklySchedule } from "./WeeklySchedule";
// Swiperモジュール
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import MovieSchedule from "./MovieSchedule";

const ScheduleStyle = () => {
  const weeks = useSchewdule();
  const [itemOffset, setItemOffset] = useState(0);
  const todaySchedule = weeklySchedule[itemOffset];
  const handleDateClick = (e: MouseEvent<HTMLDivElement>) => {
    const { index } = e.currentTarget.dataset;
    setItemOffset(+index!);
  };
  return (
    <>
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
      <MovieSchedule todaySchedule={todaySchedule} />
    </>
  );
};

export default ScheduleStyle;
