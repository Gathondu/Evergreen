export const config = {
  app: {
    port: parseInt(process.env.APP_PORT)
  },
  dbUrl: process.env.TEST_DB_URL
};