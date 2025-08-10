// const Event_emitter = require("events");
// const event_emitter = new Event_emitter();

// event_emitter.on("greet", () => {
//   console.log("evets in node js");
// });

// event_emitter.emit("greet");


//with params

const Event_emitter = require("events");
const event_emitter = new Event_emitter();

event_emitter.on("greet", (name) => {
  console.log(`greetings ${name}`);
});

event_emitter.emit("greet","jay");
