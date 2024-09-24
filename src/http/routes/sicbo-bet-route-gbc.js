import e from "express";
import sicbo_bet_Controller from "../controllers/sicbo-bet-controller-gbc.js";

const router = e.Router();

router.post("/", sicbo_bet_Controller.store);
router.get("/", sicbo_bet_Controller.index);
router.get("/:id", sicbo_bet_Controller.show);
router.put("/:id", sicbo_bet_Controller.update);

export default router;