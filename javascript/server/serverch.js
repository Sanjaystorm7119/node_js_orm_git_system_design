const fs = require("node:fs");

const http = require("node:http");
const server = http.createServer(function (req, res) {
  const method = req.method;
  const path = req.url;

  const log = `[${Date.now()}]: ${method} ${path}\n`;
  fs.appendFileSync("./log.txt", log, "utf-8");
  switch (method) {
    case "GET":
      {
        switch (path) {
          case "/":
            return res.writeHead(200).end("hello from server");
          case "/contact-us":
            return res.writeHead(200).end("contact me at sanjay@gmail.com");
          case "/tweet":
            return res.writeHead(201).end("tweet-1\ntweet-2");
        }
      }
      break;
    case "POST":
      {
        switch (path) {
          case "/tweet":
            return res.writeHead(201).end("tweet is created");
        }
      }
      break;
  }
  return res.writeHead(404).end("you are lost");
});

server.listen(8000, () => console.log(`server running on 8000`));
