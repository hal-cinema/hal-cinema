"use client";
import { Header } from "@/components/layouts/header/Header";
import Rating from "../../components/organism/schedule/Rating";
import ScheduleStyle from "../../components/organism/schedule/ScheduleStyle";
import { Styles } from "@/types/styles";

const Schedule = () => {
  return (
    <>
      <Header />
      <div style={styles.wrap}>
        <Rating />
        <ScheduleStyle />
      </div>
    </>
  );
};

const styles: Styles = {
  wrap: {
    maxWidth: "1000px",
    margin: "0 auto",
    backgroundColor: "#fff",
    paddingTop: "50px"
  }
}

export default Schedule;
