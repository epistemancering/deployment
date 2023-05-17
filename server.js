let express = require("express")
let api = express()
api.use(require("cors")())
console.log(__dirname + "/public")
api.use(express.static(__dirname + "/public"))
api.get("/character", function(request, response) {
    console.log(response.data)
    response.send("Gavin Guile")
})
api.listen(3000, function() {
    console.log("using port 3000")
})