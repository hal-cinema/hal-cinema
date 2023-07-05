import scheduleStyle from "@/app/schedule/schedule.module.css";

type ScreenSchedule = {
  screen: string;
  startTime: string;
  endTime: string;
  sale: string;
};

const ScreenInfo = ({ screen, startTime, endTime, sale }: ScreenSchedule) => {
  const saleState = (sale: string) => {
    switch (sale) {
      case "screenOnSale":
        return (
          <div>
            <span>◎</span> 販売中
          </div>
        );
        break;
      case "screenLow":
        return (
          <div>
            <span>△</span> 残りわずか
          </div>
        );
        break;
      default:
        return (
          <div>
            <span>✖️</span> 完売
          </div>
        );
        break;
    }
  };

  return (
    <div className={`${scheduleStyle.screenInfo} screenInfo`}>
      <div className={scheduleStyle.screen}>{screen}</div>
      <div className={scheduleStyle.screenTime}>
        <span>{startTime}</span> ~ {endTime}
      </div>
      <div
        className={
          `${scheduleStyle.screenSales}
          ${scheduleStyle[sale]}`
        }
      >
        {saleState(sale)}
      </div>
    </div>
  );
};

export default ScreenInfo;
