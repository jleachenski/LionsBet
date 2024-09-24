import e from "express";
import LuckyThree_controller from "../controllers/LuckyThree-controller-Lari.js"

const router = e.Router();

router.post("/", LuckyThree_controller.store)
router.get("/", LuckyThree_controller.index)
router.get("/:id", LuckyThree_controller.show)
router.put("/:id", LuckyThree_controller.update)

export default router