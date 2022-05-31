const Hapi = require('@hapi/hapi')


const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route()

  await server.start()
  console.log('Server berjalan pada port: %s', server.info.uri)
}

module.exports = init