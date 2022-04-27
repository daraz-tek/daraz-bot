import { AwsLambdaReceiver } from "@slack/bolt";
import App from "../../dist/app";

const token = process.env.SLACK_BOT_TOKEN;
const signingSecret = process.env.SLACK_SIGNING_SECRET;
const receiver = new AwsLambdaReceiver({ signingSecret });
const appHandler = receiver.toHandler();

new App({ token, receiver });

export function handler(event, context, callback) {
  // NOTE: AWS Lambda のウォームアップだと思われるので再試行しない
  if (event.headers["x-slack-retry-reason"] === "http_timeout") {
    return { statusCode: 200, body: "OK" };
  }

  return appHandler(event, context, callback);
}
