const { app, router } = require('./common-app.js')

// define the home page route
router.route('/testing').get(function (request, response) {
  // `200` is sent by default so we can remove this next line since it is not needed
  // 200 is any 'okay' status, implicit response.status(200)
  // more samples to try out with response codes:
  // response.status(405)
  // response.status(401)
  // response.status(404)
  // response.sendStatus(500)
  response.send('Home Page')
})
// define the about route
router.route('/about').get(function (request, response) {
  response.send('About Page')
})

app.all('*', function (request, response) {
  response.sendStatus(404)
})

// http://localhost:3001/
app.listen(3001, function () {
  console.log('App server started on port 3001 http://localhost:3001/')
})