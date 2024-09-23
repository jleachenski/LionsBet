import e from "express"
import head_tails_controller from "../controllers/head-tails-controller-joao.js"

const router = e.Router();

router.post("/", head_tails_controller.store);
router.get("/", head_tails_controller.index);
router.get("/:id", head_tails_controller.show);
router.put("/:id", head_tails_controller.update);

export default router