import { directMention } from "@slack/bolt";

export default [
  directMention(),
  /(ニャンちゅう) +(.*)/,
  ({ context, say }: any) => {
    const oon = context.matches[2].split("").map((c: any) => `${c}゛`);
    return say(`お゛ぉ゛ん！${oon.join("")}た゛に゛ゃあ゛ん！ > :nyanchu:`);
  },
];
