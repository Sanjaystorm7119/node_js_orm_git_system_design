const http = require("node:http");
const server = http.createServer(function (req, res) {
  console.log("incoming");
  //some process
  res.writeHead(200);
  res.end("visited");
});
server.listen(8000, function () {
  console.log(`server running on 8000`);
});
