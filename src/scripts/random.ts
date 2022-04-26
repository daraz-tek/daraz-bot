import { directMention } from "@slack/bolt";
import random from "./utils/random";

// Description:
//   だらずさんはランダムにどれか選べます
//
// Synopsis:
//   choice <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。
//   random <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。
//   えらべ <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。
//   選べ <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。

export default [
  directMention(),
  /(choice|random|えらべ|選べ) +(.*)/,
  ({ context, say }: any) => {
    const words = [
      ...context.matches[2].split(/(?:,|\s)+/),
      "人に決められるだけの人生でいいのか？自分で決めようず",
    ];
    return say(`:nya-n: < ${random(words)}`);
  },
];
