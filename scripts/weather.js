const subMinutes = require("date-fns/subMinutes");
const roundToNearestMinutes = require("date-fns/roundToNearestMinutes");
const format = require("date-fns-tz/format");
const utcToZonedTime = require("date-fns-tz/utcToZonedTime");
const nyanco = require("./util/nyanco");

const timeZone = "Asia/Tokyo";
const prefNumber = 34;
const pageURL = `https://www.tenki.jp/radar/7/${prefNumber}/`;
const imgURL = target =>
  [
    "https://static.tenki.jp/static-images/radar/",
    format(target, "yyyy/MM/dd/HH/mm/ss", { timeZone }),
    `/pref-${prefNumber}-large.jpg`
  ].join("");

module.exports = [
  /天気/,
  async ({ say }) => {
    const target = utcToZonedTime(
      roundToNearestMinutes(subMinutes(new Date(), 5), {
        nearestTo: 5
      }),
      timeZone
    );

    say(
      [
        `${nyanco()} ＜ ${format(
          target,
          "HH時mm分の雨雲の様子にゃーん",
          timeZone
        )}`,
        imgURL(target),
        pageURL
      ].join("\n")
    );
  }
];
