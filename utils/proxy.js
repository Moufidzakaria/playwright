import dotenv from 'dotenv';
dotenv.config();

export const proxyConfig = {
  server: process.env.PROXY_SERVER,
  username: process.env.PROXY_USER,
  password: process.env.PROXY_PASS
};
