
module.exports = (robot) ->
  robot.hear /進捗どうですか/, (msg) ->
    console.log msg
    from = "@#{msg.envelope.user.name}"
    msg.reply "#{prefix(msg)}そう言うと #{from} は永い眠りについた。メールとチケットが山のように積もった部屋の片隅で・・・。主を失ったモニタのあかりだけが、動かなくなった #{from} を優しく照らし続けた。"

  prefix = (msg) ->
    nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:', ':nya-n5:']
    "#{msg.random nya_ns} ＜ "
