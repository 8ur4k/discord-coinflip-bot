require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  initializeSocket();
});

function initializeSocket() {
  console.log(`Logged in as ${client.user.username}`);
  client.user.setActivity("Coinflip", { type: "WATCHING" });
}

client.on("message", (msg) => {
  const message = msg.content.toLowerCase();
  if (msg.channel.type == "dm") {
    return msg.author.send("8ur4k Lewis#0001");
  }

  if (
    message.toLowerCase().startsWith("uwu") &&
    msg.author.id != client.user.id
  ) {
    console.log("UwU");
    msg.channel.send("UwU").then((msg) => {
      setTimeout(() => msg.delete(), 3000);
    });
  }
});

client.login(process.env.TOKEN);
