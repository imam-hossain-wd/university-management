import { Router } from 'express';
import controller from './user.controller';

const router = Router();

router.post('/create-user', controller.createduser);

export default router;
