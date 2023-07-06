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
type WeeklySchedule = DailySchedule[];

export const weeklySchedule: WeeklySchedule = [
  [
    {
      title: "渇水",
      time: 115,
      imageURL: "/kassuiMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenSold",
        },
        {
          screen: "Screen 5",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 6",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 9",
          startTime: "17:00",
          endTime: "19:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "2023 CRAVITY MASTERPIECE IN JAPAN",
      time: 210,
      imageURL: "/cravityMovie.png",
      screenSchedules: [
        {
          screen: "Screen 3",
          startTime: "10:30",
          endTime: "12:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 4",
          startTime: "14:00",
          endTime: "16:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "字幕 ワイルド・スピード／ファイヤーブースト",
      time: 155,
      imageURL: "/speedMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 5",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
    {
      title: "劇場版TOKYO MER 走る緊急救命室",
      time: 140,
      imageURL: "/merMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "シナぷしゅ THE MOVIE ぷしゅほっぺにゅうワールド",
      time: 140,
      imageURL: "/sinapuMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
  ],
  [
    {
      title: "2023 CRAVITY MASTERPIECE IN JAPAN",
      time: 210,
      imageURL: "/cravityMovie.png",
      screenSchedules: [
        {
          screen: "Screen 3",
          startTime: "10:30",
          endTime: "12:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 4",
          startTime: "14:00",
          endTime: "16:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "字幕 ワイルド・スピード／ファイヤーブースト",
      time: 155,
      imageURL: "/speedMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 5",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenSold",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
      ],
    },
  ],
  [
    {
      title: "劇場版TOKYO MER 走る緊急救命室",
      time: 140,
      imageURL: "/merMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "シナぷしゅ THE MOVIE ぷしゅほっぺにゅうワールド",
      time: 140,
      imageURL: "/sinapuMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenSold",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
      ],
    },
  ],
  [
    {
      title: "シナぷしゅ THE MOVIE ぷしゅほっぺにゅうワールド",
      time: 140,
      imageURL: "/sinapuMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "字幕 ワイルド・スピード／ファイヤーブースト",
      time: 155,
      imageURL: "/speedMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenSold",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 5",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 3",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
  ],
  [
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenSold",
        },
        {
          screen: "Screen 6",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
    {
      title: "シナぷしゅ THE MOVIE ぷしゅほっぺにゅうワールド",
      time: 140,
      imageURL: "/sinapuMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
  ],
  [
    {
      title: "劇場版TOKYO MER 走る緊急救命室",
      time: 140,
      imageURL: "/merMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 4",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "字幕 ワイルド・スピード／ファイヤーブースト",
      time: 155,
      imageURL: "/speedMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 4",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "18:00",
          endTime: "19:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "2023 CRAVITY MASTERPIECE IN JAPAN",
      time: 210,
      imageURL: "/cravityMovie.png",
      screenSchedules: [
        {
          screen: "Screen 3",
          startTime: "10:30",
          endTime: "12:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 4",
          startTime: "14:00",
          endTime: "16:50",
          sale: "screenOnSale",
        },
      ],
    },
  ],
  [
    {
      title: "劇場版TOKYO MER 走る緊急救命室",
      time: 140,
      imageURL: "/merMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 2",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 7",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
        {
          screen: "Screen 5",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
  ],
  [
    {
      title: "劇場版TOKYO MER 走る緊急救命室",
      time: 140,
      imageURL: "/merMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "字幕 ワイルド・スピード／ファイヤーブースト",
      time: 155,
      imageURL: "/speedMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
  ],
  [
    {
      title: "2023 CRAVITY MASTERPIECE IN JAPAN",
      time: 210,
      imageURL: "/cravityMovie.png",
      screenSchedules: [
        {
          screen: "Screen 3",
          startTime: "10:30",
          endTime: "12:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 4",
          startTime: "14:00",
          endTime: "16:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "劇場版TOKYO MER 走る緊急救命室",
      time: 140,
      imageURL: "/merMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
  ],
  [
    {
      title: "渇水",
      time: 115,
      imageURL: "/kassuiMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 5",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenSold",
        },
      ],
    },
    {
      title: "字幕 ワイルド・スピード／ファイヤーブースト",
      time: 155,
      imageURL: "/speedMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenSold",
        },
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenSold",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
  ],
  [
    {
      title: "シナぷしゅ THE MOVIE ぷしゅほっぺにゅうワールド",
      time: 140,
      imageURL: "/sinapuMovie.png",
      screenSchedules: [
        {
          screen: "Screen 4",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 6",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "劇場版TOKYO MER 走る緊急救命室",
      time: 140,
      imageURL: "/merMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenLow",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
  ],
  [
    {
      title: "字幕 ワイルド・スピード／ファイヤーブースト",
      time: 155,
      imageURL: "/speedMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 1",
          startTime: "15:00",
          endTime: "16:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "渇水",
      time: 115,
      imageURL: "/kassuiMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 5",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenSold",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 3",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
  ],
  [
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
    {
      title: "劇場版TOKYO MER 走る緊急救命室",
      time: 140,
      imageURL: "/merMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
  ],
  [
    {
      title: "シナぷしゅ THE MOVIE ぷしゅほっぺにゅうワールド",
      time: 140,
      imageURL: "/sinapuMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 2",
          startTime: "12:00",
          endTime: "13:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 3",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenOnSale",
        },
      ],
    },
    {
      title: "字幕 ワイルド・スピード／ファイヤーブースト",
      time: 155,
      imageURL: "/speedMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 4",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
    {
      title: "ザ・スーパーマリオブラザーズ・ムービー",
      time: 110,
      imageURL: "/marioMovie.png",
      screenSchedules: [
        {
          screen: "Screen 1",
          startTime: "10:00",
          endTime: "11:50",
          sale: "screenOnSale",
        },
        {
          screen: "Screen 4",
          startTime: "14:00",
          endTime: "15:50",
          sale: "screenSold",
        },
      ],
    },
  ],
];