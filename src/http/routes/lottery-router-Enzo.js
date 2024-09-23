import express from 'express';
import {
  index,
  store,
  get,
  show,
  update,
  deleteLottery
} from './lottery-controller-Enzo.js';

const router = express.Router();

router.post('/', createLottery);
router.get('/', getLotteries);
router.get('/:id', getLotteryById);
router.put('/:id', updateLottery);
router.delete('/:id', deleteLottery);
router.post('/check-result', checkResult); 

export default router;