// four.js


function handleMailtoSubmission(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    const form = document.getElementById('tutoring-form');
    const formData = new FormData(form);
    const data = {};
    
    // Collect form data into a readable object
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }


    // Create a formatted string for the email body
    let body = `Hello, a new tutoring request has been submitted.\n\n`;
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            body += `${key}: ${data[key]}\n`;
        }
    }
    body += `\n- End of Submission -`;


    // Encode the body for the mailto link
    const encodedBody = encodeURIComponent(body);
    const subject = encodeURIComponent('New Tutoring Request');
    
    // Construct the mailto URI
    // IMPORTANT: Replace 'your-email@example.com' with your actual email address.
    const mailtoUri = `mailto:tutorhubwork1@gmail.com?subject=${subject}&body=${encodedBody}`;


    // Open the mail client
    window.location.href = mailtoUri;

}
