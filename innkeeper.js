client.on("ready", () => {
  console.log("I am ready!");
});

client.on("presenceUpdate", (oldMember, newMember) => {
  console.log("update!");

  const channel = 466645134721941525; //general in blogchat

  if ((oldMember.presence.status=== "offline") && (newMember.presence.status === "online")) {
      console.log("join");
      client.channels.get("466645134721941525").send("Hello o/ @" + oldMember.user);
  } else if ((oldMember.presence.status === 'online') && (newMember.presence.status === "offline")) {
      console.log("leave");
      client.channels.get("466645134721941525").send("Goodbye o/");
  } else if ((oldMember.presence.status === 'dnd') && (newMember.presence.status === "offline")) {
      console.log("leave");
      client.channels.get("466645134721941525").send("Goodbye o/");
  } else if ((oldMember.presence.status === 'idle') && (newMember.presence.status === "offline")) {
      console.log("leave");
      client.channels.get("466645134721941525").send("Goodbye o/");
  }
});
//for Heroku
client.login(process.env.BOT_TOKEN);
