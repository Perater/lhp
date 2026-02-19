function sendMail() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let proj = document.getElementById("proj").value;
    let message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !proj || !message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    if (proj === "") {
        alert("Please select a project type.");
        return;
    }

    let parms = {
        name: name,
        email: email,
        proj: proj,
        message: message,
        subject: "New Project Inquiry – " + proj,
    }

    emailjs.send("service_uecu7h8", "template_42bp0yc", parms)
        .then(function() {
            alert("Email Sent!");
            location.reload();
        }, function(error) {
            alert("Failed to send. Error: " + JSON.stringify(error));
        });
}

function openLightbox(src) {
    const lb = document.getElementById("lightbox");
    document.getElementById("lightbox-img").src = src;
    lb.style.display = "flex";
    document.body.style.overflow = "hidden"; // prevents background scrolling
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.body.style.overflow = ""; // restore scrolling
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeLightbox();
});
