import random from "./utils/random";
import nyanco from "./utils/nyanco";

const yakitoris = [
  "―ﾛ＠ﾛ＠ﾛ- ﾔｷﾄﾘ",
  "―{ﾆ}ﾆ}ﾆ}ﾆ}- 豚",
  "―＠@＠@＠- つくね",
  "―{}@{}@{}- ねぎ",
  "―∬∬∬- 鳥かわ",
  "―зεз- 軟骨",
  "―⊂ZZZ⊃ ｿｰｾｰｼﾞ",
  "―<コ:彡- ｲｶ丸焼き",
  "―>ﾟ)))彡- 魚丸焼き",
];

export default [
  /焼鳥|焼き鳥|やきとり|ヤキトリ|串|プロキシ|プロクシ|proxy|Proxy|PROXY|ピロシキ/,
  ({ say }: any) =>
    say(`串焼きでも食べるにゃん < ${nyanco()}っ${random(yakitoris)}`),
];
