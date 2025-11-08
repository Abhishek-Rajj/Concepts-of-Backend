const { log } = require("console");
const os = require("os");
// this will tell the user info , which user is using that
const user = os.userInfo();
console.log(user);
// method return the system uotime in seconds
console.log(`The system uptime is ${os.uptime()} in seconds`);
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);

const path = require("path");
console.log(path.sep);
     