import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  jwtSecret: string;
  jwtExpiry: string;
  databaseUrl: string;
  nodeEnv: string;
  corsOrigin: string;
}

const config: Config = {
  port: parseInt(process.env.PORT || '8088', 10),
  jwtSecret: process.env.JWT_SECRET_KEY || 'supersecretdefaultforlocaldev',
  jwtExpiry: process.env.JWT_EXPIRY || '1d',
  databaseUrl: process.env.DATABASE_URL || '',
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
};

if (config.nodeEnv === 'production') {
  if (!config.jwtSecret || config.jwtSecret === 'supersecretdefaultforlocaldev') {
    throw new Error('JWT_SECRET_KEY must be set in production');
  }
  if (!config.databaseUrl) {
    throw new Error('DATABASE_URL must be set in production');
  }
} else {
  if (!config.jwtSecret || config.jwtSecret === 'supersecretdefaultforlocaldev') {
    console.warn('WARNING: JWT_SECRET_KEY is not set or using default value.');
  }
  if (!config.databaseUrl) {
    console.warn('WARNING: DATABASE_URL is not set.');
  }
}

export default config;
