const Event_emitter = require("events");
const event_emitter = new Event_emitter();

event_emitter.on("greet", () => {
  console.log("hello");
});
event_emitter.on("greet", (name) => {
  console.log("hello", name);
});
//adding listener
event_emitter.emit("greet","jay");
const eventListener = () => {
  console.log("listening");
};

event_emitter.on("test", eventListener);
event_emitter.emit("test");
//removing listener
event_emitter.removeListener("test", eventListener);
event_emitter.emit("test");

console.log(event_emitter.listeners("greet"));
console.log(event_emitter.listeners("test"));
