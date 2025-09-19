const fs = require("fs");
const http = require("http");
const url = require("url");

fs.readFile(`${__dirname}/../dev-data/data.json`, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const dataObj = JSON.parse(data);

  const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === "/" || pathName === "/overview") {
      res.end("This is overview page");
    } else if (pathName === "/product") {
      res.end("This is product page");
    } else if (pathName === "/api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data); // serve json
    } else {
      res.writeHead(404, {
        "Content-Type": "text/html",
        "my-own-header": "hello-world",
      });
      res.end("<h1>Page not found!</h1>");
    }
  });

  server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to requests on port 8000");
  });
});
