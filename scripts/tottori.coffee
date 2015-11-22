
module.exports = (robot) ->
  robot.hear /(鳥取|とっとり)/, (msg) ->
    msg.send "http://riceballman.fc2web.com/AA-Illust/Data/Tochigi.jpg"
