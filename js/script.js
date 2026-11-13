
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let city = document.getElementById("city");
    let fullname = document.getElementById("fullname");
    let method = document.getElementById("method");
    let reason = document.getElementById("reason");

    if (
        !email.value.trim() ||
        !phone.value.trim() ||
        !city.value.trim() ||
        !fullname.value.trim() ||
        !method.value ||
        !reason.value.trim()
    ) {
        message.textContent = "Please fill in all fields!";
        message.style.color = "var(--color-error)";
        return;
    }

    if (!email.checkValidity()) {
        message.textContent = "Please enter a valid email!";
        message.style.color = "var(--color-error)";
        return;
    }

    let phoneNumber = phone.value.replace(/\D/g, "");

    if (phoneNumber.length < 10 || phoneNumber.length > 15) {
        message.textContent = "Please enter a valid phone number!";
        message.style.color = "var(--color-error)";
        return;
    }

    message.textContent = "Your message has been successfully validated!";
    message.style.color = "var(--color-success)";

    form.reset();
});
