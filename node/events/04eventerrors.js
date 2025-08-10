const Event_emitter = require('events')
const event_emitter =new Event_emitter()
event_emitter.on("error",(err)=>{
    console.error(`Error Occured : ${err.message}`)
})
event_emitter.emit("error", new Error("something went wrong"))