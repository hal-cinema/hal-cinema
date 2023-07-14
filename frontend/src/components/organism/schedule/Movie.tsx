import scheduleStyle from "./schedule.module.css";
import ScreenInfo from "./ScreenInfo";

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

const Movie = ({ title, time, imageURL, screenSchedules }: MovieSchedule) => {
  return (
    <div className={scheduleStyle.movieContainer}>
      <div className={scheduleStyle.movieTitle}>
        <span>{title}</span>
        <span>上映時間 {time}分</span>
      </div>
      <div className={scheduleStyle.movieInfo}>
        <div className={scheduleStyle.movieImg}>
          <img src={imageURL} />
        </div>
        {screenSchedules.map((screenSchedule, index) => {
          return (
            <ScreenInfo
              key={index}
              screen={screenSchedule.screen}
              startTime={screenSchedule.startTime}
              endTime={screenSchedule.endTime}
              sale={screenSchedule.sale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
