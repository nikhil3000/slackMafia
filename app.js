// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");

// WebClient instantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient(process.env.SLACK_BOT_TOKEN, {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});




// All the room in the world for your code
const publishMessage = async () => {
  const channelId = 'C050KJWD1E3';
  try {
  // Call the chat.postMessage method using the WebClient
  const result = await client.chat.postMessage({
    channel: channelId,
    text: "Hello world from the slack app"
  });

  console.log(result);
}
catch (error) {
  console.error(error);
}
  
}




(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  // await publishMessage();
  

  console.log('⚡️ Bolt app is running!');
})();
