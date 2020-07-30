const {app, router} = require('./common-app.js')
//require js file
//return objects(two properties app and router)

// below is like a switch statement
// define the home page route
router.route('/testing').get(function (request, response) {
  //if we have this file in route, then get request
  // `200` is sent by default so we can remove this next line since it is not needed
  response.status(200)
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
//default, anything that's not a match '*', handle all your 404

 // http://localhost:3001/
 // takes a port and a call back function
app.listen(3001, function () {
    console.log('App server started on port 3001 http://localhost:3001/')
})