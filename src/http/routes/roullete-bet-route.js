import e from "express";
import roullete_bet_controller from "../controllers/roullete-bet-controller.js"

const router = e.Router();

router.post("/", roullete_bet_controller.store)
router.get("/", roullete_bet_controller.index)
router.get("/:id", roullete_bet_controller.show)
router.put("/:id", roullete_bet_controller.update)

export default router