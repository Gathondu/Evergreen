export const config = {
  app: {
    port: parseInt(process.env.APP_PORT) || 3001
  },
  dbUrl: 'mongodb://localhost:27017/evergreen-test'
};