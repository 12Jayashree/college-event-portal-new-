document.addEventListener("DOMContentLoaded", function () {

    // Registration form validation
    const registrationForm = document.getElementById("registrationForm");

    if (registrationForm) {

        registrationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const department = document.getElementById("department").value;
            const selectedEvent = document.getElementById("event").value;

            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                department === "" ||
                selectedEvent === ""
            ) {
                alert("Please fill in all required fields.");
                return;
            }

            if (!/^[0-9]{10}$/.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            alert(
                "Registration successful!\n\n" +
                "Name: " + name + "\n" +
                "Event: " + selectedEvent
            );

            registrationForm.reset();
        });
    }

});