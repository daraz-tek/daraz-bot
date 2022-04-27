import { directMention } from "@slack/bolt";
import nyanco from "./utils/nyanco";

// Description:
//   だらずさんは JSON のお掃除がだいすきです
//
// Synopsis:
//   json <jsonstring> - あなたの JSON をぷりちーにするにゃん

export default [
  directMention(),
  /json +(.*)/i,
  ({ context, say }: any) => {
    try {
      const json = JSON.parse(context.matches[1]);
      const res = JSON.stringify(json, null, 2);
      return say([`${nyanco()} っ`, "```", res, "```"].join("\n"));
    } catch (e) {
      console.error(e);
    }
  },
];
