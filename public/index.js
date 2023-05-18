document.querySelector("#character").addEventListener("click", function() {
    axios.get("/character").then(function(response) {
        alert("The protagonist's name is " + response.data + "!")
    })
})
document.querySelector("#author").addEventListener("click", function() {
    axios.get("/author").then(function(response) {
        alert("The author's name is " + response.data + ".")
    })
})