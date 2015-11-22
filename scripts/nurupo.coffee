_ = require 'underscore'

module.exports = (robot) ->
  robot.hear /ぬ.*る.*ぽ/, (msg) ->
    msg.send "#{prefix(msg)}にゃーん"

  robot.hear /だらずさん/, (msg) ->
    msg.send "#{prefix(msg)}にゃーん"

  prefix = (msg) ->
    nya_ns = [':nya-n:', ':nya-n2:', ':nya-n3:']
    "@#{msg.message.user.name}: #{_.sample nya_ns} ＜ "

