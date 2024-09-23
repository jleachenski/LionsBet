import express from 'express';
import aposta_soma_bet_controller from '../controllers/aposta-soma-bet-controller-Fabio.js';
const router = express.Router();

router.post('/', aposta_soma_bet_controller.store);
router.get('/', aposta_soma_bet_controller.index);
router.get('/:id', aposta_soma_bet_controller.show);
router.put('/:id', aposta_soma_bet_controller.update);

export default router;