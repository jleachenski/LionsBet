import e from "express"
import dice_bet_controller from "../controllers/dice-bet-controller-vincent.js"

const router = e.Router()

router.post("/", dice_bet_controller.store)
router.get("/", dice_bet_controller.index)
router.get("/:id", dice_bet_controller.show)
router.put("/:id", dice_bet_controller.update)

export default router