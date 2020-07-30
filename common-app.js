/**
    This file can be easily reused by servers since it contains the common code that most server need

    `express` is used to:
    - Create web apps
    - Create APIs

    https://expressjs.com/

 */
const express = require('express')
//'express' app in dependency, assume it's being installed

/** Create an instance of Express */
const app = express() 

/** create an instance of a `router` to handle requests to urls */
//all the path names are routing

const router = express.Router()

/** Tell the instance of express to use the `router` you just created */
app.use(router)

/** Tell express to read and send files directly from this folder */
app.use(express.static('public'))

//public folder css, images, etc

/**
    Export just the app and router
    Any code that directly references `express` is contained in this file so no need to export the `express` variable
 */
module.exports = {
    app,
    router
}
