import Movie from "./Movie";

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

const MovieScheduleComponent = ({ todaySchedule }: { todaySchedule: DailySchedule }) => {
  return (
    <div>
      {todaySchedule.map((movieSchedule, index) => (
        <Movie
          key={index}
          title={movieSchedule.title}
          time={movieSchedule.time}
          imageURL={movieSchedule.imageURL}
          screenSchedules={movieSchedule.screenSchedules}
        />
      ))}
    </div>
  );
};

export default MovieScheduleComponent;
