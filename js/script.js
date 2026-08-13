


// KONTAKT FORM //

const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const submitButton = contactForm.querySelector(".contact-submit");
        const formData = new FormData(contactForm);

        submitButton.disabled = true;
        contactStatus.textContent = "Sender besked...";

        try {
            const response = await fetch("https://formspree.io/f/maewjzyj", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                contactStatus.textContent = "Tak! Din besked er sendt.";
                contactForm.reset();
            } else {
                contactStatus.textContent = "Der opstod en fejl. Prøv igen.";
            }

        } catch (error) {
            contactStatus.textContent =
                "Kunne ikke sende beskeden. Prøv igen senere.";

        } finally {
            submitButton.disabled = false;
        }
    });
}