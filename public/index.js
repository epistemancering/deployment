document.querySelector("#character").addEventListener("click", function() {
    axios.get("http://localhost:3000/character").then(function(response) {
        alert("The protagonist's name is " + response.data + "!")
    })
})