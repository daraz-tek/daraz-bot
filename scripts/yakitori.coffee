module.exports = (robot) ->
  robot.hear /焼鳥|焼き鳥|やきとり|ヤキトリ|串|プロキシ|プロクシ|proxy|Proxy|PROXY|ピロシキ/, (msg) ->
    nyans = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:', ':nya-n5:']
    yakitoris = [
      '―ﾛ＠ﾛ＠ﾛ- ﾔｷﾄﾘ',
      '―{ﾆ}ﾆ}ﾆ}ﾆ}- 豚',
      '―＠@＠@＠- つくね',
      '―{}@{}@{}- ねぎ,'
      '―∬∬∬- 鳥かわ',
      '―зεз- 軟骨',
      '―⊂ZZZ⊃ ｿｰｾｰｼﾞ',
      '―<コ:彡- ｲｶ丸焼き',
      '―>ﾟ)))彡- 魚丸焼き',
    ]
    msg.reply "串焼きでも食べるにゃん < #{msg.random(nyans)}っ#{msg.random(yakitoris)}"
