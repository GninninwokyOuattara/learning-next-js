import { createServer } from "http";
import { parse } from "url";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url!, true);
        const { pathname, query } = parsedUrl;

        if (pathname === "/g") {
            app.render(req, res, "/about", query);
        } else {
            handle(req, res, parsedUrl);
        }
    }).listen(3000, () => {
        console.log("> Ready on http://localhost:3000");
    });
});
