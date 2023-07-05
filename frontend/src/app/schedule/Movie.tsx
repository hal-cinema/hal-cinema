import scheduleStyle from "@/app/schedule/schedule.module.css";
import ScreenInfo from "./ScreenInfo";

type Props = {
  title: string,
  time: number,
  imageURL: string
}

const Movie = ({title, time, imageURL}: Props) => {
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
        <ScreenInfo screen="スクリーン2" startTime="10:30" endTime="12:00" sale="screenOnSale" />
        <ScreenInfo screen="スクリーン3" startTime="14:30" endTime="16:00" sale="screenSold" />
        <ScreenInfo screen="スクリーン4" startTime="15:30" endTime="17:00" sale="screenLow" />
      </div>
    </div>
  );
}

export default Movie;