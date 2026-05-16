import express from 'express';
import cors from 'cors';
import config from './config';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import accountRoutes from './routes/accountRoutes';
import recurringExpenseRoutes from './routes/recurringExpenseRoutes';
import transactionRoutes from './routes/transactionRoutes';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: config.corsOrigin,
  })
);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/auth', authRoutes);
app.use('/transaction', transactionRoutes);
app.use('/user', userRoutes);
app.use('/account', accountRoutes);
app.use('/recurringExpense', recurringExpenseRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
