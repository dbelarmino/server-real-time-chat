var fs = require("fs");
const http = require("http");
const { PORT } = require("./environment");

function handler(request, response) {
  if (request.url === "/") {
    fs.readFile(`${__dirname}/public/index.html`, "UTF-8", (err, html) => {
      if (err) {
        throw new Error("Could not load index.html");
      }

      response.writeHead(200, { "Content-Type": "text/html" });
      return response.end(html);
    });
  } else {
    response.writeHead(302, { Location: "/" });
    return response.end();
  }
}

const httpServer = http.createServer(handler);

httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = { httpServer };
