import express from "express";

class App {
    server = express();
    port = process.env.PORT || 3001;

    constructor() {

    }

    router() {
        this.server.use();
    }

    middleware() {
        this.server.use(express.json());
    }

    run() {
        this.server.listen(this.port, () => {
            console.log(`Servidor arivo em: http://localhost:${this.port}/`)
        });
    }
}