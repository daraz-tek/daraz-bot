/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   だらずさんは JSON のお掃除がだいすきです
//
// Commands:
//   hubot json <jsonstring> - あなたの JSON をぷりちーにするにゃん

module.exports = robot =>
  robot.respond(/json +(.*)/i, function(msg) {
    const nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:'];
    const prefix = `${msg.random(nya_ns)} っ `;

    const json = JSON.parse(msg.match[1]);
    const res = JSON.stringify(json, null, 2);

    return msg.reply(`${prefix}
\`\`\`
${res}"
\`\`\`\
`
    );
  })
;
