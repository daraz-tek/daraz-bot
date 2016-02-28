module.exports = (robot) ->
  robot.hear /ちゃ|茶焼/, (msg) ->
    nyans = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:', ':nya-n5:']
    msg.reply "お茶どぞー < #{msg.random(nyans)}っ :tea:"
