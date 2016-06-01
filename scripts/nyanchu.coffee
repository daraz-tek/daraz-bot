module.exports = (robot) ->
  robot.respond /(ニャンちゅう) +(.*)/, (msg) ->
    oon = (c + "゛" for c in msg.match[2].split(''))
    text = 'お゛ぉ゛ん！' + oon.join('') + 'た゛に゛ゃあ゛ん！ > :nyanchu:'
    msg.reply text
