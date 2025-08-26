const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(msg) {
    console.log(msg);
    this.emit("logging", { data: msg });
  }
}

module.exports = Logger;
