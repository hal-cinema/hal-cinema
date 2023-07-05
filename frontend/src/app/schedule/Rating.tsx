import scheduleStyle from "@/app/schedule/schedule.module.css";const Rating = () => {
  
  return (
    <div className={scheduleStyle.content}>
      <div className={scheduleStyle.infoBox}>
        <p>
          <span className={scheduleStyle.infoIcon}>R18+</span>
          18歳以上がご覧になれます
        </p>
        <p>
          <span className={scheduleStyle.infoIcon}>R15+</span>
          15歳以上がご覧になれます
        </p>
        <p>
          <span className={scheduleStyle.infoIcon}>PG12</span>
          小学生には、助言・指導が必要です
        </p>
      </div>
      <div className={scheduleStyle.infoBox}>
        <p>
          <span className={scheduleStyle.typeIcon}>NEW</span>
          上映開始週
        </p>
        <p>
          <span className={scheduleStyle.typeIcon}>LAST</span>
          上映ラスト週
        </p>
        <p>
          <span className={scheduleStyle.typeIcon}>特別興行</span>
          料金・会員サービスが通常と異なる場合があります
        </p>
      </div>
    </div>
  );
}

export default Rating;