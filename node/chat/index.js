    const ChatRoom = require("./chatApp");
    const chat = new ChatRoom();

    chat.on("join", (user) => console.log(`${user} has joined the chat`));

    chat.on("message", (user, message) => {
    console.log(`${user} : ${message}`)
    });

    chat.on("leave", (user) => {
    console.log(`${user} has left the chat`)
    });

    //simulating chat

    chat.join("Alice");
    chat.join("Bob");

    chat.sendMessage("Alice", "hello everyone");
    chat.sendMessage("Bob", "hello Alice");
    chat.leave("Alice");
    chat.sendMessage("Alice", "message not sent");
    chat.leave("Bob");
