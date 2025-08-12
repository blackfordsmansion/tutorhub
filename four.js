// four.js


function handleMailtoSubmission(event) {
 
    event.preventDefault();
    
    const form = document.getElementById('tutoring-form');
    const formData = new FormData(form);
    const data = {};
    
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }


   
    let body = `Hello, a new tutoring request has been submitted.\n\n`;
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            body += `${key}: ${data[key]}\n`;
        }
    }
    body += `\n- End of Submission -`;


    
    const encodedBody = encodeURIComponent(body);
    const subject = encodeURIComponent('New Tutoring Request');
    

    const mailtoUri = `mailto:tutorhubwork1@gmail.com?subject=${subject}&body=${encodedBody}`;


    // Open the mail client
    window.location.href = mailtoUri;

}

