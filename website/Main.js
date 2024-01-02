// JavaScript source code
// Get the form element by its ID
var form = document.getElementById("myForm");

// Add an event listener to the form submission
form.addEventListener("submit", function(event) {
  // Prevent the default form action
  event.preventDefault();

  // Initialize EmailJS with your user ID
  emailjs.init("YOUR_USER_ID");

  // Get the form input values
  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  var phone = form.elements["phone"].value;
  var guests = form.elements["guests"].value;
  var date = form.elements["date"].value;
  var time = form.elements["time"].value;

  // Create the email parameters from the form input values
  var params = {
    name: name,
    email: email,
    phone: phone,
    guests: guests,
    date: date,
    time: time
  };

  // Send the email using your service ID and template ID
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then(function(response) {
      console.log("Email sent successfully", response.status, response.text);
    }, function(error) {
      console.error("Email failed to send", error);
    });
});