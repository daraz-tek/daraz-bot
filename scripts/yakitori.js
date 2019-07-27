const random = require("./util/random");
const nyanco = require("./util/nyanco");

const yakitoris = [
  "―ﾛ＠ﾛ＠ﾛ- ﾔｷﾄﾘ",
  "―{ﾆ}ﾆ}ﾆ}ﾆ}- 豚",
  "―＠@＠@＠- つくね",
  "―{}@{}@{}- ねぎ",
  "―∬∬∬- 鳥かわ",
  "―зεз- 軟骨",
  "―⊂ZZZ⊃ ｿｰｾｰｼﾞ",
  "―<コ:彡- ｲｶ丸焼き",
  "―>ﾟ)))彡- 魚丸焼き"
];

module.exports = [
  /焼鳥|焼き鳥|やきとり|ヤキトリ|串|プロキシ|プロクシ|proxy|Proxy|PROXY|ピロシキ/,
  ({ say }) => say(`串焼きでも食べるにゃん < ${nyanco()}っ${random(yakitoris)}`)
];
