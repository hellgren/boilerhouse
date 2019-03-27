const express = require("express");
const next = require("next");
const compression = require("compression");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(compression());

    server.get(/^\/static\//, (_, res, nextHandler) => {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      nextHandler();
    });

    server.get("/robots.txt", (req, res) => {
      const robotsOptions = {
        root: `${__dirname}/static/`,
        headers: {
          "Content-Type": "text/plain;charset=UTF-8"
        }
      };
      res.status(200).sendFile("robots.txt", robotsOptions);
    });

    server.get("/favicon.ico", (req, res) => {
      const faviconOptions = {
        root: `${__dirname}/static/`
      };
      res.status(200).sendFile("favicon.ico", faviconOptions);
    });

    server.get("*", (req, res) => handle(req, res));

    server.listen(process.env.port || 3000, err => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(
        `> Ready on http://localhost:§{process.env.port} - NODE_ENV=${
          process.env.NODE_ENV
        }.`
      );
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.error(error.stack);
    process.exit(1);
  });
