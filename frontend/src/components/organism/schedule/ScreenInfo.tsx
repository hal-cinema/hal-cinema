import scheduleStyle from "./schedule.module.css";
import { Styles } from "@/types/styles";

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
    <div style={styles.screenInfo} className={`${scheduleStyle.screenInfo} screenInfo`}>
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

const styles: Styles = {
  screenInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      width: "150px",
      height: "120px",
      marginLeft: "14px",
      backgroundColor: "#fff",
      padding: "5px"
  }
}

export default ScreenInfo;
