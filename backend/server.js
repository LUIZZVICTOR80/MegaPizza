import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import pizzaRoutes from './routes/pizzaRoutes.js';

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', pizzaRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log('Database sync failed', err));
