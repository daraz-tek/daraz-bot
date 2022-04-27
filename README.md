# だらずさん ⚡

[Bolt](https://github.com/slackapi/bolt-js) で作られた Slack Bot

1. デプロイ
2. Slack アプリの作成
3. 環境変数の設定

## デプロイ

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdaraz-tek%2Fdaraz-bot)

## Slack アプリの作成

[Slack Applications](https://api.slack.com/apps) → Create New App → From an app manifest

下記の Manifest の `{Vercelのプロジェクト名}` の部分を変更してコピペして、Slack アプリを作成します。

```yaml
display_information:
  name: だらずさん
features:
  bot_user:
    display_name: daraz-san
oauth_config:
  scopes:
    bot:
      - channels:history
      - chat:write
settings:
  event_subscriptions:
    request_url: https://{Vercelのプロジェクト名}.vercel.app/api/slack/events
    bot_events:
      - message.channels
```

## 環境変数の設定

[Vercel Dashboard](https://vercel.com/dashboard) → 対象のプロジェクト → Settings → Environment Variables

- `SLACK_BOT_TOKEN` ... [Slack Applications](https://api.slack.com/apps) → だらずさん → Permissions ページにある `xoxb-` から始まるボットトークン
- `SLACK_SIGNING_SECRET` ... [Slack Applications](https://api.slack.com/apps) → だらずさん → Basic Information ページにある Signing Secret

これらの環境変数を設定後、再びデプロイして反映します。
