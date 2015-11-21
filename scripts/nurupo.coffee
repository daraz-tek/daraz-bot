_ = require 'underscore'

module.exports = (robot) ->
  robot.hear /ぬるぽ/, (msg) ->
    nya_ns = [':nya-n:', ':nya-n2:', ':nya-n3:']
    msg.send "@#{msg.message.user.name}: #{_.sample nya_ns} ＜ にゃーん"

