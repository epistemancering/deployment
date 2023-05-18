document.querySelector("#character").addEventListener("click", function() {
    axios.get("/character").then(function(response) {
        alert("The protagonist's name is " + response.data + "!")
    })
})