const EventEmitter = require('events');      // 1 - import module events 
const event = new EventEmitter();            // 2 - create new instance of EventEmitter
event.on("eventName", () => {              // 3 - create event listener
     console.log("Event is triggered 1");
});
event.on("eventName", () => {              // 3 - create event listener
     console.log("Event is triggered 2");
});
event.on("eventName", (num) => {              // 3 - create event listener
     console.log(`Event is triggered ${num}`);
});
event.emit("eventName", 3);           // 4 - emit event with argument 
