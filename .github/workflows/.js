document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple alert to display the form data
    alert('Thank you, ' + name + '! Your message has been sent.\nWe will contact you at ' + email);

    // Clear form
    document.getElementById('contactForm').reset();
});
