const http = require("http");

const port = 3500;

// http.createServer passes to it's callbck function
// request and response
const server = http.createServer((req, res) => {
  console.log(req.url);

  // router
  switch (req.url) {
    case "/":
    case "/home":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Honey, I am home!</h1>");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>ABOUT<br>We're the best company in the market</h1>`);
      break;
    case "/contacts":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>CONTACTS<br>Phone: 555-5555</h1>`);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(`<h1 style="color:red">FILE NOT FOUND</h1>`);
  }
});

server.listen(port, "localhost", () => {
  console.log(`I am listening on the port ${port}`);
});

// To connect from the browser:
// localhost:3500
// 127.0.0.1:3500
