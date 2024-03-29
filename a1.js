// Simulated data for demonstration
const jobListings = [
    { title: "Web Developer", company: "ABC Inc.", location: "New York" },
    { title: "Software Engineer", company: "XYZ Corp.", location: "San Francisco" },
    // Add more job listings as needed
];

const applications = [
    { jobTitle: "Web Developer", applicant: "John Doe" },
    { jobTitle: "Software Engineer", applicant: "Jane Smith" },
    // Add more applications as needed
];

document.addEventListener("DOMContentLoaded", () => {
    // Display job listings with animation
    const jobsList = document.getElementById("jobsList");
    jobListings.forEach((job, index) => {
        const li = document.createElement("li");
        li.textContent = `${job.title} at ${job.company} (${job.location})`;
        li.style.opacity = 0;
        li.style.transform = "translateY(-20px)";
        li.style.transition = `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`;
        jobsList.appendChild(li);
        setTimeout(() => {
            li.style.opacity = 1;
            li.style.transform = "translateY(0)";
        }, 50);
    });

    // Save candidate profile with loading animation
    const profileForm = document.getElementById("profileForm");
    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loadingSpinner = document.createElement("div");
        loadingSpinner.textContent = "Saving profile...";
        profileForm.appendChild(loadingSpinner);
        // Simulate delay to show loading animation
        setTimeout(() => {
            loadingSpinner.remove();
            // Save profile logic goes here
            alert("Profile saved successfully!");
        }, 1500);
    });

    // Display applications with animation
    const applicationsList = document.getElementById("applicationsList");
    applications.forEach((application, index) => {
        const li = document.createElement("li");
        li.textContent = `${application.applicant} applied for ${application.jobTitle}`;
        li.style.opacity = 0;
        li.style.transform = "translateY(-20px)";
        li.style.transition = `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`;
        applicationsList.appendChild(li);
        setTimeout(() => {
            li.style.opacity = 1;
            li.style.transform = "translateY(0)";
        }, 50);
    });

    // User registration with loading animation
    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = registrationForm.querySelector("input[type='email']").value;
        const password = registrationForm.querySelector("input[type='password']").value;
        const loadingSpinner = document.createElement("div");
        loadingSpinner.textContent = "Registering user...";
        registrationForm.appendChild(loadingSpinner);
        // Simulate delay to show loading animation
        setTimeout(() => {
            loadingSpinner.remove();
            // Register user logic goes here
            alert(`User registered successfully with email: ${email}`);
        }, 1500);
    });
});