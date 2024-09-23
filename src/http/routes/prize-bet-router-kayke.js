import e from "express";
import prize_bet_controller from "../controllers/prize-bet-controller-kayke.js"

const router = e.Router();

router.post("/", prize_bet_controller.store)
router.get("/", prize_bet_controller.index)
router.get("/:id", prize_bet_controller.show)
router.put("/:id", prize_bet_controller.update)

export default router