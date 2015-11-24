
module.exports = (robot) ->
  robot.hear /ぬ.*る.*ぽ/, (msg) ->
    msg.reply "#{prefix(msg)}にゃーん"

  robot.hear /だらず((さん)?.*)/, (msg) ->
    if msg.match[2]?
      msg.reply "#{prefix(msg)}にゃーん"
    else
      msg.reply "#{prefix(msg)}さんを付けろよデコスケ野郎っ！"

  robot.hear /こたつ/, (msg) ->
    msg.reply "#{prefix(msg)}しまえ"

  robot.hear /(しお|塩)/, (msg) ->
    msg.reply "#{prefix(msg)}しお"

  robot.hear /しりとり/, (msg) ->
    msg.reply "#{prefix(msg)}うどん。"

  prefix = (msg) ->
    nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:']
    "#{msg.random nya_ns} ＜ "
