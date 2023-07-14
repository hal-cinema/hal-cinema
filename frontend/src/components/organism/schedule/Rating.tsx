import { Styles } from "@/types/styles";
import scheduleStyle from "./schedule.module.css";
const Rating = () => {
  return (
    <div style={ratingStyles.content}>
      <div style={{ ...ratingStyles.infoBox, ...ratingStyles.firstChildBox }}>
        <p style={ratingStyles.message}>
          <span style={ratingStyles.infoIcon}>R18+</span>
          18歳以上がご覧になれます
        </p>
        <p style={ratingStyles.message}>
          <span style={ratingStyles.infoIcon}>R15+</span>
          15歳以上がご覧になれます
        </p>
        <p style={ratingStyles.message}>
          <span style={ratingStyles.infoIcon}>PG12</span>
          小学生には、助言・指導が必要です
        </p>
      </div>
      <div style={ratingStyles.infoBox}>
        <p style={ratingStyles.message}>
          <span style={ratingStyles.infoIcon1}>NEW</span>
          上映開始週
        </p>
        <p style={ratingStyles.message}>
          <span style={ratingStyles.infoIcon2}>LAST</span>
          上映ラスト週
        </p>
        <p style={ratingStyles.message}>
          <span style={ratingStyles.infoIcon3}>特別興行</span>
          料金・会員サービスが通常と異なる場合があります
        </p>
      </div>
    </div>
  );
};

const ratingStyles: Styles = {
  content: {
    width: "700px",
    margin: "0 auto 0",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: ".6em",
    borderRadius: "5px",
  },
  infoBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "42.5px",
    marginLeft: "5%",
  },
  firstChildBox: {
    borderBottom: "1px solid #fff7",
  },
  message: {
    display: "flex",
    alignItems: "center",
    marginRight: "40px",
  },
  infoIcon: {
    display: "inline-block",
    padding: "5px",
    backgroundColor: "#eee",
    color: "#666",
    fontWeight: "bold",
    borderRadius: "5px",
    marginRight: "10px",
  },
  infoIcon1: {
    display: "Flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    height: "25px",
    backgroundColor: "#eee",
    color: "rgb(255, 119, 0)",
    fontWeight: "bold",
    borderRadius: "5px",
    marginRight: "10px",
  },
  infoIcon2: {
    display: "Flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    height: "25px",
    backgroundColor: "#eee",
    color: "rgb(0, 85, 255)",
    fontWeight: "bold",
    borderRadius: "5px",
    marginRight: "10px",
  },
  infoIcon3: {
    display: "Flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    height: "25px",
    backgroundColor: "#eee",
    lineHeight: "12px",
    textAlign: "center",
    fontSize: ".5em",
    color: "rgb(255, 60, 0)",
    fontWeight: "bold",
    borderRadius: "5px",
    marginRight: "10px",
  },
}

export default Rating;
