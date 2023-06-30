"use client";
import scheduleStyle from "@/app/schedule/schedule.module.css";
import { Header } from "@/components/layouts/header/Header";
import { useSchewdule } from "./useSchedule";

const Schedule = () => {
  const weeks = useSchewdule();
  console.log(weeks);

  return (
    <>
      <Header />
      <div className={scheduleStyle.wrap}>
        {/* レイティングコンポーネント */}
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
        {/* スケジュールコンポーネント */}
        <div className={scheduleStyle.scheduleContainer}>
          <div className={scheduleStyle.left}>
            <span>＜</span>
          </div>
          <div className={scheduleStyle.days}>
            {weeks.map((week) => (
              <div className={scheduleStyle.day}>
                <span>{week.date}</span>
                <span>（{week.day}）</span>
              </div>
            ))}
          </div>
          <div className={scheduleStyle.right}>
            <span>＞</span>
          </div>
        </div>
        {/* 映画スケジュールコンポーネント */}
        <div className={scheduleStyle.movieContainer}>
          <div className={scheduleStyle.movieTitle}>
            <span>ザ・スーパーマリオブラザーズ・ムービー</span>
            <span>上映時間 110分</span>
          </div>
          <div className={scheduleStyle.movieInfo}>
            <div className={scheduleStyle.movieImg}>
              <img src="/marioMovie.png" />
            </div>
            <div className={scheduleStyle.screenInfo}>
              <div className={scheduleStyle.screen}>スクリーン8</div>
              <div className={scheduleStyle.screenTime}>
                <span>9:25</span> ~ 11:15
              </div>
              <div
                className={`${scheduleStyle.screenSales} ${scheduleStyle.screenOnSale}`}
              >
                <span>◎</span> 販売中
              </div>
            </div>
            <div className={scheduleStyle.screenInfo}>
              <div className={scheduleStyle.screen}>スクリーン7</div>
              <div className={scheduleStyle.screenTime}>
                <span>11:40</span> ~ 13:30
              </div>
              <div
                className={`${scheduleStyle.screenSales} ${scheduleStyle.screenOnSale}`}
              >
                <span>◎</span> 販売中
              </div>
            </div>
            <div className={scheduleStyle.screenInfo}>
              <div className={scheduleStyle.screen}>スクリーン7</div>
              <div className={scheduleStyle.screenTime}>
                <span>13:50</span> ~ 15:40
              </div>
              <div
                className={`${scheduleStyle.screenSales} ${scheduleStyle.screenOnSale}`}
              >
                <span>◎</span> 販売中
              </div>
            </div>
            <div className={scheduleStyle.screenInfo}>
              <div className={scheduleStyle.screen}>スクリーン8</div>
              <div className={scheduleStyle.screenTime}>
                <span>11:35</span> ~ 14:10
              </div>
              <div
                className={`${scheduleStyle.screenSales} ${scheduleStyle.screenOnSale}`}
              >
                <span>◎</span> 販売中
              </div>
            </div>
            <div className={scheduleStyle.screenInfo}>
              <div className={scheduleStyle.screen}>スクリーン8</div>
              <div className={scheduleStyle.screenTime}>
                <span>16:10</span> ~ 18:00
              </div>
              <div
                className={`${scheduleStyle.screenSales} ${scheduleStyle.screenOnSale}`}
              >
                <span>◎</span> 販売中
              </div>
            </div>
          </div>
        </div>

        <div className={scheduleStyle.movieContainer}>
          <div className={scheduleStyle.movieTitle}>
            <span>字幕 ワイルド・スピード／ファイヤーブースト</span>
            <span>上映時間 155分</span>
          </div>
          <div className={scheduleStyle.movieInfo}>
            <div className={scheduleStyle.movieImg}>
              <img src="/speedMovie.png" />
            </div>
            <div className={scheduleStyle.screenInfo}>
              <div
                className={`${scheduleStyle.screen} ${scheduleStyle.screenIMAX}`}
              >
                IMAX
              </div>
              <div className={scheduleStyle.screenTime}>
                <span>9:50</span> ~ 12:25
              </div>
              <div
                className={`${scheduleStyle.screenSales} ${scheduleStyle.screenOnSale}`}
              >
                <span>◎</span> 販売中
              </div>
            </div>
            <div className={scheduleStyle.screenInfo}>
              <div
                className={`${scheduleStyle.screen} ${scheduleStyle.screenIMAX}`}
              >
                IMAX
              </div>
              <div className={scheduleStyle.screenTime}>
                <span>16:15</span> ~ 18:50
              </div>
              <div
                className={`${scheduleStyle.screenSales} ${scheduleStyle.screenLow}`}
              >
                <span>△</span> 残りわずか
              </div>
            </div>
          </div>
        </div>

        <div className={scheduleStyle.movieContainer}>
          <div className={scheduleStyle.movieTitle}>
            <span>吹き替え ワイルド・スピード／ファイヤーブースト</span>
            <span>上映時間 155分</span>
          </div>
          <div className={scheduleStyle.movieInfo}>
            <div className={scheduleStyle.movieImg}>
              <img src="/speedMovie.png" />
            </div>
            <div className={scheduleStyle.screenInfo}>
              <div className={scheduleStyle.screen}>スクリーン3</div>
              <div className={scheduleStyle.screenTime}>
                <span>11:35</span> ~ 14:10
              </div>
              <div
                className={`${scheduleStyle.screenSales} ${scheduleStyle.screenLow}`}
              >
                <span>△</span> 残りわずか
              </div>
            </div>
            <div className={scheduleStyle.screenInfo}>
              <div className={scheduleStyle.screen}>スクリーン3</div>
              <div className={scheduleStyle.screenTime}>
                <span>14:30</span> ~ 17:05
              </div>
              <div
                className={`${scheduleStyle.screenSales} ${scheduleStyle.screenSold}`}
              >
                <span>✖️</span> 完売
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
