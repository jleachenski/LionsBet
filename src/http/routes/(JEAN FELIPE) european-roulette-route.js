import express from "express";
import european_roulette_controller from "../controllers/(JEAN FELIPE) european-roulette-controller.js";

const router = express.Router();

router.post("/", european_roulette_controller.store);
router.get("/", european_roulette_controller.index);
router.get("/:id", european_roulette_controller.show);
router.put("/:id", european_roulette_controller.update);

export default router;
