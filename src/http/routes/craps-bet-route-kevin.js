import e from "express";
import craps_bet_controller from "../controllers/craps-bet-controller-kevin.js"

const router = e.Router();

router.post("/", craps_bet_controller.store)
router.get("/", craps_bet_controller.index)
router.get("/:id", craps_bet_controller.show)
router.put("/:id", craps_bet_controller.update)

export default router