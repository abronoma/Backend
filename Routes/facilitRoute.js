import express from 'express';
import { addFacilitator, fetchAllfacilitators, fetchOneFacilitator } from '../controller/facilitController.js';

const router = express.Router();

router.post('/api/facilitator', addFacilitator);
router.get('/api/facilitators', fetchAllfacilitators);
router.get('/api/facilitator/:id',fetchOneFacilitator); 

export default router;
