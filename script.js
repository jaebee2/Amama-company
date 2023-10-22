document.getElementById("recordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(document.getElementById("recordForm"));
    fetch('https://script.google.com/macros/s/AKfycbxi8X0qMKi6ValR7XG0xb5ObQvo1KBDTsjk3Xj7Yywpz_qNkVfl6iDAO6ZTfjwBMaUNDA/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === "Success") {
            document.getElementById("output").textContent = "Record submitted successfully!";
        } else {
            document.getElementById("output").textContent = "Error submitting record.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("output").textContent = "Error submitting record.";
    });
});
