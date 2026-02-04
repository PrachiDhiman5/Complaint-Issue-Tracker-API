import express from 'express';
import { getComplaint, createComplaint, resolveComplaint, deleteComplaint } from '../controllers/complaint.controller.js';
import auth from '../middleware/auth.middleware.js';
const router = express.Router();

router.get('/',getComplaint);
router.post('/', createComplaint);

router.put('/:id/resolve',auth, resolveComplaint);
router.delete('/:id',auth, deleteComplaint);

export default router;
