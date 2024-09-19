import e from "express";
import jackpot_bet_controller from "../controllers/jackpot-bet-controller.js"

const router = e.Router();

router.post("/", jackpot_bet_controller.store)
router.get("/", jackpot_bet_controller.index)
router.get("/:id", jackpot_bet_controller.show)
router.put("/:id", jackpot_bet_controller.update)

export default router