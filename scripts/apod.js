/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const request = require("request");
const get_video_id = require("get-video-id");

const API_KEY = "Q8mtkFkP4Zru4mlDd812iw2vcQwx5B0qIsUKsxit";

module.exports = robot =>
  robot.hear(/apod|galaxy|spa+ce|宇宙|コスモ|銀河/i, msg =>
    request(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, function(error, response, body) {
      if (!error && (response.statusCode === 200)) {
        const dict = JSON.parse(body);
        const url =
          dict.media_type === "video"
          ? `https://www.youtube.com/watch?v=${get_video_id(dict.url)}`
          : dict.url;
        return msg.reply(`宇宙って良いにゃーん\n${dict.title}\n${url}`);
      } else {
        return msg.reply("APODの画像が取れなかったにゃーん");
      }
    })
  )
;
