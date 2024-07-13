import express from 'express';
import { registerController } from '../dependencies';

const authRouter = express.Router();

authRouter.post('/signup', registerController.signUp.bind(registerController));

export { authRouter };