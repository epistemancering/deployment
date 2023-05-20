let Rollbar = require("rollbar")
let rollbar = new Rollbar({ "accessToken": "e6209aa6a1b14368b5fca369c5780951", "captureUncaught": true, "captureUnhandledRejections": true })
let express = require("express")
let sequelize = require("sequelize")
let api = express()
api.use(express.static(__dirname + "/public"))
let database = new sequelize(require("./secrets").key, {
    "dialect": "postgres",
    "dialectOptions": {
        "ssl": { "rejectUnauthorized": false }
    }
})
api.get("/character", function(request, response) {
    database.query("select * from characters").then(function(selection) {
        if (!selection) {
            rollbar.error("problem with getting protagonist")
        }
        response.send(selection[0][0].name.split(" ")[Math.floor(2 * Math.random())])
    })
})
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