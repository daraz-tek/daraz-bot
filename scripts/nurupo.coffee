module.exports = (robot) ->
  robot.hear /ぬるぽ/, (msg) ->
    msg.send "@#{msg.message.user.name}: :nya-n: ＜ にゃーん"

