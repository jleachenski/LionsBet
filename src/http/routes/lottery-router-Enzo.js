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

router.post('/', index);
router.get('/', update);
router.get('/:id', get);
router.put('/:id', show);
router.delete('/:id', deleteLottery);
router.post('/', store); 

export default router;