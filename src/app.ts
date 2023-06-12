import express, { Application, urlencoded } from 'express';
import cors from 'cors';
import userRoutes from './app/modules/users/user.router';
import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use('/api/v1/userS', userRoutes);

// global error handler
app.use(globalErrorHandler);

export default app;
