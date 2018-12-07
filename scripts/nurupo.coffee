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

  robot.hear /(らーめん|ラーメン|拉麺|らうめん)/, (msg) ->
    msg.reply "#{nyanco(msg)} < :ramen:"

  robot.hear /しりとり/, (msg) ->
    msg.reply "#{nyanco(msg)} < うどん。"

  robot.hear /(糞|くそ|クソ)(すれ|スレ)/, (msg) ->
    msg.reply "#{nyanco(msg)} < クソスレで悪かったな！！"

  robot.hear /(鳥取|とっとり)/, (msg) ->
    if msg.random([0...10]) == 0
      msg.reply "http://riceballman.fc2web.com/AA-Illust/Data/Tochigi.jpg?random=#{msg.random([0...100])}"

  robot.hear /(すし|鮨|寿司|スシ|まぐろ|マグロ|sushi)/i, (msg) ->
    msg.reply "#{nyanco(msg)} < あいよ っ :sushi:"

  robot.hear /ちゃ|茶/, (msg) ->
    msg.reply "お茶どぞー < #{nyanco(msg)}っ :tea:"

  robot.hear /風邪|かぜ|カゼ|体調|つらい|くるしい|痛い|ひぎぃ|うぐぅ/, (msg) ->
    msg.reply "おくすりどぞー < #{nyanco(msg)}っ :pill:"

  robot.hear /(ちらし|チラシ|広告)/, (msg) ->
    msg.reply "#{nyanco(msg)} < スタンプラリーやめれ"

  robot.hear /進捗どうですか/, (msg) ->
    from = "@#{msg.envelope.user.name}"
    msg.reply "#{nyanco(msg)} < そう言うと #{from} は永い眠りについた。メールとチケットが山のように積もった部屋の片隅で・・・。主を失ったモニタのあかりだけが、動かなくなった #{from} を優しく照らし続けた。"

  robot.hear /(のむら|さちよ|野村|沙知代|さっちー|サッチー|のむさん|ノムサン)/, (msg) ->
    msg.send '''
:nomura-exodia-1::nomura-exodia-2::nomura-exodia-3:
:nomura-exodia-4::nomura-exodia-5::nomura-exodia-6: :exclamation::question:
:nomura-exodia-7::nomura-exodia-8::nomura-exodia-9:
'''

  robot.hear /(肉|にく|ニク)/, (msg) ->
    if msg.random([0...3]) == 0
      msg.send '''
:spark-exodia-00::spark-exodia-01::spark-exodia-02::spark-exodia-03::spark-exodia-04::spark-exodia-05:
:spark-exodia-06::spark-exodia-07::spark-exodia-08::spark-exodia-09::spark-exodia-10::spark-exodia-11:
:spark-exodia-12::spark-exodia-13::spark-exodia-14::spark-exodia-15::spark-exodia-16::spark-exodia-17:
:spark-exodia-18::spark-exodia-19::spark-exodia-20::spark-exodia-21::spark-exodia-22::spark-exodia-23:
'''

  robot.hear /(野球|やきゅう|やきう)/, (msg) ->
    if msg.random([0...10]) == 0
      msg.send '''
:nomura-exodia-1::nomura-exodia-2::nomura-exodia-3:
:nomura-exodia-4::nomura-exodia-5::nomura-exodia-6: :exclamation::question:
:nomura-exodia-7::nomura-exodia-8::nomura-exodia-9:
'''

  robot.hear /.*(ね|ネ).+(ハム|はむ)(たろう|たろー|タロウ|タロー|太郎)/, (msg) ->
    if /(死|亡|殺)/.test(msg.match[0]) or msg.random([0...10]) == 0
      msg.reply ":hamster: < まったくなのだ！万死に値するのだ！！"
    else
      msg.reply ":hamster: < まったくなのだ！！！"

  robot.hear /^(?=.*[eE]macs)(?=.*[vV]i)/, (msg) ->
    from = "@#{msg.envelope.user.name}"
    msg.reply "#{nyanco(msg)} < Emacs vs. Vi ファイ！"
      
  nyanco = (msg) ->
    nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:', ':nya-n5:']
    "#{msg.random(nya_ns)}"
