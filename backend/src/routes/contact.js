import express from 'express';
import { submitContactForm, getMessages } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContactForm);
router.get('/', getMessages);

export default router;
