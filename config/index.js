const dev = process.env.NODE_ENV !== 'production';

export const server = dev
    ? 'http://localhost:3000/'
    : 'https://next-mongodb-app-two.vercel.app/';
