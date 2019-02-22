/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   だらずさんは Ruby が得意です。
//
// Commands:
//   hubot ruby <oneliner> - irb みたいに、 Ruby として <oneliner> を解釈実行して出力するにゃん
//   hubot script <script> - Ruby として <script> を解釈実行するにゃん

module.exports = function(robot) {
  if (process.env.RUBY_SCRIPT_URL) {

    robot.respond(/ruby +(.*)/i, function(msg) {
      const data = `puts (begin; ${msg.match[1]}; end).inspect`;

      return msg.http(process.env.RUBY_SCRIPT_URL)
        .header('Content-Type', 'text/plain')
        .post(data)((err, res, body) => msg.reply(`=> ${body}`));
    });


    return robot.respond(/script[ \n]+((.|\s)+)/i, function(msg) {
      const data = msg.match[1];

      return msg.http(process.env.RUBY_SCRIPT_URL)
        .header('Content-Type', 'text/plain')
        .post(data)((err, res, body) => msg.reply(`---\n${body}`));
    });
  }
};

