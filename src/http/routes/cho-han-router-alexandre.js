import e from "express";
import cho_han_controller from "../controllers/cho_han_controller.js";

const router = e.Router();

router.post("/", cho_han_controller.store);
router.get("/", cho_han_controller.index);
router.get("/:id", cho_han_controller.show);
router.put("/:id", cho_han_controller.update);

export default router;
