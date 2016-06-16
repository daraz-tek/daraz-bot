request = require "request"
get_video_id = require "get-video-id"

API_KEY = "Q8mtkFkP4Zru4mlDd812iw2vcQwx5B0qIsUKsxit"

module.exports = (robot) ->
	robot.hear /apod|galaxy|spa+ce|宇宙|コスモ|銀河/i, (msg) ->
		request "https://api.nasa.gov/planetary/apod?api_key=#{API_KEY}", (error, response, body) ->
			if not error and response.statusCode is 200
				dict = JSON.parse body
				url =
					if dict.media_type is "video"
					then "https://www.youtube.com/watch?v=#{get_video_id(dict.url)}"
					else dict.url
				msg.reply "宇宙って良いにゃーん\n#{dict.title}\n#{url}"
			else
				msg.reply "APODの画像が取れなかったにゃーん"
