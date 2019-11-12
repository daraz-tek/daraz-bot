const random = require("./util/random");
const nyanco = require("./util/nyanco");

const patterns = [
  [/ぬ.*る.*ぽ/, ({ say }) => say(`${nyanco()} < にゃーん`)],
  [
    /だらず((さん)?.*)/,
    ({ context, say }) =>
      say(
        `${nyanco()} < ${
          context.matches[2] ? "にゃーん" : "さんを付けろよデコスケ野郎っ！"
        }`
      )
  ],
  [/こたつ/, ({ say }) => say(`${nyanco()} < しまえ`)],
  [/(しお|塩)/, ({ say }) => say(`${nyanco()} < しお`)],
  [
    /(らーめん|ラーメン|拉麺|らうめん)/,
    ({ say }) => say(`${nyanco()} < :ramen:`)
  ],
  [/しりとり/, ({ say }) => say(`${nyanco()} < うどん。`)],
  [
    /(糞|くそ|クソ)(すれ|スレ)/,
    ({ say }) => say(`${nyanco()} < クソスレで悪かったな！！`)
  ],
  [
    /(カレー|かれー|華麗)/,
    ({ say }) => say("https://pbs.twimg.com/media/C-RVt9pUAAARRVe.jpg")
  ][
    (/(すし|鮨|寿司|スシ|まぐろ|マグロ|sushi)/i,
    ({ say }) => say(`${nyanco()} < あいよ っ :sushi:`))
  ],
  [/ちゃ|茶/, ({ say }) => say(`お茶どぞー < ${nyanco()}っ :tea:`)],
  [
    /風邪|かぜ|カゼ|体調|つらい|くるしい|痛い|ひぎぃ|うぐぅ/,
    ({ say }) => say(`おくすりどぞー < ${nyanco()}っ :pill:`)
  ],
  [
    /(ちらし|チラシ|広告)/,
    ({ say }) => say(`${nyanco()} < スタンプラリーやめれ`)
  ],
  [
    /進捗どうですか/,
    ({ message, say }) => {
      const from = `<@${message.user}>`;
      say(
        [
          `${nyanco()} < そう言うと ${from} は永い眠りについた。`,
          `メールとチケットが山のように積もった部屋の片隅で・・・。`,
          `主を失ったモニタのあかりだけが、動かなくなった ${from} を優しく照らし続けた。`
        ].join("")
      );
    }
  ],
  [
    /(のむら|さちよ|野村|沙知代|さっちー|サッチー|のむさん|ノムサン)/,
    ({ say }) =>
      say(
        [
          ":nomura-exodia-1::nomura-exodia-2::nomura-exodia-3:",
          ":nomura-exodia-4::nomura-exodia-5::nomura-exodia-6: :exclamation::question:",
          ":nomura-exodia-7::nomura-exodia-8::nomura-exodia-9:"
        ].join("\n")
      )
  ],
  [
    /(肉|にく|ニク)/,
    ({ say }) => {
      if (random([...Array(3).keys()]) !== 0) return;
      say(
        [
          ":spark-exodia-00::spark-exodia-01::spark-exodia-02::spark-exodia-03::spark-exodia-04::spark-exodia-05:",
          ":spark-exodia-06::spark-exodia-07::spark-exodia-08::spark-exodia-09::spark-exodia-10::spark-exodia-11:",
          ":spark-exodia-12::spark-exodia-13::spark-exodia-14::spark-exodia-15::spark-exodia-16::spark-exodia-17:",
          ":spark-exodia-18::spark-exodia-19::spark-exodia-20::spark-exodia-21::spark-exodia-22::spark-exodia-23:"
        ].join("\n")
      );
    }
  ],
  [
    /(野球|やきゅう|やきう)/,
    ({ say }) => {
      if (random([...Array(10).keys()]) !== 0) return;
      say(
        [
          ":nomura-exodia-1::nomura-exodia-2::nomura-exodia-3:",
          ":nomura-exodia-4::nomura-exodia-5::nomura-exodia-6: :exclamation::question:",
          ":nomura-exodia-7::nomura-exodia-8::nomura-exodia-9:"
        ].join("\n")
      );
    }
  ],
  [
    /.*(ね|ネ).+(ハム|はむ)(たろう|たろー|タロウ|タロー|太郎)/,
    ({ context, say }) => {
      if (
        /(死|亡|殺)/.test(context.matches[0]) ||
        random([...Array(10).keys()]) === 0
      ) {
        say(":hamster: < まったくなのだ！万死に値するのだ！！");
      } else {
        say(":hamster: < まったくなのだ！！！");
      }
    }
  ],
  [
    /^(?=.*[eE]macs)(?=.*[vV]i)/,
    ({ say }) => say(`${nyanco()} < Emacs vs. Vi ファイ！`)
  ]
];

module.exports = app => patterns.forEach(pattern => app.message(...pattern));
