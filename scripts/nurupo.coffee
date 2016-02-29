module.exports = (robot) ->

  robot.hear /ぬ.*る.*ぽ/, (msg) ->
    msg.reply "#{nyanco(msg)} < にゃーん"

  robot.hear /だらず((さん)?.*)/, (msg) ->
    if msg.match[2]?
      msg.reply "#{nyanco(msg)}< にゃーん"
    else
      msg.reply "#{nyanco(msg)} < さんを付けろよデコスケ野郎っ！"

  robot.hear /こたつ/, (msg) ->
    msg.reply "#{nyanco(msg)} < しまえ"

  robot.hear /(しお|塩)/, (msg) ->
    msg.reply "#{nyanco(msg)} < しお"

  robot.hear /しりとり/, (msg) ->
    msg.reply "#{nyanco(msg)} < うどん。"

  robot.hear /(糞|くそ|クソ)(すれ|スレ)/, (msg) ->
    msg.reply "#{nyanco(msg)} < クソスレで悪かったな！！"

  robot.hear /(鳥取|とっとり)/, (msg) ->
    msg.reply "https://dl.dropboxusercontent.com/u/27433018/tottori.png"

  robot.hear /(すし|鮨|寿司|スシ|まぐろ|マグロ|sushi)/i, (msg) ->
    msg.reply "#{nyanco(msg)} < あいよ っ :sushi:"

  robot.hear /ちゃ|茶/, (msg) ->
    msg.reply "お茶どぞー < #{nyanco(msg)}っ :tea:"

  robot.hear /進捗どうですか/, (msg) ->
    from = "@#{msg.envelope.user.name}"
    msg.reply "#{nyanco(msg)} < そう言うと #{from} は永い眠りについた。メールとチケットが山のように積もった部屋の片隅で・・・。主を失ったモニタのあかりだけが、動かなくなった #{from} を優しく照らし続けた。"

  nyanco = (msg) ->
    nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:', ':nya-n5:']
    "#{msg.random(nya_ns)}"
