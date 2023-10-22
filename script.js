document.getElementById("recordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    // Validate form data (you can add more validation logic)
    if (name && age && email) {
        // Display the entered data
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `<h3>Record Entered:</h3>
                               <p><strong>Name:</strong> ${name}</p>
                               <p><strong>Age:</strong> ${age}</p>
                               <p><strong>Email:</strong> ${email}</p>`;
    } else {
        alert("Please fill out all fields.");
    }
});
