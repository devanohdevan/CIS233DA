document.addEventListener("DOMContentLoaded", function() {
    const resultElement = document.getElementById("result");

    fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => {
            // Process the API response here
            resultElement.innerText = JSON.stringify(data);
        })
        .catch(error => {
            console.error("Error:", error);
            resultElement.innerText = "An error occurred while fetching data.";
        });
});
