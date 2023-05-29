document.getElementById("review-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var rating = document.getElementById("rating").value;
    var review = document.getElementById("review").value;

    // Perform validation or further processing here
    // ...

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("review").value = "";

    // Display success message or perform other actions
    alert("Review submitted successfully!");
});
