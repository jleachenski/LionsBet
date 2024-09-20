import e from "express";
import blackjack_bet_controller from "../controllers/blackjack_bet_controllers.js"
const router = e.Router();

router.post("/", blackjack_bet_controller.store)
router.get("/", blackjack_bet_controller.index)
router.get("/:id", blackjack_bet_controller.show)
router.put("/:id", blackjack_bet_controller.update)
router.delete("/:id", blackjack_bet_controller.destroy)

export default router
