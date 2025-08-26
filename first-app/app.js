const Logger = require("./logger");

const logger = new Logger();

logger.on("logging", (e) => {
  console.log("listener called", e);
});

logger.log("message");
