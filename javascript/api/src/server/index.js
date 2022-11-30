import express from "express";

import router from "./routers/index.js"

class App {
    server = express();
    port = process.env.PORT || 3001;

    constructor() {
        this.router();
        this.middleware();
    }

    router() {
        this.server.use(router);
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

export default new App();