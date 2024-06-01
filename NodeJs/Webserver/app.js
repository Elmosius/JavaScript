const http = require("http");
const fs = require("fs");
const port = 3000;

http
  .createServer((req, res) => {
    const url = req.url;
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    if (url === "/about") {
      res.write("<h1>Ini adalah halaman About</h1>");
      res.end();
    } else if (url === "/contact") {
      res.write("<h1>Ini adalah halaman About</h1>");
      res.end();
    } else {
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error 404");
        } else {
          res.write(data);
        }
        res.end();
      });
    }
  })
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  });
