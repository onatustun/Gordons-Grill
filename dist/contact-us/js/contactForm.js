$(document).ready(() => {
    $("#contact-submit").on("click", (e) => {
        e.preventDefault();

        if (
            $("#contact-fname")[0].checkValidity() &&
            $("#contact-lname")[0].checkValidity() &&
            $("#contact-email")[0].checkValidity() &&
            $("#contact-content")[0].checkValidity()
        ) {
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

            emailjs.send("service_9abbw7m", "template_5d8gdlr", contactDetails);
            alert(
                "We have received your message and will get back to you soon.",
            );
        } else {
            alert("Please fill out the contact form first.");
        }
    });
})