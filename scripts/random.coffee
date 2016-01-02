# Description:
#   だらずさんはランダムにどれか選べます
#
# Commands:
#   hubot choice <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。
#   hubot random <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。
#   hubot えらべ <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。
#   hubot 選べ <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。

module.exports = (robot) ->
  robot.respond /(choice|random|えらべ|選べ) +(.*)/, (msg) ->
    words = msg.match[2].split(/(?:,| )+/)
    msg.reply ":nya-n: < #{msg.random(words)}"

