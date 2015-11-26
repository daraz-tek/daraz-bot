CronJob = require('cron').CronJob

module.exports = (robot) ->

  new CronJob
    start: true
    timeZone: 'Asia/Tokyo'
    cronTime: '00 00 09 * * 1'
    onTick: ->
      robot.send {room: "#general"}, "＜ おはよう！恐怖の月曜日がやってきたにゃん :sunny: がんばるにゃん :muscle:"

  new CronJob
    start: true
    timeZone: 'Asia/Tokyo'
    cronTime: '00 00 12 * * 2'
    onTick: ->
      robot.send {room: "#general"}, """```
　　火曜のお昼はチャーハン作るよ！！
　 ∧,,∧
　(；`・ω・）　　｡･ﾟ･⌒）
　/　　 ｏ━ヽニニフ))
　しー-Ｊ
```
"""
