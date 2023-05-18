let express = require("express")
let api = express()
api.use(require("cors")())
api.use(express.static(__dirname + "/public"))
api.get("/character", function(request, response) {
    response.send("Gavin Guile")
})
api.listen(3000, function() {
    console.log("using port 3000")
})