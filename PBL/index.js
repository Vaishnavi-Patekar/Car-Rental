document.getElementById("carForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pickupLocation = document.getElementById("pickupLocation").value;
    const dropLocation = document.getElementById("dropLocation").value;
    const pickupTime = document.getElementById("pickupTime").value;
    const dropTime = document.getElementById("dropTime").value;
    const pickupDate = document.getElementById("pickupDate").value;
    const dropDate = document.getElementById("dropDate").value;
    const driver = document.querySelector('input[name="driver"]:checked').value;
    
    // Display confirmation message
    const confirmationSlip = `
        <h2>Confirmation Slip</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Contact: ${contact}</p>
        <p>Gender: ${gender}</p>
        <p>Pickup Location: ${pickupLocation}</p>
        <p>Drop Location: ${dropLocation}</p>
        <p>Pickup Time: ${pickupTime}</p>
        <p>Drop Time: ${dropTime}</p>
        <p>Pickup Date: ${pickupDate}</p>
        <p>Drop Date: ${dropDate}</p>
        <p>Driver: ${driver}</p>
        <p>Booking confirmed. Thank you!</p>
    `;
    document.getElementById("confirmation").innerHTML = confirmationSlip;
});
