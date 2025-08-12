document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tutoring-form");


    form.addEventListener("submit", function (e) {
        // Optionally show a loading message before submit
        console.log("Form submitted");
    });
});