import { subMinutes, roundToNearestMinutes } from "date-fns";
import { format, utcToZonedTime } from "date-fns-tz";
import nyanco from "./utils/nyanco";

const timeZone = "Asia/Tokyo";
const prefNumber = 34;
const pageURL = `https://www.tenki.jp/radar/7/${prefNumber}/`;
const imgURL = (target: any) =>
  [
    "https://static.tenki.jp/static-images/radar/",
    format(target, "yyyy/MM/dd/HH/mm/ss", { timeZone }),
    `/pref-${prefNumber}-large.jpg`,
  ].join("");

export default [
  /天気/,
  async ({ say }: any) => {
    const target = utcToZonedTime(
      roundToNearestMinutes(subMinutes(new Date(), 5), {
        nearestTo: 5,
      }),
      timeZone
    );

    return say(
      [
        `${nyanco()} ＜ ${format(target, "HH時mm分の雨雲の様子にゃーん", {
          timeZone,
        })}`,
        imgURL(target),
        pageURL,
      ].join("\n")
    );
  },
];
