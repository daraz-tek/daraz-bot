moment = require('moment')
host = 'az416740.vo.msecnd.net'
prefNumber = '34'

module.exports = (robot) ->
  robot.hear /天気|晴|雨|曇|てんき|はれ|あめ|くも/, (msg) ->
    now = moment()
    nowMinute = now.minute()
    diff = nowMinute - Math.floor(nowMinute / 10) * 10 + 5
    target = now.subtract(diff, 'minute')
    daraz = nya_n(msg)
    say = target.format("H時m分の雨雲の様子にゃーん")
    wURL = "http://#{host}/static-images/rader/#{target.format("YYYY/MM/DD/H/m")}/00/pref_#{prefNumber}/large.jpg"
    msg.reply "#{daraz}#{say} #{wURL}"
  nya_n = (msg) ->
    nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:']
    "#{msg.random nya_ns} ＜ "
