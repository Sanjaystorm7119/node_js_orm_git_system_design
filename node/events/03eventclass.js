const Event_emitter = require("events");

class Chat extends Event_emitter {
  sendMessage(msg) {
    console.log(`message sent : ${msg}`);
    this.emit("messageReceived", msg);
  }
}
const chat = new Chat();
chat.on("messageReceived", (msg) => {
  console.log(`New message: ${msg}`);
});

//trigger event
chat.sendMessage("hello");
