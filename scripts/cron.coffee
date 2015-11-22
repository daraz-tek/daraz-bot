CronJob = require('cron').CronJob

module.exports = (robot) ->

  new CronJob
    start: true
    timeZone: 'Asia/Tokyo'
    cronTime: '00 00 09 * * 1-5'
    onTick: ->
      robot.send {room: "#general"}, "＜ おはよう！恐怖の月曜日がやってきたにゃん :sunny: がんばるにゃん :muscle:"

