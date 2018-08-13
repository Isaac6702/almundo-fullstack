export default {
  app: {
    env: 'dev',
    host: process.env.HOST || 'http://127.0.0.1',
    path: '/api',
    basePath: '/',
    port: 3000
  },
  db: {
    mongo: 'mongodb://127.0.0.1:27017/almundo-dev'
  },
  repository: 'http://127.0.0.1:32775/repository/image'
}
