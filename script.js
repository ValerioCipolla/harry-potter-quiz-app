const questions = [
  {
    question:
      "What is the full name of Nearly Headless Nick, the ghost that frequented Gryffindor corridors?",
    options: [
      "Sir Nicholas de Mimsy Porpington",
      "Sir Francis van Hauten",
      "Lord Henry Williams",
      "John Smith",
    ],
    answer: "Sir Nicholas de Mimsy Porpington",
  },
  {
    question:
      "How old was Nicholas Flamel, the co-creator of the Philosopher's Stone, when he proceeded to destroy it?",
    options: [
      "1000 years old",
      "665 years old",
      "24 years old",
      "100 years old",
    ],
    answer: "665 years old",
  },
  {
    question: "How many ingredients did the polyjuice potion have?",
    options: ["Ten", "Three", "Seven", "One hundred"],
    answer: "Seven",
  },
  {
    question:
      "What does the scar above Albus Dumbledore's left knee look like?",
    options: [
      "A phoenix",
      "A globe",
      "London's skyline",
      "A map of the London Underground",
    ],
    answer: "A map of the London Underground",
  },
  {
    question:
      "Hermione changed the leaves of the Weasley's crabapple tree into a specific color exclusively for Harry's 17th birthday. What was it?",
    options: ["Red", "Silver", "Gold", "Blue"],
    answer: "Gold",
  },
  {
    question:
      "What was the name of the Irish chaser that scored the first goal in the Quidditch World Cup?",
    options: ["Albert", "Toby", "Troy", "Sebastian"],
    answer: "Troy",
  },
  {
    question: "Hannah Abbott is sorted into which house?",
    options: ["Ravenclaw", "Gryffindor", "Slytherin", "Hufflepuff"],
    answer: "Hufflepuff",
  },
  {
    question:
      "What is the name of the company in which Vernon Dursley, Harry Potter's Uncle, worked?",
    options: ["Craftswell", "Grunnings", "Dursills", "Makita"],
    answer: "Grunnings",
  },
  {
    question:
      "What is the five digit code that one needs to dial to get inside the Ministry of Magic?",
    options: ["6-2-4-4-2", "7-4-3-4-6", "8-2-2-4-6", "0-0-4"],
    answer: "6-2-4-4-2",
  },
  {
    question: "What is the maximum speed that a firebolt broomstick can reach?",
    options: ["100 mph", "80 mph", "150 mph", "1000 mph"],
    answer: "150 mph",
  },
];

let displayedQuestion = document.getElementById("question");
let answerOptions = document.getElementById("options");
let correctCount = document.getElementById("correct");
const startButton = document.getElementById("start-btn");
const footer = document.getElementById("footer");
const containerCard = document.getElementById("container-card");
const heading = document.getElementById("heading");
let questionIndex = 0;
let counter = 0;

function startQuiz() {
  startButton.classList.toggle("hide");
  footer.classList.toggle("hide");
  heading.classList.toggle("hide");
  containerCard.style.minHeight = "80vh";
  displayNextQuestion();
}

function displayNextQuestion() {
  if (questionIndex >= questions.length) {
    displayGameOverModal();
  } else {
    displayedQuestion.innerHTML = `<h2>${questions[questionIndex].question}</h2>`;
    for (let option of questions[questionIndex].options) {
      answerOptions.innerHTML += `<button class="answer-btn">${option}</button>`;
    }
    document
      .querySelectorAll(".answer-btn")
      .forEach((btn) => btn.addEventListener("click", answerHandler));
    questionIndex++;
  }
}

function answerHandler() {
  if (this.textContent === questions[questionIndex - 1].answer) {
    counter++;
  }
  answerOptions.innerHTML = "";
  correctCount.textContent = counter;
  displayNextQuestion();
}

function displayGameOverModal() {
  document.body.innerHTML = "";
  let modal = document.createElement("div");
  modal.className = "modal";
  let result = "Excellent! You are a Harry Potter expert"
  if (counter < 10) result = "Well done";
  if (counter < 7) result = "That's not bad!"
  if (counter < 4) result = "That's poor..."
  modal.innerHTML = `
    <h2>${result}</h2>
    <p>You answered ${counter} questions correctly out of 10.</p>
    <button id="reset-btn"><a href="index.html">Try again</a></button>
  `;
  document.body.append(modal);
}

startButton.addEventListener("click", startQuiz);
