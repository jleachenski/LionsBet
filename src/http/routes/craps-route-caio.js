import e from "express";
import craps_controller from "../controllers/craps-controller-caio.js"

const router = e.Router();

router.post("/", craps_controller.store)
router.get("/", craps_controller.index)
router.get("/:id", craps_controller.show)
router.put("/:id", craps_controller.update)

export default router