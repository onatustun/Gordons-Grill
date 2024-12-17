$(document).ready(() => {

    // Triggers when clicking on the submit button

    $("#contact-submit").on("click", (e) => {

        /*
            When normally pressing a submit in a form it reloads the page.
            This prevents that normal behaviour so the rest of the
            logic can be executed.
        */

        e.preventDefault();

        // Checking if the inputs are valid

        if (
            $("#contact-fname")[0].checkValidity() &&
            $("#contact-lname")[0].checkValidity() &&
            $("#contact-email")[0].checkValidity() &&
            $("#contact-content")[0].checkValidity()
        ) {

            // If the inputs are valid it stores all the data

            const fName = $("#contact-fname").val();
            const lName = $("#contact-lname").val();
            const cEmail = $("#contact-email").val();
            const cContent = $("#contact-content").val();

            const contactDetails = {
                first_name: fName,
                last_name: lName,
                email: cEmail,
                content: cContent
            };

            // Through the emailjs api the collected data is sent to the user

            emailjs.send("service_9abbw7m", "template_5d8gdlr", contactDetails);
            alert(
                "We have received your message and will get back to you soon.",
            );
        } else {

            // If the inputs weren't valid they are prompted to redo

            alert("Please fill out the contact form first.");
        }
    });
})