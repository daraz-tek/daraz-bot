/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = robot =>
  robot.hear(/焼鳥|焼き鳥|やきとり|ヤキトリ|串|プロキシ|プロクシ|proxy|Proxy|PROXY|ピロシキ/, function(msg) {
    const nyans = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:', ':nya-n5:'];
    const yakitoris = [
      '―ﾛ＠ﾛ＠ﾛ- ﾔｷﾄﾘ',
      '―{ﾆ}ﾆ}ﾆ}ﾆ}- 豚',
      '―＠@＠@＠- つくね',
      '―{}@{}@{}- ねぎ,',
      '―∬∬∬- 鳥かわ',
      '―зεз- 軟骨',
      '―⊂ZZZ⊃ ｿｰｾｰｼﾞ',
      '―<コ:彡- ｲｶ丸焼き',
      '―>ﾟ)))彡- 魚丸焼き',
    ];
    return msg.reply(`串焼きでも食べるにゃん < ${msg.random(nyans)}っ${msg.random(yakitoris)}`);
  })
;
