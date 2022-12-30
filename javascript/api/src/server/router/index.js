import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    return res.send("Essa é minha API em JavaScript!");
});

export default router;