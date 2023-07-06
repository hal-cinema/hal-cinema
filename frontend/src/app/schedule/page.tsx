"use client";
import scheduleStyle from "@/app/schedule/schedule.module.css";
import { Header } from "@/components/layouts/header/Header";
import Rating from "./Rating";
import ScheduleStyle from "./ScheduleStyle";

const Schedule = () => {
  return (
    <>
      <Header />
      <div className={scheduleStyle.wrap}>
        <Rating />
        <ScheduleStyle />
      </div>
    </>
  );
};

export default Schedule;
