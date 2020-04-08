const fetch = require("node-fetch");
const get_video_id = require("get-video-id");

const API_KEY = "Q8mtkFkP4Zru4mlDd812iw2vcQwx5B0qIsUKsxit";

module.exports = [
  /apod|galaxy|spa+ce|宇宙|コスモ|銀河/i,
  async ({ say }) => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    if (!response.ok) {
      say("APODの画像が取れなかったにゃーん");
      return;
    }
    const dict = await response.json();
    const url =
      dict.media_type === "video"
        ? `https://www.youtube.com/watch?v=${get_video_id(dict.url)}`
        : dict.url;
    say(`宇宙って良いにゃーん\n${dict.title}\n${url}`);
  },
];
