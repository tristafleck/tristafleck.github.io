console.log('JavaScript file linked correctly!')

const hours = new Date().getHours();

const isMorning = hours >= 4 && hours < 12; 
const isAfternoon = hours >= 12 && hours < 17; 
const isEvening = hours >= 17 || hours < 4;

const welcomeDiv = document.getElementById("welcome");

if (isMorning) {
  welcomeDiv.textContent = "Good morning! Welcome to my website.";
} else if (isAfternoon) {
  welcomeDiv.textContent = "Good afternoon! Welcome to my website.";
} else if (isEvening) {
  welcomeDiv.textContent = "Good evening! Welcome to my website.";
} else {
  welcomeDiv.textContent = "Welcome to my website."; 
}

localStorage.setItem("It's a secret to everybody.", "The treasure is buried underneath the lake.");

const secretMessage = localStorage.getItem("It's a secret to everybody.");
console.log(secretMessage);
