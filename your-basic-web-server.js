/* 

   As we go along, we will try to apply similar code to build your own basic web server using this file.

   Follow instructions during class to first attempt to solve the coding challenge on your own.

    1) directly require and create an instance of express in this file
     
     Use port 1337 for this server instance


    Use `listen` to start the server up to handle requests at this port number

     <https://expressjs.com/en/api.html#app.listen>

*/

const express = require('express')
const { response } = require('express')
const app = express()

app.listen(3010, function () {
   console.log('app listener started on port 3010 http://localhost:3010/')
})
/**
    2) Use the `get` method to configure a "home page" route handler
 */
// app.get is shortcut to 'router'
// this is like 'switch' or an 'if'
// we configure express to call our function on match
 app.get('/', function(req, res) {
    res.send('Home Page')
 })

 /**
    3) Use the `get` method to configure a "contact" route handler
 */

 app.get('/contact', function(req, res) {
    res.send('Contact')
 })

 /**
    4) Use the `all` method to configure a default handler for when no other handlers defined earlier in this file have matched the path a user has requested

    For example: User requests localhost:1337/admin or localhost:1337/info

    Use `sendStatus` to 

    <https://expressjs.com/en/api.html#res.sendStatus>

 */

 app.all('*', function (req, resp) {
    resp.sendStatus(404)
 })