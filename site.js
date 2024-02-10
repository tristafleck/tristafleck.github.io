console.log('JavaScript file linked correctly!')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

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
