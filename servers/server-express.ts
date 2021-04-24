import next from "next";
import express from "express";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
    server.get("/g/:id", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/post", { id: id });
    });

    server.get("/g", (req, res) => {
        return app.render(req, res, "/about");
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, () => {
        console.log("Listening on port 3000");
    });
});
