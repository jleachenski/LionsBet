import e from "express";
import cho_han_controller_alexandre from "../controllers/cho_han_controller_alexandre.js";

const router = e.Router();

router.post("/", cho_han_controller_alexandre.store);
router.get("/", cho_han_controller_alexandre.index);
router.get("/:id", cho_han_controller_alexandre.show);
router.put("/:id", cho_han_controller_alexandre.update);

export default router;
