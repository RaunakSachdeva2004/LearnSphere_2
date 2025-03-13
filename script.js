// document.addEventListener("DOMContentLoaded", function () {
//     // Toggle between Login and Register forms
//     document.getElementById('showRegister').addEventListener('click', function(event) {
//         event.preventDefault();
//         document.querySelectorAll('.form-container').forEach(function(form) {
//             form.classList.toggle('hidden');
//         });
//     });

//     document.getElementById('showLogin').addEventListener('click', function(event) {
//         event.preventDefault();
//         document.querySelectorAll('.form-container').forEach(function(form) {
//             form.classList.toggle('hidden');
//         });
//     });

//     // Simulate Login Success
//     document.getElementById('loginForm').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission
//         alert('Login successful! Redirecting to home page...');
//         document.getElementById('loginPage').classList.add('hidden'); // Hide login page
//         document.getElementById('homePage').classList.remove('hidden'); // Show home page
//     });

//     // Simulate Registration Success
//     document.getElementById('registerForm').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission
//         alert('Registration successful! Redirecting to login page...');
//         document.querySelectorAll('.form-container').forEach(function(form) {
//             form.classList.toggle('hidden');
//         });
//     });

//     // Scroll Search for Selecting Topics
//     const topics = ["Math", "Physics", "Chemistry", "Biology"];
//     const topicSelect = document.createElement("select");
//     topicSelect.id = "topicSelect";

//     topics.forEach(topic => {
//         const option = document.createElement("option");
//         option.value = topic.toLowerCase() + ".html";
//         option.textContent = topic;
//         topicSelect.appendChild(option);
//     });

//     const searchContainer = document.createElement("div");
//     searchContainer.classList.add("search-container");
//     searchContainer.innerHTML = `<label for="topicSelect">Choose a topic:</label>`;
//     searchContainer.appendChild(topicSelect);

//     const goButton = document.createElement("button");
//     goButton.textContent = "Go";
//     goButton.addEventListener("click", function () {
//         const selectedTopic = document.getElementById("topicSelect").value;
//         window.location.href = selectedTopic;
//     });

//     searchContainer.appendChild(goButton);
//     document.getElementById("homePage").appendChild(searchContainer);
// });

// Interactive Features
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cta").forEach(button => {
        button.addEventListener("click", () => {
            alert(`You clicked on ${button.innerText}!`);
        });
    });

    document.querySelector(".signup").addEventListener("click", () => {
        alert("Redirecting to sign-up page...");
    });

    document.querySelector(".login").addEventListener("click", () => {
        alert("Redirecting to login page...");
    });
});

