// Quiz Questions
const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Tool Multi Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript"
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<css>", "<link>", "<style>", "<script>"],
    answer: "<link>"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Display Object Management", "Digital Ordinance Model", "Desktop Oriented Model"],
    answer: "Document Object Model"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flask"],
    answer: "React"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "font", "styles"],
    answer: "style"
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    answer: "// comment"
  },
  {
    question: "Which symbol is used for ID selector in CSS?",
    options: [".", "#", "*", "@"],
    answer: "#"
  },
  {
    question: "What is the correct syntax for a function in JavaScript?",
    options: ["function myFunction()", "function = myFunction()", "create myFunction()", "def myFunction()"],
    answer: "function myFunction()"
  }
];

// Render Questions
const quizForm = document.getElementById("quizForm");

questions.forEach((q, i) => {
  const questionBlock = document.createElement("div");
  questionBlock.innerHTML = `<label class="quiz-question-label">${i + 1}. ${q.question}</label>`;
q.options.forEach(option => {
  const input = document.createElement("input");
  input.type = "radio";
  input.name = `q${i}`;
  input.value = option;

  const label = document.createElement("label");
  label.className = "quiz-option-label";
  label.appendChild(input);
  label.append(` ${option}`);

  questionBlock.appendChild(label);
});


  quizForm.appendChild(questionBlock);
});

// Handle Quiz Submission
document.getElementById("submitQuiz").addEventListener("click", () => {
  let score = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  const resultText = `You scored ${score} out of ${questions.length}`;
  document.getElementById("quizResult").textContent = resultText;

  // Save to localStorage
  localStorage.setItem("lastScore", resultText);
  displayLastScore();
});

// Display last score
function displayLastScore() {
  const saved = localStorage.getItem("lastScore");
  if (saved) {
    document.getElementById("lastScore").textContent = `Last Score: ${saved}`;
  }
}
displayLastScore();

// Joke API Integration
document.getElementById("getJoke").addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("jokeDisplay").textContent = data.joke;
    })
    .catch(() => {
      document.getElementById("jokeDisplay").textContent = "Oops! Couldn't fetch a joke. Try again!";
    });
});
