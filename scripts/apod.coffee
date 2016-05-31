request = require "request"
API_KEY = "Q8mtkFkP4Zru4mlDd812iw2vcQwx5B0qIsUKsxit"

module.exports = (robot) ->
  robot.hear /apod|galaxy|spa+ce|宇宙|コスモ|銀河/i, (msg) ->
    request "https://api.nasa.gov/planetary/apod?api_key=#{API_KEY}", (error, responce, body) ->
      if not error and responce.statusCode is 200
      	dict = JSON.parse body
      	msg.reply "宇宙って良いにゃーん\n#{dict.title}\n#{dict.url}"
      else
      	msg.reply "APODの画像が取れなかったにゃーん"
