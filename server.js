let Rollbar = require("rollbar")
let rollbar = new Rollbar({
    "accessToken": "e6209aa6a1b14368b5fca369c5780951",
    "captureUncaught": true,
    "captureUnhandledRejections": true
})
let express = require("express")
let api = express()
api.use(express.static(__dirname + "/public"))
api.get("/character", function(request, response) {
    response.send("Gavin Guile")
})
// api.get("/author", function(request, response) {
//     response.send("Brent Weeks")
// })
api.get("/author", function() {
    try {
        respond()
    } catch (error) {
        rollbar.log(error)
    }
})
api.listen(3000, function() {
    console.log("using port 3000")
})