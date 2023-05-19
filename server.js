let Rollbar = require("rollbar")
let rollbar = new Rollbar({
    "accessToken": "e6209aa6a1b14368b5fca369c5780951",
    "captureUncaught": true,
    "captureUnhandledRejections": true
})
let express = require("express")
let sequelize = require("sequelize")
let secrets = require("./secrets")
let api = express()
let database = new sequelize(secrets.key, {
    "dialect": "postgres",
    "dialectOptions": {
        "ssl": {
            "rejectUnauthorized": false
        }
    }
})
api.use(express.static(__dirname + "/public"))
api.get("/character", function(request, response) {
    database.query("select * from characters").then(function(selection) {
        response.send(selection[0][0].name)
    })
})
// api.get("/author", function(request, response) {
//     response.send("Brent Weeks")
// })
console.log(rollbar.options.host)
api.get("/author", function() {
    try {
        respond()
    } catch (error) {
        rollbar.log(error)
        rollbar.critical(error)
        rollbar.warning(error)
    }
})
api.listen(3000, function() {
    console.log("on port 3000")
})