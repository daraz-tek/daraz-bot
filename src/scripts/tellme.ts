import { directMention } from "@slack/bolt";
import tellme from "./utils/tellme";
import nyanco from "./utils/nyanco";

// Description:
//   だらずさんは何でも知っているので教えてくれます
//
// Synopsis:
//   tell me <phrase> - <phrase> について教えてあげよう、妖怪ウィキウィキペディアは使ってないよ！

export default [
  directMention(),
  /tell( ?me)? (.*)/i,
  async ({ context, say }: any) => {
    const ans = await tellme(context.matches[2]);
    if (ans != null) return say(`${nyanco()} ＜ ${ans}`);
  },
];
