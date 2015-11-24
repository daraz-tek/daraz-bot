# Description:
#   すし
#
# Commands:
#   hubot すし - (ﾟдﾟ)ｳﾏｰ

module.exports = (robot) ->
  robot.respond /(すし|鮨|寿司|スシ|まぐろ|マグロ|sushi)/i, (msg) ->
    nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:']
    msg.reply "#{msg.random nya_ns} あいよ っ :sushi:"

