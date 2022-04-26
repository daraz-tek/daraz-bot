import getVideoId from "get-video-id";

const API_KEY = "Q8mtkFkP4Zru4mlDd812iw2vcQwx5B0qIsUKsxit";

export default [
  /apod|galaxy|spa+ce|宇宙|コスモ|銀河/i,
  async ({ say }: any) => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    if (!response.ok) {
      return say("APODの画像が取れなかったにゃーん");
    }
    const dict = await response.json();
    const url =
      dict.media_type === "video"
        ? `https://www.youtube.com/watch?v=${getVideoId(dict.url)}`
        : dict.url;
    return say(`宇宙って良いにゃーん\n${dict.title}\n${url}`);
  },
];
