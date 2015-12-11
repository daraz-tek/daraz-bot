moment = require('moment')
host = 'az416740.vo.msecnd.net'
prefNumber = '34'

module.exports = (robot) ->
  robot.hear /天気|晴|雨|曇/, (msg) ->
    now = moment()
    nowMinute = now.minute()
    diff = nowMinute - Math.floor(nowMinute / 10) * 10 + 5
    target = now.subtract(diff, 'minute')
    daraz = nya_n(msg)
    say = target.format("HH時mm分の雨雲の様子にゃーん")
    imgURL = "http://#{host}/static-images/rader/" +
      "#{target.format("YYYY/MM/DD/HH/mm")}/00/pref_#{prefNumber}/large.jpg"
    pageURL = 'http://www.tenki.jp/radar/7/34/'
    msg.reply "#{daraz}#{say} #{imgURL} #{pageURL}"
  nya_n = (msg) ->
    nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:', ':nya-n5:']
    "#{msg.random nya_ns} ＜ "
