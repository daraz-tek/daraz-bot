const { directMention } = require("@slack/bolt");

module.exports = [
  directMention(),
  /(ニャンちゅう) +(.*)/,
  ({ context, say }) => {
    const oon = context.matches[2].split("").map((c) => `${c}゛`);
    say(`お゛ぉ゛ん！${oon.join("")}た゛に゛ゃあ゛ん！ > :nyanchu:`);
  },
];
