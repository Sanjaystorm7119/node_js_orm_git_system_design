const http = require("node:http");
const server = http.createServer(function (req, res) {
  //   console.log(`Incoming req at ${Date.now()}`);
  //   console.log(req.headers);

  switch (req.url) {
    case "/":
      res.writeHead(200);
      return res.end("home");
    case "/contact-us":
      res.writeHead(200);
      return res.end("contact me : sanjay@gmail.com");
    case "/about":
      res.writeHead(200);
      return res.end("I am a software developer");
    default:
      res.writeHead(404);
      return res.end("you are lost");
  }
});
port = 8000;
server.listen(port, () => console.log(`running on ${port}`));
