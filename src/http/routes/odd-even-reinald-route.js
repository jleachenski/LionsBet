import e from "express";
import old_even_reinald_controler from "../controllers/old-even-reinald-controller.js";

const router = e.Router();

router.post("/", old_even_reinald_controler.store);
router.get("/", old_even_reinald_controler.index);
router.get("/:id", old_even_reinald_controler.show);
router.put("/:id", old_even_reinald_controler.update);

export default router;
