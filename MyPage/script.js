let currentIndex = 0;

function changeGreeting() {
  const greetings = ["즐거운 😊", "Github 특강 😊", "다들 😊", "화이팅 💪"];
  const greetingElement = document.getElementById("greeting");

  greetingElement.textContent = greetings[currentIndex];
  currentIndex = (currentIndex + 1) % greetings.length;
}
