document.addEventListener('DOMContentLoaded', function() {
    // FAQ data
    const faqs = [
        {
            question: "How can I reset my password?",
            answer: "To reset your password, go to the login page and click on 'Forgot Password'. You will be prompted to enter your registered email to receive a password reset link."
        },
        {
            question: "How can I update my payment method?",
            answer: "To update your payment method, go to the 'Account Settings' page, then click on 'Payment Methods' and add a new card or payment option."
        },
        {
            question: "How do I update my profile information?",
            answer: "To update your profile information, go to the 'Profile' section and click on 'Edit Profile'. From there, you can update your name, email, and other details."
        },
        {
            question: "What are the support hours?",
            answer: "Our customer support is available 24/7. You can contact us anytime via the support chat or email."
        }
    ];

    // Load FAQ into the FAQ section
    const faqList = document.getElementById("faq-list");
    faqs.forEach(faq => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${faq.question}</strong><br>${faq.answer}`;
        faqList.appendChild(listItem);
    });

    // Bot-driven Support - answer questions based on selection
    document.getElementById("question-select").addEventListener("change", function() {
        const selectedQuestion = this.value;
        const botAnswer = document.getElementById("bot-answer");

        switch (selectedQuestion) {
            case "account-issues":
                botAnswer.innerHTML = "To reset your password, go to the login page and click on 'Forgot Password'. You will receive an email with the reset instructions.";
                break;
            case "payment-issues":
                botAnswer.innerHTML = "To update your payment method, go to the 'Account Settings' page and navigate to the 'Payment Methods' section.";
                break;
            case "profile-issues":
                botAnswer.innerHTML = "To update your profile information, go to the 'Profile' section and click 'Edit Profile' to make changes.";
                break;
            case "support-hours":
                botAnswer.innerHTML = "Our customer support is available 24/7, and you can contact us anytime for assistance.";
                break;
            default:
                botAnswer.innerHTML = "";
        }
    });

    // Menu toggle functionality
    document.getElementById("openBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.add("open");
    });

    document.getElementById("closeBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.remove("open");
    });
});
