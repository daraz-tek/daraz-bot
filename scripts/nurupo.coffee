_ = require 'underscore'

module.exports = (robot) ->
  robot.hear /ぬ.*る.*ぽ/, (msg) ->
    msg.send "#{prefix(msg)}にゃーん"

  robot.hear /だらず((さん)?.*)/, (msg) ->
    if msg.match[2]?
      msg.send "#{prefix(msg)}にゃーん"
    else
      msg.send "#{prefix(msg)}さんを付けろよデコスケ野郎っ！"

  prefix = (msg) ->
    nya_ns = [':nya-n:', ':nya-n2:', ':nya-n3:']
    "@#{msg.message.user.name}: #{_.sample nya_ns} ＜ "

